import type { ComponentType } from "react";

import { template as contactConfirmationTemplate } from "./contact-confirmation";
import { template as contactNotificationTemplate } from "./contact-notification";
import { template as enquiryReplyTemplate } from "./enquiry-reply";

export interface TemplateEntry {
  component: ComponentType<never>;
  subject: string | ((data: Record<string, unknown>) => string);
  displayName?: string;
  previewData?: Record<string, unknown>;
  /** Fixed recipient — overrides caller-provided recipientEmail when set. */
  to?: string;
}

/**
 * Template registry — maps template names to their React Email components.
 * Import and register new templates here after creating them in this directory.
 */
export const TEMPLATES: Record<string, TemplateEntry> = {
  "contact-notification": contactNotificationTemplate,
  "contact-confirmation": contactConfirmationTemplate,
  "enquiry-reply": enquiryReplyTemplate,
};
