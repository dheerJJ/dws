import { ExternalLink, CheckCircle } from "lucide-react";
import { business } from "@/data/business";
import { GoogleReview, MINIMUM_REVIEWS_THRESHOLD } from "@/data/reviews";
import { Reveal } from "./Reveal";

type GoogleReviewsProps = {
  reviews?: GoogleReview[];
  rating?: number;
  totalReviews?: number;
};

/**
 * Authentic Google Reviews star icon.
 * Matches the official Google Material star path and amber color (#fbbc04) used across Google Maps and Business profiles.
 */
function GoogleStar({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="#fbbc04"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="flex-shrink-0"
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

/**
 * Google Reviews showcase component.
 * STRICT RULE: Automatically stays completely hidden (returns null)
 * until at least MINIMUM_REVIEWS_THRESHOLD (3) verified reviews exist.
 */
export function GoogleReviews({ reviews = [], rating = 5, totalReviews = 0 }: GoogleReviewsProps) {
  // Condition: Only render when there are at least 3 verified Google reviews
  if (!reviews || reviews.length < MINIMUM_REVIEWS_THRESHOLD) {
    return null;
  }

  const displayCount = totalReviews || reviews.length;

  return (
    <section id="reviews" className="dws-section" aria-label="Google Client Reviews">
      <div className="container">
        <div className="row mb-5 align-items-end justify-content-between">
          <div className="col-lg-8 col-xl-7">
            <Reveal>
              <div className="d-flex align-items-center gap-2 mb-2">
                <span className="dws-eyebrow mb-0">Verified Feedback</span>
                <span className="d-inline-flex align-items-center gap-1 small text-success px-2 py-0 border border-success-subtle rounded-1">
                  <CheckCircle size={12} aria-hidden="true" />
                  <span>Google Business Profile</span>
                </span>
              </div>
              <h2 className="dws-section-title display-5 mb-3">What clients say on Google</h2>
              <p className="dws-muted fs-5 mb-0">
                Independent reviews submitted directly to our official Google Business profile.
              </p>
            </Reveal>
          </div>

          <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
            <Reveal delay={0.1}>
              <div className="d-inline-flex flex-column align-items-lg-end gap-2">
                <div className="d-flex align-items-center gap-2">
                  <div className="d-flex align-items-center gap-1" aria-label={`${rating} out of 5 stars`}>
                    {[...Array(5)].map((_, i) => (
                      <GoogleStar key={i} size={18} />
                    ))}
                  </div>
                  <span className="fw-semibold text-white">{rating.toFixed(1)} / 5.0</span>
                </div>
                <span className="dws-mono small text-muted">
                  Based on {displayCount} verified {displayCount === 1 ? "review" : "reviews"}
                </span>
                <a
                  href={business.googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dws-btn dws-btn-outline dws-btn-sm-tight mt-1"
                >
                  <span>Leave a Review on Google</span>
                  <ExternalLink size={14} className="ms-1" aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="row g-4 align-items-stretch">
          {reviews.slice(0, 3).map((r, i) => (
            <div className="col-12 col-md-6 col-lg-4 d-flex" key={r.id || r.authorName + i}>
              <Reveal delay={i * 0.08} className="w-100 d-flex flex-column h-100">
                <div
                  className="dws-quote h-100 w-100 mb-0 d-flex flex-column p-4 border border-secondary-subtle rounded-1 bg-black"
                  style={{ minHeight: "280px" }}
                >
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center gap-1" aria-label={`${r.rating} stars`}>
                      {[...Array(Math.min(5, Math.max(1, r.rating)))].map((_, starIndex) => (
                        <GoogleStar key={starIndex} size={16} />
                      ))}
                    </div>
                    <span className="dws-mono small text-muted">{r.relativeTime}</span>
                  </div>

                  <blockquote className="dws-muted mb-4 flex-grow-1 fs-6 lh-base fst-normal">
                    &ldquo;{r.text}&rdquo;
                  </blockquote>

                  <div className="d-flex align-items-center gap-3 pt-3 mt-auto border-top border-secondary-subtle">
                    {r.authorPhotoUrl ? (
                      <img
                        src={r.authorPhotoUrl}
                        alt={r.authorName}
                        width={40}
                        height={40}
                        className="rounded-circle flex-shrink-0"
                        style={{ width: "40px", height: "40px", objectFit: "cover" }}
                        loading="lazy"
                      />
                    ) : (
                      <div
                        className="d-flex align-items-center justify-content-center bg-secondary text-white rounded-circle fw-semibold flex-shrink-0"
                        style={{ width: 40, height: 40, fontSize: "0.85rem" }}
                        aria-hidden="true"
                      >
                        {r.authorName.charAt(0).toUpperCase()}
                      </div>
                    )}
                    <div className="flex-grow-1 min-w-0">
                      <div className="fw-semibold text-white text-truncate">{r.authorName}</div>
                      <div className="dws-mono small text-muted d-flex align-items-center gap-1">
                        <span>Verified Google Client</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
