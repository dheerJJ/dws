import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

const ADMIN_EMAIL = "tech.dws.co@gmail.com";

export type EnquiryReply = {
  id: string;
  body: string;
  email_status: string;
  created_at: string;
};

export type Enquiry = {
  id: string;
  name: string;
  email: string;
  company: string | null;
  budget: string | null;
  message: string;
  status: string;
  created_at: string;
  replies: EnquiryReply[];
};

/**
 * Grants the admin role to the signed-in account when its verified email is the
 * agency inbox. Safe to call on every dashboard load — it is a no-op otherwise.
 */
export const ensureAdmin = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { supabase, userId, claims } = context;

    const { data: alreadyAdmin } = await supabase.rpc("has_role", {
      _user_id: userId,
      _role: "admin",
    });
    if (alreadyAdmin) return { isAdmin: true as const };

    const email = String((claims as { email?: string } | null)?.email ?? "").toLowerCase();
    if (email !== ADMIN_EMAIL) return { isAdmin: false as const };

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin
      .from("user_roles")
      .upsert({ user_id: userId, role: "admin" }, { onConflict: "user_id,role" });
    if (error) {
      console.error("admin role grant failed", error);
      return { isAdmin: false as const };
    }
    return { isAdmin: true as const };
  });

export const listEnquiries = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }): Promise<{ isAdmin: boolean; enquiries: Enquiry[] }> => {
    const { supabase, userId } = context;

    const { data: isAdmin } = await supabase.rpc("has_role", {
      _user_id: userId,
      _role: "admin",
    });
    if (!isAdmin) return { isAdmin: false, enquiries: [] };

    const { data, error } = await supabase
      .from("contact_enquiries")
      .select("id, name, email, company, budget, message, status, created_at")
      .order("created_at", { ascending: false });
    if (error) throw new Error(error.message);

    const ids = (data ?? []).map((row) => row.id);
    let repliesByEnquiry: Record<string, EnquiryReply[]> = {};
    if (ids.length > 0) {
      const { data: replies, error: replyError } = await supabase
        .from("enquiry_replies")
        .select("id, enquiry_id, body, email_status, created_at")
        .in("enquiry_id", ids)
        .order("created_at", { ascending: true });
      if (replyError) throw new Error(replyError.message);
      repliesByEnquiry = (replies ?? []).reduce<Record<string, EnquiryReply[]>>((acc, r) => {
        const list = acc[r.enquiry_id] ?? [];
        list.push({
          id: r.id,
          body: r.body,
          email_status: r.email_status,
          created_at: r.created_at,
        });
        acc[r.enquiry_id] = list;
        return acc;
      }, {});
    }

    return {
      isAdmin: true,
      enquiries: (data ?? []).map((row) => ({
        ...row,
        replies: repliesByEnquiry[row.id] ?? [],
      })),
    };
  });

const replySchema = z.object({
  enquiryId: z.string().uuid(),
  body: z.string().trim().min(5).max(5000),
});

export const replyToEnquiry = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data: unknown) => replySchema.parse(data))
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context;

    const { data: isAdmin } = await supabase.rpc("has_role", {
      _user_id: userId,
      _role: "admin",
    });
    if (!isAdmin) throw new Error("Forbidden");

    const { data: enquiry, error: readError } = await supabase
      .from("contact_enquiries")
      .select("id, name, email, message")
      .eq("id", data.enquiryId)
      .single();
    if (readError || !enquiry) throw new Error("Enquiry not found");

    let emailStatus = "sent";
    try {
      const { sendTemplateEmail } = await import("@/lib/email-templates/send-email");
      const result = await sendTemplateEmail("enquiry-reply", enquiry.email, {
        templateData: {
          name: enquiry.name.split(" ")[0] || enquiry.name,
          reply: data.body,
          originalMessage: enquiry.message,
        },
        idempotencyKey: `enquiry-reply-${enquiry.id}-${Date.now()}`,
        replyTo: "tech.dws.co@gmail.com",
      });
      if (!result.sent) emailStatus = result.reason;
    } catch (error) {
      console.error("enquiry reply email failed", error);
      emailStatus = "failed";
    }

    const { error: insertError } = await supabase.from("enquiry_replies").insert({
      enquiry_id: enquiry.id,
      author_id: userId,
      body: data.body,
      email_status: emailStatus,
    });
    if (insertError) throw new Error(insertError.message);

    await supabase
      .from("contact_enquiries")
      .update({ status: "replied", updated_at: new Date().toISOString() })
      .eq("id", enquiry.id);

    return { emailStatus };
  });

const statusSchema = z.object({
  enquiryId: z.string().uuid(),
  status: z.enum(["new", "replied", "archived"]),
});

export const setEnquiryStatus = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data: unknown) => statusSchema.parse(data))
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context;
    const { data: isAdmin } = await supabase.rpc("has_role", {
      _user_id: userId,
      _role: "admin",
    });
    if (!isAdmin) throw new Error("Forbidden");

    const { error } = await supabase
      .from("contact_enquiries")
      .update({ status: data.status, updated_at: new Date().toISOString() })
      .eq("id", data.enquiryId);
    if (error) throw new Error(error.message);
    return { ok: true as const };
  });
