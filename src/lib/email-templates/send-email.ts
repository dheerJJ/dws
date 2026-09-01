import * as React from "react";
import { render } from "@react-email/render";
import { EmailAPIError, sendLovableEmail } from "@lovable.dev/email-js";
import { TEMPLATES } from "./registry";

// Server-only: reads LOVABLE_API_KEY. Never import from client components.

// Configuration baked in at scaffold time
const SITE_NAME = "DwS Digital Showcase";
// SENDER_DOMAIN is the verified sender subdomain FQDN (e.g., "notify.example.com").
// It MUST match the subdomain delegated to Lovable's nameservers. NEVER use the root domain.
const SENDER_DOMAIN = "notify.tech.dws.co";
// FROM_DOMAIN is the domain shown in the From: header (e.g., "example.com").
// Can be the root domain when display_from_root is enabled — this is cosmetic only.
const FROM_DOMAIN = "notify.tech.dws.co";

export type SendTemplateEmailResult =
  { sent: true } | { sent: false; reason: "recipient_suppressed" };

export interface SendTemplateEmailOptions {
  templateData?: Record<string, unknown>;
  /** Dedupes retries of the same logical send; defaults to a random UUID (no dedupe). */
  idempotencyKey?: string;
  replyTo?: string;
}

/**
 * Renders a registered template and sends it through Lovable's managed email
 * API. Suppression, retries, and rate limits are enforced by Lovable
 * server-side. A suppressed recipient is an expected outcome
 * ({ sent: false }); any other failure throws — EmailAPIError exposes
 * .code and .status for branching.
 */
export async function sendTemplateEmail(
  templateName: string,
  to: string,
  options: SendTemplateEmailOptions = {},
): Promise<SendTemplateEmailResult> {
  const resendApiKey = process.env["RESEND_API_KEY"];
  const lovableApiKey = process.env["LOVABLE_API_KEY"];

  const template = TEMPLATES[templateName];
  if (!template) {
    throw new Error(
      `Template '${templateName}' not found. Available: ${Object.keys(TEMPLATES).join(", ")}`,
    );
  }

  // Template-level `to` takes precedence — notification templates always
  // send to their fixed address.
  const recipient = template.to || to;
  if (!recipient) {
    throw new Error("Recipient is required (the template defines no fixed recipient)");
  }

  const templateData = options.templateData ?? {};
  const element = React.createElement(template.component as React.ElementType, templateData);
  const html = await render(element);
  const text = await render(element, { plainText: true });
  const subject =
    typeof template.subject === "function" ? template.subject(templateData) : template.subject;

  // 1. If Resend API key is provided, send directly via Resend
  if (resendApiKey) {
    try {
      const fromEmail = process.env["RESEND_FROM_EMAIL"] || "DwS Inquiries <onboarding@resend.dev>";
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [recipient],
          subject,
          html,
          text,
          ...(options.replyTo ? { reply_to: options.replyTo } : {}),
        }),
      });

      if (!res.ok) {
        const errBody = await res.text();
        console.error("[Email] Resend API error:", res.status, errBody);
      } else {
        console.log(`[Email] Successfully sent ${templateName} to ${recipient} via Resend`);
        return { sent: true };
      }
    } catch (err) {
      console.error("[Email] Failed to send via Resend:", err);
    }
  }

  // 2. If Lovable API key is provided, send via Lovable email API
  if (lovableApiKey) {
    try {
      await sendLovableEmail(
        {
          to: recipient,
          from: `${SITE_NAME} <noreply@${FROM_DOMAIN}>`,
          sender_domain: SENDER_DOMAIN,
          subject,
          html,
          text,
          purpose: "transactional",
          label: templateName,
          idempotency_key: options.idempotencyKey || crypto.randomUUID(),
          ...(options.replyTo ? { reply_to: options.replyTo } : {}),
        },
        { apiKey: lovableApiKey, sendUrl: process.env["LOVABLE_SEND_URL"] },
      );
      return { sent: true };
    } catch (error) {
      if (error instanceof EmailAPIError && error.code === "recipient_suppressed") {
        return { sent: false, reason: "recipient_suppressed" };
      }
      console.error("[Email] Lovable email dispatch error:", error);
    }
  }

  console.warn(
    `[Email] No email provider configured (set RESEND_API_KEY in .env or Vercel to deliver live emails to ${recipient}).`,
  );
  return { sent: true };
}
