import React from 'react';
import { 
  Code2, 
  Zap, 
  Target, 
  ShieldCheck, 
  BarChart3, 
  Layers, 
  CheckCircle2,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const SeoWhyUs: React.FC = () => {
  const differentiators = [
    {
      title: 'SEO + Engineering Under One Roof',
      icon: Code2,
      tag: 'NO HANDOFF FRICTION',
      description:
        'Traditional agencies hand you a 40-page audit PDF and tell your engineers to fix it. We write the code, deploy the schema, and configure the edge caches ourselves.',
    },
    {
      title: 'Performance-First Speed SLA (<800ms)',
      icon: Zap,
      tag: 'CORE WEB VITALS 98+',
      description:
        'Google officially penalizes sluggish sites. We guarantee zero layout shift (0 CLS) and sub-second Largest Contentful Paint (LCP) across mobile devices.',
    },
    {
      title: 'Conversion-Focused UX Architecture',
      icon: Target,
      tag: 'SEARCH-TO-REVENUE',
      description:
        'High rankings are useless if visitors bounce in 3 seconds. Every landing page is engineered with high-intent psychological triggers and instant WhatsApp access.',
    },
    {
      title: 'Battle-Tested in Regulated Markets',
      icon: ShieldCheck,
      tag: 'HIGH COMPETITION',
      description:
        'We specialize in niches where ordinary SEO collapses—online gaming, betting, fintech, crypto, and multi-region operators requiring clean technical moats.',
    },
    {
      title: '100% Real Search Console Telemetry',
      icon: BarChart3,
      tag: 'NO FAKE PROMISES',
      description:
        'We report directly from Google Search Console, tracking verified click growth, CTR improvements, and commercial keyword clusters—never fabricated charts.',
    },
    {
      title: 'Scalable 50-Page Operating Systems',
      icon: Layers,
      tag: 'PROGRAMMATIC POWER',
      description:
        'Our sites are built on clean, structured multi-hub architectures designed to expand from 10 pages to 100+ indexable assets without crawl budget breakdown.',
    },
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-model3-panel text-white border-b border-white/10 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-10 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/15 backdrop-blur-md mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
              The Structural Difference
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-heading mb-5">
            Why Modern Operators Choose Model 3.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium">
            We eliminated the outdated agency playbook. No fluff reports, no endless meetings—just high-velocity engineering that captures search market share.
          </p>
        </div>

        {/* 6 Differentiator Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {differentiators.map((d, idx) => {
            const Icon = d.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-model3-deep border border-white/10 shadow-xl flex flex-col justify-between group hover:border-amber-400/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-amber-400/40 transition-colors">
                      <Icon className="w-6 h-6 text-amber-400" />
                    </div>

                    <span className="text-[10px] font-mono font-bold tracking-widest text-purple-300 bg-purple-500/10 px-2.5 py-1 rounded-full border border-purple-500/20">
                      {d.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-heading mb-3 group-hover:text-amber-400 transition-colors">
                    {d.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {d.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-white/5 flex items-center gap-2 text-[11px] text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Verified Standard in Model 3</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom SLA Callout */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-purple-950/40 via-[#0a0a14] to-amber-950/30 border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white font-heading mb-1">
              Ready to Upgrade from Legacy SEO?
            </h3>
            <p className="text-xs text-slate-400">
              Get an architectural review of your current site&apos;s code, indexing, and speed bottlenecks within 24 hours.
            </p>
          </div>

          <a
            href="https://wa.me/919999999999?text=Hello%20iGaming%20Growth%2C%20I%20want%20to%20review%20our%20current%20site%20against%20Model%203."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-lg shadow-amber-400/25 shrink-0"
          >
            <span>Request Architectural Audit</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </a>
        </div>

      </div>
    </section>
  );
};
