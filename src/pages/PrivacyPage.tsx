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
        description="How iGaming Growth collects, uses, and protects data submitted through our website and B2B service enquiry forms."
        canonicalPath="/privacy"
        jsonLd={buildBreadcrumbSchema(breadcrumbs)}
      />

      <div className="bg-slate-900 text-white py-12 border-b border-purple-900/40">
        <Container>
          <Breadcrumb items={breadcrumbs} dark className="mb-4" />
          <h1 className="type-h2 text-white mb-3">Privacy Policy</h1>
          <p className="type-body-lg text-slate-300 max-w-3xl">
            How {businessName} handles information you share through this website and our B2B service enquiry process. Last reviewed: September 2026.
          </p>
        </Container>
      </div>

      <Section variant="white" spacing="md">
        <Container size="md">
          <div className="space-y-6 text-slate-700 leading-relaxed text-sm">
            <Card variant="base" className="space-y-2">
              <h2 className="font-heading font-bold text-lg text-slate-900">
                1. Who We Are
              </h2>
              <p>
                {businessName} is a specialist B2B digital growth agency. This privacy policy applies to information collected through{' '}
                <span className="font-semibold">igameing.growthservice.in</span>, including contact forms, SEO audit request forms, and strategy call booking pages.
              </p>
            </Card>

            <Card variant="base" className="space-y-2">
              <h2 className="font-heading font-bold text-lg text-slate-900">
                2. Information We Collect
              </h2>
              <p>
                When you submit an enquiry, audit request, or strategy call booking, we collect the information you provide in the form — which may include your name, business or brand name, email address, website URL, industry vertical, target market description, and notes about your current priority or project requirements.
              </p>
              <p>
                We also collect anonymised, aggregated site analytics (page visits, session duration, referral source) to understand how the website is used and to improve content. No personally identifiable information is collected through analytics.
              </p>
            </Card>

            <Card variant="base" className="space-y-2">
              <h2 className="font-heading font-bold text-lg text-slate-900">
                3. How We Use Your Information
              </h2>
              <p>
                Information submitted through forms is used exclusively to assess your enquiry, prepare a relevant response or diagnostic, and communicate with you about potential engagement with {businessName}. We do not sell, rent, or share your information with third-party advertisers or data brokers.
              </p>
              <p>
                Your contact details may be stored in our CRM system so that we can track the progress of an enquiry and ensure follow-up. This storage is solely for the purpose of delivering our service.
              </p>
            </Card>

            <Card variant="base" className="space-y-2">
              <h2 className="font-heading font-bold text-lg text-slate-900">
                4. Data Retention
              </h2>
              <p>
                Enquiry data is retained for as long as is necessary to respond to and follow up on your request. If no engagement proceeds, enquiry data is reviewed and deleted within 12 months. Active client data is retained for the duration of the engagement and for a reasonable period afterward for business continuity purposes.
              </p>
            </Card>

            <Card variant="base" className="space-y-2">
              <h2 className="font-heading font-bold text-lg text-slate-900">
                5. Cookies &amp; Analytics
              </h2>
              <p>
                This website may use cookies and local storage for essential site functionality (session continuity, preference storage) and anonymised performance analytics. We do not use advertising cookies, retargeting pixels, or cross-site tracking mechanisms.
              </p>
              <p>
                Analytics data is used in aggregate form to understand site performance and improve content quality. Individual users are not identified or profiled.
              </p>
            </Card>

            <Card variant="base" className="space-y-2">
              <h2 className="font-heading font-bold text-lg text-slate-900">
                6. Third-Party Tools
              </h2>
              <p>
                We may use third-party tools for analytics, CRM, and communication (such as Google Analytics, a CRM platform, and email infrastructure). These tools process data in accordance with their own privacy policies. We choose tools that offer privacy-respecting configurations and data processing agreements.
              </p>
            </Card>

            <Card variant="base" className="space-y-2">
              <h2 className="font-heading font-bold text-lg text-slate-900">
                7. Your Rights
              </h2>
              <p>
                You have the right to request access to the information we hold about you, to request correction of inaccurate data, and to request deletion of your data where we have no continuing legitimate purpose for retaining it. To exercise any of these rights, contact us at{' '}
                <a
                  href="mailto:hello@igameing.growthservice.in"
                  className="text-purple-700 font-semibold hover:text-purple-900 transition-colors"
                >
                  hello@igameing.growthservice.in
                </a>.
              </p>
            </Card>

            <Card variant="base" className="space-y-2">
              <h2 className="font-heading font-bold text-lg text-slate-900">
                8. Changes to This Policy
              </h2>
              <p>
                This policy may be updated as our services, tooling, or applicable regulations evolve. Material changes are noted by updating the review date. We encourage periodic review of this page.
              </p>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default PrivacyPage;
