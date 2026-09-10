import React from 'react';
import { SEOHead, buildBreadcrumbSchema } from '../seo';
import {
  Container,
  Section,
  Card,
  Button,
  Breadcrumb,
} from '../components/ui';
import { ShieldCheck, Scale, Award, HelpCircle } from 'lucide-react';

export const CasinoHub: React.FC = () => {
  const breadcrumbs = [{ label: 'Casino Information', path: '/casino', current: true }];

  return (
    <>
      <SEOHead
        title="Online Casino Fundamentals | Licensing, RTP & Fair Play"
        description="Authoritative guide to online casino operations, independent RNG certification, regulatory bodies (MGA, UKGC), and fair play standards."
        canonicalPath="/casino"
        jsonLd={buildBreadcrumbSchema(breadcrumbs)}
      />

      <div className="bg-slate-900 text-white py-12 border-b border-purple-900/40">
        <Container>
          <Breadcrumb items={breadcrumbs} dark className="mb-4" />
          <h1 className="type-h2 text-white mb-3">Online Casino Fundamentals</h1>
          <p className="type-body-lg text-slate-300 max-w-3xl">
            Independent education on how modern online casinos operate: regulatory licensing, payout percentages, Random Number Generators (RNG), and player rights.
          </p>
        </Container>
      </div>

      <Section variant="white" spacing="md">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card variant="elevated" className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h2 className="font-heading font-bold text-xl text-slate-900">
                Regulatory Licensing Frameworks
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Operating licenses issued by respected authorities mandate player fund segregation, strict KYC verification, AML protocols, and mandatory responsible gaming controls.
              </p>
              <Button to="/casino-guides/online-casino-licensing-frameworks" variant="secondary" size="sm">
                Licensing Guide →
              </Button>
            </Card>

            <Card variant="elevated" className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-yellow-100 text-yellow-800 flex items-center justify-center">
                <Scale className="w-5 h-5" />
              </div>
              <h2 className="font-heading font-bold text-xl text-slate-900">
                RTP &amp; Theoretical Mathematics
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Learn why house edge and Return to Player (RTP) govern all casino outcomes over large sample sizes, and how variance causes short-term deviation.
              </p>
              <Button to="/casino-guides/understanding-rtp-and-house-edge" variant="secondary" size="sm">
                RTP Mathematics →
              </Button>
            </Card>

            <Card variant="elevated" className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h2 className="font-heading font-bold text-xl text-slate-900">
                Independent RNG Auditing
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Accredited testing agencies like eCOGRA, GLI, and iTech Labs verify source code randomness and mathematical payouts before software hits the market.
              </p>
              <Button to="/casino-guides/provably-fair-technology-explained" variant="secondary" size="sm">
                RNG &amp; Fair Play →
              </Button>
            </Card>

            <Card variant="elevated" className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h2 className="font-heading font-bold text-xl text-slate-900">
                Platform Reviews &amp; Ratings
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Objective criteria assessing payout speeds, software providers, customer service responsiveness, and terms transparency.
              </p>
              <Button to="/reviews" variant="secondary" size="sm">
                Browse Reviews →
              </Button>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default CasinoHub;
