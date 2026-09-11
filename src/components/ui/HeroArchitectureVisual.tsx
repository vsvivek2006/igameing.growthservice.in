import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Layers,
  Search,
  CheckCircle2,
  TrendingUp,
  Cpu,
  Database,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface LayerNode {
  readonly id: string;
  readonly label: string;
  readonly value: string;
  readonly status: 'active' | 'synced' | 'verified';
  readonly metric: string;
}

export const HeroArchitectureVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'telemetry' | 'schema'>('architecture');

  const nodes: LayerNode[] = [
    { id: 'crawl', label: 'Crawl Quota Router', value: 'Edge Shielding', status: 'verified', metric: '0% Waste' },
    { id: 'render', label: 'Hydration Pipeline', value: 'SSR Pre-Render', status: 'active', metric: '420ms LCP' },
    { id: 'index', label: 'Canonical Mesh', value: '1-to-1 Parentage', status: 'verified', metric: '50/50 Locked' },
    { id: 'schema', label: 'Entity Graph', value: 'JSON-LD Linked', status: 'synced', metric: 'Valid Graph' },
  ];

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Ambient background glow behind diagram */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-600/30 via-violet-600/20 to-amber-500/10 blur-xl opacity-70 pointer-events-none" />

      {/* Main Terminal Shell */}
      <div className="relative rounded-3xl bg-[#090E1A]/95 border border-slate-800/90 shadow-2xl backdrop-blur-xl overflow-hidden">
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800/80 bg-slate-950/70">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 font-mono text-[11px] font-semibold text-slate-400 tracking-wider">
              GROWTH_ARCHITECTURE_OS // v2.6
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-[10px] uppercase font-bold text-emerald-400 tracking-wider">
              INDEX_HEALTH 100%
            </span>
          </div>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex border-b border-slate-800/80 px-4 pt-2 bg-slate-900/40">
          <button
            type="button"
            onClick={() => setActiveTab('architecture')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold border-b-2 transition-all ${
              activeTab === 'architecture'
                ? 'border-purple-500 text-white'
                : 'border-transparent text-slate-400 hover:text-slate-300'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-purple-400" />
            <span>Search System Graph</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('telemetry')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold border-b-2 transition-all ${
              activeTab === 'telemetry'
                ? 'border-purple-500 text-white'
                : 'border-transparent text-slate-400 hover:text-slate-300'
            }`}
          >
            <Cpu className="w-3.5 h-3.5 text-amber-400" />
            <span>Core Web Vitals</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('schema')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold border-b-2 transition-all ${
              activeTab === 'schema'
                ? 'border-purple-500 text-white'
                : 'border-transparent text-slate-400 hover:text-slate-300'
            }`}
          >
            <Database className="w-3.5 h-3.5 text-violet-400" />
            <span>Schema Graph</span>
          </button>
        </div>

        {/* Terminal Content Body */}
        <div className="p-6">
          {activeTab === 'architecture' && (
            <div className="space-y-4">
              {/* Architecture Core Nodes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {nodes.map((node, i) => (
                  <div
                    key={node.id}
                    className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800/90 hover:border-purple-500/40 transition-all duration-200"
                  >
                    <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1">
                      <span className="font-mono">NODE 0{i + 1}</span>
                      <span className="inline-flex items-center gap-1 font-semibold text-emerald-400">
                        <CheckCircle2 className="w-2.5 h-2.5" />
                        {node.status}
                      </span>
                    </div>
                    <div className="text-xs font-bold text-white mb-0.5">{node.label}</div>
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-purple-300 font-medium">{node.value}</span>
                      <span className="font-mono text-amber-400 font-semibold">{node.metric}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Data Flow Pipeline Connector */}
              <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-800/40">
                <div className="flex items-center justify-between text-xs text-purple-200 mb-2">
                  <span className="font-semibold flex items-center gap-1.5">
                    <Search className="w-3.5 h-3.5 text-amber-400" />
                    High-Competition Intent Mapping
                  </span>
                  <span className="font-mono text-[10px] text-purple-400 bg-purple-900/40 px-2 py-0.5 rounded">
                    GATEWAY_OK
                  </span>
                </div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden mb-2">
                  <div className="h-full bg-gradient-to-r from-purple-600 via-violet-500 to-amber-500 w-[94%]" />
                </div>
                <div className="flex items-center justify-between text-[10px] text-slate-400">
                  <span>Crawl Traps Eliminated: 100%</span>
                  <span className="text-amber-300 font-semibold">Attribution: Cookieless First-Party</span>
                </div>
              </div>

              {/* Verified Result Banner */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <TrendingUp className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Commercial Conversion Path</div>
                    <div className="text-[10px] text-slate-400">Deterministic lead capture pipeline</div>
                  </div>
                </div>
                <span className="text-[11px] font-mono font-bold text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-md border border-emerald-500/20">
                  VERIFIED
                </span>
              </div>
            </div>
          )}

          {activeTab === 'telemetry' && (
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800/90 text-center">
                  <div className="text-[10px] uppercase font-mono text-slate-400 mb-1">LCP Latency</div>
                  <div className="text-xl font-extrabold font-mono text-emerald-400">0.8s</div>
                  <div className="text-[10px] text-emerald-500 font-semibold">Sub-Second Target</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800/90 text-center">
                  <div className="text-[10px] uppercase font-mono text-slate-400 mb-1">INP Responsiveness</div>
                  <div className="text-xl font-extrabold font-mono text-emerald-400">42ms</div>
                  <div className="text-[10px] text-emerald-500 font-semibold">Good (&lt; 200ms)</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800/90 text-center">
                  <div className="text-[10px] uppercase font-mono text-slate-400 mb-1">CLS Stability</div>
                  <div className="text-xl font-extrabold font-mono text-emerald-400">0.00</div>
                  <div className="text-[10px] text-emerald-500 font-semibold">Zero Layout Shift</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800/90 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-300 font-medium">Server Status (Edge CDN)</span>
                  <span className="font-mono text-emerald-400 font-bold">200 OK</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-300 font-medium">Indexable Public Pages</span>
                  <span className="font-mono text-purple-300 font-bold">50 / 50 Locked</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-300 font-medium">Crawl Budget Efficiency</span>
                  <span className="font-mono text-amber-400 font-bold">99.8%</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'schema' && (
            <div className="space-y-3 font-mono text-xs">
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 space-y-1.5 overflow-x-auto">
                <div className="text-purple-400 font-semibold">{'// Connected Entity Graph'}</div>
                <div><span className="text-amber-400">@type</span>: &quot;ProfessionalService&quot;,</div>
                <div><span className="text-amber-400">@id</span>: &quot;https://igameing.growthservice.in/#organization&quot;,</div>
                <div><span className="text-amber-400">areaServed</span>: &quot;Worldwide&quot;,</div>
                <div><span className="text-amber-400">hasOfferCatalog</span>: &#123; <span className="text-emerald-400">12 Growth Disciplines</span> &#125;,</div>
                <div><span className="text-amber-400">audience</span>: &#123; <span className="text-emerald-400">8 High-Competition Verticals</span> &#125;</div>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-slate-400">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Rich Snippets &amp; Knowledge Graph Connected</span>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Status Bar */}
        <div className="px-5 py-3 border-t border-slate-800/80 bg-slate-950/90 flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-2">
            <span className="text-slate-500 font-mono">ENG_PIPELINE</span>
            <span className="text-slate-300 font-medium">Active Production Architecture</span>
          </div>
          <Link
            to="/free-seo-audit"
            className="inline-flex items-center gap-1 font-semibold text-purple-400 hover:text-purple-300 transition-colors"
          >
            <span>Run Platform Diagnostic</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroArchitectureVisual;
