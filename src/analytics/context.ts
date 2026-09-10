/**
 * Page Context & Campaign Attribution — iGaming Growth Analytics
 * 
 * Automatically resolves page classification from pathname and captures
 * campaign parameters (UTMs, referrer) without polluting canonical URLs.
 */

import { PageContext, PageType, CampaignData } from './types';

const STORAGE_KEY_CAMPAIGN = 'igy_campaign_attribution_v1';

/**
 * Resolves standard page metadata from any URL path.
 */
export const resolvePageContext = (pathname: string): PageContext => {
  const cleanPath = pathname.replace(/\/$/, '') || '/';

  // 1. Home
  if (cleanPath === '/') {
    return { page_type: 'home', page_path: '/' };
  }

  // 2. Services
  if (cleanPath === '/services') {
    return { page_type: 'resource', page_path: cleanPath, content_category: 'services_hub' };
  }
  if (cleanPath.startsWith('/services/')) {
    const serviceSlug = cleanPath.split('/')[2];
    return {
      page_type: 'service',
      page_path: cleanPath,
      service_slug: serviceSlug,
      content_category: 'service_detail',
    };
  }

  // 3. Industries & Industry x Service
  if (cleanPath === '/industries') {
    return { page_type: 'resource', page_path: cleanPath, content_category: 'industries_hub' };
  }
  if (cleanPath.startsWith('/industries/')) {
    const parts = cleanPath.split('/');
    if (parts.length === 3) {
      // e.g. /industries/gaming
      return {
        page_type: 'industry',
        page_path: cleanPath,
        industry_slug: parts[2],
        content_category: 'industry_pillar',
      };
    }
    if (parts.length === 4) {
      // e.g. /industries/gaming/seo
      return {
        page_type: 'industry_service',
        page_path: cleanPath,
        industry_slug: parts[2],
        service_slug: parts[3],
        content_category: 'industry_service_matrix',
      };
    }
  }

  // 4. Resources & Guides
  if (cleanPath === '/resources') {
    return { page_type: 'resource', page_path: cleanPath, content_category: 'resources_hub' };
  }
  if (cleanPath.startsWith('/resources/seo-guides/')) {
    return {
      page_type: 'guide',
      page_path: cleanPath,
      content_category: 'seo_guide',
    };
  }
  if (cleanPath.startsWith('/resources/industry-insights/')) {
    return {
      page_type: 'guide',
      page_path: cleanPath,
      content_category: 'industry_insight',
    };
  }

  // 5. Core Conversion & Company Pages
  if (cleanPath === '/free-seo-audit') {
    return { page_type: 'company', page_path: cleanPath, content_category: 'conversion_funnel' };
  }
  if (cleanPath === '/book-call') {
    return { page_type: 'company', page_path: cleanPath, content_category: 'conversion_funnel' };
  }
  if (cleanPath === '/contact') {
    return { page_type: 'company', page_path: cleanPath, content_category: 'conversion_funnel' };
  }
  if (cleanPath === '/about') {
    return { page_type: 'company', page_path: cleanPath, content_category: 'about_agency' };
  }

  // 6. Utility & Legal
  if (['/privacy', '/terms', '/editorial-policy'].includes(cleanPath)) {
    return { page_type: 'utility', page_path: cleanPath, content_category: 'legal' };
  }

  return { page_type: 'not_found' as PageType, page_path: cleanPath };
};

/**
 * Parses query parameters and referrer on initial session landing.
 */
export const captureCampaignAttribution = (): CampaignData => {
  if (typeof window === 'undefined') {
    return {};
  }

  try {
    // Check existing stored campaign to maintain first-touch attribution
    const existing = sessionStorage.getItem(STORAGE_KEY_CAMPAIGN);
    if (existing) {
      return JSON.parse(existing) as CampaignData;
    }

    const params = new URLSearchParams(window.location.search);
    const utm_source = params.get('utm_source') ?? undefined;
    const utm_medium = params.get('utm_medium') ?? undefined;
    const utm_campaign = params.get('utm_campaign') ?? undefined;
    const utm_content = params.get('utm_content') ?? undefined;
    const utm_term = params.get('utm_term') ?? undefined;
    const referrer = document.referrer ? new URL(document.referrer).hostname : undefined;
    const landing_page = window.location.pathname;

    const data: CampaignData = {
      utm_source: utm_source || (referrer ? 'referral' : 'direct'),
      utm_medium: utm_medium || (referrer ? 'referral' : 'none'),
      utm_campaign,
      utm_content,
      utm_term,
      referrer,
      landing_page,
      initial_timestamp: Date.now(),
    };

    sessionStorage.setItem(STORAGE_KEY_CAMPAIGN, JSON.stringify(data));
    return data;
  } catch {
    return {};
  }
};

/**
 * Retrieves the current session campaign attribution data.
 */
export const getStoredCampaignData = (): CampaignData => {
  if (typeof window === 'undefined') return {};
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY_CAMPAIGN);
    return raw ? (JSON.parse(raw) as CampaignData) : {};
  } catch {
    return {};
  }
};
