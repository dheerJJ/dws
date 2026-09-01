import { createFileRoute, Link } from "@tanstack/react-router";

import { Navbar } from "@/components/dws/Navbar";
import { Footer } from "@/components/dws/Contact";
import { Reveal } from "@/components/dws/Reveal";
import { SmartImage } from "@/components/dws/SmartImage";
import { useDwsBody } from "@/components/dws/useDwsBody";
import { SplitText } from "@/components/dws/reactbits/SplitText";
import { caseStudies } from "@/data/caseStudies";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Real DwS Client Projects & Results" },
      {
        name: "description",
        content:
          "See what DwS built: before-and-after case studies for a Jaipur dental hospital, a luxury real estate agency, a SaaS MVP and a founder portfolio.",
      },
      { property: "og:title", content: "Case Studies — Real DwS Client Projects & Results" },
      {
        property: "og:description",
        content:
          "Before-and-after breakdowns of real DwS builds across healthcare, real estate, SaaS and personal branding.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/case-studies" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  useDwsBody();

  return (
    <>
      <Navbar />
      <main>
        <section className="dws-section pt-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <Reveal>
                  <p className="dws-eyebrow mb-3">Case Studies</p>
                </Reveal>
                <h1 className="display-4 mb-4">
                  <SplitText as="span" text="Where they started. What we shipped." />
                </h1>
                <Reveal delay={0.15}>
                  <p className="dws-hero-sub mb-0">
                    Four real builds, each with the starting point, the work and the live result you
                    can open yourself. No stock mockups — every screenshot below is the site as it
                    runs today.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {caseStudies.map((study, index) => (
          <section className="dws-section pt-0" key={study.slug} id={study.slug}>
            <div className="container">
              <article className="dws-case">
                <Reveal>
                  <header className="dws-case-head">
                    <span className="dws-case-index dws-mono">
                      {`{${String(index + 1).padStart(2, "0")}}`}
                    </span>
                    <div>
                      <h2 className="h2 mb-2">{study.name}</h2>
                      <p className="dws-mono small dws-muted mb-0">
                        {study.sector} · {study.location}
                      </p>
                    </div>
                    <a
                      href={study.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="dws-btn dws-btn-outline dws-btn-sm-tight ms-lg-auto"
                    >
                      View live site
                    </a>
                  </header>
                </Reveal>

                <Reveal delay={0.08}>
                  <ul className="dws-case-scope list-unstyled">
                    {study.scope.map((item) => (
                      <li key={item} className="dws-chip">
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>

                <div className="row g-4 align-items-stretch">
                  <div className="col-12 col-lg-6">
                    <Reveal delay={0.12}>
                      <div className="dws-case-panel dws-case-before h-100">
                        <p className="dws-case-label dws-mono mb-3">Before</p>
                        {study.beforeThumb ? (
                          <SmartImage
                            src={study.beforeThumb}
                            alt={`${study.name} before the DwS rebuild`}
                            className="dws-case-shot mb-3"
                          />
                        ) : (
                          <div className="dws-case-before-visual" aria-hidden="true">
                            <span />
                            <span />
                            <span />
                          </div>
                        )}
                        <p className="dws-muted small mb-3">{study.before}</p>
                        <ul className="dws-case-list list-unstyled mb-0">
                          {study.beforePoints.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    </Reveal>
                  </div>

                  <div className="col-12 col-lg-6">
                    <Reveal delay={0.2}>
                      <div className="dws-case-panel dws-case-after h-100">
                        <p className="dws-case-label dws-mono mb-3">After</p>
                        <SmartImage
                          src={study.thumb}
                          alt={`${study.name} website built by DwS`}
                          className="dws-case-shot mb-3"
                        />
                        <p className="dws-muted small mb-3">{study.after}</p>
                        <ul className="dws-case-list dws-case-list-check list-unstyled mb-0">
                          {study.afterPoints.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    </Reveal>
                  </div>
                </div>

                <div className="row g-4 mt-1">
                  {study.outcomes.map((outcome, i) => (
                    <div className="col-12 col-sm-4" key={outcome.label}>
                      <Reveal delay={0.1 + i * 0.06}>
                        <div className="dws-case-metric h-100">
                          <span className="dws-case-metric-value">{outcome.value}</span>
                          <span className="dws-muted small">{outcome.label}</span>
                        </div>
                      </Reveal>
                    </div>
                  ))}
                </div>

                <Reveal delay={0.16}>
                  <figure className="dws-quote dws-case-quote mb-0">
                    <span className="dws-quote-mark" aria-hidden="true">
                      &ldquo;
                    </span>
                    <blockquote className="mb-4">{study.quote.text}</blockquote>
                    <figcaption className="dws-muted small">
                      <span className="text-white d-block">{study.quote.author}</span>
                      {study.quote.role}
                    </figcaption>
                  </figure>
                </Reveal>
              </article>
            </div>
          </section>
        ))}

        <section className="dws-section dws-cta">
          <div className="container text-center">
            <Reveal>
              <h2 className="display-5 mb-4">Want your project in this list?</h2>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <Link to="/contact" className="dws-btn dws-btn-solid">
                  Book a Free Strategy Call
                </Link>
                <Link to="/services" className="dws-btn dws-btn-outline">
                  Explore Services
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
