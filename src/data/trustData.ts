/**
 * Trust & Process Proof Data — iGaming Growth
 * 
 * Per igaming.md §13: No fake testimonials, invented clients,
 * fabricated metrics, or manufactured social proof.
 * 
 * Instead: Process transparency, methodology proof,
 * and specific deliverable commitments.
 */

export interface EngagementStep {
  readonly step: number;
  readonly title: string;
  readonly duration: string;
  readonly description: string;
  readonly deliverable: string;
}

export interface ProcessProof {
  readonly icon: string; // lucide icon name
  readonly title: string;
  readonly description: string;
  readonly details: readonly string[];
}

export interface ComplianceCommitment {
  readonly title: string;
  readonly description: string;
}

export interface ToolStack {
  readonly category: string;
  readonly tools: readonly string[];
}

/** 5-step engagement methodology */
export const ENGAGEMENT_PROCESS: readonly EngagementStep[] = [
  {
    step: 1,
    title: 'Discovery & Brief',
    duration: 'Day 1–2',
    description:
      'We begin by understanding your platform, target market, competitive position, and specific growth constraints. No template intake forms — a direct conversation with a senior engineer.',
    deliverable: 'Technical brief document and priority gap summary',
  },
  {
    step: 2,
    title: 'Technical Diagnostic',
    duration: 'Day 3–7',
    description:
      'Full crawl of your site against our 200-point technical audit framework. We analyse crawl budget, rendering, canonicals, indexation, Core Web Vitals, and authority profile.',
    deliverable: 'Technical audit report with prioritised remediation roadmap',
  },
  {
    step: 3,
    title: 'Architecture Design',
    duration: 'Week 2',
    description:
      'We design the content architecture, internal linking graph, and authority development strategy. For websites, we produce a full site specification before any design begins.',
    deliverable: 'SEO architecture document and 90-day implementation plan',
  },
  {
    step: 4,
    title: 'Execution',
    duration: 'Month 1–3',
    description:
      'Systematic implementation of technical fixes, content production, and authority development. Weekly status updates. No black-box execution — you see exactly what is being built and why.',
    deliverable: 'Weekly action logs, monthly performance reporting',
  },
  {
    step: 5,
    title: 'Measure & Iterate',
    duration: 'Ongoing',
    description:
      'We track performance against defined signals — organic sessions, keyword coverage, crawl health, authority growth — and adapt the strategy based on search engine responses.',
    deliverable: 'Monthly performance report with next-cycle priorities',
  },
] as const;

/** Process proof panels — what clients actually receive */
export const PROCESS_PROOFS: readonly ProcessProof[] = [
  {
    icon: 'FileSearch',
    title: 'Technical Audit — Actual Depth',
    description:
      'Our technical audits go significantly beyond what automated tools report. We manually analyse JavaScript rendering, crawl log patterns, indexation signals, and canonical chain integrity.',
    details: [
      '200+ technical checkpoints across 8 audit domains',
      'Server log analysis to identify crawl budget waste',
      'JavaScript rendering verification via headless browser',
      'Schema validation pipeline — programmatic JSON-LD check',
      'Manual internal linking graph analysis',
    ],
  },
  {
    icon: 'Network',
    title: 'Authority Development — Quality Over Volume',
    description:
      'Link acquisition in high-competition verticals requires editorial credibility, not just volume. We build authority through genuine content placement, not private blog networks or paid link farms.',
    details: [
      'Editorial site qualification against 12 authority signals',
      'Manual outreach — no automated link-drop campaigns',
      'Relevance-first placement strategy',
      'Digital PR for high-authority publications',
      'Competitor backlink gap analysis — quarterly',
    ],
  },
  {
    icon: 'BarChart2',
    title: 'Reporting — Transparent, Not Vanity',
    description:
      'We report on signals that correlate with business outcomes — not page views or generic keyword position tables. Every metric we report on has a defined relationship to your growth objective.',
    details: [
      'Organic session trends by landing page segment',
      'Keyword coverage expansion — new keywords ranking',
      'Crawl health score and indexation rate',
      'Authority growth — referring domain quality weighted',
      'Conversion funnel contribution from organic channel',
    ],
  },
] as const;

/** Our compliance operating principles */
export const COMPLIANCE_COMMITMENTS: readonly ComplianceCommitment[] = [
  {
    title: 'No Ranking Guarantees',
    description:
      'We commit to process, methodology, and delivery. Ranking outcomes are determined by search engine algorithms that we influence — not control.',
  },
  {
    title: 'No Policy Bypass Positioning',
    description:
      'We do not claim to circumvent platform advertising policies, "beat" Google, hide campaigns, or run banned ad types. We operate within the rules — using certification, compliance, and architecture to maximise what is legitimately available.',
  },
  {
    title: 'No Fake Social Proof',
    description:
      'Zero fabricated testimonials, invented client logos, or manufactured case studies. Trust is built through technical content quality and methodology transparency — not props.',
  },
  {
    title: 'Paid Media With Honest Eligibility Framing',
    description:
      'Paid acquisition for gaming, financial, and adult-industry clients is always prefaced with a platform eligibility assessment. If your business cannot run campaigns on a specific platform, we tell you before engagement begins — not after.',
  },
] as const;

/** Technical tooling stack — credibility through specificity */
export const TOOL_STACK: readonly ToolStack[] = [
  {
    category: 'Technical SEO',
    tools: ['Google Search Console', 'Screaming Frog', 'Cloudflare Log Push', 'PageSpeed Insights API', 'Chrome DevTools', 'Lighthouse CI'],
  },
  {
    category: 'Crawl & Rendering',
    tools: ['Puppeteer / Headless Chrome', 'Custom crawl budget analysis scripts', 'Rendering comparison tooling'],
  },
  {
    category: 'Analytics & Attribution',
    tools: ['Google Analytics 4', 'Looker Studio', 'Search Console API', 'Custom reporting pipelines'],
  },
  {
    category: 'Content & Authority',
    tools: ['Ahrefs', 'Semrush', 'Manual editorial qualification', 'Journalist databases for Digital PR'],
  },
  {
    category: 'Validation',
    tools: ['Schema.org validator', 'Rich Results Test', 'JSON-LD Playground', 'W3C Validator'],
  },
] as const;

/** Generalist vs Specialist comparison */
export const COMPARISON_ROWS: readonly {
  readonly aspect: string;
  readonly generalist: string;
  readonly specialist: string;
}[] = [
  {
    aspect: 'Vertical knowledge',
    generalist: 'Generic frameworks applied to all industries',
    specialist: 'Deep knowledge of gaming, financial, and adult-industry search dynamics',
  },
  {
    aspect: 'Compliance awareness',
    generalist: 'Discovered after execution problems arise',
    specialist: 'Built into strategy design from Day 1',
  },
  {
    aspect: 'Technical depth',
    generalist: 'Surface-level audit tool reports',
    specialist: 'Log file analysis, crawl budget engineering, JS rendering',
  },
  {
    aspect: 'Content standard',
    generalist: 'Keyword-targeted articles at volume',
    specialist: 'E-E-A-T-calibrated editorial content for YMYL verticals',
  },
  {
    aspect: 'Authority acquisition',
    generalist: 'Automated outreach, bulk links',
    specialist: 'Editorial placement, digital PR, relevance-first selection',
  },
  {
    aspect: 'Paid acquisition',
    generalist: 'Standard campaign management, frequent policy bans',
    specialist: 'Pre-engagement eligibility assessment, compliant creative direction',
  },
] as const;
