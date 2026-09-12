import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  CheckCircle2,
  XCircle,
  ChevronRight,
  Zap,
  Shield,
  Layers,
  Terminal,
  ArrowRight,
  Globe,
} from 'lucide-react';
import { SEOHead } from '../seo';
import { buildBreadcrumbSchema, buildServiceSchema } from '../seo/schema';
import { Container, Section, Button, ProcessTimeline, FAQAccordion, Breadcrumb, ServiceIcon, Reveal } from '../components/ui';
import { getServiceBySlug, getAllServices, SERVICE_CATEGORY_LABELS, type ServiceOffering } from '../data/servicesData';
import { getAllIndustries } from '../data/industriesData';
import { MAIN_PACKAGES, PAID_PACKAGES, PRICING_DISCLAIMER } from '../data/pricingData';
import NotFound from './NotFound';


const COLOR_CLASSES: Record<string, { bg: string; text: string; border: string; badge: string }> = {
  purple: { bg: 'bg-purple-500/15', text: 'text-purple-300', border: 'border-purple-500/30', badge: 'bg-purple-500/15 text-purple-300 border border-purple-500/30' },
  violet: { bg: 'bg-purple-500/15', text: 'text-purple-300', border: 'border-purple-500/30', badge: 'bg-purple-500/15 text-purple-300 border border-purple-500/30' },
  blue: { bg: 'bg-blue-500/15', text: 'text-blue-300', border: 'border-blue-500/30', badge: 'bg-blue-500/15 text-blue-300 border border-blue-500/30' },
  indigo: { bg: 'bg-indigo-500/15', text: 'text-indigo-300', border: 'border-indigo-500/30', badge: 'bg-indigo-500/15 text-indigo-300 border border-indigo-500/30' },
  cyan: { bg: 'bg-cyan-500/15', text: 'text-cyan-300', border: 'border-cyan-500/30', badge: 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30' },
  green: { bg: 'bg-emerald-500/15', text: 'text-emerald-300', border: 'border-emerald-500/30', badge: 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30' },
  emerald: { bg: 'bg-emerald-500/15', text: 'text-emerald-300', border: 'border-emerald-500/30', badge: 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30' },
  amber: { bg: 'bg-amber-500/15', text: 'text-amber-300', border: 'border-amber-500/30', badge: 'bg-amber-500/15 text-amber-300 border border-amber-500/30' },
  orange: { bg: 'bg-amber-500/15', text: 'text-amber-300', border: 'border-amber-500/30', badge: 'bg-amber-500/15 text-amber-300 border border-amber-500/30' },
  rose: { bg: 'bg-rose-500/15', text: 'text-rose-300', border: 'border-rose-500/30', badge: 'bg-rose-500/15 text-rose-300 border border-rose-500/30' },
};

const ServicePage: React.FC<{ service: ServiceOffering }> = ({ service }) => {
  const colors = COLOR_CLASSES[service.color] ?? COLOR_CLASSES.purple;
  const breadcrumbItems = [
    { label: 'Services', path: '/services' },
    { label: service.name },
  ];

  const pricingTiers =
    service.category === 'paid-acquisition'
      ? PAID_PACKAGES
      : MAIN_PACKAGES;

  return (
    <div className="bg-model3-base text-white selection:bg-amber-400 selection:text-black font-sans antialiased overflow-x-hidden">
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
      <section className="relative bg-model3-base bg-hero-atmosphere text-white overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-dark-mesh opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[400px] rounded-full bg-purple-600/15 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[300px] rounded-full bg-blue-600/10 blur-[100px] pointer-events-none" />

        <Container className="relative z-10 py-16 sm:py-20 lg:py-28">
          <div className="w-full text-left mb-6 sm:mb-8">
            <Breadcrumb items={breadcrumbItems} className="text-slate-400" />
          </div>

          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <div className="flex flex-wrap items-center justify-center gap-3 mb-5">
              <div className={`w-11 h-11 rounded-2xl ${colors.bg} ${colors.border} border flex items-center justify-center shadow-inner`}>
                <ServiceIcon name={service.icon} className={`w-5 h-5 ${colors.text}`} />
              </div>
              <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${colors.badge}`}>
                {SERVICE_CATEGORY_LABELS[service.category]}
              </span>
              {service.featured && (
                <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                  Core Enterprise Discipline
                </span>
              )}
            </div>

            <h1 className="type-h1 text-white mb-5 leading-tight">
              {service.heroHeadline || service.name}
            </h1>

            <p className="text-lg sm:text-xl text-amber-300 font-semibold mb-4 leading-relaxed max-w-3xl">
              {service.heroSublead || service.tagline}
            </p>

            <p className="text-base text-slate-300 leading-relaxed mb-8 max-w-3xl">
              {service.longDescription || service.shortDescription}
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10 w-full sm:w-auto">
              <Button
                to="/free-seo-audit"
                variant="gold"
                size="lg"
                className="w-full sm:w-auto justify-center"
                icon={<Zap className="w-4 h-4" />}
                onClick={() => trackEvent('cta_click', { cta_name: 'free_seo_audit', cta_location: 'service_hero', service_slug: service.slug })}
              >
                Request Architectural Audit
              </Button>
              <Button
                to="/book-call"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto justify-center border-white/15 text-white hover:bg-white/10 hover:border-amber-400/50"
                onClick={() => trackEvent('cta_click', { cta_name: 'book_strategy_call', cta_location: 'service_hero', service_slug: service.slug })}
              >
                Schedule Diagnostic Call
              </Button>
            </div>

            {/* Capability assurance bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-5 border-t border-white/10 w-full max-w-3xl">
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
            <h2 className="type-h2 text-white mb-4">
              Why Standard Agency Approaches Consistently Fail Here
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Mainstream digital marketing playbooks assume low-friction environments with relaxed ad policies and modest domain authority thresholds. In contested verticals, those assumptions lead directly to wasted budget.
            </p>
          </Reveal>

          <Reveal direction="up" delay={100} className="max-w-4xl mx-auto">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0D0D18]/90 border border-white/10 shadow-xl leading-relaxed">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/25 flex items-center justify-center flex-shrink-0 text-purple-400">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-white text-xl mb-2">
                    The Competitive Impediment
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
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
              <h2 className="type-h2 text-white mb-6">
                How We Engineer {service.shortName} For Lasting Compounding
              </h2>
              <p className="text-slate-300 leading-relaxed text-sm mb-6">
                {service.approach}
              </p>
              <p className="text-slate-300 leading-relaxed text-sm">
                Rather than applying cosmetic adjustments, our senior technical engineers dig into server access logs, canonical mapping trees, structured data syntax, and client-side rendering bottlenecks to establish permanent competitive advantages.
              </p>
            </Reveal>

            <Reveal direction="right" delay={150}>
              <div className="bg-[#0D0D18]/90 rounded-3xl border border-white/10 p-8 shadow-xl">
                <div className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-6 flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>Verifiable Outcomes You Can Expect</span>
                </div>
                <ul className="space-y-4">
                  {service.benefits.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
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
            <h2 className="type-h2 text-white mb-4">
              Concrete Deliverables You Receive
            </h2>
            <p className="text-slate-300 text-sm">
              We do not produce generic 80-page PDFs that gather dust. Every deliverable is an actionable code artifact, specification blueprint, or verified deployment.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {service.deliverables.map((d, idx) => (
              <Reveal key={idx} direction="up" delay={(idx % 3) * 80}>
                <div className="p-7 rounded-3xl bg-[#0D0D18]/90 border border-white/10 shadow-xl hover:border-amber-400/30 transition-all h-full flex flex-col justify-between">
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-purple-500/15 border border-purple-500/25 flex items-center justify-center mb-4 flex-shrink-0">
                      <span className="text-xs font-black text-purple-400">{String(idx + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 className="text-sm font-bold text-white leading-snug mb-2">{d}</h3>
                  </div>
                  <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Engineering artifact</span>
                    <span className="text-emerald-400 font-bold">Production Ready</span>
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
              <h2 className="type-h2 text-white mb-6">
                Technical Capabilities Covered
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Our comprehensive {service.name} scope spans foundational architecture through continuous performance attribution.
              </p>
              <ul className="space-y-3">
                {service.features.map((f, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm text-slate-300">
                    <ChevronRight className={`w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0`} />
                    <span className="leading-snug">{f}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Process */}
            <Reveal direction="right" delay={150}>
              <div className="type-eyebrow mb-3">Sprint Cadence</div>
              <h3 className="type-h3 text-white mb-6">
                How We Deliver {service.shortName}
              </h3>
              <ProcessTimeline steps={service.process} />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ── 6. TECHNICAL ARCHITECTURE BENCHMARK ─────────────────────────── */}
      <section className="bg-model3-base text-white py-20 lg:py-24 relative overflow-hidden border-t border-white/10">
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
              <div className="p-7 rounded-3xl bg-[#0D0D18]/90 border border-white/10 h-full flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-2">
                    Core Web Vitals Thresholds
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3">Performance SLA</h4>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex justify-between border-b border-white/10 py-1.5">
                      <span>Largest Contentful Paint (LCP)</span>
                      <strong className="text-emerald-400">&le; 2.5s</strong>
                    </li>
                    <li className="flex justify-between border-b border-white/10 py-1.5">
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
              <div className="p-7 rounded-3xl bg-[#0D0D18]/90 border border-white/10 h-full flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                    Crawl Efficiency
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3">Bot Quota Governance</h4>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex justify-between border-b border-white/10 py-1.5">
                      <span>Log File Analysis Cadence</span>
                      <strong className="text-slate-100">Weekly</strong>
                    </li>
                    <li className="flex justify-between border-b border-white/10 py-1.5">
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
              <div className="p-7 rounded-3xl bg-[#0D0D18]/90 border border-white/10 h-full flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
                    Schema & Entity
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3">Semantic Modeling</h4>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex justify-between border-b border-white/10 py-1.5">
                      <span>Schema.org Validation</span>
                      <strong className="text-emerald-400">100% Clean</strong>
                    </li>
                    <li className="flex justify-between border-b border-white/10 py-1.5">
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
              <div className="p-8 rounded-3xl border border-amber-400/30 bg-[#0D0D18]/90 shadow-xl h-full flex flex-col">
                <div className="flex items-center gap-2.5 mb-5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <h3 className="font-heading font-extrabold text-xl text-white">Ideal For</h3>
                </div>
                <ul className="space-y-3 flex-1">
                  {service.idealFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {service.notFor.length > 0 && (
              <Reveal direction="up" delay={100}>
                <div className="p-8 rounded-3xl border border-white/10 bg-[#0D0D18]/60 shadow-xl h-full flex flex-col">
                  <div className="flex items-center gap-2.5 mb-5">
                    <XCircle className="w-5 h-5 text-rose-400" />
                    <h3 className="font-heading font-extrabold text-xl text-white">Not For</h3>
                  </div>
                  <ul className="space-y-3 flex-1">
                    {service.notFor.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400">
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
            <h2 className="type-h2 text-white mb-3">
              Investment & Engagement Starting Points
            </h2>
            <p className="text-slate-300 text-sm">
              Indicative tiers for {service.shortName}. Final investment scope is defined after our initial code-level diagnostic.
            </p>
          </Reveal>

          <div className={`grid grid-cols-1 ${pricingTiers.length === 1 ? 'max-w-md' : 'md:grid-cols-3 max-w-5xl'} gap-6 mx-auto mb-6`}>
            {pricingTiers.map((tier, idx) => (
              <Reveal key={tier.id} direction="up" delay={idx * 80}>
                <div className="p-7 rounded-3xl bg-[#0D0D18]/90 border border-white/10 shadow-xl flex flex-col justify-between h-full hover:border-amber-400/30 transition-colors">
                  <div>
                    <h4 className="font-heading font-extrabold text-lg text-white mb-1">{tier.name}</h4>
                    <p className="text-xs text-slate-400 mb-4">{tier.tagline}</p>
                    <div className="text-2xl font-black text-amber-300 mb-1">{tier.priceINR}</div>
                    <div className="text-[11px] text-slate-400 mb-5">{tier.billingNote}</div>
                    <ul className="space-y-2 mb-6">
                      {tier.features.slice(0, 3).map((f, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span className="leading-tight">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button to={tier.ctaPath} variant="primary" size="sm" className="w-full justify-center">
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
                <h2 className="type-h2 text-white mb-4">
                  Frequently Asked Questions About {service.shortName}
                </h2>
                <p className="text-slate-300 text-sm">
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

      {/* ── 9.5 INTERNAL CROSS-LINK GRAPH ─────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-model3-surface/70 border-t border-white/10">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/15 text-xs font-bold uppercase tracking-widest text-slate-300 mb-2">
                  <Globe className="w-3.5 h-3.5 text-amber-400" />
                  <span>Cross-Vertical Architecture</span>
                </div>
                <h3 className="font-heading font-extrabold text-2xl lg:text-3xl text-white">
                  Interlinked Industries &amp; Production Deployments
                </h3>
              </div>
              <Link
                to="/industries"
                className="text-xs font-bold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1 shrink-0"
              >
                <span>View All 8 Regulated Verticals</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {getAllIndustries().slice(0, 4).map((ind) => (
                <Link
                  key={ind.slug}
                  to={`/industries/${ind.slug}`}
                  className="p-5 rounded-2xl bg-model3-deep/80 border border-white/10 hover:border-amber-400/40 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between shadow-lg"
                >
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                      {ind.shortName}
                    </span>
                    <h4 className="font-heading font-bold text-sm text-white group-hover:text-amber-300 transition-colors mb-2">
                      {ind.name}
                    </h4>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {ind.shortDescription}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-amber-400">
                    <span>{ind.shortName} Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>

            {/* Complementary Services (Never Self-Linking) */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>Complementary Engineering Capabilities</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {getAllServices()
                  .filter((s) => s.slug !== service.slug)
                  .slice(0, 3)
                  .map((relSrv) => (
                    <Link
                      key={relSrv.slug}
                      to={`/services/${relSrv.slug}`}
                      className="p-5 rounded-2xl bg-model3-base/90 border border-white/10 hover:border-amber-400/40 transition-all duration-200 hover:-translate-y-0.5 group flex flex-col justify-between shadow-lg"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400">
                            {relSrv.category}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400">
                            {relSrv.slug === 'website-development' ? 'From ₹20,000' : 'From ₹35,000/mo'}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors mb-1.5 font-heading">
                          {relSrv.name}
                        </h4>
                        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                          {relSrv.shortDescription}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-slate-300 group-hover:text-amber-400">
                        <span>Explore Blueprint</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-amber-400" />
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 10. CLOSING ACTION CTA ───────────────────────────────────────── */}
      <section className="relative bg-model3-base bg-hero-atmosphere text-white py-20 lg:py-24 overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-dark-mesh opacity-20 pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-semibold uppercase tracking-wider">
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
                className="border-white/15 text-white hover:bg-white/10 hover:border-amber-400/50"
              >
                Submit Project RFP
              </Button>
              <a
                href="https://wa.me/917654928455"
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
    </div>
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
