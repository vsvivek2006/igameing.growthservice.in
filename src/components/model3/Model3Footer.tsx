import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  MessageSquare, 
  Mail, 
  ArrowRight, 
  ShieldCheck, 
  ExternalLink 
} from 'lucide-react';

export const Model3Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#040407] text-white border-t border-white/10 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Description (2 cols) */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <Link to="/" className="flex items-center gap-3 group mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 via-indigo-600 to-amber-500 p-[1px]">
                  <div className="w-full h-full bg-[#080808] rounded-[11px] flex items-center justify-center">
                    <Globe className="w-5 h-5 text-amber-400" />
                  </div>
                </div>
                <span className="text-xl font-black tracking-wider text-white font-heading">
                  iGAMING<span className="text-amber-400">GROWTH</span>
                </span>
              </Link>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm mb-6 font-normal">
                Enterprise digital marketing, technical SEO architecture, and custom sub-second landing pages engineered for high-competition digital markets.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Instant WhatsApp Desk</span>
              </a>
            </div>
          </div>

          {/* Col 1: Services */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-300 block mb-4">
              Services
            </span>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link to="/services/seo-strategy-consulting" className="hover:text-amber-400 transition-colors">
                  SEO Strategy &amp; Roadmap
                </Link>
              </li>
              <li>
                <Link to="/services/technical-seo-audits" className="hover:text-amber-400 transition-colors">
                  Technical SEO Audit
                </Link>
              </li>
              <li>
                <Link to="/services/casino-game-landing-pages" className="hover:text-amber-400 transition-colors">
                  Landing Page Engineering
                </Link>
              </li>
              <li>
                <Link to="/services/core-web-vitals-speed" className="hover:text-amber-400 transition-colors">
                  Core Web Vitals Speed SLA
                </Link>
              </li>
              <li>
                <Link to="/services/programmatic-seo-scale" className="hover:text-amber-400 transition-colors">
                  Programmatic SEO Systems
                </Link>
              </li>
              <li>
                <Link to="/services/google-search-console-analytics" className="hover:text-amber-400 transition-colors">
                  Search Console Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Industries */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-300 block mb-4">
              Industries
            </span>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link to="/industries/online-casino" className="hover:text-amber-400 transition-colors">
                  Online Casino &amp; Slots
                </Link>
              </li>
              <li>
                <Link to="/industries/sports-betting" className="hover:text-amber-400 transition-colors">
                  Sportsbook &amp; Cricket
                </Link>
              </li>
              <li>
                <Link to="/industries/crypto-gaming" className="hover:text-amber-400 transition-colors">
                  Crypto &amp; Web3 Gaming
                </Link>
              </li>
              <li>
                <Link to="/industries/trading-forex" className="hover:text-amber-400 transition-colors">
                  Fintech &amp; Forex Trading
                </Link>
              </li>
              <li>
                <Link to="/industries/color-prediction" className="hover:text-amber-400 transition-colors">
                  Color Prediction Games
                </Link>
              </li>
              <li>
                <Link to="/industries/rummy-card-games" className="hover:text-amber-400 transition-colors">
                  Rummy &amp; Card Platforms
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company & Trust */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-300 block mb-4">
              Company &amp; Legal
            </span>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link to="/about" className="hover:text-amber-400 transition-colors">
                  About Our Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-400 transition-colors">
                  Get a Proposal
                </Link>
              </li>
              <li>
                <Link to="/free-seo-audit" className="hover:text-amber-400 transition-colors">
                  Free 48h SEO Audit
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-amber-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-amber-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/editorial-policy" className="hover:text-amber-400 transition-colors">
                  Editorial &amp; E-E-A-T Policy
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} iGaming Growth B2B Agency. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span>Model 3 Operating System</span>
            <span>•</span>
            <span>Google Search Essentials Compliant</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
