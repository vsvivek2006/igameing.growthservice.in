import React from 'react';
import { SEOHead, buildBreadcrumbSchema } from '../seo';
import { Container, Section, Card, Breadcrumb } from '../components/ui';
import { getBusinessName } from '../selectors';

export const TermsPage: React.FC = () => {
  const businessName = getBusinessName();
  const breadcrumbs = [{ label: 'Terms of Use', path: '/terms', current: true }];

  return (
    <>
      <SEOHead
        title="Terms of Use | iGaming Growth"
        description="Terms and conditions governing the informational and educational use of iGaming Growth."
        canonicalPath="/terms"
        jsonLd={buildBreadcrumbSchema(breadcrumbs)}
      />

      <div className="bg-slate-900 text-white py-12 border-b border-purple-900/40">
        <Container>
          <Breadcrumb items={breadcrumbs} dark className="mb-4" />
          <h1 className="type-h2 text-white mb-3">Terms of Use</h1>
          <p className="type-body-lg text-slate-300 max-w-3xl">
            Legal conditions regarding access and educational use of {businessName}.
          </p>
        </Container>
      </div>

      <Section variant="white" spacing="md">
        <Container size="md">
          <div className="space-y-6 text-slate-700 leading-relaxed text-sm">
            <Card variant="base" className="space-y-2">
              <h2 className="font-heading font-bold text-lg text-slate-900">
                1. Purely Informational Nature
              </h2>
              <p>
                All content, calculations, reviews, and guides provided on {businessName} are intended strictly for educational and entertainment purposes. We do not provide financial advice, legal counsel, or commercial gambling services.
              </p>
            </Card>

            <Card variant="base" className="space-y-2">
              <h2 className="font-heading font-bold text-lg text-slate-900">
                2. Age Restriction (18+ Only)
              </h2>
              <p>
                Access to this website is restricted exclusively to individuals who are at least 18 years of age (or the legal age of majority for gambling in your jurisdiction).
              </p>
            </Card>

            <Card variant="base" className="space-y-2">
              <h2 className="font-heading font-bold text-lg text-slate-900">
                3. Limitation of Liability
              </h2>
              <p>
                {businessName} accepts no liability for financial losses incurred by users engaging in real-money gambling on third-party platforms. Wagers are placed entirely at the user's own risk.
              </p>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default TermsPage;
