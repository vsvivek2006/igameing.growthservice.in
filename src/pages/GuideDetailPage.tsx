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
  ShieldCheck,
  Menu,
  X,
  FileCheck,
  Layers,
  Sparkles,
  XCircle,
  Activity,
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

interface PipelineTier {
  tier: string;
  name: string;
  subtitle: string;
  badge: string;
  deliverables: string[];
  techStack: string;
}

const AGENCY_PIPELINE_TIERS: PipelineTier[] = [
  {
    tier: '01',
    name: 'Edge Gateway & Bot Routing Layer',
    subtitle: 'Ultra-low latency crawler ingestion and cache governance at the CDN edge',
    badge: '<35ms Global TTFB',
    deliverables: [
      'Edge Workers routing Googlebot directly to instant pre-rendered HTML cache',
      'Deterministic HTTP cache-control & dynamic bypass for real-time odds & game feeds',
      'Strict robots.txt and edge canonical header enforcement eliminating parameter bloat',
    ],
    techStack: 'Cloudflare Workers · Varnish Edge · HTTP/3 QUIC',
  },
  {
    tier: '02',
    name: 'Headless Pre-Rendering & Semantic Schema Engine',
    subtitle: 'Eliminating two-wave JavaScript rendering delays with instant semantic HTML',
    badge: '100% Core Web Vitals Pass',
    deliverables: [
      'Complete semantic HTML delivered on the initial server byte (zero hydration lag)',
      'Automated JSON-LD schema injection (Organization, Service, FAQ, BreadcrumbList)',
      'Zero layout shift (CLS < 0.05) with pre-allocated viewports and modern WebP/AVIF',
    ],
    techStack: 'Next.js SSR · Vite Headless · JSON-LD Linked Data',
  },
  {
    tier: '03',
    name: 'Programmatic Keyword & Entity Silo Matrix',
    subtitle: 'Capturing thousands of high-intent transactional search queries across verticals',
    badge: '5,000+ Keyword Hubs',
    deliverables: [
      'Topical cluster taxonomy preventing internal keyword cannibalization',
      'Contextual internal PageRank routing funneling equity directly into commercial hubs',
      'Dedicated landing page templates engineered for rapid mobile player conversion',
    ],
    techStack: 'Deterministic Silo Routing · Custom Taxonomy Engine',
  },
  {
    tier: '04',
    name: '24/7 Telemetry & Algorithmic Penalty Watchdog',
    subtitle: 'Proactive surveillance protecting organic player inflow from algorithmic shifts',
    badge: 'Real-Time GSC Watchdog',
    deliverables: [
      'Automated server access log parsing trapping 4xx leaks and redirect chains weekly',
      'Google Search Console API telemetry monitoring crawl curves and snippet CTR shifts',
      'Continuous white-hat compliance auditing preventing cloaking and doorway penalties',
    ],
    techStack: 'LogStream Telemetry · GSC API · Lighthouse CI',
  },
];

const AGENCY_VS_TRADITIONAL = [
  {
    area: 'Delivery & Execution',
    traditional: '40-page PDF audit reports lecturing your internal team on what they should fix',
    agency: 'Direct code commits, GitHub Pull Requests, edge configs, and production deployments',
  },
  {
    area: 'Infrastructure Speed',
    traditional: 'Recommends third-party CMS plugins that bloat client scripts and degrade TTFB',
    agency: 'Custom edge caching and headless architecture delivering sub-35ms response times',
  },
  {
    area: 'Keyword Strategy',
    traditional: 'Chases generic informational keywords that generate empty, non-converting traffic',
    agency: 'Laser-focused on high-intent deposit, rule, and player registration search terms',
  },
  {
    area: 'Accountability & Proof',
    traditional: 'Blames Google algorithm updates and search fluctuations for stagnant results',
    agency: 'Transparent Search Console telemetry access backed by verified 15.9M click proof',
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
    <div className="bg-model3-base text-white selection:bg-amber-400 selection:text-black font-sans antialiased overflow-x-hidden">
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
      <section className="relative bg-model3-base text-white py-16 sm:py-20 lg:py-24 border-b border-white/10 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[450px] h-[350px] rounded-full bg-purple-900/15 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-[350px] h-[250px] rounded-full bg-amber-500/10 blur-[100px] pointer-events-none" />

        <Container className="relative z-10">
          <div className="w-full text-left mb-6 sm:mb-8 overflow-x-auto py-1">
            <Breadcrumb items={breadcrumbItems} variant="light" />
          </div>

          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-4 text-xs text-slate-300">
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
            <div className="flex items-center justify-center gap-3 pt-4 border-t border-white/10 w-full max-w-md">
              <div className="w-10 h-10 rounded-full bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-300 shadow-inner">
                <User className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-white">{guide.author}</div>
                <div className="text-xs text-slate-400">{guide.authorRole}</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. Mobile Quick TOC Bar (<lg) ─────────────────────────── */}
      <div className="lg:hidden sticky top-16 z-30 bg-[#0B0B12] border-b border-white/10 text-white px-4 py-2.5 shadow-md">
        <button
          type="button"
          onClick={() => setMobileTocOpen(!mobileTocOpen)}
          className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-amber-300 cursor-pointer"
        >
          <span className="flex items-center gap-2">
            <Bookmark className="w-4 h-4 text-amber-400" />
            <span>Table of Contents ({guide.tableOfContents.length} Sections)</span>
          </span>
          {mobileTocOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>

        {mobileTocOpen && (
          <nav className="mt-3 pt-3 border-t border-white/10 space-y-1 max-h-60 overflow-y-auto">
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
                className="block text-xs py-1.5 px-2 text-slate-300 hover:text-amber-300 hover:bg-white/5 rounded transition-colors"
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
                <div className="bg-surface-card rounded-2xl p-6 border border-white/10 shadow-lg backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                    <Bookmark className="w-4 h-4 text-amber-400" />
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
                        className="block text-xs font-semibold text-slate-400 hover:text-amber-300 hover:translate-x-0.5 transition-all py-1 border-l-2 border-transparent hover:border-amber-400 pl-3"
                      >
                        {toc.title}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Related Capabilities Box */}
                <div className="bg-surface-card rounded-2xl p-6 border border-white/10 shadow-lg backdrop-blur-sm space-y-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
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
                          className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-amber-400/10 text-xs font-bold text-slate-200 hover:text-amber-300 border border-white/5 transition-colors group"
                        >
                          <span>{srv.name}</span>
                          <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all" />
                        </Link>
                      );
                    })}
                  </div>

                  <div className="pt-2 border-t border-white/10">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
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
                            className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-semibold text-slate-300 hover:bg-purple-500/20 hover:text-purple-300 transition-colors"
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
            <article className="lg:col-span-8 order-1 lg:order-2 space-y-8 break-words min-w-0">
              {/* Key Takeaways Callout Box */}
              <div className="bg-purple-950/25 border border-purple-500/30 border-l-4 border-l-purple-500 rounded-2xl p-6 shadow-sm">
                <h2 className="font-heading font-bold text-base text-purple-200 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span>Key Architectural Takeaways</span>
                </h2>
                <ul className="space-y-2 text-sm text-purple-200/90 leading-relaxed">
                  {guide.keyTakeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0 mt-2" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sections */}
              <div className="space-y-12">
                {guide.sections.map((sec) => (
                  <section key={sec.id} id={sec.id} className="scroll-mt-32 space-y-4">
                    <h2 className="font-heading font-bold text-xl sm:text-2xl text-white border-b border-white/10 pb-3">
                      {sec.heading}
                    </h2>
                    <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
                      {sec.body.split('\n\n').map((paragraph, pIdx) => (
                        <p key={pIdx}>{paragraph}</p>
                      ))}
                    </div>

                    {sec.agencySafeguard && (
                      <div className="rounded-2xl bg-gradient-to-r from-purple-950/40 via-model3-base to-amber-950/20 border border-amber-500/25 p-5 sm:p-6 shadow-xl space-y-3 mt-4">
                        <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-2.5">
                          <div className="flex items-center gap-2 text-xs font-bold font-mono uppercase tracking-wider text-amber-300">
                            <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                            <span>Agency Production Safeguard: {sec.agencySafeguard.title}</span>
                          </div>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/25 shrink-0 font-bold">
                            Active Governance
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                            <div className="text-[10px] font-mono uppercase text-slate-400 font-bold">
                              What Our Engineers Take Care Of:
                            </div>
                            <p className="text-xs text-slate-200 leading-relaxed font-medium">
                              {sec.agencySafeguard.whatWeMonitor}
                            </p>
                          </div>

                          <div className="p-3.5 rounded-xl bg-emerald-500/[0.03] border border-emerald-500/15 space-y-1">
                            <div className="text-[10px] font-mono uppercase text-emerald-400 font-bold">
                              Your Operational Protection:
                            </div>
                            <p className="text-xs text-slate-300 leading-relaxed">
                              {sec.agencySafeguard.operatorBenefit}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </section>
                ))}
              </div>

              {/* ── 4. Proprietary Architecture & Deployment Pipeline (What WE Deploy) ──── */}
              <div className="bg-navy-900/90 rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider mb-2">
                      <Layers className="w-3.5 h-3.5 text-purple-400" />
                      <span>How We Deploy &amp; Manage This For You</span>
                    </div>
                    <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
                      Proprietary 4-Tier Engineering &amp; Search Pipeline
                    </h3>
                  </div>
                  <span className="self-start sm:self-auto px-3 py-1 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold">
                    Production Active
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Instead of handing you theoretical checklists or advice, our senior engineering squad takes full operational responsibility. We architect, write the code, configure edge servers, and maintain this 4-tier pipeline directly on your infrastructure:
                </p>

                {/* 4-Tier Visual Cards Stack */}
                <div className="space-y-4">
                  {AGENCY_PIPELINE_TIERS.map((tier) => (
                    <div
                      key={tier.tier}
                      className="p-5 sm:p-6 rounded-2xl bg-model3-base/80 border border-white/10 hover:border-amber-400/40 transition-all duration-200 group"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center font-mono font-black text-xs text-amber-400 shrink-0">
                            {tier.tier}
                          </span>
                          <div>
                            <h4 className="font-heading font-bold text-base text-white group-hover:text-amber-300 transition-colors">
                              {tier.name}
                            </h4>
                            <p className="text-xs text-slate-400">{tier.subtitle}</p>
                          </div>
                        </div>
                        <span className="self-start sm:self-auto px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-amber-400 shrink-0">
                          {tier.badge}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-3 border-t border-white/5">
                        {tier.deliverables.map((del, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-300 bg-white/[0.02] p-2.5 rounded-xl border border-white/5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="leading-snug">{del}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-3 pt-2.5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                        <span className="text-slate-400">Stack: <strong className="text-slate-200">{tier.techStack}</strong></span>
                        <span className="text-emerald-400 font-semibold">100% Agency Managed</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── 5. The Agency Reality: Generic Retainers vs iGaming Growth Squad ── */}
              <div className="bg-navy-900/90 rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Execution Comparison</span>
                  </div>
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
                    Why Operators Retain Us: What We Build vs Generic Agencies
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                    Most agencies deliver slide decks with recommendations for your team to do the work. We function as your embedded senior engineering unit:
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[540px]">
                    <thead>
                      <tr className="border-b border-white/10 text-xs font-mono text-slate-400 uppercase tracking-wider">
                        <th className="py-3 px-4 w-1/4">Delivery Dimension</th>
                        <th className="py-3 px-4 w-3/8 text-rose-400">Typical Generic Retainer</th>
                        <th className="py-3 px-4 w-3/8 text-emerald-400">iGaming Growth Engineering</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-xs">
                      {AGENCY_VS_TRADITIONAL.map((row) => (
                        <tr key={row.area} className="hover:bg-white/[0.02] transition-colors">
                          <td className="py-3.5 px-4 font-bold text-white font-heading">{row.area}</td>
                          <td className="py-3.5 px-4 text-slate-400 leading-relaxed">
                            <div className="flex items-start gap-2">
                              <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                              <span>{row.traditional}</span>
                            </div>
                          </td>
                          <td className="py-3.5 px-4 text-slate-200 leading-relaxed bg-emerald-500/[0.04] rounded-xl font-medium">
                            <div className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{row.agency}</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* ── 5.5 Verified Performance Telemetry Banner ──── */}
              <div className="p-6 rounded-3xl bg-gradient-to-r from-amber-500/10 via-purple-900/20 to-slate-900 border border-amber-500/30 shadow-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest mb-1">
                    <Activity className="w-4 h-4" />
                    <span>Real-World Validation Delivered</span>
                  </div>
                  <h4 className="font-heading font-black text-lg sm:text-xl text-white">
                    15,900,000+ Real Organic Players Delivered
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl leading-relaxed">
                    This exact architecture generated 15.9M verified search clicks for skill gaming and 22K monthly player inquiries for betting exchanges on Google.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0">
                  <Link
                    to="/#proof"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs shadow-md transition-colors"
                  >
                    <span>Inspect Proof Telemetry</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
                  </Link>
                </div>
              </div>

              {/* ── 6. Engineering Standards & Peer-Review Verification ─ */}
              <div className="bg-navy-900/80 rounded-2xl p-6 sm:p-7 border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span>Engineering Methodology &amp; Peer-Review Standard</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Every technical framework documented in this guide is verified against Google Search Central developer specifications, W3C HTML5 standards, and schema.org vocabularies. Our engineering recommendations are tested across staging environments, validated through real-world server log crawls, and benchmarked against Google Core Web Vitals telemetry under mobile network constraints.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-400 font-medium">
                  <span className="flex items-center gap-1.5">
                    <FileCheck className="w-3.5 h-3.5 text-purple-400" />
                    <span>Peer-Reviewed Architecture</span>
                  </span>
                  <span>•</span>
                  <span>Zero Black-Hat Cloaking</span>
                  <span>•</span>
                  <span>Reproducible Code PRs</span>
                </div>
              </div>

              {/* ── 7. Technical Implementation FAQs ─────────────────── */}
              <div className="pt-6 border-t border-white/10 space-y-6">
                <div>
                  <Badge variant="purple" size="sm" className="mb-2">
                    Implementation Q&amp;A
                  </Badge>
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
                    Frequently Asked Technical Questions
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
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
              <div className="pt-6 border-t border-white/10">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2">
                    Topic Index:
                  </span>
                  {guide.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-slate-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Mobile-only Related Capabilities (<lg) */}
              <div className="lg:hidden pt-6 border-t border-white/10 space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
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
                        className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-slate-200 hover:text-purple-300"
                      >
                        <span>{srv.name}</span>
                        <ChevronRight className="w-4 h-4 text-slate-500" />
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
    </div>
  );
};

export default GuideDetailPage;
