// Edit this file to swap in your real copy, projects, team and pricing.

import shreeradheThumb from "@/assets/projects/shreeradhe.jpg.asset.json";
import dheerajjThumb from "@/assets/projects/dheerajj-portfolio.jpg.asset.json";
import rudraBhumiThumb from "@/assets/projects/rudra-bhumi.jpg.asset.json";
import linksnapThumb from "@/assets/projects/linksnap.jpg.asset.json";

export type Project = {
  name: string;
  tag: string;
  description: string;
  type: string;
  url: string;
  thumb: string;
};

export const projects: Project[] = [
  {
    name: "Shree Radhe Dental Hospital",
    tag: "SRDH",
    description:
      "A warm, trust-first website for a Jaipur dental hospital — services, doctor profiles and a clear booking path built around 'Creating Beautiful Smiles Everyday'.",
    type: "Healthcare Website",
    url: "https://shreeradhe.vercel.app",
    thumb: shreeradheThumb.url,
  },
  {
    name: "Dheerajj Portfolio",
    tag: "DJK",
    description:
      "A personal portfolio site built for a founder and growth strategist — case studies, skills and a contact path in one focused experience.",
    type: "Portfolio Website",
    url: "https://dheerajjj-portfolio.vercel.app",
    thumb: dheerajjThumb.url,
  },
  {
    name: "Rudra Bhumi Realtors",
    tag: "RBR",
    description:
      "A conversion-focused site for a Jaipur luxury real estate agency covering property sales, land leasing, rentals and property management.",
    type: "Real Estate Website",
    url: "https://rudra-bhumi.vercel.app",
    thumb: rudraBhumiThumb.url,
  },
  {
    name: "LinkSnap",
    tag: "LSN",
    description:
      "A modern URL shortener with real-time analytics, vector QR codes, password-protected links and custom aliases — built for fast sharing and tracking.",
    type: "SaaS Product",
    url: "https://linksnap-one.vercel.app",
    thumb: linksnapThumb.url,
  },
];

export type TeamMember = { name: string; role: string; initials: string; bio: string };

export const team: TeamMember[] = [
  {
    name: "Dheerajj Kumawat",
    role: "Founder & Growth Strategist",
    initials: "DK",
    bio: "Leads strategy across every DwS engagement, translating business goals into measurable acquisition roadmaps.",
  },
  {
    name: "Creative Lead",
    role: "Design & Brand",
    initials: "CL",
    bio: "Owns identity, art direction and the design systems behind every DwS website and campaign.",
  },
  {
    name: "Performance Lead",
    role: "Paid Media",
    initials: "PL",
    bio: "Runs paid search and social, from creative testing frameworks to budget scaling decisions.",
  },
  {
    name: "Engineering Lead",
    role: "Web & Analytics",
    initials: "EL",
    bio: "Builds fast, accessible front-ends and the tracking layer that makes performance provable.",
  },
];

export type Testimonial = { quote: string; author: string; role: string };

export const testimonials: Testimonial[] = [
  {
    quote:
      "DwS rebuilt our site and our pipeline in the same quarter. The work was fast, the reporting was honest, and the numbers moved.",
    author: "Operations Director",
    role: "B2B SaaS platform",
  },
  {
    quote:
      "They treat marketing like engineering. Every test had a hypothesis, and we finally understood where revenue was coming from.",
    author: "Founder",
    role: "DTC wellness brand",
  },
  {
    quote:
      "The most senior team we've worked with at this size. No hand-offs to juniors, no vanity dashboards.",
    author: "Head of Growth",
    role: "Fintech app",
  },
];

export type Tier = {
  name: string;
  price: string;
  cadence: string;
  summary: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

export const tiers: Tier[] = [
  {
    name: "Starter",
    price: "₹6,999",
    cadence: "per month",
    summary: "For founders who need a clean presence and a first working acquisition channel.",
    features: [
      "Landing page or 5-page website",
      "One paid channel managed",
      "Technical SEO foundations",
      "Monthly performance report",
      "Email support",
    ],
    cta: "Start with Starter",
  },
  {
    name: "Growth",
    price: "₹15,999",
    cadence: "per month",
    summary: "For teams with product-market fit that need compounding, measurable growth.",
    features: [
      "Full website build + ongoing CRO",
      "Two to three paid channels",
      "SEO content programme (4 pieces/mo)",
      "Conversion tracking + dashboard",
      "Bi-weekly strategy calls",
    ],
    cta: "Scale with Growth",
    featured: true,
  },
  {
    name: "Scale",
    price: "₹35,999",
    cadence: "per month",
    summary: "A senior embedded growth team for brands spending seriously on acquisition.",
    features: [
      "Dedicated strategist, designer, engineer",
      "Unlimited channel management",
      "Creative studio for ads and landing pages",
      "Lifecycle, email and retention",
      "Weekly reporting and quarterly planning",
    ],
    cta: "Talk about Scale",
  },
];
