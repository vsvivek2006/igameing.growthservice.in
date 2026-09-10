import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, AlertTriangle, ChevronRight, Shield, Clock } from 'lucide-react';
import { SEOHead } from '../seo';
import { buildBreadcrumbSchema } from '../seo/schema';
import { Container, Section, Button, FAQAccordion, Breadcrumb } from '../components/ui';
import { FadeIn, MotionCard } from '../components/animations';
import { trackEvent } from '../analytics';
import { getIndustryBySlug, getServiceBySlug, INDUSTRY_CATEGORY_LABELS } from '../selectors';
import { getServicesForIndustry, getMatrixEntry } from '../data/industryServiceMatrix';
import type { IndustryVertical } from '../data/industriesData';
import NotFound from './NotFound';

const CATEGORY_COLORS: Record<IndustryVertical['category'], { bg: string; text: string; badge: string }> = {
  gaming: { bg: 'bg-purple-50', text: 'text-purple-700', badge: 'bg-purple-100 text-purple-700' },
  finance: { bg: 'bg-blue-50', text: 'text-blue-700', badge: 'bg-blue-100 text-blue-700' },
  adult: { bg: 'bg-rose-50', text: 'text-rose-700', badge: 'bg-rose-100 text-rose-700' },
  'gaming-skill': { bg: 'bg-amber-50', text: 'text-amber-700', badge: 'bg-amber-100 text-amber-700' },
};

const IndustryPage: React.FC<{ industry: IndustryVertical }> = ({ industry }) => {
  const colors = CATEGORY_COLORS[industry.category];
  const breadcrumbItems = [
    { label: 'Industries', path: '/industries' },
    { label: industry.name },
  ];

  const matrixServiceSlugs = getServicesForIndustry(industry.slug);
  const matrixCombinations = matrixServiceSlugs
    .map((serviceSlug) => {
      const matrixEntry = getMatrixEntry(industry.slug, serviceSlug);
      const service = getServiceBySlug(serviceSlug);
      return { serviceSlug, matrixEntry, service };
    })
    .filter((m) => m.matrixEntry && m.service);

  const recommendedServices = industry.recommendedServices
    .map((slug) => getServiceBySlug(slug))
    .filter(Boolean) as ReturnType<typeof getServiceBySlug>[];

  return (
    <>
      <SEOHead
        title={industry.seo.title}
        description={industry.seo.description}
        canonicalPath={`/industries/${industry.slug}`}
        jsonLd={[buildBreadcrumbSchema(breadcrumbItems)]}
      />

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative bg-navy-950 bg-hero-atmosphere text-white overflow-hidden border-b border-navy-800/80">
        <div className="absolute inset-0 bg-dark-mesh opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[400px] rounded-full bg-purple-600/10 blur-[100px] pointer-events-none" />

        <Container className="relative z-10 py-20 lg:py-28">
          <FadeIn>
            <Breadcrumb items={breadcrumbItems} className="mb-6 text-slate-400" />

            <div className="max-w-3xl">
              <span className={`inline-block text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full mb-5 ${colors.badge}`}>
                {INDUSTRY_CATEGORY_LABELS[industry.category]}
              </span>

              <h1 className="type-h1 text-white mb-5">
                {industry.name}
              </h1>

              <p className="text-xl text-purple-300 font-medium mb-5">
                {industry.tagline}
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <Button
                  to="/free-seo-audit"
                  variant="gold"
                  size="lg"
                  onClick={() => trackEvent('cta_click', { cta_name: 'free_seo_audit', cta_location: 'industry_hero', industry_slug: industry.slug })}
                >
                  Free SEO Audit for {industry.shortName}
                </Button>
                <Button
                  to="/book-call"
                  variant="outline"
                  size="lg"
                  className="border-navy-700 text-white hover:bg-navy-800/60"
                  onClick={() => trackEvent('cta_click', { cta_name: 'book_strategy_call', cta_location: 'industry_hero', industry_slug: industry.slug })}
                >
                  Book a Strategy Call
                </Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ── Overview ────────────────────────────────────────────────── */}
      <Section variant="white" spacing="md">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <FadeIn>
              <div className="type-eyebrow mb-3">Industry Overview</div>
              <h2 className="font-heading font-extrabold text-3xl text-slate-900 mb-5 leading-tight">
                Digital Growth in {industry.shortName}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">{industry.overview}</p>
            </FadeIn>

            <FadeIn delay={150}>
              <div className={`p-7 rounded-3xl border ${industry.category === 'gaming' ? 'border-purple-100' : industry.category === 'finance' ? 'border-blue-100' : industry.category === 'adult' ? 'border-rose-100' : 'border-amber-100'} ${colors.bg}`}>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Market Characteristics</p>
                <p className="text-sm text-slate-700 leading-relaxed">{industry.competitionCharacteristics}</p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── SEO Challenges ──────────────────────────────────────────── */}
      <Section variant="subtle" spacing="md">
        <Container>
          <div className="max-w-2xl mx-auto text-center mb-10">
            <FadeIn>
              <div className="type-eyebrow mb-3">SEO Challenges</div>
              <h2 className="font-heading font-extrabold text-3xl text-slate-900 leading-tight">
                The Specific Challenges in {industry.shortName} SEO
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {industry.seoChallenges.map((c, idx) => (
              <MotionCard key={c.title} delay={idx * 60} variant="default">
                <div className="flex items-start gap-3 mb-3">
                  <AlertTriangle className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                  <h3 className="font-heading font-bold text-slate-900 text-sm leading-snug">{c.title}</h3>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed pl-8">{c.description}</p>
              </MotionCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Technical + Content + Compliance ─────────────────────── */}
      <Section variant="white" spacing="md">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Technical Requirements',
                items: industry.technicalRequirements,
                color: 'text-purple-600',
              },
              {
                title: 'Content Considerations',
                items: industry.contentConsiderations,
                color: 'text-blue-600',
              },
              {
                title: 'Compliance Considerations',
                items: industry.complianceConsiderations,
                color: 'text-amber-600',
              },
            ].map((col) => (
              <FadeIn key={col.title}>
                <div className="h-full p-7 rounded-3xl bg-white border border-slate-200">
                  <h3 className={`font-heading font-bold text-base mb-5 ${col.color}`}>{col.title}</h3>
                  <ul className="space-y-2.5">
                    {col.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Specialized Matrix Blueprints (Group D) ────────────────── */}
      {matrixCombinations.length > 0 && (
        <Section variant="subtle" spacing="md">
          <Container>
            <div className="max-w-2xl mx-auto text-center mb-10">
              <FadeIn>
                <div className="type-eyebrow mb-3">Specialized Blueprints</div>
                <h2 className="font-heading font-extrabold text-3xl text-slate-900 leading-tight">
                  Dedicated {industry.shortName} Growth Solutions
                </h2>
                <p className="text-slate-500 text-sm mt-3 leading-relaxed">
                  Engineered specifically for {industry.name} operational conditions, crawl topologies, and search landscape.
                </p>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {matrixCombinations.map((m, idx) => (
                <MotionCard key={m.serviceSlug} delay={idx * 70} variant="interactive">
                  <div className="h-full flex flex-col">
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                      <span className="font-bold text-purple-600 bg-purple-50 px-2.5 py-0.5 rounded-full text-[11px] uppercase tracking-wider">
                        {m.service.shortName} Blueprint
                      </span>
                      {m.matrixEntry.estimatedTimelineWeeks && (
                        <span className="flex items-center gap-1 text-[11px]">
                          <Clock className="w-3 h-3 text-slate-400" />
                          {m.matrixEntry.estimatedTimelineWeeks.split(' ')[0]} wks
                        </span>
                      )}
                    </div>
                    <h3 className="font-heading font-bold text-slate-900 text-lg mb-2">
                      {industry.shortName} {m.service.name}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-4 flex-1">
                      {m.matrixEntry.uniqueValue}
                    </p>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 mb-4 text-[11px] text-slate-600">
                      <span className="font-semibold text-slate-900">Conversion Target:</span> {m.matrixEntry.conversionFocus}
                    </div>
                    <Link
                      to={`/industries/${industry.slug}/${m.serviceSlug}`}
                      onClick={() => trackEvent('cta_click', { cta_name: 'view_matrix_blueprint', industry_slug: industry.slug, service_slug: m.serviceSlug })}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 hover:text-purple-800 transition-colors mt-auto"
                    >
                      View {industry.shortName} {m.service.shortName} Strategy <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </MotionCard>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* ── Recommended Services ────────────────────────────────────── */}
      {recommendedServices.length > 0 && (
        <Section variant={matrixCombinations.length > 0 ? 'white' : 'subtle'} spacing="md">
          <Container>
            <div className="max-w-2xl mx-auto text-center mb-10">
              <FadeIn>
                <div className="type-eyebrow mb-3">Supporting Capabilities</div>
                <h2 className="font-heading font-extrabold text-3xl text-slate-900 leading-tight">
                  Additional Capabilities for {industry.shortName}
                </h2>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {recommendedServices.map((svc, idx) => {
                if (!svc) return null;
                return (
                  <MotionCard key={svc.slug} delay={idx * 60} variant="interactive">
                    <div className="h-full flex flex-col">
                      <h3 className="font-heading font-bold text-slate-900 text-base mb-2">{svc.shortName}</h3>
                      <p className="text-xs text-slate-500 leading-relaxed flex-1 mb-4">{svc.shortDescription}</p>
                      <Link
                        to={`/services/${svc.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-600 hover:text-purple-800 transition-colors"
                      >
                        Explore {svc.shortName} <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </MotionCard>
                );
              })}
            </div>
          </Container>
        </Section>
      )}

      {/* ── Regulatory & Platform Notice ──────────────────────────── */}
      <div className="bg-amber-50/60 border-y border-amber-200/60 py-6">
        <Container>
          <div className="max-w-4xl mx-auto flex items-start gap-4">
            <Shield className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs text-amber-950/80 leading-relaxed">
              <span className="font-bold text-amber-950">Compliance & Regulatory Notice: </span>
              All search strategies, website architectures, and marketing consulting for {industry.name} are provided strictly where permitted by applicable local laws and relevant platform policies. We collaborate exclusively with verified, authorized operators and do not facilitate unlicensed operations, cloaking, or policy circumvention.
            </div>
          </div>
        </Container>
      </div>

      {/* ── FAQ ────────────────────────────────────────────────────── */}
      {industry.faqs.length > 0 && (
        <Section variant="white" spacing="md">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <FadeIn>
                  <div className="type-eyebrow mb-3">Common Questions</div>
                  <h2 className="font-heading font-extrabold text-3xl text-slate-900">
                    {industry.shortName} SEO: Frequently Asked Questions
                  </h2>
                </FadeIn>
              </div>
              <FadeIn delay={100}>
                <FAQAccordion items={industry.faqs} defaultOpen={0} />
              </FadeIn>
            </div>
          </Container>
        </Section>
      )}

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <section className="relative bg-navy-950 bg-hero-atmosphere text-white py-20 overflow-hidden border-t border-navy-800/80">
        <div className="absolute inset-0 bg-dark-mesh opacity-20 pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider">
              <span>Platform Scalability</span>
            </div>
            <h2 className="type-h2 text-white">
              Scale Your {industry.shortName} Platform Through Organic Search
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed max-w-xl mx-auto">
              Tell us about your current indexing footprint and commercial objectives. We'll map out the technical and content runway required to dominate your category.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-2">
              <Button
                to="/free-seo-audit"
                variant="gold"
                size="lg"
                onClick={() => trackEvent('cta_click', { cta_name: 'free_seo_audit', cta_location: 'industry_bottom_cta', industry_slug: industry.slug })}
              >
                Free SEO Audit
              </Button>
              <Button
                to="/book-call"
                variant="outline"
                size="lg"
                className="border-navy-700 text-white hover:bg-navy-800/60"
                onClick={() => trackEvent('cta_click', { cta_name: 'book_strategy_call', cta_location: 'industry_bottom_cta', industry_slug: industry.slug })}
              >
                Book a Strategy Call
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export const IndustryDetailPage: React.FC = () => {
  const { industrySlug } = useParams<{ industrySlug: string }>();
  const industry = getIndustryBySlug(industrySlug ?? '');

  if (!industry) {
    return <NotFound />;
  }

  return <IndustryPage industry={industry} />;
};

export default IndustryDetailPage;
