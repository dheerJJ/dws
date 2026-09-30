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
  Text,
} from "@react-email/components";

import type { TemplateEntry } from "./registry";

interface ContactNotificationProps {
  name?: string;
  email?: string;
  company?: string;
  budget?: string;
  message?: string;
}

const main = {
  backgroundColor: "#000000",
  color: "#ffffff",
  fontFamily: "Inter, Helvetica, Arial, sans-serif",
};
const container = { padding: "32px 24px", maxWidth: "560px" };
const h1 = { color: "#ffffff", fontSize: "22px", fontWeight: 700, margin: "0 0 8px" };
const eyebrow = {
  color: "#888888",
  fontSize: "11px",
  letterSpacing: "0.18em",
  textTransform: "uppercase" as const,
  margin: "0 0 16px",
};
const label = { color: "#888888", fontSize: "12px", margin: "16px 0 2px" };
const value = { color: "#ffffff", fontSize: "15px", margin: 0, whiteSpace: "pre-wrap" as const };
const link = { color: "#ffffff", textDecoration: "underline" };
const hr = { borderColor: "#222222", margin: "24px 0" };
const footer = { color: "#666666", fontSize: "12px", margin: 0 };

export const ContactNotificationEmail = ({
  name = "Someone",
  email = "unknown@example.com",
  company,
  budget,
  message = "",
}: ContactNotificationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>{`New DwS enquiry from ${name}`}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={eyebrow}>DwS - New Enquiry</Text>
        <Heading style={h1}>{name} wants to talk</Heading>

        <Text style={label}>Email</Text>
        <Text style={value}>
          <Link href={`mailto:${email}`} style={link}>
            {email}
          </Link>
        </Text>

        {company ? (
          <>
            <Text style={label}>Company</Text>
            <Text style={value}>{company}</Text>
          </>
        ) : null}

        {budget ? (
          <>
            <Text style={label}>Monthly budget</Text>
            <Text style={value}>{budget}</Text>
          </>
        ) : null}

        <Text style={label}>Message</Text>
        <Text style={value}>{message}</Text>

        <Hr style={hr} />
        <Text style={footer}>Sent from the contact form on your DwS website.</Text>
      </Container>
    </Body>
  </Html>
);

export const template = {
  component: ContactNotificationEmail,
  subject: (data: Record<string, unknown>) => `New enquiry from ${data["name"] ?? "your website"}`,
  displayName: "Contact form notification",
  to: "tech.dws.co@gmail.com",
  previewData: {
    name: "Aarav Sharma",
    email: "aarav@example.com",
    company: "Nova Retail",
    budget: "₹15,999 – ₹35,999 / mo",
    message: "We want to scale paid social and fix our landing page conversion rate.",
  },
} satisfies TemplateEntry;
