import seoNavJson from "@/data/seo-nav.json";
import siteConfigJson from "@/data/site-config.json";
import type { Category, SeoNav, SiteConfig, SiteLocation, TreatmentRef } from "@/lib/types";

export const seoNav = seoNavJson as SeoNav;
export const siteConfig = siteConfigJson as SiteConfig;
export const SITE_URL = siteConfig.domain;

export const SALON_CATEGORY: Category = {
  slug: "salon",
  name: "Salon",
  href: "salon/",
  footerLabel: "Salon",
  treatments: [{ slug: "circadia-facials", name: "Circadia® Facials" }],
};

export function getCategories(): Category[] {
  return [...seoNav.categories, SALON_CATEGORY];
}

export function getCategory(slug: string): Category | undefined {
  return getCategories().find((c) => c.slug === slug);
}

export function getAllTreatments(): TreatmentRef[] {
  const map = new Map<string, TreatmentRef>();
  for (const cat of seoNav.categories) {
    for (const t of cat.treatments) {
      if (!map.has(t.slug)) map.set(t.slug, t);
    }
  }
  return Array.from(map.values());
}

export function getTreatment(slug: string): TreatmentRef | undefined {
  return getAllTreatments().find((t) => t.slug === slug);
}

export function getPrimaryCategory(treatmentSlug: string): Category | undefined {
  const catSlug = seoNav.primaryCategory[treatmentSlug];
  if (!catSlug) return undefined;
  return getCategory(catSlug);
}

export function getTreatmentDisplayName(slug: string, categorySlug?: string): string {
  if (categorySlug) {
    const cat = getCategory(categorySlug);
    const named = cat?.treatments.find((t) => t.slug === slug);
    if (named) return named.name;
  }
  const primary = getPrimaryCategory(slug);
  const fromPrimary = primary?.treatments.find((t) => t.slug === slug);
  return fromPrimary?.name ?? getTreatment(slug)?.name ?? slug;
}

export function getNavLocation(slug: string) {
  return seoNav.locations.find((l) => l.slug === slug);
}

export function getSiteLocation(slug: string): SiteLocation | undefined {
  return siteConfig.locations.find((l) => l.id === slug);
}

export function allDynamicSlugs(): string[] {
  const cats = getCategories().map((c) => c.slug);
  const treatments = getAllTreatments().map((t) => t.slug);
  return [...new Set([...cats, ...treatments])];
}

export function isCategorySlug(slug: string): boolean {
  return Boolean(getCategory(slug));
}

export function isTreatmentSlug(slug: string): boolean {
  return Boolean(getTreatment(slug)) && !isCategorySlug(slug);
}

export function normalizeHref(href: string): string {
  if (href.startsWith("http")) return href;
  let clean = href.replace(/^\.\//, "").replace(/\.html$/, "");
  if (clean === "" || clean === "index" || clean === "/") return "/";
  if (!clean.startsWith("/")) clean = `/${clean}`;
  if (!clean.endsWith("/")) clean = `${clean}/`;
  return clean;
}
