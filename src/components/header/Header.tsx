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
      <div className="bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          <Brand />

          <DesktopNav />

          <div className="hidden sm:flex items-center gap-3">
            <Button
              to="/book-call"
              variant="outline"
              size="sm"
              className="border-slate-200 hover:border-purple-600 text-slate-700 hover:text-purple-700"
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

          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
