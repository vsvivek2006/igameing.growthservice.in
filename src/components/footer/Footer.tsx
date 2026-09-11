import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, ArrowRight } from 'lucide-react';
import { navigationConfig, FooterSection } from '../../config/navigation';
import { getBusinessName, getBusinessTagline } from '../../selectors';
import businessConfig from '../../config/business';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const businessName = getBusinessName();
  const tagline = getBusinessTagline();

  return (
    <footer className="relative bg-[#040407] text-white border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand & Agency Mission */}
          <div className="lg:col-span-1 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 via-indigo-600 to-amber-500 p-[1px] shadow-lg shadow-purple-600/20 group-hover:shadow-purple-500/40 transition-all duration-300 flex-shrink-0">
                <div className="w-full h-full bg-[#080808] rounded-[11px] flex items-center justify-center p-1">
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
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed">
              {tagline}. Specialized SEO, technical web architecture, and performance marketing engineered for gaming, casino, and high-competition digital platforms.
            </p>

            <div className="pt-2 space-y-2">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Shield className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <span>Regulated Market Specialists</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Lock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Compliance-Safe Strategies</span>
              </div>
            </div>

            {/* Direct Verified Inquiries & HQ */}
            <div className="pt-2 border-t border-white/10 space-y-2">
              <div>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Headquarters &amp; Parent Group</p>
                <p className="text-xs text-slate-200 font-medium">Kathmandu, Nepal</p>
                <a
                  href="https://growthservice.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-amber-400 hover:text-amber-300 inline-flex items-center gap-1 mt-0.5 font-semibold"
                >
                  <span>growthservice.in</span>
                  <ArrowRight className="w-2.5 h-2.5" />
                </a>
              </div>
              <div>
                <a
                  href={`mailto:${businessConfig.emails.primary}`}
                  className="inline-flex items-center gap-1 text-xs text-slate-300 hover:text-white transition-colors font-semibold"
                >
                  {businessConfig.emails.primary}
                  <ArrowRight className="w-3 h-3 text-amber-400" />
                </a>
              </div>
              <div>
                <a
                  href="https://wa.me/917654928455"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 transition-colors font-semibold"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>WhatsApp: Direct Operator Inquiry</span>
                </a>
              </div>
            </div>
          </div>

          {/* Cols 2-5: Dynamic Navigation Sections */}
          {navigationConfig.footer.map((section: FooterSection) => (
            <div key={section.title} className="space-y-3">
              <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-slate-200">
                {section.title}
              </h4>
              <ul className="space-y-2 text-xs">
                {section.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-slate-400 hover:text-amber-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Agency Disclaimer */}
        <div className="mt-12 pt-8 border-t border-white/10 text-[11px] text-slate-500 leading-relaxed">
          <p>
            <strong className="text-slate-400">Agency Disclaimer:</strong> {businessName} is a B2B digital marketing agency serving businesses in the iGaming and casino industries. We provide growth services including SEO, performance marketing, web development, and content strategy. We do not operate gambling services, process wagers, or provide regulated financial or legal advice. Client results vary based on market conditions, budget, and competitive landscape.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {currentYear} {businessName} &bull; Kathmandu, Nepal. An enterprise brand of{' '}
            <a href="https://growthservice.in" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-400 underline underline-offset-2 transition-colors">
              GrowthService
            </a>
            . All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/editorial-policy" className="hover:text-amber-400 transition-colors">
              Editorial Policy
            </Link>
            <Link to="/privacy" className="hover:text-amber-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-amber-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;