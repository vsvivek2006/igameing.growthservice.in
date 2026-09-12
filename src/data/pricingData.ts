/**
 * Centralized Pricing Data — iGaming Growth
 * 
 * Specifically structured for:
 * 1. Web & Platform Development (Starting from ₹20,000)
 * 2. SEO Monthly Sprint (Starting from ₹35,000/month)
 * 3. One-Time SEO Dominance (₹1,00,000 One-Time · Guaranteed Rank in 3 Months)
 * 4. Meta Ads Management (₹35,000/month)
 * 5. Meta + Google Ads Suite (₹50,000/month)
 */

export interface PricingTier {
  readonly id: string;
  readonly name: string;
  readonly tagline: string;
  readonly priceINR: string;
  readonly priceUSD: string;
  readonly billingNote: string;
  readonly featured?: boolean;
  readonly badge?: string;
  readonly features: readonly string[];
  readonly notIncluded?: readonly string[];
  readonly cta: string;
  readonly ctaPath: string;
}

export interface PricingCategory {
  readonly id: string;
  readonly label: string;
  readonly description: string;
  readonly tiers: readonly PricingTier[];
}

export const PRICING_DISCLAIMER =
  'All packages include 100% code ownership, verified technical SLAs, and direct WhatsApp/Slack engineering communication. Retainers are structured with clear deliverables, zero deceptive black-hat cloaking, and full compliance safeguards.';

export const MAIN_PACKAGES: readonly PricingTier[] = [
  {
    id: 'platform-build',
    name: 'Website & Platform Development',
    tagline: 'Custom Gaming, Cricket ID, Casino & Rummy Platform Engineering',
    priceINR: '₹20,000',
    priceUSD: '$240',
    billingNote: 'starting from ₹20,000 · 1–2 week rapid delivery',
    badge: 'Web Development',
    features: [
      'Custom Headless React 18 + PWA Mobile-First Architecture',
      'Lotus365, Casino, Cricket ID, or Rummy Platform Design',
      'Sub-650ms Edge LCP (Cloudflare Workers, 0ms blocking)',
      'WhatsApp & Telegram Instant ID Generation Webhooks',
      'Automated QR / UPI & Payment Routing Funnel',
      'Live Odds & Matches API Integration Architecture',
      'Super-Admin & Agent Balance Management Dashboard',
      'Anti-DDoS, SSL Shield & Enterprise Edge WAF Setup',
      'Full Source Code Ownership via GitHub Pull Request',
      '30 Days Dedicated Post-Launch Engineering Support',
    ],
    notIncluded: ['Ongoing monthly SEO sprints', 'Paid media ad budget'],
    cta: 'Build Custom Platform',
    ctaPath: '/contact',
  },
  {
    id: 'organic-seo',
    name: 'SEO Monthly Sprint',
    tagline: 'Continuous Search Engine Rank-1 Dominance for Regulated Gaming Queries',
    priceINR: '₹35,000',
    priceUSD: '$420',
    billingNote: 'starts at ₹35,000 / month · Monthly Ranking Retainer',
    badge: 'SEO Monthly',
    features: [
      'Comprehensive Technical Crawl, Render & Core Web Vitals Audit',
      '#1 SERP Targeting for High-Intent Gaming & Betting Queries',
      'Programmatic Keyword Clustering (Cricket ID, Casino, Rummy)',
      'Entity Schema Graphs & Search Knowledge Panel Alignment',
      'Crawl Budget Optimization & Server Log File Analysis',
      '6–8 High-Authority Niche Contextual Placements per month',
      'Anti-Algorithmic Penalty Guard & Canonical De-duplication',
      'Live Google Search Console Ranking Telemetry Dashboard',
      'Bi-Weekly Video Sprint Reviews & Direct Code PRs',
    ],
    notIncluded: ['Full new website codebase build'],
    cta: 'Start Monthly SEO',
    ctaPath: '/contact',
  },
  {
    id: 'seo-onetime',
    name: 'One-Time SEO Dominance',
    tagline: 'Guaranteed Top-Page Google Ranking Sprint — Rank in 3 Months',
    priceINR: '₹1,00,000',
    priceUSD: '$1,200',
    billingNote: '₹1,00,000 one-time · Guaranteed Rank in 3 Months',
    featured: true,
    badge: '★ Guaranteed Rank in 3 Months',
    features: [
      'Guaranteed Top SERP Rankings within 90-Day (3-Month) Sprint Window',
      'Aggressive Technical SEO Re-architecture & Core Web Vitals Overhaul',
      'Full Topical Authority Dominance (Cricket ID, Casino, Matka, Betting)',
      '15+ High-Tier Editorial Authority Backlinks & Niche Outreaches',
      'Instant Indexing Cloudflare Worker API & Crawl Budget Escalation',
      'Competitor Keyword Interception & Zero-Ban White-Hat Mechanics',
      'Priority Engineering Support with Dedicated Search Strategist',
      'Real-Time Rank Tracking Dashboard & Weekly Executive Briefings',
      '3-Month Rank Milestone or Continued Free Optimization Until Ranked',
    ],
    cta: 'Claim 3-Month Rank Sprint',
    ctaPath: '/contact',
  },
];

export const META_ADS_PACKAGE: PricingTier = {
  id: 'meta-ads',
  name: 'Meta Ads Management',
  tagline: 'Policy-Compliant Whitelisted Facebook & Instagram Ads (Zero Account Bans)',
  priceINR: '₹35,000',
  priceUSD: '$420',
  billingNote: '₹35,000 / month · Whitelisted Meta Buying (FB & IG)',
  badge: 'Meta Ads (FB & IG)',
  features: [
    'Whitelisted Agency Meta Ad Accounts (Facebook & Instagram)',
    'Zero Account Bans — Policy-Compliant Creative & Bridge Funnels',
    'Server-Side Meta Conversions API (CAPI) Pixel Integration',
    'High-Converting Ad Creatives & Video Hook Scripts',
    'Telegram & WhatsApp Instant Routing Funnels for Rapid First Deposits',
    'Daily Ad Spend, CPA & FTD Telemetry Reports',
    'Continuous A/B Creative Testing & Retargeting Loops',
  ],
  cta: 'Start Meta Ads Campaign',
  ctaPath: '/contact',
};

export const META_GOOGLE_ADS_PACKAGE: PricingTier = {
  id: 'meta-google-ads',
  name: 'Meta + Google Ads Dual Suite',
  tagline: 'Omni-Channel Acquisition Across Google Search, YouTube & Meta Platforms',
  priceINR: '₹50,000',
  priceUSD: '$600',
  billingNote: '₹50,000 / month · Full-Funnel Dual Network Scaling Suite',
  featured: true,
  badge: '★ Best Value · Dual Network',
  features: [
    'Complete Meta Ads (Facebook + Instagram) Management',
    'High-Intent Google Search Ads + YouTube Video Placements',
    'Whitelisted Google Ads & Meta Agency Accounts (Zero Bans)',
    'Dual-Platform CAPI & Offline Conversion Action Tracking',
    'Dynamic Search Keyword Interception for High-Deposit Queries',
    'Dedicated Ad Creative Studio (Video Scripts + High-CTR Static Graphics)',
    'Automated Telegram/WhatsApp Cashier & Deposit Bridge Pages',
    'Dedicated Media Buyer & 24/7 Slack/WhatsApp War Room Access',
  ],
  cta: 'Launch Dual-Network Ads',
  ctaPath: '/contact',
};

export const PAID_PACKAGES: readonly PricingTier[] = [
  META_ADS_PACKAGE,
  META_GOOGLE_ADS_PACKAGE,
];

// Backward-compatible alias for existing imports
export const PAID_ACQUISITION_PACKAGE: PricingTier = META_GOOGLE_ADS_PACKAGE;

export const PRICING_CATEGORIES: readonly PricingCategory[] = [
  {
    id: 'core-packages',
    label: 'Core Packages (Web & SEO)',
    description: 'Direct engineering packages: Turnkey Platform Development, Monthly SEO Sprint, and 3-Month Rank Sprint.',
    tiers: MAIN_PACKAGES,
  },
  {
    id: 'paid-ads',
    label: 'Paid Media (Meta & Google Ads)',
    description: 'Whitelisted advertising management across Meta (Facebook & Instagram) and Google Ads with zero account bans.',
    tiers: PAID_PACKAGES,
  },
] as const;

export function getPricingCategoryById(id: string): PricingCategory | undefined {
  return PRICING_CATEGORIES.find((c) => c.id === id);
}

export default MAIN_PACKAGES;
