import { createFileRoute, Link } from "@tanstack/react-router";

import { Navbar } from "@/components/dws/Navbar";
import { Footer } from "@/components/dws/Contact";
import { Reveal } from "@/components/dws/Reveal";
import { useDwsBody } from "@/components/dws/useDwsBody";
import { SplitText } from "@/components/dws/reactbits/SplitText";
import { posts } from "@/data/blog";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Web, SaaS & Growth Insights | DwS Jaipur" },
      {
        name: "description",
        content:
          "Practical articles from DwS on websites that convert, shipping SaaS products, local SEO for Indian businesses and spending a marketing budget well.",
      },
      { property: "og:title", content: "Blog — Web, SaaS & Growth Insights | DwS" },
      {
        property: "og:description",
        content:
          "Field notes from a Jaipur-based digital agency on web design, SaaS builds, SEO and performance marketing.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/blog" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "DwS Blog",
          blogPost: posts.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            description: p.excerpt,
            datePublished: p.date,
            url: `/blog/${p.slug}`,
          })),
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
      <main>
        <section className="dws-section pt-5">
          <div className="container">
            <Reveal>
              <p className="dws-eyebrow mb-3">Blog</p>
            </Reveal>
            <h1 className="display-5 mb-4">
              <SplitText as="span" text="Notes on building and growing." />
            </h1>
            <Reveal delay={0.15}>
              <p className="dws-hero-sub mb-5" style={{ maxWidth: "44rem" }}>
                Want a website that actually converts? Field notes from building websites, SaaS
                products and growth programmes for founders in India and beyond — no theory, just
                what we've shipped.
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
