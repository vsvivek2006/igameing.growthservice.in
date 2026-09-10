import React from 'react';
import { SEOHead, buildBreadcrumbSchema } from '../seo';
import {
  Container,
  Section,
  SectionHeader,
  Card,
  Badge,
  Breadcrumb,
} from '../components/ui';
import {
  getResponsibleGamingPillars,
  getSupportDirectory,
} from '../selectors';
import { ShieldAlert, CheckCircle2, Phone, Globe } from 'lucide-react';

export const ResponsibleGamingPage: React.FC = () => {
  const pillars = getResponsibleGamingPillars();
  const support = getSupportDirectory();
  const breadcrumbs = [{ label: 'Responsible Gaming (18+)', path: '/responsible-gaming', current: true }];

  return (
    <>
      <SEOHead
        title="Responsible Gaming (18+) | Player Protection & Support"
        description="Comprehensive responsible gaming guidelines, bankroll boundaries, self-exclusion tools, and free confidential helplines for problem gambling prevention."
        canonicalPath="/responsible-gaming"
        jsonLd={buildBreadcrumbSchema(breadcrumbs)}
      />

      <div className="bg-slate-900 text-white py-12 border-b border-purple-900/40">
        <Container>
          <Breadcrumb items={breadcrumbs} dark className="mb-4" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400 text-slate-950 font-bold text-xs mb-3">
            <ShieldAlert className="w-4 h-4" />
            <span>Strict 18+ Player Protection Policy</span>
          </div>
          <h1 className="type-h2 text-white mb-3">Responsible Gaming &amp; Player Protection</h1>
          <p className="type-body-lg text-slate-300 max-w-3xl">
            Casino games must be treated strictly as paid entertainment, never as an investment or income generator. Learn how to maintain control and access immediate help.
          </p>
        </Container>
      </div>

      {/* Pillars of Safe Gaming */}
      <Section variant="white" spacing="md">
        <Container>
          <SectionHeader
            eyebrow="Core Principles"
            title="Four Pillars of Responsible Gambling"
            subtitle="Understand the mathematical reality of gambling and protect your financial and mental wellbeing."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, idx) => (
              <Card key={idx} variant="elevated" className="space-y-4">
                <h2 className="font-heading font-bold text-xl text-purple-900 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-purple-100 text-purple-700 text-xs flex items-center justify-center flex-shrink-0">
                    {idx + 1}
                  </span>
                  {pillar.title}
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {pillar.summary}
                </p>

                <ul className="space-y-2 pt-2 border-t border-slate-100">
                  {pillar.recommendations.map((rec, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Free Confidential Helplines & Support Directory */}
      <Section variant="subtle" spacing="md" id="self-exclusion">
        <Container>
          <SectionHeader
            eyebrow="Confidential Assistance"
            title="Free Professional Helplines &amp; Resources"
            subtitle="If gambling is causing emotional distress or financial hardship, contact these accredited organizations immediately."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {support.map((res, idx) => (
              <Card key={idx} variant="base" className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading font-bold text-lg text-slate-900">
                    {res.name}
                  </h3>
                  <Badge variant="purple" size="sm">{res.coverage}</Badge>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {res.description}
                </p>

                <div className="pt-3 border-t border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
                  <span className="flex items-center gap-1.5 font-bold text-slate-800">
                    <Phone className="w-3.5 h-3.5 text-emerald-600" />
                    {res.phone}
                  </span>
                  <a
                    href={res.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-purple-700 hover:underline font-semibold"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    Visit Website
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
};

export default ResponsibleGamingPage;
