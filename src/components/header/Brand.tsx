import React from 'react';
import { Link } from 'react-router-dom';
import { getBusinessName } from '../../selectors';

export const Brand: React.FC = () => {
  const businessName = getBusinessName();

  return (
    <div className="flex items-center flex-shrink-0">
      <Link
        to="/"
        className="flex items-center gap-2.5 group hover:opacity-95 transition-opacity"
        aria-label={`${businessName} Home`}
      >
        <div className="h-11 w-11 rounded-xl bg-slate-950 border border-purple-500/30 flex items-center justify-center p-0.5 shadow-md shadow-purple-900/20 group-hover:scale-105 transition-transform duration-300 overflow-hidden">
          <img
            src="/logo-icon.webp"
            alt="iGaming Growth Logo"
            width={40}
            height={40}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col">
          <span className="font-heading font-extrabold text-xl tracking-tight leading-none text-slate-900 group-hover:text-purple-700 transition-colors">
            iGAMING <span className="text-gradient-purple">GROWTH</span>
          </span>
          <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 leading-tight mt-0.5">
            DIGITAL GROWTH AGENCY
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Brand;
