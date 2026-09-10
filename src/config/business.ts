/**
 * iGaming Growth Service — B2B Agency Business Configuration
 * Single source of truth for agency identity, services, contact channels,
 * and trust signals.
 *
 * NOTE: Strictly separate from main Growth Service agency data.
 * This is the GAMING VERTICAL specialist sub-brand.
 */

export interface CommunicationChannels {
  emails: {
    readonly primary: string;
    readonly business: string;
    readonly support: string;
  };
  phone: {
    readonly primary: string;
    readonly whatsapp: string;
  };
  social: {
    readonly twitter: string;
    readonly telegram: string;
    readonly linkedin: string;
    readonly youtube: string;
    readonly instagram: string;
  };
}

export interface BusinessConfigSchema extends CommunicationChannels {
  readonly name: string;
  readonly legalName: string;
  readonly tagline: string;
  readonly shortTagline: string;
  readonly domain: string;
  readonly canonicalOrigin: string;
  readonly description: string;
  readonly metaDescription: string;
  readonly themeColor: string;
  readonly establishedYear: number;
  readonly parentBrand: string;
  readonly parentBrandUrl: string;
  readonly heroStats: readonly {
    readonly value: string;
    readonly label: string;
    readonly color?: string;
  }[];
  readonly ratings: {
    readonly average: number;
    readonly reviewCount: number;
    readonly displayString: string;
    readonly sourceText: string;
  };
  readonly address: {
    readonly city: string;
    readonly state: string;
    readonly country: string;
    readonly countryCode: string;
  };
}

export const businessConfig: BusinessConfigSchema = {
  name: "iGaming Growth",
  legalName: "iGaming Growth — A Growth Service Initiative",
  tagline: "Digital Growth Agency for Gaming & Casino Brands",
  shortTagline: "Scale Your Gaming Brand",
  domain: "https://igameing.growthservice.in",
  canonicalOrigin: "https://igameing.growthservice.in",
  description:
    "iGaming Growth is a specialist B2B digital growth agency helping casino operators, gaming startups, sports betting platforms, and iGaming brands scale through SEO, performance marketing, web development, content strategy, and conversion optimisation.",
  metaDescription:
    "Specialist digital growth agency for iGaming & casino brands. We deliver SEO, performance marketing, web development & content strategy that drives qualified player acquisition and revenue growth.",
  themeColor: "#7C3AED",
  establishedYear: 2024,
  parentBrand: "iGaming Growth",
  parentBrandUrl: "https://igameing.growthservice.in",

  heroStats: [
    { value: "8", label: "Specialist High-Competition Verticals", color: "gold" },
    { value: "12", label: "Specialist Growth Disciplines" },
    { value: "100%", label: "Client Code & Architecture Ownership" },
    { value: "White-Hat", label: "Sustainable Search Engineering" },
  ],

  ratings: {
    average: 5.0,
    reviewCount: 0,
    displayString: "Enterprise SLA",
    sourceText: "Engineered for compliance-aware digital growth in competitive markets",
  },

  address: {
    city: "India",
    state: "Pan-India & Global Remote",
    country: "India",
    countryCode: "IN",
  },

  emails: {
    primary: "hello@igameing.growthservice.in",
    business: "business@igameing.growthservice.in",
    support: "support@igameing.growthservice.in",
  },

  phone: {
    primary: "+91 9999999999",
    whatsapp: "https://wa.me/919999999999",
  },

  social: {
    twitter: "https://twitter.com/igaminggrowth",
    telegram: "https://t.me/igaminggrowth",
    linkedin: "https://linkedin.com/company/igaminggrowth",
    youtube: "https://youtube.com/@igaminggrowth",
    instagram: "https://instagram.com/igaminggrowth",
  },
} as const;

export default businessConfig;
