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
    slug: "mobile-app-development",
    name: "Mobile App Development",
    navLabel: "Mobile Apps",
    eyebrow: "Mobile App Development in Jaipur",
    primaryKeyword: "mobile app development in Jaipur",
    h1: "Mobile App Development in Jaipur & India",
    headline: "Native and cross-platform iOS and Android apps engineered for speed, UX, and scale.",
    intro:
      "DWS Web Services builds high-performance mobile applications for iOS and Android using Flutter, React Native, and native architecture. From early-stage MVP prototypes to store-ready enterprise platforms, we deliver clean architecture, offline-first reliability, seamless backend integration, and full App Store deployment.",
    startsAt: "₹35,999",
    metaTitle: "Mobile App Development in Jaipur | DWS Web Services",
    metaDescription:
      "Custom mobile app development in Jaipur and India. Native iOS & Android, Flutter, and React Native applications built for performance, clean architecture, and store approval.",
    whoItsFor: [
      "Startups and founders needing a store-ready MVP for iOS and Android without paying bloated agency overhead.",
      "Growing businesses expanding their web platforms into native or cross-platform mobile apps.",
      "Companies wanting complete source code ownership, modern engineering, and zero platform lock-in.",
      "Teams seeking an engineering partner who manages UI/UX design, API backend integration, and store submission.",
    ],
    processSteps: [
      {
        step: "01",
        title: "Product Scoping & Wireframing",
        description:
          "We analyze user journeys, core screen interactions, and state architecture tailored for mobile touch interfaces.",
      },
      {
        step: "02",
        title: "UI/UX & Interactive Prototype",
        description:
          "Design intuitive mobile UI with consistent design system tokens and test user journeys with clickable prototypes.",
      },
      {
        step: "03",
        title: "App Engineering & Integration",
        description:
          "Develop cross-platform code in Flutter or React Native, connecting authentication, database APIs, and push notifications.",
      },
      {
        step: "04",
        title: "Testing & Store Publishing",
        description:
          "Perform rigorous multi-device testing followed by direct submission to Google Play Store and Apple App Store.",
      },
    ],
    packages: [
      {
        name: "Starter MVP",
        price: "₹35,999",
        cadence: "one-time",
        summary: "A focused mobile app prototype for iOS and Android with essential user journeys.",
        timeline: "2-3 weeks",
        features: [
          "Cross-platform build (Flutter or React Native) for Android & iOS",
          "Up to 5 core functional screens",
          "User authentication (Email, Google, or Phone OTP)",
          "REST or GraphQL API integration with backend database",
          "App icon and branded splash screen design",
          "APK build and direct device testing deployment",
        ],
      },
      {
        name: "Growth App",
        price: "₹74,999",
        cadence: "one-time",
        summary: "A production-grade mobile application ready for store launch and customer acquisition.",
        timeline: "4-6 weeks",
        featured: true,
        features: [
          "Complete iOS and Android application with custom UI",
          "Up to 12 screens with complex state management",
          "Push notifications setup via Firebase Cloud Messaging",
          "Payment gateway integration (Razorpay or Stripe mobile SDK)",
          "Offline caching and persistent local storage",
          "Complete App Store and Google Play Store submission management",
          "30 days post-launch technical support and bug warranty",
        ],
      },
      {
        name: "Enterprise App",
        price: "₹1,49,999",
        cadence: "one-time",
        summary: "Full-scale mobile platform with real-time sync, custom APIs, and advanced security.",
        timeline: "7-10 weeks",
        features: [
          "Scalable cross-platform architecture with modular components",
          "Unlimited screens and complex multi-role user workflows",
          "Real-time database sync, chat, and geolocation / map services",
          "Biometric authentication (FaceID / Fingerprint) and data encryption",
          "Role-based access control and dedicated web admin dashboard",
          "Automated CI/CD pipeline for builds and automated tests",
          "60 days priority post-launch engineering support",
        ],
      },
    ],
    addons: [
      { name: "Dedicated Web Admin Dashboard", price: "₹24,999" },
      { name: "Secondary payment gateway or subscription billing", price: "₹14,999" },
      { name: "App Store Optimization (ASO) setup and keyword package", price: "₹9,999" },
      { name: "Monthly OS updates and maintenance retainer", price: "₹12,999 / month" },
    ],
    includes: [
      "100% source code and intellectual property ownership upon project completion",
      "Clean, modular code architecture designed for future in-house maintenance",
      "Full guidance through Google Play Console and Apple Developer account setup",
      "Zero monthly licensing fees or proprietary platform dependencies",
    ],
    faqs: [
      {
        q: "Do you build for both Android and iOS simultaneously?",
        a: "Yes. We build using industry-standard cross-platform frameworks like Flutter and React Native. This allows a single, maintainable codebase to run natively on both iOS and Android, saving substantial development time and cost without sacrificing performance.",
      },
      {
        q: "Do we retain full ownership of the app and source code?",
        a: "Yes. You retain 100% intellectual property ownership of the source code, design assets, and developer account configurations upon project completion.",
      },
      {
        q: "Do you assist with publishing to Google Play and Apple App Store?",
        a: "Yes. We handle the entire release process, including asset generation, certificate signing, test flight releases, and store review guidelines compliance.",
      },
      {
        q: "How do you handle backend and database requirements?",
        a: "We can connect your mobile app to your existing web backend and database, or build a scalable backend from scratch using Supabase, Node.js, or PostgreSQL.",
      },
      {
        q: "What happens if Apple or Google requests changes during review?",
        a: "Our team directly addresses any technical feedback from App Store or Play Store reviewers until your app is approved and live.",
      },
    ],
    relatedBlogSlug: "saas-mvp-to-first-paying-users",
    relatedCaseStudySlug: "linksnap",
  },
  {
    slug: "saas-mvp",
    name: "SaaS MVP Development India",
    navLabel: "SaaS MVP",
    eyebrow: "SaaS Product Studio in India",
    primaryKeyword: "SaaS MVP development India",
    h1: "SaaS MVP Development India",
    headline: "Turn your software concept into a launch-ready MVP with paying customers in weeks.",
    intro:
      "DWS Web Services offers full-stack SaaS MVP development in India for founders and product teams. We build production-ready applications with modern tech stacks (React, TypeScript, Supabase, PostgreSQL, Stripe/Razorpay) so you can validate customer demand, onboard users, and raise capital without agency bloat or technical debt.",
    startsAt: "₹49,999",
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
        name: "Prototype & Starter MVP",
        price: "₹49,999",
        cadence: "one-time",
        summary: "A focused MVP build to validate customer demand, onboard users, and test market traction.",
        timeline: "2-3 weeks",
        features: [
          "Product scoping and core user loop architecture workshop",
          "Interactive React & TypeScript web application with core user loop",
          "User authentication and database setup with row-level security",
          "Marketing landing page with early waitlist or user onboarding",
          "Production deployment on fast serverless edge infrastructure",
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
  if (slug === "digital-marketing") {
    return servicePricing.find((s) => s.slug === "mobile-app-development");
  }
  return servicePricing.find((s) => s.slug === slug);
}
