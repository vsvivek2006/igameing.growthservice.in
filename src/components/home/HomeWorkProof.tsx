import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Search, 
  Zap, 
  ShieldCheck, 
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Layers,
  Award
} from 'lucide-react';
import { trackEvent } from '../../analytics';

export const HomeWorkProof: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'yono' | 'ix7win' | 'iv7' | 'live'>('yono');

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
            <span>Verified Results &amp; Real Traffic</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight mb-4">
            Real Proof From Real Sites. <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
              Millions of Real Players on Google.
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            See actual Google Search Console performance from gaming, casino, cricket ID, and betting exchange platforms built and ranked by our team.
          </p>
        </div>

        {/* Proof Category Switcher */}
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
              setActiveTab('ix7win');
              trackEvent('proof_tab_switch', { tab: 'ix7win' });
            }}
            className={`shrink-0 flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 ${
              activeTab === 'ix7win'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-900/50 scale-[1.02]'
                : 'bg-white/[0.04] text-slate-400 border border-white/10 hover:bg-white/[0.08] hover:text-white'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>Rank 1.2 on Google (ix7win Casino)</span>
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
            <span>19.6K Clicks (IV-7 Exchange)</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab('live');
              trackEvent('proof_tab_switch', { tab: 'live' });
            }}
            className={`shrink-0 flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 ${
              activeTab === 'live'
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/50 scale-[1.02]'
                : 'bg-white/[0.04] text-slate-400 border border-white/10 hover:bg-white/[0.08] hover:text-white'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>1,220+ Daily Clicks (Live Traffic)</span>
          </button>
        </div>

        {/* Dynamic Proof Showcase */}
        <div className="rounded-3xl bg-model3-base/95 border border-white/15 p-4 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl">
          
          {/* TAB 1: Yono Games 15.9M Clicks */}
          {activeTab === 'yono' && (
            <div className="space-y-8 animate-fadeIn">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left: Real GSC Screenshot */}
                <div className="lg:col-span-7">
                  <div className="relative rounded-2xl overflow-hidden border border-purple-500/30 shadow-2xl shadow-purple-950/40 group">
                    <img
                      src="/images/proof/yono-games-15m-seo-proof.webp"
                      alt="Google Search Console 15.9M Clicks Proof - yononewgamess.com"
                      width={1920}
                      height={1080}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-black/85 backdrop-blur-md border border-purple-500/40 text-[10px] font-mono text-purple-300 font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Live GSC: yononewgamess.com</span>
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
                      Real Google Search Console data from <strong className="text-white">yononewgamess.com</strong>. We took this skill gaming platform to the top of Google across high-intent keywords, driving over 15.9 million direct player clicks with zero ad spend.
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
                        More Than 1 In 2 Click
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

          {/* TAB 2: ix7win Rank 1.2 on Google */}
          {activeTab === 'ix7win' && (
            <div className="space-y-8 animate-fadeIn">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left: Real GSC Screenshot */}
                <div className="lg:col-span-7">
                  <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl shadow-amber-950/40 group">
                    <img
                      src="/images/proof/ix7win-cricket-casino-seo-proof.webp"
                      alt="Google Search Console 51.4K Clicks Rank 1.2 Proof - ix7win.com"
                      width={1920}
                      height={1080}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-black/85 backdrop-blur-md border border-amber-500/40 text-[10px] font-mono text-amber-300 font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Live GSC: ix7win.com</span>
                    </div>
                  </div>
                </div>

                {/* Right: Plain-English Operator Value */}
                <div className="lg:col-span-5 space-y-6">
                  <div>
                    <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-amber-400 mb-2 uppercase tracking-wider">
                      <span>Casino &amp; Cricket ID SEO</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                      Rank #1.2 on Google — 62.8% of Players Click In
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed mt-2">
                      Real GSC performance from <strong className="text-white">ix7win.com</strong>. In just 28 days, this platform gathered 51.4K organic clicks with an average ranking of 1.2 on Google. More than 1,220 players land on this site every 24 hours.
                    </p>
                  </div>

                  {/* 4 Clear Stats */}
                  <div className="grid grid-cols-2 gap-3 font-mono">
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-amber-500/30">
                      <div className="text-[11px] text-slate-400">28-Day Clicks</div>
                      <div className="text-2xl font-extrabold text-amber-400 font-heading">51.4K</div>
                      <span className="text-[10px] text-emerald-400 font-bold mt-0.5 block">
                        Direct Player Visits
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                      <div className="text-[11px] text-slate-400">Google Position</div>
                      <div className="text-2xl font-extrabold text-white font-heading">#1.2</div>
                      <span className="text-[10px] text-amber-300 font-bold mt-0.5 block">
                        Rank #1 For Main Terms
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                      <div className="text-[11px] text-slate-400">Click Rate (CTR)</div>
                      <div className="text-2xl font-extrabold text-emerald-400 font-heading">62.8%</div>
                      <span className="text-[10px] text-emerald-300 font-bold mt-0.5 block">
                        High-Converting Snippets
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                      <div className="text-[11px] text-slate-400">Daily Live Traffic</div>
                      <div className="text-2xl font-extrabold text-cyan-400 font-heading">1,220+</div>
                      <span className="text-[10px] text-cyan-300 font-bold mt-0.5 block">
                        Every 24 Hours
                      </span>
                    </div>
                  </div>

                  <a
                    href="#pricing"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-md shadow-amber-400/20 transition-all"
                  >
                    <span>Rank Your Gaming Site #1</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: IV-7 Betting Exchange 19.6K Clicks */}
          {activeTab === 'iv7' && (
            <div className="space-y-8 animate-fadeIn">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left: Real GSC Screenshot */}
                <div className="lg:col-span-7">
                  <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl shadow-cyan-950/40 group">
                    <img
                      src="/images/proof/iv7-exchange-ranking-proof.webp"
                      alt="Google Search Console 19.6K Clicks Proof - iv-7.com"
                      width={1920}
                      height={1080}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-black/85 backdrop-blur-md border border-cyan-500/40 text-[10px] font-mono text-cyan-300 font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Live GSC: iv-7.com</span>
                    </div>
                  </div>
                </div>

                {/* Right: Plain-English Operator Value */}
                <div className="lg:col-span-5 space-y-6">
                  <div>
                    <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 mb-2 uppercase tracking-wider">
                      <span>Betting Exchange Growth</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                      19.6K Organic Players for Live Exchange
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed mt-2">
                      Real GSC data from <strong className="text-white">iv-7.com</strong>. We established top-3 rankings on competitive sports betting and exchange queries. 48.6% of players who see the listing click straight to the exchange.
                    </p>
                  </div>

                  {/* 4 Clear Stats */}
                  <div className="grid grid-cols-2 gap-3 font-mono">
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-cyan-500/30">
                      <div className="text-[11px] text-slate-400">Total Organic Clicks</div>
                      <div className="text-2xl font-extrabold text-white font-heading">19.6K</div>
                      <span className="text-[10px] text-cyan-300 font-bold mt-0.5 block">
                        28-Day Period
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                      <div className="text-[11px] text-slate-400">Total Impressions</div>
                      <div className="text-2xl font-extrabold text-white font-heading">40.3K</div>
                      <span className="text-[10px] text-slate-400 mt-0.5 block">
                        Search Appearances
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                      <div className="text-[11px] text-slate-400">Average CTR</div>
                      <div className="text-2xl font-extrabold text-amber-400 font-heading">48.6%</div>
                      <span className="text-[10px] text-amber-300 font-bold mt-0.5 block">
                        Nearly 50% Click Rate
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                      <div className="text-[11px] text-slate-400">Average Position</div>
                      <div className="text-2xl font-extrabold text-emerald-400 font-heading">3.4</div>
                      <span className="text-[10px] text-emerald-300 font-bold mt-0.5 block">
                        First Page Dominance
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

          {/* TAB 4: Daily Live Traffic 1,220+ Clicks */}
          {activeTab === 'live' && (
            <div className="space-y-8 animate-fadeIn">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left: Live GSC Telemetry Proof Image */}
                <div className="lg:col-span-7">
                  <div className="relative rounded-2xl overflow-hidden border border-emerald-500/30 shadow-2xl shadow-emerald-950/40 group">
                    <img
                      src="/images/proof/ix7win-live-daily-clicks-proof.webp"
                      alt="Google Search Console 1,220+ Daily Live Traffic Graph - ix7win.com"
                      width={1920}
                      height={1080}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-black/85 backdrop-blur-md border border-emerald-500/40 text-[10px] font-mono text-emerald-300 font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>24-Hour Continuous Traffic Graph</span>
                    </div>
                  </div>
                </div>

                {/* Right: Plain-English Operator Value */}
                <div className="lg:col-span-5 space-y-6">
                  <div>
                    <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 mb-2 uppercase tracking-wider">
                      <span>Daily Player Acquisition</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                      1,220+ Players Depositing Every Single Day
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed mt-2">
                      Steady, compounding organic search traffic means uninterrupted revenue. This live telemetry shows over 1,220 real players clicking daily from Google without paying a single rupee in ads or worrying about account bans.
                    </p>
                  </div>

                  {/* 4 Clear Stats */}
                  <div className="grid grid-cols-2 gap-3 font-mono">
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-emerald-500/30">
                      <div className="text-[11px] text-slate-400">Daily Organic Traffic</div>
                      <div className="text-2xl font-extrabold text-emerald-400 font-heading">1,220+</div>
                      <span className="text-[10px] text-emerald-300 font-bold mt-0.5 block">
                        Clicks Every 24 Hours
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                      <div className="text-[11px] text-slate-400">Search CTR</div>
                      <div className="text-2xl font-extrabold text-amber-400 font-heading">62.8%</div>
                      <span className="text-[10px] text-amber-300 font-bold mt-0.5 block">
                        Direct Player Intent
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                      <div className="text-[11px] text-slate-400">Cost Per Acquisition</div>
                      <div className="text-2xl font-extrabold text-cyan-400 font-heading">₹0 / click</div>
                      <span className="text-[10px] text-cyan-300 font-bold mt-0.5 block">
                        100% Pure Organic SEO
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                      <div className="text-[11px] text-slate-400">WhatsApp Onboarding</div>
                      <div className="text-2xl font-extrabold text-white font-heading">&lt;60s</div>
                      <span className="text-[10px] text-slate-400 mt-0.5 block">
                        Instant ID Creation
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

        </div>

        {/* ── Verified Real Proof Inspection Grid (Replaces moving marquee) ── */}
        <div className="mt-12 pt-10 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 font-mono">
                Verified Platform Evidence
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white font-heading mt-1">
                Select Any Real Platform Report to Inspect
              </h3>
            </div>
            <span className="text-xs text-slate-400 font-mono">
              Direct Google Search Console Telemetry
            </span>
          </div>

          {/* Clean 4-Card Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {[
              {
                id: 'yono',
                title: 'yononewgamess.com',
                badge: '15.9M Clicks',
                badgeColor: 'text-amber-300 bg-amber-500/20 border-amber-500/40',
                src: '/images/proof/yono-games-15m-seo-proof.webp',
                category: 'Skill Gaming & Rummy SEO',
                stat: 'Rank 2.1 • 30.5M Impressions',
              },
              {
                id: 'ix7win',
                title: 'ix7win.com',
                badge: '51.4K Clicks',
                badgeColor: 'text-purple-300 bg-purple-500/20 border-purple-500/40',
                src: '/images/proof/ix7win-cricket-casino-seo-proof.webp',
                category: 'Cricket ID & Casino',
                stat: 'Rank 1.2 • 62.8% CTR',
              },
              {
                id: 'iv7',
                title: 'iv-7.com',
                badge: '19.6K Clicks',
                badgeColor: 'text-cyan-300 bg-cyan-500/20 border-cyan-500/40',
                src: '/images/proof/iv7-exchange-ranking-proof.webp',
                category: 'Betting Exchange Portal',
                stat: 'Rank 3.4 • 100% Organic',
              },
              {
                id: 'live',
                title: 'Daily Live Traffic',
                badge: '1,220+ Daily',
                badgeColor: 'text-emerald-300 bg-emerald-500/20 border-emerald-500/40',
                src: '/images/proof/ix7win-live-daily-clicks-proof.webp',
                category: '24x7 Depositor Inflow',
                stat: '1,220+ Real Players / Day',
              },
            ].map((item) => {
              const isSelected = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setActiveTab(item.id as any);
                    trackEvent('proof_grid_card_click', { client: item.title });
                  }}
                  className={`flex flex-col rounded-2xl overflow-hidden border p-3 text-left transition-all duration-300 group cursor-pointer ${
                    isSelected
                      ? 'border-amber-400 bg-amber-500/10 shadow-xl shadow-amber-950/50 ring-1 ring-amber-400/50'
                      : 'border-white/10 bg-model3-deep/80 hover:border-white/25 hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-black/60 mb-3">
                    <img
                      src={item.src}
                      alt={item.title}
                      width={400}
                      height={250}
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
    </section>
  );
};

export default HomeWorkProof;
