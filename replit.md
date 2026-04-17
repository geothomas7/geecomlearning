# Geecom Learning

A static marketing website for Geecom Learning, a Learning and Development (L&D) content studio and onboarding video production company serving small and medium-sized businesses (SMBs), mid-market teams, and associations across North America. Based in Vancouver, British Columbia, Canada.

## Tech Stack

- **Languages:** HTML5, CSS3, Vanilla JavaScript
- **Frameworks:** None. Pure static site.
- **Backend:** None. Contact form uses Web3Forms (key: 03b3a751-a45a-416a-86d1-c461a026103c).
- **Build System:** None required.
- **CSS cache-busting:** `styles.css?v=5`

## Running the Project

```
python3 -m http.server 5000 --bind 0.0.0.0
```

## Deployment

Configured as a **static** deployment with `publicDir: "."`.

## Project Structure (17 pages)

```
/
├── index.html                                         # Homepage
├── services.html                                      # Services overview
├── process.html                                       # Engagement process
├── pricing.html                                       # Project-based pricing + retainer
├── contact.html                                       # Contact form (Web3Forms)
├── about.html                                         # About Geecom Learning
├── elearning-development.html                         # eLearning service page
├── compliance-training.html                           # Compliance training service page
├── microlearning.html                                 # Microlearning service page
├── onboarding-videos.html                             # Onboarding video service page
├── psychological-health-safety-training.html          # PHS training service page
├── resources.html                                     # Resource hub (article cards)
├── how-much-does-elearning-development-cost.html      # Article: eLearning cost guide
├── should-you-outsource-ld.html                       # Article: Outsource vs in-house L&D
├── psychological-health-and-safety-in-the-workplace.html  # Article: PHS guide
├── terms.html                                         # Terms and Conditions
├── privacy.html                                       # Privacy Policy
├── styles.css                                         # All site styles (v=5)
├── newsletter.js                                      # Footer newsletter form handler
├── sitemap.xml                                        # XML sitemap (all 17 pages)
└── assets/                                            # Logo and client images
```

## Navigation Order (all 17 pages, both header and footer)

**Header:** Home / Services / Process / Pricing / Resources / Contact  
**Footer nav col:** Home, Services, Process, Pricing, Resources, Contact, About

## Copy and Content Conventions

- No overused em dashes or AI-sounding filler phrases ("it is worth noting", "that said,", "simultaneously", "it is worth noting")
- Bullet lists only where they genuinely reduce cognitive load — parallel discrete items, spec sheets, numbered checklists. Prose where bullets would be formulaic.
- No bullet lists for items that flow naturally as a sentence or short paragraph.
- `article-stats` styled blocks (navy bullet style) carry 3 key data points per article.
- Articles have: BLUF box, article-stats, article-faq, article-cta, article-share, article-updated.
- Copyright year: 2026. Location: Vancouver, British Columbia, Canada.

## Article Structure (3 resource articles)

Each article includes:
- `<div class="article-bluf">` — one-paragraph summary up front
- `<ul class="article-stats">` — 3 cited data points
- Main body prose with h2/h3 sections
- `<div class="article-faq">` — visible FAQ with `<div class="faq-item">` entries
- `<div class="article-cta">` — CTA before share
- `<div class="article-share">` — LinkedIn share link
- `<p class="article-updated">` — visible last updated date
- FAQPage JSON-LD structured data in `<head>`

## SEO / GEO

- Canonical URLs on all pages
- `geo.region: CA-BC` and `geo.placename: Vancouver` meta tags
- FAQPage JSON-LD on all 3 articles and PHS training service page
- Article JSON-LD on all 3 articles
- Organization JSON-LD sitewide
- Outbound citations to authoritative sources (Mental Health Commission of Canada, ATD, Deloitte, etc.)
- sitemap.xml with correct lastmod dates (April 2026)

## Brand

- Primary navy: `#132347`
- Gold: `#F5A623`
- Logo: `assets/logo-transparent-cropped.png`
- Font: Inter (Google Fonts)

## Legal Pages

- `terms.html`: Governed by laws of British Columbia and Canada. Dispute resolution in Vancouver, BC courts.
- `privacy.html`: References BC's Personal Information Protection Act (PIPA), SBC 2003, c 63; federal PIPEDA; and the Office of the Information and Privacy Commissioner for BC (OIPC BC).

## Contact / Forms

- **Contact form:** Web3Forms, key `03b3a751-a45a-416a-86d1-c461a026103c`
- **Newsletter form:** Web3Forms, same key, in footer of every page
- **newsletter.js:** Handles newsletter form submit feedback (shows success message, hides form)
