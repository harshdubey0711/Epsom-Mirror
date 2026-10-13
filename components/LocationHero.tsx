import Image from "next/image";
import { BookButton } from "@/components/BookButton";
import { FaqSection } from "@/components/FaqSection";
import { TherapyAccordion } from "@/components/TherapyAccordion";
import type { SiteLocation, LocationPageContent } from "@/lib/types";

type LocationPageProps = {
  location: SiteLocation;
  content: LocationPageContent;
};

export function LocationPage({ location, content }: LocationPageProps) {
  const { hero, contact } = content;

  const mapSrc =
    content.visit.mapEmbedUrl ||
    `https://www.google.com/maps?q=${encodeURIComponent(
      `Epsom Wellness ${content.findUs.address}`
    )}&output=embed`;

  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-[78vh] flex items-center justify-center overflow-hidden">
        {/* Mobile image */}
        <Image
          src={hero.imageMobile}
          alt={hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover md:hidden"
        />
        {/* Desktop image */}
        <Image
          src={hero.imageDesktop}
          alt={hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover hidden md:block"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 max-w-4xl px-4 py-20 text-center">
          <h1 className="font-display text-4xl md:text-6xl text-white">
            {hero.title}
          </h1>

          <p className="text-white/90 text-lg mt-6 max-w-2xl mx-auto">
            {hero.subtitle}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <BookButton>Book an Appointment</BookButton>
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading text-center mb-8">
            {content.intro.heading}
          </h2>

          {content.intro.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-epsom-muted leading-relaxed mt-5 first:mt-0"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* THERAPIES (accordion, same design as FAQ) */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-heading text-center mb-10">
            {content.therapies.heading}
          </h2>

          <TherapyAccordion items={content.therapies.items} />
        </div>
      </section>

  
{/* HOW TO FIND US */}
<section className="py-16 px-4">
  <div className="max-w-5xl mx-auto">
    <h2 className="section-heading text-center mb-8">
      {content.findUs.heading}
    </h2>

    <div className="glass-card rounded-2xl p-7">
      {/* ADDRESS */}
      <p className="text-xs uppercase tracking-widest text-epsom-maroon">
        Address
      </p>

      <p className="text-epsom-ink font-medium mt-2">
        {content.findUs.address}
      </p>

      {/* DIRECTIONS */}
      <div className="mt-6">
        <p className="text-xs uppercase tracking-widest text-epsom-maroon mb-4">
          Directions
        </p>

        <div className="flex flex-col gap-6">
          {content.findUs.directions.map((d) => (
            <div key={d.title}>
              <h3 className="font-semibold text-epsom-ink">
                {d.title}
              </h3>

              <p className="text-epsom-muted mt-2 leading-relaxed">
                {d.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* PARKING */}
      <p className="text-epsom-muted mt-6 leading-relaxed">
        <span className="font-semibold text-epsom-ink">
          Parking:
        </span>{" "}
        {content.findUs.parking}
      </p>
    </div>
  </div>
</section>

      {/* REVIEWS */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading text-center mb-10">Client Reviews</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {content.reviews.items.map((review) => (
              <figure key={review.author} className="glass-card rounded-2xl p-7">
                <blockquote className="text-epsom-muted leading-relaxed">
                  “{review.quote}”
                </blockquote>
                <figcaption className="mt-4 text-epsom-ink font-semibold">
                  — {review.author}
                  <span className="font-normal text-epsom-muted">
                    , {review.detail}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ (shared site FAQ component) */}
      <FaqSection items={content.faq.items} title={content.faq.heading} />

      {/* VISIT US */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading text-center mb-8">
            Visit Us – {content.visit.heading}
          </h2>

          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            {/* Left: address + CTAs */}
            <div className="glass-card rounded-2xl p-7 flex flex-col justify-center">
              <p className="text-xs uppercase tracking-widest text-epsom-maroon">
                Address
              </p>
              <p className="text-epsom-muted leading-relaxed mt-2">
                {content.findUs.address}
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <a
                  href={location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  Get Directions
                </a>
                <a href={`tel:${contact.phone}`} className="btn-outline">
                  Call Us
                </a>
              </div>
            </div>

            {/* Right: map */}
            <div className="rounded-2xl overflow-hidden min-h-[300px] md:min-h-[360px]">
              <iframe
                src={mapSrc}
                title={`Map of ${content.visit.heading}`}
                className="w-full h-full min-h-[300px] md:min-h-[360px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-heading">{content.cta.heading}</h2>
          <p className="text-epsom-muted mt-5">{content.cta.description}</p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <BookButton>Book an Appointment</BookButton>
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}