import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Clock,
  CheckCircle2,
  HelpCircle,
  TrendingUp,
} from 'lucide-react';
import { SEOHead } from '../seo';
import { Container, Section, Badge, Button } from '../components/ui';
import { FadeIn, MotionCard } from '../components/animations';
import { getAllGuides, GuideArticle } from '../data/guidesData';
import { trackEvent } from '../analytics/tracking';

// Maps UI display category IDs to the underlying data category values
const CATEGORY_TO_DATA: Record<string, string> = {
  'technical-seo': 'seo-guide',
  'growth-strategy': 'seo-guide',
  'paid-acquisition': 'seo-guide',
  'website-architecture': 'seo-guide',
};

export const ResourcesHub: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const guides = getAllGuides();

  const categories = [
    { id: 'all', label: 'All Resources' },
    { id: 'seo-guide', label: 'SEO Guides' },
    { id: 'technical-seo', label: 'Technical SEO' },
    { id: 'industry-insight', label: 'Industry Insights' },
    { id: 'growth-strategy', label: 'Growth Strategy' },
    { id: 'paid-acquisition', label: 'Paid Acquisition' },
    { id: 'website-architecture', label: 'Website Architecture' },
  ];

  const filteredGuides = useMemo(() => {
    if (selectedCategory === 'all') return guides;
    const dataCategory = CATEGORY_TO_DATA[selectedCategory] ?? selectedCategory;
    return guides.filter((g) => g.category === dataCategory);
  }, [guides, selectedCategory]);

  return (
    <>
      <SEOHead
        title="Knowledge Hub & Technical SEO Guides — iGaming Growth"
        description="Authoritative B2B engineering guides, technical audit checklists, and architecture frameworks for digital platforms operating in high-competition verticals."
        canonicalPath="/resources"
      />

      {/* ── Hero Section ──────────────────────────────────────────── */}
      <section className="relative bg-navy-950 bg-hero-atmosphere text-white overflow-hidden py-20 lg:py-28 border-b border-navy-800/80">
        <div className="absolute inset-0 bg-dark-mesh opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[400px] rounded-full bg-purple-600/10 blur-[100px] pointer-events-none" />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-5">
                <span>Knowledge Base & Technical Publications</span>
              </div>
              <h1 className="type-h1 text-white mb-5">
                Architectural Frameworks & SEO Blueprints
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
                In-depth technical guides, crawl budget blueprints, Core Web Vitals optimization techniques, and compliance documentation for digital growth teams.
              </p>

              {/* Quick Jump Hub Links */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  to="/services"
                  className="px-4 py-2 rounded-xl bg-navy-900 border border-navy-700 hover:border-purple-500 text-xs font-semibold text-slate-300 hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <TrendingUp className="w-3.5 h-3.5 text-purple-400" />
                  <span>Growth Services</span>
                </Link>
                <Link
                  to="/industries"
                  className="px-4 py-2 rounded-xl bg-navy-900 border border-navy-700 hover:border-amber-400 text-xs font-semibold text-slate-300 hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
                  <span>Target Verticals</span>
                </Link>
                <Link
                  to="/free-seo-audit"
                  className="px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 text-xs font-semibold text-amber-300 transition-colors inline-flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>Free Technical Audit</span>
                </Link>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ── Category Filter Tabs ──────────────────────────────────── */}
      <Section variant="white" spacing="lg">
        <Container>
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Guides Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGuides.map((guide: GuideArticle, idx: number) => {
              const guidePath =
                guide.category === 'industry-insight'
                  ? `/resources/industry-insights/${guide.slug}`
                  : `/resources/seo-guides/${guide.slug}`;

              return (
                <MotionCard key={guide.slug} delay={idx * 60} variant="default">
                  <div className="p-7 flex flex-col h-full">
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <Badge variant="purple" size="sm">
                        {guide.categoryLabel}
                      </Badge>
                      <div className="flex items-center gap-1 text-xs text-slate-400">
                        <Clock className="w-3.5 h-3.5 text-amber-500" />
                        <span>{guide.readTime}</span>
                      </div>
                    </div>

                    <h2 className="font-heading font-bold text-lg text-slate-900 mb-3 leading-snug group-hover:text-purple-600 transition-colors">
                      <Link to={guidePath} className="hover:text-purple-600">
                        {guide.title}
                      </Link>
                    </h2>

                    <p className="text-xs text-slate-600 leading-relaxed mb-6 flex-1">
                      {guide.excerpt}
                    </p>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="font-medium text-slate-400">
                        Level: <strong className="text-slate-700">{guide.difficulty}</strong>
                      </span>
                      <Link
                        to={guidePath}
                        className="inline-flex items-center gap-1 text-purple-600 font-bold hover:underline"
                        onClick={() =>
                          trackEvent('guide_click', {
                            location: 'resources_grid',
                            guide_slug: guide.slug,
                            guide_title: guide.title,
                          })
                        }
                      >
                        <span>Read Guide</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </MotionCard>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* ── Conversion Section ────────────────────────────────────── */}
      <Section variant="slate" spacing="lg">
        <Container>
          <div className="bg-navy-950 bg-hero-atmosphere text-white rounded-3xl p-8 lg:p-12 border border-navy-800 shadow-card-dark flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider">
                <span>Architecture Review</span>
              </div>
              <h2 className="type-h2 text-white">
                Want Our Engineers to Audit Your Architecture?
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                We review server logs, crawl budget allocation, and Core Web Vitals to provide a prioritised technical remediation plan.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 flex-shrink-0">
              <Button
                to="/free-seo-audit"
                variant="gold"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                Claim Free Technical Audit
              </Button>
              <Button to="/contact" variant="outline" size="lg" className="border-navy-700 text-white hover:bg-navy-800/60">
                Speak With an Architect
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default ResourcesHub;
