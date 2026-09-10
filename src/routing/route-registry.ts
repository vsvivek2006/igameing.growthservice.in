/**
 * Authoritative Route Registry — iGaming Growth B2B Agency
 * HARD ARCHITECTURAL CONSTRAINT: EXACTLY 50 INDEXABLE PUBLIC PAGES.
 * Central repository for all static canonical routes, priorities, change frequencies, and aliases.
 */

import { AppRoute, RouteAlias } from './route-types';
import { normalizePath } from './route-normalization';
import { EXACT_50_PAGES, EXPECTED_INDEXABLE_PAGE_COUNT, PageDefinition } from '../data/pageRegistry';

export { EXPECTED_INDEXABLE_PAGE_COUNT };

export const APP_ROUTES: Record<string, AppRoute> = {
  // ─── 8 Primary Core Pages (Group A) ──────────────────────────────────────
  home: {
    path: '/',
    canonical: '/',
    label: 'Home',
    category: 'primary',
    includeInSitemap: true,
    priority: 1.0,
    changefreq: 'daily',
    kind: 'static',
  },

  about: {
    path: '/about',
    canonical: '/about',
    label: 'About iGaming Growth',
    category: 'primary',
    includeInSitemap: true,
    priority: 0.7,
    changefreq: 'monthly',
    kind: 'static',
  },

  contact: {
    path: '/contact',
    canonical: '/contact',
    label: 'Get a Proposal',
    category: 'primary',
    includeInSitemap: true,
    priority: 0.8,
    changefreq: 'monthly',
    aliases: ['/get-proposal', '/get-a-quote', '/hire-us'],
    kind: 'static',
  },

  services: {
    path: '/services',
    canonical: '/services',
    label: 'Services',
    category: 'services',
    includeInSitemap: true,
    priority: 0.9,
    changefreq: 'weekly',
    aliases: ['/our-services', '/what-we-do'],
    kind: 'static',
  },

  industries: {
    path: '/industries',
    canonical: '/industries',
    label: 'Industries We Serve',
    category: 'industries',
    includeInSitemap: true,
    priority: 0.9,
    changefreq: 'weekly',
    aliases: ['/verticals', '/who-we-serve'],
    kind: 'static',
  },

  resources: {
    path: '/resources',
    canonical: '/resources',
    label: 'Marketing Guides & Resources',
    category: 'resources',
    includeInSitemap: true,
    priority: 0.8,
    changefreq: 'weekly',
    aliases: [
      '/guides',
      '/articles',
      '/insights',
      '/blog',
      '/case-studies',
      '/results',
      '/portfolio',
      '/work',
      '/faq',
      '/faqs',
      '/help',
    ],
    kind: 'static',
  },

  freeSeoAudit: {
    path: '/free-seo-audit',
    canonical: '/free-seo-audit',
    label: 'Free iGaming SEO Audit',
    category: 'primary',
    includeInSitemap: true,
    priority: 0.9,
    changefreq: 'monthly',
    aliases: ['/seo-audit-free', '/audit-request'],
    kind: 'static',
  },

  bookCall: {
    path: '/book-call',
    canonical: '/book-call',
    label: 'Book a Strategy Call',
    category: 'primary',
    includeInSitemap: true,
    priority: 0.9,
    changefreq: 'monthly',
    aliases: ['/schedule', '/consultation', '/book-strategy-call'],
    kind: 'static',
  },

  // ─── Utility & Legal Routes (noindex, excluded from sitemap) ─────────────
  editorialPolicy: {
    path: '/editorial-policy',
    canonical: '/editorial-policy',
    label: 'Editorial Standards',
    category: 'compliance',
    includeInSitemap: false,
    priority: 0.3,
    changefreq: 'yearly',
    kind: 'static',
  },

  terms: {
    path: '/terms',
    canonical: '/terms',
    label: 'Terms of Service',
    category: 'legal',
    includeInSitemap: false,
    priority: 0.3,
    changefreq: 'yearly',
    kind: 'static',
  },

  privacy: {
    path: '/privacy',
    canonical: '/privacy',
    label: 'Privacy Policy',
    category: 'legal',
    includeInSitemap: false,
    priority: 0.3,
    changefreq: 'yearly',
    kind: 'static',
  },
};

export function getSitemapRoutes(): AppRoute[] {
  return Object.values(APP_ROUTES).filter((r) => r.includeInSitemap);
}

export interface InventoryRouteItem {
  readonly path: string;
  readonly canonical: string;
  readonly type: 'static' | 'service' | 'industry' | 'service-industry' | 'guide';
  readonly label: string;
  readonly priority: number;
  readonly changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
  readonly indexable: boolean;
  readonly includeInSitemap: boolean;
}

export function getCompleteSiteInventory(
  _services?: unknown,
  _industries?: unknown,
  _matrixEntries?: unknown,
  _guides?: unknown
): InventoryRouteItem[] {
  return EXACT_50_PAGES.map((page: PageDefinition) => ({
    path: page.path,
    canonical: page.canonical,
    type:
      page.category === 'service'
        ? 'service'
        : page.category === 'industry'
        ? 'industry'
        : page.category === 'industry-service'
        ? 'service-industry'
        : page.category === 'seo-guide' || page.category === 'industry-insight'
        ? 'guide'
        : 'static',
    label: page.title,
    priority: page.priority,
    changefreq: page.changefreq,
    indexable: true,
    includeInSitemap: true,
  }));
}

export function getRouteAliases(): RouteAlias[] {
  const aliases: RouteAlias[] = [];

  // 1. Static aliases from APP_ROUTES
  for (const route of Object.values(APP_ROUTES)) {
    if (route.aliases) {
      for (const alias of route.aliases) {
        aliases.push({
          from: normalizePath(alias),
          to: route.canonical,
          permanent: true,
        });
      }
    }
  }

  // 2. Deprecated service aliases
  aliases.push({
    from: '/services/social-media-marketing',
    to: '/services/meta-ads',
    permanent: true,
  });

  // 3. Legacy guide route aliases (redirecting to new canonical paths)
  aliases.push(
    { from: '/resources/guides/technical-seo-audit-checklist', to: '/resources/seo-guides/technical-seo-guide', permanent: true },
    { from: '/guides/technical-seo-audit-checklist', to: '/resources/seo-guides/technical-seo-guide', permanent: true },
    { from: '/resources/guides/programmatic-seo-architecture', to: '/resources/seo-guides/programmatic-seo', permanent: true },
    { from: '/guides/programmatic-seo-architecture', to: '/resources/seo-guides/programmatic-seo', permanent: true },
    { from: '/resources/guides/core-web-vitals-spa-gaming', to: '/resources/seo-guides/core-web-vitals', permanent: true },
    { from: '/guides/core-web-vitals-spa-gaming', to: '/resources/seo-guides/core-web-vitals', permanent: true },
    { from: '/resources/guides/internal-linking-authority-silos', to: '/resources/seo-guides/internal-linking', permanent: true },
    { from: '/guides/internal-linking-authority-silos', to: '/resources/seo-guides/internal-linking', permanent: true },
    { from: '/resources/guides/high-competition-search-intent', to: '/resources/industry-insights/competitive-industry-seo', permanent: true },
    { from: '/guides/high-competition-search-intent', to: '/resources/industry-insights/competitive-industry-seo', permanent: true },
    { from: '/resources/guides/ymyl-financial-trading-seo', to: '/resources/industry-insights/financial-website-seo', permanent: true },
    { from: '/guides/ymyl-financial-trading-seo', to: '/resources/industry-insights/financial-website-seo', permanent: true }
  );

  return aliases;
}

export function findRouteByPath(rawPath: string): AppRoute | undefined {
  const normalized = normalizePath(rawPath);
  return Object.values(APP_ROUTES).find(
    (r) => r.path === normalized || r.canonical === normalized
  );
}
