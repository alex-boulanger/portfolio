# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: the hiring side — technical recruiters, engineering managers, and founders evaluating Alex Boulanger for a full-stack engineering role. They arrive from a CV, a link in an application, LinkedIn, or GitHub. They are scanning, often on a phone, often with other candidates open in adjacent tabs, and they are deciding within seconds whether to keep reading or move on.

Their job: establish quickly that this is a credible senior full-stack engineer, then get to the CV or a way to make contact.

Secondary (not a design driver): peers and the general internet, who may encounter the site as a link rather than as an evaluation.

## Product Purpose

A personal site for Alex Boulanger — an engineer's professional front door. It exists to convert an evaluator's attention into a CV read or an inbound contact.

Success is a visitor reaching cv.alex-boulanger.dev, GitHub, or LinkedIn. Failure is a visitor who bounces without knowing what Alex does.

## Positioning

An engineer whose site is itself the work sample. The interface is hand-built rather than templated — a real-time ASCII flowfield, a decoding-glyph link treatment, no framework UI kit — so the craft claim is demonstrated in the artifact rather than asserted in copy. A neighboring candidate site cannot truthfully copy this, because the evidence is the page being viewed.

## Operating Context

- Encountered as a link, rarely as a destination. First contact is usually a single viewport, frequently mobile.
- The visit is short and comparative — the reader is triaging a stack of candidates.
- The site is one node in a set: this landing → cv.alex-boulanger.dev (the CV) → GitHub → LinkedIn.
- Written in English for one consistent, maintainable public voice.

## Capabilities and Constraints

- Astro 7 static site, pnpm, Node ≥ 22.12. No UI framework or CSS framework in the dependency tree.
- The site has one English route tree with no internationalisation layer.
- Landing copy lives in `src/content/landing/home.md`; frontmatter holds title, description, and outbound links.
- Personal project copy lives in `src/content/personal-projects`. `/personal-projects` exposes Serein Devices, Framefield, and Pen Plotter.
- Long-form writing lives in a content collection at `/writing`.
- Client-side routing via `ClientRouter`; the background canvas is `transition:persist`ed so navigation never restarts it.
- Dark scheme only — `color-scheme: dark` is declared, and there is no light mode.
- The page does not scroll; `html, body { overflow: hidden }` and a `100dvh` main are load-bearing to the current single-viewport design.
- Runs a continuous `requestAnimationFrame` canvas animation, so battery and low-power devices are a real consideration.
- `prefers-reduced-motion` is already honored for entrance animations and the link scramble (not yet for the background field).

**Open decisions — do not resolve by invention:**

- `/works` still exists as an empty parked route and is not linked.
- Future writing is added only when there is a substantive artifact; the section must not be padded to resemble a publication cadence that does not exist.

## Brand Commitments

- Name: **alex boulanger**, set lowercase throughout.
- English is the site's only authored language. Do not add translation infrastructure unless the product direction explicitly changes. (`/works` is parked and unlinked.)
- Voice: first person, lowercase, plain, unembellished. Short declarative sentences. No marketing register, no superlatives, no exclamation.
- Real domains in use: `alex-boulanger.dev` (this site), `cv.alex-boulanger.dev` (CV).

## Evidence on Hand

Real and available:

- **cv.alex-boulanger.dev** — the CV. Currently the only substantive artifact this site can point to.
- **GitHub** — github.com/alex-boulanger.
- **LinkedIn** — linkedin.com/in/alex-boulanger.
- **Framefield** — a shipped personal image glitcher at framefield.alex-boulanger.dev.
- **Pen Plotter** — a published case study backed by the generative plotting repository and finished physical work.
- **The site's own flowfield and glitch-link work** — genuinely hand-built, and therefore usable as a demonstration of craft.

Confirmed facts about Alex: full-stack developer, six years of experience building products end to end, currently working in healthcare. Outside work: bike, trail running, music, generative art. Moving to Brussels soon — not yet based there. Self-describes as "developer", not "engineer"; keep that wording in copy.

Absences that future work must not fabricate: there are **no** case studies, client names, employer names, testimonials, metrics, press mentions, or photographs. Do not invent them, and do not build a layout whose shape presumes them.

## Product Principles

1. **The artifact is the argument.** Craft is demonstrated by the page, not claimed in copy. Anything that reads as a template weakens the only real proof on offer.
2. **Respect the triage.** The reader is comparing candidates and has seconds. Who Alex is and where to go next must land in the first viewport, before any effect resolves.
3. **Never outrun the evidence.** With only a CV to point at, the design must be honest about its own thinness rather than padding it with invented substance.
4. **One maintained voice.** English is the single source of truth; avoid duplicate content branches that make small updates expensive.
5. **Restraint is the register.** One accent color, one typeface, lowercase, no ornament that isn't doing work. The effects earn their place by being real, not by being loud.
6. **Writing starts from evidence.** Case studies connect shipped artifacts, source code, and honest process notes. They do not inflate a project into a generic tutorial or invent missing history.

## Accessibility & Inclusion

No externally imposed standard was established. Product-specific requirements that follow from the above:

- Content must be fully readable and every destination reachable with the animation absent — the canvas is decoration and must never be load-bearing.
- `prefers-reduced-motion` must be honored across all motion, including the background field.
- The evaluator is frequently on a phone; touch has no hover, so nothing may depend on a hover state to be discoverable.
- Text must clear contrast minimums against a moving background, not just against the flat `--bg` value.
