# SEO metadata — Epsom Cryo Spa

Guide for the SEO team. Every public page should have a unique title, description, and path. The site helper `buildMetadata` in `lib/metadata.ts` then fills in canonical URL, Open Graph, and Twitter tags automatically. You only write the three fields below.

## What to write

| Field | Length | What to include |
|---|---|---|
| **title** | ~50–60 characters | Primary keyword + location or benefit + brand |
| **description** | ~140–160 characters | Unique summary, one benefit, location or CTA |
| **path** | Exact public URL | Trailing slash on every page except home (`/`) |

Title pattern:

```text
{Page / treatment / location} | Epsom Cryo Spa Mumbai
```

Examples:

- `Cryotherapy Mumbai | Premier Wellness Center – Epsom Cryo Spa`
- `About Us | Epsom Cryo Spa Mumbai`
- `Santacruz West | Epsom Cryo Spa Mumbai`

Rules:

- One unique title and description per URL. Do not reuse the same line on two pages.
- Put the main keyword near the start of the title.
- Mention Mumbai and, where relevant, Santacruz / Borivali / Andheri.
- Do not stuff keywords. Write for a person scanning Google results.
- Canonical, Open Graph, and Twitter copy are generated from the same title + description + path. Do not add separate OG tags unless a page needs a custom image.

## Where to put it

### Static pages — edit the page file

Open the file listed below. At the top, update the `buildMetadata({ ... })` block.

```ts
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "About Us | Epsom Cryo Spa Mumbai",
  description: "Learn about Epsom Cryo Spa — Mumbai's luxury recovery and biohacking wellness center.",
  path: "/about/",
});
```

| URL | File |
|---|---|
| `/` | `app/page.tsx` |
| `/about/` | `app/about/page.tsx` |
| `/contact/` | `app/contact/page.tsx` |
| `/faq/` | `app/faq/page.tsx` |
| `/memberships/` | `app/memberships/page.tsx` |
| `/blog/` | `app/blog/page.tsx` |
| `/franchise/` | `app/franchise/page.tsx` |
| `/refund-policy/` | `app/refund-policy/page.tsx` |
| `/thankyou/` | `app/thankyou/page.tsx` |
| `/error/` | `app/error/page.tsx` |

`path` must match the URL column, including the trailing slash.

### Treatment and category pages — `app/[slug]/page.tsx`

These URLs are generated from slugs in `data/seo-nav.json`. Metadata lives in `generateMetadata` inside `app/[slug]/page.tsx`.

Default templates today:

- Category: `{category.name} | Epsom Cryo Spa Mumbai`
- Treatment: `{treatment name} | Epsom Cryo Spa Mumbai`

For unique copy, replace the template for that slug (or hand the title + description to engineering to wire in). Path is always `/{slug}/`.

Categories: `health-optimisation-longevity`, `pain-management`, `beauty`, `sports-recovery-performance`, `salon`.

Treatments (examples): `cryotherapy`, `hyperbaric-oxygen-therapy`, `iv-drip-therapy`, `red-light-therapy`, `circadia-facials`. Full list: `data/seo-nav.json`.

### Location pages — `app/locations/[slug]/page.tsx`

Edit `generateMetadata` in that file. Path is `/locations/{slug}/`.

| URL | Slug |
|---|---|
| `/locations/santacruz/` | `santacruz` |
| `/locations/borivali/` | `borivali` |
| `/locations/andheri/` | `andheri` |

## Developer notes

- Always use `buildMetadata` from `lib/metadata.ts`. Do not hand-write `<meta>` tags in the page body.
- Static routes: `export const metadata = buildMetadata({ ... })`.
- Dynamic routes (`[slug]`): `export async function generateMetadata`.
- Never export both `metadata` and `generateMetadata` from the same file.
- `app/layout.tsx` sets site-wide defaults (`metadataBase` + home fallback). Child pages override title and description.
- Domain for canonicals comes from `data/site-config.json` (`domain`).
