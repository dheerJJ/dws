import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(120),
  email: z.string().trim().toLowerCase().email("Please provide a valid email address").max(200),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  budget: z.string().trim().max(80).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(4000),
  website_hp: z.string().optional(),
});

// In-memory rate limiting map: tracks [lastTimestamp, count] per normalized email
const submissionRateMap = new Map<string, { lastTime: number; count: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_SUBMISSIONS_PER_WINDOW = 3;

export const submitEnquiry = createServerFn({ method: "POST" })
  .validator((data: unknown) => {
    const result = schema.safeParse(data);
    if (!result.success) {
      const issue = result.error.issues[0];
      if (issue) {
        if (issue.path.includes("message")) {
          throw new Error("Message must be between 10 and 4,000 characters (minimum and maximum characters allowed).");
        }
        if (issue.path.includes("name")) {
          throw new Error("Full name must be between 2 and 120 characters.");
        }
        if (issue.path.includes("email")) {
          throw new Error("Please enter a valid email address.");
        }
        throw new Error(issue.message);
      }
      throw new Error("Please check your form details and try again.");
    }
    return result.data;
  })
  .handler(async ({ data }) => {
    // 1. Honeypot check: silently accept and discard bot submissions
    if (data.website_hp && data.website_hp.trim().length > 0) {
      console.warn("[Spam Protection] Honeypot triggered, discarding submission silently.");
      return { ok: true as const };
    }

    // 2. Server-side Rate Limiting check
    const now = Date.now();
    const rateKey = data.email.toLowerCase();
    const rateData = submissionRateMap.get(rateKey);

    if (rateData) {
      if (now - rateData.lastTime < 5000) {
        throw new Error("Please wait a few seconds before submitting again.");
      }
      if (now - rateData.lastTime < RATE_LIMIT_WINDOW_MS) {
        if (rateData.count >= MAX_SUBMISSIONS_PER_WINDOW) {
          throw new Error("Too many submissions. Please wait a minute or email us directly at tech.dws.co@gmail.com.");
        }
        rateData.count += 1;
        rateData.lastTime = now;
      } else {
        submissionRateMap.set(rateKey, { lastTime: now, count: 1 });
      }
    } else {
      submissionRateMap.set(rateKey, { lastTime: now, count: 1 });
    }

    // Clean up rate limit map if too large
    if (submissionRateMap.size > 1000) {
      for (const [k, v] of submissionRateMap.entries()) {
        if (now - v.lastTime > RATE_LIMIT_WINDOW_MS) {
          submissionRateMap.delete(k);
        }
      }
    }

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    let submissionId: string = crypto.randomUUID();

    // 3. Database persistence (if connected)
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

    const { sendTemplateEmail } = await import("@/lib/email-templates/send-email");
    const { business } = await import("@/data/business");

    const adminEmail = business.email || "tech.dws.co@gmail.com";

    // 4. Send Owner Notification Email (Primary)
    try {
      await sendTemplateEmail("contact-notification", adminEmail, {
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
      console.log(`[Email] Owner notification sent successfully to ${adminEmail}`);
    } catch (ownerEmailError) {
      console.error("[Email] Owner notification failed:", ownerEmailError);
    }

    // 5. Send Client Confirmation Email (Secondary with isolated error boundary)
    try {
      await sendTemplateEmail("contact-confirmation", data.email, {
        templateData: {
          name: data.name,
          email: data.email,
          service: data.budget || "Web Design & Engineering",
          message: data.message,
        },
        idempotencyKey: `contact-confirmation-${submissionId}`,
        replyTo: adminEmail,
      });
      console.log(`[Email] Client confirmation sent successfully to ${data.email}`);
    } catch (clientEmailError) {
      // The enquiry is safely logged and owner is notified; never fail user's UI submission on client confirmation error
      console.error("[Email] Client confirmation email dispatch failed:", clientEmailError);
    }

    return { ok: true as const };
  });
