import Image from "next/image";
import Link from "next/link";

import { BookButton } from "@/components/BookButton";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { RevealLtr } from "@/components/RevealLtr";
import { TreatmentMarquee } from "@/components/TreatmentMarquee";

import { benefits, homeCategorySections, whyChooseUs } from "@/content/home";
import { faqItems } from "@/content/faq";

import type { SiteLocation } from "@/lib/types";

type LocationPageProps = {
  location: SiteLocation;
};

const whyChooseUsWithDescriptions = whyChooseUs as Array<{
  title: string;
  description?: string;
}>;

export function LocationPage({ location }: LocationPageProps) {
  const medicalBusiness = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: `Epsom Cryo Spa ${location.name}`,
    description:
      "Advanced cryotherapy, recovery, wellness and aesthetic treatments at Epsom Cryo Spa.",
    url: location.mapsUrl,
    telephone: "+91-9867670762",
    email: "info@epsomcryospa.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: location.address,
      addressLocality: "Mumbai",
      addressCountry: "IN",
    },
  };

  return (
    <main>
      {/* <JsonLd data={medicalBusiness} /> */}

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[78vh] md:min-h-[82vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/biohack-banner-2.jpg"
            alt={`Epsom Cryo Spa ${location.name}`}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div className="absolute inset-0 bg-salt-hero" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-10">
          <p className="text-white/80 uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Epsom Cryo Spa
          </p>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
            Cryotherapy &amp; Wellness in {location.name}
          </h1>

          <p className="text-white/90 text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
            Advanced recovery, rejuvenation, biohacking and luxury wellness
            treatments — now available at our {location.name} location.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mt-10">
            <BookButton />

            <a
              href="tel:+919867670762"
              className="btn-outline !border-white/70 !text-white hover:!bg-white/10"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          LOCATION INTRO
      ========================================================= */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <p className="text-epsom-maroon text-sm uppercase tracking-[0.18em] font-medium mb-3">
              {location.name}
            </p>

            <h2 className="section-heading !text-3xl md:!text-4xl">
              Your destination for recovery, rejuvenation &amp; performance
            </h2>

            <p className="text-epsom-muted leading-relaxed mt-6 text-base md:text-lg">
              Epsom Cryo Spa brings advanced wellness and recovery therapies
              together in one premium destination. From cryotherapy and
              hyperbaric oxygen therapy to IV drips, red light therapy and
              rejuvenating spa treatments, every experience is designed around
              your wellness goals.
            </p>

            <p className="text-epsom-muted leading-relaxed mt-4 text-base md:text-lg">
              Whether your focus is faster recovery, pain management,
              performance, energy, body transformation or rejuvenation, our
              {` `}
              {location.name} location offers personalised wellness experiences
              in a calm luxury environment.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <BookButton>Book a Consultation</BookButton>

              <a
                href={location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Get Directions
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-epsom-crystal/35 shadow-soft-lg relative">
              <Image
                src="/assets/images/about/about.png"
                alt={`Epsom Cryo Spa ${location.name} wellness center`}
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
      </section>

      {/* {/* =========================================================
          TREATMENTS
      ========================================================= 
      {homeCategorySections.map((section) => (
        <section  
          key={section.id}
          id={section.id}
          className={section.bandClass}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center mt-12 justify-between gap-4 mb-8">
              <h2 className="section-heading !text-3xl md:!text-4xl min-w-0 flex-1">
                {section.title}
              </h2>

              <Link
                href={`/${section.slug}/`}
                className="btn-ghost shrink-0 whitespace-nowrap ml-auto"
              >
                View All Treatments →
              </Link>
            </div>
          </div>

          <TreatmentMarquee
            treatments={section.treatments}
            label={`${section.title} treatments`}
            slow={section.slow}
          />
        </section>
      ))} */}




















      {/* =========================================================
          LOCAL CTA / OFFER
      ========================================================= */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card rounded-3xl p-8 md:p-12 text-center border border-epsom-crystal/35 shadow-soft-lg">
            <p className="text-epsom-maroon uppercase tracking-[0.18em] text-sm font-medium">
              Visit Epsom Cryo Spa
            </p>

            <h2 className="section-heading !text-3xl md:!text-4xl mt-3">
              Ready to experience a better way to recover?
            </h2>

            <p className="text-epsom-muted max-w-2xl mx-auto mt-5 leading-relaxed">
              Discover advanced wellness therapies designed to support
              recovery, rejuvenation, performance and longevity at our{" "}
              {location.name} location.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <BookButton>Book Your Session</BookButton>

              <a
                href={`https://wa.me/919867670762?text=${encodeURIComponent(
                  `Hi, I'd like to book a consultation at Epsom Cryo Spa ${location.name}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY CHOOSE EPSOM
      ========================================================= */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-epsom-maroon uppercase tracking-[0.18em] text-sm font-medium mb-3">
              Why Epsom
            </p>

            <h2 className="section-heading">
              Why Choose Epsom for Your Wellness Journey?
            </h2>
          </div>

          <ul className="grid sm:grid-cols-2 gap-x-10 list-none p-0">
            {whyChooseUs.map((item, i) => (
              <RevealLtr
                key={item.title}
                delay={i * 40}
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
                    {item.title}
                  </h3>

                  {/* <p className="text-epsom-muted text-sm mt-1">
                    {item.description}
                  </p> */}
                </div>
              </RevealLtr>
            ))}
          </ul>
        </div>
      </section>

      {/* =========================================================
          BENEFITS
      ========================================================= */}
      <section className="benefits-band">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="section-heading">
            Benefits of Our Therapies &amp; Treatments
          </h2>

          <div className="benefits-heading-rule" aria-hidden="true" />
        </div>

        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-x-12">
          {benefits.map((benefit) => (
            <div key={benefit} className="benefit-item">
              <span className="benefit-bullet" aria-hidden="true" />

              <p className="text-epsom-ink font-medium">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}
      <FaqSection items={faqItems} />

      {/* =========================================================
          LOCATION
      ========================================================= */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-epsom-maroon text-sm uppercase tracking-[0.18em] font-medium mb-3">
              Visit Us
            </p>

            <h2 className="section-heading !text-3xl md:!text-4xl">
              Epsom Cryo Spa {location.name}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <div className="glass-card rounded-2xl p-7 md:p-9 border border-epsom-crystal/35">
              <h3 className="font-display text-2xl text-epsom-ink">
                Location
              </h3>

              <p className="text-epsom-muted leading-relaxed mt-5">
                {location.address}
              </p>

              <div className="flex flex-wrap gap-4 mt-7">
                <a
                  href={location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  Get Directions
                </a>

                <a href="tel:+919867670762" className="btn-outline">
                  Call Us
                </a>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden min-h-[300px] border border-epsom-crystal/35 shadow-soft">
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  location.address
                )}&output=embed`}
                className="w-full h-full min-h-[300px] border-0"
                loading="lazy"
                title={`Epsom Cryo Spa ${location.name} map`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-heading !text-3xl md:!text-5xl">
            Start Your Wellness Journey at Epsom {location.name}
          </h2>

          <p className="text-epsom-muted text-base md:text-lg mt-5 max-w-2xl mx-auto">
            Book your consultation and discover the right combination of
            recovery, wellness and rejuvenation therapies for you.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <BookButton>Book a Consultation</BookButton>

            <a
              href={`https://wa.me/919867670762?text=${encodeURIComponent(
                `Hi, I'd like to book a consultation at Epsom Cryo Spa ${location.name}.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}