import * as React from "react";
import { render } from "@react-email/render";
import { TEMPLATES } from "./registry";

// Server-only: reads env vars. Never import from client components.

const SITE_NAME = "DwS Web Services";

export type SendTemplateEmailResult =
  { sent: true } | { sent: false; reason: "recipient_suppressed" };

export interface SendTemplateEmailOptions {
  templateData?: Record<string, unknown>;
  /** Dedupes retries of the same logical send; defaults to a random UUID (no dedupe). */
  idempotencyKey?: string;
  replyTo?: string;
}

/**
 * Renders a registered React Email template and sends it via the first
 * available provider:
 *   1. Gmail SMTP (Nodemailer) — GMAIL_USER + GMAIL_APP_PASSWORD
 *   2. Resend API — RESEND_API_KEY
 *   3. Lovable Email API — LOVABLE_API_KEY
 *
 * Throws on failure so calling code can handle errors in its own boundary.
 */
export async function sendTemplateEmail(
  templateName: string,
  to: string,
  options: SendTemplateEmailOptions = {},
): Promise<SendTemplateEmailResult> {
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

  // ── Provider 1: Gmail SMTP via Nodemailer ─────────────────────────────
  const gmailUser = process.env["GMAIL_USER"];
  const gmailAppPassword = process.env["GMAIL_APP_PASSWORD"];

  if (gmailUser && gmailAppPassword) {
    try {
      const nodemailer = await import("nodemailer");
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: gmailUser,
          pass: gmailAppPassword,
        },
      });

      await transporter.sendMail({
        from: `${SITE_NAME} <${gmailUser}>`,
        to: recipient,
        subject,
        html,
        text,
        ...(options.replyTo ? { replyTo: options.replyTo } : {}),
      });

      console.log(`[Email] Successfully sent "${templateName}" to ${recipient} via Gmail SMTP`);
      return { sent: true };
    } catch (err) {
      console.error(`[Email] Gmail SMTP failed for "${templateName}" to ${recipient}:`, err);
      throw err;
    }
  }

  // ── Provider 2: Resend API ────────────────────────────────────────────
  const resendApiKey = process.env["RESEND_API_KEY"];

  if (resendApiKey) {
    const fromEmail = process.env["RESEND_FROM_EMAIL"] || `${SITE_NAME} <onboarding@resend.dev>`;
    try {
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
        console.error(
          `[Email] Resend API error for "${templateName}" to ${recipient}:`,
          res.status,
          errBody,
        );
        throw new Error(`Resend API returned ${res.status}: ${errBody}`);
      }

      console.log(`[Email] Successfully sent "${templateName}" to ${recipient} via Resend`);
      return { sent: true };
    } catch (err) {
      console.error(`[Email] Failed to send "${templateName}" to ${recipient} via Resend:`, err);
      throw err;
    }
  }

  // ── Provider 3: Lovable Email API ─────────────────────────────────────
  const lovableApiKey = process.env["LOVABLE_API_KEY"];

  if (lovableApiKey) {
    try {
      const { sendLovableEmail, EmailAPIError } = await import("@lovable.dev/email-js");
      await sendLovableEmail(
        {
          to: recipient,
          from: `${SITE_NAME} <noreply@notify.tech.dws.co>`,
          sender_domain: "notify.tech.dws.co",
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
      const { EmailAPIError } = await import("@lovable.dev/email-js");
      if (error instanceof EmailAPIError && error.code === "recipient_suppressed") {
        return { sent: false, reason: "recipient_suppressed" };
      }
      console.error("[Email] Lovable email dispatch error:", error);
      throw error;
    }
  }

  // ── No provider configured ────────────────────────────────────────────
  console.error(
    `[Email] No email provider configured. Set GMAIL_USER + GMAIL_APP_PASSWORD, ` +
    `or RESEND_API_KEY, or LOVABLE_API_KEY to deliver emails to ${recipient}.`,
  );
  throw new Error("No email provider configured");
}
