import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Clock,
  CheckCircle2,
  BookOpen,
  Layers,
  Zap,
  Terminal,
  Network,
  Sparkles,
} from 'lucide-react';
import { SEOHead } from '../seo';
import { buildBreadcrumbSchema } from '../seo/schema';
import { Container, Section, Badge, Button, Breadcrumb, FAQAccordion, Reveal } from '../components/ui';
import { getAllGuides, GuideArticle } from '../data/guidesData';
import { trackEvent } from '../analytics/tracking';

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
    <div className="bg-model3-base text-white selection:bg-amber-400 selection:text-black font-sans antialiased overflow-x-hidden">
      <SEOHead
        title="Engineering Knowledge Hub & Technical Blueprints — iGaming Growth"
        description="Comprehensive technical SEO documentation, crawl budget blueprints, schema taxonomies, and Core Web Vitals engineering guides for high-competition platforms."
        canonicalPath="/resources"
        jsonLd={[buildBreadcrumbSchema(breadcrumbItems)]}
      />

      {/* ── 1. HERO SECTION ──────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] pt-28 pb-16 lg:pt-36 lg:pb-24 bg-model3-base overflow-hidden flex items-center border-b border-white/10">
        <div className="absolute top-0 right-1/4 w-[600px] h-[450px] rounded-full bg-purple-900/15 blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[450px] h-[400px] rounded-full bg-amber-500/10 blur-[130px] pointer-events-none" />
        <div 
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />

        <Container className="relative z-10">
          <div className="w-full text-left mb-6 sm:mb-8">
            <Breadcrumb items={breadcrumbItems} className="text-slate-400" />
          </div>

          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/15 text-xs font-bold uppercase tracking-widest text-slate-300 mb-6 shadow-inner">
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>Technical Publications &amp; Blueprints</span>
            </div>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white font-heading leading-[1.08] mb-6">
              Engineering Blueprints &amp; <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
                Deep Architectural Guides
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-slate-300 leading-relaxed max-w-3xl mb-8">
              Rigorous, code-level documentation for technical directors, founders, and growth engineers. We document how to solve indexation traps, crawl budget exhaustion, rendering latency, and E-E-A-T entity modeling in contested verticals.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10 w-full sm:w-auto">
              <Button
                to="/free-seo-audit"
                variant="gold"
                size="lg"
                className="w-full sm:w-auto justify-center"
                icon={<Zap className="w-4 h-4 text-slate-950" />}
                onClick={() => trackEvent('cta_click', { cta_name: 'resources_audit', cta_location: 'resources_hero' })}
              >
                Request Architectural Audit
              </Button>
              <Button
                to="/contact"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto justify-center border-white/15 text-white hover:bg-white/10"
              >
                Discuss Technical Scope
              </Button>
            </div>

            {/* Quick stats pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-6 border-t border-white/10 w-full max-w-3xl">
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="text-xl font-extrabold text-white">10</div>
                <div className="text-xs text-slate-400">Technical Papers</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="text-xl font-extrabold text-emerald-400">200+</div>
                <div className="text-xs text-slate-400">Code Blocks Included</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="text-xl font-extrabold text-amber-400">100%</div>
                <div className="text-xs text-slate-400">Practical &amp; Tested</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="text-xl font-extrabold text-cyan-400">0%</div>
                <div className="text-xs text-slate-400">Generic Fluff</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. FEATURED PUBLICATION SPOTLIGHT ────────────────────────────── */}
      {featuredGuide && (
        <Section variant="subtle" spacing="md">
          <Container>
            <div className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">
              Featured Engineering Framework
            </div>
            <div className="p-8 lg:p-12 rounded-3xl bg-surface-card border border-white/10 shadow-xl backdrop-blur-sm hover:border-amber-400/40 transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="purple" size="sm">
                      {featuredGuide.categoryLabel}
                    </Badge>
                    <span className="text-xs font-bold text-amber-300 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full">
                      {featuredGuide.difficulty} Architecture
                    </span>
                    <div className="flex items-center gap-1 text-xs text-slate-400">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{featuredGuide.readTime}</span>
                    </div>
                  </div>

                  <h2 className="font-heading font-extrabold text-2xl lg:text-3xl text-white mb-4 leading-snug">
                    <Link
                      to={`/resources/seo-guides/${featuredGuide.slug}`}
                      className="hover:text-amber-400 transition-colors"
                    >
                      {featuredGuide.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {featuredGuide.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredGuide.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/resources/seo-guides/${featuredGuide.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 font-bold text-xs shadow-md shadow-amber-400/20 transition-all hover:-translate-y-0.5"
                  >
                    <span>Read Full Blueprint</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Key takeaways sidebar */}
                <div className="p-6 rounded-2xl bg-[#080808] border border-white/10">
                  <div className="text-xs font-bold uppercase tracking-wider text-white mb-3">
                    Key Architectural Takeaways
                  </div>
                  <ul className="space-y-2.5">
                    {featuredGuide.keyTakeaways.slice(0, 3).map((takeaway, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
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
              <div className="type-eyebrow mb-2 text-amber-400">Publications Index</div>
              <h2 className="type-h2 text-white">Explore Technical Documents</h2>
              <p className="text-slate-400 text-sm max-w-xl mt-2">
                Browse our complete collection of technical SEO guides and industry-specific insight papers.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2 p-1.5 bg-[#0B0B12] border border-white/10 rounded-2xl self-start">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 shadow-md shadow-amber-400/20'
                      : 'text-slate-400 hover:text-white'
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
                  <div className="group flex flex-col h-full p-7 rounded-3xl border border-white/10 bg-surface-card hover:border-amber-400/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5">
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                        {guide.categoryLabel}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-slate-400">
                        <Clock className="w-3.5 h-3.5 text-amber-400" />
                        <span>{guide.readTime}</span>
                      </div>
                    </div>

                    <h3 className="font-heading font-extrabold text-white text-lg mb-3 leading-snug group-hover:text-amber-400 transition-colors">
                      <Link to={guidePath}>{guide.title}</Link>
                    </h3>

                    <p className="text-xs text-slate-400 leading-relaxed mb-6 flex-1">
                      {guide.excerpt}
                    </p>

                    {/* Metadata pill */}
                    <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-xs mb-5">
                      <span className="text-slate-400 text-[11px]">Difficulty:</span>
                      <span className="font-bold text-white text-[11px]">{guide.difficulty}</span>
                    </div>

                    <Link
                      to={guidePath}
                      className="mt-auto inline-flex items-center justify-between w-full px-5 py-3 rounded-2xl bg-white/10 hover:bg-purple-600 text-white text-xs font-bold border border-white/10 transition-all shadow-sm group-hover:shadow-md"
                      onClick={() =>
                        trackEvent('guide_click', {
                          location: 'resources_grid',
                          guide_slug: guide.slug,
                          guide_title: guide.title,
                        })
                      }
                    >
                      <span>Read Full Document</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
          <div className="max-w-2xl mb-16">
            <div className="type-eyebrow mb-2">Architectural Foundation</div>
            <h2 className="type-h2 text-white">How We Engineer Content Authority</h2>
            <p className="text-slate-400 text-sm mt-3">
              Technical documentation is built around four core disciplines of search platform engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: '01',
                title: 'Headless Crawler Optimization',
                desc: 'Optimizing dynamic JavaScript rendering pipelines so modern crawler bots execute and index client-side routing accurately.',
                icon: Layers,
              },
              {
                num: '02',
                title: 'Graph & Entity Linking',
                desc: 'Creating unambiguous schema graphs that tie your platform entity to established industry knowledge panels and wikis.',
                icon: Network,
              },
              {
                num: '03',
                title: 'High-Scale Crawl Budgeting',
                desc: 'Pruning thin faceted URLs and deploying intelligent cache tags to preserve bot resources for your revenue-critical landing pages.',
                icon: Terminal,
              },
              {
                num: '04',
                title: 'Defensive SERP Engineering',
                desc: 'Monitoring real-time ranking volatility and testing algorithm-resistant content architecture before broad deployments.',
                icon: Sparkles,
              },
            ].map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.num}
                  className="p-6 rounded-2xl bg-navy-900/60 border border-navy-800/80 hover:border-purple-500/30 transition-all group"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-extrabold text-purple-400">
                      {pillar.num}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-white text-base mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── 5. EDITORIAL STANDARDS ACCREDITATION ───────────────────────────── */}
      <Section variant="white" spacing="lg">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Reveal direction="up" className="text-center mb-12">
              <div className="type-eyebrow mb-2">Quality Standards</div>
              <h2 className="type-h2 text-white">Our Engineering Editorial Framework</h2>
              <p className="text-slate-400 text-sm mt-3">
                Every publication passes through a peer-reviewed technical checklist before release.
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
                  <div className="p-6 rounded-3xl border border-white/10 bg-navy-900/80 hover:bg-navy-900 hover:border-purple-500/30 transition-all">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-heading font-bold text-white text-sm mb-1">{std.title}</h4>
                        <p className="text-xs text-slate-400 leading-relaxed">{std.desc}</p>
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
              <h2 className="type-h2 text-white mb-4">
                Frequently Asked Questions About Our Publications
              </h2>
              <p className="text-slate-400 text-sm">
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
      <section className="relative bg-model3-base text-white py-20 lg:py-24 overflow-hidden border-t border-white/10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full bg-purple-900/15 blur-[140px] pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/15 text-slate-300 text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>Have Questions About Your Platform?</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
              Request a Code &amp; Architecture Diagnostic
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed max-w-xl mx-auto">
              Our senior engineering architects will examine your crawl logs, Core Web Vitals, and indexation pipeline to identify your highest-leverage growth levers.
            </p>
            <div className="flex flex-wrap items-center gap-4 justify-center pt-3">
              <Button
                to="/free-seo-audit"
                variant="gold"
                size="lg"
                icon={<Zap className="w-4 h-4 text-slate-950" />}
                onClick={() => trackEvent('cta_click', { cta_name: 'resources_bottom_audit', cta_location: 'resources_bottom' })}
              >
                Claim Free Technical Audit
              </Button>
              <Button
                to="/contact"
                variant="outline"
                size="lg"
                className="border-white/15 text-white hover:bg-white/10"
              >
                Consult an Architect
              </Button>
              <a
                href="https://wa.me/917654928455"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-md shadow-emerald-950/20 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Direct WhatsApp Consultation</span>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ResourcesHub;
