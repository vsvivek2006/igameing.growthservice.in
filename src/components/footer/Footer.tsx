import React from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  Lock,
  ArrowRight,
  ExternalLink,
  MessageCircle,
  Mail,
  Zap,
  CheckCircle2,
  ChevronUp,
  Sparkles,
  Award,
} from 'lucide-react';
import { navigationConfig, FooterSection } from '../../config/navigation';
import { getBusinessName, getBusinessTagline } from '../../selectors';
import businessConfig from '../../config/business';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const businessName = getBusinessName();
  const tagline = getBusinessTagline();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer
      id="global-footer"
      className="relative bg-gradient-to-b from-[#090913] via-[#05050A] to-[#020205] text-white border-t border-purple-500/20 shadow-[0_-12px_36px_rgba(106,13,173,0.12)] pt-16 pb-24 sm:pb-12 overflow-hidden"
    >
      {/* Ambient background lighting effects */}
      <div
        className="pointer-events-none absolute -top-24 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Tier 1: Pre-Footer High-Impact Conversion & Dispatch Strip */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-purple-950/40 via-surface-card to-amber-950/20 p-6 sm:p-8 lg:p-10 shadow-2xl">
          <div
            className="pointer-events-none absolute -right-20 -bottom-20 w-72 h-72 bg-amber-400/10 rounded-full blur-2xl"
            aria-hidden="true"
          />
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-8">
            <div className="max-w-2xl space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/50 border border-purple-400/30 text-purple-300 text-xs font-semibold tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Enterprise Growth Engineering</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-black tracking-tight text-white">
                Scale Your Platform with{' '}
                <span className="text-gradient-gold">Engineered Search Dominance</span>
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Technical SEO, high-performance PWA web architecture, and compliance-safe acquisition
                built specifically for gaming, casino, and high-competition digital brands.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full lg:w-auto">
              <Link
                to="/free-seo-audit"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-black font-heading font-bold text-xs uppercase tracking-wider hover:from-amber-400 hover:to-amber-300 shadow-lg shadow-amber-500/20 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Request Free Audit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/book-call"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-heading font-semibold text-xs tracking-wider border border-white/15 transition-all duration-200"
              >
                <span>Book Strategy Call</span>
              </Link>
              <a
                href={`https://wa.me/${businessConfig.phone?.whatsapp || '917654928455'}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/60 text-emerald-300 font-heading font-semibold text-xs border border-emerald-500/30 transition-all duration-200 group"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>Direct WhatsApp Hotline</span>
              </a>
            </div>
          </div>
        </div>

        {/* Tier 2: Operator Trust & Architecture Markers Ribbon */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 py-2">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <Shield className="w-5 h-5 text-purple-400 flex-shrink-0" />
            <div>
              <p className="text-xs font-semibold text-white">Regulated Market Specialists</p>
              <p className="text-[11px] text-slate-400">Policy-safe &amp; zero-cloaking</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <Zap className="w-5 h-5 text-amber-400 flex-shrink-0" />
            <div>
              <p className="text-xs font-semibold text-white">Sub-650ms Core Web Vitals</p>
              <p className="text-[11px] text-slate-400">Headless edge performance</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <Lock className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            <div>
              <p className="text-xs font-semibold text-white">100% Client IP Ownership</p>
              <p className="text-[11px] text-slate-400">Direct GitHub PRs, zero lock-in</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
            <div>
              <p className="text-xs font-semibold text-white">White-Hat Search Equity</p>
              <p className="text-[11px] text-slate-400">Sustainable rank authority</p>
            </div>
          </div>
        </div>

        {/* Tier 3: Main Navigation & Brand Core Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-4">
          {/* Col 1: Brand & Agency Identity (Span 4) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-purple-600 via-indigo-600 to-amber-500 p-[1.5px] shadow-lg shadow-purple-600/25 group-hover:shadow-purple-500/50 transition-all duration-300 flex-shrink-0">
                <div className="w-full h-full bg-[#08080C] rounded-[10px] flex items-center justify-center p-1">
                  <img
                    src="/logo-icon.webp"
                    alt="iGaming Growth Logo Icon"
                    width={36}
                    height={36}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div>
                <span className="font-heading font-black text-xl tracking-wider text-white">
                  iGAMING<span className="text-amber-400">GROWTH</span>
                </span>
                <span className="block text-[10px] text-slate-400 tracking-wider uppercase font-semibold">
                  Engineering &amp; Growth Studio
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-300 leading-relaxed pr-2">
              {tagline}. Full-funnel technical search engineering, custom web applications, and
              targeted acquisition campaigns engineered for competitive gaming and regulated digital
              platforms.
            </p>

            {/* Operational Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-[11px] font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Systems Operational &bull; Client Sprints Active</span>
            </div>

            {/* Verified Inquiries & Headquarters Card */}
            <div className="rounded-xl border border-white/10 bg-surface-card/70 p-4 space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">
                    Global Studio Headquarters
                  </p>
                  <p className="text-xs text-slate-200 font-semibold mt-0.5">
                    {businessConfig.address?.city}, {businessConfig.address?.country}
                  </p>
                </div>
                <div className="text-[11px] font-semibold text-slate-400">
                  Worldwide Delivery
                </div>
              </div>

              <div className="pt-2 border-t border-white/5 space-y-2 text-xs">
                <a
                  href={`mailto:${businessConfig.emails.primary}`}
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors group"
                >
                  <Mail className="w-3.5 h-3.5 text-purple-400 group-hover:text-amber-400 transition-colors" />
                  <span className="truncate">{businessConfig.emails.primary}</span>
                </a>
                <a
                  href={`https://wa.me/${businessConfig.phone?.whatsapp || '917654928455'}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors group"
                >
                  <MessageCircle className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                  <span>WhatsApp: {businessConfig.phone?.primary || '+91 76549 28455'}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Cols 2-5: Dynamic Navigation Sections (Span 8) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8">
            {navigationConfig.footer.map((section: FooterSection) => (
              <div key={section.title} className="space-y-3">
                <div className="flex items-center gap-2 border-b border-white/10 pb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-200">
                    {section.title}
                  </h4>
                </div>
                <ul className="space-y-2 text-xs">
                  {section.links.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="group inline-flex items-center text-slate-400 hover:text-amber-400 transition-all duration-200"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-200">
                          {link.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Tier 4: Regulatory & Compliance Governance Notice */}
        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 sm:p-5 text-xs text-slate-400 leading-relaxed flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="p-2 rounded-lg bg-purple-950/50 border border-purple-500/20 text-purple-400 flex-shrink-0">
            <Award className="w-5 h-5 text-amber-400" />
          </div>
          <p className="text-[11px] sm:text-xs">
            <strong className="text-slate-300 font-semibold">Agency Regulatory Notice:</strong>{' '}
            {businessName} is a specialist B2B growth engineering and digital marketing consultancy
            serving enterprise operators in the iGaming, casino, and competitive online gaming sectors.
            We provide search engineering, technical development, and compliance-safe digital marketing solutions.
            We do not operate gambling platforms, handle wagers, or provide financial or legal advice.
            All advisory complies with applicable regional advertising and platform policies.
          </p>
        </div>

        {/* Tier 5: Bottom Sub-Footer Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-center md:text-left">
            <span>
              &copy; {currentYear} {businessName} &bull; {businessConfig.address?.city},{' '}
              {businessConfig.address?.country}.
            </span>
            <span>
              All rights reserved. Dedicated digital engineering for high-competition industries.
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs">
            <Link to="/editorial-policy" className="hover:text-amber-400 transition-colors">
              Editorial Policy
            </Link>
            <Link to="/privacy" className="hover:text-amber-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-amber-400 transition-colors">
              Terms of Service
            </Link>
            <Link to="/resources" className="hover:text-amber-400 transition-colors">
              Knowledge Base
            </Link>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer text-xs"
              title="Return to top of page"
              aria-label="Scroll back to top"
            >
              <span>Top</span>
              <ChevronUp className="w-3.5 h-3.5 text-amber-400" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;