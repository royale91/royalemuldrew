# Royalemuldrew.com — Design Spec

**Date:** 2026-06-17
**Owner:** Royale Muldrew
**Status:** Approved direction, pending final spec review

## 1. Concept

A single-page, futuristic personal site — "the coolest online résumé." The organizing
metaphor is the hero artwork: an illustration of Royale in a suit, his mind opened into a
factory of "departments" (business consulting, credit repair, clothing, factory, app
building, trading, crypto). The whole site is a walk through that mind. The through-line:
**a self-taught operator from Los Angeles who has worked behind the scenes for years —
building, trading, growing, developing — now multiplied by AI.**

**Positioning line:**
> Royale Muldrew — self-taught problem solver out of Los Angeles. For years I've worked
> behind the scenes for clients: building, trading, growing, developing. Credit, capital,
> code, clothing, and the markets — every move sharpened by AI. One mind, every business.

**Primary action:** Book a Call with Royale.

## 2. Voice & Tone

- Confident, understated, operator-grade. Not influencer-loud, not corporate-stiff.
- Self-made / self-taught / problem-solver framing throughout.
- "Behind the scenes for years" = credibility. LA roots = identity.
- The differentiator that ties every venture together: **Royale + AI = a one-person
  operation that moves like a full team and ships fast.**

## 3. Aesthetic

- **Theme:** near-black background (#08090C-ish), premium Tesla/Apple restraint.
- **Accent:** electric cyan / green tech-glow. **No gold.**
- **Typography:** large, confident, clean sans (hero treatment echoing "MEET ROYALE
  MULDREW"). Generous spacing.
- **Motion:** subtle — parallax on hero, glow/lift on cards, fade-up on scroll. Tasteful,
  not busy.
- **3D-ready:** hero is built in a swappable container so a live Spline / Three.js scene
  can replace the static image later without a rebuild.

## 4. Tech Approach

- **Static site**: `index.html` + `styles.css` + light `main.js` (scroll reveal, nav).
- **Hosting:** GitHub Pages (same pattern as the owner's other sites, e.g.
  `royale91.github.io`).
- **Assets:** hero illustration at `assets/hero-royale.png` (owner to provide).
- **No backend** for v1. Contact form posts via a no-backend service (Formspree or
  `mailto:` fallback). Calendly/Cal.com embed slot reserved for when a link exists.

## 5. Page Structure (single-page scroll)

1. **Sticky pill nav** — `ROYALE MULDREW` (left) · What I Do · Work · About (center) ·
   **[ Book a Call ]** glowing button (right). Collapses to a menu on mobile.
2. **Hero** — full-bleed brain-factory image on dark. Headline "MEET ROYALE MULDREW,"
   positioning line, **Book a Call** (primary) + **See What I Do** (scroll) CTAs. Labels
   softly glow / parallax on scroll.
3. **What I Can Do — departments grid** — cards drawn from the hero's labels:
   - AI Consulting & Automation
   - App / Software Development
   - Business Consulting
   - Credit Repair
   - Manufacturing / Factory
   - Clothing
   - Stocks & Trading (Royale's indicator + trading group)
   - Crypto
   Each card: icon, title, one-line value prop, "Learn more →" (anchors now; links out as
   they become available).
4. **The "Me + AI" edge** — short section explaining the force-multiplier: self-taught
   operator + AI = ships full products/businesses solo.
5. **Selected Work** — showcase tiles for things built (placeholders now; real links
   plugged in incrementally).
6. **About Royale** — the LA, self-taught, behind-the-scenes story tying it all together.
7. **Book a Call** — large CTA section. Calendly embed if a link is supplied; otherwise a
   clean contact form (name / email / what they need).
8. **Footer** — socials row (Gmail / Instagram / X / etc.), email, © Royale Muldrew.

## 6. Components (isolation & responsibility)

- **`nav`** — sticky pill bar; one job: navigation + primary CTA. Independent of section
  content.
- **`hero`** — swappable media container (image now, 3D later) + headline/CTA overlay.
- **`departments-grid`** — data-driven from a single array of `{icon, title, blurb, href}`
  so ventures can be added/edited in one place.
- **`work-grid`** — same pattern: array of `{thumb, title, href}`.
- **`booking`** — either an embed (Calendly) or a form; one clearly bounded block.
- **`scroll-reveal` (main.js)** — IntersectionObserver utility; decorates any element with
  a reveal class. No coupling to specific sections.

## 7. Data / Content Owner Must Provide

- `assets/hero-royale.png` — the brain-factory illustration (re-drop; temp copy expired).
- Optional headshot/logo for nav.
- One-liners per department (drafts will be written; owner edits).
- Calendly/Cal.com link (optional; form used until then).
- Social handles + contact email.

## 8. Out of Scope (v1 — YAGNI)

- Live 3D scene (container is ready; scene comes later).
- CMS / blog.
- E-commerce / payments (link out to existing venture sites instead).
- Per-venture deep pages (sections + outbound links suffice for v1).

## 9. Success Criteria

- Loads fast, looks premium on mobile and desktop.
- Hero communicates "one mind, every business" in under 3 seconds.
- A visitor can book/contact in one click from any scroll position (sticky CTA).
- Adding a new venture or work item = editing one array entry.
- Deployable to GitHub Pages with no backend.
