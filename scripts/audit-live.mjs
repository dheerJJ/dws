async function auditLive() {
  const targetUrl = process.argv[2] || "https://dwsco.vercel.app/pricing";
  console.log(`Auditing target URL: ${targetUrl}`);
  const res = await fetch(targetUrl);
  const html = await res.text();

  console.log("Status:", res.status);

  // Title
  const title = html.match(/<title>([^<]*)<\/title>/i)?.[1] || "MISSING";
  console.log(`Title (${title.length}c): "${title}"`);

  // Meta Description
  const desc =
    html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i)?.[1] ||
    "MISSING";
  console.log(`Meta Description (${desc.length}c): "${desc}"`);

  // Canonicals
  const canonMatches = [
    ...html.matchAll(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/gi),
  ].map((m) => m[1]);
  console.log("Canonicals:", canonMatches);

  // H1
  const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) =>
    m[1].replace(/<[^>]*>/g, "").trim(),
  );
  console.log(`H1 count (${h1s.length}):`, h1s);

  // Structured Data
  const jsonLds = [
    ...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi),
  ].map((m) => m[1]);
  console.log(`JSON-LD blocks found: ${jsonLds.length}`);
  jsonLds.forEach((ld, idx) => {
    try {
      const parsed = JSON.parse(ld);
      console.log(
        `  Block #${idx + 1}: @type =`,
        parsed["@type"],
        "name =",
        parsed.name || parsed.headline || "",
      );
      if (parsed.hasOfferCatalog) {
        console.log(`    Offers count:`, parsed.hasOfferCatalog.itemListElement?.length);
      }
      if (parsed["@type"] === "FAQPage") {
        console.log(`    FAQs count:`, parsed.mainEntity?.length);
      }
    } catch (e) {
      console.log(`  Block #${idx + 1} parse error:`, e.message);
    }
  });
}

auditLive();
