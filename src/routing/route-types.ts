/**
 * iGaming Growth Routing System Types
 * Establishes strongly typed definitions for routes, categories, aliases, and resolution outcomes.
 */

export type RouteCategory =
  | 'primary'
  | 'services'
  | 'industries'
  | 'resources'
  | 'compliance'
  | 'legal';

export type RouteKind =
  | 'static'
  | 'dynamic-service'
  | 'dynamic-industry'
  | 'dynamic-service-industry'
  | 'dynamic-game'
  | 'dynamic-guide'
  | 'dynamic-review'
  | 'dynamic-payment'
  | 'alias'
  | 'not-found';

export interface AppRoute {
  path: string;
  canonical: string;
  label: string;
  category: RouteCategory;
  includeInSitemap: boolean;
  priority?: number;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  aliases?: string[];
  kind?: RouteKind;
}

export interface RouteAlias {
  from: string;
  to: string;
  permanent: boolean;
}

export interface RouteResolutionSuccess {
  status: 200;
  kind: RouteKind;
  canonical: string;
  params?: Record<string, string>;
  label?: string;
  entityId?: string;
}

export interface RouteResolutionRedirect {
  status: 301;
  kind: 'alias';
  canonical: string;
  from: string;
  to: string;
  permanent: boolean;
}

export interface RouteResolutionNotFound {
  status: 404;
  kind: 'not-found';
  reason: string;
}

export type RouteResolution =
  | RouteResolutionSuccess
  | RouteResolutionRedirect
  | RouteResolutionNotFound;

export interface BreadcrumbItem {
  label: string;
  path?: string;
  current?: boolean;
}
