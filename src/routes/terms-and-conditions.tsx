import { createFileRoute, Link } from "@tanstack/react-router";

import { Navbar } from "@/components/dws/Navbar";
import { Footer } from "@/components/dws/Contact";
import { Reveal } from "@/components/dws/Reveal";
import { useDwsBody } from "@/components/dws/useDwsBody";
import { business } from "@/data/business";
import {
  formatMetaDescription,
  formatMetaTitle,
  getBreadcrumbSchema,
  getCanonicalUrl,
  getOrganizationSchema,
} from "@/lib/seo";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => {
    const title = formatMetaTitle("Terms & Conditions");
    const description = formatMetaDescription(
      `Terms and conditions of service for ${business.name}. Review our engagement policies, intellectual property rights, and payment terms.`,
    );
    const canonical = getCanonicalUrl("/terms-and-conditions");
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
              { name: "Terms & Conditions", path: "/terms-and-conditions" },
            ]),
          ),
        },
      ],
    };
  },
  component: TermsAndConditionsPage,
});

function TermsAndConditionsPage() {
  useDwsBody();

  return (
    <>
      <Navbar />
      <main>
        <section className="dws-section pt-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <Reveal>
                  <nav aria-label="Breadcrumb" className="dws-mono small mb-4">
                    <Link to="/" className="text-muted text-decoration-none">
                      Home
                    </Link>{" "}
                    / <span className="text-white">Terms &amp; Conditions</span>
                  </nav>
                  <p className="dws-eyebrow mb-2">Legal</p>
                  <h1 className="display-5 mb-4">Terms &amp; Conditions</h1>
                  <p className="dws-muted small mb-5">
                    Last updated: September 30, 2026 | Effective date: September 30, 2026
                  </p>
                </Reveal>

                <div className="dws-prose">
                  <Reveal delay={0.05}>
                    <h2 className="h4 mb-3">1. Scope of Agreement</h2>
                    <p className="dws-muted mb-4">
                      These Terms and Conditions govern all contracts, proposals, and project
                      engagements between {business.name} (&quot;Studio&quot;) and the client
                      (&quot;Client&quot;) for website design, mobile app development, search engine
                      optimisation, and software engineering services.
                    </p>
                  </Reveal>

                  <Reveal delay={0.1}>
                    <h2 className="h4 mb-3">2. Project Scope & Deliverables</h2>
                    <p className="dws-muted mb-4">
                      Every project is governed by a mutually approved written scope document
                      detailing deliverables, timelines, and milestones. Any additional features,
                      scope expansions, or structural redesigns requested outside the original
                      statement of work will be quoted as a separate sprint or add-on.
                    </p>
                  </Reveal>

                  <Reveal delay={0.15}>
                    <h2 className="h4 mb-3">3. Intellectual Property & Code Ownership</h2>
                    <p className="dws-muted mb-4">
                      Upon receipt of full payment for agreed milestones, 100% ownership of custom
                      codebases, design assets, and content developed specifically for the Client
                      transfers fully to the Client. The Studio retains no proprietary lock-ins and
                      provides complete deployment configurations on the Client&apos;s own accounts.
                    </p>
                  </Reveal>

                  <Reveal delay={0.2}>
                    <h2 className="h4 mb-3">4. Payment Terms & Milestones</h2>
                    <p className="dws-muted mb-3">
                      Unless otherwise agreed in a written project agreement:
                    </p>
                    <ul className="dws-tier-list mb-4">
                      <li>
                        One-time projects: 50% initial deposit upon kick-off, 50% upon final
                        sign-off before production domain launch.
                      </li>
                      <li>
                        Monthly retainers: Invoiced at the beginning of each 30-day service cycle.
                      </li>
                      <li>
                        Third-party costs: Advertising spend (Google Ads, Meta Ads) and third-party
                        SaaS subscriptions are paid directly by the Client.
                      </li>
                    </ul>
                  </Reveal>

                  <Reveal delay={0.25}>
                    <h2 className="h4 mb-3">5. Warranties & Performance Guarantees</h2>
                    <p className="dws-muted mb-4">
                      The Studio builds all websites adhering to modern Core Web Vitals standards,
                      semantic HTML5, and technical SEO best practices. While we commit to
                      industry-leading execution, neither party can guarantee exact third-party
                      search engine ranking algorithms or ad auction outcomes.
                    </p>
                  </Reveal>

                  <Reveal delay={0.3}>
                    <h2 className="h4 mb-3">6. Governing Law & Jurisdiction</h2>
                    <p className="dws-muted mb-4">
                      These Terms are governed by the laws of India. Any disputes arising under this
                      agreement shall be subject to the exclusive jurisdiction of the competent
                      courts in {business.city},{business.state}, India.
                    </p>
                    <p className="dws-muted mb-4">
                      Questions regarding these terms? Contact us at:{" "}
                      <a href={`mailto:${business.email}`} className="text-white">
                        {business.email}
                      </a>
                    </p>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
