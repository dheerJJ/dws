import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { business } from "@/data/business";
import logo from "@/assets/dws-logo.png.asset.json";

function SocialIcon({ label }: { label: string }) {
  if (label === "LinkedIn") {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21h-4z" />
      </svg>
    );
  }
  if (label === "Instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (label === "Twitter" || label === "X") {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    );
  }
  if (label === "WhatsApp") {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.301-.15-1.781-.879-2.057-.98-.276-.1-.477-.15-.678.15-.201.301-.78 1-.956 1.201-.176.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.799-1.5-1.787-1.676-2.088-.176-.301-.019-.464.132-.614.135-.135.301-.351.451-.527.151-.176.201-.301.301-.502.101-.201.05-.377-.025-.527-.075-.15-.678-1.634-.929-2.241-.244-.59-.493-.51-.678-.52-.176-.008-.377-.01-.578-.01s-.527.075-.803.377c-.276.301-1.054 1.03-1.054 2.512 0 1.482 1.079 2.914 1.23 3.115.15.201 2.123 3.242 5.143 4.547.719.31 1.28.496 1.718.636.722.23 1.379.197 1.898.12.578-.087 1.781-.728 2.032-1.431.251-.703.251-1.306.176-1.431-.075-.126-.276-.201-.577-.351z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
    </svg>
  );
}

export function Contact() {
  return (
    <section id="contact" className="dws-section dws-cta">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <Reveal>
              <p className="dws-eyebrow mb-3">Contact</p>
              <h2 className="display-4 mb-3">Let's build your next growth curve.</h2>
              <p className="dws-muted mb-5">
                Tell us where you want to be in 12 months. We'll map the route in a 30-minute call.
              </p>
              <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                <Link to="/contact" className="dws-btn dws-btn-solid">
                  Start a Project
                </Link>
                <Link to="/pricing" className="dws-btn dws-btn-outline">
                  View Pricing
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

const serviceLinks = [
  { label: "Website Design", slug: "website-design" },
  { label: "Digital Marketing", slug: "digital-marketing" },
  { label: "SEO Services", slug: "seo" },
  { label: "SaaS MVP Development", slug: "saas-mvp" },
] as const;

const companyLinks = [
  { label: "About Studio", to: "/about" },
  { label: "Services & Capabilities", to: "/services" },
  { label: "Case Studies & Work", to: "/case-studies" },
  { label: "Blog & Articles", to: "/blog" },
  { label: "Pricing & Plans", to: "/pricing" },
  { label: "Contact Us", to: "/contact" },
] as const;

export function Footer() {
  const phoneDisplay = "+91 78509 15862";

  const handleScrollTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="dws-footer">
      <div className="container">
        <Reveal y={16}>
          <div className="row g-4 g-lg-5">
            {/* Col 1: Brand & Status */}
            <div className="col-lg-4 col-md-6">
              <Link to="/" aria-label="DwS home" className="d-inline-block mb-3">
                <img src={logo.url} alt="DwS logo" className="dws-footer-logo" />
              </Link>

              <div>
                <div className="dws-footer-badge">
                  <span className="dws-footer-badge-dot" />
                  <span>Available for new projects</span>
                </div>
              </div>

              <p className="mb-3">
                Founder-led digital studio in Jaipur building websites, SaaS products, and growth
                programmes for ambitious teams across India and abroad.
              </p>

              <div className="d-flex gap-2 align-items-center">
                {business.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dws-social"
                    aria-label={`Visit DwS on ${s.label}`}
                  >
                    <SocialIcon label={s.label} />
                  </a>
                ))}
                <a
                  href={`mailto:${business.email}`}
                  className="dws-social"
                  aria-label="Send us an email"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Col 2: Services */}
            <div className="col-6 col-lg-2 col-md-3">
              <h3 className="dws-footer-title">Services</h3>
              <ul className="dws-footer-list">
                {serviceLinks.map((s) => (
                  <li key={s.slug}>
                    <Link to="/pricing/$service" params={{ service: s.slug }}>
                      {s.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/services">All Services</Link>
                </li>
                <li>
                  <Link to="/pricing">Pricing Plans</Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Company */}
            <div className="col-6 col-lg-2 col-md-3">
              <h3 className="dws-footer-title">Company</h3>
              <ul className="dws-footer-list">
                {companyLinks.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to}>{l.label}</Link>
                  </li>
                ))}
                <li>
                  <Link to="/dashboard">Client Portal</Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Studio Location & Contact */}
            <div className="col-lg-4 col-md-6">
              <h3 className="dws-footer-title">Get in touch</h3>
              <ul className="dws-footer-list mb-3">
                <li>
                  <a href={`mailto:${business.email}`}>
                    <svg
                      viewBox="0 0 24 24"
                      width="15"
                      height="15"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    {business.email}
                  </a>
                </li>
                <li>
                  <a href={`tel:${business.phone}`}>
                    <svg
                      viewBox="0 0 24 24"
                      width="15"
                      height="15"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    {phoneDisplay}
                  </a>
                </li>
                <li>
                  <span>
                    <svg
                      viewBox="0 0 24 24"
                      width="15"
                      height="15"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {business.city}, {business.state}, India
                  </span>
                </li>
                <li>
                  <span>
                    <svg
                      viewBox="0 0 24 24"
                      width="15"
                      height="15"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    Mon–Sat, 10:00–19:00 IST
                  </span>
                </li>
              </ul>
              <div className="d-flex gap-2 flex-wrap">
                <Link to="/contact" className="dws-btn dws-btn-solid dws-btn-sm-tight">
                  Start a Project
                </Link>
                <a
                  href={`https://wa.me/${business.phone.replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dws-btn dws-btn-outline dws-btn-sm-tight"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar with Copyright & Back to Top */}
          <div className="dws-footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
            <div className="d-flex flex-column flex-sm-row align-items-center gap-2 text-center text-sm-start">
              <span>
                © {new Date().getFullYear()} DwS (Digital with Strategy). All rights reserved.
              </span>
              <span className="d-none d-sm-inline">•</span>
              <span>Crafted in Jaipur, shipping worldwide.</span>
            </div>

            <div className="d-flex align-items-center gap-3">
              <div className="dws-footer-legal-links">
                <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer">
                  Sitemap
                </a>
                <Link to="/contact">Support</Link>
              </div>

              <button
                type="button"
                onClick={handleScrollTop}
                className="dws-scroll-top-btn"
                aria-label="Scroll back to top"
              >
                <span>Top</span>
                <svg
                  viewBox="0 0 24 24"
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
