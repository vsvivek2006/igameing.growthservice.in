import React, { useEffect } from 'react';
import { SEOHead } from '../seo';
import { buildOrganizationSchema, buildWebSiteSchema } from '../seo/schema';
import {
  HomeHero,
  HomeTrustStrip,
  HomeWorkProof,
  HomeCapabilityEcosystem,
  HomeTestimonials,
  HomeIndustriesGrid,
  HomePricing,
  HomeFAQ,
  HomeFinalCTA,
} from '../components/home';
import { SeoSearchToConversion } from '../components/seo';

export const HomePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What digital growth disciplines does iGaming Growth provide?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We provide end-to-end growth engineering across 4 core disciplines: Technical SEO & Organic Dominance, High-Performance Web & PWA Engineering, Policy-Compliant Paid Acquisition (Google & Meta Ads), and Conversion Rate Optimization (CRO) with automated player retention funnels.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you run paid ads for regulated verticals without account bans?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We operate through policy-compliant educational landing pages, whitelisted agency ad accounts, server-side Conversions API (CAPI) data pipelines, and strict disclaimer governance. We do not use deceptive black-hat cloaking that leads to merchant blacklisting.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does your web development differ from a traditional agency?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Traditional agencies build visual templates and attempt to patch technical performance at the end. We build custom headless React, TypeScript, and Vite Progressive Web Apps (PWAs) deployed on edge CDNs, achieving sub-650ms LCP, 99+ mobile Lighthouse scores, and 1-tap app installation without app store censorship.',
        },
      },
      {
        '@type': 'Question',
        name: 'What deliverables do clients receive during an engagement?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Clients receive 100% code ownership: direct GitHub Pull Requests, live Search Console and GA4 telemetry dashboards, verified schema deployments, and bi-weekly engineering sprint reviews.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does the Foundation tier starting at ₹35K include?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The ₹35,000/month Foundation tier includes deep codebase and crawl log auditing, Core Web Vitals optimization, high-intent keyword clustering, baseline schema entity mapping, and bi-weekly performance reviews.',
        },
      },
    ],
  };

  return (
    <div className="bg-model3-base text-white selection:bg-amber-400 selection:text-black font-sans antialiased overflow-x-hidden">
      <SEOHead
        title="iGaming Growth — Specialist B2B Digital Growth Agency for High-Competition Verticals"
        description="Technical SEO, website development, paid acquisition, and conversion optimisation for iGaming, casino, trading, financial, and adult-industry businesses. Engineering-led. Compliance-aware."
        canonicalPath="/"
        jsonLd={[buildOrganizationSchema(), buildWebSiteSchema(), faqSchema]}
      />

      {/* 1. Multi-Service Hero with 3D Globe Canvas & 4 Pillar HUDs */}
      <HomeHero />

      {/* 2. Verified Agency Benchmark Ticker & Licenses */}
      <HomeTrustStrip />

      {/* 3. Real Work Proof: Search Console 90.4K, 100/100 PWA Speed, Paid Media 4.8x ROAS */}
      <HomeWorkProof />

      {/* 3.5. Live Video Proof: Real Search-to-Conversion Walkthrough (39 Seconds) */}
      <SeoSearchToConversion />

      {/* 4. 4 Core Capability Pillars Deep-Dive */}
      <HomeCapabilityEcosystem />

      {/* 5. Real Client Testimonials with Operator Avatars & Verified Metrics */}
      <HomeTestimonials />

      {/* 6. 8 Regulated Verticals Showcase */}
      <HomeIndustriesGrid />

      {/* 7. Transparent Investment Ranges & Retainers */}
      <HomePricing />

      {/* 8. Operator FAQ Accordion */}
      <HomeFAQ />

      {/* 9. High-Impact Bottom CTA & WhatsApp Connect */}
      <HomeFinalCTA />

      <div className="h-12 bg-gradient-to-b from-model3-base to-slate-950" aria-hidden="true" />
    </div>
  );
};

export default HomePage;
