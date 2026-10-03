import { createFileRoute, Link } from "@tanstack/react-router";

import { Navbar } from "@/components/dws/Navbar";
import { Footer } from "@/components/dws/Contact";
import { Reveal } from "@/components/dws/Reveal";
import { useDwsBody } from "@/components/dws/useDwsBody";
import { team, testimonials } from "@/data/site";
import { business } from "@/data/business";
import { GoogleReviews } from "@/components/dws/GoogleReviews";
import { getGoogleReviews } from "@/lib/reviews.functions";
import {
  formatMetaDescription,
  formatMetaTitle,
  getBreadcrumbSchema,
  getCanonicalUrl,
} from "@/lib/seo";

export const Route = createFileRoute("/about")({
  loader: async () => {
    return await getGoogleReviews();
  },
  head: () => {
    const title = formatMetaTitle("Digital Agency in Jaipur");
    const description = formatMetaDescription(
      "DWS Web Services is a founder-led digital agency in Jaipur, started by Dheerajj Kumawat, delivering high-performance websites, SEO, and paid growth engines.",
    );
    const canonical = getCanonicalUrl("/about");
    const ogImageUrl = `${business.siteUrl}/og-image.png`;

    return {
      meta: [
        { title },
        { name: "description", content: description },
        {
          name: "keywords",
          content:
            "digital agency Jaipur, web development company Jaipur, SEO Jaipur, website designers Rajasthan",
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
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: `About ${business.name} - Digital Agency in Jaipur`,
            description: business.description,
            url: canonical,
            mainEntity: {
              "@type": "ProfessionalService",
              name: business.name,
              legalName: business.legalName,
              description: business.description,
              founder: {
                "@type": "Person",
                name: business.founder,
                image: `${business.siteUrl}/dheerajj-kumawat.jpg`,
                jobTitle: "Founder & Technical Lead",
              },
              foundingDate: business.foundingYear,
              telephone: business.phone,
              email: business.email,
              priceRange: business.priceRange,
              address: {
                "@type": "PostalAddress",
                addressLocality: business.city,
                addressRegion: business.state,
                addressCountry: business.countryCode,
              },
              areaServed: business.areaServed.map((a) => ({ "@type": "Place", name: a })),
              knowsAbout: business.services,
            },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            getBreadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
            ]),
          ),
        },
      ],
    };
  },
  component: AboutPage,
});

const milestones = [
  {
    year: "2026",
    text: "DWS Web Services is founded in Jaipur by Dheerajj Kumawat as a founder-led studio built to deliver engineering-grade websites and organic SEO.",
  },
  {
    year: "Now",
    text: "Shipping high-converting live products for real brands: Shree Radhe Dental Hospital, Agneepath Defence Academy, Priya's Art Beauty, Rudra Bhumi Realtors, LinkSnap, and growing businesses.",
  },
  {
    year: "Next",
    text: "Growing DWS Web Services into a nationally recognized digital engineering brand with transparent deliverables and long-term client trust.",
  },
  {
    year: "Goal",
    text: "100+ projects delivered for clients across India and internationally - one obsessively built launch at a time.",
  },
];

function AboutPage() {
  useDwsBody();
  const reviewsData = Route.useLoaderData();

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
                / <span className="text-white">About</span>
              </nav>
            </Reveal>

            <div className="row align-items-center g-5">
              <div className="col-12 col-lg-7">
                <Reveal>
                  <p className="dws-eyebrow mb-3">About the Studio</p>
                </Reveal>

                {/* Exactly one H1 per page containing primary keywords */}
                <h1 className="display-4 mb-4 text-white fw-bold">
                  Founder-Led Web Development Studio in Jaipur
                </h1>

                <Reveal delay={0.1}>
                  <p className="dws-hero-sub mb-4">
                    DWS Web Services turns complex business requirements into fast websites,
                    measurable organic SEO, and compounding revenue engines.
                  </p>
                  <p className="mb-0 lead" style={{ color: "#d6d6d6" }}>
                    Started by Dheerajj Kumawat in Jaipur, Rajasthan, our studio operates
                    deliberately lean: senior hands on every keyboard, zero junior hand-offs, and
                    reporting judged strictly on commercial enquiries rather than superficial vanity
                    impressions.
                  </p>
                </Reveal>
              </div>

              <div className="col-12 col-md-8 col-lg-5 mx-auto mx-lg-0">
                <Reveal delay={0.15}>
                  <div className="dws-founder-hero-card">
                    <div className="dws-founder-hero-media">
                      <img
                        src="/dheerajj-kumawat.jpg"
                        alt="Dheerajj Kumawat - Founder & Technical Lead at DWS Web Services, Jaipur"
                        className="dws-founder-hero-img"
                        width="540"
                        height="675"
                        loading="eager"
                        fetchPriority="high"
                      />
                      <div className="dws-founder-hero-gradient" aria-hidden="true" />
                    </div>
                    <div className="dws-founder-hero-caption">
                      <div className="d-flex justify-content-between align-items-baseline gap-2">
                        <div>
                          <h2 className="h6 text-white mb-0 fw-semibold">Dheerajj Kumawat</h2>
                          <p
                            className="dws-mono text-muted mb-0"
                            style={{ fontSize: "0.72rem", letterSpacing: "0.08em" }}
                          >
                            FOUNDER &amp; TECHNICAL LEAD
                          </p>
                        </div>
                        <span
                          className="dws-mono text-muted"
                          style={{ fontSize: "0.72rem", letterSpacing: "0.08em" }}
                        >
                          JAIPUR, RJ
                        </span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Studio Facts & NAP */}
        <section className="dws-section pt-0">
          <div className="container">
            <div className="row g-4 align-items-stretch">
              <div className="col-12 col-md-6 col-lg-4 d-flex flex-column">
                <Reveal className="h-100 d-flex flex-column flex-grow-1">
                  <div className="dws-step h-100 flex-grow-1">
                    <p className="dws-case-label dws-mono mb-2">Philosophy</p>
                    <h2 className="h5 mb-3 text-white">Engineering-First Growth</h2>
                    <p className="dws-muted small mb-0">
                      We treat websites and marketing like software systems. Every page has an
                      architectural hypothesis, explicit conversion goals, and rigorous performance
                      benchmarks.
                    </p>
                  </div>
                </Reveal>
              </div>

              <div className="col-12 col-md-6 col-lg-4 d-flex flex-column">
                <Reveal delay={0.08} className="h-100 d-flex flex-column flex-grow-1">
                  <div className="dws-step h-100 flex-grow-1">
                    <p className="dws-case-label dws-mono mb-2">Location &amp; Reach</p>
                    <h2 className="h5 mb-3 text-white">Rooted in Jaipur, Serving India</h2>
                    <p className="dws-muted small mb-0">
                      Based in {business.city}, {business.state}. We serve local service providers,
                      healthcare clinics, real estate brokerages, and national tech startups.
                    </p>
                  </div>
                </Reveal>
              </div>

              <div className="col-12 col-md-6 col-lg-4 d-flex flex-column">
                <Reveal delay={0.16} className="h-100 d-flex flex-column flex-grow-1">
                  <div className="dws-step h-100 flex-grow-1">
                    <p className="dws-case-label dws-mono mb-2">Direct Contact</p>
                    <h2 className="h5 mb-3 text-white">Studio Coordinates</h2>
                    <ul className="list-unstyled small dws-muted mb-0">
                      <li className="mb-1">
                        <strong className="text-white">Studio:</strong> {business.name}
                      </li>
                      <li className="mb-1">
                        <strong className="text-white">Location:</strong>{" "}
                        {business.address.streetAddress}, {business.city}, {business.state}
                      </li>
                      <li className="mb-1">
                        <strong className="text-white">Phone:</strong>{" "}
                        <a
                          className="text-white text-decoration-none"
                          href={`tel:${business.phone}`}
                        >
                          {business.phoneDisplay}
                        </a>
                      </li>
                      <li>
                        <strong className="text-white">Email:</strong>{" "}
                        <a
                          className="text-white text-decoration-none"
                          href={`mailto:${business.email}`}
                        >
                          {business.email}
                        </a>
                      </li>
                    </ul>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Milestones */}
        <section className="dws-section pt-0">
          <div className="container">
            <Reveal>
              <p className="dws-eyebrow mb-2">Timeline</p>
              <h2 className="h3 mb-4 text-white">Studio Trajectory</h2>
            </Reveal>
            <div className="row g-4 align-items-stretch">
              {milestones.map((m, i) => (
                <div className="col-12 col-md-6 col-lg-3 d-flex flex-column" key={m.year}>
                  <Reveal delay={i * 0.08} className="h-100 d-flex flex-column flex-grow-1">
                    <div className="dws-step h-100 flex-grow-1">
                      <div className="dws-step-number opacity-50">{m.year}</div>
                      <p className="dws-muted mb-0 small">{m.text}</p>
                    </div>
                  </Reveal>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="dws-section pt-0">
          <div className="container">
            <div className="row mb-4">
              <div className="col-lg-8">
                <Reveal>
                  <p className="dws-eyebrow mb-2">Leadership & Capabilities</p>
                  <h2 className="dws-section-title display-6 mb-0 text-white">
                    Founder-Led Craft & Execution
                  </h2>
                </Reveal>
              </div>
            </div>
            <div className="row g-4 align-items-stretch">
              {team.map((member, i) => (
                <div className="col-12 col-sm-6 col-lg-3 d-flex flex-column" key={member.name}>
                  <Reveal delay={i * 0.08} className="h-100 d-flex flex-column flex-grow-1">
                    <article className="dws-team h-100 d-flex flex-column flex-grow-1">
                      {member.name === "Dheerajj Kumawat" ? (
                        <div className="dws-team-avatar overflow-hidden p-0 flex-shrink-0">
                          <img
                            src="/dheerajj-kumawat.jpg"
                            alt="Dheerajj Kumawat"
                            className="w-100 h-100 object-fit-cover"
                            style={{ objectPosition: "center 15%" }}
                            loading="lazy"
                          />
                        </div>
                      ) : (
                        <div className="dws-team-avatar flex-shrink-0">{member.initials}</div>
                      )}
                      <h3 className="h6 mb-1 text-white">{member.name}</h3>
                      <p className="dws-mono small mb-3 text-muted">{member.role}</p>
                      <p className="dws-muted small mb-0 flex-grow-1">{member.bio}</p>
                    </article>
                  </Reveal>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Google Reviews - Render strictly only when at least 3 verified Google reviews exist */}
        <GoogleReviews
          reviews={reviewsData?.reviews}
          rating={reviewsData?.rating}
          totalReviews={reviewsData?.totalReviews}
        />

        {/* Testimonials - Render only when verified client feedback is available */}
        {testimonials.some((t) => !t.quote.startsWith("[ADD REAL TESTIMONIAL")) && (
          <section id="testimonials" className="dws-section pt-0">
            <div className="container">
              <div className="row mb-4">
                <div className="col-lg-8">
                  <Reveal>
                    <p className="dws-eyebrow mb-2">Client Feedback</p>
                    <h2 className="dws-section-title display-6 mb-0 text-white">
                      What Our Clients Say
                    </h2>
                  </Reveal>
                </div>
              </div>
              <div className="row g-4">
                {testimonials
                  .filter((t) => !t.quote.startsWith("[ADD REAL TESTIMONIAL"))
                  .map((t, i) => (
                    <div className="col-12 col-lg-4" key={t.author + i}>
                      <Reveal delay={i * 0.1}>
                        <figure className="dws-quote h-100 mb-0 d-flex flex-column">
                          <span className="dws-quote-mark" aria-hidden="true">
                            &ldquo;
                          </span>
                          <blockquote className="dws-muted mb-4 flex-grow-1">{t.quote}</blockquote>
                          <figcaption className="mt-auto">
                            <cite className="d-block fw-semibold text-white fst-normal">
                              {t.author}
                            </cite>
                            <span className="dws-mono small text-muted">{t.role}</span>
                          </figcaption>
                        </figure>
                      </Reveal>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        )}

        {/* Call to Action */}
        <section className="dws-section pt-0">
          <div className="container">
            <div className="dws-cta text-center p-5">
              <Reveal>
                <h2 className="display-6 mb-3 text-white">Ready to collaborate?</h2>
                <p className="dws-muted mb-4 mx-auto" style={{ maxWidth: "36rem" }}>
                  Let&apos;s discuss your website, SEO roadmap, or new product MVP during a direct
                  strategy conversation.
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <Link to="/contact" className="dws-btn dws-btn-solid">
                    Start a Project
                  </Link>
                  <Link to="/services" className="dws-btn dws-btn-outline">
                    Explore Our Services
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
