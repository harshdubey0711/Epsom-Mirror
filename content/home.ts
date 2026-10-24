import type { TreatmentCard } from "@/lib/types";

export const whyChooseUs = [
  {
    title: "Advanced Beauty & Aesthetic Expertise",
    
  },
  {
    title: "Clinical-Grade Safety Protocols",
   
  },
  {
    title: "Elite, Certified Wellness Practitioners",
   
  },
  {
    title: "Transparent Luxury Pricings",
   
  },
  {
    title: "Our Uncompromising Service Guarantee",
   
  },
  {
    title: "Diagnostic & Expert Consultations",
  
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
        image: "/assets/images/epsom-final-images/cryo-banner-mobile.webp",
      },
      {
        slug: "hyperbaric-oxygen-therapy",
        name: "Oxygen Therapy (HBOT)",
        description: "Enhanced oxygen for clarity and cellular recovery.",
        image: "/assets/images/epsom-final-images/hbot.webp",
      },
      {
        slug: "iv-drip-therapy",
        name: "IV Drip Therapy",
        description: "Nutrient infusions for immunity, glow, and vitality.",
        image: "/assets/images/epsom-final-images/iv-drip.webp",
      },
      {
        slug: "red-light-therapy",
        name: "Red Light Therapy",
        description: "Cellular repair, collagen, and skin rejuvenation.",
        image: "/assets/images/epsom-final-images/red-light-therapy-mobile.webp",
      },
      {
        slug: "epsom-salt-sauna",
        name: "Epsom Salt Sauna",
        description: "Mineral heat for detox and deep relaxation.",
        image: "/assets/images/epsom-final-images/salt-banner-mobile.webp",
      },
      {
        slug: "compression-therapy",
        name: "Compression Therapy",
        description: "Dynamic pressure for circulation and recovery.",
        image: "/assets/images/epsom-final-images/comp2.webp",
      },
      {
        slug: "infrared-body-wrap",
        name: "Infrared Body Wrap",
        description: "Deep heat wrap for detox and contour support.",
        image: "/assets/images/epsom-final-images/infrared.webp",
      },
      {
        slug: "collagen-light-therapy",
        name: "Collagen Light Therapy",
        description: "Light-based support for skin firmness and glow.",
        image: "/assets/images/epsom-final-images/collagen-bed.webp",
      },
      // {
      //   slug: "health-wellness-blood-test",
      //   name: "Health & Wellness Blood Test",
      //   description: "Data-led insights for personalised wellness plans.",
      //   image: "/assets/images/services/card-1.webp",
      // },
      // {
      //   slug: "medical-consultation",
      //   name: "Medical Consultation",
      //   description: "Expert guidance before advanced protocols.",
      //   image: "/assets/images/services/card-2.webp",
      // },
      // {
      //   slug: "body-composition-analysis",
      //   name: "Body Composition Analysis",
      //   description: "Track fat, muscle, and metabolic markers.",
      //   image: "/assets/images/services/card-3.webp",
      // },
    ],
  },
  {
    id: "weight-loss-management",
    slug: "weight-loss-management",
    title: "Weight Loss Management",
    bandClass: "category-band bg-epsom-soft/35",
    slow: true,
    treatments: [
      {
         slug: "weight-loss-management",
          name: "Cryolipolysis",
          description: "A non-invasive body contouring treatment that uses controlled cooling to target fat cells in specific areas of the body.",
        image: "/assets/images/epsom-final-images/cryolipolysis.webp",
      },
      {
        slug: "weight-loss-management",
          name: "SlimShot Drip",
          description: "A specialised IV wellness therapy offered as part of Epsom's weight management range.",
        image: "/assets/images/epsom-final-images/slimshot-drip.webp",
      },


      
      {
        slug: "weight-loss-management",
          name: "Emerald Laser Fat Reduction",
          description: "A non-invasive laser-based treatment designed to support targeted fat reduction and body contouring.",
        image: "/assets/images/epsom-final-images/emerald.webp",
      },
      {
        slug: "weight-loss-management",
          name: "SlimShot Plus",
          description: "A more comprehensive option within Epsom's weight management IV range, designed around individual wellness goals.",
        image: "/assets/images/epsom-final-images/slim-shot-plus.webp",
      },
      
      // {
      //    slug: "weight-loss-management",
      //     name: "Metabolize",
      //     description: "A targeted wellness drip from Epsom's weight management range, designed to complement a healthy lifestyle and personalised weight management programme.",
      //    image:"/assets/images/epsom-final-images/metabolize-feature.webp"
      // },
      {
        slug: "weight-loss-management", 
          name: "L-Carnitine Shots",
          description: "L-Carnitine injections are offered as part of Epsom's wellness and weight management options.",
        image: "/assets/images/epsom-final-images/l-carnitine-shots.webp",
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
        name: "Cryotherapy",
        description: "Whole-body cold therapy for recovery and energy.",
        image: "/assets/images/epsom-final-images/cryo-banner-mobile.webp",
      },
      {
        slug: "hyperbaric-oxygen-therapy",
        name: "Oxygen Therapy (HBOT)",
        description: "Enhanced oxygen for clarity and cellular recovery.",
        image: "/assets/images/epsom-final-images/hbot.webp",
      },
     
      {
        slug: "red-light-therapy",
        name: "Red Light Therapy",
        description: "Cellular repair, collagen, and skin rejuvenation.",
        image: "/assets/images/epsom-final-images/red-light-therapy-mobile.webp",
      },
      {
        slug: "epsom-salt-sauna",
        name: "Epsom Salt Sauna",
        description: "Mineral heat for detox and deep relaxation.",
        image: "/assets/images/epsom-final-images/salt-banner-mobile.webp",
      },
      {
        slug: "compression-therapy",
        name: "Compression Therapy",
        description: "Dynamic pressure for circulation and recovery.",
        image: "/assets/images/epsom-final-images/comp2.webp",
      },
      {
        slug: "infrared-body-wrap",
        name: "Infrared Body Wrap",
        description: "Deep heat wrap for detox and contour support.",
        image: "/assets/images/epsom-final-images/infrared.webp",
      },
    ],
  },

  {
    id: "skin-hair-rejuvenation",
    slug: "skin-hair-rejuvenation",
    title: "Skin & Hair Rejuvenation",
    bandClass: "category-band bg-epsom-salt",
    treatments: [
      {
        slug: "skin-hair-rejuvenation",
          name: "HydraFacial",
          description: "A multi-step facial treatment designed to cleanse, exfoliate, hydrate, and refresh the skin.",
        image: "/assets/images/epsom-final-images/hydro-facial.webp",
      },
      {
        slug: "skin-hair-rejuvenation", 
          name: "Medi Facial",
          description: "A professionally guided facial treatment tailored to specific skin concerns and individual needs.",
          image: "/assets/images/epsom-final-images/medi-facial.webp"
      },
      {
          slug: "skin-hair-rejuvenation",
          name: "Skin Booster", 
          description: "A treatment designed to improve skin hydration and support smoother, healthier-looking skin.",     
          image: "/assets/images/epsom-final-images/skin-booster.webp"
      },
      {
          slug: "skin-hair-rejuvenation",
          name: "Peptide Therapy",
         
          description: "A targeted wellness and aesthetic treatment using peptides as part of a personalised skin rejuvenation approach.",
          
          image: "/assets/images/epsom-final-images/peptide.webp"
        },
        {
          slug: "skin-hair-rejuvenation",
          name: "Vampire Facial",
                   
          description: "A PRP-based aesthetic treatment that uses your own platelet-rich plasma as part of a skin rejuvenation protocol.",
         
          image: "/assets/images/epsom-final-images/vamp5.webp"
        },
        {
          slug: "collagen-light-therapy",
          name: "Collagen Light Therapy",     
          description: "A gentle light-based treatment designed to support collagen production and overall skin wellness."  ,
          image: "/assets/images/epsom-final-images/collagen-bed.webp"
        },
        {
          slug: "skin-hair-rejuvenation",
          name: "PRP Therapy",
                   
          description: "A treatment that uses platelet-rich plasma prepared from your own blood as part of a personalised hair and scalp treatment plan.",
         
          image: "/assets/images/epsom-final-images/prp.webp"
        },
        {
          slug: "skin-hair-rejuvenation",
          name: "Hair Vitality Drip",
                   
          description: "An IV wellness therapy from Epsom's hair health range, designed to provide targeted nutritional support.",
          
          image: "/assets/images/epsom-final-images/hair-drip.webp"
        },
        {
          slug: "skin-hair-rejuvenation",
          name: "Hair Vitality Pro",
                   
          description: "A specialised option within Epsom's hair wellness range, designed around individual hair and wellness goals.",
         
          image: "/assets/images/epsom-final-images/hair-pro.webp"
        },
        {
          slug: "skin-hair-rejuvenation",
          name: "Japanese Head Spa",
                   
          description: "A relaxing scalp and head treatment focused on cleansing, massage, and overall scalp wellness.",
          
          image: "/assets/images/epsom-final-images/japanese-head-spa.webp"
        },
        {
          slug: "skin-hair-rejuvenation",
          name: "Laser Hair Removal",
          description: "A laser-based treatment designed to reduce unwanted hair growth over a course of personalised sessions.",
          image: "/assets/images/epsom-final-images/laser-hair.webp"
        }
    ],
  },
];


export const wellnessNote = {
  "title": "A Note on Your Wellness Journey",
  description: "Wellness is personal, and no single therapy is right for everyone. Epsom Wellness & Longevity focuses on helping you make informed choices based on your individual goals, requirements, and suitability."
}

/** Default image for treatment stub pages */
export const treatmentImages: Record<string, string> = Object.fromEntries(
  homeCategorySections.flatMap((s) => s.treatments.map((t) => [t.slug, t.image]))
);
