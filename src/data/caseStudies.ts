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
  {
    slug: "agneepath-defence-academy",
    name: "Agneepath Defence Academy",
    client: "Agneepath Defence & Boxing Academy",
    sector: "Education & Defence Coaching",
    location: "Jaipur, Rajasthan",
    scope: ["Website architecture", "Course catalog structure", "Lead capture funnels", "Local SEO foundations"],
    before:
      "Student enrolments and demo enquiries depended entirely on physical flyers and word of mouth in local districts. Aspirants and parents searching online could not review the 10 course streams, physical training syllabus, or hostel facilities.",
    beforePoints: [
      "No digital presence for courses or syllabus details",
      "Parent enquiries handled manually without qualification",
      "Daily physical training and boxing coaching undocumented",
      "Zero search visibility for defence academy admissions in Jaipur",
    ],
    after:
      "A high-performance admissions platform presenting 10 specialized recruitment programs, daily physical training schedules, residential hostel details, and seamless demo booking paths on mobile.",
    afterPoints: [
      "Categorized course catalog across Army, Navy, Air Force, and School Entrance",
      "Interactive curriculum, physical test criteria, and facilities breakdown",
      "Prominent demo class booking and enquiry routing",
      "Fast, mobile-optimized experience with local SEO architecture",
    ],
    outcomes: [
      { label: "Course pathways structured", value: "10" },
      { label: "Enquiry channels", value: "Call + Demo Form" },
      { label: "Mobile performance", value: "Sub-2s" },
    ],
    quote: {
      text: "Parents and students now inspect the training regime, courses, and hostel facilities before reaching out. Admissions inquiries arrive informed and ready to enroll.",
      author: "Academy Director",
      role: "Agneepath Defence & Boxing Academy",
    },
    url: "https://agneepathdefence.vercel.app",
    thumb: thumbOf("Agneepath Defence Academy"),
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
    slug: "priyas-art-beauty-makeup-academy",
    name: "Priya's Art Beauty & Makeup Academy",
    client: "Priya's Art Beauty & Makeup Academy",
    sector: "Salon & Academy Management",
    location: "Jaipur, Rajasthan",
    scope: ["Custom ERP web app", "WhatsApp API billing", "Customer CRM", "Analytics dashboard"],
    before:
      "Daily salon operations and academy billing ran entirely on paper receipts and manual register entries. Customer visit histories were untracked, invoice delivery via WhatsApp had to be sent by hand, and calculating monthly service revenue took hours of manual tallying.",
    beforePoints: [
      "Paper-based billing prone to errors and lost records",
      "No unified customer database or visit history",
      "Manual WhatsApp messaging for every invoice",
      "Zero real-time visibility into daily revenue or top services",
    ],
    after:
      "A custom cloud billing and CRM web application that lets staff select services, apply discounts, issue itemized bills in seconds, and automatically dispatch invoices via WhatsApp.",
    afterPoints: [
      "Fast, touch-friendly billing interface for front-desk staff",
      "One-click automated WhatsApp invoice delivery",
      "Customer directory with complete spend and appointment history",
      "Real-time reports on daily revenue, payment methods, and staff performance",
    ],
    outcomes: [
      { label: "Billing workflow", value: "Under 30s" },
      { label: "Invoice delivery", value: "Automated WhatsApp" },
      { label: "Data security", value: "Cloud-backed" },
    ],
    quote: {
      text: "Billing now takes seconds instead of minutes, and clients receive professional WhatsApp invoices instantly. It transformed how our salon and academy operate daily.",
      author: "Founder",
      role: "Priya's Art Beauty & Makeup Academy",
    },
    url: "https://priya-s-art-beauty.vercel.app",
    thumb: thumbOf("Priya's Art Beauty & Makeup Academy"),
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
];
