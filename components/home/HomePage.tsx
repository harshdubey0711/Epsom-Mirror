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
import { SITE_URL } from "@/lib/site";

/* WhatsApp booking link (country code + number, no + or spaces) */
const WHATSAPP_NUMBER = "919867670762";
const WHATSAPP_MESSAGE =
  "Hi Epsom Wellness, I would like to book an appointment.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

/* Same size/shape as the "Read more" button (btn-outline), gold fill */
const BOOK_BTN_CLASS =
  "btn-outline whitespace-nowrap !border-[#D4A24C] !bg-[#D4A24C] !text-white shadow-[0_10px_24px_-8px_rgba(60,35,20,0.6)] transition duration-300 hover:-translate-y-0.5 hover:!border-[#C2903B] hover:!bg-[#C2903B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

/* ------------------------------------------------------------------ */
/*  Hero cards (hardcoded). Replace video / poster paths with yours.   */
/* ------------------------------------------------------------------ */
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
  poster: string;
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
    video: "/assets/images/epsom-final-images/reel-web-2.mp4",
    poster: "/assets/images/epsom-final-images/hero-card-1.jpg",
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
    video: "/assets/images/epsom-final-images/reel-web-4.mp4",
    poster: "/assets/images/epsom-final-images/hero-card-2.jpg",
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
    video: "/assets/images/epsom-final-images/reel-web.mp4",
    poster: "/assets/images/home-banner/card-3.jpg",
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
    video: "/assets/images/epsom-final-images/reel-web.mp4",
    poster: "/assets/images/home-banner/card-4.jpg",
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
    video: "/assets/images/epsom-final-images/reel-web.mp4",
    poster: "/assets/images/home-banner/card-5.jpg",
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

      {/* ============================ HERO BANNER ============================ */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#E9DCCF] via-[#DCC8B5] to-[#CDB29D]">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.35),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.25),transparent_50%)]"
          aria-hidden="true"
        />

        <div className="relative mx-auto w-full max-w-[96rem] px-4 py-8 md:px-6 md:py-12 xl:px-4">
          {/* Keeps one H1 on the page for SEO without showing text on the banner */}
          <h1 className="sr-only">
            Advanced Wellness Clinic in Mumbai for Longevity &amp; Recovery
          </h1>

          {/* Below xl: swipeable row. xl and up: 5-column grid. */}
          <ul
            className="-mx-4 flex list-none snap-x snap-mandatory scroll-px-4 gap-3 overflow-x-auto px-4 pb-3 m-0 md:-mx-6 md:scroll-px-6 md:gap-4 md:px-6 xl:mx-0 xl:grid xl:grid-cols-5 xl:gap-4 xl:overflow-visible xl:px-0 xl:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Featured services"
          >
            {heroCards.map((card) => (
              <li
                key={card.id}
                className="flex shrink-0 snap-start basis-[84%] flex-col items-center gap-5 sm:basis-[50%] md:basis-[40%] lg:basis-[31%] xl:min-w-0 xl:basis-auto"
              >
                {/* ---- Card ---- */}
                <article className="relative h-[clamp(600px,84vh,760px)] w-full overflow-hidden rounded-[2rem] border border-white/80 bg-[#8f7565] shadow-[0_18px_40px_-18px_rgba(60,35,20,0.55)]">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    poster={card.poster}
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover object-top"
                  >
                    <source src={card.video} type="video/mp4" />
                  </video>

                  {/* Soft fade from the media into the panel */}
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-[#E9DCCF]/95 via-[#E9DCCF]/40 to-transparent"
                    aria-hidden="true"
                  />

                  {/* Top pill */}
                  <div className="absolute inset-x-4 top-5 md:inset-x-5">
                    <span className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-white/60 bg-white/55 py-1.5 pl-1.5 pr-4 text-[0.9rem] font-medium leading-tight text-epsom-ink backdrop-blur-md">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-epsom-ink">
                        <HeroIcon name={card.pillIcon} className="h-5 w-5" />
                      </span>
                      <span className="min-w-0 max-w-[9.5rem] [text-wrap:balance]">
                        {card.pill}
                      </span>
                    </span>
                  </div>

                  {/* Frosted info panel: compact, flush with the card edges */}
                  <div className="absolute inset-x-0 bottom-0 h-[13rem] overflow-hidden rounded-t-[1.75rem] border-t border-white/70 bg-gradient-to-b from-white/55 to-white/35 px-4 pb-4 pt-4 backdrop-blur-xl md:px-5">
                    {/* Small min height just keeps the dividers level across cards */}
                    <div className="flex min-h-[4.25rem] items-start gap-3">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-epsom-ink">
                        <HeroIcon name={card.panelIcon} className="h-6 w-6" />
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

                {/* ---- Book Now (WhatsApp) ---- */}
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
      </section>

      {/* ============================== ABOUT ============================== */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <p className="text-epsom-maroon text-sm uppercase tracking-[0.18em] font-medium mb-3">
              About Epsom Wellness
            </p>

            <p className="text-epsom-muted leading-relaxed mt-6 text-base md:text-lg">
              Welcome to Epsom Wellness, the leading wellness clinic in Mumbai
              dedicated to transforming your health from the cellular level. As
              a premier wellness &amp; longevity clinic in Mumbai, we combine
              advanced biohacking technology with personalized, science-backed
              therapies.
            </p>

            <p className="text-epsom-muted leading-relaxed mt-4 text-base md:text-lg">
              Whether your goal is cellular regeneration, chronic pain relief,
              aesthetic rejuvenation, or athletic performance, our integrated
              medical-wellness approach helps you achieve peak vitality and
              long-term well-being.
            </p>

            <Link href="/about/" className="btn-outline mt-8">
              Read more
            </Link>
          </div>

          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-2xl border border-epsom-crystal/35 shadow-soft-lg relative">
              <Image
                src="/assets/images/imagesEpsom/home-feature.png"
                alt="Epsom Wellness wellness experience"
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

      {/* ========================= CATEGORY SECTIONS ========================= */}
      {homeCategorySections.map((section) => (
        <section key={section.id} id={section.id} className={section.bandClass}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between gap-4 mt-12 mb-8">
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
      ))}

      {/* ============================ WHY CHOOSE US ============================ */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-heading">Why Choose Us?</h2>
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
                </div>
              </RevealLtr>
            ))}
          </ul>
        </div>
      </section>

      {/* ============================== BENEFITS ============================== */}
      <section className="benefits-band">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="section-heading">
            Benefits of Therapies &amp; Treatments
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

      {/* ================================= FAQ ================================= */}
      <FaqSection title="Epsom Wellness & Longevity FAQs" items={faqItems} />

      {/* ============================ WELLNESS NOTE ============================ */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl text-epsom-ink">
            {wellnessNote.title}
          </h2>

          <p className="text-epsom-muted mt-4 leading-relaxed">
            {wellnessNote.description}
          </p>
        </div>
      </section>

      {/* Popular Searches section removed for now.
          To re-enable, import { normalizeHref, seoNav } from "@/lib/site"
          and restore the block. */}
    </main>
  );
}