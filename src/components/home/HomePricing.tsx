import React from 'react';
import { 
  Check, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck,
  Zap,
  Code2,
  Search,
  Target,
  Layers,
  ExternalLink
} from 'lucide-react';
import businessConfig from '../../config/business';
import { MAIN_PACKAGES, PAID_PACKAGES, PRICING_DISCLAIMER } from '../../data/pricingData';

export const HomePricing: React.FC = () => {
  const whatsappPhone = (businessConfig.phone?.whatsapp || businessConfig.contact?.whatsapp || '917654928455').replace(/[^0-9]/g, '');

  return (
    <section id="pricing" className="relative py-20 lg:py-32 bg-model3-base text-white border-b border-white/10 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-purple-900/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/15 backdrop-blur-md mb-4 shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
              Direct Engineering Pricing
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-heading mb-5">
            Transparent Pricing.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
              Zero Hidden Retainers.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Choose turnkey platform engineering, monthly SEO sprints, 3-month rank guarantee, or whitelisted paid media scaling. All code is 100% client-owned.
          </p>
        </div>

        {/* ── 3 Main Packages Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-20">
          {MAIN_PACKAGES.map((pkg) => {
            const isFeatured = pkg.featured;
            const message = encodeURIComponent(`Hello iGaming Growth, I am interested in the ${pkg.name} package (${pkg.priceINR}). Let's discuss requirements.`);
            const ctaHref = `https://wa.me/${whatsappPhone}?text=${message}`;

            return (
              <div
                key={pkg.id}
                className={`relative flex flex-col justify-between rounded-3xl p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 ${
                  isFeatured
                    ? 'bg-[#0E0E1A] border-2 border-amber-400/80 shadow-2xl shadow-amber-500/20 ring-1 ring-amber-400/50 lg:scale-[1.02]'
                    : 'bg-[#0B0B14]/85 border border-white/10 hover:border-white/20 shadow-xl'
                }`}
              >
                {/* Featured Badge */}
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                    <span className={`whitespace-nowrap inline-flex items-center justify-center text-[10px] sm:text-[11px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-lg ${
                      isFeatured
                        ? 'bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 font-bold border border-amber-300/50'
                        : 'bg-white/10 text-slate-300 border border-white/15'
                    }`}>
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Package Icon & Name */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      pkg.id === 'platform-build' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30' :
                      pkg.id === 'seo-onetime' ? 'bg-amber-400/15 text-amber-400 border border-amber-400/40' :
                      'bg-purple-500/10 text-purple-400 border border-purple-500/30'
                    }`}>
                      {pkg.id === 'platform-build' ? <Code2 className="w-5 h-5" /> :
                       pkg.id === 'seo-onetime' ? <Zap className="w-5 h-5" /> :
                       <Search className="w-5 h-5" />}
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white font-heading leading-tight">
                        {pkg.name}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 mb-6 leading-relaxed min-h-[36px]">
                    {pkg.tagline}
                  </p>

                  {/* Price Tag */}
                  <div className="pb-6 border-b border-white/10 mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-black text-white font-heading">
                        {pkg.priceINR}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">
                        ({pkg.priceUSD})
                      </span>
                    </div>
                    <div className="text-xs text-amber-400/90 font-mono mt-1">
                      {pkg.billingNote}
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Deliverables Included:
                    </div>
                    {pkg.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <div className="rounded-full p-0.5 bg-emerald-500/20 text-emerald-400 mt-0.5 shrink-0">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="leading-snug">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Package CTA */}
                <div className="mt-4 pt-4 border-t border-white/10">
                  <a
                    href={ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-xs font-bold transition-all duration-200 ${
                      isFeatured
                        ? 'bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-slate-950 font-black shadow-lg shadow-amber-400/30 hover:from-amber-300 hover:to-yellow-300 active:scale-[0.98]'
                        : 'bg-white/[0.06] hover:bg-white/10 text-white border border-white/15 active:scale-[0.98]'
                    }`}
                  >
                    <span>{pkg.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Paid Media Acquisition Section (Meta Ads & Meta + Google Ads - Redesigned & Centered) ── */}
        <div className="max-w-5xl mx-auto mb-16">
          {/* Centered Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-bold uppercase tracking-wider text-cyan-300 mb-3 shadow-inner">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>Whitelisted Paid Media Acquisition</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
              Policy-Compliant Ads Management
            </h3>
            <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
              Whitelisted agency ad accounts with zero account bans, server-side Conversions API (CAPI), and rapid WhatsApp/Telegram deposit routing.
            </p>
          </div>

          {/* Centered 2-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch justify-center max-w-4xl mx-auto">
            {PAID_PACKAGES.map((pkg) => {
              const isFeatured = pkg.featured;
              const isMeta = pkg.id === 'meta-ads';
              const message = encodeURIComponent(`Hello iGaming Growth, I am interested in the ${pkg.name} (${pkg.priceINR}). Let's discuss paid acquisition campaigns.`);
              const ctaHref = `https://wa.me/${whatsappPhone}?text=${message}`;

              return (
                <div
                  key={pkg.id}
                  className={`relative flex flex-col justify-between rounded-3xl p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 ${
                    isFeatured
                      ? 'bg-gradient-to-b from-[#0F122B] via-[#0C0E22] to-[#090A1A] border-2 border-amber-400/80 shadow-2xl shadow-amber-500/20 ring-1 ring-amber-400/50 md:scale-[1.02]'
                      : 'bg-gradient-to-b from-[#0B0D1E] to-[#070814] border border-cyan-500/35 hover:border-cyan-400/60 shadow-xl shadow-cyan-950/20'
                  }`}
                >
                  {/* Centered Top Badge */}
                  {pkg.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                      <span className={`whitespace-nowrap inline-flex items-center justify-center text-[10px] sm:text-[11px] font-black uppercase tracking-wider px-4 py-1 rounded-full shadow-lg ${
                        isFeatured
                          ? 'bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 font-bold border border-amber-300/50'
                          : 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40'
                      }`}>
                        {pkg.badge}
                      </span>
                    </div>
                  )}

                  <div>
                    {/* Centered Card Icon */}
                    <div className="flex justify-center mb-4 pt-1">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-inner ${
                        isFeatured 
                          ? 'bg-amber-400/15 text-amber-400 border border-amber-400/40' 
                          : 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/40'
                      }`}>
                        {isMeta ? <Target className="w-6 h-6" /> : <Layers className="w-6 h-6" />}
                      </div>
                    </div>

                    {/* Centered Title & Tagline */}
                    <div className="text-center mb-2">
                      <h4 className="text-2xl font-extrabold text-white font-heading">
                        {pkg.name}
                      </h4>
                      <p className="text-xs text-slate-300 mt-1.5 leading-relaxed min-h-[34px]">
                        {pkg.tagline}
                      </p>
                    </div>

                    {/* Centered Pricing Block */}
                    <div className={`py-4 my-5 rounded-2xl text-center border ${
                      isFeatured 
                        ? 'bg-amber-400/[0.04] border-amber-400/25' 
                        : 'bg-cyan-500/[0.04] border-cyan-500/25'
                    }`}>
                      <div className="flex items-baseline justify-center gap-2">
                        <span className={`text-4xl sm:text-5xl font-black font-heading ${
                          isFeatured ? 'text-amber-400' : 'text-white'
                        }`}>
                          {pkg.priceINR}
                        </span>
                        <span className="text-xs text-slate-400 font-mono">
                          ({pkg.priceUSD})
                        </span>
                      </div>
                      <div className={`text-xs font-mono mt-1 font-semibold ${
                        isFeatured ? 'text-amber-300/90' : 'text-cyan-300/90'
                      }`}>
                        {pkg.billingNote}
                      </div>
                    </div>

                    {/* Deliverables Checklist (Centered container, left-aligned items) */}
                    <div className="space-y-3 mb-8 px-1">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 text-center mb-3">
                        Deliverables Included:
                      </div>
                      {pkg.features.map((f, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                          <div className="rounded-full p-0.5 bg-emerald-500/20 text-emerald-400 mt-0.5 shrink-0">
                            <Check className="w-3 h-3" />
                          </div>
                          <span className="leading-snug">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Centered Card CTA */}
                  <div className="pt-4 border-t border-white/10">
                    <a
                      href={ctaHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-xs font-bold transition-all duration-200 ${
                        isFeatured
                          ? 'bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-slate-950 font-black shadow-lg shadow-amber-400/30 hover:from-amber-300 hover:to-yellow-300 active:scale-[0.98]'
                          : 'bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/40 hover:border-cyan-400/60 font-bold active:scale-[0.98]'
                      }`}
                    >
                      <span>{pkg.cta}</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Compliance & SLA Guarantee */}
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 text-center max-w-3xl mx-auto">
          <p className="text-xs text-slate-400 leading-relaxed">
            <strong className="text-slate-200">SLA Guarantee:</strong> {PRICING_DISCLAIMER}
          </p>
        </div>

      </div>
    </section>
  );
};

export default HomePricing;
