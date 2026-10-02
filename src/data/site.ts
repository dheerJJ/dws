// Edit this file to swap in your real copy, projects, team and pricing.

import shreeradheThumb from "@/assets/projects/shreeradhe.jpg.asset.json";
import dheerajjThumb from "@/assets/projects/dheerajj-portfolio.jpg.asset.json";
import rudraBhumiThumb from "@/assets/projects/rudra-bhumi.jpg.asset.json";
import linksnapThumb from "@/assets/projects/linksnap.jpg.asset.json";
import agneepathThumb from "@/assets/projects/agneepath.jpg.asset.json";
import priyasArtBeautyThumb from "@/assets/projects/priyas-art-beauty.jpg.asset.json";

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
      "A warm, trust-first website for a Jaipur dental hospital - services, doctor profiles and a clear booking path built around 'Creating Beautiful Smiles Everyday'.",
    type: "Healthcare Website",
    url: "https://shreeradhe.vercel.app",
    thumb: shreeradheThumb.url,
  },
  {
    name: "Agneepath Defence Academy",
    tag: "ADBA",
    description:
      "A high-impact admissions portal for a Jaipur residential defence academy - course pathways, physical training routines, and instant demo enquiry flows.",
    type: "Education & Academy Website",
    url: "https://agneepathdefence.vercel.app",
    thumb: agneepathThumb.url,
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
    name: "Priya's Art Beauty & Makeup Academy",
    tag: "PABM",
    description:
      "A custom billing and salon management web application with instant WhatsApp invoice generation, service catalogs, customer tracking, and revenue reports.",
    type: "SaaS & Web App",
    url: "https://priya-s-art-beauty.vercel.app",
    thumb: priyasArtBeautyThumb.url,
  },
  {
    name: "LinkSnap",
    tag: "LSN",
    description:
      "A modern URL shortener with real-time analytics, vector QR codes, password-protected links and custom aliases - built for fast sharing and tracking.",
    type: "SaaS Product",
    url: "https://linksnap-one.vercel.app",
    thumb: linksnapThumb.url,
  },
  {
    name: "Dheerajj Portfolio",
    tag: "DJK",
    description:
      "A personal portfolio site built for a founder and growth strategist - case studies, skills and a contact path in one focused experience.",
    type: "Portfolio Website",
    url: "https://dheerajjj-portfolio.vercel.app",
    thumb: dheerajjThumb.url,
  },
];

export type TeamMember = { name: string; role: string; initials: string; bio: string };

export const team: TeamMember[] = [
  {
    name: "Dheerajj Kumawat",
    role: "Founder & Technical Lead",
    initials: "DK",
    bio: "Directly leads strategy and architecture across every engagement, from technical SEO to front-end engineering.",
  },
  {
    name: "Design & Brand Practice",
    role: "UI/UX & Design Systems",
    initials: "DS",
    bio: "Creates clean identity, art direction, and design systems built for high conversion without visual clutter.",
  },
  {
    name: "Growth & Performance",
    role: "Paid Media & Analytics",
    initials: "GP",
    bio: "Operates paid search, social campaigns, and data tracking infrastructure with end-to-end attribution.",
  },
  {
    name: "Engineering & Technical SEO",
    role: "Full-Stack Development",
    initials: "ET",
    bio: "Develops clean, sub-second web applications, robust APIs, and search-optimized schema infrastructure.",
  },
];

export type Testimonial = { quote: string; author: string; role: string };

export const testimonials: Testimonial[] = [
  {
    quote: "[ADD REAL TESTIMONIAL - Client quote on website rebuild and conversion results]",
    author: "[Client Operations Director]",
    role: "Verified B2B Client",
  },
  {
    quote: "[ADD REAL TESTIMONIAL - Client review on performance marketing and lead attribution]",
    author: "[Client Founder]",
    role: "Verified Brand Partner",
  },
  {
    quote:
      "[ADD REAL TESTIMONIAL - Client feedback on senior engineer-led delivery and communication]",
    author: "[Client Growth Lead]",
    role: "Verified Tech Client",
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
    price: "₹18,999",
    cadence: "per month",
    summary:
      "For founders who need a clean presence, local search rankings, and a working acquisition channel.",
    features: [
      "Landing page or 5-page website architecture",
      "Local SEO and Google Business Profile setup",
      "Technical Core Web Vitals optimization",
      "Monthly ranking and conversion report",
      "Direct email support with 24h SLA",
    ],
    cta: "Start with Starter",
  },
  {
    name: "Growth",
    price: "₹34,999",
    cadence: "per month",
    summary:
      "For teams ready for multi-channel reach, ongoing conversion tuning, and technical compounding.",
    features: [
      "Full website build or redesign + ongoing CRO",
      "Multi-location local SEO and content cluster",
      "Conversion tracking dashboard and lead pipeline",
      "Bi-weekly engineering and strategy reviews",
      "Priority communication channel",
    ],
    cta: "Scale with Growth",
    featured: true,
  },
  {
    name: "Scale",
    price: "₹64,999",
    cadence: "per month",
    summary:
      "An embedded senior studio team delivering custom web apps, technical SEO, and rapid product sprints.",
    features: [
      "Dedicated senior engineer and designer capacity",
      "SaaS / web app features or mobile app support",
      "National technical SEO and programmatic pages",
      "Custom API integrations and database tuning",
      "Weekly strategy calls and priority SLA",
    ],
    cta: "Talk about Scale",
  },
];
