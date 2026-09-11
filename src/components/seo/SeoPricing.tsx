import React from 'react';
import { 
  Check, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck
} from 'lucide-react';

export const SeoPricing: React.FC = () => {
  const tiers = [
    {
      name: 'SEO Foundation',
      badge: 'ENTRY PERFORMANCE',
      price: '₹35,000',
      period: '/ month',
      priceSubtitle: 'Starting tier for emerging operators',
      highlighted: false,
      border: 'border-white/10 hover:border-purple-500/40',
      description:
        'Essential technical SEO, core keyword research, and Search Console telemetry to establish a clean organic foundation.',
      deliverables: [
        'End-to-end technical SEO architecture audit',
        'High-intent commercial keyword research',
        'On-page optimization & heading hierarchy',
        'Google Search Console verified setup',
        'Basic JSON-LD Schema integration',
        'Core Web Vitals health assessment',
        'Bi-weekly performance & rank reporting',
      ],
      ctaText: 'Start Foundation From ₹35K',
      ctaHref: 'https://wa.me/917654928455?text=Hello%20iGaming%20Growth%20Team%2C%20I%20am%20interested%20in%20the%20SEO%20Foundation%20Tier%20starting%20at%2035K.',
      buttonStyle: 'bg-white/10 hover:bg-white/20 text-white border border-white/20',
    },
    {
      name: 'Growth Engine',
      badge: 'MOST POPULAR FOR SCALING',
      price: 'Custom',
      period: 'Quotation',
      priceSubtitle: 'Tailored to market competition & volume',
      highlighted: true,
      border: 'border-amber-400/60 shadow-2xl shadow-amber-500/20',
      description:
        'Full-funnel SEO, bespoke sub-second landing pages, competitive authority building, and search-to-lead conversion optimization.',
      deliverables: [
        'Everything in SEO Foundation tier',
        'Custom high-speed SEO landing page development',
        'Topic cluster content strategy & E-E-A-T depth',
        'Advanced technical SEO & crawl budget engineering',
        'Direct WhatsApp & lead conversion optimization (CRO)',
        'Competitor SERP gap analysis & keyword intercept',
        'Authoritative high-DR contextual backlink acquisition',
        'Dedicated technical growth lead & weekly sprints',
      ],
      ctaText: 'Deploy Growth Engine',
      ctaHref: 'https://wa.me/917654928455?text=Hello%20iGaming%20Growth%20Team%2C%20I%20want%20to%20deploy%20the%20Growth%20Engine%20for%20our%20platform.',
      buttonStyle: 'bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 hover:from-amber-300 hover:to-yellow-300 text-slate-950 font-black shadow-lg shadow-amber-400/30',
    },
    {
      name: 'Enterprise Scale',
      badge: 'MULTI-REGION & PROGRAMMATIC',
      price: 'Custom',
      period: 'Quotation',
      priceSubtitle: 'For multi-brand enterprise portfolios',
      highlighted: false,
      border: 'border-white/10 hover:border-cyan-500/40',
      description:
        'Comprehensive digital growth operating system for high-volume, multi-jurisdiction platforms requiring custom engineering.',
      deliverables: [
        'Large-scale programmatic SEO architecture',
        'Multi-region & localized hreflang deployments',
        'Advanced analytics, attribution & CRM pipeline integration',
        'Automated schema generation & real-time monitoring',
        'Dedicated senior engineering & SEO squad',
        'Strict SLA: 15-minute emergency response',
        'Executive board-level quarterly reporting & forecasting',
      ],
      ctaText: 'Schedule Enterprise Call',
      ctaHref: 'https://wa.me/917654928455?text=Hello%20iGaming%20Growth%20Team%2C%20I%20am%20inquiry%20about%20Enterprise%20SEO%20and%20Scale.',
      buttonStyle: 'bg-white/10 hover:bg-white/20 text-white border border-white/20',
    },
  ];

  return (
    <section id="pricing" className="relative py-20 lg:py-32 bg-model3-base text-white border-b border-white/10 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-purple-900/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/15 backdrop-blur-md mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
              Clear Value Pricing
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-heading mb-5">
            Start Your SEO Campaign <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
              From ₹35K
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium">
            Transparent, results-oriented investment tiers designed for serious digital operators. No hidden lock-ins, no unrequested fluff.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl bg-model3-surface border ${tier.border} p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                tier.highlighted ? 'bg-model3-deep' : ''
              }`}
            >
              {/* Highlighted Ribbon */}
              {tier.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                  <span className="whitespace-nowrap inline-flex items-center justify-center text-[10px] font-mono font-bold uppercase tracking-widest px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 shadow-md shadow-amber-400/40">
                    {tier.badge}
                  </span>
                </div>
              )}

              <div>
                {!tier.highlighted && (
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 block mb-2">
                    {tier.badge}
                  </span>
                )}

                <h3 className="text-2xl font-bold text-white font-heading mb-2">
                  {tier.name}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-6 font-normal min-h-[36px]">
                  {tier.description}
                </p>

                {/* Price Display */}
                <div className="pb-6 mb-6 border-b border-white/10">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white font-heading">
                      {tier.price}
                    </span>
                    <span className="text-sm font-medium text-slate-400">
                      {tier.period}
                    </span>
                  </div>
                  <span className="text-[11px] text-amber-400/90 font-medium block mt-1">
                    {tier.priceSubtitle}
                  </span>
                </div>

                {/* Deliverables Checklist */}
                <div className="space-y-3 mb-8">
                  <span className="text-[11px] uppercase font-mono font-bold text-slate-400 block">
                    What&apos;s Included:
                  </span>
                  {tier.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-200 leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div>
                <a
                  href={tier.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-2 transition-all active:scale-[0.98] ${tier.buttonStyle}`}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Integrity Disclaimers */}
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
            <span>
              All campaigns begin with a customized strategic quotation based on your exact domain authority, keyword competition, and technical codebase status.
            </span>
          </div>
          <a
            href="https://wa.me/919999999999?text=Hello%2C%20I%20would%20like%20a%20custom%20SEO%20quotation."
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:text-amber-300 font-bold whitespace-nowrap"
          >
            Request Custom Quotation →
          </a>
        </div>

      </div>
    </section>
  );
};
