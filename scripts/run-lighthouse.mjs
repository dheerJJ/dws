#!/usr/bin/env node
import { execSync } from "node:child_process";
import fs from "node:fs";

const BASE_URL = process.env.TEST_URL || "http://localhost:8081";

const PAGES = [
  { name: "home", path: "/" },
  { name: "service", path: "/pricing/website-design" },
  { name: "blog", path: "/blog/website-that-converts-india-2026" },
  { name: "contact", path: "/contact" },
];

console.log("Starting Lighthouse Audit on target pages (Mobile)...");
const results = {};

for (const page of PAGES) {
  const targetUrl = `${BASE_URL}${page.path}`;
  const reportPath = `lighthouse-${page.name}.json`;
  console.log(`\nAuditing ${page.name} (${targetUrl})...`);

  try {
    execSync(
      `npx lighthouse "${targetUrl}" --chrome-flags="--headless --no-sandbox" --output=json --output-path="${reportPath}" --form-factor=mobile --screenEmulation.mobile --only-categories=performance,accessibility,best-practices,seo --quiet`,
      { stdio: "inherit" }
    );

    if (fs.existsSync(reportPath)) {
      const data = JSON.parse(fs.readFileSync(reportPath, "utf-8"));
      const scores = {
        performance: Math.round(data.categories.performance.score * 100),
        accessibility: Math.round(data.categories.accessibility.score * 100),
        bestPractices: Math.round(data.categories["best-practices"].score * 100),
        seo: Math.round(data.categories.seo.score * 100),
        fcp: data.audits["first-contentful-paint"]?.displayValue,
        lcp: data.audits["largest-contentful-paint"]?.displayValue,
        cls: data.audits["cumulative-layout-shift"]?.displayValue,
        tbt: data.audits["total-blocking-time"]?.displayValue,
      };
      results[page.name] = scores;
      console.log(`Scores for ${page.name}:`, scores);
    }
  } catch (err) {
    console.error(`Lighthouse failed for ${page.name}:`, err.message);
  }
}

fs.writeFileSync("lighthouse-summary.json", JSON.stringify(results, null, 2));
console.log("\nLighthouse summary written to lighthouse-summary.json");
