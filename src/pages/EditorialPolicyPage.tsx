import React from 'react';
import { SEOHead, buildBreadcrumbSchema } from '../seo';
import { Container, Section, Card, Breadcrumb } from '../components/ui';
import { getBusinessName } from '../selectors';

export const EditorialPolicyPage: React.FC = () => {
  const businessName = getBusinessName();
  const breadcrumbs = [{ label: 'Editorial Policy', path: '/editorial-policy', current: true }];

  return (
    <div className="bg-model3-base text-white selection:bg-amber-400 selection:text-black font-sans antialiased overflow-x-hidden">
      <SEOHead
        title="Editorial Policy & Content Standards | iGaming Growth"
        description="How iGaming Growth maintains factual accuracy, technical transparency, and B2B editorial integrity across its engineering guides, industry insights, and agency resources."
        canonicalPath="/editorial-policy"
        jsonLd={buildBreadcrumbSchema(breadcrumbs)}
      />

      <div className="relative bg-model3-base bg-hero-atmosphere text-white py-16 sm:py-20 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-dark-mesh opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[450px] h-[350px] rounded-full bg-purple-600/10 blur-[120px] pointer-events-none" />
        <Container className="relative z-10">
          <Breadcrumb items={breadcrumbs} dark className="mb-4" />
          <h1 className="type-h2 text-white mb-4">Editorial Policy &amp; Content Standards</h1>
          <p className="type-body-lg text-slate-300 max-w-3xl leading-relaxed">
            How {businessName} maintains factual accuracy, professional engineering integrity, and strict editorial standards across all published technical guides, industry analyses, and research papers. Last updated: September 2026.
          </p>
        </Container>
      </div>

      <Section variant="white" spacing="lg">
        <Container size="md">
          <div className="space-y-6 text-slate-300 leading-relaxed text-sm">
            <Card variant="base" className="space-y-3">
              <h2 className="font-heading font-bold text-lg text-white">
                1. Purpose &amp; Scope of This Policy
              </h2>
              <p>
                {businessName} publishes technical SEO guides, website architecture frameworks, server log analysis playbooks, and competitive market research for operators, founders, and marketing leaders in high-competition digital verticals. This policy defines the standards under which our technical content is authored, fact-checked, peer-reviewed, and maintained.
              </p>
              <p>
                Our editorial mission is to replace marketing platitudes with engineering-led, reproducible technical truths. Every framework we publish must be verifiable in production environments and grounded in official platform guidelines.
              </p>
            </Card>

            <Card variant="base" className="space-y-3">
              <h2 className="font-heading font-bold text-lg text-white">
                2. Fact-Checking, Research Standards &amp; Source Verification
              </h2>
              <p>
                All technical claims, search engine performance benchmarks, crawling behaviors, and platform policy interpretations are verified against primary documentation prior to publication. Primary sources include official Google Search Central developer documentation, Chromium open-source engineering trackers, W3C HTML5 and schema.org specifications, and official advertising policy repositories (Google Ads, Meta Business).
              </p>
              <p>
                We do not fabricate statistics, manufacture speculative algorithm leaks, or cite secondary blog aggregators without primary validation. Where data originates from internal engineering tests, log crawls, or real-user telemetry, methodology constraints are explicitly declared.
              </p>
            </Card>

            <Card variant="base" className="space-y-3">
              <h2 className="font-heading font-bold text-lg text-white">
                3. Application of Google's E-E-A-T Framework
              </h2>
              <p>
                We apply Google's Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T) principles rigorously to our own content pipeline:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
                <li><strong>Experience:</strong> Guides are written solely by practitioners who have actively implemented the documented architectures on high-traffic production platforms.</li>
                <li><strong>Expertise:</strong> Technical code snippets (robots.txt, Next.js SSR configurations, JSON-LD schemas) are validated for syntax correctness and edge compatibility.</li>
                <li><strong>Authoritativeness:</strong> Content is authored or reviewed by identified team leads whose professional bios and focus disciplines are clearly attributed.</li>
                <li><strong>Trustworthiness:</strong> We transparently disclose commercial relationships, platform limitations, and potential risk factors associated with each strategy.</li>
              </ul>
            </Card>

            <Card variant="base" className="space-y-3">
              <h2 className="font-heading font-bold text-lg text-white">
                4. Strict Prohibition of Synthetic Proof &amp; Manufactured Social Proof
              </h2>
              <p>
                In strict adherence to our core ethics and platform standards (igaming.md §13), {businessName} maintains a zero-tolerance policy regarding synthetic marketing artifacts. We never publish:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
                <li>Fabricated client testimonials or purchased endorsement quotes.</li>
                <li>Unverifiable corporate client logos without explicit written authorization.</li>
                <li>Manufactured ranking screenshots or manipulated Search Console performance graphs.</li>
                <li>Synthetic third-party agency awards, purchased directory badges, or unaccredited certifications.</li>
              </ul>
              <p>
                We believe professional trust in technical domains is earned exclusively through the depth, accuracy, and operational utility of our published engineering work.
              </p>
            </Card>

            <Card variant="base" className="space-y-3">
              <h2 className="font-heading font-bold text-lg text-white">
                5. Regulatory &amp; Platform Advertising Policy Alignment
              </h2>
              <p>
                Our content regularly discusses complex and regulated digital verticals, including online gaming, casino portals, financial markets, and adult digital directories. We strictly avoid speculative workarounds designed to deceive platform policy teams or bypass regulatory controls.
              </p>
              <p>
                Where paid advertising strategies are referenced, eligibility requirements (e.g., Google Certification for gambling operators, SEBI / SEC compliance for financial platforms) are documented accurately. We do not promote or instruct on cloaking, doorway pages, deceptive redirects, or covert link networks.
              </p>
            </Card>

            <Card variant="base" className="space-y-3">
              <h2 className="font-heading font-bold text-lg text-white">
                6. Technical Code &amp; Architectural Blueprint Standards
              </h2>
              <p>
                Code examples published in our technical guides (e.g., Nginx access log parsing commands, TypeScript quality score gatekeepers, robots.txt directives) must be syntactically valid and adhere to modern engineering best practices.
              </p>
              <p>
                Code snippets are accompanied by comments clarifying their specific operational scope, prerequisite runtime configurations, and potential production failure modes. Readers are advised to test all code modifications in isolated staging environments prior to production promotion.
              </p>
            </Card>

            <Card variant="base" className="space-y-3">
              <h2 className="font-heading font-bold text-lg text-white">
                7. Content Review, Deprecation &amp; Timestamp Governance
              </h2>
              <p>
                Search algorithms, browser rendering engines, and platform compliance policies evolve continuously. To prevent stale advice from misleading engineering teams, all core guides undergo systematic reviews:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
                <li>Major Core Update Audits: Following confirmed Google Core Algorithm or Helpful Content updates, affected ranking methodologies are re-benchmarked within 30 days.</li>
                <li>Annual Full-Architecture Audits: All technical guides undergo a mandatory annual audit by the lead architecture team.</li>
                <li>Timestamp Integrity: We only update "Last Reviewed" or "Updated" dates when substantive technical revisions have been made. Cosmetic edits do not alter published timestamps.</li>
              </ul>
            </Card>

            <Card variant="base" className="space-y-3">
              <h2 className="font-heading font-bold text-lg text-white">
                8. Commercial Independence &amp; Tool Disclosures
              </h2>
              <p>
                {businessName} does not accept sponsored content, paid promotional guest posts, or paid tool endorsements. When third-party software, crawling tools, or analytics platforms are mentioned (e.g., Screaming Frog, Cloudflare, Google Search Console, Ahrefs), they are evaluated solely on their technical merits.
              </p>
              <p>
                We do not use affiliate tracking links in our editorial guides. Our recommendations are entirely independent of commercial commissions or referral kickbacks.
              </p>
            </Card>

            <Card variant="base" className="space-y-3">
              <h2 className="font-heading font-bold text-lg text-white">
                9. Corrections, Retractions &amp; Reader Feedback
              </h2>
              <p>
                We welcome scrutiny from software engineers, search researchers, and industry practitioners. If a technical error, deprecated API reference, or factual inaccuracy is identified in any published resource:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
                <li>Substantive factual corrections are implemented promptly upon verification.</li>
                <li>Significant revisions include an editorial correction note detailing the change and the date of modification.</li>
                <li>To report an inaccuracy or request clarification, contact our editorial team at <a href="mailto:hello@igameing.growthservice.in" className="text-purple-600 underline font-semibold">hello@igameing.growthservice.in</a> with the URL and specific code or claim in question.</li>
              </ul>
            </Card>

            <Card variant="base" className="space-y-3">
              <h2 className="font-heading font-bold text-lg text-white">
                10. Editorial Governance &amp; Contact Information
              </h2>
              <p>
                Editorial oversight for all content published on {businessName} is maintained by our Senior Technical Direction and Information Architecture leads. Our editorial desk operates independently of short-term client commercial demands to ensure our published advice remains uncompromisingly objective.
              </p>
              <p>
                For editorial inquiries, academic citations, or technical feedback, contact our desk at:
                <br />
                <strong>Headquarters:</strong> Kathmandu, Nepal
                <br />
                <strong>Parent Group:</strong> <a href="https://growthservice.in" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">GrowthService (https://growthservice.in)</a>
                <br />
                <strong>Email:</strong> hello@igameing.growthservice.in
              </p>
            </Card>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default EditorialPolicyPage;
