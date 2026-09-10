import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SEOHead } from '../seo';
import { buildBreadcrumbSchema } from '../seo/schema';
import { Container, Section, Button, Breadcrumb } from '../components/ui';
import { FadeIn, MotionCard } from '../components/animations';
import { getAllIndustries, INDUSTRY_CATEGORY_LABELS } from '../data/industriesData';
import type { IndustryVertical } from '../data/industriesData';

const CATEGORY_STYLES: Record<IndustryVertical['category'], { accent: string; badge: string }> = {
  gaming: { accent: 'border-l-4 border-purple-500', badge: 'bg-purple-100 text-purple-700' },
  finance: { accent: 'border-l-4 border-blue-500', badge: 'bg-blue-100 text-blue-700' },
  adult: { accent: 'border-l-4 border-rose-500', badge: 'bg-rose-100 text-rose-700' },
  'gaming-skill': { accent: 'border-l-4 border-amber-500', badge: 'bg-amber-100 text-amber-700' },
};

export const IndustriesHub: React.FC = () => {
  const industries = getAllIndustries();
  const breadcrumbItems = [{ label: 'Industries' }];

  // Group by category
  const grouped = industries.reduce<Record<IndustryVertical['category'], typeof industries[0][]>>(
    (acc, ind) => {
      if (!acc[ind.category]) acc[ind.category] = [];
      acc[ind.category].push(ind);
      return acc;
    },
    {} as Record<IndustryVertical['category'], typeof industries[0][]>
  );

  const categoryOrder: IndustryVertical['category'][] = ['gaming', 'gaming-skill', 'finance', 'adult'];

  return (
    <>
      <SEOHead
        title="Industries We Serve — High-Competition Digital Marketing Specialists"
        description="Specialist digital marketing for online gaming, casino, cricket gaming, color prediction, stock market, financial, and adult industry businesses. Industry-specific SEO expertise."
        canonicalPath="/industries"
        jsonLd={[buildBreadcrumbSchema(breadcrumbItems)]}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[500px] h-[400px] rounded-full bg-purple-600/10 blur-[100px]" />
        </div>
        <Container className="relative py-24 lg:py-32">
          <FadeIn>
            <Breadcrumb items={breadcrumbItems} className="mb-6 text-slate-400" />
            <div className="max-w-3xl">
              <div className="type-eyebrow text-purple-400 mb-4">Industries</div>
              <h1 className="font-heading font-extrabold text-4xl lg:text-6xl text-white mb-6 leading-tight">
                Digital Growth Expertise for High-Competition Industries
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                We don't try to serve every vertical. We go deep in the markets where specialist knowledge — of keyword dynamics, advertising restrictions, content standards, and competitive benchmarks — is the difference between an SEO programme that works and one that doesn't.
              </p>
              <Button to="/free-seo-audit" variant="gold" size="lg">
                Free SEO Audit for Your Industry
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Industries by category */}
      {categoryOrder.map((cat, cIdx) => {
        const indsInCat = grouped[cat] ?? [];
        if (indsInCat.length === 0) return null;

        return (
          <Section key={cat} variant={cIdx % 2 === 0 ? 'white' : 'subtle'} spacing="md">
            <Container>
              <div className="mb-10">
                <FadeIn>
                  <div className="type-eyebrow mb-2">{INDUSTRY_CATEGORY_LABELS[cat]}</div>
                  <h2 className="font-heading font-extrabold text-3xl text-slate-900 leading-tight">
                    {INDUSTRY_CATEGORY_LABELS[cat]}
                  </h2>
                </FadeIn>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {indsInCat.map((industry, idx) => {
                  const style = CATEGORY_STYLES[industry.category];
                  return (
                    <MotionCard key={industry.slug} delay={idx * 80} variant="interactive">
                      <div className={`h-full flex flex-col ${style.accent} pl-5`}>
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <div>
                            <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded mr-2 ${style.badge}`}>
                              {INDUSTRY_CATEGORY_LABELS[industry.category]}
                            </span>
                            <h3 className="font-heading font-bold text-slate-900 text-lg mt-2 leading-snug">{industry.name}</h3>
                          </div>
                        </div>

                        <p className="text-xs text-slate-500 italic mb-4 leading-relaxed">{industry.tagline}</p>

                        {/* Primary challenge */}
                        <div className="mb-4">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">Primary SEO Challenge</p>
                          <p className="text-xs text-slate-600 leading-relaxed">{industry.seoChallenges[0]?.description}</p>
                        </div>

                        {/* Recommended services */}
                        <div className="flex flex-wrap gap-1 mb-5">
                          {industry.recommendedServices.slice(0, 3).map((slug) => (
                            <span key={slug} className="text-[9px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded bg-slate-100 text-slate-500">
                              {slug.replace(/-/g, ' ')}
                            </span>
                          ))}
                        </div>

                        <Link
                          to={`/industries/${industry.slug}`}
                          className="mt-auto inline-flex items-center gap-1.5 text-xs font-semibold text-purple-600 hover:text-purple-800 transition-colors"
                        >
                          Industry SEO Guide <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </MotionCard>
                  );
                })}
              </div>
            </Container>
          </Section>
        );
      })}

      {/* Positioning statement */}
      <section className="bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="type-eyebrow text-purple-400 mb-4">Our Position</div>
              <h2 className="font-heading font-extrabold text-3xl text-white mb-5 leading-tight">
                Why We Work in These Industries — and Not Others
              </h2>
              <div className="space-y-4 text-slate-400 text-sm leading-relaxed">
                <p>
                  The industries on this page share a common characteristic: standard digital marketing approaches do not work in them. The keyword competition is extreme, the content standards are higher, the advertising restrictions are real, and the compliance requirements are material.
                </p>
                <p>
                  A generalist agency applies the same framework to your casino platform as to a local restaurant. The result is, predictably, that neither performs well. We exist because these verticals require specific knowledge — of SERP dynamics, content standards, policy restrictions, and competitive benchmarks — that cannot be acquired without working exclusively in them.
                </p>
                <p>
                  If your business is in one of these industries, we understand your specific competitive situation before we discuss strategy.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button to="/free-seo-audit" variant="gold" size="lg">Free SEO Audit</Button>
                <Button to="/about" variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                  About Our Approach
                </Button>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
};

export default IndustriesHub;
