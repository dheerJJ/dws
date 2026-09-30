import { createFileRoute, Link } from "@tanstack/react-router";

import { Navbar } from "@/components/dws/Navbar";
import { Footer } from "@/components/dws/Contact";
import { Reveal } from "@/components/dws/Reveal";
import { useDwsBody } from "@/components/dws/useDwsBody";
import { SplitText } from "@/components/dws/reactbits/SplitText";
import { posts } from "@/data/blog";

import { formatMetaDescription, formatMetaTitle, getCanonicalUrl } from "@/lib/seo";
import { business } from "@/data/business";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: formatMetaTitle("Web Design & SEO Insights", "Blog") },
      {
        name: "description",
        content: formatMetaDescription(
          "Practical insights on high-converting websites, SaaS MVP development, local SEO for Indian businesses and digital marketing."
        ),
      },
      { property: "og:title", content: "Web Design & SEO Insights | DWS Web Services" },
      {
        property: "og:description",
        content:
          "Practical insights on high-converting websites, SaaS builds, local SEO and digital marketing from Jaipur.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: getCanonicalUrl("/blog") },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: getCanonicalUrl("/blog") }],
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
  }),
  component: BlogIndex,
});

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
            <h1 className="display-5 mb-4">
              <SplitText as="span" text="Notes on building, ranking, and scaling." />
            </h1>
            <Reveal delay={0.15}>
              <p className="dws-hero-sub mb-5" style={{ maxWidth: "44rem" }}>
                Want a website that actually converts? Field notes from building websites, SaaS
                products and growth programmes for founders in India and beyond: no theory, just
                what we have shipped.
              </p>
            </Reveal>

            <div className="row g-4">
              {posts.map((post, i) => (
                <div className="col-md-6" key={post.slug}>
                  <Reveal delay={0.05 * i}>
                    <article className="dws-post-card h-100">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <span className="dws-mono small">{post.category}</span>
                        <span className="dws-muted small">{post.readingTime}</span>
                      </div>
                      <h2 className="h4 mb-3">{post.title}</h2>
                      <p className="dws-muted mb-4">{post.excerpt}</p>
                      <div className="d-flex flex-wrap align-items-center gap-3">
                        <Link
                          to="/blog/$slug"
                          params={{ slug: post.slug }}
                          className="dws-post-link"
                        >
                          Read article →
                        </Link>
                        {post.externalUrl && (
                          <a
                            href={post.externalUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="dws-muted small"
                          >
                            Original ↗
                          </a>
                        )}
                      </div>
                    </article>
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
