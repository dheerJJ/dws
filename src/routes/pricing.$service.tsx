import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { Navbar } from "@/components/dws/Navbar";
import { Footer } from "@/components/dws/Contact";
import { Reveal } from "@/components/dws/Reveal";
import { useDwsBody } from "@/components/dws/useDwsBody";
import { SplitText } from "@/components/dws/reactbits/SplitText";
import { ShinyText } from "@/components/dws/reactbits/ShinyText";
import { getServicePricing, servicePricing } from "@/data/pricing";
import { business } from "@/data/business";

export const Route = createFileRoute("/pricing/$service")({
  loader: ({ params }) => {
    const service = getServicePricing(params.service);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Package not found — DwS" }, { name: "robots", content: "noindex" }],
      };
    }
    const { service } = loaderData;
    return {
      meta: [
        { title: service.metaTitle },
        { name: "description", content: service.metaDescription },
        { property: "og:title", content: service.metaTitle },
        { property: "og:description", content: service.metaDescription },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `/pricing/${params.service}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/pricing/${params.service}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.name,
            description: service.metaDescription,
            provider: { "@type": "Organization", name: business.name },
            areaServed: business.areaServed,
            offers: service.packages.map((p) => ({
              "@type": "Offer",
              name: p.name,
              price: p.price,
              priceCurrency: "INR",
              description: p.summary,
            })),
          }),
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
          <h1 className="display-6 mb-3">Package not found</h1>
          <p className="dws-muted mb-4">That pricing page doesn't exist.</p>
          <Link to="/pricing" className="dws-btn dws-btn-solid">
            Back to pricing
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
        <section className="dws-section pt-5">
          <div className="container">
            <Reveal>
              <Link to="/pricing" className="dws-post-back dws-mono small d-inline-block mb-4">
                ← All pricing
              </Link>
            </Reveal>
            <div className="row">
              <div className="col-lg-9">
                <Reveal>
                  <span className="dws-badge mb-4 d-inline-block">
                    <ShinyText text={service.eyebrow} />
                  </span>
                </Reveal>
                <h1 className="display-4 mb-4">
                  <SplitText as="span" text={service.headline} />
                </h1>
                <Reveal delay={0.15}>
                  <p className="dws-hero-sub mb-4">{service.intro}</p>
                  <p className="dws-muted mb-0">
                    Starts at <span className="dws-tier-price">{service.startsAt}</span>
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section className="dws-section pt-0">
          <div className="container">
            <div className="row g-4 align-items-stretch">
              {service.packages.map((pkg, i) => (
                <div className="col-12 col-lg-4" key={pkg.name}>
                  <Reveal delay={i * 0.1}>
                    <article
                      className={`dws-tier h-100 d-flex flex-column${pkg.featured ? " dws-tier-featured" : ""}`}
                    >
                      {pkg.featured && <span className="dws-tier-flag">Most popular</span>}
                      <h2 className="h5 mb-2">{pkg.name}</h2>
                      <p className="dws-muted small mb-4">{pkg.summary}</p>
                      <div className="d-flex align-items-baseline gap-2 mb-2">
                        <span className="dws-tier-price">{pkg.price}</span>
                        <span className="dws-muted small">{pkg.cadence}</span>
                      </div>
                      <p className="dws-mono small dws-muted mb-4">Timeline: {pkg.timeline}</p>
                      <ul className="dws-tier-list mb-4">
                        {pkg.features.map((f) => (
                          <li key={f}>{f}</li>
                        ))}
                      </ul>
                      <Link
                        to="/contact"
                        search={{ plan: `${service.name} — ${pkg.name}` }}
                        className={`dws-btn mt-auto w-100 text-center ${pkg.featured ? "dws-btn-solid" : "dws-btn-outline"}`}
                      >
                        Get started
                      </Link>
                    </article>
                  </Reveal>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="dws-section pt-0">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-6">
                <Reveal>
                  <div className="dws-step h-100">
                    <p className="dws-eyebrow mb-3">Included in every package</p>
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
                    <p className="dws-eyebrow mb-3">Add-ons</p>
                    <ul className="dws-addon-list mb-0">
                      {service.addons.map((a) => (
                        <li key={a.name}>
                          <span>{a.name}</span>
                          <span className="dws-mono">{a.price}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section className="dws-section pt-0">
          <div className="container">
            <Reveal>
              <p className="dws-eyebrow mb-4">Questions</p>
            </Reveal>
            <div className="row g-4">
              {service.faqs.map((f, i) => (
                <div className="col-12 col-lg-4" key={f.q}>
                  <Reveal delay={i * 0.08}>
                    <div className="dws-step h-100">
                      <h3 className="h6 mb-2">{f.q}</h3>
                      <p className="dws-muted small mb-0">{f.a}</p>
                    </div>
                  </Reveal>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="dws-section pt-0">
          <div className="container">
            <div className="dws-divider mb-4" />
            <Reveal>
              <p className="dws-eyebrow mb-4">Other service pricing</p>
            </Reveal>
            <div className="row g-4">
              {others.map((s, i) => (
                <div className="col-12 col-md-4" key={s.slug}>
                  <Reveal delay={i * 0.06}>
                    <Link
                      to="/pricing/$service"
                      params={{ service: s.slug }}
                      className="dws-post-mini d-block h-100"
                    >
                      <span className="dws-mono small d-block mb-2">From {s.startsAt}</span>
                      <span className="d-block">{s.name}</span>
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
