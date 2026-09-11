import React, { useState } from 'react';
import { 
  Search, 
  Zap, 
  ShieldCheck, 
  MessageSquare, 
  CheckCircle2, 
  Activity,
  Calculator
} from 'lucide-react';
import { Container } from '../ui';
import { trackEvent } from '../../analytics';

export const HomeGrowthPipeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  // Interactive Growth Calculator State
  const [monthlyVisits, setMonthlyVisits] = useState<number>(50000);
  const [currentRegRate, setCurrentRegRate] = useState<number>(12); // in %
  const [avgFirstDeposit, setAvgFirstDeposit] = useState<number>(1500); // in INR

  // Optimized projections with iGaming Growth System
  const optimizedRegRate = currentRegRate * 1.8; // +80% conversion uplift
  const currentMonthlyFTDs = Math.round((monthlyVisits * (currentRegRate / 100)) * 0.35);
  const optimizedMonthlyFTDs = Math.round((monthlyVisits * (optimizedRegRate / 100)) * 0.48);
  const additionalFTDs = optimizedMonthlyFTDs - currentMonthlyFTDs;
  const estimatedRevenueLift = additionalFTDs * avgFirstDeposit;

  const pipelineSteps = [
    {
      step: '01',
      title: 'Intent & Search Capture',
      badge: 'TOP OF FUNNEL',
      icon: Search,
      metrics: '94.8% Indexing Rate',
      headline: 'Programmatic Keyword Domination & Clean Paid Ingestion',
      description: 'We capture unbranded commercial intent across casino, betting, and trading queries using semantic clustering, entity-based schema moats, and compliant ad delivery.',
      details: [
        'Zero crawl budget wastage via strict canonical graph design',
        'Dynamic multi-language hreflang routing for international operators',
        'Pre-rendered static HTML targeting 10,000+ niche game keywords',
      ],
      codeSnippet: 'SERP_QUERY: "online casino real money" -> L1_NODE: RANK #1',
    },
    {
      step: '02',
      title: 'Sub-Second Edge Delivery',
      badge: 'INFRASTRUCTURE',
      icon: Zap,
      metrics: '< 650ms Global LCP',
      headline: 'Extreme Performance Landing Pages That Never Choke',
      description: 'Slow landing pages bleed 40%+ of paid clicks. We build custom TypeScript/Vite/Next edge pages that render instantaneously even on 3G mobile connections.',
      details: [
        'Zero heavy bloated CMS plugins or database blocking bottlenecks',
        'Geo-distributed asset caching on global Tier-1 CDN edge nodes',
        'Instantaneous mobile first-contentful-paint (<350ms FCP)',
      ],
      codeSnippet: 'EDGE_CACHE: HIT (99.4%) | RESPONSE_TIME: 18ms | LCP: 612ms',
    },
    {
      step: '03',
      title: 'Compliance & Traffic Shield',
      badge: 'RISK DEFENSE',
      icon: ShieldCheck,
      metrics: 'Zero Account Bans',
      headline: 'Active Account Defense & Bot/Competitor Scraping Immunity',
      description: 'In regulated verticals, competitor DDoS attacks and ad account bans kill revenue. Our architecture uses sophisticated proxy shields and real-user biometric validation.',
      details: [
        'Automated IP filtering against malicious competitor scrapers',
        'Platform-safe whitelisting and proxy infrastructure for media buying',
        'Regulatory disclaimer automation tailored to operator jurisdiction',
      ],
      codeSnippet: 'FIREWALL: ARMORED | THREAT_MITIGATION: ACTIVE | UPTIME: 99.99%',
    },
    {
      step: '04',
      title: 'Deposit & Player Conversion',
      badge: 'MONETIZATION',
      icon: MessageSquare,
      metrics: '3.8x Conversion Lift',
      headline: 'Frictionless WhatsApp, Telegram & Direct Registration',
      description: 'Traditional registration forms destroy conversion. We route qualified players straight into automated VIP WhatsApp flows and 1-click registration endpoints.',
      details: [
        'Direct-to-WhatsApp automated greeting and deposit onboarding',
        'Real-time conversion telemetry piped into Looker Studio dashboards',
        'Continuous heatmapping and checkout/deposit micro-optimization',
      ],
      codeSnippet: 'CONVERSION_EVENT: LEAD_QUALIFIED -> WHATSAPP_API: 200_OK',
    },
  ];

  const current = pipelineSteps[activeStep];

  return (
    <section className="relative py-20 lg:py-28 bg-model3-panel overflow-hidden border-b border-white/10">
      <div className="absolute top-0 right-1/3 w-[600px] h-[350px] rounded-full bg-purple-600/10 blur-[130px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Activity className="w-3.5 h-3.5 text-amber-400" />
            <span>Full-Funnel Lifecycle Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading mb-4">
            The High-Competition Growth Pipeline
          </h2>
          <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
            How unindexed code and paid media transform into high-velocity deposits and compounding player LTV:
          </p>
        </div>

        {/* Pipeline Step Navigator */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {pipelineSteps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={step.step}
                type="button"
                onClick={() => {
                  setActiveStep(idx);
                  trackEvent('home_pipeline_step_click', { step: step.step });
                }}
                className={`p-5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                  isActive
                    ? 'bg-gradient-to-br from-purple-950/70 to-model3-surface border-purple-500 shadow-glow-sm scale-[1.02]'
                    : 'bg-model3-surface/50 border-white/10 hover:border-white/20 hover:bg-model3-surface'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-black font-mono ${isActive ? 'text-amber-400' : 'text-slate-500'}`}>
                    PHASE {step.step}
                  </span>
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${isActive ? 'bg-purple-500/20 text-purple-300' : 'bg-white/5 text-slate-400'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div className={`text-sm font-bold ${isActive ? 'text-white' : 'text-slate-300'}`}>
                  {step.title}
                </div>
                <div className="text-[10px] font-mono text-purple-300/80 mt-2">
                  {step.metrics}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Terminal Display */}
        <div className="rounded-3xl border border-white/15 bg-model3-surface/90 shadow-2xl p-6 sm:p-8 lg:p-10 backdrop-blur-xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Details */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400">
                  {current.badge}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  STATUS: OPTIMIZED ARCHITECTURE
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-4">
                {current.headline}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {current.description}
              </p>

              <div className="space-y-3 mb-6">
                {current.details.map((detail, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Telemetry Terminal Box */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/10 bg-[#060810] p-5 font-mono text-xs shadow-inner">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4 text-slate-500 text-[11px]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-slate-400">pipeline.telemetry</span>
                  </div>
                  <span className="text-emerald-400 text-[10px]">LIVE STREAM</span>
                </div>

                <div className="space-y-2.5 text-slate-300">
                  <div className="text-slate-500"># Real-time pipeline verification</div>
                  <div className="text-amber-400">{current.codeSnippet}</div>
                  <div className="text-slate-400">LATENCY_PROFILE: SUB_SECOND_BURST</div>
                  <div className="text-purple-400">ALLOCATION: 100% SECURE_TUNNEL</div>
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px]">
                    <span className="text-slate-500">Benchmark:</span>
                    <span className="text-emerald-400 font-bold">{current.metrics}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Interactive Monthly Growth & ROI Simulator ──────────────────────── */}
        <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-model3-surface via-model3-base to-model3-surface border border-white/15 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
                <Calculator className="w-3.5 h-3.5" />
                <span>Interactive Growth Simulator</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white font-heading">
                Calculate Your Platform’s Conversion &amp; Deposit Lift
              </h3>
            </div>
            <span className="text-xs text-slate-400 font-mono">
              Empirical formula based on 50+ live deployments
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Sliders on Left */}
            <div className="lg:col-span-6 space-y-6">
              {/* Slider 1: Monthly Traffic */}
              <div>
                <div className="flex justify-between items-center text-xs font-bold mb-2">
                  <span className="text-slate-300">Monthly Visitors / Traffic</span>
                  <span className="text-amber-400 font-mono text-sm">{monthlyVisits.toLocaleString()} visits</span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="500000"
                  step="5000"
                  value={monthlyVisits}
                  onChange={(e) => setMonthlyVisits(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer"
                />
              </div>

              {/* Slider 2: Current Reg Rate */}
              <div>
                <div className="flex justify-between items-center text-xs font-bold mb-2">
                  <span className="text-slate-300">Current Registration Rate</span>
                  <span className="text-purple-400 font-mono text-sm">{currentRegRate}%</span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="30"
                  step="1"
                  value={currentRegRate}
                  onChange={(e) => setCurrentRegRate(Number(e.target.value))}
                  className="w-full accent-purple-500 cursor-pointer"
                />
              </div>

              {/* Slider 3: Avg First Deposit */}
              <div>
                <div className="flex justify-between items-center text-xs font-bold mb-2">
                  <span className="text-slate-300">Average First Deposit (FTD)</span>
                  <span className="text-emerald-400 font-mono text-sm">₹{avgFirstDeposit.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="10000"
                  step="250"
                  value={avgFirstDeposit}
                  onChange={(e) => setAvgFirstDeposit(Number(e.target.value))}
                  className="w-full accent-emerald-400 cursor-pointer"
                />
              </div>
            </div>

            {/* Calculated Results on Right */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                <span className="text-xs text-slate-400 block mb-1">Projected Monthly FTDs</span>
                <div className="text-2xl sm:text-3xl font-black text-white font-heading">
                  +{additionalFTDs.toLocaleString()} <span className="text-xs font-normal text-emerald-400">new/mo</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-2">
                  From {currentMonthlyFTDs.toLocaleString()} up to <strong className="text-emerald-400">{optimizedMonthlyFTDs.toLocaleString()}</strong> funded players.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-amber-400/10 border border-amber-400/30">
                <span className="text-xs text-amber-300 block mb-1 font-bold">Estimated Monthly GGR Lift</span>
                <div className="text-2xl sm:text-3xl font-black text-amber-400 font-heading">
                  +₹{Math.round(estimatedRevenueLift / 100000).toLocaleString()} Lakhs
                </div>
                <p className="text-[11px] text-slate-300 mt-2">
                  ≈ ₹{estimatedRevenueLift.toLocaleString()} in net first deposits added every 30 days.
                </p>
              </div>
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
};

export default HomeGrowthPipeline;
