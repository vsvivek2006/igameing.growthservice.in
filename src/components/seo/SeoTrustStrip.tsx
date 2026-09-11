import React from 'react';
import { 
  Target, 
  Code2, 
  Layers, 
  BarChart3, 
  Zap, 
  Search,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export const SeoTrustStrip: React.FC = () => {
  const capabilities = [
    { label: 'SEO Strategy', icon: Target },
    { label: 'Technical SEO', icon: ShieldCheck },
    { label: 'Landing Page Engineering', icon: Code2 },
    { label: 'Search Visibility', icon: Search },
    { label: 'Conversion Optimization', icon: Zap },
    { label: 'Analytics & Attribution', icon: BarChart3 },
    { label: 'Multi-Region Scale', icon: Layers },
  ];

  return (
    <div className="relative bg-model3-panel border-b border-white/10 py-5 overflow-hidden">
      {/* Subtle edge fade overlays for continuous horizontal appearance */}
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-model3-panel to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-model3-panel to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-y-4 gap-x-6">
          <div className="flex items-center gap-2 pr-4 border-r border-white/10 hidden md:flex">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 whitespace-nowrap">
              Core Capabilities
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 flex-1">
            {capabilities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx} 
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors duration-200"
                >
                  <div className="w-6 h-6 rounded-md bg-white/[0.04] border border-white/10 flex items-center justify-center">
                    <Icon className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold tracking-wide">
                    {item.label}
                  </span>
                  {idx < capabilities.length - 1 && (
                    <span className="text-white/20 ml-3 hidden sm:inline">•</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
