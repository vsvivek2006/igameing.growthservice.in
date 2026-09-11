import React, { useState } from 'react';
import { 
  TrendingUp, 
  Search, 
  Zap, 
  ArrowRight,
  Sparkles,
  Award,
  Lock,
  Maximize2,
  X,
  ExternalLink
} from 'lucide-react';
import { trackEvent } from '../../analytics';

interface LightboxState {
  src: string;
  title: string;
  subtitle: string;
  domain: string;
}

export const HomeWorkProof: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'yono' | 'daily' | 'iv7' | 'is7gam'>('yono');
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  const openLightbox = (src: string, title: string, subtitle: string, domain: string) => {
    setLightbox({ src, title, subtitle, domain });
    trackEvent('proof_zoom_modal_open', { domain });
  };

  return (
    <section className="relative py-20 lg:py-28 bg-model3-surface/70 overflow-hidden border-b border-white/10">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 -left-24 w-[500px] h-[500px] bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[450px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/15 text-xs font-bold uppercase tracking-widest text-slate-300 mb-4 shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Verified Results &amp; Real Search Traffic</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight mb-4">
            Real Proof From Real Sites. <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
              Millions of Real Players on Google.
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Direct, unedited Google Search Console analytics from gaming, casino, cricket ID, and betting exchange platforms engineered by our team.
          </p>
        </div>

        {/* Proof Category Switcher - Mobile-friendly smooth swipe bar */}
        <div className="flex items-center gap-2 sm:gap-2.5 mb-8 sm:mb-10 overflow-x-auto no-scrollbar sm:flex-wrap sm:justify-center px-1 pb-2">
          <button
            type="button"
            onClick={() => {
              setActiveTab('yono');
              trackEvent('proof_tab_switch', { tab: 'yono' });
            }}
            className={`shrink-0 flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 ${
              activeTab === 'yono'
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-900/50 scale-[1.02]'
                : 'bg-white/[0.04] text-slate-400 border border-white/10 hover:bg-white/[0.08] hover:text-white'
            }`}
          >
            <Search className="w-3.5 h-3.5" />
            <span>15.9M Clicks (Yono Games)</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab('daily');
              trackEvent('proof_tab_switch', { tab: 'daily' });
            }}
            className={`shrink-0 flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 ${
              activeTab === 'daily'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-900/50 scale-[1.02]'
                : 'bg-white/[0.04] text-slate-400 border border-white/10 hover:bg-white/[0.08] hover:text-white'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>90.4K Clicks / 24h (Live Inflow)</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab('iv7');
              trackEvent('proof_tab_switch', { tab: 'iv7' });
            }}
            className={`shrink-0 flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 ${
              activeTab === 'iv7'
                ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-900/50 scale-[1.02]'
                : 'bg-white/[0.04] text-slate-400 border border-white/10 hover:bg-white/[0.08] hover:text-white'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>22K Clicks (IV-7 Exchange)</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab('is7gam');
              trackEvent('proof_tab_switch', { tab: 'is7gam' });
            }}
            className={`shrink-0 flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 ${
              activeTab === 'is7gam'
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/50 scale-[1.02]'
                : 'bg-white/[0.04] text-slate-400 border border-white/10 hover:bg-white/[0.08] hover:text-white'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>Rank 2.9 &amp; 52.6% CTR (is7gam)</span>
          </button>
        </div>

        {/* Dynamic Proof Showcase */}
        <div className="rounded-3xl bg-model3-base/95 border border-white/15 p-4 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl">
          
          {/* TAB 1: Yono Games 15.9M Clicks */}
          {activeTab === 'yono' && (
            <div className="space-y-8 animate-fadeIn">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left: Pristine GSC Browser Mockup */}
                <div className="lg:col-span-7">
                  <div className="relative rounded-2xl overflow-hidden border border-purple-500/30 bg-slate-950 shadow-2xl shadow-purple-950/40 group">
                    {/* Simulated Browser Bar */}
                    <div className="flex items-center justify-between px-3.5 py-2.5 bg-slate-900/90 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                        <div className="ml-2 hidden sm:flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-black/60 border border-white/10 text-[10px] font-mono text-slate-300">
                          <Lock className="w-2.5 h-2.5 text-emerald-400" />
                          <span>search.google.com/search-console/yononewgamess.com</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-purple-500/10 border border-purple-500/30 text-purple-300 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          3 Months Report
                        </span>
                      </div>
                    </div>

                    {/* Cleaned Crystal Clear GSC Report */}
                    <div 
                      onClick={() => openLightbox('/images/proof/yono-15m-gsc-clean.webp', '15.9 Million Clicks on Google Search', 'yononewgamess.com · 3 Months Verified Performance', 'yononewgamess.com')}
                      className="relative cursor-pointer overflow-hidden bg-white"
                    >
                      <img
                        src="/images/proof/yono-15m-gsc-clean.webp"
                        alt="Google Search Console 15.9M Clicks Proof for yononewgamess.com"
                        width={1600}
                        height={824}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <span className="px-3.5 py-2 rounded-xl bg-slate-950/90 border border-purple-400 text-purple-300 text-xs font-bold shadow-xl flex items-center gap-2">
                          <Maximize2 className="w-3.5 h-3.5" />
                          Click to Inspect Full GSC Data
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Plain-English Operator Value */}
                <div className="lg:col-span-5 space-y-6">
                  <div>
                    <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-purple-400 mb-2 uppercase tracking-wider">
                      <span>Live SEO Case Study</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                      15.9 Million Players From Google Search
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed mt-2">
                      Direct Google Search Console export from <strong className="text-white">yononewgamess.com</strong>. We engineered a programmatic SEO infrastructure that pushed high-intent gaming terms to position #2.1, generating 15.9M organic player clicks.
                    </p>
                  </div>

                  {/* 4 Clear Stats */}
                  <div className="grid grid-cols-2 gap-3 font-mono">
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-purple-500/30">
                      <div className="text-[11px] text-slate-400">Total Player Clicks</div>
                      <div className="text-2xl font-extrabold text-white font-heading">15.9M</div>
                      <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1 mt-0.5">
                        <TrendingUp className="w-3 h-3" /> Real Google Traffic
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                      <div className="text-[11px] text-slate-400">Total Impressions</div>
                      <div className="text-2xl font-extrabold text-white font-heading">30.5M</div>
                      <span className="text-[10px] text-purple-300 font-bold mt-0.5 block">
                        Search Appearance
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                      <div className="text-[11px] text-slate-400">Click-Through Rate</div>
                      <div className="text-2xl font-extrabold text-amber-400 font-heading">52.2%</div>
                      <span className="text-[10px] text-amber-300 font-bold mt-0.5 block">
                        1 In Every 2 Clicks
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                      <div className="text-[11px] text-slate-400">Average Position</div>
                      <div className="text-2xl font-extrabold text-cyan-400 font-heading">2.1</div>
                      <span className="text-[10px] text-cyan-300 font-bold mt-0.5 block">
                        Top of Google SERP
                      </span>
                    </div>
                  </div>

                  <a
                    href="#pricing"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-md shadow-amber-400/20 transition-all"
                  >
                    <span>Get This Traffic For Your Site</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Yono 90.4K Daily Clicks In 24 Hours */}
          {activeTab === 'daily' && (
            <div className="space-y-8 animate-fadeIn">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left: Real GSC Screenshot */}
                <div className="lg:col-span-7">
                  <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 bg-slate-950 shadow-2xl shadow-amber-950/40 group">
                    <div className="flex items-center justify-between px-3.5 py-2.5 bg-slate-900/90 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                        <div className="ml-2 hidden sm:flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-black/60 border border-white/10 text-[10px] font-mono text-slate-300">
                          <Lock className="w-2.5 h-2.5 text-emerald-400" />
                          <span>search.google.com/search-console/yononewgamess.com</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/10 border border-amber-500/30 text-amber-300 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          24-Hour Live View
                        </span>
                      </div>
                    </div>

                    <div 
                      onClick={() => openLightbox('/images/proof/yono-daily-gsc-clean.webp', '90.4K Clicks in a Single 24-Hour Window', 'yononewgamess.com · Real Live Traffic Inflow', 'yononewgamess.com')}
                      className="relative cursor-pointer overflow-hidden bg-white"
                    >
                      <img
                        src="/images/proof/yono-daily-gsc-clean.webp"
                        alt="Google Search Console 90.4K Daily Clicks Proof - yononewgamess.com"
                        width={1600}
                        height={824}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <span className="px-3.5 py-2 rounded-xl bg-slate-950/90 border border-amber-400 text-amber-300 text-xs font-bold shadow-xl flex items-center gap-2">
                          <Maximize2 className="w-3.5 h-3.5" />
                          Click to Inspect Full GSC Data
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Plain-English Operator Value */}
                <div className="lg:col-span-5 space-y-6">
                  <div>
                    <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-amber-400 mb-2 uppercase tracking-wider">
                      <span>High-Velocity Organic Inflow</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                      90,400 Players in 24 Hours — Rank #1.9
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed mt-2">
                      Real 24-hour telemetry from Google Search Console. In a single day, this platform captured 90.4K organic player clicks with an average ranking of 1.9 across high-intent real-money keywords.
                    </p>
                  </div>

                  {/* 4 Clear Stats */}
                  <div className="grid grid-cols-2 gap-3 font-mono">
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-amber-500/30">
                      <div className="text-[11px] text-slate-400">24-Hour Clicks</div>
                      <div className="text-2xl font-extrabold text-amber-400 font-heading">90.4K</div>
                      <span className="text-[10px] text-emerald-400 font-bold mt-0.5 block">
                        Direct Inflow Today
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                      <div className="text-[11px] text-slate-400">24-Hour Impressions</div>
                      <div className="text-2xl font-extrabold text-white font-heading">195K</div>
                      <span className="text-[10px] text-purple-300 font-bold mt-0.5 block">
                        Google Search Exposure
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                      <div className="text-[11px] text-slate-400">Click Rate (CTR)</div>
                      <div className="text-2xl font-extrabold text-emerald-400 font-heading">46.4%</div>
                      <span className="text-[10px] text-emerald-300 font-bold mt-0.5 block">
                        Aggressive Search Snippets
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                      <div className="text-[11px] text-slate-400">Average Position</div>
                      <div className="text-2xl font-extrabold text-cyan-400 font-heading">1.9</div>
                      <span className="text-[10px] text-cyan-300 font-bold mt-0.5 block">
                        #1 Rank For Target Terms
                      </span>
                    </div>
                  </div>

                  <a
                    href="#pricing"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-md shadow-amber-400/20 transition-all"
                  >
                    <span>Scale Your Organic Player Base</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: IV-7 Betting Exchange 22K Clicks */}
          {activeTab === 'iv7' && (
            <div className="space-y-8 animate-fadeIn">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left: Real GSC Screenshot */}
                <div className="lg:col-span-7">
                  <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 bg-slate-950 shadow-2xl shadow-cyan-950/40 group">
                    <div className="flex items-center justify-between px-3.5 py-2.5 bg-slate-900/90 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                        <div className="ml-2 hidden sm:flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-black/60 border border-white/10 text-[10px] font-mono text-slate-300">
                          <Lock className="w-2.5 h-2.5 text-emerald-400" />
                          <span>search.google.com/search-console/iv-7.com</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          28-Day Report
                        </span>
                      </div>
                    </div>

                    <div 
                      onClick={() => openLightbox('/images/proof/iv7-22k-gsc-clean.webp', '22,000 Organic Clicks for Live Betting Exchange', 'iv-7.com · 28 Days Verified GSC Report', 'iv-7.com')}
                      className="relative cursor-pointer overflow-hidden bg-white"
                    >
                      <img
                        src="/images/proof/iv7-22k-gsc-clean.webp"
                        alt="Google Search Console 22K Clicks Proof - iv-7.com"
                        width={1600}
                        height={748}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <span className="px-3.5 py-2 rounded-xl bg-slate-950/90 border border-cyan-400 text-cyan-300 text-xs font-bold shadow-xl flex items-center gap-2">
                          <Maximize2 className="w-3.5 h-3.5" />
                          Click to Inspect Full GSC Data
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Plain-English Operator Value */}
                <div className="lg:col-span-5 space-y-6">
                  <div>
                    <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 mb-2 uppercase tracking-wider">
                      <span>Betting Exchange Domination</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                      22K Organic Players for Live Exchange
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed mt-2">
                      Real GSC data from <strong className="text-white">iv-7.com</strong>. We built clean domain authority on competitive sports betting exchange queries, driving 22K high-intent clicks with 39.2% CTR and zero domain penalties.
                    </p>
                  </div>

                  {/* 4 Clear Stats */}
                  <div className="grid grid-cols-2 gap-3 font-mono">
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-cyan-500/30">
                      <div className="text-[11px] text-slate-400">Total 28d Clicks</div>
                      <div className="text-2xl font-extrabold text-cyan-400 font-heading">22.0K</div>
                      <span className="text-[10px] text-emerald-400 font-bold mt-0.5 block">
                        Depositor Inquiries
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                      <div className="text-[11px] text-slate-400">Total Impressions</div>
                      <div className="text-2xl font-extrabold text-white font-heading">56.1K</div>
                      <span className="text-[10px] text-cyan-300 font-bold mt-0.5 block">
                        Sports Keyword Reach
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                      <div className="text-[11px] text-slate-400">Search CTR</div>
                      <div className="text-2xl font-extrabold text-amber-400 font-heading">39.2%</div>
                      <span className="text-[10px] text-amber-300 font-bold mt-0.5 block">
                        Above Industry Standard
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                      <div className="text-[11px] text-slate-400">Average Position</div>
                      <div className="text-2xl font-extrabold text-emerald-400 font-heading">4.7</div>
                      <span className="text-[10px] text-emerald-300 font-bold mt-0.5 block">
                        Front Page of Google
                      </span>
                    </div>
                  </div>

                  <a
                    href="#pricing"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-md shadow-amber-400/20 transition-all"
                  >
                    <span>Build Your Betting Exchange</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: is7gam Rank 2.9 & 52.6% CTR */}
          {activeTab === 'is7gam' && (
            <div className="space-y-8 animate-fadeIn">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left: Real GSC Screenshot */}
                <div className="lg:col-span-7">
                  <div className="relative rounded-2xl overflow-hidden border border-emerald-500/30 bg-slate-950 shadow-2xl shadow-emerald-950/40 group">
                    <div className="flex items-center justify-between px-3.5 py-2.5 bg-slate-900/90 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                        <div className="ml-2 hidden sm:flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-black/60 border border-white/10 text-[10px] font-mono text-slate-300">
                          <Lock className="w-2.5 h-2.5 text-emerald-400" />
                          <span>search.google.com/search-console/is7gam.com</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Rank 2.9 Verified
                        </span>
                      </div>
                    </div>

                    <div 
                      onClick={() => openLightbox('/images/proof/is7gam-rank-gsc-clean.webp', 'Rank 2.9 & 52.6% Click Rate on Google', 'is7gam.com · Turnkey Gaming Search Domination', 'is7gam.com')}
                      className="relative cursor-pointer overflow-hidden bg-white"
                    >
                      <img
                        src="/images/proof/is7gam-rank-gsc-clean.webp"
                        alt="Google Search Console 52.6% CTR Proof - is7gam.com"
                        width={1600}
                        height={706}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <span className="px-3.5 py-2 rounded-xl bg-slate-950/90 border border-emerald-400 text-emerald-300 text-xs font-bold shadow-xl flex items-center gap-2">
                          <Maximize2 className="w-3.5 h-3.5" />
                          Click to Inspect Full GSC Data
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Plain-English Operator Value */}
                <div className="lg:col-span-5 space-y-6">
                  <div>
                    <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 mb-2 uppercase tracking-wider">
                      <span>Casino &amp; Cricket Platform SEO</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                      52.6% of Google Searchers Click In
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed mt-2">
                      Verified search performance from <strong className="text-white">is7gam.com</strong>. Over half of all users searching for platform terms clicked directly through to registration, achieving an average position of 2.9 on Google.
                    </p>
                  </div>

                  {/* 4 Clear Stats */}
                  <div className="grid grid-cols-2 gap-3 font-mono">
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-emerald-500/30">
                      <div className="text-[11px] text-slate-400">24-Hour Clicks</div>
                      <div className="text-2xl font-extrabold text-emerald-400 font-heading">565</div>
                      <span className="text-[10px] text-emerald-300 font-bold mt-0.5 block">
                        Real Players Inflow
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                      <div className="text-[11px] text-slate-400">Click-Through Rate</div>
                      <div className="text-2xl font-extrabold text-amber-400 font-heading">52.6%</div>
                      <span className="text-[10px] text-amber-300 font-bold mt-0.5 block">
                        High Intent SERP Snippet
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                      <div className="text-[11px] text-slate-400">Average Position</div>
                      <div className="text-2xl font-extrabold text-cyan-400 font-heading">2.9</div>
                      <span className="text-[10px] text-cyan-300 font-bold mt-0.5 block">
                        Top 3 On Google
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                      <div className="text-[11px] text-slate-400">Ad Spend Required</div>
                      <div className="text-2xl font-extrabold text-white font-heading">₹0</div>
                      <span className="text-[10px] text-slate-400 mt-0.5 block">
                        Zero Ad Suspensions
                      </span>
                    </div>
                  </div>

                  <a
                    href="#pricing"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-md shadow-amber-400/20 transition-all"
                  >
                    <span>Get Daily Organic Players</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Section Divider */}
          <div className="pt-8 border-t border-white/10 mt-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white font-heading">
                  Explore More Verified Case Study Records
                </h4>
                <p className="text-xs text-slate-400">
                  Select any platform below to inspect live Google Search Console metrics and growth trends.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>All Exports 100% Real &amp; Unaltered</span>
              </div>
            </div>
          </div>

          {/* Clean 4-Card Responsive Grid with Crisp 10KB Thumbnails */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {[
              {
                id: 'yono',
                title: 'yononewgamess.com',
                badge: '15.9M Clicks',
                badgeColor: 'text-amber-300 bg-amber-500/20 border-amber-500/40',
                src: '/images/proof/yono-15m-gsc-thumb.webp',
                category: 'Skill Gaming & Rummy SEO',
                stat: 'Rank 2.1 • 30.5M Impressions',
              },
              {
                id: 'daily',
                title: 'yononewgamess.com (24h)',
                badge: '90.4K Daily',
                badgeColor: 'text-purple-300 bg-purple-500/20 border-purple-500/40',
                src: '/images/proof/yono-daily-gsc-thumb.webp',
                category: '24-Hour Live Traffic Peak',
                stat: 'Rank 1.9 • 195K Impressions',
              },
              {
                id: 'iv7',
                title: 'iv-7.com',
                badge: '22K Clicks',
                badgeColor: 'text-cyan-300 bg-cyan-500/20 border-cyan-500/40',
                src: '/images/proof/iv7-22k-gsc-thumb.webp',
                category: 'Betting Exchange Portal',
                stat: 'Rank 4.7 • 39.2% CTR',
              },
              {
                id: 'is7gam',
                title: 'is7gam.com',
                badge: '52.6% CTR',
                badgeColor: 'text-emerald-300 bg-emerald-500/20 border-emerald-500/40',
                src: '/images/proof/is7gam-rank-gsc-thumb.webp',
                category: 'Casino & Cricket ID',
                stat: 'Rank 2.9 • 565 Clicks/24h',
              },
            ].map((item) => {
              const isSelected = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setActiveTab(item.id as 'yono' | 'daily' | 'iv7' | 'is7gam');
                    trackEvent('proof_grid_card_click', { client: item.title });
                  }}
                  className={`flex flex-col rounded-2xl overflow-hidden border p-3 text-left transition-all duration-300 group cursor-pointer ${
                    isSelected
                      ? 'border-amber-400 bg-amber-500/10 shadow-xl shadow-amber-950/50 ring-1 ring-amber-400/50'
                      : 'border-white/10 bg-model3-deep/80 hover:border-white/25 hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-black/60 mb-3 border border-white/10">
                    <img
                      src={item.src}
                      alt={item.title}
                      width={480}
                      height={240}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className={`absolute top-2 right-2 px-2 py-0.5 rounded-md text-[10px] font-mono font-bold border backdrop-blur-md ${item.badgeColor}`}>
                      {item.badge}
                    </div>
                    {isSelected && (
                      <div className="absolute inset-0 bg-amber-500/10 flex items-center justify-center backdrop-blur-[1px]">
                        <span className="px-3 py-1 rounded-full bg-slate-950/90 border border-amber-400 text-amber-300 text-[10px] font-bold uppercase tracking-wider">
                          Active View
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="px-1 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-0.5">
                        {item.category}
                      </div>
                      <div className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                        {item.title}
                      </div>
                      <div className="text-xs text-slate-300 font-medium mt-1">
                        {item.stat}
                      </div>
                    </div>
                    <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-semibold">
                      <span className={isSelected ? 'text-amber-400' : 'text-slate-400 group-hover:text-slate-200'}>
                        {isSelected ? 'Currently Viewing' : 'Click to Inspect'}
                      </span>
                      <ArrowRight className={`w-3 h-3 ${isSelected ? 'text-amber-400' : 'text-slate-500 group-hover:text-slate-300'}`} />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* Interactive Lightbox / Full-Screen Inspection Modal */}
      {lightbox && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setLightbox(null)}
        >
          <div 
            className="relative max-w-5xl w-full bg-slate-950 border border-white/20 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-slate-900 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 font-mono text-xs text-slate-300 font-bold hidden sm:inline">
                  Google Search Console Performance Report — {lightbox.domain}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setLightbox(null)}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Image Body */}
            <div className="p-3 sm:p-4 bg-slate-900/60 max-h-[80vh] overflow-auto">
              <img
                src={lightbox.src}
                alt={lightbox.title}
                width={1600}
                height={824}
                className="w-full h-auto rounded-xl shadow-2xl border border-white/10 object-contain"
              />
            </div>

            {/* Modal Footer */}
            <div className="px-4 sm:px-6 py-3 bg-slate-900 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div>
                <span className="font-bold text-white">{lightbox.title}</span>
                <span className="text-slate-400 block sm:inline sm:ml-2">— {lightbox.subtitle}</span>
              </div>
              <a
                href="#pricing"
                onClick={() => setLightbox(null)}
                className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-bold"
              >
                <span>Get This Ranking For Your Brand</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HomeWorkProof;
