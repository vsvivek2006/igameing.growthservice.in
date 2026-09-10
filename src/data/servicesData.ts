/**
 * iGaming Growth — Agency Services Data Architecture
 * 12 specialist services for high-competition industries.
 * All content is editable from this single file.
 */

export type ServiceCategory =
  | 'seo'
  | 'web-development'
  | 'paid-acquisition'
  | 'conversion-analytics';

export type ServiceColor =
  | 'purple'
  | 'violet'
  | 'blue'
  | 'indigo'
  | 'cyan'
  | 'green'
  | 'emerald'
  | 'amber'
  | 'orange'
  | 'rose';

export interface FAQItem {
  q: string;
  a: string;
}

export interface ServiceOffering {
  readonly slug: string;
  readonly name: string;
  readonly shortName: string;
  readonly heroHeadline?: string;
  readonly heroSublead?: string;
  readonly tagline: string;
  readonly shortDescription: string;
  readonly longDescription: string;
  readonly category: ServiceCategory;
  readonly icon: string;
  readonly color: ServiceColor;
  readonly featured: boolean;
  readonly parentSlug?: string; // for sub-services

  // Content blocks
  readonly problemStatement: string;
  readonly approach: string;
  readonly benefits: readonly string[];
  readonly features: readonly string[];
  readonly deliverables: readonly string[];
  readonly process: readonly { step: number; title: string; description: string }[];
  readonly idealFor: readonly string[];
  readonly notFor: readonly string[];
  readonly faqs: readonly FAQItem[];

  // SEO
  readonly seo: {
    readonly title: string;
    readonly description: string;
  };
}

export const servicesData: readonly ServiceOffering[] = [
  // ─── SEO (Parent) ────────────────────────────────────────────────────
  {
    slug: 'seo',
    name: 'SEO for High-Competition Industries',
    shortName: 'SEO',
    heroHeadline: 'Search Architecture Engineered for High-Competition Markets',
    heroSublead: 'We design resilient organic growth systems for verticals where competitors have massive domain authority, strict regulations apply, and standard agency playbooks fail.',
    tagline: 'Organic visibility built for the markets that fight hardest for it',
    shortDescription:
      'End-to-end search engine optimisation for businesses operating in competitive, regulated, or restricted-advertising industries.',
    longDescription:
      'High-competition industries — gaming, finance, adult, and adjacent verticals — are among the most technically demanding niches in search. Standard SEO frameworks break down when your competitors have multi-million-dollar authority profiles, your keyword categories face policy restrictions, and a single algorithm update can materially impact revenue. We build SEO systems designed for these conditions: technically sound, content-authentic, and resistant to the volatility that punishes weaker foundations.',
    category: 'seo',
    icon: 'TrendingUp',
    color: 'purple',
    featured: true,
    problemStatement:
      'Most SEO approaches assume a relatively level playing field. High-competition industries do not have one. Your competitors may have years of domain history, thousands of editorial backlinks, and content teams producing at scale. Off-the-shelf SEO packages produce off-the-shelf results — which means none in these markets.',
    approach:
      'We start with competitive intelligence: mapping the actual gap between where you are and where your target keywords sit. From that analysis we build a phased programme covering technical infrastructure, on-page architecture, content strategy, and authority development — sequenced in order of leverage, not convenience.',
    benefits: [
      'Organic visibility in competitive SERPs without paid-channel dependency',
      'Technically sound foundations that compound over time',
      'Content that meets search intent and editorial quality standards',
      'Authority built through legitimate, sustainable link development',
      'Reduced customer acquisition cost via organic channels',
      'Visibility in markets where paid advertising is restricted or expensive',
    ],
    features: [
      'Full technical SEO audit and implementation',
      'Keyword architecture and topical authority mapping',
      'On-page optimisation across all commercial and informational pages',
      'Content strategy aligned to search intent',
      'Off-page authority development',
      'Programmatic SEO where content volume creates genuine value',
      'Schema markup and structured data implementation',
      'Core Web Vitals and page experience optimisation',
      'Monthly reporting with attribution to organic channel',
    ],
    deliverables: [
      'Comprehensive 5-pillar SEO diagnostic & competitor gap analysis',
      'Prioritised technical remediation roadmap & engineer-ready specs',
      'Semantic keyword architecture & topical authority clustering map',
      'On-page optimisation briefs for core commercial & informational URLs',
      'Vetted white-hat editorial authority acquisition schedule',
      'Custom Looker Studio attribution dashboard with organic conversion tracking',
    ],
    process: [
      { step: 1, title: 'Discovery & Audit', description: 'Deep technical audit, competitor gap analysis, and keyword architecture mapping.' },
      { step: 2, title: 'Strategy', description: 'Phased SEO roadmap prioritised by leverage, timeline, and risk profile.' },
      { step: 3, title: 'Technical Foundations', description: 'Site architecture, crawlability, Core Web Vitals, schema, and indexation fixes.' },
      { step: 4, title: 'Content & On-Page', description: 'Page-level optimisation and content production aligned to search intent.' },
      { step: 5, title: 'Authority Development', description: 'Off-page signals through editorial link development in your vertical.' },
      { step: 6, title: 'Iteration', description: 'Monthly reporting, ranking review, and strategy refinement based on performance data.' },
    ],
    idealFor: [
      'Gaming and iGaming operators',
      'Financial service providers (fintech, trading, investment platforms)',
      'Adult industry businesses seeking organic visibility',
      'Businesses whose paid advertising options are restricted',
      'Brands competing in top 5 most competitive verticals',
    ],
    notFor: [
      'Businesses seeking guaranteed ranking positions',
      'Brands wanting results within 30 days with no prior foundation',
      'Projects without a legitimate website and business model',
    ],
    faqs: [
      { q: 'How long before we see SEO results?', a: 'Meaningful organic growth in competitive industries typically begins to register between months 4–8 depending on the domain\'s starting authority, the competitiveness of target keywords, and technical remediation speed. Faster results are possible for lower-competition keyword clusters.' },
      { q: 'Do you guarantee rankings?', a: 'No agency can guarantee specific rankings — search engines, not agencies, determine positions. We can demonstrate a consistent process, measurable output, and transparent attribution. Agencies that guarantee rankings are making promises they cannot control.' },
      { q: 'Will this work for a brand-new domain?', a: 'Yes, though timelines are longer. New domains require foundational authority building before competitive keywords become realistic. We will scope accordingly and target achievable milestones first.' },
    ],
    seo: {
      title: 'SEO for High-Competition Industries — iGaming Growth',
      description: 'Specialist SEO services for gaming, financial, and high-competition industries. Technical SEO, content strategy, and authority development that compounds over time.',
    },
  },

  // ─── Technical SEO ────────────────────────────────────────────────
  {
    slug: 'technical-seo',
    name: 'Technical SEO',
    shortName: 'Technical SEO',
    heroHeadline: 'Fix the Technical Foundations Holding Search Performance Back',
    heroSublead: 'We audit crawl paths, canonicalization, indexation, Core Web Vitals, and internal-link architecture to eliminate silent ranking bottlenecks before you scale content.',
    tagline: 'Search infrastructure engineered to crawl, index, and rank at scale',
    shortDescription:
      'Deep technical optimisation: site architecture, crawlability, Core Web Vitals, schema, and indexation — the foundations every SEO programme depends on.',
    longDescription:
      'Technical SEO is the infrastructure layer that determines whether every other SEO effort compounds or leaks. A content strategy built on a site with crawl traps, poor Core Web Vitals, incorrect canonical implementation, or broken structured data will underperform regardless of content quality. Technical SEO delivers the foundations that allow everything else to work.',
    category: 'seo',
    icon: 'Settings',
    color: 'violet',
    featured: true,
    parentSlug: 'seo',
    problemStatement:
      'Many websites invest in content and links while technical issues silently suppress the ROI of every other activity. Crawl budget waste, duplicate content, slow page speeds, and incorrect canonicalization are common in high-volume or dynamically generated sites — exactly the type common in gaming, fintech, and high-volume industries.',
    approach:
      'We conduct a systematic technical audit covering all major signal categories: crawlability, indexation, page experience, structured data, international configuration, and site architecture. Issues are prioritised by estimated ranking impact, not severity scoring, so the highest-leverage fixes are addressed first.',
    benefits: [
      'Efficient crawler budget allocation, especially for large or dynamic sites',
      'Correct indexation of target pages, exclusion of non-target pages',
      'Core Web Vitals within Google\'s recommended thresholds',
      'Schema markup that generates rich results in SERPs',
      'Elimination of duplicate content and canonicalization issues',
      'Technical foundation that allows content investment to compound',
    ],
    features: [
      'Full crawl analysis using enterprise crawl tooling',
      'Core Web Vitals audit and implementation guidance',
      'Canonical, hreflang, and indexation review',
      'Site architecture and internal linking analysis',
      'Schema markup implementation (Organization, Service, FAQ, BreadcrumbList)',
      'Page speed and rendering performance review',
      'Log file analysis for large sites',
      'JavaScript SEO for dynamic/SPA architectures',
      'XML sitemap and robots.txt optimisation',
    ],
    deliverables: [
      'Comprehensive technical audit (prioritised by commercial ranking impact)',
      'Raw crawl & server log file diagnostic report',
      'Indexation control & canonicalization architecture matrix',
      'Core Web Vitals & critical rendering path optimization specifications',
      'Structured data implementation code (JSON-LD Organization, Service, FAQ, Breadcrumbs)',
      'Developer implementation pull-request briefs & staging verification checks',
      'Automated technical regression monitoring & alert framework',
    ],
    process: [
      { step: 1, title: 'Crawl & Audit', description: 'Full-site crawl, log file analysis where available, and Core Web Vitals measurement.' },
      { step: 2, title: 'Prioritisation', description: 'Issues ranked by estimated ranking impact and implementation effort.' },
      { step: 3, title: 'Implementation Brief', description: 'Developer-ready specification for all technical fixes.' },
      { step: 4, title: 'Implementation Support', description: 'Technical review of implemented fixes and re-validation.' },
      { step: 5, title: 'Monitoring', description: 'Ongoing crawl monitoring, Core Web Vitals tracking, and indexation health checks.' },
    ],
    idealFor: [
      'Sites with large page counts (10,000+ pages)',
      'JavaScript-heavy or SPA architectures',
      'Sites that have not had a technical audit in 12+ months',
      'Recently migrated or restructured websites',
      'Dynamic or database-driven sites with canonicalization risk',
    ],
    notFor: [
      'Businesses expecting technical SEO alone to drive rankings without content or authority',
      'Sites with fewer than 20 pages and no technical complexity',
    ],
    faqs: [
      { q: 'How is technical SEO different from regular SEO?', a: 'Technical SEO focuses on the infrastructure layer: how search engines access, render, and index your site. It is distinct from content strategy (on-page) and link acquisition (off-page), though all three are interdependent.' },
      { q: 'Can you implement the fixes, or do we need a developer?', a: 'We provide detailed developer-ready implementation briefs. For clients without development resource, we can implement directly in most CMS environments or coordinate with your development team.' },
    ],
    seo: {
      title: 'Technical SEO Services — iGaming Growth',
      description: 'Technical SEO for high-competition and high-volume websites. Crawlability, Core Web Vitals, schema markup, and indexation architecture that compounds ROI across every other SEO activity.',
    },
  },

  // ─── On-Page SEO ────────────────────────────────────────────────
  {
    slug: 'on-page-seo',
    name: 'On-Page SEO',
    shortName: 'On-Page SEO',
    heroHeadline: 'Align Page-Level Signals with Real Search Intent',
    heroSublead: 'We engineer semantic hierarchy, topical coverage, E-E-A-T trust signals, and internal linking to turn indexable URLs into ranking assets.',
    tagline: 'Page-level signals that communicate relevance to search engines and value to users',
    shortDescription:
      'Systematic on-page optimisation: title tags, heading structure, content depth, keyword coverage, E-E-A-T signals, and UX for search intent.',
    longDescription:
      'On-page SEO is the discipline of ensuring that each page on your site communicates its topic, relevance, and authority to both search engines and users. In competitive industries, on-page quality is a baseline requirement — not a differentiator. The real lever is understanding search intent at a granular level and structuring content that satisfies it more completely than competitors.',
    category: 'seo',
    icon: 'FileText',
    color: 'blue',
    featured: false,
    parentSlug: 'seo',
    problemStatement:
      'Many pages in high-competition industries fail to rank not because of backlink deficits, but because their on-page signals are misaligned with search intent. Thin content, keyword cannibalization, weak heading architecture, and poor E-E-A-T signals are correctable without external link-building.',
    approach:
      'We audit each target page against its intended keyword cluster, map the search intent landscape, and implement a structured optimisation programme covering metadata, heading architecture, content depth, internal linking, and UX signals. For regulated industries, we ensure all claims are defensible and compliant with relevant editorial standards.',
    benefits: [
      'Improved relevance signals for target keyword clusters',
      'Elimination of keyword cannibalization across page sets',
      'Content structured to satisfy search intent more completely',
      'Stronger E-E-A-T signals for YMYL content categories',
      'Internal linking improvements that distribute authority efficiently',
    ],
    features: [
      'Page-level keyword intent mapping',
      'Title tag and meta description optimisation',
      'Heading (H1–H4) architecture',
      'Content depth and coverage gap analysis',
      'E-E-A-T signal optimisation (author, citation, expertise)',
      'Internal link architecture improvements',
      'Image alt text and media optimisation',
      'Featured snippet and rich result targeting',
    ],
    deliverables: [
      'Page-by-page intent mapping & keyword cannibalization remediation',
      'Title, meta description, and H1–H4 semantic hierarchy blueprints',
      'Content depth gap analysis & editorial rewrite recommendations',
      'E-E-A-T signal integration (expert authorship, verified citations, disclaimers)',
      'Contextual internal linking graph & anchor text optimization map',
      'Search snippet & rich SERP feature targeting specifications',
    ],
    process: [
      { step: 1, title: 'Intent Mapping', description: 'Keyword cluster assignment and search intent classification for each target page.' },
      { step: 2, title: 'Competitor Analysis', description: 'Review of pages ranking in target positions for content patterns and coverage depth.' },
      { step: 3, title: 'Optimisation', description: 'Page-level edits: metadata, headings, content structure, internal links.' },
      { step: 4, title: 'Review & Publish', description: 'QA review and staged publication.' },
      { step: 5, title: 'Performance Monitoring', description: 'Ranking and click-through tracking post-optimisation.' },
    ],
    idealFor: [
      'Sites with existing traffic that is underperforming against ranking potential',
      'Websites transitioning to a new keyword strategy',
      'Businesses with content that has not been reviewed since publication',
    ],
    notFor: ['Sites that have not yet done technical SEO foundation work'],
    faqs: [
      { q: 'Do you rewrite existing content or work with what we have?', a: 'Both. For pages with strong foundational content we edit and restructure. For pages that are materially thin we recommend rewrites. Scope is agreed upfront based on audit findings.' },
    ],
    seo: {
      title: 'On-Page SEO Services — iGaming Growth',
      description: 'On-page SEO for high-competition industries. Intent mapping, content depth, E-E-A-T signals, and metadata optimisation that improves ranking relevance at the page level.',
    },
  },

  // ─── Off-Page SEO ────────────────────────────────────────────────
  {
    slug: 'off-page-seo',
    name: 'Off-Page SEO & Link Development',
    shortName: 'Off-Page SEO',
    heroHeadline: 'Build Category Authority Through Editorial and Digital PR',
    heroSublead: 'We execute strict white-hat relationship development and contextual placements that survive algorithmic shifts and protect domain reputation.',
    tagline: 'Authority built through editorial relevance, not volume',
    shortDescription:
      'Strategic link development for competitive verticals: editorial placements, digital PR, and authority signals that meaningfully move ranking positions.',
    longDescription:
      'Domain authority remains one of the most significant ranking factors in competitive search markets. Building that authority through low-quality, high-volume link schemes is both ineffective in 2024 and carries significant penalty risk. The industries we serve — gaming, finance, adult — are under particular scrutiny from Google\'s quality systems. We build authority through legitimate editorial relationships, topical relevance, and consistent quality — the only approach that compounds rather than decays.',
    category: 'seo',
    icon: 'Link',
    color: 'indigo',
    featured: false,
    parentSlug: 'seo',
    problemStatement:
      'High-competition verticals have high domain authority baselines. Outranking established competitors without a commensurate authority profile is possible only for low-competition keyword clusters. Serious rankings in competitive categories require a sustained, quality-first link development programme.',
    approach:
      'We identify link acquisition opportunities by reverse-engineering competitor authority profiles, then build a prospecting and outreach system that targets editorially relevant placements. We avoid PBNs, link networks, and manipulative schemes. All placements are documented, monitored, and reported.',
    benefits: [
      'Increased domain authority from topically relevant editorial sources',
      'Reduced risk profile compared to link schemes',
      'Improved competitive standing in target keyword categories',
      'Links that drive referral traffic in addition to SEO signals',
    ],
    features: [
      'Competitor backlink gap analysis',
      'Link prospecting in vertical-specific publications',
      'Editorial outreach and placement management',
      'Digital PR for topical authority',
      'Toxic link identification and disavow management',
      'Monthly link acquisition reporting',
    ],
    deliverables: [
      'Competitor backlink gap analysis & link velocity assessment',
      'Industry-specific editorial prospecting and placement pipeline',
      'Digital PR angles and topical linkable asset concepts',
      'Toxic link audit, risk scoring, and disavow maintenance',
      'Monthly editorial placement transparency logs (DR, traffic, anchor, destination)',
      'Long-term domain authority resilience monitoring',
    ],
    process: [
      { step: 1, title: 'Authority Audit', description: 'Current profile analysis and competitor gap identification.' },
      { step: 2, title: 'Prospect Research', description: 'Topically relevant link targets in your vertical.' },
      { step: 3, title: 'Outreach', description: 'Editorial outreach and placement negotiation.' },
      { step: 4, title: 'Acquisition', description: 'Confirmed placements with tracking.' },
      { step: 5, title: 'Monitoring', description: 'Monthly link health monitoring and reporting.' },
    ],
    idealFor: [
      'Websites that have strong technical and on-page foundations but insufficient authority',
      'Brands that need to compete in top 3 SERP positions',
      'Sites recovering from Google penalties requiring clean authority rebuilding',
    ],
    notFor: [
      'Businesses requesting PBNs, link exchanges, or manipulative link schemes',
      'Sites without a clean technical foundation to build on',
    ],
    faqs: [
      { q: 'Do you use private blog networks (PBNs)?', a: 'No. PBNs carry material penalty risk and produce authority signals that search engines are increasingly adept at discounting. We build only through legitimate editorial channels.' },
    ],
    seo: {
      title: 'Off-Page SEO & Link Development — iGaming Growth',
      description: 'Editorial link development for high-competition industries. Legitimate authority building through topically relevant placements that compound over time.',
    },
  },

  // ─── Programmatic SEO ────────────────────────────────────────────
  {
    slug: 'programmatic-seo',
    name: 'Programmatic SEO',
    shortName: 'Programmatic SEO',
    heroHeadline: 'Scale Structured Search Assets Without Thin-Content Penalties',
    heroSublead: 'We architect database-driven page templates and strict quality guardrails to capture high-intent long-tail queries while honoring Helpful Content standards.',
    tagline: 'Scalable content architecture for high-volume, high-intent keyword capture',
    shortDescription:
      'Systematic generation of SEO pages at scale where each page delivers genuine informational value — not thin duplication.',
    longDescription:
      'Programmatic SEO is the practice of generating large volumes of SEO-targeted pages from structured data. Done well, it allows a brand to capture thousands of long-tail keywords at a fraction of the cost of manual content production. Done poorly, it generates thin duplicate content that results in algorithmic suppression. We build programmatic systems that meet Google\'s Helpful Content standards: each generated page must answer a genuine user question with specific, non-duplicated information.',
    category: 'seo',
    icon: 'Database',
    color: 'cyan',
    featured: false,
    parentSlug: 'seo',
    problemStatement:
      'High-volume industries — gaming platforms, financial comparison sites, location-based services — have keyword universes that cannot be addressed through manual content production alone. Programmatic SEO is the practical solution, but the line between a content system that ranks and a content farm that gets penalized is architectural and editorial discipline.',
    approach:
      'We design the data model first: what unique information will each page contain, how will it differ from adjacent pages, and what user intent does it serve. Only when the unique-value question is answered do we build the template and generation pipeline. For gaming clients this might be per-platform game pages; for financial clients it might be per-instrument analysis pages.',
    benefits: [
      'Capture of long-tail keyword clusters at scale',
      'Significant organic traffic growth from keyword sets impossible to target manually',
      'Each page serves a genuine user query with specific content',
      'Scalable to millions of pages with the right architecture',
    ],
    features: [
      'Data model design for page uniqueness',
      'Template architecture and CMS/headless integration',
      'Content schema design (unique fields per page)',
      'Generation pipeline build or consulting',
      'Indexation management for large page sets',
      'Quality control framework',
    ],
    deliverables: [
      'Long-tail keyword ontology & intent categorization blueprint',
      'Entity-rich structured data model & unique field schema specifications',
      'Responsive, component-driven page template layouts (zero boilerplate duplication)',
      'Automated crawl-budget control & XML indexation phasing architecture',
      'Pre-render staging quality checks & programmatic cannibalization audits',
    ],
    process: [
      { step: 1, title: 'Keyword Universe Mapping', description: 'Define the full long-tail keyword space and group by intent pattern.' },
      { step: 2, title: 'Data Model Design', description: 'Determine what unique information each page will contain.' },
      { step: 3, title: 'Template Architecture', description: 'Build responsive, SEO-optimised page templates.' },
      { step: 4, title: 'Pipeline Build', description: 'Connect data source to template generation.' },
      { step: 5, title: 'Launch & Index Management', description: 'Staged launch with crawl budget management.' },
    ],
    idealFor: [
      'Gaming platforms with large game or provider catalogues',
      'Comparison sites with structured product/service data',
      'Financial data platforms with instrument-level content needs',
      'Location-based businesses with genuine per-location differentiation',
    ],
    notFor: [
      'Businesses who want to generate thin city-swap pages without unique content',
      'Sites that do not have a structured data source to draw from',
    ],
    faqs: [
      { q: 'Won\'t Google penalize programmatic SEO?', a: 'Google penalizes scaled content that is thin, duplicative, or fails to serve search intent. Programmatic SEO built on unique data with genuine per-page value is consistent with Helpful Content guidelines. The architecture and editorial discipline determine compliance.' },
    ],
    seo: {
      title: 'Programmatic SEO Services — iGaming Growth',
      description: 'Programmatic SEO architecture for high-volume content strategies. Data-driven page generation that captures long-tail keyword clusters at scale while meeting Google\'s Helpful Content standards.',
    },
  },

  // ─── Content Strategy ────────────────────────────────────────────
  {
    slug: 'content-strategy',
    name: 'Content Strategy',
    shortName: 'Content',
    heroHeadline: 'Topical Authority Frameworks Built on Deep Search Intent',
    heroSublead: 'We map comprehensive content clusters, editorial briefs, and governance standards that establish undeniable subject-matter depth.',
    tagline: 'Editorial architecture that builds topical authority and converts qualified intent',
    shortDescription:
      'Content strategy for high-competition industries: topical authority mapping, E-E-A-T frameworks, editorial standards, and production at the quality level competitive SERPs require.',
    longDescription:
      'Content strategy in competitive search markets is not a blog calendar. It is a systematic programme to build topical authority across the keyword landscape your business needs to own — covering every stage of the funnel, every level of search intent, and every editorial quality signal that differentiates ranking pages from suppressed ones.',
    category: 'seo',
    icon: 'PenTool',
    color: 'green',
    featured: true,
    problemStatement:
      'Most content programmes in high-competition industries produce content that is either too thin to rank or too generic to convert. Google\'s Helpful Content system specifically targets content written for search engines rather than people — and the industries we serve are among the most scrutinised for this.',
    approach:
      'We map the full topical universe of your vertical, identify where your content coverage has gaps relative to ranking competitors, and build an editorial programme that fills those gaps systematically. Every content piece has an intent classification, a target keyword cluster, a coverage depth specification, and an E-E-A-T framework appropriate to your industry.',
    benefits: [
      'Topical authority in your target keyword category',
      'Content that meets both search intent and editorial quality standards',
      'Reduced reliance on paid channels via organic content conversion',
      'E-E-A-T-optimised content for YMYL categories',
    ],
    features: [
      'Topical authority mapping',
      'Content gap analysis vs. ranking competitors',
      'Editorial brief creation per piece',
      'E-E-A-T framework for regulated/YMYL content',
      'Writer briefing and editorial QA',
      'Content optimisation for featured snippets',
      'Content performance attribution',
    ],
    deliverables: [
      'Comprehensive topical authority cluster map & coverage gap matrix',
      'Intent-calibrated editorial calendar with target SERP competitor benchmarks',
      'Granular content briefs specifying semantic entities, schemas, and UX elements',
      'YMYL compliance & E-E-A-T verification guidelines (citations, legal disclaimers)',
      'Contextual internal linking integration rules for newly published assets',
      'Monthly content attribution & assisted organic conversion reporting',
    ],
    process: [
      { step: 1, title: 'Topical Audit', description: 'Map existing content coverage vs. keyword universe.' },
      { step: 2, title: 'Strategy', description: 'Prioritised content plan by intent, search volume, and conversion relevance.' },
      { step: 3, title: 'Brief Creation', description: 'Detailed editorial briefs for each content piece.' },
      { step: 4, title: 'Production', description: 'Writing, editing, and E-E-A-T review.' },
      { step: 5, title: 'Publish & Optimise', description: 'Publication, internal linking, and post-publish performance monitoring.' },
    ],
    idealFor: [
      'Brands that need to build topical authority in competitive verticals',
      'YMYL industries (finance, health, gambling) requiring E-E-A-T-standard content',
      'Businesses replacing thin or AI-generated content with editorial quality',
    ],
    notFor: [
      'Businesses wanting keyword-stuffed content at low cost',
      'Any project requesting content that makes misleading financial, medical, or gambling outcome claims',
    ],
    faqs: [
      { q: 'Do you write content for gambling or financial topics?', a: 'Yes, with appropriate editorial standards. All content in YMYL categories is written by subject-matter writers, reviewed for factual accuracy, and includes appropriate disclaimers where required by the content category.' },
    ],
    seo: {
      title: 'Content Strategy for High-Competition Industries — iGaming Growth',
      description: 'Content strategy that builds topical authority in competitive search markets. E-E-A-T-optimised editorial programmes for gaming, finance, and adjacent verticals.',
    },
  },

  // ─── SEO Audit ────────────────────────────────────────────────────
  {
    slug: 'seo-audit',
    name: 'SEO Audit',
    shortName: 'SEO Audit',
    heroHeadline: "Diagnostic Clarity on Your Domain's Real Search Bottlenecks",
    heroSublead: 'A rigorous, code-level analysis of crawlability, indexation, architectural flaws, and penalty exposure with an engineer-ready action plan.',
    tagline: 'Diagnostic analysis that identifies exactly where your SEO is losing ground',
    shortDescription:
      'Comprehensive SEO audit covering technical, on-page, content, off-page, and competitive dimensions — with a prioritised action plan.',
    longDescription:
      'An SEO audit provides the diagnostic foundation for any SEO programme. Without understanding the current state of a site — its technical health, content quality, authority profile, and competitive position — any SEO investment is speculative. Our audits are built for high-competition industries and go beyond automated tool reports to include strategic analysis of the competitive landscape.',
    category: 'seo',
    icon: 'Search',
    color: 'emerald',
    featured: false,
    problemStatement:
      'Many businesses invest in SEO without a clear baseline. Common audit reports generated by tools like Semrush or Ahrefs identify issues but rarely contextualise them against competitive positioning or rank order by actual ranking impact. We provide analysis, not just data.',
    approach:
      'We conduct a five-dimension audit: technical infrastructure, on-page quality, content depth and topical coverage, off-page authority, and competitive gap analysis. Each dimension produces prioritised findings with implementation guidance.',
    benefits: [
      'Clear picture of where SEO is losing ground and why',
      'Competitive context for all findings',
      'Prioritised action plan ranked by ranking impact',
      'Baseline for measuring future SEO investment ROI',
    ],
    features: [
      'Technical SEO audit (crawl, index, Core Web Vitals, schema)',
      'On-page quality review (intent alignment, coverage, metadata)',
      'Content audit (depth, freshness, topical coverage)',
      'Backlink profile analysis (quality, relevance, gap)',
      'Competitive ranking gap analysis',
      'Keyword opportunity identification',
    ],
    deliverables: [
      'Code-level technical crawl, log file, and indexation audit report',
      'Competitive SERP ranking gap & domain authority disparity model',
      'On-page semantic intent & content freshness audit across target URLs',
      'Backlink toxicity analysis, risk assessment, and disavow roadmap',
      'Prioritised engineering remediation matrix (effort vs. estimated ranking impact)',
      '60-minute executive briefing & developer walkthrough session',
    ],
    process: [
      { step: 1, title: 'Data Collection', description: 'Crawl, analytics access, Search Console data, and competitor profiles.' },
      { step: 2, title: 'Technical Analysis', description: 'Infrastructure, page experience, and indexation review.' },
      { step: 3, title: 'Content Analysis', description: 'Page-level quality and topical coverage assessment.' },
      { step: 4, title: 'Authority Analysis', description: 'Backlink profile and competitive authority gap.' },
      { step: 5, title: 'Report & Presentation', description: 'Full report with findings walkthrough and Q&A.' },
    ],
    idealFor: [
      'Businesses starting a new SEO programme',
      'Sites that have experienced ranking drops',
      'Post-migration sites requiring validation',
      'Brands evaluating SEO investment before committing to a retainer',
    ],
    notFor: ['Businesses looking for a fast automated report — our audits require analyst time'],
    faqs: [
      { q: 'How is this different from a free SEO audit?', a: 'Our paid audit is a comprehensive analyst-delivered document, not an automated tool report. It covers strategic competitive context and includes a prioritised implementation plan. Our free audit is an initial high-level diagnostic.' },
    ],
    seo: {
      title: 'SEO Audit Services — iGaming Growth',
      description: 'Comprehensive SEO audit for high-competition industries. Technical, on-page, content, off-page, and competitive analysis with a prioritised action plan.',
    },
  },

  // ─── Website Development ────────────────────────────────────────
  {
    slug: 'website-development',
    name: 'Website Development',
    shortName: 'Web Dev',
    heroHeadline: 'High-Performance, SEO-First Digital Architectures for Demanding Verticals',
    heroSublead: 'We engineer lightning-fast headless frontends, server-rendered layouts, and conversion-optimized user flows built for search visibility.',
    tagline: 'SEO-first websites engineered for performance, conversion, and competitive markets',
    shortDescription:
      'High-performance website development for competitive industries: technically optimised, fast, accessible, and built for long-term organic growth.',
    longDescription:
      'A website in a competitive industry is not a brochure — it is a revenue-generating system. Its technical architecture determines crawlability, its performance determines user experience signals, its structure determines how authority flows, and its UX determines conversion. We build websites that treat SEO as infrastructure, not afterthought.',
    category: 'web-development',
    icon: 'Code2',
    color: 'blue',
    featured: true,
    problemStatement:
      'Most websites are built for visual appeal first and SEO second. In high-competition markets, a website built on a poor technical foundation — slow load times, JavaScript-rendered critical content, bloated codebases, or poor mobile experience — is a ceiling on organic performance regardless of how much is invested in content and links.',
    approach:
      'Every project begins with a technical SEO specification that defines site architecture, URL structure, page hierarchy, schema markup, and performance targets before design begins. Design and development are then executed within that specification rather than adapting it after the fact.',
    benefits: [
      'Core Web Vitals optimised from day one',
      'SEO-first architecture — no retrofitting required',
      'Conversion-oriented UX grounded in search intent',
      'Accessible, semantic HTML that serves both users and crawlers',
      'Built for longevity, not locked into expensive platforms',
    ],
    features: [
      'Technical SEO specification included in all projects',
      'Core Web Vitals targets agreed upfront',
      'Semantic, accessible HTML structure',
      'Schema markup implementation',
      'CMS integration with SEO-optimised data entry',
      'Responsive, mobile-first design',
      'Performance monitoring setup',
      'Analytics and conversion tracking implementation',
    ],
    deliverables: [
      'Information architecture & URL hierarchy blueprint',
      'High-performance responsive frontend codebase (production-ready)',
      'Strict semantic HTML5 structure & Core Web Vitals optimization (sub-1s LCP targets)',
      'Full structured data suite (Organization, Service, FAQ, Breadcrumbs)',
      'Conversion architecture (frictionless forms, progressive qualification, clear CTAs)',
      'Server-side / first-party analytics & event tracking instrumentation',
      'Comprehensive pre-launch technical SEO validation & checklist signoff',
    ],
    process: [
      { step: 1, title: 'Discovery', description: 'Business objectives, competitive landscape, and technical requirements.' },
      { step: 2, title: 'Technical Specification', description: 'Site architecture, URL structure, performance targets, and SEO requirements.' },
      { step: 3, title: 'Design', description: 'UI/UX design within the technical specification.' },
      { step: 4, title: 'Development', description: 'Build with performance and SEO requirements enforced throughout.' },
      { step: 5, title: 'Testing & Launch', description: 'Performance testing, accessibility audit, and SEO validation before launch.' },
    ],
    idealFor: [
      'New businesses requiring a competitive website from scratch',
      'Established brands whose current site is a technical SEO liability',
      'Companies relaunching into competitive digital markets',
      'Affiliate and comparison site operators',
    ],
    notFor: ['Businesses wanting a quick-turnaround template site without SEO architecture'],
    faqs: [
      { q: 'Do you build on WordPress?', a: 'Yes, among other platforms. Platform selection is based on the specific requirements of the project. For high-volume or technically complex sites we may recommend headless architectures.' },
    ],
    seo: {
      title: 'Website Development for High-Competition Industries — iGaming Growth',
      description: 'SEO-first website development for gaming, finance, and high-competition industries. Performance-optimised, technically sound websites built for long-term organic growth.',
    },
  },

  // ─── Google Ads ────────────────────────────────────────────────
  {
    slug: 'google-ads',
    name: 'Google Ads Management',
    shortName: 'Google Ads',
    heroHeadline: 'Compliance-First Paid Search Management for Policy-Sensitive Categories',
    heroSublead: 'Strictly conditional search acquisition adhering to Google advertising guidelines—including updated Gambling and Games certification requirements effective September 14, 2026. Zero policy bypasses; 100% compliant infrastructure.',
    tagline: 'Paid search campaigns for industries where every click and compliance decision counts',
    shortDescription:
      'Strategic Google Ads management for businesses in complex, high-competition, or policy-sensitive categories — where campaign structure and compliance discipline determine whether campaigns run.',
    longDescription:
      'Running Google Ads in regulated or high-competition categories requires rigorous policy knowledge, account architecture discipline, and bidding sophistication. The current Google Gambling and Games policy requires certification for relevant gambling advertising and has expanded certification requirements effective September 14, 2026. Advertiser eligibility is mandatory: campaigns are managed strictly where permitted by local law and platform policy. We do not offer policy bypasses, ban-proof accounts, or guaranteed approvals.',
    category: 'paid-acquisition',
    icon: 'BarChart3',
    color: 'amber',
    featured: false,
    problemStatement:
      'Google Ads campaigns for industries adjacent to gambling, finance, or restricted services face strict policy controls, high minimum bids, and strict certification prerequisites. Generic campaign setups fail to adhere to policy updates—including the expanded September 14, 2026 certification standards—leading to sudden account suspensions and wasted budget.',
    approach:
      'We audit advertiser eligibility, licensing, and policy requirements before any campaign setup. Campaign architecture is built compliance-first: ad copy is pre-screened against policy guidelines, landing pages are reviewed for required disclosures, and Enhanced Conversions are verified before spend begins. We never attempt policy circumvention.',
    benefits: [
      'Compliance-first campaign architecture built to preserve account health',
      'Strict adherence to Google Gambling and Games certification standards (effective Sept 14, 2026)',
      'Enhanced Conversions and server-side tracking for reliable measurement',
      'Intent-focused negative keyword mapping to eliminate unqualified spend',
      'Transparent reporting with zero fictional ROAS or outcome guarantees',
    ],
    features: [
      'Pre-flight policy eligibility and certification review',
      'Compliant campaign taxonomy and account structure build',
      'Keyword intent mapping and comprehensive negative keyword governance',
      'Policy-compliant ad copy and regulatory disclosure alignment',
      'Landing page compliance and UX conversion review',
      'Server-side Enhanced Conversions and GA4 tracking setup',
      'Automated bid strategy management (where data thresholds permit)',
      'Monthly audit and performance reporting',
    ],
    deliverables: [
      'Pre-flight advertiser eligibility & regulatory certification audit (Google Gambling & Games policy compliant)',
      'Compliant account taxonomy & intent-focused negative keyword lists',
      'Policy-reviewed ad creative and landing page compliance review',
      'Server-side Google Tag Manager & Enhanced Conversions instrumentation',
      'Bid strategy modeling (tCPA/tROAS) within verified regulatory bounds',
      'Transparent monthly performance, CPA, and audit compliance logging',
    ],
    process: [
      { step: 1, title: 'Eligibility Audit', description: 'Review licensing, jurisdiction, and Google certification requirements (including Sept 14, 2026 updates).' },
      { step: 2, title: 'Account Architecture', description: 'Build structured ad groups, negative keyword sets, and compliant ad copy.' },
      { step: 3, title: 'Tracking Verification', description: 'Validate Enhanced Conversions, offline conversion imports, and GA4 attribution.' },
      { step: 4, title: 'Conditional Launch', description: 'Launch campaigns strictly within approved categories and geographic limits.' },
      { step: 5, title: 'Optimization & Reporting', description: 'Ongoing negative search query scrubbing, bid management, and transparent CPA reporting.' },
    ],
    idealFor: [
      'Legally licensed operators holding required Google advertising certifications',
      'Brands in competitive verticals requiring disciplined, compliant account architecture',
      'Advertisers with existing compliant campaigns needing CPA optimization',
    ],
    notFor: [
      'Unlicensed operators seeking to advertise in restricted jurisdictions',
      'Businesses requesting cloaking, policy bypasses, or ban-proof account tricks',
      'Advertisers expecting guaranteed ROAS or approval promises',
    ],
    faqs: [
      { q: 'Can you run Google Ads for gambling or real-money gaming?', a: 'Only where Google Ads policy explicitly permits and where the advertiser holds the required regional licenses and completed Google certification. Note that Google expanded certification requirements effective September 14, 2026. We will audit your eligibility before onboarding, and we do not assist with policy circumvention.' },
      { q: 'Do you guarantee ad approvals or ban prevention?', a: 'No. Google retains absolute discretion over account status and ad approval. We build campaigns to the highest compliance standards to minimize risk, but we do not make false guarantees regarding approvals or platform actions.' },
    ],
    seo: {
      title: 'Google Ads Management — iGaming Growth',
      description: 'Compliance-first Google Ads management for high-competition and policy-sensitive industries. Rigorous policy alignment, certification guidance, and disciplined account architecture.',
    },
  },

  // ─── Meta Ads ────────────────────────────────────────────────────
  {
    slug: 'meta-ads',
    name: 'Meta Ads (Facebook & Instagram)',
    shortName: 'Meta Ads',
    heroHeadline: 'Targeted Paid Social Acquisition Within Regulated Platform Boundaries',
    heroSublead: 'Conditional campaign structures, pre-screened creative, and Server-Side Conversion API implementations built strictly where permitted by Meta advertising standards.',
    tagline: 'Audience-led acquisition campaigns within Meta\'s advertising guidelines',
    shortDescription:
      'Meta Ads management for industries requiring policy knowledge, creative testing discipline, and audience strategy in restricted categories.',
    longDescription:
      'Meta advertising offers powerful audience targeting but enforces strict advertising standards across financial services, gaming, and sensitive categories. Operating in these verticals requires understanding Meta\'s policy nuances, written pre-approval requirements where applicable, and privacy-first tracking. We manage campaigns strictly within documented platform guidelines.',
    category: 'paid-acquisition',
    icon: 'Megaphone',
    color: 'orange',
    featured: false,
    problemStatement:
      'Meta enforces automated policy policing that frequently flags accounts in gaming, fintech, and adjacent niches. Without written authorization, strict age-gating, and compliant creative standards, accounts face immediate restriction and loss of campaign momentum.',
    approach:
      'We audit your Meta Business Manager health, advertiser eligibility, and regional restrictions before developing campaign plans. Creative assets and copy are vetted for compliance before submission. Conversion tracking is implemented via Meta Conversions API (CAPI) to ensure reliable signal capture without violating privacy regulations.',
    benefits: [
      'Compliance-first campaign architecture aligned to Meta Advertising Standards',
      'Server-side tracking via Meta Conversions API (CAPI) for resilient attribution',
      'Strict age-gating and geo-targeting controls to satisfy platform guidelines',
      'Structured creative testing without misleading or sensationalist hooks',
      'Attribution clarity connecting ad impressions to verified business actions',
    ],
    features: [
      'Meta Advertising Standards and account health review',
      'Written authorization and permission guidance where applicable',
      'Compliant campaign, ad set, and audience structure build',
      'Creative direction and policy pre-screening',
      'Meta Conversions API (CAPI) server-side integration',
      'Audience segmentation with strict demographic restrictions',
      'A/B creative testing within compliant parameters',
      'Monthly performance and CPA reporting',
    ],
    deliverables: [
      'Meta advertising standard eligibility audit & Business Manager health review',
      'Compliance-cleared creative direction & landing page policy alignment',
      'Server-Side Conversions API (CAPI) & first-party event tracking setup',
      'Verified intent-based audience architecture & exclusion parameters',
      'Structured creative A/B testing protocols adhering to category policies',
      'Monthly multi-touch attribution & acquisition cost reporting',
    ],
    process: [
      { step: 1, title: 'Policy Review', description: 'Account status, category restrictions, and advertiser eligibility.' },
      { step: 2, title: 'Strategy', description: 'Audience mapping, creative direction, and campaign structure.' },
      { step: 3, title: 'Launch', description: 'Campaigns live with pixel and conversion tracking verified.' },
      { step: 4, title: 'Test & Optimise', description: 'Creative A/B testing and audience refinement.' },
      { step: 5, title: 'Report', description: 'Monthly performance reporting.' },
    ],
    idealFor: [
      'Brands in gaming, fintech, or adjacent categories needing social acquisition',
      'Businesses whose Meta accounts have been restricted and need structured recovery',
    ],
    notFor: [
      'Advertisers requesting campaigns that violate Meta\'s Advertising Standards',
      'Adult service platforms not eligible for Meta advertising',
    ],
    faqs: [
      { q: 'Can we advertise gambling services on Meta?', a: 'Only where Meta\'s policy allows and where the required permissions are in place. Gambling advertising on Meta is restricted and requires pre-approval in most markets. We will advise on your eligibility during the initial review.' },
    ],
    seo: {
      title: 'Meta Ads (Facebook & Instagram) — iGaming Growth',
      description: 'Meta Ads management for policy-sensitive industries. Compliance-aware campaigns for gambling, finance, and adjacent categories on Facebook and Instagram.',
    },
  },

  // ─── Conversion Optimisation ────────────────────────────────────
  {
    slug: 'conversion-optimization',
    name: 'Conversion Rate Optimisation (CRO)',
    shortName: 'CRO',
    heroHeadline: 'Systematic UX and Funnel Optimization to Maximize Traffic Yield',
    heroSublead: 'We diagnose visitor drop-off, test high-friction touchpoints, and streamline user journeys without manipulative dark patterns or fake scarcity.',
    tagline: 'Convert more of the traffic you already have — without increasing ad spend',
    shortDescription:
      'Systematic CRO for high-competition industries: funnel analysis, A/B testing, UX improvement, and conversion architecture that turns traffic into qualified action.',
    longDescription:
      'Acquiring traffic in competitive industries is expensive. Losing it at the conversion stage is doubly costly. CRO addresses the gap between traffic and conversion through systematic identification of friction points, A/B testing of hypotheses, and UX improvements grounded in user behaviour data rather than design preference.',
    category: 'conversion-analytics',
    icon: 'Target',
    color: 'rose',
    featured: false,
    problemStatement:
      'In competitive industries, user acquisition costs are high. Many businesses invest in growing traffic without auditing whether their site is converting that traffic effectively. A 50% improvement in conversion rate has the same revenue impact as a 100% increase in traffic — at a fraction of the cost.',
    approach:
      'We start with quantitative analysis: funnel data, session recordings, heatmaps, and form completion rates. From this analysis we develop conversion hypotheses, prioritise them by impact and ease, and run structured A/B tests. Winning variants are implemented and the process iterates.',
    benefits: [
      'Improved conversion rate from existing organic and paid traffic',
      'Reduced effective customer acquisition cost',
      'Data-driven UX decisions rather than subjective design choices',
      'Compounding revenue impact from conversion improvements',
    ],
    features: [
      'Conversion funnel mapping and drop-off analysis',
      'Heatmap, scroll map, and session recording analysis',
      'Form completion and abandonment analysis',
      'A/B test design and implementation',
      'Landing page optimisation',
      'Mobile UX audit',
      'Checkout and registration flow optimisation',
    ],
    deliverables: [
      'Quantitative conversion funnel & drop-off diagnostic model',
      'Qualitative friction analysis (heatmaps, scroll depth, form abandonment)',
      'Prioritized A/B testing roadmap with testable hypotheses & ICE scores',
      'High-fidelity wireframes and copy variants for test implementation',
      'Statistical significance reporting and post-test revenue attribution',
      'Permanent winner implementation guidance and documentation',
    ],
    process: [
      { step: 1, title: 'Baseline Analysis', description: 'Funnel data, session behaviour, and quantitative audit.' },
      { step: 2, title: 'Hypothesis Formation', description: 'Conversion problem identification and test hypotheses.' },
      { step: 3, title: 'Test Design', description: 'A/B test structure with statistical significance framework.' },
      { step: 4, title: 'Test & Measure', description: 'Run tests, collect data, evaluate results.' },
      { step: 5, title: 'Implement & Iterate', description: 'Ship winning variants and design next test cycle.' },
    ],
    idealFor: [
      'Businesses with existing traffic but conversion rates below industry benchmarks',
      'Companies scaling paid campaigns and needing to reduce CPA',
      'Gaming or financial platforms with registration or onboarding friction',
    ],
    notFor: ['Sites with very low traffic volumes insufficient for statistically valid A/B testing'],
    faqs: [
      { q: 'How much traffic do we need for CRO to be effective?', a: 'Statistical validity requires sufficient conversion volume to detect meaningful differences. We typically recommend a minimum of several hundred conversions per month on the specific funnel being tested. Below this threshold, qualitative methods (session analysis, expert review) are more valuable than A/B testing.' },
    ],
    seo: {
      title: 'Conversion Rate Optimisation (CRO) — iGaming Growth',
      description: 'CRO for high-competition industries. Funnel analysis, A/B testing, and UX improvement that converts more of your existing traffic into revenue.',
    },
  },

  // ─── Analytics ────────────────────────────────────────────────────
  {
    slug: 'analytics',
    name: 'Analytics & Tracking Implementation',
    shortName: 'Analytics',
    heroHeadline: 'Reliable Server-Side Tracking and Attribution for Complex User Journeys',
    heroSublead: 'We deploy cookieless GTM, first-party data layers, and clean attribution models so every acquisition decision is backed by verified data.',
    tagline: 'Attribution infrastructure that tells you which activity is driving revenue',
    shortDescription:
      'GA4, GTM, conversion tracking, and attribution modelling for high-competition businesses that need to understand exactly what is generating return.',
    longDescription:
      'Effective analytics implementation is the foundation of data-driven marketing decisions. In regulated industries with complex conversion funnels — account registration, deposit, purchase — accurate attribution requires more than default GA4 setup. Events must be correctly defined, funnels must be instrumented, and paid channel attribution must be cross-referenced against organic data.',
    category: 'conversion-analytics',
    icon: 'BarChart2',
    color: 'purple',
    featured: false,
    problemStatement:
      'Many businesses in complex industries are making marketing investment decisions based on incomplete or incorrect attribution data. Default GA4 setup does not account for industry-specific conversion events, multi-session conversion funnels, or cross-channel attribution. Without accurate data, optimisation is guesswork.',
    approach:
      'We audit existing tracking implementations, identify gaps between what is being measured and what decisions require, and implement the measurement architecture needed to generate reliable attribution data. All tracking is validated before being used for decision-making.',
    benefits: [
      'Accurate conversion attribution across all acquisition channels',
      'Multi-session funnel tracking for complex conversion paths',
      'Data foundation for SEO, paid media, and CRO decisions',
      'First-party data collection that is privacy-compliant',
    ],
    features: [
      'GA4 implementation and custom event design',
      'Google Tag Manager setup and management',
      'Conversion tracking for organic, paid, and direct channels',
      'Custom funnel reporting',
      'Cross-channel attribution modelling',
      'Server-side tracking where required',
      'Data layer design and implementation',
    ],
    deliverables: [
      'Tracking architecture audit and data discrepancy diagnostic',
      'Google Tag Manager (Web & Server-Side) deployment plan',
      'GA4 custom event taxonomy & cross-domain attribution model',
      'First-party data layer specification & cookie consent integration',
      'End-to-end event firing validation and QA test suite',
      'Executive Looker Studio dashboard with channel ROI tracking',
    ],
    process: [
      { step: 1, title: 'Audit', description: 'Review existing tracking against business measurement requirements.' },
      { step: 2, title: 'Design', description: 'Define event taxonomy, conversion definitions, and attribution model.' },
      { step: 3, title: 'Implementation', description: 'GA4, GTM, and conversion tracking build.' },
      { step: 4, title: 'Validation', description: 'End-to-end data verification across all tracked events.' },
      { step: 5, title: 'Reporting Setup', description: 'Dashboard and report configuration for ongoing monitoring.' },
    ],
    idealFor: [
      'Businesses relying on incomplete or default analytics data',
      'Companies scaling paid channels and needing accurate attribution',
      'Sites with complex multi-step conversion funnels',
    ],
    notFor: ['Businesses wanting analytics that masks or misattributes data for reporting purposes'],
    faqs: [
      { q: 'Do you set up server-side tracking?', a: 'Yes. For industries where ad blockers or privacy regulations affect client-side tracking quality, server-side tag management improves data completeness and is the recommended approach.' },
    ],
    seo: {
      title: 'Analytics & Tracking Implementation — iGaming Growth',
      description: 'GA4, GTM, and conversion tracking for complex business models. Attribution infrastructure for high-competition industries.',
    },
  },
];

// ─── Accessors ────────────────────────────────────────────────────────────────

export const getServiceBySlug = (slug: string): ServiceOffering | undefined =>
  servicesData.find((s) => s.slug === slug);

export const getFeaturedServices = (): readonly ServiceOffering[] =>
  servicesData.filter((s) => s.featured);

export const getAllServices = (): readonly ServiceOffering[] => [...servicesData];

export const getServicesByCategory = (category: ServiceCategory): readonly ServiceOffering[] =>
  servicesData.filter((s) => s.category === category);

export const getTopLevelServices = (): readonly ServiceOffering[] =>
  servicesData.filter((s) => !s.parentSlug);

export const getSubServices = (parentSlug: string): readonly ServiceOffering[] =>
  servicesData.filter((s) => s.parentSlug === parentSlug);

export const SERVICE_CATEGORY_LABELS: Record<ServiceCategory, string> = {
  seo: 'SEO & Organic Growth',
  'web-development': 'Website Development',
  'paid-acquisition': 'Paid Acquisition',
  'conversion-analytics': 'Conversion & Analytics',
};

