import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Globe, TrendingUp, Users, Award, Zap } from 'lucide-react';
import { SEOHead } from '../seo';
import { Container, Section, Button } from '../components/ui';
import { FadeIn, MotionCard } from '../components/animations';

const TEAM_VALUES = [
  {
    icon: Target,
    title: 'ROI Over Vanity',
    desc: 'We measure every campaign against qualified customer conversions, pipeline revenue, and business growth — not impressions or vanity metrics.',
  },
  {
    icon: Globe,
    title: 'Regulated Market First',
    desc: 'Compliance is built into every strategy. We know what\'s allowed in each jurisdiction and never put your licence at risk.',
  },
  {
    icon: TrendingUp,
    title: 'Sustainable Growth',
    desc: 'Organic SEO compounds. We build assets — rankings, content, authority — not just campaign spikes that disappear.',
  },
  {
    icon: Users,
    title: 'Partner, Not Vendor',
    desc: 'We embed with your team, attend planning meetings, and take ownership of outcomes like an internal growth function would.',
  },
  {
    icon: Award,
    title: 'Vertical Depth',
    desc: 'We work exclusively in high-competition, policy-sensitive digital verticals: iGaming, casino, cricket gaming, Yono, color prediction, color trading, stock market/financial, and adult-industry B2B marketing.',
  },
  {
    icon: Zap,
    title: 'Speed of Execution',
    desc: 'High-competition verticals move fast. We operate with engineering urgency — delivering technical audits, architectural roadmaps, and implementation milestones on defined timelines.',
  },
];

export const AboutPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="About iGaming Growth — Specialist Digital Agency for Gaming Brands"
        description="iGaming Growth is a specialist B2B digital growth agency helping casino operators, sportsbooks, and gaming brands scale through SEO, performance marketing, and web development."
        canonicalPath="/about"
      />

      {/* Hero */}
      <section className="relative bg-navy-950 bg-hero-atmosphere text-white py-20 lg:py-28 overflow-hidden border-b border-navy-800/80">
        <div className="absolute inset-0 bg-dark-mesh opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[400px] rounded-full bg-purple-600/10 blur-[100px] pointer-events-none" />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-6">
                <span>Agency Manifesto & Operating DNA</span>
              </div>
              <h1 className="type-h1 text-white mb-5">
                The Agency Built for High-Competition Verticals
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
                iGaming Growth is an engineering-led B2B growth agency. We do not serve generic retail or consumer brands. We build proprietary organic systems exclusively for casino operators, gaming platforms, fintech portals, and high-velocity digital niches.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Story */}
      <Section variant="white" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-purple-600 mb-4">Our Story</div>
                <h2 className="font-heading font-extrabold text-3xl text-slate-900 mb-6 leading-tight">
                  Born from Frustration With Generic Agencies
                </h2>
                <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                  <p>
                    iGaming Growth was built to address a clear gap: businesses in gaming, casino, financial trading, and other high-competition digital verticals were being served by generalist agencies applying frameworks designed for mainstream commercial markets. Generic keyword research. Non-compliant ad copy. Technical SEO advice that did not account for crawl budget economics or YMYL scrutiny.
                  </p>
                  <p>
                    We built iGaming Growth as a specialist alternative: a B2B growth agency that starts from the specific competitive reality of your vertical — the authority thresholds, compliance boundaries, content standards, and search heuristics specific to your market. We work on technical architecture, content authority, acquisition systems, and conversion infrastructure.
                  </p>
                  <p>
                    Today, iGaming Growth operates as a dedicated B2B growth agency delivering performance SEO, technical development, and conversion marketing across high-competition markets in India and globally.
                  </p>
                </div>

                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm transition-colors"
                  >
                    Work With Us <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </FadeIn>

            {/* Stats sidebar */}
            <FadeIn delay={200}>
              <div className="grid grid-cols-2 gap-5">
                {[
                  { value: '8', label: 'Specialist Verticals' },
                  { value: '12', label: 'Growth Disciplines' },
                  { value: '100%', label: 'Architecture Ownership' },
                  { value: '0', label: 'Algorithmic Shortcuts / White-Hat' },
                  { value: '24h', label: 'Diagnostic Scoping' },
                  { value: '1:1', label: 'Senior Engineer Engagement' },
                ].map((s) => (
                  <div key={s.label} className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-100 text-center">
                    <div className="text-3xl font-heading font-extrabold text-purple-700 mb-1">{s.value}</div>
                    <div className="text-xs text-slate-500 font-medium">{s.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section variant="subtle" spacing="lg">
        <Container>
          <div className="max-w-2xl mx-auto text-center mb-12">
            <div className="text-xs font-bold uppercase tracking-widest text-purple-600 mb-4">How We Work</div>
            <h2 className="font-heading font-extrabold text-3xl text-slate-900 leading-tight">
              Our Operating Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM_VALUES.map((v, idx) => {
              const Icon = v.icon;
              return (
                <MotionCard key={v.title} delay={idx * 60} variant="default">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-purple-600" />
                  </div>
                  <h3 className="font-heading font-bold text-base text-slate-900 mb-2">{v.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{v.desc}</p>
                </MotionCard>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Technical Competence & Infrastructure */}
      <Section variant="white" spacing="md">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <FadeIn>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-purple-600 mb-4">Technical Competence</div>
                  <h2 className="font-heading font-bold text-2xl text-slate-900 mb-4">
                    Engineering Infrastructure
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Our technical work spans server-side rendering analysis, crawl log interpretation, JavaScript rendering evaluation, structured data pipeline construction, Core Web Vitals engineering, and canonical architecture design — across platforms including React, Next.js, WordPress, and custom stacks.
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Every engagement starts from a code-level diagnostic rather than a surface-level audit tool output. Our schema pipelines are validated programmatically. Internal linking graphs are modelled before implementation. Authority acquisition is quality-controlled through editorial review.
                  </p>
                  <div className="mt-6">
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-sm font-semibold hover:border-purple-300 hover:text-purple-600 transition-colors"
                    >
                      Explore Services <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={150}>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-purple-600 mb-4">Compliance &amp; Editorial Standards</div>
                  <h2 className="font-heading font-bold text-2xl text-slate-900 mb-4">
                    How We Work With Policy-Sensitive Verticals
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    We operate across verticals where regulatory complexity, advertising platform policy, and content compliance are primary constraints — not afterthoughts. Paid advertising eligibility, jurisdiction restrictions, and platform certification requirements are factored into every acquisition strategy.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="w-2 h-2 rounded-full bg-purple-600" />
                      </span>
                      <span>No ranking guarantees — process transparency only</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="w-2 h-2 rounded-full bg-purple-600" />
                      </span>
                      <span>Zero fabricated case studies, fake testimonials, or manufactured social proof</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="w-2 h-2 rounded-full bg-purple-600" />
                      </span>
                      <span>Paid media described with accurate platform eligibility framing — never positioned as policy bypass</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="w-2 h-2 rounded-full bg-purple-600" />
                      </span>
                      <span>Adult-industry and escort vertical work is strictly B2B marketing agency scope — no explicit content</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link
                      to="/editorial-policy"
                      className="inline-flex items-center gap-2 text-sm font-bold text-purple-700 hover:text-purple-900 transition-colors"
                    >
                      Read Our Editorial Policy <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <section className="relative bg-navy-950 bg-hero-atmosphere text-white py-20 overflow-hidden border-t border-navy-800/80">
        <div className="absolute inset-0 bg-dark-mesh opacity-20 pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider">
              <span>Direct Commercial Partnership</span>
            </div>
            <h2 className="type-h2 text-white">Ready to Scale Together?</h2>
            <p className="text-slate-300 text-sm leading-relaxed max-w-xl mx-auto">
              Tell us about your digital platform and target growth goals. We will prepare an architectural roadmap and competitive gap analysis within 24 business hours.
            </p>
            <div className="flex flex-wrap items-center gap-4 justify-center pt-2">
              <Button to="/contact" variant="gold" size="lg">Get a Free Proposal</Button>
              <Button to="/resources" variant="outline" size="lg" className="border-navy-700 text-white hover:bg-navy-800/60">
                Explore Engineering Guides
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
          </div>
        </Container>
      </section>
    </>
  );
};

export default AboutPage;
