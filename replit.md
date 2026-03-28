# Geecom Learning

A static marketing website for Geecom Learning, an e-learning course and onboarding video production company serving SMBs, mid-market teams, and associations across North America.

## Tech Stack

- **Languages:** HTML5, CSS3, Vanilla JavaScript
- **Frameworks:** None — pure static site
- **Backend:** None — contact form uses `mailto:` links
- **Build System:** None required

## Project Structure

```
/
├── index.html       # Main (and only) page — all sections included
├── styles.css       # All site styles using BEM-style naming
├── assets/          # Static assets (logo.png referenced but may be missing)
├── CLAUDE.md        # Project guidelines and conventions
└── README.md        # Basic project description
```

## Running the Project

A Python HTTP server serves the static files on port 5000:

```
python3 -m http.server 5000 --bind 0.0.0.0
```

## Deployment

Configured as a **static** deployment with `publicDir: "."`.

## Notes

- The `assets/logo.png` file is referenced but missing from the repository, causing a 404 in the browser console. This is a pre-existing issue.
- No external dependencies or package manager required.
