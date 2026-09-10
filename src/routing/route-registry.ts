/**
 * Authoritative Route Registry — iGaming Growth B2B Agency
 * Central repository for all static canonical routes, priorities, change frequencies, and aliases.
 */

import { AppRoute, RouteAlias } from './route-types';
import { normalizePath } from './route-normalization';

export const APP_ROUTES: Record<string, AppRoute> = {
  // Primary Pages
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

  // Services Hub
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

  // Industries Hub
  industries: {
    path: '/industries',
    canonical: '/industries',
    label: 'Industries We Serve',
    category: 'industries',
    includeInSitemap: true,
    priority: 0.9,
    changefreq: 'monthly',
    aliases: ['/verticals', '/who-we-serve'],
    kind: 'static',
  },

  // Case Studies / Results
  caseStudies: {
    path: '/case-studies',
    canonical: '/case-studies',
    label: 'Case Studies & Results',
    category: 'primary',
    includeInSitemap: true,
    priority: 0.9,
    changefreq: 'monthly',
    aliases: ['/results', '/portfolio', '/work'],
    kind: 'static',
  },

  // Resources / Blog
  blog: {
    path: '/blog',
    canonical: '/blog',
    label: 'iGaming Marketing Blog',
    category: 'resources',
    includeInSitemap: true,
    priority: 0.8,
    changefreq: 'weekly',
    aliases: ['/articles', '/insights'],
    kind: 'static',
  },

  resources: {
    path: '/resources',
    canonical: '/resources',
    label: 'Marketing Guides & Resources',
    category: 'resources',
    includeInSitemap: true,
    priority: 0.7,
    changefreq: 'monthly',
    aliases: ['/guides'],
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
    aliases: ['/seo-audit', '/audit'],
    kind: 'static',
  },

  faq: {
    path: '/faq',
    canonical: '/faq',
    label: 'FAQ',
    category: 'resources',
    includeInSitemap: true,
    priority: 0.6,
    changefreq: 'monthly',
    aliases: ['/faqs', '/help'],
    kind: 'static',
  },

  // Contact & CTA
  contact: {
    path: '/contact',
    canonical: '/contact',
    label: 'Get a Proposal',
    category: 'primary',
    includeInSitemap: true,
    priority: 0.9,
    changefreq: 'monthly',
    aliases: ['/get-proposal', '/get-a-quote', '/hire-us'],
    kind: 'static',
  },

  // Company
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

  // Legal & Compliance
  editorialPolicy: {
    path: '/editorial-policy',
    canonical: '/editorial-policy',
    label: 'Editorial Standards',
    category: 'compliance',
    includeInSitemap: true,
    priority: 0.5,
    changefreq: 'yearly',
    kind: 'static',
  },
  terms: {
    path: '/terms',
    canonical: '/terms',
    label: 'Terms of Service',
    category: 'legal',
    includeInSitemap: true,
    priority: 0.4,
    changefreq: 'yearly',
    kind: 'static',
  },
  privacy: {
    path: '/privacy',
    canonical: '/privacy',
    label: 'Privacy Policy',
    category: 'legal',
    includeInSitemap: true,
    priority: 0.4,
    changefreq: 'yearly',
    kind: 'static',
  },
};

export function getSitemapRoutes(): AppRoute[] {
  return Object.values(APP_ROUTES).filter((r) => r.includeInSitemap);
}

export function getRouteAliases(): RouteAlias[] {
  const aliases: RouteAlias[] = [];
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
  return aliases;
}

export function findRouteByPath(rawPath: string): AppRoute | undefined {
  const normalized = normalizePath(rawPath);
  return Object.values(APP_ROUTES).find(
    (r) => r.path === normalized || r.canonical === normalized
  );
}
