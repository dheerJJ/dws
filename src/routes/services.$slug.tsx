import { createFileRoute, Link, notFound } from "@tanstack/react-router";
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
import { getService, services } from "@/data/services";
import { business } from "@/data/business";
import {
  formatMetaDescription,
  formatMetaTitle,
  getBreadcrumbSchema,
  getCanonicalUrl,
  getFaqSchema,
} from "@/lib/seo";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Service not found | DWS Web Services" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { service } = loaderData;
    const title = formatMetaTitle(service.metaTitle, false);
    const description = formatMetaDescription(service.metaDescription);
    const canonical = getCanonicalUrl(`/services/${params.slug}`);
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
          children: JSON.stringify(
            getBreadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: service.title, path: `/services/${params.slug}` },
            ]),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: service.title,
            name: `${service.title} | ${business.name}`,
            description: service.metaDescription,
            url: canonical,
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
            areaServed: business.areaServed.map((name) => ({
              "@type": "Place",
              name,
            })),
          }),
        },
        ...(service.faqs.length > 0
          ? [
              {
                type: "application/ld+json" as const,
                children: JSON.stringify(getFaqSchema(service.faqs)),
              },
            ]
          : []),
      ],
    };
  },
  component: ServiceDetailPage,
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

function ServiceIcon({ name, size = 24 }: { name: string; size?: number }) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon size={size} />;
}

function ServiceDetailPage() {
  useDwsBody();
  const { service } = Route.useLoaderData();

  const inquireLink = `/contact?service=${encodeURIComponent(service.title)}`;

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
                /{" "}
                <Link to="/services" className="text-muted text-decoration-none">
                  Services
                </Link>{" "}
                / <span className="text-white">{service.title}</span>
              </nav>
            </Reveal>

            <div className="row align-items-center">
              <div className="col-lg-8">
                <Reveal>
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div className="dws-service-detail-icon">
                      <ServiceIcon name={service.icon} size={28} />
                    </div>
                    <span className="dws-eyebrow mb-0">{service.category}</span>
                  </div>
                </Reveal>

                <h1 className="display-4 mb-3 text-white fw-bold">{service.title}</h1>

                <Reveal delay={0.1}>
                  <p className="dws-hero-sub mb-4">{service.longDescription}</p>
                </Reveal>

                <Reveal delay={0.15}>
                  <div className="d-flex flex-wrap align-items-center gap-3">
                    <p className="dws-mono mb-0 text-white">
                      <ShinyText text={`Starting ${service.startsAt}`} />
                    </p>
                    <Link to={inquireLink} className="dws-btn dws-btn-solid">
                      Inquire About This Service
                    </Link>
                    {service.pricingSlug && (
                      <Link
                        to="/pricing/$service"
                        params={{ service: service.pricingSlug }}
                        className="dws-btn dws-btn-outline"
                      >
                        View Pricing Packages
                      </Link>
                    )}
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="dws-section pt-0">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-6">
                <Reveal>
                  <p className="dws-eyebrow mb-2">Deliverables</p>
                  <h2 className="h2 mb-4 text-white">What&apos;s Included</h2>
                  <ul className="dws-case-list dws-case-list-check list-unstyled mb-0">
                    {service.whatsIncluded.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Reveal>
              </div>

              <div className="col-lg-6">
                <Reveal delay={0.1}>
                  <p className="dws-eyebrow mb-2">Our Process</p>
                  <h2 className="h2 mb-4 text-white">How We Work</h2>
                  <div className="d-flex flex-column gap-3">
                    {service.process.map((p) => (
                      <div key={p.step} className="dws-step">
                        <span className="dws-case-index dws-mono d-block mb-2">{p.step}</span>
                        <h3 className="h6 mb-1 text-white">{p.title}</h3>
                        <p className="dws-muted small mb-0">{p.text}</p>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        {service.faqs.length > 0 && (
          <section className="dws-section pt-0">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <Reveal>
                    <p className="dws-eyebrow mb-2">Common Questions</p>
                    <h2 className="h2 mb-4 text-white">Frequently Asked Questions</h2>
                  </Reveal>

                  {service.faqs.map((faq, idx) => (
                    <Reveal key={faq.q} delay={idx * 0.06}>
                      <div className="dws-step mb-3">
                        <h3 className="h6 mb-2 text-white">{faq.q}</h3>
                        <p className="dws-muted small mb-0">{faq.a}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="dws-section pt-0">
          <div className="container">
            <div className="dws-cta text-center p-5">
              <Reveal>
                <h2 className="display-6 mb-3 text-white">
                  Ready to get started with {service.title}?
                </h2>
                <p className="dws-muted mb-4 mx-auto" style={{ maxWidth: "36rem" }}>
                  Tell us about your project. We will review your requirements and get back to you
                  within 24 hours with a clear scope and quote.
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <Link to={inquireLink} className="dws-btn dws-btn-solid">
                    Start Your Project
                  </Link>
                  <Link to="/services" className="dws-btn dws-btn-outline">
                    View All Services
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
