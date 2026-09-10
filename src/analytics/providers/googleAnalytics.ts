/**
 * Google Analytics 4 (GA4) Provider — iGaming Growth Analytics
 * 
 * Maps application events to GA4 standard and recommended event conventions.
 * Disables automatic page_view in favor of manual, single-fire route context.
 */

import { AnalyticsEvent, TelemetryProvider } from '../types';
import { analyticsConfig } from '../config';

export class GoogleAnalyticsProvider implements TelemetryProvider {
  readonly name = 'GoogleAnalyticsProvider';
  private measurementId: string;
  private initialized = false;

  constructor(measurementId?: string) {
    this.measurementId = measurementId || analyticsConfig.googleAnalyticsId || '';
  }

  init(): void {
    if (typeof window === 'undefined' || !this.measurementId || this.initialized) {
      return;
    }

    try {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${this.measurementId}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      const gtag = (...args: unknown[]) => {
        window.dataLayer?.push(args);
      };
      (window as unknown as { gtag: typeof gtag }).gtag = gtag;

      gtag('js', new Date());
      gtag('config', this.measurementId, {
        send_page_view: false, // Explicitly false: handled via client-side router
      });

      this.initialized = true;
    } catch {
      // Fail silently without disrupting page rendering
    }
  }

  track(event: AnalyticsEvent): void {
    if (typeof window === 'undefined') return;

    try {
      const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
      if (typeof gtag === 'function') {
        const payload = {
          page_location: window.location.href,
          page_path: event.pageContext.page_path,
          page_title: event.pageContext.page_title,
          page_type: event.pageContext.page_type,
          service_slug: event.pageContext.service_slug,
          industry_slug: event.pageContext.industry_slug,
          content_category: event.pageContext.content_category,
          ...event.properties,
          ...event.campaignData,
        };

        // Align lead generation to recommended GA4 'generate_lead'
        gtag('event', event.event, payload);
      }
    } catch {
      // Never crash user experience for analytics errors
    }
  }
}

export default GoogleAnalyticsProvider;
