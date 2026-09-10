import React, { useState } from 'react';
import {
  Terminal,
  Server,
  Zap,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  Layers,
} from 'lucide-react';

export const TechnicalAuditVisual: React.FC = () => {
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      id: 'crawl',
      title: 'Crawl Quota & Facet Routing',
      tag: 'Edge Layer',
      icon: Server,
      stat: '0% Waste',
      statLabel: 'Crawl Budget Efficiency',
      description:
        'Prevents faceted query parameters, session tokens, and infinite calendar loops from consuming search engine request quotas.',
      specs: [
        'Edge-level URL normalization before server compute',
        'Clean self-referencing canonical chains',
        'Partitioned robots.txt query boundaries',
        'Weekly server log analysis measuring 200 OK vs 3xx ratios',
      ],
      code: `# Edge CDN Crawl Rule (Protects commercial hubs)
location / {
  proxy_cache_bypass $http_cookie;
  add_header X-Crawl-Governance "OPTIMIZED-200";
  limit_req zone=crawler_zone burst=50 nodelay;
}`,
      codeLang: 'nginx',
    },
    {
      id: 'hydration',
      title: 'SSR & Hydration Latency',
      tag: 'Rendering Engine',
      icon: Zap,
      stat: '420ms',
      statLabel: 'Largest Contentful Paint (LCP)',
      description:
        'Single-page applications often defer indexable text until client JavaScript executes. We implement server-side pre-rendering so search bots parse complete HTML instantly.',
      specs: [
        'Server-rendered critical semantic markup',
        'Deferred secondary client hydration',
        'Zero layout shifts (CLS = 0.00)',
        'Sub-50ms Interaction to Next Paint (INP)',
      ],
      code: `// Pre-rendering hydration boundary
export async function getStaticProps() {
  const content = await fetchCanonicalPageGraph();
  return { props: { content, preRendered: true } };
}`,
      codeLang: 'typescript',
    },
    {
      id: 'schema',
      title: 'Linked Entity Graph Architecture',
      tag: 'Semantic Layer',
      icon: Layers,
      stat: '100%',
      statLabel: 'Schema Validation Pass',
      description:
        'Connects Organization, ProfessionalService, and TechArticle nodes into a unified JSON-LD knowledge graph verified against Google rich snippet guidelines.',
      specs: [
        'Verified @id graph linkage across all pages',
        'Dynamic BreadcrumbList hierarchy alignment',
        'Accurate areaServed & serviceType attributes',
        'Zero synthetic timestamps or fabricated entity data',
      ],
      code: `{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://igameing.growthservice.in/#organization",
  "name": "iGaming Growth",
  "areaServed": "Worldwide"
}`,
      codeLang: 'json',
    },
    {
      id: 'telemetry',
      title: 'First-Party Server-Side Attribution',
      tag: 'Telemetry Core',
      icon: ShieldCheck,
      stat: 'Zero PII',
      statLabel: 'Privacy-Safe Conversion Capture',
      description:
        'Captures high-intent commercial leads with cryptographic deduplication, privacy sanitation, and deterministic attribution without client-side data leakage.',
      specs: [
        'Automatic PII redaction (names, emails, phone numbers)',
        '30-second double-submit throttle protection',
        '10s AbortController network timeout fail-safes',
        'GA4 & Meta conversion API server dispatch',
      ],
      code: `// Privacy Sanitizer & Attribution Pipeline
const sanitizedPayload = sanitizePayload(rawTelemetry);
await trackConversion("generate_lead", {
  submission_id: payload.submissionId,
  verified: true
});`,
      codeLang: 'typescript',
    },
  ];

  const current = pillars[activePillar];
  const Icon = current.icon;

  return (
    <div className="w-full rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl p-6 sm:p-8 lg:p-10 overflow-hidden relative">
      {/* Background glow decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-purple-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-300 mb-3">
            <Cpu className="w-3.5 h-3.5 text-amber-400" />
            <span>Search Engineering Architecture</span>
          </div>
          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
            Engineering-Led SEO Infrastructure
          </h3>
          <p className="text-sm text-slate-400 mt-2 max-w-xl leading-relaxed">
            High-competition search visibility requires rigorous engineering controls. We inspect and optimize four core technical layers.
          </p>
        </div>

        {/* Live System Indicator */}
        <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 flex-shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <div className="text-xs">
            <div className="font-mono text-white font-bold">SYSTEM_HEALTH // 100%</div>
            <div className="text-[10px] text-slate-400">Continuous Gatekeeper Verification</div>
          </div>
        </div>
      </div>

      {/* Interactive Tabs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 pt-8 pb-6 relative z-10">
        {pillars.map((p, idx) => {
          const PIcon = p.icon;
          const isActive = idx === activePillar;

          return (
            <button
              key={p.id}
              type="button"
              onClick={() => setActivePillar(idx)}
              className={`text-left p-4 rounded-2xl border transition-all duration-200 ${
                isActive
                  ? 'bg-purple-900/30 border-purple-500/60 shadow-lg shadow-purple-950/50 text-white'
                  : 'bg-slate-900/50 border-slate-800/80 text-slate-400 hover:bg-slate-900 hover:text-slate-200'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <PIcon className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-slate-500'}`} />
                <span className="text-[10px] font-mono uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-800/80 text-slate-400">
                  {p.tag}
                </span>
              </div>
              <div className={`font-bold text-xs line-clamp-1 ${isActive ? 'text-white' : 'text-slate-300'}`}>
                {p.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Layer Deep-Dive Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 items-center relative z-10">
        {/* Left: Metric & Specs */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-300">
              <Icon className="w-7 h-7" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-400">
                {current.stat}
              </div>
              <div className="text-xs font-semibold text-slate-300">
                {current.statLabel}
              </div>
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            {current.description}
          </p>

          <div className="space-y-2.5">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Technical Verification Specifications:
            </div>
            {current.specs.map((spec) => (
              <div key={spec} className="flex items-start gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{spec}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Code Terminal Display */}
        <div className="lg:col-span-6">
          <div className="rounded-2xl bg-[#060911] border border-slate-800 shadow-xl overflow-hidden font-mono text-xs">
            <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/80 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-[11px] text-slate-400">
                  {current.id}-governance-spec.{current.codeLang}
                </span>
              </div>
              <span className="text-[10px] text-purple-400 uppercase font-semibold">
                verified-spec
              </span>
            </div>
            <div className="p-4 overflow-x-auto text-slate-300 text-[11px] leading-relaxed">
              <pre className="text-emerald-400">{current.code}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalAuditVisual;
