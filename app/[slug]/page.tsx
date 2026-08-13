import Link from "next/link";
import { notFound } from "next/navigation";
import { BookButton } from "@/components/BookButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { treatmentImages } from "@/content/home";
import { buildMetadata } from "@/lib/metadata";
import {
  allDynamicSlugs,
  getCategory,
  getPrimaryCategory,
  getTreatment,
  getTreatmentDisplayName,
  isCategorySlug,
} from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return allDynamicSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (category) {
    return buildMetadata({
      title: `${category.name} | Epsom Cryo Spa Mumbai`,
      description: `${category.name} treatments at Epsom Cryo Spa — Mumbai's premier cryotherapy and wellness center.`,
      path: `/${slug}/`,
    });
  }
  const treatment = getTreatment(slug);
  if (treatment) {
    const name = getTreatmentDisplayName(slug);
    return buildMetadata({
      title: `${name} | Epsom Cryo Spa Mumbai`,
      description: `${name} in Mumbai at Epsom Cryo Spa. Book across Santacruz, Borivali & Andheri.`,
      path: `/${slug}/`,
    });
  }
  return {};
}

export default async function DynamicSlugPage({ params }: Props) {
  const { slug } = await params;

  if (isCategorySlug(slug)) {
    const category = getCategory(slug)!;
    return (
      <main className="pt-8 pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: category.name }]} />
          <h1 className="font-display text-4xl md:text-5xl text-epsom-ink">{category.name}</h1>
          <p className="text-epsom-muted mt-6 leading-relaxed">
            Explore our {category.name.toLowerCase()} treatments at Epsom Cryo Spa. Full category content
            will be expanded from our SEO content plan. Browse treatments below or book a consultation
            today.
          </p>
          <ul className="mt-10 grid sm:grid-cols-2 gap-4 list-none p-0">
            {category.treatments.map((t) => (
              <li key={t.slug}>
                <Link
                  href={`/${t.slug}/`}
                  className="glass-card-hover p-4 block text-epsom-ink font-medium hover:text-epsom-maroon"
                >
                  {t.name}
                </Link>
              </li>
            ))}
          </ul>
          <BookButton className="btn-primary mt-12">Book Consultation</BookButton>
        </div>
      </main>
    );
  }

  const treatment = getTreatment(slug);
  if (!treatment) notFound();

  const primary = getPrimaryCategory(slug);
  const name = getTreatmentDisplayName(slug);
  const image = treatmentImages[slug];

  return (
    <main className="pt-8 pb-24 px-4">
      <div className="max-w-3xl mx-auto">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            ...(primary
              ? [{ label: primary.name, href: `/${primary.slug}/` }]
              : []),
            { label: name },
          ]}
        />
        <h1 className="font-display text-4xl md:text-5xl text-epsom-ink">{name}</h1>
        <p className="text-epsom-muted mt-6 leading-relaxed">
          {name} at Epsom Cryo Spa
          {primary ? ` — part of our ${primary.name} pathway` : ""}. Science-backed wellness in a calm,
          premium setting.
        </p>
        <p className="text-epsom-muted text-sm mt-4">
          Full treatment details coming soon. Book a consultation to learn more about availability at
          Santacruz, Borivali, and Andheri.
        </p>
        {image ? (
          // Decorative preview retained from homepage assets
          <div
            className="mt-8 aspect-[16/10] rounded-2xl border border-epsom-crystal/35 overflow-hidden bg-epsom-soft bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
            role="img"
            aria-label={name}
          />
        ) : null}
        <div className="flex flex-wrap gap-4 mt-10">
          <BookButton />
          <Link href="/contact/" className="btn-outline">
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
