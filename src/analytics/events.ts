/**
 * Analytics Event Constants & Helper Definitions — iGaming Growth
 * 
 * Provides typed constants for all standard events, CTA locations,
 * and conversion names to ensure consistency across components.
 */

export const ANALYTICS_EVENTS = {
  // Business events
  PAGE_VIEW: 'page_view',
  CTA_CLICK: 'cta_click',
  GENERATE_LEAD: 'generate_lead',
  FORM_VIEW: 'form_view',
  FORM_START: 'form_start',
  FORM_SUBMIT: 'form_submit',
  FORM_ERROR: 'form_error',

  // Navigation & Content
  SELECT_CONTENT: 'select_content',
  NAVIGATION_CLICK: 'navigation_click',
  EXTERNAL_LINK_CLICK: 'external_link_click',

  // Observability
  ERROR_CAPTURED: 'error_captured',
  ROUTE_NOT_FOUND: 'route_not_found',
} as const;

export const CTA_LOCATIONS = {
  HERO: 'hero',
  HEADER: 'header',
  MID_PAGE: 'mid_page',
  BENTO: 'bento',
  SERVICE_CARD: 'service_card',
  INDUSTRY_CARD: 'industry_card',
  GUIDE_BANNER: 'guide_banner',
  FOOTER: 'footer',
  SIDEBAR: 'sidebar',
  MODAL: 'modal',
} as const;

export const FORM_TYPES = {
  FREE_SEO_AUDIT: 'free_seo_audit',
  CONTACT_PROPOSAL: 'contact_proposal',
  BOOK_CALL: 'book_call',
} as const;
