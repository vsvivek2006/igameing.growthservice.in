import React from 'react';
import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <aside aria-label="Agency Trust Bar" className="bg-[#050505] border-b border-white/10 text-white text-xs py-1.5 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left: Trust signal & live operational beacon */}
        <div className="flex items-center gap-2 text-slate-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="hidden sm:inline font-medium text-slate-300">
            B2B Growth Engineering & Technical SEO for Regulated Gaming
          </span>
          <span className="sm:hidden font-medium text-slate-300">Specialist Growth Agency</span>
        </div>

        {/* Right: CTA & Turnaround */}
        <div className="flex items-center gap-3 text-slate-400">
          <span className="hidden md:inline text-slate-400 text-[11px]">24h Diagnostic Turnaround</span>
          <span className="hidden md:inline text-slate-700">•</span>
          <a
            href="https://wa.me/917654928455"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors font-medium text-[11px]"
          >
            <span>WhatsApp: +91 76549 28455</span>
          </a>
          <span className="hidden lg:inline text-slate-700">•</span>
          <Link
            to="/free-seo-audit"
            className="flex items-center gap-1 text-amber-400 hover:text-amber-300 transition-colors font-semibold"
          >
            <Zap className="w-3 h-3" />
            <span>Free Code-Level Audit</span>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default TopBar;
