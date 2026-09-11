import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Layers,
  ArrowRight,
  Shield,
  CheckCircle2,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { getAllIndustries } from '../../data/industriesData';
import { getAllMatrixEntries } from '../../data/industryServiceMatrix';
import { getServiceBySlug } from '../../data/servicesData';

export const MatrixVisualizer: React.FC = () => {
  const industries = getAllIndustries();
  const allMatrixEntries = getAllMatrixEntries();

  const [selectedIndustrySlug, setSelectedIndustrySlug] = useState<string>('gaming');

  const selectedIndustry = industries.find((ind) => ind.slug === selectedIndustrySlug) || industries[0];
  const industryPairs = allMatrixEntries.filter((m) => m.industrySlug === selectedIndustrySlug);

  return (
    <div className="w-full">
      {/* System Equation Banner */}
      <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 py-4 px-6 mb-10 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs md:text-sm font-semibold text-slate-300">
        <span className="px-3 py-1 rounded-lg bg-purple-950/80 border border-purple-800/80 text-purple-300 font-mono">
          SERVICE ARCHITECTURE
        </span>
        <span className="text-amber-400 font-bold text-base">✕</span>
        <span className="px-3 py-1 rounded-lg bg-blue-950/80 border border-blue-800/80 text-blue-300 font-mono">
          HIGH-COMPETITION VERTICAL
        </span>
        <span className="text-amber-400 font-bold text-base">=</span>
        <span className="px-3 py-1 rounded-lg bg-emerald-950/80 border border-emerald-800/80 text-emerald-300 font-mono">
          TAILORED GROWTH ENGINE
        </span>
      </div>

      {/* Main Interactive Matrix Shell */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Vertical Selector Rail */}
        <div className="lg:col-span-4 space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 px-1">
            Select High-Competition Vertical
          </div>

          <div className="space-y-1.5">
            {industries.map((ind) => {
              const isSelected = ind.slug === selectedIndustrySlug;
              const pairCount = allMatrixEntries.filter((m) => m.industrySlug === ind.slug).length;

              return (
                <button
                  key={ind.slug}
                  type="button"
                  onClick={() => setSelectedIndustrySlug(ind.slug)}
                  className={`w-full text-left px-4 py-3.5 rounded-xl border transition-all duration-200 flex items-center justify-between ${
                    isSelected
                      ? 'bg-purple-900/25 border-purple-500/60 shadow-md shadow-purple-950/40 text-white'
                      : 'bg-slate-900/60 border-slate-800/80 text-slate-300 hover:bg-slate-800/60 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        isSelected ? 'bg-amber-400 animate-pulse' : 'bg-slate-600'
                      }`}
                    />
                    <span className="font-semibold text-sm">{ind.name}</span>
                  </div>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-slate-800/80 text-slate-400 border border-slate-700/60">
                    {pairCount} {pairCount === 1 ? 'Pair' : 'Pairs'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Tailored Architecture Matrix Panel */}
        <div className="lg:col-span-8">
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800/90 shadow-2xl backdrop-blur-md">
            {/* Header: Vertical Context */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80 mb-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-300 mb-2">
                  <Shield className="w-3.5 h-3.5 text-amber-400" />
                  <span>Vertical Intelligence</span>
                </div>
                <h3 className="font-heading font-bold text-2xl text-white">
                  {selectedIndustry.name} Growth Solutions
                </h3>
              </div>

              <Link
                to={`/industries/${selectedIndustry.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
              >
                <span>Full Industry Pillar</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Context Narrative */}
            <p className="text-sm text-slate-300 leading-relaxed mb-8">
              {selectedIndustry.overview || selectedIndustry.tagline}
            </p>

            {/* Matrix Service Nodes */}
            <div className="space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Tailored Service Combinations ({industryPairs.length} Approved Architectures)
              </div>

              {industryPairs.length > 0 ? (
                <div className="grid grid-cols-1 gap-4">
                  {industryPairs.map((pair) => {
                    const service = getServiceBySlug(pair.serviceSlug);
                    const title = service
                      ? `${service.name} for ${selectedIndustry.shortName || selectedIndustry.name}`
                      : `${selectedIndustry.shortName || selectedIndustry.name} × ${pair.serviceSlug}`;
                    return (
                      <div
                        key={`${pair.industrySlug}-${pair.serviceSlug}`}
                        className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-purple-500/40 transition-all duration-200"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-300 font-bold text-xs">
                              <Layers className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="font-bold text-white text-base">
                                {title}
                              </div>
                              <div className="text-xs text-purple-300 font-medium">
                                {pair.conversionFocus || pair.estimatedTimelineWeeks}
                              </div>
                            </div>
                          </div>

                          <Link
                            to={`/industries/${pair.industrySlug}/${pair.serviceSlug}`}
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 px-3.5 py-1.5 rounded-lg transition-colors flex-shrink-0"
                          >
                            <span>Explore Architecture</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>

                        <p className="text-xs text-slate-400 leading-relaxed mb-4">
                          {pair.uniqueValue}
                        </p>

                        {/* Deliverables Pills */}
                        <div className="pt-3 border-t border-slate-800/80">
                          <div className="text-[11px] font-semibold text-slate-400 mb-2">Key Tailored Deliverables:</div>
                          <div className="flex flex-wrap gap-2">
                            {(pair.specificDeliverables || []).slice(0, 3).map((d) => (
                              <span
                                key={d}
                                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] text-slate-300"
                              >
                                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                                <span>{d}</span>
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800 text-center text-xs text-slate-400">
                  <Sparkles className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                  <span>Strategic architecture mapping available upon platform consultation.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatrixVisualizer;
