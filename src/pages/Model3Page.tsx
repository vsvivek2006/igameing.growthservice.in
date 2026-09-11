import React, { useEffect } from 'react';
import { SEOHead } from '../seo';
import { buildOrganizationSchema, buildWebSiteSchema } from '../seo/schema';
import { Model3Navbar } from '../components/model3/Model3Navbar';
import { Model3Hero } from '../components/model3/Model3Hero';
import { Model3TrustStrip } from '../components/model3/Model3TrustStrip';
import { Model3PerformanceProof } from '../components/model3/Model3PerformanceProof';
import { Model3Ecosystem } from '../components/model3/Model3Ecosystem';
import { Model3SearchToConversion } from '../components/model3/Model3SearchToConversion';
import { Model3Industries } from '../components/model3/Model3Industries';
import { Model3CaseStudies } from '../components/model3/Model3CaseStudies';
import { Model3BeforeAfter } from '../components/model3/Model3BeforeAfter';
import { Model3Pricing } from '../components/model3/Model3Pricing';
import { Model3WhyUs } from '../components/model3/Model3WhyUs';
import { Model3Process } from '../components/model3/Model3Process';
import { Model3FAQ } from '../components/model3/Model3FAQ';
import { Model3FinalCTA } from '../components/model3/Model3FinalCTA';
import { Model3Footer } from '../components/model3/Model3Footer';

export const Model3Page: React.FC = () => {
  useEffect(() => {
    // Scroll to top on initial page mount
    window.scrollTo(0, 0);
  }, []);

  // Construct structured FAQ JSON-LD schema
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
    <div className="min-h-screen bg-[#050505] text-white selection:bg-amber-400 selection:text-black font-sans antialiased overflow-x-hidden">
      {/* ── SEO Metadata & Semantic Tags ─────────────────────────────────── */}
      <SEOHead
        title="Model 3 | Performance-Driven SEO & Landing Pages | Starting From ₹35K"
        description="Enterprise SEO architecture, sub-second custom landing pages, and search-to-conversion engineering for competitive digital operators. Verified Search Console telemetry."
        canonicalPath="/model-3"
        jsonLd={[
          buildWebSiteSchema(),
          buildOrganizationSchema(),
          faqSchema,
        ]}
      />

      {/* ── 1. NAVBAR ────────────────────────────────────────────────────── */}
      <Model3Navbar />

      {/* ── 2. HERO SECTION (3D GLOBE + HUD PANELS) ──────────────────────── */}
      <Model3Hero />

      {/* ── 3. TRUST / CAPABILITY STRIP ──────────────────────────────────── */}
      <Model3TrustStrip />

      {/* ── 4. SEARCH PERFORMANCE PROOF (GSC DASHBOARD) ──────────────────── */}
      <Model3PerformanceProof />

      {/* ── 5. SERVICES / DIGITAL GROWTH ECOSYSTEM ───────────────────────── */}
      <Model3Ecosystem />

      {/* ── 6. SEARCH → LANDING PAGE → SEO → CONVERSION (WITH 39s MP4 VIDEO) ─ */}
      <Model3SearchToConversion />

      {/* ── 7. INDUSTRIES (COMPETITIVE DIGITAL MARKETS) ──────────────────── */}
      <Model3Industries />

      {/* ── 8. CASE STUDIES (VERIFIED RESULTS) ───────────────────────────── */}
      <Model3CaseStudies />

      {/* ── 9. BEFORE → AFTER ARCHITECTURAL COMPARISON ───────────────────── */}
      <Model3BeforeAfter />

      {/* ── 10. SEO PRICING / STARTING FROM ₹35K ─────────────────────────── */}
      <Model3Pricing />

      {/* ── 11. WHY US (NO FLUFF DIFFERENTIATORS) ────────────────────────── */}
      <Model3WhyUs />

      {/* ── 12. 5-STEP ENGINEERING PROCESS ───────────────────────────────── */}
      <Model3Process />

      {/* ── 13. FREQUENTLY ASKED QUESTIONS (ACCESSIBLE ACCORDION) ────────── */}
      <Model3FAQ />

      {/* ── 14. FINAL HIGH-INTENT CONVERSION CTA ─────────────────────────── */}
      <Model3FinalCTA />

      {/* ── 15. COMPREHENSIVE LUXURY FOOTER ──────────────────────────────── */}
      <Model3Footer />
    </div>
  );
};

export default Model3Page;
