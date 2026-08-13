import Link from "next/link";
import { notFound } from "next/navigation";
import { BookButton } from "@/components/BookButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/metadata";
import { getNavLocation, getSiteLocation, seoNav } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return seoNav.locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const loc = getNavLocation(slug);
  if (!loc) return {};
  return buildMetadata({
    title: `${loc.name} | Epsom Cryo Spa Mumbai`,
    description: `Visit Epsom Cryo Spa ${loc.name} — cryotherapy and wellness center in Mumbai.`,
    path: `/locations/${slug}/`,
  });
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const navLoc = getNavLocation(slug);
  const siteLoc = getSiteLocation(slug);
  if (!navLoc) notFound();

  const others = seoNav.locations.filter((l) => l.slug !== slug);

  return (
    <main className="pt-8 pb-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Locations" },
            { label: navLoc.name },
          ]}
        />
        <h1 className="font-display text-4xl text-epsom-ink">{navLoc.name}</h1>
        <p className="text-epsom-maroon mt-2">{navLoc.label}</p>
        <p className="text-epsom-muted mt-6 leading-relaxed">{navLoc.address}</p>
        <div className="flex flex-wrap gap-4 justify-center mt-10">
          <a
            href={navLoc.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Get Directions
          </a>
          <BookButton>{`Book at ${navLoc.name.split(" ")[0]}`}</BookButton>
        </div>
        <div className="mt-12 glass-card p-4 aspect-video flex items-center justify-center text-epsom-muted">
          <a
            href={siteLoc?.mapsUrl || navLoc.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-epsom-maroon"
          >
            Open in Google Maps →
          </a>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm items-center">
          {others.map((loc, i) => (
            <span key={loc.slug} className="contents">
              {i > 0 ? <span className="text-epsom-crystal">|</span> : null}
              <Link href={`/locations/${loc.slug}/`} className="text-epsom-maroon hover:underline">
                {loc.name}
              </Link>
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}
