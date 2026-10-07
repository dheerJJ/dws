import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { Navbar } from "@/components/dws/Navbar";
import { Footer } from "@/components/dws/Contact";
import { Reveal } from "@/components/dws/Reveal";
import { Comments } from "@/components/dws/Comments";
import { useDwsBody } from "@/components/dws/useDwsBody";
import { getPost, posts } from "@/data/blog";
import { business } from "@/data/business";

import {
  formatMetaDescription,
  formatMetaTitle,
  getCanonicalUrl,
  getBlogPostingSchema,
  getBreadcrumbSchema,
  getFaqSchema,
} from "@/lib/seo";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) => {
    const post = loaderData?.post || getPost(params?.slug);
    if (!post) {
      return {
        meta: [
          { title: formatMetaTitle("Article not found", false) },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const slug = params?.slug || post.slug;
    const postUrl = getCanonicalUrl(`/blog/${slug}`);
    const postTitle = formatMetaTitle(post.title);
    const postDesc = formatMetaDescription(post.excerpt);
    const postImage = post.cover || `${business.siteUrl}/dws-logo.png`;

    return {
      meta: [
        { title: postTitle },
        { name: "description", content: postDesc },
        { property: "og:title", content: postTitle },
        { property: "og:description", content: postDesc },
        { property: "og:type", content: "article" },
        { property: "og:url", content: postUrl },
        { property: "og:image", content: postImage },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: postTitle },
        { name: "twitter:description", content: postDesc },
        { name: "twitter:image", content: postImage },
        { name: "geo.region", content: "IN-RJ" },
        { name: "geo.placename", content: "Jaipur" },
      ],
      links: [{ rel: "canonical", href: postUrl }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            getBlogPostingSchema({
              title: post.title,
              excerpt: post.excerpt,
              date: post.date,
              slug,
              cover: postImage,
              author: post.author,
              category: post.category,
            }),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            getBreadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Blog", path: "/blog" },
              { name: post.title, path: `/blog/${slug}` },
            ]),
          ),
        },
        ...(post.faqs && post.faqs.length > 0
          ? [
              {
                type: "application/ld+json",
                children: JSON.stringify(getFaqSchema(post.faqs)),
              },
            ]
          : []),
      ],
    };
  },
  component: PostPage,
  notFoundComponent: PostNotFound,
});

function PostNotFound() {
  useDwsBody();
  return (
    <>
      <Navbar />
      <main className="dws-section pt-5" id="main-content">
        <div className="container">
          <h1 className="display-6 mb-3">Article not found</h1>
          <p className="dws-muted mb-4">That article does not exist or has moved.</p>
          <Link to="/blog" className="dws-btn dws-btn-solid">
            Back to blog
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

function PostPage() {
  useDwsBody();
  const { post } = Route.useLoaderData();
  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <main id="main-content">
        <article className="dws-section pt-5">
          <div className="container">
            <div className="row justify-content-center mb-4">
              <div className="col-lg-9 col-xl-8">
                <nav aria-label="Breadcrumb" className="dws-breadcrumb mb-4">
                  <ol className="d-flex flex-wrap align-items-center gap-2 list-unstyled small text-muted mb-0">
                    <li>
                      <Link to="/" className="text-muted text-decoration-none">
                        Home
                      </Link>
                    </li>
                    <li aria-hidden="true">/</li>
                    <li>
                      <Link to="/blog" className="text-muted text-decoration-none">
                        Blog
                      </Link>
                    </li>
                    <li aria-hidden="true">/</li>
                    <li className="text-white dws-breadcrumb-current" aria-current="page">
                      {post.title}
                    </li>
                  </ol>
                </nav>

                <Reveal>
                  <p className="dws-eyebrow mb-2 mb-sm-3">{post.category}</p>
                  <h1 className="dws-article-title mb-3 mb-md-4">{post.title}</h1>
                  <div className="dws-article-meta mb-0">
                    <span>{post.author}</span>
                    <span aria-hidden="true">·</span>
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                    <span aria-hidden="true">·</span>
                    <span>{post.readingTime}</span>
                  </div>
                </Reveal>

                {post.cover && (
                  <Reveal delay={0.08}>
                    <div className="dws-article-cover my-4 my-md-5">
                      <img
                        src={post.cover}
                        alt={post.coverAlt || post.title}
                        loading="lazy"
                        className="img-fluid w-100"
                      />
                    </div>
                  </Reveal>
                )}
              </div>
            </div>

            <div className="row justify-content-center mt-2 mt-md-3">
              <div className="col-lg-9 col-xl-8">
                {post.intro.map((para, i) => (
                  <Reveal key={i} delay={0.04 * i}>
                    <p className="dws-article-lead">{para}</p>
                  </Reveal>
                ))}

                {post.quickAnswer && (
                  <Reveal>
                    <aside className="dws-takeaways mb-4 mb-md-5">
                      <p className="dws-eyebrow mb-2">Quick answer</p>
                      <p className="mb-0 text-white" style={{ lineHeight: "1.7" }}>
                        {post.quickAnswer}
                      </p>
                    </aside>
                  </Reveal>
                )}

                <Reveal>
                  <aside className="dws-takeaways my-4 my-md-5">
                    <p className="dws-eyebrow mb-3">Key takeaways</p>
                    <ul className="dws-tier-list mb-0">
                      {post.takeaways.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </aside>
                </Reveal>

                {post.sections.map((section, si) => (
                  <section key={section.heading} className="mb-4 mb-md-5">
                    <Reveal>
                      <h2 className="dws-article-h2">{section.heading}</h2>
                    </Reveal>
                    {section.paragraphs.map((para, i) => (
                      <Reveal key={i} delay={0.03 * i}>
                        <p className="dws-article-p">{para}</p>
                      </Reveal>
                    ))}
                    {section.table && (
                      <Reveal>
                        <div className="dws-table-container my-4">
                          <div className="dws-table-scroll-hint d-md-none px-3 py-2 font-monospace">
                            Scroll table horizontally to view all columns →
                          </div>
                          <div className="table-responsive">
                            <table className="table table-bordered text-white dws-article-table">
                              <thead>
                                <tr>
                                  {section.table.headers.map((h, i) => (
                                    <th key={i} className="font-monospace text-uppercase">
                                      {h}
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody>
                                {section.table.rows.map((row, ri) => (
                                  <tr key={ri}>
                                    {row.map((cell, ci) => (
                                      <td key={ci}>{cell}</td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </Reveal>
                    )}
                    {section.subsections &&
                      section.subsections.map((sub, subi) => (
                        <div key={subi} className="mt-4 mb-3">
                          <Reveal>
                            <h3 className="dws-article-h3">{sub.subheading}</h3>
                          </Reveal>
                          {sub.paragraphs.map((sp, spi) => (
                            <Reveal key={spi} delay={0.02 * spi}>
                              <p className="dws-article-p">{sp}</p>
                            </Reveal>
                          ))}
                          {sub.bullets && (
                            <Reveal>
                              <ul className="dws-article-list">
                                {sub.bullets.map((sb) => (
                                  <li key={sb}>{sb}</li>
                                ))}
                              </ul>
                            </Reveal>
                          )}
                        </div>
                      ))}
                    {section.bullets && (
                      <Reveal>
                        <ul className="dws-article-list">
                          {section.bullets.map((b) => (
                            <li key={b}>{b}</li>
                          ))}
                        </ul>
                      </Reveal>
                    )}
                    {section.quote && (
                      <Reveal>
                        <blockquote className="dws-article-quote">{section.quote}</blockquote>
                      </Reveal>
                    )}
                  </section>
                ))}

                {post.faqs && post.faqs.length > 0 && (
                  <section className="mb-4 mb-md-5">
                    <Reveal>
                      <h2 className="dws-article-h2">Frequently Asked Questions</h2>
                    </Reveal>
                    <div className="d-flex flex-column gap-3 mt-3 mt-md-4">
                      {post.faqs.map((faq, fi) => (
                        <Reveal key={fi} delay={0.03 * fi}>
                          <div className="dws-faq-item p-3 p-sm-4">
                            <h3 className="h6 text-white mb-2">{faq.q}</h3>
                            <p
                              className="small mb-0"
                              style={{ color: "#cfcfcf", lineHeight: "1.7" }}
                            >
                              {faq.a}
                            </p>
                          </div>
                        </Reveal>
                      ))}
                    </div>
                  </section>
                )}

                {post.externalUrl && (
                  <p className="mt-4">
                    <a
                      href={post.externalUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="dws-post-link d-inline-flex align-items-center gap-1"
                    >
                      <span>Read the original</span>
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  </p>
                )}

                <div className="dws-divider my-4 my-md-5" />
                <Reveal>
                  <div className="dws-article-cta">
                    <h2 className="h5 mb-2 mb-sm-3">Want this done for your business?</h2>
                    <p className="dws-muted mb-4">
                      We build websites, SaaS products and growth systems from Jaipur for clients
                      across India and worldwide.
                    </p>
                    <div className="dws-article-cta-actions">
                      <Link to="/contact" className="dws-btn dws-btn-solid">
                        Start a project
                      </Link>
                      <Link to="/pricing" className="dws-btn dws-btn-outline">
                        See pricing
                      </Link>
                    </div>
                  </div>
                </Reveal>

                <Comments slug={post.slug} />
              </div>
            </div>

            <div className="row mt-4 mt-md-5">
              <div className="col-12">
                <div className="dws-divider mb-4" />
                <p className="dws-eyebrow mb-3 mb-md-4">Keep reading</p>
                <div className="row g-3 g-md-4">
                  {others.map((p) => (
                    <div className="col-12 col-md-4" key={p.slug}>
                      <Reveal delay={0.06 * others.indexOf(p)}>
                        <Link
                          to="/blog/$slug"
                          params={{ slug: p.slug }}
                          className="dws-post-mini d-block h-100"
                        >
                          <span className="dws-mono small d-block mb-2">{p.category}</span>
                          <span className="d-block">{p.title}</span>
                        </Link>
                      </Reveal>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
