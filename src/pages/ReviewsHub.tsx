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
import { getAllReviews } from '../selectors';
import { Star, CheckCircle, XCircle } from 'lucide-react';

export const ReviewsHub: React.FC = () => {
  const reviews = getAllReviews();
  const breadcrumbs = [{ label: 'Reviews', path: '/reviews', current: true }];

  return (
    <>
      <SEOHead
        title="Casino Software & Platform Reviews | Objective Audits"
        description="Independent reviews of casino software providers, live dealer studios, game variety, payout speeds, and licensing compliance."
        canonicalPath="/reviews"
        jsonLd={buildBreadcrumbSchema(breadcrumbs)}
      />

      <div className="bg-slate-900 text-white py-12 border-b border-purple-900/40">
        <Container>
          <Breadcrumb items={breadcrumbs} dark className="mb-4" />
          <h1 className="type-h2 text-white mb-3">Casino Software &amp; Platform Reviews</h1>
          <p className="type-body-lg text-slate-300 max-w-3xl">
            Strict methodology auditing game reliability, server latency, RNG testing labs, and regulatory standing.
          </p>
        </Container>
      </div>

      <Section variant="white" spacing="md">
        <Container>
          <div className="space-y-6">
            {reviews.map((rev) => (
              <Card key={rev.slug} variant="elevated" className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="purple" size="sm">{rev.type}</Badge>
                      <span className="text-xs text-slate-500">Audited by: {rev.rtpAuditAuthority}</span>
                    </div>
                    <h2 className="font-heading font-bold text-2xl text-slate-900">
                      {rev.name}
                    </h2>
                  </div>

                  <div className="flex items-center gap-1.5 bg-yellow-50 border border-yellow-200 px-3 py-1.5 rounded-xl self-start sm:self-auto">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-500" />
                    <span className="font-heading font-extrabold text-lg text-slate-900">
                      {rev.overallRating}
                    </span>
                    <span className="text-xs text-slate-500">/ 5.0</span>
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {rev.summary}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="space-y-1.5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5" /> Strengths
                    </h4>
                    {rev.pros.map((p, i) => (
                      <div key={i} className="text-xs text-slate-600 pl-4 border-l-2 border-emerald-400">
                        {p}
                      </div>
                    ))}
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-amber-700 flex items-center gap-1">
                      <XCircle className="w-3.5 h-3.5" /> Considerations
                    </h4>
                    {rev.cons.map((c, i) => (
                      <div key={i} className="text-xs text-slate-600 pl-4 border-l-2 border-amber-400">
                        {c}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500">
                  <div><strong>Licensing:</strong> {rev.licensing}</div>
                  <Button to={`/reviews/${rev.slug}`} variant="secondary" size="sm">
                    Full Evaluation Details →
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

export default ReviewsHub;
