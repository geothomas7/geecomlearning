# Specialist Trainer Sourcing — Landing Page Brief

**Page URL (local preview):** `/trainer-sourcing.html`
**Page URL (production, once deployed):** `https://geecomlearning.com/trainer-sourcing.html`
**Status:** Live in the codebase; intentionally orphaned from main navigation; included in `sitemap.xml` so it remains indexable.
**Last updated:** 2 May 2026

---

## 1. Why this page was created

Geecom Learning is a Vancouver-based Learning & Development (L&D) agency serving Canadian small and mid-sized employers. The existing service catalogue covers things Geecom *builds* — eLearning modules, onboarding videos, compliance training. This page introduces a different kind of offering: a **managed sourcing service** where Geecom acts as a broker who finds, vets, and places a specialist *human* trainer for a one-off corporate workshop or short engagement.

The strategic problem this addresses:

- HR managers and operations leads at Canadian SMBs occasionally need a trainer with very specific subject-matter expertise — a working statistician, a former regulator, a sector-specific compliance specialist — for a single workshop or short series.
- The candidates worth hiring are usually not on a public marketplace. They sit inside government statistical agencies, regulatory bodies, professional associations, and private expert networks and consultancies.
- Each source has its own contact pathway, quoting logic, and availability calendar. A 60-person company doesn't have the time or the institutional knowledge to navigate that.
- Geecom can. The page is the front door for that service.

It is intentionally launched as a **soft-test**: published, indexable, and shareable, but **not** wired into the main site navigation or the services page. This lets the team promote the offer through LinkedIn and direct outreach, gather signal, and only commit permanent nav real estate to it once there is demand.

---

## 2. What the page is, in one paragraph (BLUF)

We are a managed sourcing service for Canadian employers who need a specialist trainer for a one-off workshop or short engagement. The client gives us a brief; we identify, vet, and place the right specialist — statistician, regulator, or sector expert — and handle the contracting. Our fee is contingent on a successful placement; if we cannot find a fit, there is no fee.

---

## 3. Scope decisions (in scope / out of scope)

**In scope:**
- Corporate, workforce, and worksite training only.
- Topic categories on the page: statistics & data literacy, regulatory & compliance, sector-specific operational training, leadership & people management, technical & systems training, and bespoke topics on request.
- One-off engagements: half-day workshops, full-day workshops, multi-day series, executive briefings.
- Contracting and trainer payment handled by Geecom; one invoice to the client.

**Explicitly out of scope (called out on the page in a "Not a fit for" panel):**
- Personal training, fitness, or wellness coaching for individuals.
- University executive education referrals; sourcing instructors for university degree programmes or accredited certifications.
- Long-term staffing or permanent hiring of an in-house trainer.
- Self-serve marketplace browsing — there is no public roster.
- Train-the-trainer programmes for the client's existing internal trainers (that is a different Geecom offering).

**Commercials — what the page does and does not say:**
- The page explains the **fee structure** (placement-based; either a percentage of the trainer's fee or a flat sourcing fee, quoted per engagement, contingent on placement).
- The page deliberately **does not** quote any specific dollar figures or commission percentages, because each engagement is bespoke and the team has not yet locked in standard rates.
- The page deliberately **does not** name any specific trainer, list a roster, or imply Geecom currently has trainers under contract — there is no roster yet, and overstating it would be misleading.

---

## 4. Page structure (top to bottom)

1. **Breadcrumb**: Home / Services / Specialist Trainer Sourcing
2. **Hero** (light navy gradient): "Service deep dive" eyebrow, two pill tags (Managed service / Specialist sourcing), H1 ("Specialist Trainer Sourcing"), subhead, meta row (By Geecom Learning · Vancouver, BC · Updated May 2026)
3. **BLUF callout** — the one-paragraph summary above, in a gold-accented box
4. **"The problem we solve"** — labelled section with three short paragraphs and a "Best for" aside (HR managers, operations directors, training coordinators, and founders running occasional one-off workshops)
5. **"How it works"** — 4-step inline process: 01 Brief → 02 Source → 03 Vet → 04 Place
6. **"What we source for"** — 6-card grid of example topic categories
7. **"Where this service fits — and where it does not"** — corporate-only scope guard with a "Best for" aside and a "Not a fit for" aside
8. **"How fees work"** — narrative explanation of the contingent-on-placement fee model (no specific dollar figures)
9. **"Why Geecom"** — 3-card differentiation grid: Canadian-focused / L&D background, not just a recruiter / Source-agnostic and transparent
10. **FAQ** — 4 questions, plain-language answers:
    - How is this different from a marketplace like Catalant or Upwork?
    - Who pays the trainer — you or us?
    - How long does sourcing take?
    - What happens if you cannot find a suitable trainer?
11. **CTA band**: "Have a brief in mind?" → links to `contact.html`
12. **Share-on-LinkedIn block** at the very bottom

---

## 5. SEO and structured data

**On-page SEO checks (all within targets):**
- Meta description: 157 characters
- H1: 27 characters
- Subhead: ~194 rendered characters
- BLUF block: 56 words (target ~60)
- Canonical, OpenGraph, Twitter Card, geo, and `en-CA` locale tags all set

**JSON-LD `@graph` includes four nodes:**
- `Organization` — Geecom Learning, with `PostalAddress` (Vancouver, BC, Canada) and `sameAs` LinkedIn link
- `BreadcrumbList` — three positions, all with `item` URLs
- `Service` — `serviceType: "Specialist trainer sourcing"`, `areaServed: Canada`, `provider: Geecom Learning`, `audience: BusinessAudience` (Canadian SMBs), and a `hasOfferCatalog` listing the topic categories
- `FAQPage` — `mainEntity` matches the visible FAQ verbatim

**Sitemap:** `/trainer-sourcing.html` added at `priority: 0.7`, `changefreq: monthly`, `lastmod: 2026-05-02`.

---

## 6. Internal linking — deliberately none

This page is **not** linked from:
- The header navigation (desktop or mobile)
- The footer navigation
- `services.html`
- `index.html`
- Any other page on the site

The only place it appears on the site is in `sitemap.xml`. The Services link in the header **is** marked as `class="active"` when this page is being viewed, but that is a visual state only — it is not a link pointing at this page.

This is intentional. The plan is to drive traffic to the page from:
- A LinkedIn launch post (proposed as follow-up Task #6)
- A short direct-outreach sequence to existing contacts (also Task #6)
- An intake form for the trainer brief (proposed as Task #7)
- A supporting resource article — "How to brief a specialist trainer" (proposed as Task #8)

If the soft-launch generates real demand, the next step is a separate decision to add the page to `services.html` and the header.

---

## 7. Brand and content rules followed

- Canadian English throughout (e.g. "programmes", "organisation", "vetting").
- No emojis anywhere on the page.
- Narrative-led prose, second person ("you"), first-person plural for Geecom ("we").
- No fabricated trainer names, no fabricated quotes, no fabricated client logos or testimonials.
- No specific dollar figures or commission percentages — fees are described structurally and quoted per engagement.
- Brand palette respected: navy `#132347` primary, gold `#F5A623` accent, Inter font family, light navy gradient hero consistent with other service deep-dive pages.

---

## 8. What I would like a second opinion on

If you are running this page through another model, useful questions to ask:

1. Is the **scope fence around "corporate-only"** clearly drawn? Specifically: does the page leave any ambiguity about whether university executive education, fitness, personal training, or staffing are in scope? (They are not.)
2. Is the **"contingent-on-placement, no fee if no fit" promise** stated clearly enough to be reassuring without being legally over-committing?
3. Does the **"Why Geecom" section** read as honest differentiation, or as generic agency boilerplate? Geecom is small and new to this offering; over-claiming would be a credibility risk.
4. Is the **FAQ** answering the questions a buyer would actually have at the consideration stage — or is it answering questions only Geecom thinks are important?
5. Is the **page structure** appropriate for a soft-launch landing page, or is it over-built for what is really an MVP test of demand?
6. From an **AI search / answer-engine** perspective, is the BLUF + FAQ structured well enough that an LLM-powered search assistant would surface the right summary if asked "who sources specialist corporate trainers in Canada?"
7. Are there **obvious objections** from a typical Canadian SMB HR manager that the page does not address?

---

*End of brief.*
