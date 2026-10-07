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

export const googleReviews: GoogleReview[] = [
  {
    id: "review-ankit-yadav",
    authorName: "Ankit Yadav",
    rating: 5,
    relativeTime: "Recently",
    text: "Exceeded my expectations! The project was handled with great care, attention to detail, and delivered strictly on schedule. I will definitely work with them again.",
  },
  {
    id: "review-suresh-yadav",
    authorName: "Suresh Yadav",
    rating: 5,
    relativeTime: "Recently",
    text: "I am really impressed with the quality of the work. Everything was delivered right on time without any hassle. Great communication and smooth experience from start to finish. Definitely recommend them!",
  },
  {
    id: "review-kailash-saini-1",
    authorName: "Kailash Saini",
    rating: 5,
    relativeTime: "Recently",
    text: "We hired them for a critical project and they knocked it out of the park. Not only was it the best work we’ve received in this space, but the craftsmanship and quality were evident in every detail. To top it off, they managed to deliver everything exactly on schedule. Will definitely hire again!",
  },
  {
    id: "review-kalu-ram-yadav",
    authorName: "Kalu Ram Yadav",
    rating: 5,
    relativeTime: "Recently",
    text: "Top-quality work, flawless communication, and speedy on-time delivery. Will definitely use their services again!",
  },
  {
    id: "review-kailash-saini-2",
    authorName: "Kailash Saini",
    rating: 5,
    relativeTime: "Recently",
    text: "Outstanding experience from start to finish. Communication was seamless, the quality of work was unmatched, and they stuck strictly to our agreed timeline. It's rare to find a partner that delivers both speed and excellence so perfectly.",
  },
];
