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
  Zap
} from 'lucide-react';

export const SeoSearchToConversion: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video
              .play()
              .then(() => setIsPlaying(true))
              .catch(() => setIsPlaying(false));
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

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
    <section id="journey" className="relative py-20 lg:py-32 bg-model3-base text-white border-b border-white/10 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-purple-900/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/15 backdrop-blur-md mb-4 shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
              Live Video Proof (39 Seconds)
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-heading mb-5">
            Watch How Players Search on Google <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
              &amp; Deposit in Under 1 Minute.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Real screen recording: Watch an active player search for betting IDs on Google, open our lightning-fast mobile platform in 0.4 seconds, and connect instantly to WhatsApp for ID creation and UPI deposits.
          </p>
        </div>

        {/* ── Top Row: Premium Vertical Video Presentation + Storytelling Copy ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-24">
          
          {/* Left Column: Vertical Device Frame for the Provided 39s MP4 */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            {/* Phone Hardware Mockup Container */}
            <div className="relative w-full max-w-[270px] xs:max-w-[310px] sm:max-w-[340px] rounded-[38px] sm:rounded-[42px] p-2.5 sm:p-3 bg-gradient-to-b from-[#2a2a38] via-[#151520] to-[#08080f] border-2 border-white/20 shadow-2xl shadow-purple-950/60 group">
              
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
                  loop
                  muted={isMuted}
                  onTimeUpdate={handleTimeUpdate}
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

          {/* Right Column: Operator Value & Player Conversion Journey */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold w-fit mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Real Player Acquisition System</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-heading mb-6 leading-tight">
              How Google Search Turns Into <br />
              Real Players &amp; Cash Deposits.
            </h3>

            <p className="text-base text-slate-300 leading-relaxed font-normal mb-8">
              Most agencies hand you keyword spreadsheets that make zero revenue. Our system is built specifically for gaming platforms: we take high-intent players searching on Google, open your platform instantly, and funnel them directly into WhatsApp for ID creation and UPI deposits.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  title: '1. High-Intent Player Search Targeting',
                  desc: 'We rank your site for real money search terms: "cricket betting id", "lotus365 login", "online casino games", "fast withdrawal rummy".',
                },
                {
                  title: '2. 0.4s Fast Mobile Loading',
                  desc: 'Players on mobile 4G/5G get instant access in under half a second. No app store downloads, no waiting, zero lost players.',
                },
                {
                  title: '3. Live Match Odds & Casino Trust Triggers',
                  desc: 'Real-time IPL match rates, live dealers (Roulette, Teen Patti, Andar Bahar), and 24x7 withdrawal proofs convert visitors immediately.',
                },
                {
                  title: '4. 1-Tap WhatsApp ID & Instant UPI Deposit',
                  desc: 'Frictionless WhatsApp routing connects players straight to your cashier bot or master agent for instant ID generation in under 60 seconds.',
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

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-lg shadow-amber-400/20"
              >
                <span>Get This Player Funnel For Your Site</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
              </a>
              <a
                href="#proof"
                className="text-xs font-semibold text-slate-300 hover:text-white underline underline-offset-4 text-center py-1"
              >
                Inspect Real GSC Proofs →
              </a>
            </div>
          </div>

        </div>

        {/* ── Bottom: 4 Connected Visual Stages ───────────────────────────────── */}
        <div className="pt-8 border-t border-white/10">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Live Player Conversion Funnel
            </span>
            <h3 className="text-2xl font-bold text-white font-heading mt-1">
              How Your Players Sign Up &amp; Deposit
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            
            {/* Stage 01: SEARCH */}
            <div className="relative p-5 rounded-2xl bg-model3-deep border border-purple-500/30 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-extrabold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                    STAGE 01
                  </span>
                  <Search className="w-4 h-4 text-purple-400" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">Player Searches on Google</h4>
                <p className="text-xs text-slate-400 mb-4">
                  Player searches "online cricket id", "lotus365 login", or "casino games" on Google and finds your site at Rank #1.
                </p>

                {/* Miniature SERP Mockup */}
                <div className="p-3 rounded-xl bg-black/60 border border-white/10 text-[11px] font-sans">
                  <div className="flex items-center gap-1.5 text-[10px] text-slate-400 mb-1">
                    <div className="w-3.5 h-3.5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-[8px]">
                      G
                    </div>
                    <span>yourbrand-gaming.com</span>
                  </div>
                  <div className="text-blue-400 font-semibold hover:underline cursor-pointer mb-1 leading-tight">
                    Online Cricket ID &amp; Live Casino | Instant 24x7 Withdrawal
                  </div>
                  <div className="text-[10px] text-slate-400 line-clamp-2">
                    Official platform for cricket betting IDs, Teen Patti, and Roulette. 100% safe UPI deposits &amp; 1-minute payouts.
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-purple-300 font-mono">
                <span>Rank #1 Organic</span>
                <span>52.2% Click Rate</span>
              </div>
            </div>

            {/* Stage 02: LANDING PAGE */}
            <div className="relative p-5 rounded-2xl bg-model3-deep border border-amber-500/30 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-extrabold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    STAGE 02
                  </span>
                  <Laptop className="w-4 h-4 text-amber-400" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">0.4s Fast Mobile Loading</h4>
                <p className="text-xs text-slate-400 mb-4">
                  Opens instantly on 4G/5G mobile phones without installing any app. Zero lag during live IPL match hours.
                </p>

                {/* Miniature Browser Mockup */}
                <div className="p-3 rounded-xl bg-black/60 border border-white/10 text-[11px]">
                  <div className="flex items-center gap-1 pb-2 mb-2 border-b border-white/10">
                    <span className="w-2 h-2 rounded-full bg-red-500/60" />
                    <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
                    <span className="w-2 h-2 rounded-full bg-green-500/60" />
                    <span className="ml-auto text-[9px] font-mono text-emerald-400">0.4s Instant</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="w-3/4 h-2 rounded bg-amber-400/30" />
                    <div className="w-full h-1.5 rounded bg-white/20" />
                    <div className="w-full h-5 rounded bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 text-[10px] font-bold flex items-center justify-center">
                      Get Cricket ID Now
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-amber-300 font-mono">
                <span>Mobile Speed</span>
                <span>0.4s No Lag</span>
              </div>
            </div>

            {/* Stage 03: LIVE ODDS & CASINO */}
            <div className="relative p-5 rounded-2xl bg-model3-deep border border-cyan-500/30 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-extrabold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                    STAGE 03
                  </span>
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">Live Odds &amp; Games</h4>
                <p className="text-xs text-slate-400 mb-4">
                  Player sees live cricket match odds, active casino tables, and 24x7 payment proofs that build trust.
                </p>

                {/* Miniature Match Odds Widget */}
                <div className="p-3 rounded-xl bg-black/60 border border-white/10 text-[11px] space-y-1.5">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-slate-300 font-bold">India vs Australia</span>
                    <span className="text-emerald-400 font-bold">LIVE MATCH</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5 pt-1">
                    <div className="p-1.5 rounded bg-blue-500/10 border border-blue-500/20 text-center">
                      <div className="text-[9px] text-slate-400">Back (IND)</div>
                      <div className="text-[11px] font-bold text-blue-300">1.88</div>
                    </div>
                    <div className="p-1.5 rounded bg-rose-500/10 border border-rose-500/20 text-center">
                      <div className="text-[9px] text-slate-400">Lay (IND)</div>
                      <div className="text-[11px] font-bold text-rose-300">1.92</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-cyan-300 font-mono">
                <span>Platform Uptime</span>
                <span>100% Zero Crash</span>
              </div>
            </div>

            {/* Stage 04: CONVERSION */}
            <div className="relative p-5 rounded-2xl bg-model3-deep border border-emerald-500/30 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-extrabold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    STAGE 04
                  </span>
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">WhatsApp ID &amp; UPI Deposit</h4>
                <p className="text-xs text-slate-400 mb-4">
                  1-Click WhatsApp routing connects player to admin. Cashier bot issues login ID &amp; accepts UPI deposit in 60 seconds.
                </p>

                {/* Miniature WhatsApp Interaction */}
                <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-[11px] space-y-2">
                  <div className="p-2 rounded-lg bg-emerald-900/60 border border-emerald-500/30 text-emerald-100 text-[10px]">
                    &quot;Hello, I need a new ID with ₹1,000 deposit bonus.&quot;
                  </div>
                  <div className="flex items-center justify-between text-[9px] text-emerald-400 font-mono">
                    <span>Direct WhatsApp Bot</span>
                    <span>60s SLA</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-emerald-300 font-mono">
                <span>Deposit Flow</span>
                <span>Fast UPI Payouts</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
