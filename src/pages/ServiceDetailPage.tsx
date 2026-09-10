import React from 'react';
import { useParams } from 'react-router-dom';
import {
  CheckCircle2,
  XCircle,
  ChevronRight,
} from 'lucide-react';
import { SEOHead } from '../seo';
import { buildBreadcrumbSchema, buildServiceSchema } from '../seo/schema';
import { Container, Section, Button, ProcessTimeline, FAQAccordion, Breadcrumb, ServiceIcon } from '../components/ui';
import { FadeIn, MotionCard } from '../components/animations';
import { trackEvent } from '../analytics';
import { getServiceBySlug, SERVICE_CATEGORY_LABELS } from '../data/servicesData';
import type { ServiceOffering } from '../data/servicesData';
import NotFound from './NotFound';

const COLOR_CLASSES: Record<string, { bg: string; text: string; border: string; badge: string }> = {
  purple: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200', badge: 'bg-purple-100 text-purple-700' },
  violet: { bg: 'bg-violet-50', text: 'text-violet-700', border: 'border-violet-200', badge: 'bg-violet-100 text-violet-700' },
  blue: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', badge: 'bg-blue-100 text-blue-700' },
  indigo: { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200', badge: 'bg-indigo-100 text-indigo-700' },
  cyan: { bg: 'bg-cyan-50', text: 'text-cyan-700', border: 'border-cyan-200', badge: 'bg-cyan-100 text-cyan-700' },
  green: { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200', badge: 'bg-green-100 text-green-700' },
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', badge: 'bg-emerald-100 text-emerald-700' },
  amber: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200', badge: 'bg-amber-100 text-amber-700' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200', badge: 'bg-orange-100 text-orange-700' },
  rose: { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200', badge: 'bg-rose-100 text-rose-700' },
};

const ServicePage: React.FC<{ service: ServiceOffering }> = ({ service }) => {
  const colors = COLOR_CLASSES[service.color] ?? COLOR_CLASSES.purple;
  const breadcrumbItems = [
    { label: 'Services', path: '/services' },
    { label: service.name },
  ];

  return (
    <>
      <SEOHead
        title={service.seo.title}
        description={service.seo.description}
        canonicalPath={`/services/${service.slug}`}
        jsonLd={[
          buildBreadcrumbSchema(breadcrumbItems),
          buildServiceSchema(service),
        ]}
      />

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white overflow-hidden">
        {/* Decorative ambient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[500px] h-[400px] rounded-full bg-purple-600/10 blur-[100px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] rounded-full bg-violet-600/10 blur-[80px]" />
        </div>

        <Container className="relative py-24 lg:py-32">
          <FadeIn>
            <Breadcrumb items={breadcrumbItems} className="mb-6 text-slate-400" />

            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-12 h-12 rounded-2xl ${colors.bg} ${colors.border} border flex items-center justify-center`}>
                  <ServiceIcon name={service.icon} className={`w-6 h-6 ${colors.text}`} />
                </div>
                <span className={`text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${colors.badge}`}>
                  {SERVICE_CATEGORY_LABELS[service.category]}
                </span>
              </div>

              <h1 className="font-heading font-extrabold text-4xl lg:text-5xl text-white mb-5 leading-tight">
                {service.heroHeadline || service.name}
              </h1>

              <p className="text-xl text-purple-200 font-medium mb-4 italic">
                {service.heroSublead || service.tagline}
              </p>

              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                {service.shortDescription}
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  to="/free-seo-audit"
                  variant="gold"
                  size="lg"
                  onClick={() => trackEvent('cta_click', { cta_name: 'free_seo_audit', cta_location: 'service_hero', service_slug: service.slug })}
                >
                  Get a Free SEO Audit
                </Button>
                <Button
                  to="/book-call"
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10"
                  onClick={() => trackEvent('cta_click', { cta_name: 'book_strategy_call', cta_location: 'service_hero', service_slug: service.slug })}
                >
                  Book a Strategy Call
                </Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ── Problem Statement ───────────────────────────────────────── */}
      <Section variant="subtle" spacing="md">
        <Container>
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="type-eyebrow mb-3">The Challenge</div>
              <h2 className="font-heading font-extrabold text-3xl text-slate-900 mb-5 leading-tight">
                Why Standard Approaches Fall Short
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {service.problemStatement}
              </p>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── Our Approach ────────────────────────────────────────────── */}
      <Section variant="white" spacing="md">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="type-eyebrow mb-3">Our Approach</div>
              <h2 className="font-heading font-extrabold text-3xl text-slate-900 mb-5 leading-tight">
                How We Approach {service.shortName}
              </h2>
              <p className="text-slate-600 leading-relaxed">
                {service.approach}
              </p>
            </FadeIn>

            <FadeIn delay={150}>
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-3xl border border-purple-100 p-8">
                <p className="text-xs font-bold uppercase tracking-widest text-purple-600 mb-5">What You Can Expect</p>
                <ul className="space-y-3">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── What We Deliver ─────────────────────────────────────────── */}
      <Section variant="subtle" spacing="md">
        <Container>
          <div className="max-w-2xl mx-auto text-center mb-10">
            <FadeIn>
              <div className="type-eyebrow mb-3">Deliverables</div>
              <h2 className="font-heading font-extrabold text-3xl text-slate-900 leading-tight">
                What We Deliver
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {service.deliverables.map((d, idx) => (
              <MotionCard key={d} delay={idx * 60} variant="default">
                <div className={`w-8 h-8 rounded-xl ${colors.bg} flex items-center justify-center mb-3 flex-shrink-0`}>
                  <span className={`text-xs font-extrabold ${colors.text}`}>{String(idx + 1).padStart(2, '0')}</span>
                </div>
                <p className="text-sm font-semibold text-slate-800 leading-snug">{d}</p>
              </MotionCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Capabilities / Features ─────────────────────────────────── */}
      <Section variant="white" spacing="md">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <FadeIn>
              <div className="type-eyebrow mb-3">Capabilities</div>
              <h2 className="font-heading font-extrabold text-3xl text-slate-900 mb-5 leading-tight">
                What the Service Covers
              </h2>
              <ul className="space-y-2.5">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-slate-700">
                    <ChevronRight className={`w-4 h-4 ${colors.text} mt-0.5 flex-shrink-0`} />
                    {f}
                  </li>
                ))}
              </ul>
            </FadeIn>

            {/* Process */}
            <FadeIn delay={150}>
              <div className="type-eyebrow mb-3">Our Process</div>
              <h3 className="font-heading font-bold text-2xl text-slate-900 mb-6 leading-tight">
                How We Work
              </h3>
              <ProcessTimeline steps={service.process} />
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── Who It's For ───────────────────────────────────────────── */}
      <Section variant="subtle" spacing="md">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FadeIn>
              <div className={`p-7 rounded-3xl border ${colors.border} bg-white`}>
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className={`w-5 h-5 ${colors.text}`} />
                  <h3 className="font-heading font-bold text-lg text-slate-900">Ideal For</h3>
                </div>
                <ul className="space-y-2.5">
                  {service.idealFor.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className={`w-1.5 h-1.5 rounded-full ${colors.bg.replace('bg-', 'bg-')} mt-1.5 flex-shrink-0`}
                        style={{ background: 'currentColor' }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {service.notFor.length > 0 && (
              <FadeIn delay={100}>
                <div className="p-7 rounded-3xl border border-slate-200 bg-white">
                  <div className="flex items-center gap-2 mb-4">
                    <XCircle className="w-5 h-5 text-slate-400" />
                    <h3 className="font-heading font-bold text-lg text-slate-900">Not For</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {service.notFor.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            )}
          </div>
        </Container>
      </Section>

      {/* ── FAQ ────────────────────────────────────────────────────── */}
      {service.faqs.length > 0 && (
        <Section variant="white" spacing="md">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <FadeIn>
                  <div className="type-eyebrow mb-3">Common Questions</div>
                  <h2 className="font-heading font-extrabold text-3xl text-slate-900">
                    Frequently Asked Questions
                  </h2>
                </FadeIn>
              </div>
              <FadeIn delay={100}>
                <FAQAccordion items={service.faqs} defaultOpen={0} />
              </FadeIn>
            </div>
          </Container>
        </Section>
      )}

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white py-16">
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="type-eyebrow text-purple-400">Ready to Start?</div>
            <h2 className="font-heading font-extrabold text-3xl lg:text-4xl text-white leading-tight">
              Discuss {service.shortName} for Your Business
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Tell us about your situation and we'll explain what's possible, what's realistic, and what a programme would look like for your specific market.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                to="/free-seo-audit"
                variant="gold"
                size="lg"
                onClick={() => trackEvent('cta_click', { cta_name: 'free_seo_audit', cta_location: 'service_bottom_cta', service_slug: service.slug })}
              >
                Free SEO Audit
              </Button>
              <Button
                to="/book-call"
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10"
                onClick={() => trackEvent('cta_click', { cta_name: 'book_strategy_call', cta_location: 'service_bottom_cta', service_slug: service.slug })}
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

export const ServiceDetailPage: React.FC = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const service = getServiceBySlug(serviceSlug ?? '');

  if (!service) {
    return <NotFound />;
  }

  return <ServicePage service={service} />;
};

export default ServiceDetailPage;
