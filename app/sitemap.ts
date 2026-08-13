import type { MetadataRoute } from "next";
import { allDynamicSlugs, seoNav, SITE_URL } from "@/lib/site";

const staticPaths = [
  "/",
  "/about/",
  "/contact/",
  "/faq/",
  "/memberships/",
  "/blog/",
  "/franchise/",
  "/refund-policy/",
  "/thankyou/",
  "/error/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));

  for (const slug of allDynamicSlugs()) {
    entries.push({
      url: `${SITE_URL}/${slug}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  for (const loc of seoNav.locations) {
    entries.push({
      url: `${SITE_URL}/locations/${loc.slug}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    });
  }

  return entries;
}
