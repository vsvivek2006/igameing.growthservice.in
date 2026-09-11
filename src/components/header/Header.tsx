import React from 'react';
import { TopBar } from './TopBar';
import { Brand } from './Brand';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Top Bar with 18+ Responsible Gaming Notice */}
      <TopBar />

      {/* Main Navbar */}
      <div className="bg-surface-page/95 backdrop-blur-xl border-b border-white/10 text-white shadow-2xl transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-3 sm:gap-4">
          <Brand isDark={true} />

          <DesktopNav isDark={true} />

          <div className="hidden sm:flex items-center gap-3">
            <Button
              to="/book-call"
              variant="outline"
              size="sm"
              className="border-white/20 hover:border-amber-400 text-slate-200 hover:text-white hover:bg-white/10 font-semibold"
            >
              Book Strategy Call
            </Button>
            <Button
              to="/free-seo-audit"
              variant="gold"
              size="sm"
            >
              Free SEO Audit
            </Button>
          </div>

          <MobileNav isDark={true} />
        </div>
      </div>
    </header>
  );
};

export default Header;
