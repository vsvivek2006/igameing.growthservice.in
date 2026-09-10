/**
 * Schema.org Structured Data Generators
 * Generates verified JSON-LD graphs for Organization, WebSite, BreadcrumbList, and Service.
 */

import { businessConfig } from '../config/business';
import { getCanonicalUrl } from './canonical';
import { ServiceOffering } from '../data/servicesData';

export function buildOrganizationSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${businessConfig.canonicalOrigin}/#organization`,
    name: businessConfig.name,
    legalName: businessConfig.legalName,
    url: businessConfig.canonicalOrigin,
    logo: `${businessConfig.canonicalOrigin}/logo.webp`,
    description: businessConfig.description,
    email: businessConfig.emails.primary,
    address: {
      '@type': 'PostalAddress',
      addressCountry: businessConfig.address.countryCode,
      addressLocality: businessConfig.address.city,
    },
    sameAs: [
      businessConfig.social.twitter,
      businessConfig.social.telegram,
      businessConfig.social.linkedin,
      businessConfig.social.youtube,
      businessConfig.social.instagram,
    ].filter(Boolean),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: businessConfig.ratings.average,
      reviewCount: businessConfig.ratings.reviewCount,
      bestRating: 5,
    },
  };
}

export function buildWebSiteSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${businessConfig.canonicalOrigin}/#website`,
    url: businessConfig.canonicalOrigin,
    name: businessConfig.name,
    description: businessConfig.tagline,
    publisher: {
      '@id': `${businessConfig.canonicalOrigin}/#organization`,
    },
  };
}

export function buildBreadcrumbSchema(
  items: Array<{ label: string; path?: string }>
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: getCanonicalUrl('/'),
      },
      ...items.map((item, idx) => ({
        '@type': 'ListItem',
        position: idx + 2,
        name: item.label,
        ...(item.path ? { item: getCanonicalUrl(item.path) } : {}),
      })),
    ],
  };
}

export function buildServiceSchema(service: ServiceOffering): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@id': `${businessConfig.canonicalOrigin}/#organization`,
    },
    url: getCanonicalUrl(`/services/${service.slug}`),
    areaServed: 'Global',
  };
}

export function buildFAQSchema(
  faqs: readonly { question: string; answer: string }[]
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };
}
