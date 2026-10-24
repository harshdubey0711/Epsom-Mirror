import { BookButton } from "@/components/BookButton";
import { ResponsiveHeroImage } from "@/components/ResponsiveHeroImage";
import { aboutData } from "@/content/about";
import { buildMetadata } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";

export const metadata = buildMetadata({
  title: aboutData.metadata.title,
  description: aboutData.metadata.description,
  path: aboutData.metadata.path,
});

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
        <ResponsiveHeroImage
                    desktopSrc={aboutData.hero.image}
                    mobileSrc={aboutData.hero.mobileImage}
                    alt={aboutData.hero.imageAlt}
                  />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-16">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
            {aboutData.hero.heading}
          </h1>

          <p className="font-epsom-display text-white/90 mt-4 leading-relaxed">
            {aboutData.hero.description}
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-white/40 py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading !text-3xl md:!text-4xl">
            {aboutData.story.heading}
          </h2>

          <div className="flex flex-col md:flex-row items-start gap-8 mt-8">
            {/* Story Content */}
            <div className="flex flex-col gap-4 w-full md:w-1/2">
              <h3 className="text-xl md:text-2xl font-display text-epsom-ink">
                {aboutData.story.subheading}
              </h3>

              {aboutData.story.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-epsom-muted leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Story Image */}
            <div className="relative w-full md:w-1/2 h-[350px] md:h-[500px] overflow-hidden rounded-2xl">
              <Image
                src={aboutData.story.image}
                alt={aboutData.story.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy & Promise Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading !text-3xl md:!text-4xl text-center">
            {aboutData.philosophy.heading}
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {/* Vision */}
            <div className="glass-card p-8">
              <h3 className="font-display text-2xl text-epsom-maroon mb-4">
                {aboutData.philosophy.vision.title}
              </h3>

              <p className="text-epsom-muted leading-relaxed">
                {aboutData.philosophy.vision.description}
              </p>
            </div>

            {/* Promise */}
            <div className="glass-card p-8">
              <h3 className="font-display text-2xl text-epsom-maroon mb-4">
                {aboutData.philosophy.promise.title}
              </h3>

              <p className="text-epsom-muted leading-relaxed">
                {aboutData.philosophy.promise.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Pillars Section */}
      <section className="bg-white/40 py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading !text-3xl md:!text-4xl text-center">
            {aboutData.servicePillars.heading}
          </h2>

          <p className="text-epsom-muted text-center max-w-3xl mx-auto mt-4 leading-relaxed">
            {aboutData.servicePillars.description}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {aboutData.servicePillars.services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="glass-card-hover glass-card p-6 flex flex-col h-full group"
              >
                {service.category && (
                  <span className="text-xs tracking-[0.2em] uppercase text-epsom-maroon mb-4">
                    {service.category}
                  </span>
                )}

                <h3 className="font-display text-xl text-epsom-ink leading-snug">
                  {service.title}
                </h3>

                <p className="text-epsom-muted text-sm leading-relaxed mt-4">
                  {service.description}
                </p>

                <span className="text-sm text-epsom-maroon mt-6 inline-flex items-center gap-2">
                  Explore Services
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading !text-3xl md:!text-4xl text-center">
            {aboutData.locations.heading}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {aboutData.locations.cities.map((city) => (
              <div
                key={city.name}
                className="glass-card p-6 text-center"
              >
                <h3 className="font-display text-xl text-epsom-ink">
                  {city.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats & CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutData.stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card p-6 text-center"
              >
                <p className="text-3xl md:text-4xl font-display text-epsom-maroon">
                  {stat.value}
                </p>

                <p className="text-epsom-muted text-sm mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <h2 className="font-display text-2xl md:text-3xl text-epsom-ink mb-6">
              {aboutData.cta.heading}
            </h2>

            <BookButton>
              {aboutData.cta.buttonText}
            </BookButton>
          </div>
        </div>
      </section>
    </main>
  );
}