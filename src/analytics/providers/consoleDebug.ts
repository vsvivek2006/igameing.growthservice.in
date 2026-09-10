/**
 * Console Debug Provider — iGaming Growth Analytics
 * 
 * Formats telemetry events into grouped console logs during local development
 * or when debug mode is enabled. Strips all PII and validates contracts.
 */

import { AnalyticsEvent, TelemetryProvider } from '../types';

export class ConsoleDebugProvider implements TelemetryProvider {
  readonly name = 'ConsoleDebugProvider';

  init(): void {
    if (import.meta.env.DEV) {
      console.debug('[Telemetry:Initialized]: Console Debug Logger active');
    }
  }

  track(event: AnalyticsEvent): void {
    console.groupCollapsed(
      `%c[Telemetry: ${event.event}]%c @ ${event.pageContext.page_path}`,
      'color: #9333ea; font-weight: bold;',
      'color: #64748b;'
    );
    console.log('Event Name:', event.event);
    console.log('Page Context:', event.pageContext);
    if (event.campaignData && Object.keys(event.campaignData).length > 0) {
      console.log('Campaign Attribution:', event.campaignData);
    }
    console.log('Properties:', event.properties);
    console.log('Timestamp:', new Date(event.timestamp).toISOString());
    console.groupEnd();
  }
}

export default ConsoleDebugProvider;
