import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronRight, PhoneCall, FileSearch } from 'lucide-react';
import { navigationConfig, NavItem } from '../../config/navigation';
import { Button } from '../ui/Button';

export const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleOpen = () => setIsOpen(!isOpen);
  const closeNav = () => {
    setIsOpen(false);
    setExpandedSection(null);
  };

  const toggleSection = (label: string) => {
    setExpandedSection(expandedSection === label ? null : label);
  };

  return (
    <div className="lg:hidden flex items-center">
      <button
        type="button"
        onClick={toggleOpen}
        className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 hover:text-purple-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 animate-fade-in"
          onClick={closeNav}
        />
      )}

      {/* Drawer Content */}
      {isOpen && (
        <aside
          aria-label="Mobile Navigation Drawer"
          className="fixed top-0 right-0 w-[85vw] max-w-sm h-full bg-white z-50 shadow-2xl flex flex-col justify-between overflow-y-auto animate-slide-up"
        >
          <div>
            {/* Drawer Header */}
            <div className="p-5 border-b border-slate-100 flex items-center justify-between">
              <span className="font-heading font-bold text-lg text-slate-900">
                iGAMING <span className="text-purple-600">GROWTH</span>
              </span>
              <button
                type="button"
                onClick={closeNav}
                className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="p-4 space-y-1">
              {navigationConfig.primary.map((item: NavItem) => {
                const hasChildren = item.children && item.children.length > 0;
                const isExpanded = expandedSection === item.label;

                if (!hasChildren) {
                  return (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={closeNav}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                          isActive
                            ? 'bg-purple-50 text-purple-700'
                            : 'text-slate-700 hover:bg-slate-50'
                        }`
                      }
                    >
                      <span>{item.label}</span>
                      {item.badge && (
                        <span className="bg-purple-100 text-purple-700 text-[10px] font-bold px-2 py-0.5 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </NavLink>
                  );
                }

                return (
                  <div key={item.path} className="rounded-xl overflow-hidden">
                    <button
                      type="button"
                      onClick={() => toggleSection(item.label)}
                      className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      <span>{item.label}</span>
                      <ChevronRight
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isExpanded ? 'rotate-90 text-purple-600' : 'text-slate-400'
                        }`}
                      />
                    </button>

                    {isExpanded && (
                      <div className="bg-slate-50 px-3 py-2 space-y-1 border-y border-slate-100">
                        <Link
                          to={item.path}
                          onClick={closeNav}
                          className="block px-3 py-2 rounded-lg text-xs font-bold text-purple-700 hover:underline"
                        >
                          View {item.label} Overview →
                        </Link>
                        {item.children?.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            onClick={closeNav}
                            className="block px-3 py-2 rounded-lg text-xs font-medium text-slate-600 hover:text-purple-600 hover:bg-white transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Drawer Footer / Trust Actions */}
          <div className="p-5 border-t border-slate-100 bg-slate-50 space-y-3">
            <Link
              to="/book-call"
              onClick={closeNav}
              className="flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-purple-600 transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-purple-600" />
              <span>Schedule 30-Min Strategy Call</span>
            </Link>
            <Link
              to="/resources"
              onClick={closeNav}
              className="flex items-center gap-2 text-xs font-medium text-slate-600 hover:text-purple-600 transition-colors"
            >
              <FileSearch className="w-4 h-4 text-slate-400" />
              <span>Explore Technical Guides</span>
            </Link>
            <Button to="/free-seo-audit" variant="primary" size="md" className="w-full mt-2" onClick={closeNav}>
              Get Free SEO Audit
            </Button>
          </div>
        </aside>
      )}
    </div>
  );
};

export default MobileNav;
