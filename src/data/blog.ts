// Edit this file to add or update articles. Each post gets a full page at /blog/<slug>.

export type SubSection = {
  subheading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type TableData = {
  headers: string[];
  rows: string[][];
};

export type Section = {
  heading: string;
  paragraphs: string[];
  /** Optional bullet list rendered after the paragraphs. */
  bullets?: string[];
  /** Optional pull quote rendered at the end of the section. */
  quote?: string;
  /** Optional subsections with H3 headings. */
  subsections?: SubSection[];
  /** Optional comparison table. */
  table?: TableData;
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO date
  readingTime: string;
  category: string;
  author: string;
  cover?: string;
  coverAlt?: string;
  /** Optional external link (original publication). */
  externalUrl?: string;
  intro: string[];
  takeaways: string[];
  quickAnswer?: string;
  sections: Section[];
  faqs?: { q: string; a: string }[];
};

export const posts: Post[] = [
  {
    slug: "website-cost-in-india-2026",
    title: "Website Cost in India: 2026 Pricing Guide",
    excerpt:
      "A transparent breakdown of website cost in India in 2026. What ₹15,000, ₹65,000, and ₹1,50,000 actually buy, hidden fees to avoid, and field notes from Jaipur.",
    date: "2026-10-05",
    readingTime: "11 min read",
    category: "Web Design",
    author: "Dheerajj Kumawat",
    cover: "/blog/website-cost-guide.svg",
    coverAlt: "Technical comparison blueprint of website development cost in India",
    quickAnswer:
      "In 2026, a professional business website cost in India ranges from ₹25,000 to ₹75,000 for a multi-page service site, ₹45,000 to ₹1,50,000 for an e-commerce store, and ₹1,50,000+ for custom web applications. Basic template sites cost ₹5,000 to ₹15,000 but rarely rank or generate qualified leads.",
    intro: [
      "You can buy a website in India for ₹5,000, or you can pay ₹2,50,000 for one. Both sellers will look you in the eye and claim they are building you a business asset.",
      "If you run a business in Jaipur or anywhere in India, that massive price gap makes no sense at first glance. Why does one freelancer quote ₹8,000 for a ten-page site while an established studio quotes ₹65,000 for eight pages? What are you actually paying for, and where is the money wasted?",
      "Here is the honest breakdown of the real website cost in India in 2026. These are practical field notes from DWS Web Services, covering what each price tier delivers, the hidden costs agencies keep quiet about, and the red flags to watch for before paying an advance.",
    ],
    takeaways: [
      "A realistic business website cost in India sits between ₹25,000 and ₹75,000 for custom-built, fast-loading service sites.",
      "The ₹5,000 to ₹15,000 template sites rely on bloated themes that score poorly on mobile networks and fail Google Core Web Vitals.",
      "Hidden recurring costs include domain renewals, managed hosting, transactional WhatsApp API credits, and maintenance.",
      "Never compromise on asset ownership. Ensure you hold direct admin access to your domain, source code repository, and hosting console.",
    ],
    sections: [
      {
        heading: "1. The Three Price Brackets in the Indian Web Market",
        paragraphs: [
          "The Indian web market is divided into three distinct tiers. Knowing which tier you are purchasing from protects you from paying studio rates for a cloned theme or expecting custom software on a festival offer budget.",
        ],
        table: {
          headers: ["Tier & Price Range", "Typical Architecture", "Turnaround", "Best Suited For"],
          rows: [
            [
              "Basic Template: ₹5,000 - ₹15,000",
              "Pre-made WordPress theme or page builder (Elementor)",
              "3 - 7 days",
              "Temporary student projects or basic hobby sites",
            ],
            [
              "Custom Studio Site: ₹25,000 - ₹80,000",
              "Custom front-end (React/Modern CSS), SEO schema, analytics",
              "2 - 4 weeks",
              "Local clinics, coaching institutes, realtors, service businesses",
            ],
            [
              "Custom Web App / Portal: ₹1,50,000+",
              "Full-stack React, Supabase/Postgres, role auth, billing APIs",
              "6 - 10 weeks",
              "SaaS MVPs, custom ERPs, high-SKU e-commerce stores",
            ],
          ],
        },
        subsections: [
          {
            subheading: "Tier 1: ₹5,000 to ₹15,000 (Freelancer Template Sites)",
            paragraphs: [
              "This tier is what flooded Justdial and IndiaMART listings. The provider buys a $29 WordPress theme from ThemeForest or installs a cracked template, swaps your logo, pastes your raw text, and hits publish. There is zero custom design, no conversion strategy, and no performance optimization.",
              "The site might look acceptable on a desktop screen in an office. On a 4G Android phone in Jaipur, it takes seven seconds to load because of 40 active plugins. When you ask to change a layout six months later, the original freelancer has changed their phone number.",
            ],
          },
          {
            subheading: "Tier 2: ₹25,000 to ₹80,000 (Studio-Built Custom Sites)",
            paragraphs: [
              "This is the sweet spot for serious Indian service businesses. At DWS Web Services, our Launch landing page starts at ₹24,999 (7-10 days turnaround) and our multi-page Business website is ₹64,999 (3-4 weeks turnaround).",
              "At this level, you get custom UI/UX design wireframed to match your business offer, hand-crafted semantic code, local SEO schema markup, conversion paths connected to WhatsApp and CRM forms, and guaranteed sub-2-second load times on mobile devices.",
            ],
          },
          {
            subheading: "Tier 3: ₹1,50,000 and Above (Web Applications and Custom ERPs)",
            paragraphs: [
              "When your website requires internal databases, user authentication, inventory synchronization, custom booking rules, or role-based staff access, you are no longer building a brochure site. You are building software.",
              "Our custom web applications and SaaS prototypes start at ₹1,49,999. They run on modern architectures like React, TypeScript, and managed PostgreSQL databases, designed for high security and scale without ongoing agency lock-in.",
            ],
          },
        ],
      },
      {
        heading: "2. What Actually Drives the Website Cost in India?",
        paragraphs: [
          "When agencies pitch web development charges in India, they often hide behind technical jargon. In reality, four specific factors determine whether your project costs ₹20,000 or ₹90,000.",
        ],
        bullets: [
          "Architecture and Code Quality: A hand-coded React or static-first site requires skilled engineering hours, whereas dragging widgets in a visual page builder takes hours. Clean code delivers instant speeds and lasts for years without plugin security exploits.",
          "Conversion Copywriting: A website fails if the words fail. Quality studios spend days structuring your headlines, value propositions, and objection-handling FAQs instead of waiting for you to send a raw Word document.",
          "Mobile Performance on Indian Networks: Optimizing Core Web Vitals to pass Google thresholds on budget Android smartphones requires image compression (WebP/AVIF), asset deferral, and minimal script execution.",
          "Technical SEO and Schema: Implementing valid LocalBusiness, Service, and Breadcrumb JSON-LD structured data ensures search engines index your services and geographic locations accurately.",
        ],
      },
      {
        heading: "3. Hidden Costs Nobody Mentions on the First Call",
        paragraphs: [
          "A common frustration among first-time buyers in India is the hidden bill that arrives right before launch. A developer quotes ₹15,000, but demands another ₹18,000 before making the site live. Watch for these line items upfront:",
        ],
        bullets: [
          "Domain Registration: A .com or .in domain costs roughly ₹800 to ₹1,200 per year through reputable registrars like Cloudflare or Namecheap. Never let an agency register your domain under their personal account.",
          "Hosting Infrastructure: Static-first websites can run on global edge networks like Vercel or Cloudflare Pages for ₹0 on basic tiers, or ₹1,500 to ₹3,000 per month for managed production servers and databases. Avoid shared hosting cPanel servers that cost ₹2,000 per year and crash under ten concurrent visitors.",
          "WhatsApp Business API and SMS: If you want automated WhatsApp invoices or enquiry notifications, API providers charge per conversation (typically 35 to 80 paise per utility session).",
          "Website Maintenance Cost in India: Routine security updates, monthly off-site backups, and uptime monitoring typically run from ₹2,500 to ₹5,000 per month for business sites.",
        ],
        quote:
          "If an agency refuses to tell you where your website is hosted or charges you an ongoing fee just to keep your domain active, you do not own your website. You are renting it.",
      },
      {
        heading: "4. E-Commerce Website Cost in India: What You Need to Budget",
        paragraphs: [
          "If you plan to sell products online, your e-commerce website cost in India depends on catalog size, payment gateways, and shipping logistics integrations. A basic shop with 20 items is fundamentally different from a catalog of 2,000 SKUs.",
        ],
        bullets: [
          "Starter E-Commerce (Shopify / WooCommerce, under 50 products): ₹35,000 to ₹65,000 setup plus ₹2,500 to ₹3,000 monthly platform costs. Good for testing D2C concepts quickly.",
          "Custom E-Commerce (React front-end, headless database, 500+ SKUs): ₹95,000 to ₹2,20,000. Provides custom checkout logic, instant search, and zero monthly revenue commissions.",
          "Payment Gateway Integration: Razorpay, Cashfree, or PhonePe PG integration typically incurs 2% per domestic transaction plus GST, with minimal one-time setup fees if standard plugins are used.",
          "Logistics APIs: Shiprocket or Delhivery automated tracking setups add a small development time during checkout engineering.",
        ],
      },
      {
        heading: "5. What We Have Seen at DWS: Real Field Notes from Jaipur",
        paragraphs: [
          "We run DWS Web Services from Kalwar Road in Jaipur. Most of our clients come to us after spending ₹15,000 to ₹30,000 with a local agency and getting nothing to show for it except a broken site that nobody visits.",
          "Here is what happened with Shree Radhe Dental Hospital in Jaipur. Their clinic reputation lived offline through walk-ins and phone calls. Their online presence was nonexistent. We built a fast, mobile-first website with dedicated treatment pages, doctor credentials, and direct WhatsApp and tap-to-call booking paths. Instead of patients calling with basic questions about root canals or implants, they arrived already informed about treatments and doctors.",
          "For Agneepath Defence Academy in Jaipur, student admissions previously relied on printed physical flyers. We structured an admissions platform covering 10 recruitment courses, daily physical test requirements, and hostel facilities with sub-2-second load times on mobile. Demo inquiries immediately arrived pre-qualified.",
          "For Rudra Bhumi Realtors in Jaipur, property inquiries were scattered across disorganized WhatsApp messages. We built clear service separation across property sales, leasing, rentals, and management, so buyers arrived with clear context instead of sending blank 'price?' messages.",
        ],
      },
      {
        heading: "6. A Mistake We Made at DWS and What We Learned",
        paragraphs: [
          "We believe in total transparency. Early in our studio journey, we made a mistake: we accepted website projects before the client had written their copy or collected their service details.",
          "We would design wireframes, and then the project would freeze for six weeks waiting for the client to send doctor bios, price lists, or facility photographs. The timeline stretched, enthusiasm died, and launch dates were missed.",
          "What we learned: Design cannot fix missing content. Today, we run a content architecture and copywriting sprint during Week 1 before touching UI code. If copy is missing, we write it and get it approved first. Projects ship on time, on budget, and convert from day one.",
        ],
      },
      {
        heading: "7. Common Mistakes Indian Founders Make When Buying a Website",
        paragraphs: [
          "Before you approve any quotation, check whether you are falling into one of these four common traps:",
        ],
        bullets: [
          "Shopping by Page Count Instead of Business Outcomes: Asking 'How much for a 5-page site?' is the wrong question. A single focused landing page that answers objections and books calls will generate 5x more revenue than ten generic pages nobody reads.",
          "Ignoring Mobile Speed on 4G Networks: Over 85% of commercial traffic in India browses on mobile phones. If your agency tests your website only on their high-speed studio MacBook, test it yourself on a mid-range Android phone using cellular data.",
          "Surrendering Asset Ownership: Always buy your own domain on your own email address. If an agency registers your domain under their name, they can hold your brand hostage when you decide to part ways.",
          "Treating the Launch as the Finish Line: A website is a digital salesperson. It needs routine performance reviews, monthly analytics checks, and continuous conversion improvements.",
        ],
      },
      {
        heading: "8. The Pre-Hiring Action Checklist for Founders",
        paragraphs: [
          "Take this checklist into your next discovery call with any web design agency or freelancer:",
        ],
        bullets: [
          "Do I get direct administrative ownership of the domain name registrar account?",
          "Will the complete source code be pushed to a Git repository under my company's account?",
          "Does the contract include a guaranteed Core Web Vitals speed score on mobile?",
          "Are on-page SEO, title tags, meta descriptions, and LocalBusiness schema included in the quote?",
          "Is copywriting included, or am I expected to write all text myself?",
          "What is the exact post-launch bug fix and warranty period (DWS includes 30 days standard)?",
          "Are all third-party hosting, plugin, and API costs listed in writing?",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the average website cost in India for a small business?",
        a: "A professional, custom-designed small business website in India costs between ₹25,000 and ₹65,000 in 2026. This includes custom responsive design, conversion copywriting, on-page SEO, WhatsApp integration, and mobile speed optimization.",
      },
      {
        q: "Why do some agencies charge ₹5,000 while others charge ₹50,000?",
        a: "A ₹5,000 website is usually an unoptimized WordPress theme with pre-made templates, copied text, and slow loading times. A ₹50,000 website involves custom UI/UX design, tailored copywriting, clean engineering, fast mobile performance, and local search optimization.",
      },
      {
        q: "What are the recurring annual costs of maintaining a website in India?",
        a: "Expect to pay ₹800 to ₹1,200 per year for your domain name and ₹0 to ₹3,000 per month for reliable hosting. Optional maintenance and security care plans typically range from ₹2,500 to ₹5,000 per month.",
      },
      {
        q: "How long does it take to build a business website in India?",
        a: "A focused single-page landing page takes 7 to 10 days. A multi-page business website with custom service pages takes 3 to 4 weeks. Complex e-commerce stores and custom web portals take 6 to 10 weeks.",
      },
      {
        q: "Can I manage and update content on my website without technical knowledge?",
        a: "Yes. Modern websites are built with modular content structures or headless content managers, allowing you to update text, blog posts, service details, and pricing without writing a line of code.",
      },
    ],
  },
  {
    slug: "website-that-converts-india-2026",
    title: "Websites That Convert in India: 2026 Blueprint",
    excerpt:
      "Most Indian business websites are brochures. Here is the structure we use at DWS Web Services to turn a site into a predictable enquiry engine.",
    date: "2026-08-12",
    readingTime: "8 min read",
    category: "Web Design",
    author: "Dheerajj Kumawat",
    intro: [
      "A website earns its budget when it produces enquiries, not compliments. Yet most business sites in India are still built as digital brochures: a slider, an 'About Us' paragraph, a services grid and a contact form nobody fills.",
      "This is the exact structure we build at DWS Web Services, in the order we build it, and the numbers we watch after launch.",
    ],
    takeaways: [
      "Answer three questions in the first screen: what is this, is it for me, what happens next.",
      "Speed is a conversion feature - target under 2 seconds on 4G, not a perfect design in 5.",
      "One primary action, repeated. Competing CTAs split intent and kill conversion.",
      "Instrument scroll depth, form field drop-off and enquiry quality from day one.",
    ],
    sections: [
      {
        heading: "1. The first screen does one job",
        paragraphs: [
          "Visitors decide in roughly eight seconds whether to keep scrolling. That means the hero is not decoration - it is a qualification tool. A specific headline naming the outcome beats a clever tagline every time: 'Dental implants in Jaipur, done in one sitting' converts better than 'Creating beautiful smiles'.",
          "Directly under it, add immediate proof: a real number, a recognisable client, or a single verifiable result. Proof placed near the promise reduces the burden on the rest of the page.",
        ],
        bullets: [
          "Outcome-led headline naming the service and the place you serve.",
          "One line of sub-copy handling the obvious 'for whom' question.",
          "Primary CTA with a low-commitment verb - 'Get a quote', not 'Submit'.",
          "One proof element: rating, client count, or a named result.",
        ],
      },
      {
        heading: "2. Structure the page around objections, not departments",
        paragraphs: [
          "Internal org charts leak into websites: a page per department, none per doubt. Flip it. List the five reasons a qualified buyer would hesitate, then place a section answering each in the order the doubt appears.",
          "In practice this means pricing transparency sits immediately before or after the enquiry form, process explanations sit near the point where people wonder 'how long does this take', and social proof sits beside the highest-value service.",
        ],
        quote:
          "If a section does not answer a question or remove a doubt, it is decoration - delete it and the page converts better.",
      },
      {
        heading: "3. Speed is a conversion feature",
        paragraphs: [
          "On Indian mobile networks, a page that renders in under two seconds routinely outperforms a prettier page that takes five. We ship static-first pages, compress and correctly size every image, self-host fonts, and defer everything not required for the first screen.",
          "The biggest wins are unglamorous: removing an unused animation library, replacing a 1.8 MB hero JPEG with a 90 KB WebP, and cutting third-party scripts from eleven to three.",
        ],
        bullets: [
          "Largest Contentful Paint under 2.5s on a mid-range Android.",
          "Images in WebP/AVIF, sized to their container, lazy-loaded below the fold.",
          "No more than three third-party scripts on the critical path.",
        ],
      },
      {
        heading: "4. Make the enquiry the easiest thing on the page",
        paragraphs: [
          "Every extra field costs completions. Name, contact and one context field is enough for a first conversation - you can qualify further on the call. Add a WhatsApp path alongside the form: for a large share of Indian buyers it is the default channel, and it converts warmer.",
          "Confirm receipt instantly. An auto-reply that names what happens next and when reduces the 'did that even go through' drop-off and improves show-up rates on calls.",
        ],
      },
      {
        heading: "5. Instrument it, then iterate monthly",
        paragraphs: [
          "If you cannot see where people stop scrolling and which field they abandon, you are redesigning on opinion. One clean analytics setup - page views, scroll depth, CTA clicks, form starts, form completions, enquiry quality - pays for itself in the first month of iteration.",
          "Review it monthly with one hypothesis and one change. A site treated as a product compounds; a site treated as a project decays.",
        ],
      },
    ],
  },
  {
    slug: "saas-mvp-to-first-paying-users",
    title: "Shipping a SaaS MVP to First Paying Users",
    excerpt:
      "Scope, stack, and go-to-market decisions we make when building SaaS products for founders, and the features we deliberately cut.",
    date: "2026-07-03",
    readingTime: "9 min read",
    category: "SaaS",
    author: "Dheerajj Kumawat",
    intro: [
      "The fastest SaaS launches we have built shared one trait: the founder agreed to ship one workflow end to end instead of five workflows halfway.",
      "Your MVP is not a small version of the product. It is the single loop a user will pay to repeat.",
    ],
    takeaways: [
      "Define the paid loop in one sentence before any design work starts.",
      "Cut roles, permissions, notification centres and custom dashboards from v1.",
      "Ship billing in week one of coding, not after 'we get users'.",
      "Launch is a distribution problem - build the acquisition path in parallel with the product.",
    ],
    sections: [
      {
        heading: "Start from the loop, not the feature list",
        paragraphs: [
          "Write the loop as a sentence: 'A freelancer uploads an invoice, we chase the client, they get paid faster.' Everything that does not serve that sentence is version two. This one constraint typically cuts a six-month roadmap to a six-week build.",
          "We then wireframe only the screens the loop touches - usually four to six - and treat every additional screen request as a scope decision with a date attached.",
        ],
      },
      {
        heading: "What we cut from version one, by default",
        paragraphs: [
          "These features feel mandatory and almost never affect whether the first ten customers pay:",
        ],
        bullets: [
          "Team accounts, roles and granular permissions.",
          "An in-app notification centre (email is enough).",
          "Custom dashboards and report builders.",
          "Integrations nobody has asked for in a sales call.",
          "Dark mode, onboarding tours and settings pages full of toggles.",
        ],
        quote:
          "Keep authentication, billing, the core loop, and a way to talk to users. Cut the rest.",
      },
      {
        heading: "A stack that does not need a DevOps hire",
        paragraphs: [
          "A modern React front end, a managed Postgres database with row-level security, and serverless functions get a real product live in weeks. Cost stays near zero until traffic exists, which matters when you are pre-revenue.",
          "Two rules we hold to: security in the database rather than only in the UI, and no self-managed infrastructure until a customer's contract requires it.",
        ],
      },
      {
        heading: "Charge in week one",
        paragraphs: [
          "Free MVPs generate praise, not evidence. Wiring payments early forces pricing clarity and gives you the only signal that matters - someone entering card details for a problem you solve.",
          "Start with two plans and one currency. Pricing pages get sophisticated after you have customers, not before.",
        ],
      },
      {
        heading: "Build the launch while you build the product",
        paragraphs: [
          "Before code is finished we set up the landing page, a waitlist, three onboarding emails and one acquisition channel, so day one of launch is not day one of demand generation.",
          "One channel, done properly, beats five half-built ones. For most B2B SaaS in India that is founder-led outreach plus a search-intent landing page; for prosumer tools it is usually community and content.",
        ],
      },
    ],
  },
  {
    slug: "local-seo-checklist-indian-businesses",
    title: "Local SEO Checklist for Indian Businesses",
    excerpt:
      "A practical, no-fluff checklist to rank in your city: Google Business Profile, service pages, reviews and schema, in the order they matter.",
    date: "2026-06-18",
    readingTime: "7 min read",
    category: "SEO",
    author: "Dheerajj Kumawat",
    intro: [
      "Local search is the cheapest demand available to an Indian service business, and most competitors still get the basics wrong.",
      "Work this list in order. Skipping ahead is how agencies burn budget on backlinks while a wrong business category quietly caps your visibility.",
    ],
    takeaways: [
      "Google Business Profile before anything else - category, hours, photos, weekly posts.",
      "One real page per service and per city, never ten thin duplicates.",
      "Ask for reviews within 48 hours of delivery, and reply to every one.",
      "Add LocalBusiness schema so search engines stop guessing your details.",
    ],
    sections: [
      {
        heading: "Step 1 - Fix the Google Business Profile",
        paragraphs: [
          "This single asset drives most local enquiries. Get the primary category exactly right - 'Dental clinic' and 'Dental implants periodontist' surface for very different searches - then complete every field.",
        ],
        bullets: [
          "Exact primary category, plus two or three secondary ones.",
          "Real address or a defined service area, matching your website footer.",
          "Working hours including holidays, and a WhatsApp-capable number.",
          "At least fifteen genuine photos: exterior, interior, team, work.",
          "One post per week - activity is a ranking and trust signal.",
        ],
      },
      {
        heading: "Step 2 - Build real service and city pages",
        paragraphs: [
          "One page per service, and one per major city you actually serve, each with genuinely different copy, local proof and a visible call or enquiry action. Ten thin duplicated city pages perform worse than three real ones and can suppress the whole site.",
          "A page qualifies as 'real' when it names local landmarks or areas, shows local work, prices or ranges honestly, and answers the questions people in that city actually ask.",
        ],
      },
      {
        heading: "Step 3 - Turn delivery into reviews",
        paragraphs: [
          "Ask every satisfied client within 48 hours of delivery, with a direct review link sent over WhatsApp. Reply to all of them, including the critical ones - public, calm replies convert readers better than a spotless average.",
          "Volume and recency both matter. Twenty reviews spread across the year beats forty collected in one week, which also looks manufactured.",
        ],
      },
      {
        heading: "Step 4 - Add structured data",
        paragraphs: [
          "LocalBusiness structured data lets search engines read your name, area served, hours, price range and contact details without inference. It takes an hour and removes ambiguity permanently.",
          "Add FAQ schema on service pages where you genuinely answer common questions, and BlogPosting schema on articles.",
        ],
      },
      {
        heading: "Step 5 - Only now, links",
        paragraphs: [
          "Local directories, industry bodies, chambers of commerce, supplier and partner pages, and press in your own city move the needle far more than bulk backlinks from unrelated sites.",
          "Ten relevant local citations with consistent name, address and phone beat a thousand purchased links - and will not get the domain penalised.",
        ],
      },
    ],
  },
  {
    slug: "digital-marketing-budget-first-90-days",
    title: "How to Spend Your First ₹50,000 Ad Budget",
    excerpt:
      "Where a small marketing budget goes furthest in the first 90 days, and the three line items we tell clients to stop paying for.",
    date: "2026-05-26",
    readingTime: "7 min read",
    category: "Performance",
    author: "Dheerajj Kumawat",
    intro: [
      "With a small budget, the goal of the first 90 days is not scale - it is learning which message, audience and offer produce a qualified enquiry.",
      "Buy information first, volume second. Here is the split we use and what we refuse to fund.",
    ],
    takeaways: [
      "Roughly 50% high-intent search, 25% creative and landing pages, 25% held back.",
      "Judge everything on cost per qualified enquiry, never impressions or CTR.",
      "Stop funding broad awareness, follower packages and unused tools.",
      "Increase spend only after one channel produces enquiries at a price you can profitably pay.",
    ],
    sections: [
      {
        heading: "The default split",
        paragraphs: [
          "Around half goes into search ads on high-intent keywords - people already looking for what you sell. A quarter funds landing page and creative production, because ad money spent on a weak page is money donated. The last quarter stays unspent until week six, then doubles down on whatever worked.",
          "For a ₹50,000 quarter that is roughly ₹25,000 media, ₹12,500 assets, ₹12,500 reserve.",
        ],
      },
      {
        heading: "What to stop paying for",
        paragraphs: ["Three line items consume small budgets and teach you nothing:"],
        bullets: [
          "Broad-match awareness campaigns with no intent signal.",
          "Follower-count social packages and engagement pods.",
          "Tools you have not opened in a month.",
        ],
        quote:
          "If a line item cannot change a decision you will make this quarter, it is not a marketing cost - it is a subscription to feeling busy.",
      },
      {
        heading: "Set up measurement before spending a rupee",
        paragraphs: [
          "Conversion tracking, call tracking and a lead source field on your enquiry form. Without them you will end the quarter with traffic reports and no idea which rupee produced revenue.",
          "Define 'qualified' before launch - for most service businesses it is a contactable enquiry with budget and a timeline, not a form fill.",
        ],
      },
      {
        heading: "The week-six decision",
        paragraphs: [
          "By week six you should know your cost per qualified enquiry per channel. Kill the worst, keep the best, and release the reserve into the winner. Do not average across channels; averages hide the one thing working.",
          "Report on cost per qualified enquiry and closed revenue. Once a channel produces enquiries at a price you can profitably pay, that is the moment to scale - and only then.",
        ],
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
