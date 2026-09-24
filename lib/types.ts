export type TreatmentRef = {
  bestSuitedFor: import("react").JSX.Element;
  description: import("react").JSX.Element;
  slug: string;
  name: string;
};

export type Category = {
  bannerImage: string;
  introduction: any;
  cta: any;
  personalisedApproach: any;
  suitability: any;
  hero: any;
  slug: string;
  name: string;
  href: string;
  footerLabel: string;
  treatments: TreatmentRef[];
};

export type NavLocation = {
  slug: string;
  name: string;
  label: string;
  address: string;
  mapsUrl: string;
};

export type SeoNav = {
  categories: Category[];
  primaryCategory: Record<string, string>;
  locations: NavLocation[];
  footerServices: { label: string; href: string }[];
  popularSearches: { label: string; href: string }[];
};

export type SiteLocation = {
  id: string;
  name: string;
  address: string;
  mapsUrl: string;
  gmbUrl: string;
  bookingUrl: string;
};

export type SiteConfig = {
  brand: string;
  tagline: string;
  domain: string;
  contact: {
    phones: string[];
    email: string;
  };
  locations: SiteLocation[];
  whatsapp: {
    number: string;
    defaultMessage: string;
  };
  social: {
    instagram: string;
    facebook: string;
    linkedin: string;
    youtube: string;
  };
};

export type TreatmentCard = {
  slug: string;
  name: string;
  description: string;
  image: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};


export type popularSearches =  {
  label: string;
  href: string;
};

export type LocationPageContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    image: string;
  };

  intro: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    image: string;
  };

  treatments: TreatmentCard[];

  offer: {
    eyebrow: string;
    heading: string;
    description: string;
  };

  whyEpsom: {
    eyebrow: string;
    heading: string;
    items: {
      title: string;
      description: string;
    }[];
  };

  faq: FaqItem[];

  cta: {
    eyebrow: string;
    heading: string;
    description: string;
  };
};