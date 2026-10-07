#!/usr/bin/env node

const BASE_URL = process.env.TEST_URL || "http://localhost:8081";

const ROUTES = [
  "/",
  "/about",
  "/services",
  "/services/website-design",
  "/services/ecommerce-development",
  "/services/custom-software-development",
  "/services/android-app-development",
  "/services/digital-marketing",
  "/services/seo",
  "/services/saas-mvp",
  "/case-studies",
  "/pricing",
  "/pricing/website-design",
  "/pricing/mobile-app-development",
  "/pricing/seo",
  "/pricing/saas-mvp",
  "/blog",
  "/blog/website-cost-in-india-2026",
  "/blog/website-that-converts-india-2026",
  "/blog/saas-mvp-to-first-paying-users",
  "/blog/local-seo-checklist-indian-businesses",
  "/blog/digital-marketing-budget-first-90-days",
  "/contact",
  "/privacy-policy",
  "/terms-and-conditions",
];

const PRIVATE_ROUTES = ["/dashboard", "/auth", "/review"];
const STATIC_FILES = ["/robots.txt", "/sitemap.xml", "/google0b960ea3bfa41cfa.html"];

async function fetchPage(urlPath) {
  const url = new URL(urlPath, BASE_URL);
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  try {
    const res = await fetch(url, { signal: controller.signal });
    const body = await res.text();
    return { status: res.status, headers: Object.fromEntries(res.headers.entries()), body };
  } finally {
    clearTimeout(timeout);
  }
}

function extractTag(html, regex) {
  const match = html.match(regex);
  return match ? match[1].trim() : null;
}

function extractAllTags(html, regex) {
  const matches = [];
  let match;
  while ((match = regex.exec(html)) !== null) {
    matches.push(match[1]);
  }
  return matches;
}

async function runCheck() {
  console.log(`\n======================================================`);
  console.log(`🔍 DWS Web Services - Technical SEO Automated Verification`);
  console.log(`🌐 Base URL: ${BASE_URL}`);
  console.log(`======================================================\n`);

  let totalErrors = 0;
  let totalWarnings = 0;

  // 1. Audit Public Pages
  console.log(`--- [1/4] Auditing ${ROUTES.length} Public Indexable Routes ---`);
  const auditResults = [];

  for (const route of ROUTES) {
    try {
      const res = await fetchPage(route);
      const errors = [];
      const warnings = [];

      if (res.status !== 200) {
        errors.push(`Status code ${res.status} (expected 200)`);
      }

      // Title check
      const title = extractTag(res.body, /<title[^>]*>([^<]*)<\/title>/i) || "";
      if (!title) {
        errors.push("Missing <title>");
      } else if (title.length > 60) {
        errors.push(`Title length ${title.length} chars exceeds 60 chars threshold: "${title}"`);
      }

      // Meta description check
      const descMatch =
        extractTag(res.body, /<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i) ||
        extractTag(res.body, /<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["']/i) ||
        "";
      if (!descMatch) {
        errors.push("Missing meta description");
      } else if (descMatch.length > 155) {
        errors.push(
          `Meta description length ${descMatch.length} chars exceeds 155 chars threshold: "${descMatch}"`,
        );
      }

      // H1 count check
      const h1s = extractAllTags(res.body, /<h1[^>]*>([\s\S]*?)<\/h1>/gi);
      if (h1s.length === 0) {
        errors.push("Missing <h1> tag");
      } else if (h1s.length > 1) {
        errors.push(`Found ${h1s.length} <h1> tags (exactly 1 required)`);
      }

      // Canonical check
      const canonicalMatch =
        extractTag(res.body, /<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i) ||
        extractTag(res.body, /<link[^>]*href=["']([^"']*)["'][^>]*rel=["']canonical["']/i) ||
        "";
      if (!canonicalMatch) {
        errors.push("Missing canonical link tag");
      } else if (!canonicalMatch.startsWith("http://") && !canonicalMatch.startsWith("https://")) {
        errors.push(`Canonical URL is not absolute: ${canonicalMatch}`);
      }

      // Structured data JSON-LD check
      const jsonLdBlocks = extractAllTags(
        res.body,
        /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,
      );
      if (jsonLdBlocks.length === 0) {
        errors.push("No JSON-LD structured data script found");
      } else {
        for (const block of jsonLdBlocks) {
          try {
            JSON.parse(block);
          } catch (e) {
            errors.push(`Invalid JSON in structured data block: ${e.message}`);
          }
        }
      }

      // Em dash rule check in rendered HTML title and meta
      if (title.includes("—")) {
        errors.push("Title contains em dash (—) violating project style rules");
      }
      if (descMatch.includes("—")) {
        errors.push("Meta description contains em dash (—) violating project style rules");
      }

      const statusIcon = errors.length === 0 ? "✅" : "❌";
      console.log(
        `${statusIcon} ${route} [${res.status}] - Title: "${title}" (${title.length}c) | H1s: ${h1s.length} | Canonical: ${canonicalMatch ? "Yes" : "No"}`,
      );

      if (errors.length > 0) {
        errors.forEach((err) => console.log(`   🚨 ERROR: ${err}`));
        totalErrors += errors.length;
      }
      if (warnings.length > 0) {
        warnings.forEach((warn) => console.log(`   ⚠️ WARNING: ${warn}`));
        totalWarnings += warnings.length;
      }

      auditResults.push({
        route,
        status: res.status,
        title,
        titleLength: title.length,
        h1Count: h1s.length,
        canonical: canonicalMatch,
        schemaCount: jsonLdBlocks.length,
        errors,
      });
    } catch (err) {
      console.log(`❌ ${route} - Failed to fetch: ${err.message}`);
      totalErrors++;
    }
  }

  // 2. Audit Private / Admin Routes
  console.log(`\n--- [2/4] Auditing Private Routes (Expected: noindex, nofollow) ---`);
  for (const route of PRIVATE_ROUTES) {
    try {
      const res = await fetchPage(route);
      const isNoindex =
        res.body.includes('name="robots" content="noindex, nofollow"') ||
        res.body.includes("noindex");
      if (isNoindex) {
        console.log(`✅ ${route} - Correctly marked with noindex robots tag`);
      } else {
        console.log(`❌ ${route} - Missing noindex robots tag`);
        totalErrors++;
      }
    } catch (err) {
      console.log(`⚠️ ${route} - Fetch failed: ${err.message}`);
    }
  }

  // 3. Audit Static SEO Files
  console.log(`\n--- [3/4] Auditing Static SEO Files ---`);
  for (const file of STATIC_FILES) {
    try {
      const res = await fetchPage(file);
      if (res.status === 200) {
        console.log(`✅ ${file} [${res.status}] - Accessible`);
        if (file === "/robots.txt") {
          if (!res.body.includes("sitemap.xml")) {
            console.log(`   🚨 robots.txt missing sitemap reference`);
            totalErrors++;
          }
          if (!res.body.includes("Disallow: /dashboard")) {
            console.log(`   🚨 robots.txt missing Disallow: /dashboard`);
            totalErrors++;
          }
        }
        if (file === "/sitemap.xml") {
          if (!res.body.includes("<urlset") || !res.body.includes("<loc>")) {
            console.log(`   🚨 sitemap.xml does not look like valid XML sitemap`);
            totalErrors++;
          }
        }
        if (file === "/google0b960ea3bfa41cfa.html") {
          if (!res.body.includes("google-site-verification: google0b960ea3bfa41cfa.html")) {
            console.log(`   🚨 google verification file content mismatch`);
            totalErrors++;
          }
        }
      } else {
        console.log(`❌ ${file} returned status ${res.status}`);
        totalErrors++;
      }
    } catch (err) {
      console.log(`❌ ${file} - Fetch error: ${err.message}`);
      totalErrors++;
    }
  }

  // 4. Audit 404 Behavior
  console.log(`\n--- [4/4] Auditing 404 Route Handling ---`);
  try {
    const res = await fetchPage("/non-existent-page-test-404");
    console.log(`ℹ️ Non-existent page returned status [${res.status}]`);
  } catch (e) {
    console.log(`ℹ️ Non-existent page caught error as expected`);
  }

  console.log(`\n======================================================`);
  console.log(
    `📊 SUMMARY: ${totalErrors} Errors, ${totalWarnings} Warnings across all audited pages.`,
  );
  console.log(`======================================================\n`);

  if (totalErrors > 0) {
    process.exit(1);
  }
}

runCheck().catch((err) => {
  console.error("Fatal error during SEO check:", err);
  process.exit(1);
});
