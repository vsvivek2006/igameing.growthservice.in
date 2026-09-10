import React from 'react';
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
import NotFound from './NotFound';

export const ServiceIndustryDetailPage: React.FC = () => {
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

  const breadcrumbItems = [
    { label: 'Industries', path: '/industries' },
    { label: industry.name, path: `/industries/${industry.slug}` },
    { label: `${service.shortName} Solutions` },
  ];

  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        canonicalPath={`/industries/${industry.slug}/${service.slug}`}
        structuredData={[
          buildBreadcrumbSchema(breadcrumbItems),
          buildServiceIndustrySchema(
            service.name,
            industry.name,
            seo.description,
            seo.canonical
          ),
          buildFAQSchema(matrix.specificFAQs),
        ]}
      />

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[500px] h-[400px] rounded-full bg-purple-600/10 blur-[100px]" />
          <div className="absolute bottom-0 left-1/3 w-[400px] h-[300px] rounded-full bg-amber-500/10 blur-[80px]" />
        </div>

        <Container className="relative z-10">
          <div className="mb-6">
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

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-5 leading-tight">
              {service.name} for{' '}
              <span className="bg-gradient-to-r from-purple-400 via-amber-300 to-amber-400 bg-clip-text text-transparent">
                {industry.name}
              </span>
            </h1>

            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              {matrix.uniqueValue}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                variant="amber"
                size="lg"
                href="/free-seo-audit"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
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
                variant="secondary"
                size="lg"
                href="/book-call"
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
          </div>
        </Container>
      </section>

      {/* ── Conversion Focus Bar ──────────────────────────────────── */}
      <div className="bg-slate-900 border-y border-slate-800 text-slate-300 py-4">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm">
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span className="font-semibold text-white">Conversion Focus:</span>
              <span>{matrix.conversionFocus}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Strict Regulatory & Platform Compliance Standards</span>
            </div>
          </div>
        </Container>
      </div>

      {/* ── Industry Specific Challenges ──────────────────────────── */}
      <Section variant="white" spacing="lg">
        <Container>
          <div className="max-w-2xl mb-12">
            <Badge variant="rose" size="sm" className="mb-3">
              Technical Friction
            </Badge>
            <h2 className="font-heading font-extrabold text-2xl lg:text-3xl text-slate-900 mb-3">
              Why Generic {service.shortName} Fails in {industry.name}
            </h2>
            <p className="text-slate-600">
              Standard digital agencies treat {industry.name.toLowerCase()} like SaaS or e-commerce.
              These specific technical and regulatory roadblocks require dedicated architectural solutions.
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

      {/* ── Specific Approach & Architecture ──────────────────────── */}
      <Section variant="slate" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="purple" size="sm" className="mb-3">
                Tailored Methodology
              </Badge>
              <h2 className="font-heading font-extrabold text-2xl lg:text-3xl text-slate-900 mb-5 leading-tight">
                Our {industry.name} {service.shortName} Roadmap
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                {matrix.specificApproach}
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <TrendingUp className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Topical Clustering:</strong> Deep entity-driven hubs satisfying both search bot crawlers and discerning users.
                  </span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <Zap className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Execution Velocity:</strong> Continuous deployment of schema, technical optimizations, and verified content assets.
                  </span>
                </div>
              </div>
            </div>

            {/* Deliverables Box */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <h3 className="font-heading font-bold text-lg text-slate-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span>Verified Deliverables for {industry.shortName}</span>
              </h3>
              <ul className="space-y-3.5">
                {matrix.specificDeliverables.map((del) => (
                  <li key={del} className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600 flex-shrink-0 mt-2" />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Regulatory & Platform Notice ──────────────────────────── */}
      <div className="bg-amber-50/70 border-y border-amber-200/70 py-6">
        <Container>
          <div className="max-w-4xl mx-auto flex items-start gap-4">
            <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs text-amber-950/80 leading-relaxed">
              <span className="font-bold text-amber-950">Compliance & Jurisdictional Notice: </span>
              Growth strategies, technical SEO implementations, and search architecture for {industry.name} {service.name} are provided strictly subject to applicable regional legislation and platform guidelines. We partner exclusively with legally licensed and compliant entities. We do not support black-hat tactics, cloaking, or regulatory circumvention.
            </div>
          </div>
        </Container>
      </div>

      {/* ── FAQ Section ───────────────────────────────────────────── */}
      {matrix.specificFAQs.length > 0 && (
        <Section variant="white" spacing="lg">
          <Container>
            <div className="max-w-2xl mx-auto text-center mb-10">
              <Badge variant="purple" size="sm" className="mb-3">
                Industry Specific Q&A
              </Badge>
              <h2 className="font-heading font-extrabold text-2xl lg:text-3xl text-slate-900 mb-3">
                Frequently Asked Questions: {industry.shortName} {service.shortName}
              </h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <FAQAccordion
                items={matrix.specificFAQs.map((f) => ({
                  question: f.q,
                  answer: f.a,
                }))}
              />
            </div>
          </Container>
        </Section>
      )}

      {/* ── Internal Link Graph / Cross-Links ──────────────────────── */}
      <Section variant="slate" spacing="md">
        <Container>
          <div className="border-t border-slate-200 pt-8">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
              Explore Related {industry.shortName} Capabilities
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

      {/* ── Contextual CTA ────────────────────────────────────────── */}
      <Section variant="dark" spacing="lg">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <Badge variant="amber" size="sm" className="mb-4">
                Ready to Scale?
              </Badge>
              <h2 className="font-heading font-extrabold text-3xl lg:text-4xl text-white mb-4">
                Dominate {industry.name} Search Results
              </h2>
              <p className="text-slate-300 mb-8 max-w-xl mx-auto">
                Schedule a confidential consultation with our technical SEO architects. We will audit your current positioning and model your organic growth trajectory.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="amber"
                  size="lg"
                  href="/free-seo-audit"
                  icon={<ArrowRight className="w-4 h-4" />}
                  iconPosition="right"
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
                  variant="secondary"
                  size="lg"
                  href="/book-call"
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
      </Section>
    </>
  );
};

export default ServiceIndustryDetailPage;
