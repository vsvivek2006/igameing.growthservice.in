/**
 * Agency Services Data
 * Core service offerings for iGaming Growth B2B agency.
 */

export interface ServiceOffering {
  readonly slug: string;
  readonly title: string;
  readonly shortTitle: string;
  readonly tagline: string;
  readonly description: string;
  readonly icon: string; // lucide icon name
  readonly color: 'purple' | 'gold' | 'blue' | 'green' | 'rose' | 'indigo';
  readonly features: readonly string[];
  readonly outcomes: readonly string[];
  readonly idealFor: readonly string[];
  readonly featured: boolean;
}

export interface CaseStudy {
  readonly slug: string;
  readonly client: string;
  readonly clientType: string;
  readonly challenge: string;
  readonly solution: string;
  readonly results: readonly { readonly metric: string; readonly value: string }[];
  readonly service: string;
  readonly featured: boolean;
}

export interface IndustryVertical {
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly icon: string;
  readonly examples: readonly string[];
}

export const servicesData: readonly ServiceOffering[] = [
  {
    slug: 'igaming-seo',
    title: 'iGaming SEO & Organic Growth',
    shortTitle: 'SEO',
    tagline: 'Rank, acquire, and retain — without ad spend',
    description:
      'Full-funnel SEO strategy built exclusively for regulated gaming markets. We understand compliance constraints, geo-blocking complexities, and the hyper-competitive nature of casino SERPs. From technical architecture audits to programmatic content at scale.',
    icon: 'TrendingUp',
    color: 'purple',
    featured: true,
    features: [
      'Technical SEO audits for gaming platforms',
      'Keyword strategy for casino, sports, fantasy verticals',
      'Programmatic SEO at scale (game pages, casino reviews)',
      'Link building in regulated gaming verticals',
      'Core Web Vitals & page speed optimisation',
      'Structured data & rich snippet implementation',
      'Multi-language & geo-targeted SEO',
      'Compliance-safe content optimisation',
    ],
    outcomes: [
      '3x–10x organic traffic growth',
      'Top 3 SERP positions for high-intent keywords',
      'Reduced CAC vs paid channels',
      'Sustainable long-term player acquisition',
    ],
    idealFor: ['Casino operators', 'Sports betting platforms', 'Affiliate networks', 'Gaming aggregators'],
  },
  {
    slug: 'performance-marketing',
    title: 'Performance Marketing & Paid Acquisition',
    shortTitle: 'Performance Ads',
    tagline: 'ROI-first campaigns that pass compliance',
    description:
      'Precision paid media campaigns across programmatic, native, and push networks — navigating the strict advertising policies of Google, Meta, and ad networks for gaming brands. We maximise FTD volume while keeping CPAs profitable.',
    icon: 'BarChart3',
    color: 'gold',
    featured: true,
    features: [
      'Programmatic display & native ad campaigns',
      'Push notification & pop-under traffic management',
      'Affiliate programme management & optimisation',
      'Landing page design optimised for gaming conversions',
      'A/B testing frameworks for bonus offers',
      'Retargeting & re-engagement campaigns',
      'Campaign compliance review for regulated markets',
      'Real-time bidding strategy & audience targeting',
    ],
    outcomes: [
      'Lower cost-per-FTD (First Time Depositor)',
      '2x–5x ROAS on managed campaigns',
      'Qualified player acquisition (not just registrations)',
      'Scalable paid traffic with compliance guardrails',
    ],
    idealFor: ['New casino launches', 'Sports betting operators', 'Daily fantasy sports platforms', 'Crypto gaming brands'],
  },
  {
    slug: 'web-development',
    title: 'iGaming Web Development',
    shortTitle: 'Web Dev',
    tagline: 'High-performance platforms built for gaming',
    description:
      'We build fast, conversion-optimised gaming websites, affiliate portals, landing pages, and casino front-ends. Every project is engineered for Core Web Vitals, mobile-first UX, and regulatory compliance from day one.',
    icon: 'Code2',
    color: 'blue',
    featured: true,
    features: [
      'Casino & gaming website design & development',
      'Affiliate review site & comparison portal development',
      'Landing page development for bonus campaigns',
      'Mobile-first, Core Web Vitals optimised builds',
      'API integrations with game aggregators & payment gateways',
      'Age verification & responsible gaming UX',
      'Multi-currency & geo-detection implementation',
      'White-label & headless CMS solutions',
    ],
    outcomes: [
      'Sub-2s load times on mobile',
      'Higher conversion rates on registration flows',
      'Fully compliant responsible gaming UX',
      'Scalable architecture for rapid market expansion',
    ],
    idealFor: ['Casino operators needing a rebrand', 'Affiliates scaling to review portals', 'Game studios launching promo sites'],
  },
  {
    slug: 'content-strategy',
    title: 'Content Strategy & Editorial',
    shortTitle: 'Content',
    tagline: 'Authority content that ranks and converts',
    description:
      'Expert iGaming content from editors who understand casino mathematics, regulatory nuance, and player psychology. We produce review content, game guides, news, blog articles, and long-form editorial that search engines trust and players read.',
    icon: 'FileText',
    color: 'green',
    featured: true,
    features: [
      'Casino & game review content (EEAT-optimised)',
      'Strategy guides, tutorials, and how-to content',
      'News & editorial for iGaming publications',
      'Programmatic content templates at scale',
      'Responsible gaming & compliance content',
      'Multilingual content localisation (EN, HI, more)',
      'Content calendar & editorial workflow management',
      'Topical authority mapping for competitive niches',
    ],
    outcomes: [
      'Topical authority in target gaming niches',
      'High-intent organic traffic from informational queries',
      'Increased time-on-site and reduced bounce rates',
      'Compliant content that survives regulatory scrutiny',
    ],
    idealFor: ['Affiliate site owners', 'Casino operators building content hubs', 'Game developers', 'iGaming publications'],
  },
  {
    slug: 'social-media-marketing',
    title: 'Social Media & Community Marketing',
    shortTitle: 'Social Media',
    tagline: 'Build brand affinity in the right communities',
    description:
      'Platform-specific social strategies for gaming brands — Telegram community management, Twitter/X engagement, Instagram creative, and YouTube channel growth. We build authentic player communities that drive organic referrals.',
    icon: 'Share2',
    color: 'rose',
    featured: false,
    features: [
      'Telegram community strategy & management',
      'Twitter/X gaming brand voice & engagement',
      'Instagram Reels & creative content production',
      'YouTube channel growth & video SEO',
      'Influencer & streamer partnership management',
      'Community moderation & reputation management',
      'Discord server setup & growth',
      'Social listening & competitor tracking',
    ],
    outcomes: [
      'Growing, engaged player communities',
      'Organic brand referrals & word-of-mouth',
      'Influencer-driven player acquisition',
      'Reduced churn through community bonding',
    ],
    idealFor: ['Crypto gaming platforms', 'New casino launches', 'Fantasy sports brands', 'Esports organisations'],
  },
  {
    slug: 'conversion-optimisation',
    title: 'CRO & Conversion Optimisation',
    shortTitle: 'CRO',
    tagline: 'Turn more visitors into depositing players',
    description:
      'Data-driven conversion rate optimisation for gaming registration flows, bonus claim pages, deposit funnels, and landing pages. We use heatmaps, session recordings, and A/B testing to find and fix drop-offs in your player journey.',
    icon: 'Target',
    color: 'indigo',
    featured: false,
    features: [
      'Registration funnel analysis & optimisation',
      'Deposit flow UX review & redesign',
      'Bonus page A/B testing',
      'Heatmap & session recording analysis',
      'Landing page conversion audits',
      'KYC & verification flow optimisation',
      'Email & SMS re-engagement automation',
      'Player retention & VIP programme UX',
    ],
    outcomes: [
      'Higher reg-to-deposit conversion rates',
      'More FTDs from existing traffic',
      'Reduced KYC drop-off rates',
      'Improved lifetime value per player',
    ],
    idealFor: ['Established casinos with traffic but low conversion', 'Sports books optimising funnels', 'Gaming apps improving retention'],
  },
] as const;

export const caseStudies: readonly CaseStudy[] = [
  {
    slug: 'crypto-casino-seo-growth',
    client: 'Crypto Casino Platform',
    clientType: 'Crypto Casino Operator',
    challenge: 'Zero organic visibility in tier-1 English markets. Entirely reliant on paid traffic.',
    solution: 'Technical SEO overhaul, programmatic game review pages, and authority link building campaign.',
    results: [
      { metric: 'Organic traffic', value: '+840% in 6 months' },
      { metric: 'Keywords ranking', value: '2,400+ in top 10' },
      { metric: 'CAC reduction', value: '-63% vs paid channels' },
    ],
    service: 'igaming-seo',
    featured: true,
  },
  {
    slug: 'sports-betting-affiliate-launch',
    client: 'Sports Betting Affiliate Network',
    clientType: 'Affiliate Publisher',
    challenge: 'New affiliate site with no authority competing against established players.',
    solution: 'Full web development, topical content strategy, and programmatic SEO for 500+ sport/casino review pages.',
    results: [
      { metric: 'Domain Rating', value: '0 → 42 in 12 months' },
      { metric: 'Monthly organic users', value: '0 → 95,000' },
      { metric: 'Affiliate revenue', value: '$0 → $28,000/mo' },
    ],
    service: 'content-strategy',
    featured: true,
  },
  {
    slug: 'indian-fantasy-platform-growth',
    client: 'Indian Fantasy Sports Platform',
    clientType: 'Fantasy Sports App',
    challenge: 'High CAC from paid channels. Needed organic growth in competitive India fantasy sports market.',
    solution: 'Hindi + English SEO content, performance marketing campaign optimisation, landing page CRO.',
    results: [
      { metric: 'Organic registrations', value: '+310% YoY' },
      { metric: 'CPA reduction', value: '-47% on paid campaigns' },
      { metric: 'ROAS', value: '4.2x on managed spend' },
    ],
    service: 'performance-marketing',
    featured: true,
  },
] as const;

export const industryVerticals: readonly IndustryVertical[] = [
  {
    slug: 'online-casinos',
    title: 'Online Casinos',
    description: 'Casino operators across regulated markets — slots, table games, live dealer, and hybrid platforms.',
    icon: '🎰',
    examples: ['New casino launches', 'Established operators scaling in new geos', 'White-label casino brands'],
  },
  {
    slug: 'sports-betting',
    title: 'Sports Betting',
    description: 'Sportsbooks and betting exchanges targeting cricket, football, horse racing, and esports.',
    icon: '⚽',
    examples: ['IPL-focused sportsbooks', 'Exchange betting platforms', 'Esports betting operators'],
  },
  {
    slug: 'fantasy-sports',
    title: 'Fantasy Sports',
    description: 'Daily and season-long fantasy platforms competing in India and global markets.',
    icon: '🏏',
    examples: ['Cricket fantasy apps', 'Multi-sport fantasy platforms', 'Skill gaming startups'],
  },
  {
    slug: 'crypto-gaming',
    title: 'Crypto & Web3 Gaming',
    description: 'Blockchain casinos, NFT gaming platforms, and crypto sportsbooks.',
    icon: '₿',
    examples: ['Provably fair crypto casinos', 'NFT card game platforms', 'DeFi yield gaming protocols'],
  },
  {
    slug: 'gaming-affiliates',
    title: 'Gaming Affiliates & Publishers',
    description: 'Affiliate sites, comparison portals, review networks, and iGaming publications.',
    icon: '📊',
    examples: ['Casino review networks', 'Sports tipster portals', 'Bonus comparison sites'],
  },
  {
    slug: 'game-studios',
    title: 'Game Studios & Providers',
    description: 'Slot studios, table game developers, and RNG content providers.',
    icon: '🎮',
    examples: ['Emerging slot studios', 'Live dealer table providers', 'Casual gaming-to-casino crossovers'],
  },
] as const;

export const getFeaturedServices = () => servicesData.filter((s) => s.featured);
export const getAllServices = () => [...servicesData];
export const getServiceBySlug = (slug: string) => servicesData.find((s) => s.slug === slug);
export const getFeaturedCaseStudies = () => caseStudies.filter((c) => c.featured);
export const getAllIndustryVerticals = () => [...industryVerticals];
