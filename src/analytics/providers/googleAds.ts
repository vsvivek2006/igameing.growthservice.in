/**
 * Google Ads Conversion Provider — iGaming Growth Analytics
 * 
 * Maps commercial conversion events (specifically generate_lead) to
 * Google Ads conversion actions using gtag without requiring third-party plugins.
 */

import { AnalyticsEvent, TelemetryProvider } from '../types';
import { analyticsConfig } from '../config';

export class GoogleAdsProvider implements TelemetryProvider {
  readonly name = 'GoogleAdsProvider';
  private conversionId: string;
  private conversionLabel: string;
  private initialized = false;

  constructor(conversionId?: string, conversionLabel?: string) {
    this.conversionId = conversionId || analyticsConfig.googleAdsId || '';
    this.conversionLabel = conversionLabel || analyticsConfig.googleAdsConversionLabel || '';
  }

  init(): void {
    if (typeof window === 'undefined' || !this.conversionId || this.initialized) {
      return;
    }

    try {
      // Ensure dataLayer and gtag exist if GoogleAnalyticsProvider hasn't already injected them
      window.dataLayer = window.dataLayer || [];
      const gtag = (...args: unknown[]) => {
        window.dataLayer?.push(args);
      };
      if (!(window as unknown as { gtag?: typeof gtag }).gtag) {
        (window as unknown as { gtag: typeof gtag }).gtag = gtag;
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${this.conversionId}`;
        document.head.appendChild(script);
        gtag('js', new Date());
      }

      // Configure Google Ads conversion tracking ID
      const activeGtag = (window as unknown as { gtag: (...args: unknown[]) => void }).gtag;
      activeGtag('config', this.conversionId);

      this.initialized = true;
    } catch {
      // Fail silently without blocking UI
    }
  }

  track(event: AnalyticsEvent): void {
    if (typeof window === 'undefined' || !this.conversionId || !this.conversionLabel) {
      return;
    }

    try {
      const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
      if (typeof gtag === 'function' && event.event === 'generate_lead') {
        const sendToTag = `${this.conversionId}/${this.conversionLabel}`;
        gtag('event', 'conversion', {
          send_to: sendToTag,
          event_category: 'Lead',
          event_label: (event.properties.form_type as string) || 'audit_request',
          value: 1.0,
          currency: 'USD',
        });
      }
    } catch {
      // Never crash user experience
    }
  }
}

export default GoogleAdsProvider;
