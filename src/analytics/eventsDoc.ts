/**
 * Analytics Data Contract & Event Dictionary — iGaming Growth
 * 
 * Defines trigger conditions, required/optional parameters, and
 * reporting rationale for every tracked event in the taxonomy.
 */

export interface EventDefinition {
  readonly eventName: string;
  readonly whenFired: string;
  readonly requiredParameters: readonly string[];
  readonly optionalParameters: readonly string[];
  readonly validPageTypes: readonly string[];
  readonly primaryPurpose: string;
}

export const ANALYTICS_EVENT_DICTIONARY: readonly EventDefinition[] = [
  {
    eventName: 'page_view',
    whenFired: 'Fires on initial landing and every client-side React Router transition.',
    requiredParameters: ['page_path', 'page_type'],
    optionalParameters: ['service_slug', 'industry_slug', 'content_category', 'page_title', 'utm_source'],
    validPageTypes: ['all'],
    primaryPurpose: 'Measures traffic volume, entrance paths, and route transitions across all 50 pages.',
  },
  {
    eventName: 'cta_click',
    whenFired: 'Fires when a visitor clicks any primary or secondary call-to-action button or card link.',
    requiredParameters: ['cta_name', 'cta_location', 'page_path'],
    optionalParameters: ['destination_url', 'service_slug', 'industry_slug'],
    validPageTypes: ['home', 'service', 'industry', 'industry_service', 'guide', 'resource', 'company'],
    primaryPurpose: 'Evaluates CTA effectiveness across different page zones (hero vs bento vs footer).',
  },
  {
    eventName: 'form_view',
    whenFired: 'Fires when a lead generation form renders on screen.',
    requiredParameters: ['form_type', 'page_path'],
    optionalParameters: ['vertical'],
    validPageTypes: ['company'],
    primaryPurpose: 'Top-of-funnel conversion benchmark for form abandonment analysis.',
  },
  {
    eventName: 'form_start',
    whenFired: 'Fires on the first user input focus or change inside a form.',
    requiredParameters: ['form_type', 'page_path'],
    optionalParameters: ['field_name'],
    validPageTypes: ['company'],
    primaryPurpose: 'Identifies the drop-off rate between seeing a form and beginning interaction.',
  },
  {
    eventName: 'form_error',
    whenFired: 'Fires when form client validation fails on submit attempt.',
    requiredParameters: ['form_type', 'error_type', 'page_path'],
    optionalParameters: ['field_name'],
    validPageTypes: ['company'],
    primaryPurpose: 'Surfaces UX friction and input validation roadblocks without exposing PII.',
  },
  {
    eventName: 'generate_lead',
    whenFired: 'Fires strictly after client-side form submission succeeds.',
    requiredParameters: ['form_type', 'page_path'],
    optionalParameters: ['vertical', 'market', 'utm_source', 'utm_medium', 'utm_campaign'],
    validPageTypes: ['company'],
    primaryPurpose: 'Primary business conversion metric for qualified client acquisition.',
  },
  {
    eventName: 'select_content',
    whenFired: 'Fires when interacting with tabs, accordions, or filter categories.',
    requiredParameters: ['content_type', 'item_id'],
    optionalParameters: ['category'],
    validPageTypes: ['all'],
    primaryPurpose: 'Measures content engagement and FAQ expansion behaviors.',
  },
  {
    eventName: 'guide_toc_click',
    whenFired: 'Fires when a reader clicks an item in a technical guide Table of Contents.',
    requiredParameters: ['toc_id', 'guide_slug'],
    optionalParameters: ['heading_text'],
    validPageTypes: ['guide'],
    primaryPurpose: 'Tracks which technical sections readers jump to in long-form guides.',
  },
  {
    eventName: 'error_captured',
    whenFired: 'Fires when React Error Boundary catches a runtime exception.',
    requiredParameters: ['error_message', 'page_path'],
    optionalParameters: ['component', 'error_stack'],
    validPageTypes: ['all'],
    primaryPurpose: 'Production runtime error observability and telemetry health monitoring.',
  },
];
