import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import businessConfig from '../../config/business';

export const HomeFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const whatsappPhone = (businessConfig.phone?.whatsapp || businessConfig.contact?.whatsapp || '917654928455').replace(/[^0-9]/g, '');

  const faqs = [
    {
      q: 'What growth disciplines does iGaming Growth provide under one roof?',
      a: 'We provide end-to-end growth engineering across 4 core pillars: 1) Technical SEO & Organic Dominance, 2) High-Performance Web Apps & PWAs, 3) Policy-Compliant Paid Acquisition (Google & Meta Ads), and 4) Conversion Rate Optimization (CRO) with automated WhatsApp/Telegram player retention funnels.',
    },
    {
      q: 'How do you run paid ads for regulated verticals without account bans?',
      a: 'We eliminate deceptive cloaking tricks that lead to merchant blacklisting. Instead, we operate with whitelisted agency ad accounts, policy-adherent educational bridge funnels, server-side Conversions API (CAPI) feeds, and automated negative keyword click shields.',
    },
    {
      q: 'How does your web development service differ from traditional agencies?',
      a: 'Traditional agencies build heavy WordPress templates that load in 4+ seconds. We build custom headless React, TypeScript, and Vite applications on Cloudflare Workers edge nodes. Every page delivers sub-650ms LCP, 99+ mobile Lighthouse scores, and 1-tap PWA installation with zero app store risk.',
    },
    {
      q: 'Do you guarantee #1 rankings or specific player deposits?',
      a: 'No. Search engines and ad platform algorithms are external systems. Any agency promising guaranteed #1 rankings is either using short-lived black-hat PBNs that risk manual penalties or targeting zero-value keywords. We guarantee technical precision, verified deliverables, transparent live Search Console telemetry, and clean white-hat execution.',
    },
    {
      q: 'What deliverables do clients receive during an engagement?',
      a: 'Clients receive 100% production code ownership: direct GitHub Pull Requests, live Search Console and GA4 telemetry dashboards, verified schema deployments, bi-weekly sprint reviews, and direct Slack/WhatsApp access to senior systems architects.',
    },
    {
      q: 'What does the Growth Foundation tier starting at ₹35K include?',
      a: 'The ₹35,000/month Foundation tier includes deep codebase crawling, Core Web Vitals profiling, high-intent keyword clustering, verified Google Search Console setup, basic JSON-LD Schema integration, and bi-weekly executive reporting.',
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
            Everything operators need to know about our engineering standards, compliance policies, and sprint workflows.
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
            Have a specific platform question regarding your codebase or regulatory jurisdiction?{' '}
            <a
              href={`https://wa.me/${whatsappPhone}?text=Hello%2C%20I%20have%20a%20technical%20question%20regarding%20our%20platform.`}
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

export default HomeFAQ;
