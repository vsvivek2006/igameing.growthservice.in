import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Code2, 
  Zap, 
  BarChart3, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { trackEvent } from '../../analytics';

interface CapabilityPillar {
  id: string;
  categoryNumber: string;
  name: string;
  tagline: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  borderHover: string;
  glowColor: string;
  badge: string;
  servicesIncluded: { title: string; slug: string }[];
  operatorBenefits: string[];
  proofPreview: {
    title: string;
    subtitle: string;
    image: string;
    imageAlt: string;
    verifiedBadge: string;
    stats: { label: string; value: string; color: string }[];
  };
}

const CAPABILITIES: CapabilityPillar[] = [
  {
    id: 'seo',
    categoryNumber: '01',
    name: 'Google Rank #1 for Betting & Casino Keywords',
    tagline: 'Get thousands of real players from Google search every day with zero ad spend.',
    description: 'We rank your gaming platform on Page 1 of Google for high-intent search terms like "lotus365 id", "online cricket id", "live casino login", and "fast withdrawal rummy". Players actively searching to deposit find your site first.',
    icon: Search,
    accentColor: 'text-purple-400',
    borderHover: 'hover:border-purple-500/50',
    glowColor: 'shadow-purple-950/40',
    badge: 'Rank #1 on Google',
    servicesIncluded: [
      { title: 'Technical SEO Audit', slug: 'technical-seo' },
      { title: 'Programmatic SEO Engine', slug: 'programmatic-seo' },
      { title: 'On-Page SEO Optimization', slug: 'on-page-seo' },
      { title: 'High-Authority Backlinks', slug: 'off-page-seo' },
    ],
    operatorBenefits: [
      'Top Google rankings for high-intent betting & casino keywords',
      '100% algorithm-safe organic strategy with zero domain bans',
      'Continuous daily stream of real players ready to deposit',
      'Direct Google Search Console access to track your rankings 24x7',
    ],
    proofPreview: {
      title: 'Real Google Search Console Proof',
      subtitle: 'yononewgamess.com · 15.9 Million Clicks on Google',
      image: '/images/proof/yono-15m-gsc-clean.webp',
      imageAlt: 'Google Search Console 15.9M Clicks Verified Proof - yononewgamess.com',
      verifiedBadge: '15.9M Clicks Verified',
      stats: [
        { label: 'Player Clicks', value: '15.9M', color: 'text-purple-400' },
        { label: 'Click Rate', value: '52.2%', color: 'text-amber-400' },
        { label: 'Avg Position', value: '#2.1', color: 'text-emerald-400' },
      ],
    },
  },
  {
    id: 'web-dev',
    categoryNumber: '02',
    name: 'Turnkey Gaming Websites (Lotus365, Casino & Cricket ID)',
    tagline: 'Ultra-fast mobile platforms engineered to never lag or crash during live IPL matches.',
    description: 'We develop custom betting platforms, online casinos, and cricket ID websites that load in under 0.4 seconds on mobile phones. Players can save your site to their phone home screen with 1 tap, completely bypassing app store bans.',
    icon: Code2,
    accentColor: 'text-cyan-400',
    borderHover: 'hover:border-cyan-500/50',
    glowColor: 'shadow-cyan-950/40',
    badge: 'Platform Builds',
    servicesIncluded: [
      { title: 'Turnkey Website Development', slug: 'website-development' },
      { title: 'App-Like Mobile Platform (PWA)', slug: 'website-development' },
      { title: 'Speed & Anti-Lag Optimization', slug: 'website-development' },
      { title: 'UPI & Payment Gateway Routing', slug: 'website-development' },
    ],
    operatorBenefits: [
      'Instant 0.4s load on 4G/5G mobile phones (zero lost players)',
      '1-Tap "Add to Phone Screen" app icon (zero App Store bans)',
      'Live cricket match odds, active casino tables & instant deposit buttons',
      '100% full source code ownership & super-admin control panel',
    ],
    proofPreview: {
      title: 'Betting Exchange Search Domination',
      subtitle: 'iv-7.com · 22.0K Organic Clicks & Rank 4.7',
      image: '/images/proof/iv7-22k-gsc-clean.webp',
      imageAlt: 'Real GSC performance proof for iv-7 betting exchange and casino',
      verifiedBadge: '22K Clicks Verified',
      stats: [
        { label: 'Organic Clicks', value: '22.0K', color: 'text-cyan-400' },
        { label: 'Impressions', value: '56.1K', color: 'text-emerald-400' },
        { label: 'Avg Rank', value: '#4.7', color: 'text-amber-400' },
      ],
    },
  },
  {
    id: 'paid-acquisition',
    categoryNumber: '03',
    name: 'Whitelisted Google & Meta Ads (Zero Account Bans)',
    tagline: 'Scale profitable player acquisition on Google Search & Facebook without suspensions.',
    description: 'Stop wasting money buying fake ad accounts that get banned after 2 days. We run whitelisted agency ad accounts with compliant educational bridge pages that protect your brand and bring serious depositors every day.',
    icon: Zap,
    accentColor: 'text-amber-400',
    borderHover: 'hover:border-amber-500/50',
    glowColor: 'shadow-amber-950/40',
    badge: 'Whitelisted Ads',
    servicesIncluded: [
      { title: 'Google Ads Acquisition', slug: 'google-ads' },
      { title: 'Meta Ads & Social Acquisition', slug: 'meta-ads' },
      { title: 'Compliant Bridge Landing Pages', slug: 'google-ads' },
      { title: 'Direct Media Buying & Ad Networks', slug: 'meta-ads' },
    ],
    operatorBenefits: [
      'Whitelisted agency ad accounts with zero-ban guarantee',
      'Compliant educational bridge funnels that pass Google & Meta reviews',
      'Target high-spending players actively searching for IDs',
      '4.8x average return on ad spend (ROAS) with full spend transparency',
    ],
    proofPreview: {
      title: 'High-Volume 24-Hour Player Inflow',
      subtitle: 'yononewgamess.com · 90.4K Clicks in Single 24-Hour Period',
      image: '/images/proof/yono-daily-gsc-clean.webp',
      imageAlt: 'Real GSC 24h performance telemetry proof showing 90.4K clicks',
      verifiedBadge: '90.4K Daily Clicks',
      stats: [
        { label: '24h Clicks', value: '90.4K', color: 'text-amber-400' },
        { label: 'Impressions', value: '195K', color: 'text-emerald-400' },
        { label: 'Avg Rank', value: '#1.9', color: 'text-cyan-400' },
      ],
    },
  },
  {
    id: 'cro',
    categoryNumber: '04',
    name: '1-Click WhatsApp ID Bot & 24x7 Player Retention',
    tagline: 'Turn website visitors into funded player accounts with automated WhatsApp & UPI funnels.',
    description: 'Website visitors mean nothing if they do not deposit. We connect your platform directly to WhatsApp cashier bots that generate IDs, accept UPI payments, and send automatic bonus reminders to bring players back for matches.',
    icon: BarChart3,
    accentColor: 'text-emerald-400',
    borderHover: 'hover:border-emerald-500/50',
    glowColor: 'shadow-emerald-950/40',
    badge: 'WhatsApp Funnels',
    servicesIncluded: [
      { title: 'Conversion Rate Optimization', slug: 'conversion-optimization' },
      { title: 'Player Analytics & Attribution', slug: 'analytics' },
      { title: 'Automated WhatsApp & Telegram Bots', slug: 'conversion-optimization' },
      { title: 'UPI Deposit & Withdrawal Routing', slug: 'conversion-optimization' },
    ],
    operatorBenefits: [
      '1-Click WhatsApp chat button with pre-filled ID inquiry text',
      'Instant automated ID generation & login credentials within 60 seconds',
      'Automated UPI & QR code deposit routing and screenshot verification',
      'Automated match reminders & reload bonuses to re-engage past players',
    ],
    proofPreview: {
      title: 'Real Cricket & Casino Platform Proof',
      subtitle: 'is7gam.com · 52.6% CTR & Rank 2.9 on Google',
      image: '/images/proof/is7gam-rank-gsc-clean.webp',
      imageAlt: 'Daily Live Player Clicks Proof - is7gam.com',
      verifiedBadge: '52.6% CTR Verified',
      stats: [
        { label: 'Click Rate', value: '52.6%', color: 'text-cyan-400' },
        { label: 'Avg Position', value: '#2.9', color: 'text-emerald-400' },
        { label: 'ID Creation', value: '<60s', color: 'text-amber-400' },
      ],
    },
  },
];

export const HomeCapabilityEcosystem: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const activeCapability = CAPABILITIES[activeTab];

  return (
    <section className="relative py-20 lg:py-28 bg-model3-base overflow-hidden border-b border-white/10">
      {/* Glow atmospheric accents */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/15 text-xs font-bold uppercase tracking-widest text-slate-300 mb-4">
            <Layers className="w-3.5 h-3.5 text-amber-400" />
            <span>Complete Gaming Growth System</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight mb-5">
            Everything You Need To <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
              Launch, Rank &amp; Scale Your Platform
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg font-medium leading-relaxed">
            No technical headaches or complicated code. We handle the Google ranking, mobile website development, whitelisted ads, and WhatsApp player funnels so you can focus on running your business.
          </p>
        </div>

        {/* Capability Nav Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {CAPABILITIES.map((cap, idx) => {
            const Icon = cap.icon;
            const isSelected = activeTab === idx;
            return (
              <button
                key={cap.id}
                type="button"
                onClick={() => {
                  setActiveTab(idx);
                  trackEvent('home_ecosystem_tab_click', { pillar: cap.id });
                }}
                className={`flex items-start gap-2.5 sm:gap-3 p-3 sm:p-4 rounded-2xl border text-left transition-all duration-200 ${
                  isSelected
                    ? 'bg-model3-surface border-amber-400/50 shadow-xl shadow-amber-950/20'
                    : 'bg-white/[0.02] border-white/10 hover:bg-white/[0.05] text-slate-400'
                }`}
              >
                <div className={`p-1.5 sm:p-2 rounded-xl bg-white/[0.05] border border-white/10 ${isSelected ? cap.accentColor : 'text-slate-400'}`}>
                  <Icon className="w-4 sm:w-5 h-4 sm:h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 mb-0.5">
                    Pillar {cap.categoryNumber}
                  </div>
                  <div className={`text-xs sm:text-sm font-bold font-heading ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                    {cap.badge}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Capability Deep-Dive Card */}
        <div className="p-4 sm:p-8 lg:p-10 rounded-3xl bg-model3-surface/90 border border-white/15 backdrop-blur-xl shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Capability Details & Operator Deliverables */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono font-extrabold px-2.5 py-1 rounded-md bg-amber-400/10 border border-amber-400/30 text-amber-300">
                  PILLAR {activeCapability.categoryNumber}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {activeCapability.badge}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mb-3">
                {activeCapability.name}
              </h3>

              <p className="text-slate-300 text-base leading-relaxed mb-6">
                {activeCapability.description}
              </p>

              {/* Operator Deliverables Checklist */}
              <div className="mb-6">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  What You Receive As An Operator:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeCapability.operatorBenefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Operational Guarantees */}
              <div className="mb-8 p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>Operator Guarantees:</span>
                </div>
                <div className="flex flex-wrap gap-2 text-xs text-slate-300">
                  <span className="px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/10">
                    100% Full Admin &amp; Code Ownership
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/10">
                    Dedicated WhatsApp Support Group
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/10">
                    Real Google Search Console Telemetry
                  </span>
                </div>
              </div>

              {/* Services Links */}
              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
                <Link
                  to={`/services/${activeCapability.servicesIncluded[0].slug}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 transition-all shadow-md shadow-amber-400/20"
                >
                  <span>Explore {activeCapability.badge}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 transition-colors"
                >
                  <span>View Package Pricing</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Right: Real Verified Proof Screenshot & Live Operator Stats */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-model3-base/95 border border-white/15 overflow-hidden shadow-2xl">
                {/* Proof Card Header: Simulated Browser Chrome */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    <span className="ml-1 text-[11px] font-mono text-slate-300 font-bold hidden sm:inline">
                      Google Search Console
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-400/10 border border-amber-400/30 text-amber-300 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {activeCapability.proofPreview.verifiedBadge}
                  </span>
                </div>

                {/* Real Proof Image from public folder */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black/60 group">
                  <img
                    src={activeCapability.proofPreview.image}
                    alt={activeCapability.proofPreview.imageAlt}
                    width={800}
                    height={500}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 text-xs text-white font-medium drop-shadow-md">
                    {activeCapability.proofPreview.subtitle}
                  </div>
                </div>

                {/* Key Operator Metrics Strip */}
                <div className="p-4 bg-white/[0.02] border-t border-white/10 grid grid-cols-3 gap-2">
                  {activeCapability.proofPreview.stats.map((stat, i) => (
                    <div key={i} className="text-center p-2 rounded-xl bg-white/[0.03] border border-white/5">
                      <div className="text-[10px] text-slate-400 font-medium truncate">{stat.label}</div>
                      <div className={`text-base font-extrabold font-heading ${stat.color}`}>{stat.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeCapabilityEcosystem;
