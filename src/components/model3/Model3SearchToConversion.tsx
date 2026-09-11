import React, { useRef, useState } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Search, 
  Laptop, 
  ShieldCheck, 
  MessageSquare, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Zap
} from 'lucide-react';

export const Model3SearchToConversion: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const total = videoRef.current.duration;
    if (total > 0) {
      setProgress((current / total) * 100);
    }
  };

  return (
    <section id="journey" className="relative py-20 lg:py-32 bg-[#050505] text-white border-b border-white/10 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-purple-900/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/15 backdrop-blur-md mb-4">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
              The 4-Stage Operating Pipeline
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-heading mb-5">
            From Search To Conversion.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium">
            Search traffic without high-speed conversion engineering is a wasted asset. Here is how our architecture transforms raw Google queries into verified, qualified leads.
          </p>
        </div>

        {/* ── Top Row: Premium Vertical Video Presentation + Storytelling Copy ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-24">
          
          {/* Left Column: Vertical Device Frame for the Provided 39s MP4 */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            {/* Phone Hardware Mockup Container */}
            <div className="relative w-full max-w-[320px] sm:max-w-[340px] rounded-[42px] p-3 bg-gradient-to-b from-[#2a2a38] via-[#151520] to-[#08080f] border-2 border-white/20 shadow-2xl shadow-purple-950/60 group">
              
              {/* Top Speaker / Dynamic Island */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-4 bg-black/90 rounded-full z-30 flex items-center justify-end pr-2">
                <div className="w-2.5 h-2.5 rounded-full bg-purple-900/60 border border-purple-500/30" />
              </div>

              {/* Screen Bezel & Video Wrapper */}
              <div className="relative w-full aspect-[9/16] rounded-[32px] overflow-hidden bg-black flex items-center justify-center shadow-inner">
                
                <video
                  ref={videoRef}
                  src="/videos/search-to-conversion.mp4"
                  playsInline
                  preload="metadata"
                  muted={isMuted}
                  onTimeUpdate={handleTimeUpdate}
                  onEnded={() => setIsPlaying(false)}
                  className="w-full h-full object-cover"
                />

                {/* Play / Pause Interactive Overlay */}
                <div 
                  onClick={togglePlay}
                  className={`absolute inset-0 bg-black/30 hover:bg-black/20 transition-all flex items-center justify-center cursor-pointer ${
                    !isPlaying ? 'opacity-100' : 'opacity-0 hover:opacity-100'
                  }`}
                >
                  <button
                    type="button"
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                    className="w-16 h-16 rounded-full bg-amber-400/90 hover:bg-amber-300 text-slate-950 shadow-2xl shadow-amber-400/50 flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
                  >
                    {isPlaying ? (
                      <Pause className="w-7 h-7 fill-current" />
                    ) : (
                      <Play className="w-7 h-7 fill-current ml-1" />
                    )}
                  </button>
                </div>

                {/* Bottom Video Controls Pill */}
                <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between px-3.5 py-2 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-white text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="font-mono text-[10px] text-slate-300">
                      Live Search Journey
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMute();
                    }}
                    className="p-1 rounded-md hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                    aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>

                {/* Scrub Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                  <div
                    className="h-full bg-amber-400 transition-all duration-150"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Glowing Pedestal Reflection Under Phone */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-8 bg-purple-600/30 rounded-full blur-xl pointer-events-none" />
            </div>

            <span className="text-xs text-slate-500 font-mono mt-5">
              Verified 39s Google Search-to-Conversion Walkthrough
            </span>
          </div>

          {/* Right Column: Architectural Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold w-fit mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Closed-Loop Digital System</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-heading mb-6 leading-tight">
              See The Complete Journey <br />
              From Search To Conversion.
            </h3>

            <p className="text-base text-slate-300 leading-relaxed font-normal mb-8">
              Most agencies only care about ranking on keyword spreadsheets. If the arriving user hits a slow, cluttered page with weak conversion hierarchy, that traffic produces zero revenue.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  title: 'Search Visibility & Intent Capture',
                  desc: 'We target commercial queries where users are actively ready to sign up or deposit, not low-value informational traffic.',
                },
                {
                  title: 'Custom High-Speed Landing Pages',
                  desc: 'Every search pillar lands on a bespoke, sub-second interface with instant visual relevance to the exact search query.',
                },
                {
                  title: 'Deep SEO Schema & Technical Moat',
                  desc: 'Structured JSON-LD entity graph, rich FAQ stars, and zero-layout-shift performance keep rankings permanent.',
                },
                {
                  title: 'Instant WhatsApp & Lead Conversion',
                  desc: 'Frictionless chat CTAs, qualification micro-surveys, and automated routing convert up to 4.8% of visitors into live deals.',
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white mb-0.5">{item.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-lg shadow-amber-400/20"
              >
                <span>Deploy This Journey</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
              </a>
              <a
                href="#casestudies"
                className="text-xs font-semibold text-slate-300 hover:text-white underline underline-offset-4"
              >
                Inspect Live Results →
              </a>
            </div>
          </div>

        </div>

        {/* ── Bottom: 4 Connected Visual Stages ───────────────────────────────── */}
        <div className="pt-8 border-t border-white/10">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Architectural Breakdown
            </span>
            <h3 className="text-2xl font-bold text-white font-heading mt-1">
              The 4 Steps In Action
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            
            {/* Stage 01: SEARCH */}
            <div className="relative p-5 rounded-2xl bg-[#0d0d18] border border-purple-500/30 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-black text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                    STAGE 01
                  </span>
                  <Search className="w-4 h-4 text-purple-400" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">Google Search Result</h4>
                <p className="text-xs text-slate-400 mb-4">
                  High-intent query matches rich organic snippet with verified sitelinks and star rating.
                </p>

                {/* Miniature SERP Mockup */}
                <div className="p-3 rounded-xl bg-black/60 border border-white/10 text-[11px] font-sans">
                  <div className="flex items-center gap-1.5 text-[10px] text-slate-400 mb-1">
                    <div className="w-3.5 h-3.5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-[8px]">
                      G
                    </div>
                    <span>igaming.growthservice.in</span>
                  </div>
                  <div className="text-blue-400 font-semibold hover:underline cursor-pointer mb-1 leading-tight">
                    #1 Online Gaming & Casino SEO Agency | ₹35K+
                  </div>
                  <div className="text-[10px] text-slate-400 line-clamp-2">
                    Rank higher on competitive keywords. Built for high-volume digital operators with sub-second speeds.
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-purple-300 font-mono">
                <span>Rank #1 Organic</span>
                <span>46.4% CTR</span>
              </div>
            </div>

            {/* Stage 02: LANDING PAGE */}
            <div className="relative p-5 rounded-2xl bg-[#0d0d18] border border-amber-500/30 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-black text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    STAGE 02
                  </span>
                  <Laptop className="w-4 h-4 text-amber-400" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">High-Speed Landing Page</h4>
                <p className="text-xs text-slate-400 mb-4">
                  User lands in &lt;800ms. Zero layout shift, modern dark aesthetic, and immediate message match.
                </p>

                {/* Miniature Browser Mockup */}
                <div className="p-3 rounded-xl bg-black/60 border border-white/10 text-[11px]">
                  <div className="flex items-center gap-1 pb-2 mb-2 border-b border-white/10">
                    <span className="w-2 h-2 rounded-full bg-red-500/60" />
                    <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
                    <span className="w-2 h-2 rounded-full bg-green-500/60" />
                    <span className="ml-auto text-[9px] font-mono text-emerald-400">0.8s Load</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="w-3/4 h-2 rounded bg-amber-400/30" />
                    <div className="w-full h-1.5 rounded bg-white/20" />
                    <div className="w-1/2 h-4 rounded bg-amber-400 text-slate-950 text-[9px] font-bold flex items-center justify-center">
                      Join Campaign
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-amber-300 font-mono">
                <span>Core Web Vitals</span>
                <span>0.8s LCP</span>
              </div>
            </div>

            {/* Stage 03: SEO OPTIMIZATION */}
            <div className="relative p-5 rounded-2xl bg-[#0d0d18] border border-cyan-500/30 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-black text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                    STAGE 03
                  </span>
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">Technical SEO Moat</h4>
                <p className="text-xs text-slate-400 mb-4">
                  100% crawl clean, JSON-LD Schema graph, and entity validation keeping indexing stable.
                </p>

                {/* Miniature Technical Audit Widget */}
                <div className="p-3 rounded-xl bg-black/60 border border-white/10 text-[11px] space-y-1.5">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-slate-400">Technical Health</span>
                    <span className="text-cyan-400 font-bold">98 / 100</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full bg-cyan-400 w-[98%]" />
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-slate-300 pt-1">
                    <span>Schema Graph</span>
                    <span className="text-emerald-400">Valid (0 err)</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-cyan-300 font-mono">
                <span>Crawlability</span>
                <span>100% Clean</span>
              </div>
            </div>

            {/* Stage 04: CONVERSION */}
            <div className="relative p-5 rounded-2xl bg-[#0d0d18] border border-emerald-500/30 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-black text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    STAGE 04
                  </span>
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">Live Lead Conversion</h4>
                <p className="text-xs text-slate-400 mb-4">
                  Direct WhatsApp routing and targeted inquiry surveys capturing high-intent B2B depositors.
                </p>

                {/* Miniature WhatsApp Interaction */}
                <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-[11px] space-y-2">
                  <div className="p-2 rounded-lg bg-emerald-900/60 border border-emerald-500/30 text-emerald-100 text-[10px]">
                    &quot;Hi, I found you on Google. We want to scale our casino SEO.&quot;
                  </div>
                  <div className="flex items-center justify-between text-[9px] text-emerald-400 font-mono">
                    <span>Direct WhatsApp Trigger</span>
                    <span>15m SLA</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-emerald-300 font-mono">
                <span>Conversion Rate</span>
                <span>4.8% Search-to-Deal</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
