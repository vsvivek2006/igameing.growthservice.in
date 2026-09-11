import React from 'react';
import { 
  MessageSquare, 
  Search, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  Zap,
  Clock
} from 'lucide-react';

export const SeoFinalCTA: React.FC = () => {
  return (
    <section className="relative py-24 lg:py-36 bg-model3-base text-white border-b border-white/10 overflow-hidden">
      {/* Background Matrix Grid */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Atmospheric Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-purple-900/20 via-indigo-900/15 to-amber-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/15 backdrop-blur-md mb-6 shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
            Scale Your Organic Market Share
          </span>
        </div>

        {/* Closing Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-heading mb-6 leading-[1.1]">
          Ready To Build Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
            Search Presence?
          </span>
        </h2>

        {/* Supporting Message */}
        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium mb-10">
          Build a website that looks premium, performs fast, gets discovered, and gives your business a stronger path from search to conversion.
        </p>

        {/* Dual Primary Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="https://wa.me/919999999999?text=Hello%20iGaming%20Growth%20Team%2C%20I%20am%20ready%20to%20start%20an%20SEO%20campaign."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 hover:from-amber-300 hover:to-yellow-300 shadow-xl shadow-amber-400/25 active:scale-[0.98] transition-all"
          >
            <MessageSquare className="w-4 h-4 text-slate-950 fill-current" />
            <span>WhatsApp Us Now</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </a>

          <a
            href="/free-seo-audit"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm font-bold text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 backdrop-blur-md active:scale-[0.98] transition-all"
          >
            <Search className="w-4 h-4 text-amber-400" />
            <span>Request Free SEO Audit</span>
          </a>
        </div>

        {/* Live SLA & Trust Strip */}
        <div className="inline-flex flex-wrap items-center justify-center gap-6 p-4 rounded-2xl bg-model3-surface border border-white/10 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>15-Minute WhatsApp Response Time</span>
          </div>
          <span className="text-white/20 hidden sm:inline">•</span>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Zero Lock-In Contract Option</span>
          </div>
          <span className="text-white/20 hidden sm:inline">•</span>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span>Starting from ₹35K / Month</span>
          </div>
        </div>

      </div>
    </section>
  );
};
