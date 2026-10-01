# SEO & Business Action Checklist (Action Items for User / Business Owner)

This document lists all items that require real-world input, manual account setup, ownership actions, or business verification for **DWS Web Services**.

---

## 1. Domain, DNS & Hosting Verification

- [ ] **Custom Domain Connection**: Connect your registered custom domain (e.g. `dws.co` or `dwswebservices.com`) in Vercel project settings -> Domains.
- [ ] **DNS Records**: Add the recommended CNAME and A records in your DNS registrar (GoDaddy, Namecheap, Cloudflare, etc.).
- [ ] **Canonical Host Environment Variable**: Update `VITE_SITE_URL` in `.env` and Vercel Environment Variables to your final custom domain (e.g. `https://dws.co`).

---

## 2. Search Engines & Webmaster Verification

- [x] **Google Search Console (GSC)**:
  - Verification file `google0b960ea3bfa41cfa.html` placed in `/public` directory.
  - Verification meta tag `<meta name="google-site-verification" content="google0b960ea3bfa41cfa" />` added to `<head>`.
  - **Action Needed**: In Google Search Console, click "Verify" using the HTML file or HTML tag method once deployed.
  - **Submit Sitemap**: After verification, submit `https://<your-domain>/sitemap.xml` to GSC.
- [ ] **Bing Webmaster Tools**:
  - Connect Bing Webmaster Tools (can import directly from Google Search Console once verified).
  - Submit sitemap `https://<your-domain>/sitemap.xml`.

---

## 3. Local SEO & Google Business Profile (GBP)

- [ ] **Google Business Profile (GBP)**:
  - Create or claim "DWS Web Services" at [business.google.com](https://business.google.com).
  - Primary category: "Website Designer" or "Internet Marketing Service".
  - Secondary categories: "Marketing Agency", "Software Company".
  - Address / Service Area: Jaipur, Rajasthan, India (match exact address in `src/data/config.ts`).
  - Phone: `+91 78509 15862`.
  - Website link: `https://<your-domain>`.
  - Add photos of the studio/office workspace and team.
  - Set opening hours: Monday to Saturday, 10:00 AM to 7:00 PM IST.

---

## 4. Real Content Placeholders (No Fake Facts / Data)

Per strict safety rules, no fake statistics, client reviews, or numbers have been fabricated. Replace the following placeholders with your verified data:

- [ ] **Real Testimonials**:
  - In `src/data/site.ts` or `src/data/config.ts`, replace `[ADD REAL TESTIMONIAL]` with quotes from verified clients, including client name, designation, and company name.
- [ ] **Real Case Studies Metrics**:
  - In `src/data/caseStudies.ts`, update client results with verified analytics (e.g., actual lead generation count, traffic percentage increases, revenue impact).
- [ ] **Hero Metrics Verification**:
  - Review homepage metrics (`10+ Projects delivered`, `4.2x Avg. ROAS lift`, `2 yrs Compounding craft`) and update to reflect your current verified metrics.

---

## 5. Booking & Lead Channels

- [ ] **Cal.com / Calendly Link**:
  - Create a 30-minute Strategy Call event type in Cal.com or Calendly.
  - Set the booking URL in `src/data/config.ts` (`bookingUrl: "https://cal.com/your-username/30min"`).
- [ ] **WhatsApp Business Setup**:
  - Ensure `+91 78509 15862` is set up with WhatsApp Business with instant greeting and business profile details.

---

## 6. Local Directory Listings & Citations (NAP Consistency)

Ensure the exact Name, Address, and Phone (**DWS Web Services, Jaipur, Rajasthan, +91 78509 15862**) are submitted to:

- [ ] **Justdial**: List under Website Designers in Jaipur.
- [ ] **IndiaMART**: Create free business profile for web design and digital marketing.
- [ ] **Sulekha**: Local Jaipur business listing.
- [ ] **Clutch.co**: Create agency profile for DWS Web Services.
- [ ] **GoodFirms**: Submit profile under Top Web Development Companies in Jaipur.
- [ ] **Trustpilot / Google Reviews**: Send review request links to past clients.

---

## 7. Social Profiles & Brand Assets

- [ ] **LinkedIn Company Page**: Create "DWS Web Services" company page and link it in `config.ts`.
- [ ] **Instagram**: Update bio and website link on `@dws.io` or company handle.
- [ ] **Twitter / X**: Create or link agency profile.
- [ ] **GitHub**: Ensure agency organization or founder portfolio repos are linked.
- [ ] **High-Resolution Vector Logo / Favicons**: Confirm custom favicon and Apple Touch Icon represent the official branding.
