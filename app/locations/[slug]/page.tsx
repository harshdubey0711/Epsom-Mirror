import { notFound } from "next/navigation";
import { LocationPage } from "@/components/LocationHero";
import { getNavLocation, getSiteLocation, seoNav } from "@/lib/site";
import { buildMetadata } from "@/lib/metadata";
import { locationPageContent } from "@/content/loaction";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return seoNav.locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const content = locationPageContent[slug];

  if (!content) return {};

  return buildMetadata({
    title: content.meta.title,
    description: content.meta.description,
    path: `/${slug}/`,
  });
}

export default async function LocationRoute({ params }: Props) {
  const { slug } = await params;

  const location = getNavLocation(slug);
  const siteLocation = getSiteLocation(slug);
  const content = locationPageContent[slug];

  if (!location || !siteLocation || !content) {
    notFound();
  }

  return <LocationPage location={siteLocation} content={content} />;
}