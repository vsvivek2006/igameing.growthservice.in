import React from 'react';
import { 
  TrendingUp, 
  Zap, 
  ShieldCheck, 
  Code2, 
  Clock, 
  Sparkles,
  Lock
} from 'lucide-react';

const TRUST_METRICS = [
  {
    icon: Sparkles,
    label: 'Tracked Turnover',
    value: '₹120M+ Vol',
    sub: 'Real Platform Volume Handled',
    color: 'text-amber-400',
  },
  {
    icon: TrendingUp,
    label: 'Google Organic',
    value: '15.9M+ Clicks',
    sub: 'Verified Search Console Proof',
    color: 'text-purple-400',
  },
  {
    icon: Zap,
    label: 'Mobile Speed',
    value: '0.4s Fast',
    sub: 'Zero Lag During Live Matches',
    color: 'text-cyan-400',
  },
  {
    icon: ShieldCheck,
    label: 'Ad Protection',
    value: '0 Bans',
    sub: 'Whitelisted Google & Meta Ads',
    color: 'text-emerald-400',
  },
  {
    icon: Code2,
    label: 'Platform Control',
    value: '100% Yours',
    sub: 'Full Admin & Source Code Ownership',
    color: 'text-indigo-400',
  },
  {
    icon: Lock,
    label: 'Mutual NDA',
    value: 'Strict Silence',
    sub: '100% Anonymous & Confidential',
    color: 'text-rose-400',
  },
  {
    icon: Clock,
    label: 'Operator Support',
    value: '<15 Min SLA',
    sub: 'Direct Dedicated WhatsApp Group',
    color: 'text-amber-400',
  },
];

export const HomeTrustStrip: React.FC = () => {
  const items = [...TRUST_METRICS, ...TRUST_METRICS];

  return (
    <section className="relative bg-model3-surface/80 border-b border-white/10 backdrop-blur-md overflow-hidden py-3.5">
      {/* Smooth gradient fade on sides */}
      <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-model3-base via-model3-base/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-model3-base via-model3-base/80 to-transparent z-10 pointer-events-none" />

      {/* Infinite Smooth Marquee moving left */}
      <div className="ticker-track gap-5 py-1">
        {items.map((m, idx) => {
          const Icon = m.icon;
          return (
            <div 
              key={idx} 
              className="flex items-center gap-3 shrink-0 px-4 py-2 rounded-xl bg-white/[0.02] border border-white/10 hover:border-amber-400/40 hover:bg-white/[0.05] transition-all cursor-default"
            >
              <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0">
                <Icon className={`w-4 h-4 ${m.color}`} />
              </div>
              <div className="whitespace-nowrap">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-extrabold text-white font-heading tracking-tight">
                    {m.value}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                    {m.label}
                  </span>
                </div>
                <div className="text-[11px] text-slate-400">
                  {m.sub}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HomeTrustStrip;
