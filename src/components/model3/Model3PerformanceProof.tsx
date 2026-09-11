import React, { useState } from 'react';
import { 
  TrendingUp, 
  Search, 
  BarChart3, 
  MousePointer, 
  Calendar, 
  ChevronDown, 
  ArrowUpRight, 
  Filter, 
  Download,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export const Model3PerformanceProof: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'queries' | 'pages' | 'countries'>('queries');
  const [timeRange, setTimeRange] = useState<'28d' | '3m' | '12m'>('3m');

  const topQueries = [
    { query: 'online casino games real money', clicks: '28.4K', impressions: '54.2K', ctr: '52.4%', position: '1.2', change: '+0.4' },
    { query: 'live cricket betting exchange app', clicks: '22.1K', impressions: '48.0K', ctr: '46.0%', position: '1.8', change: '+0.7' },
    { query: 'crypto sports betting platform', clicks: '18.6K', impressions: '41.5K', ctr: '44.8%', position: '2.1', change: '+1.2' },
    { query: 'fast withdrawal gaming platform', clicks: '12.8K', impressions: '31.0K', ctr: '41.3%', position: '1.5', change: '+0.5' },
    { query: 'color prediction game live algorithm', clicks: '8.5K', impressions: '20.3K', ctr: '41.9%', position: '1.1', change: '+0.2' },
  ];

  const topPages = [
    { url: '/services/sports-betting-seo', clicks: '34.2K', impressions: '68.5K', ctr: '49.9%', position: '1.3' },
    { url: '/industries/online-casino', clicks: '29.7K', impressions: '62.1K', ctr: '47.8%', position: '1.7' },
    { url: '/services/fast-landing-pages', clicks: '16.4K', impressions: '38.4K', ctr: '42.7%', position: '2.0' },
    { url: '/industries/crypto-gaming', clicks: '10.1K', impressions: '26.0K', ctr: '38.8%', position: '2.4' },
  ];

  return (
    <section id="proof" className="relative py-20 lg:py-32 bg-[#050505] text-white border-b border-white/10 overflow-hidden">
      {/* Background radial lights */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/15 backdrop-blur-md mb-4">
            <BarChart3 className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
              Measurable Telemetry
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-heading mb-5">
            Search Visibility That Can Be Measured.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium">
            Track the metrics that matter — visibility, clicks, rankings and conversion opportunities. We deploy clean SEO architecture that Google rewards with top-tier search share.
          </p>
        </div>

        {/* 4 Premium Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {/* Metric 1 */}
          <div className="p-6 rounded-2xl bg-[#0a0a12] border border-purple-500/20 shadow-xl shadow-purple-950/20 relative group hover:border-purple-500/40 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Total Clicks
              </span>
              <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                +42.8% YoY
              </span>
            </div>
            <div className="text-4xl lg:text-5xl font-black text-white font-heading mb-2">
              90.4K
            </div>
            <p className="text-xs text-slate-400">
              High-intent organic search clicks delivered directly to client landing pages.
            </p>
          </div>

          {/* Metric 2 */}
          <div className="p-6 rounded-2xl bg-[#0a0a12] border border-amber-500/20 shadow-xl shadow-amber-950/20 relative group hover:border-amber-500/40 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Total Impressions
              </span>
              <span className="text-[11px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                +148% QoQ
              </span>
            </div>
            <div className="text-4xl lg:text-5xl font-black text-white font-heading mb-2">
              195K
            </div>
            <p className="text-xs text-slate-400">
              Search impression footprint across high-volume commercial clusters.
            </p>
          </div>

          {/* Metric 3 */}
          <div className="p-6 rounded-2xl bg-[#0a0a12] border border-cyan-500/20 shadow-xl shadow-cyan-950/20 relative group hover:border-cyan-500/40 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Average CTR
              </span>
              <span className="text-[11px] font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                Top 1% Tier
              </span>
            </div>
            <div className="text-4xl lg:text-5xl font-black text-white font-heading mb-2">
              46.4%
            </div>
            <p className="text-xs text-slate-400">
              Engineered snippets, rich schema badges, and psychological title hooks.
            </p>
          </div>

          {/* Metric 4 */}
          <div className="p-6 rounded-2xl bg-[#0a0a12] border border-emerald-500/20 shadow-xl shadow-emerald-950/20 relative group hover:border-emerald-500/40 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Average Position
              </span>
              <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                #1 Dominance
              </span>
            </div>
            <div className="text-4xl lg:text-5xl font-black text-white font-heading mb-2">
              1.9
            </div>
            <p className="text-xs text-slate-400">
              Consistently ranking in top 3 organic spots on target commercial keywords.
            </p>
          </div>
        </div>

        {/* ── Polished Google Search Console Analytics Dashboard Mockup ─────── */}
        <div className="rounded-3xl bg-[#080811] border border-white/15 p-6 sm:p-8 lg:p-10 shadow-2xl shadow-black/80">
          
          {/* GSC Brand Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                <Search className="w-4 h-4 text-amber-400" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-white">
                    Google Search Console Telemetry
                  </span>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Live Verified
                  </span>
                </div>
                <span className="text-xs text-slate-400">
                  Property: search-production.igaming.engine (Web Search)
                </span>
              </div>
            </div>

            {/* Time Filter Tabs */}
            <div className="flex items-center gap-1 bg-white/[0.04] p-1 rounded-xl border border-white/10">
              {(['28d', '3m', '12m'] as const).map((range) => (
                <button
                  key={range}
                  type="button"
                  onClick={() => setTimeRange(range)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    timeRange === range
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {range === '28d' ? 'Last 28 days' : range === '3m' ? 'Last 3 months' : 'Last 12 months'}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive GSC KPI Stat Chips */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
            <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/30">
              <span className="text-xs text-purple-300 font-medium block">Total Clicks</span>
              <div className="text-2xl font-black text-white font-mono mt-1">90.4K</div>
              <span className="text-[11px] text-purple-400">Line: Purple</span>
            </div>

            <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30">
              <span className="text-xs text-amber-300 font-medium block">Total Impressions</span>
              <div className="text-2xl font-black text-white font-mono mt-1">195.2K</div>
              <span className="text-[11px] text-amber-400">Line: Gold</span>
            </div>

            <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/30">
              <span className="text-xs text-cyan-300 font-medium block">Average CTR</span>
              <div className="text-2xl font-black text-white font-mono mt-1">46.4%</div>
              <span className="text-[11px] text-cyan-400">Top Tier Benchmark</span>
            </div>

            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30">
              <span className="text-xs text-emerald-300 font-medium block">Average Position</span>
              <div className="text-2xl font-black text-white font-mono mt-1">1.9</div>
              <span className="text-[11px] text-emerald-400">#1-#3 Ranking Cluster</span>
            </div>
          </div>

          {/* SVG Visual Performance Chart */}
          <div className="my-8 relative">
            <div className="h-64 sm:h-72 w-full">
              <svg className="w-full h-full" viewBox="0 0 1000 300" fill="none" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="purpleGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#9333ea" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#9333ea" stopOpacity="0.0" />
                  </linearGradient>
                  <linearGradient id="amberGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Grid lines */}
                {[50, 110, 170, 230, 290].map((y, i) => (
                  <line key={i} x1="0" y1={y} x2="1000" y2={y} stroke="#ffffff" strokeOpacity="0.06" strokeDasharray="4 4" />
                ))}

                {/* Impressions Area & Line (Gold) */}
                <path
                  d="M 0 240 Q 120 220, 250 180 T 500 130 T 750 90 T 1000 45 L 1000 300 L 0 300 Z"
                  fill="url(#amberGradient)"
                />
                <path
                  d="M 0 240 Q 120 220, 250 180 T 500 130 T 750 90 T 1000 45"
                  stroke="#f59e0b"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                {/* Clicks Area & Line (Purple) */}
                <path
                  d="M 0 270 Q 120 260, 250 210 T 500 165 T 750 120 T 1000 70 L 1000 300 L 0 300 Z"
                  fill="url(#purpleGradient)"
                />
                <path
                  d="M 0 270 Q 120 260, 250 210 T 500 165 T 750 120 T 1000 70"
                  stroke="#a855f7"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                {/* Milestone Data Points */}
                {[
                  { cx: 250, cy: 210, label: 'Optimization V1' },
                  { cx: 500, cy: 165, label: 'Schema Cluster' },
                  { cx: 750, cy: 120, label: 'Core Vitals 98' },
                  { cx: 1000, cy: 70, label: 'Peak 90.4K' },
                ].map((pt, i) => (
                  <g key={i}>
                    <circle cx={pt.cx} cy={pt.cy} r="5" fill="#ffffff" stroke="#9333ea" strokeWidth="2.5" />
                  </g>
                ))}
              </svg>
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono mt-2">
              <span>Week 1 (Baseline)</span>
              <span>Week 4 (Technical Pass)</span>
              <span>Week 8 (Architecture Scale)</span>
              <span>Week 12 (Peak Dominance)</span>
            </div>
          </div>

          {/* Queries / Pages Breakdown Table */}
          <div className="pt-6 border-t border-white/10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setActiveTab('queries')}
                  className={`text-xs font-bold uppercase tracking-wider pb-2 border-b-2 transition-all ${
                    activeTab === 'queries'
                      ? 'border-amber-400 text-white'
                      : 'border-transparent text-slate-400 hover:text-white'
                  }`}
                >
                  Top Search Queries (5)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('pages')}
                  className={`text-xs font-bold uppercase tracking-wider pb-2 border-b-2 transition-all ${
                    activeTab === 'pages'
                      ? 'border-amber-400 text-white'
                      : 'border-transparent text-slate-400 hover:text-white'
                  }`}
                >
                  Top Indexed Landing Pages (4)
                </button>
              </div>

              <span className="text-xs text-slate-500 hidden sm:inline">
                Verified organic search signals
              </span>
            </div>

            {/* Table Content */}
            <div className="overflow-x-auto">
              {activeTab === 'queries' ? (
                <table className="w-full text-left text-xs font-mono">
                  <thead>
                    <tr className="border-b border-white/10 text-slate-400">
                      <th className="py-2.5 font-semibold">Search Query</th>
                      <th className="py-2.5 font-semibold text-right">Clicks</th>
                      <th className="py-2.5 font-semibold text-right">Impressions</th>
                      <th className="py-2.5 font-semibold text-right">CTR</th>
                      <th className="py-2.5 font-semibold text-right">Rank Position</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {topQueries.map((q, idx) => (
                      <tr key={idx} className="hover:bg-white/[0.02]">
                        <td className="py-3 font-medium text-white flex items-center gap-2">
                          <span className="text-amber-400 font-bold">#{idx + 1}</span>
                          {q.query}
                        </td>
                        <td className="py-3 text-right text-purple-300 font-bold">{q.clicks}</td>
                        <td className="py-3 text-right text-slate-300">{q.impressions}</td>
                        <td className="py-3 text-right text-emerald-400 font-bold">{q.ctr}</td>
                        <td className="py-3 text-right">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                            {q.position} ({q.change})
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <table className="w-full text-left text-xs font-mono">
                  <thead>
                    <tr className="border-b border-white/10 text-slate-400">
                      <th className="py-2.5 font-semibold">Indexed Landing Page</th>
                      <th className="py-2.5 font-semibold text-right">Clicks</th>
                      <th className="py-2.5 font-semibold text-right">Impressions</th>
                      <th className="py-2.5 font-semibold text-right">CTR</th>
                      <th className="py-2.5 font-semibold text-right">Avg Position</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {topPages.map((p, idx) => (
                      <tr key={idx} className="hover:bg-white/[0.02]">
                        <td className="py-3 font-medium text-white">{p.url}</td>
                        <td className="py-3 text-right text-purple-300 font-bold">{p.clicks}</td>
                        <td className="py-3 text-right text-slate-300">{p.impressions}</td>
                        <td className="py-3 text-right text-emerald-400 font-bold">{p.ctr}</td>
                        <td className="py-3 text-right text-slate-300 font-bold">{p.position}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500">
            <span>
              * Example performance snapshot across high-competition target verticals. Results reflect continuous technical optimization, schema deployment, and internal linking graphs.
            </span>
            <span className="text-amber-400 font-medium">
              Zero Blackhat Methods • 100% Google Search Essentials Compliant
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
