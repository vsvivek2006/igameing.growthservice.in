import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { SEOHead, buildArticleSchema, buildBreadcrumbSchema } from '../seo';
import { Container, Section, Card, Badge, Button, Breadcrumb } from '../components/ui';
import { getGuideBySlug } from '../selectors';
import { Calendar, User, ArrowLeft } from 'lucide-react';

export const GuideDetailPage: React.FC = () => {
  const { guideSlug } = useParams<{ guideSlug: string }>();
  const guide = guideSlug ? getGuideBySlug(guideSlug) : undefined;

  if (!guide) {
    return <Navigate to="/casino-guides" replace />;
  }

  const parentPath = guide.category === 'game-guides' ? '/game-guides' : '/casino-guides';
  const parentLabel = guide.category === 'game-guides' ? 'Game Guides' : 'Casino Guides';

  const breadcrumbs = [
    { label: parentLabel, path: parentPath },
    { label: guide.title, path: `${parentPath}/${guide.slug}`, current: true },
  ];

  const combinedSchema = [buildArticleSchema(guide), buildBreadcrumbSchema(breadcrumbs)];

  return (
    <>
      <SEOHead
        title={`${guide.title} | iGaming Growth`}
        description={guide.excerpt}
        canonicalPath={`${parentPath}/${guide.slug}`}
        jsonLd={combinedSchema}
      />

      <div className="bg-slate-900 text-white py-12 border-b border-purple-900/40">
        <Container>
          <Breadcrumb items={breadcrumbs} dark className="mb-4" />
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300 mb-3">
            <Badge variant="purple" size="sm">{guide.difficulty}</Badge>
            <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-yellow-400" /> Updated: {guide.lastUpdated}</span>
            <span>•</span>
            <span className="flex items-center gap-1"><User className="w-3.5 h-3.5 text-purple-400" /> {guide.author}</span>
          </div>
          <h1 className="type-h2 text-white mb-3 max-w-4xl">{guide.title}</h1>
          <p className="type-body-lg text-slate-300 max-w-3xl">{guide.excerpt}</p>
        </Container>
      </div>

      <Section variant="white" spacing="md">
        <Container size="md">
          <div className="space-y-6 text-slate-700 leading-relaxed text-sm">
            <Card variant="base" className="space-y-4">
              <h2 className="font-heading font-bold text-xl text-slate-900">
                Core Theoretical Principles
              </h2>
              <p>
                In this educational module, our research desk evaluates the mathematical baseline of {guide.title.toLowerCase()}. Understanding the difference between empirical sample results and theoretical probability is essential for disciplined play.
              </p>
              <p>
                No betting system (such as Martingale, Fibonacci, or D’Alembert) can mathematically convert a negative expected value (-EV) game into a positive expectation (+EV) over time. Every round remains an independent statistical trial governed by the operator's audited RNG.
              </p>
            </Card>

            <div className="flex flex-wrap gap-2 pt-2">
              {guide.tags.map((t) => (
                <span key={t} className="text-xs bg-purple-50 text-purple-700 px-3 py-1 rounded-full font-medium">
                  #{t}
                </span>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <Button to={parentPath} variant="outline" size="sm" icon={<ArrowLeft className="w-4 h-4" />}>
                Back to {parentLabel}
              </Button>
              <Button to="/responsible-gaming" variant="secondary" size="sm">
                Player Safety Rules →
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default GuideDetailPage;
