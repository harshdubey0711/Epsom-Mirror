import type { TreatmentCard } from "@/lib/types";

export const whyChooseUs = [
  {
    title: "Mumbai's first advanced cryotherapy & biohacking center",
    description: "Pioneer-level recovery tech in a luxury clinical spa setting.",
  },
  {
    title: "Certified & experienced therapists",
    description: "Trained professionals focused on safety and results.",
  },
  {
    title: "Science-backed, safe & non-invasive",
    description: "Protocols designed for measurable wellness outcomes.",
  },
  {
    title: "3 convenient Mumbai locations",
    description: "Santacruz, Borivali, and Andheri — closer to your routine.",
  },
  {
    title: "Personalized treatment plans",
    description: "Every protocol is tailored to your goals and lifestyle.",
  },
  {
    title: "All services under one roof",
    description: "Bio Hack, IV Drip, Spa, Aesthetic, and Salon together.",
  },
];

export const benefits = [
  "Faster muscle recovery",
  "Reduced inflammation & stress",
  "Improved circulation & energy",
  "Better sleep quality",
  "Anti-aging & skin rejuvenation",
  "Enhanced athletic performance",
  "Mental clarity & focus",
  "Detoxification",
];

export type HomeCategorySection = {
  id: string;
  slug: string;
  title: string;
  bandClass: string;
  slow?: boolean;
  treatments: TreatmentCard[];
};

export const homeCategorySections: HomeCategorySection[] = [
  {
    id: "health-optimisation",
    slug: "health-optimisation-longevity",
    title: "Health Optimisation & Longevity",
    bandClass: "category-band bg-epsom-soft/50",
    slow: true,
    treatments: [
      {
        slug: "cryotherapy",
        name: "Cryotherapy",
        description: "Whole-body cold therapy for recovery and energy.",
        image: "/assets/images/bio-hack/cryochamber.png",
      },
      {
        slug: "hyperbaric-oxygen-therapy",
        name: "Oxygen Therapy (HBOT)",
        description: "Enhanced oxygen for clarity and cellular recovery.",
        image: "/assets/images/bio-hack/Hyperbaric_Oxygen_Therapy.jpg",
      },
      {
        slug: "iv-drip-therapy",
        name: "IV Drip Therapy",
        description: "Nutrient infusions for immunity, glow, and vitality.",
        image: "/assets/images/iv-drip/intravenous-therapy-wide-2.jpg",
      },
      {
        slug: "red-light-therapy",
        name: "Red Light Therapy",
        description: "Cellular repair, collagen, and skin rejuvenation.",
        image: "/assets/images/bio-hack/Red_light_Collagen_Bed_Therapy.jpg",
      },
      {
        slug: "epsom-salt-sauna",
        name: "Epsom Salt Sauna",
        description: "Mineral heat for detox and deep relaxation.",
        image: "/assets/images/bio-hack/salt-sauna.png",
      },
      {
        slug: "compression-therapy",
        name: "Compression Therapy",
        description: "Dynamic pressure for circulation and recovery.",
        image: "/assets/images/bio-hack/compression.jpg",
      },
      {
        slug: "infrared-body-wrap",
        name: "Infrared Body Wrap",
        description: "Deep heat wrap for detox and contour support.",
        image: "/assets/images/bio-hack/Infrared_body_wrap.jpeg",
      },
      {
        slug: "collagen-light-therapy",
        name: "Collagen Light Therapy",
        description: "Light-based support for skin firmness and glow.",
        image: "/assets/images/bio-hack/Red_light_Collagen_Bed_Therapy.jpg",
      },
      {
        slug: "health-wellness-blood-test",
        name: "Health & Wellness Blood Test",
        description: "Data-led insights for personalised wellness plans.",
        image: "/assets/images/services/card-1.jpg",
      },
      {
        slug: "medical-consultation",
        name: "Medical Consultation",
        description: "Expert guidance before advanced protocols.",
        image: "/assets/images/services/card-2.jpg",
      },
      {
        slug: "body-composition-analysis",
        name: "Body Composition Analysis",
        description: "Track fat, muscle, and metabolic markers.",
        image: "/assets/images/services/card-3.jpg",
      },
    ],
  },
  {
    id: "pain-management",
    slug: "pain-management",
    title: "Pain Management",
    bandClass: "category-band bg-epsom-mist",
    treatments: [
      {
        slug: "cryotherapy",
        name: "Whole Body Cryotherapy",
        description: "Cold exposure to ease inflammation and stiffness.",
        image: "/assets/images/bio-hack/Spot_Cryo.jpg",
      },
      {
        slug: "infrared-sauna",
        name: "Infrared Sauna",
        description: "Deep heat for pain relief and circulation.",
        image: "/assets/images/infrared-therapy-in-mumbai.jpg",
      },
      {
        slug: "hyperbaric-oxygen-therapy",
        name: "Hyperbaric Oxygen Therapy",
        description: "Oxygen support for recovery and comfort.",
        image: "/assets/images/bio-hack/Hyperbaric_Oxygen_Therapy.jpg",
      },
      {
        slug: "red-light-therapy",
        name: "Red Light Therapy",
        description: "Non-invasive support for sore tissues.",
        image: "/assets/images/red-light-banner.jpg",
      },
    ],
  },
  {
    id: "beauty",
    slug: "beauty",
    title: "Beauty",
    bandClass: "category-band bg-epsom-soft/35",
    slow: true,
    treatments: [
      {
        slug: "circadia-facials",
        name: "Circadia® Facials",
        description: "Clinical facial protocols for skin health.",
        image: "/assets/images/aesthetics/rejuvenating-facial-treatment.jpg",
      },
      {
        slug: "cryofacial",
        name: "Cryofacial",
        description: "Cold facial therapy for glow and firmness.",
        image: "/assets/images/aesthetics/anti-aging.png",
      },
      {
        slug: "cryo-slimming",
        name: "Cryo Slimming",
        description: "Targeted cold contouring support.",
        image: "/assets/images/aesthetics/body-cont.png",
      },
      {
        slug: "cryo-toning",
        name: "Cryo Toning",
        description: "Skin-tightening cold therapy rituals.",
        image: "/assets/images/aesthetics/rej.png",
      },
      {
        slug: "glow-getter-iv-drip",
        name: "Glow Getter IV Drip",
        description: "Beauty-from-within nutrient infusion.",
        image: "/assets/images/iv-drip/beautydrip.png",
      },
      {
        slug: "lymphatic-drainage-body-massage",
        name: "Lymphatic Drainage Body Massage",
        description: "Debloat and sculpt with lymphatic flow.",
        image: "/assets/images/spa/relaxation.jpg",
      },
      {
        slug: "body-ballancer",
        name: "Body Ballancer",
        description: "Advanced compression body contouring.",
        image: "/assets/images/aesthetics/body-cont.png",
      },
      {
        slug: "lymphatic-drainage-facial-massage",
        name: "Lymphatic Drainage Facial Massage",
        description: "Facial lymphatic lift and clarity.",
        image: "/assets/images/aesthetics/skin.png",
      },
    ],
  },
  {
    id: "sports-recovery",
    slug: "sports-recovery-performance",
    title: "Sports Recovery & Performance",
    bandClass: "category-band bg-epsom-salt",
    treatments: [
      {
        slug: "cryotherapy",
        name: "Whole Body Cryotherapy",
        description: "Post-training recovery used by athletes.",
        image: "/assets/images/bio-hack/cryochamber.png",
      },
      {
        slug: "compression-therapy",
        name: "Compression Therapy",
        description: "Flush fatigue and restore circulation.",
        image: "/assets/images/bio-hack/compression.jpg",
      },
      {
        slug: "red-light-therapy",
        name: "Red Light Therapy",
        description: "Support muscle repair between sessions.",
        image: "/assets/images/bio-hack/Red_light_Collagen_Bed_Therapy.jpg",
      },
      {
        slug: "infrared-sauna",
        name: "Infrared Sauna",
        description: "Heat recovery for mobility and ease.",
        image: "/assets/images/infrared-therapy-in-mumbai.jpg",
      },
      {
        slug: "energise-iv-drip",
        name: "Energise IV Drip Therapy",
        description: "Recharge nutrients for peak performance.",
        image: "/assets/images/iv-drip/superchargb.png",
      },
    ],
  },
];

/** Default image for treatment stub pages */
export const treatmentImages: Record<string, string> = Object.fromEntries(
  homeCategorySections.flatMap((s) => s.treatments.map((t) => [t.slug, t.image]))
);
