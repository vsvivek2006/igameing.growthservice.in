import React from 'react';
import { Header } from '../header';
import { Footer } from '../footer';
import { ScrollToTop } from './ScrollToTop';
import { FloatingWhatsApp } from '../ui';

export interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
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
