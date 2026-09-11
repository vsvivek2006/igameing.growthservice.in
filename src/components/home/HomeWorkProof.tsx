import React, { useState } from 'react';
import { 
  ArrowRight,
  Sparkles,
  Lock,
  Maximize2,
  X,
  ExternalLink,
  CheckCircle2
} from 'lucide-react';
import { trackEvent } from '../../analytics';

interface LightboxState {
  src: string;
  title: string;
  subtitle: string;
  domain: string;
}

interface ProofCardData {
  id: string;
  domain: string;
  badge: string;
  badgeColor: string;
  headline: string;
  description: string;
  image: string;
  thumb: string;
  imageAlt: string;
  metrics: { label: string; value: string; color: string }[];
  verifiedNote: string;
}

const PROOF_CARDS: ProofCardData[] = [
  {
    id: 'yono-15m',
    domain: 'yononewgamess.com',
    badge: '15.9M Clicks · 3 Months',
    badgeColor: 'text-purple-300 bg-purple-500/20 border-purple-500/40',
    headline: '15.9 Million Real Players From Google Search',
    description: 'Programmatic SEO architecture pushing real-money skill gaming terms to top Google positions with zero domain bans.',
    image: '/images/proof/yono-15m-gsc-clean.webp',
    thumb: '/images/proof/yono-15m-gsc-thumb.webp',
    imageAlt: 'Google Search Console 15.9M Clicks Proof - yononewgamess.com',
    metrics: [
      { label: 'Total Clicks', value: '15.9M', color: 'text-purple-400' },
      { label: 'Impressions', value: '30.5M', color: 'text-white' },
      { label: 'CTR', value: '52.2%', color: 'text-amber-400' },
      { label: 'Avg Position', value: '#2.1', color: 'text-emerald-400' },
    ],
    verifiedNote: 'Verified GSC 3-Month Export · Real Skill Gaming Traffic',
  },
  {
    id: 'yono-daily',
    domain: 'yononewgamess.com (24h Live)',
    badge: '90.4K Daily Clicks',
    badgeColor: 'text-amber-300 bg-amber-500/20 border-amber-500/40',
    headline: '90,400 Players in a Single 24-Hour Window',
    description: 'Live daily search telemetry capturing continuous organic player inflow with an average ranking of #1.9 across target keywords.',
    image: '/images/proof/yono-daily-gsc-clean.webp',
    thumb: '/images/proof/yono-daily-gsc-thumb.webp',
    imageAlt: 'Google Search Console 90.4K Daily Clicks Proof - yononewgamess.com',
    metrics: [
      { label: '24h Clicks', value: '90.4K', color: 'text-amber-400' },
      { label: '24h Impressions', value: '195K', color: 'text-white' },
      { label: 'CTR', value: '46.4%', color: 'text-emerald-400' },
      { label: 'Avg Position', value: '#1.9', color: 'text-cyan-400' },
    ],
    verifiedNote: '24h Live Real-Time Telemetry · Uninterrupted Depositor Inflow',
  },
  {
    id: 'iv7-exchange',
    domain: 'iv-7.com',
    badge: '22K Clicks · 28 Days',
    badgeColor: 'text-cyan-300 bg-cyan-500/20 border-cyan-500/40',
    headline: '22,000 Organic Depositor Inquiries for Betting Exchange',
    description: 'Front-page dominance across competitive exchange queries. 39.2% of Google searchers click directly through to registration.',
    image: '/images/proof/iv7-22k-gsc-clean.webp',
    thumb: '/images/proof/iv7-22k-gsc-thumb.webp',
    imageAlt: 'Google Search Console 22K Clicks Proof - iv-7.com',
    metrics: [
      { label: '28d Clicks', value: '22.0K', color: 'text-cyan-400' },
      { label: 'Impressions', value: '56.1K', color: 'text-white' },
      { label: 'CTR', value: '39.2%', color: 'text-amber-400' },
      { label: 'Avg Position', value: '#4.7', color: 'text-emerald-400' },
    ],
    verifiedNote: 'Verified Betting Exchange GSC Report · Zero Penalties',
  },
  {
    id: 'is7gam-casino',
    domain: 'is7gam.com',
    badge: '52.6% CTR · Rank 2.9',
    badgeColor: 'text-emerald-300 bg-emerald-500/20 border-emerald-500/40',
    headline: '52.6% Click-Through Rate & Top-3 Rankings on Google',
    description: 'High-intent search optimization for online casino and cricket platform, converting more than 1 in every 2 searchers.',
    image: '/images/proof/is7gam-rank-gsc-clean.webp',
    thumb: '/images/proof/is7gam-rank-gsc-thumb.webp',
    imageAlt: 'Google Search Console 52.6% CTR Proof - is7gam.com',
    metrics: [
      { label: '24h Clicks', value: '565', color: 'text-emerald-400' },
      { label: 'CTR', value: '52.6%', color: 'text-amber-400' },
      { label: 'Avg Position', value: '#2.9', color: 'text-cyan-400' },
      { label: 'Ad Spend', value: '₹0', color: 'text-white' },
    ],
    verifiedNote: 'Organic Casino & Cricket ID Inflow · Clean Search Snippet',
  },
];

export const HomeWorkProof: React.FC = () => {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  const openLightbox = (src: string, title: string, subtitle: string, domain: string) => {
    setLightbox({ src, title, subtitle, domain });
    trackEvent('proof_zoom_modal_open', { domain });
  };

  return (
    <section id="proof" className="relative py-20 lg:py-28 bg-model3-surface/70 overflow-hidden border-b border-white/10">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-24 w-[500px] h-[500px] bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[450px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/15 text-xs font-bold uppercase tracking-widest text-slate-300 mb-4 shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Verified Results &amp; Real Search Traffic</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight mb-4">
            Real Proof From Real Sites. <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
              Millions of Real Players on Google.
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Every case study below is a standalone, verified export from Google Search Console. We build high-converting search infrastructure for gaming, casino, cricket ID, and betting exchange platforms.
          </p>
        </div>

        {/* 4 Standalone Cards Grid (2x2 on Desktop, 1-Col on Mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROOF_CARDS.map((card) => (
            <div
              key={card.id}
              className="flex flex-col rounded-3xl bg-model3-base/95 border border-white/15 overflow-hidden shadow-2xl hover:border-amber-400/40 transition-all duration-300 group"
            >
              {/* Simulated Browser Chrome Top Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <div className="ml-2 flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-black/60 border border-white/10 text-[11px] font-mono text-slate-300 max-w-[220px] sm:max-w-none truncate">
                    <Lock className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                    <span className="truncate">search.google.com/search-console/{card.domain}</span>
                  </div>
                </div>
                <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold border backdrop-blur-md shrink-0 ${card.badgeColor}`}>
                  {card.badge}
                </span>
              </div>

              {/* Crystal Clear Cleaned GSC Image with Lightbox Zoom Trigger */}
              <div 
                onClick={() => openLightbox(card.image, card.headline, card.verifiedNote, card.domain)}
                className="relative bg-white cursor-pointer overflow-hidden group/img aspect-[16/8.5]"
              >
                <img
                  src={card.image}
                  alt={card.imageAlt}
                  width={1600}
                  height={824}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover/img:scale-[1.01] transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-slate-950/0 group-hover/img:bg-slate-950/40 transition-colors flex items-center justify-center opacity-0 group-hover/img:opacity-100">
                  <span className="px-3.5 py-2 rounded-xl bg-slate-950/95 border border-amber-400 text-amber-300 text-xs font-bold shadow-2xl flex items-center gap-2 transform translate-y-2 group-hover/img:translate-y-0 transition-transform">
                    <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>Click to Inspect Full GSC Report</span>
                  </span>
                </div>
              </div>

              {/* Card Body: Headings & Description */}
              <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <h3 className="font-heading font-extrabold text-lg sm:text-xl text-white group-hover:text-amber-300 transition-colors">
                    {card.headline}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-2">
                    {card.description}
                  </p>
                </div>

                {/* 4-Stat Metric Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 font-mono">
                  {card.metrics.map((m, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-center">
                      <div className="text-[10px] text-slate-400 truncate">{m.label}</div>
                      <div className={`text-base font-extrabold font-heading mt-0.5 ${m.color}`}>
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Card Footer: Verified Seal & Direct Action */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{card.verifiedNote}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => openLightbox(card.image, card.headline, card.verifiedNote, card.domain)}
                    className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-bold self-start sm:self-auto"
                  >
                    <span>View Data Sheet</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Lightbox / Full-Screen Inspection Modal */}
      {lightbox && (
        <div 
          className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <div 
            className="relative max-w-5xl w-full bg-slate-950 border border-white/20 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-slate-900 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 font-mono text-xs text-slate-300 font-bold hidden sm:inline">
                  Google Search Console Performance Report — {lightbox.domain}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setLightbox(null)}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Image Body */}
            <div className="p-3 sm:p-4 bg-slate-900/60 max-h-[80vh] overflow-auto">
              <img
                src={lightbox.src}
                alt={lightbox.title}
                width={1600}
                height={824}
                className="w-full h-auto rounded-xl shadow-2xl border border-white/10 object-contain"
              />
            </div>

            {/* Modal Footer */}
            <div className="px-4 sm:px-6 py-3 bg-slate-900 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div>
                <span className="font-bold text-white">{lightbox.title}</span>
                <span className="text-slate-400 block sm:inline sm:ml-2">— {lightbox.subtitle}</span>
              </div>
              <a
                href="/free-seo-audit"
                onClick={() => setLightbox(null)}
                className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-bold"
              >
                <span>Get This Ranking For Your Brand</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HomeWorkProof;
