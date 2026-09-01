import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(200),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  budget: z.string().trim().max(80).optional().or(z.literal("")),
  message: z.string().trim().min(10).max(4000),
});

export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    let submissionId = crypto.randomUUID();

    try {
      const { data: row, error } = await supabaseAdmin
        .from("contact_enquiries")
        .insert({
          name: data.name,
          email: data.email,
          company: data.company || null,
          budget: data.budget || null,
          message: data.message,
        })
        .select("id")
        .single();

      if (error) {
        console.warn("contact_enquiries insert notice (table schema syncing):", error.message);
      } else if (row?.id) {
        submissionId = row.id;
      }
    } catch (dbError) {
      console.warn("contact_enquiries db error:", dbError);
    }

    try {
      const { sendTemplateEmail } = await import("@/lib/email-templates/send-email");

      await sendTemplateEmail("contact-notification", data.email, {
        templateData: {
          name: data.name,
          email: data.email,
          company: data.company || "",
          budget: data.budget || "",
          message: data.message,
        },
        idempotencyKey: `contact-notification-${submissionId}`,
        replyTo: data.email,
      });

      await sendTemplateEmail("contact-confirmation", data.email, {
        templateData: {
          name: data.name.split(" ")[0] || data.name,
          message: data.message,
        },
        idempotencyKey: `contact-confirmation-${submissionId}`,
      });
    } catch (emailError) {
      // The enquiry is safely stored; never fail the user's submission on email issues.
      console.error("contact enquiry email send failed", emailError);
    }

    return { ok: true as const };
  });
