# Epsom Cryo Spa (Next.js)

Production Next.js App Router migration of the Epsom Cryo Spa marketing site.

## Commands

```bash
npm install
npm run dev
npm run build
npm start
npm run typecheck
npm run lint
```

## Folder structure

```text
app/                 Routes (App Router), layout, globals.css, API, sitemap/robots
components/          Shared UI (Header, Footer, booking, FAQ, marquees, home)
content/             Page copy modules (home sections, FAQ text)
data/                JSON nav + site config (seo-nav, site-config)
lib/                 Helpers (routes, metadata, types)
public/assets/       Images and videos (referenced as /assets/...)
tailwind.config.ts   Brand colors, fonts, shadows
_archive/            Old static HTML (reference only — not used by Next)
```

**Where to edit**

- **Pages / URLs** → `app/` (`page.tsx`, `app/[slug]/`, `app/locations/[slug]/`)
- **Shared chrome** → `components/Header.tsx`, `Footer.tsx`, booking modal / sticky CTA
- **Styles** → tokens in `tailwind.config.ts`; reusable classes in `app/globals.css`; layout also in component TSX
- **Content vs style** → change copy in `content/` / `data/`; change look in CSS / Tailwind / components
- **SEO titles & descriptions** → [docs/SEO.md](docs/SEO.md) (SEO team: per-page metadata)

## Environment

Copy `.env.example` to `.env.local` and set:

- `CONTACT_TO_EMAIL` — inbox for contact form submissions
- `RESEND_API_KEY` — Resend API key (required in production)
- `CONTACT_FROM_EMAIL` — verified Resend from address

Without `RESEND_API_KEY`, development mode logs submissions to the server console.

## Legacy HTML

Original static HTML/JS lives under `_archive/html/` for reference.
