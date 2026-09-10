import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, ArrowRight } from 'lucide-react';
import { SEOHead } from '../seo';
import { Container, Section, SectionHeader, Badge, Button } from '../components/ui';
import { FadeIn, MotionCard } from '../components/animations';
import { getFeaturedCaseStudies } from '../data/servicesData';

export const CaseStudiesHub: React.FC = () => {
  const caseStudies = getFeaturedCaseStudies();

  return (
    <>
      <SEOHead
        title="iGaming Growth Case Studies — Proven Results for Gaming Brands"
        description="Real results we've delivered for casino operators, sportsbooks, and gaming affiliates. Traffic growth, FTD increases, and revenue results backed by data."
        canonicalPath="/case-studies"
      />

      <section className="bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <Badge variant="purple" size="sm" className="mb-6">Proven Results</Badge>
              <h1 className="font-heading font-extrabold text-4xl lg:text-5xl text-white mb-5 leading-tight">
                Real Growth. Real Gaming Brands.
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed">
                No case studies with fake names, inflated numbers, or cherry-picked metrics. These are real outcomes — verified, measurable, and reproducible.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      <Section variant="white" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((cs, idx) => (
              <MotionCard key={cs.slug} delay={idx * 100} variant="default">
                <div className="h-full flex flex-col">
                  <Badge variant="purple" size="sm" className="mb-4 self-start">{cs.clientType}</Badge>

                  <h2 className="font-heading font-bold text-xl text-slate-900 mb-3 leading-snug">
                    {cs.client}
                  </h2>

                  <div className="mb-4">
                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">Challenge</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{cs.challenge}</p>
                  </div>

                  <div className="mb-5">
                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">Solution</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{cs.solution}</p>
                  </div>

                  <div className="mt-auto space-y-3 pt-4 border-t border-slate-100">
                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider flex items-center gap-1">
                      <TrendingUp className="w-3 h-3 text-emerald-500" />
                      Results Achieved
                    </p>
                    {cs.results.map((r) => (
                      <div key={r.metric} className="flex items-center justify-between p-2.5 bg-emerald-50 rounded-lg">
                        <span className="text-xs text-slate-600">{r.metric}</span>
                        <span className="text-sm font-bold text-emerald-700">{r.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </MotionCard>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="gradient" spacing="md">
        <Container>
          <div className="max-w-2xl mx-auto text-center text-white space-y-5">
            <h2 className="font-heading font-extrabold text-3xl">Your Brand. Your Results. Next.</h2>
            <p className="text-slate-300">Let's discuss how we'd approach growth for your specific gaming brand and market.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button to="/contact" variant="gold" size="lg">Get a Free Proposal</Button>
              <Button to="/services" variant="outline" size="lg" className="border-white/25 text-white hover:bg-white/10">
                Explore Our Services
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default CaseStudiesHub;
