/**
 * SEO Metadata Factory — iGaming Growth Content OS
 * 
 * Generates natural, intent-driven SEO titles, meta descriptions, OpenGraph tags,
 * and canonical URLs from structured entity data.
 */

import { ServiceOffering, IndustryVertical, ServiceIndustryMatrixEntry } from '../types/content';
import { getCanonicalUrl } from './canonical';

export interface GeneratedSEOMetadata {
  readonly title: string;
  readonly description: string;
  readonly canonical: string;
  readonly robots: string;
  readonly ogTitle: string;
  readonly ogDescription: string;
  readonly ogType: 'website' | 'article';
  readonly ogUrl: string;
}

const BRAND_SUFFIX = 'iGaming Growth';

/**
 * Metadata for Service Detail pages
 */
export const getServiceSEO = (service: ServiceOffering): GeneratedSEOMetadata => {
  const title = service.seo.title.includes(BRAND_SUFFIX)
    ? service.seo.title
    : `${service.seo.title} — ${BRAND_SUFFIX}`;
  const canonical = getCanonicalUrl(`/services/${service.slug}`);

  return {
    title,
    description: service.seo.description,
    canonical,
    robots: 'index, follow',
    ogTitle: title,
    ogDescription: service.seo.description,
    ogType: 'website',
    ogUrl: canonical,
  };
};

/**
 * Metadata for Industry Detail pages
 */
export const getIndustrySEO = (industry: IndustryVertical): GeneratedSEOMetadata => {
  const title = industry.seo.title.includes(BRAND_SUFFIX)
    ? industry.seo.title
    : `${industry.seo.title} — ${BRAND_SUFFIX}`;
  const canonical = getCanonicalUrl(`/industries/${industry.slug}`);

  return {
    title,
    description: industry.seo.description,
    canonical,
    robots: 'index, follow',
    ogTitle: title,
    ogDescription: industry.seo.description,
    ogType: 'website',
    ogUrl: canonical,
  };
};

/**
 * Metadata for Service × Industry composite pages
 * Title rule: [Service Name] for [Industry Name]: [Value Proposition] — iGaming Growth
 */
export const getServiceIndustrySEO = (
  industry: IndustryVertical,
  service: ServiceOffering,
  matrix: ServiceIndustryMatrixEntry
): GeneratedSEOMetadata => {
  const rawTitle = `${service.shortName} for ${industry.name}: ${matrix.uniqueValue.split('.')[0]}`;
  const truncatedTitle = rawTitle.length > 55 ? `${rawTitle.slice(0, 52)}...` : rawTitle;
  const title = `${truncatedTitle} — ${BRAND_SUFFIX}`;

  const description = `${service.name} tailored for ${industry.name}. ${matrix.conversionFocus} ${matrix.specificApproach.slice(0, 80)}...`;
  const canonical = getCanonicalUrl(`/industries/${industry.slug}/${service.slug}`);
  const robots = matrix.indexable ? 'index, follow' : 'noindex, follow';

  return {
    title,
    description,
    canonical,
    robots,
    ogTitle: title,
    ogDescription: description,
    ogType: 'website',
    ogUrl: canonical,
  };
};
