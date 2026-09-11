import React, { useEffect } from 'react';
import { SEOHead } from '../seo';
import { buildBreadcrumbSchema, buildServiceSchema, buildOrganizationSchema, buildWebSiteSchema } from '../seo/schema';
import { getServiceBySlug } from '../data/servicesData';
import {
  SeoHero,
  SeoTrustStrip,
  SeoPerformanceProof,
  SeoEcosystem,
  SeoSearchToConversion,
  SeoIndustries,
  SeoCaseStudies,
  SeoBeforeAfter,
  SeoPricing,
  SeoWhyUs,
  SeoProcess,
  SeoFAQ,
  SeoFinalCTA,
} from '../components/seo';

export const SeoServicePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const seoService = getServiceBySlug('seo');
  const breadcrumbItems = [
    { label: 'Services', path: '/services' },
    { label: 'SEO for High-Competition Industries' },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is included in your SEO service?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our SEO service includes deep codebase crawling, Core Web Vitals optimization (<800ms LCP), high-intent keyword clustering, JSON-LD Schema markup, bespoke landing page creation, internal linking graph distribution, and continuous Google Search Console telemetry monitoring.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does the SEO process work from onboarding to launch?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We follow a structured 5-step engineering timeline: 1) Technical Discovery & Competitor Reverse-Engineering, 2) Information Architecture & Schema Roadmap, 3) Build & Performance Code Deployment, 4) Real-Time Indexation & Snippet CTR Testing, and 5) Programmatic Scale & Contextual Authority Building.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to see measurable SEO results?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'While technical fixes take effect within 7 to 14 days, significant organic ranking shifts compound over a 60 to 120-day horizon as Google recrawls, re-evaluates internal PageRank distribution, and validates user engagement signals.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you build custom SEO landing pages as part of the campaign?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Our development squad builds bespoke, lightweight landing pages in modern TypeScript, tailored to specific commercial search clusters and optimized for sub-second mobile rendering and instant WhatsApp conversion.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does the SEO Foundation tier starting at ₹35K include?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The ₹35,000/month Foundation tier includes an end-to-end technical codebase crawl, high-intent keyword research, on-page semantic optimization, verified Search Console setup, basic JSON-LD Schema integration, Core Web Vitals assessment, and bi-weekly performance reporting.',
        },
      },
    ],
  };

  return (
    <div className="bg-model3-base text-white selection:bg-amber-400 selection:text-black font-sans antialiased overflow-x-hidden">
      <SEOHead
        title="SEO for High-Competition Industries — iGaming Growth"
        description="Enterprise SEO architecture, sub-second custom landing pages, and search-to-conversion engineering for competitive digital operators. Verified Search Console telemetry."
        canonicalPath="/services/seo"
        jsonLd={[
          buildBreadcrumbSchema(breadcrumbItems),
          ...(seoService ? [buildServiceSchema(seoService)] : []),
          buildWebSiteSchema(),
          buildOrganizationSchema(),
          faqSchema,
        ]}
      />

      <SeoHero />
      <SeoTrustStrip />
      <SeoPerformanceProof />
      <SeoEcosystem />
      <SeoSearchToConversion />
      <SeoIndustries />
      <SeoCaseStudies />
      <SeoBeforeAfter />
      <SeoPricing />
      <SeoWhyUs />
      <SeoProcess />
      <SeoFAQ />
      <SeoFinalCTA />
      <div className="h-12 bg-gradient-to-b from-model3-base to-[#050505]" aria-hidden="true" />
    </div>
  );
};

export default SeoServicePage;
