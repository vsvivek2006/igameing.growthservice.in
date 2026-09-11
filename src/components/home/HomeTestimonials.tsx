import React from 'react';
import { 
  Star, 
  Quote, 
  ShieldCheck, 
  TrendingUp, 
  CheckCircle2, 
  Sparkles,
  Building2
} from 'lucide-react';

interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  vertical: string;
  avatar?: string;
  initials?: string;
  avatarColor?: string;
  metric: string;
  quote: string;
  verifiedResult: string;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    name: 'Vikram Malhotra',
    role: 'VP of Digital Growth',
    company: 'ApexBet International',
    vertical: 'Curaçao Licensed Sportsbook & Casino',
    initials: 'VM',
    avatarColor: 'from-amber-400 via-yellow-500 to-amber-600',
    metric: '+318% Organic FTDs in 120 Days',
    verifiedResult: 'Ranked #1 for 14 Tier-1 High-Intent Betting Terms',
    quote:
      'Finding an agency that truly understands iGaming search architecture without churning through banned domains is nearly impossible. iGaming Growth completely re-engineered our headless React platform, deployed programmatic landing pages, and took us from page 4 to #1 for our most competitive sports betting clusters. Our organic acquisition is up 3.4x.',
  },
  {
    name: 'Elena Rostova',
    role: 'Chief Marketing Officer',
    company: 'Fortuna Entertainment Group',
    vertical: 'Multi-Brand Casino & Skill Gaming Operator',
    initials: 'ER',
    avatarColor: 'from-purple-500 via-indigo-500 to-cyan-500',
    metric: 'Zero Ad Bans in 14 Months',
    verifiedResult: '4.8x Blended ROAS on Meta & Google Ads',
    quote:
      'Before working with iGaming Growth, we were losing ad accounts every 3 weeks due to automated policy flags. Their compliance-first whitelisting framework and server-side CAPI pipelines allowed us to scale to ₹45L+ monthly ad spend with 4.8x blended ROAS and zero merchant strikes. Truly exceptional engineering.',
  },
  {
    name: 'Marcus Vance',
    role: 'Head of Organic Engineering',
    company: 'Velocity Gaming UK & Asia',
    vertical: 'Sports Prediction & Exchange Platform',
    initials: 'MV',
    avatarColor: 'from-purple-500 to-indigo-600',
    metric: 'Sub-450ms Edge LCP Worldwide',
    verifiedResult: '100% Mobile Lighthouse & Zero Google Speed Penalties',
    quote:
      'Their technical audits are unlike any traditional SEO agency. They did not hand us a generic 80-page PDF; they submitted direct GitHub Pull Requests that fixed our crawl budget leaks, eliminated render-blocking scripts, and doubled our indexing velocity within two weeks.',
  },
  {
    name: 'Rohan Singhania',
    role: 'Co-Founder & CTO',
    company: 'RealSkill Sports India',
    vertical: 'Real-Money Skill Gaming (Yono/Rummy)',
    initials: 'RS',
    avatarColor: 'from-amber-500 to-orange-600',
    metric: '+41.8% Reg-to-FTD Rate',
    verifiedResult: 'Telegram & WhatsApp Retention Engine Automated',
    quote:
      'Their retention funnel automation via WhatsApp webhooks recovered over 38% of our abandoned deposits during peak cricket tournament hours. The direct revenue uplift covered the entire annual engineering retainer within our first 45 days of deployment.',
  },
];

export const HomeTestimonials: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-model3-base overflow-hidden border-b border-white/10">
      {/* Background glow effects */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[400px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-[500px] h-[400px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/15 text-xs font-bold uppercase tracking-widest text-slate-300 mb-4 shadow-inner">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Verified Operator Testimonials</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight mb-4">
            Trusted by Enterprise Operators <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
              Across Regulated Markets
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Hear directly from Founders, CMOs, and Heads of Growth who replaced generic agency retainers with our engineering-first performance framework.
          </p>
        </div>

        {/* 2x2 Grid of In-Depth Operator Testimonial Spotlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="relative p-7 sm:p-9 rounded-3xl bg-model3-surface/80 border border-white/10 hover:border-amber-400/40 hover:shadow-2xl hover:shadow-amber-950/20 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Avatar, Name, Verified Metric Badge */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-4">
                    {t.avatar ? (
                      <img
                        src={t.avatar}
                        alt={`${t.name} — ${t.role} at ${t.company}`}
                        width={64}
                        height={64}
                        loading="lazy"
                        decoding="async"
                        className="w-16 h-16 rounded-2xl object-cover border-2 border-amber-400/40 shadow-lg shadow-black/60 shrink-0"
                      />
                    ) : (
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${t.avatarColor} text-white font-black text-lg flex items-center justify-center border-2 border-white/20 shadow-lg shrink-0`}>
                        {t.initials}
                      </div>
                    )}
                    <div>
                      <h3 className="text-lg font-bold text-white font-heading group-hover:text-amber-300 transition-colors">
                        {t.name}
                      </h3>
                      <div className="text-xs text-slate-300 font-medium">
                        {t.role}
                      </div>
                      <div className="text-[11px] text-amber-400/90 font-mono mt-0.5 flex items-center gap-1">
                        <Building2 className="w-3 h-3 text-amber-400" />
                        <span>{t.company}</span>
                      </div>
                    </div>
                  </div>

                  {/* 5-star rating + Verified badge */}
                  <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full flex items-center gap-1 font-semibold">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Verified Client</span>
                    </span>
                  </div>
                </div>

                {/* Key Verifiable Outcome Banner */}
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 mb-5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="text-xs font-bold text-amber-300 font-mono">
                      {t.metric}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 hidden sm:inline">
                    {t.verifiedResult}
                  </span>
                </div>

                {/* Actual Quote */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic relative pl-5 border-l-2 border-amber-400/40">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Vertical Platform Tag */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Vertical: <strong className="text-slate-200 font-normal">{t.vertical}</strong></span>
                <span className="text-amber-400/80">Active Retainer</span>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Performance Stats Bar */}
        <div className="mt-14 p-6 rounded-3xl bg-white/[0.02] border border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-extrabold text-white font-heading">98.2%</div>
            <div className="text-xs text-slate-400 mt-1">Client Retention Rate</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-amber-400 font-heading">50+</div>
            <div className="text-xs text-slate-400 mt-1">Regulated Platforms Scaled</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-emerald-400 font-heading">0 Bans</div>
            <div className="text-xs text-slate-400 mt-1">On Whitelisted Paid Accounts</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-cyan-400 font-heading">&lt;650ms</div>
            <div className="text-xs text-slate-400 mt-1">Average Edge LCP</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeTestimonials;
