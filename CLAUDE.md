# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Static marketing website for The Code Witches (thecodewitches.de) — no build system, no package manager, no compilation step. Pure HTML, CSS, and vanilla JS.

To preview locally, open `index.html` in a browser or serve with any static file server:
```bash
python3 -m http.server 8080
```

## Architecture

The site is a single-page design with anchor-based navigation. All content lives in `index.html`; `claude-mgr.html` is a standalone page showcasing a bash script unrelated to the main site.

**CSS structure** — split by concern, all loaded in `index.html`:
- `styles/main.css` — CSS variables (palette, typography, spacing), global resets, nav/header/footer, base `.section` fade-in styles
- `styles/shared.css` — reusable components: `.content`, `.columns`, `.column__left/right`, `.section__title`, link accents; also contains responsive breakpoint rules for these
- `styles/hero.css`, `about.css`, `services.css`, `clients.css`, `contact.css`, `modal.css` — section-specific styles

**JS** (`scripts/main.js`) handles:
- IntersectionObserver fade-in for `.section` elements (adds `.visible` class)
- Active nav link tracking on scroll
- Smooth scroll on nav click
- About section image slide on column hover (desktop ≥1025px only)
- Video autoplay for the contact section looping video
- Google Calendar scheduling popup (hidden `.calendar-btn` div + `[data-calendar-trigger]` elements)
- Modal open/close for AGB and Impressum

`scripts/impressum.js` renders contact/legal info onto a `<canvas>` to avoid email/address scraping.

## Design system

- **Font**: Lexend (Google Fonts), weights 100/200/400 via CSS vars `--font-weight-light/normal/bold`
- **Color palette** (defined in `main.css :root`): `--bg: #fff7e5`, `--primary: #ffc255`, `--secondary: #007c7a`, `--brand: #5a4fcf`, `--text: #0a1a1a`, `--muted: #5e5c64`
- **Global text style**: `text-transform: lowercase` is set on `body` — all visible text renders lowercase
- **Breakpoints**: `≤992px` mobile (nav collapses, padding/font changes), `≤1024px` tablet (columns stack vertically), `≥1025px` desktop (hover effects active)
- **Section layout**: each `<section>` uses `.section` + `.section__<name>` classes; `.content` constrains text width; `.columns` creates the split two-column blocks used in About
