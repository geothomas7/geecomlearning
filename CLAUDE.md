# CLAUDE.md — Geecom Learning

## Project overview
This is a single-page static marketing website for Geecom Learning, an e-learning course and onboarding video production company serving SMBs, mid-market teams, and associations across North America.

## File structure
- `index.html` — the entire one-page site (hero, services, industries, outcomes, process, proof, contact form)
- `styles.css` — all site styles
- `assets/logo.png` — logo image (referenced but may not exist yet)

## Tech stack
- Plain HTML5 and CSS3 — no build tools, no frameworks, no npm
- Vanilla JavaScript (inline in index.html) handles the contact form mailto submission
- No backend; the contact form submits via mailto to hello@geecomlearning.com

## How to run locally
Open `index.html` directly in a browser. No server or build step is needed.

## Key conventions
- Keep everything in a single `index.html` and `styles.css` unless told otherwise
- Use semantic HTML5 elements (section, article, header, nav, main, etc.)
- Maintain accessibility: aria labels, skip links, proper heading hierarchy
- The contact form uses mailto, not a backend — keep it that way unless asked to change
- BEM-style CSS class naming is used (e.g. `.site-header`, `.nav-links`, `.card-grid`)

## Contact email
hello@geecomlearning.com

## Sections on the page (in order)
1. Hero — headline + CTA
2. Services — eLearning, Onboarding Videos, Compliance, LMS/SCORM, Microlearning
3. Industries & use cases
4. Outcomes / stats
5. Process — 4-step: Discover, Design, Build, Launch & Improve
6. Proof — portfolio placeholders, testimonials, client logos
7. CTA band
8. Contact form

## Placeholder content to fill in later
- Portfolio items (currently "Portfolio item 1/2/3")
- Testimonials (currently "Testimonial placeholder 1/2/3")
- Client logos (currently "Logo 1/2/3/4")
- assets/logo.png (logo image file)
