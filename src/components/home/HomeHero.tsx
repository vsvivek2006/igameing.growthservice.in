import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Zap,
  ShieldCheck,
  BarChart3,
  Code2,
  Search,
  ExternalLink,
  Play
} from 'lucide-react';
import { Globe3DCanvas } from '../seo/Globe3DCanvas';
import { trackEvent } from '../../analytics';

const CAPABILITY_PILLARS = [
  {
    id: 'web-dev',
    label: 'Platform Builds',
    tagline: 'Lotus365, Casino & Cricket ID',
    metric: '<650ms Edge PWA',
    icon: Code2,
    color: 'cyan',
  },
  {
    id: 'seo',
    label: 'Rank-1 SEO',
    tagline: 'Regulated Search Dominance',
    metric: '90.4K+ Case Clicks',
    icon: Search,
    color: 'purple',
  },
  {
    id: 'paid-media',
    label: 'Whitelisted Ads',
    tagline: 'Google & Meta Media Buying',
    metric: '0 Bans · 4.8x ROAS',
    icon: Zap,
    color: 'amber',
  },
  {
    id: 'cro',
    label: 'Deposit Funnels',
    tagline: 'WhatsApp & Telegram Routing',
    metric: '+38% FTD Uplift',
    icon: BarChart3,
    color: 'emerald',
  },
];

export const HomeHero: React.FC = () => {
  const [activePillar, setActivePillar] = useState(0);

  return (
    <section className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 bg-model3-base overflow-hidden flex items-center border-b border-white/10">
      {/* ── Atmospheric Background Lighting ────────────────────────────────── */}
      <div className="absolute top-0 left-1/4 w-[650px] h-[500px] bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[550px] h-[500px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-20 left-1/3 w-[600px] h-[400px] bg-blue-900/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Cybernetic Dot & Grid Matrix */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* ── Left Column: Multi-Service Value Proposition ─────────────────── */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Category Pillar Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/15 backdrop-blur-md w-fit mb-6 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 -ml-3.5" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
                iGaming Platform Engineering &amp; Growth
              </span>
            </div>

            {/* Main Punch Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white font-heading leading-[1.08] mb-6">
              Engineering &amp; Scaling <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
                Gaming &amp; Casino
              </span> <br />
              Platforms.
            </h1>

            {/* Sublead Highlighting Core Disciplines */}
            <p className="text-lg sm:text-xl text-slate-300 font-medium leading-relaxed mb-6 max-w-xl">
              Turnkey platform builds, Rank-1 organic SEO, and whitelisted Google &amp; Meta ad acquisition. Built specifically for <strong className="text-white font-semibold">Lotus365-style exchanges, online casinos, cricket betting IDs, and rummy platforms</strong>.
            </p>

            {/* Interactive Capability Selector */}
            <div className="mb-8 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                {CAPABILITY_PILLARS.map((p, idx) => {
                  const Icon = p.icon;
                  const isActive = activePillar === idx;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setActivePillar(idx)}
                      className={`flex flex-col items-start p-2.5 rounded-xl text-left transition-all duration-200 ${isActive
                          ? 'bg-purple-500/20 border border-purple-400/40 shadow-lg shadow-purple-950/40 text-white'
                          : 'bg-transparent border border-transparent text-slate-400 hover:text-slate-200 hover:bg-white/[0.02]'
                        }`}
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-400' : 'text-slate-400'}`} />
                        <span className="text-xs font-bold truncate">{p.label}</span>
                      </div>
                      <span className="text-[10px] font-mono font-semibold text-emerald-400 truncate w-full">
                        {p.metric}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* High-Intent CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-3.5 mb-10">
              <a
                href="#pricing"
                onClick={() => trackEvent('home_hero_pricing_click')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-xl shadow-amber-400/20 hover:shadow-amber-400/35 active:scale-[0.98] transition-all duration-200"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Explore Packages</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </a>

              <a
                href="#journey"
                onClick={() => trackEvent('home_hero_video_click')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-400/30 backdrop-blur-md active:scale-[0.98] transition-all duration-200"
              >
                <Play className="w-4 h-4 fill-current text-amber-400" />
                <span>Watch Proof Video</span>
              </a>

              <Link
                to="/contact"
                onClick={() => trackEvent('home_hero_audit_click')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 backdrop-blur-md active:scale-[0.98] transition-all duration-200"
              >
                <span>Talk to Us</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </Link>
            </div>

            {/* Verified Agency Metrics Bar */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-6 border-t border-white/10">
              <div>
                <div className="text-xl sm:text-3xl font-extrabold text-white font-heading">
                  15.9M+
                </div>
                <div className="text-[11px] sm:text-xs text-slate-300 mt-0.5 font-medium flex items-center gap-1">
                  <TrendingUp className="w-3 h-3 text-emerald-400" />
                  <span>Google Clicks</span>
                </div>
              </div>

              <div>
                <div className="text-xl sm:text-3xl font-extrabold text-white font-heading">
                  0.4s
                </div>
                <div className="text-[11px] sm:text-xs text-slate-300 mt-0.5 font-medium flex items-center gap-1">
                  <Zap className="w-3 h-3 text-amber-400" />
                  <span>Fast Mobile</span>
                </div>
              </div>

              <div>
                <div className="text-xl sm:text-3xl font-extrabold text-white font-heading">
                  0 Bans
                </div>
                <div className="text-[11px] sm:text-xs text-slate-300 mt-0.5 font-medium flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-cyan-400" />
                  <span>Whitelisted</span>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-slate-400 mt-3 italic">
              * Verified telemetry across 50+ live Lotus365-style, casino, cricket ID, and gaming platform deployments.
            </p>
          </div>

          {/* ── Right Column: 3D Globe + Multi-Service HUDs ───────── */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center">

            {/* The 3D Interactive World Globe */}
            <div className="w-full relative">
              <Globe3DCanvas />

              {/* Desktop-only floating overlays (lg:block) safely clamped without horizontal bleed */}
              <div className="absolute top-2 left-0 z-20 hidden lg:block p-3.5 rounded-2xl bg-model3-deep/85 border border-purple-500/30 backdrop-blur-xl shadow-2xl shadow-purple-950/50 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                      Google Rank #1
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                    52.2% CTR
                  </span>
                </div>
                <div className="text-xl font-extrabold text-white font-heading">
                  15.9M <span className="text-xs font-normal text-slate-400">player clicks</span>
                </div>
                <div className="flex items-end gap-1 mt-2 h-6 w-36">
                  {[35, 42, 50, 48, 65, 58, 80, 72, 88, 95, 92, 100].map((h, i) => (
                    <div
                      key={i}
                      style={{ height: `${h}%` }}
                      className="flex-1 rounded-xs bg-gradient-to-t from-purple-600 to-indigo-400 opacity-80 hover:opacity-100"
                    />
                  ))}
                </div>
              </div>

              <div className="absolute top-6 right-0 z-20 hidden lg:block p-3.5 rounded-2xl bg-model3-deep/85 border border-cyan-500/30 backdrop-blur-xl shadow-2xl shadow-cyan-950/40 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center">
                    <Code2 className="w-3 h-3 text-cyan-400" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                    Fast Mobile Platform
                  </span>
                </div>
                <div className="space-y-1 text-[11px]">
                  <div className="flex items-center justify-between gap-4 font-mono text-slate-300">
                    <span>Mobile Load Speed</span>
                    <span className="text-cyan-300 font-bold">0.4s Fast</span>
                  </div>
                  <div className="flex items-center justify-between gap-4 font-mono text-slate-300">
                    <span>IPL Match Traffic</span>
                    <span className="text-emerald-400 font-bold">0% Lag</span>
                  </div>
                  <div className="flex items-center justify-between gap-4 font-mono text-slate-300">
                    <span>App-Like Install</span>
                    <span className="text-emerald-400 font-bold">Zero Store Ban</span>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-2 left-0 z-20 hidden lg:block p-3.5 rounded-2xl bg-model3-deep/85 border border-amber-500/30 backdrop-blur-xl shadow-2xl shadow-amber-950/40 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                    Whitelisted Ads
                  </span>
                  <span className="ml-auto text-[10px] font-bold text-amber-300 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">
                    4.8x ROAS
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-[11px]">
                  <div>
                    <span className="text-slate-400 block text-[10px]">Google &amp; Meta</span>
                    <span className="font-bold text-white font-mono">0 Bans</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Player Cost</span>
                    <span className="font-bold text-emerald-400 font-mono">-42% CPA</span>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 right-0 z-20 hidden lg:block p-3.5 rounded-2xl bg-model3-deep/85 border border-emerald-500/30 backdrop-blur-xl shadow-2xl shadow-emerald-950/40 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <BarChart3 className="w-4 h-4 text-emerald-400" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                    WhatsApp ID Bot
                  </span>
                </div>
                <div className="space-y-1 text-[11px]">
                  <div className="flex items-center justify-between gap-3 text-slate-300 font-mono">
                    <span>Deposit Rate</span>
                    <span className="text-emerald-400 font-bold">+38.4%</span>
                  </div>
                  <div className="flex items-center justify-between gap-3 text-slate-300 font-mono">
                    <span>ID Creation</span>
                    <span className="text-cyan-300 font-bold">&lt;60 Seconds</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile & Tablet Dedicated 2x2 Telemetry Grid (<lg) */}
            <div className="w-full grid grid-cols-2 gap-2.5 mt-4 lg:hidden">
              <div className="p-3 rounded-2xl bg-[#0D0D18]/90 border border-purple-500/30 shadow-md">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-bold uppercase text-purple-300">Google #1</span>
                  <span className="text-[9px] font-bold text-emerald-400">52.2% CTR</span>
                </div>
                <div className="text-base font-extrabold text-white font-heading">15.9M</div>
                <div className="text-[10px] text-slate-400">Google player clicks</div>
              </div>

              <div className="p-3 rounded-2xl bg-[#0D0D18]/90 border border-cyan-500/30 shadow-md">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-bold uppercase text-cyan-300">Mobile Speed</span>
                  <span className="text-[9px] font-bold text-cyan-400">0.4s</span>
                </div>
                <div className="text-base font-extrabold text-white font-heading">PWA Speed</div>
                <div className="text-[10px] text-slate-400">0% lag on live matches</div>
              </div>

              <div className="p-3 rounded-2xl bg-[#0D0D18]/90 border border-amber-500/30 shadow-md">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-bold uppercase text-amber-300">Whitelisted</span>
                  <span className="text-[9px] font-bold text-amber-400">4.8x ROAS</span>
                </div>
                <div className="text-base font-extrabold text-white font-heading">0 Ad Bans</div>
                <div className="text-[10px] text-slate-400">Google &amp; Meta safe</div>
              </div>

              <div className="p-3 rounded-2xl bg-[#0D0D18]/90 border border-emerald-500/30 shadow-md">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-bold uppercase text-emerald-300">Deposits</span>
                  <span className="text-[9px] font-bold text-emerald-400">+38.4%</span>
                </div>
                <div className="text-base font-extrabold text-white font-heading">&lt;60s ID</div>
                <div className="text-[10px] text-slate-400">WhatsApp cashier funnel</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
