import React from 'react';
import { SEOHead, buildBreadcrumbSchema } from '../seo';
import {
  Container,
  Section,
  Card,
  Badge,
  Button,
  Breadcrumb,
} from '../components/ui';
import { getAllPaymentMethods } from '../selectors';
import { Clock, DollarSign } from 'lucide-react';

export const PaymentsHub: React.FC = () => {
  const methods = getAllPaymentMethods();
  const breadcrumbs = [{ label: 'Payment Methods', path: '/payment-methods', current: true }];

  return (
    <>
      <SEOHead
        title="iGaming Payment Methods | Deposit & Withdrawal Speeds"
        description="Comprehensive analysis of online casino banking methods: UPI, Net Banking, USDT, Skrill, Neteller, and cards. Speed, limits, and security audited."
        canonicalPath="/payment-methods"
        jsonLd={buildBreadcrumbSchema(breadcrumbs)}
      />

      <div className="bg-slate-900 text-white py-12 border-b border-purple-900/40">
        <Container>
          <Breadcrumb items={breadcrumbs} dark className="mb-4" />
          <h1 className="type-h2 text-white mb-3">iGaming Payment Methods &amp; Banking</h1>
          <p className="type-body-lg text-slate-300 max-w-3xl">
            Independent evaluations of processing latency, transaction fee structures, deposit ceilings, and encryption security.
          </p>
        </Container>
      </div>

      <Section variant="white" spacing="md">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {methods.map((method) => (
              <Card key={method.slug} variant="elevated" className="flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="green" size="sm">{method.category}</Badge>
                    <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded">
                      Security: {method.securityRating}
                    </span>
                  </div>

                  <h2 className="font-heading font-bold text-xl text-slate-900">
                    {method.name}
                  </h2>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {method.description}
                  </p>

                  <div className="pt-3 border-t border-slate-100 space-y-2 text-xs">
                    <div className="flex items-center justify-between text-slate-600">
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-purple-600" /> Deposit Speed:</span>
                      <strong className="text-slate-900">{method.depositSpeed}</strong>
                    </div>
                    <div className="flex items-center justify-between text-slate-600">
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-blue-600" /> Payout Speed:</span>
                      <strong className="text-slate-900">{method.withdrawalSpeed}</strong>
                    </div>
                    <div className="flex items-center justify-between text-slate-600">
                      <span className="flex items-center gap-1"><DollarSign className="w-3.5 h-3.5 text-emerald-600" /> Fees:</span>
                      <strong className="text-slate-900">{method.typicalFee}</strong>
                    </div>
                    <div className="flex items-center justify-between text-slate-600">
                      <span>Limits:</span>
                      <span className="text-slate-800">{method.minDeposit} - {method.maxDeposit}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100">
                  <Button to={`/payment-methods/${method.slug}`} variant="secondary" size="sm" className="w-full">
                    View Banking Guide →
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
};

export default PaymentsHub;
