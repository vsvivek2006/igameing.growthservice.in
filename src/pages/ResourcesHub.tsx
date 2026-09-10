import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SEOHead } from '../seo';
import { Container, Section, Badge, Button } from '../components/ui';
import { FadeIn, MotionCard } from '../components/animations';

const RESOURCES = [
  {
    title: 'The iGaming SEO Checklist (2024)',
    description: 'A 47-point technical and on-page SEO checklist built specifically for casino, sportsbook, and affiliate websites.',
    type: 'Checklist',
    free: true,
  },
  {
    title: 'iGaming Affiliate Commission Calculator',
    description: 'Calculate the true value of CPA vs revenue share deals across different player LTV models for your vertical.',
    type: 'Tool',
    free: true,
  },
  {
    title: 'Casino Content Compliance Guide',
    description: 'What you can and can\'t say in gambling content across UK, Malta, India, and Canadian regulated markets.',
    type: 'Guide',
    free: true,
  },
  {
    title: 'Gaming Landing Page Template Pack',
    description: 'High-converting landing page wireframes for casino registration, sports bonus, and fantasy sports onboarding campaigns.',
    type: 'Templates',
    free: false,
  },
  {
    title: 'iGaming Keyword Research Framework',
    description: 'A proven framework for identifying high-intent, achievable keywords in competitive casino and sports betting SERPs.',
    type: 'Framework',
    free: true,
  },
  {
    title: 'Player Acquisition Channel Comparison Matrix',
    description: 'Compare SEO, PPC, affiliate, social, and email channels across CAC, LTV, compliance risk, and scale potential.',
    type: 'Matrix',
    free: false,
  },
];

export const ResourcesHub: React.FC = () => {
  return (
    <>
      <SEOHead
        title="iGaming Marketing Resources — Free Guides, Tools & Frameworks"
        description="Free resources for iGaming brands: SEO checklists, compliance guides, affiliate calculators, and landing page templates for casino and gaming operators."
        canonicalPath="/resources"
      />

      <section className="bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <Badge variant="purple" size="sm" className="mb-6">Free Resources</Badge>
              <h1 className="font-heading font-extrabold text-4xl lg:text-5xl text-white mb-5 leading-tight">
                iGaming Growth Resources
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed">
                Free tools, templates, guides, and frameworks to help gaming brands grow faster — with or without us.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      <Section variant="white" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESOURCES.map((r, idx) => (
              <MotionCard key={r.title} delay={idx * 60} variant="interactive">
                <div className="h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-purple-100 text-purple-700">
                      {r.type}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${r.free ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                      {r.free ? 'Free' : 'Premium'}
                    </span>
                  </div>

                  <h2 className="font-heading font-bold text-lg text-slate-900 mb-2 leading-snug flex-1">
                    {r.title}
                  </h2>

                  <p className="text-xs text-slate-500 leading-relaxed mb-5">{r.description}</p>

                  <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-700 font-semibold text-sm transition-colors">
                    {r.free ? 'Download Free' : 'Get Access'}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </MotionCard>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="gradient" spacing="md">
        <Container>
          <div className="max-w-2xl mx-auto text-center text-white space-y-5">
            <h2 className="font-heading font-extrabold text-3xl">Need More Than Resources?</h2>
            <p className="text-slate-300">Our team applies these frameworks to your brand with a custom growth strategy.</p>
            <Button to="/contact" variant="gold" size="lg">Work With Us</Button>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default ResourcesHub;
