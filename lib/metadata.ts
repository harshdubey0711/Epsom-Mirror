import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

type BuildMetaInput = {
  title: string;
  description: string;
  path: string;
};

export function buildMetadata({ title, description, path }: BuildMetaInput): Metadata {
  const url = path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path.endsWith("/") ? path : `${path}/`}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Epsom Cryo Spa",
      type: "website",
      locale: "en_IN",
      images: [{ url: `${SITE_URL}/assets/images/logo/logo.png`, alt: "Epsom Cryo Spa" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}/assets/images/logo/logo.png`],
    },
  };
}
