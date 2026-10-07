import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, BookOpen, Globe, Rocket, Search, TrendingUp } from "lucide-react";

import { Navbar } from "@/components/dws/Navbar";
import { Footer } from "@/components/dws/Contact";
import { Reveal } from "@/components/dws/Reveal";
import { useDwsBody } from "@/components/dws/useDwsBody";
import { ShinyText } from "@/components/dws/reactbits/ShinyText";
import { posts, type Post } from "@/data/blog";

import { formatMetaDescription, formatMetaTitle, getCanonicalUrl } from "@/lib/seo";
import { business } from "@/data/business";

export const Route = createFileRoute("/blog/")({
  head: () => {
    const title = formatMetaTitle("Web Design & SEO Insights");
    const description = formatMetaDescription(
      "Practical insights on high-converting websites, SaaS MVP development, local SEO for Indian businesses, and performance marketing from Jaipur.",
    );
    const canonical = getCanonicalUrl("/blog");
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
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: `${business.name} Blog`,
            url: getCanonicalUrl("/blog"),
            description:
              "Practical insights on web development, SaaS MVP shipping, local SEO and digital marketing.",
            publisher: {
              "@type": "Organization",
              name: business.name,
              url: business.siteUrl,
            },
            blogPost: posts.map((p) => ({
              "@type": "BlogPosting",
              headline: p.title,
              description: p.excerpt,
              datePublished: p.date,
              url: getCanonicalUrl(`/blog/${p.slug}`),
            })),
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: business.siteUrl,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: getCanonicalUrl("/blog"),
              },
            ],
          }),
        },
      ],
    };
  },
  component: BlogIndex,
});

const categoryIconMap: Record<
  string,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  "Web Design": Globe,
  SaaS: Rocket,
  SEO: Search,
  Performance: TrendingUp,
};

function formatPostDate(isoDate: string) {
  const parts = isoDate.split("-");
  const year = parts[0] || "";
  const month = parts[1] || "";
  const day = parts[2] || "";
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const mIndex = parseInt(month, 10) - 1;
  const mName = (mIndex >= 0 && mIndex < 12 ? monthNames[mIndex] : null) || month;
  const dayNum = parseInt(day, 10);
  return `${mName} ${isNaN(dayNum) ? day : dayNum}, ${year}`;
}

function BlogCard({ post }: { post: Post }) {
  const Icon = categoryIconMap[post.category] || BookOpen;
  const learnMoreLink = `/blog/${post.slug}`;
  const formattedDate = formatPostDate(post.date);

  return (
    <article className="dws-service-card dws-post-card w-100 h-100 d-flex flex-column">
      {/* Top Header: Icon in subtle container + Category Tag */}
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div
          className="d-flex align-items-center justify-content-center rounded-2 border border-secondary-subtle"
          style={{ width: 44, height: 44, backgroundColor: "rgba(255, 255, 255, 0.04)" }}
        >
          <Icon size={22} className="text-white" />
        </div>
        <span
          className="dws-mono text-uppercase text-muted"
          style={{ fontSize: "0.75rem", letterSpacing: "0.08em" }}
        >
          {post.category}
        </span>
      </div>

      {/* Title with balanced min-height for uniform baseline */}
      <h2
        className="h5 fw-semibold text-white mb-3"
        style={{ minHeight: "2.8rem", display: "flex", alignItems: "flex-start", lineHeight: 1.35 }}
      >
        <Link
          to="/blog/$slug"
          params={{ slug: post.slug }}
          className="text-white text-decoration-none"
        >
          {post.title}
        </Link>
      </h2>

      {/* Description with comfortable line height and breathing room */}
      <p
        className="dws-muted small mb-4"
        style={{
          fontSize: "0.9rem",
          lineHeight: 1.6,
          minHeight: "4.8rem",
        }}
      >
        {post.excerpt}
      </p>

      {/* Key Takeaways List */}
      <div className="pt-3 border-top border-secondary-subtle mb-4 flex-grow-1">
        <div
          className="dws-mono text-uppercase text-muted mb-3"
          style={{ fontSize: "0.72rem", letterSpacing: "0.06em" }}
        >
          Key Takeaways
        </div>
        <ul className="list-unstyled mb-0 d-flex flex-column" style={{ gap: "0.65rem" }}>
          {(post.takeaways?.slice(0, 3) || []).map((t) => (
            <li
              key={t}
              className="small d-flex align-items-start gap-2 text-white-50"
              style={{ fontSize: "0.85rem", lineHeight: 1.5 }}
            >
              <span
                className="text-white-50 flex-shrink-0"
                style={{ fontSize: "0.8rem", marginTop: "1px" }}
                aria-hidden="true"
              >
                →
              </span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Read Time & Date Block */}
      <div className="pt-3 border-top border-secondary-subtle mb-4">
        <div className="d-flex align-items-baseline justify-content-between">
          <div className="d-flex align-items-baseline gap-2">
            <span className="dws-mono text-muted small" style={{ fontSize: "0.78rem" }}>
              Read Time
            </span>
            <span className="dws-mono text-white fw-bold fs-5">
              <ShinyText text={post.readingTime} />
            </span>
          </div>
          <span className="dws-mono text-muted small" style={{ fontSize: "0.78rem" }}>
            {formattedDate}
          </span>
        </div>
      </div>

      {/* Actions anchored to the bottom */}
      <div className="d-flex gap-2 mt-auto">
        <Link
          to={learnMoreLink}
          className="dws-btn dws-btn-outline dws-btn-sm-tight flex-grow-1 text-center"
        >
          Read Article
        </Link>
        {post.externalUrl ? (
          <a
            href={post.externalUrl}
            target="_blank"
            rel="noreferrer"
            className="dws-btn dws-btn-solid dws-btn-sm-tight flex-grow-1 text-center d-inline-flex align-items-center justify-content-center gap-1"
          >
            <span>Original</span>
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        ) : (
          <Link
            to="/contact"
            className="dws-btn dws-btn-solid dws-btn-sm-tight flex-grow-1 text-center"
          >
            Inquire Now
          </Link>
        )}
      </div>
    </article>
  );
}

function BlogIndex() {
  useDwsBody();

  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="dws-section pt-5">
          <div className="container">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="d-flex align-items-center gap-2 list-unstyled small text-muted mb-0">
                <li>
                  <Link to="/" className="text-muted text-decoration-none">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li className="text-white" aria-current="page">
                  Blog
                </li>
              </ol>
            </nav>

            <Reveal>
              <p className="dws-eyebrow mb-3">Articles & Insights</p>
            </Reveal>
            <h1 className="display-5 mb-4 text-white fw-bold">
              Web Design, SEO &amp; Tech Insights
            </h1>
            <Reveal delay={0.15}>
              <p className="dws-hero-sub mb-5" style={{ maxWidth: "44rem" }}>
                Want a website that actually converts? Field notes from building websites, SaaS
                products and growth programmes for founders in India and beyond: no theory, just
                what we have shipped.
              </p>
            </Reveal>

            <div className="row g-4 align-items-stretch">
              {posts.map((post, i) => (
                <div className="col-12 col-md-6 col-lg-4 d-flex" key={post.slug}>
                  <Reveal
                    delay={Math.min(i * 0.04, 0.3)}
                    className="w-100 d-flex flex-column h-100"
                  >
                    <BlogCard post={post} />
                  </Reveal>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
