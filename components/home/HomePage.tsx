
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { RevealLtr } from "@/components/RevealLtr";
import { TreatmentMarquee } from "@/components/TreatmentMarquee";
import {
  benefits,
  homeCategorySections,
  whyChooseUs,
  wellnessNote,
} from "@/content/home";
import { faqItems, faqSchemaAnswers } from "@/content/faq";
import { asset } from "@/lib/assets";
import { SITE_URL, whatsappChatUrl } from "@/lib/site";

const WHATSAPP_URL = whatsappChatUrl();

const BOOK_BTN_CLASS =
  "btn-outline whitespace-nowrap !border-[#D4A24C] !bg-[#D4A24C] !text-white shadow-[0_10px_24px_-8px_rgba(60,35,20,0.6)] transition duration-300 hover:-translate-y-0.5 hover:!border-[#C2903B] hover:!bg-[#C2903B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

const HERO_DESIGN_WIDTH = 1280;

type HeroIconName = "snow" | "drop" | "body" | "pulse" | "drip" | "skin";

type HeroCard = {
  id: string;
  pill: string;
  pillIcon: HeroIconName;
  title: string;
  panelIcon: HeroIconName;
  tagline: string;
  description: string;
  video: string;
};

const heroCards: HeroCard[] = [
  {
    id: "cryotherapy",
    pill: "Advanced cold therapy",
    pillIcon: "snow",
    title: "Cryotherapy",
    panelIcon: "snow",
    tagline: "Recover. Reset. Recharge.",
    description:
      "Advanced cold therapy for recovery, revitalisation, and total-body wellness.",
    video: asset("/assets/images/epsom-final-images/cryotherapy-vid.mp4"),
  },
  {
    id: "hbot",
    pill: "Advanced oxygen therapy",
    pillIcon: "drop",
    title: "HBOT",
    panelIcon: "drop",
    tagline: "Breathe better. Recover smarter.",
    description:
      "Discover advanced oxygen therapy designed to support recovery and overall wellness.",
    video: asset("/assets/images/epsom-final-images/hbot-vid.mp4"),
  },
  {
    id: "fat-loss-laser",
    pill: "Advanced body-contouring",
    pillIcon: "body",
    title: "Fat Loss Laser",
    panelIcon: "body",
    tagline: "Sculpt your body. Elevate your confidence.",
    description:
      "Advanced body-contouring solutions tailored to your aesthetic goals.",
    video: asset("/assets/images/epsom-final-images/cryolipolysis-vid.mp4"),
  },
  {
    id: "iv-drip",
    pill: "Fat-freezing technology",
    pillIcon: "pulse",
    title: "IV Drip",
    panelIcon: "drip",
    tagline: "Replenish within. Feel revitalised.",
    description:
      "Personalised IV wellness solutions designed around your individual needs.",
    video: asset("/assets/images/epsom-final-images/IV-Drip-Vid.mp4"),
  },
  {
    id: "skin-lift",
    pill: "Advanced skin treatments",
    pillIcon: "skin",
    title: "Skin Lift",
    panelIcon: "skin",
    tagline: "Lift your glow. Reveal your radiance.",
    description:
      "Advanced skin treatments for a firmer, smoother-looking complexion.",
    video: asset("/assets/images/epsom-final-images/skin-lift.mp4"),
  },
];

const heroIconPaths: Record<HeroIconName, string> = {
  snow: "M2 12h20M12 2v20m8-4-4-4 4-4M4 8l4 4-4 4m12-12-4 4-4-4M8 20l4-4 4 4",
  drop: "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",
  body: "M8.5 3h7l1.5 6-2 3.5.5 8.5h-8l.5-8.5L7 9zM2.5 12h3m0 0L4 10.5M5.5 12 4 13.5M21.5 12h-3m0 0 1.5-1.5M18.5 12l1.5 1.5",
  pulse:
    "M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7zM3.2 12h6.3l.5-1 2 4.5 2-7 1.5 3.5h5.3",
  drip: "M12 2v2M8 4h8v8a4 4 0 0 1-8 0V4zM10 8h4M12 16v6",
  skin: "M12 2.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zM4 15l8 3.5L20 15M4 19l8 3.5 8-3.5",
};

function HeroIcon({
  name,
  className = "h-5 w-5",
}: {
  name: HeroIconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={heroIconPaths[name]} />
    </svg>
  );
}

export function HomePage() {
  const heroWrapRef = useRef<HTMLDivElement>(null);
  const heroInnerRef = useRef<HTMLUListElement>(null);

  const [heroFit, setHeroFit] = useState<{
    scale: number;
    height: number | null;
  }>({ scale: 1, height: null });

  useEffect(() => {
    const wrap = heroWrapRef.current;
    const inner = heroInnerRef.current;

    if (!wrap || !inner) return;

    const update = () => {
      if (window.innerWidth >= HERO_DESIGN_WIDTH) {
        setHeroFit({ scale: 1, height: null });
        return;
      }

      const scale = wrap.clientWidth / HERO_DESIGN_WIDTH;

      setHeroFit({
        scale,
        height: inner.offsetHeight * scale,
      });
    };

    update();

    const ro = new ResizeObserver(update);
    ro.observe(wrap);
    ro.observe(inner);

    window.addEventListener("resize", update);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

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
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <main>
      <JsonLd data={medicalBusiness} />
      <JsonLd data={faqSchema} />

      {/* ============================ HERO BANNER ============================ */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#E9DCCF] via-[#DCC8B5] to-[#CDB29D]">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.35),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.25),transparent_50%)]"
          aria-hidden="true"
        />

        <div className="relative mx-auto w-full max-w-[96rem] px-2 pt-4 pb-10 md:px-4 md:pt-8 md:pb-12 xl:px-4 xl:pt-12 xl:pb-14">
          <h1 className="sr-only">
            Advanced Wellness Clinic in Mumbai for Longevity &amp; Recovery
          </h1>

          <div
            ref={heroWrapRef}
            className="relative w-full overflow-hidden xl:overflow-visible"
            style={
              heroFit.height != null ? { height: heroFit.height } : undefined
            }
          >
            <ul
              ref={heroInnerRef}
              className="m-0 grid w-[1280px] list-none grid-cols-5 gap-4 p-0 px-4 pb-4 origin-top-left xl:w-full xl:px-0 xl:pb-0"
              style={
                heroFit.scale !== 1
                  ? { transform: `scale(${heroFit.scale})` }
                  : undefined
              }
              aria-label="Featured services"
            >
              {heroCards.map((card) => (
                <li
                  key={card.id}
                  className="flex min-w-0 flex-col items-center gap-5"
                >
                  <article className="relative h-[clamp(600px,84vh,760px)] w-full overflow-hidden rounded-[2rem] border border-white/80 bg-[#8f7565] shadow-[0_18px_40px_-18px_rgba(60,35,20,0.55)]">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      aria-hidden="true"
                      className="absolute inset-0 h-full w-full object-cover object-top"
                    >
                      <source src={card.video} type="video/mp4" />
                    </video>

                    <div
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-[#E9DCCF]/95 via-[#E9DCCF]/40 to-transparent"
                      aria-hidden="true"
                    />

                    <div className="absolute inset-x-4 top-5 md:inset-x-5">
                      <span className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-white/60 bg-white/55 py-1.5 pl-1.5 pr-4 text-[0.9rem] font-medium leading-tight text-epsom-ink backdrop-blur-md">
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-epsom-ink">
                          <HeroIcon
                            name={card.pillIcon}
                            className="h-5 w-5"
                          />
                        </span>
                        <span className="min-w-0 max-w-[9.5rem] [text-wrap:balance]">
                          {card.pill}
                        </span>
                      </span>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 h-[13rem] overflow-hidden rounded-t-[1.75rem] border-t border-white/70 bg-gradient-to-b from-white/55 to-white/35 px-4 pb-4 pt-4 backdrop-blur-xl md:px-5">
                      <div className="flex min-h-[4.25rem] items-start gap-3">
                        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-epsom-ink">
                          <HeroIcon
                            name={card.panelIcon}
                            className="h-6 w-6"
                          />
                        </span>

                        <div className="min-w-0 flex-1">
                          <h2 className="font-display text-[clamp(1rem,1.15vw,1.3rem)] font-semibold uppercase leading-[1.1] text-epsom-ink [overflow-wrap:normal] [word-break:normal]">
                            {card.title}
                          </h2>

                          <p className="mt-1 text-[0.72rem] uppercase leading-snug tracking-[0.02em] text-epsom-ink/80">
                            {card.tagline}
                          </p>
                        </div>
                      </div>

                      <span
                        className="block h-0.5 w-9 bg-epsom-ink/80"
                        aria-hidden="true"
                      />

                      <p className="mt-2.5 text-[0.875rem] leading-relaxed text-epsom-ink/85">
                        {card.description}
                      </p>
                    </div>
                  </article>

                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Book ${card.title} on WhatsApp`}
                    className={BOOK_BTN_CLASS}
                  >
                    Book Now
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============================== ABOUT ============================== */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
          {/* Text column */}
          <div className="min-w-0">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-epsom-maroon">
              About Epsom Wellness
            </p>

            <h2 className="font-display text-3xl leading-tight text-epsom-ink md:text-4xl">
              Wellness, Recovery &amp; Longevity
            </h2>

            <p className="mt-6 text-base leading-relaxed text-epsom-muted md:text-lg">
              Welcome to Epsom Wellness, the leading wellness clinic in Mumbai
              dedicated to transforming your health from the cellular level. As
              a premier wellness &amp; longevity clinic in Mumbai, we combine
              advanced biohacking technology with personalized, science-backed
              therapies.
            </p>

            <p className="mt-4 text-base leading-relaxed text-epsom-muted md:text-lg">
             Whether you want to improve your overall health, manage pain, refresh your appearance, or boost athletic performance, our wellness treatments help you feel better, look your best, and stay healthy for longer.
            </p>

            <Link href="/about/" className="btn-outline mt-8 inline-flex">
              Read more
            </Link>
          </div>

          {/* Image column */}
          <div className="relative mx-auto w-full max-w-xl md:mx-0 md:max-w-none">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-epsom-crystal/35 shadow-soft-lg md:aspect-[5/4]">
              <Image
                src="/assets/images/epsom-final-images/home-feature.webp"
                alt="Epsom Wellness wellness experience"
                fill
                priority
                sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 600px"
                className="object-cover"
              />
            </div>

            <div
              className="pointer-events-none absolute -bottom-3 -left-3 hidden h-24 w-24 rounded-2xl border border-epsom-maroon/40 md:block"
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      {/* ========================= CATEGORY SECTIONS ========================= */}
      {homeCategorySections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className={section.bandClass}
        >
          <div className="mx-auto max-w-7xl px-4">
            <div className="mt-10 mb-6 flex items-center justify-between gap-3 sm:gap-4 md:mt-12 md:mb-8">
              <h2 className="section-heading !m-0 min-w-0 flex-1 !text-xl !leading-tight sm:!text-3xl md:!text-4xl">
                {section.title}
              </h2>

              <Link
                href={`/${section.slug}/`}
                className="btn-ghost shrink-0 !px-2 !py-1 !text-right !text-[0.7rem] leading-tight sm:!px-4 sm:!py-2 sm:!text-base sm:whitespace-nowrap"
              >
                View All
                <span className="hidden sm:inline"> Treatments</span> →
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

      {/* ============================ WHY CHOOSE US ============================ */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="section-heading">Why Choose Us?</h2>
          </div>

          <ul className="grid list-none gap-x-10 p-0 sm:grid-cols-2">
            {whyChooseUs.map((item, i) => (
              <RevealLtr
                key={item.title}
                delay={i * 40}
                className={`flex gap-4 border-b border-epsom-crystal/35 py-5${
                  i >= 4 ? " sm:border-b-0" : ""
                }${i === 5 ? " border-b-0" : ""}`}
              >
                <span
                  className="mt-1 shrink-0 text-epsom-maroon"
                  aria-hidden="true"
                >
                  ✓
                </span>

                <div>
                  <h3 className="font-semibold text-epsom-ink">
                    {item.title}
                  </h3>
                </div>
              </RevealLtr>
            ))}
          </ul>
        </div>
      </section>

      {/* ============================== BENEFITS ============================== */}
      <section className="benefits-band">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="section-heading">
            Benefits of Therapies &amp; Treatments
          </h2>
          <div className="benefits-heading-rule" aria-hidden="true" />
        </div>

        <div className="mx-auto grid max-w-5xl gap-x-12 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <div key={benefit} className="benefit-item">
              <span className="benefit-bullet" aria-hidden="true" />
              <p className="font-medium text-epsom-ink">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================================= FAQ ================================= */}
      <FaqSection
        title="Epsom Wellness & Longevity FAQs"
        items={faqItems}
      />

      {/* ============================ WELLNESS NOTE ============================ */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-2xl text-epsom-ink md:text-3xl">
            {wellnessNote.title}
          </h2>

          <p className="mt-4 leading-relaxed text-epsom-muted">
            {wellnessNote.description}
          </p>
        </div>
      </section>

      {/* Popular Searches section removed for now. */}
    </main>
  );
}
