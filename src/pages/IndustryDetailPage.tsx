import React from 'react';
import { useParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SEOHead } from '../seo';
import { Container, Section, Badge, Button } from '../components/ui';
import { FadeIn } from '../components/animations';
import { getAllIndustryVerticals, getFeaturedServices } from '../data/servicesData';
import { NotFound } from './NotFound';
import { Link } from 'react-router-dom';
import { TrendingUp, BarChart3, Code2, FileText, Share2, Target } from 'lucide-react';

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

export const IndustryDetailPage: React.FC = () => {
  const { industrySlug } = useParams<{ industrySlug: string }>();
  const verticals = getAllIndustryVerticals();
  const vertical = verticals.find((v) => v.slug === industrySlug);

  if (!vertical) return <NotFound />;

  const featuredServices = getFeaturedServices();

  return (
    <>
      <SEOHead
        title={`${vertical.title} Digital Growth Services — iGaming Growth Agency`}
        description={`Specialist digital growth for ${vertical.title.toLowerCase()}. ${vertical.description}`}
        canonicalPath={`/industries/${vertical.slug}`}
      />

      <section className="bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <div className="text-6xl mb-6">{vertical.icon}</div>
              <Badge variant="purple" size="sm" className="mb-4">Specialist Vertical</Badge>
              <h1 className="font-heading font-extrabold text-4xl lg:text-5xl text-white mb-5 leading-tight">
                {vertical.title}
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">{vertical.description}</p>
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {vertical.examples.map((ex) => (
                  <span key={ex} className="px-3 py-1.5 bg-white/10 border border-white/20 rounded-lg text-sm text-white/80 font-medium">
                    {ex}
                  </span>
                ))}
              </div>
              <Button to="/contact" variant="gold" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                Get a Free Growth Strategy
              </Button>
            </FadeIn>
          </div>
        </Container>
      </section>

      <Section variant="white" spacing="lg">
        <Container>
          <h2 className="font-heading font-bold text-2xl text-slate-900 mb-8 text-center">
            Services We Deliver for {vertical.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {featuredServices.map((service) => {
              const Icon = SERVICE_ICONS[service.icon] || TrendingUp;
              return (
                <Link key={service.slug} to={`/services/${service.slug}`} className="group">
                  <div className="p-6 rounded-2xl border border-slate-200 hover:border-purple-300 hover:shadow-lg transition-all duration-200">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${SERVICE_COLORS[service.color]} flex items-center justify-center mb-4`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-slate-900 mb-1 group-hover:text-purple-600 transition-colors">
                      {service.shortTitle}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{service.tagline}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section variant="gradient" spacing="md">
        <Container>
          <div className="max-w-2xl mx-auto text-center text-white space-y-5">
            <h2 className="font-heading font-extrabold text-3xl">
              Ready to Scale Your {vertical.title} Brand?
            </h2>
            <p className="text-slate-300">Get a custom growth roadmap tailored to your vertical and market stage.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button to="/contact" variant="gold" size="lg">Book a Free Strategy Call</Button>
              <Button to="/industries" variant="outline" size="lg" className="border-white/25 text-white hover:bg-white/10">
                ← All Verticals
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default IndustryDetailPage;
