// Edit this file to add or update articles. Each post gets a full page at /blog/<slug>.

import websiteConvertsCover from "@/assets/blog/website-converts.jpg.asset.json";
import saasMvpCover from "@/assets/blog/saas-mvp.jpg.asset.json";
import localSeoCover from "@/assets/blog/local-seo.jpg.asset.json";
import marketingBudgetCover from "@/assets/blog/marketing-budget.jpg.asset.json";

export type Section = {
  heading: string;
  paragraphs: string[];
  /** Optional bullet list rendered after the paragraphs. */
  bullets?: string[];
  /** Optional pull quote rendered at the end of the section. */
  quote?: string;
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO date
  readingTime: string;
  category: string;
  author: string;
  cover: string;
  coverAlt: string;
  /** Optional external link (original publication). */
  externalUrl?: string;
  intro: string[];
  takeaways: string[];
  sections: Section[];
};

export const posts: Post[] = [
  {
    slug: "website-that-converts-india-2026",
    title: "Websites That Convert in India: 2026 Blueprint",
    excerpt:
      "Most Indian business websites are brochures. Here is the structure we use at DWS Web Services to turn a site into a predictable enquiry engine.",
    date: "2026-08-12",
    readingTime: "8 min read",
    category: "Web Design",
    author: "Dheerajj Kumawat",
    cover: websiteConvertsCover.url,
    coverAlt: "Abstract wireframe of a website layout drawn in glowing white lines on black",
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
    cover: saasMvpCover.url,
    coverAlt: "Abstract product interface breaking into modular glass panels, white on black",
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
    cover: localSeoCover.url,
    coverAlt: "Glowing map pin above an abstract city street grid rendered in white lines",
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
    cover: marketingBudgetCover.url,
    coverAlt: "Rising line chart with coin stacks drawn in glowing white lines on black",
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
