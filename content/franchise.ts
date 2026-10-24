export const franchiseHero = {
  eyebrow: "Build a business around the future of wellness.",
  title: "Own The Future Of Wellness.",
  subtitle:
    "Partner with the Next Generation of Premium Wellness & Longevity. Explore exclusive franchise opportunities with Epsom Wellness & Longevity and be part of a growing world of advanced wellness, recovery and aesthetic optimization.",
  cta: "Explore Franchise Opportunities",
};

export const franchiseOpportunities = {
  eyebrow: "Franchise Opportunities",
  title: "A New Era of Wellness. Your Next Business Opportunity.",
  intro:
    "Discover a franchise format designed to align with your business vision, investment capacity and preferred space.",
  cta: "Enquire Now",
};

// TODO: confirm Mid-Size and Luxury CAPEX units before publishing.
// The brief said "₹120 Crore" / "₹150 Crore", which looks like Lakhs.
export const franchiseFormats = [
  { format: "Basic", space: "1,000 sq. ft.", capex: "₹60 Lakhs" },
  { format: "Mid-Size", space: "2,000 sq. ft.", capex: "₹1.20 Crore" },
  { format: "Luxury", space: "3,000 sq. ft.", capex: "₹1.50 Crore" },
];

export const franchiseWhyPartner = {
  eyebrow: "Why Partner With Epsom?",
  title: "More Than a Wellness Business. A Vision for Longevity.",
  intro:
    "Epsom Wellness & Longevity brings together modern wellness concepts, recovery experiences and aesthetic treatments under one premium brand.",
  items: [
    {
      title: "A Distinctive Brand Positioning",
      description: "Build within the evolving wellness and longevity sector.",
    },
    {
      title: "Multiple Wellness Categories",
      description:
        "Explore opportunities across recovery, relaxation, skin and aesthetic wellness.",
    },
    {
      title: "Flexible Franchise Formats",
      description:
        "Choose a format that aligns with your business goals and available space.",
    },
    {
      title: "A Premium Customer Experience",
      description:
        "Create an environment centred on comfort, personalized care and modern wellness.",
    },
  ],
};

export const franchiseInvestment = {
  eyebrow: "Investment",
  title: "Your Investment. Your Vision. The Future of Wellness.",
  intro: "Choose a franchise format that suits your business ambitions.",
  body:
    "Our team can guide you through the next steps, including the proposed franchise format, investment structure and operational requirements.",
  cta: "Request Franchise Details",
  disclaimer:
    "CAPEX figures are indicative and subject to final scope, location, fit-out requirements and commercial terms. Returns are not guaranteed.",
};

export const franchisePartnership = {
  eyebrow: "Partnership",
  title: "Let’s Build the Future of Wellness Together.",
  body: [
    "We welcome enquiries from entrepreneurs, investors and business partners interested in exploring a premium wellness franchise.",
    "Share your details, and our team will connect with you to discuss the available formats and partnership process.",
  ],
  cta: "Become A Franchise Partner",
};

export const franchiseEnquiry = {
  eyebrow: "Get In Touch",
  title: "Begin Your Franchise Journey",
  submit: "Submit Enquiry",
  note: "Our franchise team will contact you to discuss the opportunity.",
};

export const franchiseClosing = {
  title: "The Future Of Wellness Is An Opportunity.",
  subtitle: "Make your next business move with Epsom Wellness & Longevity.",
  cta: "Explore Franchise Partnership",
};

export const franchiseFormatOptions = franchiseFormats.map((f) => f.format);

// TODO: align these ranges with the final CAPEX once confirmed.
export const franchiseInvestmentRanges = [
  "Under ₹60 Lakhs",
  "₹60 Lakhs – ₹1 Crore",
  "₹1 Crore – ₹1.5 Crore",
  "₹1.5 Crore+",
];