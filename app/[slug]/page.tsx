import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BookButton } from "@/components/BookButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/metadata";
import services from "@/content/services";
import ServiceBenefits from "@/components/ServiceBenefits";

import RightForYouSection from "@/components/RightForYouSection";

import {
  allDynamicSlugs,
  getCategory,
  getTreatment,
  getTreatmentDisplayName,
  isCategorySlug,
} from "@/lib/site";
import { FaqSection } from "@/components/FaqSection";
import { faqItems } from "@/content/faq";
import OurServices from "@/components/OurServices";
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

export default async function Page({ params }: Props) {
  const { slug } = await params;

/*
 * ============================================================
 * CATEGORY PAGE
 * ============================================================
 */

if (isCategorySlug(slug)) {
  const category = getCategory(slug)!;

  const heroTitle = category.hero?.title ?? category.name;

  const whyChoose = (category as unknown as { whyChoose?: string[] }).whyChoose ?? [];
  const whyEpsomWellness =
    (category as unknown as { whyEpsomWellness?: string[] }).whyEpsomWellness ?? [];
  const suitability = category.suitability;
  const personalisedApproach = category.personalisedApproach;
  const cta = category.cta;
  const introduction = category.introduction;
  const faqs = (category as unknown as {
    faqs?: Array<{ question: string; answer: string }>;
  }).faqs;

  return (
    <main className="pb-24">

      {/* ==================================================
          CATEGORY HERO
         ================================================== */}
      <section className="relative h-[70vh] md:h-[80vh] w-full flex items-center justify-center overflow-hidden">

        {/* Background Image */}
        <Image
  src={category.bannerImage}
  alt={`${heroTitle} at Epsom Wellness`}
  fill
  priority
  className="object-cover object-[50%_35%]"
  sizes="100vw"
/>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />
         

        {/* Breadcrumbs */}
        <div className="absolute top-0 left-0 right-0 z-20">
          <div className="max-w-6xl mx-auto px-4 pt-8">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: category.name },
              ]}
            />
          </div>
        </div>

        {/* H1 INSIDE HERO */}
        <div className="relative z-10 w-full px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
              {heroTitle}
            </h1>
          </div>
        </div> 

      </section>


      {/* ==================================================
          INTRODUCTION
          LEFT TEXT + RIGHT IMAGE
         ================================================== */}
      {introduction && (
        <section className="py-20 px-4">

          <div className="max-w-5xl mx-auto">

            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

              {/* INTRODUCTION CONTENT */}
              <div>

                <div className="mb-8">
                  <h2 className="section-heading">
                    {introduction.title}
                  </h2>
                </div>

                <div className="space-y-6">
                  {introduction.paragraphs.map(
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
                    src={introduction.image}
                    alt={introduction.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                </div>

                {/* Decorative Border */}
                <div
                  className="absolute -bottom-3 -left-3 w-24 h-24 border border-epsom-maroon/40 rounded-2xl pointer-events-none hidden md:block"
                  aria-hidden="true"
                />

              </div>

            </div>

          </div>

        </section>
      )}


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

              {whyChoose.map((item: string, i: number) => (
                <li
                  key={item}
                  className={`flex gap-4 py-5 border-b border-epsom-crystal/35
                    ${i >= whyChoose.length - 2 ? "sm:border-b-0" : ""}
                    ${i === whyChoose.length - 1 ? "border-b-0" : ""}
                  `}
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
      )}


      {/* ==================================================
          OUR SERVICES
         ================================================== */}
      <OurServices treatments={category.treatments} />
      


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
                        i >= whyEpsomWellness.length - 2
                          ? "sm:border-b-0"
                          : ""
                      }
                      ${
                        i === whyEpsomWellness.length - 1
                          ? "border-b-0"
                          : ""
                      }
                    `}
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
           
                 items={faqItems}
         />
    

      {/* ==================================================
          CTA
         ================================================== */}
      {cta && (
        <section className="py-20 px-4">

          <div className="max-w-5xl mx-auto">

            <div className="text-center">

              <h2 className="section-heading">
                {cta.title ?? "Ready to Take the Next Step?"}
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
                {cta.button ?? "Book Consultation"}
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

const category = allDynamicSlugs()
  .map((slug) => getCategory(slug))
  .find((candidate) =>
    candidate?.treatments.some(
      (treatment) => treatment.slug === slug
    )
  );


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
        // {
        //   label: category.name,
        //   href: `/${category.slug}/`,
        // },
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

         <ServiceBenefits  service = {service}/>

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
          RIGHT FOR YOU SECTION.
         ================================================== */}

     <RightForYouSection service={service}/>

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