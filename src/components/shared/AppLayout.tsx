import React from 'react';
import { Header } from '../header';
import { Footer } from '../footer';
import { ScrollToTop } from './ScrollToTop';
import { FloatingWhatsApp, MobileBottomBar } from '../ui';

export interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-surface-page text-slate-100 selection:bg-amber-400 selection:text-black flex flex-col justify-between overflow-x-hidden w-full max-w-[100vw]">
      <ScrollToTop />
      <Header />
      <main className="flex-grow pb-16 sm:pb-0">{children}</main>
      <Footer />
      <FloatingWhatsApp />
      <MobileBottomBar />
    </div>
  );
};

export default AppLayout;
