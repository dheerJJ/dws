import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { Navbar } from "@/components/dws/Navbar";
import { Footer } from "@/components/dws/Contact";
import { Reveal } from "@/components/dws/Reveal";
import { SmartImage } from "@/components/dws/SmartImage";
import { useDwsBody } from "@/components/dws/useDwsBody";
import { caseStudies } from "@/data/caseStudies";
import { business } from "@/data/business";
import {
  formatMetaDescription,
  formatMetaTitle,
  getBreadcrumbSchema,
  getCanonicalUrl,
  getOrganizationSchema,
} from "@/lib/seo";

export const Route = createFileRoute("/case-studies")({
  head: () => {
    const title = formatMetaTitle("Web Design & SEO Case Studies");
    const description = formatMetaDescription(
      "Before-and-after case studies from DWS Web Services: verified website builds for healthcare, luxury real estate, SaaS products, and personal branding in India.",
    );
    const canonical = getCanonicalUrl("/case-studies");
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
              { name: "Case Studies", path: "/case-studies" },
            ]),
          ),
        },
      ],
    };
  },
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
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
                / <span className="text-white">Case Studies</span>
              </nav>
            </Reveal>

            <div className="row">
              <div className="col-lg-9">
                <Reveal>
                  <p className="dws-eyebrow mb-3">Portfolio &amp; Proof</p>
                </Reveal>

                {/* Exactly one H1 per page containing primary keywords */}
                <h1 className="display-4 mb-4 text-white fw-bold">
                  Client Results &amp; Web Development Case Studies
                </h1>

                <Reveal delay={0.1}>
                  <p className="dws-hero-sub mb-0">
                    Four real builds, each with the starting challenge, the engineered solution, and
                    the live production result. No stock mockups - every screenshot below reflects
                    the application as it runs in production today.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Detailed Breakdown */}
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
                      <h2 className="h2 mb-2 text-white">{study.name}</h2>
                      <p className="dws-mono small dws-muted mb-0">
                        {study.sector} | {study.location}
                      </p>
                    </div>
                    <a
                      href={study.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="dws-btn dws-btn-outline dws-btn-sm-tight ms-lg-auto"
                    >
                      View Live Website
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
                  <div className="col-12 col-lg-7">
                    <Reveal delay={0.12}>
                      <div className="dws-case-card h-100">
                        {study.thumb && (
                          <SmartImage
                            src={study.thumb}
                            alt={`${study.name} - ${study.sector} website designed by ${business.name}`}
                            className="dws-case-img mb-4"
                          />
                        )}
                        <div className="dws-case-tagline">
                          <p className="dws-eyebrow mb-1">Impact &amp; Feedback</p>
                          <p className="h5 mb-0 text-white">&ldquo;{study.quote.text}&rdquo;</p>
                          <p className="dws-muted small mt-2 mb-0">
                            - {study.quote.author}, {study.quote.role}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  </div>

                  <div className="col-12 col-lg-5">
                    <div className="d-flex flex-column gap-3 h-100">
                      <Reveal delay={0.15}>
                        <div className="dws-step flex-fill">
                          <p className="dws-case-label dws-mono mb-2">Starting Challenge</p>
                          <p className="dws-muted mb-0">{study.before}</p>
                        </div>
                      </Reveal>

                      <Reveal delay={0.2}>
                        <div className="dws-step flex-fill">
                          <p className="dws-case-label dws-mono mb-2">Engineered Solution</p>
                          <p className="dws-muted mb-0">{study.after}</p>
                        </div>
                      </Reveal>

                      <Reveal delay={0.25}>
                        <div className="dws-step flex-fill">
                          <p className="dws-case-label dws-mono mb-2">Measurable Outcomes</p>
                          <div className="d-flex flex-wrap gap-2 mt-2">
                            {study.outcomes.map((o) => (
                              <span key={o.label} className="dws-chip">
                                {o.label}: <strong className="text-white">{o.value}</strong>
                              </span>
                            ))}
                          </div>
                        </div>
                      </Reveal>
                    </div>
                  </div>
                </div>

                <Reveal delay={0.3}>
                  <footer className="dws-case-foot mt-4">
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
                      <div className="dws-mono small dws-muted">
                        Scope: <span className="text-white">{study.scope.join(" · ")}</span>
                      </div>
                      <div className="d-flex gap-2">
                        <Link to="/contact" className="dws-btn dws-btn-solid dws-btn-sm-tight">
                          Request Similar Build
                        </Link>
                        <a
                          href={study.url}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="dws-btn dws-btn-outline dws-btn-sm-tight d-inline-flex align-items-center gap-2"
                        >
                          <span>Visit Live Project</span>
                          <ArrowUpRight size={14} aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </footer>
                </Reveal>
              </article>
            </div>
          </section>
        ))}

        {/* Call to Action */}
        <section className="dws-section pt-0">
          <div className="container">
            <div className="dws-cta text-center p-5">
              <Reveal>
                <h2 className="display-6 mb-3 text-white">Have a project in mind?</h2>
                <p className="dws-muted mb-4 mx-auto" style={{ maxWidth: "36rem" }}>
                  Every case study began with a single strategy conversation. Tell us your goals and
                  we will map out the architecture.
                </p>
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
