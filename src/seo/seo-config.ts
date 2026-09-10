/**
 * Central SEO Configuration
 * Strictly bound to https://igameing.growthservice.in
 */

import { businessConfig } from '../config/business';
import { TitleTemplateOptions } from './seo-types';

export const SEO_CONFIG = {
  canonicalOrigin: businessConfig.canonicalOrigin,
  siteName: businessConfig.name,
  tagline: businessConfig.tagline,
  defaultDescription: businessConfig.description,
  defaultTitle: `${businessConfig.name} | ${businessConfig.tagline}`,
  defaultOgImage: `${businessConfig.canonicalOrigin}/logo.webp`,
  themeColor: businessConfig.themeColor || '#6A0DAD',
  robots: {
    indexFollow: 'index, follow' as const,
    noindexNofollow: 'noindex, nofollow' as const,
    noindexFollow: 'noindex, follow' as const,
  },
} as const;

export function formatPageTitle(pageTitle: string, options?: TitleTemplateOptions): string {
  const cleanTitle = pageTitle.trim();
  if (!cleanTitle) return SEO_CONFIG.defaultTitle;

  const brand = SEO_CONFIG.siteName;
  const separator = options?.separator || '|';

  if (cleanTitle.toLowerCase().includes(brand.toLowerCase())) {
    return cleanTitle;
  }

  if (options?.brandSuffix === false) {
    return cleanTitle;
  }

  return `${cleanTitle} ${separator} ${brand}`;
}
