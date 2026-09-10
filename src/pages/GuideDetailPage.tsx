import React, { useState } from 'react';
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
  ShieldCheck,
  Menu,
  X,
  FileCheck,
  AlertTriangle,
  ListChecks,
} from 'lucide-react';
import { SEOHead } from '../seo';
import { getCanonicalUrl } from '../seo/canonical';
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema } from '../seo/schema';
import { Container, Section, Badge, Button, Breadcrumb, FAQAccordion } from '../components/ui';
import { getGuideBySlug } from '../data/guidesData';
import { getServiceBySlug } from '../data/servicesData';
import { getIndustryBySlug } from '../data/industriesData';
import { trackEvent } from '../analytics/tracking';
import NotFound from './NotFound';

// Specialized technical implementation FAQs for each guide slug
const GUIDE_FAQS: Record<string, readonly { q: string; a: string }[]> = {
  'technical-seo-guide': [
    {
      q: 'How frequently should server access logs be analyzed for crawl budget waste?',
      a: 'For high-volume platforms publishing thousands of dynamic URLs, log analysis should occur weekly. Inspect Googlebot request distributions, 3xx redirect overhead, and 404 response clusters to ensure crawl quotas are spent exclusively on revenue-generating hubs.',
    },
    {
      q: 'Does Googlebot render JavaScript for all single-page applications reliably?',
      a: 'While Googlebot runs a headless Chromium rendering service, JavaScript rendering is deferred to a secondary processing queue. This two-wave indexing delays content indexing by days or weeks compared to server-side rendered (SSR) HTML.',
    },
    {
      q: 'What is the fastest way to resolve severe faceted navigation indexation bloat?',
      a: 'The fastest remedy is enforcing strict robots.txt disallow rules on parameter query strings (e.g., Disallow: /*?*sort=, Disallow: /*?*filter=) while adding self-referencing canonical tags on clean category root URLs.',
    },
    {
      q: 'Can rel=canonical tags alone fix parameter duplicate content issues?',
      a: 'No. The rel=canonical tag is an advisory hint, not an imperative directive. When search engines detect thousands of duplicate URLs with slight parameter variations, they may ignore canonical hints unless reinforced with crawl budget blocks in robots.txt.',
    },
  ],
  'seo-site-architecture': [
    {
      q: 'What is the maximum recommended click-depth from the homepage in enterprise architectures?',
      a: 'No indexable commercial or topical hub page should exceed 3 clicks from the homepage. Deeper URLs experience exponentially lower crawl frequencies and diluted PageRank equity transfer.',
    },
    {
      q: 'How do deterministic URLs prevent keyword cannibalization across regional variants?',
      a: 'Deterministic hierarchy (e.g., /industries/[vertical]/[service]) maps one specific intent to one unique URI. This eliminates competing pages targeting the same query cluster and clarifies topical parentage.',
    },
    {
      q: 'Should category hubs link to every individual child item or only sub-hubs?',
      a: 'High-volume platforms should link to curated sub-hubs (e.g., top games, trending categories, rule guides) rather than dumping thousands of links on one page, preserving crawl efficiency and link equity density.',
    },
    {
      q: 'How do we handle breadcrumb schema when a page belongs to multiple categories?',
      a: 'Choose one primary canonical path for the visible breadcrumbs and Schema.org BreadcrumbList metadata. Multi-category items must have a singular, deterministic canonical parent.',
    },
  ],
  'internal-linking': [
    {
      q: 'Can aggressive exact-match internal linking trigger a Google algorithmic penalty?',
      a: 'No. Google guidelines explicitly distinguish between external manipulative backlinks and internal navigation links. Descriptive, exact-match internal anchors provide essential semantic clarity regarding page topics.',
    },
    {
      q: 'How often should orphan page audits be executed on dynamic platforms?',
      a: 'Automated graph crawls should verify orphan status after every major release or catalog synchronization. Zero-inbound URLs receive virtually no search traffic and waste hosting infrastructure.',
    },
    {
      q: 'What is the optimal ratio of internal links pointing to transactional vs informational pages?',
      a: 'Informational guides and resource hubs should systematically route at least 2–3 contextual links down into relevant transactional service or product pages, forming a continuous authority funnel.',
    },
    {
      q: 'How does internal PageRank dissipation affect deep category indexation?',
      a: 'PageRank distributes equally across all outgoing links on a page. Unnecessary footer links or repetitive utility links dissipate valuable equity that should flow into core commercial hubs.',
    },
  ],
  'programmatic-seo': [
    {
      q: 'How do we prevent Google Helpful Content penalties on database-driven pages?',
      a: 'Every programmatic page must provide unique data, specialized formulas, distinct FAQs, or real-time calculations. Simply replacing city or game names within identical boilerplate text triggers algorithmic spam filters.',
    },
    {
      q: 'What is the minimum number of unique data attributes required per programmatic template?',
      a: 'We recommend at least 4–6 unique data dimensions per generated node (e.g., regulatory status, specific timeline, custom deliverables, unique challenges, and vertical-specific FAQs).',
    },
    {
      q: 'Should new programmatic directories be published simultaneously or in staged cohorts?',
      a: 'Always deploy in staged cohorts of 20–50 pages. Monitor crawl velocity, Google Search Console indexation curves, and ranking signals before expanding to subsequent directories.',
    },
    {
      q: 'How do you handle programmatic pages when underlying data feeds change or deprecate?',
      a: 'Implement automated status checks. When data drops below the quality threshold, cleanly return 404 or 410 status codes, or issue a 301 redirect to the parent thematic hub.',
    },
  ],
  'seo-audit': [
    {
      q: 'Why do automated SaaS audit tools fail on complex web applications?',
      a: 'Automated tools rely on generic heuristics that flag harmless cosmetic items while missing foundational architectural flaws such as JavaScript hydration race conditions, server log crawl traps, or canonical loops.',
    },
    {
      q: 'What server response codes should be prioritized first during an audit triage?',
      a: 'Address 5xx server errors and internal 4xx errors on commercial URLs immediately (P0). Next, eliminate internal redirect chains (301 -> 301) to reclaim crawl budget and preserve PageRank transfer.',
    },
    {
      q: 'How do you differentiate between rendering timeouts and actual 404 crawl errors?',
      a: 'Inspect server access logs alongside headless browser test snapshots. If the server returns 200 OK but search bot snapshots show an empty DOM container, the issue is client rendering failure, not a missing page.',
    },
    {
      q: 'What is the typical timeframe required to see ranking recovery after fixing P0 technical blockers?',
      a: 'Once Googlebot recrawls corrected URLs (typically 2–6 weeks for active platforms), indexation re-evaluations occur. Full ranking recovery typically materializes over 8–12 weeks as authority recalculates.',
    },
  ],
  'seo-friendly-web-development': [
    {
      q: 'Why is Server-Side Rendering (SSR) preferred over client-side hydration for search crawlers?',
      a: 'SSR delivers complete, semantic HTML immediately on initial byte transfer. Search engine crawlers parse content, headings, and internal links without waiting for client-side JavaScript execution queues.',
    },
    {
      q: 'How do hydration errors in React impact Cumulative Layout Shift (CLS)?',
      a: 'Hydration mismatches force React to discard the pre-rendered HTML DOM and rebuild components on the client, causing visible layout pops, content shifting, and severe CLS score penalties.',
    },
    {
      q: 'What is the correct way to handle font loading without triggering render-blocking delays?',
      a: 'Preconnect to the font CDN, use modern WOFF2 font formats, and specify font-display: swap in CSS to ensure text remains readable during font download without layout shifts.',
    },
    {
      q: 'How do we verify that pre-rendered HTML matches post-hydration DOM in automated CI/CD?',
      a: 'Integrate automated headless browser tests comparing the raw server response body against document.body.innerHTML after DOMContentLoaded, flagging discrepancies automatically before production deploy.',
    },
  ],
  'core-web-vitals': [
    {
      q: 'How does Interaction to Next Paint (INP) differ from the legacy First Input Delay (FID)?',
      a: 'FID measured only the delay of the initial user interaction. INP assesses all interactions (clicks, taps, keypresses) throughout the entire page lifecycle, holding platforms accountable for ongoing UI responsiveness.',
    },
    {
      q: 'What is the most effective engineering technique to bring LCP under 2.2 seconds?',
      a: 'Identify the exact Largest Contentful Paint node (typically the hero heading or featured image). Preload critical hero assets via <link rel="preload">, eliminate render-blocking CSS, and serve WebP/AVIF formats.',
    },
    {
      q: 'How do dynamic banner injections cause Cumulative Layout Shift (CLS) penalties?',
      a: 'When ads or dynamic banners load asynchronously without explicit container aspect-ratio or min-height reservations, they push existing content down, triggering severe layout shift deductions.',
    },
    {
      q: 'Does passing Core Web Vitals guarantee an immediate boost in organic keyword rankings?',
      a: 'Core Web Vitals act as a tiebreaker and foundational threshold. Passing metrics prevent algorithmic suppression, but top rankings still require strong topical relevance, clear architecture, and domain authority.',
    },
  ],
  'gaming-seo': [
    {
      q: 'How far in advance should new game landing pages be published before launch day?',
      a: 'Publish teaser hubs and game rule architectures 90–120 days prior to launch. This allows search engines to crawl, index, and establish baseline entity relationships before public search volume spikes.',
    },
    {
      q: 'How do you compete with multi-million dollar legacy gaming portals for high-intent terms?',
      a: 'Deploy asymmetric topical depth: target long-tail game variations, mechanics guides, tournament rule sets, and technical game features that legacy conglomerates cover with shallow, outdated content.',
    },
    {
      q: 'What role does player guide content play in organic retention and search visibility?',
      a: 'Comprehensive gameplay walkthroughs, tier lists, and strategic analysis capture players actively seeking to improve. These visitors exhibit 3x higher retention and trial rates than broad informational searchers.',
    },
    {
      q: 'How do we structure international hreflang for multi-currency gaming platforms?',
      a: 'Implement bidirectional hreflang tags linking country-language pairs (e.g., en-IN, en-GB, en-CA) with dedicated regional landing pages to prevent regional search cannibalization and legal non-compliance.',
    },
  ],
  'competitive-industry-seo': [
    {
      q: 'What is the asymmetric SEO principle in hyper-competitive verticals?',
      a: 'Rather than engaging in expensive head-to-head backlink bidding wars against established incumbents, agile operators win by dominating granular sub-topics, specialized calculations, and high-intent niche queries.',
    },
    {
      q: 'How do we protect our search rankings during broad Google Core Algorithm Updates?',
      a: 'Algorithm resilience requires zero black-hat tactics: strict transparent authorship, verifiable editorial guidelines, rapid Core Web Vitals, zero doorway pages, and consistent technical hygiene.',
    },
    {
      q: 'Why does topical depth outperform sheer content volume in contested niches?',
      a: 'Publishing 50 exhaustive, interconnected resources signals true domain authority to search engine quality evaluators, whereas 500 shallow articles dilute PageRank and trigger low-quality content filters.',
    },
    {
      q: 'How do you prioritize commercial conversion queries over vanity search traffic?',
      a: 'Focus on queries with clear commercial intent (e.g., specific rules, platform comparisons, technical architecture) rather than high-volume generic keywords that generate empty, non-converting traffic.',
    },
  ],
  'financial-website-seo': [
    {
      q: 'What specific E-E-A-T trust signals are mandatory for financial and trading websites?',
      a: 'Verifiable author biographies, recognized professional credentials, clear risk disclosures on every page, links to official regulatory bodies, and comprehensive company registration details.',
    },
    {
      q: 'How should real-time financial tables and live chart feeds be exposed to search bots?',
      a: 'Pre-render baseline tabular data into semantic HTML on the server. Enhance with client-side WebSockets for live user updates, ensuring crawlers discover complete, structured pricing feeds.',
    },
    {
      q: 'How does Google evaluate author authority on financial and investment topics?',
      a: 'Search algorithms evaluate author entities across the web. Structured data with sameAs links to LinkedIn profiles, published books, and recognized financial publications establishes undeniable expertise.',
    },
    {
      q: 'What structured data schemas are essential for financial trading and market portals?',
      a: 'Deploy Schema.org FinancialProduct, InvestmentOrDeposit, WebPage, and BreadcrumbList schemas, ensuring risk notices and provider details match on-page text precisely.',
    },
  ],
};

const DEFAULT_FAQS = [
  {
    q: 'How frequently should this architectural framework be audited in production?',
    a: 'We recommend quarterly technical reviews and immediate re-audits following major search engine core updates or platform codebase migrations.',
  },
  {
    q: 'What is the implementation timeline for these technical recommendations?',
    a: 'Critical P0 architectural fixes are typically deployed within 2–4 weeks, with full topical clustering and authority compounding over a 90–180 day cycle.',
  },
  {
    q: 'How do these techniques integrate with our existing continuous deployment pipeline?',
    a: 'All recommendations are delivered as code-level Pull Requests (PRs), schema snippets, and configuration files that pass through your standard staging and CI/CD validation steps.',
  },
];

const DEPLOYMENT_CHECKLIST = [
  {
    title: 'Staging Crawl Simulation',
    desc: 'Execute headless crawler audits on staging using Googlebot user-agents to detect 4xx status leaks and hydration timeouts prior to production deployment.',
  },
  {
    title: 'Edge Server Header Governance',
    desc: 'Enforce deterministic Cache-Control, strict transport security, and canonical Link headers at the CDN edge layer to minimize origin server load.',
  },
  {
    title: 'Schema Entity Graph Validation',
    desc: 'Run automated CI/CD schema linter checks to ensure Organization, WebPage, and BreadcrumbList nodes connect without orphan properties.',
  },
  {
    title: 'Hydration Mismatch Sentinel',
    desc: 'Configure automated browser testing to trap React hydration errors in the console, ensuring server-rendered HTML matches initial client state.',
  },
  {
    title: 'Mobile Network Throttle Testing',
    desc: 'Simulate 4G mobile network speeds during synthetic testing to guarantee Largest Contentful Paint (LCP) remains under 2.2 seconds.',
  },
  {
    title: 'Search Console Sitemaps & Telemetry',
    desc: 'Submit versioned XML sitemaps partitioned by category and monitor Googlebot real-time crawl curves in Google Search Console.',
  },
];

const FAILURE_MODES = [
  {
    title: 'Relying Solely on JavaScript Canonical Tags',
    desc: 'Placing rel=canonical tags inside client-rendered scripts often fails because crawlers evaluate the raw HTTP payload first. Canonical tags must exist in raw server HTML.',
  },
  {
    title: 'Ignoring User-Agent Rendering Divergence',
    desc: 'Serving different content or structure between desktop and mobile bots risks algorithmic cloaking penalties. Ensure responsive hydration matches across both user-agents.',
  },
  {
    title: 'Neglecting Edge Cache Invalidation on Dynamic Feeds',
    desc: 'Failing to purge edge cache when game odds or category listings change leads to stale content indexing and inconsistent search snippets.',
  },
];

export const GuideDetailPage: React.FC = () => {
  const [mobileTocOpen, setMobileTocOpen] = useState(false);
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

  const guideFAQs = GUIDE_FAQS[guide.slug] || DEFAULT_FAQS;

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
          buildFAQSchema(guideFAQs),
        ]}
      />

      {/* ── 1. Hero Section ───────────────────────────────────────── */}
      <section className="relative bg-navy-950 bg-hero-atmosphere text-white py-16 sm:py-20 lg:py-24 border-b border-navy-800/80 overflow-hidden">
        <div className="absolute inset-0 bg-dark-mesh opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[320px] sm:w-[450px] h-[250px] sm:h-[350px] rounded-full bg-purple-600/10 blur-[90px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-[260px] sm:w-[350px] h-[180px] sm:h-[250px] rounded-full bg-amber-500/10 blur-[80px] pointer-events-none" />

        <Container className="relative z-10">
          <div className="mb-6 overflow-x-auto py-1">
            <Breadcrumb items={breadcrumbItems} variant="light" />
          </div>

          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-4 text-xs text-slate-300">
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

            <h1 className="type-h1 text-white mb-5 leading-tight">
              {guide.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mb-6">
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

      {/* ── 2. Mobile Quick TOC Bar (<lg) ─────────────────────────── */}
      <div className="lg:hidden sticky top-16 z-30 bg-slate-900 border-b border-navy-800 text-white px-4 py-2.5 shadow-md">
        <button
          type="button"
          onClick={() => setMobileTocOpen(!mobileTocOpen)}
          className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-purple-300 cursor-pointer"
        >
          <span className="flex items-center gap-2">
            <Bookmark className="w-4 h-4 text-amber-400" />
            <span>Table of Contents ({guide.tableOfContents.length} Sections)</span>
          </span>
          {mobileTocOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>

        {mobileTocOpen && (
          <nav className="mt-3 pt-3 border-t border-navy-800 space-y-1 max-h-60 overflow-y-auto">
            {guide.tableOfContents.map((toc) => (
              <a
                key={toc.id}
                href={`#${toc.id}`}
                onClick={() => {
                  setMobileTocOpen(false);
                  trackEvent('guide_toc_click', {
                    toc_id: toc.id,
                    guide_slug: guide.slug,
                    heading_text: toc.title,
                  });
                }}
                className="block text-xs py-1.5 px-2 text-slate-300 hover:text-white hover:bg-navy-800 rounded transition-colors"
              >
                {toc.title}
              </a>
            ))}
          </nav>
        )}
      </div>

      {/* ── 3. Main Guide Body with Desktop Sticky TOC ─────────────── */}
      <Section variant="white" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Desktop Sticky Table of Contents */}
            <aside className="hidden lg:block lg:col-span-4 order-2 lg:order-1">
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

            {/* Main Article Content */}
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
                    <h2 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 border-b border-slate-100 pb-3">
                      {sec.heading}
                    </h2>
                    <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
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

              {/* ── 4. Production Deployment & Verification Protocol ──── */}
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-5">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
                  <ListChecks className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <span>Production Deployment &amp; Verification Protocol</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Before promoting architectural updates or programmatic catalogs to production, engineering teams must validate each deployment against this rigorous verification checklist:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {DEPLOYMENT_CHECKLIST.map((item) => (
                    <div key={item.title} className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1">
                      <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{item.title}</span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── 5. Common Architectural Failure Modes ─────────────── */}
              <div className="bg-rose-50/40 rounded-2xl p-6 sm:p-8 border border-rose-200/70 space-y-4">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
                  <AlertTriangle className="w-5 h-5 text-rose-600 flex-shrink-0" />
                  <span>Common Architectural Failure Modes &amp; Prevention</span>
                </div>
                <div className="space-y-3">
                  {FAILURE_MODES.map((mode) => (
                    <div key={mode.title} className="p-4 rounded-xl bg-white border border-rose-100 shadow-xs space-y-1">
                      <div className="text-xs font-bold text-rose-950">
                        {mode.title}
                      </div>
                      <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                        {mode.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── 6. Engineering Standards & Peer-Review Verification ─ */}
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 space-y-3">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span>Engineering Methodology &amp; Peer-Review Standard</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Every technical framework documented in this guide is verified against Google Search Central developer specifications, W3C HTML5 standards, and schema.org vocabularies. Our engineering recommendations are tested across staging environments, validated through real-world server log crawls, and benchmarked against Google Core Web Vitals telemetry under mobile network constraints.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-500 font-medium">
                  <span className="flex items-center gap-1.5">
                    <FileCheck className="w-3.5 h-3.5 text-purple-600" />
                    <span>Peer-Reviewed Architecture</span>
                  </span>
                  <span>•</span>
                  <span>Zero Black-Hat Cloaking</span>
                  <span>•</span>
                  <span>Reproducible Code PRs</span>
                </div>
              </div>

              {/* ── 7. Technical Implementation FAQs ─────────────────── */}
              <div className="pt-6 border-t border-slate-200 space-y-6">
                <div>
                  <Badge variant="purple" size="sm" className="mb-2">
                    Implementation Q&amp;A
                  </Badge>
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900">
                    Frequently Asked Technical Questions
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Direct answers to practical architectural and deployment challenges encountered by engineering teams.
                  </p>
                </div>

                <FAQAccordion
                  items={guideFAQs.map((f) => ({
                    question: f.q,
                    answer: f.a,
                  }))}
                />
              </div>

              {/* Tags */}
              <div className="pt-6 border-t border-slate-200">
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

              {/* Mobile-only Related Capabilities (<lg) */}
              <div className="lg:hidden pt-6 border-t border-slate-200 space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Relevant Services &amp; Verticals
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {guide.relatedServices.map((slug) => {
                    const srv = getServiceBySlug(slug);
                    if (!srv) return null;
                    return (
                      <Link
                        key={slug}
                        to={`/services/${slug}`}
                        className="flex items-center justify-between p-3 rounded-xl bg-slate-50 text-xs font-bold text-slate-800 hover:text-purple-700"
                      >
                        <span>{srv.name}</span>
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Contextual CTA Banner */}
              <div className="bg-navy-950 bg-hero-atmosphere rounded-2xl p-6 sm:p-8 text-white mt-8 border border-navy-800 shadow-card-dark">
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
                    className="w-full sm:w-auto text-center justify-center"
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
