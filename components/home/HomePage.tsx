import Image from "next/image";
import Link from "next/link";
import { BookButton } from "@/components/BookButton";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { RevealLtr } from "@/components/RevealLtr";
import { TreatmentMarquee } from "@/components/TreatmentMarquee";
import { benefits, homeCategorySections, whyChooseUs } from "@/content/home";
import { faqItems, faqSchemaAnswers } from "@/content/faq";
import { normalizeHref, seoNav, SITE_URL } from "@/lib/site";

export function HomePage() {
  const medicalBusiness = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Epsom Cryo Spa",
    description: "Mumbai's Premier Cryotherapy & Wellness Center",
    url: SITE_URL,
    telephone: "+91-9867670762",
    email: "info@epsomcryospa.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kamla Spaces, Shop no.6, S.V Road, Santacruz West",
      addressLocality: "Mumbai",
      postalCode: "400054",
      addressCountry: "IN",
    },
    areaServed: ["Santacruz", "Borivali", "Andheri", "Mumbai"],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqSchemaAnswers.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <main>
      <JsonLd data={medicalBusiness} />
      <JsonLd data={faqSchema} />

      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden">
        <div className="hero-video-wrap absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/assets/images/biohack-banner-2.jpg"
            className="w-full h-full object-cover"
          >
            <source src="/assets/videos/back-2.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-salt-hero" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-10">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
            Mumbai&apos;s Premier Cryotherapy &amp; Wellness Center
          </h1>
          <p className="text-white/90 text-lg md:text-xl mt-6 max-w-2xl mx-auto">
            Advanced recovery, biohacking &amp; luxury wellness treatments — trusted across Santacruz,
            Borivali &amp; Andheri.
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

      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <p className="text-epsom-maroon text-sm uppercase tracking-[0.18em] font-medium mb-3">
              About Epsom Cryo Spa
            </p>
            <h2 className="section-heading !text-3xl md:!text-4xl">
              Science-backed longevity, delivered with calm luxury
            </h2>
            <p className="text-epsom-muted leading-relaxed mt-6 text-base md:text-lg">
              Epsom Cryo Spa is Mumbai&apos;s destination for advanced{" "}
              <span className="text-highlight">cryotherapy</span>,{" "}
              <span className="text-highlight">IV drip therapy</span>, and{" "}
              <span className="text-highlight">biohacking</span> wellness. We combine recovery science
              with spa, aesthetic, and salon rituals under one roof — from whole-body cold exposure and
              hyperbaric oxygen to bespoke massages and clinical facials.
            </p>
            <p className="text-epsom-muted leading-relaxed mt-4 text-base md:text-lg">
              Across Santacruz, Borivali, and Andheri, athletes and wellness seekers trust personalised
              protocols built for real results — energy, recovery, glow, and longevity.
            </p>
            <Link href="/about/" className="btn-outline mt-8">
              Read more
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-2xl border border-epsom-crystal/35 shadow-soft-lg relative">
              <Image
                src="/assets/images/about/about.png"
                alt="Epsom Cryo Spa wellness experience"
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

      {homeCategorySections.map((section) => (
        <section key={section.id} id={section.id} className={section.bandClass}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center mt-12 justify-between  gap-4 mb-8">
              <h2 className="section-heading !text-3xl md:!text-4xl min-w-0 flex-1">{section.title}</h2>
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
      ))}

      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-heading">
              Why Choose Us for Your Wellness &amp; Treatment Therapies?
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
                <span className="text-epsom-maroon mt-1 shrink-0" aria-hidden="true">
                  ✓
                </span>
                <div>
                  <h3 className="font-semibold text-epsom-ink">{item.title}</h3>
                  <p className="text-epsom-muted text-sm mt-1">{item.description}</p>
                </div>
              </RevealLtr>
            ))}
          </ul>
        </div>
      </section>

      <section className="benefits-band">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="section-heading">Benefits of Therapies &amp; Treatments</h2>
          <div className="benefits-heading-rule" aria-hidden="true" />
        </div>
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-x-12">
          {benefits.map((b) => (
            <div key={b} className="benefit-item">
              <span className="benefit-bullet" aria-hidden="true" />
              <p className="text-epsom-ink font-medium">{b}</p>
            </div>
          ))}
        </div>
      </section>

      <FaqSection items={faqItems} />

      <section className="py-12 px-4 border-t border-epsom-crystal/40 bg-epsom-teal">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm uppercase tracking-widest text-epsom-muted mb-4">Popular Searches</h2>
          <p className="text-sm text-epsom-muted leading-relaxed flex flex-wrap gap-x-2 gap-y-1">
            {seoNav.popularSearches.map((s, i) => (
              <span key={s.href} className="inline-flex items-center gap-2">
                <Link href={normalizeHref(s.href)} className="hover:text-epsom-maroon">
                  {s.label}
                </Link>
                {i < seoNav.popularSearches.length - 1 ? <span>|</span> : null}
              </span>
            ))}
            <span className="inline-flex items-center gap-2">
              <span>|</span>
              <Link href="/beauty/" className="hover:text-epsom-maroon">
                Beauty Treatments Mumbai
              </Link>
            </span>
          </p>
        </div>
      </section>
    </main>
  );
}
