import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Zap } from 'lucide-react';
import businessConfig from '../../config/business';

export const TopBar: React.FC = () => {
  return (
    <aside aria-label="Agency Trust Bar" className="bg-slate-900 border-b border-slate-800 text-white text-xs py-1.5 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left: Trust signal */}
        <div className="flex items-center gap-2 text-slate-400">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />
            ))}
          </div>
          <span className="hidden sm:inline">
            {businessConfig.ratings.displayString} — {businessConfig.ratings.reviewCount}+ iGaming operator reviews
          </span>
          <span className="sm:hidden">{businessConfig.ratings.displayString} Rated Agency</span>
        </div>

        {/* Right: CTA */}
        <div className="flex items-center gap-3 text-slate-400">
          <span className="hidden md:inline">Specialist iGaming Growth Agency</span>
          <span className="hidden md:inline text-slate-600">•</span>
          <Link
            to="/free-seo-audit"
            className="flex items-center gap-1 text-amber-400 hover:text-amber-300 transition-colors font-semibold"
          >
            <Zap className="w-3 h-3" />
            <span>Free SEO Audit</span>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default TopBar;
