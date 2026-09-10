/**
 * Analytics Configuration & Environment Manager — iGaming Growth
 * 
 * Controls vendor IDs, preview isolation, debug modes, and production gating.
 * Ensures local and preview environments never pollute production telemetry.
 */

export interface AnalyticsConfig {
  readonly enabled: boolean;
  readonly debug: boolean;
  readonly environment: 'development' | 'preview' | 'production';
  readonly isProduction: boolean;
  readonly isPreview: boolean;
  readonly isDevelopment: boolean;
  readonly googleAnalyticsId?: string;
  readonly googleAdsId?: string;
  readonly googleAdsConversionLabel?: string;
  readonly metaPixelId?: string;
}

const PRODUCTION_HOSTNAME = 'igameing.growthservice.in';

const resolveEnvironment = (): 'development' | 'preview' | 'production' => {
  if (typeof window === 'undefined') {
    return import.meta.env.PROD ? 'production' : 'development';
  }

  const hostname = window.location.hostname;
  if (hostname === PRODUCTION_HOSTNAME) {
    return 'production';
  }
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    return 'development';
  }
  return 'preview';
};

const getEnvironmentConfig = (): AnalyticsConfig => {
  const env = resolveEnvironment();
  const isProd = env === 'production';
  const isDev = env === 'development';
  const isPrev = env === 'preview';

  // Debug is active in local development or if explicitly set via VITE_ANALYTICS_DEBUG
  const debug = isDev || import.meta.env.VITE_ANALYTICS_DEBUG === 'true';

  // Analytics is active in production, or when forced via VITE_ENABLE_ANALYTICS in staging
  const enabled =
    isProd || (isPrev && import.meta.env.VITE_ENABLE_ANALYTICS === 'true');

  return {
    enabled,
    debug,
    environment: env,
    isProduction: isProd,
    isPreview: isPrev,
    isDevelopment: isDev,
    googleAnalyticsId: (import.meta.env.VITE_GA_MEASUREMENT_ID as string) || undefined,
    googleAdsId: (import.meta.env.VITE_GOOGLE_ADS_ID as string) || undefined,
    googleAdsConversionLabel:
      (import.meta.env.VITE_GOOGLE_ADS_CONVERSION_LABEL as string) || undefined,
    metaPixelId: (import.meta.env.VITE_META_PIXEL_ID as string) || undefined,
  };
};

export const analyticsConfig = getEnvironmentConfig();

export default analyticsConfig;
