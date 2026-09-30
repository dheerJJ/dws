import { createFileRoute, Link } from "@tanstack/react-router";

import { Navbar } from "@/components/dws/Navbar";
import { Footer } from "@/components/dws/Contact";
import { Reveal } from "@/components/dws/Reveal";
import { useDwsBody } from "@/components/dws/useDwsBody";
import { ShinyText } from "@/components/dws/reactbits/ShinyText";
import { servicePricing } from "@/data/pricing";
import { business } from "@/data/business";
import {
  formatMetaDescription,
  formatMetaTitle,
  getBreadcrumbSchema,
  getCanonicalUrl,
  getOrganizationSchema,
} from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () => {
    const title = formatMetaTitle("SEO, Web Design & Marketing Services");
    const description = formatMetaDescription(
      "DWS Web Services in Jaipur: SEO, website design and development, digital marketing, and SaaS MVP builds with transparent packages, process, and rates."
    );
    const canonical = getCanonicalUrl("/services");
    const ogImageUrl = `${business.siteUrl}/og-image.png`;

    return {
      meta: [
        { title },
        { name: "description", content: description },
        {
          name: "keywords",
          content:
            "SEO services in Jaipur, website design company in Jaipur, digital marketing agency in Jaipur, SaaS MVP development India",
        },
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
              { name: "Services", path: "/services" },
            ])
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: `${business.name} Core Services`,
            itemListElement: servicePricing.map((service, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "Service",
                name: `${service.name} in ${business.city}`,
                description: service.intro,
                serviceType: service.name,
                url: getCanonicalUrl(`/pricing/${service.slug}`),
                provider: {
                  "@type": "ProfessionalService",
                  name: business.name,
                  telephone: business.phone,
                  email: business.email,
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: business.city,
                    addressRegion: business.state,
                    addressCountry: business.countryCode,
                  },
                },
              },
            })),
          }),
        },
      ],
    };
  },
  component: ServicesPage,
});

const process = [
  {
    step: "01",
    title: "Discovery Call",
    text: "We map your commercial goals, target audience, and define measurable revenue targets.",
  },
  {
    step: "02",
    title: "Scope & Quote",
    text: "You receive a fixed scope, fixed price, and explicit delivery timeline before work commences.",
  },
  {
    step: "03",
    title: "Build & Review",
    text: "Work ships in visible sprint stages, reviewed directly with our senior technical lead.",
  },
  {
    step: "04",
    title: "Launch & Iterate",
    text: "We deploy on production edge infrastructure, monitor Core Web Vitals, and scale conversion channels.",
  },
];

function ServicesPage() {
  useDwsBody();

  return (
    <>
      <Navbar />
      <main>
        {/* Header Section with Visible Breadcrumbs & Single H1 */}
        <section className="dws-section pt-5">
          <div className="container">
            <Reveal>
              <nav aria-label="Breadcrumb" className="dws-mono small mb-4">
                <Link to="/" className="text-muted text-decoration-none">
                  Home
                </Link>{" "}
                / <span className="text-white">Services</span>
              </nav>
            </Reveal>

            <div className="row">
              <div className="col-lg-9">
                <Reveal>
                  <p className="dws-eyebrow mb-3">Our Capabilities</p>
                </Reveal>

                {/* Exactly one H1 per page containing primary keywords */}
                <h1 className="display-4 mb-4 text-white fw-bold">
                  SEO, Website Design &amp; Digital Marketing Services in Jaipur
                </h1>

                <Reveal delay={0.1}>
                  <p className="dws-hero-sub mb-0">
                    DWS Web Services is deliberately focused on high-impact disciplines: custom website
                    design, local SEO, performance digital marketing, and SaaS MVP engineering. Every project is
                    built hands-on for businesses in {business.city}, {business.state}, and across India.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Local Jaipur SEO Highlight */}
        <section id="seo-jaipur" className="dws-section pt-0">
          <div className="container">
            <div className="row g-4">
              <div className="col-12 col-lg-7">
                <Reveal>
                  <p className="dws-eyebrow mb-2">Local SEO in Jaipur</p>
                  <h2 className="dws-section-title h1 mb-3">
                    Ranking in Jaipur Searches Where Real Purchases Happen
                  </h2>
                  <p className="dws-muted mb-3">
                    Local search is a specialized discipline. A clinic in Malviya Nagar or a real estate
                    consultancy in Vaishali Nagar does not compete nationally - they compete inside the Google Maps
                    3-pack and top localized organic results for high-intent queries. Our SEO work for Jaipur
                    businesses focuses on complete Google Business Profile optimization, localized landing pages,
                    lightning-fast load speeds, and structured schema markup.
                  </p>
                  <p className="dws-muted mb-4">
                    You receive monthly reporting connecting rankings directly to phone calls, direction
                    requests, and qualified enquiries instead of vanity keyword counts.
                  </p>
                  <div className="d-flex flex-wrap gap-3">
                    <Link
                      to="/pricing/$service"
                      params={{ service: "seo" }}
                      className="dws-btn dws-btn-solid dws-btn-sm-tight"
                    >
                      View SEO Packages &amp; Rates
                    </Link>
                    <Link to="/case-studies" className="dws-btn dws-btn-outline dws-btn-sm-tight">
                      Review Local Case Studies
                    </Link>
                  </div>
                </Reveal>
              </div>

              <div className="col-12 col-lg-5">
                <Reveal delay={0.12}>
                  <div className="dws-step h-100">
                    <p className="dws-case-label dws-mono mb-3">Local Jaipur SEO Checklist</p>
                    <ul className="dws-case-list dws-case-list-check list-unstyled mb-0">
                      <li>Google Business Profile setup and weekly geo-posts</li>
                      <li>Consistent Name, Address, and Phone across directories</li>
                      <li>Locality pages targeted to real Jaipur search intent</li>
                      <li>LocalBusiness and ProfessionalService schema markup</li>
                      <li>Core Web Vitals and mobile 4G performance tuning</li>
                      <li>Systematic customer review generation workflow</li>
                      <li>Monthly keyword ranking and conversion reporting</li>
                    </ul>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Core Services Breakdown */}
        {servicePricing.map((service, index) => (
          <section className="dws-section pt-0" key={service.slug} id={service.slug}>
            <div className="container">
              <div className="dws-service-block">
                <div className="row g-4">
                  <div className="col-12 col-lg-5">
                    <Reveal>
                      <span className="dws-case-index dws-mono d-block mb-3">
                        {`{${String(index + 1).padStart(2, "0")}}`}
                      </span>
                      <h2 className="h2 mb-3 text-white">{service.name}</h2>
                      <p className="dws-muted mb-4">{service.intro}</p>
                      <p className="dws-mono small mb-4 text-white">
                        <ShinyText text={`Starting ${service.startsAt}`} />
                      </p>
                      <Link
                        to="/pricing/$service"
                        params={{ service: service.slug }}
                        className="dws-btn dws-btn-outline dws-btn-sm-tight"
                      >
                        Explore {service.navLabel} Packages
                      </Link>
                    </Reveal>
                  </div>

                  <div className="col-12 col-lg-7">
                    <div className="row g-4">
                      <div className="col-12 col-md-6">
                        <Reveal delay={0.1}>
                          <div className="dws-step h-100">
                            <p className="dws-case-label dws-mono mb-3">What is Included</p>
                            <ul className="dws-case-list dws-case-list-check list-unstyled mb-0">
                              {service.includes.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        </Reveal>
                      </div>

                      <div className="col-12 col-md-6">
                        <Reveal delay={0.15}>
                          <div className="dws-step h-100">
                            <p className="dws-case-label dws-mono mb-3">Package Options</p>
                            <ul className="list-unstyled mb-0">
                              {service.packages.map((pkg) => (
                                <li key={pkg.name} className="mb-3 pb-3 border-bottom border-secondary border-opacity-25">
                                  <div className="d-flex justify-content-between align-items-baseline mb-1">
                                    <strong className="text-white">{pkg.name}</strong>
                                    <span className="dws-mono small text-white">{pkg.price}</span>
                                  </div>
                                  <p className="dws-muted small mb-0">{pkg.summary}</p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </Reveal>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Global Process Section */}
        <section className="dws-section pt-0">
          <div className="container">
            <Reveal>
              <p className="dws-eyebrow mb-2">Our Process</p>
              <h2 className="display-6 mb-4 text-white">How We Deliver Results</h2>
            </Reveal>

            <div className="row g-4">
              {process.map((p, idx) => (
                <div className="col-12 col-md-6 col-lg-3" key={p.step}>
                  <Reveal delay={idx * 0.08}>
                    <div className="dws-step h-100">
                      <span className="dws-case-index dws-mono d-block mb-3">{p.step}</span>
                      <h3 className="h5 mb-2 text-white">{p.title}</h3>
                      <p className="dws-muted small mb-0">{p.text}</p>
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
                <h2 className="display-6 mb-3 text-white">Let&apos;s build your next growth curve</h2>
                <p className="dws-muted mb-4 mx-auto" style={{ maxWidth: "36rem" }}>
                  Tell us where you want your business to be in the next 12 months. We will map the strategy
                  in a focused 30-minute call.
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <Link to="/contact" className="dws-btn dws-btn-solid">
                    Book a Free Strategy Call
                  </Link>
                  <Link to="/pricing" className="dws-btn dws-btn-outline">
                    Compare All Pricing Plans
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
