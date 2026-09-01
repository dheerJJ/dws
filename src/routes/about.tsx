import { createFileRoute, Link } from "@tanstack/react-router";

import { Navbar } from "@/components/dws/Navbar";
import { Footer } from "@/components/dws/Contact";
import { Reveal } from "@/components/dws/Reveal";
import { useDwsBody } from "@/components/dws/useDwsBody";
import { SplitText } from "@/components/dws/reactbits/SplitText";
import { team, testimonials } from "@/data/site";
import { business } from "@/data/business";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Digital Agency in Jaipur — About DwS | Founder-Led Studio" },
      {
        name: "description",
        content:
          "DwS is a founder-led digital agency in Jaipur, started by Dheerajj Kumawat, building websites, SEO and growth programmes for businesses in Jaipur, Rajasthan and across India.",
      },
      {
        name: "keywords",
        content:
          "digital agency Jaipur, digital marketing agency Jaipur, web design Jaipur, SEO Jaipur",
      },
      { property: "og:title", content: "Digital Agency in Jaipur — About DwS" },
      {
        property: "og:description",
        content:
          "The story behind DwS: a Jaipur digital agency built hands-on by its founder, working with brands across Rajasthan, India and internationally.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "geo.region", content: "IN-RJ" },
      { name: "geo.placename", content: "Jaipur" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About DwS — Digital Agency in Jaipur",
          mainEntity: {
            "@type": "ProfessionalService",
            name: business.name,
            legalName: business.legalName,
            description: business.description,
            founder: { "@type": "Person", name: business.founder },
            foundingDate: business.foundingYear,
            telephone: business.phone,
            email: business.email,
            priceRange: business.priceRange,
            address: {
              "@type": "PostalAddress",
              addressLocality: business.city,
              addressRegion: business.state,
              addressCountry: business.country,
            },
            areaServed: business.areaServed.map((a) => ({ "@type": "Place", name: a })),
            knowsAbout: business.services,
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "About", item: "/about" },
          ],
        }),
      },
    ],
  }),
  component: AboutPage,
});

const milestones = [
  {
    year: "2026",
    text: "DwS is founded in Jaipur by Dheerajj Kumawat — a founder-led studio built to turn an opportunity into a real business.",
  },
  {
    year: "Now",
    text: "Shipping live products for real brands: Shree Radhe Dental Hospital, Rudra Bhumi Realtors, LinkSnap and more.",
  },
  {
    year: "Next",
    text: "Grow DwS into a recognised Indian digital brand, with a senior team clients trust for the long run.",
  },
  {
    year: "Goal",
    text: "100K+ projects delivered for clients across India and internationally — one obsessively-built launch at a time.",
  },
];

function AboutPage() {
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
                  <p className="dws-eyebrow mb-3">About DwS</p>
                </Reveal>
                <h1 className="display-4 mb-4">
                  <SplitText as="span" text="A founder-led digital agency in Jaipur." />
                </h1>
                <Reveal delay={0.15}>
                  <p className="dws-hero-sub mb-4">
                    DwS didn&apos;t start in a boardroom. It started the day I decided to build
                    something of my own — an opportunity I chose to take seriously. I&apos;m
                    Dheerajj Kumawat, and DwS (Digital with Strategy) is my digital agency in
                    Jaipur, Rajasthan, working with founders and businesses across India and beyond.
                  </p>
                </Reveal>
                <Reveal delay={0.25}>
                  <p className="dws-muted mb-0">
                    Because we&apos;re young, we work differently: no bloated teams, no hand-offs,
                    no recycled templates. Every website, SEO programme and growth campaign is built
                    hands-on by the person you speak to. The ambition is simple and long-term — grow
                    DwS into a brand India trusts, one obsessively-built project at a time. If you
                    want to talk, call{" "}
                    <a className="dws-link" href={`tel:${business.phone}`}>
                      {business.phone.replace("+91", "+91 ")}
                    </a>{" "}
                    or email{" "}
                    <a className="dws-link" href={`mailto:${business.email}`}>
                      {business.email}
                    </a>
                    .
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section id="jaipur" className="dws-section pt-0">
          <div className="container">
            <div className="row g-4 align-items-start">
              <div className="col-12 col-lg-7">
                <Reveal>
                  <p className="dws-eyebrow mb-2">Local</p>
                  <h2 className="dws-section-title h1 mb-3">
                    Working with businesses in Jaipur, and remotely across India.
                  </h2>
                  <p className="dws-muted mb-3">
                    Being based in Jaipur means clients here can meet, call or message the person
                    actually doing the work — not an account manager. We&apos;ve shipped live work
                    for local businesses including a dental hospital and a Jaipur real-estate brand,
                    so we understand how buyers in Rajasthan search, compare and decide before they
                    ever call.
                  </p>
                  <p className="dws-muted mb-4">
                    For clients outside the city we run the same process remotely: one
                    decision-maker, fixed scope, visible weekly progress. Whether you need{" "}
                    <Link
                      className="dws-link"
                      to="/pricing/$service"
                      params={{ service: "website-design" }}
                    >
                      website design in Jaipur
                    </Link>{" "}
                    or an{" "}
                    <Link className="dws-link" to="/pricing/$service" params={{ service: "seo" }}>
                      SEO programme for Jaipur search results
                    </Link>
                    , the engagement runs the same way.
                  </p>
                  <Link to="/services" className="dws-btn dws-btn-outline dws-btn-sm-tight">
                    Explore our services
                  </Link>
                </Reveal>
              </div>
              <div className="col-12 col-lg-5">
                <Reveal delay={0.12}>
                  <div className="dws-step h-100">
                    <p className="dws-case-label dws-mono mb-3">Studio details</p>
                    <ul className="dws-case-list list-unstyled mb-0">
                      <li>
                        <span className="text-white">Based in</span> — {business.city},{" "}
                        {business.state}, India
                      </li>
                      <li>
                        <span className="text-white">Areas served</span> —{" "}
                        {business.areaServed.join(", ")}
                      </li>
                      <li>
                        <span className="text-white">Hours</span> — Mon–Sat, 10:00–19:00 IST
                      </li>
                      <li>
                        <span className="text-white">Phone</span> —{" "}
                        <a className="dws-link" href={`tel:${business.phone}`}>
                          {business.phone.replace("+91", "+91 ")}
                        </a>
                      </li>
                      <li>
                        <span className="text-white">Email</span> —{" "}
                        <a className="dws-link" href={`mailto:${business.email}`}>
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

        <section className="dws-section pt-0">
          <div className="container">
            <div className="row g-4">
              {milestones.map((m, i) => (
                <div className="col-12 col-md-6 col-lg-3" key={m.year}>
                  <Reveal delay={i * 0.08}>
                    <div className="dws-step h-100">
                      <div className="dws-step-number opacity-25">{m.year}</div>
                      <p className="dws-muted mb-0 small">{m.text}</p>
                    </div>
                  </Reveal>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="dws-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-8">
                <Reveal>
                  <p className="dws-eyebrow mb-2">Team</p>
                  <h2 className="dws-section-title display-5 mb-0">The people on your account.</h2>
                </Reveal>
              </div>
            </div>
            <div className="row g-4">
              {team.map((member, i) => (
                <div className="col-12 col-sm-6 col-lg-3" key={member.name}>
                  <Reveal delay={i * 0.08}>
                    <article className="dws-team h-100">
                      <div className="dws-team-avatar">{member.initials}</div>
                      <h3 className="h6 mb-1">{member.name}</h3>
                      <p className="dws-mono small mb-3">{member.role}</p>
                      <p className="dws-muted small mb-0">{member.bio}</p>
                    </article>
                  </Reveal>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="dws-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-8">
                <Reveal>
                  <p className="dws-eyebrow mb-2">Testimonials</p>
                  <h2 className="dws-section-title display-5 mb-0">What clients say.</h2>
                </Reveal>
              </div>
            </div>
            <div className="row g-4">
              {testimonials.map((t, i) => (
                <div className="col-12 col-lg-4" key={t.author + i}>
                  <Reveal delay={i * 0.1}>
                    <figure className="dws-quote h-100 mb-0">
                      <span className="dws-quote-mark" aria-hidden="true">
                        &ldquo;
                      </span>
                      <blockquote className="mb-4">{t.quote}</blockquote>
                      <figcaption className="dws-muted small">
                        <span className="text-white d-block">{t.author}</span>
                        {t.role}
                      </figcaption>
                    </figure>
                  </Reveal>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="dws-section dws-cta">
          <div className="container text-center">
            <Reveal>
              <h2 className="display-5 mb-4">Want this team on your growth?</h2>
              <Link to="/contact" className="dws-btn dws-btn-solid">
                Book a Free Strategy Call
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
