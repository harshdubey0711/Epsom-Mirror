import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BookButton } from "@/components/BookButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/metadata";
import services from "@/content/services";

import {
  allDynamicSlugs,
  getCategory,
  getTreatment,
  getTreatmentDisplayName,
  isCategorySlug,
} from "@/lib/site";
import { FaqSection } from "@/components/FaqSection";

type Props = {
  params: Promise<{ slug: string }>;
};

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

  /*
   * ============================================================
   * CATEGORY PAGE
   * ============================================================
   */

  if (isCategorySlug(slug)) {
    const category = getCategory(slug)!;

    const whyChoose =
      (category as typeof category & {
        whyChoose?: string[];
      }).whyChoose ?? [];

    const whyEpsomWellness =
      (category as typeof category & {
        whyEpsomWellness?: string[];
      }).whyEpsomWellness ?? [];

    return (
      <main className="pt-8 pb-24">
        <div className="max-w-5xl px-4 mx-auto">

          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: category.name },
            ]}
          />

          {/* Category Header */}
          <h1 className="font-display text-4xl md:text-5xl text-epsom-ink">
            {category.name}
          </h1>

          <p className="text-b mt-2 leading-relaxed">
            Live Better. Feel Better. Stay Healthier.
          </p>

          <p className="text-epsom-muted mt-6 leading-relaxed">
            Your health is your greatest investment. At Epsom, we offer
            doctor-led therapies that help improve recovery, increase energy,
            support overall wellness, and promote healthy ageing. Every
            treatment is tailored to your individual health goals, so you
            receive care that's right for you.
          </p>

          <BookButton className="btn-primary mt-12">
            Book Consultation
          </BookButton>

          {/* ==================================================
              WHY CHOOSE CATEGORY
             ================================================== */}

          <section className="py-20 px-4">
            <div className="max-w-5xl mx-auto">

              <div className="text-center mb-12">
                <h2 className="section-heading">
                  Why Choose {category.name}?
                </h2>
              </div>

              <ul className="grid sm:grid-cols-2 gap-x-10 list-none p-0">
                {whyChoose.map((item: string, i: number) => (
                  <li
                    key={item}
                    className={`flex gap-4 py-5 border-b border-epsom-crystal/35${
                      i >= 4 ? " sm:border-b-0" : ""
                    }${i === 5 ? " border-b-0" : ""}`}
                  >
                    <span
                      className="text-epsom-maroon mt-1 shrink-0"
                      aria-hidden="true"
                    >
                      ✓
                    </span>

                    <div>
                      <p className="text-epsom-muted text-sm mt-1">
                        {item}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

            </div>
          </section>

          {/* ==================================================
              OUR SERVICES
             ================================================== */}

          <section className="py-20 px-4">
            <div className="max-w-5xl mx-auto">

              <div className="text-center mb-12">
                <h2 className="section-heading">
                  Our Services
                </h2>
              </div>

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

            </div>
          </section>

          {/* ==================================================
              WHY EPSOM WELLNESS
             ================================================== */}

          <section className="py-20 px-4">
            <div className="max-w-5xl mx-auto">

              <div className="text-center mb-12">
                <h2 className="section-heading">
                  Why Epsom Wellness?
                </h2>
              </div>

              <ul className="grid sm:grid-cols-2 gap-x-10 list-none p-0">
                {whyEpsomWellness.map((item: string, i: number) => (
                  <li
                    key={item}
                    className={`flex gap-4 py-5 border-b border-epsom-crystal/35${
                      i >= 4 ? " sm:border-b-0" : ""
                    }${i === 5 ? " border-b-0" : ""}`}
                  >
                    <span
                      className="text-epsom-maroon mt-1 shrink-0"
                      aria-hidden="true"
                    >
                      ✓
                    </span>

                    <div>
                      <h3 className="font-semibold text-epsom-ink">
                        {item}
                      </h3>
                    </div>
                  </li>
                ))}
              </ul>

            </div>
          </section>

          {/* ==================================================
              CATEGORY CTA
             ================================================== */}

          <section className="py-20 px-4">
            <div className="max-w-5xl mx-auto">

              <div className="text-center">

                <h2 className="section-heading">
                  Ready to Take the Next Step?
                </h2>

                <p className="max-w-3xl mx-auto mt-6 text-epsom-muted">
                  Whether you're looking to improve your health, recover
                  better, or simply feel your best, our team is here to help
                  you choose the therapies that suit your goals.
                </p>

                <BookButton className="btn-primary mt-12">
                  Book Consultation
                </BookButton>

              </div>

            </div>
          </section>

        </div>
      </main>
    );
  }

  /*
   * ============================================================
   * SERVICE PAGE
   * ============================================================
   */

  const service =
    services[slug as keyof typeof services];

  if (!service) {
    notFound();
  }
return (
 <main className="pb-24">

  {/* ==================================================
      HERO
     ================================================== */}
  <section className="relative h-[70vh] md:h-[80vh] w-full flex items-center justify-center overflow-hidden">

    {/* Background Image */}
    <Image
      src={service.bannerImage}
      alt={`${service.title} in Mumbai`}
      fill
      priority
      className="object-cover object-[50%_35%]"
      sizes="100vw"
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/60" />

    {/* Breadcrumbs */}
    <div className="absolute top-0 left-0 right-0 z-20">
      <div className="max-w-6xl mx-auto px-4 pt-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: service.title },
          ]}
        />
      </div>
    </div>

    {/* Hero Content */}
    <div className="relative z-10 w-full px-4">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
          {service.title} in Mumbai
        </h1>
      </div>
    </div>

  </section>

      {/* ==================================================
          FEATURE + INTRODUCTION
         ================================================== */}

      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">

          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

            {/* INTRODUCTION CONTENT */}
            <div>

              <div className="mb-8">
                <h2 className="section-heading">
                  {service.introduction.title}
                </h2>
              </div>

              <div className="space-y-6">
                {service.introduction.paragraphs.map(
                  (paragraph: string) => (
                    <p
                      key={paragraph}
                      className="text-epsom-muted leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  )
                )}
              </div>

            </div>

            {/* FEATURE IMAGE */}
            <div className="relative">

              <div className="relative aspect-square overflow-hidden rounded-2xl border border-epsom-crystal/35 shadow-soft-lg">

                <Image
                  src={service.featureImage}
                  alt={`${service.title} wellness treatment at Epsom Cryo Spa`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

              </div>

              <div
                className="absolute -bottom-3 -left-3 w-24 h-24 border border-epsom-maroon/40 rounded-2xl pointer-events-none hidden md:block"
                aria-hidden="true"
              />

            </div>

          </div>

        </div>
      </section>

      {/* ==================================================
          BENEFITS
         ================================================== */}

      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-12">

            <h2 className="section-heading">
              {service.benefits.title}
            </h2>

            <p className="text-epsom-muted mt-4">
              {service.benefits.intro}
            </p>

          </div>

          <ul className="grid sm:grid-cols-2 gap-x-10 list-none p-0">
            {service.benefits.items.map(
              (item: string, i: number) => (
                <li
                  key={item}
                  className={`flex gap-4 py-5 border-b border-epsom-crystal/35${
                    i >= 6 ? " sm:border-b-0" : ""
                  }${i === 7 ? " border-b-0" : ""}`}
                >
                  <span
                    className="text-epsom-maroon mt-1 shrink-0"
                    aria-hidden="true"
                  >
                    ✓
                  </span>

                  <p className="text-epsom-muted text-sm">
                    {item}
                  </p>
                </li>
              )
            )}
          </ul>

        </div>
      </section>

      {/* ==================================================
          IV DRIP RANGE
          Only renders for services that contain exploreRange
         ================================================== */}

      {"exploreRange" in service && service.exploreRange && (
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">

            <div className="text-center mb-12">

              <h2 className="section-heading">
                {service.exploreRange.title}
              </h2>

              <p className="text-epsom-muted mt-4">
                {service.exploreRange.intro}
              </p>

            </div>

            <div className="grid sm:grid-cols-2 gap-6">

              {Object.entries(
                service.exploreRange.categories as Record<
                  string,
                  string[]
                >
              ).map(
                ([categoryName, treatments]) => (
                  <div
                    key={categoryName}
                    className="glass-card-hover p-6"
                  >

                    <h3 className="font-semibold text-epsom-ink text-lg">
                      {categoryName}
                    </h3>

                    <ul className="mt-4 space-y-3 list-none p-0">
                      {treatments.map((treatment) => (
                        <li
                          key={treatment}
                          className="flex gap-3 text-epsom-muted text-sm"
                        >
                          <span
                            className="text-epsom-maroon shrink-0"
                            aria-hidden="true"
                          >
                            ✓
                          </span>

                          <span>{treatment}</span>
                        </li>
                      ))}
                    </ul>

                  </div>
                )
              )}

            </div>

            <p className="max-w-4xl mx-auto mt-10 text-epsom-muted leading-relaxed">
              {service.exploreRange.closing}
            </p>

          </div>
        </section>
      )}

      {/* ==================================================
          SUITABILITY
         ================================================== */}

      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-12">

            <h2 className="section-heading">
              {service.suitability.title}
            </h2>

            <p className="text-epsom-muted mt-4">
              {service.suitability.intro}
            </p>

          </div>

          <ul className="grid sm:grid-cols-2 gap-x-10 list-none p-0">
            {service.suitability.items.map(
              (item: string, i: number) => (
                <li
                  key={item}
                  className={`flex gap-4 py-5 border-b border-epsom-crystal/35${
                    i >= 4 ? " sm:border-b-0" : ""
                  }${i === 5 ? " border-b-0" : ""}`}
                >
                  <span
                    className="text-epsom-maroon mt-1 shrink-0"
                    aria-hidden="true"
                  >
                    ✓
                  </span>

                  <p className="text-epsom-muted text-sm">
                    {item}
                  </p>
                </li>
              )
            )}
          </ul>

          <p className="max-w-4xl mx-auto mt-8 text-epsom-muted leading-relaxed">
            {service.suitability.closing}
          </p>

        </div>
      </section>

      {/* ==================================================
          BOOKING CTA
         ================================================== */}

      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">

          <div className="text-center">

            <h2 className="section-heading">
              {service.booking.title}
            </h2>

            <div className="max-w-3xl mx-auto mt-6 space-y-4">
              {service.booking.paragraphs.map(
                (paragraph: string) => (
                  <p
                    key={paragraph}
                    className="text-epsom-muted leading-relaxed"
                  >
                    {paragraph}
                  </p>
                )
              )}
            </div>

            <BookButton className="btn-primary mt-12">
              {service.booking.button}
            </BookButton>

          </div>

        </div>
      </section>

    {/* ==================================================
        FAQ
       ================================================== */}

   <FaqSection
  // title={`${service.title} FAQs`}
  items={service.faqs}
/>




  </main>
);
}