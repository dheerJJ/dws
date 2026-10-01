import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { z } from "zod";
import { ArrowUpRight, Calendar, Clock, Mail, MapPin, Phone } from "lucide-react";

import { Navbar } from "@/components/dws/Navbar";
import { Footer } from "@/components/dws/Contact";
import { Reveal } from "@/components/dws/Reveal";
import { useDwsBody } from "@/components/dws/useDwsBody";
import { CustomSelect } from "@/components/dws/CustomSelect";
import { submitEnquiry } from "@/lib/contact.functions";
import { tiers } from "@/data/site";
import { business } from "@/data/business";
import {
  formatMetaDescription,
  formatMetaTitle,
  getBreadcrumbSchema,
  getCanonicalUrl,
  getOrganizationSchema,
} from "@/lib/seo";

const searchSchema = z.object({ plan: z.string().optional() });

export const Route = createFileRoute("/contact")({
  validateSearch: searchSchema,
  head: () => {
    const title = formatMetaTitle("Contact Studio | Start a Project");
    const description = formatMetaDescription(
      "Contact DWS Web Services in Jaipur. Book a free 30-minute strategy call or send an enquiry for website design, SEO, and software development.",
    );
    const canonical = getCanonicalUrl("/contact");
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
          children: JSON.stringify(getOrganizationSchema()),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: `Contact ${business.name}`,
            description: description,
            url: canonical,
            mainEntity: {
              "@type": "ProfessionalService",
              name: business.name,
              telephone: business.phone,
              email: business.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: business.address.streetAddress,
                addressLocality: business.city,
                addressRegion: business.state,
                postalCode: business.address.postalCode,
                addressCountry: business.countryCode,
              },
            },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            getBreadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Contact", path: "/contact" },
            ]),
          ),
        },
      ],
    };
  },
  component: ContactPage,
});

const budgets = ["Under ₹25,000", "₹25,000 - ₹65,000", "₹65,000 - ₹1,50,000", "₹1,50,000+"];

function formatErrorMessage(err: unknown): string {
  if (!err) return "Something went wrong. Please try again.";
  const raw = err instanceof Error ? err.message : String(err);
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      const issue = parsed[0];
      if (issue.path?.includes("message")) {
        return "Message must be between 10 and 4,000 characters (minimum and maximum characters allowed).";
      }
      if (issue.path?.includes("name")) {
        return "Full name must be between 2 and 120 characters.";
      }
      if (issue.path?.includes("email")) {
        return "Please enter a valid email address.";
      }
      if (issue.message) return issue.message;
    }
  } catch {
    // String is not JSON, check for raw Zod substrings
    if (raw.includes("too_small") && raw.includes("message")) {
      return "Message must be between 10 and 4,000 characters (minimum and maximum characters allowed).";
    }
  }
  return raw;
}

function ContactPage() {
  useDwsBody();
  const { plan } = Route.useSearch();
  const send = useServerFn(submitEnquiry);

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const [lastSubmitTime, setLastSubmitTime] = useState<number>(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: plan ? `I am interested in the ${plan} package. ` : "",
    website_hp: "", // Honeypot field for bot protection
  });

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Honeypot check: silently reject spam bots
    if (form.website_hp && form.website_hp.length > 0) {
      setStatus("sent");
      return;
    }

    // Client-side rate limiting: 10s cooldown
    const now = Date.now();
    if (now - lastSubmitTime < 10000) {
      setError("Please wait a few seconds before resubmitting.");
      return;
    }

    setStatus("sending");
    setError(null);
    setLastSubmitTime(now);

    try {
      await send({ data: form });
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(formatErrorMessage(err));
    }
  }

  const whatsappHref = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(business.whatsappDefaultMessage)}`;

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
                / <span className="text-white">Contact</span>
              </nav>
            </Reveal>

            <div className="row g-4 g-lg-5">
              <div className="col-lg-5">
                <Reveal>
                  <p className="dws-eyebrow mb-3">Initiate Engagement</p>
                </Reveal>

                {/* Exactly one H1 per page containing primary keywords */}
                <h1 className="display-5 mb-4 text-white fw-bold">
                  Start Your Project with DWS Web Services
                </h1>

                <Reveal delay={0.1}>
                  <p className="dws-hero-sub mb-4">
                    Share your requirements and commercial goals. You will receive a direct reply
                    from our technical lead within one business day with clear next steps and scope
                    options.
                  </p>

                  <ul className="dws-tier-list mb-4">
                    <li>Direct access to senior engineers and strategists</li>
                    <li>Guaranteed fixed scope and pricing before kickoff</li>
                    <li>Transparent reporting tied to verified revenue metrics</li>
                  </ul>

                  {plan && tiers.some((t) => t.name === plan) && (
                    <p className="dws-mono small mb-4 text-white">Selected Package: {plan}</p>
                  )}
                </Reveal>

                {/* Visible NAP (Name, Address, Phone) Block */}
                <Reveal delay={0.15}>
                  <div className="dws-step p-4 mt-4">
                    <p className="dws-case-label dws-mono mb-3">Studio Contact Details</p>
                    <ul className="list-unstyled mb-0 dws-muted small">
                      <li className="mb-2 d-flex align-items-center gap-2">
                        <MapPin size={16} className="text-white flex-shrink-0" aria-hidden="true" />
                        <span>
                          <strong className="text-white">{business.name}</strong>,{" "}
                          {business.address.streetAddress}, {business.city}, {business.state}{" "}
                          {business.address.postalCode}, India
                        </span>
                      </li>
                      <li className="mb-2 d-flex align-items-center gap-2">
                        <Phone size={16} className="text-white flex-shrink-0" aria-hidden="true" />
                        <a
                          href={`tel:${business.phone}`}
                          className="text-white text-decoration-none"
                        >
                          {business.phoneDisplay}
                        </a>
                      </li>
                      <li className="mb-2 d-flex align-items-center gap-2">
                        <Mail size={16} className="text-white flex-shrink-0" aria-hidden="true" />
                        <a
                          href={`mailto:${business.email}`}
                          className="text-white text-decoration-none"
                        >
                          {business.email}
                        </a>
                      </li>
                      <li className="d-flex align-items-center gap-2">
                        <Clock size={16} className="text-white flex-shrink-0" aria-hidden="true" />
                        <span>{business.openingHoursDisplay}</span>
                      </li>
                    </ul>
                  </div>
                </Reveal>
              </div>

              <div className="col-lg-7">
                {/* Online Strategy Call Booking Section */}
                <Reveal delay={0.08}>
                  <div className="dws-step p-4 mb-4">
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
                      <div className="d-flex align-items-start gap-3">
                        <div
                          className="d-flex align-items-center justify-content-center flex-shrink-0 mt-1"
                          style={{
                            width: "36px",
                            height: "36px",
                            borderRadius: "6px",
                            backgroundColor: "rgba(255, 255, 255, 0.05)",
                            border: "1px solid rgba(255, 255, 255, 0.12)",
                          }}
                        >
                          <Calendar size={18} className="text-white" aria-hidden="true" />
                        </div>
                        <div>
                          <h2 className="h5 mb-1 text-white">Direct 30-Minute Strategy Call</h2>
                          <p className="dws-muted small mb-0">
                            Prefer speaking directly? Pick an available slot on our calendar right
                            now.
                          </p>
                        </div>
                      </div>
                      <a
                        href={business.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="dws-btn dws-btn-solid dws-btn-sm-tight text-nowrap d-inline-flex align-items-center gap-2 flex-shrink-0"
                      >
                        <span>Schedule Online Slot</span>
                        <ArrowUpRight size={15} aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </Reveal>

                {/* Validated Contact Form */}
                <Reveal delay={0.12}>
                  <div className="dws-form-card">
                    <h2 className="h4 mb-4 text-white">Send Project Enquiry</h2>
                    {status === "sent" ? (
                      <div className="text-center py-5">
                        <h3 className="h4 mb-3 text-white">Message Received Successfully</h3>
                        <p className="dws-muted mb-0">
                          Thanks! A confirmation email has been sent to your inbox.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={onSubmit} noValidate>
                        {/* Hidden honeypot field for bot blocking */}
                        <div style={{ display: "none" }} aria-hidden="true">
                          <label htmlFor="website_hp">Leave this empty</label>
                          <input
                            type="text"
                            id="website_hp"
                            name="website_hp"
                            tabIndex={-1}
                            autoComplete="off"
                            value={form.website_hp}
                            onChange={update("website_hp")}
                          />
                        </div>

                        <div className="row g-3">
                          <div className="col-md-6">
                            <label className="dws-label" htmlFor="name">
                              Full Name *
                            </label>
                            <input
                              id="name"
                              className="dws-input"
                              value={form.name}
                              onChange={update("name")}
                              required
                              minLength={2}
                              autoComplete="name"
                              placeholder="Your Name"
                            />
                          </div>
                          <div className="col-md-6">
                            <label className="dws-label" htmlFor="email">
                              Email Address *
                            </label>
                            <input
                              id="email"
                              type="email"
                              className="dws-input"
                              value={form.email}
                              onChange={update("email")}
                              required
                              autoComplete="email"
                              placeholder="name@company.com"
                            />
                          </div>
                          <div className="col-md-6">
                            <label className="dws-label" htmlFor="company">
                              Company / Project Name <span className="dws-muted">(optional)</span>
                            </label>
                            <input
                              id="company"
                              className="dws-input"
                              value={form.company}
                              onChange={update("company")}
                              autoComplete="organization"
                              placeholder="Brand or Website"
                            />
                          </div>
                          <div className="col-md-6">
                            <label className="dws-label" htmlFor="budget">
                              Target Budget Range
                            </label>
                            <CustomSelect
                              id="budget"
                              name="budget"
                              value={form.budget}
                              onChange={(val) => setForm((f) => ({ ...f, budget: val }))}
                              options={budgets}
                              placeholder="Select a budget range"
                            />
                          </div>
                          <div className="col-12">
                            <div className="d-flex justify-content-between align-items-baseline mb-1">
                              <label className="dws-label mb-0" htmlFor="message">
                                Project Details &amp; Commercial Goals *
                              </label>
                              <span className="dws-muted small">
                                Min 10 &ndash; Max 4,000 characters
                              </span>
                            </div>
                            <textarea
                              id="message"
                              className="dws-input"
                              rows={5}
                              value={form.message}
                              onChange={update("message")}
                              required
                              minLength={10}
                              maxLength={4000}
                              placeholder="Describe your current business, website requirements, or target timeline..."
                            />
                            <div className="d-flex justify-content-between align-items-center mt-1">
                              <span className="dws-muted small" style={{ fontSize: "0.8rem" }}>
                                Minimum 10 and maximum 4,000 characters allowed.
                              </span>
                              {form.message.length > 0 && (
                                <span
                                  className="dws-mono small text-muted"
                                  style={{ fontSize: "0.75rem" }}
                                >
                                  {form.message.length} / 4,000
                                </span>
                              )}
                            </div>
                          </div>
                          {error && (
                            <div className="col-12">
                              <p className="dws-form-error mb-0 text-danger small">{error}</p>
                            </div>
                          )}
                          <div className="col-12 d-flex flex-wrap align-items-center gap-3 mt-4">
                            <button
                              type="submit"
                              className="dws-btn dws-btn-solid"
                              disabled={status === "sending"}
                            >
                              {status === "sending" ? "Submitting..." : "Send Project Enquiry"}
                            </button>
                            <span className="dws-muted small">
                              Zero spam. We reply within one business day.
                            </span>
                          </div>
                        </div>
                      </form>
                    )}
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Floating WhatsApp Action Button */}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="dws-floating-whatsapp"
          aria-label="Chat directly on WhatsApp"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.301-.15-1.781-.879-2.057-.98-.276-.1-.477-.15-.678.15-.201.301-.78 1-.956 1.201-.176.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.799-1.5-1.787-1.676-2.088-.176-.301-.019-.464.132-.614.135-.135.301-.351.451-.527.151-.176.201-.301.301-.502.101-.201.05-.377-.025-.527-.075-.15-.678-1.634-.929-2.241-.244-.59-.493-.51-.678-.52-.176-.008-.377-.01-.578-.01s-.527.075-.803.377c-.276.301-1.054 1.03-1.054 2.512 0 1.482 1.079 2.914 1.23 3.115.15.201 2.123 3.242 5.143 4.547.719.31 1.28.496 1.718.636.722.23 1.379.197 1.898.12.578-.087 1.781-.728 2.032-1.431.251-.703.251-1.306.176-1.431-.075-.126-.276-.201-.577-.351z" />
          </svg>
        </a>
      </main>
      <Footer />
    </>
  );
}
