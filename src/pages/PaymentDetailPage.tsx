import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { SEOHead, buildBreadcrumbSchema } from '../seo';
import { Container, Section, Card, Badge, Button, Breadcrumb } from '../components/ui';
import { getPaymentMethodBySlug } from '../selectors';
import { ArrowLeft } from 'lucide-react';

export const PaymentDetailPage: React.FC = () => {
  const { methodSlug } = useParams<{ methodSlug: string }>();
  const method = methodSlug ? getPaymentMethodBySlug(methodSlug) : undefined;

  if (!method) {
    return <Navigate to="/payment-methods" replace />;
  }

  const breadcrumbs = [
    { label: 'Payment Methods', path: '/payment-methods' },
    { label: method.name, path: `/payment-methods/${method.slug}`, current: true },
  ];

  return (
    <>
      <SEOHead
        title={`${method.name} Casino Banking Guide | Speeds & Limits`}
        description={method.description}
        canonicalPath={`/payment-methods/${method.slug}`}
        jsonLd={buildBreadcrumbSchema(breadcrumbs)}
      />

      <div className="bg-slate-900 text-white py-12 border-b border-purple-900/40">
        <Container>
          <Breadcrumb items={breadcrumbs} dark className="mb-4" />
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="green" size="sm">{method.category}</Badge>
            <span className="text-xs bg-emerald-500/20 text-emerald-300 font-semibold px-2 py-0.5 rounded">
              Security: {method.securityRating}
            </span>
          </div>
          <h1 className="type-h2 text-white mb-2">{method.name} Guide</h1>
          <p className="type-body-lg text-slate-300 max-w-3xl">{method.description}</p>
        </Container>
      </div>

      <Section variant="white" spacing="md">
        <Container size="md">
          <div className="space-y-6">
            <Card variant="base" className="space-y-4">
              <h2 className="font-heading font-bold text-xl text-slate-900">
                Transaction Speed &amp; Fee Metrics
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-3 bg-slate-50 rounded-xl">
                  <span className="text-slate-500">Deposit Speed:</span>
                  <div className="font-bold text-slate-800 mt-1">{method.depositSpeed}</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl">
                  <span className="text-slate-500">Withdrawal Speed:</span>
                  <div className="font-bold text-slate-800 mt-1">{method.withdrawalSpeed}</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl">
                  <span className="text-slate-500">Typical Operator Fee:</span>
                  <div className="font-bold text-slate-800 mt-1">{method.typicalFee}</div>
                </div>
              </div>
            </Card>

            <Card variant="elevated" className="space-y-4">
              <h2 className="font-heading font-bold text-xl text-slate-900">
                Deposit Limits &amp; Regional Availability
              </h2>
              <p className="text-xs text-slate-600">
                Typical range: <strong>{method.minDeposit}</strong> up to <strong>{method.maxDeposit}</strong>.
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span>Widely accepted across:</span>
                <span className="font-semibold text-purple-700">{method.popularRegions.join(', ')}</span>
              </div>
            </Card>

            <div className="pt-4 flex items-center justify-between">
              <Button to="/payment-methods" variant="outline" size="sm" icon={<ArrowLeft className="w-4 h-4" />}>
                All Payment Methods
              </Button>
              <Button to="/casino-guides" variant="primary" size="sm">
                Explore Casino Guides →
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default PaymentDetailPage;
