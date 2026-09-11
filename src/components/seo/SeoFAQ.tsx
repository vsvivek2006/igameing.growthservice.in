import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const SeoFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is included in your SEO service?',
      a: 'Our SEO service is a comprehensive technical, content, and conversion engineering program. It includes deep codebase crawling, Core Web Vitals optimization (<800ms LCP), high-intent keyword clustering, JSON-LD Schema markup, bespoke landing page creation, internal linking graph distribution, and continuous Google Search Console telemetry monitoring.',
    },
    {
      q: 'How does the SEO process work from onboarding to launch?',
      a: 'We follow a structured 5-step engineering timeline: 1) Technical Discovery & Competitor Reverse-Engineering, 2) Information Architecture & Schema Roadmap, 3) Build & Performance Code Deployment, 4) Real-Time Indexation & Snippet CTR Testing, and 5) Programmatic Scale & Contextual Authority Building.',
    },
    {
      q: 'How long does it take to see measurable SEO results?',
      a: 'While technical fixes and Core Web Vitals improvements take effect within 7 to 14 days of deployment, significant organic ranking shifts and click volume growth typically compound over a 60 to 120-day horizon as Google recrawls, re-evaluates internal PageRank distribution, and validates user engagement signals.',
    },
    {
      q: 'Do you build custom SEO landing pages as part of the campaign?',
      a: 'Yes. Unlike traditional agencies that only hand over recommendation documents, our development squad builds bespoke, lightweight landing pages in modern TypeScript. Every page is tailored to a specific commercial search cluster and optimized for sub-second mobile rendering and instant conversion.',
    },
    {
      q: 'Can you optimize existing websites, or do we have to rebuild?',
      a: 'We can optimize existing websites if the underlying stack allows clean performance and semantic HTML. If your current site is severely limited by bloated CMS plugins or architectural debt, we will recommend a clean headless layer or targeted landing page sub-domains to achieve top-tier performance without disrupting your core systems.',
    },
    {
      q: 'How do you measure and report SEO performance?',
      a: 'We rely exclusively on first-party Google Search Console telemetry, tracking total clicks, search impressions, click-through rate (CTR), and average keyword position. You receive transparent weekly sprint updates and bi-weekly executive dashboards with zero fabricated vanity data.',
    },
    {
      q: 'What does the SEO Foundation tier starting at ₹35K include?',
      a: 'The ₹35,000/month Foundation tier is designed for emerging platforms establishing a clean organic presence. It includes an end-to-end technical codebase crawl, high-intent keyword research, on-page semantic optimization, verified Search Console setup, basic JSON-LD Schema integration, Core Web Vitals assessment, and bi-weekly performance reporting.',
    },
  ];

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-20 lg:py-32 bg-model3-panel text-white border-b border-white/10 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/15 backdrop-blur-md mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
              Clear Answers
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-heading mb-5">
            Frequently Asked Questions.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium">
            Everything you need to know about our technical SEO, custom landing page development, and campaign pricing.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-amber-400/60 bg-[#0E0E1A]/95 shadow-xl shadow-amber-950/25 ring-1 ring-amber-400/30'
                    : 'border-white/10 bg-[#0B0B14]/80 hover:border-amber-400/40 hover:bg-[#0E0E1A]/60 shadow-sm'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="group w-full p-4 sm:p-5 lg:p-6 text-left flex items-center justify-between gap-4 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-heading font-bold text-sm sm:text-base lg:text-[17px] leading-snug transition-colors ${
                      isOpen
                        ? 'text-amber-300'
                        : 'text-white group-hover:text-amber-200'
                    }`}
                  >
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'rotate-180 bg-amber-400/20 border border-amber-400/60 text-amber-300 shadow-sm shadow-amber-400/30'
                        : 'bg-white/5 border border-white/10 text-slate-400 group-hover:border-amber-400/30 group-hover:text-amber-300'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-white/10 pt-4 animate-fade-in font-normal">
                    <p>
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400">
            Have a specific technical question regarding your domain or compliance requirements?{' '}
            <a
              href="https://wa.me/917654928455?text=Hello%2C%20I%20have%20a%20technical%20question%20regarding%20our%20SEO%20setup."
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-4"
            >
              Ask Our Engineers Directly on WhatsApp →
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};
