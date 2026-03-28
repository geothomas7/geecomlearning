# Geecom Learning

A static marketing website for Geecom Learning, a Learning and Development (L&D) content studio and onboarding video production company serving small and medium-sized businesses (SMBs), mid-market teams, and associations across North America. Based in Vancouver, British Columbia, Canada.

## Tech Stack

- **Languages:** HTML5, CSS3, Vanilla JavaScript
- **Frameworks:** None. Pure static site.
- **Backend:** None. Contact form uses `mailto:` links.
- **Build System:** None required.
- **Video:** Vimeo Player API for embedded portfolio videos with auto-pause at 35 seconds.

## Project Structure

```
/
├── index.html          # Homepage with hero, services overview, portfolio, testimonials, CTA
├── services.html       # Two-service model: bespoke project and L&D retainer
├── process.html        # Step-by-step engagement process
├── pricing.html        # Project-based pricing explanation and retainer overview
├── contact.html        # Contact form and booking CTA
├── terms.html          # Terms and Conditions (BC law, Vancouver jurisdiction)
├── privacy.html        # Privacy Policy (BC PIPA, PIPEDA)
├── styles.css          # All site styles using BEM-style naming
├── assets/
│   ├── logo-transparent-cropped.png   # Logo used in nav (auto-cropped from 500x500)
│   └── clients/                       # Client logos (ABMA, Superbeam, Olive Group, myCaptain, GEM-A)
├── CLAUDE.md           # Project guidelines and conventions
└── README.md           # Basic project description
```

## Running the Project

A Python HTTP server serves the static files on port 5000:

```
python3 -m http.server 5000 --bind 0.0.0.0
```

## Deployment

Configured as a **static** deployment with `publicDir: "."`.

## Copy and Content Conventions

- No em dashes or hyphens in prose. Use commas, periods, or colons instead.
- Abbreviations: expand on first use in body content, e.g. "Learning Management System (LMS)", "Experience API (xAPI)", "Sharable Content Object Reference Model (SCORM)", "Learning and Development (L&D)".
- Copyright year: 2026.
- Two service models: (1) bespoke project-based, (2) L&D monthly retainer at $3,000/mo presented as an active service.

## Legal Pages

- `terms.html`: Governed by laws of British Columbia and Canada. Dispute resolution in Vancouver, BC courts.
- `privacy.html`: References BC's Personal Information Protection Act (PIPA), SBC 2003, c 63; federal PIPEDA; and the Office of the Information and Privacy Commissioner for BC (OIPC BC).

## Brand

- Primary navy: `#132347`
- Gold: `#F5A623`
- Logo: `assets/logo-transparent-cropped.png` (cropped from original 500x500 with 60% whitespace removed)
