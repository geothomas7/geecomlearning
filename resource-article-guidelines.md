# Geecom Learning — Resource Article Guidelines
## For External Contributors
*Last updated: May 2026*

---

This document covers everything an external writer or developer needs to produce a resource article that matches the existing Geecom Learning site — visually, structurally, and in voice. Follow it exactly. If something is unclear, email hello@geecomlearning.com before making assumptions.

---

# PART 1 — BRAND OVERVIEW

## Who Geecom Learning Is

Geecom Learning is a Vancouver-based Learning & Development (L&D) agency that builds bespoke eLearning, onboarding videos, and compliance training for small and medium-sized businesses across Canada. The company's primary value proposition is acting as an outsourced L&D team for organisations that do not have one internally.

## Who the Content Is Written For

Every resource article is written for one reader: **the person who owns the training problem without an internal L&D team.** In practice this means:

- HR managers at companies of 50–500 employees
- Operations directors with a compliance obligation
- People leaders building onboarding from scratch
- Business owners who need training but do not know where to start

Write for someone capable and busy. They are not a learning professional. They do not need to be impressed — they need useful information delivered quickly and plainly.

---

# PART 2 — BRAND VOICE

## Core Principles

These apply to every sentence in every article.

**Narrative-led.** Start sections with an observation, a scenario, or a moment before making the point. Don't lead with the conclusion — lead with something that earns the reader's attention.

**Evidence-backed.** Every claim that involves a number, a percentage, or a research finding must be linked to a verifiable source. Do not use vague phrases like "studies show" — cite the specific organisation (e.g., "Brandon Hall Group research found…").

**Plain language.** Write at approximately a Grade 9 reading level. No jargon, no acronyms without definition on first use. If you find yourself writing a sentence you would not say out loud to a non-specialist colleague, rewrite it.

**Employer-facing POV.** You are writing for the person responsible for training, not the learner. Frame everything from the perspective of the HR manager, operations director, or business owner making the decision.

**Short, punchy closing lines.** Paragraphs should earn their space. The last sentence of a section should land — not trail off.

**No emojis.** No bullet points as a substitute for clear prose. No AI-template openers ("In today's fast-paced world...", "As we navigate the complexities of...").

## Voice Examples

| Do not write | Write instead |
|---|---|
| "In today's rapidly evolving business landscape, psychological safety has emerged as a key driver of organisational performance." | "Psychological safety is not a soft skill. It is a performance driver." |
| "Studies have shown that poor onboarding negatively impacts retention metrics." | "Brandon Hall Group research found that structured onboarding improves new hire retention by 82%." |
| "Our team of experts can help you navigate your L&D challenges." | "If you are scoping a project and want a straight conversation about what it would cost, we are happy to talk — no obligation." |
| "There are many factors to consider when thinking about eLearning costs." | "The term 'eLearning' covers an enormous range of products, and that range explains most of the price variation." |

## Pronoun and Person

- Refer to Geecom Learning as **"we"** (never "I" or the company name in body copy)
- Refer to the reader as **"you"**
- Write in present tense for general truths; past tense for specific events or research findings
- Use **Canadian English spelling** throughout: behaviour, organisation, colour, programme, recognise

---

# PART 3 — COLOUR PALETTE

All colours are defined as CSS variables in `styles.css`. Use these exact values — do not approximate.

| Name | Variable | Hex | Use |
|---|---|---|---|
| Navy | `--navy` | `#132347` | Primary text, headings, nav background, dark sections |
| Navy Dark | `--navy-dark` | `#0a1830` | Mobile menu background |
| Navy Mid | `--navy-mid` | `#1c3263` | Borders on dark backgrounds |
| Navy Light | `--navy-light` | `#e8edf7` | Subtle tints on light backgrounds |
| Gold | `--gold` | `#F5A623` | Primary button colour, active nav links, accent highlights |
| Gold Dark | `--gold-dark` | `#d98e0f` | Button hover state, section labels |
| Gold Light | `--gold-light` | `#FEF8E7` | Icon backgrounds, eyebrow pill backgrounds |
| Background | `--bg` | `#f8fafc` | Page background |
| Surface | `--surface` | `#ffffff` | Card backgrounds |
| Surface Alt | `--surface-alt` | `#f0f2f7` | Alternate section backgrounds |
| Text | `--text` | `#132347` | Body copy (same as navy) |
| Muted | `--muted` | `#5b6b8a` | Secondary text, metadata, excerpt copy |
| Line | `--line` | `#dde3ef` | Card borders, dividers |
| Accent | `--accent` | `#f2f5fb` | Muted section background |

**Do not introduce any colour not in this palette.**

---

# PART 4 — TYPOGRAPHY

## Typeface

**Inter** — loaded from Google Fonts. This is the only typeface used across the site.

```
https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap
```

## Type Scale

| Element | Size | Weight | Colour |
|---|---|---|---|
| H1 | `clamp(2rem, 5vw, 3.25rem)` | 800 | `--navy` |
| H2 | `clamp(1.6rem, 3.5vw, 2.25rem)` | 800 | `--navy` |
| H3 | `1.05rem` | 700 | `--navy` |
| Body copy | Inherited (approx 1rem) | 400 | `--text` |
| Muted / metadata | `0.95rem` | 400 | `--muted` |
| Section label (eyebrow) | `0.78rem` | 700 | `--gold-dark` (uppercase, letter-spacing 0.09em) |
| Button text | `0.95rem` | 600 | Varies by button type |

## Line Height

- Body text: `1.65`
- Headings: `1.15` (H1), `1.2` (H2)
- Subheads / article introductions: `1.7`

---

# PART 5 — LOGO AND ASSETS

## Logo Files

All logo files are in the `/assets/` folder.

| File | Use |
|---|---|
| `assets/logo-transparent-cropped.png` | Header nav and footer — white background logos |
| `assets/logo-icon-cropped.png` | Browser favicon (`<link rel="icon">`) |

Do not resize the header logo — it is controlled by `.brand img { height: 88px; width: auto; }` in styles.css.

## No Custom Images in Resource Articles

Resource articles do not include hero images or inline photography. The existing articles use no images within the article body. Do not add images unless explicitly instructed by Geecom Learning. If a diagram or table is needed, use an HTML table with the `.cost-table` class (see Part 7).

---

# PART 6 — PAGE FILE STRUCTURE

## File Naming

Use lowercase kebab-case for all filenames. The filename should match the primary keyword of the article.

**Examples:**
- `how-much-does-elearning-development-cost.html`
- `should-you-outsource-ld.html`
- `psychological-health-and-safety-in-the-workplace.html`

**Format:** `[target-keyword-phrase].html` — no underscores, no capitals, no spaces.

## Where to Place the File

All resource article HTML files sit in the **root directory** of the site, alongside `index.html`, `services.html`, etc. Do not create subdirectories.

## Stylesheet Link

Every page must link the stylesheet with the current version parameter:

```html
<link rel="stylesheet" href="styles.css?v=5" />
```

Do not change the version number unless you are also updating styles.css.

---

# PART 7 — FULL HTML PAGE STRUCTURE

Every resource article follows this exact structure. Copy it precisely — do not reorder sections, rename classes, or skip elements.

## 7.1 — Head Block

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/png" href="assets/logo-icon-cropped.png" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- SEO: Title format = [Article Title] | Geecom Learning -->
  <title>[Article Title] | Geecom Learning</title>
  <meta name="description" content="[Under 160 characters. Plain language summary of what the article covers and who it is for.]" />
  <link rel="canonical" href="https://geecomlearning.com/[filename].html" />

  <!-- Open Graph -->
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="Geecom Learning" />
  <meta property="og:locale" content="en_CA" />
  <meta property="og:url" content="https://geecomlearning.com/[filename].html" />
  <meta property="og:title" content="[Article Title]" />
  <meta property="og:description" content="[Same as meta description or a close variant]" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="[Article Title]" />
  <meta name="twitter:description" content="[Same as meta description or a close variant]" />

  <!-- Geo tags — do not change these -->
  <meta name="geo.region" content="CA-BC" />
  <meta name="geo.placename" content="Vancouver" />

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" media="print" onload="this.media='all'" />
  <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" /></noscript>

  <link rel="stylesheet" href="styles.css?v=5" />

  <!-- Structured Data: Organisation + Breadcrumb + Article + FAQPage schema -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://geecomlearning.com/#org",
        "name": "Geecom Learning",
        "url": "https://geecomlearning.com",
        "logo": "https://geecomlearning.com/assets/logo-transparent-cropped.png",
        "sameAs": ["https://www.linkedin.com/company/geecom-learning"],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Vancouver",
          "addressRegion": "BC",
          "addressCountry": "CA"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://geecomlearning.com/" },
          { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://geecomlearning.com/resources.html" },
          { "@type": "ListItem", "position": 3, "name": "[Short article label]", "item": "https://geecomlearning.com/[filename].html" }
        ]
      },
      {
        "@type": "Article",
        "headline": "[Article Title]",
        "description": "[Meta description text]",
        "datePublished": "[YYYY-MM-DD]",
        "dateModified": "[YYYY-MM-DD]",
        "inLanguage": "en-CA",
        "articleSection": "[Tag 1]",
        "wordCount": [number],
        "keywords": "[primary keyword], [secondary keyword 1], [secondary keyword 2]",
        "about": [
          { "@type": "Thing", "name": "[Topic 1]" },
          { "@type": "Thing", "name": "[Topic 2]" }
        ],
        "audience": {
          "@type": "BusinessAudience",
          "audienceType": "HR managers, operations directors, and people leaders at Canadian SMBs"
        },
        "author": { "@id": "https://geecomlearning.com/#org" },
        "publisher": { "@id": "https://geecomlearning.com/#org" },
        "url": "https://geecomlearning.com/[filename].html",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://geecomlearning.com/[filename].html"
        }
      }
    ]
  }
  </script>
</head>
```

**Always include all four schema types** — Organisation, BreadcrumbList, Article, and (when an FAQ block is present) FAQPage. The expanded Article fields (`inLanguage`, `articleSection`, `wordCount`, `keywords`, `about`, `audience`, `mainEntityOfPage`) are required, not optional. They materially improve how AI engines (ChatGPT, Perplexity, Google AI Overviews) extract and cite the page.

**SEO rules for the head:**
- `<title>` must include the primary keyword exactly as it appears in the H1
- `<meta name="description">` must be under 160 characters
- `<link rel="canonical">` must match the exact published URL
- `datePublished` and `dateModified` use ISO 8601 format: `YYYY-MM-DD`

---

## 7.2 — Body Opening: Skip Link and Header

Copy this block exactly. The nav and footer are shared across all pages and must not be modified.

```html
<body>
  <a class="skip-link" href="#main">Skip to main content</a>

  <header class="site-header">
    <nav class="nav container" aria-label="Main">
      <a href="index.html" class="brand">
        <img src="assets/logo-transparent-cropped.png" alt="Geecom Learning" />
      </a>
      <ul class="nav-links" role="list">
        <li><a href="index.html">Home</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="process.html">Process</a></li>
        <li><a href="pricing.html">Pricing</a></li>
        <li><a href="resources.html" class="active">Resources</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
      <a class="btn btn-primary" href="contact.html">Get started</a>
      <button class="nav-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">
        <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <line x1="3" y1="6" x2="19" y2="6"/><line x1="3" y1="12" x2="19" y2="12"/><line x1="3" y1="18" x2="19" y2="18"/>
        </svg>
      </button>
    </nav>
    <nav id="mobile-menu" class="mobile-menu container" aria-label="Mobile">
      <a href="index.html">Home</a>
      <a href="services.html">Services</a>
      <a href="process.html">Process</a>
      <a href="pricing.html">Pricing</a>
      <a href="resources.html" class="active">Resources</a>
      <a href="contact.html">Contact</a>
      <a class="btn btn-primary" href="contact.html">Get started</a>
    </nav>
  </header>
```

Note: `class="active"` is permanently set to Resources on all resource article pages.

---

## 7.3 — Main Content: Breadcrumb

```html
  <main id="main">

    <nav class="breadcrumb-nav container" aria-label="Breadcrumb">
      <ol class="breadcrumb">
        <li><a href="index.html">Home</a></li>
        <li><a href="resources.html">Resources</a></li>
        <li aria-current="page">[Short article title — 3–5 words max]</li>
      </ol>
    </nav>
```

The breadcrumb `aria-current="page"` item is a plain text label, not a link. Keep it short — it is not the full article title.

---

## 7.4 — Article Hero

```html
    <section class="article-hero">
      <div class="container">
        <div class="article-tags">
          <span class="resource-tag">[Tag 1]</span>
          <span class="resource-tag">[Tag 2]</span>
        </div>
        <h1>[Full Article Title — includes primary keyword exactly]</h1>
        <p class="article-subhead">[1–2 sentences. What this article covers and what the reader will get from it. Plain language. Under 200 characters.]</p>
        <div class="article-meta-row">
          <span>By Geecom Learning</span>
          <span>[Month Year]</span>
          <span>[X min read]</span>
        </div>
        <p class="article-updated">Last updated: [Month Year]</p>
      </div>
    </section>
```

**Tags — use only from this approved list:**

| Tag | When to use |
|---|---|
| eLearning | Articles about eLearning modules, authoring tools, development |
| Budget | Articles that discuss costs, pricing, or financial decisions |
| L&D Strategy | Articles about learning strategy, planning, or programme design |
| Outsourcing | Articles about in-house vs. outsourced decisions |
| Workplace Wellness | Articles about psychological safety, mental health, wellbeing |
| Compliance Training | Articles about regulatory training, WHMIS, OHS, OSHA |
| Onboarding | Articles about employee onboarding and induction |
| Microlearning | Articles about short-form, spaced learning delivery |

Maximum 2 tags per article. Choose the most specific tags — do not add generic tags.

**Reading time:** calculate at 200 words per minute. Round up to the nearest minute. A 1,200-word article = 6 min read.

---

## 7.5 — Article Body

```html
    <article class="section">
      <div class="container">
        <div class="article-body">

          <!-- BLUF block: mandatory opening summary -->
          <div class="article-bluf">
            <p><strong>The short answer:</strong> [2–3 sentence summary of the article's core answer. Gives the reader the key takeaway before they read anything else. Specific, not vague.]</p>
          </div>

          <!-- Key stats list: 2–4 bullet points with data -->
          <ul class="article-stats">
            <li>[Stat or fact with a linked source — see linking rules below]</li>
            <li>[Stat or fact with a linked source]</li>
            <li>[Stat or fact with a linked source]</li>
          </ul>

          <!-- Article body: H2 sections, H3 subsections, body copy -->
          <h2>[Section heading]</h2>
          <p>[Body copy]</p>

          <h2>[Section heading]</h2>
          <h3>[Subsection heading]</h3>
          <p>[Body copy]</p>

          <!-- Optional but strongly encouraged: one expert/author commentary
               pull-quote per article. Adds named-source authority for AI engines
               and breaks up the body for human readers. Place after the article's
               most important data-driven section. -->
          <blockquote class="article-pullquote">
            <span class="pullquote-label">Our view, from working with Canadian SMBs</span>
            <p>"[A self-contained, quotable 2–4 sentence statement of Geecom's perspective on the data above. Must read as a standalone insight — AI engines may extract it on its own.]"</p>
            <footer>— Geecom Learning, Vancouver, BC</footer>
          </blockquote>

          <!-- Tables (where relevant) -->
          <div class="cost-table-wrapper">
            <table class="cost-table">
              <thead>
                <tr>
                  <th>[Column header]</th>
                  <th>[Column header]</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>[Cell]</td>
                  <td>[Cell]</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- FAQ block: mandatory, 2–4 questions -->
          <div class="article-faq">
            <h2>Frequently asked questions</h2>

            <div class="faq-item">
              <h3>[Question — phrased exactly as someone would search it]</h3>
              <p>[Answer — 3–5 sentences. Self-contained. No references to other FAQ items.]</p>
            </div>

            <div class="faq-item">
              <h3>[Question]</h3>
              <p>[Answer]</p>
            </div>
          </div>

          <!-- CTA block: mandatory, placed after FAQ -->
          <div class="article-cta">
            <h3>[CTA heading — specific to article topic, e.g. "Scoping a project?"]</h3>
            <p>[1–2 sentence description of what a call or conversation would cover. Plain, no pressure language.]</p>
            <a class="btn btn-primary" href="contact.html">Book a free call</a>
            <a class="btn btn-outline" href="[relevant-service-page].html">[Relevant service page label]</a>
          </div>

          <!-- Share block: mandatory, do not modify -->
          <div class="article-share">
            <span>Found this useful?</span>
            <a href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fgeecomlearning.com%2F[filename].html" target="_blank" rel="noopener noreferrer" class="share-linkedin">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              Share on LinkedIn
            </a>
          </div>

        </div>
      </div>
    </article>
```

---

## 7.6 — Footer

Copy this block exactly on every article page. Do not modify any content, links, or the newsletter form access key.

```html
  <footer class="site-footer">
    <div class="container">
      <div class="footer-inner">
        <div class="footer-brand">
          <img src="assets/logo-transparent-cropped.png" alt="Geecom Learning logo" />
          <div class="footer-brand-name">GEECOM<span>Learning</span></div>
        </div>
        <div class="footer-columns">
          <nav class="footer-nav-col" aria-label="Site pages">
            <p class="footer-col-head">Navigation</p>
            <a href="index.html">Home</a>
            <a href="services.html">Services</a>
            <a href="process.html">Process</a>
            <a href="pricing.html">Pricing</a>
            <a href="resources.html">Resources</a>
            <a href="contact.html">Contact</a>
            <a href="about.html">About</a>
          </nav>
          <nav class="footer-nav-col" aria-label="Legal and contact">
            <p class="footer-col-head">Contact &amp; Legal</p>
            <a href="mailto:hello@geecomlearning.com">hello@geecomlearning.com</a>
            <a href="privacy.html">Privacy Policy</a>
            <a href="terms.html">Terms and Conditions</a>
            <a href="https://www.linkedin.com/company/geecom-learning" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </nav>
        </div>
      </div>
      <div class="footer-newsletter">
        <p class="footer-col-head">Stay in the loop</p>
        <form class="footer-newsletter-form" action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="access_key" value="03b3a751-a45a-416a-86d1-c461a026103c" />
          <input type="hidden" name="subject" value="Newsletter Signup - Geecom Learning" />
          <input type="hidden" name="redirect" value="false" />
          <input type="email" name="email" placeholder="Your work email" required autocomplete="email" />
          <button type="submit">Subscribe</button>
        </form>
        <p class="footer-newsletter-note">No spam. Unsubscribe any time.</p>
        <p class="footer-newsletter-success" style="display:none;">You're in. Watch your inbox.</p>
      </div>
      <div class="footer-bottom">
        <p>© 2026 Geecom Learning. All rights reserved. Vancouver, British Columbia, Canada.</p>
      </div>
    </div>
  </footer>

  <script>
    const toggle = document.querySelector('.nav-toggle');
    const menu = document.getElementById('mobile-menu');
    toggle.addEventListener('click', function () {
      const open = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!open));
      menu.classList.toggle('open', !open);
      this.innerHTML = !open
        ? `<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`
        : `<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="19" y2="6"/><line x1="3" y1="12" x2="19" y2="12"/><line x1="3" y1="18" x2="19" y2="18"/></svg>`;
    });
  </script>
  <script src="newsletter.js"></script>
</body>
</html>
```

---

# PART 8 — CONTENT WRITING RULES

## Article Length

**Minimum: 1,200 words. Target: 1,500–2,000 words.**

Shorter articles do not rank. Longer is fine if the content earns it — do not pad with filler sentences to hit a word count.

## Mandatory Article Sections

Every article must contain all of these sections in this order:

1. **BLUF block** — "The short answer:" — 2–3 sentences, the core answer upfront
2. **Stats list** — 2–4 bullet points with sourced data
3. **Body sections** — minimum 4 H2-level sections, each with at least 2 paragraphs
4. **FAQ block** — minimum 3 questions, maximum 5
5. **CTA block** — always links to `contact.html` as primary action
6. **Share block** — LinkedIn share link

## H1 Rules

- Include the primary keyword **exactly** as someone would type it into Google
- No more than 65 characters
- Not a question (save questions for FAQ items)
- No punctuation at the end

**Good:** `How Much Does eLearning Development Cost?`
**Bad:** `The Complete Guide to Understanding Your eLearning Budget in 2026!`

## H2 Rules

- Each H2 is a distinct sub-topic of the article
- Written as clear, functional labels — not clever headlines
- No more than 8 words
- At least 4 H2 sections per article

## Paragraph Rules

- Maximum 4 sentences per paragraph
- One idea per paragraph
- No paragraph longer than 5 lines on desktop
- No consecutive paragraphs starting with the same word

## Lists

Use `<ul>` for unordered information. Use `<ol>` for steps or ranked items. Do not use lists as a substitute for writing — if a point needs context, write a sentence, not a bullet.

Limit: no more than one list per H2 section.

## Numbers and Data

- Always link to the original source when citing a statistic — not a third-party article that cited it, the original publication
- Use Canadian dollars (CAD) for price references unless the data is specifically from a US-only source (in which case note "USD")
- Write out numbers under ten in prose ("three months," not "3 months")
- Use numerals for percentages, dollar figures, and anything over ten ("82%," "$15,000," "12 months")

---

# PART 9 — SEO CHECKLIST

Complete this checklist for every article before delivery.

**Page structure**
- [ ] H1 contains the primary keyword exactly
- [ ] H1 is the only H1 on the page
- [ ] `<title>` includes the primary keyword
- [ ] `<meta name="description">` is under 160 characters
- [ ] `<link rel="canonical">` matches the exact published URL
- [ ] Filename is lowercase kebab-case and matches the primary keyword phrase

**Internal links**
- [ ] At least 3 internal links within the article body
- [ ] At least one link to `contact.html`
- [ ] At least one link to a relevant service page (e.g., `elearning-development.html`, `compliance-training.html`, `onboarding-videos.html`)
- [ ] At least one link to `resources.html` or to another resource article (cross-linking strengthens topical authority)

**External links**
- [ ] At least 2 links to authoritative external sources (government sites, academic institutions, recognised industry bodies, named research publications)
- [ ] Every statistic links to the **original source**, not a third-party article that re-cited it
- [ ] All external links use `target="_blank" rel="noopener noreferrer"`
- [ ] No external links go to competitor websites

**Structured data**
- [ ] Organisation schema is present
- [ ] BreadcrumbList schema is present and matches the visible breadcrumb
- [ ] Article schema is present with all expanded fields (`inLanguage`, `articleSection`, `wordCount`, `keywords`, `about`, `audience`, `mainEntityOfPage`)
- [ ] `datePublished` and `dateModified` are set in ISO 8601 format
- [ ] FAQPage schema is added when the FAQ block is present (one Question per FAQ item)

**Technical**
- [ ] Page validates at [validator.w3.org](https://validator.w3.org) with no errors
- [ ] Schema validates at [validator.schema.org](https://validator.schema.org)
- [ ] All images (if any) have descriptive `alt` attributes
- [ ] No broken links
- [ ] After publishing, add the article URL to `sitemap.xml` (priority 0.85, monthly changefreq)

**Site-wide updates after publishing**
- [ ] Add a card for the article at the **top** of the resource grid in `resources.html`
- [ ] Add the article URL to the `ItemList` JSON-LD on `resources.html` and update positions
- [ ] Add the URL to `sitemap.xml` with today's `lastmod` date

### FAQ Schema (Add to Structured Data When FAQ Block Is Present)

Add this object to the `@graph` array in the JSON-LD block:

```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[Question text exactly as it appears in the H3]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Answer text exactly as it appears in the paragraph]"
      }
    }
  ]
}
```

Add one `Question` object for each FAQ item.

---

# PART 10 — GEO (GENERATIVE ENGINE OPTIMIZATION)

Geecom articles must be readable by humans **and** by AI search engines (ChatGPT, Perplexity, Google AI Overviews, Bing Copilot, Claude). The goal of GEO is to be **cited as a source** when one of these engines answers a question on our topic. Citation rate is more valuable than impressions for our audience — HR managers and operations directors increasingly start research in AI tools, not Google.

Research from Princeton/IIT Delhi (KDD 2024) identified the four signals that most increase AI citation rate: **statistics (+33.9%), expert quotes (+32%), authoritative citations (+30.3%), and fluent writing (+30%)**. The structure of every Geecom resource article is built around these four signals.

## 10.1 — The Direct Answer Block (BLUF)

The `article-bluf` block is mandatory and must be the **first** content element after the H1. It exists for one reason: to give AI engines a self-contained, extractable answer in the first 40-60 words of the page.

**Rules:**
- Open with the literal phrase **"The short answer:"** in bold
- 2-3 sentences, maximum 60 words total
- Must answer the article's core question completely without requiring the rest of the page
- No marketing language, no preamble ("In today's...", "When it comes to...")
- Includes the article's primary entity name in the first sentence

**Test:** Read only the BLUF block aloud. If a stranger could answer the article's headline question from those 60 words, it is correctly written.

## 10.2 — Statistics (Highest GEO Impact)

Every article must include **at least three statistics with named sources**, presented as the `article-stats` list near the top.

**Each statistic must include:**
- A specific number (percentage, dollar figure, count, or year-over-year change)
- The named publisher (not "studies show" — name the organisation)
- A linked URL to the original publication
- The year the data was published

**Example (good):**
> 88% of organisations are concerned about employee retention, and learning opportunities are survey respondents' number one retention strategy ([LinkedIn Learning, 2025](https://learning.linkedin.com/resources/workplace-learning-report))

**Example (bad — do not write):**
> Many organisations are worried about retention, and most see training as the answer.

Stats density inside the body should be roughly **one named statistic per H2 section**. Vague claims ("research suggests", "studies indicate") are treated as opinions by AI engines and reduce citation rate.

## 10.3 — Expert Commentary Pull-Quote

Every article should include **one** expert pull-quote block (`<blockquote class="article-pullquote">`) — typically placed after the article's most important data-heavy section.

The quote is **Geecom Learning's own first-person commentary** on the data, formatted as a quotable callout. This serves three purposes:

1. **GEO citation signal** — AI engines preferentially extract attributed quotes; Geecom becomes the named source.
2. **Information gain** — adds Geecom's interpretation of public data, not just rephrasing.
3. **Brand voice anchor** — gives every article a sentence that is unmistakably Geecom.

**Rules:**
- Open with the label "Our view, from working with Canadian SMBs" (or a near variant)
- 2–4 sentences in body
- Must be **self-contained** — readable as a standalone quote without surrounding context
- Attributed in the `<footer>` to "— Geecom Learning, Vancouver, BC"
- **Do not invent quotes from real third-party experts.** Only quote Geecom's own perspective, or quote a directly-cited published source verbatim with full attribution.

## 10.4 — Heading Hierarchy as Query Map

H2 and H3 headings should mirror the questions a real reader would type into ChatGPT or Google. AI engines use headings to locate the relevant section of a long page.

**Good H2:** "How does an SMB respond to the skills crisis?"
**Acceptable H2:** "The skills crisis, translated"
**Poor H2:** "Section 3 — Considerations" or "More information"

Aim for at least half the H2s in any article to be either questions or definitive answer-style statements ("Why X matters", "What career development champions actually do").

## 10.5 — FAQ Block in Real User Language

The FAQ block at the end of every article is a **GEO instrument first, content section second**. The questions must be the literal phrasing a person would type into a search box or AI chat — not phrasing rewritten for elegance.

**Rules:**
- Minimum 3 FAQ items, target 4–5
- Each H3 question must be 5–15 words
- Each answer must be 2–4 sentences and **completely self-contained** — must not refer to "as discussed above" or other FAQ items
- Each answer must repeat the entity name (no pronouns) so the answer extracts cleanly
- Each FAQ item appears **both** as visible HTML and inside the `FAQPage` JSON-LD schema, with identical wording in both

**Good FAQ question:** "How do you measure career development without an LMS?"
**Bad FAQ question:** "Considerations around measurement infrastructure"

## 10.6 — Quotable, Self-Contained Sentences

Write key sentences so they make sense **out of context**. AI engines pull individual sentences and short paragraphs into answers. A great GEO sentence reads like a tweet someone could screenshot.

**Good:** "Career development champions are 36% of organisations and 100% of them report achieving positive business results."
**Bad:** "As mentioned earlier, this group of organisations performs better on the metrics we discussed."

## 10.7 — Freshness Signals

AI engines prefer recent content and explicitly demote stale pages.

- Always include the publish month and year in the visible byline (`article-meta-row`)
- Always include "Last updated: [Month Year]" beneath the byline (`article-updated`)
- Reference current-year data where possible ("as of 2026", "in the 2025 report")
- Update `dateModified` in the JSON-LD whenever an article's content is materially revised

## 10.8 — Entity Clarity (Name Things Explicitly)

AI engines match by named entity. Pronouns and vague references break that matching.

- Never call Geecom Learning "the company" or "we" in opening paragraphs of major sections — name "Geecom Learning" at least once per major section
- Use the full publication name on first reference ("LinkedIn Workplace Learning Report 2025"), then the short form ("the report")
- Always name the geography ("Canadian SMBs", "small and mid-sized employers in Canada") — do not assume the reader infers it

## 10.9 — GEO Acceptance Test (Run Before Delivery)

Open ChatGPT or Perplexity and ask the article's primary search query (e.g., "What does the 2025 LinkedIn Workplace Learning Report mean for small businesses?"). Then ask: **"What sources are you citing?"**

This is not a pass/fail test before publishing — citations take weeks to appear after a page is indexed. The purpose is to read the AI's answer and ask: *if our article had been in the index, would it plausibly have been cited?* If the answer is no, the article needs more statistics, named sources, or quotable sentences.

---

# PART 11 — LINKEDIN PROMOTION & POST BLURBS

Every resource article must be supported by a set of LinkedIn posts published from the **Geecom Learning Company Page** (not personal profiles). Promotion is part of the article delivery, not a separate task.

## 11.1 — Standard Promotion Bundle Per Article

For each new resource article, write **3 LinkedIn posts** designed to be released across three consecutive weeks. Two-part series get **6 posts total** (3 per part).

Posts are delivered as a single markdown file named:
`linkedin-posts-[short-article-slug].md`

Place this file in the project root alongside the HTML article.

## 11.2 — Post Structure (Mandatory Format)

Every post follows this exact structure:

```
## Post [number] — [Internal title for tracking]

[Hook sentence — 1 line, ideally a specific number or surprising claim from the article]

[Body — 3–5 short paragraphs of 1–3 sentences each. Each paragraph adds a fact or insight.]

[Closing line — single sentence that points to the article without using the URL]

[Hashtags — bottom line, 4 tags]

---
**First comment:** [Article URL]
```

## 11.3 — Mandatory Posting Rules

These are non-negotiable. Violations damage page reach significantly.

- **Never put the article URL in the post body.** LinkedIn's algorithm penalises external links in body copy. The URL goes in the **first comment**, posted by the page admin within 60 seconds of publishing the post.
- **Post from the company page**, then have team members reshare from personal profiles to extend reach.
- **No emojis.** No "🚀", no "💡", no "👇 Link in comments". Plain prose.
- **No clickbait openers.** Ban list: "Hot take:", "Unpopular opinion:", "I'll say it:", "Nobody is talking about this, but…", "PSA:", "Plot twist:".
- **Cadence: one post per week** for a single article (3 weeks total). Two-part series run for 6 weeks.
- **Best posting time:** Tuesday or Wednesday at 9:00 AM Pacific Time for Canadian B2B engagement.

## 11.4 — Hashtag Rules

Each post ends with **exactly 4 hashtags**, in this composition:

| Slot | Type | Example |
|---|---|---|
| 1 | Large industry tag | #LearningAndDevelopment, #HumanResources |
| 2 | Mid-size topical tag | #EmployeeRetention, #InternalMobility, #LeadershipDevelopment |
| 3 | Mid-size topical tag (different angle) | #TalentStrategy, #PeopleAnalytics, #LDStrategy |
| 4 | Canadian / SMB tag | #CanadianBusiness, #CanadianHR, #SmallBusinessLeadership |

Do not exceed four hashtags. Do not put hashtags inline in the body.

## 11.5 — GEO Considerations for LinkedIn Posts

LinkedIn posts are crawled by AI engines and surface in some AI-generated answers. Apply these GEO rules to post copy:

- **Lead with a specific statistic from the article**, not a generic observation. ("Only 15% of employees say their manager helped them build a career plan in the last six months." not "Career development is broken.")
- **Name the source publication in the body** ("LinkedIn's 2025 Workplace Learning Report"). Do not assume readers will infer it from context.
- **Each post should contain at least one quotable, standalone sentence** — written so it can be screenshot or quoted on its own without context.
- **Mention the geographic context** ("Canadian SMBs", "small and mid-sized employers in Canada") at least once per post.

## 11.6 — Post Bundle Document Format

Every LinkedIn post bundle file must include, at the top of the document:

1. A title header naming the article series
2. A "Posting rules" section (copy from this guidelines doc)
3. The full set of posts, formatted per Section 11.2
4. A suggested posting schedule table at the bottom

See the existing file `linkedin-posts-workplace-learning-report-2025.md` for a complete reference.

---

# PART 12 — EXISTING ARTICLES FOR REFERENCE

Read all five existing articles before writing a new one. They set the standard for tone, structure, and depth.

| Article | File | Primary keyword |
|---|---|---|
| Workplace Learning Report 2025 (Part 1) | `workplace-learning-report-2025-canadian-smbs.html` | workplace learning report 2025 Canadian SMBs |
| Career Development Without an L&D Team (Part 2) | `career-development-without-an-ld-team.html` | career development without an L&D team |
| eLearning Cost Guide | `how-much-does-elearning-development-cost.html` | how much does elearning development cost |
| Outsource L&D | `should-you-outsource-ld.html` | should you outsource learning and development |
| Psychological Health & Safety | `psychological-health-and-safety-in-the-workplace.html` | psychological health and safety in the workplace |

The two Workplace Learning Report articles are the most up-to-date examples of the **expanded SEO + GEO patterns** described in Parts 9 and 10. Use them as the reference template for any new article.

---

# PART 13 — DELIVERY REQUIREMENTS

## What to Submit

When delivering a completed article, submit:

1. **The HTML file** — named correctly, complete with all head and footer blocks
2. **A plain text version** of the article body only (for editorial review)
3. **A LinkedIn post bundle** (`linkedin-posts-[slug].md`) per Part 11
4. **A short notes document** listing:
   - Primary keyword targeted
   - All external sources cited (name, URL, and what data was pulled from them)
   - The expert pull-quote text and where it was placed
   - Any sections where you were uncertain about accuracy or scope
   - Suggested internal link destinations you could not verify
5. **Updates to `resources.html`** (new card at the top of the grid + ItemList JSON-LD position update)
6. **Updates to `sitemap.xml`** (new URL with today's `lastmod`)

## What Not to Submit

- Draft or partial files
- Files with placeholder text left in (no "[INSERT STAT HERE]")
- Files missing the FAQ block, CTA block, share block, BLUF block, expert pull-quote, BreadcrumbList schema, or expanded Article schema
- Articles under 1,200 words
- LinkedIn posts with the URL in the body
- Articles that do not visibly mention "Canadian SMBs" or "Canada" at least twice in the body

## Contact for Questions

**hello@geecomlearning.com**
Geecom Learning | Vancouver, BC | geecomlearning.com

---

*These guidelines are maintained by Geecom Learning. Do not share externally beyond the commissioned project. Last reviewed: May 2026.*
