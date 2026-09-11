import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  ExternalLink
} from 'lucide-react';
import { getAllServices, SERVICE_CATEGORY_LABELS } from '../../data/servicesData';
import { trackEvent } from '../../analytics';

const CATEGORY_TABS: { id: string; label: string; count: number }[] = [
  { id: 'all', label: 'All 12 Services', count: 12 },
  { id: 'seo', label: 'SEO & Search', count: 7 },
  { id: 'web-development', label: 'Web & App Dev', count: 1 },
  { id: 'paid-acquisition', label: 'Paid Media', count: 2 },
  { id: 'conversion-analytics', label: 'CRO & Analytics', count: 2 },
];

export const HomeServicesGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const allServices = getAllServices();

  const displayedServices = selectedCategory === 'all'
    ? allServices
    : allServices.filter((s) => s.category === selectedCategory);

  return (
    <section id="services" className="relative py-20 lg:py-28 bg-model3-base overflow-hidden border-b border-white/10">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[500px] bg-purple-900/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[400px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/15 text-xs font-bold uppercase tracking-widest text-slate-300 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Full Production Directory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight">
              12 Specialist Disciplines <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
                Built for High-Stakes Operators
              </span>
            </h2>
          </div>

          <p className="text-slate-400 text-sm sm:text-base max-w-md">
            Every service is executed by senior engineers and growth specialists. We provide direct code PRs, verified analytics, and transparent bi-weekly deliverables.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-white/10">
          {CATEGORY_TABS.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setSelectedCategory(tab.id);
                  trackEvent('home_services_filter_click', { category: tab.id });
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                  isActive
                    ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20'
                    : 'bg-white/[0.03] text-slate-300 border border-white/10 hover:bg-white/[0.08]'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-md ${
                    isActive ? 'bg-black/20 text-slate-950 font-extrabold' : 'bg-white/10 text-slate-400'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayedServices.map((service) => (
            <div
              key={service.slug}
              className="flex flex-col justify-between p-6 rounded-2xl bg-model3-surface/80 border border-white/10 hover:border-amber-400/40 backdrop-blur-md hover:shadow-xl hover:shadow-amber-950/20 transition-all duration-300 group"
            >
              <div>
                {/* Category & Status */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-white/[0.05] border border-white/10 text-slate-300">
                    {SERVICE_CATEGORY_LABELS[service.category]}
                  </span>
                  {service.featured && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/30 text-amber-300">
                      Featured
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white font-heading mb-2 group-hover:text-amber-300 transition-colors">
                  {service.name}
                </h3>

                {/* Tagline */}
                <p className="text-xs text-amber-400 font-medium mb-3">
                  {service.tagline}
                </p>

                {/* Short Description */}
                <p className="text-xs text-slate-400 leading-relaxed mb-5">
                  {service.shortDescription}
                </p>

                {/* Key Deliverables Bullet Points */}
                <div className="space-y-1.5 mb-6 pt-4 border-t border-white/10">
                  {service.deliverables.slice(0, 3).map((d, i) => (
                    <div key={i} className="flex items-start gap-2 text-[11px] text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Link CTA */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <Link
                  to={`/services/${service.slug}`}
                  onClick={() => trackEvent('home_service_card_click', { slug: service.slug })}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white group-hover:text-amber-400 transition-colors"
                >
                  <span>Explore Service Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>

                <span className="text-[10px] font-mono text-slate-500">
                  SLA: Bi-Weekly PRs
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Hub Explore Footer CTA */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-950/40 via-model3-surface to-amber-950/30 border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-white font-heading mb-1">
              Need a bespoke cross-discipline scope?
            </h4>
            <p className="text-xs text-slate-400">
              We frequently bundle Technical SEO, PWA Headless Dev, and Compliant Ads into integrated enterprise retainers.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 transition-colors"
            >
              <span>View Full Hub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors"
            >
              <span>Build Custom Scope</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeServicesGrid;
