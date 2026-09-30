import * as React from "react";

import { Body, Container, Head, Heading, Hr, Html, Preview, Text } from "@react-email/components";

import type { TemplateEntry } from "./registry";

interface ContactConfirmationProps {
  name?: string;
  message?: string;
}

const main = {
  backgroundColor: "#000000",
  color: "#ffffff",
  fontFamily: "Inter, Helvetica, Arial, sans-serif",
};
const container = { padding: "32px 24px", maxWidth: "560px" };
const h1 = { color: "#ffffff", fontSize: "24px", fontWeight: 700, margin: "0 0 12px" };
const eyebrow = {
  color: "#888888",
  fontSize: "11px",
  letterSpacing: "0.18em",
  textTransform: "uppercase" as const,
  margin: "0 0 16px",
};
const text = { color: "#cccccc", fontSize: "15px", lineHeight: "24px", margin: "0 0 16px" };
const quote = {
  color: "#ffffff",
  fontSize: "14px",
  lineHeight: "22px",
  borderLeft: "2px solid #333333",
  paddingLeft: "14px",
  whiteSpace: "pre-wrap" as const,
  margin: "0 0 16px",
};
const hr = { borderColor: "#222222", margin: "24px 0" };
const footer = { color: "#666666", fontSize: "12px", margin: 0 };

export const ContactConfirmationEmail = ({
  name = "there",
  message = "",
}: ContactConfirmationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>We received your enquiry - DwS</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={eyebrow}>DwS</Text>
        <Heading style={h1}>Thanks, {name} - we've got it.</Heading>
        <Text style={text}>
          Your enquiry landed with our team. You'll hear back within one business day with next
          steps and a slot for a 30-minute strategy call.
        </Text>
        {message ? (
          <>
            <Text style={text}>Here's what you sent us:</Text>
            <Text style={quote}>{message}</Text>
          </>
        ) : null}
        <Text style={text}>The DwS team</Text>
        <Hr style={hr} />
        <Text style={footer}>
          You're getting this because you submitted the contact form on the DwS website.
        </Text>
      </Container>
    </Body>
  </Html>
);

export const template = {
  component: ContactConfirmationEmail,
  subject: "We received your enquiry - DwS",
  displayName: "Contact form confirmation",
  previewData: {
    name: "Aarav",
    message: "We want to scale paid social and fix our landing page conversion rate.",
  },
} satisfies TemplateEntry;
