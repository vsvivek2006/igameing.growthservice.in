import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, TrendingUp, BarChart3, Code2, FileText, Share2, Target } from 'lucide-react';
import { SEOHead } from '../seo';
import { Container, Section, SectionHeader, Card, Badge, Button } from '../components/ui';
import { FadeIn, MotionCard } from '../components/animations';
import { getAllServices } from '../data/servicesData';

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

const SERVICE_BADGE: Record<string, string> = {
  purple: 'bg-purple-100 text-purple-700',
  gold: 'bg-amber-100 text-amber-700',
  blue: 'bg-blue-100 text-blue-700',
  green: 'bg-emerald-100 text-emerald-700',
  rose: 'bg-rose-100 text-rose-700',
  indigo: 'bg-indigo-100 text-indigo-700',
};

export const ServicesHub: React.FC = () => {
  const services = getAllServices();

  return (
    <>
      <SEOHead
        title="iGaming Digital Growth Services — SEO, Marketing, Web Dev & More"
        description="Full-stack digital growth services for casino operators, sportsbooks, and gaming brands. SEO, performance marketing, web development, content strategy, and CRO."
        canonicalPath="/services"
      />

      {/* Page Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <Badge variant="purple" size="sm" className="mb-6">Our Services</Badge>
              <h1 className="font-heading font-extrabold text-4xl lg:text-5xl text-white mb-5 leading-tight">
                Full-Stack Digital Growth for iGaming Brands
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                Every growth discipline you need, built specifically for the gaming industry. No learning curve, no generic strategies — just vertical expertise that delivers.
              </p>
              <Button to="/contact" variant="gold" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                Get a Free Proposal
              </Button>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <Section variant="white" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => {
              const Icon = SERVICE_ICONS[service.icon] || TrendingUp;
              return (
                <MotionCard key={service.slug} delay={idx * 80} variant="interactive">
                  <Link to={`/services/${service.slug}`} className="block">
                    <div className="flex items-start gap-5 mb-5">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${SERVICE_COLORS[service.color]} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <div className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded mb-2 ${SERVICE_BADGE[service.color]}`}>
                          {service.shortTitle}
                        </div>
                        <h2 className="font-heading font-bold text-xl text-slate-900 hover:text-purple-600 transition-colors leading-snug">
                          {service.title}
                        </h2>
                        <p className="text-sm text-slate-500 italic mt-1">{service.tagline}</p>
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed mb-5">{service.description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-5">
                      {service.features.slice(0, 4).map((f) => (
                        <div key={f} className="flex items-center gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {service.idealFor.slice(0, 2).map((c) => (
                          <span key={c} className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded font-medium">{c}</span>
                        ))}
                      </div>
                      <span className="text-purple-600 font-semibold text-xs flex items-center gap-1">
                        Learn More <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                </MotionCard>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section variant="gradient" spacing="md">
        <Container>
          <div className="max-w-2xl mx-auto text-center text-white space-y-5">
            <h2 className="font-heading font-extrabold text-3xl">Not Sure Which Service You Need?</h2>
            <p className="text-slate-300">Let's audit your current situation and recommend the highest-impact growth levers for your gaming brand.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button to="/contact" variant="gold" size="lg">Book a Free Strategy Call</Button>
              <Button to="/free-seo-audit" variant="outline" size="lg" className="border-white/25 text-white hover:bg-white/10">
                Free SEO Audit First
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default ServicesHub;
