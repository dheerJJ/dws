import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import {
  Globe,
  ShoppingCart,
  Code,
  Building2,
  Users,
  GraduationCap,
  Smartphone,
  Palette,
  Brush,
  TrendingUp,
  Search,
  Server,
  AtSign,
  Wrench,
  Rocket,
  TabletSmartphone,
} from "lucide-react";

import { AppleLogo } from "@/components/dws/AppleLogo";

import { Navbar } from "@/components/dws/Navbar";
import { Footer } from "@/components/dws/Contact";
import { Reveal } from "@/components/dws/Reveal";
import { useDwsBody } from "@/components/dws/useDwsBody";
import { ShinyText } from "@/components/dws/reactbits/ShinyText";
import {
  getDisplayServices,
  serviceCategories,
  type ServiceCategory,
  type ServiceEntry,
} from "@/data/services";
import { business } from "@/data/business";
import {
  formatMetaDescription,
  formatMetaTitle,
  getBreadcrumbSchema,
  getCanonicalUrl,
} from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () => {
    const title = formatMetaTitle("15+ IT & Digital Services in Jaipur");
    const description = formatMetaDescription(
      "DWS Web Services offers 15+ IT and digital services in Jaipur: website design, mobile apps, SEO, e-commerce, ERP, CRM, UI/UX design, digital marketing, and cloud support.",
    );
    const canonical = getCanonicalUrl("/services");
    const ogImageUrl = `${business.siteUrl}/og-image.png`;

    const displayServices = getDisplayServices();

    return {
      meta: [
        { title },
        { name: "description", content: description },
        {
          name: "keywords",
          content:
            "IT services Jaipur, web development Jaipur, mobile app development, SEO services, e-commerce development, ERP development, CRM development, UI/UX design, digital marketing agency Jaipur",
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
          children: JSON.stringify(
            getBreadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
            ]),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: `${business.name} Services`,
            itemListElement: displayServices.map((service, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "Service",
                name: `${service.title} in ${business.city}`,
                description: service.description,
                serviceType: service.title,
                url: getCanonicalUrl(`/services/${service.slug}`),
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

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Globe,
  ShoppingCart,
  Code,
  Building2,
  Users,
  GraduationCap,
  Smartphone,
  Palette,
  Brush,
  TrendingUp,
  Search,
  Server,
  AtSign,
  Wrench,
  Rocket,
  TabletSmartphone,
  Apple: AppleLogo,
};

function ServiceIcon({
  name,
  size = 20,
  className = "",
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon size={size} className={className} />;
}

const processSteps = [
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

  const allServices = useMemo(() => getDisplayServices(), []);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | "All">("All");

  const filteredServices = useMemo(() => {
    let result = allServices;

    if (activeCategory !== "All") {
      result = result.filter((s) => s.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (s) =>
          s.title.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q) ||
          s.category.toLowerCase().includes(q) ||
          s.features.some((f) => f.toLowerCase().includes(q)),
      );
    }

    return result;
  }, [allServices, searchQuery, activeCategory]);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
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

                <h1 className="display-4 mb-3 text-white fw-bold">
                  15+ IT &amp; Digital Services in Jaipur
                </h1>

                <Reveal delay={0.1}>
                  <p className="dws-hero-sub mb-0">
                    End-to-end technology and marketing services for businesses ready to grow. Every
                    project is senior-led, fixed-scope, and built for measurable results.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Search & Filters */}
        <section className="dws-section pt-0 pb-0">
          <div className="container">
            <Reveal>
              {/* Search box */}
              <div className="position-relative mb-4" style={{ maxWidth: "480px" }}>
                <Search
                  size={18}
                  className="position-absolute text-muted"
                  style={{ left: "14px", top: "50%", transform: "translateY(-50%)" }}
                  aria-hidden="true"
                />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search services..."
                  aria-label="Search services"
                  className="form-control"
                  style={{
                    paddingLeft: "42px",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "#fff",
                    borderRadius: "8px",
                    height: "46px",
                    fontSize: "15px",
                  }}
                />
              </div>

              {/* Category filter chips */}
              <div className="d-flex flex-wrap gap-2 mb-3">
                <button
                  type="button"
                  className={`dws-chip ${activeCategory === "All" ? "dws-chip-active" : ""}`}
                  onClick={() => setActiveCategory("All")}
                >
                  All
                </button>
                {serviceCategories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    className={`dws-chip ${activeCategory === cat ? "dws-chip-active" : ""}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Counter */}
              <p className="dws-mono small text-muted mb-0">
                Showing {filteredServices.length} of {allServices.length} services
              </p>
            </Reveal>
          </div>
        </section>

        {/* Service Cards Grid */}
        <section className="dws-section">
          <div className="container">
            {filteredServices.length === 0 ? (
              <Reveal>
                <div className="text-center py-5">
                  <p className="text-muted fs-5 mb-2">No services match your search.</p>
                  <button
                    type="button"
                    className="dws-btn dws-btn-outline dws-btn-sm-tight"
                    onClick={() => {
                      setSearchQuery("");
                      setActiveCategory("All");
                    }}
                  >
                    Clear filters
                  </button>
                </div>
              </Reveal>
            ) : (
              <div className="row g-4 align-items-stretch">
                {filteredServices.map((service, i) => (
                  <div className="col-12 col-md-6 col-lg-4 d-flex" key={service.slug}>
                    <Reveal
                      delay={Math.min(i * 0.04, 0.3)}
                      className="w-100 d-flex flex-column h-100"
                    >
                      <ServiceCard service={service} />
                    </Reveal>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Process Section */}
        <section className="dws-section pt-0">
          <div className="container">
            <Reveal>
              <p className="dws-eyebrow mb-2">Our Process</p>
              <h2 className="display-6 mb-4 text-white">How We Deliver Results</h2>
            </Reveal>

            <div className="row g-4">
              {processSteps.map((p, idx) => (
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

        {/* CTA */}
        <section className="dws-section pt-0">
          <div className="container">
            <div className="dws-cta text-center p-5">
              <Reveal>
                <h2 className="display-6 mb-3 text-white">
                  Let&apos;s build your next growth curve
                </h2>
                <p className="dws-muted mb-4 mx-auto" style={{ maxWidth: "36rem" }}>
                  Tell us where you want your business to be in the next 12 months. We will map the
                  strategy in a focused 30-minute call.
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

function ServiceCard({ service }: { service: ServiceEntry }) {
  const learnMoreLink = `/services/${service.slug}`;
  const inquireLink = `/contact?service=${encodeURIComponent(service.title)}`;

  return (
    <div className="dws-service-card w-100 h-100 d-flex flex-column">
      {/* Top Header: Icon in subtle container + Category Tag */}
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div
          className="d-flex align-items-center justify-content-center rounded-2 border border-secondary-subtle"
          style={{ width: 44, height: 44, backgroundColor: "rgba(255, 255, 255, 0.04)" }}
        >
          <ServiceIcon name={service.icon} size={22} className="text-white" />
        </div>
        <span
          className="dws-mono text-uppercase text-muted"
          style={{ fontSize: "0.75rem", letterSpacing: "0.08em" }}
        >
          {service.category}
        </span>
      </div>

      {/* Title with balanced min-height for uniform baseline */}
      <h3
        className="h5 fw-semibold text-white mb-3"
        style={{ minHeight: "2.8rem", display: "flex", alignItems: "flex-start", lineHeight: 1.35 }}
      >
        {service.title}
      </h3>

      {/* Description with comfortable line height and breathing room */}
      <p
        className="dws-muted small mb-4"
        style={{
          fontSize: "0.9rem",
          lineHeight: 1.6,
          minHeight: "4.8rem",
        }}
      >
        {service.description}
      </p>

      {/* Deliverables / Features List */}
      <div className="pt-3 border-top border-secondary-subtle mb-4 flex-grow-1">
        <div
          className="dws-mono text-uppercase text-muted mb-3"
          style={{ fontSize: "0.72rem", letterSpacing: "0.06em" }}
        >
          Key Deliverables
        </div>
        <ul className="list-unstyled mb-0 d-flex flex-column" style={{ gap: "0.65rem" }}>
          {service.features.map((f) => (
            <li
              key={f}
              className="small d-flex align-items-start gap-2 text-white-50"
              style={{ fontSize: "0.85rem", lineHeight: 1.5 }}
            >
              <span
                className="text-white-50 flex-shrink-0"
                style={{ fontSize: "0.8rem", marginTop: "1px" }}
                aria-hidden="true"
              >
                →
              </span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Price block */}
      <div className="pt-3 border-top border-secondary-subtle mb-4">
        <div className="d-flex align-items-baseline gap-2">
          <span className="dws-mono text-muted small" style={{ fontSize: "0.78rem" }}>
            Starting at
          </span>
          <span className="dws-mono text-white fw-bold fs-5">
            <ShinyText text={service.startsAt} />
          </span>
        </div>
      </div>

      {/* Actions anchored to the bottom */}
      <div className="d-flex gap-2 mt-auto">
        <Link
          to={learnMoreLink}
          className="dws-btn dws-btn-outline dws-btn-sm-tight flex-grow-1 text-center"
        >
          Learn More
        </Link>
        <Link
          to={inquireLink}
          className="dws-btn dws-btn-solid dws-btn-sm-tight flex-grow-1 text-center"
        >
          Inquire Now
        </Link>
      </div>
    </div>
  );
}
