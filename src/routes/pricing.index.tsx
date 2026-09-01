import { createFileRoute, Link } from "@tanstack/react-router";

import { Navbar } from "@/components/dws/Navbar";
import { Footer } from "@/components/dws/Contact";
import { Reveal } from "@/components/dws/Reveal";
import { useDwsBody } from "@/components/dws/useDwsBody";
import { SplitText } from "@/components/dws/reactbits/SplitText";
import { ShinyText } from "@/components/dws/reactbits/ShinyText";
import { tiers } from "@/data/site";
import { servicePricing } from "@/data/pricing";

export const Route = createFileRoute("/pricing/")({
  head: () => ({
    meta: [
      { title: "Pricing — DwS Digital Marketing Packages" },
      {
        name: "description",
        content:
          "Transparent monthly packages for websites, SEO, paid media and CRO. Starter, Growth and Scale tiers built for compounding results.",
      },
      { property: "og:title", content: "Pricing — DwS Digital Marketing Packages" },
      {
        property: "og:description",
        content:
          "Starter, Growth and Scale digital marketing retainers with clear deliverables and no long lock-ins.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/pricing" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: PricingPage,
});

const faqs = [
  {
    q: "Are contracts locked in?",
    a: "Retainers run month to month after an initial 90-day ramp, which is the minimum honest window to prove performance.",
  },
  {
    q: "What is not included?",
    a: "Ad spend, paid tooling and licensed media sit with you, billed directly so there is no markup.",
  },
  {
    q: "Can packages be customised?",
    a: "Yes. Most engagements start from a tier and get shaped around your channels in the strategy call.",
  },
];

function PricingPage() {
  useDwsBody();

  return (
    <>
      <Navbar />
      <main>
        <section className="dws-section pt-5 text-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <Reveal>
                  <span className="dws-badge mb-4 d-inline-block">
                    <ShinyText text="Transparent monthly pricing" />
                  </span>
                </Reveal>
                <h1 className="display-4 mb-4">
                  <SplitText as="span" text="Packages built around outcomes." />
                </h1>
                <Reveal delay={0.15}>
                  <p className="dws-hero-sub mb-0">
                    Pick the tier that matches your stage. Every package includes strategy, senior
                    execution and reporting you can actually act on.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section className="dws-section pt-0">
          <div className="container">
            <div className="row g-4 align-items-stretch">
              {tiers.map((tier, i) => (
                <div className="col-12 col-lg-4" key={tier.name}>
                  <Reveal delay={i * 0.1}>
                    <article
                      className={`dws-tier h-100 d-flex flex-column${tier.featured ? " dws-tier-featured" : ""}`}
                    >
                      {tier.featured && <span className="dws-tier-flag">Most popular</span>}
                      <h2 className="h5 mb-2">{tier.name}</h2>
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

        <section className="dws-section pt-0">
          <div className="container">
            <div className="dws-divider mb-5" />
            <div className="row align-items-end mb-4">
              <div className="col-lg-7">
                <Reveal>
                  <p className="dws-eyebrow mb-2">Service pricing</p>
                  <h2 className="dws-section-title display-6 mb-0">
                    Prefer a single service? See its full rate card.
                  </h2>
                </Reveal>
              </div>
              <div className="col-lg-5 mt-3 mt-lg-0">
                <Reveal delay={0.1}>
                  <p className="dws-muted mb-0">
                    Packages, timelines and add-on rates for each thing we do — priced separately
                    from the retainers above.
                  </p>
                </Reveal>
              </div>
            </div>
            <div className="row g-4">
              {servicePricing.map((s, i) => (
                <div className="col-12 col-sm-6 col-lg-3" key={s.slug}>
                  <Reveal delay={i * 0.08}>
                    <Link
                      to="/pricing/$service"
                      params={{ service: s.slug }}
                      className="dws-service-card h-100 d-flex flex-column"
                    >
                      <span className="dws-mono small dws-muted mb-2">{s.eyebrow}</span>
                      <span className="dws-service-card-title mb-3">{s.name}</span>
                      <span className="dws-muted small mb-4">{s.intro}</span>
                      <span className="dws-service-card-price mt-auto">
                        From {s.startsAt} <span aria-hidden="true">→</span>
                      </span>
                    </Link>
                  </Reveal>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="dws-section">
          <div className="container">
            <div className="row g-4">
              {faqs.map((f, i) => (
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
      </main>
      <Footer />
    </>
  );
}
