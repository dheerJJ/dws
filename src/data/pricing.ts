// Detailed service pricing and content definitions for DWS Web Services.
// Each service powers a dedicated landing page at /pricing/<slug>.

export type Package = {
  name: string;
  price: string;
  cadence: string;
  summary: string;
  timeline: string;
  features: string[];
  featured?: boolean;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type ServicePricing = {
  slug: string;
  name: string;
  navLabel: string;
  eyebrow: string;
  headline: string;
  primaryKeyword: string;
  h1: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  startsAt: string;
  whoItsFor: string[];
  processSteps: ProcessStep[];
  packages: Package[];
  addons: { name: string; price: string }[];
  includes: string[];
  faqs: { q: string; a: string }[];
  relatedBlogSlug: string;
  relatedCaseStudySlug?: string;
};

export const servicePricing: ServicePricing[] = [
  {
    slug: "website-design",
    name: "Website Design & Development",
    navLabel: "Website Design",
    eyebrow: "Website Design Services in Jaipur",
    primaryKeyword: "website design company in Jaipur",
    h1: "Website Design Company in Jaipur",
    headline: "High-performance websites engineered to turn visitors into booked clients.",
    intro:
      "DWS Web Services is a dedicated website design company in Jaipur. We deliver custom UI/UX design, mobile-first responsive development, SEO foundations, and analytics in one unified engagement. Every project is delivered on a fixed scope and fixed price with zero hourly surprises.",
    startsAt: "₹24,999",
    metaTitle: "Website Design Company in Jaipur | DWS Web Services",
    metaDescription:
      "Professional website design company in Jaipur. Fast, responsive, conversion-focused websites and eCommerce builds with full code ownership and SEO foundations.",
    whoItsFor: [
      "Jaipur service businesses, medical clinics, and real estate consultancies needing a credible digital presence.",
      "Growing eCommerce and D2C brands requiring rapid page loads and seamless checkout flows.",
      "Founders replacing outdated brochure websites that fail to generate phone calls and enquiries.",
      "Companies seeking complete ownership of their source code, domain assets, and hosting accounts.",
    ],
    processSteps: [
      {
        step: "01",
        title: "Discovery & Architecture",
        description:
          "We analyze your target market, competitors in Jaipur and India, and map the user journey to define wireframes and conversion paths.",
      },
      {
        step: "02",
        title: "UI/UX Design Sprints",
        description:
          "Custom visual designs created specifically for your brand identity. No pre-made templates or restrictive page builders.",
      },
      {
        step: "03",
        title: "Modern Front-End Build",
        description:
          "Engineered with clean semantic HTML5, modern CSS, and React for instant page navigation and sub-second load times on mobile 4G.",
      },
      {
        step: "04",
        title: "SEO Foundations & Launch",
        description:
          "Core Web Vitals passed, on-page schema configured, Google Search Console verified, and conversion tracking configured before handover.",
      },
    ],
    packages: [
      {
        name: "Launch",
        price: "₹24,999",
        cadence: "one-time",
        summary: "A single high-converting landing page for one offer or advertising campaign.",
        timeline: "7-10 days",
        features: [
          "1 conversion-focused landing page",
          "Custom design tailored to your offer",
          "Direct enquiry form plus instant WhatsApp path",
          "Mobile-first responsive architecture",
          "Technical SEO foundations and schema markup",
          "Analytics and event tracking configured",
        ],
      },
      {
        name: "Business",
        price: "₹64,999",
        cadence: "one-time",
        summary: "A complete multi-page website for an established service business.",
        timeline: "3-4 weeks",
        featured: true,
        features: [
          "Up to 8 custom pages including service pages",
          "Full brand design system and reusable components",
          "On-page SEO, canonical setup, and schema markup",
          "Blog and resources section ready for publishing",
          "Conversion tracking dashboard setup",
          "2 revision rounds plus 30 days post-launch support",
        ],
      },
      {
        name: "Custom",
        price: "₹1,49,999+",
        cadence: "one-time",
        summary: "Multi-template, multi-location, or integration-heavy web applications.",
        timeline: "6-10 weeks",
        features: [
          "Unlimited custom templates and modular sections",
          "Bookings, client portal, or payment integrations",
          "Multi-city and programmatic SEO architecture",
          "Full accessibility and Core Web Vitals audit",
          "Legacy content and SEO migration handled",
          "90 days priority post-launch support",
        ],
      },
    ],
    addons: [
      { name: "Extra custom page (design + build)", price: "₹4,999 / page" },
      { name: "Copywriting direction, per page", price: "₹3,499 / page" },
      { name: "Brand identity and logo refresh", price: "₹19,999" },
      { name: "Ongoing care plan (backups, updates, monitoring)", price: "₹4,999 / month" },
    ],
    includes: [
      "Senior designer and engineer on every project",
      "Core Web Vitals passed before handover",
      "Analytics and conversion tracking configured",
      "Full ownership of code, assets, and hosting accounts",
    ],
    faqs: [
      {
        q: "Do you charge recurring monthly fees for hosting?",
        a: "No. We deploy to modern edge infrastructure on your own accounts (such as Vercel or Cloudflare). Most business websites cost virtually nothing to run monthly, and you retain complete operational control.",
      },
      {
        q: "What do you need from us before beginning development?",
        a: "We need any existing brand assets or logo files, domain registrar access, and one designated decision-maker for milestone reviews. We handle structure, copywriting direction, UX design, and engineering.",
      },
      {
        q: "Can we pay in project milestones?",
        a: "Yes. Standard projects are split into 50% upon contract start and 50% upon final sign-off before your custom domain launch. Larger custom builds are structured across three agreed milestones.",
      },
      {
        q: "Will our website perform well on mobile devices across India?",
        a: "Yes. Every website is built mobile-first and tested rigorously on real mobile devices to ensure sub-2-second load times even on standard Indian 4G mobile connections.",
      },
      {
        q: "Who owns the website code once the project is finished?",
        a: "You own 100% of the code, design files, content, and credentials once final invoice payment is complete. We do not believe in proprietary lock-ins or holding client assets hostage.",
      },
    ],
    relatedBlogSlug: "website-that-converts-india-2026",
    relatedCaseStudySlug: "shreeradhe",
  },
  {
    slug: "seo",
    name: "SEO Services in Jaipur",
    navLabel: "SEO Services",
    eyebrow: "Search Engine Optimisation in Jaipur",
    primaryKeyword: "SEO services in Jaipur",
    h1: "SEO Services in Jaipur",
    headline: "Compounding organic search rankings that generate real phone calls and sales.",
    intro:
      "Looking for professional SEO services in Jaipur? DWS Web Services helps local Jaipur businesses and national brands dominate Google search rankings. We build clean technical foundations, optimize Google Business Profiles for local map packs, write human-first content, and build genuine topical authority that turns searchers into paying clients.",
    startsAt: "₹12,999",
    metaTitle: "SEO Services in Jaipur | DWS Web Services",
    metaDescription:
      "Results-driven SEO services in Jaipur. Google Business Profile optimization, local citation building, technical SEO and content to drive high-intent enquiries.",
    whoItsFor: [
      "Jaipur clinics, dentists, real estate brokers, and local studios wanting to rank #1 in the Google Maps 3-pack.",
      "B2B service providers seeking qualified inbound leads rather than relying entirely on paid ad spend.",
      "National eCommerce stores and SaaS businesses requiring programmatic and technical SEO architecture.",
      "Companies suffering from sudden Google ranking drops or outdated spammy backlinks requiring recovery.",
    ],
    processSteps: [
      {
        step: "01",
        title: "Technical & Local Audit",
        description:
          "We inspect your crawlability, indexation status, Core Web Vitals, schema markup, and Google Business Profile health.",
      },
      {
        step: "02",
        title: "NAP & Citation Building",
        description:
          "Standardize your Name, Address, and Phone across top Indian directories to solidify local geographic signals.",
      },
      {
        step: "03",
        title: "Content & Keyword Clusters",
        description:
          "We research real buyer queries in Jaipur and India, producing helpful content that answers specific customer intent.",
      },
      {
        step: "04",
        title: "Rank & Conversion Tracking",
        description:
          "Monthly transparent reports connecting search rankings directly to calls, form submissions, and customer revenue.",
      },
    ],
    packages: [
      {
        name: "Local",
        price: "₹12,999",
        cadence: "per month",
        summary: "Rank in your city - ideal for clinics, studios, realtors, and local services.",
        timeline: "First results in 6-10 weeks",
        features: [
          "Google Business Profile optimization and weekly updates",
          "On-page technical SEO fixes and speed optimization",
          "2 localized service or locality pages per month",
          "Review generation workflow and local schema",
          "Local citation audits and NAP consistency sync",
          "Monthly ranking and phone enquiry reporting",
        ],
      },
      {
        name: "National",
        price: "₹29,999",
        cadence: "per month",
        summary: "Compete across India with a serious content and technical engine.",
        timeline: "First results in 8-12 weeks",
        featured: true,
        features: [
          "Complete technical audit and ongoing code fixes",
          "4 in-depth articles per month written by subject specialists",
          "Comprehensive keyword and intent mapping",
          "Internal linking architecture and topical clusters",
          "Digital PR outreach and contextual link acquisition",
          "Search Console dashboard plus bi-weekly strategy calls",
        ],
      },
      {
        name: "Enterprise",
        price: "₹59,999",
        cadence: "per month",
        summary: "Large product catalogues, multi-city, or programmatic SEO campaigns.",
        timeline: "Custom roadmap",
        features: [
          "Programmatic template-level SEO and schema implementation",
          "8+ authoritative content pieces per month",
          "Multi-city and multi-language site architecture",
          "Crawl budget optimization and log-file inspection",
          "Domain migration and redirect preservation safeguards",
          "Weekly reporting with multi-touch revenue attribution",
        ],
      },
    ],
    addons: [
      { name: "One-off comprehensive technical SEO audit", price: "₹14,999" },
      { name: "Extra long-form article (1,500+ words)", price: "₹4,999 each" },
      { name: "Google Business Profile complete setup", price: "₹7,999" },
      { name: "Site migration SEO safeguard pack", price: "₹19,999" },
    ],
    includes: [
      "Rankings reported alongside verified calls, enquiries, and revenue",
      "Zero private blog networks (PBNs) or spam links, ever",
      "Content written for real human buyers, then optimized for crawlers",
      "Full transparency and direct access to our analytics reporting",
    ],
    faqs: [
      {
        q: "How long does it take to see tangible ranking improvements?",
        a: "For local Jaipur SEO and Google Maps optimization, visible movement in impressions and phone calls typically begins within 6 to 10 weeks. For highly competitive national terms, consistent results compound over 3 to 6 months of steady publishing.",
      },
      {
        q: "Do you guarantee #1 rankings on Google?",
        a: "No credible SEO professional can guarantee a specific Google ranking because Google constantly updates its ranking algorithms. What we guarantee is rigorous technical execution, adherence to search quality guidelines, and measurable increases in organic visibility and enquiries.",
      },
      {
        q: "Can SEO and Google Ads run at the same time?",
        a: "Yes, and they frequently work best together. Paid Google Ads provide instant enquiry volume while validating which search terms convert best, allowing us to prioritize those exact commercial keywords in your organic SEO roadmap.",
      },
      {
        q: "What makes local Jaipur SEO different from standard SEO?",
        a: "Local SEO focuses heavily on Google Business Profile health, local map pack positioning (the 3-pack), locality landing pages (such as Vaishali Nagar or Malviya Nagar), and consistent NAP citations across Indian directories.",
      },
      {
        q: "What is your approach to link building?",
        a: "We strictly avoid low-quality link schemes, automated spam, and paid link farms that can trigger algorithmic penalties. We focus on digital PR, genuine directory citations, and high-value industry resources that attract legitimate referral traffic.",
      },
    ],
    relatedBlogSlug: "local-seo-checklist-indian-businesses",
    relatedCaseStudySlug: "shreeradhe",
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing & Paid Media",
    navLabel: "Digital Marketing",
    eyebrow: "Digital Marketing Agency in Jaipur",
    primaryKeyword: "digital marketing agency in Jaipur",
    h1: "Digital Marketing Agency in Jaipur",
    headline: "Performance marketing and paid campaigns measured on cost per qualified lead.",
    intro:
      "As a results-focused digital marketing agency in Jaipur, DWS Web Services manages Google Ads, Meta Ads, and creative production with one clear objective: delivering high-intent sales enquiries and measurable return on ad spend (ROAS). You pay advertising platforms directly with zero agency markup.",
    startsAt: "₹15,999",
    metaTitle: "Digital Marketing Agency in Jaipur | DWS Web Services",
    metaDescription:
      "ROI-focused digital marketing agency in Jaipur. Google Ads, Meta advertising, creative production and conversion landing pages judged on cost per qualified lead.",
    whoItsFor: [
      "Businesses in Jaipur and across India seeking immediate customer acquisition and predictable lead volume.",
      "Companies frustrated with vanity metrics like impressions and clicks that fail to generate revenue.",
      "Founders wanting complete transparency over their ad spend, tracking pixels, and conversion numbers.",
      "Teams needing custom ad creatives, copywriting, and high-converting landing pages produced under one roof.",
    ],
    processSteps: [
      {
        step: "01",
        title: "Offer & Audience Mapping",
        description:
          "We analyze your ideal customer profile, unit economics, and competitive landscape in Jaipur and target Indian cities.",
      },
      {
        step: "02",
        title: "Creative & Landing Page Build",
        description:
          "Design ad creatives (static and video) and build fast landing pages instrumented with server-side conversion tracking.",
      },
      {
        step: "03",
        title: "Campaign Launch & Bidding",
        description:
          "Launch campaigns on Google Search, Performance Max, or Meta Ads with tight geo-fencing and negative keyword lists.",
      },
      {
        step: "04",
        title: "Optimization & Scaling",
        description:
          "Review lead quality with your team weekly, kill non-performing audiences, and double down on profitable ad sets.",
      },
    ],
    packages: [
      {
        name: "Essentials",
        price: "₹15,999",
        cadence: "per month",
        summary: "One channel managed properly for businesses starting paid acquisition.",
        timeline: "Live in 7 days",
        features: [
          "1 core channel (Google Ads or Meta Ads)",
          "Up to ₹75,000 monthly ad spend managed",
          "4 custom static ad creatives per month",
          "Conversion tracking and pixel configuration",
          "Monthly performance report with cost-per-lead analysis",
          "Direct email and WhatsApp support",
        ],
      },
      {
        name: "Growth",
        price: "₹34,999",
        cadence: "per month",
        summary: "Multi-channel acquisition with continuous creative and copy testing.",
        timeline: "Live in 10 days",
        featured: true,
        features: [
          "Up to 3 channels including retargeting campaigns",
          "Up to ₹3,00,000 monthly ad spend managed",
          "10 ad creatives plus 1 dedicated landing page per month",
          "Audience and value-proposition testing roadmap",
          "Live reporting dashboard plus bi-weekly review calls",
          "Lead quality feedback loop synced with your sales team",
        ],
      },
      {
        name: "Scale",
        price: "₹74,999",
        cadence: "per month",
        summary: "An embedded performance marketing team for substantial monthly budgets.",
        timeline: "Live in 2 weeks",
        features: [
          "Unlimited marketing channels and campaign structures",
          "₹3,00,000+ monthly ad spend managed",
          "Dedicated creative studio output (video and statics)",
          "Lifecycle, email nurturing, and retargeting flows",
          "Weekly performance reviews and quarterly scaling plans",
          "Direct Slack or WhatsApp channel access to our senior team",
        ],
      },
    ],
    addons: [
      { name: "Ad creative pack (5 statics + 2 video reels)", price: "₹14,999" },
      { name: "Extra high-converting landing page", price: "₹9,999" },
      { name: "Marketplace / eCommerce channel management", price: "₹12,999 / month" },
      { name: "One-off ad account audit with actionable roadmap", price: "₹9,999" },
    ],
    includes: [
      "Zero markup on advertising spend - you pay Google and Meta directly",
      "Cost per qualified enquiry tracked, never vanity impressions",
      "Month-to-month retainers after an initial 90-day learning period",
      "You retain full admin ownership of every ad account and pixel",
    ],
    faqs: [
      {
        q: "Is our advertising spend included in your management fee?",
        a: "No. Our monthly fee covers campaign strategy, audience targeting, ad creative design, copywriting, and continuous bid optimization. Ad spend is billed directly by Google or Meta to your corporate card, ensuring zero agency markup.",
      },
      {
        q: "How much monthly advertising spend should we budget to start?",
        a: "For local Jaipur campaigns, a monthly ad spend of ₹40,000 to ₹75,000 is generally sufficient to test messaging, isolate high-intent search terms, and establish reliable cost-per-lead benchmarks.",
      },
      {
        q: "How quickly do enquiries start coming in?",
        a: "Paid search and social campaigns typically generate initial leads within the first 7 to 10 days of going live. Stabilizing the cost-per-lead and scaling volume typically takes 4 to 6 weeks of data collection.",
      },
      {
        q: "Do you build the landing pages for the campaigns?",
        a: "Yes. Sending paid traffic to generic homepages wastes budget. We design and build dedicated, lightning-fast landing pages with clear CTAs tailored directly to your ad copy.",
      },
      {
        q: "How do you evaluate lead quality?",
        a: "We set up feedback loops with your sales or intake team to track whether callers and form submissions are genuinely qualified buyers, allowing us to optimize for revenue rather than low-quality clicks.",
      },
    ],
    relatedBlogSlug: "digital-marketing-budget-first-90-days",
    relatedCaseStudySlug: "rudra-bhumi",
  },
  {
    slug: "saas-mvp",
    name: "SaaS MVP Development India",
    navLabel: "SaaS MVP Development",
    eyebrow: "SaaS Product Studio in India",
    primaryKeyword: "SaaS MVP development India",
    h1: "SaaS MVP Development India",
    headline: "Turn your software concept into a launch-ready MVP with paying customers in weeks.",
    intro:
      "DWS Web Services offers full-stack SaaS MVP development in India for founders and product teams. We build production-ready applications with modern tech stacks (React, TypeScript, Supabase, PostgreSQL, Stripe/Razorpay) so you can validate customer demand, onboard users, and raise capital without agency bloat or technical debt.",
    startsAt: "₹99,999",
    metaTitle: "SaaS MVP Development India | DWS Web Services",
    metaDescription:
      "Fast SaaS MVP development in India. From concept to paying users in 3-6 weeks with React, Supabase, authentication, subscription billing and full code ownership.",
    whoItsFor: [
      "Early-stage founders validating software concepts with real paying customers before committing large capital.",
      "Domain experts building B2B SaaS tools to solve specific industry workflows.",
      "Agencies and consultancies productizing their internal service operations into recurring software revenue.",
      "Founders who need full IP ownership and clean, modern code that any in-house engineer can easily maintain.",
    ],
    processSteps: [
      {
        step: "01",
        title: "Scoping & Core Loop",
        description:
          "We strip the feature list down to the single core workflow that solves your user's primary problem and gets them to pay.",
      },
      {
        step: "02",
        title: "UX Flow & Architecture",
        description:
          "Design intuitive wireframes, database schemas with row-level security (RLS), and API endpoints.",
      },
      {
        step: "03",
        title: "Full-Stack Development Sprint",
        description:
          "Build auth, core functionality, database queries, and billing integrations in rapid 2-week agile sprints.",
      },
      {
        step: "04",
        title: "Deployment & User Onboarding",
        description:
          "Deploy on scalable serverless edge infrastructure, set up error logging, and launch to your first cohort of users.",
      },
    ],
    packages: [
      {
        name: "Prototype",
        price: "₹99,999",
        cadence: "one-time",
        summary: "A clickable, high-fidelity demo to validate customer demand and raise funding.",
        timeline: "2-3 weeks",
        features: [
          "Product scoping and architecture workshop",
          "Complete UI/UX flow for the primary user loop",
          "Interactive React front-end with structured mock data",
          "Marketing landing page with email waitlist capture",
          "Demo build ready for investor and initial customer walkthroughs",
        ],
      },
      {
        name: "MVP Launch",
        price: "₹2,49,999",
        cadence: "one-time",
        summary: "A production, revenue-ready SaaS application shipped end-to-end.",
        timeline: "5-7 weeks",
        featured: true,
        features: [
          "User authentication and database with row-level security",
          "Core software loop and functionality fully implemented",
          "Subscription billing (Stripe or Razorpay) and plan gating",
          "Admin dashboard and user management capabilities",
          "Transactional emails and automated onboarding flows",
          "Analytics tracking plus 30 days post-launch technical support",
        ],
      },
      {
        name: "Product Sprints",
        price: "₹79,999",
        cadence: "per month",
        summary: "An ongoing dedicated engineering team shipping updates every two weeks.",
        timeline: "Rolling monthly",
        features: [
          "Dedicated senior engineer and designer capacity",
          "Continuous 2-week sprint shipping cadence",
          "Product backlog and roadmap prioritization",
          "Custom API integrations and webhook listeners",
          "Performance, database security, and infrastructure monitoring",
          "Month-to-month agreement with cancellation anytime",
        ],
      },
    ],
    addons: [
      { name: "Progressive Web App (PWA) / mobile wrapper", price: "₹79,999" },
      { name: "AI workflow integration (OpenAI / Gemini APIs)", price: "₹49,999" },
      { name: "Secondary payment gateway integration", price: "₹24,999" },
      { name: "Investor technical documentation & architecture deck", price: "₹29,999" },
    ],
    includes: [
      "100% intellectual property and source code ownership",
      "Database security enforced via PostgreSQL row-level security",
      "Modern serverless infrastructure with near-zero idle running costs",
      "Weekly live demos so you see actual software progress every sprint",
    ],
    faqs: [
      {
        q: "What tech stack do you use for SaaS MVP development?",
        a: "We specialize in modern, high-velocity stacks: TypeScript, React, Tailwind CSS, Supabase (PostgreSQL with Row Level Security), and edge deployment on Vercel or Cloudflare. This ensures high performance, minimal server maintenance, and easy hiring for future full-time engineers.",
      },
      {
        q: "Do you sign a Non-Disclosure Agreement (NDA) before discussing my idea?",
        a: "Yes. We are happy to execute a mutual NDA before our scoping call. You retain 100% intellectual property ownership of your idea and all custom software code upon project completion.",
      },
      {
        q: "Can you take over or audit an existing codebase?",
        a: "Yes. We frequently conduct code audits on prototypes built by freelancers or no-code platforms, providing an actionable roadmap to fix performance, security, and scalability bottlenecks.",
      },
      {
        q: "How do you handle scope changes during the build?",
        a: "We maintain clear sprint backlogs. If you want to adjust features mid-build, we evaluate the timeline impact together and swap features of equivalent complexity or quote an additional sprint, ensuring transparency without hidden delays.",
      },
      {
        q: "How much does it cost to host the MVP after launch?",
        a: "Using serverless architecture like Supabase and Vercel, baseline hosting costs are typically under $25 per month (or free on starter tiers) until you achieve significant active user traction.",
      },
    ],
    relatedBlogSlug: "saas-mvp-to-first-paying-users",
    relatedCaseStudySlug: "linksnap",
  },
];

export function getServicePricing(slug: string): ServicePricing | undefined {
  return servicePricing.find((s) => s.slug === slug);
}
