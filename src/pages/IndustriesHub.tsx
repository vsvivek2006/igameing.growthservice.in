import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SEOHead } from '../seo';
import { Container, Section, SectionHeader, Button, Badge } from '../components/ui';
import { FadeIn, MotionCard } from '../components/animations';
import { getAllIndustryVerticals } from '../data/servicesData';

export const IndustriesHub: React.FC = () => {
  const verticals = getAllIndustryVerticals();

  return (
    <>
      <SEOHead
        title="iGaming Industries We Serve — Casinos, Sports Betting, Fantasy Sports & More"
        description="Digital growth specialists for every iGaming vertical — online casinos, sports betting, fantasy sports, crypto gaming, affiliates, and game studios."
        canonicalPath="/industries"
      />

      <section className="bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <Badge variant="purple" size="sm" className="mb-6">Industries</Badge>
              <h1 className="font-heading font-extrabold text-4xl lg:text-5xl text-white mb-5 leading-tight">
                Vertical Expertise Across the iGaming Ecosystem
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed">
                We don't dabble. We go deep in each iGaming vertical with market-specific strategies, compliance knowledge, and network connections that generic agencies simply can't match.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      <Section variant="white" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {verticals.map((v, idx) => (
              <MotionCard key={v.slug} delay={idx * 80} variant="interactive">
                <Link to={`/industries/${v.slug}`} className="block h-full group">
                  <div className="text-4xl mb-4">{v.icon}</div>
                  <h2 className="font-heading font-bold text-xl text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {v.title}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{v.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {v.examples.map((ex) => (
                      <span key={ex} className="text-[10px] bg-purple-50 text-purple-600 px-2 py-0.5 rounded font-medium">
                        {ex}
                      </span>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-end">
                    <span className="text-purple-600 font-semibold text-xs flex items-center gap-1">
                      Learn More <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </MotionCard>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="gradient" spacing="md">
        <Container>
          <div className="max-w-2xl mx-auto text-center text-white space-y-5">
            <h2 className="font-heading font-extrabold text-3xl">Your Vertical. Our Expertise.</h2>
            <p className="text-slate-300">Tell us about your business and we'll map out the highest-impact growth strategy for your specific market.</p>
            <Button to="/contact" variant="gold" size="lg">Get a Free Growth Strategy</Button>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default IndustriesHub;
