import { notFound } from "next/navigation";

import { LocationPage } from "@/components/LocationHero";

import {
  getNavLocation,
  getSiteLocation,
  seoNav,
} from "@/lib/site";

import { buildMetadata } from "@/lib/metadata";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return seoNav.locations.map((location) => ({
    slug: location.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const location = getNavLocation(slug);

  if (!location) {
    return {};
  }

  return buildMetadata({
    title: `${location.name} | Epsom Cryo Spa Mumbai`,
    description: `Experience premium cryotherapy, wellness, recovery and aesthetic treatments at Epsom Cryo Spa ${location.name}.`,
    path: `/${slug}/`,
  });
}

export default async function LocationRoute({ params }: Props) {
  const { slug } = await params;

  const location = getNavLocation(slug);
  const siteLocation = getSiteLocation(slug);

  if (!location || !siteLocation) {
    notFound();
  }

  return (
    <LocationPage
      location={location}
      siteLocation={siteLocation}
    />
  );
}