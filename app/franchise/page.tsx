import Image from "next/image";
import { FranchiseEnquiryForm } from "@/components/FranchiseEnquiryForm";
import {
  franchiseIdealPartner,
  franchiseOfferings,
  franchiseRegions,
  franchiseSteps,
  franchiseWhyPartner,
} from "@/content/franchise";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Franchise | Epsom Cryo Spa",
  description:
    "Explore franchise and pan-India expansion opportunities with Epsom Cryo Spa — Mumbai's premier cryotherapy and wellness brand.",
  path: "/franchise/",
});

export default function FranchisePage() {
  const phone = siteConfig.contact.phones[1] || siteConfig.contact.phones[0];
  const phoneDisplay = phone.replace(/^\+91/, "+91-");
  const email = siteConfig.contact.email;

  return (
    <main>
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* TODO: replace franchise-banner.svg with franchise-banner.png when final art is ready */}
        <Image
          src="/assets/images/franchise/franchise-banner.svg"
          alt="Franchise and pan-India expansion at Epsom Cryo Spa"
          fill
          priority
          unoptimized
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-16">
          <p className="text-white/80 text-sm uppercase tracking-[0.18em] font-medium mb-3">
            Expansion &amp; Franchise Vision
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
            Franchise &amp; Pan-India Expansion
          </h1>
          <p className="text-white/90 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            From Mumbai&apos;s leading cryotherapy and biohacking wellness centers to strategic
            partnerships across India.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-heading !text-3xl md:!text-4xl">
            Building The Future Of Wellness In India
          </h2>
          <div className="mt-8 space-y-5 text-epsom-muted leading-relaxed text-base md:text-lg">
            <p>
              Epsom Cryo Spa is rapidly evolving into one of India&apos;s most innovative luxury wellness
              and recovery brands.
            </p>
            <p>
              With successful expansion across Mumbai, our vision now extends beyond city boundaries —
              bringing advanced wellness, cryotherapy, recovery science, aesthetics, and biohacking
              experiences to new markets through strategic expansion and franchise partnerships.
            </p>
            <p>
              We are building a scalable wellness ecosystem designed for the future — combining luxury
              experiences, operational excellence, advanced therapies, and modern wellness technologies
              under one trusted brand.
            </p>
            <p>
              As demand for premium wellness and recovery continues to rise across India, Epsom Cryo Spa
              aims to become a leading destination for individuals seeking performance, longevity,
              recovery, and holistic self-care.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 bg-epsom-mist">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-epsom-maroon text-sm uppercase tracking-[0.18em] font-medium mb-3">
              Why Partner With Us
            </p>
            <h2 className="section-heading !text-3xl md:!text-4xl">
              A Proven Wellness Brand Ready To Scale
            </h2>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0">
            {franchiseWhyPartner.map((item) => (
              <li key={item.title} className="glass-card p-6">
                <h3 className="font-semibold text-epsom-ink">{item.title}</h3>
                <p className="text-epsom-muted text-sm mt-2 leading-relaxed">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-epsom-maroon text-sm uppercase tracking-[0.18em] font-medium mb-3">
              What We Offer
            </p>
            <h2 className="section-heading !text-3xl md:!text-4xl">One Brand, Complete Wellness</h2>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0 max-w-5xl mx-auto">
            {franchiseOfferings.map((item) => (
              <li key={item.title} className="border-l-4 border-epsom-maroon/40 pl-5 py-2">
                <h3 className="font-semibold text-epsom-ink">{item.title}</h3>
                <p className="text-epsom-muted text-sm mt-2 leading-relaxed">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 bg-epsom-soft/40">
        <div className="max-w-3xl mx-auto">
          <p className="text-epsom-maroon text-sm uppercase tracking-[0.18em] font-medium mb-3">
            Ideal Partner
          </p>
          <h2 className="section-heading !text-3xl md:!text-4xl">Who We&apos;re Looking For</h2>
          <p className="text-epsom-muted mt-6 leading-relaxed">
            We welcome enquiries from entrepreneurs, wellness investors, and business leaders who share
            our commitment to premium service and long-term brand building.
          </p>
          <ul className="mt-8 space-y-4 list-none p-0">
            {franchiseIdealPartner.map((item) => (
              <li key={item} className="flex gap-3 items-start">
                <span className="text-epsom-maroon mt-1 shrink-0" aria-hidden="true">
                  ✓
                </span>
                <span className="text-epsom-ink">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-epsom-maroon text-sm uppercase tracking-[0.18em] font-medium mb-3">
              Pan-India Expansion
            </p>
            <h2 className="section-heading !text-3xl md:!text-4xl">Open To Partners Across India</h2>
            <p className="text-epsom-muted mt-6 leading-relaxed">
              We are actively exploring franchise and expansion opportunities nationwide. Priority markets
              include high-demand urban centers, but we welcome serious enquiries from any city or region
              in India.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 list-none p-0">
            {franchiseRegions.map((item) => (
              <li key={item.region} className="glass-card p-5 text-center">
                <h3 className="font-semibold text-epsom-maroon">{item.region}</h3>
                <p className="text-epsom-muted text-sm mt-2 leading-relaxed">{item.cities}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 bg-epsom-mist">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-epsom-maroon text-sm uppercase tracking-[0.18em] font-medium mb-3">
              How It Works
            </p>
            <h2 className="section-heading !text-3xl md:!text-4xl">Partnership Process</h2>
          </div>
          <ol className="grid sm:grid-cols-2 gap-8 list-none p-0">
            {franchiseSteps.map((item) => (
              <li key={item.step} className="flex gap-4">
                <span className="font-display text-3xl text-epsom-maroon shrink-0">{item.step}</span>
                <div>
                  <h3 className="font-semibold text-epsom-ink text-lg">{item.title}</h3>
                  <p className="text-epsom-muted text-sm mt-2 leading-relaxed">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="enquire" className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-epsom-maroon text-sm uppercase tracking-[0.18em] font-medium mb-3">
              Get In Touch
            </p>
            <h2 className="section-heading !text-3xl md:!text-4xl">
              Franchise &amp; Expansion Enquiries
            </h2>
            <p className="text-epsom-muted mt-6 leading-relaxed">
              Tell us about your interest in bringing Epsom Cryo Spa to your city. Our expansion team will
              respond to qualified enquiries.
            </p>
            <div className="mt-10 space-y-4">
              <p>
                <a href={`tel:${phone}`} className="text-epsom-ink font-medium hover:text-epsom-maroon">
                  {phoneDisplay}
                </a>
              </p>
              <p>
                <a href={`mailto:${email}`} className="text-epsom-maroon hover:underline">
                  {email}
                </a>
              </p>
            </div>
          </div>
          <FranchiseEnquiryForm />
        </div>
      </section>
    </main>
  );
}
