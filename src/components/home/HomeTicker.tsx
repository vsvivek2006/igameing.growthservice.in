import React from 'react';

const TICKER_ITEMS = [
  'Technical SEO Engineering',
  'Core Web Vitals Optimisation',
  'Crawl Budget Management',
  'Structured Data Pipelines',
  'Authority Development',
  'Programmatic SEO',
  'JavaScript Rendering SEO',
  'Digital PR',
  'Conversion Optimisation',
  'Policy-Compliant Paid Ads',
  'Content Architecture',
  'Analytics & Attribution',
  // duplicate for seamless loop
  'Technical SEO Engineering',
  'Core Web Vitals Optimisation',
  'Crawl Budget Management',
  'Structured Data Pipelines',
  'Authority Development',
  'Programmatic SEO',
  'JavaScript Rendering SEO',
  'Digital PR',
  'Conversion Optimisation',
  'Policy-Compliant Paid Ads',
  'Content Architecture',
  'Analytics & Attribution',
];

export const HomeTicker: React.FC = () => {
  return (
    <section className="py-5 bg-model3-surface/90 border-y border-white/10 overflow-hidden">
      <div className="relative">
        <div className="ticker-track gap-0">
          {TICKER_ITEMS.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-3 px-6 text-xs font-bold text-slate-300 tracking-wide uppercase whitespace-nowrap"
            >
              <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${i % 2 === 0 ? 'bg-amber-400 shadow-glow-gold-sm' : 'bg-purple-400 shadow-glow-sm'}`} />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTicker;
