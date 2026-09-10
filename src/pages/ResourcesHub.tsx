import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Clock,
  CheckCircle2,
  TrendingUp,
  BookOpen,
  FileCode,
  Layers,
  Zap,
  Terminal,
} from 'lucide-react';
import { SEOHead } from '../seo';
import { buildBreadcrumbSchema } from '../seo/schema';
import { Container, Section, Badge, Button, Breadcrumb, FAQAccordion } from '../components/ui';
import { getAllGuides, GuideArticle } from '../data/guidesData';
import { trackEvent } from '../analytics/tracking';
import useInView from '../hooks/useInView';

// ─── Reusable Reveal Component ────────────────────────────────────────────────
const Reveal: React.FC<{
  children: React.ReactNode;
  direction?: 'up' | 'left' | 'right' | 'scale';
  delay?: number;
  className?: string;
}> = ({ children, direction = 'up', delay = 0, className = '' }) => {
  const [ref, isInView] = useInView({ threshold: 0.1, once: true });
  const animClass =
    direction === 'left'
      ? 'reveal-left'
      : direction === 'right'
      ? 'reveal-right'
      : direction === 'scale'
      ? 'reveal-scale'
      : 'reveal-up';

  return (
    <div
      ref={ref}
      className={`${animClass} ${isInView ? 'in-view' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const RESOURCES_FAQS = [
  {
    question: 'Who writes these technical guides and blueprints?',
    answer:
      'Every resource published in our knowledge hub is authored directly by our practicing technical SEO engineers and architecture leads. We do not use freelance copywriters or automated AI article generation. Each guide reflects empirical findings from real server log audits, rendering pipelines, and production codebase deployments.',
  },
  {
    question: 'Are these frameworks applicable to standard consumer eCommerce sites?',
    answer:
      'While the core principles of Core Web Vitals and crawl efficiency apply universally, these blueprints are specifically calibrated for high-volume, dynamic, and policy-sensitive environments — such as gaming, casino, financial trading, and regulated entertainment where crawl budgets are constrained and indexation competition is extreme.',
  },
  {
    question: 'Can we share these technical guides internally with our engineering team?',
    answer:
      'Yes. Our guides are designed as open architectural specifications for CTOs, product managers, and developers. You are welcome to reference our code snippets, schema templates, and audit checklists within your internal technical documentation.',
  },
  {
    question: 'How frequently are these technical publications updated?',
    answer:
      'We conduct quarterly audits of all architectural guides to ensure alignment with the latest Google Search Central documentation, Web Vitals metrics (such as the INP transition), and platform advertising policies.',
  },
];

export const ResourcesHub: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const guides = getAllGuides();
  const breadcrumbItems = [{ label: 'Resources' }];

  const categories = [
    { id: 'all', label: 'All Frameworks (10)' },
    { id: 'seo-guide', label: 'SEO Architecture (7)' },
    { id: 'industry-insight', label: 'Industry Insights (3)' },
  ];

  const filteredGuides = useMemo(() => {
    if (selectedCategory === 'all') return guides;
    return guides.filter((g) => g.category === selectedCategory);
  }, [guides, selectedCategory]);

  const featuredGuide = guides[0];

  return (
    <>
      <SEOHead
        title="Engineering Knowledge Hub & Technical Blueprints — iGaming Growth"
        description="Comprehensive technical SEO documentation, crawl budget blueprints, schema taxonomies, and Core Web Vitals engineering guides for high-competition platforms."
        canonicalPath="/resources"
        jsonLd={[buildBreadcrumbSchema(breadcrumbItems)]}
      />

      {/* ── 1. HERO SECTION ──────────────────────────────────────────────── */}
      <section className="relative bg-navy-950 bg-hero-atmosphere text-white overflow-hidden py-20 lg:py-28 border-b border-navy-800/80">
        <div className="absolute inset-0 bg-dark-mesh opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] rounded-full bg-purple-600/15 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[350px] rounded-full bg-blue-600/10 blur-[100px] pointer-events-none" />

        <Container className="relative z-10">
          <Breadcrumb items={breadcrumbItems} className="mb-6 text-slate-400" />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-6">
              <BookOpen className="w-3.5 h-3.5 text-purple-400" />
              <span>Technical Publications & Blueprints</span>
            </div>

            <h1 className="type-h1 text-white mb-6 leading-tight">
              Engineering Blueprints & Deep Architectural Guides
            </h1>

            <p className="text-lg lg:text-xl text-slate-300 leading-relaxed max-w-3xl mb-8">
              Rigorous, code-level documentation for technical directors, founders, and growth engineers. We document how to solve indexation traps, crawl budget exhaustion, rendering latency, and E-E-A-T entity modeling in contested verticals.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button
                to="/free-seo-audit"
                variant="gold"
                size="lg"
                icon={<Zap className="w-4 h-4" />}
                onClick={() => trackEvent('cta_click', { cta_name: 'resources_audit', cta_location: 'resources_hero' })}
              >
                Request Architectural Audit
              </Button>
              <Button
                to="/contact"
                variant="outline"
                size="lg"
                className="border-navy-700 text-white hover:bg-navy-800/60"
              >
                Discuss Technical Scope
              </Button>
            </div>

            {/* Quick stats pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-navy-800/60">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xl font-extrabold text-white">10</div>
                <div className="text-xs text-slate-400">Technical Papers</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xl font-extrabold text-emerald-400">200+</div>
                <div className="text-xs text-slate-400">Audit Checkpoints</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xl font-extrabold text-purple-400">100%</div>
                <div className="text-xs text-slate-400">Practitioner Authored</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xl font-extrabold text-amber-400">Zero</div>
                <div className="text-xs text-slate-400">AI Fluff or Thin Copy</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. FEATURED PUBLICATION SPOTLIGHT ────────────────────────────── */}
      {featuredGuide && (
        <Section variant="subtle" spacing="md">
          <Container>
            <div className="text-xs font-bold uppercase tracking-widest text-purple-600 mb-3">
              Featured Engineering Framework
            </div>
            <div className="p-8 lg:p-12 rounded-3xl bg-white border border-slate-200 shadow-card hover:border-purple-300 transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="purple" size="sm">
                      {featuredGuide.categoryLabel}
                    </Badge>
                    <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-full">
                      {featuredGuide.difficulty} Architecture
                    </span>
                    <div className="flex items-center gap-1 text-xs text-slate-400">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{featuredGuide.readTime}</span>
                    </div>
                  </div>

                  <h2 className="font-heading font-extrabold text-2xl lg:text-3xl text-slate-900 mb-4 leading-snug">
                    <Link
                      to={`/resources/seo-guides/${featuredGuide.slug}`}
                      className="hover:text-purple-700 transition-colors"
                    >
                      {featuredGuide.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {featuredGuide.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredGuide.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/resources/seo-guides/${featuredGuide.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs transition-colors"
                  >
                    <span>Read Full Blueprint</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Key takeaways sidebar */}
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                    Key Architectural Takeaways
                  </div>
                  <ul className="space-y-2.5">
                    {featuredGuide.keyTakeaways.slice(0, 3).map((takeaway, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2.5 text-xs text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* ── 3. FILTER TABS & RESOURCE DIRECTORY ───────────────────────────── */}
      <Section variant="white" spacing="lg">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <div className="type-eyebrow mb-2">Publications Index</div>
              <h2 className="type-h2 text-slate-900">Explore Technical Documents</h2>
              <p className="text-slate-600 text-sm max-w-xl mt-2">
                Browse our complete collection of technical SEO guides and industry-specific insight papers.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2 p-1.5 bg-slate-200/70 rounded-2xl self-start">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-white text-purple-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Guides Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGuides.map((guide: GuideArticle, idx: number) => {
              const guidePath =
                guide.category === 'industry-insight'
                  ? `/resources/industry-insights/${guide.slug}`
                  : `/resources/seo-guides/${guide.slug}`;

              return (
                <Reveal key={guide.slug} direction="up" delay={(idx % 3) * 80}>
                  <div className="group flex flex-col h-full p-7 rounded-3xl border border-slate-200 bg-white hover:border-purple-300 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-purple-100 text-purple-800">
                        {guide.categoryLabel}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-slate-400">
                        <Clock className="w-3.5 h-3.5 text-amber-500" />
                        <span>{guide.readTime}</span>
                      </div>
                    </div>

                    <h3 className="font-heading font-extrabold text-slate-900 text-lg mb-3 leading-snug group-hover:text-purple-700 transition-colors">
                      <Link to={guidePath}>{guide.title}</Link>
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed mb-6 flex-1">
                      {guide.excerpt}
                    </p>

                    {/* Metadata pill */}
                    <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-slate-50 border border-slate-100 text-xs mb-5">
                      <span className="text-slate-500 text-[11px]">Difficulty:</span>
                      <span className="font-bold text-slate-800 text-[11px]">{guide.difficulty}</span>
                    </div>

                    <Link
                      to={guidePath}
                      className="mt-auto inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-purple-50 text-slate-700 hover:text-purple-700 text-xs font-bold transition-all"
                      onClick={() =>
                        trackEvent('guide_click', {
                          location: 'resources_grid',
                          guide_slug: guide.slug,
                          guide_title: guide.title,
                        })
                      }
                    >
                      <span>Read Full Document</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* ── 4. FOUR ARCHITECTURAL KNOWLEDGE PILLARS ──────────────────────── */}
      <section className="bg-navy-950 text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-dark-mesh opacity-20 pointer-events-none" />
        <Container className="relative z-10">
          <Reveal direction="up" className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <span>Core Subject Areas</span>
            </div>
            <h2 className="type-h2 text-white mb-4">
              The 4 Pillars of Our Technical Research
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Our ongoing research and publication agenda focuses on resolving foundational technical bottlenecks in high-scale digital architectures.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Terminal,
                title: 'Server Log Analysis & Crawl Budget Allocation',
                desc: 'How search engine user-agents navigate large-scale dynamic sites. Eliminating crawler traps, parameter sprawl, and unmonitored redirect cascades that waste request quotas.',
              },
              {
                icon: FileCode,
                title: 'Client-Side Hydration & JavaScript Rendering',
                desc: 'Addressing the two-wave indexing deficit in modern React and Next.js applications. Implementing pre-rendering, edge rendering, and critical HTML delivery.',
              },
              {
                icon: Layers,
                title: 'E-E-A-T Entity Graph & Schema Taxonomy',
                desc: 'Constructing robust schema.org graphs connecting authors, publisher licenses, parent organizations, and responsible gaming disclosures to survive broad core updates.',
              },
              {
                icon: TrendingUp,
                title: 'Algorithmic Internal Link Graph Distribution',
                desc: 'Transitioning from unstructured manual hyperlinks to programmatic PageRank distribution models that reinforce high-converting commercial pillar targets.',
              },
            ].map((pillar, pIdx) => {
              const Icon = pillar.icon;
              return (
                <Reveal key={pillar.title} direction="up" delay={pIdx * 100}>
                  <div className="p-8 rounded-3xl bg-navy-900/60 border border-slate-800 h-full flex flex-col">
                    <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-500/30 text-purple-300 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading font-bold text-white text-lg mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed flex-1">
                      {pillar.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── 5. EDITORIAL INTEGRITY COMMITMENT ────────────────────────────── */}
      <Section variant="white" spacing="lg">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Reveal direction="up" className="text-center mb-12">
              <div className="type-eyebrow mb-2">Research Methodology</div>
              <h2 className="type-h2 text-slate-900 mb-4">
                Our Editorial Publishing Standards
              </h2>
              <p className="text-slate-600 text-sm">
                Every guide in this knowledge hub is subject to four core publishing criteria before public release.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Empirical Verification',
                  desc: 'We never publish theoretical advice. Every checklist and recommendation has been tested and verified across live production systems.',
                },
                {
                  title: 'Zero Sponsored Bias',
                  desc: 'We do not accept paid tool sponsorships or affiliate placement kickbacks in our architectural reviews. Tool recommendations are based solely on technical merit.',
                },
                {
                  title: 'Code-Level Actionability',
                  desc: 'We provide actual JSON-LD schemas, Nginx routing configs, and edge worker scripts rather than high-level conceptual generalities.',
                },
                {
                  title: 'Quarterly Currency Audits',
                  desc: 'Guides are continually reviewed against modern search engine documentation and Core Web Vitals threshold updates.',
                },
              ].map((std, sIdx) => (
                <Reveal key={std.title} direction="up" delay={sIdx * 80}>
                  <div className="p-6 rounded-3xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-purple-200 transition-all">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-heading font-bold text-slate-900 text-sm mb-1">{std.title}</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">{std.desc}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 6. FAQS ──────────────────────────────────────────────────────── */}
      <Section variant="subtle" spacing="lg">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Reveal direction="up" className="text-center mb-12">
              <div className="type-eyebrow mb-2">Technical Guidance</div>
              <h2 className="type-h2 text-slate-900 mb-4">
                Frequently Asked Questions About Our Publications
              </h2>
              <p className="text-slate-600 text-sm">
                Details regarding citations, peer review, and applying these frameworks to your stack.
              </p>
            </Reveal>

            <Reveal direction="up" delay={100}>
              <FAQAccordion items={RESOURCES_FAQS} />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ── 7. FINAL CONVERSION CTA ─────────────────────────────────────── */}
      <section className="relative bg-navy-950 bg-hero-atmosphere text-white py-20 lg:py-24 overflow-hidden border-t border-navy-800/80">
        <div className="absolute inset-0 bg-dark-mesh opacity-20 pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider">
              <span>Have Questions About Your Platform?</span>
            </div>
            <h2 className="type-h2 text-white">
              Request a Code & Architecture Diagnostic
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed max-w-xl mx-auto">
              Our senior engineering architects will examine your crawl logs, Core Web Vitals, and indexation pipeline to identify your highest-leverage growth levers.
            </p>
            <div className="flex flex-wrap items-center gap-4 justify-center pt-3">
              <Button
                to="/free-seo-audit"
                variant="gold"
                size="lg"
                icon={<Zap className="w-4 h-4" />}
                onClick={() => trackEvent('cta_click', { cta_name: 'resources_bottom_audit', cta_location: 'resources_bottom' })}
              >
                Claim Free Technical Audit
              </Button>
              <Button
                to="/contact"
                variant="outline"
                size="lg"
                className="border-navy-700 text-white hover:bg-navy-800/60"
              >
                Consult an Architect
              </Button>
              <a
                href="https://wa.me/919341436937"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-md shadow-emerald-950/20 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Direct WhatsApp Consultation</span>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ResourcesHub;
