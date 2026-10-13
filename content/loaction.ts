import type { LocationPageContent } from "@/lib/types";

/* ---------- Shared copy (identical across locations) ---------- */

const ivDrip = {
  name: "IV Drip Therapy",
  description:
    "Deliver vital vitamins, antioxidants, and essential electrolytes directly into your bloodstream for 100% immediate absorption. From hydrating wellness cocktails to high-dose Glutathione formulas for an unmistakable, skin-brightening glow, our targeted drips reverse chronic dehydration, battle hair thinning, and provide an instant immune boost.",
};

const redLight = {
  name: "Red Light Therapy",
  description:
    "Harness deep-penetrating low-level light wavelengths to stimulate natural cellular healing and collagen production. This dual-purpose therapy reduces fine lines, acne scarring, and hair loss on the aesthetic track, while simultaneously relieving osteoarthritis joint pain, morning stiffness, and carpal tunnel inflammation on the pain track.",
};

const saltSauna = {
  name: "Epsom Salt Sauna",
  description:
    "Relax tense muscle fibers and flush out deep environmental toxins in a soothing advanced heat chamber. By infusing therapeutic heat with high-grade magnesium absorption, this sauna effectively releases stubborn muscle knots, alleviates chronic lower back stiffness, lowers high cortisol stress, and prepares your body for deep, restful sleep.",
};

const ctaDescription =
  "Book your consultation and discover the right combination of recovery, wellness and rejuvenation therapies for you.";

const heroSubtitle =
  "Elevate Your Health, Restore Fluid Mobility, and Unlock Peak Daily Vitality";

const bookingFaq = (place: string, treatment: string) => ({
  question: `Do I need to book an appointment for ${treatment} at the ${place} center?`,
  answer:
    "While we accommodate walk-ins when a chamber is open, we highly recommend booking in advance via our website or WhatsApp. This ensures your specialized recovery chamber or IV lounge chair is reserved exactly for your preferred slot.",
});

const durationFaq = {
  question: "How long does a typical IV Drip or Cryotherapy session take?",
  answer:
    "A Whole Body Cryotherapy session takes exactly 3 minutes inside the chamber, while an IV Drip infusion takes roughly 30 to 45 minutes in our comfortable lounge. You can easily squeeze in a session during your lunch break or post-workout.",
};

/* ---------- Per-location content (key = route slug) ---------- */

export const locationPageContent: Record<string, LocationPageContent> = {
  santacruz: {
    meta: {
      title: "Wellness Clinic & IV Drip in Santacruz | Epsom Wellness",
      description:
        "Transform your health at our advanced wellness clinic in Santacruz West. Offering premium biohacking therapies including Cryotherapy, HBOT, and luxury IV Drips.",
    },
    hero: {
      title: "Advanced Wellness Clinic in Santacruz for Longevity & Recovery",
      subtitle: heroSubtitle,
      imageDesktop: "/assets/images/epsom-final-images/santacruz-banner-pc.png",
      imageMobile: "/assets/images/epsom-final-images/santacruz-banner-mobile.png",
      imageAlt: "Epsom Wellness clinic in Santacruz West",
    },
    // TODO: replace with the real Santacruz number (digits only after 91 in the WhatsApp link)
    contact: {
      phone: "+919867670764",
      whatsappUrl: "https://wa.me/919867670764",
    },
    intro: {
      heading: "Welcome to Epsom Wellness in Santacruz West",
      paragraphs: [
        "Welcome to Epsom Wellness in Santacruz West. Conveniently located on S.V. Road, our state-of-the-art recovery and aesthetic lounge sits directly opposite the Nabard Society premises, making it incredibly accessible for clients traveling from Khar, Bandra, and Juhu.",
        "Whether you are a competitive athlete looking to accelerate muscle healing after an intense workout, an executive seeking a deep cellular detox, or someone pursuing a radiant skin glow, our specialized therapies are tailored to fit your lifestyle. Step inside our premium sanctuary and experience the next evolution of holistic health right here in Santacruz.",
      ],
    },
    therapies: {
      heading: "Our Premium Wellness & Recovery Therapies in Santacruz",
      items: [
        {
          name: "Whole Body Cryotherapy",
          description:
            "Expose your body to extreme sub-zero temperatures for 3 minutes to instantly trigger cellular recovery. This premium treatment spikes your metabolic rate, forces immediate calorie burning, and eliminates chronic muscle soreness and systemic joint inflammation. It is trusted by top athletes to accelerate workout recovery and skyrocket daily energy levels.",
        },
        ivDrip,
        redLight,
        saltSauna,
      ],
    },
    findUs: {
      heading: "How to Find Epsom Wellness Santacruz West",
      address:
        "Shop no. 06, Kamla Space Premises, S.V. Road, Near Hasmukh Nagar, Santacruz West, Mumbai, Maharashtra 400054",
      directions: [
        {
          title: "From S.V. Road",
          text: "Situated directly opposite the Nabard Society entry, just a short drive from the Podar School Lane intersection.",
        },
        {
          title: "From Bandra & Linking Road",
          text: "Cut through Khira Nagar or take the connecting lane by Linking Road for a seamless 5-to-10 minute commute.",
        },
      ],
      parking:
        "Dedicated valet and guest parking spaces are available at the Kamla Space Premises entrance for your complete comfort.",
    },
    reviews: {
      items: [
        {
          quote:
            "Absolutely the best cryotherapy center in the Bandra-Santacruz belt. I visit Epsom Wellness twice a week for sports recovery after my runs. The muscle relief is almost instant, and the staff is incredibly professional.",
          author: "Rahul M.",
          detail: "Marathoner & Santacruz West Resident",
        },
        {
          quote:
            "Tried their Glutathione IV Drip and HydraFacial before an event. My skin looked incredibly radiant and fresh. Finding premium aesthetic care right on S.V. Road with proper parking makes this my go-to luxury spa.",
          author: "Priya S.",
          detail: "Khar West",
        },
      ],
    },
    faq: {
      heading: "Epsom Wellness Santacruz: FAQ's",
      items: [
        bookingFaq("Santacruz", "Cryotherapy"),
        {
          question: "Is parking available at the Epsom Wellness Santacruz West branch?",
          answer:
            "Yes! We understand that navigating S.V. Road traffic can be stressful. We provide dedicated guest/valet parking spaces directly at our center so your relaxation experience starts the moment you arrive.",
        },
        durationFaq,
        {
          question: "Does this location serve clients from Bandra and Juhu?",
          answer:
            "Yes, our Santacruz West center is strategically situated on S.V. Road, making it a quick 10-minute commute for residents coming from Bandra West, Khar, Juhu, and Vile Parle.",
        },
      ],
    },
    // mapEmbedUrl is optional. Leave it out and the map is built from the address.
    // To use the exact Google Business Profile map: Google Maps > Share > Embed a map > copy the src="..." URL.
    visit: { heading: "Epsom Wellness Santacruz West" },
    cta: {
      heading: "Start Your Wellness Journey at Epsom Santacruz West",
      description: ctaDescription,
    },
  },

  andheri: {
    meta: {
      title: "Wellness Clinic & Cryotherapy in Andheri | Epsom Wellness",
      description:
        "Experience Mumbai's premier clinic in Andheri West for Longevity & Pain Relief. Book state-of-the-art Whole Body Cryotherapy, HBOT chambers, & IV Drips today.",
    },
    hero: {
      title: "Advanced Wellness Clinic in Andheri for Longevity & Recovery",
      subtitle: heroSubtitle,
      imageDesktop: "/assets/images/epsom-final-images/andheri-banner-pc.png",
      imageMobile: "/assets/images/epsom-final-images/andheri-banner-mobile.png",
      imageAlt: "Epsom Wellness clinic in Andheri West",
    },
    // TODO: replace with the real Andheri number
    contact: {
      phone: "+910000000000",
      whatsappUrl: "https://wa.me/910000000000",
    },
    intro: {
      heading: "Welcome to Epsom Wellness Andheri West.",
      paragraphs: [
        "Welcome to Epsom Wellness Andheri West. Conveniently located right on the bustling New Link Road, our state-of-the-art recovery and aesthetic lounge sits directly opposite the prominent Infiniti Mall premises, making it incredibly accessible for clients traveling from Lokhandwala, Versova, and Oshiwara.",
        "Whether you are a competitive athlete looking to accelerate muscle healing after an intense workout, an executive seeking a deep cellular detox, or someone pursuing a radiant skin glow, our specialized therapies are tailored to fit your lifestyle. Step inside our premium sanctuary and experience the next evolution of holistic health right here in Andheri.",
      ],
    },
    therapies: {
      heading: "Our Premium Wellness & Recovery Therapies in Andheri",
      items: [
        {
          name: "Oxygen Chamber",
          description:
            "Relax inside an advanced, pressurized chamber designed to deliver high levels of pure oxygen directly to your body’s tissues. This soothing environment triggers full-body rejuvenation by stimulating immediate cellular energy, enhancing systemic circulation, and slashing fatigue. It is the perfect restorative sanctuary to clear metabolic waste, alleviate brain fog, and deeply refresh your body after training or a hectic week.",
        },
        ivDrip,
        redLight,
        saltSauna,
      ],
    },
    findUs: {
      heading: "How to Find Epsom Wellness Andheri West",
      address:
        "Shop no. 12, Ground Floor, Kamla Hub, New Link Road, Near Infiniti Mall, Andheri West, Mumbai, Maharashtra 400053",
      directions: [
        {
          title: "From New Link Road",
          text: "Situated directly opposite the Infiniti Mall entry lane, just a short drive from the major Lokhandwala Back Road intersection.",
        },
        {
          title: "From Versova & Oshiwara",
          text: "Cut through the bypass lanes from Versova Metro Station or take the connecting route down from Oshiwara for a seamless 5-to-10 minute neighborhood commute.",
        },
      ],
      parking:
        "Dedicated valet and guest parking spaces are available right at the Kamla Hub premises entrance for your complete comfort.",
    },
    reviews: {
      items: [
        {
          quote:
            "Absolutely the best cryotherapy center in the Andheri-Lokhandwala belt. I visit Epsom Wellness twice a week for sports recovery after my cross-training runs. The joint relief is almost instant, and the staff is incredibly professional.",
          author: "Rahul M.",
          detail: "Marathoner & Andheri West Resident",
        },
        {
          quote:
            "Tried their Glutathione IV Drip and HydraFacial before a media shoot. My skin looked incredibly radiant and fresh. Finding premium aesthetic care right on Link Road with proper parking makes this my go-to luxury clinic.",
          author: "Priya S.",
          detail: "Versova Resident",
        },
      ],
    },
    faq: {
      heading: "Epsom Wellness Andheri: FAQ's",
      items: [
        bookingFaq("Andheri", "Cryotherapy"),
        {
          question: "Is parking available at the Epsom Wellness Andheri West branch?",
          answer:
            "Yes! We understand that navigating Andheri Link Road traffic can be stressful. We provide dedicated guest/valet parking spaces directly at our center so your relaxation experience starts the moment you arrive.",
        },
        durationFaq,
        {
          question: "Does this location serve clients from Versova and Oshiwara?",
          answer:
            "Yes, our Andheri West center is strategically situated on New Link Road, making it a quick 10-minute commute for residents coming from Lokhandwala, Versova, Oshiwara, and Seven Bungalows.",
        },
      ],
    },
    visit: { heading: "Epsom Wellness Andheri West" },
    cta: {
      heading: "Start Your Wellness Journey at Epsom Andheri West",
      description: ctaDescription,
    },
  },

  borivali: {
    meta: {
      title: "Wellness Clinic & HBOT Therapy in Borivali | Epsom Wellness",
      description:
        "Visit our advanced wellness clinic in Borivali West for elite health optimization. Book state-of-the-art Whole Body Cryotherapy, HBOT, and premium IV Drip lounges.",
    },
    hero: {
      title: "Advanced Wellness Clinic in Borivali for Longevity & Recovery",
      subtitle: heroSubtitle,
      imageDesktop: "/assets/images/epsom-final-images/borivali-banner-pc.png",
      imageMobile: "/assets/images/epsom-final-images/borivali-banner-mobile.png",
      imageAlt: "Epsom Wellness clinic in Borivali West",
    },
    // TODO: replace with the real Borivali number
    contact: {
      phone: "+910000000000",
      whatsappUrl: "https://wa.me/910000000000",
    },
    intro: {
      heading: "Welcome to Epsom Wellness Borivali West.",
      paragraphs: [
        "Welcome to Epsom Wellness Borivali West. Strategically situated right off the prominent New Link Road corridor, our premium biohacking, recovery, and aesthetic hub offers a tranquil escape for high-performance recovery. Our advanced facility sits incredibly close to the bustling Shimpoli and Yogi Nagar neighborhoods, making it effortless to access for clients traveling from IC Colony, Kandivali West, and Dahisar.",
        "Whether you are a dedicated fitness enthusiast looking to eliminate deep muscular tension, a resident seeking to combat chronic joint stiffness, or someone looking to enhance your skin's youthful radiance, our specialized therapies deliver profound cellular results. Experience Mumbai’s elite standard of wellness and longevity right here in the heart of Borivali.",
      ],
    },
    therapies: {
      heading: "Our Premium Wellness & Recovery Therapies in Borivali",
      items: [
        {
          name: "HBOT",
          description:
            "Harness the powerful restorative science of breathing pure oxygen under increased atmospheric pressure to force extreme oxygen saturation deep into your bloodstream. This elite clinical wellness therapy ignites rapid soft-tissue healing, reduces chronic joint and muscle inflammation, and supercharges natural stem cell activation. It is widely relied on by professional athletes to drastically cut down recovery time and maximize physical durability. ",
        },
        ivDrip,
        redLight,
        saltSauna,
      ],
    },
    findUs: {
      heading: "How to Find Epsom Wellness Borivali West",
      address:
        "Shop no. 04, Ground Floor, Kamla Plaza, Near Shimpoli Road, New Link Road, Borivali West, Mumbai, Maharashtra 400092",
      directions: [
        {
          title: "From Shimpoli Road",
          text: "Perfectly situated near the major Shimpoli Road intersection right on New Link Road, just minutes away from the iconic Don Bosco High School crossway.",
        },
        {
          title: "From IC Colony, Borivali East & Dahisar",
          text: "Take a quick drive down from IC Colony or cross over the highway flyovers from Borivali East and Dahisar for a seamless 10-minute commute.",
        },
      ],
      parking:
        "Dedicated valet and guest parking spaces are available right at the Kamla Plaza premises entrance for your complete comfort.",
    },
    reviews: {
      items: [
        {
          quote:
            "Having a world-class HBOT chamber and cryotherapy center right here in Borivali West is a game-changer. I used to travel all the way to town for advanced longevity treatments. The facility at Link Road is flawless and highly professional.",
          author: "Amit R.",
          detail: "Yogi Nagar Resident",
        },
        {
          quote:
            "The IV Drip lounge here is beautiful and incredibly relaxing. I tried their targeted hydration cocktail after a long flight, and my travel fatigue vanished completely. Very clean clinic with seamless valet parking space.",
          author: "Neha K.",
          detail: "IC Colony Resident",
        },
      ],
    },
    faq: {
      heading: "Epsom Wellness Borivali: FAQ's",
      items: [
        {
          question: "Do I need to book an appointment for HBOT at the Borivali center?",
          answer:
            "Yes, because our hyperbaric chambers require precise atmospheric pressurized scheduling, we highly recommend booking your slot in advance through our website or directly via WhatsApp to avoid waiting times.",
        },
        {
          question: "Is parking available at the Epsom Wellness Borivali West branch?",
          answer:
            "Absolutely! We offer secure, dedicated guest and valet parking right at our facility entrance, ensuring a completely stress-free arrival off the main Link Road traffic.",
        },
        {
          question: "How long does a typical Hyperbaric Oxygen (HBOT) session last?",
          answer:
            "A typical hyperbaric session lasts roughly 60 to 90 minutes inside our state-of-the-art pressurized chamber. Our luxury layout allows you to rest, read, or listen to music comfortably throughout your therapy.",
        },
        {
          question: "Does this location serve clients from Kandivali and Dahisar?",
          answer:
            "Yes, our Borivali West facility is perfectly positioned to serve residents across Borivali East & West, IC Colony, Chikuwadi, Yogi Nagar, Dahisar, and Kandivali West.",
        },
      ],
    },
    visit: { heading: "Epsom Wellness Borivali West" },
    cta: {
      heading: "Start Your Wellness Journey at Epsom Borivali West",
      description: ctaDescription,
    },
  },
};