// Real DwS client work. Swap in a real "before" screenshot by adding
// `beforeThumb` (an imported asset url) to any entry - the page will use it
// instead of the written before-state card.

import { projects } from "./site";

export type CaseStudy = {
  slug: string;
  name: string;
  client: string;
  sector: string;
  location: string;
  scope: string[];
  /** The state we started from, in plain words. */
  before: string;
  beforePoints: string[];
  /** What we shipped. */
  after: string;
  afterPoints: string[];
  outcomes: { label: string; value: string }[];
  quote: { text: string; author: string; role: string };
  url: string;
  thumb: string;
  beforeThumb?: string;
};

const thumbOf = (name: string) => projects.find((p) => p.name === name)?.thumb ?? "";

export const caseStudies: CaseStudy[] = [
  {
    slug: "shree-radhe-dental-hospital",
    name: "Shree Radhe Dental Hospital",
    client: "Shree Radhe Dental Hospital",
    sector: "Healthcare",
    location: "Jaipur, Rajasthan",
    scope: ["Website design", "Copy structure", "Local SEO foundations", "Enquiry flow"],
    before:
      "The hospital's reputation lived entirely offline - walk-ins, referrals and phone calls. Anyone searching for a dentist in Jaipur had no way to see the doctors, the treatments or the clinic itself before deciding.",
    beforePoints: [
      "No owned website - only third-party listings",
      "Treatments and doctor credentials undocumented online",
      "Appointments handled ad hoc over phone",
      "Nothing to rank for local dental searches",
    ],
    after:
      "A warm, trust-first website built around 'Creating Beautiful Smiles Everyday' - treatment pages, doctor profiles, clinic photography and one obvious path to book an appointment on mobile.",
    afterPoints: [
      "Treatment-wise pages patients can actually read",
      "Doctor profiles and credentials front and centre",
      "Tap-to-call and enquiry form on every screen",
      "Clean technical SEO base for Jaipur dental searches",
    ],
    outcomes: [
      { label: "Owned patient channel", value: "Live" },
      { label: "Mobile-first build", value: "100%" },
      { label: "Booking paths", value: "Call + form" },
    ],
    quote: {
      text: "Patients now arrive already knowing our doctors and treatments. The site does the explaining we used to do on the phone.",
      author: "Clinic Management",
      role: "Shree Radhe Dental Hospital",
    },
    url: "https://shreeradhe.vercel.app",
    thumb: thumbOf("Shree Radhe Dental Hospital"),
  },
  {
    slug: "rudra-bhumi-realtors",
    name: "Rudra Bhumi Realtors",
    client: "Rudra Bhumi Realtors",
    sector: "Real Estate",
    location: "Jaipur, Rajasthan",
    scope: ["Website design", "Service architecture", "Lead capture", "SEO foundations"],
    before:
      "A luxury property business running on WhatsApp forwards and word of mouth. Four distinct services - sales, land leasing, rentals and property management - were impossible for a buyer to tell apart.",
    beforePoints: [
      "Enquiries scattered across WhatsApp and calls",
      "No single place to present listings or services",
      "Premium positioning invisible to new buyers",
      "No qualification before the first conversation",
    ],
    after:
      "A conversion-focused site that separates each service line, presents the portfolio with the polish a luxury buyer expects, and qualifies enquiries before they reach the team.",
    afterPoints: [
      "Dedicated sections for sales, leasing, rentals, management",
      "Premium visual language matched to the price bracket",
      "Structured enquiry form that captures intent",
      "Fast, mobile-first pages for on-site browsing",
    ],
    outcomes: [
      { label: "Service lines clarified", value: "4" },
      { label: "Qualified enquiry flow", value: "Live" },
      { label: "Load target", value: "Sub-2s" },
    ],
    quote: {
      text: "The site finally looks like the properties we sell. Enquiries come in with context instead of a blank 'price?' message.",
      author: "Founder",
      role: "Rudra Bhumi Realtors",
    },
    url: "https://rudra-bhumi.vercel.app",
    thumb: thumbOf("Rudra Bhumi Realtors"),
  },
  {
    slug: "linksnap",
    name: "LinkSnap",
    client: "LinkSnap (DwS product)",
    sector: "SaaS",
    location: "India · Global users",
    scope: ["Product design", "Full-stack build", "Analytics", "Launch"],
    before:
      "An idea on a whiteboard: link shortening tools either hide analytics behind a paywall or ship an interface nobody enjoys using. There was no product, no schema and no users.",
    beforePoints: [
      "Zero code - concept stage only",
      "Analytics locked behind paid tiers elsewhere",
      "No QR or link-protection workflow in one place",
      "Unproven demand",
    ],
    after:
      "A shipped SaaS MVP: custom aliases, password-protected links, vector QR codes and real-time click analytics in a fast, clean dashboard.",
    afterPoints: [
      "Real-time click and referrer analytics",
      "Vector QR codes for print and packaging",
      "Password-protected and aliased links",
      "Shipped end to end as a working product",
    ],
    outcomes: [
      { label: "Concept to live MVP", value: "Shipped" },
      { label: "Core features", value: "4" },
      { label: "Analytics", value: "Real-time" },
    ],
    quote: {
      text: "We wanted an MVP that felt finished, not a prototype. It launched with analytics, QR and protection working on day one.",
      author: "Product Owner",
      role: "LinkSnap",
    },
    url: "https://linksnap-one.vercel.app",
    thumb: thumbOf("LinkSnap"),
  },
  {
    slug: "dheerajj-portfolio",
    name: "Dheerajj Portfolio",
    client: "Dheerajj Kumawat",
    sector: "Personal brand",
    location: "Jaipur, Rajasthan",
    scope: ["Positioning", "Website design", "Development"],
    before:
      "A growth strategist's credibility spread across chats, decks and screenshots. Prospects had no single link that proved the work.",
    beforePoints: [
      "No single professional link to share",
      "Case work stuck inside slide decks",
      "Positioning explained manually every time",
      "No contact path for inbound interest",
    ],
    after:
      "A focused personal portfolio: clear positioning, selected case work, skills and one direct contact path - the link that now opens every conversation.",
    afterPoints: [
      "One-line positioning above the fold",
      "Selected work presented as outcomes",
      "Skills and services in scannable blocks",
      "Direct contact route for inbound leads",
    ],
    outcomes: [
      { label: "Shareable proof link", value: "Live" },
      { label: "Pages", value: "Single-scroll" },
      { label: "Contact path", value: "Direct" },
    ],
    quote: {
      text: "One link now does the introduction, the proof and the pitch. It changed how quickly conversations get serious.",
      author: "Dheerajj Kumawat",
      role: "Founder & Growth Strategist",
    },
    url: "https://dheerajjj-portfolio.vercel.app",
    thumb: thumbOf("Dheerajj Portfolio"),
  },
];
