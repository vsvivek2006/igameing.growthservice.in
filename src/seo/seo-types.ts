/**
 * SEO Subsystem Types
 */

export interface TitleTemplateOptions {
  separator?: string;
  brandSuffix?: boolean;
}

export interface PageMetadata {
  title: string;
  description: string;
  canonicalPath?: string;
  canonicalUrl?: string;
  robots?: string;
  keywords?: string;
  ogType?: 'website' | 'article' | 'profile';
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
}
