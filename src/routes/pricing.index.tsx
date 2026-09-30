import { createFileRoute, Link } from "@tanstack/react-router";

import { Navbar } from "@/components/dws/Navbar";
import { Footer } from "@/components/dws/Contact";
import { Reveal } from "@/components/dws/Reveal";
import { useDwsBody } from "@/components/dws/useDwsBody";
import { ShinyText } from "@/components/dws/reactbits/ShinyText";
import { tiers } from "@/data/site";
import { servicePricing } from "@/data/pricing";
import { business } from "@/data/business";
import {
  formatMetaDescription,
  formatMetaTitle,
  getBreadcrumbSchema,
  getCanonicalUrl,
  getOrganizationSchema,
} from "@/lib/seo";

export const Route = createFileRoute("/pricing/")({
  head: () => {
    const title = formatMetaTitle("Web Design & Marketing Pricing");
    const description = formatMetaDescription(
      "Transparent pricing packages for website design, SEO, and paid digital marketing from DWS Web Services in Jaipur. Fixed scope, clear deliverables, no lock-in."
    );
    const canonical = getCanonicalUrl("/pricing");
    const ogImageUrl = `${business.siteUrl}/og-image.png`;

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: canonical },
        { property: "og:image", content: ogImageUrl },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: ogImageUrl },
        { name: "geo.region", content: "IN-RJ" },
        { name: "geo.placename", content: "Jaipur" },
      ],
      links: [{ rel: "canonical", href: canonical }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(getOrganizationSchema()),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            getBreadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Pricing", path: "/pricing" },
            ])
          ),
        },
      ],
    };
  },
  component: PricingPage,
});

const faqs = [
  {
    q: "Are contracts locked in for long durations?",
    a: "No. Retainers run month-to-month after an initial 90-day learning period, which represents the minimum realistic window to build and prove compounding growth.",
  },
  {
    q: "What is not included in the retainer fees?",
    a: "Direct advertising budgets (Google or Meta) and proprietary third-party software subscriptions are paid directly by you, ensuring complete transparency with zero agency markup.",
  },
  {
    q: "Can packages be customized for our specific needs?",
    a: "Yes. Most client partnerships begin with a core tier and are tailored around your specific channels and commercial priorities during our initial strategy discovery call.",
  },
  {
    q: "Do you offer milestone payments on fixed-price projects?",
    a: "Yes. All one-time builds (such as website design or SaaS MVPs) are split into structured milestones: 50% upon contract commencement and 50% upon final launch sign-off.",
  },
  {
    q: "How do we get started?",
    a: "Book a 30-minute discovery strategy call or submit a contact enquiry. We review your requirements and provide a clear written proposal within one business day.",
  },
];

function PricingPage() {
  useDwsBody();

  return (
    <>
      <Navbar />
      <main>
        {/* Header Section with Visible Breadcrumbs and Single H1 */}
        <section className="dws-section pt-5">
          <div className="container">
            <Reveal>
              <nav aria-label="Breadcrumb" className="dws-mono small mb-4">
                <Link to="/" className="text-muted text-decoration-none">
                  Home
                </Link>{" "}
                / <span className="text-white">Pricing</span>
              </nav>
            </Reveal>

            <div className="row">
              <div className="col-lg-9">
                <Reveal>
                  <p className="dws-eyebrow mb-3">Transparent Rates</p>
                </Reveal>

                {/* Exactly one H1 per page containing primary keywords */}
                <h1 className="display-4 mb-4 text-white fw-bold">
                  Transparent Web Design &amp; Marketing Packages
                </h1>

                <Reveal delay={0.1}>
                  <p className="dws-hero-sub mb-0">
                    No hidden line items or surprise hourly fees. Choose a monthly growth retainer
                    or select a dedicated fixed-price project scope below.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Growth Tiers Overview */}
        <section className="dws-section pt-0">
          <div className="container">
            <Reveal>
              <h2 className="h3 mb-4 text-white">Full-Service Growth Retainers</h2>
            </Reveal>
            <div className="row g-4 align-items-stretch">
              {tiers.map((tier, i) => (
                <div className="col-12 col-lg-4" key={tier.name}>
                  <Reveal delay={i * 0.1}>
                    <article
                      className={`dws-tier h-100 d-flex flex-column${tier.featured ? " dws-tier-featured" : ""}`}
                    >
                      {tier.featured && <span className="dws-tier-flag">Most popular</span>}
                      <h3 className="h4 mb-2 text-white">{tier.name}</h3>
                      <p className="dws-muted small mb-4">{tier.summary}</p>
                      <div className="d-flex align-items-baseline gap-2 mb-4">
                        <span className="dws-tier-price">{tier.price}</span>
                        <span className="dws-muted small">{tier.cadence}</span>
                      </div>
                      <ul className="dws-tier-list mb-4">
                        {tier.features.map((f) => (
                          <li key={f}>{f}</li>
                        ))}
                      </ul>
                      <Link
                        to="/contact"
                        search={{ plan: tier.name }}
                        className={`dws-btn mt-auto w-100 text-center ${tier.featured ? "dws-btn-solid" : "dws-btn-outline"}`}
                      >
                        {tier.cta}
                      </Link>
                    </article>
                  </Reveal>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dedicated Service Pricing Breakdown */}
        <section className="dws-section pt-0">
          <div className="container">
            <Reveal>
              <p className="dws-eyebrow mb-2">Service-Specific Solutions</p>
              <h2 className="h3 mb-4 text-white">Fixed-Scope Project Rates</h2>
            </Reveal>
            <div className="row g-4">
              {servicePricing.map((s, i) => (
                <div className="col-12 col-md-6 col-lg-3" key={s.slug}>
                  <Reveal delay={i * 0.08}>
                    <div className="dws-step h-100 d-flex flex-column">
                      <p className="dws-mono small mb-2 text-muted">
                        <ShinyText text={`From ${s.startsAt}`} />
                      </p>
                      <h3 className="h5 mb-2 text-white">{s.name}</h3>
                      <p className="dws-muted small mb-4 flex-grow-1">{s.headline}</p>
                      <Link
                        to="/pricing/$service"
                        params={{ service: s.slug }}
                        className="dws-btn dws-btn-outline dws-btn-sm-tight mt-auto"
                      >
                        View {s.navLabel} Rates
                      </Link>
                    </div>
                  </Reveal>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="dws-section pt-0">
          <div className="container">
            <Reveal>
              <p className="dws-eyebrow mb-2">Clear Answers</p>
              <h2 className="h3 mb-4 text-white">Pricing &amp; Contract FAQs</h2>
            </Reveal>
            <div className="row g-4">
              {faqs.map((f, i) => (
                <div className="col-12 col-lg-6" key={f.q}>
                  <Reveal delay={i * 0.06}>
                    <div className="dws-step h-100">
                      <h3 className="h6 mb-2 text-white">{f.q}</h3>
                      <p className="dws-muted small mb-0">{f.a}</p>
                    </div>
                  </Reveal>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="dws-section pt-0">
          <div className="container">
            <div className="dws-cta text-center p-5">
              <Reveal>
                <h2 className="display-6 mb-3 text-white">Need a custom scope proposal?</h2>
                <p className="dws-muted mb-4 mx-auto" style={{ maxWidth: "36rem" }}>
                  Schedule a 30-minute discovery call to discuss your exact project goals, technical
                  requirements, and delivery milestones.
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <Link to="/contact" className="dws-btn dws-btn-solid">
                    Book a Free Strategy Call
                  </Link>
                  <Link to="/case-studies" className="dws-btn dws-btn-outline">
                    View Case Studies
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
