/**
 * Analytics Event Taxonomy & Telemetry Contracts — iGaming Growth
 * 
 * Central controlled vocabulary for all user actions, conversions,
 * page states, and observability events.
 */

// ─── 1. Primary Business Events ───────────────────────────────────────────────
export type BusinessEventType =
  | 'page_view'
  | 'cta_click'
  | 'generate_lead'
  | 'form_view'
  | 'form_start'
  | 'form_submit'
  | 'form_error'
  | 'book_call_click'
  | 'audit_request'
  | 'contact_request';

// ─── 2. Content & Navigation Events ──────────────────────────────────────────
export type ContentEventType =
  | 'select_content'
  | 'resource_click'
  | 'service_click'
  | 'industry_click'
  | 'guide_click'
  | 'guide_toc_click'
  | 'navigation_click'
  | 'mobile_menu_open'
  | 'navigation_cta_click'
  | 'external_link_click'
  | 'search';

// ─── 3. Observability & Error Events ─────────────────────────────────────────
export type ObservabilityEventType =
  | 'error_captured'
  | 'route_not_found';

export type AnalyticsEventType =
  | BusinessEventType
  | ContentEventType
  | ObservabilityEventType;

// ─── Page Context Model ──────────────────────────────────────────────────────
export type PageType =
  | 'home'
  | 'service'
  | 'industry'
  | 'industry_service'
  | 'guide'
  | 'resource'
  | 'company'
  | 'utility'
  | 'not_found';

export interface PageContext {
  readonly page_type: PageType;
  readonly page_path: string;
  readonly page_title?: string;
  readonly service_slug?: string;
  readonly industry_slug?: string;
  readonly content_category?: string;
}

// ─── Campaign Attribution Data ───────────────────────────────────────────────
export interface CampaignData {
  readonly utm_source?: string;
  readonly utm_medium?: string;
  readonly utm_campaign?: string;
  readonly utm_content?: string;
  readonly utm_term?: string;
  readonly referrer?: string;
  readonly landing_page?: string;
  readonly initial_timestamp?: number;
}

// ─── CTA Payload Contract ────────────────────────────────────────────────────
export interface CtaPayload {
  readonly cta_name: string;
  readonly cta_location:
    | 'hero'
    | 'header'
    | 'mid_page'
    | 'bento'
    | 'service_card'
    | 'industry_card'
    | 'guide_banner'
    | 'footer'
    | 'sidebar'
    | 'modal';
  readonly destination_url?: string;
  readonly [key: string]: unknown;
}

// ─── Form Funnel Payload Contract ────────────────────────────────────────────
export interface FormPayload {
  readonly form_type: 'free_seo_audit' | 'contact_proposal' | 'book_call';
  readonly step?: number;
  readonly error_type?: string;
  readonly vertical?: string;
  readonly market?: string;
  readonly value?: number;
  readonly currency?: string;
  readonly [key: string]: unknown;
}

// ─── Generic Analytics Payload ───────────────────────────────────────────────
export interface AnalyticsPayload {
  readonly [key: string]: unknown;
}

// ─── Unified Analytics Event Object ──────────────────────────────────────────
export interface AnalyticsEvent {
  readonly event: AnalyticsEventType;
  readonly timestamp: number;
  readonly pageContext: PageContext;
  readonly campaignData?: CampaignData;
  readonly properties: Record<string, unknown>;
}

// ─── Telemetry Provider Interface ────────────────────────────────────────────
export interface TelemetryProvider {
  readonly name: string;
  init(): void;
  track(event: AnalyticsEvent): void;
}
