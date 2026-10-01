import * as React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

import type { TemplateEntry } from "./registry";

export interface ContactConfirmationProps {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
}

const main = {
  backgroundColor: "#000000",
  color: "#ffffff",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  margin: 0,
  padding: 0,
};

const container = {
  backgroundColor: "#0a0a0a",
  border: "1px solid #1f1f1f",
  borderRadius: "8px",
  margin: "32px auto",
  maxWidth: "580px",
  padding: "36px 28px",
};

const eyebrow = {
  color: "#888888",
  fontSize: "11px",
  fontWeight: 600,
  letterSpacing: "0.2em",
  textTransform: "uppercase" as const,
  margin: "0 0 14px 0",
};

const h1 = {
  color: "#ffffff",
  fontSize: "22px",
  fontWeight: 700,
  lineHeight: "30px",
  margin: "0 0 18px 0",
};

const paragraph = {
  color: "#cccccc",
  fontSize: "15px",
  lineHeight: "24px",
  margin: "0 0 16px 0",
};

const summaryCard = {
  backgroundColor: "#121212",
  border: "1px solid #242424",
  borderRadius: "6px",
  padding: "18px 20px",
  margin: "20px 0",
};

const summaryLabel = {
  color: "#888888",
  fontSize: "12px",
  fontWeight: 600,
  letterSpacing: "0.06em",
  textTransform: "uppercase" as const,
  margin: "0 0 4px 0",
};

const summaryValue = {
  color: "#f0f0f0",
  fontSize: "14px",
  lineHeight: "22px",
  margin: "0 0 14px 0",
  whiteSpace: "pre-wrap" as const,
};

const summaryValueLast = {
  color: "#f0f0f0",
  fontSize: "14px",
  lineHeight: "22px",
  margin: 0,
  whiteSpace: "pre-wrap" as const,
};

const contactBox = {
  backgroundColor: "#0e0e0e",
  borderLeft: "3px solid #ffffff",
  borderRadius: "0 4px 4px 0",
  padding: "14px 18px",
  margin: "20px 0",
};

const link = {
  color: "#ffffff",
  textDecoration: "underline",
  fontWeight: 600,
};

const hr = {
  borderColor: "#1f1f1f",
  margin: "28px 0 20px 0",
};

const footer = {
  color: "#666666",
  fontSize: "12px",
  lineHeight: "18px",
  margin: 0,
  textAlign: "center" as const,
};

/** Sanitize and strip unsafe control characters for defense-in-depth */
function sanitize(input: string | undefined): string {
  if (!input) return "";
  return input
    .replace(/[\u0000-\u0008\u000B-\u000C\u000E-\u001F]/g, "")
    .trim();
}

export const ContactConfirmationEmail = ({
  name = "there",
  service = "Web & App Engineering",
  message = "",
}: ContactConfirmationProps) => {
  const cleanName = sanitize(name) || "there";
  const cleanService = sanitize(service) || "Web & App Engineering";
  const cleanMessage = sanitize(message);

  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>We've received your inquiry - DwS Web Services</Preview>
      <Body style={main}>
        <Container style={container}>
          <Text style={eyebrow}>DwS Web Services</Text>
          <Heading style={h1}>We&apos;ve received your inquiry</Heading>

          <Text style={paragraph}>Hello {cleanName},</Text>

          <Text style={paragraph}>
            Thank you for reaching out to DwS Web Services. Your inquiry has been received and our
            technical lead is reviewing your project details.
          </Text>

          <Section style={summaryCard}>
            <Text style={summaryLabel}>Name</Text>
            <Text style={summaryValue}>{cleanName}</Text>

            <Text style={summaryLabel}>Service / Scope</Text>
            <Text style={summaryValue}>{cleanService}</Text>

            <Text style={summaryLabel}>Message</Text>
            <Text style={summaryValueLast}>
              {cleanMessage || "No additional message provided."}
            </Text>
          </Section>

          <Text style={paragraph}>
            We&apos;ll get back to you within <strong>24 hours</strong> (Mon-Sat, 10:00-19:00 IST)
            with clear next steps and scope options.
          </Text>

          <Section style={contactBox}>
            <Text style={{ ...paragraph, margin: "0 0 8px 0" }}>
              Need immediate assistance or want to share documents?
            </Text>
            <Text style={{ ...paragraph, margin: 0, fontSize: "14px" }}>
              WhatsApp:{" "}
              <Link href="https://wa.me/917850915862" style={link}>
                +91 78509 15862
              </Link>
              &nbsp;&nbsp;|&nbsp;&nbsp;Email:{" "}
              <Link href="mailto:tech.dws.co@gmail.com" style={link}>
                tech.dws.co@gmail.com
              </Link>
            </Text>
          </Section>

          <Hr style={hr} />

          <Text style={footer}>
            DwS Web Services, Jaipur, Rajasthan
            <br />
            Strategy first, design obsessed, measured on revenue.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export const template = {
  component: ContactConfirmationEmail,
  subject: "We've received your inquiry - DwS Web Services",
  displayName: "Contact form confirmation",
  previewData: {
    name: "Dheeraj Kumawat",
    service: "Website Design & Development",
    message: "We need a fast, high-converting website for our business in Jaipur.",
  },
} satisfies TemplateEntry;
