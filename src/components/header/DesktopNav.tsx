import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { navigationConfig, NavItem } from '../../config/navigation';

export const DesktopNav: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav aria-label="Main Desktop Navigation" className="hidden lg:flex items-center gap-1 xl:gap-2">
      {navigationConfig.primary.map((item: NavItem) => {
        const hasChildren = item.children && item.children.length > 0;

        if (!hasChildren) {
          // Special CTA button for "Get a Proposal"
          if (item.badge === '→') {
            return (
              <Link
                key={item.path}
                to={item.path}
                className="ml-2 px-4 py-2 text-sm font-bold rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 hover:from-amber-400 hover:to-orange-400 transition-all duration-200 shadow-sm shadow-amber-500/20 hover:-translate-y-0.5 flex items-center gap-1"
              >
                {item.label}
              </Link>
            );
          }
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
                  isActive
                    ? 'text-purple-600 bg-purple-50'
                    : 'text-slate-700 hover:text-purple-600 hover:bg-slate-100/60'
                }`
              }
            >
              {item.label}
              {item.badge && (
                <span className="bg-purple-100 text-purple-700 text-[10px] font-bold px-1.5 py-0.5 rounded">
                  {item.badge}
                </span>
              )}
            </NavLink>
          );
        }

        const isOpen = openDropdown === item.label;

        return (
          <div
            key={item.path}
            className="relative"
            onMouseEnter={() => setOpenDropdown(item.label)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-semibold rounded-lg transition-colors flex items-center gap-1 ${
                  isActive || isOpen
                    ? 'text-purple-600 bg-purple-50'
                    : 'text-slate-700 hover:text-purple-600 hover:bg-slate-100/60'
                }`
              }
            >
              <span>{item.label}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  isOpen ? 'rotate-180 text-purple-600' : 'text-slate-400'
                }`}
              />
            </NavLink>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute top-full left-0 w-72 pt-2 z-50 animate-fade-in">
                <div className="bg-white rounded-2xl shadow-card-hover border border-slate-200/80 p-2.5 overflow-hidden">
                  {item.description && (
                    <div className="px-3 py-2 border-b border-slate-100 mb-1 text-[11px] text-slate-500 font-medium">
                      {item.description}
                    </div>
                  )}
                  <div className="space-y-0.5">
                    {item.children?.map((subItem) => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        onClick={() => setOpenDropdown(null)}
                        className="block px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                      >
                        <div>{subItem.label}</div>
                        {subItem.description && (
                          <div className="text-[10px] text-slate-400 font-normal mt-0.5">
                            {subItem.description}
                          </div>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}

      <NavLink
        to="/model-3"
        className={({ isActive }) =>
          `ml-1 px-3 py-1.5 text-xs font-bold rounded-full transition-all flex items-center gap-1.5 ${
            isActive
              ? 'text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-400 shadow-md shadow-amber-400/25'
              : 'text-amber-800 bg-amber-50 hover:bg-amber-100 border border-amber-300 shadow-xs'
          }`
        }
      >
        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
        <span>Model 3</span>
      </NavLink>
    </nav>
  );
};

export default DesktopNav;
