import React from 'react';
import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <aside aria-label="Agency Trust Bar" className="bg-slate-900 border-b border-slate-800 text-white text-xs py-1.5 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left: Trust signal */}
        <div className="flex items-center gap-2 text-slate-300">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
          <span className="hidden sm:inline font-medium">
            B2B Growth Engineering & Technical SEO for High-Competition Verticals
          </span>
          <span className="sm:hidden font-medium">Specialist Growth Agency</span>
        </div>

        {/* Right: CTA */}
        <div className="flex items-center gap-3 text-slate-400">
          <span className="hidden md:inline text-slate-400">24h Diagnostic Turnaround</span>
          <span className="hidden md:inline text-slate-600">•</span>
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
