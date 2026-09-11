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
  Clock,
  MessageSquare
} from 'lucide-react';
import { SEOHead } from '../seo';
import { buildBreadcrumbSchema } from '../seo/schema';
import { Container, Button, Breadcrumb, ServiceIcon, FAQAccordion } from '../components/ui';
import { SERVICE_CATEGORY_LABELS, getAllServices } from '../data/servicesData';
import type { ServiceCategory } from '../data/servicesData';
import { PRICING_CATEGORIES, PRICING_DISCLAIMER } from '../data/pricingData';
import { trackEvent } from '../analytics';

const CATEGORIES: ServiceCategory[] = ['seo', 'web-development', 'paid-acquisition', 'conversion-analytics'];

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
    <div className="bg-model3-base text-white selection:bg-amber-400 selection:text-black font-sans antialiased overflow-x-hidden">
      <SEOHead
        title="SEO & Digital Growth Services for High-Competition Industries — iGaming Growth"
        description="Specialist technical SEO, website development, paid acquisition, and conversion optimisation services for iGaming, casino, financial trading, and adult industry operators. Engineering-first growth systems."
        canonicalPath="/services"
        jsonLd={[buildBreadcrumbSchema(breadcrumbItems)]}
      />

      {/* ── 1. HERO SECTION ──────────────────────────────────────────────── */}
      <section className="relative min-h-[75vh] pt-28 pb-16 lg:pt-36 lg:pb-24 bg-model3-base overflow-hidden flex items-center border-b border-white/10">
        <div className="absolute top-0 right-1/4 w-[600px] h-[450px] rounded-full bg-purple-900/15 blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[450px] h-[400px] rounded-full bg-blue-900/10 blur-[130px] pointer-events-none" />
        <div 
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />

        <Container className="relative z-10">
          <div className="w-full text-left mb-6 sm:mb-8">
            <Breadcrumb items={breadcrumbItems} className="text-slate-400" />
          </div>
          
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/15 text-xs font-bold uppercase tracking-widest text-slate-300 mb-6 shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Full-Stack Engineering &amp; Growth Capabilities</span>
            </div>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white font-heading leading-[1.08] mb-6">
              Specialist Growth Disciplines for <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
                High-Competition Markets
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-slate-300 leading-relaxed mb-8 max-w-3xl">
              Operating in regulated verticals requires more than superficial blog posts or generic keyword audits. We combine technical SEO engineering, custom web development, policy-compliant acquisition, and data analytics into cohesive, defensible growth engines designed for long-term compounding.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10 w-full sm:w-auto">
              <Button
                to="/free-seo-audit"
                variant="gold"
                size="lg"
                className="w-full sm:w-auto justify-center"
                icon={<Zap className="w-4 h-4 text-slate-950" />}
                onClick={() => trackEvent('cta_click', { cta_name: 'free_audit', cta_location: 'services_hero' })}
              >
                Request Technical Audit
              </Button>
              <Button
                to="/contact"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto justify-center border-white/15 text-white hover:bg-white/10"
                onClick={() => trackEvent('cta_click', { cta_name: 'book_call', cta_location: 'services_hero' })}
              >
                Schedule Technical Discovery
              </Button>
            </div>

            {/* Quick capability stat pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-6 border-t border-white/10 w-full max-w-3xl">
              <div className="p-3 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="text-xl sm:text-2xl font-black text-white font-heading">12</div>
                <div className="text-[11px] sm:text-xs text-slate-400">Specialist Disciplines</div>
              </div>
              <div className="p-3 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="text-xl sm:text-2xl font-black text-emerald-400 font-heading">100%</div>
                <div className="text-[11px] sm:text-xs text-slate-400">White-Hat Compliant</div>
              </div>
              <div className="p-3 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="text-xl sm:text-2xl font-black text-purple-400 font-heading">&lt;650ms</div>
                <div className="text-[11px] sm:text-xs text-slate-400">Edge Speed Benchmark</div>
              </div>
              <div className="p-3 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="text-xl sm:text-2xl font-black text-amber-400 font-heading">0 Bans</div>
                <div className="text-[11px] sm:text-xs text-slate-400">Whitelisted Ad Safety</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. CAPABILITY TAXONOMY TABS & DIRECTORY ────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-28 bg-model3-surface/70 border-b border-white/10">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/15 text-xs font-bold uppercase tracking-widest text-slate-300 mb-3">
                <Layers className="w-3.5 h-3.5 text-amber-400" />
                <span>Service Catalog</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading">
                Explore All 12 Specialist Disciplines
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm max-w-xl mt-2">
                Filter by focus area to see how our engineering, organic search, custom development, and analytics systems eliminate growth bottlenecks.
              </p>
            </div>

            {/* Category selector */}
            <div className="flex items-center gap-2 p-1.5 bg-model3-base/90 border border-white/10 rounded-2xl overflow-x-auto no-scrollbar sm:flex-wrap self-start max-w-full">
              <button
                type="button"
                onClick={() => setActiveCategory('all')}
                className={`shrink-0 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === 'all'
                    ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-950/40'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                All (12)
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`shrink-0 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeCategory === cat
                      ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-950/40'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {SERVICE_CATEGORY_LABELS[cat]}
                </button>
              ))}
            </div>
          </div>

          {/* Service grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((svc) => (
              <div
                key={svc.slug}
                className="group flex flex-col h-full p-7 rounded-3xl border border-white/10 bg-model3-base/80 backdrop-blur-md hover:border-amber-400/40 hover:shadow-xl hover:shadow-amber-950/20 transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <ServiceIcon name={svc.icon} className="w-6 h-6 text-amber-400" />
                  </div>
                  <div className="flex items-center gap-2">
                    {svc.featured && (
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/30">
                        Core Pillar
                      </span>
                    )}
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10">
                      {SERVICE_CATEGORY_LABELS[svc.category]}
                    </span>
                  </div>
                </div>

                <h3 className="font-heading font-extrabold text-white text-lg mb-2 group-hover:text-amber-300 transition-colors">
                  {svc.name}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed mb-6 flex-1">
                  {svc.shortDescription}
                </p>

                {/* Highlights preview */}
                <div className="pt-4 border-t border-white/10 mb-6">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                    Key Deliverables
                  </div>
                  <ul className="space-y-1.5">
                    {svc.deliverables.slice(0, 3).map((deliv, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <span className="truncate">{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={`/services/${svc.slug}`}
                  className="inline-flex items-center justify-between w-full px-5 py-3 rounded-2xl bg-white/[0.04] hover:bg-amber-400 hover:text-slate-950 border border-white/10 text-white text-xs font-bold transition-all group-hover:border-amber-400"
                >
                  <span>View Full Service Scope</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 3. WHAT WE BUILD INTO EVERY ENGAGEMENT (PROCESS PROOF) ─────── */}
      <section className="py-20 lg:py-28 bg-model3-base border-b border-white/10">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/15 text-xs font-bold uppercase tracking-widest text-slate-300 mb-3">
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              <span>Enterprise Standards</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading mb-4">
              What Is Engineered Into Every Engagement
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm">
              We never reserve essential baseline hygiene for higher tiers. Whether you engage us for a standalone audit or a full-stack growth retainer, these operating standards apply automatically.
            </p>
          </div>

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
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="p-7 rounded-3xl border border-white/10 bg-model3-surface/80 hover:border-amber-400/40 hover:shadow-xl hover:shadow-amber-950/20 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-400 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-base mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── 4. 5-STEP DELIVERY BLUEPRINT ─────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-model3-panel relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-dark-mesh opacity-20 pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/15 text-xs font-bold uppercase tracking-widest text-slate-300 mb-4">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Execution Cadence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading mb-4">
              How Engagements Progress From Discovery to Scale
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Predictable, phase-driven delivery. No guesswork, no ambiguity, and full visibility into Jira/Linear sprint trackers and staging environments.
            </p>
          </div>

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
                desc: 'URL taxonomy, canonical trees, schema entity graphs, and technical remediation specifications created.',
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
            ].map((st) => (
              <div key={st.step} className="relative p-6 rounded-3xl bg-model3-surface/80 border border-white/10 h-full flex flex-col">
                <div className="text-3xl font-black text-white/20 mb-2 font-mono">{st.step}</div>
                <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider mb-1">
                  {st.subtitle}
                </div>
                <h4 className="font-heading font-bold text-white text-base mb-3">{st.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed flex-1">{st.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 5. TRANSPARENT PRICING STARTING POINTS ──────────────────────── */}
      <section id="pricing" className="py-20 lg:py-28 bg-model3-base border-b border-white/10">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/15 text-xs font-bold uppercase tracking-widest text-slate-300 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Investment Framework</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading mb-4">
              Transparent Retainer Investment Ranges
            </h2>
            <p className="text-slate-300 text-sm max-w-2xl mx-auto mb-6">
              Clear starting points for engineering retainers and build projects. We do not use hidden fees or arbitrary pricing tiers.
            </p>

            {/* Currency toggle */}
            <div className="inline-flex items-center gap-1 p-1 bg-model3-surface border border-white/10 rounded-xl">
              <button
                type="button"
                onClick={() => setCurrency('INR')}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  currency === 'INR' ? 'bg-amber-400 text-slate-950 shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                INR (₹)
              </button>
              <button
                type="button"
                onClick={() => setCurrency('USD')}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  currency === 'USD' ? 'bg-amber-400 text-slate-950 shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                USD ($)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {PRICING_CATEGORIES[0].tiers.map((tier) => (
              <div
                key={tier.id}
                className={`flex flex-col rounded-3xl p-7 h-full border ${
                  tier.featured
                    ? 'bg-gradient-to-b from-purple-950/60 to-model3-surface border-amber-400/60 shadow-2xl shadow-amber-950/20'
                    : 'bg-model3-surface/80 border-white/10'
                }`}
              >
                <div className="mb-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
                    {tier.name}
                  </div>
                  <p className="text-xs text-slate-400">{tier.tagline}</p>
                </div>

                <div className="mb-6">
                  <div className="text-3xl font-black text-white font-heading">
                    {currency === 'INR' ? tier.priceINR : tier.priceUSD}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">{tier.billingNote}</div>
                </div>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {tier.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={tier.ctaPath}
                  className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                    tier.featured
                      ? 'bg-amber-400 text-slate-950 hover:bg-amber-300'
                      : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}
                >
                  <span>{tier.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-amber-400/5 border border-amber-400/20 text-center text-xs text-amber-300">
            {PRICING_DISCLAIMER}
          </div>
        </Container>
      </section>

      {/* ── 6. MULTI-SERVICE FAQ ACCORDION ───────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-model3-surface/70 border-b border-white/10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/15 text-xs font-bold uppercase tracking-widest text-slate-300 mb-4">
                <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
                <span>Service Governance</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading mb-5">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Direct answers regarding our technical workflows, compliance policies, code ownership, and sprint cadences.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 uppercase tracking-wider"
              >
                <span>Consult Our Systems Architect</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="lg:col-span-3">
              <FAQAccordion items={SERVICES_FAQS} />
            </div>
          </div>
        </Container>
      </section>

      {/* ── 7. FINAL CONSULTATION CTA ─────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-model3-base relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-atmosphere" />
        <Container className="relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading mb-4">
            Ready to Build a Defensible Platform?
          </h2>
          <p className="text-slate-300 text-base mb-8">
            Tell us about your platform and current architecture. We will prepare an initial diagnostic assessment within 48 business hours.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              to="/free-seo-audit"
              variant="gold"
              size="lg"
              icon={<Zap className="w-4 h-4 text-slate-950" />}
            >
              Request Platform Diagnostic
            </Button>
            <a
              href="https://wa.me/917654928455"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
              Direct WhatsApp Chat
            </a>
          </div>
        </Container>
      </section>

    </div>
  );
};

export default ServicesHub;
