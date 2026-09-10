import React from 'react';
import { SEOHead, buildBreadcrumbSchema } from '../seo';
import { Container, Section, Card, Badge, Breadcrumb } from '../components/ui';

export const NewsHub: React.FC = () => {
  const breadcrumbs = [{ label: 'iGaming News', path: '/news', current: true }];

  const articles = [
    {
      title: 'Global Regulatory Updates: Licensing Enforcement & Player Protection Standards',
      date: 'March 2026',
      tag: 'Regulation',
      summary: 'Regulatory bodies across Europe and Asia implement stricter limits on deposit thresholds and AI-driven early detection of problem gambling behaviors.',
    },
    {
      title: 'The Evolution of Provably Fair Hash Verification in Modern Multiplier Games',
      date: 'February 2026',
      tag: 'Technology',
      summary: 'How cryptographic verification is transitioning from niche crypto casinos into mainstream studio titles to enhance player transparency.',
    },
    {
      title: 'Mobile Payout Latency Analysis: UPI vs USDT Blockchain Speed Benchmarks',
      date: 'February 2026',
      tag: 'Banking',
      summary: 'A statistical study evaluating withdrawal approval queues and blockchain settlement times across 50 international operators.',
    },
  ];

  return (
    <>
      <SEOHead
        title="iGaming News & Regulatory Updates | Industry Intelligence"
        description="Latest developments in online gaming regulation, licensing reforms, game technology, and player protection measures."
        canonicalPath="/news"
        jsonLd={buildBreadcrumbSchema(breadcrumbs)}
      />

      <div className="bg-slate-900 text-white py-12 border-b border-purple-900/40">
        <Container>
          <Breadcrumb items={breadcrumbs} dark className="mb-4" />
          <h1 className="type-h2 text-white mb-3">iGaming News &amp; Regulatory Updates</h1>
          <p className="type-body-lg text-slate-300 max-w-3xl">
            Objective reporting on statutory regulations, technological advancements, and consumer protection developments.
          </p>
        </Container>
      </div>

      <Section variant="white" spacing="md">
        <Container>
          <div className="space-y-6">
            {articles.map((item, idx) => (
              <Card key={idx} variant="elevated" className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Badge variant="purple" size="sm">{item.tag}</Badge>
                  <span>{item.date}</span>
                </div>
                <h2 className="font-heading font-bold text-xl text-slate-900">
                  {item.title}
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.summary}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
};

export default NewsHub;
