import { createFileRoute, Link } from "@tanstack/react-router";
import { ExternalLink, Star, MessageSquare, ArrowRight, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/dws/Navbar";
import { Footer } from "@/components/dws/Contact";
import { Reveal } from "@/components/dws/Reveal";
import { useDwsBody } from "@/components/dws/useDwsBody";
import { business } from "@/data/business";
import { formatMetaTitle, getCanonicalUrl } from "@/lib/seo";

export const Route = createFileRoute("/review")({
  head: () => {
    const title = formatMetaTitle("Client Review | Google Business Feedback");
    const canonical = getCanonicalUrl("/review");

    return {
      meta: [
        { title },
        { name: "robots", content: "noindex, nofollow" },
        {
          name: "description",
          content: "Leave a verified Google review for DWS Web Services.",
        },
      ],
      links: [{ rel: "canonical", href: canonical }],
    };
  },
  component: ReviewPage,
});

function ReviewPage() {
  useDwsBody();

  return (
    <>
      <Navbar />
      <main>
        <section className="dws-section pt-5">
          <div className="container">
            <Reveal>
              <nav aria-label="Breadcrumb" className="dws-mono small mb-4">
                <Link to="/" className="text-muted text-decoration-none">
                  Home
                </Link>{" "}
                / <span className="text-white">Review</span>
              </nav>
            </Reveal>

            <div className="row justify-content-center">
              <div className="col-12 col-lg-8 col-xl-7">
                <Reveal>
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <span className="dws-eyebrow mb-0">Client Feedback</span>
                    <span className="d-inline-flex align-items-center gap-1 small text-success px-2 py-0 border border-success-subtle rounded-1">
                      <ShieldCheck size={12} aria-hidden="true" />
                      <span>Verified Google Business</span>
                    </span>
                  </div>

                  <h1 className="display-5 text-white fw-bold mb-3">
                    Thank you for partnering with DWS
                  </h1>

                  <p className="dws-muted fs-5 mb-5 lh-base">
                    Your candid feedback directly impacts our engineering standards and helps
                    prospective businesses make informed decisions. We invite all clients to post
                    their experience on our official Google Business Profile.
                  </p>
                </Reveal>

                {/* Primary Google Review Card */}
                <Reveal delay={0.1}>
                  <div className="p-4 p-md-5 border border-secondary-subtle rounded-1 bg-black mb-5">
                    <div className="d-flex align-items-center gap-2 mb-3">
                      <div className="d-flex text-warning" aria-hidden="true">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={20} fill="#f59e0b" stroke="#f59e0b" />
                        ))}
                      </div>
                      <span className="dws-mono small text-muted">Direct Google Rating</span>
                    </div>

                    <h2 className="h4 text-white mb-2">Leave your review on Google</h2>
                    <p className="dws-muted mb-4 lh-base">
                      It takes less than 30 seconds. A few sentences on project scope,
                      communication, and delivery speed mean the world to our small, dedicated team.
                    </p>

                    <div className="d-flex flex-column flex-sm-row gap-3">
                      <a
                        href={business.googleReviewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="dws-btn dws-btn-solid d-inline-flex align-items-center justify-content-center gap-2"
                      >
                        <span>Write a Review on Google</span>
                        <ExternalLink size={16} aria-hidden="true" />
                      </a>
                      <a
                        href={business.googleBusinessSearchUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="dws-btn dws-btn-outline d-inline-flex align-items-center justify-content-center gap-2"
                      >
                        <span>View Google Profile</span>
                        <ArrowRight size={16} aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </Reveal>

                {/* Private Feedback / Direct Line */}
                <Reveal delay={0.15}>
                  <div className="p-4 border border-secondary-subtle rounded-1 bg-black">
                    <div className="d-flex align-items-start gap-3">
                      <div className="p-2 border border-secondary-subtle rounded-1 text-muted mt-1">
                        <MessageSquare size={20} aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="h6 text-white mb-1">Prefer to speak directly?</h3>
                        <p className="dws-muted small mb-3">
                          If you have constructive suggestions, questions, or private feedback
                          regarding your delivery, Founder Dheerajj Kumawat is reachable directly.
                        </p>
                        <div className="d-flex gap-3 flex-wrap">
                          <a
                            href={`mailto:${business.email}?subject=${encodeURIComponent("Client Feedback - DWS Project")}`}
                            className="dws-mono small text-white text-decoration-underline"
                          >
                            {business.email}
                          </a>
                          <span className="text-muted">•</span>
                          <a
                            href={`https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent("Hello Dheeraj, I have some feedback regarding our project.")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="dws-mono small text-white text-decoration-underline"
                          >
                            WhatsApp Founder
                          </a>
                        </div>
                      </div>
                    </div>
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
