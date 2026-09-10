import React from 'react';
import { SEOHead, buildBreadcrumbSchema } from '../seo';
import { Container, Section, Card, Breadcrumb } from '../components/ui';
import { getBusinessName } from '../selectors';

export const EditorialPolicyPage: React.FC = () => {
  const businessName = getBusinessName();
  const breadcrumbs = [{ label: 'Editorial Policy', path: '/editorial-policy', current: true }];

  return (
    <>
      <SEOHead
        title="Editorial Policy & Content Standards | iGaming Growth"
        description="How iGaming Growth maintains accuracy, transparency, and B2B editorial integrity across its technical guides, industry insights, and agency content."
        canonicalPath="/editorial-policy"
        jsonLd={buildBreadcrumbSchema(breadcrumbs)}
      />

      <div className="bg-slate-900 text-white py-12 border-b border-purple-900/40">
        <Container>
          <Breadcrumb items={breadcrumbs} dark className="mb-4" />
          <h1 className="type-h2 text-white mb-3">Editorial Policy &amp; Content Standards</h1>
          <p className="type-body-lg text-slate-300 max-w-3xl">
            How {businessName} maintains factual accuracy, professional integrity, and high editorial standards across all published technical guides, industry insights, and agency content. Last reviewed: September 2026.
          </p>
        </Container>
      </div>

      <Section variant="white" spacing="md">
        <Container size="md">
          <div className="space-y-6 text-slate-700 leading-relaxed text-sm">
            <Card variant="base" className="space-y-2">
              <h2 className="font-heading font-bold text-lg text-slate-900">
                1. Purpose of This Policy
              </h2>
              <p>
                {businessName} publishes technical SEO guides, industry analysis, architecture frameworks, and strategic resources for businesses operating in high-competition digital verticals. This policy defines how that content is produced, reviewed, and maintained to the standard expected of a specialist B2B agency.
              </p>
            </Card>

            <Card variant="base" className="space-y-2">
              <h2 className="font-heading font-bold text-lg text-slate-900">
                2. Accuracy &amp; Factual Standards
              </h2>
              <p>
                All technical claims, performance benchmarks, search engine guidelines references, and platform policy descriptions are verified against authoritative primary sources (Google Search Central documentation, platform policy pages, academic research, and verified practitioner data) before publication.
              </p>
              <p>
                We do not fabricate statistics, invent case study metrics, manufacture client results, or present estimated figures as confirmed data. Where data is illustrative, it is labeled as such.
              </p>
            </Card>

            <Card variant="base" className="space-y-2">
              <h2 className="font-heading font-bold text-lg text-slate-900">
                3. E-E-A-T Disciplines
              </h2>
              <p>
                Content on this site is produced or reviewed by practitioners with direct hands-on experience in technical SEO, website architecture, and digital growth for regulated and high-competition markets. We apply Google's E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) framework not just to client deliverables, but to our own published material.
              </p>
              <p>
                We do not publish guides on topics we do not have genuine operational experience with.
              </p>
            </Card>

            <Card variant="base" className="space-y-2">
              <h2 className="font-heading font-bold text-lg text-slate-900">
                4. No Fake Proof or Manufactured Social Proof
              </h2>
              <p>
                {businessName} does not publish fabricated testimonials, invented client logos, manufactured case study results, unverifiable award claims, or synthetic certifications. Trust is established through the quality of technical content, process transparency, and verifiable engineering methodology — not marketing props.
              </p>
            </Card>

            <Card variant="base" className="space-y-2">
              <h2 className="font-heading font-bold text-lg text-slate-900">
                5. Compliance &amp; Platform Policy Accuracy
              </h2>
              <p>
                Content describing paid advertising eligibility, platform certification requirements, and regulatory considerations is sourced directly from official platform documentation. We do not speculate about policy workarounds, suggest methods to circumvent platform controls, or make claims about bypassing advertising restrictions.
              </p>
              <p>
                Platform policies change frequently. Where time-sensitive policy information is published, the date of review is noted. Readers should verify current policy requirements directly with the relevant platform before making advertising or compliance decisions.
              </p>
            </Card>

            <Card variant="base" className="space-y-2">
              <h2 className="font-heading font-bold text-lg text-slate-900">
                6. Content Review &amp; Update Process
              </h2>
              <p>
                Technical guides are reviewed when significant search engine algorithm updates, platform policy changes, or architectural best-practice shifts occur. High-priority content (such as technical SEO architecture guides) is reviewed at minimum annually or following major Google Core Updates.
              </p>
              <p>
                Content review dates are noted where applicable. We do not update timestamps on content that has not been substantively reviewed.
              </p>
            </Card>

            <Card variant="base" className="space-y-2">
              <h2 className="font-heading font-bold text-lg text-slate-900">
                7. Commercial Independence
              </h2>
              <p>
                Editorial content on this website is not influenced by commercial relationships, partner arrangements, or tool vendor agreements. Where content references tools or third-party platforms, it reflects genuine practitioner assessment — not compensation-driven recommendation.
              </p>
            </Card>

            <Card variant="base" className="space-y-2">
              <h2 className="font-heading font-bold text-lg text-slate-900">
                8. Sensitive Vertical Handling
              </h2>
              <p>
                Content covering gaming, casino, financial trading, color prediction, color trading, and adult-industry verticals is produced for a professional B2B audience of operators, platform owners, and growth teams. Content is factual, technical, and marketing-focused. No explicit consumer-facing content, no gambling recommendations, and no explicit sexual content is published on this website.
              </p>
            </Card>

            <Card variant="base" className="space-y-2">
              <h2 className="font-heading font-bold text-lg text-slate-900">
                9. Corrections Policy
              </h2>
              <p>
                Factual errors identified in published content are corrected promptly. If you identify an inaccuracy, contact us at{' '}
                <a
                  href="mailto:hello@igameing.growthservice.in"
                  className="text-purple-700 font-semibold hover:text-purple-900 transition-colors"
                >
                  hello@igameing.growthservice.in
                </a>
                {' '}with a reference to the specific claim and a primary source for the correction.
              </p>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default EditorialPolicyPage;
