import React from 'react';
import { SEOHead, buildBreadcrumbSchema } from '../seo';
import { Container, Section, Card, Breadcrumb } from '../components/ui';

export const RulesGlossaryPage: React.FC = () => {
  const breadcrumbs = [{ label: 'Rules & Glossary', path: '/rules', current: true }];

  const terms = [
    { term: 'Return to Player (RTP)', desc: 'The theoretical percentage of all money wagered that a game returns to players over an infinite number of rounds.' },
    { term: 'House Edge', desc: 'The mathematical ratio of the expected player loss to the initial amount wagered. Equivalent to 100% minus the RTP.' },
    { term: 'Volatility (Variance)', desc: 'The risk profile of a casino game indicating the frequency and average magnitude of payouts.' },
    { term: 'Random Number Generator (RNG)', desc: 'A computational algorithm that generates sequences of numbers lacking any pattern, ensuring unexpected game outcomes.' },
    { term: 'Provably Fair', desc: 'A cryptographic algorithm (commonly SHA-256) allowing players to mathematically verify that the outcome was predetermined and untampered.' },
    { term: 'Basic Strategy', desc: 'The mathematically optimal decision (hit, stand, double, split) for every blackjack hand against every possible dealer upcard.' },
    { term: 'Wagering Requirement', desc: 'A bonus multiplier indicating how many times bonus funds must be turned over before withdrawal is permitted.' },
    { term: 'Bankroll', desc: 'The dedicated sum of money set aside specifically for gaming entertainment, completely isolated from living expenses.' },
  ];

  return (
    <>
      <SEOHead
        title="iGaming Rules & Terminology Glossary | Complete A-Z Dictionary"
        description="Master casino terminology: RTP, house edge, volatility, RNG, provably fair algorithms, and card game jargon explained clearly."
        canonicalPath="/rules"
        jsonLd={buildBreadcrumbSchema(breadcrumbs)}
      />

      <div className="bg-slate-900 text-white py-12 border-b border-purple-900/40">
        <Container>
          <Breadcrumb items={breadcrumbs} dark className="mb-4" />
          <h1 className="type-h2 text-white mb-3">Rules &amp; Terminology Glossary</h1>
          <p className="type-body-lg text-slate-300 max-w-3xl">
            A comprehensive reference dictionary for essential casino math, technical terms, and gaming mechanics.
          </p>
        </Container>
      </div>

      <Section variant="white" spacing="md">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {terms.map((item, idx) => (
              <Card key={idx} variant="base" className="space-y-2">
                <h2 className="font-heading font-bold text-lg text-purple-700">
                  {item.term}
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
};

export default RulesGlossaryPage;
