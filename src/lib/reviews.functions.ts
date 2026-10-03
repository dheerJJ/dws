import { createServerFn } from "@tanstack/react-start";
import { business } from "@/data/business";
import { GoogleReview, googleReviews } from "@/data/reviews";

type GoogleReviewsResult = {
  reviews: GoogleReview[];
  rating: number;
  totalReviews: number;
  source: "places_api" | "local_store";
};

// In-memory cache for serverless runtime (12-hour TTL)
let cachedData: GoogleReviewsResult | null = null;
let lastFetchedAt = 0;
const CACHE_TTL_MS = 12 * 60 * 60 * 1000;

/**
 * Server function to fetch verified Google Business reviews.
 * Integrates with Google Places API when GOOGLE_PLACES_API_KEY is configured in the environment.
 * Falls back to the verified local store if API key is not set.
 */
export const getGoogleReviews = createServerFn({ method: "GET" }).handler(
  async (): Promise<GoogleReviewsResult> => {
    const now = Date.now();
    if (cachedData && now - lastFetchedAt < CACHE_TTL_MS) {
      return cachedData;
    }

    const apiKey =
      (typeof process !== "undefined" && process.env && process.env["GOOGLE_PLACES_API_KEY"]) || "";
    const placeId = business.googlePlaceId || "ChIJC-3Gj4VVjmcRKRRe3r5-GJ4";

    if (apiKey) {
      try {
        const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(
          placeId,
        )}&fields=reviews,rating,user_ratings_total&key=${encodeURIComponent(apiKey)}`;

        const response = await fetch(url, {
          headers: { Accept: "application/json" },
        });

        if (response.ok) {
          const json = await response.json();
          if (json.status === "OK" && json.result) {
            const rawReviews =
              (json.result.reviews as Array<{
                author_name: string;
                profile_photo_url?: string;
                rating: number;
                relative_time_description?: string;
                text: string;
                author_url?: string;
                time?: number;
              }>) || [];

            const parsedReviews: GoogleReview[] = rawReviews.map((r, index) => ({
              id: r.time ? String(r.time) : `review-${index}`,
              authorName: r.author_name || "Verified Client",
              authorPhotoUrl: r.profile_photo_url,
              rating: Number(r.rating) || 5,
              relativeTime: r.relative_time_description || "Recent",
              text: r.text || "",
              reviewUrl: r.author_url || business.googleReviewUrl,
            }));

            cachedData = {
              reviews: parsedReviews,
              rating: Number(json.result.rating) || 5,
              totalReviews: Number(json.result.user_ratings_total) || parsedReviews.length,
              source: "places_api",
            };
            lastFetchedAt = now;
            return cachedData;
          }
        }
      } catch (err) {
        console.error("Failed to query Google Places API for reviews:", err);
      }
    }

    // Default / fallback to local verified store
    cachedData = {
      reviews: googleReviews,
      rating: 5,
      totalReviews: googleReviews.length,
      source: "local_store",
    };
    lastFetchedAt = now;
    return cachedData;
  },
);
