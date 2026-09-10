/**
 * Centralized B2B Agency FAQ Dataset — iGaming Growth
 * 
 * Authoritative Q&A library organized by category, service, and industry vertical.
 * Powers the FAQ portal and provides contextual FAQ modules across pages.
 */

export type FAQCategory =
  | 'agency-engagement'
  | 'technical-seo'
  | 'regulated-marketing'
  | 'industry-specific'
  | 'web-engineering'
  | 'analytics-attribution';

export interface AgencyFAQItem {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
  readonly category: FAQCategory;
  readonly categoryLabel: string;
  readonly relevantServices?: readonly string[];
  readonly relevantIndustries?: readonly string[];
}

export const faqData: readonly AgencyFAQItem[] = [
  // ─── Agency Engagement & Process ──────────────────────────────────────────
  {
    id: 'faq-who-we-serve',
    category: 'agency-engagement',
    categoryLabel: 'Agency Engagement',
    question: 'What types of businesses does iGaming Growth serve?',
    answer:
      'We provide B2B digital growth, technical SEO, performance web development, and content architecture to operators, platforms, software studios, and affiliate portals in high-competition verticals including online gaming, casino software, fantasy and cricket gaming, trading and stock platforms, and specialized classified portals. We do not provide consumer-facing gambling, betting, or adult services directly.',
  },
  {
    id: 'faq-how-long-seo-takes',
    category: 'agency-engagement',
    categoryLabel: 'Agency Engagement',
    question: 'How long does it take to see measurable SEO results in high-competition verticals?',
    answer:
      'In aggressive search spaces, initial long-tail keyword movement and crawl optimization typically manifest within 60–90 days. Achieving top-3 rankings on high-volume commercial head terms generally requires 6–9 months of disciplined topical authority development, technical optimization, and high-standard editorial link acquisition.',
  },
  {
    id: 'faq-free-audit-scope',
    category: 'agency-engagement',
    categoryLabel: 'Agency Engagement',
    question: 'What is included in the Free SEO Audit?',
    answer:
      'Our audit is a manual, architect-led assessment covering crawl efficiency, server rendering issues, Core Web Vitals profiling, semantic schema graph validation, parameter handling, and competitive keyword gap analysis against your top 3 market competitors. We do not use generic push-button automated audit reports.',
  },
  {
    id: 'faq-engagement-model',
    category: 'agency-engagement',
    categoryLabel: 'Agency Engagement',
    question: 'What does a typical agency engagement look like?',
    answer:
      'Engagements typically operate on structured 3-month retainers for ongoing growth and SEO, or defined milestone sprints for platform web builds and technical migrations. Every engagement includes transparent monthly sprint roadmaps, weekly asynchronous engineering updates, and a live reporting dashboard tracking business-level KPIs.',
  },

  // ─── Technical SEO ────────────────────────────────────────────────────────
  {
    id: 'faq-tech-seo-scope',
    category: 'technical-seo',
    categoryLabel: 'Technical SEO',
    question: 'What does technical SEO include for gaming and high-volume websites?',
    answer:
      'Technical SEO includes server log file inspection, crawl budget management, rendering pipeline optimization (pre-rendering/SSR for JavaScript SPAs), facet filter canonicalization, Core Web Vitals remediation (specifically INP and LCP), XML sitemap orchestration, and multi-lingual hreflang synchronization.',
    relevantServices: ['technical-seo', 'seo-audit'],
  },
  {
    id: 'faq-spa-crawling',
    category: 'technical-seo',
    categoryLabel: 'Technical SEO',
    question: 'How do you handle search indexation for React or Single-Page Applications?',
    answer:
      'We configure server-side rendering (SSR) or dynamic pre-rendering at the edge (using CDN edge workers). When search crawlers request a page, the edge serves pre-rendered static HTML with populated meta tags, structured data, and internal links, completely eliminating rendering delays in Google Web Rendering Service.',
    relevantServices: ['technical-seo', 'website-development'],
  },
  {
    id: 'faq-internal-link-silos',
    category: 'technical-seo',
    categoryLabel: 'Technical SEO',
    question: 'How should large multi-vertical websites structure internal linking?',
    answer:
      'Large websites must implement strict topical silos. Sub-pages should link predominantly to siblings within their semantic cluster and upwards to their parent hub, avoiding indiscriminate sitewide cross-links that dilute page equity and blur thematic clarity for search crawlers.',
    relevantServices: ['technical-seo', 'on-page-seo'],
  },

  // ─── Regulated Marketing & Compliance ─────────────────────────────────────
  {
    id: 'faq-policy-compliance',
    category: 'regulated-marketing',
    categoryLabel: 'Regulated Marketing & Compliance',
    question: 'How do you ensure campaigns comply with platform and regulatory policies?',
    answer:
      'Our team maintains active compliance checklists aligned with jurisdiction-specific advertising guidelines and major ad network terms (Google, Meta). We never engage in policy circumvention, cloaking, or deceptive copy. In restricted categories where paid advertising is limited or prohibited, we focus on legitimate organic search authority and content assets.',
    relevantServices: ['google-ads', 'meta-ads', 'seo'],
  },
  {
    id: 'faq-paid-ads-eligibility',
    category: 'regulated-marketing',
    categoryLabel: 'Regulated Marketing & Compliance',
    question: 'Can you run Google Ads or Meta Ads for gaming and financial brands?',
    answer:
      'Paid advertising in regulated verticals is available strictly where eligible and subject to statutory licensing and platform pre-approval. We help qualified operators obtain mandatory platform certifications (such as Google Gambling and Games certifications or financial verification) and execute compliance-cleared ad creative.',
    relevantServices: ['google-ads', 'meta-ads'],
  },

  // ─── Industry Specific ────────────────────────────────────────────────────
  {
    id: 'faq-gaming-seo-difference',
    category: 'industry-specific',
    categoryLabel: 'Industry-Specific SEO',
    question: 'What makes SEO in online gaming and casino verticals different from standard SaaS or e-commerce?',
    answer:
      'The vertical is defined by extreme domain age asymmetry, aggressive search engine spam-filtering, high algorithmic volatility, and frequent search trend pivots. Generic agencies that rely on superficial content production fail because they lack the technical depth to solve crawl traps and the domain authority strategies required to compete with decade-old operators.',
    relevantIndustries: ['gaming', 'casino'],
  },
  {
    id: 'faq-financial-ymyl',
    category: 'industry-specific',
    categoryLabel: 'Industry-Specific SEO',
    question: 'How do you navigate Google YMYL requirements for financial and trading websites?',
    answer:
      'We implement verified expert author entity mapping (Schema.org Person with sameAs citations), clear statutory risk warnings, exchange-verified mathematical calculations, and comprehensive editorial policies that establish the Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T) expected by Google algorithms.',
    relevantIndustries: ['stock-market', 'color-trading'],
  },

  // ─── Web Engineering ──────────────────────────────────────────────────────
  {
    id: 'faq-web-dev-performance',
    category: 'web-engineering',
    categoryLabel: 'Web Engineering',
    question: 'Why does website performance directly impact customer acquisition costs?',
    answer:
      'Every 100ms of page load latency reduces user conversion rates. In gaming and high-speed trading environments, slow lobby loading and clunky mobile experiences cause immediate bounce. Furthermore, fast sites earn preferential crawl frequency and mobile ranking advantages from Googlebot.',
    relevantServices: ['website-development'],
  },

  // ─── Analytics & Attribution ──────────────────────────────────────────────
  {
    id: 'faq-cashier-tracking',
    category: 'analytics-attribution',
    categoryLabel: 'Analytics & Attribution',
    question: 'How do you track conversions when users register and transact in third-party iframe windows?',
    answer:
      'We deploy server-side Google Tag Manager (sGTM) paired with server-to-server webhook listeners. When the external transaction system processes a transaction, a secure backend webhook notifies the tracking endpoint, preserving first-party attribution data and accurately crediting the originating organic search keyword.',
    relevantServices: ['analytics'],
  },
];

// ─── Accessors ────────────────────────────────────────────────────────────────

export const getAllAgencyFAQs = (): readonly AgencyFAQItem[] => [...faqData];

export const getFAQsByCategory = (category: FAQCategory): readonly AgencyFAQItem[] =>
  faqData.filter((f) => f.category === category);

export const getFAQsForService = (serviceSlug: string): readonly AgencyFAQItem[] =>
  faqData.filter((f) => f.relevantServices?.includes(serviceSlug));

export const getFAQsForIndustry = (industrySlug: string): readonly AgencyFAQItem[] =>
  faqData.filter((f) => f.relevantIndustries?.includes(industrySlug));

export const FAQ_CATEGORY_LABELS: Record<FAQCategory, string> = {
  'agency-engagement': 'Agency & Engagement',
  'technical-seo': 'Technical SEO & Crawl',
  'regulated-marketing': 'Compliance & Paid Policies',
  'industry-specific': 'Industry-Specific Dynamics',
  'web-engineering': 'Engineering & Speed',
  'analytics-attribution': 'Tracking & Attribution',
};
