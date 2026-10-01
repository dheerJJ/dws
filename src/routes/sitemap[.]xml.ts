import { createFileRoute } from "@tanstack/react-router";

import { posts } from "@/data/blog";
import { business, publicRoutes } from "@/data/business";
import { servicePricing } from "@/data/pricing";
import { services } from "@/data/services";

type Entry = { loc: string; priority: string; lastmod: string; changefreq: string };

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);
        const forwardedHost =
          url.hostname === "localhost" ? request.headers.get("x-forwarded-host") : null;
        const origin = forwardedHost ? `https://${forwardedHost}` : business.siteUrl;

        // Current build date for static page lastmod
        const today = new Date().toISOString().slice(0, 10);

        // Unique set of indexable, canonical URLs
        const seen = new Set<string>();
        const entries: Entry[] = [];

        const addEntry = (path: string, priority: string, lastmod: string, changefreq: string) => {
          const loc = `${origin}${path === "/" ? "" : path}`;
          if (!seen.has(loc)) {
            seen.add(loc);
            entries.push({ loc, priority, lastmod, changefreq });
          }
        };

        // Main core public routes
        publicRoutes.forEach((path) => {
          const priority = path === "/" ? "1.0" : path === "/services" ? "0.9" : "0.8";
          const changefreq = path === "/" ? "weekly" : "monthly";
          addEntry(path, priority, today, changefreq);
        });

        // Dedicated service landing & pricing pages
        servicePricing.forEach((service) => {
          addEntry(`/pricing/${service.slug}`, "0.85", today, "monthly");
        });

        // Individual service detail pages
        services.forEach((service) => {
          addEntry(`/services/${service.slug}`, "0.85", today, "monthly");
        });

        // Individual blog posts
        posts.forEach((post) => {
          addEntry(`/blog/${post.slug}`, "0.75", post.date, "monthly");
        });

        const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (e) => `  <url>
    <loc>${e.loc}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;

        return new Response(body, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600, s-maxage=86400",
          },
        });
      },
    },
  },
});
