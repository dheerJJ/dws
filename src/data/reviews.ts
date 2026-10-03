// Google Reviews Data Model & Local Fallback Store
// Per DWS strict quality guidelines: NO fake reviews, NO fake metrics.
// The reviews section remains completely hidden until at least MINIMUM_REVIEWS_THRESHOLD (3) reviews exist.

export type GoogleReview = {
  id: string;
  authorName: string;
  authorPhotoUrl?: string | undefined;
  rating: number;
  relativeTime: string;
  text: string;
  reviewUrl?: string | undefined;
};

export const MINIMUM_REVIEWS_THRESHOLD = 3;

/**
 * Local verified reviews cache. Kept empty until real client reviews are posted on Google.
 */
export const googleReviews: GoogleReview[] = [];
