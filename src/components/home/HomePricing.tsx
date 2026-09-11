import React from 'react';
import { 
  Check, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck,
  Zap,
  Code2,
  Search,
  ExternalLink
} from 'lucide-react';
import businessConfig from '../../config/business';
import { MAIN_PACKAGES, PAID_ACQUISITION_PACKAGE, PRICING_DISCLAIMER } from '../../data/pricingData';

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
              Zero Vanity Retainers.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Choose turnkey platform engineering, aggressive search dominance, or an integrated full-stack growth squad. All code is 100% client-owned.
          </p>
        </div>

        {/* ── 3 Main Packages Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-12">
          {MAIN_PACKAGES.map((pkg) => {
            const isFeatured = pkg.featured;
            const message = encodeURIComponent(`Hello iGaming Growth, I am interested in the ${pkg.name} package (${pkg.priceINR}). Let's discuss requirements.`);
            const ctaHref = `https://wa.me/${whatsappPhone}?text=${message}`;

            return (
              <div
                key={pkg.id}
                className={`relative flex flex-col justify-between rounded-3xl p-5 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 ${
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
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      pkg.id === 'platform-build' || pkg.id === 'only-web' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30' :
                      pkg.id === 'full-stack-suite' || pkg.id === 'web-plus-seo' ? 'bg-amber-400/15 text-amber-400 border border-amber-400/40' :
                      'bg-purple-500/10 text-purple-400 border border-purple-500/30'
                    }`}>
                      {pkg.id === 'platform-build' || pkg.id === 'only-web' ? <Code2 className="w-5 h-5" /> :
                       pkg.id === 'full-stack-suite' || pkg.id === 'web-plus-seo' ? <Zap className="w-5 h-5" /> :
                       <Search className="w-5 h-5" />}
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold text-white font-heading">
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

        {/* 4. Standalone Paid Media Add-on Card */}
        <div className="relative p-5 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-r from-[#0C0D1B] via-[#0E1026] to-[#0A0D1F] border border-cyan-500/30 shadow-2xl overflow-hidden mb-12">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-bold uppercase tracking-wider text-cyan-300">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>Compliant Paid Media Service</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                {PAID_ACQUISITION_PACKAGE.name}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
                We run policy-whitelisted Google Search Ads, YouTube ads, and Meta (Facebook/Instagram) campaigns for licensed casino, cricket betting ID, and rummy platforms. <strong className="text-white">Zero deceptive black-hat cloaking</strong> — permanent pixel learning with 0 merchant bans.
              </p>

              {/* Checklist preview */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs text-slate-300">
                {PAID_ACQUISITION_PACKAGE.features.slice(0, 6).map((f, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end lg:text-right border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8">
              <div className="text-3xl sm:text-4xl font-black text-amber-400 font-heading">
                {PAID_ACQUISITION_PACKAGE.priceINR}
              </div>
              <div className="text-xs text-slate-400 font-mono mt-0.5">
                ({PAID_ACQUISITION_PACKAGE.priceUSD}) {PAID_ACQUISITION_PACKAGE.billingNote}
              </div>

              <a
                href={`https://wa.me/${whatsappPhone}?text=Hello%20iGaming%20Growth%2C%20I%20want%20to%20run%20policy-compliant%20Google%20and%20Meta%20Ads%20for%20our%20gaming%20platform.`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 font-bold text-xs hover:from-amber-300 hover:to-yellow-300 shadow-lg shadow-amber-400/20 transition-all active:scale-95"
              >
                <span>{PAID_ACQUISITION_PACKAGE.cta}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
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
