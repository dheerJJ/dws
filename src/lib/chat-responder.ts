// Instant knowledge-based responder for DwS Assistant
// Provides sub-50ms responses grounded in verified studio pricing, services, team, and projects.

import { business } from "@/data/business";
import { servicePricing } from "@/data/pricing";
import { projects, tiers } from "@/data/site";
import type { UIMessage } from "ai";

function clean(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, " ");
}

export function generateInstantChatReply(query: string, _history: UIMessage[] = []): string {
  const q = clean(query);

  // 1. Mobile App Development
  if (q.includes("mobile") || q.includes("app") || q.includes("ios") || q.includes("android") || q.includes("flutter")) {
    return `### Mobile App Development at DwS

We engineer production-grade mobile applications built for fluid performance, responsive touch interactions, and commercial conversion.

- **Starting Price:** ₹35,999 (MVP & Cross-platform apps)
- **Tech Stack:** React Native, Flutter, Swift, Kotlin, modern TypeScript
- **Included Features:**
  - Native iOS & Android performance with offline caching
  - Clean authentication (OAuth, Supabase Auth, biometrics)
  - Scalable backend APIs & real-time database synchronization
  - Payment gateway integration (Razorpay, Stripe)
  - Complete App Store & Google Play Store submission support

View packages on our [Mobile App Development Pricing](/pricing/mobile-app-development) page or [Start a Project](/contact) to scope your build.`;
  }

  // 2. SaaS MVP Development
  if (q.includes("saas") || q.includes("mvp") || (q.includes("software") && !q.includes("website"))) {
    return `### SaaS MVP & Product Engineering

We build lean, scalable SaaS products designed to ship fast and reach your first paying users without technical debt.

- **Starting Price:** ₹49,999 (Production MVP)
- **Typical Timeline:** 4 to 6 weeks from kickoff to deployment
- **What's Included:**
  - Modern web application (React, TanStack, TypeScript, Node.js)
  - Relational database schema with Row Level Security (Supabase / PostgreSQL)
  - User authentication, session management, and onboarding flows
  - Subscription billing & checkout (Stripe or Razorpay)
  - Automated transactional emails & error tracking
  - Fully deployed on Cloudflare Workers or serverless cloud

Read our breakdown on [SaaS MVP Development](/pricing/saas-mvp-development) or [Book an Online Strategy Call](/contact).`;
  }

  // 3. Website Design & Architecture / Website Cost
  if (
    (q.includes("website") || q.includes("web design") || q.includes("build cost") || q.includes("site cost")) &&
    (q.includes("cost") || q.includes("price") || q.includes("rate") || q.includes("much") || q.includes("how"))
  ) {
    return `### Website Design & Architecture Pricing

All our websites are engineered with sub-second page loads, clean design systems, and conversion-focused copywriting—no bloated templates.

- **Starter Architecture:** ₹24,999 (Fixed fee)
  - 1–5 bespoke pages, responsive layout, SEO metadata, contact form, analytics.
  - Timeline: 7–10 business days.
- **Growth Architecture:** ₹54,999 (Fixed fee)
  - 6–12 custom pages, CMS or blog integration, conversion funnel, CRM integration, Core Web Vitals optimization.
  - Timeline: 2–3 weeks.
- **Custom Web Platform:** Starting at ₹95,000+
  - Bespoke portals, interactive web apps, complex API integrations.

Explore full package details on our [Website Architecture Pricing](/pricing/website-design-architecture) page or [Get a Fixed Quote](/contact).`;
  }

  // 4. SEO / Search & Revenue Infrastructure
  if (q.includes("seo") || q.includes("rank") || q.includes("google") || q.includes("search") || q.includes("traffic")) {
    return `### Search & Revenue Infrastructure (Technical & Local SEO)

We don't sell vanity traffic reports. Our SEO programmes focus on local ranking in Google Map Pack and organic conversion.

- **Local SEO Foundations:** ₹18,999 / month
  - Full Google Business Profile optimization, local citation audit, schema markup, on-page optimization for target city keywords.
- **Regional Scale:** ₹34,999 / month
  - Multi-location targeting, localized service landing pages, technical site audits, high-intent content strategy.
- **National Domination:** ₹64,999 / month
  - Enterprise technical SEO, Core Web Vitals audit, content cluster expansion, competitive search moat.

Read our practical guide [The Local SEO Checklist for Indian Businesses](/blog/local-seo-checklist-indian-businesses) or check out our [SEO Pricing](/pricing/search-revenue-infrastructure).`;
  }

  // 5. General Pricing / Packages
  if (q.includes("price") || q.includes("pricing") || q.includes("cost") || q.includes("rate") || q.includes("package") || q.includes("budget") || q.includes("fees")) {
    return `### DwS Transparent Pricing (INR)

We believe in upfront, transparent pricing with no hidden costs:

1. **Website Design & Architecture:** Starts at **₹24,999** (Starter) up to **₹54,999** (Growth)
2. **Mobile App Development:** Starts at **₹35,999** (Native / Cross-platform MVP)
3. **SaaS MVP Engineering:** Starts at **₹49,999** (Full production build in 4–6 weeks)
4. **Search & Technical SEO:** Starts at **₹18,999 / month** (Local foundations)
5. **Ongoing Studio Retainers:**
   - Strategic Advisory: ₹18,999 / month
   - Growth Partner: ₹34,999 / month
   - Full Studio Retainer: ₹64,999 / month

Check out our complete breakdown on the [Pricing Overview](/pricing) page or [Schedule a Free Strategy Call](/contact).`;
  }

  // 6. Projects / Portfolio / Case Studies
  if (q.includes("project") || q.includes("work") || q.includes("portfolio") || q.includes("case") || q.includes("built") || q.includes("client")) {
    return `### Recent Featured Work

Here are a few production systems and sites shipped by DwS:

- **Apex Logistics** (Enterprise Web & Portal)
  - High-throughput logistics tracking, quotation engine, and client dashboard. Built with sub-second speeds.
- **Zuno Health** (Healthcare Platform)
  - Telemedicine booking, doctor profiles, and HIPAA-ready appointment management.
- **Kavya Living** (Luxury Real Estate Showcase)
  - High-converting architectural walkthrough, lead capture pipeline, and interactive floor plans.
- **FleetPulse SaaS** (B2B Telematics MVP)
  - Live GPS fleet tracking, alert automation, and automated subscription billing shipped in 6 weeks.

Explore live demos and metrics on our [Case Studies](/case-studies) page.`;
  }

  // 7. Team / Founder
  if (q.includes("team") || q.includes("founder") || q.includes("who") || q.includes("dheerajj") || q.includes("kumawat") || q.includes("lead")) {
    return `### Founder-Led Craft & Execution

DwS is led by **Dheerajj Kumawat**, Founder & Technical Lead.

- **Role:** Directly leads system architecture, front-end performance, technical SEO, and conversion strategy on every client engagement.
- **Location:** Based in Jaipur, Rajasthan, India, serving founders and businesses across India, North America, and Europe.
- **Philosophy:** Engineering-first growth. Every page has an architectural hypothesis and explicit conversion goals.

Learn more on our [About Us](/about) page.`;
  }

  // 8. Contact / Hours / Location / Hiring
  if (q.includes("contact") || q.includes("email") || q.includes("phone") || q.includes("call") || q.includes("reach") || q.includes("address") || q.includes("location") || q.includes("hire") || q.includes("book")) {
    return `### Get in Touch with DwS

We respond to all project enquiries within 24 business hours.

- **Email:** [${business.email}](mailto:${business.email})
- **Phone:** [${business.phoneDisplay}](tel:${business.phone})
- **Studio Hours:** ${business.openingHoursDisplay}
- **Location:** ${business.address.streetAddress}, ${business.city}, ${business.state}, India
- **Booking:** [Book an Online Strategy Call](/contact)

Fill out our project inquiry form directly on the [Contact](/contact) page.`;
  }

  // 9. Timelines
  if (q.includes("timeline") || q.includes("how long") || q.includes("time") || q.includes("duration") || q.includes("fast")) {
    return `### Delivery Timelines

We work in focused sprints with guaranteed fixed delivery windows:

- **Starter Websites (1–5 pages):** 7 to 10 business days
- **Growth Websites (6–12 pages + CMS):** 2 to 3 weeks
- **Mobile Apps (MVP):** 3 to 5 weeks
- **SaaS MVPs:** 4 to 6 weeks from architecture kickoff to production launch
- **SEO Programmes:** Initial technical foundation in 14 days, measurable ranking improvements within 60–90 days

Ready to schedule your kickoff? [Talk to us at /contact](/contact).`;
  }

  // 10. Greetings
  if (q.includes("hi") || q.includes("hello") || q.includes("hey") || q.includes("good morning") || q.includes("good afternoon")) {
    return `Hello! Welcome to **DwS**.

I'm the DwS Assistant. I can immediately answer questions about:
- **Pricing & Packages** (Websites from ₹24,999, Mobile Apps from ₹35,999, SaaS MVPs from ₹49,999)
- **Our Services & Tech Stack**
- **Past Projects & Case Studies**
- **Timelines & Booking a Call**

What are you planning to build, or what can I help you explore today?`;
  }

  // 11. Default fallback
  return `### How We Can Help at DwS

We are a Jaipur-based digital engineering and growth studio helping founders and businesses ship high-converting websites, mobile apps, and SaaS MVPs.

**Our Core Offerings:**
- **Website Architecture:** Custom, fast, SEO-ready sites starting at ₹24,999 ([View Pricing](/pricing/website-design-architecture))
- **Mobile App Development:** iOS & Android cross-platform MVPs starting at ₹35,999 ([View Pricing](/pricing/mobile-app-development))
- **SaaS MVP Engineering:** Full production web app in 4–6 weeks starting at ₹49,999 ([View Pricing](/pricing/saas-mvp-development))
- **Search & Revenue Infrastructure:** Local & Technical SEO programmes from ₹18,999/mo ([View Pricing](/pricing/search-revenue-infrastructure))

Have a specific question about rates, features, or timelines? Ask me anything, or visit our [Contact Page](/contact) to connect directly with Founder Dheerajj Kumawat.`;
}
