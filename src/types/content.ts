/**
 * Content Domain Model — iGaming Growth B2B Agency
 * Strict TypeScript entity definitions for the Operating System.
 */

export type ServiceCategory =
  | 'seo'
  | 'web-development'
  | 'paid-acquisition'
  | 'conversion-analytics';

export interface ServiceProcessStep {
  readonly step: number;
  readonly title: string;
  readonly description: string;
}

export interface ServiceOffering {
  readonly slug: string;
  readonly name: string;
  readonly shortName: string;
  readonly tagline: string;
  readonly shortDescription: string;
  readonly longDescription: string;
  readonly category: ServiceCategory;
  readonly parentSlug?: string;
  readonly icon: string;
  readonly color: string;
  readonly featured: boolean;
  readonly problemStatement: string;
  readonly approach: string;
  readonly benefits: readonly string[];
  readonly features: readonly string[];
  readonly deliverables: readonly string[];
  readonly process: readonly ServiceProcessStep[];
  readonly idealFor: readonly string[];
  readonly notFor: readonly string[];
  readonly faqs: readonly { readonly q: string; readonly a: string }[];
  readonly seo: {
    readonly title: string;
    readonly description: string;
  };
}

export type IndustryCategory = 'gaming' | 'finance' | 'adult' | 'gaming-skill';

export interface IndustrySEOChallenge {
  readonly title: string;
  readonly description: string;
}

export interface IndustryFAQ {
  readonly q: string;
  readonly a: string;
}

export interface IndustryVertical {
  readonly slug: string;
  readonly name: string;
  readonly shortName: string;
  readonly category: IndustryCategory;
  readonly tagline: string;
  readonly overview: string;
  readonly competitionCharacteristics: string;
  readonly seoChallenges: readonly IndustrySEOChallenge[];
  readonly technicalRequirements: readonly string[];
  readonly contentConsiderations: readonly string[];
  readonly complianceConsiderations: readonly string[];
  readonly conversionConsiderations: readonly string[];
  readonly recommendedServices: readonly string[];
  readonly faqs: readonly IndustryFAQ[];
  readonly seo: {
    readonly title: string;
    readonly description: string;
  };
}

export interface ServiceIndustryMatrixEntry {
  readonly industrySlug: string;
  readonly serviceSlug: string;
  readonly enabled: boolean;
  readonly priority: number;
  readonly indexable: boolean;
  readonly searchIntent: string;
  readonly specificChallenges: readonly {
    readonly title: string;
    readonly description: string;
  }[];
  readonly specificApproach: string;
  readonly specificDeliverables: readonly string[];
  readonly specificFAQs: readonly {
    readonly q: string;
    readonly a: string;
  }[];
  readonly uniqueValue: string;
  readonly conversionFocus: string;
  readonly estimatedTimelineWeeks: string;
}

export interface CaseStudy {
  readonly slug: string;
  readonly industry: string;
  readonly challenge: string;
  readonly approach: string;
  readonly services: readonly string[];
  readonly featured?: boolean;
}

export interface FAQItem {
  readonly q: string;
  readonly a: string;
  readonly category?: string;
}

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

export type PageType =
  | 'home'
  | 'service-index'
  | 'service-detail'
  | 'industry-index'
  | 'industry-detail'
  | 'service-industry'
  | 'case-study-index'
  | 'resource-index'
  | 'blog-index'
  | 'about'
  | 'contact'
  | 'audit'
  | 'book-call'
  | 'faq'
  | 'legal';

export interface PageDefinition {
  readonly id: string;
  readonly type: PageType;
  readonly path: string;
  readonly canonical: string;
  readonly title: string;
  readonly description: string;
  readonly indexable: boolean;
  readonly includeInSitemap: boolean;
  readonly priority: number;
  readonly changefreq: 'daily' | 'weekly' | 'monthly';
  readonly breadcrumbs: readonly BreadcrumbItem[];
  readonly relatedServices?: readonly string[];
  readonly relatedIndustries?: readonly string[];
}
