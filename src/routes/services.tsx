import { createFileRoute, Link } from "@tanstack/react-router";

import { Navbar } from "@/components/dws/Navbar";
import { Footer } from "@/components/dws/Contact";
import { Reveal } from "@/components/dws/Reveal";
import { useDwsBody } from "@/components/dws/useDwsBody";
import { SplitText } from "@/components/dws/reactbits/SplitText";
import { ShinyText } from "@/components/dws/reactbits/ShinyText";
import { servicePricing } from "@/data/pricing";
import { business } from "@/data/business";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "SEO Jaipur, Web Design & Digital Marketing Services | DwS" },
      {
        name: "description",
        content:
          "DwS services in Jaipur: SEO, website design and development, digital marketing and SaaS MVP builds for businesses in Jaipur, Rajasthan and across India. Scope, rates and FAQs.",
      },
      {
        name: "keywords",
        content:
          "SEO Jaipur, SEO services Jaipur, digital marketing Jaipur, website design Jaipur, digital agency Jaipur",
      },
      {
        property: "og:title",
        content: "SEO Jaipur, Web Design & Digital Marketing Services | DwS",
      },
      {
        property: "og:description",
        content:
          "Four service areas, explained plainly: SEO for Jaipur search results, websites, paid media and SaaS MVP development — with rates and real client questions answered.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "geo.region", content: "IN-RJ" },
      { name: "geo.placename", content: "Jaipur" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: servicePricing.flatMap((service) =>
            service.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          ),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "DwS services in Jaipur",
          itemListElement: servicePricing.map((service, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Service",
              name: `${service.name} in ${business.city}`,
              description: service.intro,
              serviceType: service.name,
              provider: {
                "@type": "ProfessionalService",
                name: business.name,
                telephone: business.phone,
                email: business.email,
                address: {
                  "@type": "PostalAddress",
                  addressLocality: business.city,
                  addressRegion: business.state,
                  addressCountry: business.country,
                },
              },
              areaServed: business.areaServed.map((a) => ({ "@type": "Place", name: a })),
              url: `/pricing/${service.slug}`,
            },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Services", item: "/services" },
          ],
        }),
      },
    ],
  }),
  component: ServicesPage,
});

const process = [
  {
    step: "01",
    title: "Discovery call",
    text: "We map the goal, the audience and what success has to look like in numbers.",
  },
  {
    step: "02",
    title: "Scope & quote",
    text: "You get a fixed scope, a fixed price and a timeline before anything starts.",
  },
  {
    step: "03",
    title: "Build & review",
    text: "Work ships in visible stages, reviewed with one decision-maker — no silent months.",
  },
  {
    step: "04",
    title: "Launch & iterate",
    text: "We launch, watch the data and keep improving what the numbers point at.",
  },
];

function ServicesPage() {
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
                  <p className="dws-eyebrow mb-3">Services</p>
                </Reveal>
                <h1 className="display-4 mb-4">
                  <SplitText
                    as="span"
                    text="SEO, websites and digital marketing services in Jaipur."
                  />
                </h1>
                <Reveal delay={0.15}>
                  <p className="dws-hero-sub mb-0">
                    DwS is deliberately narrow: websites, digital marketing, SEO and SaaS MVPs.
                    Every engagement is built hands-on by the person you speak to, for businesses in{" "}
                    {business.city}, {business.state} and across India.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section id="seo-jaipur" className="dws-section pt-0">
          <div className="container">
            <div className="row g-4">
              <div className="col-12 col-lg-7">
                <Reveal>
                  <p className="dws-eyebrow mb-2">SEO in Jaipur</p>
                  <h2 className="dws-section-title h1 mb-3">
                    Ranking in Jaipur searches, not just any search.
                  </h2>
                  <p className="dws-muted mb-3">
                    Local search is its own game. A clinic in Malviya Nagar and a realtor in
                    Vaishali Nagar don&apos;t compete nationally — they compete inside the map pack
                    and the first three organic results for &ldquo;near me&rdquo; queries. Our SEO
                    work for Jaipur businesses focuses on that: a Google Business Profile
                    that&apos;s complete and consistent, city and locality landing pages that answer
                    the actual query, technically fast pages, local business schema, and reviews
                    that keep arriving.
                  </p>
                  <p className="dws-muted mb-4">
                    You get monthly reporting on the terms that matter — calls, direction requests
                    and enquiries — instead of vanity keyword counts. Same for paid: campaigns are
                    geo-fenced to Jaipur and Rajasthan so the budget reaches buyers who can
                    realistically walk in or sign.
                  </p>
                  <div className="d-flex flex-wrap gap-3">
                    <Link
                      to="/pricing/$service"
                      params={{ service: "seo" }}
                      className="dws-btn dws-btn-outline dws-btn-sm-tight"
                    >
                      SEO packages & rates
                    </Link>
                    <Link to="/case-studies" className="dws-btn dws-btn-outline dws-btn-sm-tight">
                      See local results
                    </Link>
                  </div>
                </Reveal>
              </div>
              <div className="col-12 col-lg-5">
                <Reveal delay={0.12}>
                  <div className="dws-step h-100">
                    <p className="dws-case-label dws-mono mb-3">Local SEO checklist</p>
                    <ul className="dws-case-list dws-case-list-check list-unstyled mb-0">
                      <li>Google Business Profile setup and optimisation</li>
                      <li>Consistent name, address and phone across directories</li>
                      <li>City and locality pages built around real search intent</li>
                      <li>LocalBusiness and Service structured data</li>
                      <li>Core Web Vitals and mobile speed fixes</li>
                      <li>Review generation and response workflow</li>
                      <li>Monthly local rank and enquiry reporting</li>
                    </ul>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

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
                      <h2 className="h2 mb-3">{service.name}</h2>
                      <p className="dws-muted mb-4">{service.intro}</p>
                      <p className="dws-mono small mb-4">
                        <ShinyText text={`From ${service.startsAt}`} />
                      </p>
                      <Link
                        to="/pricing/$service"
                        params={{ service: service.slug }}
                        className="dws-btn dws-btn-outline dws-btn-sm-tight"
                      >
                        See packages & rates
                      </Link>
                    </Reveal>
                  </div>

                  <div className="col-12 col-lg-7">
                    <div className="row g-4">
                      <div className="col-12 col-md-6">
                        <Reveal delay={0.1}>
                          <div className="dws-step h-100">
                            <p className="dws-case-label dws-mono mb-3">What you get</p>
                            <ul className="dws-case-list dws-case-list-check list-unstyled mb-0">
                              {service.includes.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        </Reveal>
                      </div>
                      <div className="col-12 col-md-6">
                        <Reveal delay={0.18}>
                          <div className="dws-step h-100">
                            <p className="dws-case-label dws-mono mb-3">Popular packages</p>
                            <ul className="dws-case-list list-unstyled mb-0">
                              {service.packages.map((pkg) => (
                                <li key={pkg.name}>
                                  <span className="text-white">{pkg.name}</span> — {pkg.price}{" "}
                                  <span className="dws-muted">({pkg.timeline})</span>
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

        <section className="dws-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-8">
                <Reveal>
                  <p className="dws-eyebrow mb-2">Process</p>
                  <h2 className="dws-section-title display-5 mb-0">How an engagement runs.</h2>
                </Reveal>
              </div>
            </div>
            <div className="row g-4">
              {process.map((item, i) => (
                <div className="col-12 col-md-6 col-lg-3" key={item.step}>
                  <Reveal delay={i * 0.08}>
                    <div className="dws-step h-100">
                      <div className="dws-step-number opacity-25">{item.step}</div>
                      <h3 className="h6 mb-2">{item.title}</h3>
                      <p className="dws-muted mb-0 small">{item.text}</p>
                    </div>
                  </Reveal>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="dws-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-8">
                <Reveal>
                  <p className="dws-eyebrow mb-2">FAQ</p>
                  <h2 className="dws-section-title display-5 mb-0">
                    Questions clients actually ask.
                  </h2>
                </Reveal>
              </div>
            </div>

            {servicePricing.map((service) => (
              <div className="mb-5" key={`faq-${service.slug}`}>
                <Reveal>
                  <p className="dws-mono small dws-muted mb-3">{service.navLabel}</p>
                </Reveal>
                <div className="dws-faq-list">
                  {service.faqs.map((faq, i) => (
                    <Reveal delay={i * 0.06} key={faq.q}>
                      <details className="dws-faq">
                        <summary>
                          <span>{faq.q}</span>
                          <span className="dws-faq-icon" aria-hidden="true" />
                        </summary>
                        <p className="dws-muted small mb-0">{faq.a}</p>
                      </details>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="dws-section dws-cta">
          <div className="container text-center">
            <Reveal>
              <h2 className="display-5 mb-4">Not sure which one you need?</h2>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <Link to="/contact" className="dws-btn dws-btn-solid">
                  Book a Free Strategy Call
                </Link>
                <Link to="/case-studies" className="dws-btn dws-btn-outline">
                  See Case Studies
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
