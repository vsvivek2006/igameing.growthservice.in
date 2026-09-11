import React, { useState, useEffect } from 'react';
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

export const MobileNav: React.FC = () => {
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
        className="p-2.5 rounded-xl text-slate-800 hover:bg-slate-100 hover:text-purple-700 active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600"
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-900" />}
      </button>

      {/* Backdrop overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 transition-opacity duration-300"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Drawer panel */}
      <aside
        aria-label="Mobile Navigation Menu"
        className={`fixed top-0 right-0 w-full sm:w-[380px] max-w-full h-full bg-white z-50 shadow-2xl flex flex-col justify-between overflow-y-auto transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div>
          <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/70 sticky top-0 z-10 backdrop-blur-md">
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-xl bg-slate-950 border border-purple-500/40 flex items-center justify-center p-0.5 shadow-sm">
                <img
                  src="/logo-icon.webp"
                  alt="iGaming Growth Logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-black text-base tracking-tight leading-none text-slate-900">
                  iGAMING <span className="text-purple-600">GROWTH</span>
                </span>
                <span className="text-[9px] uppercase font-bold tracking-widest text-slate-500 mt-0.5">
                  ENGINEERING B2B AGENCY
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={closeMenu}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 active:scale-95 transition-all"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Action Buttons */}
          <div className="p-4 bg-purple-50/50 border-b border-purple-100/60 space-y-2">
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
                href="https://wa.me/919341436937"
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
                className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-navy-950 hover:bg-navy-900 text-white font-bold text-xs shadow-sm transition-transform active:scale-95"
              >
                <PhoneCall className="w-3 h-3 text-amber-400" />
                <span>Book Call</span>
              </Link>
            </div>
          </div>

          {/* Navigation Links Accordion */}
          <nav className="p-3 sm:p-4 space-y-2">
            {/* 0. Model 3 Flagship Link */}
            <NavLink
              to="/model-3"
              onClick={closeMenu}
              className={({ isActive }) =>
                `flex items-center justify-between p-3.5 rounded-2xl text-sm font-black transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 shadow-md'
                    : 'bg-amber-50 text-amber-900 border border-amber-300 hover:bg-amber-100'
                }`
              }
            >
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                <span>Model 3 Showcase</span>
              </div>
              <span className="text-[10px] font-extrabold bg-amber-400 text-slate-950 px-2 py-0.5 rounded-full">
                Live 3D
              </span>
            </NavLink>

            {/* 1. Services Accordion */}
            <div className="border border-slate-100 rounded-2xl overflow-hidden mb-2 bg-slate-50/40">
              <button
                type="button"
                onClick={() => toggleSection('services')}
                className="w-full flex items-center justify-between p-3.5 text-sm font-bold text-slate-900 hover:bg-slate-100/60 transition-colors"
                aria-expanded={openSection === 'services'}
              >
                <div className="flex items-center gap-2.5">
                  <TrendingUp className="w-4 h-4 text-purple-600" />
                  <span>Growth Services</span>
                  <span className="text-[10px] font-extrabold bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">
                    12
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                    openSection === 'services' ? 'rotate-180 text-purple-600' : ''
                  }`}
                />
              </button>

              {openSection === 'services' && (
                <div className="px-3 pb-3 pt-1 space-y-1 bg-white border-t border-slate-100">
                  <Link
                    to="/services"
                    onClick={closeMenu}
                    className="block p-2 rounded-xl text-xs font-bold text-purple-700 bg-purple-50/80 hover:bg-purple-100 transition-colors"
                  >
                    → View All 12 Growth Services
                  </Link>
                  <div className="max-h-60 overflow-y-auto space-y-0.5 pt-1 pr-1">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/services/${s.slug}`}
                        onClick={closeMenu}
                        className="block px-2.5 py-2 rounded-lg text-xs font-medium text-slate-700 hover:text-purple-700 hover:bg-slate-50 transition-colors"
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 2. Industries Accordion */}
            <div className="border border-slate-100 rounded-2xl overflow-hidden mb-2 bg-slate-50/40">
              <button
                type="button"
                onClick={() => toggleSection('industries')}
                className="w-full flex items-center justify-between p-3.5 text-sm font-bold text-slate-900 hover:bg-slate-100/60 transition-colors"
                aria-expanded={openSection === 'industries'}
              >
                <div className="flex items-center gap-2.5">
                  <Shield className="w-4 h-4 text-blue-600" />
                  <span>Target Verticals</span>
                  <span className="text-[10px] font-extrabold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                    8
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                    openSection === 'industries' ? 'rotate-180 text-blue-600' : ''
                  }`}
                />
              </button>

              {openSection === 'industries' && (
                <div className="px-3 pb-3 pt-1 space-y-1 bg-white border-t border-slate-100">
                  <Link
                    to="/industries"
                    onClick={closeMenu}
                    className="block p-2 rounded-xl text-xs font-bold text-blue-700 bg-blue-50/80 hover:bg-blue-100 transition-colors"
                  >
                    → View All 8 Industry Verticals
                  </Link>
                  <div className="max-h-60 overflow-y-auto space-y-0.5 pt-1 pr-1">
                    {industries.map((ind) => (
                      <Link
                        key={ind.slug}
                        to={`/industries/${ind.slug}`}
                        onClick={closeMenu}
                        className="block px-2.5 py-2 rounded-lg text-xs font-medium text-slate-700 hover:text-blue-700 hover:bg-slate-50 transition-colors"
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
                  isActive ? 'bg-purple-50 text-purple-700' : 'text-slate-800 hover:bg-slate-50'
                }`
              }
            >
              <div className="flex items-center gap-2.5">
                <BookOpen className="w-4 h-4 text-emerald-600" />
                <span>Engineering Knowledge Hub</span>
              </div>
              <span className="text-[10px] font-extrabold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                10 Guides
              </span>
            </NavLink>

            {/* 4. About Link */}
            <NavLink
              to="/about"
              onClick={closeMenu}
              className={({ isActive }) =>
                `flex items-center justify-between p-3.5 rounded-2xl text-sm font-bold transition-colors ${
                  isActive ? 'bg-purple-50 text-purple-700' : 'text-slate-800 hover:bg-slate-50'
                }`
              }
            >
              <div className="flex items-center gap-2.5">
                <Building2 className="w-4 h-4 text-amber-600" />
                <span>About Our Agency</span>
              </div>
            </NavLink>

            {/* 5. Contact Link */}
            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={({ isActive }) =>
                `flex items-center justify-between p-3.5 rounded-2xl text-sm font-bold transition-colors ${
                  isActive ? 'bg-purple-50 text-purple-700' : 'text-slate-800 hover:bg-slate-50'
                }`
              }
            >
              <div className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-purple-600" />
                <span>Contact & RFPs</span>
              </div>
            </NavLink>

            {/* 6. Editorial Standards */}
            <NavLink
              to="/editorial-policy"
              onClick={closeMenu}
              className={({ isActive }) =>
                `flex items-center justify-between p-3.5 rounded-2xl text-sm font-bold transition-colors ${
                  isActive ? 'bg-purple-50 text-purple-700' : 'text-slate-800 hover:bg-slate-50'
                }`
              }
            >
              <div className="flex items-center gap-2.5">
                <Shield className="w-4 h-4 text-slate-500" />
                <span>Editorial & Compliance Standards</span>
              </div>
            </NavLink>
          </nav>
        </div>

        {/* Drawer Footer Information */}
        <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50 mt-auto">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
            Direct Commercial Line
          </div>
          <a
            href="tel:+919341436937"
            className="flex items-center gap-2 text-xs font-extrabold text-slate-800 hover:text-purple-700 mb-1"
          >
            <PhoneCall className="w-3.5 h-3.5 text-purple-600" />
            <span>+91 93414 36937</span>
          </a>
          <p className="text-[10px] text-slate-500 leading-snug">
            Specialist SEO for online gaming, casino, financial trading, and regulated markets. Strict non-disclosure and 100% white-hat engineering.
          </p>
        </div>
      </aside>
    </div>
  );
};

export default MobileNav;
