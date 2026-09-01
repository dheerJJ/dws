import { createFileRoute } from "@tanstack/react-router";

import { posts } from "@/data/blog";
import { publicRoutes } from "@/data/business";
import { servicePricing } from "@/data/pricing";

type Entry = { loc: string; priority: string; lastmod?: string };

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);
        const forwardedHost =
          url.hostname === "localhost" ? request.headers.get("x-forwarded-host") : null;
        const origin = forwardedHost ? `https://${forwardedHost}` : url.origin;

        const entries: Entry[] = [
          ...publicRoutes.map((path) => ({
            loc: `${origin}${path}`,
            priority: path === "/" ? "1.0" : "0.8",
          })),
          ...servicePricing.map((s) => ({
            loc: `${origin}/pricing/${s.slug}`,
            priority: "0.7",
          })),
          ...posts.map((post) => ({
            loc: `${origin}/blog/${post.slug}`,
            priority: "0.6",
            lastmod: post.date,
          })),
        ];

        const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (e) =>
      `  <url>\n    <loc>${e.loc}</loc>\n${e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>\n` : ""}    <priority>${e.priority}</priority>\n  </url>`,
  )
  .join("\n")}
</urlset>`;

        return new Response(body, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
