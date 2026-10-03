  import Image from "next/image";
  import { notFound } from "next/navigation";
  import { ResponsiveHeroImage } from "@/components/ResponsiveHeroImage";
  import { BookButton } from "@/components/BookButton";
  import { Breadcrumbs } from "@/components/Breadcrumbs";
  import { buildMetadata } from "@/lib/metadata";
  import services from "@/content/services";
  import ServiceBenefits from "@/components/ServiceBenefits";
  import RightForYouSection from "@/components/RightForYouSection";

  import seoNav from "@/data/seo-nav.json";
  import { Suspense } from "react";
    import type { TreatmentRef } from "@/lib/types";
import {
  allDynamicSlugs,
  getCategory,
  getTreatment,
  getTreatmentDisplayName,
  isCategorySlug,
} from "@/lib/site";

  import { FaqSection } from "@/components/FaqSection";
  import { faqItems } from "@/content/faq";
import Link from "next/link";

  type Props = {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ from?: string }>;
  };

  /*
  * ============================================================
  * STATIC PARAMS
  * ============================================================
  */

  export async function generateStaticParams() {
    return allDynamicSlugs().map((slug) => ({
      slug,
    }));
  }

  /*
  * ============================================================
  * METADATA
  * ============================================================
  */

  export async function generateMetadata({ params }: Props) {
    const { slug } = await params;

    /*
    * CATEGORY
    */

    const category = getCategory(slug);

    if (category) {
      return buildMetadata({
        title: `${category.name} | Epsom Cryo Spa Mumbai`,
        description: `${category.name} treatments at Epsom Cryo Spa — Mumbai's premier cryotherapy and wellness center.`,
        path: `/${slug}/`,
      });
    }

    /*
    * SERVICE
    */

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

  /*
  * ============================================================
  * PAGE
  * ============================================================
  */

  export default async function Page({ params, searchParams }: Props) {
    const { slug } = await params;
    const { from } = await searchParams;

    /*
    * ============================================================
    * CATEGORY PAGE
    * ============================================================
    */

    
    type Props = {
      treatments: TreatmentRef[];
      categorySlug?: string;
    };

    if (isCategorySlug(slug)) {
      const category = getCategory(slug)!;

      const heroTitle =
        category.hero?.title ?? category.name;

      const whyChoose =
        (
          category as unknown as {
            whyChoose?: string[];
          }
        ).whyChoose ?? [];

      const whyEpsomWellness =
        (
          category as unknown as {
            whyEpsomWellness?: string[];
          }
        ).whyEpsomWellness ?? [];

      const suitability =
        category.suitability;

      const personalisedApproach =
        category.personalisedApproach;

      const cta =
        category.cta;

      const introduction =
        category.introduction;

      /*
      * ==========================================================
      * CATEGORY FAQS
      * ==========================================================
      */

      const categoryFaqs =
        (
          category as unknown as {
            faqs?: Array<{
              question: string;
              answer: string;
            }>;
          }
        ).faqs;

      return (
        
        <main className="pb-24">

          {/* ==================================================
              CATEGORY HERO
            ================================================== */}

          <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">

            {/* ==================================================
                RESPONSIVE BANNER IMAGE (desktop + mobile)
              ================================================== */}

            <ResponsiveHeroImage
              desktopSrc={category.bannerImage}
              mobileSrc={category.mobileBannerImage}
              alt={`${heroTitle} at Epsom Wellness`}
            />

            {/* ==================================================
                OVERLAY
              ================================================== */}

            <div className="absolute inset-0 bg-black/30 z-10" />

            {/* ==================================================
                BREADCRUMBS
              ================================================== */}

            <div className="absolute top-0 left-0 right-0 z-20">
              <div className="max-w-6xl mx-auto px-4 pt-8">

                <Breadcrumbs
                  items={[
                    {
                      label: "Home",
                      href: "/",
                    },
                    {
                      label: category.name,
                    },
                  ]}
                />

              </div>
            </div>

            {/* ==================================================
                HERO CONTENT
              ================================================== */}

            <div className="absolute inset-0 z-20 flex items-center justify-center px-4 pointer-events-none">
              <div className="text-center max-w-4xl mx-auto">

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
                  {heroTitle}
                </h1>

              </div>
            </div>

          </section>

          {/* ==================================================
              WHY CHOOSE
            ================================================== */}

          {whyChoose.length > 0 && (
            <section className="py-20 px-4">

              <div className="max-w-5xl mx-auto">

                <div className="text-center mb-12">

                  <h2 className="section-heading">
                    Why Choose {category.name}?
                  </h2>

                </div>

                <ul className="grid sm:grid-cols-2 gap-x-10 list-none p-0">

                  {whyChoose.map(
                    (item: string, i: number) => (
                      <li
                        key={item}
                        className={`flex gap-4 py-5 border-b border-epsom-crystal/35
                          ${
                            i >= whyChoose.length - 2
                              ? "sm:border-b-0"
                              : ""
                          }
                          ${
                            i === whyChoose.length - 1
                              ? "border-b-0"
                              : ""
                          }`}
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
                    )
                  )}

                </ul>

              </div>

            </section>
          )}

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
      {category.treatments.map((treatment) => (
        <li key={treatment.slug}>
          <Link
            href={`/${treatment.slug}/?from=${category.slug}`}
            className="glass-card-hover p-5 block text-epsom-ink hover:text-epsom-maroon transition-colors"
          >
            <h3 className="font-medium">
              {treatment.name}
            </h3>

            {treatment.description && (
              <p className="text-epsom-muted text-sm mt-2 leading-relaxed">
                {treatment.description}
              </p>
            )}

            {treatment.bestSuitedFor && (
              <p className="text-epsom-muted text-sm mt-3">
                <span className="font-medium text-epsom-ink">
                  Best suited for:
                </span>{" "}
                {treatment.bestSuitedFor}
              </p>
            )}
          </Link>
        </li>
      ))}
    </ul>

  </div>
</section>

          {/* ==================================================
              WHY EPSOM WELLNESS
            ================================================== */}

          {whyEpsomWellness.length > 0 && (
            <section className="py-20 px-4">

              <div className="max-w-5xl mx-auto">

                <div className="text-center mb-12">

                  <h2 className="section-heading">
                    Why Epsom Wellness?
                  </h2>

                </div>

                <ul className="grid sm:grid-cols-2 gap-x-10 list-none p-0">

                  {whyEpsomWellness.map(
                    (item: string, i: number) => (
                      <li
                        key={item}
                        className={`flex gap-4 py-5 border-b border-epsom-crystal/35
                          ${
                            i >=
                            whyEpsomWellness.length - 2
                              ? "sm:border-b-0"
                              : ""
                          }
                          ${
                            i ===
                            whyEpsomWellness.length - 1
                              ? "border-b-0"
                              : ""
                          }`}
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
                    )
                  )}

                </ul>

              </div>

            </section>
          )}

          {/* ==================================================
              SUITABILITY
            ================================================== */}

          {suitability && (
            <section className="py-20 px-4">

              <div className="max-w-5xl mx-auto">

                <div className="text-center mb-12">

                  <h2 className="section-heading">
                    {suitability.title}
                  </h2>

                </div>

                {suitability.items &&
                  suitability.items.length > 0 && (
                    <ul className="grid sm:grid-cols-2 gap-x-10 list-none p-0">

                      {suitability.items.map(
                        (item: string) => (
                          <li
                            key={item}
                            className="flex gap-4 py-5 border-b border-epsom-crystal/35"
                          >

                            <span
                              className="text-epsom-maroon mt-1 shrink-0"
                              aria-hidden="true"
                            >
                              ✓
                            </span>

                            <p className="text-epsom-muted leading-relaxed">
                              {item}
                            </p>

                          </li>
                        )
                      )}

                    </ul>
                  )}

                {suitability.closing && (
                  <p className="max-w-3xl mx-auto mt-10 text-center text-epsom-muted leading-relaxed">
                    {suitability.closing}
                  </p>
                )}

              </div>

            </section>
          )}

          {/* ==================================================
              PERSONALISED APPROACH
            ================================================== */}

          {personalisedApproach && (
            <section className="py-20 px-4">

              <div className="max-w-5xl mx-auto">

                <div className="max-w-3xl">

                  <h2 className="section-heading mb-8">
                    {personalisedApproach.title}
                  </h2>

                  <div className="space-y-6">

                    {personalisedApproach.paragraphs?.map(
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

              </div>

            </section>
          )}

          {/* ==================================================
              FAQ
            ================================================== */}

          <FaqSection
            items={
              categoryFaqs &&
              categoryFaqs.length > 0
                ? categoryFaqs
                : faqItems
            }
          />

          {/* ==================================================
              CTA
            ================================================== */}

          {cta && (
            <section className="py-20 px-4">

              <div className="max-w-5xl mx-auto">

                <div className="text-center">

                  <h2 className="section-heading">
                    {cta.title ??
                      "Ready to Take the Next Step?"}
                  </h2>

                  {cta.description && (
                    <p className="max-w-3xl mx-auto mt-6 text-epsom-muted leading-relaxed">
                      {cta.description}
                    </p>
                  )}

                  {cta.descriptionBeforeButton && (
                    <p className="max-w-3xl mx-auto mt-4 text-epsom-muted leading-relaxed">
                      {cta.descriptionBeforeButton}
                    </p>
                  )}

                  <BookButton className="btn-primary mt-12">
                    {cta.button ??
                      "Book Consultation"}
                  </BookButton>

                </div>

              </div>

            </section>
          )}

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


    /*
    * CATEGORY FROM QUERY PARAM
    *
    * Example:
    * /cryotherapy/?from=pain-management
    * /cryotherapy/?from=health-optimisation-longevity
    */

    const breadcrumbCategory = from
      ? getCategory(from)
      : undefined;

    const mobileBanner = (
      service as { mobileBannerImage?: string }
    ).mobileBannerImage;

    // const serviceCategories = seoNav.categories
    //   .filter((c) =>
    //     c.treatments.some((t) => t.slug === slug)
    //   )
    //   .map((c) => ({ slug: c.slug, name: c.name }));

    // const serviceName =
    //   seoNav.categories
    //     .flatMap((c) => c.treatments)
    //     .find((t) => t.slug === slug)?.name ??
    //   service.title.trim();

    const getservice =
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

          {/* Background Image (desktop + mobile) */}

          <ResponsiveHeroImage
            desktopSrc={service.bannerImage}
            mobileSrc={mobileBanner}
            alt={`${service.title} in Mumbai`}
          />

          {/* Overlay */}

          <div className="absolute inset-0 bg-black/60 z-10" />

          {/* Breadcrumbs */}

         <div className="absolute top-0 left-0 right-0 z-20">
  <div className="max-w-6xl mx-auto px-4 pt-8">

    <Breadcrumbs
      items={[
        {
          label: "Home",
          href: "/",
        },

        ...(breadcrumbCategory
          ? [
              {
                label: breadcrumbCategory.name,
                href: `/${breadcrumbCategory.slug}/`,
              },
            ]
          : []),

        {
          label: service.title,
        },
      ]}
    />

  </div>
</div>

          {/* Hero Content */}

          <div className="relative z-20 w-full px-4">

            <div className="text-center max-w-4xl mx-auto">

              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
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

              {/* INTRODUCTION */}

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

        <ServiceBenefits
          service={service}
        />

        {/* ==================================================
            EXPLORE RANGE
          ================================================== */}

        {"exploreRange" in service &&
          service.exploreRange && (
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

                          {treatments.map(
                            (treatment) => (
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

                                <span>
                                  {treatment}
                                </span>

                              </li>
                            )
                          )}

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
            RIGHT FOR YOU
          ================================================== */}

        <RightForYouSection
          service={service}
        />

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
            SERVICE FAQ
          ================================================== */}

        <FaqSection
          items={service.faqs}
        />

      </main>
    );
  }