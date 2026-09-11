import React from 'react';
import { 
  XCircle, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  Layers 
} from 'lucide-react';

const COMPARISON_POINTS = [
  {
    feature: 'Codebase & Architecture',
    generalist: 'Bloated WordPress templates with 40+ plugins, 4s+ mobile load times, slow database queries.',
    growthService: 'Custom headless TypeScript & React on global edge CDNs, sub-650ms LCP, 99+ mobile Lighthouse.',
  },
  {
    feature: 'Search Engine Approach',
    generalist: 'Generic keyword stuffing, unverified blog spam, and spammy PBN backlink networks that risk algorithmic manual penalties.',
    growthService: 'Programmatic search crawling, entity-based JSON-LD schemas, topical authority graphs, and clean editorial links.',
  },
  {
    feature: 'Paid Media & Whitelisting',
    generalist: 'Burner ad accounts with deceptive cloaking redirect scripts, resulting in permanent domain blacklisting and credit freezes.',
    growthService: 'Whitelisted agency accounts, policy-compliant bridge funnels, server-side Conversions API (CAPI) with 0 account bans.',
  },
  {
    feature: 'Player Conversion Funnels',
    generalist: 'Rigid 7-step KYC registration forms causing 60%+ drop-off, broken payment redirect gateways.',
    growthService: 'Frictionless 2-field onboarding, automated WhatsApp/Telegram VIP reload webhooks, and 3.8x deposit conversion lift.',
  },
  {
    feature: 'Delivery & Ownership',
    generalist: 'Vague 80-page monthly PDF reports with vanity impression graphs, zero access to production code.',
    growthService: '100% client code ownership, direct GitHub Pull Requests, live Search Console/GA4 Looker Studio telemetry.',
  },
];

export const HomeBeforeAfter: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-model3-surface/60 overflow-hidden border-b border-white/10">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/15 text-xs font-bold uppercase tracking-widest text-slate-300 mb-4">
            <Layers className="w-3.5 h-3.5 text-amber-400" />
            <span>Methodology Comparison</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight mb-4">
            Standard Agencies vs. <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
              iGaming Growth Engineering Squad
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Why regulated operators replace fragmented marketing agencies with our code-level, policy-compliant infrastructure.
          </p>
        </div>

        {/* Side-by-Side Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Traditional Agency Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-rose-950/10 border border-rose-500/20 backdrop-blur-md">
            <div className="flex items-center gap-2.5 pb-4 border-b border-rose-500/20 mb-6">
              <div className="w-8 h-8 rounded-xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center">
                <AlertTriangle className="w-4 h-4 text-rose-400" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-rose-400 block">
                  The Fragile Approach
                </span>
                <h3 className="text-lg font-bold text-white font-heading">
                  Traditional Digital Marketing Agency
                </h3>
              </div>
            </div>

            <div className="space-y-6">
              {COMPARISON_POINTS.map((pt, i) => (
                <div key={i} className="flex items-start gap-3 text-xs">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-200 block mb-1 font-mono text-[11px] uppercase tracking-wider">
                      {pt.feature}
                    </strong>
                    <p className="text-slate-400 leading-relaxed">
                      {pt.generalist}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* iGaming Growth Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-purple-950/30 to-model3-surface border border-amber-400/40 backdrop-blur-md shadow-2xl shadow-amber-950/10">
            <div className="flex items-center gap-2.5 pb-4 border-b border-white/10 mb-6">
              <div className="w-8 h-8 rounded-xl bg-amber-400/20 border border-amber-400/30 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400 block">
                  The Engineered Standard
                </span>
                <h3 className="text-lg font-bold text-white font-heading">
                  iGaming Growth Specialist Squad
                </h3>
              </div>
            </div>

            <div className="space-y-6">
              {COMPARISON_POINTS.map((pt, i) => (
                <div key={i} className="flex items-start gap-3 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-amber-300 block mb-1 font-mono text-[11px] uppercase tracking-wider">
                      {pt.feature}
                    </strong>
                    <p className="text-slate-200 leading-relaxed">
                      {pt.growthService}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HomeBeforeAfter;
