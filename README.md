# Epsom Cryo Spa (Next.js)

Production Next.js App Router migration of the Epsom Cryo Spa marketing site.

## Entry point

| Piece | Path |
|---|---|
| App shell (fonts, header, footer, global CSS) | [`app/layout.tsx`](app/layout.tsx) |
| Home page route (`/`) | [`app/page.tsx`](app/page.tsx) → [`components/home/HomePage.tsx`](components/home/HomePage.tsx) |
| Other routes | `app/*/page.tsx`, `app/[slug]/page.tsx`, `app/locations/[slug]/page.tsx` |

### Run locally

```bash
npm install
cp .env.example .env.local   # then fill contact/Resend values
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). That is the program entry in development (`next dev` → `app/layout.tsx` → `app/page.tsx`).

Production:

```bash
npm run build
npm start
```

## Commands

```bash
npm install
npm run dev
npm run build
npm start
npm run typecheck
npm run lint
```

## Git remote & push

Remote:

```text
https://github.com/rishabhworkspace77-lab/epsom_revamp.git
```

Push local `main` to GitHub:

```bash
git status
git add .
git commit -m "Your message"
git push -u origin main
```

If the remote is not set yet:

```bash
git remote add origin https://github.com/rishabhworkspace77-lab/epsom_revamp.git
git push -u origin main
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
