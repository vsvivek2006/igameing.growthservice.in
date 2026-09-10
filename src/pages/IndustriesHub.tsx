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
      <section className="relative bg-navy-950 bg-hero-atmosphere text-white overflow-hidden border-b border-navy-800/80">
        <div className="absolute inset-0 bg-dark-mesh opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[400px] rounded-full bg-purple-600/10 blur-[100px] pointer-events-none" />

        <Container className="relative z-10 py-20 lg:py-28">
          <FadeIn>
            <Breadcrumb items={breadcrumbItems} className="mb-6 text-slate-400" />
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-5">
                <span>Specialist Verticals</span>
              </div>
              <h1 className="type-h1 text-white mb-6">
                Digital Growth Systems for High-Competition Verticals
              </h1>
              <p className="text-lg lg:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
                We do not serve generic consumer categories. We focus exclusively on digital verticals where specialist technical SEO, compliance awareness, and domain equity are decisive competitive moats.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button to="/free-seo-audit" variant="gold" size="lg">
                  Free SEO Audit for Your Industry
                </Button>
                <Button to="/contact" variant="outline" size="lg" className="border-navy-700 text-white hover:bg-navy-800/60">
                  Discuss Your Market
                </Button>
              </div>
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
      <section className="relative bg-navy-950 bg-hero-atmosphere text-white py-20 overflow-hidden border-t border-navy-800/80">
        <div className="absolute inset-0 bg-dark-mesh opacity-20 pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-5">
                <span>Our Strategic Focus</span>
              </div>
              <h2 className="type-h2 text-white mb-5">
                Why We Work in These Verticals — and Not Others
              </h2>
              <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
                <p>
                  The verticals on this page share a common characteristic: standard digital marketing playbooks fail completely. Keyword competition is cutthroat, content scrutiny is heightened, paid advertising options are severely limited, and platform compliance parameters are stringent.
                </p>
                <p>
                  A generalist agency applies the same framework to an online gaming platform as to a local cafe. The outcome is inevitably poor visibility and wasted budget. We exist because high-velocity digital niches demand technical precision, domain architecture depth, and regulatory awareness that can only be built through continuous specialization.
                </p>
                <p>
                  When you partner with us, we already understand your indexation challenges, your competitive landscape, and your commercial unit economics.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button to="/free-seo-audit" variant="gold" size="lg">Free SEO Audit</Button>
                <Button to="/about" variant="outline" size="lg" className="border-navy-700 text-white hover:bg-navy-800/60">
                  About Our Approach
                </Button>
                <a
                  href="https://wa.me/919341436937"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-md shadow-emerald-950/20 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
};

export default IndustriesHub;
