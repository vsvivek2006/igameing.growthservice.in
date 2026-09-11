/**
 * iGaming Growth — Industry Data Architecture
 * 8 specialist verticals. Each industry is genuinely differentiated —
 * different challenges, different SEO strategies, different service priorities.
 */

export interface IndustrySEOChallenge {
  readonly title: string;
  readonly description: string;
}

export interface IndustryFAQ {
  readonly q: string;
  readonly a: string;
}

export interface IndustryVertical {
  readonly slug: string;
  readonly name: string;
  readonly shortName: string;
  readonly category: 'gaming' | 'finance' | 'adult' | 'gaming-skill';
  readonly tagline: string;
  readonly overview: string;
  readonly competitionCharacteristics: string;

  // Specific challenge dimensions
  readonly seoChallenges: readonly IndustrySEOChallenge[];
  readonly technicalRequirements: readonly string[];
  readonly contentConsiderations: readonly string[];
  readonly complianceConsiderations: readonly string[];
  readonly conversionConsiderations: readonly string[];

  // Services recommended for this industry
  readonly recommendedServices: readonly string[]; // service slugs

  readonly faqs: readonly IndustryFAQ[];

  // SEO
  readonly seo: {
    readonly title: string;
    readonly description: string;
  };
}

export const industriesData: readonly IndustryVertical[] = [
  // ─── Online Gaming ────────────────────────────────────────────────
  {
    slug: 'gaming',
    name: 'Online Gaming',
    shortName: 'Gaming',
    category: 'gaming',
    tagline: 'SEO and digital growth for online gaming platforms competing in the world\'s most contested SERPs',
    overview:
      'Online gaming — encompassing real-money skill games, casual gaming platforms, and gaming portals — operates in a digital environment characterised by intense keyword competition, platform-specific advertising restrictions, and the constant challenge of organic visibility against operators with years of domain authority. Success in this vertical requires technical infrastructure built for scale, content that satisfies both search intent and regulatory standards, and an SEO system designed for long-term compounding rather than short-term traffic spikes.',
    competitionCharacteristics:
      'Gaming SERPs are dominated by operators with multi-year domain histories, substantial editorial backlink profiles, and content teams producing at volume. New entrants face a significant authority gap that cannot be bridged through content alone. Technical quality, user experience signals, and topical authority development are the primary leverage points.',

    seoChallenges: [
      {
        title: 'Domain Authority Gap',
        description: 'Established gaming platforms have years of accumulated backlinks from gaming publications, review sites, and editorial sources. New entrants cannot buy their way into authority — it must be built systematically through editorial relevance.',
      },
      {
        title: 'Content at Scale',
        description: 'Gaming platforms typically need content across hundreds of game titles, providers, and variant types. Thin or templated content at scale risks algorithmic suppression. Each page must deliver genuine informational value.',
      },
      {
        title: 'Dynamic Content Indexation',
        description: 'Real-time game availability, RTP data, and provider information change frequently. Ensuring that crawlers correctly index current data — and not cached or JavaScript-rendered versions — requires careful technical architecture.',
      },
      {
        title: 'Brand Search Dilution',
        description: 'Gaming brands competing with review sites that rank for their own brand name. Controlling brand SERP requires both SEO and structured data to establish brand authority signals.',
      },
      {
        title: 'Advertising Restrictions',
        description: 'Paid search and social options are restricted in most gaming categories without platform certification. Organic SEO is frequently the primary or only scalable acquisition channel, making it structurally more important than in less restricted industries.',
      },
    ],

    technicalRequirements: [
      'JavaScript rendering compatibility for dynamic game catalogues',
      'Efficient crawl budget management for large page inventories',
      'Structured data for game schema, review schema, and organization',
      'Core Web Vitals optimised for game-heavy pages with rich media',
      'Hreflang implementation for multi-market operators',
      'Internal link architecture that distributes authority to commercial pages',
    ],

    contentConsiderations: [
      'Game guides and rule content must be factually accurate and specific',
      'RTP and game statistics must be current and sourced',
      'Content must meet editorial standards for YMYL categories',
      'Comparison content must be genuinely useful, not keyword-stuffed',
      'Where regulated: responsible gaming content must be appropriately prominent',
    ],

    complianceConsiderations: [
      'Advertising content must comply with applicable gaming regulations in each target market',
      'Age verification messaging required where mandated',
      'Responsible gaming links and resources required in licensed markets',
      'Claims about odds, returns, or outcomes must be factually accurate and appropriately disclaimed',
      'Content must be geofenced appropriately for jurisdictional restrictions',
    ],

    conversionConsiderations: [
      'Registration flow friction is the primary conversion bottleneck in gaming',
      'Mobile experience quality directly impacts acquisition in gaming verticals',
      'Game demonstration (free play) pages reduce top-of-funnel friction significantly',
      'Trust signals (licence information, security) must be prominent in conversion funnel',
    ],

    recommendedServices: ['seo', 'technical-seo', 'programmatic-seo', 'content-strategy', 'conversion-optimization', 'website-development'],

    faqs: [
      { q: 'Can you help a new gaming platform with no existing organic traffic?', a: 'Yes. We work with new gaming operators from the ground up: technical SEO architecture, game page structure, content strategy, and authority development. Timelines for competitive keywords are longer for new domains, and we will scope expectations accordingly.' },
      { q: 'Do you work with real-money gaming platforms?', a: 'Yes, subject to the platform operating legally in its target markets. We require confirmation of relevant licences or regulatory compliance before starting.' },
    ],

    seo: {
      title: 'SEO & Digital Marketing for Online Gaming Platforms — iGaming Growth',
      description: 'Specialist SEO for online gaming platforms. Technical SEO, content strategy, and authority development for the most competitive gaming keyword categories.',
    },
  },

  // ─── Casino ────────────────────────────────────────────────────────
  {
    slug: 'casino',
    name: 'Online Casino',
    shortName: 'Casino',
    category: 'gaming',
    tagline: 'Digital growth strategies for online casinos competing in the most competitive search landscape in digital marketing',
    overview:
      'Online casino is, by most measures, the most competitive keyword category in search. Domain authority requirements for first-page visibility are among the highest of any commercial vertical. Technical quality, content authority, editorial credibility, and link acquisition are not optional — they are the baseline. We work with casino operators that understand this and are committed to building a sustainable organic channel rather than seeking shortcuts that do not exist.',
    competitionCharacteristics:
      'The online casino SERP is dominated by large affiliate comparison sites with dedicated content teams, established operators with years of editorial link history, and comparison portals that outpublish most operators on informational content. Competing requires authority, not just content volume.',

    seoChallenges: [
      {
        title: 'Affiliate Competition',
        description: 'Casino SERPs are often dominated by affiliate and comparison sites with editorial content strategies targeting the same commercial keywords. Casino operators must compete both for direct traffic and for favourable affiliate coverage.',
      },
      {
        title: 'High SERP Authority Thresholds',
        description: 'First-page visibility for primary casino keywords typically requires domain authority metrics in the top tier. This is not achievable quickly and requires sustained, quality-first link acquisition.',
      },
      {
        title: 'Content Regulation Sensitivity',
        description: 'Casino content is YMYL-classified and held to high editorial standards by Google\'s quality raters. Thin, promotional, or inaccurate content is penalised disproportionately.',
      },
      {
        title: 'Player Trust Signals',
        description: 'Casino brands compete on trust as much as on visibility. E-E-A-T signals — editorial oversight, factual accuracy, licence information, responsible gaming content — directly impact both rankings and conversion.',
      },
    ],

    technicalRequirements: [
      'High-performance architecture capable of handling real-time game catalogues',
      'Correct canonical and hreflang for multi-jurisdiction operators',
      'Structured data for casino review schema and organization',
      'Core Web Vitals within recommended thresholds despite rich game previews',
      'Internal link architecture that prioritises top commercial pages',
      'Efficient crawl management to ensure commercial pages are prioritised',
    ],

    contentConsiderations: [
      'E-E-A-T compliance is critical — casino content must demonstrate expertise and factual accuracy',
      'House edge and game statistics must be accurately presented',
      'Bonus terms must be clearly communicated without misleading claims',
      'Responsible gaming content must be genuinely accessible, not buried',
      'Review and comparison content must be objective, not purely promotional',
    ],

    complianceConsiderations: [
      'UKGC, MGA, and other regulatory authorities impose specific requirements on digital marketing content',
      'Bonus advertising standards vary by jurisdiction and must be complied with',
      'Age-gating and responsible gambling messaging requirements in licensed markets',
      'Self-exclusion links required in specific jurisdictions',
    ],

    conversionConsiderations: [
      'Registration and verification flow design is critical to deposit conversion',
      'Payment method trust and variety directly impact deposit conversion rates',
      'Mobile casino experience quality is a primary acquisition differentiator',
      'Welcome bonus clarity and terms transparency reduce post-registration churn',
    ],

    recommendedServices: ['seo', 'technical-seo', 'off-page-seo', 'content-strategy', 'seo-audit', 'conversion-optimization'],

    faqs: [
      { q: 'Do you work with offshore casino operators?', a: 'We work with operators who can demonstrate that their business is operating legally in their target markets. We do not assist businesses in circumventing gambling regulations or marketing into jurisdictions where their operations are prohibited.' },
      { q: 'How competitive are casino keywords really?', a: 'Among the most competitive in all of search. Established affiliate sites with 10+ years of editorial authority and millions of backlinks occupy the top positions for primary keywords. The strategy must account for this reality — targeting achievable keyword clusters first and building toward primary terms over a multi-year horizon.' },
    ],

    seo: {
      title: 'SEO for Online Casinos — iGaming Growth',
      description: 'Specialist digital marketing for online casino operators. Authority development, technical SEO, and content strategy for the most competitive search vertical.',
    },
  },

  // ─── Cricket Gaming ────────────────────────────────────────────────
  {
    slug: 'cricket-gaming',
    name: 'Cricket Gaming & Fantasy Sports',
    shortName: 'Cricket Gaming',
    category: 'gaming-skill',
    tagline: 'Search visibility and digital growth for cricket gaming and fantasy sports platforms in India\'s competitive market',
    overview:
      'Cricket-based gaming — fantasy cricket, prediction markets, and skill-based cricket platforms — represents one of India\'s most rapidly growing digital categories. The market has matured significantly, with well-funded platforms investing heavily in both paid acquisition and organic search. For platforms entering or expanding in this market, a technically sophisticated SEO approach is the difference between visibility and obscurity.',
    competitionCharacteristics:
      'Dominant platforms have invested heavily in content, app store optimisation, and organic search. The cricket gaming category has seasonal traffic patterns aligned to the IPL and international cricket schedule. Strategy must account for seasonal intent spikes and build year-round authority between peak periods.',

    seoChallenges: [
      {
        title: 'Seasonal Traffic Volatility',
        description: 'Cricket gaming search volume peaks dramatically during IPL, World Cup, and bilateral series, then drops significantly. An SEO strategy must both capture seasonal peaks and build sustainable year-round presence during off-season periods.',
      },
      {
        title: 'App Store vs. Web Search Competition',
        description: 'Major fantasy cricket platforms invest heavily in app store optimisation (ASO) while maintaining web presence. Web SEO must target discovery and informational queries that drive app download intent.',
      },
      {
        title: 'Real-Time Content Freshness',
        description: 'Cricket gaming audiences seek current team news, player form data, and match predictions. Content freshness and speed of publication are ranking differentiators for real-time search queries.',
      },
      {
        title: 'Regulatory Landscape',
        description: 'Fantasy sports legal classification varies by Indian state. Digital marketing must be structured to account for geographic restrictions and evolving regulatory positions.',
      },
    ],

    technicalRequirements: [
      'High-performance architecture for real-time match and player data',
      'Structured data for sports event, team, and player schemas',
      'Mobile-first technical implementation (India is predominantly mobile)',
      'Efficient publishing pipeline for time-sensitive match content',
      'AMP or fast-loading article architecture for breaking news queries',
    ],

    contentConsiderations: [
      'Fantasy team selection guides must be match-specific and genuinely useful',
      'Player form and statistics content must be current and accurate',
      'Head-to-head and pitch report content drives informational query capture',
      'Platform guides and how-to content reduce user acquisition friction',
    ],

    complianceConsiderations: [
      'Fantasy sports are classified as games of skill in most Indian states but restricted in others',
      'Marketing must account for state-level restrictions',
      'Prize claims and withdrawal terms must be clearly communicated',
      'TDS (Tax Deducted at Source) disclosure requirements on prizes',
    ],

    conversionConsiderations: [
      'Contest entry friction directly impacts active player conversion',
      'Team creation UX on mobile is the primary conversion experience',
      'First-deposit bonus clarity and simplicity impacts initial deposit conversion',
    ],

    recommendedServices: ['seo', 'technical-seo', 'content-strategy', 'programmatic-seo', 'conversion-optimization', 'analytics'],

    faqs: [
      { q: 'Can you help with both the website and app discovery?', a: 'We specialise in web SEO but can advise on the relationship between web content and app store discovery. For dedicated ASO, we can recommend specialist partners.' },
      { q: 'How do you handle the state-level restrictions on fantasy sports?', a: 'Content and any geographically targeted digital marketing is structured to respect state-level restrictions. We do not create content designed to market fantasy sports into states where it is prohibited.' },
    ],

    seo: {
      title: 'SEO for Cricket Gaming & Fantasy Sports — iGaming Growth',
      description: 'Digital marketing for fantasy cricket and cricket gaming platforms in India. SEO strategy for seasonal traffic, real-time content, and mobile-first audiences.',
    },
  },

  // ─── Color Prediction ────────────────────────────────────────────
  {
    slug: 'color-prediction',
    name: 'Color Prediction Platforms',
    shortName: 'Color Prediction',
    category: 'gaming-skill',
    tagline: 'Digital presence and organic visibility for color prediction gaming platforms',
    overview:
      'Color prediction platforms represent a distinct gaming category operating in a complex regulatory environment. Digital marketing for these platforms requires careful navigation of platform advertising restrictions, compliance-aware content strategy, and a technical SEO approach focused on organic discovery in a category with limited paid advertising options.',
    competitionCharacteristics:
      'Color prediction is a fragmented market with many platforms competing for a concentrated keyword set. Organic SEO is frequently the primary acquisition channel given advertising restrictions. First-mover SEO advantage is significant in this category.',

    seoChallenges: [
      {
        title: 'Paid Advertising Restrictions',
        description: 'Standard advertising platforms restrict or prohibit color prediction platform promotion, making organic SEO the primary acquisition channel for most operators in this category.',
      },
      {
        title: 'Content Sensitivity',
        description: 'Content related to prediction gaming must be factually accurate about the platform\'s mechanics and avoid misleading claims about earnings or outcomes.',
      },
      {
        title: 'Brand Discoverability',
        description: 'Building brand recognition through organic channels requires a consistent content strategy focused on platform guides, user education, and community queries.',
      },
    ],

    technicalRequirements: [
      'Fast-loading, mobile-optimised web presence',
      'Clear site architecture for platform information and onboarding',
      'Schema markup for organization and product',
    ],

    contentConsiderations: [
      'Platform mechanics must be explained accurately without misleading income claims',
      'User guides, withdrawal processes, and platform tutorials serve high-intent queries',
      'Community queries (how to play, platform reviews) are primary organic targets',
    ],

    complianceConsiderations: [
      'Claims about earnings potential must be accurate and appropriately disclaimed',
      'Regulatory status of the platform type should be represented accurately',
      'Terms and conditions for withdrawals and bonuses must be clearly accessible',
    ],

    conversionConsiderations: [
      'Registration simplicity and trust signals are primary conversion factors',
      'First deposit clarity and withdrawal process transparency reduce conversion friction',
    ],

    recommendedServices: ['seo', 'technical-seo', 'content-strategy', 'website-development', 'analytics'],

    faqs: [
      { q: 'Can you run paid ads for color prediction platforms?', a: 'Paid advertising options are significantly restricted for this category across major platforms. Our primary approach is organic SEO and content-driven acquisition. We will advise on paid options where available within platform policies.' },
    ],

    seo: {
      title: 'SEO for Color Prediction Platforms — iGaming Growth',
      description: 'Digital marketing and SEO for color prediction gaming platforms. Organic acquisition strategy for a category where paid advertising options are limited.',
    },
  },

  // ─── Color Trading ────────────────────────────────────────────────
  {
    slug: 'color-trading',
    name: 'Color Trading Platforms',
    shortName: 'Color Trading',
    category: 'finance',
    tagline: 'Digital visibility strategy for color trading platforms in a compliance-conscious market',
    overview:
      'Color trading platforms exist at the intersection of gaming mechanics and financial instrument interfaces. Digital marketing for these platforms requires precise compliance-aware positioning, technical SEO focused on brand and category discovery, and content strategy that accurately represents the platform\'s mechanism without making misleading financial outcome claims.',
    competitionCharacteristics:
      'The color trading category has limited organic competition but also limited established keyword infrastructure. Brand-level SEO and category education content are the primary organic opportunities.',

    seoChallenges: [
      {
        title: 'Category Definition',
        description: 'Color trading is a relatively new category with limited established search vocabulary. Content strategy must both capture existing search patterns and educate users on category terminology.',
      },
      {
        title: 'Financial Content Standards',
        description: 'Any content that touches on financial outcomes is subject to high editorial standards. Claims must be accurate, appropriately disclaimed, and not constitute financial advice.',
      },
      {
        title: 'Platform Trust Signals',
        description: 'User trust is a primary barrier in this category. SEO and content strategy must include trust signal development: transparency about platform mechanics, withdrawal processes, and regulatory status.',
      },
    ],

    technicalRequirements: [
      'High-security technical architecture (HTTPS, clear data handling)',
      'Fast, mobile-optimised user experience',
      'Clear information architecture for platform transparency',
    ],

    contentConsiderations: [
      'Platform mechanics explained accurately with no misleading earnings claims',
      'Risk transparency must be present in all content related to financial outcomes',
      'User education content (how to start, how withdrawals work) serves high-intent queries',
    ],

    complianceConsiderations: [
      'Financial outcome claims must be accurate and disclaimed appropriately',
      'Regulatory status of the platform in target markets must be accurately represented',
      'Any comparison to investment products must be carefully managed to avoid regulated financial advice',
    ],

    conversionConsiderations: [
      'Trust and transparency are primary conversion drivers',
      'Clear registration and withdrawal processes reduce friction',
      'Demo or trial functionality where available significantly reduces acquisition friction',
    ],

    recommendedServices: ['seo', 'technical-seo', 'content-strategy', 'website-development'],

    faqs: [
      { q: 'How do you handle content for a category that involves financial outcomes?', a: 'All content touching on financial outcomes is written with appropriate disclaimers, does not make earnings guarantees, and is accurate in its description of platform mechanics. We will not produce content that constitutes financial advice or makes misleading claims.' },
    ],

    seo: {
      title: 'SEO for Color Trading Platforms — iGaming Growth',
      description: 'Digital marketing and SEO for color trading platforms. Compliance-aware content strategy and organic visibility in a complex, restricted-advertising category.',
    },
  },

  // ─── Stock Market ────────────────────────────────────────────────
  {
    slug: 'stock-market',
    name: 'Stock Market & Financial Platforms',
    shortName: 'Stock Market',
    category: 'finance',
    tagline: 'SEO and digital authority for financial platforms where trust, accuracy and E-E-A-T are the differentiators',
    overview:
      'Financial platforms — trading platforms, investment apps, stock market education sites — operate in YMYL territory where Google\'s quality standards are at their highest. E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness) signals are not optional — they are the primary ranking differentiators in financial search categories. Digital growth in this vertical requires expert-authored content, demonstrable credentials, and technical infrastructure that supports credibility signals.',
    competitionCharacteristics:
      'Financial SERPs are dominated by established publishers (Investopedia, Motley Fool, Forbes Finance), major brokerages, and news sites with decades of editorial authority. New entrants must find differentiated positioning rather than directly competing on primary informational keywords.',

    seoChallenges: [
      {
        title: 'E-E-A-T Requirements',
        description: 'Google\'s YMYL quality rater guidelines hold financial content to high editorial standards. Author credentials, fact-checking processes, editorial policies, and citation practices are all evaluated. Thin or anonymous financial content faces significant ranking suppression.',
      },
      {
        title: 'Competing with Editorial Giants',
        description: 'Primary financial keywords are held by editorial publishers with decades of authority. Strategy must identify the specific intent gaps these publishers do not serve — platform-specific guides, tool comparisons, local market content.',
      },
      {
        title: 'Regulated Content Claims',
        description: 'Financial content that could constitute investment advice faces regulatory scrutiny in addition to algorithmic scrutiny. Content must be factually accurate and appropriately disclaimed.',
      },
      {
        title: 'Trust Architecture',
        description: 'User trust signals — regulatory information, security certifications, company transparency — must be present and prominent throughout the site, not just on an about page.',
      },
    ],

    technicalRequirements: [
      'High-performance, security-credible technical architecture',
      'Author bio and credentials structured data',
      'Fact-checking and editorial policy pages',
      'Schema for financial data (price, instrument, article)',
      'Site speed and Core Web Vitals compliant for data-heavy pages',
    ],

    contentConsiderations: [
      'All content must be accurate, current, and written by or reviewed by subject matter experts',
      'Investment claims and performance data must be disclaimed appropriately',
      'Educational content must distinguish clearly from financial advice',
      'Author credentials must be accurate and verifiable',
      'Content must be updated when market conditions change materially',
    ],

    complianceConsiderations: [
      'Content should not constitute regulated financial advice without appropriate authorisation',
      'Performance data and return claims must be accurately disclaimed',
      'Regulatory registration/authorisation status must be accurately represented',
      'SEBI, FCA, or other applicable regulatory disclosures where required',
    ],

    conversionConsiderations: [
      'Trust is the primary conversion barrier in financial platform acquisition',
      'Regulatory and security credentials must be prominent in conversion paths',
      'Account opening simplicity is a significant differentiator in the category',
    ],

    recommendedServices: ['seo', 'content-strategy', 'technical-seo', 'on-page-seo', 'off-page-seo', 'analytics'],

    faqs: [
      { q: 'Can your agency produce regulated financial content?', a: 'We produce educational and informational financial content. We do not produce content that constitutes regulated investment advice. Any content in this category includes appropriate disclaimers and is written or reviewed by subject matter experts.' },
      { q: 'How do you build E-E-A-T for a new financial platform?', a: 'E-E-A-T is built through consistent editorial quality: identified expert authors with verifiable credentials, an accessible editorial policy, an accurate and transparent about page, fact-checking processes, and content that is updated as conditions change. This is a sustained programme, not a one-time fix.' },
    ],

    seo: {
      title: 'SEO for Stock Market & Financial Platforms — iGaming Growth',
      description: 'Specialist SEO for financial trading platforms and investment sites. E-E-A-T-optimised content strategy, technical authority signals, and organic growth in YMYL financial categories.',
    },
  },

  // ─── Lotus365 & Betting Exchanges ────────────────────────────
  {
    slug: 'betting-exchange',
    name: 'Lotus365 & Betting Exchanges',
    shortName: 'Betting Exchange',
    category: 'gaming',
    tagline: 'Turnkey engineering and Rank-1 SEO for betting exchanges, Lotus365-style platforms, and Cricket ID portals',
    overview:
      'Betting exchanges and Lotus365-style platforms require high-frequency odds updates, peer-to-peer liquidity management, instant Cricket ID generation, and multi-tier agent balance systems. We provide full-stack platform engineering, WhatsApp/Telegram deposit automation, and aggressive organic search dominance for volatile high-intent betting queries.',
    competitionCharacteristics:
      'Extreme search volume surges during ICC tournaments, IPL seasons, and bilateral cricket series. Legacy bookmakers rely on brand recall, while agile exchange operators capture massive search volume through real-time match landing pages, programmatic keyword clustering, and 1-tap WhatsApp onboarding.',

    seoChallenges: [
      {
        title: 'Real-Time Match Odds & Fixture Volatility',
        description: 'Cricket exchange queries surge and disappear within 48-hour windows around live matches. Standard static sitemaps fail to index time-sensitive match pages in time without instant Google indexation webhooks.',
      },
      {
        title: 'High-Intent "Cricket ID" & "Online Betting ID" SERP Competition',
        description: 'Queries like "Lotus365 ID", "Cricket ID online", and "best betting exchange" face intense organic competition. Dominance requires rigorous entity schema, high-authority backlink networks, and programmatic clustering.',
      },
      {
        title: 'Telegram & WhatsApp Conversion Friction',
        description: 'Exchange players expect instant 1-tap WhatsApp ID generation and UPI/QR deposit routing rather than traditional lengthy KYC registration forms.',
      },
      {
        title: 'Anti-DDoS & Edge Match Traffic Spikes',
        description: 'Traffic spikes 100x during live ball-by-ball cricket matches. Platform architecture must deliver sub-650ms response times under extreme concurrent load.',
      },
      {
        title: 'Strict Ad Policy Restrictions on Paid Channels',
        description: 'Google and Meta strictly restrict gambling ads. Operators need whitelisted agency ad accounts and compliant pre-lander funnels with zero account bans.',
      },
    ],

    technicalRequirements: [
      'Headless React 18 + PWA edge architecture with sub-650ms LCP',
      'WebSocket live score and back/lay odds streaming infrastructure',
      'Automated WhatsApp and Telegram instant ID issuance webhooks',
      'Super-admin, master agent, and player balance ledger hierarchy',
      'Cloudflare Enterprise WAF shielding against competitor Layer-7 DDoS attacks',
    ],

    contentConsiderations: [
      'Real-time automated cricket match fixture previews with structured schema',
      'Responsible gaming disclaimers and jurisdictional compliance notices',
      'Step-by-step interactive visual guides for depositing, betting, and instant withdrawals',
      'Transparent rulebooks for back, lay, and exchange commission calculations',
    ],

    complianceConsiderations: [
      'State-level gaming compliance notices and self-exclusion controls',
      'Cryptographic SSL shielding and secure automated UPI payment routing',
      'Player data protection and zero-log Telegram/WhatsApp session security',
      'Transparent ledger reconciliation for master agents and sub-agents',
    ],

    conversionConsiderations: [
      'Instant 1-tap WhatsApp Cricket ID creation directly from mobile landing pages',
      'Live dynamic odds widgets displaying real-time liquidity and match status',
      'Automated deposit confirmation and fast payout verification badges',
    ],

    recommendedServices: ['website-development', 'seo', 'technical-seo', 'google-ads', 'meta-ads', 'conversion-optimization'],

    faqs: [
      { q: 'Can you build a custom Lotus365-style betting exchange platform?', a: 'Yes. We engineer turnkey betting exchange platforms with real-time odds feeds, custom UI/UX, multi-tier agent and super-admin balance panels, and automated WhatsApp/Telegram ID provisioning.' },
      { q: 'How do you rank for "Cricket ID" and betting exchange keywords?', a: 'We deploy programmatic event-driven landing pages, entity schema graphs, dynamic indexation webhooks, and contextual high-authority backlinks tailored for high-volatility sports betting SERPs.' },
    ],

    seo: {
      title: 'Lotus365 & Betting Exchange Platform Engineering & SEO — iGaming Growth',
      description: 'Turnkey development and Rank-1 SEO for Lotus365-style betting exchanges, cricket ID platforms, and live bookmaker sites with zero-ban ad whitelisting.',
    },
  },

  // ─── Yono / Real-Money Skill Games ────────────────────────────
  {
    slug: 'yono',
    name: 'Yono & Real-Money Skill Games',
    shortName: 'Skill Games',
    category: 'gaming-skill',
    tagline: 'Digital growth for real-money skill gaming platforms navigating India\'s complex legal landscape',
    overview:
      'The Yono and real-money skill gaming category encompasses a range of platforms offering cash-prize competitions in skill-based games — rummy, poker, and others — that have specific legal status in India under the "games of skill" classification. Digital marketing in this category requires both SEO expertise and compliance-awareness about the evolving state-level regulatory environment.',
    competitionCharacteristics:
      'Dominant platforms like Dream11, MPL, and similar operators have invested substantially in both organic presence and paid brand advertising. Newer entrants and challenger platforms must compete in the content and long-tail keyword layer to build awareness and establish search presence before directly competing on primary brand terms.',

    seoChallenges: [
      {
        title: 'State-Level Legal Complexity',
        description: 'Real-money gaming has different legal status in different Indian states. Marketing and content must be structured to reflect these differences, avoiding promotion into states where the platform\'s operation is restricted.',
      },
      {
        title: 'App-First Category Dynamics',
        description: 'Real-money skill gaming is predominantly app-based. Web SEO must target discovery and informational queries that drive app download intent rather than direct web conversion.',
      },
      {
        title: 'GST and Regulatory Changes',
        description: 'The regulatory and tax environment for real-money gaming in India has changed significantly. Content must be maintained to reflect current legal positions accurately.',
      },
      {
        title: 'Trust and Legitimacy Signals',
        description: 'Player trust — particularly around withdrawals, payment security, and fair game mechanics — is a primary acquisition barrier that content and technical trust signals must address.',
      },
    ],

    technicalRequirements: [
      'Mobile-first technical implementation (Indian market is mobile-dominated)',
      'Fast page loads for a mobile-heavy user base on variable connection speeds',
      'Structured data for gaming application and review schemas',
      'Efficient content publishing for match-specific and time-sensitive content',
    ],

    contentConsiderations: [
      'Game rule guides, strategy content, and platform comparisons serve informational intent',
      'Legal status of the platform type must be accurately represented',
      'Withdrawal process transparency and payment security content builds trust',
      'TDS (Tax Deducted at Source) information is a high-search-intent query category',
    ],

    complianceConsiderations: [
      'Skill game classification must be accurately represented — no false equivalence with games of chance',
      'State-level restrictions must be reflected in marketing geography',
      'GST implications for players must be accurately communicated',
      'Responsible gaming content appropriate to the platform type',
    ],

    conversionConsiderations: [
      'First deposit bonus clarity and simplicity directly impacts conversion',
      'Referral and bonus structure content drives word-of-mouth acquisition',
      'KYC process simplicity reduces new user drop-off',
    ],

    recommendedServices: ['seo', 'technical-seo', 'content-strategy', 'analytics', 'conversion-optimization'],

    faqs: [
      { q: 'Can you help with both app discovery and web SEO?', a: 'Our expertise is in web SEO. However, we structure web content to drive app download intent and can advise on the relationship between web authority and app store signals. For dedicated ASO, we can recommend specialists.' },
      { q: 'How do you handle the state-level restrictions?', a: 'Any geographic targeting in digital marketing is structured to respect state-level restrictions. We do not produce marketing materials designed to target users in states where the platform\'s operation is legally restricted.' },
    ],

    seo: {
      title: 'SEO for Yono & Real-Money Skill Gaming Platforms — iGaming Growth',
      description: 'Digital growth for real-money skill gaming platforms in India. SEO strategy for a complex regulatory environment with state-level restrictions and app-first user behaviour.',
    },
  },
];

// ─── Accessors ────────────────────────────────────────────────────────────────

export const getIndustryBySlug = (slug: string): IndustryVertical | undefined =>
  industriesData.find((i) => i.slug === slug);

export const getAllIndustries = (): readonly IndustryVertical[] => [...industriesData];

export const getIndustriesByCategory = (cat: IndustryVertical['category']): readonly IndustryVertical[] =>
  industriesData.filter((i) => i.category === cat);

export const INDUSTRY_CATEGORY_LABELS: Record<IndustryVertical['category'], string> = {
  gaming: 'Online Gaming',
  finance: 'Financial Platforms',
  adult: 'Adult Industry',
  'gaming-skill': 'Skill Games',
};
