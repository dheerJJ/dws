// Knowledge base handed to the DwS site assistant so it can answer any question
// about the agency, services, pricing, projects, team and articles.
import { business } from "@/data/business";
import { posts } from "@/data/blog";
import { servicePricing } from "@/data/pricing";
import { projects, team, testimonials, tiers } from "@/data/site";

export function buildDwsKnowledge(): string {
  const lines: string[] = [];

  lines.push("## Agency");
  lines.push(`Name: ${business.name} (${business.legalName})`);
  lines.push(`About: ${business.description}`);
  lines.push(`Based in: ${business.city}, ${business.state}, India`);
  lines.push(`Serves: ${business.areaServed.join(", ")}`);
  lines.push(`Hours: ${business.openingHours}`);
  lines.push(`Contact email: ${business.email}`);
  lines.push(`Enquiry form: /contact`);
  lines.push(`Core services: ${business.services.join(", ")}`);

  lines.push("\n## Retainer packages (monthly, INR)");
  for (const tier of tiers) {
    lines.push(
      `- ${tier.name} - ${tier.price} ${tier.cadence}. ${tier.summary} Includes: ${tier.features.join("; ")}.`,
    );
  }

  lines.push("\n## Service pricing pages");
  for (const service of servicePricing) {
    lines.push(
      `### ${service.name} (page: /pricing/${service.slug}, starts at ${service.startsAt})`,
    );
    lines.push(service.intro);
    for (const pkg of service.packages) {
      lines.push(
        `- ${pkg.name}: ${pkg.price} ${pkg.cadence} - ${pkg.summary} Timeline: ${pkg.timeline}. Includes: ${pkg.features.join("; ")}.`,
      );
    }
    if (service.addons.length) {
      lines.push(`Add-ons: ${service.addons.map((a) => `${a.name} (${a.price})`).join(", ")}.`);
    }
    for (const faq of service.faqs) {
      lines.push(`FAQ: ${faq.q} ${faq.a}`);
    }
  }

  lines.push("\n## Work / projects");
  for (const project of projects) {
    lines.push(`- ${project.name} (${project.type}) - ${project.description} Live: ${project.url}`);
  }

  lines.push("\n## Team");
  for (const member of team) {
    lines.push(`- ${member.name}, ${member.role} - ${member.bio}`);
  }

  lines.push("\n## Client feedback");
  for (const t of testimonials) {
    lines.push(`- "${t.quote}" - ${t.author}, ${t.role}`);
  }

  lines.push("\n## Articles (page: /blog/<slug>)");
  for (const post of posts) {
    lines.push(
      `- ${post.title} (/blog/${post.slug}, ${post.category}, ${post.readingTime}) - ${post.excerpt} Key takeaways: ${post.takeaways.join("; ")}.`,
    );
  }

  lines.push("\n## Site pages");
  lines.push("/ (home), /about, /pricing, /pricing/<service>, /blog, /contact");

  return lines.join("\n");
}

export const DWS_SYSTEM_PROMPT = `You are "DwS Assistant", the site assistant for DwS - a digital agency based in Jaipur, India.

Your job is to give visitors every detail they ask for about DwS: services, pricing in INR, packages, timelines, past projects, the team, articles, process and how to get in touch. Answer confidently and specifically using the knowledge below.

Rules:
- Only use the knowledge below plus the visitor's messages. If something is genuinely not covered (custom scope, exact timelines for their project, availability), say so briefly and invite them to send an enquiry at /contact or email ${business.email}.
- Be concise and useful: short paragraphs, markdown bullet lists for packages or feature lists. Quote exact prices with the ₹ symbol.
- Link to relevant site pages with markdown links using relative paths, e.g. [Mobile App Development pricing](/pricing/mobile-app-development).
- Never invent prices, clients, guarantees or statistics.
- Nudge serious buyers toward /contact once their question is answered.

KNOWLEDGE BASE
${"{{KNOWLEDGE}}"}`;

export function buildDwsSystemPrompt(): string {
  return DWS_SYSTEM_PROMPT.replace("{{KNOWLEDGE}}", buildDwsKnowledge());
}
