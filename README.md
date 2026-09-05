# aaravshandilya.github.io

Personal research & engineering portfolio for **Aarav Shandilya** — quantum
optimization, artificial intelligence, and computational biology.

Live site (once deployed): **https://aaravshandilya.github.io**

Built with React 19, Vite, Tailwind CSS v4, Framer Motion, and
React Three Fiber (the interactive QUBO energy-landscape visualization).

---

## Quick start

```bash
npm install
npm run dev       # local dev server, http://localhost:5173
npm run build     # production build -> dist/
npm run preview   # serve the production build locally
```

Requires Node.js 20+.

## Project structure

```text
src/
  components/     Reusable UI: Nav, Footer, cards, the QUBO visualization, etc.
  sections/       One file per page section (Hero, About, Research, ...)
  data/           All editable content lives here as plain JS objects/arrays.
                  Edit these files to update the site — no component code
                  needs to change for a content update.
  three/          Three.js/R3F pieces for the QUBO landscape (landscapes.js
                  holds the hand-authored "energy landscape" math).
  index.css       Tailwind v4 theme tokens (colors, light/dark surfaces).
public/
  documents/      Résumé PDF.
  images/         Profile photo, social-preview image, favicons.
  favicon/, site.webmanifest, robots.txt, sitemap.xml
.github/workflows/deploy.yml   GitHub Pages deployment via GitHub Actions
```

To update content — a new award, a changed job title, a new project — edit
the relevant file in `src/data/`. Nothing else needs to change.

## Design system

Colors are defined once in `src/index.css` under `@theme` (Tailwind v4's
CSS-based config) and as runtime CSS custom properties that flip with the
light/dark toggle:

| Token | Hex | Use |
|---|---|---|
| Deep olive green | `#3F4A35` | secondary surfaces / accents |
| Darker forest green | `#263126` | dark-mode alternate surface, cards |
| Near-black | `#101311` | primary dark background |
| Warm off-white | `#F4F0E6` | primary light background |
| Soft cream | `#E9E4D8` | light-mode alternate surface |
| Antique gold | `#C2A45D` | accent (brand color) |
| Emerald | `#10B981` | "active / positive" accent |

Dark mode is the primary experience (it's the default on first visit);
content sections alternate between two surface shades within whichever mode
is active for visual rhythm, while the hero, the QUBO Lab, the contact
section, and the nav bar stay a fixed dark "chrome" regardless of the
toggle — the same way a lot of editorial/product sites keep their hero dark
even when the rest of the page responds to a light/dark preference.

The gold/emerald accent colors are swapped for a darker, WCAG-AA-compliant
variant automatically when text sits on a light surface (see the `--accent`
/ `--accent-positive` custom properties in `index.css`) — this was verified
with an automated `axe-core` pass across light and dark mode with 0 contrast
violations at the time of writing.

## The QUBO visualization

`src/components/QUBOVisualization.jsx` renders a hand-authored "energy
landscape" (`src/three/landscapes.js`) as a 3D surface, with small spheres
descending it via a simple gradient-descent-plus-noise rule (temperature =
noise magnitude, speed = step size). It is explicitly labeled in the UI as
an **interactive conceptual visualization** — it is not a rendering of a
real, solved QUBO instance from any of the research below, and the code
comments say so. It:

- lazy-loads (code-split via `React.lazy`) so the ~250 KB gzipped
  three.js/R3F chunk never blocks first paint of the rest of the page;
- respects `prefers-reduced-motion` (auto-rotation and particle motion are
  disabled);
- falls back to a static SVG (`StaticLandscape.jsx`) on devices that look
  low-powered (coarse pointer + small screen, or `navigator.connection.saveData`)
  or when WebGL isn't available at all.

## Contact form

There's no backend. `src/data/contact.js` has a `formspreeEndpoint` field —
paste a [Formspree](https://formspree.io) endpoint there to get real
async form submissions with success/error states. Left blank (the default),
the form instead opens the visitor's email client with the message
pre-filled and addressed to Aarav's email — this is disclosed in the UI
under the submit button, so the form never pretends to submit something it
silently drops.

## Deploying to GitHub Pages

This repo is set up as a **user/organization site**
(`aaravshandilya.github.io`), which is why `vite.config.js` uses
`base: "/"` rather than a repo-name subpath.

1. Push this repo to `github.com/aaravshandilya/aaravshandilya.github.io`
   with the default branch named `main`.
2. In the repo's **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the Actions tab) —
   `.github/workflows/deploy.yml` builds with `npm ci && npm run build` and
   publishes `dist/` via `actions/deploy-pages`.
4. The site will be live at `https://aaravshandilya.github.io` after the
   first successful run (may take a minute or two to propagate).

No secrets or environment variables are required for the default build.

### Custom domain (optional)

Not configured. To add one: create `public/CNAME` containing the domain,
point its DNS at GitHub Pages per
[GitHub's docs](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site),
and set it in Settings → Pages.

## Content & asset audit

Everything on the site is sourced from Aarav's résumé (`public/documents/aarav-shandilya-resume.pdf`),
the live SSRN listing for the platinum-chemotherapy paper, and his public
GitHub profile — fetched and verified while building this site. Nothing
below was invented; where source material wasn't available, it was left out
rather than guessed. Open items, roughly in order of importance:

- **Research paper PDF** — not supplied. The Publications section links to
  the live SSRN posting (`papers.ssrn.com/sol3/papers.cfm?abstract_id=7335979`)
  instead of hosting a local PDF. Add the actual file to
  `public/documents/` and wire up a local "PDF" button if Aarav wants one.
- **Supply-chain / TSP paper** — the résumé describes a paper co-authored
  with ASU/Dell on quantum annealing for the Traveling Salesman Problem, but
  no public posting of it was found (only one paper appears under Aarav's
  SSRN author page). It's presented as **active research**, not a
  publication, to avoid overstating its status — update this once it's
  actually posted somewhere.
- **Phone number** — the résumé includes one; it's excluded from the public
  site by default (only email is shown). Confirm if that's the intended
  choice.
- **References** (professors/teachers listed on the résumé) — not published
  on the site. Publishing other people's personal/work emails on a public
  page they haven't necessarily agreed to isn't standard portfolio practice;
  a "references available on request" line can be added if wanted.
- **Organization logos** — supplied official assets for Arizona State
  University, Dell Technologies, Grand Canyon University, Non-Trivial, and
  the University of Oxford are displayed in the research-affiliations grid
  (`src/data/interests.js` → `affiliations`).
- **Project/research imagery** — no diagrams, screenshots, or charts were
  supplied for the supply-chain, pangenome, or platinum-QML work, so none
  were fabricated (no invented runtime charts, matrices, or result figures).
  The DMEF imaging-analysis project mentioned in the original brief isn't in
  the résumé at all and was left out entirely rather than guessed at.
- **Google Scholar, ORCID, Instagram/X** — no links supplied; these are
  left blank in `src/data/socials.js` and simply don't render (the
  `SocialLinks` component only shows links that are non-empty).
- **Class rank** — not on the résumé; not displayed. GPA, PSAT, and SAT are
  shown as given.
- **"Current Percentile: 99.97%"** — the résumé lists this directly under
  the SAT score without saying explicitly what it's a percentile of; it's
  not displayed as a standalone stat to avoid mis-labeling it. Clarify and
  add it back if wanted.
- **Custom domain, analytics, license** — none configured; add per Aarav's
  preference (see "Custom domain" above; analytics would mean adding a
  script tag to `index.html`; a LICENSE file was intentionally omitted
  until Aarav picks one).
- **Headshot** — the supplied photo is a casual outdoor photo, not a studio
  headshot on a plain background. It's used as-is (per instruction) at
  `public/images/profile/`; swap in a different one the same way if a more
  traditional headshot becomes available later — `aarav-headshot-original.jpg`
  is kept unmodified so re-cropping doesn't require a new upload.

## Accessibility & QA

- Automated `axe-core` pass (via Playwright) across the full page, both
  color themes, and mobile viewport: **0 violations**.
- Keyboard navigation, focus states, and `prefers-reduced-motion` are
  respected throughout (see `src/hooks.js` and `Reveal.jsx`).
- All images have descriptive `alt` text; the mobile nav is a fully
  keyboard/screen-reader-accessible disclosure menu.
- No console errors, no broken internal links or images (verified against
  a production build).

## License

No license has been added yet — add one once Aarav has picked one (MIT is
a common default for a personal site's source code).
