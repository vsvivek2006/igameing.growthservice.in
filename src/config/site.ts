/**
 * iGaming Growth Agency Site Configuration Facade
 * Clean application-level facade over business config, navigation, routes, and agency data.
 */

import { businessConfig, BusinessConfigSchema } from './business';
import { navigationConfig } from './navigation';
import { APP_ROUTES, AppRoute } from './routes';
import {
  servicesData,
  caseStudies,
  industryVerticals,
  ServiceOffering,
  CaseStudy,
  IndustryVertical,
} from '../data/servicesData';
import * as selectors from '../selectors';

export interface SiteConfigSchema {
  readonly business: BusinessConfigSchema;
  readonly navigation: typeof navigationConfig;
  readonly routes: Record<string, AppRoute>;
  readonly services: readonly ServiceOffering[];
  readonly caseStudies: readonly CaseStudy[];
  readonly industries: readonly IndustryVertical[];
}

export const siteConfig: SiteConfigSchema = {
  business: businessConfig,
  navigation: navigationConfig,
  routes: APP_ROUTES,
  services: servicesData,
  caseStudies,
  industries: industryVerticals,
} as const;

export {
  businessConfig,
  navigationConfig,
  APP_ROUTES,
  servicesData,
  caseStudies,
  industryVerticals,
  selectors,
};

export * from '../selectors';

export default siteConfig;
