import React, { useState } from 'react';
import { 
  TrendingUp, 
  Search, 
  Zap, 
  ShieldCheck, 
  BarChart2, 
  CheckCircle2, 
  ArrowUpRight,
  Cpu,
  Code2
} from 'lucide-react';
import { trackEvent } from '../../analytics';

export const HomePerformanceProof: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'search' | 'web' | 'paid' | 'cro'>('search');

  return (
    <section className="relative py-20 lg:py-28 bg-model3-surface/60 overflow-hidden border-b border-white/10">
      {/* Background glow effects */}
      <div className="absolute top-1/2 -left-20 w-[500px] h-[500px] bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[450px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/15 text-xs font-bold uppercase tracking-widest text-slate-300 mb-4">
            <BarChart2 className="w-3.5 h-3.5 text-amber-400" />
            <span>Empirical Telemetry Over Agency Promises</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight mb-4">
            Live Engineering Telemetry Across <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
              All 4 Growth Pillars
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            We don&apos;t hide behind vague monthly PDF reports. Our platforms operate with live production telemetry across organic rankings, edge latency, paid whitelisting, and deposit conversion.
          </p>
        </div>

        {/* Telemetry Multi-Pillar Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          <button
            type="button"
            onClick={() => {
              setActiveTab('search');
              trackEvent('home_proof_tab', { tab: 'search' });
            }}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 ${
              activeTab === 'search'
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-900/50'
                : 'bg-white/[0.04] text-slate-400 border border-white/10 hover:bg-white/[0.08] hover:text-white'
            }`}
          >
            <Search className="w-3.5 h-3.5" />
            <span>Search Console Telemetry</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab('web');
              trackEvent('home_proof_tab', { tab: 'web' });
            }}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 ${
              activeTab === 'web'
                ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-900/50'
                : 'bg-white/[0.04] text-slate-400 border border-white/10 hover:bg-white/[0.08] hover:text-white'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Web Engineering &amp; Speed</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab('paid');
              trackEvent('home_proof_tab', { tab: 'paid' });
            }}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 ${
              activeTab === 'paid'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-900/50'
                : 'bg-white/[0.04] text-slate-400 border border-white/10 hover:bg-white/[0.08] hover:text-white'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Compliant Paid Acquisition</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab('cro');
              trackEvent('home_proof_tab', { tab: 'cro' });
            }}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 ${
              activeTab === 'cro'
                ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-900/50'
                : 'bg-white/[0.04] text-slate-400 border border-white/10 hover:bg-white/[0.08] hover:text-white'
            }`}
          >
            <BarChart2 className="w-3.5 h-3.5" />
            <span>CRO &amp; Player Retention</span>
          </button>
        </div>

        {/* Dynamic Display Panel based on Active Tab */}
        <div className="rounded-3xl bg-model3-base/95 border border-white/15 p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl">
          
          {/* ── TAB 1: Search Console Organic Growth ─────────────────────────── */}
          {activeTab === 'search' && (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-400" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-300">
                      Google Search Console Telemetry
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white font-heading">
                    Competitive Casino &amp; Sportsbook Search Authority
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-xl">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Verified 90-Day Production Export</span>
                </div>
              </div>

              {/* 4 Big Metrics */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <span className="text-xs text-slate-400 block mb-1 font-mono">Total Clicks</span>
                  <div className="text-3xl font-black text-white font-heading">90.4K</div>
                  <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3" /> +184.2% MoM
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <span className="text-xs text-slate-400 block mb-1 font-mono">Total Impressions</span>
                  <div className="text-3xl font-black text-white font-heading">194.8K</div>
                  <span className="text-xs font-semibold text-purple-400 flex items-center gap-1 mt-1">
                    <ArrowUpRight className="w-3 h-3" /> 100% Non-Brand Intent
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <span className="text-xs text-slate-400 block mb-1 font-mono">Average CTR</span>
                  <div className="text-3xl font-black text-amber-400 font-heading">46.4%</div>
                  <span className="text-xs font-semibold text-amber-300 flex items-center gap-1 mt-1">
                    <Zap className="w-3 h-3" /> Rich Snippet Optimization
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <span className="text-xs text-slate-400 block mb-1 font-mono">Average Position</span>
                  <div className="text-3xl font-black text-cyan-400 font-heading">1.9</div>
                  <span className="text-xs font-semibold text-cyan-300 flex items-center gap-1 mt-1">
                    <CheckCircle2 className="w-3 h-3" /> Top 3 SERP Dominance
                  </span>
                </div>
              </div>

              {/* Sample Live Keywords Table */}
              <div className="rounded-2xl bg-white/[0.02] border border-white/10 overflow-hidden">
                <div className="px-4 py-3 bg-white/[0.02] border-b border-white/10 text-xs font-bold uppercase tracking-wider text-slate-400 flex justify-between">
                  <span>High-Intent Commercial Search Queries</span>
                  <span>Rank Telemetry</span>
                </div>
                <div className="divide-y divide-white/5 text-xs font-mono">
                  {[
                    { query: 'online cricket betting id official app', clicks: '28,490', ctr: '51.2%', pos: '1.2' },
                    { query: 'live casino roulette real money apk download', clicks: '22,110', ctr: '44.8%', pos: '1.8' },
                    { query: 'fast withdrawal color prediction platform login', clicks: '19,340', ctr: '48.1%', pos: '1.4' },
                    { query: 'best rummy game app instant deposit inr', clicks: '14,880', ctr: '39.7%', pos: '2.4' },
                  ].map((row, i) => (
                    <div key={i} className="px-4 py-3 flex items-center justify-between hover:bg-white/[0.02]">
                      <span className="text-slate-200">{row.query}</span>
                      <div className="flex items-center gap-4 text-right">
                        <span className="text-purple-300 font-bold">{row.clicks} clicks</span>
                        <span className="text-amber-400">{row.ctr}</span>
                        <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-bold">
                          #{row.pos}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ── TAB 2: Web Engineering & Core Web Vitals ─────────────────────── */}
          {activeTab === 'web' && (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
                      Core Web Vitals &amp; Edge Infrastructure
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white font-heading">
                    Sub-Second Headless PWA Performance
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1.5 rounded-xl">
                  <Cpu className="w-4 h-4" />
                  <span>Cloudflare Workers + React 18 Engine</span>
                </div>
              </div>

              {/* Lighthouse Metric Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-cyan-500/30">
                  <span className="text-xs text-slate-400 block mb-1 font-mono">Mobile Lighthouse</span>
                  <div className="text-3xl font-black text-cyan-400 font-heading">99 / 100</div>
                  <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1 mt-1">
                    <CheckCircle2 className="w-3 h-3" /> Zero Performance Penalties
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <span className="text-xs text-slate-400 block mb-1 font-mono">Largest Contentful Paint</span>
                  <div className="text-3xl font-black text-white font-heading">0.42s</div>
                  <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1 mt-1">
                    <Zap className="w-3 h-3" /> Target: &lt;2.5s (Beaten by 6x)
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <span className="text-xs text-slate-400 block mb-1 font-mono">Total Blocking Time</span>
                  <div className="text-3xl font-black text-emerald-400 font-heading">0 ms</div>
                  <span className="text-xs font-semibold text-slate-400 flex items-center gap-1 mt-1">
                    Zero Main-Thread Lockup
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <span className="text-xs text-slate-400 block mb-1 font-mono">Cumulative Layout Shift</span>
                  <div className="text-3xl font-black text-amber-400 font-heading">0.00</div>
                  <span className="text-xs font-semibold text-slate-400 flex items-center gap-1 mt-1">
                    Zero Visual Shift
                  </span>
                </div>
              </div>

              {/* Edge Network Benchmarks */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                  <div className="text-slate-400 mb-1">Global TTFB (Time To First Byte)</div>
                  <div className="text-lg font-bold text-white mb-2">48ms Average</div>
                  <p className="text-[11px] text-slate-400 font-sans">
                    Multi-region edge routing through 280+ Cloudflare data centers ensuring instant play for tier-1 &amp; emerging market users.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                  <div className="text-slate-400 mb-1">PWA Offline Resilience</div>
                  <div className="text-lg font-bold text-emerald-400 mb-2">100% App-Like</div>
                  <p className="text-[11px] text-slate-400 font-sans">
                    Full background service-worker caching allows instant launch even under poor 3G/4G connectivity without app store censorship.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                  <div className="text-slate-400 mb-1">Asset Payload Footprint</div>
                  <div className="text-lg font-bold text-cyan-300 mb-2">&lt;180 KB Total Bundle</div>
                  <p className="text-[11px] text-slate-400 font-sans">
                    Zero heavy bloated plugins. Pure modern TypeScript tree-shaken down to raw byte efficiency.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ── TAB 3: Compliant Paid Acquisition ────────────────────────────── */}
          {activeTab === 'paid' && (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-300">
                      Whitelisted Advertising Telemetry
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white font-heading">
                    Zero-Ban Acquisition for Regulated Verticals
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-xl">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Whitelisted Agency Ad Accounts</span>
                </div>
              </div>

              {/* Paid Metrics */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <span className="text-xs text-slate-400 block mb-1 font-mono">Blended ROAS</span>
                  <div className="text-3xl font-black text-amber-400 font-heading">4.8x</div>
                  <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3" /> Across Meta &amp; Google
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <span className="text-xs text-slate-400 block mb-1 font-mono">Account Ban Rate</span>
                  <div className="text-3xl font-black text-emerald-400 font-heading">0 Bans</div>
                  <span className="text-xs font-semibold text-slate-400 flex items-center gap-1 mt-1">
                    100% Policy Adherent Funnels
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <span className="text-xs text-slate-400 block mb-1 font-mono">CPA Reduction</span>
                  <div className="text-3xl font-black text-white font-heading">-42.6%</div>
                  <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1 mt-1">
                    CAPI Data Feed Optimization
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <span className="text-xs text-slate-400 block mb-1 font-mono">Qualified First Deposits</span>
                  <div className="text-3xl font-black text-cyan-400 font-heading">18.4K</div>
                  <span className="text-xs font-semibold text-slate-400 flex items-center gap-1 mt-1">
                    Tracked in 180-Day Window
                  </span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-300">
                  <span className="font-bold text-white block mb-0.5">Why Whitelisted Accounts Outperform Black-Hat Cloaking:</span>
                  Traditional black-hat media buyers churn through burner accounts that get banned in 48 hours, losing historical pixel learning and burning credit lines. Our whitelisted compliance framework ensures permanent pixel learning and unlimited scaling budgets.
                </div>
                <div className="shrink-0">
                  <span className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono font-bold">
                    Zero Cloaking Required
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* ── TAB 4: CRO & Retention CRM ───────────────────────────────────── */}
          {activeTab === 'cro' && (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-300">
                      Deposit Funnel &amp; Retention Telemetry
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white font-heading">
                    Turning Clicks Into High-LTV Active Players
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-xl">
                  <TrendingUp className="w-4 h-4" />
                  <span>3.8x Avg Deposit Uplift</span>
                </div>
              </div>

              {/* CRO Metrics */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <span className="text-xs text-slate-400 block mb-1 font-mono">Visitor to Reg Rate</span>
                  <div className="text-3xl font-black text-emerald-400 font-heading">28.4%</div>
                  <span className="text-xs font-semibold text-emerald-300 flex items-center gap-1 mt-1">
                    +12.2% vs Baseline
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <span className="text-xs text-slate-400 block mb-1 font-mono">Reg to First Deposit (FTD)</span>
                  <div className="text-3xl font-black text-amber-400 font-heading">41.8%</div>
                  <span className="text-xs font-semibold text-amber-300 flex items-center gap-1 mt-1">
                    UPI / Instant Routing
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <span className="text-xs text-slate-400 block mb-1 font-mono">30-Day Churn Drop</span>
                  <div className="text-3xl font-black text-cyan-400 font-heading">-54.2%</div>
                  <span className="text-xs font-semibold text-slate-400 flex items-center gap-1 mt-1">
                    Telegram Automation Bots
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <span className="text-xs text-slate-400 block mb-1 font-mono">Average Player LTV</span>
                  <div className="text-3xl font-black text-white font-heading">+68.5%</div>
                  <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1 mt-1">
                    Multi-Tier Reload Incentives
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                  <span className="font-bold text-white block mb-1 font-mono">Frictionless Registration Flow:</span>
                  <p className="text-slate-400 leading-relaxed">
                    By converting standard 7-field KYC friction points into progressive onboarding with 1-tap WhatsApp OTP, drop-off during peak sports match hours decreases by over 40%.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                  <span className="font-bold text-white block mb-1 font-mono">Automated Retention Engines:</span>
                  <p className="text-slate-400 leading-relaxed">
                    Custom Telegram and WhatsApp Webhooks automatically trigger personalized reload credits within 15 minutes of an abandoned deposit, recovering high-intent players before they leave.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

export default HomePerformanceProof;
