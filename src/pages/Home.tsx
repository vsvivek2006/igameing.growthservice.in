import React, { useState, useEffect } from 'react';
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
  ChevronRight,
  MousePointer,
  FileText,
  AlertTriangle,
  Network,
  X,
  BarChart2,
  FileSearch,
} from 'lucide-react';
import { SEOHead } from '../seo';
import { buildOrganizationSchema, buildWebSiteSchema } from '../seo/schema';
import { Container, Section, Button, FAQAccordion, HeroArchitectureVisual } from '../components/ui';
import { trackEvent } from '../analytics';
import { PRICING_CATEGORIES, PRICING_DISCLAIMER } from '../data/pricingData';
import { ENGAGEMENT_PROCESS, PROCESS_PROOFS, COMPLIANCE_COMMITMENTS, COMPARISON_ROWS } from '../data/trustData';
import useInView from '../hooks/useInView';

// ─── Reusable Reveal wrapper ──────────────────────────────────────────────────
function Reveal({
  children,
  direction = 'up',
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  direction?: 'up' | 'left' | 'right' | 'scale';
  delay?: number;
  className?: string;
}) {
  const [ref, isInView] = useInView<HTMLDivElement>();
  const dirClass = {
    up: 'reveal-up',
    left: 'reveal-left',
    right: 'reveal-right',
    scale: 'reveal-scale',
  }[direction];
  return (
    <div
      ref={ref}
      className={`${dirClass} ${isInView ? 'in-view' : ''} ${delay ? `delay-${delay}` : ''} ${className}`}
    >
      {children}
    </div>
  );
}

// ─── Animated word rotator in hero ───────────────────────────────────────────
const ROTATING_WORDS = ['iGaming', 'Casino', 'Trading', 'Financial', 'Cricket Gaming'];
function WordRotator() {
  const [idx, setIdx] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setIdx((i) => (i + 1) % ROTATING_WORDS.length);
        setAnimating(false);
      }, 300);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <span
      className="text-gradient-gold inline-block"
      style={{
        opacity: animating ? 0 : 1,
        transform: animating ? 'translateY(-8px)' : 'translateY(0)',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
        minWidth: '10ch',
        display: 'inline-block',
        textAlign: 'left',
      }}
    >
      {ROTATING_WORDS[idx]}
    </span>
  );
}

// ─── Animated counter pill ────────────────────────────────────────────────────
function CounterPill({
  value,
  label,
  color = 'purple',
}: {
  value: string;
  label: string;
  color?: 'purple' | 'gold' | 'blue';
}) {
  const colorMap = {
    purple: 'bg-purple-500/10 border-purple-500/30 text-purple-300',
    gold: 'bg-amber-500/10 border-amber-500/30 text-amber-300',
    blue: 'bg-blue-500/10 border-blue-500/30 text-blue-300',
  };
  return (
    <div
      className={`inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl border backdrop-blur-sm ${colorMap[color]} animate-float-slow`}
    >
      <span className="text-xl font-extrabold font-heading">{value}</span>
      <span className="text-xs font-medium opacity-80">{label}</span>
    </div>
  );
}

// ─── Pricing Card ─────────────────────────────────────────────────────────────
function PricingCard({ tier }: { tier: (typeof PRICING_CATEGORIES)[number]['tiers'][number] }) {
  return (
    <div
      className={`relative flex flex-col rounded-3xl p-7 h-full transition-all duration-300 ${
        tier.featured
          ? 'pricing-card-featured text-white'
          : 'bg-white border border-slate-200 hover:border-purple-300 gradient-border-card'
      }`}
    >
      {tier.featured && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 text-[10px] font-extrabold uppercase tracking-widest shadow-glow-gold-sm whitespace-nowrap">
          Most Popular
        </div>
      )}

      <div className="mb-5">
        <div
          className={`text-xs font-bold uppercase tracking-widest mb-1 ${
            tier.featured ? 'text-purple-300' : 'text-purple-600'
          }`}
        >
          {tier.name}
        </div>
        <p className={`text-xs leading-relaxed ${tier.featured ? 'text-slate-300' : 'text-slate-500'}`}>
          {tier.tagline}
        </p>
      </div>

      <div className="mb-6">
        <div className="flex items-baseline gap-2">
          <span className={`text-3xl font-extrabold font-heading ${tier.featured ? 'text-white' : 'text-slate-900'}`}>
            {tier.priceINR}
          </span>
          {tier.priceINR !== 'Custom' && (
            <span className={`text-sm font-semibold ${tier.featured ? 'text-slate-300' : 'text-slate-500'}`}>
              / {tier.priceUSD}
            </span>
          )}
        </div>
        <div className={`text-xs mt-1 ${tier.featured ? 'text-slate-400' : 'text-slate-400'}`}>
          {tier.billingNote}
        </div>
      </div>

      <ul className="space-y-2.5 mb-8 flex-1">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-xs">
            <CheckCircle2
              className={`w-4 h-4 flex-shrink-0 mt-0.5 ${tier.featured ? 'text-amber-400' : 'text-purple-500'}`}
            />
            <span className={tier.featured ? 'text-slate-200' : 'text-slate-700'}>{f}</span>
          </li>
        ))}
        {tier.notIncluded?.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-xs opacity-50">
            <X className={`w-4 h-4 flex-shrink-0 mt-0.5 ${tier.featured ? 'text-slate-400' : 'text-slate-400'}`} />
            <span className={tier.featured ? 'text-slate-400' : 'text-slate-500'}>{f}</span>
          </li>
        ))}
      </ul>

      <Link
        to={tier.ctaPath}
        onClick={() => trackEvent('cta_click', { cta_name: tier.id, cta_location: 'pricing_card' })}
        className={`w-full flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-bold transition-all duration-200 ${
          tier.featured
            ? 'bg-gradient-to-r from-amber-500 to-orange-400 text-slate-950 hover:shadow-glow-gold-sm hover:-translate-y-0.5'
            : 'bg-purple-600 hover:bg-purple-700 text-white hover:-translate-y-0.5'
        }`}
      >
        {tier.cta} <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}

// ─── FAQ data ─────────────────────────────────────────────────────────────────
const HOME_FAQS = [
  {
    question: 'What industries do you work with?',
    answer:
      'We serve 8 specialist verticals: iGaming platforms, casino operators, cricket and fantasy sports gaming, Yono/rummy/card gaming, color prediction and color trading platforms, stock market and financial trading portals, and adult/escort services (B2B marketing only). We do not serve generic consumer brands.',
  },
  {
    question: 'Do you guarantee page 1 rankings?',
    answer:
      'No. Search engine rankings are determined by Google and Bing algorithms — not by us. We commit to delivering specific process deliverables (technical audits, architecture implementation, content production, authority development) and reporting on measurable signals. Any agency that guarantees specific rankings is making a claim they cannot control.',
  },
  {
    question: 'Can you run Google Ads for gaming or adult-industry businesses?',
    answer:
      'Advertising eligibility depends on your specific business model, the markets you target, your licence or certification status, and current platform policy. We conduct a pre-engagement eligibility assessment before any paid acquisition engagement begins. We do not guarantee advertising access and we do not position ourselves as a way to bypass platform restrictions.',
  },
  {
    question: 'How long before I see organic results?',
    answer:
      'Technical SEO improvements (indexation, crawl efficiency, Core Web Vitals) typically show measurable improvement within 4–8 weeks. Keyword ranking and organic traffic growth in competitive verticals typically becomes visible within 3–6 months. Authority development compounds over 6–18 months. We set realistic expectations based on your current baseline after the diagnostic.',
  },
  {
    question: 'What is included in the free SEO audit?',
    answer:
      'Our complimentary technical audit covers: Core Web Vitals and performance, crawl budget and indexation analysis, canonical and redirect architecture, keyword gap analysis (top 10 competitors), authority profile review (domain equity and toxic link risk), and a prioritised remediation roadmap. It is conducted manually by a senior SEO engineer, not an automated tool export.',
  },
  {
    question: 'Do you work with new platforms that have no existing rankings?',
    answer:
      'Yes. A significant portion of our engagements are with new or recently launched platforms building organic presence from zero. We design architecture-first strategies that establish the technical foundation, content authority, and internal structure needed to scale.',
  },
];

// ─── Main Component ───────────────────────────────────────────────────────────
export const HomePage: React.FC = () => {
  const [activePricingTab, setActivePricingTab] = useState<string>('seo');

  const activePricingCategory = PRICING_CATEGORIES.find((c) => c.id === activePricingTab)!;

  return (
    <>
      <SEOHead
        title="iGaming Growth — Specialist B2B Digital Growth Agency for High-Competition Verticals"
        description="Technical SEO, website development, paid acquisition, and conversion optimisation for iGaming, casino, trading, financial, and adult-industry businesses. Engineering-led. Compliance-aware."
        canonicalPath="/"
        jsonLd={[buildOrganizationSchema(), buildWebSiteSchema()]}
      />

      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center bg-navy-950 overflow-hidden">
        {/* Atmospheric background */}
        <div className="absolute inset-0 bg-hero-atmosphere" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-purple-600/15 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-violet-800/10 blur-[100px] pointer-events-none" />
        <div className="absolute top-1/3 -left-20 w-[300px] h-[300px] rounded-full bg-amber-500/5 blur-[80px] pointer-events-none" />

        {/* Decorative grid dots */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(167,139,250,0.3) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <Container className="relative z-10 py-28 lg:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — copy */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-8 animate-fade-in"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                B2B Growth Agency · High-Competition Verticals
              </div>

              <h1
                className="type-display text-white mb-6 animate-fade-in"
                style={{ animationDelay: '100ms' }}
              >
                The Growth Engine for{' '}
                <WordRotator />
                {' '}Brands
              </h1>

              <p
                className="text-lg lg:text-xl text-slate-300 leading-relaxed mb-10 max-w-xl animate-fade-in"
                style={{ animationDelay: '200ms' }}
              >
                We build technical SEO infrastructure, conversion-optimised websites, and compliant paid acquisition systems for iGaming operators, casino platforms, financial trading apps, and other high-competition digital businesses. Engineering-first. Compliance-aware. Zero vanity metrics.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 animate-fade-in"
                style={{ animationDelay: '300ms' }}
              >
                <Button
                  to="/free-seo-audit"
                  variant="gold"
                  size="lg"
                  className="w-full sm:w-auto justify-center"
                  icon={<Zap className="w-4 h-4" />}
                  onClick={() => trackEvent('cta_click', { cta_name: 'free_seo_audit', cta_location: 'hero' })}
                >
                  Get Free SEO Audit
                </Button>
                <Button
                  to="/book-call"
                  variant="outline"
                  size="lg"
                  className="border-navy-700 text-white hover:bg-navy-800/60"
                  onClick={() => trackEvent('cta_click', { cta_name: 'book_call', cta_location: 'hero' })}
                >
                  Book Strategy Call
                </Button>
              </div>

              {/* Stat pills */}
              <div
                className="flex flex-wrap gap-3 animate-fade-in"
                style={{ animationDelay: '400ms' }}
              >
                <CounterPill value="8" label="Specialist Verticals" color="purple" />
                <CounterPill value="12" label="Growth Disciplines" color="gold" />
                <CounterPill value="100%" label="White-Hat" color="blue" />
              </div>
            </div>

            {/* Right — 3D Architecture Visualizer Terminal */}
            <div className="hidden lg:block animate-fade-in" style={{ animationDelay: '200ms' }}>
              <HeroArchitectureVisual />
            </div>
          </div>
        </Container>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 animate-bounce-subtle">
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent" />
        </div>
      </section>

      {/* ── 2. TRUST TICKER ─────────────────────────────────────────────── */}
      <section className="py-5 bg-navy-900/80 border-y border-navy-800/60 overflow-hidden">
        <div className="relative">
          <div className="ticker-track gap-0">
            {[
              'Technical SEO Engineering',
              'Core Web Vitals Optimisation',
              'Crawl Budget Management',
              'Structured Data Pipelines',
              'Authority Development',
              'Programmatic SEO',
              'JavaScript Rendering SEO',
              'Digital PR',
              'Conversion Optimisation',
              'Policy-Compliant Paid Ads',
              'Content Architecture',
              'Analytics & Attribution',
              // duplicate for seamless loop
              'Technical SEO Engineering',
              'Core Web Vitals Optimisation',
              'Crawl Budget Management',
              'Structured Data Pipelines',
              'Authority Development',
              'Programmatic SEO',
              'JavaScript Rendering SEO',
              'Digital PR',
              'Conversion Optimisation',
              'Policy-Compliant Paid Ads',
              'Content Architecture',
              'Analytics & Attribution',
            ].map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-3 px-6 text-xs font-semibold text-slate-400 whitespace-nowrap"
              >
                <span className="w-1 h-1 rounded-full bg-purple-500/60 flex-shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. SERVICES PREVIEW ─────────────────────────────────────────── */}
      <Section variant="white" spacing="lg">
        <Container>
          <Reveal direction="up" className="max-w-2xl mb-14">
            <div className="type-eyebrow mb-4">What We Build</div>
            <h2 className="type-h2 text-slate-900 mb-5">
              12 Specialist Growth Disciplines
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Every service we deliver is calibrated to the specific competitive dynamics of high-competition digital verticals — gaming, casino, financial trading, and regulated adult industries. We do not apply mainstream agency frameworks to markets they were never designed for.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: TrendingUp,
                title: 'Technical SEO Infrastructure',
                desc: 'Crawl budget engineering, JavaScript rendering analysis, Core Web Vitals, canonical architecture, and structured data pipelines designed for large, dynamic, policy-sensitive platforms.',
                path: '/services/technical-seo',
                metric: '200-point audit',
                color: 'purple',
                delay: 0,
              },
              {
                icon: Search,
                title: 'Organic SEO Strategy',
                desc: 'End-to-end organic growth strategy — keyword architecture, content cluster design, E-E-A-T calibration for YMYL verticals, and internal linking graph modelling.',
                path: '/services/seo',
                metric: 'Full funnel organic',
                color: 'violet',
                delay: 100,
              },
              {
                icon: Code2,
                title: 'SEO-First Website Development',
                desc: 'React, Next.js, and WordPress builds with SEO specification completed before design begins. Performance, crawlability, and conversion architecture are built-in — not retrofitted.',
                path: '/services/website-development',
                metric: 'LCP ≤ 2.5s target',
                color: 'blue',
                delay: 200,
              },
              {
                icon: FileText,
                title: 'Content Strategy & Production',
                desc: 'Editorial content strategy meeting E-E-A-T standards for gaming, financial, and adult-industry verticals. Content planned against search intent, not word count targets.',
                path: '/services/content-strategy',
                metric: 'E-E-A-T calibrated',
                color: 'indigo',
                delay: 300,
              },
              {
                icon: Globe,
                title: 'Authority & Link Acquisition',
                desc: 'Genuine editorial placements, digital PR campaigns, and quality-first link acquisition. No private blog networks, no automated outreach, no paid link schemes.',
                path: '/services/link-building',
                metric: 'Editorial quality only',
                color: 'emerald',
                delay: 400,
              },
              {
                icon: Target,
                title: 'Conversion Optimisation (CRO)',
                desc: 'Behaviour analytics, A/B testing design, and funnel improvement for gaming registration flows, deposit funnels, trading sign-ups, and B2B lead conversion.',
                path: '/services/conversion-optimization',
                metric: 'Data-driven UX',
                color: 'amber',
                delay: 500,
              },
            ].map((s) => {
              const Icon = s.icon;
              const colorMap: Record<string, { icon: string; badge: string; metric: string }> = {
                purple: { icon: 'text-purple-600 bg-purple-50', badge: 'bg-purple-100 text-purple-700', metric: 'text-purple-700' },
                violet: { icon: 'text-violet-600 bg-violet-50', badge: 'bg-violet-100 text-violet-700', metric: 'text-violet-700' },
                blue: { icon: 'text-blue-600 bg-blue-50', badge: 'bg-blue-100 text-blue-700', metric: 'text-blue-700' },
                indigo: { icon: 'text-indigo-600 bg-indigo-50', badge: 'bg-indigo-100 text-indigo-700', metric: 'text-indigo-700' },
                emerald: { icon: 'text-emerald-600 bg-emerald-50', badge: 'bg-emerald-100 text-emerald-700', metric: 'text-emerald-700' },
                amber: { icon: 'text-amber-600 bg-amber-50', badge: 'bg-amber-100 text-amber-700', metric: 'text-amber-700' },
              };
              const c = colorMap[s.color];
              return (
                <Reveal key={s.title} direction="up" delay={s.delay}>
                  <Link
                    to={s.path}
                    className="group flex flex-col h-full p-7 rounded-3xl border border-slate-200 bg-white hover:border-purple-300 hover:shadow-card-hover gradient-border-card transition-all duration-300 hover:-translate-y-1.5"
                    onClick={() => trackEvent('cta_click', { cta_name: s.path, cta_location: 'home_services' })}
                  >
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-11 h-11 rounded-2xl flex items-center justify-center ${c.icon}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${c.badge}`}>
                        {s.metric}
                      </span>
                    </div>
                    <h3 className="font-heading font-bold text-base text-slate-900 mb-2.5 group-hover:text-purple-700 transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed flex-1">{s.desc}</p>
                    <div className={`mt-5 flex items-center gap-1.5 text-xs font-bold ${c.metric} group-hover:gap-2.5 transition-all`}>
                      Explore <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          <Reveal direction="up" delay={200} className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl border-2 border-purple-200 text-purple-700 font-bold text-sm hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all duration-200"
            >
              View All 12 Services <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </Container>
      </Section>

      {/* ── 4. INDUSTRIES GRID ──────────────────────────────────────────── */}
      <Section variant="subtle" spacing="lg">
        <Container>
          <Reveal direction="up" className="max-w-2xl mb-14">
            <div className="type-eyebrow mb-4">8 Specialist Verticals</div>
            <h2 className="type-h2 text-slate-900 mb-5">
              Built for High-Competition, Policy-Sensitive Markets
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We do not serve generic consumer categories. Every vertical we operate in has specific SEO dynamics, compliance boundaries, advertising restrictions, and content standards that require deep specialist knowledge — not adapted mainstream frameworks.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { slug: 'igaming', name: 'iGaming Platforms', cat: 'Gaming', desc: 'Online gaming portals and fantasy sports platforms requiring aggressive organic growth within compliance boundaries.', color: 'from-purple-600 to-violet-700', badge: 'text-purple-300 bg-purple-500/15 border-purple-500/30', delay: 0 },
              { slug: 'casino', name: 'Casino Operators', cat: 'Gaming', desc: 'Casino SEO requires YMYL expertise, authority depth, and compliance-aware content at a level most agencies cannot reach.', color: 'from-violet-600 to-indigo-700', badge: 'text-violet-300 bg-violet-500/15 border-violet-500/30', delay: 100 },
              { slug: 'cricket-gaming', name: 'Cricket / Fantasy Gaming', cat: 'Skill Gaming', desc: 'India\'s fastest-growing fantasy sports category — highly competitive keywords, mobile-first architecture, aggressive organic strategy.', color: 'from-blue-600 to-cyan-700', badge: 'text-blue-300 bg-blue-500/15 border-blue-500/30', delay: 200 },
              { slug: 'yono-gaming', name: 'Yono / Card Gaming', cat: 'Skill Gaming', desc: 'Rummy, Ludo, and card gaming platforms competing in extremely dense SERPs — requires technical authority and precise content strategy.', color: 'from-cyan-600 to-teal-700', badge: 'text-cyan-300 bg-cyan-500/15 border-cyan-500/30', delay: 300 },
              { slug: 'color-prediction', name: 'Color Prediction', cat: 'Skill Gaming', desc: 'High-velocity trading game platforms requiring programmatic SEO architecture and compliant acquisition channels.', color: 'from-emerald-600 to-green-700', badge: 'text-emerald-300 bg-emerald-500/15 border-emerald-500/30', delay: 400 },
              { slug: 'color-trading', name: 'Color Trading', cat: 'Skill Gaming', desc: 'Trading prediction platforms operating in competitive search environments with specific indexation and content compliance requirements.', color: 'from-teal-600 to-emerald-700', badge: 'text-teal-300 bg-teal-500/15 border-teal-500/30', delay: 500 },
              { slug: 'stock-market', name: 'Financial / Trading', cat: 'Finance', desc: 'Stock market and financial trading portals — YMYL-tier content standards, trust-signal architecture, and E-E-A-T authority development.', color: 'from-amber-600 to-orange-700', badge: 'text-amber-300 bg-amber-500/15 border-amber-500/30', delay: 600 },
              { slug: 'escort-services', name: 'Adult Services (B2B)', cat: 'Adult', desc: 'Professional B2B marketing, SEO, and web development for adult-industry businesses. Strict non-explicit editorial approach throughout.', color: 'from-rose-600 to-pink-700', badge: 'text-rose-300 bg-rose-500/15 border-rose-500/30', delay: 700 },
            ].map((ind) => (
              <Reveal key={ind.slug} direction="up" delay={ind.delay}>
                <Link
                  to={`/industries/${ind.slug}`}
                  className="group block relative rounded-3xl overflow-hidden h-full min-h-[220px] hover:-translate-y-1.5 transition-all duration-300 hover-glow-purple"
                >
                  {/* Gradient bg */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${ind.color} opacity-90 group-hover:opacity-100 transition-opacity`} />
                  <div className="absolute inset-0 bg-dark-mesh opacity-30" />

                  <div className="relative z-10 p-6 h-full flex flex-col">
                    <span className={`self-start text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded-full border ${ind.badge} mb-4`}>
                      {ind.cat}
                    </span>
                    <h3 className="font-heading font-bold text-white text-base mb-2 group-hover:text-amber-300 transition-colors">
                      {ind.name}
                    </h3>
                    <p className="text-white/70 text-xs leading-relaxed flex-1">{ind.desc}</p>
                    <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-white/60 group-hover:text-white group-hover:gap-3 transition-all">
                      Explore <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal direction="up" delay={300} className="text-center mt-10">
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl border-2 border-slate-300 text-slate-700 font-bold text-sm hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-200"
            >
              View All Industries <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </Container>
      </Section>

      {/* ── 5. WHY SPECIALIST ───────────────────────────────────────────── */}
      <Section variant="white" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <Reveal direction="left">
              <div className="type-eyebrow mb-4">Why Specialist</div>
              <h2 className="type-h2 text-slate-900 mb-6">
                Generalist Agencies Consistently Fail in High-Competition Verticals
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                The problem is not effort — it is that generalised SEO frameworks, content strategies, and paid acquisition approaches were not designed for industries with higher authority thresholds, stricter content standards, advertising policy restrictions, and YMYL-level scrutiny. Applying a mainstream agency playbook to gaming, financial, or adult-industry digital marketing produces predictable underperformance.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Our entire methodology is built around these specific conditions: the crawl budget characteristics of large dynamic platforms, the E-E-A-T requirements of YMYL content, the certification and compliance dependencies of paid acquisition in regulated markets, and the authority dynamics of competitive gaming SERPs.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Shield, text: 'Compliance built into strategy design from Day 1 — not discovered after execution' },
                  { icon: Layers, text: 'Technical SEO depth that standard agencies rarely reach: crawl logs, JS rendering, schema pipelines' },
                  { icon: Globe, text: 'Content calibrated to E-E-A-T and YMYL requirements of your specific vertical' },
                  { icon: BarChart3, text: 'Authority development through editorial channels — not automated link schemes' },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.text} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-xl bg-purple-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-purple-600" />
                      </div>
                      <p className="text-slate-700 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </Reveal>

            {/* Comparison table */}
            <Reveal direction="right">
              <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-sm bg-white">
                <div className="min-w-[520px]">
                  <div className="grid grid-cols-3 bg-slate-900 text-white text-xs font-bold uppercase tracking-wider">
                    <div className="p-4 border-r border-slate-800">Aspect</div>
                    <div className="p-4 border-r border-slate-800 text-slate-400">Generalist</div>
                    <div className="p-4 text-amber-300">Specialist</div>
                  </div>
                  {COMPARISON_ROWS.map((row, i) => (
                    <div
                      key={row.aspect}
                      className={`grid grid-cols-3 text-xs ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'} border-t border-slate-100`}
                    >
                      <div className="p-4 font-semibold text-slate-800 border-r border-slate-100">{row.aspect}</div>
                      <div className="p-4 text-slate-500 border-r border-slate-100 leading-relaxed">{row.generalist}</div>
                      <div className="p-4 text-purple-700 font-medium leading-relaxed bg-purple-50/20">{row.specialist}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ── 6. PROCESS TIMELINE ─────────────────────────────────────────── */}
      <Section variant="subtle" spacing="lg">
        <Container>
          <Reveal direction="up" className="max-w-2xl mx-auto text-center mb-14">
            <div className="type-eyebrow mb-4">How We Work</div>
            <h2 className="type-h2 text-slate-900 mb-5">5-Step Engagement Process</h2>
            <p className="text-slate-600 leading-relaxed">
              Every engagement follows a structured methodology designed to produce measurable outcomes. No black-box execution — you see exactly what is being built, why, and when.
            </p>
          </Reveal>

          <div className="relative">
            {/* Connector line */}
            <div className="hidden lg:block absolute top-12 left-[calc(10%+32px)] right-[calc(10%+32px)] h-px bg-gradient-to-r from-purple-200 via-purple-400 to-purple-200" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {ENGAGEMENT_PROCESS.map((step) => (
                <Reveal key={step.step} direction="up" delay={step.step * 100}>
                  <div className="relative flex flex-col items-start lg:items-center text-left lg:text-center">
                    {/* Step circle */}
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-violet-700 flex items-center justify-center shadow-glow-sm mb-5 flex-shrink-0">
                      <span className="text-xl font-extrabold text-white">{step.step}</span>
                    </div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-purple-600 mb-1">{step.duration}</div>
                    <h3 className="font-heading font-bold text-sm text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-3">{step.description}</p>
                    <div className="inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1">
                      <CheckCircle2 className="w-3 h-3" /> {step.deliverable}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 7. PRICING ──────────────────────────────────────────────────── */}
      <Section variant="white" spacing="lg">
        <Container>
          <Reveal direction="up" className="max-w-2xl mb-10">
            <div className="type-eyebrow mb-4">Transparent Pricing</div>
            <h2 className="type-h2 text-slate-900 mb-5">Investment Ranges</h2>
            <p className="text-slate-600 leading-relaxed">
              We publish indicative pricing ranges so you can assess fit before a conversation. Final investment is scoped after a technical diagnostic. No hidden fees, no lock-in surprises.
            </p>
          </Reveal>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {PRICING_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActivePricingTab(cat.id)}
                className={`px-5 py-2.5 rounded-2xl text-sm font-semibold transition-all duration-200 ${
                  activePricingTab === cat.id
                    ? 'bg-purple-600 text-white shadow-glow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <Reveal direction="up" delay={100} className="mb-4">
            <p className="text-sm text-slate-600">{activePricingCategory.description}</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {activePricingCategory.tiers.map((tier, i) => (
              <Reveal key={tier.id} direction="up" delay={i * 100}>
                <PricingCard tier={tier} />
              </Reveal>
            ))}
            {/* Pad if fewer than 3 tiers */}
            {activePricingCategory.tiers.length === 1 && (
              <>
                <Reveal direction="up" delay={200}>
                  <div className="rounded-3xl border border-dashed border-slate-200 p-7 flex flex-col items-center justify-center text-center min-h-[200px]">
                    <MousePointer className="w-8 h-8 text-slate-300 mb-3" />
                    <p className="text-sm text-slate-400">Add-on: Landing page builds and conversion tracking setup available alongside paid acquisition management.</p>
                  </div>
                </Reveal>
                <Reveal direction="up" delay={300}>
                  <div className="rounded-3xl border border-dashed border-slate-200 p-7 flex flex-col items-center justify-center text-center min-h-[200px]">
                    <AlertTriangle className="w-8 h-8 text-amber-300 mb-3" />
                    <p className="text-sm text-slate-500 font-semibold mb-2">Platform eligibility first</p>
                    <p className="text-xs text-slate-400">All paid acquisition engagements begin with a no-cost eligibility assessment. We confirm what is possible before you commit.</p>
                  </div>
                </Reveal>
              </>
            )}
          </div>

          {/* Disclaimer */}
          <Reveal direction="up" className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-amber-900 leading-relaxed">{PRICING_DISCLAIMER}</p>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ── 8. PROCESS PROOF ────────────────────────────────────────────── */}
      <section className="relative bg-navy-950 overflow-hidden py-24 lg:py-32 border-y border-navy-800/60">
        <div className="absolute inset-0 bg-dark-mesh opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[400px] rounded-full bg-purple-600/10 blur-[100px] pointer-events-none" />

        <Container className="relative z-10">
          <Reveal direction="up" className="max-w-2xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-5">
              Process Transparency
            </div>
            <h2 className="type-h2 text-white mb-5">
              What You Actually Receive
            </h2>
            <p className="text-slate-300 leading-relaxed">
              We do not publish fabricated testimonials or manufactured case studies. Instead, here is exactly what engagements deliver — described with the specificity that lets you evaluate whether our methodology matches your requirements.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            {PROCESS_PROOFS.map((proof, i) => (
              <Reveal key={proof.title} direction="up" delay={i * 150}>
                <div className="gradient-border-card-dark p-7 rounded-3xl h-full flex flex-col group hover:-translate-y-1.5 transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center mb-5">
                    {proof.icon === 'FileSearch' ? (
                      <FileSearch className="w-6 h-6 text-purple-400" />
                    ) : proof.icon === 'Network' ? (
                      <Network className="w-6 h-6 text-purple-400" />
                    ) : (
                      <BarChart2 className="w-6 h-6 text-purple-400" />
                    )}
                  </div>
                  <h3 className="font-heading font-bold text-white text-base mb-3 group-hover:text-amber-300 transition-colors">
                    {proof.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">{proof.description}</p>
                  <ul className="space-y-2 mt-auto">
                    {proof.details.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-xs text-slate-300">
                        <ChevronRight className="w-3.5 h-3.5 text-purple-400 flex-shrink-0 mt-0.5" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Compliance commitments */}
          <Reveal direction="up">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 text-center">
                Our Operating Commitments
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {COMPLIANCE_COMMITMENTS.map((c) => (
                  <div key={c.title} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white mb-1">{c.title}</div>
                      <p className="text-xs text-slate-400 leading-relaxed">{c.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── 9. FAQ ──────────────────────────────────────────────────────── */}
      <Section variant="white" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <Reveal direction="left" className="lg:col-span-2">
              <div className="type-eyebrow mb-4">Frequently Asked</div>
              <h2 className="type-h2 text-slate-900 mb-5">Common Questions</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Specific answers to the questions operators and growth teams ask most frequently before engaging. If your question is not here, contact us directly.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm font-bold text-purple-700 hover:text-purple-900 transition-colors"
              >
                Ask a Direct Question <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>

            <Reveal direction="right" delay={100} className="lg:col-span-3">
              <FAQAccordion items={HOME_FAQS} />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ── 10. FINAL CTA ───────────────────────────────────────────────── */}
      <section className="relative bg-navy-950 overflow-hidden py-24 lg:py-32 border-t border-navy-800/60">
        <div className="absolute inset-0 bg-hero-atmosphere" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-purple-600/20 blur-[120px] pointer-events-none" />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal direction="up">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-8">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                Start With a Free Technical Audit
              </div>
              <h2 className="type-h2 text-white mb-6">
                Ready to Build Something That Compounds?
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
                Tell us about your platform. We will prepare a technical diagnostic, competitive gap analysis, and architectural roadmap — within 48 business hours. No pitch deck. No generic proposal. Actual engineering output.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
                <Button
                  to="/free-seo-audit"
                  variant="gold"
                  size="lg"
                  icon={<Zap className="w-4 h-4" />}
                  onClick={() => trackEvent('cta_click', { cta_name: 'free_seo_audit', cta_location: 'home_final_cta' })}
                >
                  Get Free SEO Audit
                </Button>
                <Button
                  to="/contact"
                  variant="outline"
                  size="lg"
                  className="border-navy-700 text-white hover:bg-navy-800/60"
                  onClick={() => trackEvent('cta_click', { cta_name: 'contact', cta_location: 'home_final_cta' })}
                >
                  Request a Proposal
                </Button>
                <a
                  href="https://wa.me/919341436937"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-md transition-all duration-200 hover:-translate-y-0.5"
                  onClick={() => trackEvent('cta_click', { cta_name: 'whatsapp', cta_location: 'home_final_cta' })}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M11.999 2C6.477 2 2 6.477 2 12c0 1.99.583 3.841 1.594 5.393L2.05 22l4.74-1.524A9.957 9.957 0 0012 21.999c5.523 0 10-4.478 10-10 0-5.523-4.477-10-10.001-10zm0 18.181a8.177 8.177 0 01-4.163-1.135l-.298-.177-3.09.81.825-3.013-.194-.31A8.181 8.181 0 0120.18 12c0 4.518-3.677 8.181-8.181 8.181z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>

              {/* Quick trust points */}
              <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-500">
                {[
                  'No fake rankings promise',
                  '48hr diagnostic response',
                  'Confidential by default',
                  'No lock-in contracts',
                ].map((t) => (
                  <span key={t} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HomePage;
