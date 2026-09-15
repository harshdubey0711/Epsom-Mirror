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

## How to edit content (per page)

**Rule of thumb**

1. Open the file in the table below.
2. Change text / images / metadata.
3. Save, check in the browser at `npm run dev`.
4. Commit and push (see [Publish to GitHub](#publish-to-github)).

| URL | Where to go | What to edit |
|---|---|---|
| `/` Home | [`components/home/HomePage.tsx`](components/home/HomePage.tsx) | Hero, about blurb, sections layout |
| `/` Home treatment cards & categories | [`content/home.ts`](content/home.ts) | Treatment names, descriptions, images, category bands, why-choose-us, benefits |
| `/` Popular searches | [`data/seo-nav.json`](data/seo-nav.json) → `popularSearches` | Labels and links |
| `/about/` | [`app/about/page.tsx`](app/about/page.tsx) | Hero image, story copy, stats, CTA |
| `/contact/` | [`app/contact/page.tsx`](app/contact/page.tsx) | Hero, contact copy; phones/email also in [`data/site-config.json`](data/site-config.json) |
| `/faq/` | [`content/faq.ts`](content/faq.ts) + [`app/faq/page.tsx`](app/faq/page.tsx) | Questions/answers in `content/faq.ts`; page title/layout in `app/faq/page.tsx` |
| `/memberships/` | [`app/memberships/page.tsx`](app/memberships/page.tsx) | Package names, copy, CTAs |
| `/franchise/` | [`app/franchise/page.tsx`](app/franchise/page.tsx) | Franchise page copy |
| `/blog/` | [`app/blog/page.tsx`](app/blog/page.tsx) | Blog placeholder copy |
| `/refund-policy/` | [`app/refund-policy/page.tsx`](app/refund-policy/page.tsx) | Policy text |
| `/thankyou/` | [`app/thankyou/page.tsx`](app/thankyou/page.tsx) | Thank-you message |
| `/error/` | [`app/error/page.tsx`](app/error/page.tsx) | Error message |
| `/cryotherapy/` etc. (treatments) | [`app/[slug]/page.tsx`](app/[slug]/page.tsx) + [`data/seo-nav.json`](data/seo-nav.json) | Page template in `[slug]`; names/slugs under `categories` / `primaryCategory` in `seo-nav.json`; card images in [`content/home.ts`](content/home.ts) `treatmentImages` |
| `/beauty/`, `/pain-management/`, etc. (categories) | Same as treatments: [`app/[slug]/page.tsx`](app/[slug]/page.tsx) + [`data/seo-nav.json`](data/seo-nav.json) | Category name/href/treatment lists in `seo-nav.json` |
| `/locations/santacruz/` etc. | [`app/locations/[slug]/page.tsx`](app/locations/[slug]/page.tsx) + [`data/seo-nav.json`](data/seo-nav.json) + [`data/site-config.json`](data/site-config.json) | Nav labels/addresses in `seo-nav.json` `locations`; booking/maps/GMB in `site-config.json` `locations` |
| Header / Footer / nav | [`components/Header.tsx`](components/Header.tsx), [`components/Footer.tsx`](components/Footer.tsx), [`data/seo-nav.json`](data/seo-nav.json) | Menu links, footer columns, phones, social |
| Site-wide brand, phones, WhatsApp, social | [`data/site-config.json`](data/site-config.json) | Domain, contact, locations, WhatsApp, social URLs |
| Images / videos | [`public/assets/`](public/assets/) | Add files here; reference as `/assets/images/...` or `/assets/videos/...` |
| SEO title & description | Same `app/.../page.tsx` as the page (or `generateMetadata` in `[slug]` / locations) | See [docs/SEO.md](docs/SEO.md) |

### Typical content-edit workflow

```bash
# 1. Start the site
npm run dev

# 2. Edit the file from the table (example: about page)
#    open app/about/page.tsx in the editor and change copy/images

# 3. Refresh http://localhost:3000/about/ and confirm

# 4. Publish (see below)
```

## Publish to GitHub

Remote:

```text
https://github.com/rishabhworkspace77-lab/epsom_revamp.git
```

After you finish edits:

```bash
git status
git add .
git commit -m "Describe what you changed"
git push -u origin main
```

Examples:

```bash
git add app/about/page.tsx public/assets/images/about/
git commit -m "Update about page story and hero image"
git push origin main
```

```bash
git add content/home.ts data/seo-nav.json
git commit -m "Update home treatment copy and popular searches"
git push origin main
```

If the remote is not set yet:

```bash
git remote add origin https://github.com/rishabhworkspace77-lab/epsom_revamp.git
git push -u origin main
```

Do **not** commit `.env.local` (secrets). `.env.example` is safe to keep in the repo.

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

**Where to edit (quick)**

- **Pages / URLs** → `app/`
- **Shared chrome** → `components/Header.tsx`, `Footer.tsx`
- **Styles** → `tailwind.config.ts`, `app/globals.css`
- **Copy / nav / config** → `content/`, `data/`
- **SEO** → [docs/SEO.md](docs/SEO.md)

## Environment

Copy `.env.example` to `.env.local` and set:

- `CONTACT_TO_EMAIL` — inbox for contact form submissions
- `RESEND_API_KEY` — Resend API key (required in production)
- `CONTACT_FROM_EMAIL` — verified Resend from address

Without `RESEND_API_KEY`, development mode logs submissions to the server console.

## Legacy HTML

Original static HTML/JS lives under `_archive/html/` for reference.
