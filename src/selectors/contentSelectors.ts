/**
 * Agency Content Selectors
 * Thin accessor layer over servicesData for the B2B agency site.
 */

import {
  servicesData,
  caseStudies,
  industryVerticals,
  ServiceOffering,
  CaseStudy,
  IndustryVertical,
  getFeaturedServices,
  getAllServices,
  getServiceBySlug,
  getFeaturedCaseStudies,
  getAllIndustryVerticals,
} from '../data/servicesData';

// Re-export for direct usage
export {
  getFeaturedServices,
  getAllServices,
  getServiceBySlug,
  getFeaturedCaseStudies,
  getAllIndustryVerticals,
  ServiceOffering,
  CaseStudy,
  IndustryVertical,
};

export function getAllCaseStudies(): readonly CaseStudy[] {
  return caseStudies;
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function getIndustryBySlug(slug: string): IndustryVertical | undefined {
  return industryVerticals.find((v) => v.slug === slug);
}

export function getServicesByColor(color: ServiceOffering['color']): readonly ServiceOffering[] {
  return servicesData.filter((s) => s.color === color);
}
