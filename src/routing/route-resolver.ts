/**
 * iGaming Growth Route Resolver — Agency Operating System
 * Resolves application paths to 200 OK canonical routes, 301 alias redirects, or 404 errors.
 */

import { RouteResolution } from './route-types';
import { normalizePath } from './route-normalization';
import { APP_ROUTES, getRouteAliases } from './route-registry';
import { getServiceBySlug } from '../data/servicesData';
import { getIndustryBySlug } from '../data/industriesData';
import { getMatrixEntry } from '../data/industryServiceMatrix';
import { getGuideBySlug } from '../data/guidesData';

export function resolveRoute(rawPath: string): RouteResolution {
  const clean = normalizePath(rawPath);

  // 1. Registered Static Routes
  for (const route of Object.values(APP_ROUTES)) {
    if (route.canonical === clean || route.path === clean) {
      return {
        status: 200,
        kind: 'static',
        canonical: route.canonical,
        label: route.label,
      };
    }
  }

  // 2. Static Alias Redirects
  const aliases = getRouteAliases();
  for (const alias of aliases) {
    if (alias.from === clean) {
      return {
        status: 301,
        kind: 'alias',
        canonical: alias.to,
        from: alias.from,
        to: alias.to,
        permanent: alias.permanent,
      };
    }
  }

  // 3. Dynamic Service × Industry Composite (/industries/:industrySlug/:serviceSlug)
  const serviceIndustryMatch = clean.match(/^\/industries\/([^/]+)\/([^/]+)$/);
  if (serviceIndustryMatch) {
    const [, indSlug, srvSlug] = serviceIndustryMatch;
    const matrixEntry = getMatrixEntry(indSlug, srvSlug);
    if (matrixEntry && matrixEntry.enabled) {
      const industry = getIndustryBySlug(indSlug);
      const service = getServiceBySlug(srvSlug);
      return {
        status: 200,
        kind: 'dynamic-service-industry',
        canonical: `/industries/${indSlug}/${srvSlug}`,
        entityId: `${indSlug}-${srvSlug}`,
        label: `${service?.name || srvSlug} for ${industry?.name || indSlug}`,
        params: { industrySlug: indSlug, serviceSlug: srvSlug },
      };
    }
    return {
      status: 404,
      kind: 'not-found',
      reason: `Service x Industry combination "${indSlug}/${srvSlug}" not active or found`,
    };
  }

  // 4. Dynamic Industry Route (/industries/:industrySlug)
  const industryMatch = clean.match(/^\/industries\/([^/]+)$/);
  if (industryMatch) {
    const slug = industryMatch[1];
    const industry = getIndustryBySlug(slug);
    if (industry) {
      return {
        status: 200,
        kind: 'dynamic-industry',
        canonical: `/industries/${industry.slug}`,
        entityId: industry.slug,
        label: `${industry.name} Digital Growth & SEO`,
        params: { industrySlug: industry.slug },
      };
    }
    return {
      status: 404,
      kind: 'not-found',
      reason: `Industry vertical "${slug}" not found`,
    };
  }

  // 5. Dynamic Service Route (/services/:serviceSlug)
  const serviceMatch = clean.match(/^\/services\/([^/]+)$/);
  if (serviceMatch) {
    const slug = serviceMatch[1];
    const service = getServiceBySlug(slug);
    if (service) {
      return {
        status: 200,
        kind: 'dynamic-service',
        canonical: `/services/${service.slug}`,
        entityId: service.slug,
        label: `${service.name} Services`,
        params: { serviceSlug: service.slug },
      };
    }
    return {
      status: 404,
      kind: 'not-found',
      reason: `Service "${slug}" not found`,
    };
  }

  // 6. Dynamic SEO Guides (/resources/seo-guides/:guideSlug)
  const seoGuideMatch = clean.match(/^\/resources\/seo-guides\/([^/]+)$/);
  if (seoGuideMatch) {
    const slug = seoGuideMatch[1];
    const guide = getGuideBySlug(slug);
    if (guide && guide.category === 'seo-guide') {
      return {
        status: 200,
        kind: 'dynamic-guide',
        canonical: `/resources/seo-guides/${guide.slug}`,
        entityId: guide.slug,
        label: guide.title,
        params: { guideSlug: guide.slug },
      };
    }
    return {
      status: 404,
      kind: 'not-found',
      reason: `SEO Guide "${slug}" not found`,
    };
  }

  // 7. Dynamic Industry Insights (/resources/industry-insights/:insightSlug)
  const insightMatch = clean.match(/^\/resources\/industry-insights\/([^/]+)$/);
  if (insightMatch) {
    const slug = insightMatch[1];
    const guide = getGuideBySlug(slug);
    if (guide && guide.category === 'industry-insight') {
      return {
        status: 200,
        kind: 'dynamic-guide',
        canonical: `/resources/industry-insights/${guide.slug}`,
        entityId: guide.slug,
        label: guide.title,
        params: { guideSlug: guide.slug },
      };
    }
    return {
      status: 404,
      kind: 'not-found',
      reason: `Industry Insight "${slug}" not found`,
    };
  }

  // 8. Legacy Guide Paths (/resources/guides/:slug or /guides/:slug) -> 301 Redirect to canonical
  const legacyGuideMatch = clean.match(/^\/(?:resources\/guides|guides)\/([^/]+)$/);
  if (legacyGuideMatch) {
    const slug = legacyGuideMatch[1];
    const guide = getGuideBySlug(slug);
    if (guide) {
      const destPrefix = guide.category === 'industry-insight' ? '/resources/industry-insights' : '/resources/seo-guides';
      return {
        status: 301,
        kind: 'alias',
        canonical: `${destPrefix}/${guide.slug}`,
        from: clean,
        to: `${destPrefix}/${guide.slug}`,
        permanent: true,
      };
    }
    return {
      status: 404,
      kind: 'not-found',
      reason: `Legacy guide "${slug}" not found`,
    };
  }

  // 9. Unknown route
  return {
    status: 404,
    kind: 'not-found',
    reason: `Route "${clean}" not recognized`,
  };
}

export function isValidCanonicalRoute(path: string): boolean {
  return resolveRoute(path).status === 200;
}
