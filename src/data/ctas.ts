import { CTADefinition } from '../types/content';

export const CTAS: Record<string, CTADefinition> = {
  FREE_SEO_AUDIT: {
    id: 'free-seo-audit',
    label: 'Get Free SEO Audit',
    href: '/free-seo-audit',
    variant: 'amber',
    trackingKey: 'cta_free_seo_audit',
  },
  BOOK_STRATEGY_CALL: {
    id: 'book-strategy-call',
    label: 'Book a Strategy Call',
    href: '/contact?type=call',
    variant: 'primary',
    trackingKey: 'cta_book_call',
  },
  GET_PROPOSAL: {
    id: 'get-proposal',
    label: 'Request Proposal',
    href: '/contact',
    variant: 'primary',
    trackingKey: 'cta_get_proposal',
  },
  EXPLORE_SERVICES: {
    id: 'explore-services',
    label: 'Explore All Services',
    href: '/services',
    variant: 'secondary',
    trackingKey: 'cta_explore_services',
  },
  EXPLORE_INDUSTRIES: {
    id: 'explore-industries',
    label: 'Explore Industries',
    href: '/industries',
    variant: 'secondary',
    trackingKey: 'cta_explore_industries',
  },
};
