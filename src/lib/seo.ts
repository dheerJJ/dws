import { business } from "@/data/business";

/** Returns absolute HTTPS canonical URL */
export function getCanonicalUrl(path: string = ""): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${business.siteUrl}${cleanPath === "/" ? "" : cleanPath}`;
}

/** Formats title with brand suffix, strictly constrained to max 60 chars */
export function formatMetaTitle(pageTitle: string, includeBrand = true): string {
  if (!includeBrand) return pageTitle.slice(0, 60);

  const brand = business.name;
  if (pageTitle.includes(brand)) {
    return pageTitle.length > 60 ? `${pageTitle.slice(0, 57)}...` : pageTitle;
  }

  const combined = `${pageTitle} | ${brand}`;
  if (combined.length <= 60) return combined;

  // If too long, abbreviate brand suffix or trim page title
  const shortCombined = `${pageTitle} | ${business.shortName}`;
  if (shortCombined.length <= 60) return shortCombined;

  const maxTitleLen = 60 - ` | ${business.shortName}`.length;
  return `${pageTitle.slice(0, maxTitleLen - 1).trim()}… | ${business.shortName}`;
}

/** Formats and sanitizes meta description, ensuring max 155 chars */
export function formatMetaDescription(desc: string): string {
  const clean = desc.replace(/\s+/g, " ").trim();
  if (clean.length <= 155) return clean;
  return `${clean.slice(0, 152).trim()}...`;
}

/** Returns the official Organization + ProfessionalService JSON-LD schema */
export function getOrganizationSchema() {
  const siteUrl = getCanonicalUrl("/");
  const logoUrl = `${business.siteUrl}/dws-logo.png`;

  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${siteUrl}#organization`,
    name: business.name,
    alternateName: [business.shortName, "DwS Web Services", "DwS Jaipur"],
    legalName: business.legalName,
    url: siteUrl,
    logo: logoUrl,
    image: logoUrl,
    email: business.email,
    telephone: business.phone,
    priceRange: business.priceRange,
    founder: {
      "@type": "Person",
      name: business.founder,
      jobTitle: "Founder & Technical Lead",
    },
    foundingDate: business.foundingYear,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.streetAddress,
      addressLocality: business.address.addressLocality,
      addressRegion: business.address.addressRegion,
      postalCode: business.address.postalCode,
      addressCountry: business.address.addressCountry,
    },
    areaServed: business.areaServed.map((name) => ({
      "@type": "Place",
      name,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "19:00",
      },
    ],
    sameAs: business.socials.map((s) => s.url),
    knowsAbout: business.services,
  };
}

/** Returns BreadcrumbList JSON-LD schema */
export function getBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: getCanonicalUrl(item.path),
    })),
  };
}

/** Returns Service JSON-LD schema */
export function getServiceSchema(opts: {
  name: string;
  description: string;
  slug: string;
  urlPath?: string;
  offers?: { name: string; price: string; description?: string }[];
}) {
  const serviceUrl = getCanonicalUrl(opts.urlPath || `/pricing/${opts.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.name,
    name: `${opts.name} | ${business.name}`,
    description: opts.description,
    url: serviceUrl,
    provider: {
      "@type": "ProfessionalService",
      name: business.name,
      url: getCanonicalUrl("/"),
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
    hasOfferCatalog: opts.offers
      ? {
          "@type": "OfferCatalog",
          name: `${opts.name} Packages`,
          itemListElement: opts.offers.map((offer) => ({
            "@type": "Offer",
            name: offer.name,
            price: offer.price.replace(/[^0-9]/g, "") || undefined,
            priceCurrency: "INR",
            description: offer.description,
            url: serviceUrl,
          })),
        }
      : undefined,
  };
}

/** Returns FAQPage JSON-LD schema */
export function getFaqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

/** Returns BlogPosting JSON-LD schema */
export function getBlogPostingSchema(post: {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  cover?: string;
  author: string;
  category?: string;
}) {
  const postUrl = getCanonicalUrl(`/blog/${post.slug}`);
  const coverUrl = post.cover
    ? post.cover.startsWith("http")
      ? post.cover
      : `${business.siteUrl}${post.cover.startsWith("/") ? "" : "/"}${post.cover}`
    : `${business.siteUrl}/dws-logo.png`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    headline: post.title,
    description: post.excerpt,
    image: coverUrl,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: business.name,
      logo: {
        "@type": "ImageObject",
        url: `${business.siteUrl}/dws-logo.png`,
      },
    },
    articleSection: post.category,
    url: postUrl,
  };
}
