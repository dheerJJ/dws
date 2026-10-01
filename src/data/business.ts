// Central Business Configuration & SEO Source of Truth for DWS Web Services
// All business details, contact information, booking links, social profiles,
// and primary SEO keywords are kept here to avoid hardcoding across components.

const getEnv = (key: string, fallback: string): string => {
  if (typeof import.meta !== "undefined" && import.meta.env && import.meta.env[key]) {
    return import.meta.env[key] as string;
  }
  if (typeof process !== "undefined" && process.env && process.env[key]) {
    return process.env[key] as string;
  }
  return fallback;
};

export const business = {
  // Brand identity
  name: "DWS Web Services",
  brandName: "DWS Web Services",
  shortName: "DwS",
  legalName: "DWS Web Services",
  tagline: "Strategy first, design obsessed, measured on revenue.",
  description:
    "DWS Web Services is a Jaipur-based web development, mobile app development, SEO and SaaS product studio building high-performance websites, mobile apps, SaaS products and organic growth programmes for businesses across India and worldwide.",

  // Canonical base URL (configurable via VITE_SITE_URL)
  siteUrl: getEnv("VITE_SITE_URL", "https://dws.co").replace(/\/$/, ""),

  // Contact details
  email: "tech.dws.co@gmail.com",
  phone: "+917850915862",
  phoneDisplay: "+91 78509 15862",

  // Geographic presence & NAP
  city: "Jaipur",
  state: "Rajasthan",
  country: "India",
  countryCode: "IN",
  address: {
    streetAddress: "Malviya Nagar",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    postalCode: "302017",
    addressCountry: "IN",
  },
  areaServed: ["Jaipur", "Rajasthan", "India", "Worldwide"],

  // Business operations
  founder: "Dheerajj Kumawat",
  foundingYear: "2026",
  openingHours: "Mo-Sa 10:00-19:00",
  openingHoursDisplay: "Mon-Sat, 10:00-19:00 IST",
  priceRange: "₹₹",

  // Social profiles
  socials: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/dheerajj-kumawat-1b4b7b366/" },
    { label: "Instagram", url: "https://www.instagram.com/dws.io/" },
    { label: "GitHub", url: "https://github.com/dheerJJ" },
  ],

  // Booking & Conversion channels
  bookingUrl: getEnv("VITE_BOOKING_URL", "https://cal.com/dws-web-services/strategy-call"),
  whatsappNumber: "917850915862",
  whatsappDefaultMessage:
    "Hello DWS Web Services, I would like to discuss a project for my business.",

  // Brand credits
  creditLine: "Created by DWS Web Services",
  showCreditLine: true,

  // Webmaster Verification
  googleVerificationToken: getEnv("VITE_GOOGLE_SITE_VERIFICATION", "google0b960ea3bfa41cfa"),

  // Primary & secondary keywords map
  keywords: {
    home: {
      primary: "website design and SEO agency in Jaipur",
      secondary: [
        "web development company Jaipur",
        "mobile app development company Jaipur",
        "digital marketing agency Jaipur",
        "Jaipur SEO consultant",
      ],
    },
    websiteDesign: {
      primary: "website design company in Jaipur",
      secondary: [
        "web development services Jaipur",
        "custom WordPress React web design Jaipur",
        "eCommerce website Jaipur",
      ],
    },
    seo: {
      primary: "SEO services in Jaipur",
      secondary: [
        "local SEO agency Jaipur",
        "Google Business Profile optimization Jaipur",
        "technical SEO services India",
      ],
    },
    mobileApp: {
      primary: "mobile app development in Jaipur",
      secondary: [
        "mobile app development company Jaipur",
        "iOS Android app development Jaipur",
        "Flutter React Native developers India",
        "cross-platform app development",
      ],
    },
    saas: {
      primary: "SaaS MVP development India",
      secondary: [
        "startup MVP developers India",
        "React Supabase app development",
        "rapid prototype development",
      ],
    },
  },

  // Service offerings
  services: [
    "Website Design & Development",
    "Mobile App Development",
    "Search Engine Optimisation",
    "SaaS MVP Development",
    "Conversion Rate Optimisation",
    "Brand & Content Systems",
  ],

  // Pricing guide ranges
  pricingRanges: {
    websiteDesign: "From ₹24,999",
    mobileAppDevelopment: "From ₹35,999",
    seo: "From ₹12,999 / mo",
    saasMvp: "From ₹49,999",
  },
} as const;

export const publicRoutes = [
  "/",
  "/about",
  "/services",
  "/case-studies",
  "/pricing",
  "/pricing/website-design",
  "/pricing/mobile-app-development",
  "/pricing/seo",
  "/pricing/saas-mvp",
  "/blog",
  "/contact",
  "/privacy-policy",
  "/terms-and-conditions",
] as const;

export type BusinessConfig = typeof business;
