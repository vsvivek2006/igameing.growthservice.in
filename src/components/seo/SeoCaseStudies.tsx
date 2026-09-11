import React, { useState } from 'react';
import { 
  TrendingUp, 
  ArrowRight, 
  ExternalLink
} from 'lucide-react';

export const SeoCaseStudies: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<number>(0);

  const cases = [
    {
      id: 0,
      title: 'Global Regulated Casino & Live Dealer Search Takeover',
      industry: 'ONLINE CASINO & GAMING',
      duration: '6-Month Campaign',
      metrics: [
        { label: 'Organic Clicks', value: '90.4K', change: '+142%', badge: 'Verified' },
        { label: 'Search Impressions', value: '195K', change: '+210%', badge: 'High Volume' },
        { label: 'Snippet CTR', value: '46.4%', change: 'Top 1%', badge: 'SERP Win' },
        { label: 'Avg Position', value: '1.9', change: '#1-#3', badge: 'Dominance' },
      ],
      challenge:
        'Client faced algorithmic stagnation on high-intent commercial terms due to legacy monolithic CMS bloat, slow mobile render speeds (4.2s), and disorganized taxonomy.',
      approach:
        'Engineered a complete headless migration with clean TypeScript, structured JSON-LD entity markup for 200+ game variants, and surgical internal link routing.',
      visualChart: [
        { month: 'M1', val: 25 },
        { month: 'M2', val: 38 },
        { month: 'M3', val: 55 },
        { month: 'M4', val: 72 },
        { month: 'M5', val: 84 },
        { month: 'M6', val: 100 },
      ],
      keyOutcome: 'Secured #1 spot for 14 high-volume commercial keywords with 4.8% search-to-lead conversion.',
    },
    {
      id: 1,
      title: 'Live Sportsbook & Cricket Tournament Surge Architecture',
      industry: 'SPORTS BETTING & EXCHANGES',
      duration: '4-Month Tournament Sprint',
      metrics: [
        { label: 'Tournament Clicks', value: '142K', change: '+310%', badge: 'Spike Proof' },
        { label: 'Peak Impressions', value: '380K', change: '+440%', badge: 'Mega Reach' },
        { label: 'Mobile LCP', value: '0.7s', change: 'Zero CLS', badge: 'Ultra Fast' },
        { label: 'Deposit Conversion', value: '6.2%', change: '+85%', badge: 'High Value' },
      ],
      challenge:
        'Massive recurring query spikes during major cricket tournaments crashed the client’s legacy site and led to high bounce rates and lost organic ranking.',
      approach:
        'Built edge-cached static landing pages with dynamic WebSocket odds hydration, pre-indexed event schedule schema, and instant 1-click WhatsApp deposit onboarding.',
      visualChart: [
        { month: 'W1', val: 15 },
        { month: 'W4', val: 32 },
        { month: 'W8', val: 68 },
        { month: 'W12', val: 92 },
        { month: 'W16', val: 100 },
      ],
      keyOutcome: 'Handled 40,000 concurrent organic landing visitors with 99.99% uptime and zero ranking drop.',
    },
    {
      id: 2,
      title: 'Institutional Fintech & Algorithmic Trading Inbound Pipeline',
      industry: 'FINTECH & FINANCIAL PLATFORMS',
      duration: '9-Month Authority Program',
      metrics: [
        { label: 'High-Intent Clicks', value: '68K', change: '+94%', badge: 'Qualified' },
        { label: 'Pipeline Generated', value: '₹1.8Cr', change: '+180%', badge: 'Revenue' },
        { label: 'Referring Domains', value: '420+', change: 'DR 68', badge: 'Editorial' },
        { label: 'Lead Quality Score', value: '94/100', change: '+45%', badge: 'Institutional' },
      ],
      challenge:
        'Client was spending over ₹8,00,000 monthly on paid ads with rising CPA and zero enduring organic search presence for competitive copy trading and broker terms.',
      approach:
        'Created an authoritative 40-guide programmatic content hub with institutional E-E-A-T credentials, financial tool calculators, and deep schema markup.',
      visualChart: [
        { month: 'Q1', val: 20 },
        { month: 'Q2', val: 45 },
        { month: 'Q3', val: 78 },
        { month: 'Q4', val: 100 },
      ],
      keyOutcome: 'Replaced 40% of paid ad reliance with permanent #1-#3 organic positions on key financial queries.',
    },
  ];

  const current = cases[selectedCase];

  return (
    <section id="casestudies" className="relative py-20 lg:py-32 bg-model3-base text-white border-b border-white/10 overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/4 right-10 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/15 backdrop-blur-md mb-4">
            <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
              Verified Case Telemetry
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-heading mb-5">
            Results Speak Louder Than Promises.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium">
            Real performance across high-stakes digital environments. We do not hide behind vanity metrics; we track the real search visibility and pipeline impact delivered.
          </p>
        </div>

        {/* Case Study Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {cases.map((c, idx) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setSelectedCase(idx)}
              className={`px-4 sm:px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2.5 ${
                selectedCase === idx
                  ? 'bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 shadow-lg shadow-amber-400/25 scale-[1.02]'
                  : 'bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 border border-white/10'
              }`}
            >
              <span className="font-mono text-xs opacity-75">0{idx + 1}</span>
              <span>{c.industry}</span>
            </button>
          ))}
        </div>

        {/* Active Case Study Showcase Card */}
        <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-model3-surface border border-white/15 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Narrative Details */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    {current.industry}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {current.duration}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mb-6 leading-tight">
                  {current.title}
                </h3>

                <div className="space-y-4 mb-8">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-[11px] font-mono uppercase text-red-400 block font-bold mb-1">
                      The Challenge:
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {current.challenge}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-[11px] font-mono uppercase text-amber-400 block font-bold mb-1">
                      The Architectural Approach:
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {current.approach}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 mb-8">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 block font-bold mb-1">
                    Key Verified Outcome:
                  </span>
                  <p className="text-sm font-semibold text-emerald-200">
                    {current.keyOutcome}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                <a
                  href="#pricing"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-md shadow-amber-400/20"
                >
                  <span>Replicate This Framework</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
                </a>
                <a
                  href="https://wa.me/919999999999?text=Hello%2C%20I%20saw%20your%20case%20study%20on%20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5"
                >
                  <span>Discuss Similar Strategy</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Right Column: Visual Metrics Dashboard */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              
              {/* 4 Metric Chips */}
              <div className="grid grid-cols-2 gap-4">
                {current.metrics.map((m, mIdx) => (
                  <div
                    key={mIdx}
                    className="p-5 rounded-2xl bg-model3-deep border border-white/10 shadow-lg relative group hover:border-amber-400/40 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-medium text-slate-400">{m.label}</span>
                      <span className="text-[9px] font-bold font-mono px-1.5 py-0.5 rounded bg-amber-400/10 text-amber-300 border border-amber-400/20">
                        {m.badge}
                      </span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading mb-1">
                      {m.value}
                    </div>
                    <span className="text-xs font-bold text-emerald-400 font-mono">
                      {m.change}
                    </span>
                  </div>
                ))}
              </div>

              {/* Miniature Trend Growth Visualization */}
              <div className="p-5 rounded-2xl bg-model3-deep border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-white">Campaign Velocity Trend</span>
                  <span className="text-[10px] font-mono text-purple-400">Search Growth</span>
                </div>

                {/* Bar Graph */}
                <div className="flex items-end gap-2 h-24 pt-2">
                  {current.visualChart.map((bar, bIdx) => (
                    <div key={bIdx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                      <div
                        style={{ height: `${bar.val}%` }}
                        className="w-full rounded-t-md bg-gradient-to-t from-purple-700 via-indigo-500 to-amber-400 transition-all duration-500"
                      />
                      <span className="text-[10px] font-mono text-slate-400">{bar.month}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <span className="text-[11px] text-slate-500 italic">
                  * Telemetry data anonymized to preserve client proprietary SERP assets.
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
