# DWS Web Services - Content Claims Audit

> Every row below is a claim found in the codebase. **Risk** grades:
>
> - **RED** = Fabricated or unverifiable right now. Must be removed or replaced before launch.
> - **AMBER** = Plausible but unconfirmed. Needs the owner's explicit sign-off in `FACTS.md`.
> - **GREEN** = Verifiable from the code/repo itself (e.g. a live URL, a config value).

---

## 1. Statistics & Metrics (Hero)

| #   | Claim                         | Location    | Risk | Recommendation                                                                                                        |
| --- | ----------------------------- | ----------- | ---- | --------------------------------------------------------------------------------------------------------------------- |
| 1   | **"10+ Projects delivered"**  | Hero.tsx:62 | RED  | Only 4 projects listed in site.ts. Remove or replace with verifiable count.                                           |
| 2   | **"4.2x Avg. ROAS lift"**     | Hero.tsx:63 | RED  | No ROAS data exists anywhere. This is a fabricated statistic. Remove entirely.                                        |
| 3   | **"2 yrs Compounding craft"** | Hero.tsx:64 | RED  | foundingYear in business.ts is "2026" and the current year is 2026. "2 years" is false. Remove or say "Founded 2026". |

## 2. Team Members (About Page)

| #   | Claim                                             | Location      | Risk | Recommendation                                                                                          |
| --- | ------------------------------------------------- | ------------- | ---- | ------------------------------------------------------------------------------------------------------- |
| 4   | **"Creative Lead" (CL)** - unnamed placeholder    | site.ts:66-70 | RED  | Not a real person. Displayed as a named team member on /about. Remove or confirm real name in FACTS.md. |
| 5   | **"Performance Lead" (PL)** - unnamed placeholder | site.ts:71-76 | RED  | Not a real person. Remove or confirm real name in FACTS.md.                                             |
| 6   | **"Engineering Lead" (EL)** - unnamed placeholder | site.ts:77-83 | RED  | Not a real person. Remove or confirm real name in FACTS.md.                                             |

## 3. Testimonials (About Page)

| #   | Claim                                                          | Location       | Risk | Recommendation                                                                                                 |
| --- | -------------------------------------------------------------- | -------------- | ---- | -------------------------------------------------------------------------------------------------------------- |
| 7   | **All 3 testimonials are [ADD REAL TESTIMONIAL] placeholders** | site.ts:87-106 | RED  | Placeholder text is rendered live. The entire testimonials section must be hidden until real quotes are added. |

## 4. Case Study Quotes

| #   | Claim                                                                                                         | Location               | Risk  | Recommendation                                                                                                          |
| --- | ------------------------------------------------------------------------------------------------------------- | ---------------------- | ----- | ----------------------------------------------------------------------------------------------------------------------- |
| 8   | **Shree Radhe quote**: "Patients now arrive already knowing our doctors..." attributed to "Clinic Management" | caseStudies.ts:59-62   | AMBER | Generic attribution. Needs confirmation: is this a real quote from a real person? Who said it?                          |
| 9   | **Rudra Bhumi quote**: "The site finally looks like the properties we sell..." attributed to "Founder"        | caseStudies.ts:95-98   | AMBER | Real person? Name needed. Confirm quote is genuine.                                                                     |
| 10  | **LinkSnap quote**: "We wanted an MVP that felt finished..." attributed to "Product Owner"                    | caseStudies.ts:131-134 | AMBER | LinkSnap is listed as "DwS product" (line 105), so the "Product Owner" is likely Dheerajj himself. Clarify attribution. |
| 11  | **Dheerajj Portfolio quote**: "One link now does the introduction..." attributed to "Dheerajj Kumawat"        | caseStudies.ts:167-170 | AMBER | Self-quote about own portfolio. Legitimate but should be transparent that client = founder.                             |

## 5. Team & Staffing Claims

| #   | Claim                                                                                        | Location         | Risk  | Recommendation                                                                                    |
| --- | -------------------------------------------------------------------------------------------- | ---------------- | ----- | ------------------------------------------------------------------------------------------------- |
| 12  | **"A full-stack growth team, on demand."**                                                   | Services.tsx:64  | AMBER | Implies a multi-person team. Confirm actual team size in FACTS.md.                                |
| 13  | **"Every engagement runs on one integrated team - no handoffs, no agency theatre."**         | Services.tsx:71  | AMBER | "One integrated team" implies multiple people. Confirm.                                           |
| 14  | **"senior hands on every keyboard, zero junior hand-offs"**                                  | about.tsx:153    | AMBER | What does "senior" mean here? How many people? If it's one person (the founder), say so directly. |
| 15  | **"Senior designer and engineer on every project"**                                          | pricing.ts:144   | AMBER | Implies at least 2 senior staff. Confirm headcount.                                               |
| 16  | **"Direct access to senior engineers and strategists"**                                      | contact.tsx:190  | AMBER | Plural "engineers and strategists". How many?                                                     |
| 17  | **"Dedicated strategist, designer, engineer"** (Scale tier)                                  | site.ts:154      | AMBER | Implies 3 dedicated people. Is this deliverable?                                                  |
| 18  | **"Dedicated senior engineer and designer capacity"** (Product Sprints)                      | pricing.ts:520   | AMBER | Same concern as #17.                                                                              |
| 19  | **"4 in-depth articles per month written by subject specialists"** (National SEO)            | pricing.ts:245   | AMBER | Who are the "subject specialists"?                                                                |
| 20  | **"Work ships in visible sprint stages, reviewed directly with our senior technical lead."** | services.tsx:114 | AMBER | Is this the founder? Just say so.                                                                 |

## 6. Process & Outcome Claims

| #   | Claim                                                                                       | Location       | Risk  | Recommendation                                                                                     |
| --- | ------------------------------------------------------------------------------------------- | -------------- | ----- | -------------------------------------------------------------------------------------------------- |
| 21  | **"100+ projects delivered for clients across India and internationally"** (Goal milestone) | about.tsx:112  | AMBER | Labelled as "Goal" so technically aspirational. But could mislead. Add clearer "Our goal:" prefix. |
| 22  | **"sub-2-second load times even on standard Indian 4G mobile connections"**                 | pricing.ts:164 | AMBER | Plausible for the tech stack but needs Lighthouse/WebPageTest proof.                               |
| 23  | **"Core Web Vitals passed before handover"**                                                | pricing.ts:145 | AMBER | A commitment, not a past result claim. OK if actually deliverable.                                 |
| 24  | **"We frequently conduct code audits on prototypes..."**                                    | pricing.ts:552 | AMBER | "Frequently" implies volume. How many audits done?                                                 |
| 25  | **"dominate Google search rankings"**                                                       | pricing.ts:183 | AMBER | Hype word. No ranking results to prove dominance. Soften.                                          |
| 26  | **"First results in 6-10 weeks"** (Local SEO)                                               | pricing.ts:226 | AMBER | Industry-standard range, but not proven from DWS client data.                                      |

## 7. Business Details Needing Verification

| #   | Claim                              | Location       | Risk  | Recommendation                                                                         |
| --- | ---------------------------------- | -------------- | ----- | -------------------------------------------------------------------------------------- |
| 27  | **Street address "Malviya Nagar"** | business.ts:39 | AMBER | Is this a real registered address or just a locality? NAP must be exact for local SEO. |
| 28  | **Postal code "302017"**           | business.ts:42 | AMBER | Confirm this matches the actual location.                                              |
| 29  | **"Mon-Sat, 10:00-19:00 IST"**     | business.ts:51 | AMBER | Confirm these are real operating hours.                                                |
| 30  | **Price range indicator**          | business.ts:52 | GREEN | Reasonable for the pricing shown.                                                      |

## 8. Pricing (Needs Owner Confirmation)

| #   | Claim                                                | Location                    | Risk  | Recommendation                                                                            |
| --- | ---------------------------------------------------- | --------------------------- | ----- | ----------------------------------------------------------------------------------------- |
| 31  | **All pricing across 4 services + 3 retainer tiers** | pricing.ts, site.ts:118-162 | AMBER | Prices are displayed publicly. Owner must confirm every price is current and deliverable. |

## 9. Taglines & Positioning Claims

| #   | Claim                                                       | Location       | Risk  | Recommendation                                                                   |
| --- | ----------------------------------------------------------- | -------------- | ----- | -------------------------------------------------------------------------------- |
| 32  | **"Strategy first, design obsessed, measured on revenue."** | business.ts:21 | AMBER | Positioning statement, not a factual claim. Fine as long as it reflects reality. |
| 33  | **"engineering-grade websites"**                            | about.tsx:100  | AMBER | Subjective quality claim. Defensible given the tech stack.                       |
| 34  | **"A framework built for compounding results."**            | Process.tsx:35 | AMBER | Marketing language. No specific claim to verify.                                 |

## 10. Structured Data / Schema Claims

| #   | Claim                                              | Location  | Risk  | Recommendation                              |
| --- | -------------------------------------------------- | --------- | ----- | ------------------------------------------- |
| 35  | **Organization schema lists foundingDate: "2026"** | seo.ts:59 | GREEN | Matches business.ts.                        |
| 36  | **Founder jobTitle: "Founder & Technical Lead"**   | seo.ts:57 | AMBER | Confirm Dheerajj's actual title preference. |

## 11. Terms & Conditions

| #   | Claim                            | Location                     | Risk  | Recommendation                                                  |
| --- | -------------------------------- | ---------------------------- | ----- | --------------------------------------------------------------- |
| 37  | **"industry-leading execution"** | terms-and-conditions.tsx:127 | AMBER | Hype phrase in a legal document. Replace with neutral language. |

---

## Summary

| Risk                             | Count  |
| -------------------------------- | ------ |
| RED (must fix)                   | **7**  |
| AMBER (needs owner confirmation) | **27** |
| GREEN (verified)                 | **3**  |

### Critical RED items (block launch):

1. Hero stats: "10+", "4.2x ROAS", "2 yrs" - all fabricated
2. Three unnamed team members shown as real people
3. Three placeholder testimonials rendering on live site
