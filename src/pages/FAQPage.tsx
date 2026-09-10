import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { SEOHead } from '../seo';
import { Container, Section, Badge, Button } from '../components/ui';
import { FadeIn } from '../components/animations';

const FAQ_ITEMS = [
  {
    q: 'What types of gaming businesses do you work with?',
    a: 'We work exclusively with iGaming businesses: online casino operators, sports betting platforms, fantasy sports apps, crypto and Web3 gaming brands, gaming affiliate sites and publishers, and game studios. We do not serve consumer-facing non-gaming clients.',
  },
  {
    q: 'Do you operate in regulated markets?',
    a: 'Yes — regulated markets are our specialty. We understand compliance constraints in the UK (UKGC), Malta (MGA), India, Canada, Australia, and the UAE. Every strategy we build is compliant from day one. We will not take on work that puts a client\'s licence at risk.',
  },
  {
    q: 'What does a typical engagement look like?',
    a: 'We start with a discovery call and free audit to understand your current situation and goals. We then deliver a tailored proposal with scope, timelines, and expected outcomes. Engagements typically start on a 3-month retainer basis, with monthly strategy reviews and transparent reporting.',
  },
  {
    q: 'How quickly can you start?',
    a: 'For most clients, we can begin onboarding within 5–7 business days of agreement. Urgent launch support (new casino launch, affiliate site migration) can be expedited. Contact us to discuss your timeline.',
  },
  {
    q: 'What\'s your minimum engagement size?',
    a: 'Our minimum retainer is typically $1,500/month for a focused single-service engagement (e.g., SEO only or content only). Full-stack growth programmes start from $3,000/month. Project-based work (website builds, audits) is quoted separately.',
  },
  {
    q: 'Can you work with new casino brands with no organic presence?',
    a: 'Absolutely — this is one of our core specialities. We\'ve taken multiple gaming brands from zero domain authority and zero organic traffic to category-leading positions. We build the foundation and scale systematically.',
  },
  {
    q: 'Do you provide white-label services for agencies?',
    a: 'Yes, we offer white-label SEO, content, and web development for digital agencies that have iGaming clients but lack the vertical expertise in-house. Speak to us about partnership options.',
  },
  {
    q: 'How do you measure and report results?',
    a: 'We track everything to business outcomes: organic traffic growth, keyword rankings, FTD volume from organic, CPA on paid campaigns, and revenue directly attributable to our work. You receive a monthly performance dashboard with full transparency.',
  },
  {
    q: 'Is the free SEO audit really free?',
    a: 'Yes, entirely free with no obligation. A senior iGaming SEO specialist manually reviews your site and delivers a prioritised action plan. We don\'t use automated tools to generate a 500-line report — it\'s a real human review. We offer it because it demonstrates our expertise and often surfaces opportunities you\'ll want our help executing.',
  },
  {
    q: 'How does iGaming Growth relate to Growth Service?',
    a: 'iGaming Growth is the specialist gaming vertical division of Growth Service, a full-service digital marketing agency. Our iGaming clients benefit from Growth Service\'s broader infrastructure — design, video, analytics, and enterprise SEO tooling — while working with a dedicated team that\'s exclusively focused on gaming verticals.',
  },
];

export const FAQPage: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <SEOHead
        title="FAQ — iGaming Growth Digital Agency"
        description="Frequently asked questions about iGaming Growth's services, process, pricing, and how we help casino operators, sportsbooks, and gaming brands scale."
        canonicalPath="/faq"
      />

      <section className="bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white py-20">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <FadeIn>
              <Badge variant="purple" size="sm" className="mb-6">FAQ</Badge>
              <h1 className="font-heading font-extrabold text-4xl lg:text-5xl text-white mb-5 leading-tight">
                Common Questions About Working With Us
              </h1>
              <p className="text-lg text-slate-300">
                Straight answers about our process, pricing, and what to expect when you partner with iGaming Growth.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      <Section variant="white" spacing="lg">
        <Container>
          <div className="max-w-3xl mx-auto space-y-3">
            {FAQ_ITEMS.map((item, idx) => (
              <FadeIn key={idx} delay={idx * 30}>
                <div className={`rounded-2xl border transition-all duration-200 ${
                  open === idx ? 'border-purple-300 shadow-md shadow-purple-100' : 'border-slate-200 hover:border-purple-200'
                }`}>
                  <button
                    onClick={() => setOpen(open === idx ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className={`font-heading font-bold text-base transition-colors ${
                      open === idx ? 'text-purple-700' : 'text-slate-900'
                    }`}>
                      {item.q}
                    </span>
                    <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${
                      open === idx ? 'rotate-180 text-purple-600' : 'text-slate-400'
                    }`} />
                  </button>

                  {open === idx && (
                    <div className="px-6 pb-5 text-sm text-slate-600 leading-relaxed border-t border-purple-100 pt-4">
                      {item.a}
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="gradient" spacing="md">
        <Container>
          <div className="max-w-2xl mx-auto text-center text-white space-y-5">
            <h2 className="font-heading font-extrabold text-3xl">Still Have Questions?</h2>
            <p className="text-slate-300">Our team responds to all enquiries within one business day.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button to="/contact" variant="gold" size="lg">Get in Touch</Button>
              <Button to="/free-seo-audit" variant="outline" size="lg" className="border-white/25 text-white hover:bg-white/10">
                Free SEO Audit
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default FAQPage;
