/**
 * Route Path & URL Builders — iGaming Growth B2B Agency
 * Centralized typed generators for application paths and canonical absolute URLs.
 */

import { normalizePath } from './route-normalization';
import { businessConfig } from '../config/business';

export function buildHomePath(): string {
  return '/';
}

export function buildServicesHubPath(): string {
  return '/services';
}

export function buildServicePath(slug: string): string {
  const clean = slug.trim().toLowerCase().replace(/^\/+|\/+$/g, '');
  return `/services/${clean}`;
}

export function buildIndustriesHubPath(): string {
  return '/industries';
}

export function buildIndustryPath(slug: string): string {
  const clean = slug.trim().toLowerCase().replace(/^\/+|\/+$/g, '');
  return `/industries/${clean}`;
}

export function buildIndustryServicePath(industrySlug: string, serviceSlug: string): string {
  const cleanInd = industrySlug.trim().toLowerCase().replace(/^\/+|\/+$/g, '');
  const cleanSrv = serviceSlug.trim().toLowerCase().replace(/^\/+|\/+$/g, '');
  return `/industries/${cleanInd}/${cleanSrv}`;
}

export function buildResourcesHubPath(): string {
  return '/resources';
}

export function buildSeoGuidePath(slug: string): string {
  const clean = slug.trim().toLowerCase().replace(/^\/+|\/+$/g, '');
  return `/resources/seo-guides/${clean}`;
}

export function buildIndustryInsightPath(slug: string): string {
  const clean = slug.trim().toLowerCase().replace(/^\/+|\/+$/g, '');
  return `/resources/industry-insights/${clean}`;
}

export function buildAuditPath(): string {
  return '/free-seo-audit';
}

export function buildBookCallPath(): string {
  return '/book-call';
}

export function buildContactPath(): string {
  return '/contact';
}

export function buildAboutPath(): string {
  return '/about';
}

/**
 * Builds an absolute canonical URL using the authoritative domain origin.
 * Exclusively points to https://igameing.growthservice.in
 */
export function buildCanonicalUrl(path: string, customOrigin?: string): string {
  const origin = (customOrigin || businessConfig.canonicalOrigin).replace(/\/+$/, '');
  const normalized = normalizePath(path);

  if (normalized === '/') {
    return `${origin}/`;
  }
  return `${origin}${normalized}`;
}
