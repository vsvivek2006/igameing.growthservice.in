import React from 'react';
import { 
  Search, 
  Code2, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Sparkles 
} from 'lucide-react';

export const SeoEcosystem: React.FC = () => {
  const pillars = [
    {
      pillarNumber: '01',
      title: 'SEO Architecture',
      tagline: 'Technical Foundation & Search Dominance',
      icon: Search,
      accentColor: 'from-purple-500 to-indigo-600',
      badgeBg: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
      borderColor: 'border-purple-500/20 hover:border-purple-500/50',
      glowColor: 'group-hover:shadow-purple-900/30',
      description:
        'We engineer search indexation at the code level. No vanity rankings—just pure organic visibility on high-intent commercial keywords.',
      subCapabilities: [
        { name: 'Technical SEO Audit', detail: 'Crawl budget & rendering pipeline' },
        { name: 'On-Page Optimization', detail: 'Semantic HTML5 & heading hierarchy' },
        { name: 'Keyword Strategy', detail: 'High-LTV search intent clustering' },
        { name: 'Internal Link Mesh', detail: 'PageRank distribution architecture' },
        { name: 'JSON-LD Schema', detail: 'Rich snippets & Knowledge Graph' },
        { name: 'Core Web Vitals (98+)', detail: 'Sub-second LCP, 0 CLS, 0 INP' },
      ],
      metricsHighlight: { label: 'Index Health', value: '100% Crawl Clean' },
    },
    {
      pillarNumber: '02',
      title: 'High-Performance Dev',
      tagline: 'Custom Code Built for Speed & Conversion',
      icon: Code2,
      accentColor: 'from-amber-400 to-yellow-500',
      badgeBg: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
      borderColor: 'border-amber-500/20 hover:border-amber-500/50',
      glowColor: 'group-hover:shadow-amber-900/30',
      description:
        'Slow templates kill conversion. We build bespoke, lightning-fast landing pages with clean TypeScript, zero bloat, and surgical UX.',
      subCapabilities: [
        { name: 'SEO Landing Pages', detail: 'Programmatic & bespoke lead pages' },
        { name: 'Sub-second Websites', detail: '<800ms Time-to-Interactive' },
        { name: 'Mobile-First UI', detail: 'Tailored for high-touch mobile UX' },
        { name: 'Technical Architecture', detail: 'Edge caching & SSR performance' },
        { name: 'Conversion UI', detail: 'High-contrast CTAs & instant chat triggers' },
        { name: 'Performance Optimization', detail: 'Asset tree-shaking & WebP/AVIF' },
      ],
      metricsHighlight: { label: 'Speed SLA', value: '<0.8s Global LCP' },
    },
    {
      pillarNumber: '03',
      title: 'Growth & Authority',
      tagline: 'Visibility, Analytics & Revenue Scale',
      icon: TrendingUp,
      accentColor: 'from-cyan-400 to-blue-600',
      badgeBg: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
      borderColor: 'border-cyan-500/20 hover:border-cyan-500/50',
      glowColor: 'group-hover:shadow-cyan-900/30',
      description:
        'Traffic without conversion is a vanity metric. We connect real search analytics to customer acquisition pipelines for maximum ROI.',
      subCapabilities: [
        { name: 'Search Visibility Share', detail: 'SERP real estate & top 3 capture' },
        { name: 'Authority Link Building', detail: 'High-DR contextual backlinks' },
        { name: 'Content Architecture', detail: 'Topic clusters & E-E-A-T depth' },
        { name: 'Full-Funnel Analytics', detail: 'GSC, GA4 & CRM event tracking' },
        { name: 'Conversion Rate Opt (CRO)', detail: 'A/B testing & lead flow refinement' },
        { name: 'Competitor Reverse-Eng', detail: 'SERP gap & keyword arbitrage' },
      ],
      metricsHighlight: { label: 'Conversion Avg', value: '4.8% Search-to-Lead' },
    },
  ];

  return (
    <section id="ecosystem" className="relative py-20 lg:py-32 bg-model3-panel text-white border-b border-white/10 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-purple-900/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/15 backdrop-blur-md mb-4">
            <Layers className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
              Digital Growth Ecosystem
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-heading mb-5">
            Three Pillars. One Scalable Revenue Machine.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium">
            We don&apos;t treat SEO, development, and conversion as separate silos. Model 3 unifies them into a single high-efficiency engine.
          </p>
        </div>

        {/* 3 Major Pillar Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.pillarNumber}
                className={`relative rounded-3xl bg-model3-deep border ${pillar.borderColor} p-8 flex flex-col justify-between shadow-2xl transition-all duration-300 group hover:-translate-y-1 ${pillar.glowColor}`}
              >
                {/* Pillar Header */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${pillar.accentColor} p-[1px] shadow-lg`}>
                        <div className="w-full h-full bg-model3-surface rounded-[15px] flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono tracking-widest text-slate-400 block uppercase">
                          Pillar {pillar.pillarNumber}
                        </span>
                        <h3 className="text-xl font-bold text-white font-heading">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>

                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${pillar.badgeBg}`}>
                      {pillar.metricsHighlight.value}
                    </span>
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
                    {pillar.tagline}
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {pillar.description}
                  </p>

                  {/* Sub-capabilities Checklist */}
                  <div className="space-y-3 pt-6 border-t border-white/10 mb-8">
                    {pillar.subCapabilities.map((sub, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-xs font-bold text-slate-200 block">
                            {sub.name}
                          </span>
                          <span className="text-[11px] text-slate-400 block">
                            {sub.detail}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">
                    Integrated Deployment
                  </span>
                  <a
                    href="#pricing"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Deploy Pillar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Unified Ecosystem Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-purple-950/40 via-model3-deep to-amber-950/30 border border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
            <span className="text-sm text-slate-200 font-medium">
              Want a comprehensive audit of how your current site balances these 3 pillars?
            </span>
          </div>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-md shadow-amber-400/20"
          >
            <span>Request Pillar Audit</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
          </a>
        </div>
      </div>
    </section>
  );
};
