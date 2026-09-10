/**
 * Structured Content Briefs System — iGaming Growth
 * 
 * Production-ready editorial and technical briefs for systematic scaling
 * of future guides, resources, and case studies.
 */

import { SearchIntent } from './topicalTaxonomy';

export type ContentStatus = 'draft' | 'review' | 'published' | 'noindex' | 'archived';

export interface ContentBrief {
  readonly slug: string;
  readonly title: string;
  readonly primaryIntent: SearchIntent;
  readonly secondaryTopics: readonly string[];
  readonly targetAudience: string;
  readonly relatedService: string;
  readonly relatedIndustry: string;
  readonly outline: readonly {
    readonly sectionTitle: string;
    readonly pointsToCover: readonly string[];
  }[];
  readonly internalLinks: readonly {
    readonly targetPath: string;
    readonly suggestedAnchorText: string;
  }[];
  readonly cta: {
    readonly label: string;
    readonly href: string;
    readonly intentFocus: string;
  };
  readonly seoMetadata: {
    readonly targetTitle: string;
    readonly targetDescription: string;
    readonly targetKeyword: string;
  };
  readonly schemaType: 'Article' | 'TechArticle' | 'HowTo';
  readonly status: ContentStatus;
  readonly targetWordCount: number;
}

export const contentBriefs: readonly ContentBrief[] = [
  {
    slug: 'igaming-crawl-budget-optimization',
    title: 'Crawl Budget Engineering for 100,000+ URL Gaming Catalogs',
    primaryIntent: 'INFORMATIONAL',
    secondaryTopics: ['Server log parsing', 'Facet management', 'NGINX caching', 'HTTP 410 hygiene'],
    targetAudience: 'Lead SEO Engineers & Platform Technical Directors',
    relatedService: 'technical-seo',
    relatedIndustry: 'gaming',
    outline: [
      {
        sectionTitle: 'The Anatomy of Crawl Waste in Gaming Portals',
        pointsToCover: [
          'How infinite query filters deplete Googlebot daily request limits',
          'Analyzing crawl frequency drops on high-margin category hubs',
        ],
      },
      {
        sectionTitle: 'Server-Level Log Analysis Methodology',
        pointsToCover: [
          'Extracting verified Googlebot IPs using reverse DNS lookups',
          'Filtering HTTP 200 vs 304 vs 404 distributions across parameter paths',
        ],
      },
      {
        sectionTitle: 'Parameter Isolation & Edge NGINX Directives',
        pointsToCover: [
          'Using robots.txt Clean-param or Disallow wildcards effectively',
          'Implementing canonical headers at edge CDN layers',
        ],
      },
    ],
    internalLinks: [
      { targetPath: '/services/technical-seo', suggestedAnchorText: 'technical SEO engineering services' },
      { targetPath: '/industries/gaming', suggestedAnchorText: 'online gaming platform SEO' },
      { targetPath: '/free-seo-audit', suggestedAnchorText: 'technical crawl audit' },
    ],
    cta: {
      label: 'Get Your Server Logs Audited',
      href: '/free-seo-audit',
      intentFocus: 'Request technical log file audit',
    },
    seoMetadata: {
      targetTitle: 'Crawl Budget Optimization for Large Gaming Sites — iGaming Growth',
      targetDescription: 'Engineering guide to maximizing search engine crawl frequency on 100k+ URL gaming catalogs through log analysis and facet isolation.',
      targetKeyword: 'crawl budget optimization gaming sites',
    },
    schemaType: 'TechArticle',
    status: 'review',
    targetWordCount: 1800,
  },
  {
    slug: 'casino-hreflang-multi-geo-architecture',
    title: 'Multi-Jurisdiction Hreflang Architecture for Regulated Casino Brands',
    primaryIntent: 'INFORMATIONAL',
    secondaryTopics: ['Multi-currency routing', 'Jurisdiction isolation', 'XML sitemap hreflang', 'GeoIP redirection errors'],
    targetAudience: 'VP of Product & International SEO Leads',
    relatedService: 'technical-seo',
    relatedIndustry: 'casino',
    outline: [
      {
        sectionTitle: 'Why GeoIP Redirection Destroys International SEO',
        pointsToCover: [
          'Googlebot US IP crawling mechanics',
          'How automated 302 redirects lock out localized country variations',
        ],
      },
      {
        sectionTitle: 'XML Sitemap Hreflang vs On-Page HTML Tags',
        pointsToCover: [
          'Reducing HTML DOM weight on multi-region sites by moving tags to XML',
          'Automating bidirectional tag verification across Canada, UK, and Europe',
        ],
      },
    ],
    internalLinks: [
      { targetPath: '/services/technical-seo', suggestedAnchorText: 'enterprise technical SEO' },
      { targetPath: '/industries/casino', suggestedAnchorText: 'iGaming casino search strategy' },
    ],
    cta: {
      label: 'Audit International Hreflang Configuration',
      href: '/free-seo-audit',
      intentFocus: 'Fix multi-geo ranking conflicts',
    },
    seoMetadata: {
      targetTitle: 'Multi-Jurisdiction Casino Hreflang Architecture — iGaming Growth',
      targetDescription: 'Prevent international search cannibalization with proper XML sitemap hreflang clustering and bot-safe geo handling for online casinos.',
      targetKeyword: 'casino hreflang multi geo architecture',
    },
    schemaType: 'TechArticle',
    status: 'draft',
    targetWordCount: 2200,
  },
  {
    slug: 'server-side-gtm-cashier-tracking',
    title: 'Server-Side GTM Implementation for Third-Party Cashier Modals',
    primaryIntent: 'INFORMATIONAL',
    secondaryTopics: ['First-party cookies', 'Cross-domain iframe tracking', 'sGTM Cloud Run setup', 'Deposit attribution'],
    targetAudience: 'Performance Marketers & Analytics Engineers',
    relatedService: 'analytics',
    relatedIndustry: 'gaming',
    outline: [
      {
        sectionTitle: 'The Broken Funnel: Why 30% of Deposits Miss Attribution',
        pointsToCover: [
          'Third-party payment gateways strip referral headers and cookies',
          'Ad-blocker penetration among tech-savvy gamers',
        ],
      },
      {
        sectionTitle: 'Building the Server-Side Tracking Gateway',
        pointsToCover: [
          'Configuring custom subdomains for first-party cookie persistence',
          'Ingesting payment webhooks into BigQuery for verified FTD matching',
        ],
      },
    ],
    internalLinks: [
      { targetPath: '/services/analytics', suggestedAnchorText: 'analytics and conversion tracking services' },
      { targetPath: '/industries/gaming/analytics', suggestedAnchorText: 'gaming player attribution architecture' },
    ],
    cta: {
      label: 'Deploy Server-Side Tracking',
      href: '/contact',
      intentFocus: 'Implement verified attribution model',
    },
    seoMetadata: {
      targetTitle: 'Server-Side GTM for Casino Cashier Tracking — iGaming Growth',
      targetDescription: 'How to bypass ad-blockers and preserve first-party deposit attribution across external cashier windows with server-side Google Tag Manager.',
      targetKeyword: 'server side gtm casino deposit tracking',
    },
    schemaType: 'TechArticle',
    status: 'draft',
    targetWordCount: 1600,
  },
  {
    slug: 'cricket-gaming-tournament-seo-playbook',
    title: 'The Tournament Season SEO Playbook: Pre-Indexing for IPL & World Cup',
    primaryIntent: 'COMMERCIAL',
    secondaryTopics: ['Evergreen match hubs', 'LiveBlogPosting schema', 'Fast index pinging', 'Peak server load mitigation'],
    targetAudience: 'Head of Growth at Fantasy Sports & Cricket Platforms',
    relatedService: 'seo',
    relatedIndustry: 'cricket-gaming',
    outline: [
      {
        sectionTitle: 'The 120-Day Pre-Tournament Indexing Timeline',
        pointsToCover: [
          'Establishing team and stadium hubs 4 months before first ball',
          'Building historical player statistics clusters for long-tail search volume',
        ],
      },
      {
        sectionTitle: 'Match-Day Real-Time Indexation Architecture',
        pointsToCover: [
          'Deploying LiveBlogPosting and SportsEvent schema graphs',
          'Google Indexing API integration for hourly match update pings',
        ],
      },
    ],
    internalLinks: [
      { targetPath: '/industries/cricket-gaming', suggestedAnchorText: 'cricket gaming SEO solutions' },
      { targetPath: '/industries/cricket-gaming/seo', suggestedAnchorText: 'cricket prediction SEO architecture' },
    ],
    cta: {
      label: 'Prepare Your Tournament SEO Roadmap',
      href: '/contact',
      intentFocus: 'Lock in seasonal search dominance',
    },
    seoMetadata: {
      targetTitle: 'Tournament Season SEO Playbook for Cricket Platforms — iGaming Growth',
      targetDescription: 'The strategic pre-tournament SEO timeline for fantasy cricket operators targeting peak search volume during IPL and World Cup tournaments.',
      targetKeyword: 'cricket gaming tournament seo strategy',
    },
    schemaType: 'Article',
    status: 'draft',
    targetWordCount: 2000,
  },
  {
    slug: 'defensive-seo-color-prediction-brands',
    title: 'Defensive SERP Architecture: Protecting Brand Queries in Color Prediction',
    primaryIntent: 'COMMERCIAL',
    secondaryTopics: ['Phishing domain mitigation', 'Knowledge Graph entity fortification', 'Safe APK download hubs', 'DMCA takedowns'],
    targetAudience: 'Founders & Managing Directors',
    relatedService: 'seo',
    relatedIndustry: 'color-prediction',
    outline: [
      {
        sectionTitle: 'The Threat Landscape: Fake Login & Clone Sites',
        pointsToCover: [
          'How malicious scrapers rank on exact brand names and steal deposits',
          'The cost of lost customer lifetime value to phishing portals',
        ],
      },
      {
        sectionTitle: 'Monopolizing the Top 5 Search Positions',
        pointsToCover: [
          'Sitelinks, official verification schema, and social entity mapping',
          'Rapid takedown frameworks for counterfeit domains',
        ],
      },
    ],
    internalLinks: [
      { targetPath: '/industries/color-prediction', suggestedAnchorText: 'color prediction platform growth' },
      { targetPath: '/industries/color-prediction/seo', suggestedAnchorText: 'defensive brand SEO' },
    ],
    cta: {
      label: 'Protect Your Brand SERP',
      href: '/contact',
      intentFocus: 'Reclaim official branded rankings',
    },
    seoMetadata: {
      targetTitle: 'Defensive SERP Strategy for High-Risk Brands — iGaming Growth',
      targetDescription: 'Protect brand search queries from counterfeit scrape sites and clone domains with structured entity fortification and defensive SEO.',
      targetKeyword: 'defensive brand seo high competition',
    },
    schemaType: 'Article',
    status: 'draft',
    targetWordCount: 1500,
  },
];

export const getAllContentBriefs = (): readonly ContentBrief[] => [...contentBriefs];

export const getContentBriefBySlug = (slug: string): ContentBrief | undefined =>
  contentBriefs.find((b) => b.slug === slug);
