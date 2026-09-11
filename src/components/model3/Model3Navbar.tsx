import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Menu, 
  X, 
  Zap, 
  BarChart3, 
  Globe, 
  ShieldCheck, 
  PhoneCall, 
  MessageSquare,
  Sparkles
} from 'lucide-react';

export const Model3Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Proof', href: '#proof' },
    { label: 'Ecosystem', href: '#ecosystem' },
    { label: 'Journey', href: '#journey' },
    { label: 'Industries', href: '#industries' },
    { label: 'Case Studies', href: '#casestudies' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Process', href: '#process' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#050505]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/80 py-3' 
          : 'bg-transparent border-b border-white/5 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 via-indigo-600 to-amber-500 p-[1px] shadow-lg shadow-purple-600/20 group-hover:shadow-purple-500/40 transition-all duration-300">
              <div className="w-full h-full bg-[#080808] rounded-[11px] flex items-center justify-center">
                <Globe className="w-5 h-5 text-amber-400 group-hover:rotate-45 transition-transform duration-500" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-lg font-black tracking-wider text-white font-heading">
                  iGAMING<span className="text-amber-400">GROWTH</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  MODEL 3
                </span>
              </div>
              <span className="text-[11px] text-slate-400 tracking-wide font-medium">
                Performance-Driven SEO & Scale
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/[0.08] rounded-full transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/919999999999?text=Hello%20iGaming%20Growth%20Team%2C%20I%20am%20interested%20in%20Model%203%20SEO%20Campaign."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 hover:bg-emerald-500/20 transition-all duration-200"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>

            <a
              href="#pricing"
              className="relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-lg shadow-amber-400/20 hover:shadow-amber-400/40 active:scale-95 transition-all duration-200"
            >
              <Sparkles className="w-3.5 h-3.5 text-slate-950" />
              <span>Start From ₹35K</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 px-4 pt-4 pb-6 bg-[#080808]/98 backdrop-blur-2xl border-b border-white/10 shadow-2xl animate-fade-in">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-200 hover:text-amber-400 hover:bg-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
              <a
                href="https://wa.me/919999999999?text=Hello%20iGaming%20Growth%20Team%2C%20I%20am%20interested%20in%20Model%203%20SEO%20Campaign."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
              <a
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-400"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Start Campaign From ₹35K</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
