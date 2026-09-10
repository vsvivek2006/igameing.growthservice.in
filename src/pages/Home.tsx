import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  TrendingUp,
  Code2,
  BarChart3,
  Target,
  Search,
  CheckCircle2,
  Zap,
  Shield,
  Globe,
  Layers,
  BookOpen,
} from 'lucide-react';
import { SEOHead } from '../seo';
import { buildOrganizationSchema, buildWebSiteSchema } from '../seo/schema';
import {
  Container,
  Section,
  Button,
  FAQAccordion,
  HeroArchitectureVisual,
  MatrixVisualizer,
  TechnicalAuditVisual,
} from '../components/ui';
import { FadeIn, MotionCard } from '../components/animations';
import { trackEvent } from '../analytics';
import { getAllServices } from '../data/servicesData';

const WHAT_WE_DO = [
  {
    icon: TrendingUp,
    title: 'SEO for Competitive Markets',
    desc: 'Technical SEO, content strategy, and authority development engineered for industries that cannot afford to lose the organic channel.',
    link: '/services/seo',
    ctaText: 'Explore SEO Strategy',
    metric: 'Enterprise Organic',
  },
  {
    icon: Code2,
    title: 'SEO-First Website Development',
    desc: 'Websites built with performance, crawlability, and conversion architecture from the specification stage — not retrofitted after launch.',
    link: '/services/website-development',
    ctaText: 'Review Web Architecture',
    metric: 'Sub-Second LCP',
  },
  {
    icon: BarChart3,
    title: 'Paid Acquisition & Compliance',
    desc: 'Google Ads and Meta Ads management for industries where policy compliance and account architecture determine whether campaigns run at all.',
    link: '/services/google-ads',
    ctaText: 'Explore Paid Compliance',
    metric: 'Policy-Certified',
  },
  {
    icon: Target,
    title: 'Conversion Optimisation (CRO)',
    desc: 'Systematic A/B testing and funnel analysis that converts more of the traffic you already have without increasing acquisition cost.',
    link: '/services/conversion-optimization',
    ctaText: 'Analyze Funnel CRO',
    metric: 'Data-Driven UX',
  },
];

const WHY_SPECIALISED = [
  {
    icon: Shield,
    title: 'Compliance-Aware Strategy',
    desc: 'We understand the advertising and content restrictions that apply in regulated, high-risk, and policy-sensitive industries. Strategy is built within those constraints, not discovered to violate them after execution.',
  },
  {
    icon: Layers,
    title: 'Technical Depth',
    desc: 'High-competition markets require technical SEO precision: crawl budget management, JavaScript rendering, schema markup, and Core Web Vitals at a level that general agencies rarely reach.',
  },
  {
    icon: Globe,
    title: 'Vertical-Specific Intelligence',
    desc: 'The keyword landscape, competitor profiles, content standards, and authority benchmarks in gaming, finance, and adult categories are fundamentally different from general commercial search. Vertical expertise is not optional.',
  },
  {
    icon: Search,
    title: 'SEO as Infrastructure',
    desc: 'We treat organic search as a business asset that compounds over time — not a campaign that switches off when the budget runs out. Every engagement builds sustainable, owned visibility.',
  },
];

const METHODOLOGY_PRINCIPLES = [
  {
    number: '01',
    title: 'SEO Before Decoration',
    tagline: 'Architecture Dictates Aesthetics',
    desc: 'Visual design must serve information architecture, crawl efficiency, and content hierarchy. Beautiful websites that hide critical content behind client-side rendering or confusing navigation fail before they start.',
  },
  {
    number: '02',
    title: 'Technical Foundations First',
    tagline: 'Fix Leaks Before Pouring Volume',
    desc: 'Crawl budget leaks, broken canonical chains, and poor Core Web Vitals silently suppress every piece of content published. We eliminate technical debt before recommending content scaling.',
  },
  {
    number: '03',
    title: 'Search Intent Over Keyword Density',
    tagline: 'Satisfy Real Commercial Needs',
    desc: 'Keyword-stuffed pages trigger Helpful Content penalties. We map granular search intent—informational, commercial, navigational—and architect pages that provide genuine answers and logical next actions.',
  },
  {
    number: '04',
    title: 'UX Cohesion & Search Signals',
    tagline: 'What Converts Users Satisfies Search',
    desc: 'Fast rendering, mobile responsiveness, semantic HTML, and intuitive navigation are simultaneously user experience features and direct search quality signals.',
  },
  {
    number: '05',
    title: 'Measurement Before Scaling',
    tagline: 'Verified Attribution Over Speculation',
    desc: 'We never scale acquisition channels without first-party data layers, verified conversion tracking, and cookieless server-side attribution in place. Every dollar spent must trace to a verified outcome.',
  },
];

const FEATURED_RESOURCES = [
  {
    category: 'Technical SEO Guide',
    title: 'The 47-Point Technical SEO Audit Guide for Competitive Verticals',
    desc: 'A rigorous engineering framework for identifying crawl traps, rendering bottlenecks, parameter bloat, and indexation leaks on high-volume platforms.',
    readTime: '14 min read',
    path: '/resources/seo-guides/technical-seo-guide',
  },
  {
    category: 'Architectural Blueprint',
    title: 'Programmatic SEO Guide — Scalable Pages Without Doorway Penalties',
    desc: 'Architectural blueprint for scaling search assets with programmatic page generation, algorithmic quality scoring, and indexation gates.',
    readTime: '16 min read',
    path: '/resources/seo-guides/programmatic-seo',
  },
  {
    category: 'Industry Insight',
    title: 'Gaming SEO Strategy Blueprint — Search Market Penetration Playbook',
    desc: 'Strategic analysis of organic search competition in the online gaming market. Managing brand entity authority and algorithmic volatility.',
    readTime: '15 min read',
    path: '/resources/industry-insights/gaming-seo',
  },
];

const TARGET_VERTICALS = [
  {
    title: 'iGaming & Online Gaming',
    slug: 'gaming',
    badge: 'Skill & Real-Money',
    challenge: 'Overcoming multi-year domain authority deficits and algorithmic volatility in highly contested game SERPs.',
    link: '/industries/gaming',
  },
  {
    title: 'Casino & Gambling Brands',
    slug: 'casino',
    badge: 'Tier-1 Contested',
    challenge: 'Navigating aggressive affiliate competition, licensing jurisdiction boundaries, and strict ad platform policy restrictions.',
    link: '/industries/casino',
  },
  {
    title: 'Sports & Cricket Gaming',
    slug: 'cricket-gaming',
    badge: 'Event-Driven Surges',
    challenge: 'Capturing real-time tournament search peaks, live score queries, and maintaining indexation during major sports leagues.',
    link: '/industries/cricket-gaming',
  },
  {
    title: 'Yono & High-Velocity Search',
    slug: 'yono',
    badge: 'Velocity Queries',
    challenge: 'Managing high-velocity APK search spikes, rapid crawl budget demands, and maintaining brand entity protection.',
    link: '/industries/yono',
  },
  {
    title: 'Colour Prediction Platforms',
    slug: 'color-prediction',
    badge: 'Reputation & Intent',
    challenge: 'Structuring clear informational and transactional intent while defending against malicious SERP displacement.',
    link: '/industries/color-prediction',
  },
  {
    title: 'Colour Trading Platforms',
    slug: 'color-trading',
    badge: 'Search Volume',
    challenge: 'Filtering qualified high-intent trade volume from casual searchers with tailored conversion architecture.',
    link: '/industries/color-trading',
  },
  {
    title: 'Stock Market & Financial Platforms',
    slug: 'stock-market',
    badge: 'YMYL & Financial',
    challenge: 'Satisfying extreme Google E-E-A-T standards, algorithmic financial scrutiny, and compliant conversion funnels.',
    link: '/industries/stock-market',
  },
  {
    title: 'Adult & Escort Industry (B2B)',
    slug: 'adult-escort',
    badge: 'Policy-Safe Marketing',
    challenge: 'Operating strictly as a B2B marketing agency, providing clean code-level SEO without explicit sexual content.',
    link: '/industries/adult-escort',
  },
];

const ARCHITECTURE_PIPELINE = [
  { name: 'Architecture', desc: 'Server DOM & Routing' },
  { name: 'Crawlability', desc: 'Bot Budget & Rendering' },
  { name: 'Speed', desc: 'Core Web Vitals LCP' },
  { name: 'Indexation', desc: 'Canonical Integrity' },
  { name: 'Content', desc: 'Topical Authority Clusters' },
  { name: 'Internal Links', desc: 'Topical Graph Flow' },
  { name: 'Authority', desc: 'Quality-Controlled Links' },
  { name: 'Conversion', desc: 'Qualified Client Revenue' },
];

const MEASUREMENT_FUNNEL = [
  { stage: 'Impressions', desc: 'Dominating commercial query search visibility' },
  { stage: 'Clicks', desc: 'High-CTR titles and verified rich snippets' },
  { stage: 'Qualified Traffic', desc: 'Landing pages aligned with transactional intent' },
  { stage: 'Engagement', desc: 'Fast rendering and intuitive user journeys' },
  { stage: 'Lead', desc: 'High-trust intake forms and strategy consultations' },
  { stage: 'Conversion', desc: 'Qualified commercial partnership agreements' },
  { stage: 'Revenue', desc: 'Compounding long-term client organic returns' },
];

const PROCESS = [
  { n: '01', title: 'Diagnose', desc: 'Technical audit, crawl log analysis, indexation barrier review, and competitive gap mapping establish the factual baseline.' },
  { n: '02', title: 'Architect', desc: 'Custom 90-day technical and content roadmap tailored to vertical compliance, search intent, and platform constraints.' },
  { n: '03', title: 'Build', desc: 'Core Web Vitals remediation, schema pipelines, internal linking graph, and high-performance website architecture.' },
  { n: '04', title: 'Grow', desc: 'Topical authority clusters, high-intent landing page assets, and quality-controlled editorial authority acquisition.' },
  { n: '05', title: 'Measure', desc: 'First-party data layers, server-side cookieless attribution, and conversion funnel analysis from impression to revenue.' },
  { n: '06', title: 'Compound', desc: 'Continuous crawl budget governance, entity expansion, monthly transparency reporting, and compounding organic market share.' },
];

const HOMEPAGE_FAQS = [
  {
    q: 'What industries do you specialise in?',
    a: 'We work exclusively with businesses in high-competition and high-risk verticals: online gaming, casino, fantasy sports (cricket gaming, Yono), color prediction and color trading platforms, stock market and financial platforms, and adult industry businesses. We do not serve general commercial clients.',
  },
  {
    q: 'Why choose a specialist agency over a generalist?',
    a: 'High-competition industries have fundamentally different SEO conditions: higher domain authority thresholds, more stringent content standards, paid advertising restrictions, and compliance-specific content requirements. A generalist agency applies frameworks that do not account for these factors. We start from the specific competitive reality of your vertical.',
  },
  {
    q: 'Do you guarantee SEO rankings?',
    a: 'No. Ranking guarantees are made by agencies that do not understand how search works. We guarantee transparent process, measurable output, and honest reporting. Results in competitive industries are the product of sustained, quality work — not a commitment any responsible agency should make on a timeline.',
  },
  {
    q: 'Can you work with businesses where paid advertising is restricted?',
    a: 'Yes — this is one of our core specialities. Many of the industries we serve have limited or no access to standard paid advertising channels. Organic SEO becomes the primary or only scalable acquisition channel, and we build programmes accordingly.',
  },
  {
    q: 'How long before we see results?',
    a: 'Meaningful organic movement in competitive categories typically registers between months 4–8 depending on domain authority, keyword competitiveness, and how quickly technical fixes can be implemented. Lower-competition keyword clusters can show movement earlier. We scope expectations accurately based on your starting position.',
  },
  {
    q: 'How does backlink and authority acquisition work in high-competition verticals?',
    a: 'We focus strictly on quality-controlled authority acquisition: topical relevance, editorial rigor, natural anchor distribution, and disciplined link velocity. We reject toxic private blog networks (PBNs), automated link blasts, and manipulative link schemes that risk manual actions and algorithmic penalties.',
  },
  {
    q: 'What are the platform eligibility rules for Google Ads and Meta Ads?',
    a: 'Paid advertising availability depends on the client\'s business model, destination, jurisdiction, licence/certification status and platform policy. Google and Meta require specialized advertiser certifications (e.g. gambling certifications, local financial services verification) and valid operating licenses. We manage campaigns strictly within official regulatory frameworks and never attempt to bypass platform restrictions.',
  },
  {
    q: 'How do you measure attribution and conversions for organic search?',
    a: 'We deploy privacy-compliant, server-side event tracking and custom GA4 pipelines to map user journeys from initial organic impression down through query intent, session engagement, qualified lead intake, and revenue generation.',
  },
  {
    q: 'What does the code-level SEO diagnostic cover?',
    a: 'Our senior technical architects inspect server DOM structure, crawl budget distribution, parameter handling, SSR hydration bottlenecks, canonical loops, Schema.org entity graphs, and competitive topical coverage. We deliver a prioritized engineering action plan within 24 hours, completely free of generic automated scorecards.',
  },
];

export const Home: React.FC = () => {
  const allServices = getAllServices();

  return (
    <>
      <SEOHead
        title="SEO & Digital Growth for High-Competition Industries — iGaming Growth"
        description="Specialist SEO, website development, and digital marketing for gaming, casino, financial, and adult industry businesses. Technical SEO, content strategy, and performance marketing for the markets that fight hardest for organic visibility."
        canonicalPath="/"
        jsonLd={[buildOrganizationSchema(), buildWebSiteSchema()]}
      />

      {/* ── 1. Hero Section: Architectural Composition ─────────────── */}
      <section className="relative bg-hero-atmosphere text-white overflow-hidden min-h-[calc(100vh-80px)] flex items-center pt-8 pb-20 lg:py-28">
        {/* Ambient atmospheric gradients & grid */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[500px] rounded-full bg-purple-600/15 blur-[140px]" />
          <div className="absolute bottom-10 left-10 w-[500px] h-[400px] rounded-full bg-indigo-600/12 blur-[120px]" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'linear-gradient(#a78bfa 1px, transparent 1px), linear-gradient(to right, #a78bfa 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />
        </div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Brand Statement & Primary Actions */}
            <div className="lg:col-span-6 xl:col-span-7">
              <FadeIn>
                {/* Eyebrow badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/15 border border-purple-500/25 mb-6">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-xs font-bold text-purple-200 tracking-wider uppercase">
                    Specialist Digital Growth Agency
                  </span>
                </div>

                <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.08] mb-6">
                  SEO &amp; Digital Growth for{' '}
                  <span className="text-gradient-purple">High-Competition</span>{' '}
                  Industries
                </h1>

                <p className="type-body-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
                  We build organic search visibility, technical SEO infrastructure, and performance marketing systems for gaming, casino, financial, and adult industry businesses — the markets where standard agency approaches consistently fail.
                </p>

                {/* Primary CTA Pair */}
                <div className="flex flex-wrap items-center gap-4 mb-10">
                  <Button
                    to="/free-seo-audit"
                    variant="gold"
                    size="lg"
                    icon={<Search className="w-4 h-4" />}
                    onClick={() => trackEvent('cta_click', { cta_name: 'free_seo_audit', cta_location: 'hero' })}
                  >
                    Get Free SEO Audit
                  </Button>
                  <Button
                    to="/book-call"
                    variant="dark"
                    size="lg"
                    icon={<ArrowRight className="w-4 h-4" />}
                    iconPosition="right"
                    onClick={() => trackEvent('cta_click', { cta_name: 'book_strategy_call', cta_location: 'hero' })}
                  >
                    Book Strategy Call
                  </Button>
                  <a
                    href="https://wa.me/919341436937"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
                    onClick={() => trackEvent('cta_click', { cta_name: 'whatsapp_direct', cta_location: 'hero' })}
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>WhatsApp Chat</span>
                  </a>
                </div>

                {/* Engineering Trust Credentials (igaming.md Section 4) */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800/80 text-xs text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Technical SEO</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>SEO-First Development</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Authority Building</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Compliance-Aware</span>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right Column: Interactive Search System Architecture Visual */}
            <div className="lg:col-span-6 xl:col-span-5">
              <FadeIn delay={150}>
                <HeroArchitectureVisual />
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Section B: Truthful Operating Standards Strip (igaming.md Section B) ──────── */}
      <section className="bg-slate-900 border-b border-slate-800 py-4 text-xs text-slate-300">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="text-slate-400 font-bold uppercase tracking-wider text-[11px]">
              Operating Standards
            </span>
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 font-medium">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Technical SEO Infrastructure
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                Strategy-First Execution
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                Data-Driven Attribution
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                Regulated Industry Specialists
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Transparent Reporting
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. What We Build / Services Section ──────────────────────── */}
      <Section variant="white" spacing="lg">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <div className="type-eyebrow mb-3">Core Growth Capabilities</div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-tight">
                Engineering-Led Growth Architecture
              </h2>
              <p className="type-body-lg mt-4 text-slate-600 leading-relaxed">
                An integrated growth system: organic SEO, technical infrastructure, paid acquisition, and conversion architecture — working together, not in silos.
              </p>
            </FadeIn>
          </div>

          {/* 4 Featured Hero Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {WHAT_WE_DO.map((item, idx) => {
              const Icon = item.icon;
              return (
                <MotionCard key={item.title} delay={idx * 80} variant="interactive" className="p-8">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                          {item.metric}
                        </span>
                      </div>

                      <h3 className="font-heading font-bold text-xl text-slate-900 mb-3">
                        {item.title}
                      </h3>
                      <p className="type-body text-slate-500 leading-relaxed mb-6">
                        {item.desc}
                      </p>
                    </div>

                    <Link
                      to={item.link}
                      className="inline-flex items-center gap-2 text-sm font-bold text-purple-600 hover:text-purple-800 transition-colors pt-4 border-t border-slate-100"
                    >
                      <span>{item.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </MotionCard>
              );
            })}
          </div>

          {/* Secondary Disciplines Strip */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Full Specialized Roster
                </span>
                <div className="font-bold text-slate-900 text-sm">
                  12 Connected Growth Disciplines
                </div>
              </div>
              <Button to="/services" variant="outline" size="sm">
                View All Services Directory →
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {allServices.map((svc) => (
                <Link
                  key={svc.slug}
                  to={`/services/${svc.slug}`}
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-purple-300 hover:text-purple-700 transition-colors"
                >
                  {svc.shortName}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Section C: Industries We Understand & Target Verticals ── */}
      <section className="bg-gradient-to-br from-slate-950 via-[#0D1220] to-[#070B14] py-20 lg:py-28 text-white border-y border-slate-800">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <div className="type-eyebrow text-purple-400 mb-3">Vertical Specialization</div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                High-Competition Industry Intelligence
              </h2>
              <p className="type-body-lg text-slate-400 mt-4 leading-relaxed">
                Generic agencies fail because gaming, casino, financial trading, and policy-sensitive markets operate under unique search heuristics, compliance boundaries, and authority barriers.
              </p>
            </FadeIn>
          </div>

          {/* 8 Target Verticals Grid with Specific Marketing Challenges (igaming.md Section C) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {TARGET_VERTICALS.map((vertical, idx) => (
              <MotionCard
                key={vertical.slug}
                delay={idx * 40}
                variant="dark"
                className="p-5 flex flex-col justify-between hover:border-purple-500/50 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      {vertical.badge}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-base text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {vertical.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {vertical.challenge}
                  </p>
                </div>
                <Link
                  to={vertical.link}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 group-hover:text-purple-300 transition-colors pt-3 border-t border-slate-800"
                >
                  <span>Explore Vertical Strategy</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </MotionCard>
            ))}
          </div>

          <div className="pt-8 border-t border-slate-800/80 mb-10 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
              Interactive Growth &amp; Difficulty Matrix
            </span>
            <h3 className="text-xl font-bold text-white mt-1">
              Explore Algorithmic Risk, Authority Thresholds &amp; Channel Viability
            </h3>
          </div>

          {/* Interactive Matrix Visualizer Component */}
          <FadeIn delay={100}>
            <MatrixVisualizer />
          </FadeIn>
        </Container>
      </section>

      {/* ── Section E: Why Specialised / Agency Manifesto ───────────── */}
      <Section variant="white" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
            {/* Left Column: Large Editorial Statement */}
            <div className="lg:col-span-5 sticky top-28">
              <FadeIn>
                <div className="type-eyebrow mb-3">Agency Differentiation</div>
                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 leading-tight mb-6">
                  Why Standard Agencies Fail in High-Competition Markets
                </h2>
                <p className="type-body text-slate-600 leading-relaxed mb-8">
                  Generalist marketing agencies rely on generic templates, surface-level keyword research, and black-box reporting. In high-competition categories, ranking signals require code-level optimization and deep vertical understanding.
                </p>

                <div className="p-6 rounded-2xl bg-purple-50/60 border border-purple-100 space-y-3">
                  <div className="font-bold text-slate-900 text-sm">
                    Our Operational Commitment
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Zero fake reviews, zero manufactured logos, zero ranking guarantees. Credibility is demonstrated through code architecture, crawl governance, and verifiable lead generation.
                  </p>
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-700 hover:text-purple-900 transition-colors"
                  >
                    Read Our Agency Manifesto →
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* Right Column: 4 Core Architectural Principles */}
            <div className="lg:col-span-7 space-y-4">
              {WHY_SPECIALISED.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <MotionCard key={item.title} delay={idx * 80} variant="default" className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0 mt-0.5">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-base text-slate-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </MotionCard>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Section F & G: SEO-First Architecture Pipeline & Technical Depth ── */}
      <Section variant="subtle" spacing="lg">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <FadeIn>
              <div className="type-eyebrow mb-3">System Architecture</div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 leading-tight">
                SEO-First Website Development Pipeline
              </h2>
              <p className="type-body text-slate-600 mt-4 leading-relaxed">
                Search performance is not an afterthought added to a finished design. We engineer discovery, crawlability, and indexation into the root software layer.
              </p>
            </FadeIn>
          </div>

          {/* 8-Step Architectural Pipeline Flow (igaming.md Section F) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 max-w-6xl mx-auto mb-14">
            {ARCHITECTURE_PIPELINE.map((item, idx) => (
              <div
                key={item.name}
                className="relative p-4 rounded-xl bg-white border border-slate-200/90 hover:border-purple-300 hover:shadow-sm transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] font-bold text-purple-700 px-1.5 py-0.5 rounded bg-purple-50 border border-purple-200/60">
                      0{idx + 1}
                    </span>
                    {idx < ARCHITECTURE_PIPELINE.length - 1 && (
                      <span className="hidden lg:inline text-slate-300 group-hover:text-purple-500 font-bold">→</span>
                    )}
                  </div>
                  <div className="font-heading font-bold text-sm text-slate-900 mb-1">
                    {item.name}
                  </div>
                  <p className="text-[11px] text-slate-500 leading-tight">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Technical Code-Level Inspection Component */}
          <FadeIn>
            <TechnicalAuditVisual />
          </FadeIn>
        </Container>
      </Section>

      {/* ── Section H & I: Authority Acquisition & Compliance-Aware Acquisition ── */}
      <Section variant="white" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">
            {/* Authority & Backlinks */}
            <div className="lg:col-span-6 p-8 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-purple-700 text-xs font-bold uppercase tracking-wider mb-3">
                  <Shield className="w-4 h-4" />
                  <span>Quality-Controlled Authority</span>
                </div>
                <h3 className="font-heading font-bold text-2xl text-slate-900 mb-3">
                  Authority &amp; Digital PR Architecture
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  In competitive verticals, low-grade link packages trigger algorithmic demotions. We execute disciplined, editorial authority acquisition built on contextual relevance, topical clusters, and verified publisher relationships.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-white border border-slate-200/70">
                    <div className="text-xs font-bold text-slate-900 mb-1">Topical Relevance</div>
                    <div className="text-[11px] text-slate-500">Contextually aligned publisher nodes</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200/70">
                    <div className="text-xs font-bold text-slate-900 mb-1">Anchor Diversity</div>
                    <div className="text-[11px] text-slate-500">Natural brand-to-generic balance</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200/70">
                    <div className="text-xs font-bold text-slate-900 mb-1">Velocity Discipline</div>
                    <div className="text-[11px] text-slate-500">Controlled organic link schedules</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200/70">
                    <div className="text-xs font-bold text-slate-900 mb-1">Zero PBN Risk</div>
                    <div className="text-[11px] text-slate-500">No automated networks or link farms</div>
                  </div>
                </div>
              </div>
              <Link
                to="/services/link-building"
                className="inline-flex items-center gap-2 text-sm font-bold text-purple-700 hover:text-purple-900 transition-colors pt-4 border-t border-slate-200/80"
              >
                <span>Explore Authority Acquisition Protocols</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Paid Media & Policy Compliance Card */}
            <div className="lg:col-span-6 p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 text-white border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
                  <Zap className="w-4 h-4" />
                  <span>Platform Policy &amp; Paid Acquisition</span>
                </div>
                <h3 className="font-heading font-bold text-2xl text-white mb-3">
                  Google &amp; Meta Ads Compliance Framework
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Paid acquisition in gaming, casino, and finance requires rigorous platform certifications, destination licensing verification, and regulatory geo-fencing.
                </p>

                {/* Mandatory Policy Copy Rule (igaming.md Section I) */}
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 mb-6">
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-300 mb-1">
                    Mandatory Policy Standard
                  </div>
                  <p className="text-xs text-amber-200/90 leading-relaxed">
                    Paid advertising availability depends on the client's business model, destination, jurisdiction, licence/certification status and platform policy. Never positioned as bypassing restrictions.
                  </p>
                </div>

                <div className="space-y-2 text-xs text-slate-300 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>Google Ads Gambling &amp; Financial Services Certification guidance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>Meta Ads regulated industry whitelist setup &amp; jurisdiction gating</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>Server-side event tracking and conversion measurement architecture</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                <Link
                  to="/services/google-ads"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 hover:text-amber-200 transition-colors"
                >
                  <span>Google Ads Policy</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/services/meta-ads"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-300 hover:text-purple-200 transition-colors"
                >
                  <span>Meta Ads Framework</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Section K: Search Measurement & Conversion Funnel ───────── */}
      <Section variant="subtle" spacing="lg">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <FadeIn>
              <div className="type-eyebrow mb-3">Attribution &amp; CRO</div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 leading-tight">
                From Impression to Qualified Revenue
              </h2>
              <p className="type-body text-slate-600 mt-4 leading-relaxed">
                Rankings mean nothing without commercial attribution. We map every search query through a deterministic conversion funnel.
              </p>
            </FadeIn>
          </div>

          {/* 7-Stage Funnel Flow (igaming.md Section K) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 max-w-6xl mx-auto mb-8">
            {MEASUREMENT_FUNNEL.map((step, idx) => (
              <div
                key={step.stage}
                className="relative p-4 rounded-xl bg-white border border-slate-200/90 flex flex-col justify-between group hover:border-purple-300 hover:shadow-sm transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] font-bold text-purple-700 px-1.5 py-0.5 rounded bg-purple-50">
                      0{idx + 1}
                    </span>
                    {idx < MEASUREMENT_FUNNEL.length - 1 && (
                      <span className="hidden lg:inline text-slate-300 group-hover:text-purple-400">→</span>
                    )}
                  </div>
                  <div className="font-heading font-bold text-sm text-slate-900 mb-1">
                    {step.stage}
                  </div>
                  <p className="text-[11px] text-slate-500 leading-tight">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs text-slate-500 font-medium">
              Cookieless server attribution • Custom BigQuery pipelines • First-party conversion signals
            </p>
          </div>
        </Container>
      </Section>

      {/* ── Section L: Phased Engineering Journey (6 Stages) ─────────── */}
      <Section variant="white" spacing="lg">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <div className="type-eyebrow mb-3">Structured Methodology</div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 leading-tight">
                Phased Engineering Journey
              </h2>
              <p className="type-body text-slate-500 mt-4 leading-relaxed">
                Every engagement follows an explicit programmatic flow: Diagnose → Architect → Build → Grow → Measure → Compound. No guesswork, no black boxes.
              </p>
            </FadeIn>
          </div>

          {/* 6-Step Process Rail (igaming.md Section L) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {PROCESS.map((step, idx) => (
              <div
                key={step.n}
                className="relative p-6 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col justify-between hover:border-purple-300 hover:bg-purple-50/20 hover:shadow-sm transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black text-purple-600/50">
                      {step.n}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-purple-600/40" />
                  </div>
                  <h3 className="font-heading font-bold text-base text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>STAGE 0{idx + 1}</span>
                  <span>ACTIVE</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── 7. Strategic Principles Section ─────────────────────────── */}
      <Section variant="white" spacing="lg">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <div className="type-eyebrow mb-3">Our Methodology</div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 leading-tight">
                How We Think About Search &amp; Growth
              </h2>
              <p className="type-body text-slate-500 mt-4 leading-relaxed">
                Strategic principles that separate durable market leaders from volatile, update-vulnerable platforms.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {METHODOLOGY_PRINCIPLES.map((principle, idx) => (
              <MotionCard
                key={principle.number}
                delay={idx * 70}
                variant="default"
                className={`p-6 ${idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className="flex items-baseline justify-between mb-3 border-b border-slate-100 pb-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-purple-600 font-mono">
                    {principle.number}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    {principle.tagline}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
                  {principle.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {principle.desc}
                </p>
              </MotionCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── 8. Authoritative Knowledge Base / Resources ────────────── */}
      <Section variant="subtle" spacing="lg">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <div className="type-eyebrow mb-3">Resource Center</div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 leading-tight">
                Authoritative Engineering Guides
              </h2>
              <p className="type-body text-slate-500 mt-4 leading-relaxed">
                In-depth technical blueprints, audit checklists, and market breakdowns written for engineers, founders, and growth leaders.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
            {FEATURED_RESOURCES.map((resource, idx) => (
              <MotionCard key={resource.path} delay={idx * 80} variant="interactive" className="p-6">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                      <span className="font-semibold text-purple-700 bg-purple-50 border border-purple-200/60 px-2.5 py-0.5 rounded text-[11px] uppercase tracking-wider">
                        {resource.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>{resource.readTime}</span>
                      </span>
                    </div>
                    <h3 className="font-heading font-bold text-base text-slate-900 mb-3 line-clamp-2">
                      {resource.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-5">
                      {resource.desc}
                    </p>
                  </div>

                  <Link
                    to={resource.path}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 hover:text-purple-800 transition-colors pt-4 border-t border-slate-100"
                  >
                    <span>Read Technical Blueprint</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </MotionCard>
            ))}
          </div>

          <div className="text-center">
            <Button to="/resources" variant="outline" size="md">
              Explore All 10 Technical Guides &amp; Insights →
            </Button>
          </div>
        </Container>
      </Section>

      {/* ── 9. Common Questions / FAQ ───────────────────────────────── */}
      <Section variant="white" spacing="lg">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <FadeIn>
                <div className="type-eyebrow mb-3">Technical FAQ</div>
                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 leading-tight">
                  Frequently Asked Questions
                </h2>
              </FadeIn>
            </div>
            <FadeIn delay={100}>
              <FAQAccordion items={HOMEPAGE_FAQS} defaultOpen={0} />
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── 10. Final Closing CTA ───────────────────────────────────── */}
      <section className="bg-hero-atmosphere text-white py-20 lg:py-28 relative overflow-hidden border-t border-slate-800">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-purple-600/10 blur-[140px]" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="type-eyebrow text-purple-300">Ready to Scale</div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              Tell Us Where Your Site Is Today. We’ll Show You the Next Growth Opportunities.
            </h2>
            <p className="type-body-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              A senior search architect reviews your platform DOM tree, crawl budget, parameter configuration, and competitive keyword gap. No automated report — an actual engineering diagnostic.
            </p>

            <div className="flex flex-wrap items-center gap-4 justify-center pt-4">
              <Button
                to="/free-seo-audit"
                variant="gold"
                size="lg"
                icon={<Search className="w-4 h-4" />}
                onClick={() => trackEvent('cta_click', { cta_name: 'free_seo_audit', cta_location: 'bottom_cta' })}
              >
                Request Free SEO Audit
              </Button>
              <Button
                to="/book-call"
                variant="dark"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
                onClick={() => trackEvent('cta_click', { cta_name: 'book_strategy_call', cta_location: 'bottom_cta' })}
              >
                Book a Strategy Call
              </Button>
              <a
                href="https://wa.me/919341436937"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-lg shadow-emerald-950/30 transition-all duration-200 hover:-translate-y-0.5"
                onClick={() => trackEvent('cta_click', { cta_name: 'whatsapp_direct', cta_location: 'bottom_cta' })}
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            <p className="text-xs text-slate-400 pt-2">
              Strict 24-hour turnaround • No automated templates • Direct senior advisory
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
