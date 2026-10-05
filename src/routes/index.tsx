import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/dws/Navbar";
import { Hero } from "@/components/dws/Hero";
import { Services } from "@/components/dws/Services";
import { Process } from "@/components/dws/Process";
import { Portfolio } from "@/components/dws/Portfolio";
import { GoogleReviews } from "@/components/dws/GoogleReviews";
import { Contact, Footer } from "@/components/dws/Contact";
import { useDwsBody } from "@/components/dws/useDwsBody";
import { business } from "@/data/business";
import { getGoogleReviews } from "@/lib/reviews.functions";
import { formatMetaDescription, formatMetaTitle, getCanonicalUrl } from "@/lib/seo";

export const Route = createFileRoute("/")({
  loader: async () => {
    return await getGoogleReviews();
  },
  head: () => {
    const title = formatMetaTitle(business.keywords.home.primary);
    const description = formatMetaDescription(
      "DWS Web Services is a Jaipur web design and SEO agency building fast, high-converting websites, SaaS MVPs and organic search engines for Indian businesses.",
    );
    const canonical = getCanonicalUrl("/");
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
    };
  },
  component: Index,
});

function Index() {
  useDwsBody();
  const reviewsData = Route.useLoaderData();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Portfolio />
        <GoogleReviews
          reviews={reviewsData?.reviews}
          rating={reviewsData?.rating}
          totalReviews={reviewsData?.totalReviews}
        />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
