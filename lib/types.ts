export type TreatmentRef = {
  bestSuitedFor: import("react").JSX.Element;
  description: import("react").JSX.Element;
  slug: string;
  name: string;
};
export type CategoryIntroduction = {
  title: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
};

export type CategoryCTA = {
  title?: string;
  description?: string;
  descriptionBeforeButton?: string;
  button?: string;
};

export type CategoryPersonalisedApproach = {
  title: string;
  paragraphs?: string[];
};

export type CategorySuitability = {
  title: string;
  items?: string[];
  closing?: string;
};
export type Demo = {
  slug?: string;
  categorySlug?: string;
  category?: string;
};
export type CategoryHero = {
  title?: string;
};
export type Category = {
  title?: string;
  bannerImage: string;
  featureImage?: string;
  mobileBannerImage?: string;

  introduction?: CategoryIntroduction;
  cta?: CategoryCTA;
  personalisedApproach?: CategoryPersonalisedApproach;
  suitability?: CategorySuitability;
  hero?: CategoryHero;
  demo?: Demo;

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
  meta: { title: string; description: string };
  hero: {
    title: string;
    subtitle: string;
    imageDesktop: string;
    imageMobile: string;
    imageAlt: string;
  };
  contact: { phone: string; whatsappUrl: string };
  intro: { heading: string; paragraphs: string[] };
  therapies: {
    heading: string;
    items: { name: string; description: string }[];
  };
  findUs: {
    heading: string;
    address: string;
    directions: { title: string; text: string }[];
    parking: string;
  };
  reviews: {
    items: { quote: string; author: string; detail: string }[];
  };
  faq: {
    heading: string;
    items: { question: string; answer: string }[];
  };
  visit: { heading: string; mapEmbedUrl?: string };
  cta: { heading: string; description: string };
};



