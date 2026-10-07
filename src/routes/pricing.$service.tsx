import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { Navbar } from "@/components/dws/Navbar";
import { Footer } from "@/components/dws/Contact";
import { Reveal } from "@/components/dws/Reveal";
import { useDwsBody } from "@/components/dws/useDwsBody";
import { ShinyText } from "@/components/dws/reactbits/ShinyText";
import { getServicePricing, servicePricing } from "@/data/pricing";
import { business } from "@/data/business";
import {
  formatMetaDescription,
  formatMetaTitle,
  getBreadcrumbSchema,
  getCanonicalUrl,
  getFaqSchema,
  getServiceSchema,
} from "@/lib/seo";

export const Route = createFileRoute("/pricing/$service")({
  loader: ({ params }) => {
    const service = getServicePricing(params.service);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Service not found | DWS Web Services" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { service } = loaderData;
    const title = formatMetaTitle(service.metaTitle, false);
    const description = formatMetaDescription(service.metaDescription);
    const canonical = getCanonicalUrl(`/pricing/${params.service}`);
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
          children: JSON.stringify(
            getServiceSchema({
              name: service.name,
              description: service.intro,
              slug: service.slug,
              offers: service.packages.map((p) => ({
                name: p.name,
                price: p.price,
                description: p.summary,
              })),
            }),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(getFaqSchema(service.faqs)),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            getBreadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Pricing", path: "/pricing" },
              { name: service.navLabel, path: `/pricing/${params.service}` },
            ]),
          ),
        },
      ],
    };
  },
  component: ServicePricingPage,
  notFoundComponent: ServiceNotFound,
});

function ServiceNotFound() {
  useDwsBody();
  return (
    <>
      <Navbar />
      <main className="dws-section pt-5">
        <div className="container">
          <h1 className="display-6 mb-3">Service package not found</h1>
          <p className="dws-muted mb-4">That pricing page does not exist or has been moved.</p>
          <Link to="/pricing" className="dws-btn dws-btn-solid">
            View all pricing plans
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

function ServicePricingPage() {
  useDwsBody();
  const { service } = Route.useLoaderData();
  const others = servicePricing.filter((s) => s.slug !== service.slug);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section with Breadcrumb & Primary H1 */}
        <section className="dws-section pt-5">
          <div className="container">
            <Reveal>
              <nav aria-label="Breadcrumb" className="dws-mono small mb-4">
                <Link to="/" className="text-muted text-decoration-none">
                  Home
                </Link>{" "}
                /{" "}
                <Link to="/pricing" className="text-muted text-decoration-none">
                  Pricing
                </Link>{" "}
                / <span className="text-white">{service.navLabel}</span>
              </nav>
            </Reveal>

            <div className="row">
              <div className="col-lg-9">
                <Reveal>
                  <span className="dws-badge mb-3 d-inline-block">
                    <ShinyText text={service.eyebrow} />
                  </span>
                </Reveal>

                {/* Exactly one H1 per page containing the primary keyword */}
                <Reveal delay={0.05}>
                  <h1 className="display-4 mb-4 text-white fw-bold">{service.h1}</h1>
                </Reveal>

                <Reveal delay={0.1}>
                  <p className="dws-hero-sub text-white mb-4">{service.headline}</p>
                  <p className="dws-muted mb-4 lead" style={{ maxWidth: "48rem" }}>
                    {service.intro}
                  </p>
                  <p className="dws-mono small text-white mb-0">
                    Pricing starting at <span className="dws-tier-price">{service.startsAt}</span>
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Tiers Section */}
        <section className="dws-section pt-0" aria-label="Pricing Packages">
          <div className="container">
            <Reveal>
              <h2 className="h3 mb-4 text-white">Transparent Service Packages</h2>
            </Reveal>
            <div className="row g-4 align-items-stretch">
              {service.packages.map((pkg, i) => (
                <div className="col-12 col-lg-4 d-flex" key={pkg.name}>
                  <Reveal delay={i * 0.08} className="w-100 d-flex flex-column h-100">
                    <article
                      className={`dws-tier h-100 d-flex flex-column w-100${pkg.featured ? " dws-tier-featured" : ""}`}
                    >
                      {pkg.featured && <span className="dws-tier-flag">Most popular</span>}
                      <h3 className="h5 mb-2 text-white">{pkg.name}</h3>
                      <p className="dws-muted small mb-4">{pkg.summary}</p>
                      <div className="d-flex align-items-baseline gap-2 mb-2">
                        <span className="dws-tier-price">{pkg.price}</span>
                        <span className="dws-muted small">{pkg.cadence}</span>
                      </div>
                      <p className="dws-mono small dws-muted mb-4">Timeline: {pkg.timeline}</p>
                      <ul className="dws-tier-list mb-4 flex-grow-1">
                        {pkg.features.map((f) => (
                          <li key={f}>{f}</li>
                        ))}
                      </ul>
                      <Link
                        to="/contact"
                        search={{ plan: `${service.name} - ${pkg.name}` }}
                        className={`dws-btn mt-auto w-100 text-center ${pkg.featured ? "dws-btn-solid" : "dws-btn-outline"}`}
                      >
                        Select {pkg.name} Package
                      </Link>
                    </article>
                  </Reveal>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What is Included & Addons */}
        <section className="dws-section pt-0">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-6">
                <Reveal>
                  <div className="dws-step h-100">
                    <p className="dws-eyebrow mb-3">Included in Every Engagement</p>
                    <h2 className="h4 mb-3 text-white">What You Receive</h2>
                    <ul className="dws-tier-list mb-0">
                      {service.includes.map((inc) => (
                        <li key={inc}>{inc}</li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>

              <div className="col-lg-6">
                <Reveal delay={0.1}>
                  <div className="dws-step h-100">
                    <p className="dws-eyebrow mb-3">Optional Extensions</p>
                    <h2 className="h4 mb-3 text-white">Available Add-ons</h2>
                    <ul className="dws-addon-list mb-0">
                      {service.addons.map((a) => (
                        <li key={a.name}>
                          <span>{a.name}</span>
                          <span className="dws-mono text-white">{a.price}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Who It Is For Section */}
        <section className="dws-section pt-0">
          <div className="container">
            <Reveal>
              <div className="dws-step p-4 p-md-5">
                <p className="dws-eyebrow mb-2">Ideal Client Profile</p>
                <h2 className="h3 mb-4 text-white">Who This Service Is Built For</h2>
                <div className="row g-3">
                  {service.whoItsFor.map((item, idx) => (
                    <div className="col-12 col-md-6" key={idx}>
                      <div className="d-flex align-items-start gap-3">
                        <span className="dws-mono text-white fw-bold">{`0${idx + 1}.`}</span>
                        <p className="dws-muted mb-0">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Process Section */}
        <section className="dws-section pt-0">
          <div className="container">
            <Reveal>
              <p className="dws-eyebrow mb-2">Execution Methodology</p>
              <h2 className="h3 mb-4 text-white">Our 4-Step Delivery Process</h2>
            </Reveal>
            <div className="row g-4">
              {service.processSteps.map((step, idx) => (
                <div className="col-12 col-md-6 col-lg-3" key={step.step}>
                  <Reveal delay={idx * 0.08}>
                    <div className="dws-step h-100">
                      <span className="dws-case-index dws-mono d-block mb-3">{step.step}</span>
                      <h3 className="h5 mb-2 text-white">{step.title}</h3>
                      <p className="dws-muted small mb-0">{step.description}</p>
                    </div>
                  </Reveal>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Case Studies & Knowledge Resources */}
        <section className="dws-section pt-0">
          <div className="container">
            <div className="dws-step p-4 p-md-5">
              <div className="row g-4 align-items-center">
                <div className="col-lg-6">
                  <p className="dws-eyebrow mb-2">Client Results & Case Studies</p>
                  <h3 className="h4 mb-3 text-white">See Our Work in Action</h3>
                  <p className="dws-muted mb-4">
                    Explore detailed project breakdowns showing how we built conversion-focused
                    websites and marketing systems for real businesses.
                  </p>
                  <Link to="/case-studies" className="dws-btn dws-btn-outline dws-btn-sm-tight">
                    Explore Case Studies
                  </Link>
                </div>
                <div className="col-lg-6">
                  <p className="dws-eyebrow mb-2">Knowledge Base</p>
                  <h3 className="h4 mb-3 text-white">Read Our Technical Guides</h3>
                  <p className="dws-muted mb-4">
                    Learn the frameworks, Core Web Vitals optimizations, and SEO strategies we
                    deploy for clients across India.
                  </p>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: service.relatedBlogSlug }}
                    className="dws-btn dws-btn-outline dws-btn-sm-tight"
                  >
                    Read Related Article
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="dws-section pt-0" aria-label="Frequently Asked Questions">
          <div className="container">
            <Reveal>
              <p className="dws-eyebrow mb-2">Clear Answers</p>
              <h2 className="h3 mb-4 text-white">Frequently Asked Questions</h2>
            </Reveal>
            <div className="row g-4">
              {service.faqs.map((f, i) => (
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

        {/* Call to Action Banner */}
        <section className="dws-section pt-0">
          <div className="container">
            <div className="dws-cta text-center p-5">
              <Reveal>
                <h2 className="display-6 mb-3 text-white">Ready to grow your business?</h2>
                <p className="dws-muted mb-4 mx-auto" style={{ maxWidth: "36rem" }}>
                  Schedule a free 30-minute discovery call to discuss your goals, review your
                  current setup, and get a clear, fixed-price proposal.
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <Link to="/contact" className="dws-btn dws-btn-solid">
                    Book a Free Strategy Call
                  </Link>
                  <a
                    href={`https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(business.whatsappDefaultMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dws-btn dws-btn-outline"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Other Services Navigation */}
        <section className="dws-section pt-0">
          <div className="container">
            <div className="dws-divider mb-4" />
            <Reveal>
              <p className="dws-eyebrow mb-4">Other Service Capabilities</p>
            </Reveal>
            <div className="row g-4 align-items-stretch">
              {others.map((s, i) => (
                <div className="col-12 col-md-4 d-flex" key={s.slug}>
                  <Reveal delay={i * 0.06} className="w-100 d-flex flex-column h-100">
                    <Link
                      to="/pricing/$service"
                      params={{ service: s.slug }}
                      className="dws-post-mini d-block h-100 w-100 text-decoration-none"
                    >
                      <span className="dws-mono small d-block mb-2 text-muted">
                        From {s.startsAt}
                      </span>
                      <span className="d-block text-white fw-semibold">{s.name}</span>
                    </Link>
                  </Reveal>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
