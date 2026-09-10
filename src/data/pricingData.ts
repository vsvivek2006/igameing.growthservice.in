/**
 * Centralized Pricing Data — iGaming Growth
 * 
 * All prices are indicative starting points.
 * Final scope is determined after a diagnostic session.
 * No guaranteed ranking outcomes are implied or stated.
 * 
 * Platform compliance: igaming.md §22, §32
 */

export interface PricingTier {
  readonly id: string;
  readonly name: string;
  readonly tagline: string;
  readonly priceINR: string;
  readonly priceUSD: string;
  readonly billingNote: string;
  readonly featured?: boolean;
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
  'Prices shown are indicative starting points. Final scope and investment are determined after a complimentary technical diagnostic. No specific ranking positions, traffic volumes, or revenue outcomes are guaranteed — deliverables are process and methodology commitments.';

export const PRICING_CATEGORIES: readonly PricingCategory[] = [
  {
    id: 'seo',
    label: 'SEO & Organic Growth',
    description:
      'Monthly retainer packages covering technical SEO infrastructure, content strategy, and authority development for high-competition verticals.',
    tiers: [
      {
        id: 'seo-starter',
        name: 'SEO Foundation',
        tagline: 'For emerging platforms getting the technical baseline right',
        priceINR: '₹25,000',
        priceUSD: '$300',
        billingNote: 'per month · 3-month minimum',
        features: [
          'Full technical SEO audit (crawl, indexation, Core Web Vitals)',
          'On-page optimisation — up to 15 priority pages/month',
          'Structured data schema implementation',
          'Monthly rank tracking (up to 50 keywords)',
          'Monthly performance and action report',
          'Canonical and redirect architecture review',
          'Google Search Console diagnostic + monitoring',
        ],
        notIncluded: ['Content creation', 'Link acquisition', 'Paid acquisition'],
        cta: 'Start with Foundation',
        ctaPath: '/contact',
      },
      {
        id: 'seo-growth',
        name: 'SEO Growth',
        tagline: 'For operators scaling organic traffic in competitive markets',
        priceINR: '₹65,000',
        priceUSD: '$780',
        billingNote: 'per month · 3-month minimum',
        featured: true,
        features: [
          'Everything in SEO Foundation',
          'Crawl budget engineering and log file analysis',
          'JavaScript rendering and rendering SEO audit',
          'Content strategy and editorial calendar (4 pieces/month)',
          'Authority and link acquisition — 4–6 qualified placements/month',
          'Internal linking graph architecture',
          'Competitor gap analysis — quarterly',
          'Keyword tracking up to 200 terms',
          'Dedicated senior SEO engineer contact',
        ],
        cta: 'Start SEO Growth',
        ctaPath: '/contact',
      },
      {
        id: 'seo-authority',
        name: 'SEO Authority',
        tagline: 'Custom engagement for enterprise platforms and complex architecture',
        priceINR: 'Custom',
        priceUSD: 'Custom',
        billingNote: 'scoped after diagnostic',
        features: [
          'Everything in SEO Growth',
          'Programmatic SEO architecture and content pipeline',
          'Digital PR and editorial publication campaigns',
          'International / multilingual SEO strategy',
          'Custom schema pipeline development',
          'Advanced log file and crawl intelligence',
          'Executive reporting and board-level analytics',
          'Priority response SLA',
          'Direct access to senior architect',
        ],
        cta: 'Request Custom Scope',
        ctaPath: '/contact',
      },
    ],
  },
  {
    id: 'web',
    label: 'Website Development',
    description:
      'SEO-first website design and development — performance, crawlability, and conversion architecture are specified before design begins.',
    tiers: [
      {
        id: 'web-landing',
        name: 'Landing / Funnel',
        tagline: 'Single-funnel conversion pages built for organic and paid traffic',
        priceINR: '₹45,000',
        priceUSD: '$540',
        billingNote: 'one-time · 3–4 week delivery',
        features: [
          'Single-page or 3-page funnel website',
          'Mobile-first, performance-optimised build',
          'Core Web Vitals optimised (LCP ≤ 2.5s target)',
          'On-page SEO specification included',
          'Schema markup (Organization, WebPage)',
          'Analytics + conversion tracking setup',
          '1 round of post-launch revisions',
        ],
        cta: 'Build Landing Funnel',
        ctaPath: '/contact',
      },
      {
        id: 'web-business',
        name: 'Business Website',
        tagline: 'Multi-page business website built for authority and conversion',
        priceINR: '₹1,40,000',
        priceUSD: '$1,680',
        billingNote: 'one-time · 6–8 week delivery',
        featured: true,
        features: [
          'Up to 15-page website architecture',
          'SEO-first information architecture design',
          'CMS integration for content management',
          'Full schema suite (Organization, Service, BreadcrumbList, FAQPage)',
          'Internal linking architecture',
          'Performance and Core Web Vitals engineering',
          'Sitemap + robots.txt configuration',
          'Analytics, GA4 + event tracking',
          '2 rounds of revisions',
          '30-day post-launch support',
        ],
        cta: 'Build Business Website',
        ctaPath: '/contact',
      },
      {
        id: 'web-platform',
        name: 'Platform / Custom',
        tagline: 'Large-scale dynamic platforms with programmatic SEO capability',
        priceINR: 'Custom',
        priceUSD: 'Custom',
        billingNote: 'scoped after technical brief',
        features: [
          'Custom architecture design',
          'Programmatic page generation system',
          'Large-scale schema pipeline',
          'Headless or hybrid rendering (SSR/SSG)',
          'API integrations and dynamic content',
          'Advanced performance engineering',
          'Custom admin and content pipeline',
          'Full technical documentation',
          'Ongoing development retainer option',
        ],
        cta: 'Discuss Platform Build',
        ctaPath: '/contact',
      },
    ],
  },
  {
    id: 'paid',
    label: 'Paid Acquisition',
    description:
      'Google Ads and Meta Ads management for policy-sensitive industries. Advertising availability is subject to platform policy, jurisdiction, and certification status.',
    tiers: [
      {
        id: 'paid-management',
        name: 'Paid Acquisition Management',
        tagline: 'Policy-compliant campaign management where platform eligibility exists',
        priceINR: '₹20,000',
        priceUSD: '$240',
        billingNote: 'per month + % of ad spend (negotiated)',
        features: [
          'Platform eligibility assessment (pre-engagement)',
          'Account structure and compliance review',
          'Policy-compliant creative direction',
          'Campaign architecture and audience strategy',
          'Geographic and jurisdictional targeting',
          'Conversion tracking and attribution setup',
          'Landing page conversion alignment',
          'Monthly performance reporting',
        ],
        cta: 'Assess Paid Eligibility',
        ctaPath: '/contact',
      },
    ],
  },
] as const;

export function getPricingCategoryById(id: string): PricingCategory | undefined {
  return PRICING_CATEGORIES.find((c) => c.id === id);
}
