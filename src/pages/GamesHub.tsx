import { SEOHead, buildBreadcrumbSchema } from '../seo';
import {
  Container,
  Section,
  Card,
  Badge,
  Button,
  Breadcrumb,
} from '../components/ui';
import { getAllGameCategories } from '../selectors';

export const GamesHub: React.FC = () => {
  const games = getAllGameCategories();

  const breadcrumbs = [{ label: 'Games Directory', path: '/games', current: true }];

  return (
    <>
      <SEOHead
        title="Casino Games Directory | Mathematical Odds & Rules"
        description="Comprehensive directory of casino games. In-depth mathematical analysis of RTP, house edges, basic strategy charts, and volatility ratings."
        canonicalPath="/games"
        jsonLd={buildBreadcrumbSchema(breadcrumbs)}
      />

      <div className="bg-slate-900 text-white py-12 border-b border-purple-900/40">
        <Container>
          <Breadcrumb items={breadcrumbs} dark className="mb-4" />
          <h1 className="type-h2 text-white mb-3">Casino Games Directory</h1>
          <p className="type-body-lg text-slate-300 max-w-3xl">
            Mathematical odds, house edges, and strategic mechanics for all major digital and live casino games.
          </p>
        </Container>
      </div>

      <Section variant="white" spacing="md">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game) => (
              <Card key={game.slug} variant="interactive" className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="purple" size="sm">{game.skillLevel}</Badge>
                    <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded">
                      RTP: {game.averageRTP}
                    </span>
                  </div>

                  <h2 className="font-heading font-bold text-xl text-slate-900 mb-1">
                    {game.title}
                  </h2>
                  <p className="text-xs text-slate-500 font-medium mb-3">
                    {game.subtitle}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {game.fullDesc}
                  </p>

                  <div className="space-y-1.5 text-xs text-slate-600 border-t border-slate-100 pt-3">
                    <div><strong>House Edge:</strong> {game.houseEdgeRange}</div>
                    <div><strong>Volatility:</strong> {game.volatility}</div>
                    <div><strong>Popular Variants:</strong> {game.popularVariants.join(', ')}</div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100">
                  <Button to={`/games/${game.slug}`} variant="secondary" size="sm" className="w-full">
                    View {game.title} Guide →
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

export default GamesHub;
