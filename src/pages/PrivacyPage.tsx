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
        description="How iGaming Growth collects, protects, processes, and respects corporate and personal data across its B2B digital growth platform and diagnostic tools."
        canonicalPath="/privacy"
        jsonLd={buildBreadcrumbSchema(breadcrumbs)}
      />

      <div className="bg-slate-900 text-white py-16 sm:py-20 border-b border-purple-900/40">
        <Container>
          <Breadcrumb items={breadcrumbs} dark className="mb-4" />
          <h1 className="type-h2 text-white mb-4">Privacy Policy</h1>
          <p className="type-body-lg text-slate-300 max-w-3xl leading-relaxed">
            How {businessName} collects, protects, processes, and respects corporate and personal information across our website, diagnostic audit tools, and client engagement communications. Last updated: September 2026.
          </p>
        </Container>
      </div>

      <Section variant="white" spacing="lg">
        <Container size="md">
          <div className="space-y-6 text-slate-700 leading-relaxed text-sm">
            <Card variant="base" className="space-y-3">
              <h2 className="font-heading font-bold text-lg text-slate-900">
                1. Scope &amp; Commitment to Data Privacy
              </h2>
              <p>
                {businessName} is committed to transparent, privacy-first data handling standards in full alignment with international data protection frameworks, including the EU General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and applicable Indian data protection laws.
              </p>
              <p>
                This Privacy Policy applies to all interactions with our website, free diagnostic audit request forms, strategy call scheduling interfaces, and direct commercial correspondence. We collect only the minimum necessary information required to deliver high-precision technical evaluations and B2B growth services.
              </p>
            </Card>

            <Card variant="base" className="space-y-3">
              <h2 className="font-heading font-bold text-lg text-slate-900">
                2. Information We Collect &amp; Information We Deliberately Refuse to Collect
              </h2>
              <p>
                When you interact with our platform, we may collect the following corporate and contact details voluntarily submitted by you:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                <li>Contact Information: Full name, professional work email address, company name, and optional telephone/WhatsApp number.</li>
                <li>Platform Technical Parameters: Target website URL, operating industry vertical, target geographic markets, and primary diagnostic priorities.</li>
                <li>Commercial Parameters: Estimated monthly marketing budget, target keywords, and descriptions of current technical or indexing challenges.</li>
              </ul>
              <p>
                <strong>What We Deliberately Refuse to Collect:</strong> We do not collect, process, or store consumer financial details, player betting records, end-user account passwords, payment card numbers, or personal identifying information regarding our clients' end users or players.
              </p>
            </Card>

            <Card variant="base" className="space-y-3">
              <h2 className="font-heading font-bold text-lg text-slate-900">
                3. Lawful Basis for Processing
              </h2>
              <p>
                We process your submitted data under specific lawful bases established by global privacy regulations:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                <li><strong>Legitimate Interests:</strong> Processing website URLs and contact information to prepare and deliver requested technical SEO audits, evaluate competitive keyword landscapes, and communicate diagnostic findings.</li>
                <li><strong>Contractual Necessity:</strong> Processing company and representative information to prepare proposals, execute non-disclosure agreements, and fulfill contracted Statement of Work obligations.</li>
                <li><strong>Consent:</strong> Where you explicitly opt in to receive periodic technical research papers or engineering updates from our editorial team.</li>
              </ul>
            </Card>

            <Card variant="base" className="space-y-3">
              <h2 className="font-heading font-bold text-lg text-slate-900">
                4. Use of Lead Intake &amp; Diagnostic Audit Data
              </h2>
              <p>
                Data submitted through our Free SEO Audit or Strategy Call intake forms is utilized strictly for:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                <li>Performing manual and automated crawl simulations on the specified domain.</li>
                <li>Assessing Core Web Vitals, server response headers, and structured schema implementation.</li>
                <li>Benchmarking domain visibility against top 50 competitive queries in your vertical.</li>
                <li>Delivering the finalized executive PDF diagnostic summary and video walkthrough to your work email.</li>
                <li>Coordinating calendar invitations and scheduling follow-up technical advisory calls.</li>
              </ul>
            </Card>

            <Card variant="base" className="space-y-3">
              <h2 className="font-heading font-bold text-lg text-slate-900">
                5. Zero Sale, Leasing, or Commercialization of Personal Data
              </h2>
              <p>
                In strict adherence to our agency ethics (igaming.md §13), {businessName} never sells, rents, leases, or monetizes corporate or personal contact information to third parties, data brokers, advertising networks, or industry competitors.
              </p>
              <p>
                Your domain parameters and technical vulnerabilities are treated as confidential commercial secrets. We never share platform diagnostic reports publicly or use your audit findings as unapproved case study fodder.
              </p>
            </Card>

            <Card variant="base" className="space-y-3">
              <h2 className="font-heading font-bold text-lg text-slate-900">
                6. Privacy-Preserving Telemetry &amp; Cookie Governance
              </h2>
              <p>
                We prioritize user privacy and web performance. Our website operates with a lightweight, privacy-preserving analytics infrastructure designed to minimize tracking overhead:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                <li>No Invasive Third-Party Ad Pixels: We do not deploy invasive retargeting pixels (e.g., Facebook Pixel, TikTok Tracker) across our educational guides.</li>
                <li>Anonymized Performance Telemetry: Interaction tracking (e.g., table of contents clicks, form start events) is aggregated anonymously to optimize user experience and eliminate broken navigation paths.</li>
                <li>Strict Cookie Hygiene: We do not store persistent cross-site tracking cookies. Essential session cookies are utilized only to manage user state and prevent automated form spam.</li>
              </ul>
            </Card>

            <Card variant="base" className="space-y-3">
              <h2 className="font-heading font-bold text-lg text-slate-900">
                7. Technical Infrastructure, Encryption &amp; Data Security
              </h2>
              <p>
                We implement enterprise-grade technical and organizational safeguards to protect collected data against unauthorized access, loss, or alteration:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                <li>Encryption in Transit: All website traffic and form submissions are transmitted exclusively over Transport Layer Security (TLS 1.3 / HTTPS) with strict HSTS headers.</li>
                <li>Encrypted Storage: Diagnostic records, contact submissions, and client documentation are stored in encrypted databases protected by strict multi-factor authentication and role-based access controls.</li>
                <li>Access Restriction: Only senior technical directors and assigned account architects have access to client audit submissions.</li>
              </ul>
            </Card>

            <Card variant="base" className="space-y-3">
              <h2 className="font-heading font-bold text-lg text-slate-900">
                8. International Data Transfers &amp; Cross-Border Processing
              </h2>
              <p>
                As a global B2B digital growth consultancy, our infrastructure and technical personnel operate internationally. Where data transfers occur across jurisdictional boundaries, we ensure adequate protection through standard contractual clauses (SCCs) and adherence to recognized international privacy principles.
              </p>
            </Card>

            <Card variant="base" className="space-y-3">
              <h2 className="font-heading font-bold text-lg text-slate-900">
                9. Data Retention Schedules &amp; Scheduled Purging
              </h2>
              <p>
                We retain diagnostic intake submissions only as long as necessary to complete your audit review and evaluate potential commercial collaboration:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                <li>Unconverted Audit Inquiries: Technical crawl data and diagnostic submissions from non-contracting parties are purged from active systems within twelve (12) months.</li>
                <li>Active Client Records: Operational documentation and engagement deliverables are maintained for the duration of the commercial agreement plus statutory tax and legal limitation periods.</li>
              </ul>
            </Card>

            <Card variant="base" className="space-y-3">
              <h2 className="font-heading font-bold text-lg text-slate-900">
                10. Your Statutory Rights &amp; Data Protection Officer Contact
              </h2>
              <p>
                Regardless of your geographic location, you retain statutory rights regarding your personal and corporate information, including:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                <li>The right to request confirmation of whether we hold personal data concerning you and obtain a copy thereof.</li>
                <li>The right to request immediate correction of inaccurate or incomplete corporate records.</li>
                <li>The right to request permanent deletion (the "Right to be Forgotten") of your contact information and audit data from our systems.</li>
                <li>The right to withdraw consent for marketing or research communications at any time.</li>
              </ul>
              <p className="pt-2">
                To exercise any of these rights or to submit an inquiry to our Data Protection Officer, contact:
                <br />
                <strong>Privacy Desk:</strong> hello@igameing.growthservice.in
                <br />
                <strong>Direct Telephone:</strong> +91 93414 36937
              </p>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default PrivacyPage;
