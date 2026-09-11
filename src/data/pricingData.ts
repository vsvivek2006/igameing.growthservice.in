/**
 * Centralized Pricing Data — iGaming Growth
 * 
 * Specifically structured for:
 * 1. Turnkey Platform Build (Turnkey Gaming / Casino / Cricket ID Platform Build)
 * 2. Organic Rank Dominance (Organic Rank-1 Dominance Sprint on Regulated Queries)
 * 3. Turnkey Build + SEO Suite (Flagship Complete Platform Build + SEO Sprint Bundle)
 * 4. Google & Meta Ads Management (Whitelisted, Zero-Ban Paid Acquisition)
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
    priceINR: '₹15,000',
    priceUSD: '$180',
    billingNote: 'starting from ₹15,000 · 1–2 week rapid delivery',
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
    id: 'full-stack-suite',
    name: 'Turnkey Build + SEO Suite',
    tagline: 'Complete Web Development + Rank-1 Organic Dominance Sprint',
    priceINR: '₹45,000',
    priceUSD: '$550',
    billingNote: 'custom web build + 1st month intensive SEO sprint',
    featured: true,
    badge: '★ Most Popular & Best ROI',
    features: [
      'Everything in Website & Platform Development (Full Code)',
      'Everything in Organic Rank Dominance (1st Month Sprint)',
      'Zero Technical Debt: Built for Search Indexation from Day 1',
      '#1 SERP Keyword Clustering (Cricket ID, Casino, Rummy)',
      'Pre-Indexed Sitemaps & Instant Google Indexing Webhooks',
      'Programmatic Landing Page Architecture for Volatile SERPs',
      'Telegram/WhatsApp FTD (First Time Deposit) Retention Bots',
      '6–8 High-Authority Quality Backlink Placements',
      'Live GSC Telemetry & Real-Time Position Tracking',
      'Priority 24/7 Direct WhatsApp & Slack Engineering Access',
    ],
    cta: 'Launch Full-Stack Suite',
    ctaPath: '/contact',
  },
  {
    id: 'organic-seo',
    name: 'Organic Rank Dominance',
    tagline: 'Search Engine Rank-1 Dominance for High-Competition Gaming Queries',
    priceINR: '₹35,000',
    priceUSD: '$420',
    billingNote: 'starts at ₹35k/month · 3-month minimum sprint',
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
    cta: 'Start SEO Ranking Sprint',
    ctaPath: '/contact',
  },
];

export const PAID_ACQUISITION_PACKAGE: PricingTier = {
  id: 'paid-ads',
  name: 'Google & Meta Ads Management',
  tagline: 'Policy-Compliant Whitelisted Media Buying (Zero Account Bans)',
  priceINR: '₹20,000',
  priceUSD: '$240',
  billingNote: 'per month + % of ad spend (scaled transparently)',
  badge: 'Zero-Ban Whitelisted Ads',
  features: [
    'Whitelisted Agency Ad Accounts (Google Search, YouTube, Meta/FB/IG)',
    'Zero Deceptive Cloaking — Permanent Pixel Learning Framework',
    'Server-Side Conversions API (CAPI) Data Pipeline Setup',
    'Policy-Compliant Educational Pre-Landers & Creative Direction',
    '4.8x Historical Blended ROAS Target Optimization',
    'Click-Fraud & Bot Filtering Safeguards',
    'Dynamic Telegram & WhatsApp Instant Routing Funnels',
    'Daily Spend, CPA & FTD Telemetry Reports',
  ],
  cta: 'Scale Paid Acquisition',
  ctaPath: '/contact',
};

export const PRICING_CATEGORIES: readonly PricingCategory[] = [
  {
    id: 'core-packages',
    label: 'Core Packages (Web & SEO)',
    description: 'The 3 core engagement models: Turnkey Web Development, Rank-1 SEO, or the Combined Web + SEO Flagship.',
    tiers: MAIN_PACKAGES,
  },
  {
    id: 'paid-ads',
    label: 'Paid Media (Google & Meta Ads)',
    description: 'Whitelisted advertising management across Google Ads, YouTube, and Meta platforms with zero account bans.',
    tiers: [PAID_ACQUISITION_PACKAGE],
  },
] as const;

export function getPricingCategoryById(id: string): PricingCategory | undefined {
  return PRICING_CATEGORIES.find((c) => c.id === id);
}

export default MAIN_PACKAGES;
