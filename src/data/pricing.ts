// Detailed service pricing. Each entry becomes a page at /pricing/<slug>.

export type Package = {
  name: string;
  price: string;
  cadence: string;
  summary: string;
  timeline: string;
  features: string[];
  featured?: boolean;
};

export type ServicePricing = {
  slug: string;
  name: string;
  navLabel: string;
  eyebrow: string;
  headline: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  startsAt: string;
  packages: Package[];
  addons: { name: string; price: string }[];
  includes: string[];
  faqs: { q: string; a: string }[];
};

export const servicePricing: ServicePricing[] = [
  {
    slug: "website-design",
    name: "Website Design & Development",
    navLabel: "Website Design",
    eyebrow: "One-time project pricing",
    headline: "Websites built to convert, not just to launch.",
    intro:
      "Design, copy direction, development and analytics in one engagement. Fixed scope, fixed price, no hourly surprises.",
    startsAt: "₹24,999",
    metaTitle: "Website Design & Development Pricing in India — DwS",
    metaDescription:
      "Transparent website design and development packages from ₹24,999. Landing pages, business websites and custom builds with CRO, SEO foundations and analytics included.",
    packages: [
      {
        name: "Launch",
        price: "₹24,999",
        cadence: "one-time",
        summary: "A single high-converting landing page for one offer or campaign.",
        timeline: "7–10 days",
        features: [
          "1 conversion-focused landing page",
          "Custom design, no templates",
          "Copy structure and CTA framework",
          "Mobile-first, sub-2s load target",
          "Enquiry form + WhatsApp path",
          "Basic analytics and event tracking",
        ],
      },
      {
        name: "Business",
        price: "₹64,999",
        cadence: "one-time",
        summary: "A complete 6–8 page website for an established service business.",
        timeline: "3–4 weeks",
        featured: true,
        features: [
          "Up to 8 pages incl. service pages",
          "Full design system and component library",
          "On-page SEO and schema markup",
          "Blog / content section with CMS data layer",
          "Conversion tracking dashboard",
          "2 rounds of revisions + 30 days support",
        ],
      },
      {
        name: "Custom",
        price: "₹1,49,999+",
        cadence: "one-time",
        summary: "Multi-template, multi-language or integration-heavy builds.",
        timeline: "6–10 weeks",
        features: [
          "Unlimited pages and templates",
          "Bookings, payments or portal integrations",
          "Multi-language / multi-city architecture",
          "Performance and accessibility audit",
          "Content migration handled by us",
          "90 days post-launch support",
        ],
      },
    ],
    addons: [
      { name: "Extra page (design + build)", price: "₹4,999 / page" },
      { name: "Copywriting, per page", price: "₹3,499 / page" },
      { name: "Logo and brand refresh", price: "₹19,999" },
      { name: "Care plan: updates, backups, monitoring", price: "₹4,999 / month" },
    ],
    includes: [
      "Senior designer and engineer on every project",
      "Core Web Vitals passed before handover",
      "Analytics and conversion tracking configured",
      "Full ownership of code and accounts",
    ],
    faqs: [
      {
        q: "Do you charge for hosting?",
        a: "No. We deploy to modern edge hosting on your own account — most business sites cost nothing to little each month, and you keep control.",
      },
      {
        q: "What do you need from us?",
        a: "Brand assets if you have them, access to your domain, and one decision-maker for reviews. We handle structure, copy direction and build.",
      },
      {
        q: "Can we pay in instalments?",
        a: "Yes — 50% to start, 50% on handover. Custom projects are split across three milestones.",
      },
    ],
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing & Paid Media",
    navLabel: "Digital Marketing",
    eyebrow: "Monthly retainers",
    headline: "Paid media that reports in enquiries, not impressions.",
    intro:
      "Search, social and creative managed by the same team, judged on cost per qualified enquiry. Ad spend is billed directly to you with zero markup.",
    startsAt: "₹15,999",
    metaTitle: "Digital Marketing Packages & Pricing in India — DwS",
    metaDescription:
      "Monthly digital marketing retainers from ₹15,999. Google and Meta ads, creative production, landing pages and reporting on cost per qualified enquiry.",
    packages: [
      {
        name: "Essentials",
        price: "₹15,999",
        cadence: "per month",
        summary: "One channel, run properly, for businesses starting paid acquisition.",
        timeline: "Live in 7 days",
        features: [
          "1 channel (Google or Meta)",
          "Up to ₹75,000/mo ad spend managed",
          "4 ad creatives per month",
          "Conversion tracking setup",
          "Monthly performance report",
          "Email support",
        ],
      },
      {
        name: "Growth",
        price: "₹34,999",
        cadence: "per month",
        summary: "Multi-channel acquisition with continuous creative testing.",
        timeline: "Live in 10 days",
        featured: true,
        features: [
          "Up to 3 channels incl. remarketing",
          "Up to ₹3,00,000/mo ad spend managed",
          "10 creatives + 1 landing page per month",
          "Audience and offer testing roadmap",
          "Live dashboard + bi-weekly calls",
          "Lead quality feedback loop with your sales team",
        ],
      },
      {
        name: "Scale",
        price: "₹74,999",
        cadence: "per month",
        summary: "An embedded performance team for serious monthly spend.",
        timeline: "Live in 2 weeks",
        features: [
          "Unlimited channels and campaigns",
          "₹3,00,000+ ad spend managed",
          "Dedicated creative studio output",
          "Lifecycle, email and retention flows",
          "Weekly reporting, quarterly planning",
          "Slack / WhatsApp access to the team",
        ],
      },
    ],
    addons: [
      { name: "Ad creative pack (5 statics + 2 videos)", price: "₹14,999" },
      { name: "Extra landing page", price: "₹9,999" },
      { name: "Marketplace / e-commerce channel management", price: "₹12,999 / month" },
      { name: "One-off account audit with action plan", price: "₹9,999" },
    ],
    includes: [
      "No markup on ad spend — you pay platforms directly",
      "Cost per qualified enquiry reported, not vanity metrics",
      "Month-to-month after a 90-day ramp",
      "You own every ad account and pixel",
    ],
    faqs: [
      {
        q: "Is ad spend included in the fee?",
        a: "No. Fees cover strategy, creative and management; ad spend is billed by Google or Meta directly to your card so there is no markup.",
      },
      {
        q: "How much ad spend should we start with?",
        a: "₹40,000–₹75,000 a month is usually enough to learn which message and audience produce qualified enquiries in a single city.",
      },
      {
        q: "When do results show?",
        a: "First enquiries typically arrive in week one or two. Reliable cost-per-enquiry benchmarks take about six weeks of data.",
      },
    ],
  },
  {
    slug: "seo",
    name: "SEO & Content Engine",
    navLabel: "SEO",
    eyebrow: "Monthly retainers",
    headline: "Organic growth that compounds instead of renting clicks.",
    intro:
      "Technical fixes, local visibility and a real publishing cadence. Built for Indian businesses that want enquiries from search in 3–6 months.",
    startsAt: "₹12,999",
    metaTitle: "SEO Services Pricing in India — Local & National — DwS",
    metaDescription:
      "SEO packages from ₹12,999 per month. Technical SEO, Google Business Profile, local city pages, content production and transparent rank plus enquiry reporting.",
    packages: [
      {
        name: "Local",
        price: "₹12,999",
        cadence: "per month",
        summary: "Rank in your city — ideal for clinics, studios, realtors and local services.",
        timeline: "First results in 6–10 weeks",
        features: [
          "Google Business Profile optimisation + weekly posts",
          "Technical SEO fixes on your site",
          "2 optimised service or city pages per month",
          "Review generation system",
          "LocalBusiness schema implementation",
          "Monthly ranking and enquiry report",
        ],
      },
      {
        name: "National",
        price: "₹29,999",
        cadence: "per month",
        summary: "Compete across India with a real content engine behind it.",
        timeline: "First results in 8–12 weeks",
        featured: true,
        features: [
          "Full technical audit and ongoing fixes",
          "4 long-form articles per month, written by humans",
          "Keyword and intent map for your category",
          "Internal linking and topical clusters",
          "Digital PR and quality link acquisition",
          "Search Console dashboard + bi-weekly calls",
        ],
      },
      {
        name: "Enterprise",
        price: "₹59,999",
        cadence: "per month",
        summary: "Large catalogues, multi-city or multi-language SEO programmes.",
        timeline: "Custom roadmap",
        features: [
          "Programmatic and template-level SEO",
          "8+ content pieces per month",
          "Multi-city / multi-language architecture",
          "Log-file and crawl-budget analysis",
          "Migration and consolidation support",
          "Weekly reporting with revenue attribution",
        ],
      },
    ],
    addons: [
      { name: "One-off technical SEO audit", price: "₹14,999" },
      { name: "Extra article (1,500+ words)", price: "₹4,999 each" },
      { name: "Google Business Profile setup only", price: "₹7,999" },
      { name: "Site migration SEO safeguard", price: "₹19,999" },
    ],
    includes: [
      "Rankings reported alongside enquiries and revenue",
      "No purchased link farms, ever",
      "Content written for buyers, then optimised",
      "Full access to every tool and dataset we use",
    ],
    faqs: [
      {
        q: "How long until SEO pays back?",
        a: "Local SEO usually moves in 6–10 weeks. National competitive terms take 4–6 months of consistent publishing and technical work.",
      },
      {
        q: "Do you guarantee rankings?",
        a: "No honest agency can. We commit to the work, the reporting cadence, and measurable movement in impressions, clicks and enquiries.",
      },
      {
        q: "Can SEO run alongside ads?",
        a: "It should. Paid search tells us which keywords convert, and we prioritise those pages in the SEO roadmap.",
      },
    ],
  },
  {
    slug: "saas-mvp",
    name: "SaaS MVP Development",
    navLabel: "SaaS MVP",
    eyebrow: "Sprint-based project pricing",
    headline: "From idea to paying users in weeks, not quarters.",
    intro:
      "One core workflow, shipped end to end with auth, billing and analytics. Built on a modern stack you can hire for and scale on.",
    startsAt: "₹99,999",
    metaTitle: "SaaS MVP Development Cost & Packages in India — DwS",
    metaDescription:
      "SaaS MVP development from ₹99,999. Validation prototypes, launch-ready MVPs with auth and billing, and ongoing product sprints for founders in India.",
    packages: [
      {
        name: "Prototype",
        price: "₹99,999",
        cadence: "one-time",
        summary: "A clickable, demo-ready product to validate and raise with.",
        timeline: "2–3 weeks",
        features: [
          "Product scoping workshop",
          "Full UX flow for the core loop",
          "Interactive front end with mock data",
          "Marketing landing page + waitlist",
          "Investor / customer demo build",
        ],
      },
      {
        name: "MVP Launch",
        price: "₹2,49,999",
        cadence: "one-time",
        summary: "A real, revenue-ready product with one workflow shipped end to end.",
        timeline: "5–7 weeks",
        featured: true,
        features: [
          "Auth, database with row-level security",
          "Core workflow fully functional",
          "Subscription billing and plan gating",
          "Admin panel and user management",
          "Transactional emails and onboarding flow",
          "Analytics + 30 days post-launch support",
        ],
      },
      {
        name: "Product Sprints",
        price: "₹79,999",
        cadence: "per month",
        summary: "An ongoing product team after launch, shipping every two weeks.",
        timeline: "Rolling monthly",
        features: [
          "Dedicated engineer + designer capacity",
          "Two-week shipping cadence",
          "Roadmap and backlog management",
          "Integrations, APIs and webhooks",
          "Performance, security and cost monitoring",
          "Month-to-month, cancel anytime",
        ],
      },
    ],
    addons: [
      { name: "Mobile app wrapper (iOS + Android)", price: "₹79,999" },
      { name: "AI feature integration (LLM workflows)", price: "₹49,999" },
      { name: "Payment gateway beyond the first", price: "₹24,999" },
      { name: "Technical due-diligence pack for investors", price: "₹29,999" },
    ],
    includes: [
      "You own the code, repository and infrastructure",
      "Security enforced in the database, not just the UI",
      "Infrastructure that costs near zero pre-revenue",
      "Weekly demos — you see progress, not status decks",
    ],
    faqs: [
      {
        q: "What if we need changes mid-build?",
        a: "Scope changes are quoted as a sprint add-on with a date. We never silently trade features for deadlines.",
      },
      {
        q: "Do you sign an NDA?",
        a: "Yes, before the scoping call if you prefer. IP is assigned to you on final payment.",
      },
      {
        q: "Can you take over an existing codebase?",
        a: "Often yes. We start with a paid audit, then quote sprints against a prioritised roadmap.",
      },
    ],
  },
];

export function getServicePricing(slug: string): ServicePricing | undefined {
  return servicePricing.find((s) => s.slug === slug);
}
