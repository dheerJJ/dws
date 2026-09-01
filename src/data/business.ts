// Business facts used for SEO metadata and structured data.
export const business = {
  name: "DwS",
  legalName: "DwS — Digital with Strategy",
  email: "tech.dws.co@gmail.com",
  phone: "+917850915862",
  founder: "Dheerajj Kumawat",
  foundingYear: "2026",
  city: "Jaipur",
  state: "Rajasthan",
  country: "IN",
  description:
    "DwS is a Jaipur-based digital agency building high-performance websites, SaaS products, SEO and paid growth programmes for clients across India and internationally.",
  areaServed: ["Jaipur", "Rajasthan", "India", "Worldwide"],
  services: [
    "Website Design & Development",
    "SaaS Product Development",
    "Search Engine Optimisation",
    "Performance Marketing",
    "Brand & Content Systems",
    "Conversion Rate Optimisation",
  ],
  priceRange: "₹₹",
  openingHours: "Mo-Sa 10:00-19:00",
  socials: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/dheerajj-kumawat-1b4b7b366/" },
    { label: "Instagram", url: "https://www.instagram.com/dws.io/" },
    { label: "GitHub", url: "https://github.com/dheerJJ" },
  ],
} as const;

export const publicRoutes = [
  "/",
  "/about",
  "/services",
  "/case-studies",
  "/pricing",
  "/blog",
  "/contact",
] as const;
