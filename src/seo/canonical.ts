/**
 * Canonical URL Generator & Sanitizer
 * Guarantees all canonical tags resolve strictly under https://igameing.growthservice.in
 */

import { SEO_CONFIG } from './seo-config';
import { normalizePath } from '../routing/route-normalization';

export function getCanonicalUrl(path: string, customOrigin?: string): string {
  const origin = (customOrigin || SEO_CONFIG.canonicalOrigin).replace(/\/+$/, '');
  const normalized = normalizePath(path);

  if (normalized === '/') {
    return `${origin}/`;
  }
  return `${origin}${normalized}`;
}
