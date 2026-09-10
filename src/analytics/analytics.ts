/**
 * Analytics Core Facade & Public API — iGaming Growth
 * 
 * Provider-agnostic analytics abstraction layer.
 * React components call this API rather than interacting with vendors directly.
 */

import {
  AnalyticsEventType,
  AnalyticsEvent,
  TelemetryProvider,
  PageContext,
  TrackingPayload,
} from './types';
import { analyticsConfig } from './config';
import { sanitizePayload } from './sanitizer';
import { resolvePageContext, getStoredCampaignData } from './context';
import {
  ConsoleDebugProvider,
  GoogleAnalyticsProvider,
  MetaPixelProvider,
  GoogleAdsProvider,
} from './providers';

// ─── Provider Registry Setup ──────────────────────────────────────────────────
const activeProviders: TelemetryProvider[] = [];

if (analyticsConfig.debug) {
  activeProviders.push(new ConsoleDebugProvider());
}

if (analyticsConfig.enabled) {
  activeProviders.push(
    new GoogleAnalyticsProvider(),
    new MetaPixelProvider(),
    new GoogleAdsProvider()
  );
}

let providersInitialized = false;

export const initializeAnalytics = (): void => {
  if (providersInitialized || typeof window === 'undefined') return;

  activeProviders.forEach((provider) => {
    try {
      provider.init();
    } catch {
      // Ignore provider initialization failure
    }
  });

  providersInitialized = true;
};

// ─── High-Value Conversion Deduplication Cache ──────────────────────────────
const recentConversions = new Set<string>();

/**
 * Dispatches an analytics event to all registered providers with full context.
 */
export const trackEvent = (
  event: AnalyticsEventType,
  properties: Record<string, unknown> = {},
  explicitContext?: Partial<PageContext>
): void => {
  if (typeof window === 'undefined') return;

  initializeAnalytics();

  // Deduplicate high-value conversions to prevent double-firing
  if (event === 'generate_lead') {
    const dedupeKey = `${event}:${properties.form_type || 'lead'}:${JSON.stringify(
      properties.market || properties.vertical || ''
    )}`;
    if (recentConversions.has(dedupeKey)) {
      if (analyticsConfig.debug) {
        console.warn('[Telemetry:Deduplication]: Blocked duplicate conversion event:', dedupeKey);
      }
      return;
    }
    recentConversions.add(dedupeKey);
    setTimeout(() => recentConversions.delete(dedupeKey), 10000);
  }

  // Sanitize properties to eliminate any PII
  const sanitizedProps = sanitizePayload(properties);

  // Resolve current page context
  const currentPath = window.location.pathname;
  const baseContext = resolvePageContext(currentPath);
  const finalContext: PageContext = {
    ...baseContext,
    page_title: document.title,
    ...explicitContext,
  };

  // Retrieve campaign attribution
  const campaignData = getStoredCampaignData();

  const eventObject: AnalyticsEvent = {
    event,
    timestamp: Date.now(),
    pageContext: finalContext,
    campaignData,
    properties: sanitizedProps,
  };

  // Dispatch to active providers
  activeProviders.forEach((provider) => {
    try {
      provider.track(eventObject);
    } catch {
      // Telemetry must never disrupt user experience
    }
  });
};

/**
 * Tracks client-side page views with explicit path and title.
 */
export const trackPageView = (params: { path: string; title?: string }): void => {
  const pageContext = resolvePageContext(params.path);
  trackEvent('page_view', {
    path: params.path,
    title: params.title || (typeof document !== 'undefined' ? document.title : ''),
  }, {
    ...pageContext,
    page_title: params.title || (typeof document !== 'undefined' ? document.title : ''),
  });
};

/**
 * Tracks commercial conversion events with structured parameters.
 */
export const trackConversion = (
  conversionName: string,
  parameters: Record<string, unknown> = {}
): void => {
  trackEvent('generate_lead', {
    form_type: conversionName,
    ...parameters,
  });
};

/**
 * Captures and reports runtime errors to observability channels.
 */
export const reportAnalyticsError = (
  error: unknown,
  context: Record<string, unknown> = {}
): void => {
  const errorMessage =
    error instanceof Error ? error.message : typeof error === 'string' ? error : 'Unknown Error';
  const errorStack = error instanceof Error ? error.stack : undefined;

  const sanitizedContext = sanitizePayload(context);

  trackEvent('error_captured', {
    error_message: errorMessage,
    error_stack: errorStack?.slice(0, 500),
    ...sanitizedContext,
  });

  if (analyticsConfig.debug) {
    console.error('[Observability:ErrorCaptured]:', errorMessage, context, error);
  }
};

/**
 * Alias for reportAnalyticsError for backward compatibility.
 */
export const reportError = reportAnalyticsError;

/**
 * Legacy compatibility helper for TrackingPayload interface.
 */
export const trackLegacyPayload = (payload: TrackingPayload): void => {
  const { event, ...props } = payload;
  trackEvent(event as AnalyticsEventType, props as Record<string, unknown>);
};

/**
 * Returns active environment analytics configuration.
 */
export const getAnalyticsConfig = () => analyticsConfig;
