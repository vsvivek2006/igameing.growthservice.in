import React, { useState, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ChevronDown, ArrowRight, Sparkles } from 'lucide-react';
import { navigationConfig, NavItem } from '../../config/navigation';

export interface DesktopNavProps {
  isDark?: boolean;
}

export const DesktopNav: React.FC<DesktopNavProps> = ({ isDark = true }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 120);
  };

  return (
    <nav aria-label="Main Desktop Navigation" className="hidden lg:flex items-center gap-1 xl:gap-2">
      {navigationConfig.primary.map((item: NavItem, idx: number) => {
        const hasChildren = item.children && item.children.length > 0;

        if (!hasChildren) {
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
                  isActive
                    ? isDark
                      ? 'text-amber-300 bg-amber-400/10 border border-amber-400/30 shadow-sm'
                      : 'text-purple-600 bg-purple-50'
                    : isDark
                    ? 'text-slate-300 hover:text-amber-400 hover:bg-white/5'
                    : 'text-slate-700 hover:text-purple-600 hover:bg-slate-100/60'
                }`
              }
            >
              {item.label}
              {item.badge && (
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  {item.badge}
                </span>
              )}
            </NavLink>
          );
        }

        const isOpen = openDropdown === item.label;
        const isMultiCol = (item.children?.length ?? 0) > 4;
        const dropdownWidth = isMultiCol ? 'w-[520px] max-w-[calc(100vw-3rem)]' : 'w-[320px]';
        const alignClass = idx >= 2 ? 'right-0' : 'left-0';

        return (
          <div
            key={item.label}
            className="relative"
            onMouseEnter={() => handleMouseEnter(item.label)}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-semibold rounded-lg transition-colors flex items-center gap-1 ${
                  isActive || isOpen
                    ? isDark
                      ? 'text-amber-300 bg-amber-400/10 border border-amber-400/30 shadow-sm'
                      : 'text-purple-600 bg-purple-50'
                    : isDark
                    ? 'text-slate-300 hover:text-amber-400 hover:bg-white/5'
                    : 'text-slate-700 hover:text-purple-600 hover:bg-slate-100/60'
                }`
              }
              aria-expanded={isOpen}
              aria-haspopup="true"
            >
              <span>{item.label}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-150 ${
                  isOpen ? 'rotate-180 text-amber-400' : 'text-slate-400'
                }`}
              />
            </NavLink>

            {/* Seamless Mega-Dropdown */}
            {isOpen && (
              <div 
                className={`absolute top-full ${alignClass} ${dropdownWidth} pt-2 z-50 transition-opacity duration-150 ease-out`}
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <div className={`rounded-2xl border p-3 shadow-2xl backdrop-blur-xl ${
                  isDark
                    ? 'bg-[#0B0B14]/95 border-white/10 text-white shadow-black/80 ring-1 ring-white/10'
                    : 'bg-white shadow-xl border-slate-200 text-slate-900'
                }`}>
                  {/* Category Brief Header */}
                  {item.description && (
                    <div className="flex items-center justify-between px-3 py-1.5 mb-2 border-b border-white/10 text-[11px] text-slate-400 font-medium">
                      <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                        <Sparkles className="w-3 h-3" />
                        <span>{item.label} Directory</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-500">
                        {item.children?.length} Available
                      </span>
                    </div>
                  )}

                  {/* Multi-Column Grid */}
                  <div className={`grid ${isMultiCol ? 'grid-cols-2 gap-1.5' : 'grid-cols-1 gap-1'}`}>
                    {item.children?.map((subItem) => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        onClick={() => setOpenDropdown(null)}
                        className="group/sub flex flex-col p-2.5 rounded-xl hover:bg-white/[0.06] hover:border-amber-400/30 border border-transparent transition-all duration-150"
                      >
                        <div className="flex items-center justify-between gap-1">
                          <span className="text-xs font-bold text-slate-200 group-hover/sub:text-amber-300 transition-colors">
                            {subItem.label}
                          </span>
                          <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 text-amber-400 transition-all duration-150" />
                        </div>
                        {subItem.description && (
                          <span className="text-[10px] line-clamp-1 mt-0.5 text-slate-400 group-hover/sub:text-slate-300 font-normal">
                            {subItem.description}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>

                  {/* Bottom Directory Link */}
                  <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between px-3 text-[11px]">
                    <span className="text-slate-400 truncate max-w-[320px]">{item.description}</span>
                    <Link
                      to={item.path}
                      onClick={() => setOpenDropdown(null)}
                      className="text-amber-400 hover:text-amber-300 font-bold inline-flex items-center gap-1 shrink-0 ml-2"
                    >
                      <span>Explore all</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default DesktopNav;
