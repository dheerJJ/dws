import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { business } from "@/data/business";
import { GoogleReview, MINIMUM_REVIEWS_THRESHOLD } from "@/data/reviews";
import { Reveal } from "./Reveal";

type GoogleReviewsProps = {
  reviews?: GoogleReview[];
  rating?: number;
  totalReviews?: number;
};

/**
 * Official Google "G" 4-color inline SVG logo (v1.0.2).
 */
function GoogleGLogo({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle", flexShrink: 0 }}
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
        fill="#EA4335"
      />
    </svg>
  );
}

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
      style={{ display: "inline-block", verticalAlign: "middle", flexShrink: 0 }}
    >
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

/**
 * Individual Review Card with natural height, 'Read more' toggle, real avatars, and Google branding.
 */
function ReviewCard({ review: r, index }: { review: GoogleReview; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = r.text.length > 175;
  const displayText = isLong && !expanded ? `${r.text.slice(0, 165)}...` : r.text;

  return (
    <div className="col-12 col-md-6 col-lg-4" key={r.id || `${r.authorName}-${index}`}>
      <Reveal delay={index * 0.06} className="w-100">
        <div className="dws-quote w-100 mb-0 d-flex flex-column p-4 border border-secondary-subtle rounded-1 bg-black position-relative">
          {/* Top Row: Stars + Date on Left, Official Google G in Top Right */}
          <div className="d-flex justify-content-between align-items-start mb-3">
            <div>
              <div
                role="img"
                className="d-flex align-items-center gap-1 mb-1"
                aria-label={`${r.rating} out of 5 stars`}
              >
                {[...Array(Math.min(5, Math.max(1, r.rating)))].map((_, starIndex) => (
                  <GoogleStar key={starIndex} size={15} />
                ))}
              </div>
              <span className="dws-mono small text-muted">{r.relativeTime}</span>
            </div>
            {/* Small Google G logo in top-right */}
            <div
              className="d-flex align-items-center justify-content-center p-1 rounded bg-dark border border-secondary-subtle"
              aria-hidden="true"
            >
              <GoogleGLogo size={14} />
            </div>
          </div>

          {/* Review Text with Natural Length and Read more Toggle */}
          <blockquote className="dws-muted mb-4 flex-grow-1 fs-6 lh-base fst-normal">
            &ldquo;{displayText}&rdquo;
            {isLong && (
              <button
                type="button"
                onClick={() => setExpanded(!expanded)}
                className="btn btn-link p-0 ms-1 text-white text-decoration-underline border-0 bg-transparent"
                style={{ fontSize: "0.85rem", cursor: "pointer" }}
                aria-label={expanded ? "Show less of this review" : "Read more of this review"}
              >
                {expanded ? "Show less" : "Read more"}
              </button>
            )}
          </blockquote>

          {/* Author Details with Google "G" logo & "Google review" */}
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
              {/* Official Google G logo and 'Google review' text */}
              <div className="d-flex align-items-center gap-1 small text-muted">
                <GoogleGLogo size={12} />
                <span>Google review</span>
              </div>
              {/* Optional Service Tag Pill if provided */}
              {r.service && (
                <div className="mt-1">
                  <span
                    className="d-inline-block px-2 rounded text-white-50 border border-secondary-subtle"
                    style={{
                      fontSize: "0.72rem",
                      paddingTop: "0.125rem",
                      paddingBottom: "0.125rem",
                    }}
                  >
                    {r.service}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

/**
 * Google Reviews showcase component.
 * STRICT RULE: Automatically stays completely hidden (returns null)
 * until at least MINIMUM_REVIEWS_THRESHOLD (3) verified reviews exist.
 */
export function GoogleReviews({ reviews = [] }: GoogleReviewsProps) {
  // Condition: Only render when there are at least 3 verified Google reviews
  if (!reviews || reviews.length < MINIMUM_REVIEWS_THRESHOLD) {
    return null;
  }

  // Schema.org LocalBusiness with AggregateRating and Reviews structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    url: business.siteUrl,
    image: `${business.siteUrl}/og-image.png`,
    telephone: business.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.streetAddress,
      addressLocality: business.address.addressLocality,
      addressRegion: business.address.addressRegion,
      postalCode: business.address.postalCode,
      addressCountry: "IN",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: reviews.length,
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: r.authorName,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: "5",
      },
      reviewBody: r.text,
    })),
  };

  return (
    <section id="reviews" className="dws-section" aria-label="Google Client Reviews">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="container">
        <div className="row mb-5 align-items-end justify-content-between">
          <div className="col-lg-7 col-xl-6">
            <Reveal>
              <div className="d-flex align-items-center gap-2 mb-2">
                <GoogleGLogo size={18} />
                <span className="dws-eyebrow mb-0">Google Reviews</span>
              </div>
              <h2 className="dws-section-title display-5 mb-3">What clients say on Google</h2>
              <p className="dws-muted fs-5 mb-0">
                Independent reviews submitted directly to our official Google Business profile.
              </p>
            </Reveal>
          </div>

          <div className="col-lg-5 text-lg-end mt-4 mt-lg-0">
            <Reveal delay={0.1}>
              <div className="d-inline-flex flex-column align-items-lg-end gap-2">
                {/* Rating Summary matching exact count */}
                <div className="d-flex align-items-center gap-2">
                  <div
                    role="img"
                    className="d-flex align-items-center gap-1"
                    aria-label="5.0 out of 5 stars"
                  >
                    {[...Array(5)].map((_, i) => (
                      <GoogleStar key={i} size={18} />
                    ))}
                  </div>
                  <span className="fw-semibold text-white">
                    5.0 · {reviews.length} Google reviews
                  </span>
                </div>

                {/* Proof & Action Buttons */}
                <div className="d-flex flex-wrap gap-2 mt-2 justify-content-lg-end">
                  <a
                    href={business.googleBusinessSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dws-btn dws-btn-solid dws-btn-sm-tight d-inline-flex align-items-center gap-2"
                    aria-label="View all reviews on Google (opens in a new tab)"
                  >
                    <GoogleGLogo size={14} />
                    <span>View all reviews on Google</span>
                    <ExternalLink size={13} className="ms-1" aria-hidden="true" />
                  </a>
                  <a
                    href={business.googleReviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dws-btn dws-btn-outline dws-btn-sm-tight d-inline-flex align-items-center gap-2"
                    aria-label="Leave a review on Google (opens in a new tab)"
                  >
                    <span>Leave a Review on Google</span>
                    <ExternalLink size={13} className="ms-1" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Reviews in a Responsive Grid with Independent Card Heights */}
        <div className="row g-4 justify-content-start align-items-start">
          {reviews.map((r, i) => (
            <ReviewCard key={r.id || `${r.authorName}-${i}`} review={r} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
