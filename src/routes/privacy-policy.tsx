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

export const Route = createFileRoute("/privacy-policy")({
  head: () => {
    const title = formatMetaTitle("Privacy Policy");
    const description = formatMetaDescription(
      `Privacy Policy for ${business.name}. Learn how we collect, handle, and protect your information when using our website and services.`,
    );
    const canonical = getCanonicalUrl("/privacy-policy");
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
              { name: "Privacy Policy", path: "/privacy-policy" },
            ]),
          ),
        },
      ],
    };
  },
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
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
                    / <span className="text-white">Privacy Policy</span>
                  </nav>
                  <p className="dws-eyebrow mb-2">Legal</p>
                  <h1 className="display-5 mb-4">Privacy Policy</h1>
                  <p className="dws-muted small mb-5">
                    Last updated: September 30, 2026 | Effective date: September 30, 2026
                  </p>
                </Reveal>

                <div className="dws-prose">
                  <Reveal delay={0.05}>
                    <h2 className="h4 mb-3">1. Overview</h2>
                    <p className="dws-muted mb-4">
                      {business.name} (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is
                      committed to protecting your privacy. This Privacy Policy outlines our
                      practices regarding the collection, use, and disclosure of personal data when
                      you visit our website ({business.siteUrl}) or engage with our web design,
                      mobile app development, SEO, and software services.
                    </p>
                  </Reveal>

                  <Reveal delay={0.1}>
                    <h2 className="h4 mb-3">2. Information We Collect</h2>
                    <p className="dws-muted mb-3">
                      We collect information directly from you when you submit enquiry forms,
                      schedule strategy calls, or communicate with us:
                    </p>
                    <ul className="dws-tier-list mb-4">
                      <li>Contact details: Name, email address, phone number, company name.</li>
                      <li>
                        Project requirements: Project descriptions, budget ranges, and timeline
                        preferences.
                      </li>
                      <li>
                        Technical data: IP address, browser type, referring pages, and device
                        information captured via privacy-focused analytics.
                      </li>
                    </ul>
                  </Reveal>

                  <Reveal delay={0.15}>
                    <h2 className="h4 mb-3">3. How We Use Your Information</h2>
                    <p className="dws-muted mb-3">We use your information exclusively to:</p>
                    <ul className="dws-tier-list mb-4">
                      <li>Respond to your enquiries and prepare project proposals.</li>
                      <li>
                        Deliver web development, search engine optimisation, and marketing services.
                      </li>
                      <li>Schedule and conduct discovery or strategy meetings.</li>
                      <li>Maintain billing records, tax compliance, and project agreements.</li>
                      <li>Ensure the security and reliability of our website.</li>
                    </ul>
                    <p className="dws-muted mb-4">
                      We never sell, rent, or trade your personal information to third parties.
                    </p>
                  </Reveal>

                  <Reveal delay={0.2}>
                    <h2 className="h4 mb-3">4. Client Confidentiality & Data Security</h2>
                    <p className="dws-muted mb-4">
                      All proprietary business information, credentials, and assets shared during
                      active engagements are treated as strictly confidential under non-disclosure
                      obligations. We implement standard encryption, access controls, and secure
                      hosting protocols to safeguard your data.
                    </p>
                  </Reveal>

                  <Reveal delay={0.25}>
                    <h2 className="h4 mb-3">5. Third-Party Integrations</h2>
                    <p className="dws-muted mb-4">
                      Our site may integrate trusted third-party providers for scheduling (Cal.com /
                      Calendly) and communications (WhatsApp). These providers process data in
                      accordance with their respective privacy policies.
                    </p>
                  </Reveal>

                  <Reveal delay={0.3}>
                    <h2 className="h4 mb-3">6. Your Rights & Contact Details</h2>
                    <p className="dws-muted mb-3">
                      Under Indian Information Technology laws and international data standards, you
                      have the right to request access to, correction of, or deletion of your
                      personal data.
                    </p>
                    <p className="dws-muted mb-4">
                      For privacy requests or queries, reach us at:
                      <br />
                      <strong>{business.name}</strong>
                      <br />
                      Email:{" "}
                      <a href={`mailto:${business.email}`} className="text-white">
                        {business.email}
                      </a>
                      <br />
                      Location: {business.city}, {business.state}, India
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
