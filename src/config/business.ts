/**
 * iGaming Growth — B2B Agency Business Configuration
 * Single source of truth for agency identity, services, verified contact channels,
 * and genuine operational capabilities.
 */

export interface CommunicationChannels {
  emails: {
    readonly primary: string;
    readonly business: string;
    readonly support: string;
  };
  phone?: {
    readonly primary?: string;
    readonly whatsapp?: string;
  };
  social?: {
    readonly twitter?: string;
    readonly telegram?: string;
    readonly linkedin?: string;
    readonly youtube?: string;
    readonly instagram?: string;
  };
  contact?: {
    readonly phone?: string;
    readonly whatsapp?: string;
    readonly email?: string;
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
  readonly establishedYear?: number;
  readonly parentBrand: string;
  readonly parentBrandUrl: string;
  readonly heroStats: readonly {
    readonly value: string;
    readonly label: string;
    readonly color?: string;
  }[];
  readonly ratings?: {
    readonly average?: number;
    readonly reviewCount?: number;
    readonly displayString?: string;
    readonly sourceText?: string;
  };
  readonly areaServed: string;
  readonly operationalModel: string;
  readonly address?: {
    readonly city?: string;
    readonly state?: string;
    readonly country?: string;
    readonly countryCode?: string;
  };
}

export const businessConfig: BusinessConfigSchema = {
  name: "iGaming Growth",
  legalName: "iGaming Growth",
  tagline: "Specialist Digital Growth Agency for Gaming & High-Competition Verticals",
  shortTagline: "Scale Your Gaming Brand",
  domain: "https://igameing.growthservice.in",
  canonicalOrigin: "https://igameing.growthservice.in",
  description:
    "iGaming Growth is a specialist B2B digital growth agency helping gaming operators, digital platforms, and iGaming brands scale through technical SEO, website development, content architecture, and conversion optimization.",
  metaDescription:
    "Specialist B2B digital growth agency for iGaming, casino, and high-competition digital brands. Search engineering, technical architecture, and qualified conversion growth.",
  themeColor: "#7C3AED",

  parentBrand: "",
  parentBrandUrl: "",

  operationalModel: "Enterprise Engineering & Growth Studio",
  areaServed: "South Asia & Worldwide",
  address: {
    city: "Kathmandu",
    country: "Nepal",
    countryCode: "NP",
  },

  heroStats: [
    { value: "8", label: "Specialist High-Competition Verticals", color: "gold" },
    { value: "12", label: "Specialist Growth Disciplines" },
    { value: "100%", label: "Client Code & Architecture Ownership" },
    { value: "White-Hat", label: "Sustainable Search Engineering" },
  ],

  emails: {
    primary: "hello@igameing.growthservice.in",
    business: "business@igameing.growthservice.in",
    support: "support@igameing.growthservice.in",
  },

  phone: {
    primary: "+91 76549 28455",
    whatsapp: "917654928455",
  },

  contact: {
    phone: "+91 76549 28455",
    whatsapp: "917654928455",
    email: "hello@igameing.growthservice.in",
  },
} as const;

export default businessConfig;
