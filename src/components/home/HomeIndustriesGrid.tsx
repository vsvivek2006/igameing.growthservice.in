import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, ExternalLink } from 'lucide-react';
import { getAllIndustries } from '../../data/industriesData';
import { trackEvent } from '../../analytics';

export const HomeIndustriesGrid: React.FC = () => {
  const industries = getAllIndustries();

  return (
    <section id="industries" className="relative py-20 lg:py-28 bg-model3-surface/90 overflow-hidden border-b border-white/10">
      {/* Glow highlight */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[350px] rounded-full bg-amber-500/5 blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/15 text-xs font-bold uppercase tracking-widest text-slate-300 mb-4">
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              <span>Specialized Vertical Engineering</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight">
              8 Regulated Verticals <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
                Where Generic Playbooks Fail
              </span>
            </h2>
          </div>

          <p className="text-slate-400 text-sm sm:text-base max-w-md">
            We never work in generic eCommerce or SaaS. Every single vertical we take on has complex licensing requirements, high domain competition, and strict advertising policies.
          </p>
        </div>

        {/* 8 Industries Cybernetic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {industries.map((ind) => (
            <Link
              key={ind.slug}
              to={`/industries/${ind.slug}`}
              onClick={() => trackEvent('home_industry_click', { slug: ind.slug })}
              className="group block relative rounded-2xl overflow-hidden border border-white/10 bg-model3-panel hover:border-amber-400/50 hover:shadow-xl hover:shadow-amber-950/20 hover:-translate-y-1.5 transition-all duration-300 p-6 flex flex-col justify-between"
            >
              <div>
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-slate-300">
                    {ind.shortName}
                  </span>
                  <span className="text-[10px] text-amber-400 font-mono">
                    High-Risk
                  </span>
                </div>

                <h3 className="font-heading font-extrabold text-white text-lg mb-2 group-hover:text-amber-300 transition-colors">
                  {ind.name}
                </h3>

                <p className="text-slate-400 text-xs leading-relaxed mb-4">
                  {ind.shortDescription}
                </p>

                {/* Challenges solved snippet */}
                <div className="pt-3 border-t border-white/10 space-y-1 text-[11px] text-slate-300 font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Compliance: 100% Policy Safe</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    <span>Search: High Intent Clusters</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-amber-400/90 group-hover:text-amber-300 transition-colors">
                <span>Explore Architecture</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>

        {/* View All Industries Hub Link */}
        <div className="text-center">
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/15 bg-white/[0.03] text-slate-200 font-bold text-xs uppercase tracking-wider hover:bg-white/[0.08] hover:border-white/30 transition-all"
          >
            <span>View All 8 Regulated Verticals Hub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default HomeIndustriesGrid;
