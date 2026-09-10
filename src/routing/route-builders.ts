/**
 * Route Path & URL Builders
 * Centralized typed generators for application paths and canonical absolute URLs.
 */

import { normalizePath } from './route-normalization';
import { businessConfig } from '../config/business';

export function buildHomePath(): string {
  return '/';
}

export function buildGamesHubPath(): string {
  return '/games';
}

export function buildGameCategoryPath(gameSlug: string): string {
  const clean = gameSlug.trim().toLowerCase().replace(/^\/+|\/+$/g, '');
  return `/games/${clean}`;
}

export function buildCasinoHubPath(): string {
  return '/casino';
}

export function buildCasinoGuidesHubPath(): string {
  return '/casino-guides';
}

export function buildGameGuidesHubPath(): string {
  return '/game-guides';
}

export function buildGuidePath(guideSlug: string, isGameGuide = false): string {
  const clean = guideSlug.trim().toLowerCase().replace(/^\/+|\/+$/g, '');
  return isGameGuide ? `/game-guides/${clean}` : `/casino-guides/${clean}`;
}

export function buildReviewsHubPath(): string {
  return '/reviews';
}

export function buildReviewPath(reviewSlug: string): string {
  const clean = reviewSlug.trim().toLowerCase().replace(/^\/+|\/+$/g, '');
  return `/reviews/${clean}`;
}

export function buildComparisonsHubPath(): string {
  return '/comparisons';
}

export function buildPaymentsHubPath(): string {
  return '/payment-methods';
}

export function buildPaymentMethodPath(methodSlug: string): string {
  const clean = methodSlug.trim().toLowerCase().replace(/^\/+|\/+$/g, '');
  return `/payment-methods/${clean}`;
}

export function buildResponsibleGamingPath(): string {
  return '/responsible-gaming';
}

export function buildRulesGlossaryPath(): string {
  return '/rules';
}

export function buildFAQPath(): string {
  return '/faq';
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
