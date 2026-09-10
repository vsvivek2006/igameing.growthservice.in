/**
 * Content Domain Model Types — iGaming Growth B2B Agency
 * Authoritative type re-exports from canonical single-source-of-truth data modules.
 */

// Authoritative Services Types
export type {
  ServiceOffering,
  ServiceCategory,
  ServiceColor,
  FAQItem,
} from '../data/servicesData';

// Authoritative Industries Types
export type {
  IndustryVertical,
  IndustrySEOChallenge,
  IndustryFAQ,
} from '../data/industriesData';

// Authoritative Industry × Service Matrix Types
export type {
  ServiceIndustryMatrixEntry,
} from '../data/industryServiceMatrix';

// Authoritative Page & Route Registry Types
export type {
  PageDefinition,
  PageType,
  PageCategory,
  SearchIntent,
} from '../data/pageRegistry';

// Authoritative Resource Guide Types
export type {
  GuidePost,
} from '../data/guidesData';

// Shared UI Contract Types
export interface CTADefinition {
  readonly id: string;
  readonly label: string;
  readonly href: string;
  readonly variant: 'primary' | 'secondary' | 'amber' | 'outline';
  readonly trackingKey: string;
}

export interface BreadcrumbItem {
  readonly label: string;
  readonly path?: string;
}
