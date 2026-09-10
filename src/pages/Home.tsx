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
  ChevronRight,
  Zap,
  Shield,
  Globe,
  Layers,
  BookOpen,
  Check,
} from 'lucide-react';
import { SEOHead } from '../seo';
import { buildOrganizationSchema, buildWebSiteSchema } from '../seo/schema';
import { Container, Section, Button, FAQAccordion } from '../components/ui';
import { FadeIn, MotionCard } from '../components/animations';
import { trackEvent } from '../analytics';
import { getFeaturedServices } from '../data/servicesData';
import { getAllIndustries } from '../data/industriesData';

const HERO_STATS = [
  { value: '8', label: 'High-Competition Verticals' },
  { value: '12', label: 'Specialist Growth Services' },
  { value: 'SEO-first', label: 'Every Engagement' },
  { value: '24h', label: 'Diagnostic Delivery' },
];

const WHAT_WE_DO = [
  {
    icon: TrendingUp,
    title: 'SEO for Competitive Markets',
    desc: 'Technical SEO, content strategy, and authority development engineered for industries that cannot afford to lose the organic channel.',
    link: '/services/seo',
    ctaText: 'Explore SEO Strategy',
  },
  {
    icon: Code2,
    title: 'SEO-First Website Development',
    desc: 'Websites built with performance, crawlability, and conversion architecture from the specification stage — not retrofitted after launch.',
    link: '/services/website-development',
    ctaText: 'Review Web Architecture',
  },
  {
    icon: BarChart3,
    title: 'Paid Acquisition',
    desc: 'Google Ads and Meta Ads management for industries where policy compliance and account architecture determine whether campaigns run at all.',
    link: '/services/google-ads',
    ctaText: 'Explore Paid Compliance',
  },
  {
    icon: Target,
    title: 'Conversion Optimisation',
    desc: 'Systematic A/B testing and funnel analysis that converts more of the traffic you already have without increasing acquisition cost.',
    link: '/services/conversion-optimization',
    ctaText: 'Analyze Funnel CRO',
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

const PROCESS = [
  { n: '01', title: 'Diagnostic', desc: 'Technical audit, competitive gap analysis, and keyword architecture mapping provide the factual baseline.' },
  { n: '02', title: 'Strategy', desc: 'Phased SEO roadmap prioritised by leverage and realistic timeline. No vague promises — specific deliverables and milestones.' },
  { n: '03', title: 'Foundations', desc: 'Technical infrastructure, site architecture, and on-page signals — the layer that makes everything else work.' },
  { n: '04', title: 'Growth Engine', desc: 'Content at the quality level competitive SERPs require, authority development, and conversion architecture.' },
  { n: '05', title: 'Compound', desc: 'Monthly reporting, iteration based on performance data, and continuous expansion of the keyword footprint.' },
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
];

export const Home: React.FC = () => {
  const featuredServices = getFeaturedServices();
  const industries = getAllIndustries();

  return (
    <>
      <SEOHead
        title="SEO & Digital Growth for High-Competition Industries — iGaming Growth"
        description="Specialist SEO, website development, and digital marketing for gaming, casino, financial, and adult industry businesses. Technical SEO, content strategy, and performance marketing for the markets that fight hardest for organic visibility."
        canonicalPath="/"
        jsonLd={[buildOrganizationSchema(), buildWebSiteSchema()]}
      />

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white overflow-hidden min-h-[calc(100vh-80px)] flex items-center">
        {/* Ambient decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 right-1/4 w-[600px] h-[500px] rounded-full bg-purple-600/12 blur-[120px]" />
          <div className="absolute bottom-20 left-1/4 w-[500px] h-[400px] rounded-full bg-violet-600/10 blur-[100px]" />
          <div className="absolute top-1/2 left-0 w-[300px] h-[300px] rounded-full bg-blue-600/8 blur-[80px]" />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'linear-gradient(#a78bfa 1px, transparent 1px), linear-gradient(to right, #a78bfa 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <Container className="relative py-24 lg:py-32 xl:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <FadeIn>
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/15 border border-purple-500/20 mb-8">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-xs font-bold text-purple-200 tracking-wider uppercase">
                    Specialist Digital Agency
                  </span>
                </div>

                <h1 className="font-heading font-extrabold text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.05] mb-6">
                  SEO & Digital Growth for{' '}
                  <span className="text-gradient-purple">High-Competition</span>{' '}
                  Industries
                </h1>

                <p className="text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
                  We build organic search visibility, technical SEO infrastructure, and performance marketing systems for gaming, casino, financial, and adult industry businesses — the markets where standard agency approaches consistently fail.
                </p>

                <div className="flex flex-wrap gap-4 mb-10">
                  <Link
                    to="/free-seo-audit"
                    onClick={() => trackEvent('cta_click', { cta_name: 'free_seo_audit', cta_location: 'hero' })}
                    className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-extrabold text-base hover:from-amber-400 hover:to-orange-400 transition-all duration-200 shadow-xl shadow-amber-500/25 hover:-translate-y-1"
                  >
                    <Search className="w-5 h-5" />
                    Get a Free SEO Audit
                  </Link>
                  <Link
                    to="/book-call"
                    onClick={() => trackEvent('cta_click', { cta_name: 'book_strategy_call', cta_location: 'hero' })}
                    className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-white/20 text-white font-bold text-base hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
                  >
                    Book a Strategy Call
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Trust line */}
                <div className="flex flex-wrap items-center gap-5 text-xs text-slate-400">
                  {[
                    'Compliance-aware strategy',
                    'No ranking guarantees',
                    'Sustainable methods only',
                    'Honest reporting',
                  ].map((t) => (
                    <span key={t} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      {t}
                    </span>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Stats panel */}
            <div className="lg:col-span-5">
              <FadeIn delay={200}>
                <div className="grid grid-cols-2 gap-4">
                  {HERO_STATS.map((s, idx) => (
                    <div
                      key={s.label}
                      className={`p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm ${idx === 0 ? 'col-span-2 md:col-span-1' : ''}`}
                    >
                      <div className="text-3xl font-extrabold font-heading text-white mb-1">{s.value}</div>
                      <div className="text-xs text-slate-400 font-medium">{s.label}</div>
                    </div>
                  ))}
                  {/* CTA card */}
                  <div className="col-span-2 p-6 rounded-2xl bg-gradient-to-br from-purple-600/20 to-violet-600/20 border border-purple-500/30">
                    <p className="text-sm text-purple-200 mb-3 leading-relaxed">
                      Competing in gaming, finance, or adult categories? We understand the specific SEO landscape.
                    </p>
                    <Link
                      to="/industries"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
                    >
                      See our industry expertise <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* ── What We Do ─────────────────────────────────────────────── */}
      <Section variant="white" spacing="lg">
        <Container>
          <div className="max-w-2xl mx-auto text-center mb-14">
            <FadeIn>
              <div className="type-eyebrow mb-3">Our Services</div>
              <h2 className="font-heading font-extrabold text-4xl lg:text-5xl text-slate-900 leading-tight">
                What We Build for You
              </h2>
              <p className="text-lg text-slate-500 mt-4 leading-relaxed">
                An integrated growth system: organic SEO, technical infrastructure, paid acquisition, and conversion architecture — working together, not in silos.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WHAT_WE_DO.map((item, idx) => {
              const Icon = item.icon;
              return (
                <MotionCard key={item.title} delay={idx * 80} variant="interactive">
                  <div className="h-full flex flex-col">
                    <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed flex-1 mb-5">{item.desc}</p>
                    <Link
                      to={item.link}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-600 hover:text-purple-800 transition-colors"
                    >
                      {item.ctaText} <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </MotionCard>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <FadeIn>
              <Button to="/services" variant="primary" size="lg">
                All Services <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── Industries ─────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 py-20 lg:py-28">
        <Container>
          <div className="max-w-2xl mx-auto text-center mb-14">
            <FadeIn>
              <div className="type-eyebrow text-purple-400 mb-3">Industries</div>
              <h2 className="font-heading font-extrabold text-4xl lg:text-5xl text-white leading-tight">
                Expertise in the Markets That Matter
              </h2>
              <p className="text-slate-400 mt-4 text-lg leading-relaxed">
                We don't try to serve every industry. We go deep in the verticals where specialist knowledge makes the actual difference.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.map((industry, idx) => (
              <FadeIn key={industry.slug} delay={idx * 50}>
                <Link
                  to={`/industries/${industry.slug}`}
                  className="group block p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="font-heading font-bold text-sm text-white mb-2 group-hover:text-purple-300 transition-colors leading-snug">
                    {industry.name}
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                    {industry.seoChallenges[0]?.title}
                  </p>
                  <div className="mt-3 flex items-center gap-1 text-[10px] font-bold text-purple-400 uppercase tracking-wider group-hover:gap-2 transition-all">
                    Explore <ChevronRight className="w-3 h-3" />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          <div className="text-center mt-10">
            <FadeIn>
              <Link
                to="/industries"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white font-bold text-sm hover:bg-white/10 transition-all duration-200"
              >
                View All Industries <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ── Why Specialised ────────────────────────────────────────── */}
      <Section variant="white" spacing="lg">
        <Container>
          <div className="max-w-2xl mx-auto text-center mb-14">
            <FadeIn>
              <div className="type-eyebrow mb-3">Why Specialised SEO</div>
              <h2 className="font-heading font-extrabold text-4xl lg:text-5xl text-slate-900 leading-tight">
                Why Standard Agencies Don't Work in These Markets
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {WHY_SPECIALISED.map((item, idx) => {
              const Icon = item.icon;
              return (
                <MotionCard key={item.title} delay={idx * 70} variant="default">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-purple-600" />
                  </div>
                  <h3 className="font-heading font-bold text-base text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </MotionCard>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* ── Our Process ────────────────────────────────────────────── */}
      <Section variant="subtle" spacing="lg">
        <Container>
          <div className="max-w-2xl mx-auto text-center mb-14">
            <FadeIn>
              <div className="type-eyebrow mb-3">Our Process</div>
              <h2 className="font-heading font-extrabold text-4xl text-slate-900 leading-tight">
                How We Work
              </h2>
              <p className="text-slate-500 mt-4 leading-relaxed">
                Every engagement follows a structured programme. No guesswork, no black boxes, no undocumented activity.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
            {PROCESS.map((step, idx) => (
              <MotionCard key={step.n} delay={idx * 80} variant="default">
                <div className="text-4xl font-extrabold font-heading text-purple-100 mb-3">{step.n}</div>
                <h3 className="font-heading font-bold text-slate-900 text-base mb-2">{step.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
              </MotionCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── How We Think: Methodology ──────────────────────────────── */}
      <Section variant="white" spacing="lg">
        <Container>
          <div className="max-w-2xl mx-auto text-center mb-14">
            <FadeIn>
              <div className="type-eyebrow mb-3">Our Methodology</div>
              <h2 className="font-heading font-extrabold text-4xl lg:text-5xl text-slate-900 leading-tight">
                How We Think About Search & Growth
              </h2>
              <p className="text-slate-500 mt-4 text-lg leading-relaxed">
                Strategic principles that separate durable market leaders from volatile, update-vulnerable platforms.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {METHODOLOGY_PRINCIPLES.map((principle, idx) => (
              <MotionCard key={principle.number} delay={idx * 70} variant="default" className={idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''}>
                <div className="flex items-baseline justify-between mb-3 border-b border-slate-100 pb-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-purple-600 font-mono">{principle.number}</span>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">{principle.tagline}</span>
                </div>
                <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">{principle.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{principle.desc}</p>
              </MotionCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Trust & Transparency ───────────────────────────────────── */}
      <Section variant="subtle" spacing="lg">
        <Container>
          <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white p-8 md:p-12 border border-purple-500/20 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold uppercase tracking-wider mb-4">
                  <Shield className="w-3.5 h-3.5 text-emerald-400" /> Transparent Operations
                </div>
                <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white leading-tight mb-4">
                  Built on Technical Depth, Not Fabricated Proof
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  We don't publish manufactured client logos, synthetic 5-star badges, or impossible 30-day ranking guarantees. In high-competition niches, credibility comes from demonstrable technical expertise and measurable delivery.
                </p>
                <div className="flex items-center gap-3">
                  <Link
                    to="/free-seo-audit"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold text-xs hover:from-amber-400 hover:to-orange-400 transition-all"
                  >
                    Request Technical Diagnostic <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Code-Level Diagnostics',
                    desc: 'Every audit inspects raw DOM trees, server log files, and crawl graphs—not generic automated exports.',
                  },
                  {
                    title: 'Verifiable White-Hat Standards',
                    desc: 'Zero PBNs, zero cloaking, zero link schemes. We protect domain equity and withstand algorithm updates.',
                  },
                  {
                    title: 'First-Party Attribution',
                    desc: 'Cookieless server-side tracking, GTM data layers, and GA4 custom events so conversion attribution is factual.',
                  },
                  {
                    title: 'Senior-Level Engagement',
                    desc: 'You work directly with experienced search architects and developers, not junior account coordinators.',
                  },
                ].map((pillar) => (
                  <div key={pillar.title} className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-2 text-amber-400 font-bold text-sm mb-1.5">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      {pillar.title}
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">{pillar.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Featured Services ───────────────────────────────────────── */}
      <Section variant="white" spacing="md">
        <Container>
          <div className="max-w-2xl mx-auto text-center mb-12">
            <FadeIn>
              <div className="type-eyebrow mb-3">Core Services</div>
              <h2 className="font-heading font-extrabold text-3xl text-slate-900 leading-tight">
                Where Most Clients Start
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredServices.slice(0, 4).map((svc, idx) => {
              const ctaLabel =
                svc.slug === 'seo'
                  ? 'Explore Organic SEO'
                  : svc.slug === 'technical-seo'
                  ? 'Fix Technical Foundations'
                  : svc.slug === 'content-strategy'
                  ? 'Review Content Strategy'
                  : svc.slug === 'website-development'
                  ? 'Inspect Web Architecture'
                  : `Explore ${svc.shortName}`;

              return (
                <MotionCard key={svc.slug} delay={idx * 60} variant="interactive">
                  <div className="h-full flex flex-col">
                    <h3 className="font-heading font-bold text-slate-900 text-base mb-2">{svc.shortName}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed flex-1 mb-4">{svc.tagline}</p>
                    <Link
                      to={`/services/${svc.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-600 hover:text-purple-800 transition-colors mt-auto"
                    >
                      {ctaLabel} <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </MotionCard>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* ── Resource Authority ─────────────────────────────────────── */}
      <Section variant="white" spacing="lg">
        <Container>
          <div className="max-w-2xl mx-auto text-center mb-14">
            <FadeIn>
              <div className="type-eyebrow mb-3">Knowledge Base</div>
              <h2 className="font-heading font-extrabold text-4xl text-slate-900 leading-tight">
                Authoritative Engineering Guides
              </h2>
              <p className="text-slate-500 mt-4 text-lg leading-relaxed">
                In-depth technical blueprints, audit checklists, and market breakdowns written for engineers, founders, and growth leaders.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {FEATURED_RESOURCES.map((resource, idx) => (
              <MotionCard key={resource.path} delay={idx * 80} variant="interactive">
                <div className="h-full flex flex-col">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                    <span className="font-semibold text-purple-600 bg-purple-50 px-2 py-0.5 rounded text-[11px] uppercase tracking-wider">{resource.category}</span>
                    <span className="flex items-center gap-1"><BookOpen className="w-3 h-3" /> {resource.readTime}</span>
                  </div>
                  <h3 className="font-heading font-bold text-base text-slate-900 mb-3 line-clamp-2">{resource.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed flex-1 mb-5">{resource.desc}</p>
                  <Link
                    to={resource.path}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 hover:text-purple-800 transition-colors mt-auto"
                  >
                    Read Technical Guide <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </MotionCard>
            ))}
          </div>

          <div className="text-center mt-10">
            <FadeIn>
              <Link
                to="/resources"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 text-slate-800 font-bold text-sm hover:bg-slate-50 transition-all duration-200"
              >
                Browse All 10 Technical Guides & Insights <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── FAQ ────────────────────────────────────────────────────── */}
      <Section variant="subtle" spacing="lg">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <FadeIn>
                <div className="type-eyebrow mb-3">FAQ</div>
                <h2 className="font-heading font-extrabold text-3xl text-slate-900 leading-tight">
                  Common Questions
                </h2>
              </FadeIn>
            </div>
            <FadeIn delay={100}>
              <FAQAccordion items={HOMEPAGE_FAQS} defaultOpen={0} />
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── Final CTA ──────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 py-20 text-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="type-eyebrow text-purple-400">Get Started</div>
            <h2 className="font-heading font-extrabold text-4xl lg:text-5xl text-white leading-tight">
              Understand Your SEO Position — Free
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              A senior specialist reviews your site against your target keywords and competitive landscape. No automated tool report. An actual diagnostic.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/free-seo-audit"
                onClick={() => trackEvent('cta_click', { cta_name: 'free_seo_audit', cta_location: 'bottom_cta' })}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-extrabold text-base hover:from-amber-400 hover:to-orange-400 transition-all duration-200 shadow-xl shadow-amber-500/25 hover:-translate-y-1"
              >
                <Search className="w-5 h-5" />
                Request Free SEO Audit
              </Link>
              <Link
                to="/book-call"
                onClick={() => trackEvent('cta_click', { cta_name: 'book_strategy_call', cta_location: 'bottom_cta' })}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white font-bold text-base hover:bg-white/10 transition-all duration-200"
              >
                Book a Strategy Call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <p className="text-xs text-slate-500">
              No ranking guarantees. No spam. No obligation.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
