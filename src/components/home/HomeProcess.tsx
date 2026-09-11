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
import { Link } from 'react-router-dom';

export const HomeProcess: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'DISCOVERY & CODEBASE AUDITING',
      subtitle: 'Technical & Telemetry Baseline',
      icon: Search,
      desc: 'We perform an exhaustive codebase, server log, and crawl budget audit while reverse-engineering your top 5 competitor search and acquisition funnels.',
      deliverables: ['Codebase health & crawl log audit', 'Competitor keyword & media intercept matrix', 'Baseline telemetry configuration'],
    },
    {
      number: '02',
      title: 'GROWTH & COMPLIANCE ARCHITECTURE',
      subtitle: 'Information & Policy Roadmap',
      icon: Compass,
      desc: 'We architect a defensible growth blueprint: URL taxonomies, schema entity graphs, whitelisted ad funnel compliance, and payment gateway failover trees.',
      deliverables: ['Information architecture blueprint', 'JSON-LD schema templates', 'Ad compliance & bridge page specs'],
    },
    {
      number: '03',
      title: 'HIGH-PERFORMANCE ENGINEERING',
      subtitle: 'Sub-Second Edge Deployment',
      icon: Code2,
      desc: 'We build custom, lightweight TypeScript/React web apps and landing pages with sub-650ms LCP, zero layout shift, and instant WhatsApp/Telegram conversion endpoints.',
      deliverables: ['Production edge landing pages (<650ms)', 'PWA mobile 1-tap install engines', 'Instant WhatsApp/Telegram VIP routing'],
    },
    {
      number: '04',
      title: 'WHITELISTED ACQUISITION & TESTING',
      subtitle: 'Compliant Traffic Ingestion',
      icon: Zap,
      desc: 'We launch policy-safe Google and Meta ad campaigns using whitelisted agency accounts, paired with active A/B testing of search snippets and deposit funnels.',
      deliverables: ['Whitelisted ad account scaling', 'Snippet CTR & deposit A/B testing', 'Server-Side Conversions API (CAPI)'],
    },
    {
      number: '05',
      title: 'SCALE & COMPOUNDING RETENTION',
      subtitle: 'LTV & Market Share Expansion',
      icon: TrendingUp,
      desc: 'With the growth engine compounding, we systematically expand programmatic keyword clusters, build high-DR contextual authority, and automate VIP player retention bots.',
      deliverables: ['Programmatic cluster rollout', 'High-DR contextual authority links', 'Automated VIP Telegram/WhatsApp CRM'],
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
            The 5-Step Engineering Process.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium">
            From technical discovery to compounding market leadership. A disciplined engineering timeline built for predictability, compliance, and velocity.
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
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 transition-all shadow-xl shadow-amber-400/20"
          >
            <span>Initiate Step 01: Platform Discovery Audit</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default HomeProcess;
