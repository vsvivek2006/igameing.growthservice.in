/**
 * Internal Link Graph Resolver — iGaming Growth Content OS
 * 
 * Provides entity-based cross-linking logic to maintain coherent topical clusters,
 * distribute PageRank, and eliminate orphan pages.
 */

import { getServiceBySlug, getAllServices } from '../data/servicesData';
import { getIndustryBySlug, getAllIndustries } from '../data/industriesData';
import { getServicesForIndustry, getIndustriesForService } from '../data/industryServiceMatrix';

export interface InternalLinkItem {
  readonly title: string;
  readonly path: string;
  readonly description?: string;
  readonly badge?: string;
}

/**
 * Resolves contextually relevant industries for a given service.
 */
export const getRelatedIndustriesForService = (serviceSlug: string): readonly InternalLinkItem[] => {
  const activeIndustrySlugs = getIndustriesForService(serviceSlug);
  const srv = getServiceBySlug(serviceSlug);
  const serviceName = srv ? srv.name : 'Digital Services';
  
  if (activeIndustrySlugs.length > 0) {
    return activeIndustrySlugs
      .map((slug) => {
        const ind = getIndustryBySlug(slug);
        if (!ind) return null;
        return {
          title: `${serviceName} for ${ind.name}`,
          path: `/industries/${ind.slug}/${serviceSlug}`,
          description: ind.tagline,
          badge: ind.shortName,
        };
      })
      .filter((item): item is InternalLinkItem => item !== null);
  }

  // Fallback to top general industries
  return getAllIndustries()
    .slice(0, 4)
    .map((ind) => ({
      title: ind.name,
      path: `/industries/${ind.slug}`,
      description: ind.tagline,
      badge: ind.shortName,
    }));
};

/**
 * Resolves contextually relevant services for a given industry.
 */
export const getRelatedServicesForIndustry = (industrySlug: string): readonly InternalLinkItem[] => {
  const activeServiceSlugs = getServicesForIndustry(industrySlug);
  const ind = getIndustryBySlug(industrySlug);
  const industryName = ind ? ind.name : 'Gaming Operators';

  if (activeServiceSlugs.length > 0) {
    return activeServiceSlugs
      .map((slug) => {
        const srv = getServiceBySlug(slug);
        if (!srv) return null;
        return {
          title: `${srv.name} for ${industryName}`,
          path: `/industries/${industrySlug}/${srv.slug}`,
          description: srv.tagline,
          badge: srv.shortName,
        };
      })
      .filter((item): item is InternalLinkItem => item !== null);
  }

  // Fallback to recommended services from industry definition
  const industry = getIndustryBySlug(industrySlug);
  if (industry && industry.recommendedServices.length > 0) {
    return industry.recommendedServices
      .map((slug) => {
        const srv = getServiceBySlug(slug);
        if (!srv) return null;
        return {
          title: srv.name,
          path: `/services/${srv.slug}`,
          description: srv.shortDescription,
          badge: srv.shortName,
        };
      })
      .filter((item): item is InternalLinkItem => item !== null);
  }

  return getAllServices()
    .slice(0, 4)
    .map((srv) => ({
      title: srv.name,
      path: `/services/${srv.slug}`,
      description: srv.shortDescription,
      badge: srv.shortName,
    }));
};

/**
 * Resolves cross-links for a Service × Industry page.
 */
export const getRelatedMatrixCrossLinks = (
  industrySlug: string,
  currentServiceSlug: string
): {
  readonly parentIndustryLink: InternalLinkItem;
  readonly parentServiceLink: InternalLinkItem;
  readonly siblingServiceLinks: readonly InternalLinkItem[];
} => {
  const industry = getIndustryBySlug(industrySlug);
  const service = getServiceBySlug(currentServiceSlug);

  const parentIndustryLink: InternalLinkItem = {
    title: industry ? industry.name : 'Industry Hub',
    path: `/industries/${industrySlug}`,
    description: industry?.tagline,
  };

  const parentServiceLink: InternalLinkItem = {
    title: service ? service.name : 'Service Hub',
    path: `/services/${currentServiceSlug}`,
    description: service?.tagline,
  };

  const otherServicesInIndustry = getServicesForIndustry(industrySlug).filter(
    (slug) => slug !== currentServiceSlug
  );

  const siblingServiceLinks = otherServicesInIndustry
    .map((slug) => {
      const srv = getServiceBySlug(slug);
      if (!srv) return null;
      return {
        title: `${srv.name} Solutions`,
        path: `/industries/${industrySlug}/${srv.slug}`,
        description: srv.shortDescription,
        badge: srv.shortName,
      };
    })
    .filter((item): item is InternalLinkItem => item !== null);

  return {
    parentIndustryLink,
    parentServiceLink,
    siblingServiceLinks,
  };
};
