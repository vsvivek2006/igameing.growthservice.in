import React from 'react';
import { SEOHead, buildBreadcrumbSchema } from '../seo';
import { Container, Section, Card, Breadcrumb } from '../components/ui';
import { getBusinessName } from '../selectors';

export const EditorialPolicyPage: React.FC = () => {
  const businessName = getBusinessName();
  const breadcrumbs = [{ label: 'Editorial Standards', path: '/editorial-policy', current: true }];

  return (
    <>
      <SEOHead
        title="Editorial Standards & Rating Methodology | iGaming Growth"
        description="Our independent review framework, fact-checking procedures, and conflict-of-interest disclosures."
        canonicalPath="/editorial-policy"
        jsonLd={buildBreadcrumbSchema(breadcrumbs)}
      />

      <div className="bg-slate-900 text-white py-12 border-b border-purple-900/40">
        <Container>
          <Breadcrumb items={breadcrumbs} dark className="mb-4" />
          <h1 className="type-h2 text-white mb-3">Editorial Standards &amp; Methodology</h1>
          <p className="type-body-lg text-slate-300 max-w-3xl">
            How {businessName} verifies data, evaluates game mechanics, and maintains objectivity.
          </p>
        </Container>
      </div>

      <Section variant="white" spacing="md">
        <Container size="md">
          <div className="space-y-6 text-slate-700 leading-relaxed text-sm">
            <Card variant="base" className="space-y-2">
              <h2 className="font-heading font-bold text-lg text-slate-900">
                1. Mathematical Accuracy
              </h2>
              <p>
                All house edge calculations, return-to-player percentages, and payout odds published on this site are derived from verified mathematical simulations and published provider game sheets.
              </p>
            </Card>

            <Card variant="base" className="space-y-2">
              <h2 className="font-heading font-bold text-lg text-slate-900">
                2. Licensing &amp; Compliance Verification
              </h2>
              <p>
                We verify all operator and provider licenses directly with the issuing regulatory register (e.g. MGA register, UKGC public register) before including them in our reviews.
              </p>
            </Card>

            <Card variant="base" className="space-y-2">
              <h2 className="font-heading font-bold text-lg text-slate-900">
                3. Responsible Gaming Mandate
              </h2>
              <p>
                Every guide and review on our portal includes clear 18+ warnings, problem gambling disclosures, and direct helpline resources. We never encourage chasing losses or borrowing money to gamble.
              </p>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default EditorialPolicyPage;
