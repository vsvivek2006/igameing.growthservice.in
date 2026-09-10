import React from 'react';
import { SEOHead, buildBreadcrumbSchema } from '../seo';
import {
  Container,
  Section,
  Card,
  Badge,
  Breadcrumb,
} from '../components/ui';
import { Scale } from 'lucide-react';

export const ComparisonsHub: React.FC = () => {
  const breadcrumbs = [{ label: 'Comparisons', path: '/comparisons', current: true }];

  const comparisons = [
    {
      title: 'Live Dealer vs RNG Casino Games',
      tag: 'Gameplay Dynamics',
      summary: 'Low-latency studio stream authenticity compared to instantaneous RNG spin velocity and privacy.',
      winner: 'Context dependent: Live Dealer for immersion, RNG for speed & low stakes.',
    },
    {
      title: 'European Roulette vs American Roulette',
      tag: 'Mathematical Odds',
      summary: 'Direct mathematical comparison of single-zero (2.70% edge) vs double-zero (5.26% edge) probability impact on bankroll.',
      winner: 'European Roulette wins definitively with half the casino advantage.',
    },
    {
      title: 'Crypto Casinos vs Fiat Currency Platforms',
      tag: 'Banking & Verification',
      summary: 'USDT blockchain speed and privacy compared to regulated domestic UPI and net banking protections.',
      winner: 'Crypto for global cashout speed; Fiat for direct bank compliance.',
    },
    {
      title: 'High Volatility vs Low Volatility Slots',
      tag: 'Variance Analysis',
      summary: 'Big hit frequencies vs steady line-hit preservation for recreational bankroll management.',
      winner: 'Low volatility for extended playtime; High for jackpot hunting.',
    },
  ];

  return (
    <>
      <SEOHead
        title="Casino & Game Comparisons | Objective Head-to-Head Matrices"
        description="Data-driven comparisons of casino software, odds, payment systems, live dealer tables, and volatility profiles."
        canonicalPath="/comparisons"
        jsonLd={buildBreadcrumbSchema(breadcrumbs)}
      />

      <div className="bg-slate-900 text-white py-12 border-b border-purple-900/40">
        <Container>
          <Breadcrumb items={breadcrumbs} dark className="mb-4" />
          <h1 className="type-h2 text-white mb-3">Head-to-Head Comparisons</h1>
          <p className="type-body-lg text-slate-300 max-w-3xl">
            Objective side-by-side evaluations to help you make informed decisions on games, platforms, and banking rails.
          </p>
        </Container>
      </div>

      <Section variant="white" spacing="md">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {comparisons.map((c, idx) => (
              <Card key={idx} variant="elevated" className="space-y-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="purple" size="sm">
                      <Scale className="w-3 h-3 mr-1" />
                      {c.tag}
                    </Badge>
                  </div>
                  <h2 className="font-heading font-bold text-xl text-slate-900 mb-2">
                    {c.title}
                  </h2>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {c.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 bg-slate-50 p-3 rounded-xl text-xs text-slate-700">
                  <strong className="text-purple-700">Editorial Verdict:</strong> {c.winner}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
};

export default ComparisonsHub;
