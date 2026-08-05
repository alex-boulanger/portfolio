# alex-boulanger.dev

Personal site for Alex Boulanger. It is a small Astro static site used as a
professional front door: explain who Alex is, then send visitors to the CV,
GitHub, or LinkedIn.

The site is deliberately narrow: one handcrafted landing experience, English at
the root, French at `/fr`, and a couple of parked routes for future work.

## Stack

- Astro 7 static output.
- pnpm.
- Node `>=22.12.0`.
- No UI framework or CSS framework.
- Cloudflare Pages for production hosting.

## Project

- Pages live in `src/pages`.
- Shared layout and UI live in `src/layouts` and `src/components`.
- Landing copy lives in `src/content/landing/en.md` and
  `src/content/landing/fr.md`.
- Product and design intent live in `PRODUCT.md` and `DESIGN.md`.

## Commands

```sh
pnpm install
pnpm run build
pnpm run preview
```

For local development, prefer Astro background mode:

```sh
pnpm astro dev --background
pnpm astro dev status
pnpm astro dev logs
pnpm astro dev stop
```

## Deploy

Deploys run from GitHub Actions on pushes to `main` and manual dispatches.

- Platform: Cloudflare Pages.
- Pages project: `alex-boulanger`.
- Build output: `dist`, configured in `wrangler.toml`.
- GitHub environment: `prod`.
- Required `prod` secrets: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`.

The workflow creates the Pages project if it does not exist, then runs
`wrangler pages deploy --branch=main`. The custom domain
(`alex-boulanger.dev`) is configured in Cloudflare Pages, not in this repo.
