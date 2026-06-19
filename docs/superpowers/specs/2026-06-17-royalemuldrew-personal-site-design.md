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

## 3. Experience & Aesthetic (awwwards-grade 3D)

Target quality bar: awwwards portfolio winners. This is a **real WebGL 3D experience**, not
a flat page with effects.

- **Theme:** near-black (#08090C-ish), premium Tesla/Apple restraint.
- **Accent:** electric cyan / green tech-glow. **No gold.**
- **Typography:** large, confident, clean sans; oversized hero type with kinetic reveal.
- **Signature 3D moment — "Enter the Mind":** the hero is a live WebGL scene. The
  brain-factory concept becomes interactive — a floating 3D head/portrait of Royale with
  the "departments" as glowing 3D modules orbiting/embedded above it. Mouse moves the
  camera (parallax); scroll flies the camera through the scene, moving department to
  department. Implementation can be (a) a 3D model of the departments, or (b) the existing
  illustration mapped onto layered/displaced planes with depth, particles, and a custom
  shader glow — chosen at plan time based on asset availability.
- **Scroll = camera/story:** GSAP ScrollTrigger drives a scroll-told narrative; each
  department section is a "stop." Smooth inertia scrolling via Lenis.
- **Signature interactions:** custom cursor, magnetic buttons, kinetic text reveals,
  WebGL grain/noise + bloom post-processing, page-load intro animation.
- **Performance budget:** 60fps on modern laptops; graceful 2D fallback on low-power /
  reduced-motion / mobile (static hero image, CSS transitions instead of WebGL).
- **Accessibility:** honors `prefers-reduced-motion`; all content reachable without the
  3D layer.

## 3.5 awwwards Patterns We're Adopting

Studied current awwwards portfolio honorees (Hiroto Sato, Pacôme Pertant, James
Breedlove, Gustaf Furusten, Playfight). The shared winning formula:

- WebGL/Three.js hero as the signature moment (the "wow" in first 2 seconds).
- GSAP **ScrollTrigger** turning the scroll into a guided story; **Lenis** smooth scroll.
- Custom cursor + magnetic/hover microinteractions.
- Kinetic, oversized typography with staggered reveals.
- Bold visual moments inside an otherwise minimal, dark, restrained layout.
- Page-load intro animation; section-to-section transitions.
- Single-page, content-focused, strong visual hierarchy.

We adopt all of the above, themed to the cyan/green-on-black brand.

## 4. Tech Approach

- **Stack:** **Vite** + **Three.js** (WebGL), **GSAP + ScrollTrigger** (scroll
  choreography), **Lenis** (smooth scroll). Vanilla JS modules — no React needed.
- **Why Vite (not a single hand-written file):** bundles Three.js/GSAP, gives fast dev with
  HMR, outputs a static `dist/` that still deploys to **GitHub Pages**. Best of both:
  award-grade tooling, static hosting.
- **Hosting:** GitHub Pages serves the built `dist/` (same account pattern as
  `royale91.github.io`). Build step: `npm run build`.
- **Assets:** hero illustration at `assets/hero-royale.png` (owner to provide); optional
  cut-out PNG of Royale (transparent bg) and per-department icons/labels for the 3D scene.
- **No backend** for v1. Contact form via Formspree (or `mailto:` fallback). Calendly /
  Cal.com embed slot reserved for when a link exists.

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
