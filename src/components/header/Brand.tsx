import React from 'react';
import { Link } from 'react-router-dom';
import { getBusinessName } from '../../selectors';

export interface BrandProps {
  isDark?: boolean;
}

export const Brand: React.FC<BrandProps> = ({ isDark: _isDark = false }) => {
  const businessName = getBusinessName();

  return (
    <div className="flex items-center flex-shrink-0">
      <Link
        to="/"
        className="flex items-center gap-2.5 sm:gap-3 group hover:opacity-95 transition-opacity"
        aria-label={`${businessName} Home`}
      >
        <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-purple-600 via-indigo-600 to-amber-500 p-[1px] shadow-lg shadow-purple-600/20 group-hover:shadow-purple-500/40 transition-all duration-300 flex-shrink-0">
          <div className="w-full h-full bg-[#080808] rounded-[11px] flex items-center justify-center p-1">
            <img
              src="/logo-icon.webp"
              alt="iGaming Growth Logo"
              width={36}
              height={36}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <span className="font-heading font-black text-base sm:text-xl tracking-wider leading-none text-white transition-colors">
            iGAMING<span className="text-amber-400">GROWTH</span>
          </span>
          <span className="text-[8px] sm:text-[10px] uppercase font-bold tracking-widest leading-tight mt-0.5 text-slate-400">
            PERFORMANCE-DRIVEN DIGITAL GROWTH
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Brand;
