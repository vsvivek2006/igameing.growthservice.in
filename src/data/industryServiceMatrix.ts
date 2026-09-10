/**
 * Service × Industry Relationship Matrix — iGaming Growth
 * HARD ARCHITECTURAL CONSTRAINT: EXACTLY 12 APPROVED COMBINATIONS (Group D).
 * Every entry provides unique challenges, tailored methodology, bespoke deliverables,
 * and distinct search intent. No templated string replacements.
 */

export interface ServiceIndustryMatrixEntry {
  readonly industrySlug: string;
  readonly serviceSlug: string;
  readonly enabled: boolean;
  readonly priority: number;
  readonly indexable: boolean;
  readonly searchIntent: string;
  readonly specificChallenges: readonly {
    readonly title: string;
    readonly description: string;
  }[];
  readonly specificApproach: string;
  readonly specificDeliverables: readonly string[];
  readonly specificFAQs: readonly {
    readonly q: string;
    readonly a: string;
  }[];
  readonly uniqueValue: string;
  readonly conversionFocus: string;
  readonly estimatedTimelineWeeks: string;
}

export const industryServiceMatrix: readonly ServiceIndustryMatrixEntry[] = [
  // ─── 1. Online Gaming × SEO ──────────────────────────────────────────────
  {
    industrySlug: 'gaming',
    serviceSlug: 'seo',
    enabled: true,
    priority: 0.85,
    indexable: true,
    searchIntent: 'gaming platform seo agency user acquisition organic rankings',
    uniqueValue:
      'High-velocity programmatic content architecture paired with real-time indexing infrastructure designed for volatile gaming SERPs.',
    conversionFocus:
      'User sign-up and initial active session funnel optimization directly from high-intent gaming query clusters.',
    estimatedTimelineWeeks: '12–16 weeks for core query breakout',
    specificChallenges: [
      {
        title: 'Extreme Domain Age Asymmetry',
        description:
          'Incumbent gaming portals often possess 10–15 year old domains with massive legacy backlink equity. Outranking them requires surgical topical cluster dominance rather than direct head-to-head backlink battles.',
      },
      {
        title: 'Volatile Search Query Lifecycles',
        description:
          'Gaming query trends change rapidly as new titles, mechanics, and tournament formats emerge. A static SEO roadmap lags behind player search volume surges.',
      },
      {
        title: 'Platform Crawl Inefficiencies in SPA Frameworks',
        description:
          'Modern gaming web apps rely heavily on WebGL, React, and WebSocket feeds that search crawlers fail to render without pre-rendering or dynamic SSR setups.',
      },
    ],
    specificApproach:
      'We deploy a hybrid architecture: pre-rendered static hub pages for rapid search indexation, programmatic game category matrices targeting long-tail game variations, and structured data entity mapping connecting game titles to publisher and rule entities.',
    specificDeliverables: [
      'Comprehensive gaming entity ontology & crawl path architecture',
      'Dynamic SSR/pre-rendering optimization for game client landing hubs',
      'Long-tail game mechanics keyword matrix & automated metadata generation schema',
      'Competitive gap audit against top 5 legacy gaming operators',
      'User acquisition attribution model integrated with Google Search Console API',
    ],
    specificFAQs: [
      {
        q: 'How fast can a new gaming portal achieve organic rankings?',
        a: 'Targeting mid-tail game variant queries and rule queries typically yields initial organic traffic within 60–90 days. Competitive primary head terms (e.g. "online gaming platform") require 6–9 months of steady topical authority building.',
      },
      {
        q: 'How do you handle game pages built inside single-page applications?',
        a: 'We deploy Server-Side Rendering (SSR) and pre-rendering to deliver complete HTML, Schema.org Game markup, and internal crawl paths for fast initial paint and crawlability without relying on heavy client bundles.',
      },
    ],
  },

  // ─── 2. Online Gaming × Technical SEO ────────────────────────────────────
  {
    industrySlug: 'gaming',
    serviceSlug: 'technical-seo',
    enabled: true,
    priority: 0.85,
    indexable: true,
    searchIntent: 'gaming website technical seo crawl budget rendering core web vitals',
    uniqueValue:
      'Engineering-led Core Web Vitals optimization and crawl graph design tailored to massive JavaScript and WebGL gaming catalogs.',
    conversionFocus:
      'Eliminating page load abandonment on mobile devices to preserve game trial and player onboarding.',
    estimatedTimelineWeeks: '8–12 weeks to full technical resolution',
    specificChallenges: [
      {
        title: 'Heavily Render-Blocked Client Payloads',
        description:
          'Browser gaming engines frequently bundle large canvas scripts and audio assets in the initial payload, destroying Interaction to Next Paint (INP) and Largest Contentful Paint (LCP).',
      },
      {
        title: 'Faceted Catalog Indexation Leaks',
        description:
          'Dynamic filters (genre, players, ratings, engine) generate millions of parameter combinations, draining search crawl budgets across thin or empty indexable nodes.',
      },
    ],
    specificApproach:
      'We separate the game launch payload from the search discoverable DOM, enforce strict self-referencing canonical hierarchies across facet taxonomies, and implement aggressive Edge caching for static game profile endpoints.',
    specificDeliverables: [
      'Crawl budget governance framework with selective robots meta directives',
      'Hydration optimization and bundle code-splitting audit for game landing views',
      'Complete Schema.org SoftwareApplication and VideoGame structured graph',
      'Core Web Vitals remediation report addressing mobile LCP and INP',
    ],
    specificFAQs: [
      {
        q: 'Why do gaming catalogs face severe crawl budget depletion?',
        a: 'Faceted search filters (sorting by multiplayer mode, release date, difficulty) multiply URL variations exponentially. Without canonical rules and parameter management in robots.txt, Googlebot wastes quota crawling duplicate filter permutations.',
      },
    ],
  },

  // ─── 3. Online Gaming × Website Development ──────────────────────────────
  {
    industrySlug: 'gaming',
    serviceSlug: 'website-development',
    enabled: true,
    priority: 0.85,
    indexable: true,
    searchIntent: 'gaming website development high performance web portal engineering',
    uniqueValue:
      'Sub-second gaming portal development combining modern headless architectures with instant game launcher initialization.',
    conversionFocus:
      'Maximizing immediate game play initiation and registered account creation.',
    estimatedTimelineWeeks: '10–16 weeks for production delivery',
    specificChallenges: [
      {
        title: 'Balancing Rich Gameplay with Immediate First Load',
        description:
          'Heavy game preview animations and interactive lobbies often result in sluggish initial page response times on entry-level mobile devices.',
      },
    ],
    specificApproach:
      'We architect the web portal using lightweight modular React components, decoupling high-bandwidth game assets into deferred background streams while delivering instant, static server-rendered HTML for first-screen discovery.',
    specificDeliverables: [
      'SEO-first headless frontend web application built on modern React/Vite',
      'Responsive mobile-optimized interface tested on low-spec devices',
      'Instant game container shell with smooth loading placeholders',
      'Integrated web analytics and player interaction event tracking',
    ],
    specificFAQs: [
      {
        q: 'Can a custom web portal outperform ready-made white-label gaming platforms?',
        a: 'Yes. White-label platforms typically suffer from monolithic, bloated architectures with slow TTFB and poor SEO flexibility. Custom frontend development lets you achieve perfect Core Web Vitals and full metadata control.',
      },
    ],
  },

  // ─── 4. YONO / Skill Games × SEO ─────────────────────────────────────────
  {
    industrySlug: 'yono',
    serviceSlug: 'seo',
    enabled: true,
    priority: 0.85,
    indexable: true,
    searchIntent: 'yono games seo agency app distribution search visibility rummy teen patti',
    uniqueValue:
      'Penalty-resistant organic search strategies for real-money skill gaming apps and mobile app distribution portals facing app store restrictions.',
    conversionFocus:
      'Direct, authenticated app distribution initiation and user sign-up completion.',
    estimatedTimelineWeeks: '10–14 weeks',
    specificChallenges: [
      {
        title: 'App Store Indexation Barriers',
        description:
          'Because real-money skill games frequently face regional app store policy blocks, web search serves as the primary gateway for app discovery and verified installations.',
      },
      {
        title: 'Aggressive Keyword Churn & Clone Domination',
        description:
          'Black-hat operators create hundreds of low-quality clone sites targeting brand variants, requiring legitimate operators to establish impenetrable topical authority.',
      },
    ],
    specificApproach:
      'We establish authoritative brand hubs, build detailed game mechanics guides for each card and skill game variant, and construct verifiable entity trust signals that withstand algorithmic spam purges.',
    specificDeliverables: [
      'Official brand entity defense & variant keyword capture architecture',
      'High-speed app landing page SEO specification with Mobile-First indexation priority',
      'How-to & rulebook content clusters targeting beginner and tournament players',
      'Compliance-safe off-page authority framework',
    ],
    specificFAQs: [
      {
        q: 'How do you safeguard a skill gaming portal from Google Helpful Content demotions?',
        a: 'We ensure every game guide contains genuine, original rule calculations, verifiable payout formulas, and authentic user interaction models rather than AI-generated keyword-stuffed text.',
      },
    ],
  },

  // ─── 5. YONO / Skill Games × Website Development ─────────────────────────
  {
    industrySlug: 'yono',
    serviceSlug: 'website-development',
    enabled: true,
    priority: 0.85,
    indexable: true,
    searchIntent: 'yono website development skill game pwa app landing page engineering',
    uniqueValue:
      'Ultra-fast progressive web app (PWA) development and frictionless app distribution funnels tailored to mobile gaming users in emerging markets.',
    conversionFocus:
      'Frictionless web-to-app conversion and seamless mobile app onboarding.',
    estimatedTimelineWeeks: '8–12 weeks',
    specificChallenges: [
      {
        title: 'High Drop-Off on Direct App Downloads',
        description:
          'Security warnings, slow server downloads, and confusing installation instructions cost operators significant user drop-off at the installation step.',
      },
    ],
    specificApproach:
      'We build sleek, lightweight landing pages with animated step-by-step installation walkthroughs, multi-CDN download fallbacks, and instantaneous mobile loading on 3G/4G connections.',
    specificDeliverables: [
      'High-conversion mobile app landing and distribution portal',
      'Interactive installation visual guide resolving Android installation friction',
      'Global multi-region CDN distribution setup for download speed',
      'Progressive Web App (PWA) instant-play alternative experience',
    ],
    specificFAQs: [
      {
        q: 'Can a PWA complement native app distribution for skill games?',
        a: 'A PWA provides an immediate zero-friction trial experience while the native app installs, drastically cutting customer acquisition drop-offs.',
      },
    ],
  },

  // ─── 6. Online Casino × SEO ──────────────────────────────────────────────
  {
    industrySlug: 'casino',
    serviceSlug: 'seo',
    enabled: true,
    priority: 0.85,
    indexable: true,
    searchIntent: 'online casino seo agency regulated market casino search ranking',
    uniqueValue:
      'Data-driven organic search architectures for regulated online casinos, targeting high-LTV audience queries with robust E-E-A-T trust signals.',
    conversionFocus:
      'Account registration and commercial conversions via trusted, compliant informational and transactional search paths.',
    estimatedTimelineWeeks: '16–24 weeks for high-competition head terms',
    specificChallenges: [
      {
        title: 'Hyper-Competitive Commercial SERPs',
        description:
          'Online casino keywords feature the highest cost-per-click and authority barriers on the web. Competing requires ruthless content depth and flawless technical execution.',
      },
      {
        title: 'Strict Regulatory Compliance Requirements',
        description:
          'Content must strictly adhere to advertising standards, mandatory age gating, and responsible gaming disclosures to avoid license sanctions and ranking penalties.',
      },
    ],
    specificApproach:
      'We build deep category silos around game types (slots, live dealer, roulette, blackjack), optimize for long-tail game-provider queries, and reinforce regulatory trust with structured licensing entity data.',
    specificDeliverables: [
      'Topical category authority blueprint across all major casino verticals',
      'Compliance-reviewed on-page content templates with responsible gaming integration',
      'Game provider and RTP (Return to Player) data architecture for search richness',
      'High-authority white-hat digital PR and editorial link acquisition roadmap',
    ],
    specificFAQs: [
      {
        q: 'Can a new online casino rank for primary casino head terms?',
        a: 'New operators should first dominate provider-specific and game-specific long-tail queries (e.g., specific slot RTPs, live blackjack rules) to build algorithmic trust before challenging head terms.',
      },
    ],
  },

  // ─── 7. Online Casino × Technical SEO ────────────────────────────────────
  {
    industrySlug: 'casino',
    serviceSlug: 'technical-seo',
    enabled: true,
    priority: 0.85,
    indexable: true,
    searchIntent: 'casino technical seo crawl optimization schema audit international hreflang',
    uniqueValue:
      'Enterprise technical infrastructure for multi-thousand game casino platforms: international hreflang, real-time indexation, and clean structured data.',
    conversionFocus:
      'Rapid catalog discovery and frictionless mobile navigation to game lobbies.',
    estimatedTimelineWeeks: '8–12 weeks',
    specificChallenges: [
      {
        title: 'Multi-Regional Currency & Language Complexities',
        description:
          'International operators serving multiple jurisdictions struggle with hreflang conflicts, localized currency discrepancies, and regional indexation leakage.',
      },
      {
        title: 'High-Frequency Dynamic Content Updates',
        description:
          'Jackpot tickers, game additions, and provider integrations constantly modify DOM structures, risking layout shifts and stale cached search results.',
      },
    ],
    specificApproach:
      'We implement automated hreflang validation pipelines, deploy structured casino schema with clear licensing entities, and isolate volatile dynamic feeds from core server-rendered search documents.',
    specificDeliverables: [
      'Comprehensive multi-region hreflang architecture and auditing system',
      'Schema.org Casino and ProfessionalService graph implementation',
      'Dynamic feed decoupling to maintain near-zero CLS (Cumulative Layout Shift)',
      'Server response optimization for mobile casino lobbies',
    ],
    specificFAQs: [
      {
        q: 'How do you handle real-time progressive jackpot counters without hurting Core Web Vitals?',
        a: 'We reserve static container dimensions in the initial HTML and update jackpot tickers asynchronously via WebSockets after initial layout rendering, preventing Cumulative Layout Shift (CLS).',
      },
    ],
  },

  // ─── 8. Cricket Gaming × SEO ─────────────────────────────────────────────
  {
    industrySlug: 'cricket-gaming',
    serviceSlug: 'seo',
    enabled: true,
    priority: 0.85,
    indexable: true,
    searchIntent: 'cricket gaming seo fantasy cricket search optimization ipl organic traffic',
    uniqueValue:
      'High-velocity indexation systems and tournament-cycle search strategies engineered to capture massive search spikes during marquee cricket leagues.',
    conversionFocus:
      'Match-day contest joins, fantasy team registrations, and rapid player onboarding.',
    estimatedTimelineWeeks: '8–12 weeks prior to major tournament start',
    specificChallenges: [
      {
        title: 'Extreme Seasonality & Search Spike Volatility',
        description:
          'Cricket search interest spikes 500–1000% during marquee tournaments (IPL, World Cups) and contracts post-season, requiring pre-season authority building and rapid match-day indexation.',
      },
      {
        title: 'Live Match Information Velocity',
        description:
          'Players search for pitch reports, squad announcements, and match predictions hours before match start, demanding immediate search crawler discovery.',
      },
    ],
    specificApproach:
      'We engineer programmatic match and tournament hubs with IndexNow API integration for instant crawl requests, paired with evergreen fantasy guide silos that compound authority year-round.',
    specificDeliverables: [
      'Pre-season tournament SEO roadmap with scheduled indexation targets',
      'Automated match fixture and team prediction schema template',
      'Real-time IndexNow / Google Indexing API integration pipeline',
      'Tournament retrospective and retention authority strategy',
    ],
    specificFAQs: [
      {
        q: 'When should a cricket gaming platform begin SEO preparations for the IPL?',
        a: 'At least 12–16 weeks prior to the tournament opening match. This allows Google to discover, index, and allocate baseline authority to tournament hub pages before the massive search wave begins.',
      },
    ],
  },

  // ─── 9. Color Prediction × SEO ───────────────────────────────────────────
  {
    industrySlug: 'color-prediction',
    serviceSlug: 'seo',
    enabled: true,
    priority: 0.85,
    indexable: true,
    searchIntent: 'color prediction game seo agency organic search traffic customer acquisition',
    uniqueValue:
      'High-efficiency organic customer acquisition pipelines for color prediction platforms seeking independence from fragile paid advertising channels.',
    conversionFocus:
      'Platform registration and active gameplay participation.',
    estimatedTimelineWeeks: '8–12 weeks',
    specificChallenges: [
      {
        title: 'High Player Churn & Search Volume Transience',
        description:
          'Color prediction audiences churn quickly, necessitating a continuous inbound stream of fresh organic search traffic to maintain active user pools.',
      },
      {
        title: 'Severe Paid Marketing Restrictions',
        description:
          'Major advertising networks ban direct promotion of prediction games, making organic search the single most durable channel for scale.',
      },
    ],
    specificApproach:
      'We build educational content silos detailing game rules, statistical analysis models, and platform transparency guides to capture curious, high-intent prospective players.',
    specificDeliverables: [
      'Comprehensive prediction mechanics keyword architecture',
      'Educational guide strategy demystifying game algorithms and rules',
      'Mobile-optimized player registration landing page templates',
      'Organic conversion funnel audit and friction mitigation plan',
    ],
    specificFAQs: [
      {
        q: 'Can organic SEO replace paid social channels for color prediction platforms?',
        a: 'Yes. Organic search provides consistent, compounded daily traffic without the constant risk of sudden account bans or escalating cost-per-click rates on paid networks.',
      },
    ],
  },

  // ─── 10. Color Trading × SEO ─────────────────────────────────────────────
  {
    industrySlug: 'color-trading',
    serviceSlug: 'seo',
    enabled: true,
    priority: 0.85,
    indexable: true,
    searchIntent: 'color trading seo platform search visibility chart game marketing',
    uniqueValue:
      'Bridging chart-reading game mechanics with educational financial search intent to build sustainable, high-intent organic user acquisition.',
    conversionFocus:
      'Trading account registration and demo/active trading engagement.',
    estimatedTimelineWeeks: '10–14 weeks',
    specificChallenges: [
      {
        title: 'Search Intent Ambiguity (Gaming vs Financial Trading)',
        description:
          'Color trading queries sit between interactive casual gaming and technical chart analysis. Failing to satisfy both technical curiosity and casual play intent results in high bounce rates.',
      },
    ],
    specificApproach:
      'We craft structured learning hubs explaining candlestick basics, trend identification, and timing strategies, positioning your platform as the most intuitive place to test chart-reading skills.',
    specificDeliverables: [
      'Intent-segmented keyword architecture (educational vs transactional)',
      'Interactive chart tutorial content and visual guide templates',
      'Technical SEO audit optimizing chart preview rendering speed',
      'Conversion journey mapping from educational guide to platform trial',
    ],
    specificFAQs: [
      {
        q: 'How do you target both novice players and analytical chart enthusiasts?',
        a: 'We design tiered content silos: foundational guides for casual users learning basic color patterns, and analytical articles for enthusiasts studying candlestick momentum, both funneling into the platform.',
      },
    ],
  },

  // ─── 11. Stock Market / Finance × SEO ─────────────────────────────────────
  {
    industrySlug: 'stock-market',
    serviceSlug: 'seo',
    enabled: true,
    priority: 0.85,
    indexable: true,
    searchIntent: 'stock market website seo financial portal ymyl authority financial trading seo',
    uniqueValue:
      'Rigorous YMYL search authority frameworks, verified author entity graphs, and algorithmic trust engineering for financial and trading platforms.',
    conversionFocus:
      'Platform trial sign-ups, newsletter subscriptions, and trading tool usage.',
    estimatedTimelineWeeks: '16–20 weeks for high-trust authority indexation',
    specificChallenges: [
      {
        title: 'Extreme YMYL Quality Rater Scrutiny',
        description:
          'Google applies its most stringent Your Money Your Life (YMYL) standards to financial content. Any perceived inaccuracy or anonymous authorship triggers sitewide algorithmic dampening.',
      },
      {
        title: 'Dynamic Financial Data Indexation',
        description:
          'Stock quotes, indices, and financial tickers change by the second, requiring specialized schema and rendering architectures to prevent stale search snippets.',
      },
    ],
    specificApproach:
      'We establish verifiable author entity profiles, build Schema.org FinancialProduct and AboutPage knowledge graphs, implement strict citation standards, and optimize financial tool landing pages.',
    specificDeliverables: [
      'Comprehensive E-E-A-T compliance and author entity audit',
      'Financial schema markup architecture (FinancialProduct, Person, Organization)',
      'Topical authority map across trading categories, technical indicators, and markets',
      'Citation and regulatory disclosure standardization framework',
    ],
    specificFAQs: [
      {
        q: 'What is the most common reason financial websites lose search rankings?',
        a: 'Lack of demonstrable E-E-A-T: anonymous or unverified author bios, missing editorial guidelines, and failure to cite recognized financial regulatory bodies.',
      },
    ],
  },

  // ─── 12. Stock Market / Finance × Website Development ─────────────────────
  {
    industrySlug: 'stock-market',
    serviceSlug: 'website-development',
    enabled: true,
    priority: 0.85,
    indexable: true,
    searchIntent: 'financial website development stock market portal engineering fintech web development',
    uniqueValue:
      'Ultra-low-latency financial web development combining real-time data streaming with SEO-first server-rendered market hubs.',
    conversionFocus:
      'User registration, interactive charting engagement, and platform retention.',
    estimatedTimelineWeeks: '12–16 weeks',
    specificChallenges: [
      {
        title: 'Heavy Client-Side JavaScript for Charting Engines',
        description:
          'Financial charts (TradingView libraries, canvas renderers) destroy mobile performance and Core Web Vitals if loaded eagerly on search landing pages.',
      },
    ],
    specificApproach:
      'We construct hybrid rendering systems: instant, lightweight server-rendered HTML for tickers and fundamental data (for search crawlers and immediate first paint), deferring interactive canvas charts until user engagement.',
    specificDeliverables: [
      'Headless financial web application engineered for sub-second TTFB',
      'Optimized chart integration preserving perfect Core Web Vitals scores',
      'Real-time WebSocket data stream architecture with lightweight fallbacks',
      'Responsive trading dashboard design verified across mobile screen sizes',
    ],
    specificFAQs: [
      {
        q: 'How do you keep interactive stock charts from slowing down search indexing?',
        a: 'We render complete semantic financial tables on the server via SSR/prerendering for fast initial paint and crawlability, while lazy-loading heavy interactive charting libraries on user interaction.',
      },
    ],
  },
];

// ─── Selectors & Accessors ───────────────────────────────────────────────────

export const getAllMatrixEntries = (): readonly ServiceIndustryMatrixEntry[] =>
  industryServiceMatrix;

export const getIndexableMatrixEntries = (): readonly ServiceIndustryMatrixEntry[] =>
  industryServiceMatrix.filter((e) => e.enabled && e.indexable);

export const getMatrixEntry = (
  industrySlug: string,
  serviceSlug: string
): ServiceIndustryMatrixEntry | undefined =>
  industryServiceMatrix.find(
    (e) => e.industrySlug === industrySlug && e.serviceSlug === serviceSlug && e.enabled
  );

export const getServicesForIndustry = (industrySlug: string): readonly string[] =>
  industryServiceMatrix
    .filter((e) => e.industrySlug === industrySlug && e.enabled)
    .map((e) => e.serviceSlug);

export const getIndustriesForService = (serviceSlug: string): readonly string[] =>
  industryServiceMatrix
    .filter((e) => e.serviceSlug === serviceSlug && e.enabled)
    .map((e) => e.industrySlug);
