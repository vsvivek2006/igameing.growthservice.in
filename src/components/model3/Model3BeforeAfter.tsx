import React, { useState } from 'react';
import { 
  XCircle, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  Zap, 
  Gauge, 
  TrendingDown, 
  TrendingUp,
  AlertTriangle
} from 'lucide-react';

export const Model3BeforeAfter: React.FC = () => {
  const [activeView, setActiveView] = useState<'both' | 'before' | 'after'>('both');

  const beforePoints = [
    { label: 'Slow Page Load', value: '4.8s Mobile LCP', desc: 'Heavy WordPress/legacy plugins stalling rendering' },
    { label: 'Broken Taxonomies', value: 'Messy URL hierarchy', desc: 'Crawlers wasting crawl budget on duplicate parameters' },
    { label: 'Zero Schema Moat', value: '0 Rich Snippets', desc: 'Plain blue search links with low 1.2% clickthrough rate' },
    { label: 'Weak Intent Match', value: 'Generic Homepage Dump', desc: 'All search queries dumped on a single unfocused landing page' },
    { label: 'High Bounce Rate', value: '68% Visitor Abandonment', desc: 'No instant WhatsApp trigger or clear friction-free CTA' },
  ];

  const afterPoints = [
    { label: 'Sub-second Speed', value: '0.8s Global LCP', desc: 'Edge-cached, zero-bloat modern TypeScript architecture' },
    { label: 'Surgical Architecture', value: '50-Page SEO OS', desc: 'Structured hub-and-spoke internal linking distribution' },
    { label: 'Complete Schema Graph', value: 'Valid JSON-LD Snippets', desc: 'High-visibility review stars, FAQ cards, and 46.4% peak CTR' },
    { label: 'Bespoke Pillar Pages', value: 'Exact Intent Relevancy', desc: 'Custom landing pages matching each commercial keyword cluster' },
    { label: 'High Conversion Yield', value: '4.8% Search-to-Deal', desc: 'Direct WhatsApp routing, micro-surveys, and live qualification' },
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-[#08080f] text-white border-b border-white/10 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/15 backdrop-blur-md mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
              The Architecture Shift
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-heading mb-5">
            Before vs. After Model 3 Transformation.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium">
            See the concrete difference between standard legacy agency tactics and our performance-engineered SEO OS.
          </p>
        </div>

        {/* Side-by-Side Comparison Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* ── BEFORE CARD ──────────────────────────────────────────────────── */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0f0b12] border border-red-500/20 shadow-2xl relative flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-red-500/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center">
                    <TrendingDown className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-red-400 uppercase font-bold block">
                      Legacy Approach
                    </span>
                    <h3 className="text-xl font-black text-white font-heading">
                      Generic Agency &amp; Bloated CMS
                    </h3>
                  </div>
                </div>

                <span className="text-xs font-bold px-3 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
                  High Waste
                </span>
              </div>

              <div className="space-y-4 mb-8">
                {beforePoints.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-red-950/20 border border-red-500/15">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                        <span className="text-xs font-bold text-red-200">{item.label}</span>
                      </div>
                      <span className="text-[11px] font-mono font-bold text-red-400 bg-red-500/10 px-2 py-0.5 rounded">
                        {item.value}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 pl-6 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-red-500/20 text-xs text-slate-400 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
              <span>Result: Low ranking stability, high CPA, lost revenue opportunities.</span>
            </div>
          </div>

          {/* ── AFTER CARD (MODEL 3) ────────────────────────────────────────── */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0b1210] border border-emerald-500/30 shadow-2xl relative flex flex-col justify-between group hover:border-emerald-500/60 transition-colors">
            {/* Top Recommended Tag */}
            <div className="absolute -top-3.5 right-8">
              <span className="text-[10px] font-mono font-black uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-400/30">
                Model 3 Performance Standard
              </span>
            </div>

            <div>
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-emerald-500/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase font-bold block">
                      Performance Standard
                    </span>
                    <h3 className="text-xl font-black text-white font-heading">
                      Model 3 SEO Operating System
                    </h3>
                  </div>
                </div>

                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Max Yield
                </span>
              </div>

              <div className="space-y-4 mb-8">
                {afterPoints.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span className="text-xs font-bold text-emerald-200">{item.label}</span>
                      </div>
                      <span className="text-[11px] font-mono font-bold text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        {item.value}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300 pl-6 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-emerald-500/20 text-xs text-emerald-300 flex items-center justify-between">
              <span className="font-semibold">Transform Your Search Presence:</span>
              <a
                href="#pricing"
                className="inline-flex items-center gap-1.5 font-bold text-amber-400 hover:text-amber-300"
              >
                <span>Deploy Model 3</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
