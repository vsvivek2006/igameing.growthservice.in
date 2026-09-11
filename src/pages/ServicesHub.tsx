import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Shield,
  Layers,
  Search,
  Code2,
  BarChart3,
  Sparkles,
} from 'lucide-react';
import { SEOHead } from '../seo';
import { buildBreadcrumbSchema } from '../seo/schema';
import { Container, Section, Button, Breadcrumb, ServiceIcon, FAQAccordion } from '../components/ui';
import { SERVICE_CATEGORY_LABELS, getAllServices } from '../data/servicesData';
import type { ServiceCategory } from '../data/servicesData';
import { PRICING_CATEGORIES, PRICING_DISCLAIMER } from '../data/pricingData';
import useInView from '../hooks/useInView';
import { trackEvent } from '../analytics';

const CATEGORIES: ServiceCategory[] = ['seo', 'web-development', 'paid-acquisition', 'conversion-analytics'];

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

const SERVICES_FAQS = [
  {
    question: 'How do you determine which service discipline we should start with?',
    answer:
      'We never recommend a generic retainer bundle without empirical data. Every engagement begins with a complimentary technical diagnostic evaluating your indexation health, crawl budget efficiency, backlink profile risk, and page performance. For new domains, technical architecture and foundational content come first. For established platforms facing traffic plateaus, crawl efficiency and canonical auditing usually provide the fastest compounding leverage.',
  },
  {
    question: 'Why do you refuse to guarantee search ranking positions?',
    answer:
      'Search engines continuously update their ranking algorithms, and third-party agencies do not control search engine index databases. Anyone offering guaranteed number-one rankings is either using deceptive, short-lived private blog network tactics that risk algorithmic penalties, or targeting low-competition keywords with zero commercial value. We guarantee technical precision, rigorous methodology, transparent reporting, and clean white-hat execution.',
  },
  {
    question: 'How does your website development service differ from a traditional agency?',
    answer:
      'Traditional agencies build a visual layout first and attempt to patch technical SEO at the end. We invert the entire pipeline: URL structure, information architecture, schema taxonomy, rendering strategy (SSR vs SSG), and Core Web Vitals targets are specified before code is written. We build with modern React, Next.js, or performance-hardened WordPress to ensure high search bot readability.',
  },
  {
    question: 'Can you assist with paid advertising in restricted niches?',
    answer:
      'Yes, within strict platform policies and regional regulatory limits. We do not engage in cloaking, unauthorized redirect tricks, or account churn cycles that lead to merchant blacklisting. Instead, we structure policy-compliant creative funnels, ad copy adherence, and landing page disclosure frameworks that comply with Google Ads and Meta advertising policies.',
  },
  {
    question: 'What deliverables do we receive on a monthly basis?',
    answer:
      'Clients receive full transparency: production code pull requests or CMS staging previews, schema validation reports, server log crawl analyses, content gap briefs, backlink verification records, and a monthly executive dashboard tracking organic impressions, indexation ratios, and non-brand keyword visibility.',
  },
  {
    question: 'Do you offer custom scopes for multi-brand or international operators?',
    answer:
      'Yes. Many of our clients operate across multiple jurisdictions with complex multi-language, hreflang, and multi-domain requirements. We design bespoke enterprise scopes that handle international geo-targeting, reverse proxy configurations, and programmatic content architectures at scale.',
  },
];

export const ServicesHub: React.FC = () => {
  const breadcrumbItems = [{ label: 'Services' }];
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');

  const allServices = getAllServices();
  const filteredServices =
    activeCategory === 'all'
      ? allServices
      : allServices.filter((s) => s.category === activeCategory);

  return (
    <>
      <SEOHead
        title="SEO & Digital Growth Services for High-Competition Industries — iGaming Growth"
        description="Specialist technical SEO, website development, paid acquisition, and conversion optimisation services for iGaming, casino, financial trading, and adult industry operators. Engineering-first growth systems."
        canonicalPath="/services"
        jsonLd={[buildBreadcrumbSchema(breadcrumbItems)]}
      />

      {/* ── 1. HERO SECTION ──────────────────────────────────────────────── */}
      <section className="relative bg-navy-950 bg-hero-atmosphere text-white overflow-hidden border-b border-navy-800/80">
        <div className="absolute inset-0 bg-dark-mesh opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] rounded-full bg-purple-600/15 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[350px] rounded-full bg-blue-600/10 blur-[100px] pointer-events-none" />

        <Container className="relative z-10 py-20 lg:py-28">
          <Breadcrumb items={breadcrumbItems} className="mb-6 text-slate-400" />
          
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>Full-Stack Engineering & Growth Capabilities</span>
            </div>

            <h1 className="type-h1 text-white mb-6 leading-tight">
              Specialist Growth Disciplines for Verticals Where Standard Playbooks Fail
            </h1>

            <p className="text-lg lg:text-xl text-slate-300 leading-relaxed mb-8 max-w-3xl">
              Operating in high-competition verticals requires more than superficial blog posts or generic keyword audits. We combine technical SEO engineering, custom web development, policy-compliant acquisition, and data analytics into cohesive, defensible growth engines designed for long-term compounding.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button
                to="/free-seo-audit"
                variant="gold"
                size="lg"
                icon={<Zap className="w-4 h-4" />}
                onClick={() => trackEvent('cta_click', { cta_name: 'free_audit', cta_location: 'services_hero' })}
              >
                Request Technical Audit
              </Button>
              <Button
                to="/book-call"
                variant="outline"
                size="lg"
                className="border-navy-700 text-white hover:bg-navy-800/60"
                onClick={() => trackEvent('cta_click', { cta_name: 'book_call', cta_location: 'services_hero' })}
              >
                Book Diagnostic Session
              </Button>
            </div>

            {/* Quick capability stat pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-navy-800/60">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xl font-extrabold text-white">12</div>
                <div className="text-xs text-slate-400">Specialist Disciplines</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xl font-extrabold text-emerald-400">100%</div>
                <div className="text-xs text-slate-400">White-Hat Compliant</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xl font-extrabold text-purple-400">&lt; 2.5s</div>
                <div className="text-xs text-slate-400">Core Web Vitals Target</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xl font-extrabold text-amber-400">Zero</div>
                <div className="text-xs text-slate-400">Spam or PBN Shortcuts</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. CAPABILITY TAXONOMY TABS ───────────────────────────────────── */}
      <Section variant="subtle" spacing="md">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <div className="type-eyebrow mb-2">Service Catalog</div>
              <h2 className="type-h2 text-slate-900">Explore Our Disciplines</h2>
              <p className="text-slate-600 text-sm max-w-xl mt-2">
                Filter by focus area to see how our engineering, organic, development, and analytics systems address specific growth bottlenecks.
              </p>
            </div>

            {/* Category selector */}
            <div className="flex flex-wrap gap-2 p-1.5 bg-slate-200/70 rounded-2xl self-start">
              <button
                type="button"
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === 'all'
                    ? 'bg-white text-purple-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All (12)
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeCategory === cat
                      ? 'bg-white text-purple-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {SERVICE_CATEGORY_LABELS[cat]}
                </button>
              ))}
            </div>
          </div>

          {/* Service grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((svc, idx) => (
              <Reveal key={svc.slug} direction="up" delay={(idx % 3) * 100}>
                <div className="group flex flex-col h-full p-7 rounded-3xl border border-slate-200 bg-white hover:border-purple-300 hover:shadow-card-hover gradient-border-card transition-all duration-300 hover:-translate-y-1.5">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center group-hover:scale-105 transition-transform shadow-xs">
                      <ServiceIcon name={svc.icon} className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="flex items-center gap-2">
                      {svc.featured && (
                        <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                          Core Pillar
                        </span>
                      )}
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200/80">
                        {SERVICE_CATEGORY_LABELS[svc.category]}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-heading font-extrabold text-slate-900 text-lg mb-2 group-hover:text-purple-700 transition-colors">
                    {svc.name}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1">
                    {svc.shortDescription}
                  </p>

                  {/* Highlights preview */}
                  <div className="pt-4 border-t border-slate-100 mb-6">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                      Key Deliverables
                    </div>
                    <ul className="space-y-1.5">
                      {svc.deliverables.slice(0, 3).map((deliv, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                          <span className="truncate">{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to={`/services/${svc.slug}`}
                    className="inline-flex items-center justify-between w-full px-5 py-3 rounded-2xl bg-slate-900 hover:bg-purple-900 text-white text-xs font-bold transition-all shadow-sm group-hover:shadow-md"
                  >
                    <span>View Full Service Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── 3. WHAT WE BUILD INTO EVERY ENGAGEMENT (PROCESS PROOF) ─────── */}
      <Section variant="white" spacing="lg">
        <Container>
          <Reveal direction="up" className="max-w-3xl mx-auto text-center mb-14">
            <div className="type-eyebrow mb-3">Enterprise Standards</div>
            <h2 className="type-h2 text-slate-900 mb-4">
              What Is Included In Every Single Engagement
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              We do not cut corners or reserve essential technical baseline hygiene for higher-tier clients. Whether engaging us for a focused technical audit or an end-to-end growth retainer, these standard operating protocols apply automatically.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: 'Strict Platform Compliance',
                desc: 'Every strategy adheres to international webmaster guidelines and advertising platform policies. Zero cloaking, zero private blog networks, and zero deceptive redirection tactics.',
              },
              {
                icon: Code2,
                title: 'Engineering-Grade Implementation',
                desc: 'We provide actionable code snippets, GitHub pull requests, or headless CMS implementations directly rather than static PDF decks that languish in your backlog.',
              },
              {
                icon: Zap,
                title: 'Core Web Vitals Enforcement',
                desc: 'Continuous real-user monitoring (CrUX) and lab synthetic audits ensure Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS) pass all thresholds.',
              },
              {
                icon: Search,
                title: 'Crawl Budget & Indexing Governance',
                desc: 'Log-file analysis and bot inspection ensure search crawlers index your high-converting commercial pages instead of burning resources on faceted filter bloat.',
              },
              {
                icon: BarChart3,
                title: 'Attribution & Analytics Hygiene',
                desc: 'Server-side tracking, GA4 event validation, and conversion telemetry calibrated to filter bot traffic, affiliate attribution collisions, and cross-domain tracking drop-offs.',
              },
              {
                icon: Layers,
                title: 'Internal Link Graph Modelling',
                desc: 'Algorithmic internal linking structures that distribute PageRank and topic authority intentionally across pillar clusters rather than relying on haphazard manual linking.',
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} direction="up" delay={i * 80}>
                  <div className="p-7 rounded-3xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-purple-200 hover:shadow-card transition-all">
                    <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-bold text-slate-900 text-base mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* ── 4. 5-STEP DELIVERY BLUEPRINT ─────────────────────────────────── */}
      <section className="bg-navy-950 text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-dark-mesh opacity-20 pointer-events-none" />
        <Container className="relative z-10">
          <Reveal direction="up" className="max-w-2xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <span>Execution Discipline</span>
            </div>
            <h2 className="type-h2 text-white mb-4">
              How Engagements Progress From Discovery to Compounding
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Predictable, phase-driven delivery. No guesswork, no ambiguity, and full access to sprint trackers and staging environments.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                step: '01',
                title: 'Technical Diagnostic',
                subtitle: 'Days 1–10',
                desc: 'Comprehensive server log audit, crawl analysis, Core Web Vitals profiling, and toxic link surface assessment.',
              },
              {
                step: '02',
                title: 'Architecture Blueprint',
                subtitle: 'Days 11–20',
                desc: 'URL taxonomy, canonical trees, schema schemas, and technical remediation specifications created.',
              },
              {
                step: '03',
                title: 'Remediation Sprint',
                subtitle: 'Days 21–40',
                desc: 'Direct code implementation, CMS fixes, JavaScript hydration optimizations, and robots/sitemap re-alignment.',
              },
              {
                step: '04',
                title: 'Content & Authority',
                subtitle: 'Month 2+',
                desc: 'Deployment of intent-targeted topical clusters and high-tier editorial authority acquisition.',
              },
              {
                step: '05',
                title: 'Telemetry & CRO',
                subtitle: 'Ongoing',
                desc: 'Continuous conversion rate optimization, search bot log monitoring, and weekly performance cadence.',
              },
            ].map((st, sIdx) => (
              <Reveal key={st.step} direction="up" delay={sIdx * 100}>
                <div className="relative p-6 rounded-3xl bg-navy-900/60 border border-slate-800 h-full flex flex-col">
                  <div className="text-3xl font-black text-purple-400/30 mb-2">{st.step}</div>
                  <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider mb-1">
                    {st.subtitle}
                  </div>
                  <h4 className="font-heading font-bold text-white text-base mb-3">{st.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed flex-1">{st.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 5. TRANSPARENT PRICING STARTING POINTS ──────────────────────── */}
      <Section variant="subtle" spacing="lg" id="pricing">
        <Container>
          <Reveal direction="up" className="max-w-3xl mx-auto text-center mb-12">
            <div className="type-eyebrow mb-2">Investment Framework</div>
            <h2 className="type-h2 text-slate-900 mb-4">
              Transparent, Indicative Pricing Tiers
            </h2>
            <p className="text-slate-600 text-sm max-w-2xl mx-auto mb-6">
              Clear starting points for engineering retainers and build projects. We do not use hidden fees or arbitrary pricing tiers.
            </p>

            {/* Currency toggle */}
            <div className="inline-flex items-center gap-1 p-1 bg-slate-200/80 rounded-xl">
              <button
                type="button"
                onClick={() => setCurrency('INR')}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  currency === 'INR' ? 'bg-white text-purple-900 shadow-sm' : 'text-slate-600'
                }`}
              >
                INR (₹)
              </button>
              <button
                type="button"
                onClick={() => setCurrency('USD')}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  currency === 'USD' ? 'bg-white text-purple-900 shadow-sm' : 'text-slate-600'
                }`}
              >
                USD ($)
              </button>
            </div>
          </Reveal>

          {/* Pricing cards preview from PRICING_CATEGORIES */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {PRICING_CATEGORIES[0].tiers.map((tier, tIdx) => (
              <Reveal key={tier.id} direction="up" delay={tIdx * 100}>
                <div
                  className={`flex flex-col h-full rounded-3xl p-8 transition-all duration-300 ${
                    tier.featured
                      ? 'bg-navy-950 text-white border-2 border-purple-500 shadow-xl relative'
                      : 'bg-white text-slate-900 border border-slate-200 shadow-sm'
                  }`}
                >
                  {tier.featured && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-[10px] font-black uppercase tracking-widest text-white shadow-md">
                      Most Selected Retainer
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="font-heading font-extrabold text-xl mb-1">{tier.name}</h3>
                    <p className={`text-xs ${tier.featured ? 'text-slate-300' : 'text-slate-500'}`}>
                      {tier.tagline}
                    </p>
                  </div>

                  <div className="mb-6 pb-6 border-b border-slate-200/20">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl font-black">
                        {currency === 'INR' ? tier.priceINR : tier.priceUSD}
                      </span>
                      <span className={`text-xs ${tier.featured ? 'text-slate-400' : 'text-slate-500'}`}>
                        {tier.billingNote}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 mb-8">
                    <div className="text-[11px] font-bold uppercase tracking-wider mb-3 opacity-60">
                      Scope Coverage
                    </div>
                    <ul className="space-y-2.5">
                      {tier.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs">
                          <CheckCircle2
                            className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                              tier.featured ? 'text-purple-400' : 'text-purple-600'
                            }`}
                          />
                          <span className={tier.featured ? 'text-slate-200' : 'text-slate-700'}>
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    to={tier.ctaPath}
                    variant={tier.featured ? 'gold' : 'purple'}
                    size="md"
                    className="w-full justify-center"
                    onClick={() => trackEvent('cta_click', { cta_name: tier.id, cta_location: 'services_pricing' })}
                  >
                    {tier.cta}
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/80 text-center max-w-3xl mx-auto">
            <p className="text-xs text-amber-900 leading-relaxed font-medium">
              <strong>Compliance Notice:</strong> {PRICING_DISCLAIMER}
            </p>
          </div>
        </Container>
      </Section>

      {/* ── 6. FREQUENTLY ASKED QUESTIONS ────────────────────────────────── */}
      <Section variant="white" spacing="lg">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Reveal direction="up" className="text-center mb-12">
              <div className="type-eyebrow mb-2">Clear Answers</div>
              <h2 className="type-h2 text-slate-900 mb-4">
                Frequently Asked Questions About Our Services
              </h2>
              <p className="text-slate-600 text-sm">
                Common questions on technical scoping, contracting, timelines, and platform guarantees.
              </p>
            </Reveal>

            <Reveal direction="up" delay={100}>
              <FAQAccordion items={SERVICES_FAQS} />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ── 7. FINAL ACTION CTA ─────────────────────────────────────────── */}
      <section className="relative bg-navy-950 bg-hero-atmosphere text-white py-20 lg:py-24 overflow-hidden border-t border-navy-800/80">
        <div className="absolute inset-0 bg-dark-mesh opacity-20 pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider">
              <span>Ready for Measurable Growth?</span>
            </div>
            <h2 className="type-h2 text-white">
              Get an Engineering Assessment of Your Digital Architecture
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed max-w-xl mx-auto">
              Send us your domain and primary growth targets. We will run a 200-point diagnostic on indexation health, Core Web Vitals, and keyword gaps at zero cost.
            </p>
            <div className="flex flex-wrap items-center gap-4 justify-center pt-3">
              <Button
                to="/free-seo-audit"
                variant="gold"
                size="lg"
                icon={<Zap className="w-4 h-4" />}
                onClick={() => trackEvent('cta_click', { cta_name: 'free_audit', cta_location: 'services_bottom' })}
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

export default ServicesHub;
