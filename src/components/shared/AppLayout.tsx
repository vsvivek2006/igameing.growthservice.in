import React from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '../header';
import { Footer } from '../footer';
import { ScrollToTop } from './ScrollToTop';
import { FloatingWhatsApp } from '../ui';

export interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const location = useLocation();
  const isModel3 = location.pathname === '/model-3';

  if (isModel3) {
    return (
      <div className="min-h-screen bg-[#050505] flex flex-col justify-between overflow-x-hidden w-full max-w-[100vw]">
        <ScrollToTop />
        <main className="flex-grow">{children}</main>
        <FloatingWhatsApp />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between overflow-x-hidden w-full max-w-[100vw]">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default AppLayout;
