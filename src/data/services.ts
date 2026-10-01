// Central service registry for DWS Web Services.
// Every component (services page, homepage, footer, sitemap, schema) reads from here.
// For services that have detailed pricing pages, link to /pricing/<pricingSlug>.

export type ServiceCategory =
  | "Web Engineering"
  | "Enterprise Solutions"
  | "EdTech"
  | "Mobile Apps"
  | "Design & Media"
  | "Marketing & Growth"
  | "Cloud & Support";

export interface ServiceEntry {
  slug: string;
  title: string;
  category: ServiceCategory;
  description: string;
  features: [string, string, string];
  /** Lucide icon name - rendered in the card */
  icon: string;
  startsAt: string;
  /** If this service has a dedicated /pricing/<slug> page, link there */
  pricingSlug?: string;
  /** If true, show on the homepage featured grid */
  featured?: boolean;
  /** SEO meta title for /services/<slug> detail page */
  metaTitle: string;
  /** SEO meta description for /services/<slug> detail page */
  metaDescription: string;
  /** Long description for the detail page */
  longDescription: string;
  /** What's included - 5-8 deliverables */
  whatsIncluded: string[];
  /** Process steps for the detail page */
  process: { step: string; title: string; text: string }[];
  /** FAQs for the detail page */
  faqs: { q: string; a: string }[];
}

export const serviceCategories: ServiceCategory[] = [
  "Web Engineering",
  "Enterprise Solutions",
  "EdTech",
  "Mobile Apps",
  "Design & Media",
  "Marketing & Growth",
  "Cloud & Support",
];

export const services: ServiceEntry[] = [
  // ─── Web Engineering ──────────────────────────────────────────────────
  {
    slug: "website-design",
    title: "Website Design & Development",
    category: "Web Engineering",
    description:
      "Custom-coded, mobile-first websites built to convert visitors into paying clients. No templates, no page builders. Every site ships with SEO foundations, analytics, and full code ownership.",
    features: [
      "Custom UI/UX design with mobile-first responsive architecture",
      "SEO foundations including schema markup and Core Web Vitals tuning",
      "Full source code ownership with zero lock-in",
    ],
    icon: "Globe",
    startsAt: "₹24,999",
    pricingSlug: "website-design",
    featured: true,
    metaTitle: "Website Design & Development in Jaipur | DWS Web Services",
    metaDescription:
      "Custom website design and development services in Jaipur. Fast, responsive, conversion-focused websites with full code ownership and SEO foundations.",
    longDescription:
      "DWS Web Services delivers custom-coded websites purpose-built for your business goals. Every project starts with a discovery call to map your target audience, conversion paths, and competitive landscape. We design and develop mobile-first, responsive websites using modern front-end frameworks for sub-second load times. No drag-and-drop builders, no templates. You get full ownership of source code, domain, and hosting accounts.",
    whatsIncluded: [
      "Custom UI/UX design tailored to your brand identity",
      "Mobile-first responsive front-end development",
      "On-page SEO setup with meta tags and schema markup",
      "Core Web Vitals performance optimization",
      "Contact forms with email integration",
      "Google Analytics and Search Console setup",
      "Post-launch support and bug fixes for 30 days",
    ],
    process: [
      { step: "01", title: "Discovery & Architecture", text: "We analyse your goals, target audience, and competitors to define wireframes and conversion paths." },
      { step: "02", title: "UI/UX Design", text: "Custom visual designs created specifically for your brand. No templates or page builders." },
      { step: "03", title: "Development & Build", text: "Clean semantic code built with modern frameworks for instant page navigation and fast load times." },
      { step: "04", title: "SEO & Launch", text: "Core Web Vitals passed, schema configured, Google Search Console verified, analytics connected." },
    ],
    faqs: [
      { q: "How long does a website project take?", a: "A landing page takes 7-10 days, a full business site 3-4 weeks, and custom web applications 6-8 weeks depending on scope." },
      { q: "Do I own the code?", a: "Yes. You get full ownership of the source code, domain assets, and hosting accounts. No lock-in." },
      { q: "Will my website work on mobile?", a: "Every site we build is mobile-first by default. We test across devices and optimise for 4G mobile performance." },
    ],
  },
  {
    slug: "ecommerce-development",
    title: "E-commerce Development",
    category: "Web Engineering",
    description:
      "Online stores engineered for fast checkout flows, secure payment gateway integration with Razorpay and Stripe, and inventory management that scales with your product catalogue.",
    features: [
      "Payment gateway integration with Razorpay, Stripe, and UPI",
      "Inventory and order management with real-time tracking",
      "Conversion-optimised checkout flow with cart recovery",
    ],
    icon: "ShoppingCart",
    startsAt: "₹29,999",
    featured: true,
    metaTitle: "E-commerce Development in Jaipur | DWS Web Services",
    metaDescription:
      "Custom e-commerce development with Razorpay/Stripe payment integration, inventory management, and conversion-optimised checkout flows.",
    longDescription:
      "We build e-commerce stores that handle your entire sales pipeline from product discovery to payment confirmation. Every store ships with integrated payment gateways (Razorpay, Stripe, UPI), inventory tracking, order management, and a checkout experience optimised to reduce cart abandonment. Whether you sell 50 products or 5,000, the architecture scales without performance trade-offs.",
    whatsIncluded: [
      "Custom storefront design with category and product pages",
      "Payment gateway integration (Razorpay, Stripe, UPI)",
      "Inventory and stock management system",
      "Order tracking and fulfilment workflow",
      "Cart recovery and checkout optimisation",
      "Product search and filter functionality",
      "Mobile-responsive design across all devices",
      "SSL security and PCI compliance setup",
    ],
    process: [
      { step: "01", title: "Store Architecture", text: "We map your product catalogue, payment workflows, and shipping requirements before writing a single line of code." },
      { step: "02", title: "Design & Prototyping", text: "Custom store layouts designed for your brand with conversion-focused product and checkout pages." },
      { step: "03", title: "Development & Integration", text: "We build the storefront, connect payment gateways, set up inventory, and integrate shipping providers." },
      { step: "04", title: "Testing & Launch", text: "End-to-end testing of payment flows, order processing, mobile checkout, and performance before going live." },
    ],
    faqs: [
      { q: "Which payment gateways do you integrate?", a: "Razorpay, Stripe, PayU, and UPI are standard. We can integrate any gateway that provides an API." },
      { q: "Can I manage products myself?", a: "Yes. Every store includes an admin panel where you can add, edit, and manage products, prices, and inventory." },
      { q: "Do you handle shipping integration?", a: "We integrate with major shipping providers like Shiprocket, Delhivery, and custom logistics APIs as needed." },
    ],
  },

  // ─── Enterprise Solutions ─────────────────────────────────────────────
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    category: "Enterprise Solutions",
    description:
      "Bespoke business software built around your exact workflows. From internal tools and workflow automation to robust API backends, we build systems that replace spreadsheets with scalable software.",
    features: [
      "Custom business applications tailored to your operations",
      "Workflow automation to reduce manual processes",
      "Robust REST and GraphQL API backends",
    ],
    icon: "Code",
    startsAt: "₹79,999",
    metaTitle: "Custom Software Development in Jaipur | DWS Web Services",
    metaDescription:
      "Bespoke custom software development for businesses. Workflow automation, API backends, and internal tools built by senior engineers in Jaipur.",
    longDescription:
      "Off-the-shelf software forces you to bend your business around someone else's product decisions. We build the opposite: software designed specifically for how your team operates. Whether you need an internal operations dashboard, a customer portal, an automated billing system, or a complex API backend that connects your existing tools, we engineer it from the ground up with clean architecture, role-based access, and clear documentation.",
    whatsIncluded: [
      "Requirements analysis and system architecture design",
      "Custom web application development",
      "Database design and data migration",
      "REST or GraphQL API development",
      "Role-based access control and authentication",
      "Third-party integrations (payment, email, SMS, CRM)",
      "Automated testing and deployment pipeline",
      "Post-launch support and maintenance",
    ],
    process: [
      { step: "01", title: "Requirements & Scoping", text: "We document your workflows, pain points, and system requirements in a detailed specification." },
      { step: "02", title: "Architecture & Design", text: "System architecture, database design, and UI wireframes before development begins." },
      { step: "03", title: "Iterative Development", text: "We build in sprint cycles with regular demos so you see progress and provide feedback throughout." },
      { step: "04", title: "Deployment & Handover", text: "Production deployment, documentation, team training, and ongoing support plan." },
    ],
    faqs: [
      { q: "How do you scope custom software projects?", a: "We start with a detailed discovery phase to understand your workflows, then deliver a fixed-scope proposal with clear deliverables and timeline." },
      { q: "What technologies do you use?", a: "We use modern stacks including React, Node.js, PostgreSQL, and cloud infrastructure. The tech choice depends on your specific requirements." },
      { q: "Can you integrate with our existing tools?", a: "Yes. We regularly integrate with ERPs, CRMs, accounting software, payment gateways, and third-party APIs." },
    ],
  },
  {
    slug: "erp-development",
    title: "ERP Development",
    category: "Enterprise Solutions",
    description:
      "Unified enterprise resource planning systems that bring your finance, HR, inventory, and reporting into one platform, built specifically for how your organisation operates.",
    features: [
      "Integrated finance, HR, inventory, and operations modules",
      "Real-time reporting dashboards with role-based access",
      "Automated workflows for approvals, procurement, and payroll",
    ],
    icon: "Building2",
    startsAt: "₹1,49,999",
    metaTitle: "ERP Development in Jaipur | DWS Web Services",
    metaDescription:
      "Custom ERP development integrating finance, HR, inventory, and reporting. Built for your organisation's specific workflows and scale.",
    longDescription:
      "Generic ERP platforms come with modules you never use and missing features you desperately need. We build custom ERP systems around your actual business processes. Finance, HR, inventory, procurement, and reporting modules are architected as a unified system with real-time dashboards, automated approval workflows, and role-based access control. The result is a single platform your team actually uses instead of working around.",
    whatsIncluded: [
      "Finance and accounts module with ledger and invoicing",
      "HR module with attendance, leave, and payroll",
      "Inventory management with purchase orders and stock alerts",
      "Role-based dashboards with real-time analytics",
      "Automated approval and procurement workflows",
      "Multi-branch and multi-user support",
      "Data migration from existing systems",
      "Team training and documentation",
    ],
    process: [
      { step: "01", title: "Business Process Mapping", text: "We document every department's workflow, data flow, and reporting needs before design begins." },
      { step: "02", title: "Module Design", text: "Each module is designed with your team's input, ensuring the system matches how you actually work." },
      { step: "03", title: "Development & Integration", text: "Modules are built and integrated incrementally with regular demos and feedback cycles." },
      { step: "04", title: "Migration & Training", text: "Data migration from existing systems, team training, and phased rollout to minimise disruption." },
    ],
    faqs: [
      { q: "How long does ERP development take?", a: "A core ERP with 3-4 modules typically takes 3-5 months. Complex multi-department systems may take 6-8 months with phased delivery." },
      { q: "Can you migrate data from our current system?", a: "Yes. We handle data migration from spreadsheets, legacy software, or existing ERP systems with validation and cleanup." },
      { q: "Is the ERP web-based or desktop?", a: "Web-based, accessible from any device with a browser. No software installation required for your team." },
    ],
  },
  {
    slug: "crm-development",
    title: "CRM Development",
    category: "Enterprise Solutions",
    description:
      "Custom CRM systems that track your entire lead pipeline from first contact to closed deal, with automated follow-ups, sales analytics, and team performance visibility.",
    features: [
      "Visual lead pipeline with drag-and-drop deal stages",
      "Automated follow-up sequences via email, SMS, and WhatsApp",
      "Sales analytics and team performance dashboards",
    ],
    icon: "Users",
    startsAt: "₹69,999",
    metaTitle: "CRM Development in Jaipur | DWS Web Services",
    metaDescription:
      "Custom CRM development with lead pipeline management, automated follow-ups, and sales analytics. Built for your sales process.",
    longDescription:
      "Off-the-shelf CRMs charge per seat and force you into their idea of a sales process. We build CRM systems that match your pipeline exactly. Track leads from first contact through every stage to close, automate follow-up sequences, and give your team clear visibility into conversion rates, deal values, and performance metrics. No per-seat pricing, no feature gates.",
    whatsIncluded: [
      "Custom lead pipeline with configurable deal stages",
      "Contact and company management with interaction history",
      "Automated follow-up sequences (email, SMS, WhatsApp)",
      "Sales analytics and conversion reporting",
      "Team assignment and performance tracking",
      "Integration with your website's contact forms",
      "Mobile-responsive interface for field sales teams",
      "Data import from existing spreadsheets or CRMs",
    ],
    process: [
      { step: "01", title: "Sales Process Analysis", text: "We map your current sales process, lead sources, and reporting needs to design the right CRM structure." },
      { step: "02", title: "Pipeline & UI Design", text: "Custom pipeline stages, contact views, and dashboard layouts designed for your team's daily workflow." },
      { step: "03", title: "Build & Automate", text: "CRM development with automated follow-ups, notifications, and integrations with your existing tools." },
      { step: "04", title: "Launch & Optimise", text: "Data migration, team onboarding, and iterative refinement based on real usage patterns." },
    ],
    faqs: [
      { q: "Can the CRM integrate with WhatsApp?", a: "Yes. We integrate WhatsApp Business API for automated messages, follow-ups, and lead notifications." },
      { q: "Is there a per-user or monthly fee?", a: "No. You pay once for development and own the system. Hosting costs are typically under ₹2,000/month." },
      { q: "Can I import my existing leads?", a: "Yes. We handle data import from spreadsheets, existing CRMs like HubSpot or Zoho, and Google Contacts." },
    ],
  },

  // ─── EdTech ───────────────────────────────────────────────────────────
  {
    slug: "school-management-software",
    title: "School Management Software",
    category: "EdTech",
    description:
      "Complete school administration platforms covering admissions, attendance, fee collection, exam management, and parent-teacher communication portals.",
    features: [
      "Admissions, enrollment, and student records management",
      "Online fee collection with automated receipt generation",
      "Parent and teacher portals with real-time communication",
    ],
    icon: "GraduationCap",
    startsAt: "₹59,999",
    metaTitle: "School Management Software in Jaipur | DWS Web Services",
    metaDescription:
      "Complete school management software with admissions, attendance, fees, exams, and parent-teacher portals. Built for schools in Jaipur and across India.",
    longDescription:
      "Managing a school with spreadsheets and WhatsApp groups creates administrative chaos. Our school management software gives your institution a single platform for admissions, student records, attendance tracking, fee collection with online payment, exam scheduling, grade management, and dedicated portals for parents and teachers. Built specifically for Indian schools with support for multiple academic sessions, fee structures, and board examination patterns.",
    whatsIncluded: [
      "Student admissions and enrollment management",
      "Attendance tracking (biometric or manual)",
      "Online fee collection with Razorpay/UPI integration",
      "Exam scheduling, grading, and report card generation",
      "Parent portal with attendance, fees, and exam access",
      "Teacher portal with class management tools",
      "SMS and notification system for announcements",
      "Multi-branch support for school chains",
    ],
    process: [
      { step: "01", title: "School Assessment", text: "We study your school's administrative workflow, fee structures, academic calendar, and communication needs." },
      { step: "02", title: "Module Configuration", text: "Modules are configured for your school's specific grade structure, subjects, fee cycles, and reporting format." },
      { step: "03", title: "Development & Testing", text: "Platform built with regular demos to school administrators and teachers for feedback and refinement." },
      { step: "04", title: "Deployment & Training", text: "Data migration, staff training, parent onboarding, and ongoing technical support." },
    ],
    faqs: [
      { q: "Can parents pay fees online?", a: "Yes. The system integrates with Razorpay and UPI for online fee payment with automated receipt generation." },
      { q: "Does it support multiple branches?", a: "Yes. Multi-branch support is included with centralised admin control and branch-level management." },
      { q: "Can teachers mark attendance from their phone?", a: "Yes. The teacher portal is fully mobile-responsive and supports attendance marking from any device." },
    ],
  },

  // ─── Mobile Apps ──────────────────────────────────────────────────────
  {
    slug: "android-app-development",
    title: "Android App Development",
    category: "Mobile Apps",
    description:
      "Native and cross-platform Android applications built with Flutter and React Native, from concept to Play Store listing with ongoing maintenance support.",
    features: [
      "Native-performance Android apps with Flutter or React Native",
      "Google Play Store listing and launch support",
      "Push notifications, offline mode, and API integrations",
    ],
    icon: "Smartphone",
    startsAt: "₹34,999",
    pricingSlug: "mobile-app-development",
    featured: true,
    metaTitle: "Android App Development in Jaipur | DWS Web Services",
    metaDescription:
      "Android app development with Flutter and React Native. From prototype to Play Store launch, built by experienced mobile developers in Jaipur.",
    longDescription:
      "We build Android applications that feel native, perform fast, and ship to the Play Store with complete listing optimisation. Using Flutter or React Native, your app gets native-level performance while sharing code for faster development and lower costs. Every project includes push notifications, offline capabilities, API backend integration, and Play Store submission with listing optimisation.",
    whatsIncluded: [
      "Custom Android app design and development",
      "Cross-platform development with Flutter or React Native",
      "API backend development and integration",
      "Push notification system",
      "Google Play Store submission and listing",
      "Performance optimisation and testing across devices",
      "30-day post-launch support and bug fixes",
    ],
    process: [
      { step: "01", title: "Discovery & Wireframing", text: "We define features, user flows, and create interactive wireframes for your review." },
      { step: "02", title: "UI Design", text: "Custom app interface design following Material Design guidelines for a native Android feel." },
      { step: "03", title: "Development & Testing", text: "App development with regular builds for testing on real devices throughout the process." },
      { step: "04", title: "Play Store Launch", text: "Play Store listing preparation, submission, and launch with ongoing support." },
    ],
    faqs: [
      { q: "Flutter or React Native?", a: "We recommend Flutter for most projects due to its performance and UI flexibility. React Native is better if you need extensive native module integration." },
      { q: "Can the app work offline?", a: "Yes. We implement local data caching so core features remain available without internet connectivity." },
      { q: "Do you handle Play Store submission?", a: "Yes. We prepare screenshots, descriptions, and handle the full submission and review process." },
    ],
  },
  {
    slug: "ios-app-development",
    title: "iOS App Development",
    category: "Mobile Apps",
    description:
      "iPhone and iPad applications built with Flutter and React Native, designed to meet Apple's Human Interface Guidelines and App Store requirements from day one.",
    features: [
      "iOS apps built with Flutter or React Native for native feel",
      "App Store submission with review guideline compliance",
      "Push notifications, in-app purchases, and API integrations",
    ],
    icon: "Apple",
    startsAt: "₹44,999",
    pricingSlug: "mobile-app-development",
    metaTitle: "iOS App Development in Jaipur | DWS Web Services",
    metaDescription:
      "iOS app development for iPhone and iPad with Flutter and React Native. App Store compliant builds from experienced developers in Jaipur.",
    longDescription:
      "Building for iOS means meeting Apple's strict quality standards for design, performance, and privacy. We build iOS applications using Flutter or React Native that look and feel native, follow Apple's Human Interface Guidelines, and pass App Store review on the first submission. Every project includes push notifications, API backend integration, and App Store listing with optimised metadata.",
    whatsIncluded: [
      "Custom iOS app design following Human Interface Guidelines",
      "Cross-platform development with Flutter or React Native",
      "API backend development and integration",
      "Push notification system via APNs",
      "App Store submission and review compliance",
      "In-app purchase integration (if applicable)",
      "Testing across iPhone and iPad devices",
      "30-day post-launch support and bug fixes",
    ],
    process: [
      { step: "01", title: "Discovery & Wireframing", text: "Feature scoping, user flow mapping, and interactive prototyping for your approval." },
      { step: "02", title: "UI Design", text: "Interface design following Apple's Human Interface Guidelines for a polished iOS experience." },
      { step: "03", title: "Development & Testing", text: "App development with TestFlight builds for real-device testing throughout the process." },
      { step: "04", title: "App Store Launch", text: "App Store listing, submission, review compliance, and launch support." },
    ],
    faqs: [
      { q: "Do I need a Mac to manage the app?", a: "No. We handle all Xcode builds and App Store submissions. You manage content through a web-based admin panel." },
      { q: "How long does App Store review take?", a: "Apple's review typically takes 1-3 days. We ensure compliance with their guidelines to avoid rejections." },
      { q: "Can you build for both Android and iOS together?", a: "Yes. Using Flutter or React Native, we build both platforms from a single codebase, saving time and cost." },
    ],
  },

  // ─── Design & Media ───────────────────────────────────────────────────
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    category: "Design & Media",
    description:
      "Research-driven interface design from wireframes through interactive prototypes to production-ready design systems, all delivered in Figma with developer handoff documentation.",
    features: [
      "Wireframes and interactive prototypes in Figma",
      "Design systems with reusable components and tokens",
      "User research and usability testing",
    ],
    icon: "Palette",
    startsAt: "₹14,999",
    featured: true,
    metaTitle: "UI/UX Design Services in Jaipur | DWS Web Services",
    metaDescription:
      "Professional UI/UX design services. Wireframes, prototypes, and design systems in Figma with developer handoff documentation.",
    longDescription:
      "Good design is not just aesthetics. It is how your product works. We deliver UI/UX design that starts with understanding your users and ends with pixel-perfect Figma files ready for development. Our process covers user research, information architecture, wireframing, visual design, interactive prototyping, and design system creation. Every deliverable includes developer handoff documentation with spacing, typography, and component specifications.",
    whatsIncluded: [
      "User research and competitive analysis",
      "Information architecture and user flow mapping",
      "Low-fidelity wireframes for structure validation",
      "High-fidelity visual design in Figma",
      "Interactive prototypes for user testing",
      "Design system with reusable components",
      "Developer handoff with specifications",
      "Two rounds of design revisions",
    ],
    process: [
      { step: "01", title: "Research & Strategy", text: "User research, competitive analysis, and information architecture to define the design direction." },
      { step: "02", title: "Wireframing", text: "Low-fidelity wireframes to validate structure, layout, and user flows before visual design begins." },
      { step: "03", title: "Visual Design", text: "High-fidelity Figma designs with your brand colours, typography, and imagery applied to every screen." },
      { step: "04", title: "Prototyping & Handoff", text: "Interactive prototypes for testing, plus complete developer handoff with component specs and assets." },
    ],
    faqs: [
      { q: "Do you design for web, mobile, or both?", a: "Both. We design responsive web interfaces and native mobile app screens, often as a unified design system." },
      { q: "What do I get at the end?", a: "Figma source files, interactive prototypes, design system documentation, and exported assets ready for development." },
      { q: "Can you work with our existing brand guidelines?", a: "Yes. We build on your existing brand identity, colours, typography, and visual language." },
    ],
  },
  {
    slug: "graphic-design-branding",
    title: "Graphic Design & Branding",
    category: "Design & Media",
    description:
      "Complete brand identity design from logo creation to comprehensive brand kits, social media creatives, brochures, and marketing collateral that maintains visual consistency.",
    features: [
      "Logo design with multiple concepts and revisions",
      "Brand kit with colour palette, typography, and usage guidelines",
      "Social media creatives, brochures, and marketing collateral",
    ],
    icon: "Brush",
    startsAt: "₹2,999",
    metaTitle: "Graphic Design & Branding in Jaipur | DWS Web Services",
    metaDescription:
      "Logo design, brand identity, social media creatives, and marketing collateral. Professional graphic design services in Jaipur.",
    longDescription:
      "Your brand's visual identity shapes how customers perceive your business before they read a single word. We create logos, brand kits, social media templates, brochures, business cards, and marketing collateral that maintain visual consistency across every touchpoint. Every brand kit includes colour palettes, typography selections, logo usage guidelines, and template files your team can use independently.",
    whatsIncluded: [
      "Logo design with 3 initial concepts",
      "Brand colour palette and typography selection",
      "Brand usage guidelines document",
      "Business card and letterhead design",
      "Social media profile and cover templates",
      "Marketing collateral (brochures, flyers)",
      "Source files in print and digital formats",
      "Two rounds of revisions per deliverable",
    ],
    process: [
      { step: "01", title: "Brand Discovery", text: "We understand your industry, target audience, brand personality, and competitive positioning." },
      { step: "02", title: "Concept Development", text: "Multiple logo concepts and visual directions presented for your feedback and selection." },
      { step: "03", title: "Design Refinement", text: "Selected direction refined into final logo, colour system, typography, and brand guidelines." },
      { step: "04", title: "Collateral & Delivery", text: "Business cards, social templates, and collateral designed. All source files delivered." },
    ],
    faqs: [
      { q: "How many logo concepts do I get?", a: "You receive 3 initial logo concepts with 2 rounds of revisions on the selected direction." },
      { q: "What file formats are delivered?", a: "SVG, PNG, PDF for digital use, and EPS/AI for print. All source files are included." },
      { q: "Can you design social media posts on a monthly basis?", a: "Yes. We offer ongoing social media creative packages. Contact us for a monthly retainer quote." },
    ],
  },

  // ─── Marketing & Growth ───────────────────────────────────────────────
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    category: "Marketing & Growth",
    description:
      "Performance-driven digital marketing across Meta Ads, Google Ads, and social media management. Every campaign is tracked end-to-end from ad spend to qualified lead.",
    features: [
      "Meta (Facebook/Instagram) and Google Ads campaign management",
      "Social media content planning and management",
      "Lead generation funnels with conversion tracking",
    ],
    icon: "TrendingUp",
    startsAt: "₹14,999/mo",
    featured: true,
    metaTitle: "Digital Marketing Agency in Jaipur | DWS Web Services",
    metaDescription:
      "Performance digital marketing with Meta Ads, Google Ads, and social media management. End-to-end lead generation and conversion tracking.",
    longDescription:
      "We run digital marketing campaigns that connect ad spend directly to revenue. No vanity metrics, no inflated impression counts. Every campaign across Meta Ads (Facebook, Instagram), Google Ads, and social media is tracked from click to qualified lead to closed deal. You get monthly reports showing cost per lead, conversion rates, and clear recommendations for scaling what works and cutting what does not.",
    whatsIncluded: [
      "Meta Ads (Facebook + Instagram) campaign setup and management",
      "Google Ads search and display campaign management",
      "Social media content calendar and posting",
      "Landing page creation for campaign funnels",
      "Conversion tracking and pixel setup",
      "Monthly performance reports with recommendations",
      "A/B testing of ad creatives and copy",
      "Lead nurturing workflow setup",
    ],
    process: [
      { step: "01", title: "Audit & Strategy", text: "We audit your current marketing, analyse competitors, and build a channel strategy with realistic targets." },
      { step: "02", title: "Campaign Setup", text: "Ad accounts configured, tracking pixels installed, audiences defined, and initial creatives launched." },
      { step: "03", title: "Optimisation", text: "Daily monitoring, bid adjustments, creative testing, and budget allocation based on performance data." },
      { step: "04", title: "Reporting & Scaling", text: "Monthly reports with cost-per-lead analysis and recommendations for scaling profitable campaigns." },
    ],
    faqs: [
      { q: "What's the minimum ad budget?", a: "We recommend a minimum monthly ad spend of ₹15,000-₹20,000 in addition to the management fee for meaningful results." },
      { q: "How soon will I see results?", a: "Initial leads typically arrive within the first 1-2 weeks. Campaign optimisation improves results over the first 2-3 months." },
      { q: "Do you manage social media posting?", a: "Yes. Content planning, creation, and posting across your social channels is included in our marketing packages." },
    ],
  },
  {
    slug: "seo",
    title: "SEO Optimisation",
    category: "Marketing & Growth",
    description:
      "Technical and local SEO for businesses targeting real purchase-intent searches. Google Business Profile optimisation, content strategy, and monthly ranking reports tied to actual enquiries.",
    features: [
      "Technical SEO audit and Core Web Vitals optimisation",
      "Google Business Profile setup and local search targeting",
      "Monthly ranking and conversion reports",
    ],
    icon: "Search",
    startsAt: "₹18,999/mo",
    pricingSlug: "seo",
    featured: true,
    metaTitle: "SEO Services in Jaipur | DWS Web Services",
    metaDescription:
      "Professional SEO services in Jaipur. Technical SEO, local search optimisation, Google Business Profile management, and monthly performance reporting.",
    longDescription:
      "SEO is not about keyword stuffing or buying backlinks. It is a technical discipline that connects your business to people actively searching for what you sell. We focus on technical SEO foundations (site speed, schema, crawlability), local search optimisation (Google Business Profile, localized landing pages), and content strategy built around commercial-intent keywords. Every month you receive reports that connect rankings to actual phone calls, direction requests, and enquiries.",
    whatsIncluded: [
      "Technical SEO audit and remediation",
      "Core Web Vitals and page speed optimisation",
      "Google Business Profile setup and management",
      "Local landing page creation for target areas",
      "On-page SEO with schema markup implementation",
      "Content strategy and keyword research",
      "Monthly ranking and traffic reports",
      "Competitor tracking and analysis",
    ],
    process: [
      { step: "01", title: "SEO Audit", text: "Complete technical audit of your site covering crawlability, speed, schema, and on-page factors." },
      { step: "02", title: "Foundation Work", text: "Technical fixes, schema implementation, Google Business Profile optimisation, and site speed improvements." },
      { step: "03", title: "Content & Links", text: "Keyword-targeted content creation, local landing pages, and organic link-building through quality content." },
      { step: "04", title: "Measure & Report", text: "Monthly reports connecting keyword rankings to actual business outcomes and enquiry volume." },
    ],
    faqs: [
      { q: "How long until SEO shows results?", a: "Meaningful ranking improvements typically appear within 3-4 months. Local SEO results often surface faster, within 6-8 weeks." },
      { q: "Do you guarantee first-page rankings?", a: "No legitimate SEO provider can guarantee specific rankings. We commit to transparent reporting and measurable improvement month over month." },
      { q: "What's the minimum commitment?", a: "We recommend a minimum 6-month engagement for SEO. Search engines need time to index changes and build authority." },
    ],
  },

  // ─── Existing: SaaS MVP ───────────────────────────────────────────────
  {
    slug: "saas-mvp",
    title: "SaaS MVP Development",
    category: "Web Engineering",
    description:
      "Rapid MVP builds for SaaS founders who need to validate ideas with real users fast. Full-stack product engineering from authentication and billing to deployment on edge infrastructure.",
    features: [
      "Full-stack SaaS architecture with auth, billing, and dashboards",
      "Rapid prototyping and iterative development sprints",
      "Production deployment on edge infrastructure",
    ],
    icon: "Rocket",
    startsAt: "₹49,999",
    pricingSlug: "saas-mvp",
    metaTitle: "SaaS MVP Development India | DWS Web Services",
    metaDescription:
      "Rapid SaaS MVP development. Full-stack product engineering from prototype to first paying users. Authentication, billing, and deployment included.",
    longDescription:
      "Building a SaaS product means making hundreds of architecture decisions that compound over time. We help founders make those decisions right from day one. Our SaaS MVP builds include user authentication, role-based access, billing integration (Stripe/Razorpay), admin dashboards, and deployment on serverless edge infrastructure. You get a production-ready product, not a demo.",
    whatsIncluded: [
      "Full-stack SaaS application development",
      "User authentication and role-based access control",
      "Billing and subscription management (Stripe/Razorpay)",
      "Admin dashboard with user and data management",
      "Database design and API architecture",
      "Deployment on edge infrastructure (Vercel/AWS)",
      "CI/CD pipeline setup",
      "30-day post-launch support",
    ],
    process: [
      { step: "01", title: "Product Strategy", text: "We define your core value proposition, user personas, and the minimum feature set to validate with real users." },
      { step: "02", title: "Architecture & Design", text: "Technical architecture, database design, and UI/UX design for the core user flows." },
      { step: "03", title: "Sprint Development", text: "Iterative development with weekly demos and continuous deployment to a staging environment." },
      { step: "04", title: "Launch & Iterate", text: "Production deployment, monitoring setup, and iterative improvements based on early user feedback." },
    ],
    faqs: [
      { q: "What is an MVP?", a: "A Minimum Viable Product is the simplest version of your SaaS idea that solves the core problem for real users and validates your business model." },
      { q: "How long does an MVP take?", a: "A focused MVP typically takes 4-8 weeks depending on complexity. We prioritise speed to market." },
      { q: "What tech stack do you use for SaaS?", a: "React, Next.js or TanStack Start for the frontend, Supabase or PostgreSQL for the database, and Vercel for deployment." },
    ],
  },

  // ─── Cloud & Support ──────────────────────────────────────────────────
  {
    slug: "web-hosting",
    title: "Web Hosting",
    category: "Cloud & Support",
    description:
      "Managed web hosting on fast, reliable infrastructure. We handle server configuration, SSL certificates, backups, and uptime monitoring so you focus on your business.",
    features: [
      "Managed hosting on modern cloud infrastructure",
      "SSL certificate installation and renewal",
      "Automated daily backups with one-click restore",
    ],
    icon: "Server",
    startsAt: "₹2,999/yr",
    metaTitle: "Web Hosting Services in Jaipur | DWS Web Services",
    metaDescription:
      "Managed web hosting with SSL, automated backups, and uptime monitoring. Fast, reliable hosting for businesses in Jaipur and across India.",
    longDescription:
      "Your website's performance starts with where it is hosted. We provide managed hosting on modern cloud infrastructure with SSL certificates, automated daily backups, uptime monitoring, and server-level security. No shared hosting slowdowns, no confusing cPanel dashboards. We configure and manage everything so your site loads fast and stays online.",
    whatsIncluded: [
      "Cloud hosting on reliable infrastructure",
      "SSL certificate setup and auto-renewal",
      "Automated daily backups",
      "Uptime monitoring with alert notifications",
      "Server security and firewall configuration",
      "Email hosting setup (if needed)",
      "CDN configuration for faster load times",
      "Technical support via email",
    ],
    process: [
      { step: "01", title: "Assessment", text: "We evaluate your site's requirements, expected traffic, and current hosting setup." },
      { step: "02", title: "Setup & Migration", text: "Server provisioned, SSL installed, and your site migrated with zero downtime." },
      { step: "03", title: "Configuration", text: "Backups automated, CDN configured, security rules applied, and monitoring activated." },
      { step: "04", title: "Ongoing Management", text: "Continuous monitoring, security patches, backup verification, and performance checks." },
    ],
    faqs: [
      { q: "Can you migrate my existing website?", a: "Yes. We handle full site migration from your current host to our managed infrastructure with zero downtime." },
      { q: "Is email hosting included?", a: "Basic email hosting can be included. For business email, we recommend Google Workspace or Zoho Mail." },
      { q: "What happens if my site goes down?", a: "Our monitoring systems detect outages within minutes and we respond immediately to restore service." },
    ],
  },
  {
    slug: "domain-registration",
    title: "Domain Registration",
    category: "Cloud & Support",
    description:
      "Domain name registration and DNS management handled end-to-end. We find the right domain for your brand, register it, configure DNS, and manage renewals.",
    features: [
      "Domain search, registration, and annual renewal management",
      "DNS configuration for website, email, and subdomains",
      "Domain transfer assistance from other registrars",
    ],
    icon: "AtSign",
    startsAt: "Domain cost + ₹500",
    metaTitle: "Domain Registration Services | DWS Web Services",
    metaDescription:
      "Domain registration and DNS management. We find, register, and configure your domain with ongoing renewal management.",
    longDescription:
      "Your domain name is the foundation of your online presence. We handle the entire process from searching for available domains to registration, DNS configuration, and ongoing renewal management. Whether you need a .com, .in, .co, or industry-specific domain, we help you choose a name that works for your brand and set it up correctly for your website, email, and any subdomains you need.",
    whatsIncluded: [
      "Domain name search and availability check",
      "Domain registration with a reputable registrar",
      "DNS configuration for website and email",
      "SSL-ready DNS setup",
      "Subdomain configuration if needed",
      "Annual renewal management",
      "Domain transfer assistance (if switching registrars)",
      "WHOIS privacy protection setup",
    ],
    process: [
      { step: "01", title: "Domain Search", text: "We search for available domains that match your brand name and suggest alternatives if needed." },
      { step: "02", title: "Registration", text: "Domain registered under your ownership with WHOIS privacy protection enabled." },
      { step: "03", title: "DNS Setup", text: "DNS records configured for your website, email, and any additional services." },
      { step: "04", title: "Renewal Management", text: "We track renewal dates and ensure your domain never expires unexpectedly." },
    ],
    faqs: [
      { q: "Who owns the domain?", a: "You do. The domain is registered under your name and contact details. We never retain ownership of client domains." },
      { q: "How much does a domain cost?", a: "Domain pricing varies by extension: .com domains typically cost ₹800-1,200/year, .in domains ₹400-700/year. Our service fee is ₹500." },
      { q: "Can you transfer my existing domain?", a: "Yes. We handle domain transfers from GoDaddy, Namecheap, or any other registrar to your preferred provider." },
    ],
  },
  {
    slug: "website-maintenance",
    title: "Website Maintenance & Support",
    category: "Cloud & Support",
    description:
      "Ongoing website maintenance including security updates, content changes, performance monitoring, and technical support to keep your site running at peak performance.",
    features: [
      "Regular security patches and dependency updates",
      "Content updates and minor design changes",
      "Performance monitoring and uptime tracking",
    ],
    icon: "Wrench",
    startsAt: "₹1,999/mo",
    metaTitle: "Website Maintenance & Support | DWS Web Services",
    metaDescription:
      "Ongoing website maintenance with security updates, content changes, performance monitoring, and technical support.",
    longDescription:
      "A website is not a one-time project. It needs regular maintenance to stay secure, performant, and relevant. Our maintenance plans cover security patches, dependency updates, content changes, performance monitoring, backup verification, and technical support. Whether you need weekly content updates or just want peace of mind that your site is secure and backed up, we have a plan that fits.",
    whatsIncluded: [
      "Monthly security patches and software updates",
      "Content updates (text, images, new pages)",
      "Performance monitoring and speed optimisation",
      "Daily backup verification",
      "Uptime monitoring with incident response",
      "Browser and device compatibility checks",
      "Monthly maintenance report",
      "Priority email and WhatsApp support",
    ],
    process: [
      { step: "01", title: "Site Audit", text: "We review your current site for security issues, outdated dependencies, and performance bottlenecks." },
      { step: "02", title: "Plan Setup", text: "Maintenance schedule established based on your site's technology stack and update frequency needs." },
      { step: "03", title: "Ongoing Maintenance", text: "Regular updates applied, content changes processed, and monitoring dashboards configured." },
      { step: "04", title: "Monthly Reporting", text: "Monthly report covering uptime, performance metrics, changes made, and recommendations." },
    ],
    faqs: [
      { q: "How quickly are content changes processed?", a: "Standard content updates are completed within 24-48 hours. Emergency changes are handled the same business day." },
      { q: "What if my site gets hacked?", a: "Our monitoring detects security issues early. If a breach occurs, we handle incident response, cleanup, and prevention measures." },
      { q: "Can I cancel anytime?", a: "Yes. Maintenance plans are month-to-month with no long-term commitment required." },
    ],
  },

  // ─── Existing: Mobile App Development (parent) ────────────────────────
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    category: "Mobile Apps",
    description:
      "Cross-platform mobile app development for Android and iOS using Flutter and React Native. From wireframes to app store launch with ongoing support.",
    features: [
      "Cross-platform apps with Flutter or React Native",
      "Play Store and App Store listing and submission",
      "Backend API development and integration",
    ],
    icon: "TabletSmartphone",
    startsAt: "₹34,999",
    pricingSlug: "mobile-app-development",
    metaTitle: "Mobile App Development in Jaipur | DWS Web Services",
    metaDescription:
      "Cross-platform mobile app development for Android and iOS. Flutter and React Native apps from concept to app store launch.",
    longDescription:
      "We build mobile applications that work across Android and iOS from a single codebase using Flutter or React Native. Every project includes custom UI design, backend API development, push notifications, offline support, and app store submission. Whether you need a customer-facing app, an internal business tool, or a marketplace, we deliver production-quality mobile experiences.",
    whatsIncluded: [
      "Cross-platform mobile app development",
      "Custom UI/UX design for mobile",
      "Backend API development",
      "Push notification system",
      "Play Store and App Store submission",
      "Offline data support",
      "Device testing across popular models",
      "30-day post-launch support",
    ],
    process: [
      { step: "01", title: "Discovery", text: "Feature definition, user flow mapping, and platform strategy (Flutter vs React Native)." },
      { step: "02", title: "Design", text: "Mobile-optimised UI design following platform-specific guidelines for Android and iOS." },
      { step: "03", title: "Development", text: "Sprint-based development with regular builds for real-device testing." },
      { step: "04", title: "Launch", text: "App store submissions, listing optimisation, and post-launch monitoring." },
    ],
    faqs: [
      { q: "Do you build for both Android and iOS?", a: "Yes. Using cross-platform frameworks, we build for both platforms simultaneously from a single codebase." },
      { q: "How long does app development take?", a: "A standard app takes 6-10 weeks. Complex apps with custom backends may take 12-16 weeks." },
      { q: "Do you provide source code?", a: "Yes. You receive full ownership of the source code, app store accounts, and all related assets." },
    ],
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────

/** Get a service by slug */
export function getService(slug: string): ServiceEntry | undefined {
  return services.find((s) => s.slug === slug);
}

/** Get featured services (for homepage) */
export function getFeaturedServices(count = 6): ServiceEntry[] {
  return services.filter((s) => s.featured).slice(0, count);
}

/** Get services by category */
export function getServicesByCategory(category: ServiceCategory): ServiceEntry[] {
  return services.filter((s) => s.category === category);
}

/** Get footer services (top 8) */
export function getFooterServices(): ServiceEntry[] {
  // Return a curated selection: first featured, then fill from remaining
  const featured = services.filter((s) => s.featured);
  const remaining = services.filter((s) => !s.featured);
  return [...featured, ...remaining].slice(0, 8);
}

/** Total count excluding the parent "Mobile App Development" entry shown as Android/iOS */
export function getDisplayServices(): ServiceEntry[] {
  // Exclude the generic "mobile-app-development" since we show Android and iOS separately
  return services.filter((s) => s.slug !== "mobile-app-development");
}
