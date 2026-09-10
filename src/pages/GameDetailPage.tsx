import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { SEOHead, buildGameSchema, buildBreadcrumbSchema } from '../seo';
import { Container, Section, Card, Badge, Button, Breadcrumb } from '../components/ui';
import { getGameCategoryBySlug } from '../selectors';
import { Percent, ArrowLeft, Layers, Sparkles } from 'lucide-react';

export const GameDetailPage: React.FC = () => {
  const { gameSlug } = useParams<{ gameSlug: string }>();
  const game = gameSlug ? getGameCategoryBySlug(gameSlug) : undefined;

  if (!game) {
    return <Navigate to="/games" replace />;
  }

  const breadcrumbs = [
    { label: 'Games Directory', path: '/games' },
    { label: game.title, path: `/games/${game.slug}`, current: true },
  ];

  const combinedSchema = [buildGameSchema(game), buildBreadcrumbSchema(breadcrumbs)];

  return (
    <>
      <SEOHead
        title={`${game.title} | Mathematical House Edge & Rules Guide`}
        description={`${game.shortDesc} Mathematical RTP: ${game.averageRTP}, House Edge: ${game.houseEdgeRange}.`}
        canonicalPath={`/games/${game.slug}`}
        jsonLd={combinedSchema}
      />

      <div className="bg-slate-900 text-white py-12 border-b border-purple-900/40">
        <Container>
          <Breadcrumb items={breadcrumbs} dark className="mb-4" />
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Badge variant="purple" size="sm">{game.skillLevel}</Badge>
            <Badge variant="gold" size="sm">RTP: {game.averageRTP}</Badge>
            <Badge variant="dark" size="sm">Volatility: {game.volatility}</Badge>
          </div>
          <h1 className="type-h2 text-white mb-2">{game.title}</h1>
          <p className="type-body-lg text-slate-300 max-w-3xl">{game.subtitle}</p>
        </Container>
      </div>

      <Section variant="white" spacing="md">
        <Container size="md">
          <div className="space-y-8">
            <Card variant="base" className="space-y-4">
              <h2 className="font-heading font-bold text-xl text-slate-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-600" />
                Game Overview &amp; Mechanics
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                {game.fullDesc}
              </p>
            </Card>

            <Card variant="elevated" className="space-y-4">
              <h2 className="font-heading font-bold text-xl text-slate-900 flex items-center gap-2">
                <Percent className="w-5 h-5 text-yellow-600" />
                Mathematical House Edge Analysis
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3 bg-purple-50 rounded-xl border border-purple-100">
                  <div className="text-slate-500 font-medium">Average Theoretical RTP</div>
                  <div className="font-heading font-extrabold text-2xl text-purple-700 mt-1">
                    {game.averageRTP}
                  </div>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="text-slate-500 font-medium">Statistical House Edge Range</div>
                  <div className="font-heading font-extrabold text-2xl text-slate-900 mt-1">
                    {game.houseEdgeRange}
                  </div>
                </div>
              </div>
            </Card>

            <Card variant="base" className="space-y-4">
              <h2 className="font-heading font-bold text-xl text-slate-900 flex items-center gap-2">
                <Layers className="w-5 h-5 text-purple-600" />
                Major Game Variants
              </h2>
              <div className="flex flex-wrap gap-2">
                {game.popularVariants.map((v) => (
                  <span
                    key={v}
                    className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-semibold"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </Card>

            <div className="pt-4 flex items-center justify-between">
              <Button to="/games" variant="outline" size="sm" icon={<ArrowLeft className="w-4 h-4" />}>
                All Games Directory
              </Button>
              <Button to="/casino-guides" variant="primary" size="sm">
                Explore Strategy Guides →
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default GameDetailPage;
