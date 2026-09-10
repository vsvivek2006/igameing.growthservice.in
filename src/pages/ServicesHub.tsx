import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { SEOHead } from '../seo';
import { buildBreadcrumbSchema } from '../seo/schema';
import { Container, Section, Button, Breadcrumb, ServiceIcon } from '../components/ui';
import { FadeIn, MotionCard } from '../components/animations';
import { getServicesByCategory, SERVICE_CATEGORY_LABELS } from '../data/servicesData';
import type { ServiceCategory } from '../data/servicesData';

const CATEGORIES: ServiceCategory[] = ['seo', 'web-development', 'paid-acquisition', 'conversion-analytics'];

const HERO_POINTS = [
  'Technical SEO infrastructure for high-volume, dynamic sites',
  'Content strategy meeting E-E-A-T standards for YMYL verticals',
  'Authority development through legitimate editorial channels',
  'Website development with SEO specification before design begins',
  'Paid acquisition with policy-compliance discipline',
  'Conversion optimisation grounded in behaviour data',
];

export const ServicesHub: React.FC = () => {
  const breadcrumbItems = [{ label: 'Services' }];

  return (
    <>
      <SEOHead
        title="SEO & Digital Growth Services for High-Competition Industries — iGaming Growth"
        description="Specialist SEO, website development, paid acquisition, and conversion services for gaming, casino, financial, and adult industry businesses. 12 services designed for the most competitive digital verticals."
        canonicalPath="/services"
        jsonLd={[buildBreadcrumbSchema(breadcrumbItems)]}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/3 w-[500px] h-[400px] rounded-full bg-purple-600/10 blur-[100px]" />
        </div>
        <Container className="relative py-24 lg:py-32">
          <FadeIn>
            <Breadcrumb items={breadcrumbItems} className="mb-6 text-slate-400" />
            <div className="max-w-3xl">
              <div className="type-eyebrow text-purple-400 mb-4">Our Services</div>
              <h1 className="font-heading font-extrabold text-4xl lg:text-6xl text-white mb-6 leading-tight">
                SEO & Digital Growth Systems Built for High-Competition Markets
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                We combine SEO, technology, content, website development, conversion optimisation, analytics, and paid acquisition into a single coherent growth system — designed specifically for industries that standard agency approaches consistently fail to serve.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button to="/free-seo-audit" variant="gold" size="lg">
                  Free SEO Audit
                </Button>
                <Button to="/contact" variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                  Discuss Your Project
                </Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* What we combine */}
      <Section variant="subtle" spacing="md">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <FadeIn>
              <div className="type-eyebrow mb-3">The Full System</div>
              <h2 className="font-heading font-extrabold text-3xl text-slate-900 mb-5 leading-tight">
                Why Specialised Expertise Matters
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                High-competition industries — gaming, finance, adult — operate in digital conditions that generalise SEO and marketing frameworks simply aren't built for. Higher domain authority thresholds. Content standards enforced more strictly. Advertising channels restricted or unavailable. SERP dynamics dominated by established operators.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We build growth systems calibrated to these specific conditions: technically sound, editorially credible, and designed for compounding rather than short-term spikes.
              </p>
            </FadeIn>

            <FadeIn delay={150}>
              <div className="bg-white rounded-3xl border border-slate-200 p-7 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-5">What We Build Into Every Engagement</p>
                <ul className="space-y-2.5">
                  {HERO_POINTS.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-slate-700">
                      <ChevronRight className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Services by category */}
      {CATEGORIES.map((cat) => {
        const services = getServicesByCategory(cat);
        if (services.length === 0) return null;
        return (
          <Section key={cat} variant={cat === 'web-development' || cat === 'conversion-analytics' ? 'subtle' : 'white'} spacing="md">
            <Container>
              <div className="mb-10">
                <FadeIn>
                  <div className="type-eyebrow mb-2">{SERVICE_CATEGORY_LABELS[cat]}</div>
                  <h2 className="font-heading font-extrabold text-3xl text-slate-900 leading-tight">
                    {SERVICE_CATEGORY_LABELS[cat]}
                  </h2>
                </FadeIn>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {services.map((svc, idx) => (
                  <MotionCard key={svc.slug} delay={idx * 60} variant="interactive">
                    <div className="h-full flex flex-col">
                      <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center mb-4">
                        <ServiceIcon name={svc.icon} className="w-5 h-5 text-purple-600" />
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-heading font-bold text-slate-900 text-base leading-snug">{svc.name}</h3>
                        {svc.featured && (
                          <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-amber-100 text-amber-700">Popular</span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed flex-1 mb-5">{svc.shortDescription}</p>
                      <Link
                        to={`/services/${svc.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-600 hover:text-purple-800 transition-colors"
                      >
                        View service details <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </MotionCard>
                ))}
              </div>
            </Container>
          </Section>
        );
      })}

      {/* CTA */}
      <section className="bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white py-16">
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="type-eyebrow text-purple-400">Next Step</div>
            <h2 className="font-heading font-extrabold text-3xl text-white">
              Not Sure Which Service Fits Your Situation?
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Tell us about your current position, target market, and goals. We'll identify the highest-leverage starting point for your specific competitive situation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button to="/free-seo-audit" variant="gold" size="lg">Free SEO Audit</Button>
              <Button to="/contact" variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                Talk to a Specialist
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ServicesHub;
