import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/dws/Navbar";
import { Hero } from "@/components/dws/Hero";
import { Services } from "@/components/dws/Services";
import { Process } from "@/components/dws/Process";
import { Portfolio } from "@/components/dws/Portfolio";
import { Contact, Footer } from "@/components/dws/Contact";
import { Preloader } from "@/components/dws/Preloader";
import { useDwsBody } from "@/components/dws/useDwsBody";
import { business } from "@/data/business";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DwS — Digital Marketing & Web Development Agency, Jaipur" },
      {
        name: "description",
        content:
          "DwS is a Jaipur-based digital agency building high-performance websites, SaaS products, SEO and paid growth programmes for clients across India and worldwide.",
      },
      { property: "og:title", content: "DwS — Digital Marketing & Web Development Agency, Jaipur" },
      {
        property: "og:description",
        content:
          "Websites, SaaS products, SEO and performance marketing engineered for compounding growth. Based in Jaipur, serving India and international clients.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "#dws",
          name: business.name,
          legalName: business.legalName,
          description: business.description,
          email: business.email,
          telephone: business.phone,
          priceRange: business.priceRange,
          founder: { "@type": "Person", name: business.founder },
          foundingDate: business.foundingYear,
          address: {
            "@type": "PostalAddress",
            addressLocality: business.city,
            addressRegion: business.state,
            addressCountry: business.country,
          },
          areaServed: business.areaServed.map((name) => ({ "@type": "Place", name })),
          openingHours: business.openingHours,
          makesOffer: business.services.map((service) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: service },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  useDwsBody();

  return (
    <>
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
