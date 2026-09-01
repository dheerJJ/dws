import * as React from "react";

import { Body, Container, Head, Heading, Hr, Html, Preview, Text } from "@react-email/components";

import type { TemplateEntry } from "./registry";

interface EnquiryReplyProps {
  name?: string;
  reply?: string;
  originalMessage?: string;
}

const main = {
  backgroundColor: "#000000",
  color: "#ffffff",
  fontFamily: "Inter, Helvetica, Arial, sans-serif",
};
const container = { padding: "32px 24px", maxWidth: "560px" };
const h1 = { color: "#ffffff", fontSize: "22px", fontWeight: 700, margin: "0 0 16px" };
const eyebrow = {
  color: "#888888",
  fontSize: "11px",
  letterSpacing: "0.18em",
  textTransform: "uppercase" as const,
  margin: "0 0 16px",
};
const text = {
  color: "#e6e6e6",
  fontSize: "15px",
  lineHeight: "24px",
  whiteSpace: "pre-wrap" as const,
  margin: "0 0 16px",
};
const quote = {
  color: "#999999",
  fontSize: "13px",
  lineHeight: "21px",
  borderLeft: "2px solid #333333",
  paddingLeft: "14px",
  whiteSpace: "pre-wrap" as const,
  margin: "0 0 16px",
};
const hr = { borderColor: "#222222", margin: "24px 0" };
const footer = { color: "#666666", fontSize: "12px", margin: 0 };

export const EnquiryReplyEmail = ({
  name = "there",
  reply = "",
  originalMessage = "",
}: EnquiryReplyProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>A reply from the DwS team</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={eyebrow}>DwS</Text>
        <Heading style={h1}>Hi {name},</Heading>
        <Text style={text}>{reply}</Text>
        {originalMessage ? (
          <>
            <Hr style={hr} />
            <Text style={footer}>Your original enquiry:</Text>
            <Text style={quote}>{originalMessage}</Text>
          </>
        ) : null}
        <Hr style={hr} />
        <Text style={footer}>
          DwS · Jaipur, Rajasthan, India · Reply to this email to continue the conversation.
        </Text>
      </Container>
    </Body>
  </Html>
);

export const template = {
  component: EnquiryReplyEmail,
  subject: "Re: your enquiry — DwS",
  displayName: "Enquiry reply",
  previewData: {
    name: "Aarav",
    reply: "Thanks for reaching out — here is how we would approach your paid social setup...",
    originalMessage: "We want to scale paid social and fix our landing page conversion rate.",
  },
} satisfies TemplateEntry;
