/**
 * Navigation configuration — iGaming Growth Agency
 * Drives the header, mobile nav, and footer from a single source of truth.
 */

export interface NavChild {
  readonly label: string;
  readonly path: string;
  readonly description?: string;
}

export interface NavItem {
  readonly label: string;
  readonly path: string;
  readonly badge?: string;
  readonly description?: string;
  readonly children?: readonly NavChild[];
}

export interface FooterLink {
  readonly label: string;
  readonly path: string;
}

export interface FooterSection {
  readonly title: string;
  readonly links: readonly FooterLink[];
}

export const navigationConfig = {
  primary: [
    {
      label: 'Services',
      path: '/services',
      description: 'SEO, web dev, paid acquisition, and conversion for high-competition industries',
      children: [
        { label: 'All Services', path: '/services', description: 'Full service overview' },
        { label: 'SEO', path: '/services/seo', description: 'Organic growth for competitive markets' },
        { label: 'Technical SEO', path: '/services/technical-seo', description: 'Infrastructure, Core Web Vitals, schema' },
        { label: 'Content Strategy', path: '/services/content-strategy', description: 'Topical authority & E-E-A-T' },
        { label: 'Programmatic SEO', path: '/services/programmatic-seo', description: 'Scale content, capture long-tail' },
        { label: 'Website Development', path: '/services/website-development', description: 'SEO-first web development' },
        { label: 'Google Ads', path: '/services/google-ads', description: 'Paid search for complex verticals' },
        { label: 'Conversion Optimisation', path: '/services/conversion-optimization', description: 'More from existing traffic' },
        { label: 'SEO Audit', path: '/services/seo-audit', description: 'Diagnostic foundation for any SEO programme' },
      ],
    },
    {
      label: 'Industries',
      path: '/industries',
      description: 'Specialist expertise across competitive and high-risk verticals',
      children: [
        { label: 'All Industries', path: '/industries', description: 'Full industry overview' },
        { label: 'Online Gaming', path: '/industries/gaming', description: 'Gaming platforms and portals' },
        { label: 'Online Casino', path: '/industries/casino', description: 'Casino operators and affiliates' },
        { label: 'Cricket Gaming', path: '/industries/cricket-gaming', description: 'Fantasy sports & cricket prediction' },
        { label: 'Skill Games (Yono)', path: '/industries/yono', description: 'Real-money skill gaming' },
        { label: 'Color Prediction', path: '/industries/color-prediction', description: 'Color gaming platforms' },
        { label: 'Color Trading', path: '/industries/color-trading', description: 'Trading platform SEO' },
        { label: 'Stock Market', path: '/industries/stock-market', description: 'Financial & trading platforms' },
        { label: 'Adult Industry', path: '/industries/adult-escort', description: 'Adult platforms & directories' },
      ],
    },
    {
      label: 'Resources',
      path: '/resources',
      description: 'Knowledge center, technical guides, and vertical teardowns',
      children: [
        { label: 'All Resources', path: '/resources', description: 'Complete library of 10 engineering guides' },
        { label: 'Technical SEO Guide', path: '/resources/seo-guides/technical-seo-guide', description: '47-point technical audit checklist' },
        { label: 'Programmatic SEO Guide', path: '/resources/seo-guides/programmatic-seo', description: 'Database architecture without doorway risks' },
        { label: 'Gaming SEO Blueprint', path: '/resources/industry-insights/gaming-seo', description: 'High-competition organic penetration' },
      ],
    },
    {
      label: 'About',
      path: '/about',
    },
    {
      label: 'Free SEO Audit',
      path: '/free-seo-audit',
      badge: '→',
    },
  ] as readonly NavItem[],

  footer: [
    {
      title: 'SEO Services',
      links: [
        { label: 'SEO Overview', path: '/services/seo' },
        { label: 'Technical SEO', path: '/services/technical-seo' },
        { label: 'On-Page SEO', path: '/services/on-page-seo' },
        { label: 'Off-Page SEO', path: '/services/off-page-seo' },
        { label: 'Programmatic SEO', path: '/services/programmatic-seo' },
        { label: 'Content Strategy', path: '/services/content-strategy' },
        { label: 'SEO Audit', path: '/services/seo-audit' },
      ],
    },
    {
      title: 'Growth Services',
      links: [
        { label: 'Website Development', path: '/services/website-development' },
        { label: 'Google Ads Management', path: '/services/google-ads' },
        { label: 'Meta Ads Acquisition', path: '/services/meta-ads' },
        { label: 'Conversion Optimisation', path: '/services/conversion-optimization' },
        { label: 'Analytics & Tracking', path: '/services/analytics' },
      ],
    },
    {
      title: 'Target Industries',
      links: [
        { label: 'Online Gaming', path: '/industries/gaming' },
        { label: 'Online Casino', path: '/industries/casino' },
        { label: 'Cricket Gaming', path: '/industries/cricket-gaming' },
        { label: 'Skill Games (Yono)', path: '/industries/yono' },
        { label: 'Color Prediction', path: '/industries/color-prediction' },
        { label: 'Color Trading', path: '/industries/color-trading' },
        { label: 'Stock Market', path: '/industries/stock-market' },
        { label: 'Adult Industry', path: '/industries/adult-escort' },
      ],
    },
    {
      title: 'Company & Advisory',
      links: [
        { label: 'About Agency', path: '/about' },
        { label: 'Knowledge Base', path: '/resources' },
        { label: 'Free SEO Audit', path: '/free-seo-audit' },
        { label: 'Book Strategy Call', path: '/book-call' },
        { label: 'Direct Contact', path: '/contact' },
        { label: 'Editorial Standards', path: '/editorial-policy' },
      ],
    },
  ] as readonly FooterSection[],
} as const;

export default navigationConfig;
