import React from 'react';
import { SEOHead, buildBreadcrumbSchema } from '../seo';
import { Container, Section, Card, Breadcrumb } from '../components/ui';
import { getBusinessName } from '../selectors';

export const PrivacyPage: React.FC = () => {
  const businessName = getBusinessName();
  const breadcrumbs = [{ label: 'Privacy Policy', path: '/privacy', current: true }];

  return (
    <>
      <SEOHead
        title="Privacy Policy | iGaming Growth"
        description="Privacy and data protection policy for users accessing iGaming Growth."
        canonicalPath="/privacy"
        jsonLd={buildBreadcrumbSchema(breadcrumbs)}
      />

      <div className="bg-slate-900 text-white py-12 border-b border-purple-900/40">
        <Container>
          <Breadcrumb items={breadcrumbs} dark className="mb-4" />
          <h1 className="type-h2 text-white mb-3">Privacy Policy</h1>
          <p className="type-body-lg text-slate-300 max-w-3xl">
            How {businessName} handles privacy, analytics, and user rights.
          </p>
        </Container>
      </div>

      <Section variant="white" spacing="md">
        <Container size="md">
          <div className="space-y-6 text-slate-700 leading-relaxed text-sm">
            <Card variant="base" className="space-y-2">
              <h2 className="font-heading font-bold text-lg text-slate-900">
                1. Minimal Data Collection
              </h2>
              <p>
                We do not require user accounts, passwords, or financial payment credentials. We only collect anonymous aggregated performance metrics to optimize site performance and accessibility.
              </p>
            </Card>

            <Card variant="base" className="space-y-2">
              <h2 className="font-heading font-bold text-lg text-slate-900">
                2. Cookies &amp; Local Storage
              </h2>
              <p>
                Cookies may be utilized solely for essential user preferences, caching, and anonymized traffic metrics. We do not sell or monetize personal data to third-party ad brokers.
              </p>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default PrivacyPage;
