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
        description="Terms and conditions governing access to and use of iGaming Growth's website, content, and B2B digital growth services."
        canonicalPath="/terms"
        jsonLd={buildBreadcrumbSchema(breadcrumbs)}
      />

      <div className="bg-slate-900 text-white py-12 border-b border-purple-900/40">
        <Container>
          <Breadcrumb items={breadcrumbs} dark className="mb-4" />
          <h1 className="type-h2 text-white mb-3">Terms of Use</h1>
          <p className="type-body-lg text-slate-300 max-w-3xl">
            Legal conditions governing access to and use of the {businessName} website and services. Last reviewed: September 2026.
          </p>
        </Container>
      </div>

      <Section variant="white" spacing="md">
        <Container size="md">
          <div className="space-y-6 text-slate-700 leading-relaxed text-sm">
            <Card variant="base" className="space-y-2">
              <h2 className="font-heading font-bold text-lg text-slate-900">
                1. Nature of This Website
              </h2>
              <p>
                {businessName} operates as a specialist B2B digital growth agency. This website is an informational and commercial resource for businesses operating in high-competition digital verticals seeking SEO, website development, authority acquisition, paid media management, and related professional services.
              </p>
              <p>
                This website does not operate as a gambling platform, betting exchange, financial trading service, or consumer gaming portal. No wagering, gambling, or financial transactions occur on or through this website.
              </p>
            </Card>

            <Card variant="base" className="space-y-2">
              <h2 className="font-heading font-bold text-lg text-slate-900">
                2. Access and Permitted Use
              </h2>
              <p>
                Access to this website is permitted for business owners, operators, founders, and growth professionals evaluating or engaging B2B digital marketing services. You may not reproduce, distribute, or commercially exploit site content without written permission.
              </p>
              <p>
                Automated scraping, crawling beyond standard search engine indexation, or misuse of contact forms for commercial solicitation is strictly prohibited.
              </p>
            </Card>

            <Card variant="base" className="space-y-2">
              <h2 className="font-heading font-bold text-lg text-slate-900">
                3. Services Scope
              </h2>
              <p>
                {businessName} provides B2B professional services including technical SEO, SEO-first website development, content strategy, authority and link acquisition, digital PR, conversion optimisation, analytics and attribution, and paid acquisition management where platform eligibility permits.
              </p>
              <p>
                Paid advertising availability depends on the client's business model, destination, jurisdiction, licence or certification status, and platform policy. We do not guarantee advertising eligibility for any specific platform or jurisdiction.
              </p>
            </Card>

            <Card variant="base" className="space-y-2">
              <h2 className="font-heading font-bold text-lg text-slate-900">
                4. No Ranking Guarantees
              </h2>
              <p>
                Search engine rankings are determined by third-party algorithms ({businessName} has no control over Google, Bing, or other search engine ranking systems). We do not promise, guarantee, or imply specific ranking positions, traffic volumes, or revenue outcomes.
              </p>
              <p>
                Service agreements define deliverables, process commitments, and reporting obligations — not guaranteed outcomes.
              </p>
            </Card>

            <Card variant="base" className="space-y-2">
              <h2 className="font-heading font-bold text-lg text-slate-900">
                5. Intellectual Property
              </h2>
              <p>
                All website content, design, copy, data structures, and technical documentation are the intellectual property of {businessName} unless otherwise stated. Work produced under client engagements is governed by individual service agreements.
              </p>
            </Card>

            <Card variant="base" className="space-y-2">
              <h2 className="font-heading font-bold text-lg text-slate-900">
                6. Limitation of Liability
              </h2>
              <p>
                {businessName} accepts no liability for business decisions made based on information published on this website. All content is provided for informational purposes. Specific strategic advice is provided under formal engagement agreements, not through this website.
              </p>
            </Card>

            <Card variant="base" className="space-y-2">
              <h2 className="font-heading font-bold text-lg text-slate-900">
                7. External Links
              </h2>
              <p>
                This website may link to third-party tools, research sources, or partner resources. {businessName} is not responsible for the content, accuracy, or policies of external websites.
              </p>
            </Card>

            <Card variant="base" className="space-y-2">
              <h2 className="font-heading font-bold text-lg text-slate-900">
                8. Changes to These Terms
              </h2>
              <p>
                These terms may be updated as the business evolves or as regulatory and platform requirements change. Continued use of the website constitutes acceptance of the current terms. Material changes will be noted by updating the review date at the top of this page.
              </p>
            </Card>

            <Card variant="base" className="space-y-2">
              <h2 className="font-heading font-bold text-lg text-slate-900">
                9. Contact
              </h2>
              <p>
                For questions about these terms or our services, contact us at{' '}
                <a
                  href="mailto:hello@igameing.growthservice.in"
                  className="text-purple-700 font-semibold hover:text-purple-900 transition-colors"
                >
                  hello@igameing.growthservice.in
                </a>.
              </p>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default TermsPage;
