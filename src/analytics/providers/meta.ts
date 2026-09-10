/**
 * Meta Pixel Provider — iGaming Growth Analytics
 * 
 * Maps application events to Meta standard conversion events (PageView, Lead).
 * Respects strict PII sanitization.
 */

import { AnalyticsEvent, TelemetryProvider } from '../types';
import { analyticsConfig } from '../config';

export class MetaPixelProvider implements TelemetryProvider {
  readonly name = 'MetaPixelProvider';
  private pixelId: string;
  private initialized = false;

  constructor(pixelId?: string) {
    this.pixelId = pixelId || analyticsConfig.metaPixelId || '';
  }

  init(): void {
    if (typeof window === 'undefined' || !this.pixelId || this.initialized) {
      return;
    }

    try {
      /* eslint-disable */
      // @ts-ignore
      !(function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)})(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
      // @ts-ignore
      window.fbq('init', this.pixelId);
      /* eslint-enable */
      this.initialized = true;
    } catch {
      // Fail silently
    }
  }

  track(event: AnalyticsEvent): void {
    if (typeof window === 'undefined') return;

    try {
      const fbq = (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq;
      if (typeof fbq === 'function') {
        if (event.event === 'generate_lead') {
          fbq('track', 'Lead', {
            content_name: (event.properties.form_type as string) || 'lead_submission',
            content_category: event.pageContext.content_category || event.pageContext.page_type,
            vertical: event.pageContext.industry_slug,
          });
        } else if (event.event === 'page_view') {
          fbq('track', 'PageView');
        }
      }
    } catch {
      // Silently catch provider errors
    }
  }
}

export default MetaPixelProvider;
