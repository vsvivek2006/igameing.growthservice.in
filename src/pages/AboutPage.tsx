import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Globe, TrendingUp, Users, Award, Zap } from 'lucide-react';
import { SEOHead } from '../seo';
import { Container, Section, Badge, Button } from '../components/ui';
import { FadeIn, MotionCard } from '../components/animations';
import businessConfig from '../config/business';

const TEAM_VALUES = [
  {
    icon: Target,
    title: 'ROI Over Vanity',
    desc: 'We measure every campaign against depositing players, revenue, and qualified leads — not impressions or followers.',
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
    desc: 'We only work in iGaming. This means we know the players, the platforms, the regulators, and the competitive dynamics.',
  },
  {
    icon: Zap,
    title: 'Speed of Execution',
    desc: 'iGaming moves fast. We operate with startup urgency — delivering strategies, creatives, and campaigns in days, not quarters.',
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
      <section className="bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <Badge variant="purple" size="sm" className="mb-6">About Us</Badge>
              <h1 className="font-heading font-extrabold text-4xl lg:text-5xl text-white mb-5 leading-tight">
                The Agency Built for iGaming — and Only iGaming
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed">
                iGaming Growth is a specialist digital growth agency. We don't serve retail, SaaS, or e-commerce brands. We work exclusively with casino operators, sportsbooks, fantasy sports platforms, affiliates, and game studios.
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
                    iGaming Growth was founded after years of watching casino operators and gaming startups burn budget on agencies that didn't understand the vertical. Generic SEO advice. Non-compliant ad copy. Landing pages that worked for software companies but failed for gaming funnels.
                  </p>
                  <p>
                    We built iGaming Growth as the antidote: a team with operator experience, affiliate network knowledge, and a track record in the most competitive digital niches on earth. We launch brands from zero, scale established operators into new geos, and fix broken growth engines for mature businesses.
                  </p>
                  <p>
                    Today, iGaming Growth is a specialist growth division of{' '}
                    <a href={businessConfig.parentBrandUrl} target="_blank" rel="noopener noreferrer" className="text-purple-600 font-semibold hover:underline">
                      {businessConfig.parentBrand}
                    </a>
                    , the full-service digital marketing agency trusted by brands across India and globally.
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
                  { value: '50+', label: 'Gaming Brands Served' },
                  { value: '12+', label: 'Countries' },
                  { value: `${new Date().getFullYear() - businessConfig.establishedYear + 1}+`, label: 'Years in iGaming' },
                  { value: '4.9/5', label: 'Client Satisfaction' },
                  { value: '3x–12x', label: 'Avg ROI Delivered' },
                  { value: '100%', label: 'Regulated Markets' },
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

      {/* Parent brand */}
      <Section variant="white" spacing="md">
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Part of</div>
            <h2 className="font-heading font-bold text-2xl text-slate-900">
              A Growth Service Initiative
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              iGaming Growth is the specialist gaming vertical of{' '}
              <a href={businessConfig.parentBrandUrl} target="_blank" rel="noopener noreferrer" className="text-purple-600 font-semibold hover:underline">
                Growth Service
              </a>
              , a full-service digital marketing agency with a multi-vertical growth portfolio. Our parent brand's infrastructure gives iGaming clients access to enterprise-grade SEO tooling, analytics, and creative production at competitive rates.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a
                href={businessConfig.parentBrandUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-sm font-semibold hover:border-purple-300 hover:text-purple-600 transition-colors"
              >
                Visit Growth Service <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section variant="gradient" spacing="md">
        <Container>
          <div className="max-w-2xl mx-auto text-center text-white space-y-5">
            <h2 className="font-heading font-extrabold text-3xl">Ready to Scale Together?</h2>
            <p className="text-slate-300">Tell us about your gaming brand and growth ambitions. We'll send a tailored proposal within 24 hours.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button to="/contact" variant="gold" size="lg">Get a Free Proposal</Button>
              <Button to="/case-studies" variant="outline" size="lg" className="border-white/25 text-white hover:bg-white/10">
                See Our Results
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default AboutPage;
