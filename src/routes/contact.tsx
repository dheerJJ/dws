import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { z } from "zod";

import { Navbar } from "@/components/dws/Navbar";
import { Footer } from "@/components/dws/Contact";
import { Reveal } from "@/components/dws/Reveal";
import { useDwsBody } from "@/components/dws/useDwsBody";
import { SplitText } from "@/components/dws/reactbits/SplitText";
import { submitEnquiry } from "@/lib/contact.functions";
import { tiers } from "@/data/site";

const searchSchema = z.object({ plan: z.string().optional() });

export const Route = createFileRoute("/contact")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Contact DwS — Start a Project" },
      {
        name: "description",
        content:
          "Tell DwS about your growth goals. Send an enquiry and get a reply within one business day to book a 30-minute strategy call.",
      },
      { property: "og:title", content: "Contact DwS — Start a Project" },
      {
        property: "og:description",
        content: "Send an enquiry and we'll map your growth route in a 30-minute call.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const budgets = [
  "Under ₹6,999 / mo",
  "₹6,999 – ₹15,999 / mo",
  "₹15,999 – ₹35,999 / mo",
  "₹35,999+ / mo",
];

function ContactPage() {
  useDwsBody();
  const { plan } = Route.useSearch();
  const send = useServerFn(submitEnquiry);

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: plan ? `I'm interested in the ${plan} package. ` : "",
  });

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setError(null);
    try {
      await send({ data: form });
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <>
      <Navbar />
      <main>
        <section className="dws-section pt-5">
          <div className="container">
            <div className="row g-4 g-lg-5">
              <div className="col-lg-5">
                <Reveal>
                  <p className="dws-eyebrow mb-3">Contact</p>
                </Reveal>
                <h1 className="display-5 mb-4">
                  <SplitText as="span" text="Tell us where you want to be." />
                </h1>
                <Reveal delay={0.15}>
                  <p className="dws-hero-sub mb-4">
                    Share a little about your business and goals. You'll get a reply within one
                    business day with next steps and a slot for a 30-minute strategy call.
                  </p>
                  <ul className="dws-tier-list">
                    <li>Senior team, no hand-offs to juniors</li>
                    <li>Clear scope and pricing before we start</li>
                    <li>Reporting tied to revenue, not vanity metrics</li>
                  </ul>
                  {plan && tiers.some((t) => t.name === plan) && (
                    <p className="dws-mono small mb-0">Selected package: {plan}</p>
                  )}
                </Reveal>
              </div>

              <div className="col-lg-7">
                <Reveal delay={0.1}>
                  <div className="dws-form-card">
                    {status === "sent" ? (
                      <div className="text-center py-5">
                        <h2 className="h4 mb-3">Message received.</h2>
                        <p className="dws-muted mb-0">
                          Thanks {form.name.split(" ")[0] || "there"} — your enquiry is in. We'll be
                          in touch at {form.email} within one business day.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={onSubmit} noValidate>
                        <div className="row g-3">
                          <div className="col-md-6">
                            <label className="dws-label" htmlFor="name">
                              Name
                            </label>
                            <input
                              id="name"
                              className="dws-input"
                              value={form.name}
                              onChange={update("name")}
                              required
                              minLength={2}
                              autoComplete="name"
                            />
                          </div>
                          <div className="col-md-6">
                            <label className="dws-label" htmlFor="email">
                              Email
                            </label>
                            <input
                              id="email"
                              type="email"
                              className="dws-input"
                              value={form.email}
                              onChange={update("email")}
                              required
                              autoComplete="email"
                            />
                          </div>
                          <div className="col-md-6">
                            <label className="dws-label" htmlFor="company">
                              Company <span className="dws-muted">(optional)</span>
                            </label>
                            <input
                              id="company"
                              className="dws-input"
                              value={form.company}
                              onChange={update("company")}
                              autoComplete="organization"
                            />
                          </div>
                          <div className="col-md-6">
                            <label className="dws-label" htmlFor="budget">
                              Monthly budget
                            </label>
                            <select
                              id="budget"
                              className={`dws-input${form.budget ? "" : " is-placeholder"}`}
                              value={form.budget}
                              onChange={update("budget")}
                            >
                              <option value="">Select a range</option>
                              {budgets.map((b) => (
                                <option key={b} value={b}>
                                  {b}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className="col-12">
                            <label className="dws-label" htmlFor="message">
                              What do you want to achieve?
                            </label>
                            <textarea
                              id="message"
                              className="dws-input"
                              rows={5}
                              value={form.message}
                              onChange={update("message")}
                              required
                              minLength={10}
                            />
                          </div>
                          {error && (
                            <div className="col-12">
                              <p className="dws-form-error mb-0">{error}</p>
                            </div>
                          )}
                          <div className="col-12 d-flex flex-wrap align-items-center gap-3">
                            <button
                              type="submit"
                              className="dws-btn dws-btn-solid"
                              disabled={status === "sending"}
                            >
                              {status === "sending" ? "Sending…" : "Send Enquiry"}
                            </button>
                            <span className="dws-muted small">
                              No spam, ever. We reply within one business day.
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
      </main>
      <Footer />
    </>
  );
}
