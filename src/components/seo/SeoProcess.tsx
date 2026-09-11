import React from 'react';
import { 
  Search, 
  Compass, 
  Code2, 
  Zap, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';

export const SeoProcess: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'DISCOVERY & REVERSE-ENGINEERING',
      subtitle: 'Audit & Telemetry Baseline',
      icon: Search,
      desc: 'We perform a deep technical crawl of your domain and reverse-engineer the exact keyword clusters and backlink profiles powering your top 5 SERP competitors.',
      deliverables: ['Codebase health crawl', 'Competitor keyword intercept matrix', 'Baseline Search Console audit'],
    },
    {
      number: '02',
      title: 'STRATEGIC ARCHITECTURE',
      subtitle: 'Information & Schema Roadmap',
      icon: Compass,
      desc: 'We map out a structured 50-page hub-and-spoke content architecture, define custom JSON-LD schema entity graphs, and establish internal PageRank routing.',
      deliverables: ['Information architecture blueprint', 'JSON-LD schema templates', 'High-intent keyword allocation plan'],
    },
    {
      number: '03',
      title: 'BUILD & PERFORMANCE ENGINEERING',
      subtitle: 'Sub-Second Code Deployment',
      icon: Code2,
      desc: 'We construct custom, lightweight landing pages in modern TypeScript, eliminate layout shift, optimize fonts and media, and secure a verified 98+ Core Web Vitals score.',
      deliverables: ['Production landing pages (<800ms LCP)', 'Clean HTML5 semantic structure', 'Instant WhatsApp conversion widgets'],
    },
    {
      number: '04',
      title: 'OPTIMIZATION & SERP TESTING',
      subtitle: 'Clickthrough & Index Velocity',
      icon: Zap,
      desc: 'Once indexed, we monitor Google Search Console impressions daily, A/B test snippet titles and meta descriptions, and refine internal linking to propel pages into the top 3.',
      deliverables: ['Snippet CTR A/B testing', 'Real-time indexing telemetry', 'Internal link mesh tuning'],
    },
    {
      number: '05',
      title: 'SCALE & REGIONAL EXPANSION',
      subtitle: 'Market Share Capture',
      icon: TrendingUp,
      desc: 'With the core engine ranking, we systematically scale out programmatic keyword variations, expand into localized jurisdictions, and build authoritative contextual links.',
      deliverables: ['Programmatic cluster rollout', 'High-DR editorial citations', 'Quarterly search share forecasting'],
    },
  ];

  return (
    <section id="process" className="relative py-20 lg:py-32 bg-model3-base text-white border-b border-white/10 overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/15 backdrop-blur-md mb-4">
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
              Execution Methodology
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-heading mb-5">
            The 5-Step Model 3 Process.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium">
            From technical discovery to global search dominance. A disciplined engineering timeline built for predictability and velocity.
          </p>
        </div>

        {/* 5-Step Timeline Grid */}
        <div className="space-y-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="p-7 sm:p-8 rounded-3xl bg-model3-surface border border-white/10 shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 group hover:border-amber-400/40 transition-all duration-300"
              >
                {/* Number & Icon */}
                <div className="flex items-center gap-5 shrink-0">
                  <div className="text-3xl sm:text-4xl font-extrabold text-amber-400/30 group-hover:text-amber-400 font-mono transition-colors">
                    {step.number}
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-amber-400/40 transition-colors">
                    <Icon className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block">
                      {step.subtitle}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
                      {step.title}
                    </h3>
                  </div>
                </div>

                {/* Explanation */}
                <div className="lg:max-w-md">
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                {/* Deliverables Pills */}
                <div className="flex flex-col gap-1.5 shrink-0 lg:w-72">
                  <span className="text-[10px] uppercase font-mono font-bold text-slate-400 mb-1">
                    Key Deliverables:
                  </span>
                  {step.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate">{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 transition-all shadow-xl shadow-amber-400/20"
          >
            <span>Initiate Step 01: Discovery Audit</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </a>
        </div>

      </div>
    </section>
  );
};
