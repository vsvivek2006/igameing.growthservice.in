import React from 'react';
import { SEOHead, buildBreadcrumbSchema } from '../seo';
import { Container, Section, Card, Breadcrumb } from '../components/ui';
import { getBusinessName } from '../selectors';

export const TermsPage: React.FC = () => {
  const businessName = getBusinessName();
  const breadcrumbs = [{ label: 'Terms of Use', path: '/terms', current: true }];

  return (
    <div className="bg-model3-base text-white selection:bg-amber-400 selection:text-black font-sans antialiased overflow-x-hidden">
      <SEOHead
        title="Terms of Use | iGaming Growth"
        description="Terms and conditions governing access to and use of iGaming Growth's website, architectural content, and B2B digital growth advisory services."
        canonicalPath="/terms"
        jsonLd={buildBreadcrumbSchema(breadcrumbs)}
      />

      <div className="relative bg-model3-base bg-hero-atmosphere text-white py-16 sm:py-20 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-dark-mesh opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[450px] h-[350px] rounded-full bg-purple-600/10 blur-[120px] pointer-events-none" />
        <Container className="relative z-10">
          <Breadcrumb items={breadcrumbs} dark className="mb-4" />
          <h1 className="type-h2 text-white mb-4">Terms of Use</h1>
          <p className="type-body-lg text-slate-300 max-w-3xl leading-relaxed">
            Legal terms, operational conditions, and regulatory frameworks governing access to and commercial use of the {businessName} website, technical resources, and professional agency services. Last updated: September 2026.
          </p>
        </Container>
      </div>

      <Section variant="white" spacing="lg">
        <Container size="md">
          <div className="space-y-6 text-slate-300 leading-relaxed text-sm">
            <Card variant="base" className="space-y-3">
              <h2 className="font-heading font-bold text-lg text-white">
                1. Nature of the Website &amp; Business Model
              </h2>
              <p>
                {businessName} operates exclusively as a specialist business-to-business (B2B) digital marketing, technical search engine optimization, and website engineering agency. This website is an informational and commercial portal intended solely for corporate founders, platform operators, Chief Technology Officers, and digital growth executives evaluating professional technical services.
              </p>
              <p>
                This website does not operate as an online casino, gambling operator, sportsbook, financial brokerage, stock trading exchange, or adult consumer platform. No wagering, real-money betting, financial trading, or transactional consumer gameplay occurs on or through this website.
              </p>
            </Card>

            <Card variant="base" className="space-y-3">
              <h2 className="font-heading font-bold text-lg text-white">
                2. Permitted Commercial Use &amp; Access Restrictions
              </h2>
              <p>
                Access to this website is granted for the evaluation of our professional capabilities, consumption of published architectural guides, and submission of bona fide business inquiries. You agree not to:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
                <li>Systematically scrape, data-mine, or harvest architectural code snippets, matrices, or pricing data via automated bots, headless crawlers, or scrapers without prior written authorization.</li>
                <li>Submit fabricated, abusive, or spam communications through our diagnostic intake forms or strategy booking endpoints.</li>
                <li>Attempt to reverse-engineer, decompile, or probe the infrastructure, servers, or hosting configurations of this web application.</li>
                <li>Misrepresent your identity, affiliation, or commercial authorization when requesting proprietary diagnostic audits or advisory sessions.</li>
              </ul>
            </Card>

            <Card variant="base" className="space-y-3">
              <h2 className="font-heading font-bold text-lg text-white">
                3. Scope of Professional Agency Services
              </h2>
              <p>
                {businessName} provides specialized services including technical SEO auditing, Core Web Vitals remediation, crawl budget optimization, programmatic SEO system design, informational content strategy, authority and digital PR consultation, conversion rate optimization (CRO), and policy-compliant paid media strategy.
              </p>
              <p>
                All services are executed under separate formal Statement of Work (SOW) agreements or master services contracts. The descriptions, pricing indicators, and sample deliverables published on this website are indicative and do not constitute a binding unilateral offer to contract.
              </p>
            </Card>

            <Card variant="base" className="space-y-3">
              <h2 className="font-heading font-bold text-lg text-white">
                4. Explicit Absence of Ranking or Traffic Guarantees
              </h2>
              <p>
                In compliance with global advertising truth standards and search engine guidelines (igaming.md §22), {businessName} does not promise, warrant, or guarantee specific search engine ranking positions, organic click volumes, domain authority scores, or commercial revenue outcomes.
              </p>
              <p>
                Organic search rankings are determined by autonomous, third-party algorithmic scoring systems (including Google, Bing, and emergent AI search engines) that change continuously without notice. Our professional commitments are defined strictly by verified engineering deliverables, code-level Pull Requests, process rigor, and adherence to agreed technical milestones.
              </p>
            </Card>

            <Card variant="base" className="space-y-3">
              <h2 className="font-heading font-bold text-lg text-white">
                5. Intellectual Property Rights &amp; Deliverables Ownership
              </h2>
              <p>
                All original text, architectural frameworks, diagrams, visual interfaces, component code, data schemas, and editorial research published on this website are the proprietary intellectual property of {businessName}, protected by applicable international copyright and trademark laws.
              </p>
              <p>
                Deliverables produced under formal client engagements (e.g., custom repository code, bespoke structured data, unique content assets) transfer to the client upon full settlement of contracted invoices, subject to the explicit terms of the governing Statement of Work.
              </p>
            </Card>

            <Card variant="base" className="space-y-3">
              <h2 className="font-heading font-bold text-lg text-white">
                6. Client Warranties &amp; Jurisdictional Compliance
              </h2>
              <p>
                Clients engaging {businessName} represent and warrant that their digital platform, product offerings, operational licenses, and promotional marketing comply fully with all applicable local, national, and international laws, statutory regulations, and consumer protection codes in their operating jurisdictions.
              </p>
              <p>
                We reserve the unilateral right to refuse service, suspend active engagements, or terminate contracts immediately without liability if an operator is found to engage in unlawful practices, consumer fraud, unlicensed gambling operations where licensing is mandatory, or malicious black-hat digital distribution.
              </p>
            </Card>

            <Card variant="base" className="space-y-3">
              <h2 className="font-heading font-bold text-lg text-white">
                7. Limitation of Liability &amp; Disclaimers
              </h2>
              <p>
                To the maximum extent permitted by governing law, {businessName}, its directors, technical leads, employees, and contractors shall not be liable for any indirect, incidental, consequential, special, or punitive damages, including loss of profits, organic traffic reductions, server downtime, algorithmic indexing adjustments, or business interruption arising from the use of this website or information contained herein.
              </p>
              <p>
                All published educational resources, checklists, and code blueprints are provided on an "as-is" and "as-available" basis without representations or warranties of any kind, whether express or implied.
              </p>
            </Card>

            <Card variant="base" className="space-y-3">
              <h2 className="font-heading font-bold text-lg text-white">
                8. Third-Party Search Engines, Algorithms &amp; Platform Policy Shifts
              </h2>
              <p>
                Search engines frequently deploy core algorithm updates, re-calibrate spam filters, and alter rich snippet eligibility rules without advance disclosure. Similarly, digital advertising platforms (Google Ads, Meta, Bing) routinely modify jurisdictional advertising policies for contested verticals.
              </p>
              <p>
                {businessName} accepts no liability for sudden visibility shifts, policy restrictions, or advertising suspension actions resulting from independent platform policy changes initiated by third-party search and advertising providers.
              </p>
            </Card>

            <Card variant="base" className="space-y-3">
              <h2 className="font-heading font-bold text-lg text-white">
                9. Retainer Terms, Billing &amp; Cancellation Policies
              </h2>
              <p>
                Standard agency engagements operate under monthly retainers with an agreed minimum initial duration (typically 3 months) to allow adequate time for technical indexing and authority compounding. Retainer fees are invoiced monthly in advance and are payable within contracted payment windows.
              </p>
              <p>
                Following the initial commitment period, retainers may be cancelled by either party upon thirty (30) days written notice. Fees paid for delivered technical audits, completed sprint milestones, or deployed code repositories are non-refundable.
              </p>
            </Card>

            <Card variant="base" className="space-y-3">
              <h2 className="font-heading font-bold text-lg text-white">
                10. Governing Law, Dispute Resolution &amp; Severability
              </h2>
              <p>
                These Terms of Use shall be governed by and construed in accordance with the substantive laws of Nepal, without regard to its conflict of law principles. Any dispute, claim, or controversy arising out of or relating to these terms shall be subject to the exclusive jurisdiction of the competent courts in Kathmandu, Nepal.
              </p>
              <p>
                If any provision of these Terms is found to be invalid, unlawful, or unenforceable by an authorized court of law, such provision shall be severed from the remaining terms, which shall continue in full force and effect.
              </p>
              <p className="pt-2">
                For legal notices, contract inquiries, or corporate documentation, contact:
                <br />
                <strong>Agency Headquarters:</strong> Kathmandu, Nepal
                <br />
                <strong>Parent Group:</strong> <a href="https://growthservice.in" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">GrowthService (https://growthservice.in)</a>
                <br />
                <strong>Legal Desk:</strong> hello@igameing.growthservice.in
              </p>
            </Card>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default TermsPage;
