import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { SEOHead, buildBreadcrumbSchema } from '../seo';
import { Container, Section, Card, Badge, Button, Breadcrumb } from '../components/ui';
import { getReviewBySlug } from '../selectors';
import { CheckCircle2, XCircle, ArrowLeft } from 'lucide-react';

export const ReviewDetailPage: React.FC = () => {
  const { reviewSlug } = useParams<{ reviewSlug: string }>();
  const rev = reviewSlug ? getReviewBySlug(reviewSlug) : undefined;

  if (!rev) {
    return <Navigate to="/reviews" replace />;
  }

  const breadcrumbs = [
    { label: 'Reviews', path: '/reviews' },
    { label: rev.name, path: `/reviews/${rev.slug}`, current: true },
  ];

  return (
    <>
      <SEOHead
        title={`${rev.name} Review | Rating & Software Audit`}
        description={rev.summary}
        canonicalPath={`/reviews/${rev.slug}`}
        jsonLd={buildBreadcrumbSchema(breadcrumbs)}
      />

      <div className="bg-slate-900 text-white py-12 border-b border-purple-900/40">
        <Container>
          <Breadcrumb items={breadcrumbs} dark className="mb-4" />
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Badge variant="purple" size="sm">{rev.type}</Badge>
            <span className="text-xs bg-yellow-400 text-slate-950 font-bold px-2 py-0.5 rounded">
              Rating: {rev.overallRating} / 5.0
            </span>
          </div>
          <h1 className="type-h2 text-white mb-2">{rev.name} Independent Audit</h1>
          <p className="type-body-lg text-slate-300 max-w-3xl">{rev.summary}</p>
        </Container>
      </div>

      <Section variant="white" spacing="md">
        <Container size="md">
          <div className="space-y-6">
            <Card variant="base" className="space-y-4">
              <h2 className="font-heading font-bold text-xl text-slate-900">
                Audited Licensing &amp; Integrity Standards
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3 bg-slate-50 rounded-xl">
                  <span className="text-slate-500">Statutory Licenses:</span>
                  <div className="font-bold text-slate-800 mt-1">{rev.licensing}</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl">
                  <span className="text-slate-500">RNG Audit Authority:</span>
                  <div className="font-bold text-slate-800 mt-1">{rev.rtpAuditAuthority}</div>
                </div>
              </div>
            </Card>

            <Card variant="elevated" className="space-y-4">
              <h2 className="font-heading font-bold text-xl text-slate-900">
                Strengths &amp; Considerations
              </h2>
              <div className="space-y-3">
                {rev.pros.map((p, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{p}</span>
                  </div>
                ))}
                {rev.cons.map((c, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                    <XCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </Card>

            <div className="pt-4 flex items-center justify-between">
              <Button to="/reviews" variant="outline" size="sm" icon={<ArrowLeft className="w-4 h-4" />}>
                All Reviews Directory
              </Button>
              <Button to="/games" variant="primary" size="sm">
                Explore Games →
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default ReviewDetailPage;
