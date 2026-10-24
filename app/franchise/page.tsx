import Image from "next/image";
import { FranchiseEnquiryForm } from "@/components/FranchiseEnquiryForm";
import {
  franchiseClosing,
  franchiseEnquiry,
  franchiseFormats,
  franchiseHero,
  franchiseInvestment,
  franchiseOpportunities,
  franchisePartnership,
  franchiseWhyPartner,
} from "@/content/franchise";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Franchise | Epsom Wellness & Longevity",
  description:
    "Explore premium wellness and longevity franchise opportunities with Epsom Wellness & Longevity. Choose a format that suits your investment and space.",
  path: "/franchise/",
});

export default function FranchisePage() {
  const phone = siteConfig.contact.phones[1] || siteConfig.contact.phones[0];
  const phoneDisplay = phone.replace(/^\+91/, "+91-");
  const email = siteConfig.contact.email;

  return (
    <main>
      {/* 1. Hero */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/assets/images/epsom-final-images/franchise.webp"
          alt="Epsom Wellness & Longevity franchise opportunities"
          fill
          priority
          unoptimized
          className="object-cover object-[50%_35%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-16">
          <p className="text-white/80 text-sm uppercase tracking-[0.18em] font-medium mb-3">
            {franchiseHero.eyebrow}
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
            {franchiseHero.title}
          </h1>
          <p className="text-white/90 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            {franchiseHero.subtitle}
          </p>
          <a href="#formats" className="btn-primary inline-block mt-8">
            {franchiseHero.cta}
          </a>
        </div>
      </section>

      {/* 2. Franchise Opportunities */}
      <section id="formats" className="py-16 md:py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-epsom-maroon text-sm uppercase tracking-[0.18em] font-medium mb-3">
              {franchiseOpportunities.eyebrow}
            </p>
            <h2 className="section-heading !text-3xl md:!text-4xl">
              {franchiseOpportunities.title}
            </h2>
            <p className="text-epsom-muted mt-6 leading-relaxed text-base md:text-lg">
              {franchiseOpportunities.intro}
            </p>
          </div>

          <ul className="grid sm:grid-cols-3 gap-6 list-none p-0">
            {franchiseFormats.map((item) => (
              <li key={item.format} className="glass-card p-8 text-center">
                <p className="text-epsom-muted text-xs uppercase tracking-[0.18em]">
                  Format
                </p>
                <h3 className="font-display text-2xl text-epsom-ink mt-1">
                  {item.format}
                </h3>
                <p className="text-epsom-muted text-xs uppercase tracking-[0.18em] mt-6">
                  Space
                </p>
                <p className="text-epsom-ink font-medium mt-1">{item.space}</p>
                <p className="text-epsom-muted text-xs uppercase tracking-[0.18em] mt-6">
                  Indicative CAPEX
                </p>
                <p className="font-display text-2xl text-epsom-maroon mt-1">
                  {item.capex}
                </p>
              </li>
            ))}
          </ul>

          <div className="text-center mt-10">
            <a href="#enquire" className="btn-primary inline-block">
              {franchiseOpportunities.cta}
            </a>
          </div>
        </div>
      </section>

      {/* 3. Why Partner */}
      <section className="py-16 md:py-24 px-4 bg-epsom-mist">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-epsom-maroon text-sm uppercase tracking-[0.18em] font-medium mb-3">
              {franchiseWhyPartner.eyebrow}
            </p>
            <h2 className="section-heading !text-3xl md:!text-4xl">
              {franchiseWhyPartner.title}
            </h2>
            <p className="text-epsom-muted mt-6 leading-relaxed">
              {franchiseWhyPartner.intro}
            </p>
          </div>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 list-none p-0">
            {franchiseWhyPartner.items.map((item) => (
              <li key={item.title} className="glass-card p-6">
                <h3 className="font-semibold text-epsom-ink">{item.title}</h3>
                <p className="text-epsom-muted text-sm mt-2 leading-relaxed">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. Investment */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-epsom-maroon text-sm uppercase tracking-[0.18em] font-medium mb-3">
            {franchiseInvestment.eyebrow}
          </p>
          <h2 className="section-heading !text-3xl md:!text-4xl">
            {franchiseInvestment.title}
          </h2>
          <p className="text-epsom-ink font-medium mt-6">
            {franchiseInvestment.intro}
          </p>
          <p className="text-epsom-muted mt-4 leading-relaxed">
            {franchiseInvestment.body}
          </p>
          <a href="#enquire" className="btn-primary inline-block mt-8">
            {franchiseInvestment.cta}
          </a>
          <p className="text-epsom-muted text-xs mt-8 leading-relaxed">
            {franchiseInvestment.disclaimer}
          </p>
        </div>
      </section>

      {/* 5. Partnership */}
      <section className="py-16 md:py-24 px-4 bg-epsom-soft/40">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-epsom-maroon text-sm uppercase tracking-[0.18em] font-medium mb-3">
            {franchisePartnership.eyebrow}
          </p>
          <h2 className="section-heading !text-3xl md:!text-4xl">
            {franchisePartnership.title}
          </h2>
          <div className="mt-6 space-y-4 text-epsom-muted leading-relaxed">
            {franchisePartnership.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <a href="#enquire" className="btn-primary inline-block mt-8">
            {franchisePartnership.cta}
          </a>
        </div>
      </section>

      {/* 6. Enquiry */}
      <section id="enquire" className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-epsom-maroon text-sm uppercase tracking-[0.18em] font-medium mb-3">
              {franchiseEnquiry.eyebrow}
            </p>
            <h2 className="section-heading !text-3xl md:!text-4xl">
              {franchiseEnquiry.title}
            </h2>
            <p className="text-epsom-muted mt-6 leading-relaxed">
              {franchiseEnquiry.note}
            </p>
            <div className="mt-10 space-y-4">
              <p>
                <a
                  href={`tel:${phone}`}
                  className="text-epsom-ink font-medium hover:text-epsom-maroon"
                >
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

      {/* 7. Closing banner */}
      <section className="py-16 md:py-24 px-4 bg-epsom-ink text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl text-white leading-tight">
            {franchiseClosing.title}
          </h2>
          <p className="text-white/80 mt-6 text-lg leading-relaxed">
            {franchiseClosing.subtitle}
          </p>
          <a href="#enquire" className="btn-primary inline-block mt-8">
            {franchiseClosing.cta}
          </a>
        </div>
      </section>
    </main>
  );
}