import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowRight,
  Calendar,
  Clock,
  User,
  CheckCircle2,
  ChevronRight,
  Bookmark,
  Code2,
} from 'lucide-react';
import { SEOHead } from '../seo';
import { getCanonicalUrl } from '../seo/canonical';
import { buildArticleSchema, buildBreadcrumbSchema } from '../seo/schema';
import { Container, Section, Badge, Button, Breadcrumb } from '../components/ui';
import { getGuideBySlug } from '../data/guidesData';
import { getServiceBySlug } from '../data/servicesData';
import { getIndustryBySlug } from '../data/industriesData';
import { trackEvent } from '../analytics/tracking';
import NotFound from './NotFound';

export const GuideDetailPage: React.FC = () => {
  const { guideSlug } = useParams<{ guideSlug: string }>();
  const guide = guideSlug ? getGuideBySlug(guideSlug) : undefined;

  if (!guide) {
    return <NotFound />;
  }

  const pathPrefix =
    guide.category === 'industry-insight'
      ? '/resources/industry-insights'
      : '/resources/seo-guides';

  const canonicalPath = `${pathPrefix}/${guide.slug}`;
  const canonicalUrl = getCanonicalUrl(canonicalPath);

  const breadcrumbItems = [
    { label: 'Resources', path: '/resources' },
    { label: guide.categoryLabel, path: '/resources' },
    { label: guide.title },
  ];

  return (
    <>
      <SEOHead
        title={guide.seo.title}
        description={guide.seo.description}
        canonicalPath={canonicalPath}
        jsonLd={[
          buildBreadcrumbSchema(breadcrumbItems),
          buildArticleSchema({
            title: guide.title,
            description: guide.excerpt,
            url: canonicalUrl,
            datePublished: guide.lastUpdated,
            authorName: guide.author,
          }),
        ]}
      />

      {/* ── Hero Section ──────────────────────────────────────────── */}
      <section className="relative bg-navy-950 bg-hero-atmosphere text-white py-16 lg:py-24 border-b border-navy-800/80 overflow-hidden">
        <div className="absolute inset-0 bg-dark-mesh opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[450px] h-[350px] rounded-full bg-purple-600/10 blur-[90px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-[350px] h-[250px] rounded-full bg-amber-500/10 blur-[80px] pointer-events-none" />

        <Container className="relative z-10">
          <div className="mb-6">
            <Breadcrumb items={breadcrumbItems} variant="light" />
          </div>

          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-4 text-xs text-slate-300">
              <Badge variant="purple" size="sm">
                {guide.categoryLabel}
              </Badge>
              <Badge variant="amber" size="sm">
                {guide.difficulty} Level
              </Badge>
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>{guide.readTime}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>Updated {guide.lastUpdated}</span>
              </div>
            </div>

            <h1 className="type-h1 text-white mb-5">
              {guide.title}
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mb-6">
              {guide.excerpt}
            </p>

            {/* Author Byline */}
            <div className="flex items-center gap-3 pt-3 border-t border-navy-800/90">
              <div className="w-10 h-10 rounded-full bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-300">
                <User className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">{guide.author}</div>
                <div className="text-xs text-slate-400">{guide.authorRole}</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Guide Body with Sticky TOC ────────────────────────────── */}
      <Section variant="white" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Sticky Table of Contents */}
            <aside className="lg:col-span-4 order-2 lg:order-1">
              <div className="sticky top-28 space-y-6">
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
                    <Bookmark className="w-4 h-4 text-purple-600" />
                    <span>Table of Contents</span>
                  </div>
                  <nav className="space-y-2">
                    {guide.tableOfContents.map((toc) => (
                      <a
                        key={toc.id}
                        href={`#${toc.id}`}
                        onClick={() =>
                          trackEvent('guide_toc_click', {
                            toc_id: toc.id,
                            guide_slug: guide.slug,
                            heading_text: toc.title,
                          })
                        }
                        className="block text-xs font-semibold text-slate-600 hover:text-purple-600 hover:translate-x-0.5 transition-all py-1 border-l-2 border-transparent hover:border-purple-600 pl-3"
                      >
                        {toc.title}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Related Capabilities Box */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Relevant Services
                  </div>
                  <div className="space-y-2">
                    {guide.relatedServices.map((slug) => {
                      const srv = getServiceBySlug(slug);
                      if (!srv) return null;
                      return (
                        <Link
                          key={slug}
                          to={`/services/${slug}`}
                          className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-purple-50 text-xs font-bold text-slate-800 hover:text-purple-700 transition-colors group"
                        >
                          <span>{srv.name}</span>
                          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-purple-600 group-hover:translate-x-0.5 transition-all" />
                        </Link>
                      );
                    })}
                  </div>

                  <div className="pt-2 border-t border-slate-100">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Industry Applications
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {guide.relatedIndustries.map((slug) => {
                        const ind = getIndustryBySlug(slug);
                        if (!ind) return null;
                        return (
                          <Link
                            key={slug}
                            to={`/industries/${slug}`}
                            className="px-2.5 py-1 rounded-lg bg-slate-100 text-[11px] font-semibold text-slate-700 hover:bg-purple-100 hover:text-purple-700 transition-colors"
                          >
                            {ind.shortName}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Right Column: Main Content Content */}
            <article className="lg:col-span-8 order-1 lg:order-2 space-y-8">
              {/* Key Takeaways Callout Box */}
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border-l-4 border-purple-600 rounded-2xl p-6 shadow-sm">
                <h2 className="font-heading font-bold text-base text-purple-950 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <span>Key Architectural Takeaways</span>
                </h2>
                <ul className="space-y-2 text-sm text-purple-900/90 leading-relaxed">
                  {guide.keyTakeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-600 flex-shrink-0 mt-2" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sections */}
              <div className="space-y-12">
                {guide.sections.map((sec) => (
                  <section key={sec.id} id={sec.id} className="scroll-mt-32 space-y-4">
                    <h2 className="font-heading font-bold text-2xl text-slate-900 border-b border-slate-100 pb-3">
                      {sec.heading}
                    </h2>
                    <p className="text-slate-700 leading-relaxed text-base">
                      {sec.body}
                    </p>

                    {sec.codeSnippet && (
                      <div className="rounded-2xl bg-slate-950 text-slate-200 p-5 overflow-x-auto border border-slate-800 shadow-inner">
                        <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-2 mb-3">
                          <span className="flex items-center gap-1.5 font-mono">
                            <Code2 className="w-4 h-4 text-purple-400" />
                            {sec.codeLang?.toUpperCase() || 'CODE'}
                          </span>
                          <span>Architectural Blueprint</span>
                        </div>
                        <pre className="font-mono text-xs leading-relaxed">
                          <code>{sec.codeSnippet}</code>
                        </pre>
                      </div>
                    )}
                  </section>
                ))}
              </div>

              {/* Tags */}
              <div className="pt-8 border-t border-slate-200">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2">
                    Topic Index:
                  </span>
                  {guide.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-slate-100 text-xs font-medium text-slate-600"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contextual CTA Banner */}
              <div className="bg-navy-950 bg-hero-atmosphere rounded-2xl p-8 text-white mt-12 border border-navy-800 shadow-card-dark">
                <div className="max-w-xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
                    <span>Engineering Action Plan</span>
                  </div>
                  <h3 className="type-h2 text-white mb-2">
                    {guide.cta.title}
                  </h3>
                  <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                    {guide.cta.description}
                  </p>
                  <Button
                    to={guide.cta.href}
                    variant="gold"
                    size="lg"
                    icon={<ArrowRight className="w-4 h-4" />}
                    iconPosition="right"
                    onClick={() =>
                      trackEvent('cta_click', {
                        cta_location: 'guide_bottom_cta',
                        cta_name: guide.cta.buttonLabel,
                        guide_slug: guide.slug,
                      })
                    }
                  >
                    {guide.cta.buttonLabel}
                  </Button>
                </div>
              </div>
            </article>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default GuideDetailPage;
