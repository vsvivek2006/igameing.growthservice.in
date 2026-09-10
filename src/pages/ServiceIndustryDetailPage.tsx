import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  ChevronRight,
  ShieldCheck,
  TrendingUp,
  Target,
  Clock,
  Zap,
  Check,
  Layers,
  Sparkles,
  Award,
} from 'lucide-react';
import { SEOHead } from '../seo';
import {
  buildBreadcrumbSchema,
  buildServiceIndustrySchema,
  buildFAQSchema,
} from '../seo/schema';
import {
  Container,
  Section,
  Badge,
  Button,
  FAQAccordion,
  Breadcrumb,
} from '../components/ui';
import { FadeIn, MotionCard } from '../components/animations';
import { resolveServiceIndustryPage } from '../selectors/uniquenessEngine';
import { getRelatedMatrixCrossLinks } from '../selectors/linkGraph';
import { getServiceIndustrySEO } from '../seo/metadataFactory';
import { trackEvent } from '../analytics/tracking';
import { PRICING_CATEGORIES, PRICING_DISCLAIMER } from '../data/pricingData';
import NotFound from './NotFound';

export const ServiceIndustryDetailPage: React.FC = () => {
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  const { industrySlug, serviceSlug } = useParams<{
    industrySlug: string;
    serviceSlug: string;
  }>();

  if (!industrySlug || !serviceSlug) {
    return <NotFound />;
  }

  const pageData = resolveServiceIndustryPage(industrySlug, serviceSlug);

  // Content guardrail: fail fast with 404 if no deliberate combination or uniqueness threshold fails
  if (!pageData || pageData.validationStatus === 'invalid') {
    return <NotFound />;
  }

  const { service, industry, matrix } = pageData;
  const seo = getServiceIndustrySEO(industry, service, matrix);
  const crossLinks = getRelatedMatrixCrossLinks(industrySlug, serviceSlug);

  // Resolve matching pricing category
  const pricingCat = PRICING_CATEGORIES.find((c) => {
    if (service.slug === 'website-development') return c.id === 'web-dev';
    if (service.slug === 'conversion-optimization' || service.slug === 'analytics') return c.id === 'cro-analytics';
    if (service.slug === 'google-ads' || service.slug === 'meta-ads') return c.id === 'paid-media';
    return c.id === 'seo';
  }) || PRICING_CATEGORIES[0];

  const breadcrumbItems = [
    { label: 'Industries', path: '/industries' },
    { label: industry.name, path: `/industries/${industry.slug}` },
    { label: `${service.shortName} Solutions` },
  ];

  // Comprehensive FAQs combining matrix FAQs with specialized vertical architecture queries
  const allFAQs = [
    ...matrix.specificFAQs,
    {
      q: `What Core Web Vitals targets do you commit to for ${industry.name} platforms?`,
      a: `We engineer specifically for Google Core Web Vitals thresholds under strict mobile testing: Largest Contentful Paint (LCP) ≤ 2.2s, Interaction to Next Paint (INP) ≤ 180ms, and Cumulative Layout Shift (CLS) ≤ 0.05. For dynamic gaming and financial catalogs, we enforce DOM node trimming and asset priority hinting to prevent layout instability.`,
    },
    {
      q: `How do you safeguard our domain against regulatory changes or Google algorithmic volatility?`,
      a: `Our strategies use exclusively white-hat technical foundations: structured Schema.org entity mapping, server-side rendered crawlable HTML, authoritative informational topical hubs, and clean jurisdictional tagging. By eliminating spammy redirects, doorway pages, and toxic PBN links, your organic footprint builds compounding equity that survives search engine updates.`,
    },
    {
      q: `How does our in-house engineering team collaborate with your SEO architects?`,
      a: `We operate as an engineering extension, not a disconnected report-generating agency. Deliverables include code-level Pull Requests (PRs), robots.txt and edge server configs, Next.js / React hydration optimizations, and direct weekly syncs with your lead developers.`,
    },
  ];

  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        canonicalPath={`/industries/${industry.slug}/${service.slug}`}
        jsonLd={[
          buildBreadcrumbSchema(breadcrumbItems),
          buildServiceIndustrySchema(
            service.name,
            industry.name,
            seo.description,
            seo.canonical
          ),
          buildFAQSchema(allFAQs),
        ]}
      />

      {/* ── 1. Hero Section ───────────────────────────────────────── */}
      <section className="relative bg-navy-950 bg-hero-atmosphere text-white overflow-hidden py-16 sm:py-20 lg:py-28 border-b border-navy-800/80">
        <div className="absolute inset-0 bg-dark-mesh opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[320px] sm:w-[500px] h-[300px] sm:h-[400px] rounded-full bg-purple-600/10 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-[260px] sm:w-[400px] h-[200px] sm:h-[300px] rounded-full bg-amber-500/10 blur-[80px] pointer-events-none" />

        <Container className="relative z-10">
          <div className="mb-6 overflow-x-auto py-1">
            <Breadcrumb items={breadcrumbItems} variant="light" />
          </div>

          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge variant="purple" size="sm">
                {industry.shortName} Vertical
              </Badge>
              <Badge variant="amber" size="sm">
                Specialist {service.shortName}
              </Badge>
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>{matrix.estimatedTimelineWeeks}</span>
              </div>
            </div>

            <h1 className="type-h1 text-white mb-5">
              {service.name} for{' '}
              <span className="bg-gradient-to-r from-purple-400 via-amber-300 to-amber-400 bg-clip-text text-transparent">
                {industry.name}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl">
              {matrix.uniqueValue}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8">
              <Button
                variant="gold"
                size="lg"
                href="/free-seo-audit"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
                className="w-full sm:w-auto text-center justify-center"
                onClick={() =>
                  trackEvent('cta_click', {
                    cta_name: 'free_seo_audit',
                    cta_location: 'service_industry_hero',
                    industry_slug: industry.slug,
                    service_slug: service.slug,
                  })
                }
              >
                Get Free {industry.shortName} Audit
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/book-call"
                className="w-full sm:w-auto text-center justify-center border-navy-700 text-white hover:bg-navy-800/60"
                onClick={() =>
                  trackEvent('cta_click', {
                    cta_name: 'book_strategy_call',
                    cta_location: 'service_industry_hero',
                    industry_slug: industry.slug,
                    service_slug: service.slug,
                  })
                }
              >
                Book a Strategy Call
              </Button>
            </div>

            {/* Capability Assurance Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-6 border-t border-navy-800/80">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Target LCP</div>
                <div className="text-sm sm:text-base font-extrabold text-emerald-400">&le; 2.2s Mobile</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Methodology</div>
                <div className="text-sm sm:text-base font-extrabold text-white">100% White-Hat</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Delivery Model</div>
                <div className="text-sm sm:text-base font-extrabold text-purple-300">Code PRs + Schema</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Audit SLA</div>
                <div className="text-sm sm:text-base font-extrabold text-amber-400">24 Business Hours</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. Conversion Focus Bar ───────────────────────────────── */}
      <div className="bg-navy-900 border-y border-navy-800 text-slate-300 py-3.5">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm">
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span className="font-semibold text-white">Conversion Target:</span>
              <span className="text-slate-300">{matrix.conversionFocus}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Strict Regulatory &amp; Platform Policy Governance</span>
            </div>
          </div>
        </Container>
      </div>

      {/* ── 3. Industry Specific Challenges ───────────────────────── */}
      <Section variant="white" spacing="lg">
        <Container>
          <div className="max-w-2xl mb-12">
            <Badge variant="rose" size="sm" className="mb-3">
              Technical Friction
            </Badge>
            <h2 className="font-heading font-extrabold text-2xl lg:text-3xl text-slate-900 mb-3">
              Why Generic {service.shortName} Fails in {industry.name}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Standard digital agencies treat {industry.name.toLowerCase()} like general e-commerce or SaaS. In contested verticals, high query volatility, strict crawler filtering, and intense domain competition render standard agency playbooks ineffective.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {matrix.specificChallenges.map((challenge, idx) => (
              <MotionCard key={challenge.title} delay={idx * 100} variant="default">
                <div className="p-6">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center mb-4 text-rose-600">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-base text-slate-900 mb-2">
                    {challenge.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {challenge.description}
                  </p>
                </div>
              </MotionCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── 4. Strategic Sprint Blueprint ─────────────────────────── */}
      <Section variant="slate" spacing="lg">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge variant="purple" size="sm" className="mb-3">
              4-Phase Implementation Framework
            </Badge>
            <h2 className="font-heading font-extrabold text-2xl lg:text-3xl text-slate-900 mb-4">
              Our {industry.shortName} {service.shortName} Execution Sprint
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We execute in disciplined, milestone-driven sprints designed to systematically de-risk your digital architecture, establish crawl dominance, and expand search authority.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative">
              <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-700 font-bold text-xs flex items-center justify-center mb-4">
                01
              </div>
              <h3 className="font-heading font-bold text-base text-slate-900 mb-2">
                Diagnostic &amp; Entity Audit
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Full-scale crawl log analysis, headless browser JS rendering tests, indexation status audit, and competitive authority gap mapping against incumbent operators.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-purple-700">
                Weeks 1–3 Deliverable
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative">
              <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-700 font-bold text-xs flex items-center justify-center mb-4">
                02
              </div>
              <h3 className="font-heading font-bold text-base text-slate-900 mb-2">
                Crawl &amp; Schema Architecture
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Implementation of faceted navigation canonical rules, robots.txt crawl budget isolation, and custom JSON-LD schema linking entities to authoritative knowledge graphs.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-purple-700">
                Weeks 4–7 Deliverable
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative">
              <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-700 font-bold text-xs flex items-center justify-center mb-4">
                03
              </div>
              <h3 className="font-heading font-bold text-base text-slate-900 mb-2">
                Topical Moat &amp; Digital PR
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Deployment of comprehensive technical content hubs, player guides, and compliant editorial PR outreach to establish unassailable domain trust and contextual relevance.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-purple-700">
                Weeks 8–12 Deliverable
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative">
              <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-700 font-bold text-xs flex items-center justify-center mb-4">
                04
              </div>
              <h3 className="font-heading font-bold text-base text-slate-900 mb-2">
                Continuous Algorithmic Defense
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Real-time SERP volatility tracking, Core Web Vitals telemetry monitoring, automated log analysis for bot anomalies, and proactive updates ahead of Google Core updates.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-purple-700">
                Ongoing Engineering Retainer
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 5. Specific Approach & Verified Deliverables ──────────── */}
      <Section variant="white" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="purple" size="sm" className="mb-3">
                Tailored Methodology
              </Badge>
              <h2 className="font-heading font-extrabold text-2xl lg:text-3xl text-slate-900 mb-5 leading-tight">
                Our Architectural Strategy for {industry.name} {service.shortName}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6 text-sm sm:text-base">
                {matrix.specificApproach}
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <TrendingUp className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Topical Clustering &amp; Intent Mapping:</strong> Deep entity-driven hubs satisfying both search engine spiders and discerning players, capturing high-intent commercial terms.
                  </span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <Zap className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Execution Velocity &amp; Engineering PRs:</strong> Direct code changes submitted to your repository to eliminate bottleneck lag and maintain continuous deployment speed.
                  </span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <Layers className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Jurisdictional &amp; Geo-Targeting:</strong> Strict hreflang and localized canonical architecture ensuring legal alignment across diverse regional markets.
                  </span>
                </div>
              </div>
            </div>

            {/* Deliverables Box */}
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h3 className="font-heading font-bold text-lg text-slate-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span>Verified Deliverables for {industry.shortName}</span>
              </h3>
              <ul className="space-y-3.5">
                {matrix.specificDeliverables.map((del) => (
                  <li key={del} className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600 flex-shrink-0 mt-2" />
                    <span className="leading-relaxed">{del}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 6. Transparent Pricing Snapshot ───────────────────────── */}
      <Section variant="slate" spacing="lg">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-8">
            <Badge variant="amber" size="sm" className="mb-3">
              Transparent Commercial Pricing
            </Badge>
            <h2 className="font-heading font-extrabold text-2xl lg:text-3xl text-slate-900 mb-4">
              Engagement Tiers for {service.shortName}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              Clear, transparent monthly retainers with no hidden lock-in contracts. Scope is confirmed following your technical diagnostic session.
            </p>

            {/* Currency Toggle */}
            <div className="inline-flex items-center p-1 rounded-xl bg-white border border-slate-200 shadow-xs">
              <button
                type="button"
                onClick={() => setCurrency('INR')}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  currency === 'INR'
                    ? 'bg-purple-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                INR (₹)
              </button>
              <button
                type="button"
                onClick={() => setCurrency('USD')}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  currency === 'USD'
                    ? 'bg-purple-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                USD ($)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingCat.tiers.map((tier) => (
              <div
                key={tier.id}
                className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all bg-white border ${
                  tier.featured
                    ? 'border-purple-600 ring-2 ring-purple-600/20 shadow-md relative'
                    : 'border-slate-200 shadow-sm'
                }`}
              >
                <div>
                  {tier.featured && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-[11px] font-bold mb-4">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Most Popular</span>
                    </div>
                  )}
                  <h3 className="font-heading font-bold text-lg text-slate-900 mb-1">
                    {tier.name}
                  </h3>
                  <p className="text-xs text-slate-500 mb-4 min-h-[32px] leading-relaxed">
                    {tier.tagline}
                  </p>
                  <div className="mb-4 pb-4 border-b border-slate-100">
                    <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                      {currency === 'INR' ? tier.priceINR : tier.priceUSD}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{tier.billingNote}</div>
                  </div>
                  <ul className="space-y-2.5 mb-6">
                    {tier.features.slice(0, 5).map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  to={tier.ctaPath}
                  variant={tier.featured ? 'primary' : 'outline'}
                  size="md"
                  className="w-full text-center justify-center"
                >
                  {tier.cta}
                </Button>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200/80 text-center">
            <p className="text-xs text-amber-950/80 leading-relaxed font-medium">
              <strong>Transparent Scoping Notice:</strong> {PRICING_DISCLAIMER}
            </p>
          </div>
        </Container>
      </Section>

      {/* ── 7. Regulatory & Compliance Notice ─────────────────────── */}
      <div className="bg-amber-50/70 border-y border-amber-200/70 py-6">
        <Container>
          <div className="max-w-4xl mx-auto flex items-start gap-4">
            <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs text-amber-950/80 leading-relaxed">
              <span className="font-bold text-amber-950">Compliance &amp; Jurisdictional Standard: </span>
              Search architecture and digital growth strategies for {industry.name} {service.name} are provided strictly subject to applicable regional legislation and advertising guidelines. We partner exclusively with legally compliant operators and licensed platforms. We do not support black-hat tactics, cloaking, or regulatory circumvention.
            </div>
          </div>
        </Container>
      </div>

      {/* ── 8. Comprehensive FAQ Section ──────────────────────────── */}
      <Section variant="white" spacing="lg">
        <Container>
          <div className="max-w-2xl mx-auto text-center mb-10">
            <Badge variant="purple" size="sm" className="mb-3">
              Technical Q&amp;A
            </Badge>
            <h2 className="font-heading font-extrabold text-2xl lg:text-3xl text-slate-900 mb-3">
              Frequently Asked Questions: {industry.shortName} {service.shortName}
            </h2>
            <p className="text-slate-600 text-sm">
              Answers to common technical, indexing, and operational questions for this vertical.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion
              items={allFAQs.map((f) => ({
                question: f.q,
                answer: f.a,
              }))}
            />
          </div>
        </Container>
      </Section>

      {/* ── 9. Internal Link Graph / Cross-Links ──────────────────── */}
      <Section variant="slate" spacing="md">
        <Container>
          <div className="border-t border-slate-200 pt-8">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
              Explore Related {industry.shortName} Capabilities &amp; Frameworks
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link
                to={crossLinks.parentIndustryLink.path}
                className="p-4 rounded-xl bg-white border border-slate-200 hover:border-purple-300 hover:shadow-sm transition-all group flex items-center justify-between"
              >
                <div>
                  <div className="text-xs text-purple-600 font-semibold mb-1">Industry Hub</div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                    {crossLinks.parentIndustryLink.title}
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-purple-600 group-hover:translate-x-0.5 transition-all" />
              </Link>

              <Link
                to={crossLinks.parentServiceLink.path}
                className="p-4 rounded-xl bg-white border border-slate-200 hover:border-purple-300 hover:shadow-sm transition-all group flex items-center justify-between"
              >
                <div>
                  <div className="text-xs text-purple-600 font-semibold mb-1">Core Service</div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                    {crossLinks.parentServiceLink.title}
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-purple-600 group-hover:translate-x-0.5 transition-all" />
              </Link>

              {crossLinks.siblingServiceLinks.slice(0, 1).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="p-4 rounded-xl bg-white border border-slate-200 hover:border-purple-300 hover:shadow-sm transition-all group flex items-center justify-between"
                >
                  <div>
                    <div className="text-xs text-purple-600 font-semibold mb-1">Adjacent Vertical</div>
                    <div className="text-sm font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                      {link.title}
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-purple-600 group-hover:translate-x-0.5 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 10. Contextual Bottom CTA ─────────────────────────────── */}
      <section className="relative bg-navy-950 bg-hero-atmosphere text-white py-16 sm:py-20 overflow-hidden border-t border-navy-800/80">
        <div className="absolute inset-0 bg-dark-mesh opacity-20 pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-5">
                <Award className="w-3.5 h-3.5" />
                <span>Enterprise Growth Trajectory</span>
              </div>
              <h2 className="type-h2 text-white mb-4">
                Dominate {industry.name} Search Results
              </h2>
              <p className="text-slate-300 mb-8 max-w-xl mx-auto text-sm leading-relaxed">
                Schedule a confidential consultation with our technical SEO architects. We will audit your current positioning, isolate rendering bottlenecks, and model your organic growth trajectory.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <Button
                  variant="gold"
                  size="lg"
                  href="/free-seo-audit"
                  icon={<ArrowRight className="w-4 h-4" />}
                  iconPosition="right"
                  className="w-full sm:w-auto text-center justify-center"
                  onClick={() =>
                    trackEvent('cta_click', {
                      cta_name: 'free_seo_audit',
                      cta_location: 'service_industry_bottom_cta',
                      industry_slug: industry.slug,
                      service_slug: service.slug,
                    })
                  }
                >
                  Claim Free Technical Audit
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  href="/book-call"
                  className="w-full sm:w-auto text-center justify-center border-navy-700 text-white hover:bg-navy-800/60"
                  onClick={() =>
                    trackEvent('cta_click', {
                      cta_name: 'book_strategy_call',
                      cta_location: 'service_industry_bottom_cta',
                      industry_slug: industry.slug,
                      service_slug: service.slug,
                    })
                  }
                >
                  Book a Strategy Call
                </Button>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ServiceIndustryDetailPage;
