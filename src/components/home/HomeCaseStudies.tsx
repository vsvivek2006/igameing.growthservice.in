import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { trackEvent } from '../../analytics';

interface CaseStudyItem {
  id: string;
  tag: string;
  category: string;
  title: string;
  subtitle: string;
  challenge: string;
  solution: string;
  disciplines: string[];
  metrics: { label: string; value: string; change: string; color: string }[];
  timeline: string;
}

const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: 'sportsbook-seo-pwa',
    tag: 'SPORTSBOOK & CASINO',
    category: 'Search Architecture & Headless PWA',
    title: 'Tier-1 Sportsbook: 90.4K Organic Clicks & 3.2x Deposit Lift',
    subtitle: 'Overcoming massive competitor domain authority with programmatic entity graphs and edge-rendered Next.js.',
    challenge: 'Competitors held DR 70+ domains with millions in legacy backlink equity. Client suffered from slow WordPress load times (4.2s LCP) and high mobile bounce rates.',
    solution: 'Engineered custom headless TypeScript architecture on Cloudflare Workers with automated schema entities, sub-500ms mobile speeds, and direct WhatsApp 1-click registration.',
    disciplines: ['Technical SEO', 'Headless Web Dev', 'Conversion Rate Optimization'],
    metrics: [
      { label: 'Organic SERP Clicks', value: '90.4K', change: '+184.2%', color: 'text-purple-400' },
      { label: 'Mobile LCP Speed', value: '0.42s', change: '6x Faster', color: 'text-cyan-400' },
      { label: 'First-Time Deposits', value: '3.2x', change: '+220%', color: 'text-emerald-400' },
      { label: 'Search Snippet CTR', value: '46.4%', change: 'Top 3 SERP', color: 'text-amber-400' },
    ],
    timeline: '90-Day Execution Cycle',
  },
  {
    id: 'prediction-telegram-retention',
    tag: 'COLOR PREDICTION & TRADING',
    category: 'PWA Web Engineering & Retention CRM',
    title: 'Color Prediction Engine: 140K Active Players with Zero App Store Risk',
    subtitle: 'Bypassing app store censorship with an offline-capable PWA and automated Telegram reload webhooks.',
    challenge: 'Constant APK takedowns and high friction in traditional Android downloads resulted in 60% player drop-off before first deposit.',
    solution: 'Built a lightweight 180KB Progressive Web App (PWA) with 1-tap browser installation, paired with an automated Telegram bot CRM that triggers instant reload incentives.',
    disciplines: ['Web & App Engineering', 'Telegram CRM Automation', 'Funnel CRO'],
    metrics: [
      { label: 'Active Monthly Players', value: '140K', change: '+310%', color: 'text-cyan-400' },
      { label: 'App Install Friction', value: 'Zero', change: '1-Tap PWA', color: 'text-emerald-400' },
      { label: '30-Day Player Churn', value: '-54%', change: 'Telegram CRM', color: 'text-amber-400' },
      { label: 'Avg Player LTV', value: '+68%', change: 'VIP Reloads', color: 'text-purple-400' },
    ],
    timeline: '60-Day Sprint',
  },
  {
    id: 'financial-compliant-ads',
    tag: 'FINANCIAL TRADING & FOREX',
    category: 'Policy-Compliant Paid Acquisition',
    title: 'Forex Trading Platform: 4.8x ROAS with Zero Ad Account Bans',
    subtitle: 'Scaling Google Search & Meta advertising through policy-adherent educational bridge funnels.',
    challenge: 'Client lost 8 Google and Meta ad accounts in 6 months due to unauthorized financial claims by a previous generalist agency, halting acquisition.',
    solution: 'Secured whitelisted agency ad credit accounts, structured verified educational bridge landing pages, and implemented server-side Conversions API (CAPI) attribution.',
    disciplines: ['Google Ads', 'Meta Performance Ads', 'Server CAPI Analytics'],
    metrics: [
      { label: 'Blended Paid ROAS', value: '4.8x', change: 'Consistent', color: 'text-amber-400' },
      { label: 'Ad Account Bans', value: '0 Bans', change: '100% Whitelist', color: 'text-emerald-400' },
      { label: 'Cost Per Acquisition', value: '-42.6%', change: 'CAPI Feed', color: 'text-cyan-400' },
      { label: 'Monthly Ad Spend Scale', value: '₹45L+', change: 'Uncapped', color: 'text-purple-400' },
    ],
    timeline: '120-Day Scaling Phase',
  },
];

export const HomeCaseStudies: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<number>(0);
  const currentCase = CASE_STUDIES[selectedCase];

  return (
    <section id="casestudies" className="relative py-20 lg:py-28 bg-model3-base overflow-hidden border-b border-white/10">
      {/* Ambient Lighting */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/15 text-xs font-bold uppercase tracking-widest text-slate-300 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Proven Production Results</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight">
              Real-World Outcomes Across <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
                Regulated Digital Platforms
              </span>
            </h2>
          </div>

          <p className="text-slate-400 text-sm sm:text-base max-w-md">
            Inspect our verified case studies. Every metric is backed by Google Search Console, server access logs, and payment gateway attribution.
          </p>
        </div>

        {/* Case Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {CASE_STUDIES.map((c, idx) => {
            const isSelected = selectedCase === idx;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => {
                  setSelectedCase(idx);
                  trackEvent('home_case_study_select', { caseId: c.id });
                }}
                className={`p-5 rounded-2xl border text-left transition-all duration-200 ${
                  isSelected
                    ? 'bg-model3-surface border-amber-400/50 shadow-xl shadow-amber-950/20'
                    : 'bg-white/[0.02] border-white/10 hover:bg-white/[0.05] text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-400">
                    {c.tag}
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">
                    {c.timeline}
                  </span>
                </div>
                <div className={`text-sm font-bold font-heading line-clamp-2 ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                  {c.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Case Study Showcase Card */}
        <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-model3-surface/90 border border-white/15 backdrop-blur-xl shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Challenge & Engineered Solution */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-xs font-mono font-extrabold px-3 py-1 rounded bg-purple-500/15 border border-purple-500/30 text-purple-300">
                  {currentCase.category}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {currentCase.timeline}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mb-3">
                {currentCase.title}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-medium">
                {currentCase.subtitle}
              </p>

              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-400 block mb-1">
                    The Platform Barrier:
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {currentCase.challenge}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                    Engineered Solution:
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {currentCase.solution}
                  </p>
                </div>
              </div>

              {/* Disciplines used */}
              <div className="flex flex-wrap items-center gap-2 mb-8">
                <span className="text-xs text-slate-400 font-bold uppercase mr-1">Disciplines:</span>
                {currentCase.disciplines.map((d, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.05] text-slate-300 border border-white/10">
                    {d}
                  </span>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 transition-all shadow-md shadow-amber-400/20"
              >
                <span>Request Similar Deployment Architecture</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Right: 4 Metrics Bento Box */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {currentCase.metrics.map((m, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-model3-base/90 border border-white/10 shadow-lg">
                  <span className="text-xs text-slate-400 block mb-1">{m.label}</span>
                  <div className={`text-3xl font-black font-heading ${m.color} mb-1`}>
                    {m.value}
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1 font-semibold">
                    <CheckCircle2 className="w-3 h-3" /> {m.change}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeCaseStudies;
