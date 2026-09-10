import React from 'react';
import { useParams } from 'react-router-dom';
import {
  CheckCircle2,
  XCircle,
  ChevronRight,
  Zap,
  Shield,
  Layers,
  Terminal,
} from 'lucide-react';
import { SEOHead } from '../seo';
import { buildBreadcrumbSchema, buildServiceSchema } from '../seo/schema';
import { Container, Section, Button, ProcessTimeline, FAQAccordion, Breadcrumb, ServiceIcon } from '../components/ui';
import { trackEvent } from '../analytics';
import { getServiceBySlug, SERVICE_CATEGORY_LABELS } from '../data/servicesData';
import type { ServiceOffering } from '../data/servicesData';
import { PRICING_CATEGORIES, PRICING_DISCLAIMER } from '../data/pricingData';
import useInView from '../hooks/useInView';
import NotFound from './NotFound';

const COLOR_CLASSES: Record<string, { bg: string; text: string; border: string; badge: string }> = {
  purple: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200', badge: 'bg-purple-100 text-purple-700' },
  violet: { bg: 'bg-violet-50', text: 'text-violet-700', border: 'border-violet-200', badge: 'bg-violet-100 text-violet-700' },
  blue: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', badge: 'bg-blue-100 text-blue-700' },
  indigo: { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200', badge: 'bg-indigo-100 text-indigo-700' },
  cyan: { bg: 'bg-cyan-50', text: 'text-cyan-700', border: 'border-cyan-200', badge: 'bg-cyan-100 text-cyan-700' },
  green: { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200', badge: 'bg-green-100 text-green-700' },
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', badge: 'bg-emerald-100 text-emerald-700' },
  amber: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200', badge: 'bg-amber-100 text-amber-700' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200', badge: 'bg-orange-100 text-orange-700' },
  rose: { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200', badge: 'bg-rose-100 text-rose-700' },
};

// ─── Reusable Reveal Component ────────────────────────────────────────────────
const Reveal: React.FC<{
  children: React.ReactNode;
  direction?: 'up' | 'left' | 'right' | 'scale';
  delay?: number;
  className?: string;
}> = ({ children, direction = 'up', delay = 0, className = '' }) => {
  const [ref, isInView] = useInView({ threshold: 0.1, once: true });
  const animClass =
    direction === 'left'
      ? 'reveal-left'
      : direction === 'right'
      ? 'reveal-right'
      : direction === 'scale'
      ? 'reveal-scale'
      : 'reveal-up';

  return (
    <div
      ref={ref}
      className={`${animClass} ${isInView ? 'in-view' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const ServicePage: React.FC<{ service: ServiceOffering }> = ({ service }) => {
  const colors = COLOR_CLASSES[service.color] ?? COLOR_CLASSES.purple;
  const breadcrumbItems = [
    { label: 'Services', path: '/services' },
    { label: service.name },
  ];

  // Map service category to pricing category
  const pricingCategory =
    service.category === 'web-development'
      ? PRICING_CATEGORIES[1]
      : service.category === 'paid-acquisition'
      ? PRICING_CATEGORIES[2]
      : PRICING_CATEGORIES[0];

  return (
    <>
      <SEOHead
        title={service.seo.title}
        description={service.seo.description}
        canonicalPath={`/services/${service.slug}`}
        jsonLd={[
          buildBreadcrumbSchema(breadcrumbItems),
          buildServiceSchema(service),
        ]}
      />

      {/* ── 1. HERO ──────────────────────────────────────────────────── */}
      <section className="relative bg-navy-950 bg-hero-atmosphere text-white overflow-hidden border-b border-navy-800/80">
        <div className="absolute inset-0 bg-dark-mesh opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[400px] rounded-full bg-purple-600/15 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[300px] rounded-full bg-blue-600/10 blur-[100px] pointer-events-none" />

        <Container className="relative z-10 py-16 sm:py-20 lg:py-28">
          <Breadcrumb items={breadcrumbItems} className="mb-6 text-slate-400" />

          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <div className={`w-11 h-11 rounded-2xl ${colors.bg} ${colors.border} border flex items-center justify-center`}>
                <ServiceIcon name={service.icon} className={`w-5 h-5 ${colors.text}`} />
              </div>
              <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${colors.badge}`}>
                {SERVICE_CATEGORY_LABELS[service.category]}
              </span>
              {service.featured && (
                <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-amber-100 text-amber-900">
                  Core Enterprise Discipline
                </span>
              )}
            </div>

            <h1 className="type-h1 text-white mb-5 leading-tight">
              {service.heroHeadline || service.name}
            </h1>

            <p className="text-lg sm:text-xl text-purple-300 font-semibold mb-4 leading-relaxed">
              {service.heroSublead || service.tagline}
            </p>

            <p className="text-base text-slate-300 leading-relaxed mb-8 max-w-3xl">
              {service.longDescription || service.shortDescription}
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Button
                to="/free-seo-audit"
                variant="gold"
                size="lg"
                icon={<Zap className="w-4 h-4" />}
                onClick={() => trackEvent('cta_click', { cta_name: 'free_seo_audit', cta_location: 'service_hero', service_slug: service.slug })}
              >
                Request Architectural Audit
              </Button>
              <Button
                to="/book-call"
                variant="outline"
                size="lg"
                className="border-navy-700 text-white hover:bg-navy-800/60"
                onClick={() => trackEvent('cta_click', { cta_name: 'book_strategy_call', cta_location: 'service_hero', service_slug: service.slug })}
              >
                Schedule Diagnostic Call
              </Button>
            </div>

            {/* Capability assurance bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-5 border-t border-navy-800/80">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xs font-bold text-slate-400">Core Web Vitals</div>
                <div className="text-base font-extrabold text-emerald-400">LCP &le; 2.5s Target</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xs font-bold text-slate-400">Execution Standard</div>
                <div className="text-base font-extrabold text-white">100% White-Hat</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xs font-bold text-slate-400">Scoping Model</div>
                <div className="text-base font-extrabold text-purple-400">Code-Level PRs</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xs font-bold text-slate-400">Audit Turnaround</div>
                <div className="text-base font-extrabold text-amber-400">24 Business Hours</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. THE STRATEGIC CHALLENGE ─────────────────────────────────── */}
      <Section variant="subtle" spacing="lg">
        <Container>
          <Reveal direction="up" className="max-w-3xl mx-auto text-center mb-12">
            <div className="type-eyebrow mb-2">The Strategic Challenge</div>
            <h2 className="type-h2 text-slate-900 mb-4">
              Why Standard Agency Approaches Consistently Fail Here
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Mainstream digital marketing playbooks assume low-friction environments with relaxed ad policies and modest domain authority thresholds. In contested verticals, those assumptions lead directly to wasted budget.
            </p>
          </Reveal>

          <Reveal direction="up" delay={100} className="max-w-4xl mx-auto">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm leading-relaxed">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0 text-purple-700">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-slate-900 text-xl mb-2">
                    The Competitive Impediment
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.problemStatement}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ── 3. OUR TECHNICAL APPROACH & BENEFITS ───────────────────────── */}
      <Section variant="white" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal direction="left">
              <div className="type-eyebrow mb-3">Engineered Solution</div>
              <h2 className="type-h2 text-slate-900 mb-6">
                How We Engineer {service.shortName} For Lasting Compounding
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm mb-6">
                {service.approach}
              </p>
              <p className="text-slate-600 leading-relaxed text-sm">
                Rather than applying cosmetic adjustments, our senior technical engineers dig into server access logs, canonical mapping trees, structured data syntax, and client-side rendering bottlenecks to establish permanent competitive advantages.
              </p>
            </Reveal>

            <Reveal direction="right" delay={150}>
              <div className="bg-gradient-to-br from-purple-50 via-slate-50 to-indigo-50 rounded-3xl border border-purple-100 p-8 shadow-sm">
                <div className="text-xs font-bold uppercase tracking-widest text-purple-700 mb-6 flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>Verifiable Outcomes You Can Expect</span>
                </div>
                <ul className="space-y-4">
                  {service.benefits.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-sm text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="font-medium leading-snug">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ── 4. DELIVERABLES BREAKDOWN ──────────────────────────────────── */}
      <Section variant="subtle" spacing="lg">
        <Container>
          <Reveal direction="up" className="max-w-2xl mx-auto text-center mb-12">
            <div className="type-eyebrow mb-2">Scope of Work</div>
            <h2 className="type-h2 text-slate-900 mb-4">
              Concrete Deliverables You Receive
            </h2>
            <p className="text-slate-600 text-sm">
              We do not produce generic 80-page PDFs that gather dust. Every deliverable is an actionable code artifact, specification blueprint, or verified deployment.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {service.deliverables.map((d, idx) => (
              <Reveal key={idx} direction="up" delay={(idx % 3) * 80}>
                <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-purple-300 hover:shadow-card transition-all h-full flex flex-col justify-between">
                  <div>
                    <div className={`w-9 h-9 rounded-xl ${colors.bg} flex items-center justify-center mb-4 flex-shrink-0`}>
                      <span className={`text-xs font-black ${colors.text}`}>{String(idx + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 leading-snug mb-2">{d}</h3>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Engineering artifact</span>
                    <span className="text-emerald-600 font-bold">Production Ready</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── 5. CAPABILITIES & 6-STAGE DELIVERY BLUEPRINT ───────────────── */}
      <Section variant="white" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <Reveal direction="left">
              <div className="type-eyebrow mb-3">Service Scope</div>
              <h2 className="type-h2 text-slate-900 mb-6">
                Technical Capabilities Covered
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Our comprehensive {service.name} scope spans foundational architecture through continuous performance attribution.
              </p>
              <ul className="space-y-3">
                {service.features.map((f, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm text-slate-700">
                    <ChevronRight className={`w-4 h-4 ${colors.text} mt-0.5 flex-shrink-0`} />
                    <span className="leading-snug">{f}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Process */}
            <Reveal direction="right" delay={150}>
              <div className="type-eyebrow mb-3">Sprint Cadence</div>
              <h3 className="type-h3 text-slate-900 mb-6">
                How We Deliver {service.shortName}
              </h3>
              <ProcessTimeline steps={service.process} />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ── 6. TECHNICAL ARCHITECTURE BENCHMARK ─────────────────────────── */}
      <section className="bg-navy-950 text-white py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-dark-mesh opacity-20 pointer-events-none" />
        <Container className="relative z-10">
          <Reveal direction="up" className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <Terminal className="w-3.5 h-3.5 text-purple-400" />
              <span>Production Specifications</span>
            </div>
            <h2 className="type-h2 text-white mb-4">
              Architecture & Web Vitals Benchmarks
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Every system we deploy or optimize is engineered against strict international performance thresholds to ensure zero algorithmic crawl penalties.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Reveal direction="up" delay={0}>
              <div className="p-7 rounded-3xl bg-navy-900/70 border border-slate-800 h-full flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-2">
                    Core Web Vitals Thresholds
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3">Performance SLA</h4>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex justify-between border-b border-slate-800 py-1.5">
                      <span>Largest Contentful Paint (LCP)</span>
                      <strong className="text-emerald-400">&le; 2.5s</strong>
                    </li>
                    <li className="flex justify-between border-b border-slate-800 py-1.5">
                      <span>Interaction to Next Paint (INP)</span>
                      <strong className="text-emerald-400">&le; 200ms</strong>
                    </li>
                    <li className="flex justify-between py-1.5">
                      <span>Cumulative Layout Shift (CLS)</span>
                      <strong className="text-emerald-400">&le; 0.1</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal direction="up" delay={100}>
              <div className="p-7 rounded-3xl bg-navy-900/70 border border-slate-800 h-full flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                    Crawl Efficiency
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3">Bot Quota Governance</h4>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex justify-between border-b border-slate-800 py-1.5">
                      <span>Log File Analysis Cadence</span>
                      <strong className="text-slate-100">Weekly</strong>
                    </li>
                    <li className="flex justify-between border-b border-slate-800 py-1.5">
                      <span>Faceted Parameter Handling</span>
                      <strong className="text-slate-100">Canonical / Disallow</strong>
                    </li>
                    <li className="flex justify-between py-1.5">
                      <span>HTTP 301 Redirect Chains</span>
                      <strong className="text-emerald-400">Zero tolerance</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal direction="up" delay={200}>
              <div className="p-7 rounded-3xl bg-navy-900/70 border border-slate-800 h-full flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
                    Schema & Entity
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3">Semantic Modeling</h4>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex justify-between border-b border-slate-800 py-1.5">
                      <span>Schema.org Validation</span>
                      <strong className="text-emerald-400">100% Clean</strong>
                    </li>
                    <li className="flex justify-between border-b border-slate-800 py-1.5">
                      <span>Entity Disambiguation</span>
                      <strong className="text-slate-100">Wikidata / Knowledge Graph</strong>
                    </li>
                    <li className="flex justify-between py-1.5">
                      <span>E-E-A-T Authorship Nodes</span>
                      <strong className="text-slate-100">Linked Verified Entities</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── 7. WHO IT IS FOR / NOT FOR ─────────────────────────────────── */}
      <Section variant="white" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Reveal direction="up">
              <div className={`p-8 rounded-3xl border ${colors.border} bg-white shadow-sm h-full flex flex-col`}>
                <div className="flex items-center gap-2.5 mb-5">
                  <CheckCircle2 className={`w-5 h-5 ${colors.text}`} />
                  <h3 className="font-heading font-extrabold text-xl text-slate-900">Ideal For</h3>
                </div>
                <ul className="space-y-3 flex-1">
                  {service.idealFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {service.notFor.length > 0 && (
              <Reveal direction="up" delay={100}>
                <div className="p-8 rounded-3xl border border-slate-200 bg-slate-50/50 shadow-sm h-full flex flex-col">
                  <div className="flex items-center gap-2.5 mb-5">
                    <XCircle className="w-5 h-5 text-rose-500" />
                    <h3 className="font-heading font-extrabold text-xl text-slate-900">Not For</h3>
                  </div>
                  <ul className="space-y-3 flex-1">
                    {service.notFor.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 flex-shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )}
          </div>
        </Container>
      </Section>

      {/* ── 8. PRICING REFERENCE ────────────────────────────────────────── */}
      <Section variant="subtle" spacing="lg">
        <Container>
          <Reveal direction="up" className="max-w-3xl mx-auto text-center mb-10">
            <div className="type-eyebrow mb-2">Transparent Scoping</div>
            <h2 className="type-h2 text-slate-900 mb-3">
              Investment & Engagement Starting Points
            </h2>
            <p className="text-slate-600 text-sm">
              Indicative tiers for {service.shortName}. Final investment scope is defined after our initial code-level diagnostic.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-6">
            {pricingCategory.tiers.map((tier, idx) => (
              <Reveal key={tier.id} direction="up" delay={idx * 80}>
                <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between h-full">
                  <div>
                    <h4 className="font-heading font-extrabold text-lg text-slate-900 mb-1">{tier.name}</h4>
                    <p className="text-xs text-slate-500 mb-4">{tier.tagline}</p>
                    <div className="text-2xl font-black text-purple-700 mb-1">{tier.priceINR}</div>
                    <div className="text-[11px] text-slate-400 mb-5">{tier.billingNote}</div>
                    <ul className="space-y-2 mb-6">
                      {tier.features.slice(0, 3).map((f, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span className="leading-tight">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button to={tier.ctaPath} variant="outline" size="sm" className="w-full justify-center">
                    {tier.cta}
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs text-slate-500 italic">
              <strong>Compliance Notice:</strong> {PRICING_DISCLAIMER}
            </p>
          </div>
        </Container>
      </Section>

      {/* ── 9. FAQS ──────────────────────────────────────────────────────── */}
      {service.faqs.length > 0 && (
        <Section variant="white" spacing="lg">
          <Container>
            <div className="max-w-3xl mx-auto">
              <Reveal direction="up" className="text-center mb-12">
                <div className="type-eyebrow mb-2">Technical Guidance</div>
                <h2 className="type-h2 text-slate-900 mb-4">
                  Frequently Asked Questions About {service.shortName}
                </h2>
                <p className="text-slate-600 text-sm">
                  Empirical considerations on technical scoping, crawling mechanics, and timeline expectations.
                </p>
              </Reveal>

              <Reveal direction="up" delay={100}>
                <FAQAccordion
                  items={service.faqs.map((f) => ({
                    question: f.q,
                    answer: f.a,
                  }))}
                />
              </Reveal>
            </div>
          </Container>
        </Section>
      )}

      {/* ── 10. CLOSING ACTION CTA ───────────────────────────────────────── */}
      <section className="relative bg-navy-950 bg-hero-atmosphere text-white py-20 lg:py-24 overflow-hidden border-t border-navy-800/80">
        <div className="absolute inset-0 bg-dark-mesh opacity-20 pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider">
              <span>Ready for Measurable Impact?</span>
            </div>
            <h2 className="type-h2 text-white">
              Get an Engineering Assessment of Your {service.shortName}
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed max-w-xl mx-auto">
              Send us your platform URL and growth objectives. We will prepare a 200-point diagnostic on indexation leaks, rendering bottlenecks, and Core Web Vitals.
            </p>
            <div className="flex flex-wrap items-center gap-4 justify-center pt-3">
              <Button
                to="/free-seo-audit"
                variant="gold"
                size="lg"
                icon={<Zap className="w-4 h-4" />}
                onClick={() => trackEvent('cta_click', { cta_name: 'free_seo_audit_bottom', cta_location: 'service_bottom', service_slug: service.slug })}
              >
                Claim Free Technical Audit
              </Button>
              <Button
                to="/contact"
                variant="outline"
                size="lg"
                className="border-navy-700 text-white hover:bg-navy-800/60"
              >
                Submit Project RFP
              </Button>
              <a
                href="https://wa.me/919341436937"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-md shadow-emerald-950/20 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Direct WhatsApp Consultation</span>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export const ServiceDetailPage: React.FC = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();

  if (!serviceSlug) {
    return <NotFound />;
  }

  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    return <NotFound />;
  }

  return <ServicePage service={service} />;
};

export default ServiceDetailPage;
