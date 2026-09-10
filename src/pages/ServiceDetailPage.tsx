import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Users, TrendingUp, BarChart3, Code2, FileText, Share2, Target } from 'lucide-react';
import { SEOHead } from '../seo';
import { Container, Section, Badge, Button } from '../components/ui';
import { FadeIn } from '../components/animations';
import { getServiceBySlug } from '../data/servicesData';
import { NotFound } from './NotFound';

const SERVICE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  TrendingUp, BarChart3, Code2, FileText, Share2, Target,
};

const SERVICE_COLORS: Record<string, string> = {
  purple: 'from-purple-600 to-violet-700',
  gold: 'from-amber-500 to-orange-600',
  blue: 'from-blue-600 to-cyan-600',
  green: 'from-emerald-500 to-teal-600',
  rose: 'from-rose-500 to-pink-600',
  indigo: 'from-indigo-600 to-blue-700',
};

export const ServiceDetailPage: React.FC = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const service = getServiceBySlug(serviceSlug ?? '');

  if (!service) return <NotFound />;

  const Icon = SERVICE_ICONS[service.icon] || TrendingUp;

  return (
    <>
      <SEOHead
        title={`${service.title} for iGaming Brands — iGaming Growth`}
        description={`${service.tagline}. ${service.description.slice(0, 140)}`}
        canonicalPath={`/services/${service.slug}`}
      />

      {/* Hero */}
      <section className={`bg-gradient-to-br ${SERVICE_COLORS[service.color]} text-white py-20`}>
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <div className="w-16 h-16 rounded-3xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <Badge variant="purple" size="sm" className="mb-4 bg-white/20 text-white border-white/30">
                {service.shortTitle}
              </Badge>
              <h1 className="font-heading font-extrabold text-4xl lg:text-5xl text-white mb-4 leading-tight">
                {service.title}
              </h1>
              <p className="text-xl text-white/80 italic mb-6">{service.tagline}</p>
              <p className="text-base text-white/70 leading-relaxed max-w-2xl mx-auto mb-8">
                {service.description}
              </p>
              <Button to="/contact" variant="gold" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                Get a Free Proposal
              </Button>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Features + Outcomes */}
      <Section variant="white" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Features */}
            <div>
              <h2 className="font-heading font-bold text-2xl text-slate-900 mb-6">What's Included</h2>
              <ul className="space-y-3">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Outcomes */}
            <div>
              <h2 className="font-heading font-bold text-2xl text-slate-900 mb-6">What You'll Achieve</h2>
              <div className="space-y-3 mb-8">
                {service.outcomes.map((o) => (
                  <div key={o} className="flex items-start gap-3 p-4 rounded-xl bg-emerald-50 border border-emerald-100">
                    <TrendingUp className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 font-medium">{o}</span>
                  </div>
                ))}
              </div>

              <h3 className="font-heading font-bold text-lg text-slate-900 mb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-600" />
                Ideal For
              </h3>
              <div className="flex flex-wrap gap-2">
                {service.idealFor.map((c) => (
                  <Badge key={c} variant="purple" size="sm">{c}</Badge>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section variant="gradient" spacing="md">
        <Container>
          <div className="max-w-2xl mx-auto text-center text-white space-y-5">
            <h2 className="font-heading font-extrabold text-3xl">
              Ready to Scale with {service.shortTitle}?
            </h2>
            <p className="text-slate-300">
              Get a custom strategy tailored to your gaming brand. Free consultation, no commitment.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button to="/contact" variant="gold" size="lg">Book a Free Strategy Call</Button>
              <Button to="/services" variant="outline" size="lg" className="border-white/25 text-white hover:bg-white/10">
                ← All Services
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default ServiceDetailPage;
