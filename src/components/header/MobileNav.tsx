import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { NavLink, Link } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  PhoneCall,
  Zap,
  TrendingUp,
  Shield,
  BookOpen,
  Building2,
  ExternalLink,
} from 'lucide-react';
import { getAllServices } from '../../data/servicesData';
import { getAllIndustries } from '../../data/industriesData';
import { Button } from '../ui/Button';
import { trackEvent } from '../../analytics';

export interface MobileNavProps {
  isDark?: boolean;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isDark = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const services = getAllServices();
  const industries = getAllIndustries();

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOpenSection(null);
  };

  return (
    <div className="lg:hidden flex items-center gap-2">
      {/* Quick compact audit button for mobile header */}
      <Link
        to="/free-seo-audit"
        className="xs:inline-flex hidden items-center gap-1 px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-bold text-xs shadow-sm shadow-amber-500/20 active:scale-95 transition-transform"
        onClick={() => trackEvent('cta_click', { cta_name: 'mobile_header_audit', cta_location: 'header_mobile' })}
      >
        <Zap className="w-3 h-3 fill-slate-950" />
        <span>Audit</span>
      </Link>

      {/* Hamburger button with accessible touch target */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`p-2.5 rounded-xl active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 ${
          isDark
            ? 'text-white hover:bg-white/10 hover:text-amber-400'
            : 'text-slate-800 hover:bg-slate-100 hover:text-purple-700'
        }`}
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X className={`w-6 h-6 ${isDark ? 'text-white' : 'text-slate-900'}`} />
        ) : (
          <Menu className={`w-6 h-6 ${isDark ? 'text-white' : 'text-slate-900'}`} />
        )}
      </button>

      {/* Backdrop overlay & Drawer Portal */}
      {isOpen && typeof document !== 'undefined' && createPortal(
        <div className="fixed inset-0 z-[9999]">
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity duration-300 animate-fade-in"
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* Drawer panel */}
          <aside
            aria-label="Mobile Navigation Menu"
            className="fixed top-0 right-0 w-full sm:w-[380px] max-w-full h-full bg-[#050505] border-l border-white/10 text-white z-10 shadow-2xl flex flex-col justify-between overflow-y-auto animate-slide-in-right"
          >
        {/* Drawer Header */}
        <div>
          <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-[#050505]/95 sticky top-0 z-10 backdrop-blur-md">
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-xl bg-[#080808] border border-white/15 flex items-center justify-center p-0.5 shadow-sm">
                <img
                  src="/logo-icon.webp"
                  alt="iGaming Growth Logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-black text-base tracking-tight leading-none text-white">
                  iGAMING <span className="text-amber-400">GROWTH</span>
                </span>
                <span className="text-[9px] uppercase font-bold tracking-widest text-slate-400 mt-0.5">
                  ENGINEERING B2B AGENCY
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={closeMenu}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 active:scale-95 transition-all"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Action Buttons */}
          <div className="p-4 bg-amber-500/10 border-b border-amber-500/20 space-y-2">
            <Button
              to="/free-seo-audit"
              variant="gold"
              size="sm"
              className="w-full justify-center text-xs font-black shadow-sm"
              icon={<Zap className="w-3.5 h-3.5 fill-slate-950" />}
              onClick={closeMenu}
            >
              Request Free Technical Audit
            </Button>

            <div className="grid grid-cols-2 gap-2">
              <a
                href="https://wa.me/917654928455"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs shadow-sm transition-transform active:scale-95"
              >
                <span>WhatsApp</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <Link
                to="/book-call"
                onClick={closeMenu}
                className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs border border-white/10 shadow-sm transition-transform active:scale-95"
              >
                <PhoneCall className="w-3 h-3 text-amber-400" />
                <span>Book Call</span>
              </Link>
            </div>
          </div>

          {/* Navigation Links Accordion */}
          <nav className="p-3 sm:p-4 space-y-2">

            <div className="border border-white/10 rounded-2xl overflow-hidden mb-2 bg-[#0B0B12]">
              <button
                type="button"
                onClick={() => toggleSection('services')}
                className="w-full flex items-center justify-between p-3.5 text-sm font-bold text-white hover:bg-white/5 transition-colors"
                aria-expanded={openSection === 'services'}
              >
                <div className="flex items-center gap-2.5">
                  <TrendingUp className="w-4 h-4 text-amber-400" />
                  <span>Growth Services</span>
                  <span className="text-[10px] font-extrabold bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-full">
                    12
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                    openSection === 'services' ? 'rotate-180 text-amber-400' : ''
                  }`}
                />
              </button>

              {openSection === 'services' && (
                <div className="px-3 pb-3 pt-1 space-y-1 bg-[#050505] border-t border-white/10">
                  <Link
                    to="/services"
                    onClick={closeMenu}
                    className="block p-2 rounded-xl text-xs font-bold text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition-colors"
                  >
                    → View All 12 Growth Services
                  </Link>
                  <div className="max-h-60 overflow-y-auto space-y-0.5 pt-1 pr-1">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/services/${s.slug}`}
                        onClick={closeMenu}
                        className="block px-2.5 py-2 rounded-lg text-xs font-medium text-slate-300 hover:text-amber-300 hover:bg-white/5 transition-colors"
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 2. Industries Accordion */}
            <div className="border border-white/10 rounded-2xl overflow-hidden mb-2 bg-[#0B0B12]">
              <button
                type="button"
                onClick={() => toggleSection('industries')}
                className="w-full flex items-center justify-between p-3.5 text-sm font-bold text-white hover:bg-white/5 transition-colors"
                aria-expanded={openSection === 'industries'}
              >
                <div className="flex items-center gap-2.5">
                  <Shield className="w-4 h-4 text-amber-400" />
                  <span>Target Verticals</span>
                  <span className="text-[10px] font-extrabold bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-full">
                    8
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                    openSection === 'industries' ? 'rotate-180 text-amber-400' : ''
                  }`}
                />
              </button>

              {openSection === 'industries' && (
                <div className="px-3 pb-3 pt-1 space-y-1 bg-[#050505] border-t border-white/10">
                  <Link
                    to="/industries"
                    onClick={closeMenu}
                    className="block p-2 rounded-xl text-xs font-bold text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition-colors"
                  >
                    → View All 8 Industry Verticals
                  </Link>
                  <div className="max-h-60 overflow-y-auto space-y-0.5 pt-1 pr-1">
                    {industries.map((ind) => (
                      <Link
                        key={ind.slug}
                        to={`/industries/${ind.slug}`}
                        onClick={closeMenu}
                        className="block px-2.5 py-2 rounded-lg text-xs font-medium text-slate-300 hover:text-amber-300 hover:bg-white/5 transition-colors"
                      >
                        {ind.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 3. Resources Link */}
            <NavLink
              to="/resources"
              onClick={closeMenu}
              className={({ isActive }) =>
                `flex items-center justify-between p-3.5 rounded-2xl text-sm font-bold transition-colors ${
                  isActive ? 'bg-amber-400/15 text-amber-300 border border-amber-400/30' : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`
              }
            >
              <div className="flex items-center gap-2.5">
                <BookOpen className="w-4 h-4 text-emerald-400" />
                <span>Engineering Knowledge Hub</span>
              </div>
              <span className="text-[10px] font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                10 Guides
              </span>
            </NavLink>

            {/* 4. About Link */}
            <NavLink
              to="/about"
              onClick={closeMenu}
              className={({ isActive }) =>
                `flex items-center justify-between p-3.5 rounded-2xl text-sm font-bold transition-colors ${
                  isActive ? 'bg-amber-400/15 text-amber-300 border border-amber-400/30' : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`
              }
            >
              <div className="flex items-center gap-2.5">
                <Building2 className="w-4 h-4 text-amber-400" />
                <span>About Our Agency</span>
              </div>
            </NavLink>

            {/* 5. Contact Link */}
            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={({ isActive }) =>
                `flex items-center justify-between p-3.5 rounded-2xl text-sm font-bold transition-colors ${
                  isActive ? 'bg-amber-400/15 text-amber-300 border border-amber-400/30' : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`
              }
            >
              <div className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-amber-400" />
                <span>Contact &amp; RFPs</span>
              </div>
            </NavLink>

            {/* 6. Editorial Standards */}
            <NavLink
              to="/editorial-policy"
              onClick={closeMenu}
              className={({ isActive }) =>
                `flex items-center justify-between p-3.5 rounded-2xl text-sm font-bold transition-colors ${
                  isActive ? 'bg-amber-400/15 text-amber-300 border border-amber-400/30' : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`
              }
            >
              <div className="flex items-center gap-2.5">
                <Shield className="w-4 h-4 text-slate-400" />
                <span>Editorial &amp; Compliance Standards</span>
              </div>
            </NavLink>
          </nav>
        </div>

        {/* Drawer Footer Information */}
        <div className="p-4 sm:p-5 border-t border-white/10 bg-[#080808] mt-auto">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
            Direct Commercial Line
          </div>
          <a
            href="tel:+917654928455"
            className="flex items-center gap-2 text-xs font-extrabold text-white hover:text-amber-400 mb-1"
          >
            <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
            <span>+91 76549 28455</span>
          </a>
          <p className="text-[10px] text-slate-400 leading-snug">
            Specialist SEO for online gaming, casino, financial trading, and regulated markets. Strict non-disclosure and 100% white-hat engineering.
          </p>
        </div>
      </aside>
    </div>,
    document.body
  )}
    </div>
  );
};

export default MobileNav;
