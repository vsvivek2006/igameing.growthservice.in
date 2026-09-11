import React from 'react';
import { 
  Gamepad2, 
  Trophy, 
  TrendingUp, 
  Bitcoin, 
  ShoppingCart, 
  Cpu, 
  Sparkles, 
  ArrowRight,
  Shield,
  Layers
} from 'lucide-react';

export const Model3Industries: React.FC = () => {
  const industries = [
    {
      title: 'Gaming & Esports Platforms',
      slug: 'esports-gaming',
      category: 'HIGH LTV • GLOBAL PLAYERBASE',
      icon: Gamepad2,
      accent: 'from-purple-500 to-indigo-600',
      borderAccent: 'border-purple-500/20 hover:border-purple-500/50',
      description:
        'Engineered for competitive multiplayer titles, browser games, and esports networks requiring high-volume player acquisition and sub-second discovery.',
      seoFocus: 'Tournament intent, title-specific cluster pages, and community backlink velocity.',
      kpis: ['High Organic Retention', 'Sub-800ms Asset Load'],
    },
    {
      title: 'Online Casino & iGaming',
      slug: 'online-casino',
      category: 'MULTI-JURISDICTIONAL • STRICT COMPLIANCE',
      icon: Layers,
      accent: 'from-amber-400 to-yellow-500',
      borderAccent: 'border-amber-500/20 hover:border-amber-500/50',
      description:
        'Navigating hyper-competitive casino SERPs with surgical compliance, clean entity mapping, and localized landing pages for licensed jurisdictions.',
      seoFocus: 'Clean schema markup, multi-region hreflang architecture, and high-trust editorial citations.',
      kpis: ['Top 3 Organic Cluster', '46.4% Snippet CTR'],
    },
    {
      title: 'Sportsbook & Cricket Exchanges',
      slug: 'sports-betting',
      category: 'TOURNAMENT SPIKES • REAL-TIME ODDS',
      icon: Trophy,
      accent: 'from-emerald-400 to-teal-500',
      borderAccent: 'border-emerald-500/20 hover:border-emerald-500/50',
      description:
        'Capturing massive search volume surges during live cricket matches, Premier League fixtures, and international sports tournaments with zero downtime.',
      seoFocus: 'Dynamic event schema, fast-refresh mobile UI, and zero layout shift during odds shifts.',
      kpis: ['Surge Spike Ready', 'Zero Downtime'],
    },
    {
      title: 'Fintech & Multi-Asset Trading',
      slug: 'trading-forex',
      category: 'HIGH TRUST • REGULATORY SCRUTINY',
      icon: TrendingUp,
      accent: 'from-blue-400 to-indigo-500',
      borderAccent: 'border-blue-500/20 hover:border-blue-500/50',
      description:
        'Targeting affluent retail and institutional traders searching for broker comparisons, copy trading platforms, and algorithmic execution tools.',
      seoFocus: 'Deep E-E-A-T author attribution, financial disclaimer compliance, and high-DR financial backlinks.',
      kpis: ['High-Intent Leads', 'Institutional E-E-A-T'],
    },
    {
      title: 'Color Prediction & Instant Games',
      slug: 'color-prediction',
      category: 'RAPID INDEXATION • HIGH VIRALITY',
      icon: Sparkles,
      accent: 'from-rose-400 to-pink-500',
      borderAccent: 'border-rose-500/20 hover:border-rose-500/50',
      description:
        'High-velocity search demand for instant-result games, lottery models, and provably fair number prediction apps with automated landing page scale.',
      seoFocus: 'Programmatic search clusters, instant mobile indexing, and high-frequency keyword discovery.',
      kpis: ['Rapid Search Index', 'Mobile-First Dominance'],
    },
    {
      title: 'High-Scale E-Commerce & SaaS',
      slug: 'ecommerce-platforms',
      category: 'CATALOG DEPTH • FACETED SEARCH',
      icon: ShoppingCart,
      accent: 'from-cyan-400 to-blue-500',
      borderAccent: 'border-cyan-500/20 hover:border-cyan-500/50',
      description:
        'Architected for large SKU volumes, faceted product filter crawl optimization, and enterprise software platforms needing scalable inbound pipelines.',
      seoFocus: 'Canonical crawl budget optimization, Product JSON-LD schema, and automated internal linking.',
      kpis: ['Crawl Efficiency 100%', 'Merchant Schema Valid'],
    },
  ];

  return (
    <section id="industries" className="relative py-20 lg:py-32 bg-[#08080f] text-white border-b border-white/10 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/15 backdrop-blur-md mb-4">
            <Shield className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
              High-Difficulty Niches
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-heading mb-5">
            Competitive Digital Markets.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium">
            Standard generic agency tactics collapse in high-competition verticals. We build custom SEO moats specifically tailored to the unique regulatory, technical, and velocity demands of these industries.
          </p>
        </div>

        {/* Industries 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div
                key={idx}
                className={`p-7 rounded-3xl bg-[#0d0d18] border ${ind.borderAccent} shadow-2xl flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${ind.accent} p-[1px]`}>
                      <div className="w-full h-full bg-[#0a0a14] rounded-[15px] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <span className="text-[10px] font-mono font-bold tracking-widest text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                      {ind.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-heading mb-3 group-hover:text-amber-400 transition-colors">
                    {ind.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-5 font-normal">
                    {ind.description}
                  </p>

                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 mb-6">
                    <span className="text-[10px] uppercase font-mono text-slate-400 block mb-1">
                      Tactical SEO Focus:
                    </span>
                    <p className="text-xs text-slate-300 font-medium leading-relaxed">
                      {ind.seoFocus}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {ind.kpis.map((kpi, kIdx) => (
                      <span
                        key={kIdx}
                        className="text-[10px] font-semibold text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/10"
                      >
                        {kpi}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#pricing"
                    className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Scale</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Compliance & Trust Note */}
        <div className="mt-12 text-center text-xs text-slate-500 max-w-2xl mx-auto">
          We operate under strict adherence to Google Search Essentials and regional market advertising regulations. No automated spam, no low-tier PBNs, no artificial manipulation.
        </div>

      </div>
    </section>
  );
};
