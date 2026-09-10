/**
 * iGaming Growth Agency — Navigation Configuration
 * B2B agency navigation: Services, Industries, Work, Resources, Contact
 */

export interface NavItem {
  readonly label: string;
  readonly path: string;
  readonly badge?: string;
  readonly description?: string;
  readonly children?: readonly NavItem[];
}

export interface FooterSection {
  readonly title: string;
  readonly links: readonly { readonly label: string; readonly path: string }[];
}

export const navigationConfig = {
  primary: [
    {
      label: 'Services',
      path: '/services',
      description: 'Full-stack digital growth for iGaming brands.',
      children: [
        { label: 'All Services', path: '/services', description: 'Complete agency capability overview' },
        { label: 'iGaming SEO', path: '/services/igaming-seo', description: 'Organic growth for gaming brands' },
        { label: 'Performance Marketing', path: '/services/performance-marketing', description: 'ROI-first paid acquisition' },
        { label: 'Web Development', path: '/services/web-development', description: 'High-performance gaming platforms' },
        { label: 'Content Strategy', path: '/services/content-strategy', description: 'Authority content that ranks & converts' },
        { label: 'Social Media Marketing', path: '/services/social-media-marketing', description: 'Build gaming brand communities' },
        { label: 'CRO & Optimisation', path: '/services/conversion-optimisation', description: 'More depositing players from existing traffic' },
      ],
    },
    {
      label: 'Industries',
      path: '/industries',
      description: 'Verticals we serve across the iGaming ecosystem.',
      children: [
        { label: 'All Industries', path: '/industries', description: 'iGaming verticals we specialise in' },
        { label: 'Online Casinos', path: '/industries/online-casinos', description: 'Casino operators across regulated markets' },
        { label: 'Sports Betting', path: '/industries/sports-betting', description: 'Sportsbooks & exchange platforms' },
        { label: 'Fantasy Sports', path: '/industries/fantasy-sports', description: 'Cricket & multi-sport fantasy apps' },
        { label: 'Crypto & Web3 Gaming', path: '/industries/crypto-gaming', description: 'Blockchain casinos & NFT gaming' },
        { label: 'Gaming Affiliates', path: '/industries/gaming-affiliates', description: 'Review networks & comparison portals' },
        { label: 'Game Studios', path: '/industries/game-studios', description: 'Slot studios & content providers' },
      ],
    },
    {
      label: 'Results',
      path: '/case-studies',
      description: 'Verified results and client case studies.',
    },
    {
      label: 'Resources',
      path: '/resources',
      description: 'Free guides, tools, and insights for gaming brands.',
      children: [
        { label: 'iGaming Blog', path: '/blog', description: 'Marketing insights for gaming businesses' },
        { label: 'Free SEO Audit', path: '/free-seo-audit', description: 'Instant site health check', badge: 'Free' },
        { label: 'Gaming Marketing Guides', path: '/resources', description: 'Strategy guides for operators' },
        { label: 'FAQ', path: '/faq', description: 'Common questions about our services' },
      ],
    },
    {
      label: 'About',
      path: '/about',
    },
    {
      label: 'Get a Proposal',
      path: '/contact',
      badge: '→',
    },
  ] as readonly NavItem[],

  footer: [
    {
      title: 'Our Services',
      links: [
        { label: 'iGaming SEO', path: '/services/igaming-seo' },
        { label: 'Performance Marketing', path: '/services/performance-marketing' },
        { label: 'Web Development', path: '/services/web-development' },
        { label: 'Content Strategy', path: '/services/content-strategy' },
        { label: 'Social Media Marketing', path: '/services/social-media-marketing' },
        { label: 'CRO & Optimisation', path: '/services/conversion-optimisation' },
      ],
    },
    {
      title: 'Industries We Serve',
      links: [
        { label: 'Online Casinos', path: '/industries/online-casinos' },
        { label: 'Sports Betting', path: '/industries/sports-betting' },
        { label: 'Fantasy Sports', path: '/industries/fantasy-sports' },
        { label: 'Crypto & Web3 Gaming', path: '/industries/crypto-gaming' },
        { label: 'Gaming Affiliates', path: '/industries/gaming-affiliates' },
        { label: 'Game Studios', path: '/industries/game-studios' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Case Studies', path: '/case-studies' },
        { label: 'iGaming Marketing Blog', path: '/blog' },
        { label: 'Free SEO Audit', path: '/free-seo-audit' },
        { label: 'Gaming Marketing Guides', path: '/resources' },
        { label: 'FAQ', path: '/faq' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About iGaming Growth', path: '/about' },
        { label: 'Get a Proposal', path: '/contact' },
        { label: 'Editorial Standards', path: '/editorial-policy' },
        { label: 'Terms of Service', path: '/terms' },
        { label: 'Privacy Policy', path: '/privacy' },
      ],
    },
  ] as readonly FooterSection[],
};
