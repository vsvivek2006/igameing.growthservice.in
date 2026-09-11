import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  Search, 
  Zap, 
  BarChart2, 
  ExternalLink,
  ShieldCheck,
  Globe2
} from 'lucide-react';
import { Globe3DCanvas } from './Globe3DCanvas';

export const SeoHero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 bg-model3-base overflow-hidden flex items-center border-b border-white/10">
      {/* ── Atmospheric Background Lighting ────────────────────────────────── */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[500px] bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />
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
          
          {/* ── Left Column: Value Proposition & High-Intent CTAs ──────────── */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Category Pillar Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/15 backdrop-blur-md w-fit mb-6 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 -ml-3.5" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
                Performance-Driven SEO Architecture
              </span>
            </div>

            {/* Main Punch Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white font-heading leading-[1.08] mb-6">
              Rank Higher. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
                Get Found.
              </span> <br />
              Turn Search Traffic Into Customers.
            </h1>

            {/* Explicit Solution / Who it is for */}
            <p className="text-lg sm:text-xl text-slate-300 font-medium leading-relaxed mb-8 max-w-xl">
              <strong className="text-white font-semibold">SEO + Landing Pages + Technical Optimization</strong>{' '}
              engineered for competitive digital markets. We don&apos;t just sell rankings; we build search-indexed revenue engines that scale.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-xl shadow-amber-400/20 hover:shadow-amber-400/35 active:scale-[0.98] transition-all duration-200"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Start From ₹35K</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </a>

              <a
                href="#casestudies"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 backdrop-blur-md active:scale-[0.98] transition-all duration-200"
              >
                <span>View Case Studies</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>

            {/* Micro Trust Proof Bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                  90.4K
                </div>
                <div className="text-xs text-slate-400 mt-0.5 font-medium flex items-center gap-1">
                  <TrendingUp className="w-3 h-3 text-emerald-400" />
                  <span>Case Clicks</span>
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                  46.4%
                </div>
                <div className="text-xs text-slate-400 mt-0.5 font-medium flex items-center gap-1">
                  <Zap className="w-3 h-3 text-amber-400" />
                  <span>Peak CTR</span>
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                  1.9
                </div>
                <div className="text-xs text-slate-400 mt-0.5 font-medium flex items-center gap-1">
                  <BarChart2 className="w-3 h-3 text-purple-400" />
                  <span>Avg Position</span>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 mt-3 italic">
              * Verified case-study telemetry snapshot from competitive search deployment.
            </p>
          </div>

          {/* ── Right Column: 3D Globe + Floating Holographic Analytics HUD ── */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            
            {/* The 3D Interactive World Globe */}
            <div className="w-full relative">
              <Globe3DCanvas />

              {/* Floating Glassmorphic HUD 1: Organic Traffic Snapshot (Top Left) */}
              <div className="absolute top-2 left-0 sm:-left-4 z-20 hidden sm:block p-3.5 rounded-2xl bg-model3-deep/85 border border-purple-500/30 backdrop-blur-xl shadow-2xl shadow-purple-950/50 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                      Organic Traffic
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                    +42.8%
                  </span>
                </div>
                <div className="text-xl font-extrabold text-white font-heading">
                  248.6K <span className="text-xs font-normal text-slate-400">visits</span>
                </div>
                {/* Visual sparkline bar */}
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

              {/* Floating Glassmorphic HUD 2: Google Search Console (Top Right) */}
              <div className="absolute top-6 right-0 sm:-right-4 z-20 hidden sm:block p-3.5 rounded-2xl bg-model3-deep/85 border border-amber-500/30 backdrop-blur-xl shadow-2xl shadow-amber-950/40 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center">
                    <Search className="w-3 h-3 text-amber-400" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                    Google SERP Rank
                  </span>
                </div>
                <div className="space-y-1 text-[11px]">
                  <div className="flex items-center justify-between gap-4 font-mono text-slate-300">
                    <span>#1 Target Keyword</span>
                    <span className="text-emerald-400 font-bold">+12</span>
                  </div>
                  <div className="flex items-center justify-between gap-4 font-mono text-slate-300">
                    <span>#2 Commercial Pillar</span>
                    <span className="text-emerald-400 font-bold">+28</span>
                  </div>
                  <div className="flex items-center justify-between gap-4 font-mono text-slate-300">
                    <span>#3 Intent Cluster</span>
                    <span className="text-emerald-400 font-bold">+41</span>
                  </div>
                </div>
              </div>

              {/* Floating Glassmorphic HUD 3: Technical SEO Score (Bottom Left) */}
              <div className="absolute bottom-2 left-0 sm:-left-4 z-20 hidden sm:block p-3.5 rounded-2xl bg-model3-deep/85 border border-cyan-500/30 backdrop-blur-xl shadow-2xl shadow-cyan-950/40 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                    Core Web Vitals
                  </span>
                  <span className="ml-auto text-[10px] font-bold text-cyan-300 bg-cyan-500/10 px-1.5 py-0.5 rounded border border-cyan-500/20">
                    98 A+
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-[11px]">
                  <div>
                    <span className="text-slate-400 block text-[10px]">LCP Speed</span>
                    <span className="font-bold text-white font-mono">0.8s (Fast)</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Index Health</span>
                    <span className="font-bold text-white font-mono">100% Clean</span>
                  </div>
                </div>
              </div>

              {/* Floating Glassmorphic HUD 4: Global Reach Nodes (Bottom Right) */}
              <div className="absolute bottom-6 right-0 sm:-right-4 z-20 hidden sm:block p-3.5 rounded-2xl bg-model3-deep/85 border border-indigo-500/30 backdrop-blur-xl shadow-2xl shadow-indigo-950/40 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <Globe2 className="w-4 h-4 text-indigo-400" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                    Global Scalability
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-300">
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">USA</span>
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">UK</span>
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">UAE</span>
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">IN</span>
                  <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">+32</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
