import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowRight,
  AlertTriangle,
  ChevronRight,
  Shield,
  Clock,
  Zap,
  CheckCircle2,
} from 'lucide-react';
import { SEOHead } from '../seo';
import { buildBreadcrumbSchema } from '../seo/schema';
import { Container, Section, Button, FAQAccordion, Breadcrumb } from '../components/ui';
import { trackEvent } from '../analytics';
import { getIndustryBySlug, getServiceBySlug, INDUSTRY_CATEGORY_LABELS } from '../selectors';
import { getServicesForIndustry, getMatrixEntry } from '../data/industryServiceMatrix';
import type { IndustryVertical } from '../data/industriesData';
import useInView from '../hooks/useInView';
import NotFound from './NotFound';

const CATEGORY_COLORS: Record<IndustryVertical['category'], { bg: string; text: string; badge: string }> = {
  gaming: { bg: 'bg-purple-50', text: 'text-purple-700', badge: 'bg-purple-100 text-purple-700' },
  finance: { bg: 'bg-blue-50', text: 'text-blue-700', badge: 'bg-blue-100 text-blue-700' },
  adult: { bg: 'bg-rose-50', text: 'text-rose-700', badge: 'bg-rose-100 text-rose-700' },
  'gaming-skill': { bg: 'bg-amber-50', text: 'text-amber-700', badge: 'bg-amber-100 text-amber-700' },
};

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

      {/* ── 1. HERO ──────────────────────────────────────────────────── */}
      <section className="relative bg-navy-950 bg-hero-atmosphere text-white overflow-hidden border-b border-navy-800/80">
        <div className="absolute inset-0 bg-dark-mesh opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[400px] rounded-full bg-purple-600/15 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[300px] rounded-full bg-blue-600/10 blur-[100px] pointer-events-none" />

        <Container className="relative z-10 py-16 sm:py-20 lg:py-28">
          <Breadcrumb items={breadcrumbItems} className="mb-6 text-slate-400" />

          <div className="max-w-4xl">
            <span className={`inline-block text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full mb-5 ${colors.badge}`}>
              {INDUSTRY_CATEGORY_LABELS[industry.category]}
            </span>

            <h1 className="type-h1 text-white mb-5 leading-tight">
              {industry.name} Digital Growth Architecture
            </h1>

            <p className="text-lg sm:text-xl text-purple-300 font-semibold mb-5 leading-relaxed">
              {industry.tagline}
            </p>

            <p className="text-base text-slate-300 leading-relaxed mb-8 max-w-3xl">
              {industry.overview}
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Button
                to="/free-seo-audit"
                variant="gold"
                size="lg"
                icon={<Zap className="w-4 h-4" />}
                onClick={() => trackEvent('cta_click', { cta_name: 'free_seo_audit', cta_location: 'industry_hero', industry_slug: industry.slug })}
              >
                Free Technical Audit for {industry.shortName}
              </Button>
              <Button
                to="/book-call"
                variant="outline"
                size="lg"
                className="border-navy-700 text-white hover:bg-navy-800/60"
                onClick={() => trackEvent('cta_click', { cta_name: 'book_strategy_call', cta_location: 'industry_hero', industry_slug: industry.slug })}
              >
                Schedule Vertical Consultation
              </Button>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-5 border-t border-navy-800/80">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xs font-bold text-slate-400">Search Landscape</div>
                <div className="text-base font-extrabold text-amber-400">Ultra-Competitive</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xs font-bold text-slate-400">Algorithmic Scrutiny</div>
                <div className="text-base font-extrabold text-white">YMYL Calibrated</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xs font-bold text-slate-400">Backlink Integrity</div>
                <div className="text-base font-extrabold text-emerald-400">Zero PBNs</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xs font-bold text-slate-400">Ad Compliance</div>
                <div className="text-base font-extrabold text-purple-400">Platform-Verified</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. MARKET CHARACTERISTICS & SERP REALITY ─────────────────── */}
      <Section variant="white" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal direction="left">
              <div className="type-eyebrow mb-3">Market Characteristics</div>
              <h2 className="type-h2 text-slate-900 mb-6">
                The Competitive Environment of {industry.name}
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm mb-4">
                Operating in {industry.name.toLowerCase()} requires technical and strategic discipline far beyond standard digital marketing. You are competing against platforms with extensive domain equity, multi-year backlink profiles, and established topical authority.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm">
                {industry.competitionCharacteristics}
              </p>
            </Reveal>

            <Reveal direction="right" delay={150}>
              <div className={`p-8 rounded-3xl border ${industry.category === 'gaming' ? 'border-purple-100 bg-purple-50/50' : industry.category === 'finance' ? 'border-blue-100 bg-blue-50/50' : industry.category === 'adult' ? 'border-rose-100 bg-rose-50/50' : 'border-amber-100 bg-amber-50/50'} shadow-sm`}>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-purple-600" />
                  <span>Strategic Positioning Mandates</span>
                </div>
                <ul className="space-y-3">
                  {[
                    'Architecture-first site builds prioritizing bot crawl budget',
                    'Transparent licensing entity disclosures satisfying E-E-A-T',
                    'Algorithmic internal linking graphs distributing PageRank',
                    'Zero shortcut tactics that risk algorithmic index suppression',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ── 3. SEO CHALLENGES GRID ───────────────────────────────────── */}
      <Section variant="subtle" spacing="lg">
        <Container>
          <Reveal direction="up" className="max-w-2xl mx-auto text-center mb-12">
            <div className="type-eyebrow mb-2">Diagnostic Assessment</div>
            <h2 className="type-h2 text-slate-900 mb-4">
              Core SEO Roadblocks in {industry.shortName}
            </h2>
            <p className="text-slate-600 text-sm">
              The specific technical and competitive hurdles that cause generic digital marketing strategies to stall.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {industry.seoChallenges.map((c, idx) => (
              <Reveal key={c.title} direction="up" delay={idx * 80}>
                <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm h-full flex flex-col">
                  <div className="flex items-start gap-3.5 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center flex-shrink-0 mt-0.5 text-amber-600">
                      <AlertTriangle className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-slate-900 text-base leading-snug">
                        {c.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex-1 pl-12">
                    {c.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── 4. TECHNICAL, CONTENT & COMPLIANCE PILLARS ────────────────── */}
      <Section variant="white" spacing="lg">
        <Container>
          <Reveal direction="up" className="max-w-3xl mx-auto text-center mb-14">
            <div className="type-eyebrow mb-2">Tripartite Framework</div>
            <h2 className="type-h2 text-slate-900 mb-4">
              Technical, Content & Compliance Standards
            </h2>
            <p className="text-slate-600 text-sm">
              We align technical infrastructure, editorial standards, and regulatory considerations into a single cohesive growth engine.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Technical Requirements',
                items: industry.technicalRequirements,
                color: 'text-purple-700',
                badge: 'bg-purple-100 text-purple-800',
              },
              {
                title: 'Content Considerations',
                items: industry.contentConsiderations,
                color: 'text-blue-700',
                badge: 'bg-blue-100 text-blue-800',
              },
              {
                title: 'Compliance Governance',
                items: industry.complianceConsiderations,
                color: 'text-amber-700',
                badge: 'bg-amber-100 text-amber-800',
              },
            ].map((col, cIdx) => (
              <Reveal key={col.title} direction="up" delay={cIdx * 90}>
                <div className="h-full p-7 rounded-3xl bg-slate-50/50 border border-slate-200 hover:bg-white hover:border-purple-200 transition-all shadow-sm flex flex-col">
                  <div className="flex items-center justify-between mb-5">
                    <h3 className={`font-heading font-extrabold text-base ${col.color}`}>{col.title}</h3>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${col.badge}`}>
                      Mandatory
                    </span>
                  </div>
                  <ul className="space-y-3 flex-1">
                    {col.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        <ChevronRight className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── 5. SPECIALIZED BLUEPRINTS (MATRIX) ─────────────────────────── */}
      {matrixCombinations.length > 0 && (
        <Section variant="subtle" spacing="lg">
          <Container>
            <Reveal direction="up" className="max-w-2xl mx-auto text-center mb-12">
              <div className="type-eyebrow mb-2">Dedicated Blueprints</div>
              <h2 className="type-h2 text-slate-900 mb-3">
                Tailored {industry.shortName} Growth Solutions
              </h2>
              <p className="text-slate-600 text-sm">
                Engineered specifically for {industry.name} operating conditions, crawl topologies, and search landscape.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {matrixCombinations.map((m, idx) => (
                <Reveal key={m.serviceSlug} direction="up" delay={(idx % 3) * 80}>
                  <div className="group p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-purple-300 hover:shadow-card transition-all h-full flex flex-col">
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                      <span className="font-extrabold text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wider">
                        {m.service.shortName}
                      </span>
                      {m.matrixEntry.estimatedTimelineWeeks && (
                        <span className="flex items-center gap-1 text-[11px] text-slate-500 font-medium">
                          <Clock className="w-3.5 h-3.5 text-amber-500" />
                          {m.matrixEntry.estimatedTimelineWeeks.split(' ')[0]} wks
                        </span>
                      )}
                    </div>
                    <h3 className="font-heading font-extrabold text-slate-900 text-lg mb-2 group-hover:text-purple-700 transition-colors">
                      {industry.shortName} {m.service.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-5 flex-1">
                      {m.matrixEntry.uniqueValue}
                    </p>
                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 mb-5 text-xs text-slate-600">
                      <span className="font-bold text-slate-900">Conversion Objective:</span> {m.matrixEntry.conversionFocus}
                    </div>
                    <Link
                      to={`/industries/${industry.slug}/${m.serviceSlug}`}
                      onClick={() => trackEvent('cta_click', { cta_name: 'view_matrix_blueprint', industry_slug: industry.slug, service_slug: m.serviceSlug })}
                      className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-purple-50 text-slate-700 hover:text-purple-700 text-xs font-bold transition-all mt-auto"
                    >
                      <span>Explore Strategy Scope</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* ── 6. RECOMMENDED SERVICES ────────────────────────────────────── */}
      {recommendedServices.length > 0 && (
        <Section variant="white" spacing="lg">
          <Container>
            <Reveal direction="up" className="max-w-2xl mx-auto text-center mb-10">
              <div className="type-eyebrow mb-2">Growth Capabilities</div>
              <h2 className="type-h2 text-slate-900 mb-3">
                Recommended Services for {industry.shortName}
              </h2>
              <p className="text-slate-600 text-sm">
                These core disciplines deliver the highest competitive leverage in {industry.name.toLowerCase()} SERPs.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {recommendedServices.map((svc, idx) => (
                <Reveal key={svc.slug} direction="up" delay={idx * 80}>
                  <div className="p-6 rounded-3xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-purple-200 hover:shadow-sm transition-all h-full flex flex-col">
                    <h3 className="font-heading font-bold text-slate-900 text-base mb-2">
                      {svc.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-1">
                      {svc.shortDescription}
                    </p>
                    <Link
                      to={`/services/${svc.slug}`}
                      className="text-xs font-bold text-purple-700 hover:text-purple-900 inline-flex items-center gap-1 mt-auto"
                    >
                      <span>View Service</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* ── 7. FAQS ──────────────────────────────────────────────────────── */}
      {industry.faqs.length > 0 && (
        <Section variant="subtle" spacing="lg">
          <Container>
            <div className="max-w-3xl mx-auto">
              <Reveal direction="up" className="text-center mb-12">
                <div className="type-eyebrow mb-2">Technical Guidance</div>
                <h2 className="type-h2 text-slate-900 mb-4">
                  Frequently Asked Questions About {industry.shortName} SEO
                </h2>
                <p className="text-slate-600 text-sm">
                  Insights on ranking timelines, compliance risk, and domain architecture for {industry.name.toLowerCase()}.
                </p>
              </Reveal>

              <Reveal direction="up" delay={100}>
                <FAQAccordion
                  items={industry.faqs.map((f) => ({
                    question: f.q,
                    answer: f.a,
                  }))}
                />
              </Reveal>
            </div>
          </Container>
        </Section>
      )}

      {/* ── 8. CLOSING CTA ───────────────────────────────────────────────── */}
      <section className="relative bg-navy-950 bg-hero-atmosphere text-white py-20 lg:py-24 overflow-hidden border-t border-navy-800/80">
        <div className="absolute inset-0 bg-dark-mesh opacity-20 pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider">
              <span>Tailored To Your Market</span>
            </div>
            <h2 className="type-h2 text-white">
              Ready to Accelerate Organic Growth in {industry.shortName}?
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed max-w-xl mx-auto">
              Get an empirical audit of your {industry.name.toLowerCase()} platform. Our senior technical architects will benchmark your site against top competitors at zero cost.
            </p>
            <div className="flex flex-wrap items-center gap-4 justify-center pt-3">
              <Button
                to="/free-seo-audit"
                variant="gold"
                size="lg"
                icon={<Zap className="w-4 h-4" />}
                onClick={() => trackEvent('cta_click', { cta_name: 'industry_detail_bottom_audit', cta_location: 'industry_bottom', industry_slug: industry.slug })}
              >
                Claim Free Technical Audit
              </Button>
              <Button
                to="/book-call"
                variant="outline"
                size="lg"
                className="border-navy-700 text-white hover:bg-navy-800/60"
              >
                Book Strategy Call
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

export const IndustryDetailPage: React.FC = () => {
  const { industrySlug } = useParams<{ industrySlug: string }>();

  if (!industrySlug) {
    return <NotFound />;
  }

  const industry = getIndustryBySlug(industrySlug);

  if (!industry) {
    return <NotFound />;
  }

  return <IndustryPage industry={industry} />;
};

export default IndustryDetailPage;
