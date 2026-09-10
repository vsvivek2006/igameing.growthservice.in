/**
 * Topical Taxonomy & Search Intent Architecture — iGaming Growth
 * 
 * Defines the complete thematic pillars, subclusters, and intent mapping
 * to guarantee coherent authority flow and zero keyword cannibalization.
 */

export type SearchIntent = 'INFORMATIONAL' | 'COMMERCIAL' | 'TRANSACTIONAL' | 'NAVIGATIONAL';

export interface TopicSubCluster {
  readonly name: string;
  readonly slug: string;
  readonly intent: SearchIntent;
  readonly focusKeyword: string;
  readonly targetAudience: string;
  readonly primaryConversion: string;
}

export interface TopicCluster {
  readonly name: string;
  readonly slug: string;
  readonly intent: SearchIntent;
  readonly description: string;
  readonly subClusters: readonly TopicSubCluster[];
}

export interface ServicePillar {
  readonly name: string;
  readonly serviceSlug: string;
  readonly coreIntent: SearchIntent;
  readonly strategicObjective: string;
  readonly clusters: readonly TopicCluster[];
}

export interface IndustryCluster {
  readonly industrySlug: string;
  readonly industryName: string;
  readonly coreSearchIntent: SearchIntent;
  readonly competitionLevel: 'HIGH' | 'EXTREME' | 'RESTRICTED';
  readonly primaryTopics: readonly {
    readonly topic: string;
    readonly serviceSlug: string;
    readonly intent: SearchIntent;
  }[];
}

// ─── 1. Service Pillars & Clusters ───────────────────────────────────────────

export const servicePillars: readonly ServicePillar[] = [
  {
    name: 'Search Engine Optimization',
    serviceSlug: 'seo',
    coreIntent: 'COMMERCIAL',
    strategicObjective: 'Dominate organic search for high-competition player acquisition queries.',
    clusters: [
      {
        name: 'Technical SEO',
        slug: 'technical-seo',
        intent: 'COMMERCIAL',
        description: 'Crawl budget, rendering pipelines, Core Web Vitals, and server response engineering.',
        subClusters: [
          {
            name: 'Crawlability & Bot Budget',
            slug: 'crawl-budget',
            intent: 'INFORMATIONAL',
            focusKeyword: 'crawl budget optimization gaming sites',
            targetAudience: 'CTOs & Technical Leads',
            primaryConversion: 'Technical SEO Audit',
          },
          {
            name: 'JavaScript & SPA Rendering',
            slug: 'javascript-seo',
            intent: 'INFORMATIONAL',
            focusKeyword: 'pre rendering single page app seo',
            targetAudience: 'Frontend Architects',
            primaryConversion: 'Engineering Consultation',
          },
          {
            name: 'Core Web Vitals for Canvas/WebGL',
            slug: 'core-web-vitals',
            intent: 'INFORMATIONAL',
            focusKeyword: 'inp optimization for webgl gaming',
            targetAudience: 'Product Managers',
            primaryConversion: 'Free SEO Audit',
          },
        ],
      },
      {
        name: 'On-Page SEO & Topical Authority',
        slug: 'on-page-seo',
        intent: 'COMMERCIAL',
        description: 'Semantic entity mapping, internal link authority silos, and search intent alignment.',
        subClusters: [
          {
            name: 'Search Intent Disambiguation',
            slug: 'search-intent',
            intent: 'INFORMATIONAL',
            focusKeyword: 'gaming search intent classification',
            targetAudience: 'Content Strategists',
            primaryConversion: 'Content Strategy Consultation',
          },
          {
            name: 'Internal Link Siloing',
            slug: 'internal-linking',
            intent: 'INFORMATIONAL',
            focusKeyword: 'internal linking topical authority silos',
            targetAudience: 'SEO Directors',
            primaryConversion: 'Strategy Call',
          },
        ],
      },
      {
        name: 'Programmatic SEO',
        slug: 'programmatic-seo',
        intent: 'COMMERCIAL',
        description: 'Data-driven landing page engines for thousands of game variations and match centers.',
        subClusters: [
          {
            name: 'Data Architecture & Schema',
            slug: 'data-schema',
            intent: 'INFORMATIONAL',
            focusKeyword: 'programmatic seo dataset schema',
            targetAudience: 'Data Engineers & SEO Architects',
            primaryConversion: 'Programmatic Blueprint',
          },
          {
            name: 'Algorithmic Quality Guardrails',
            slug: 'quality-guardrails',
            intent: 'INFORMATIONAL',
            focusKeyword: 'prevent thin content algorithmic penalty',
            targetAudience: 'VP of Marketing',
            primaryConversion: 'Free SEO Audit',
          },
        ],
      },
      {
        name: 'Off-Page SEO & Authority',
        slug: 'off-page-seo',
        intent: 'COMMERCIAL',
        description: 'White-hat digital PR, editorial industry citations, and toxic link neutralization.',
        subClusters: [
          {
            name: 'Digital PR & Data Studies',
            slug: 'digital-pr',
            intent: 'INFORMATIONAL',
            focusKeyword: 'igaming digital pr data study link building',
            targetAudience: 'Head of Growth',
            primaryConversion: 'Authority Strategy Call',
          },
        ],
      },
    ],
  },
  {
    name: 'Website Development',
    serviceSlug: 'website-development',
    coreIntent: 'COMMERCIAL',
    strategicObjective: 'Build blazing-fast, mobile-first web platforms engineered for search indexing and high deposit conversion.',
    clusters: [
      {
        name: 'Headless Frontend Architecture',
        slug: 'headless-frontends',
        intent: 'COMMERCIAL',
        description: 'Decoupled React/Next.js architectures delivering sub-100ms TTFB globally.',
        subClusters: [
          {
            name: 'Server-Side Rendering & Edge Caching',
            slug: 'ssr-edge-caching',
            intent: 'INFORMATIONAL',
            focusKeyword: 'edge cached headless gaming frontends',
            targetAudience: 'Engineering Leaders',
            primaryConversion: 'Website Architecture Consultation',
          },
        ],
      },
    ],
  },
  {
    name: 'Analytics & Attribution',
    serviceSlug: 'analytics',
    coreIntent: 'COMMERCIAL',
    strategicObjective: 'Connect top-of-funnel search traffic to verified player lifetime value and FTD events.',
    clusters: [
      {
        name: 'Server-Side GTM & First-Party Cookies',
        slug: 'server-side-gtm',
        intent: 'COMMERCIAL',
        description: 'Privacy-first tracking infrastructure bypassing ad-blockers and preserving attribution across cashier modals.',
        subClusters: [
          {
            name: 'Cashier Webhook Reconciliation',
            slug: 'webhook-attribution',
            intent: 'INFORMATIONAL',
            focusKeyword: 'server side gtm cashier conversion tracking',
            targetAudience: 'Growth Marketing Analysts',
            primaryConversion: 'Analytics Audit',
          },
        ],
      },
    ],
  },
];

// ─── 2. Industry Topic Clusters ──────────────────────────────────────────────

export const industryClusters: readonly IndustryCluster[] = [
  {
    industrySlug: 'gaming',
    industryName: 'Online Gaming',
    coreSearchIntent: 'COMMERCIAL',
    competitionLevel: 'EXTREME',
    primaryTopics: [
      { topic: 'Gaming Platform SEO', serviceSlug: 'seo', intent: 'COMMERCIAL' },
      { topic: 'Gaming Technical SEO', serviceSlug: 'technical-seo', intent: 'COMMERCIAL' },
      { topic: 'Gaming Frontend Development', serviceSlug: 'website-development', intent: 'COMMERCIAL' },
      { topic: 'Gaming Player Attribution', serviceSlug: 'analytics', intent: 'COMMERCIAL' },
    ],
  },
  {
    industrySlug: 'casino',
    industryName: 'Casino & iGaming',
    coreSearchIntent: 'COMMERCIAL',
    competitionLevel: 'EXTREME',
    primaryTopics: [
      { topic: 'Casino Organic Growth', serviceSlug: 'seo', intent: 'COMMERCIAL' },
      { topic: 'Multi-Geo Casino Hreflang', serviceSlug: 'technical-seo', intent: 'COMMERCIAL' },
      { topic: 'Casino Editorial Authority', serviceSlug: 'off-page-seo', intent: 'COMMERCIAL' },
    ],
  },
  {
    industrySlug: 'cricket-gaming',
    industryName: 'Cricket Gaming',
    coreSearchIntent: 'COMMERCIAL',
    competitionLevel: 'HIGH',
    primaryTopics: [
      { topic: 'Tournament Indexing SEO', serviceSlug: 'seo', intent: 'COMMERCIAL' },
      { topic: 'Match-Hour Server Performance', serviceSlug: 'technical-seo', intent: 'COMMERCIAL' },
    ],
  },
  {
    industrySlug: 'color-prediction',
    industryName: 'Color Prediction Platforms',
    coreSearchIntent: 'COMMERCIAL',
    competitionLevel: 'RESTRICTED',
    primaryTopics: [
      { topic: 'Defensive Brand SERP SEO', serviceSlug: 'seo', intent: 'COMMERCIAL' },
    ],
  },
  {
    industrySlug: 'color-trading',
    industryName: 'Color Trading Apps',
    coreSearchIntent: 'COMMERCIAL',
    competitionLevel: 'RESTRICTED',
    primaryTopics: [
      { topic: 'Trading Trust & Analytical SEO', serviceSlug: 'seo', intent: 'COMMERCIAL' },
    ],
  },
  {
    industrySlug: 'stock-market',
    industryName: 'Stock Market & Trading Portals',
    coreSearchIntent: 'COMMERCIAL',
    competitionLevel: 'HIGH',
    primaryTopics: [
      { topic: 'YMYL Financial SEO', serviceSlug: 'seo', intent: 'COMMERCIAL' },
      { topic: 'Trader Educational Content Strategy', serviceSlug: 'content-strategy', intent: 'COMMERCIAL' },
    ],
  },
  {
    industrySlug: 'adult-escort',
    industryName: 'Adult & Regulated Classifieds',
    coreSearchIntent: 'COMMERCIAL',
    competitionLevel: 'RESTRICTED',
    primaryTopics: [
      { topic: 'SafeSearch Semantic SEO', serviceSlug: 'seo', intent: 'COMMERCIAL' },
      { topic: 'High-Volume Directory Technical SEO', serviceSlug: 'technical-seo', intent: 'COMMERCIAL' },
    ],
  },
  {
    industrySlug: 'yono',
    industryName: 'Yono & Real-Money Skill Gaming',
    coreSearchIntent: 'COMMERCIAL',
    competitionLevel: 'HIGH',
    primaryTopics: [
      { topic: 'APK Distribution SEO', serviceSlug: 'seo', intent: 'COMMERCIAL' },
      { topic: 'Programmatic Mini-Game Indexing', serviceSlug: 'programmatic-seo', intent: 'COMMERCIAL' },
    ],
  },
];
