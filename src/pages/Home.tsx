import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  TrendingUp,
  BarChart3,
  Code2,
  FileText,
  Share2,
  Target,
  CheckCircle2,
  Star,
  ChevronRight,
  Zap,
  Globe,
  Users,
  Award,
} from 'lucide-react';
import { SEOHead, buildWebSiteSchema, buildOrganizationSchema } from '../seo';
import {
  Container,
  Section,
  SectionHeader,
  Card,
  Badge,
  Button,
  DecorativeGrid,
} from '../components/ui';
import { FadeIn, MotionCard } from '../components/animations';
import businessConfig from '../config/business';
import {
  getFeaturedServices,
  getFeaturedCaseStudies,
  getAllIndustryVerticals,
} from '../data/servicesData';

const SERVICE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  TrendingUp,
  BarChart3,
  Code2,
  FileText,
  Share2,
  Target,
};

const SERVICE_COLORS: Record<string, string> = {
  purple: 'from-purple-600 to-violet-700',
  gold: 'from-amber-500 to-orange-600',
  blue: 'from-blue-600 to-cyan-600',
  green: 'from-emerald-500 to-teal-600',
  rose: 'from-rose-500 to-pink-600',
  indigo: 'from-indigo-600 to-blue-700',
};

const SERVICE_BADGE_COLORS: Record<string, string> = {
  purple: 'bg-purple-100 text-purple-700',
  gold: 'bg-amber-100 text-amber-700',
  blue: 'bg-blue-100 text-blue-700',
  green: 'bg-emerald-100 text-emerald-700',
  rose: 'bg-rose-100 text-rose-700',
  indigo: 'bg-indigo-100 text-indigo-700',
};

export const Home: React.FC = () => {
  const featuredServices = getFeaturedServices();
  const caseStudies = getFeaturedCaseStudies();
  const verticals = getAllIndustryVerticals();

  const combinedSchema = [buildWebSiteSchema(), buildOrganizationSchema()];

  return (
    <>
      <SEOHead
        title="iGaming Growth — Digital Growth Agency for Casino & Gaming Brands"
        description="Specialist B2B digital growth agency for iGaming & casino operators. SEO, performance marketing, web development & content strategy that drives player acquisition and revenue."
        canonicalPath="/"
        jsonLd={combinedSchema}
      />

      {/* ═══════════════════════════════════════════════
          HERO — Premium B2B Agency Dark Gradient
      ═══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white">
        <DecorativeGrid opacity={0.08} />

        {/* Ambient orbs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-violet-800/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

        <Container className="relative z-10 py-24 lg:py-36">
          <div className="max-w-4xl mx-auto">
            {/* Pre-headline pill */}
            <FadeIn delay={50}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/15 border border-purple-500/30 backdrop-blur-sm mb-8">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold text-purple-200 tracking-wide uppercase">
                  Specialist iGaming Growth Agency
                </span>
              </div>
            </FadeIn>

            {/* Main headline */}
            <FadeIn delay={150}>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] text-white mb-6">
                Grow Your{' '}
                <span className="relative">
                  <span className="text-gradient-gold">Gaming Brand</span>
                </span>
                <br />
                <span className="text-slate-300">
                  Faster Than the Competition
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={250}>
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mb-10">
                We're the digital growth specialists for casino operators, sportsbooks, fantasy sports
                platforms, and gaming affiliates. SEO, performance marketing, web development, and
                content that converts at scale.
              </p>
            </FadeIn>

            {/* CTA Buttons */}
            <FadeIn delay={350}>
              <div className="flex flex-wrap items-center gap-4 mb-16">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold text-base hover:from-amber-400 hover:to-orange-400 transition-all duration-200 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:-translate-y-0.5"
                >
                  Get a Free Proposal
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/free-seo-audit"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/20 text-white font-semibold text-base hover:border-purple-400/60 hover:bg-white/5 transition-all duration-200"
                >
                  Free SEO Audit
                  <Zap className="w-4 h-4 text-yellow-400" />
                </Link>
                <Link
                  to="/case-studies"
                  className="text-slate-400 text-sm font-medium hover:text-white transition-colors flex items-center gap-1"
                >
                  View Results <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </FadeIn>

            {/* Hero Stats */}
            <FadeIn delay={450}>
              <div className="border-t border-white/10 pt-10 grid grid-cols-2 sm:grid-cols-4 gap-8">
                {businessConfig.heroStats.map((stat, i) => (
                  <div key={i} className="text-center sm:text-left">
                    <div className={`text-3xl lg:text-4xl font-heading font-extrabold mb-1 ${
                      stat.color === 'gold' ? 'text-amber-400' : 'text-white'
                    }`}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════
          TRUST BAR
      ═══════════════════════════════════════════════ */}
      <section className="bg-slate-900 border-y border-slate-800 py-6">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400 text-sm font-medium">
            <span className="text-slate-600 text-xs uppercase tracking-widest">Trusted by iGaming brands in</span>
            {['India 🇮🇳', 'UK 🇬🇧', 'Malta 🇲🇹', 'Canada 🇨🇦', 'UAE 🇦🇪', 'Australia 🇦🇺'].map((m) => (
              <span key={m} className="text-slate-300 font-semibold">{m}</span>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════
          SERVICES — Core Offering Grid
      ═══════════════════════════════════════════════ */}
      <Section variant="white" spacing="lg">
        <Container>
          <SectionHeader
            eyebrow="What We Do"
            title="Full-Stack Growth for iGaming Brands"
            subtitle="From zero organic visibility to category-defining presence. We deliver every growth discipline under one roof, built specifically for the gaming industry."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-12">
            {featuredServices.map((service, idx) => {
              const Icon = SERVICE_ICONS[service.icon] || TrendingUp;
              return (
                <MotionCard key={service.slug} delay={idx * 80} variant="interactive">
                  <Link to={`/services/${service.slug}`} className="block h-full flex flex-col">
                    {/* Icon header */}
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${SERVICE_COLORS[service.color]} flex items-center justify-center mb-5 shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <div className="flex-1">
                      <div className={`inline-block text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded mb-3 ${SERVICE_BADGE_COLORS[service.color]}`}>
                        {service.shortTitle}
                      </div>

                      <h3 className="font-heading font-bold text-xl text-slate-900 mb-2 leading-snug hover:text-purple-600 transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-sm text-slate-500 italic mb-4">{service.tagline}</p>

                      <p className="text-sm text-slate-600 leading-relaxed mb-5">
                        {service.description.slice(0, 160)}…
                      </p>

                      {/* Top features */}
                      <ul className="space-y-1.5 mb-6">
                        {service.features.slice(0, 3).map((f) => (
                          <li key={f} className="flex items-start gap-2 text-xs text-slate-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-sm">
                      <span className="text-xs text-slate-400 font-medium">
                        {service.outcomes[0]}
                      </span>
                      <span className="text-purple-600 font-semibold flex items-center gap-1 text-xs">
                        Learn More <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>
                </MotionCard>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button to="/services" variant="secondary" size="md">
              View All Services →
            </Button>
          </div>
        </Container>
      </Section>

      {/* ═══════════════════════════════════════════════
          CASE STUDIES — Proven Results
      ═══════════════════════════════════════════════ */}
      <Section variant="gradient" spacing="lg">
        <Container>
          <SectionHeader
            eyebrow="Proven Results"
            title="Growth We've Delivered"
            subtitle="Real outcomes for real gaming brands. No vanity metrics — only revenue-driving results."
            className="text-white [&_p]:text-slate-300 [&_span]:text-purple-300"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {caseStudies.map((cs, idx) => (
              <MotionCard key={cs.slug} delay={idx * 100} variant="default">
                <div className="h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="purple" size="sm">{cs.clientType}</Badge>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-slate-900 mb-2 leading-snug">
                    {cs.client}
                  </h3>

                  <p className="text-xs text-slate-500 mb-1 font-semibold uppercase tracking-wider">Challenge</p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{cs.challenge}</p>

                  <div className="mt-auto space-y-2.5 pt-4 border-t border-slate-100">
                    {cs.results.map((r) => (
                      <div key={r.metric} className="flex items-center justify-between">
                        <span className="text-xs text-slate-500">{r.metric}</span>
                        <span className="text-sm font-bold text-emerald-600">{r.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </MotionCard>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button to="/case-studies" variant="gold" size="lg">
              View All Case Studies →
            </Button>
          </div>
        </Container>
      </Section>

      {/* ═══════════════════════════════════════════════
          INDUSTRIES — Who We Serve
      ═══════════════════════════════════════════════ */}
      <Section variant="subtle" spacing="lg">
        <Container>
          <SectionHeader
            eyebrow="Who We Serve"
            title="Built for Every iGaming Vertical"
            subtitle="Whether you're launching a new casino, scaling an affiliate network, or breaking into a new market — we have the vertical expertise."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {verticals.map((v, idx) => (
              <MotionCard key={v.slug} delay={idx * 60} variant="default">
                <Link to={`/industries/${v.slug}`} className="block group">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl leading-none">{v.icon}</div>
                    <div>
                      <h3 className="font-heading font-bold text-base text-slate-900 mb-1 group-hover:text-purple-600 transition-colors">
                        {v.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed mb-3">{v.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {v.examples.slice(0, 2).map((ex) => (
                          <span key={ex} className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded font-medium">
                            {ex}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </MotionCard>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button to="/industries" variant="outline" size="md">
              Explore All Verticals →
            </Button>
          </div>
        </Container>
      </Section>

      {/* ═══════════════════════════════════════════════
          WHY US — Differentiators
      ═══════════════════════════════════════════════ */}
      <Section variant="white" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div>
                <div className="inline-block text-xs font-bold uppercase tracking-widest text-purple-600 bg-purple-50 px-3 py-1 rounded mb-4">
                  Why iGaming Growth
                </div>
                <h2 className="font-heading font-extrabold text-3xl lg:text-4xl text-slate-900 leading-tight mb-6">
                  The Agency That Speaks{' '}
                  <span className="text-gradient-gold">iGaming Fluently</span>
                </h2>
                <p className="text-base text-slate-600 leading-relaxed mb-8">
                  Generic agencies learn gaming on your budget. We come pre-loaded with regulatory knowledge,
                  vertical network connections, and compliance-safe strategies that work in the most competitive
                  digital niches on earth.
                </p>

                <div className="space-y-4">
                  {[
                    {
                      icon: Globe,
                      title: 'Regulated Market Expertise',
                      desc: 'UK, Malta, India, Canada — we know the compliance constraints and work within them, not around them.',
                    },
                    {
                      icon: TrendingUp,
                      title: 'ROI-First Philosophy',
                      desc: "Every engagement tracked to FTDs, revenue, or qualified leads. Vanity metrics don't pay salaries.",
                    },
                    {
                      icon: Users,
                      title: 'Dedicated iGaming Team',
                      desc: 'Ex-operator and affiliate veterans who understand the funnel from impression to depositing player.',
                    },
                    {
                      icon: Award,
                      title: 'Partnership Model, Not Vendor',
                      desc: "Your growth is our growth. We operate as an embedded team, not an outsourced supplier.",
                    },
                  ].map((point) => {
                    const Icon = point.icon;
                    return (
                      <div key={point.title} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                          <div className="font-heading font-bold text-slate-900 text-sm mb-0.5">{point.title}</div>
                          <div className="text-sm text-slate-500 leading-relaxed">{point.desc}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </FadeIn>

            {/* Stats panel */}
            <FadeIn delay={200}>
              <div className="bg-gradient-to-br from-slate-900 to-purple-950 rounded-3xl p-8 lg:p-10 text-white space-y-8">
                <div className="text-center pb-6 border-b border-white/10">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <div className="text-4xl font-heading font-extrabold text-white mb-1">
                    {businessConfig.ratings.displayString}
                  </div>
                  <div className="text-xs text-slate-400 max-w-48 mx-auto leading-relaxed">
                    {businessConfig.ratings.sourceText}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: 'Gaming Brands Scaled', value: '50+' },
                    { label: 'Countries Served', value: '12+' },
                    { label: 'Avg. Traffic Growth', value: '6x' },
                    { label: 'Years in iGaming', value: `${new Date().getFullYear() - businessConfig.establishedYear + 1}+` },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <div className="text-3xl font-heading font-extrabold text-amber-400 mb-1">{s.value}</div>
                      <div className="text-xs text-slate-400">{s.label}</div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10 space-y-3">
                  <p className="text-xs text-slate-400 text-center mb-4">Start with a free audit</p>
                  <Link
                    to="/free-seo-audit"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-colors"
                  >
                    <Zap className="w-4 h-4" />
                    Get Free SEO Audit
                  </Link>
                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl border border-white/20 text-white font-semibold text-sm hover:bg-white/5 transition-colors"
                  >
                    Book a Strategy Call
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ═══════════════════════════════════════════════
          BOTTOM CTA
      ═══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-700 via-violet-800 to-indigo-900 py-20">
        <DecorativeGrid opacity={0.1} />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent" />
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white space-y-6">
            <FadeIn>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight">
                Ready to Outgrow Your Competition?
              </h2>
            </FadeIn>
            <FadeIn delay={100}>
              <p className="text-lg text-purple-200 max-w-xl mx-auto">
                Get a custom growth strategy for your gaming brand — free, with no obligation.
                We'll show you exactly where you're leaving revenue on the table.
              </p>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-base transition-all duration-200 shadow-xl shadow-amber-500/30 hover:-translate-y-0.5"
                >
                  Get a Free Proposal
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/25 text-white font-semibold text-base hover:bg-white/10 transition-all duration-200"
                >
                  See Our Results
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={300}>
              <p className="text-xs text-purple-300/70">
                No retainer required for initial audit · Response within 24 hours · No agency jargon
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
