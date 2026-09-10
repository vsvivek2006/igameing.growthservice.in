/**
 * Centralized SEO Head Component
 * Renders consistent, brand-aligned, and deterministic metadata across all pages using react-helmet.
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { PageMetadata } from './seo-types';
import { SEO_CONFIG, formatPageTitle } from './seo-config';
import { getCanonicalUrl } from './canonical';

export interface SEOHeadProps extends Partial<PageMetadata> {
  children?: React.ReactNode;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalPath,
  canonicalUrl,
  robots = SEO_CONFIG.robots.indexFollow,
  keywords,
  ogType = 'website',
  ogImage = SEO_CONFIG.defaultOgImage,
  ogTitle,
  ogDescription,
  twitterCard = 'summary_large_image',
  jsonLd,
  children,
}) => {
  const formattedTitle = formatPageTitle(title || SEO_CONFIG.defaultTitle);
  const metaDescription = description || SEO_CONFIG.defaultDescription;

  // Authoritatively resolve canonical URL
  const resolvedCanonical =
    canonicalUrl || (canonicalPath ? getCanonicalUrl(canonicalPath) : getCanonicalUrl('/'));

  const resolvedOgTitle = ogTitle || formattedTitle;
  const resolvedOgDesc = ogDescription || metaDescription;

  return (
    <Helmet>
      {/* Title */}
      <title>{formattedTitle}</title>

      {/* Meta Description & Keywords */}
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robots} />
      <meta name="theme-color" content={SEO_CONFIG.themeColor} />

      {/* Canonical Link */}
      <link rel="canonical" href={resolvedCanonical} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={resolvedCanonical} />
      <meta property="og:title" content={resolvedOgTitle} />
      <meta property="og:description" content={resolvedOgDesc} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SEO_CONFIG.siteName} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={resolvedOgTitle} />
      <meta name="twitter:description" content={resolvedOgDesc} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data JSON-LD */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}

      {children}
    </Helmet>
  );
};

export default SEOHead;
