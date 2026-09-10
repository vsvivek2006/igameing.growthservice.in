/**
 * iGaming Growth Agency Site Configuration Facade
 * Thin application-level facade over authoritative business config, navigation, routes, and data.
 */

import { businessConfig, BusinessConfigSchema } from './business';
import { navigationConfig } from './navigation';
import { APP_ROUTES, AppRoute } from '../routing';
import { servicesData, ServiceOffering } from '../data/servicesData';
import { industriesData, IndustryVertical } from '../data/industriesData';
import { industryServiceMatrix, ServiceIndustryMatrixEntry } from '../data/industryServiceMatrix';
import { EXACT_50_PAGES, PageDefinition } from '../data/pageRegistry';
import { guidesData, GuidePost } from '../data/guidesData';

export interface SiteConfigSchema {
  readonly business: BusinessConfigSchema;
  readonly navigation: typeof navigationConfig;
  readonly routes: Record<string, AppRoute>;
  readonly services: readonly ServiceOffering[];
  readonly industries: readonly IndustryVertical[];
  readonly matrix: readonly ServiceIndustryMatrixEntry[];
  readonly pages: readonly PageDefinition[];
  readonly guides: readonly GuidePost[];
}

export const siteConfig: SiteConfigSchema = {
  business: businessConfig,
  navigation: navigationConfig,
  routes: APP_ROUTES,
  services: servicesData,
  industries: industriesData,
  matrix: industryServiceMatrix,
  pages: EXACT_50_PAGES,
  guides: guidesData,
} as const;

export {
  businessConfig,
  navigationConfig,
  APP_ROUTES,
  servicesData,
  industriesData,
  industryServiceMatrix,
};

export default siteConfig;
