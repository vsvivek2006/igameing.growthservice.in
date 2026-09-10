import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead, buildBreadcrumbSchema } from '../seo';
import {
  Container,
  Section,
  Card,
  Badge,
  Breadcrumb,
} from '../components/ui';
import { getAllGuides } from '../selectors';

export const GuidesHub: React.FC = () => {
  const guides = getAllGuides();
  const breadcrumbs = [{ label: 'Casino & Game Guides', path: '/casino-guides', current: true }];

  return (
    <>
      <SEOHead
        title="Casino Guides & Game Strategy | Objective Mathematical Tutorials"
        description="Comprehensive collection of casino guides, bankroll management rules, probability charts, and licensing frameworks."
        canonicalPath="/casino-guides"
        jsonLd={buildBreadcrumbSchema(breadcrumbs)}
      />

      <div className="bg-slate-900 text-white py-12 border-b border-purple-900/40">
        <Container>
          <Breadcrumb items={breadcrumbs} dark className="mb-4" />
          <h1 className="type-h2 text-white mb-3">Casino Guides &amp; Strategy Tutorials</h1>
          <p className="type-body-lg text-slate-300 max-w-3xl">
            Mathematical analysis, bankroll management discipline, and player protection guides written by independent analysts.
          </p>
        </Container>
      </div>

      <Section variant="white" spacing="md">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <Card key={guide.slug} variant="interactive" className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <Badge variant="purple" size="sm">
                      {guide.category.replace('-', ' ')}
                    </Badge>
                    <span>{guide.readTime}</span>
                  </div>

                  <h2 className="font-heading font-bold text-lg text-slate-900 mb-2">
                    <Link
                      to={guide.category === 'game-guides' ? `/game-guides/${guide.slug}` : `/casino-guides/${guide.slug}`}
                      className="hover:text-purple-600 transition-colors"
                    >
                      {guide.title}
                    </Link>
                  </h2>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {guide.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {guide.tags.map((t) => (
                      <span key={t} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>{guide.author}</span>
                  <Link
                    to={guide.category === 'game-guides' ? `/game-guides/${guide.slug}` : `/casino-guides/${guide.slug}`}
                    className="font-bold text-purple-600 hover:underline"
                  >
                    Read Guide →
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
};

export default GuidesHub;
