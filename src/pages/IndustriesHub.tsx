import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Shield,
  Zap,
  CheckCircle2,
  AlertTriangle,
  Layers,
  Lock,
} from 'lucide-react';
import { SEOHead } from '../seo';
import { buildBreadcrumbSchema } from '../seo/schema';
import { Container, Section, Button, Breadcrumb, FAQAccordion, MatrixVisualizer } from '../components/ui';
import { getAllIndustries, INDUSTRY_CATEGORY_LABELS } from '../data/industriesData';
import type { IndustryVertical } from '../data/industriesData';
import useInView from '../hooks/useInView';
import { trackEvent } from '../analytics';

const CATEGORY_STYLES: Record<IndustryVertical['category'], { badge: string; glow: string }> = {
  gaming: { badge: 'bg-purple-100 text-purple-800 border border-purple-200/80', glow: 'group-hover:border-purple-300' },
  finance: { badge: 'bg-blue-100 text-blue-800 border border-blue-200/80', glow: 'group-hover:border-blue-300' },
  adult: { badge: 'bg-rose-100 text-rose-800 border border-rose-200/80', glow: 'group-hover:border-rose-300' },
  'gaming-skill': { badge: 'bg-amber-100 text-amber-800 border border-amber-200/80', glow: 'group-hover:border-amber-300' },
};

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

const INDUSTRIES_FAQS = [
  {
    question: 'Why do general digital marketing agencies struggle in these specific verticals?',
    answer:
      'General agencies rely on consumer playbooks: standard outreach link building, basic CMS themes, unmonitored keyword volume, and paid social campaigns. In iGaming, financial trading, and adult verticals, ad platforms enforce severe restrictions, competitors deploy aggressive technical architectures, and search engine quality raters hold content to rigorous YMYL (Your Money Your Life) standards. A generalist playbook in these niches leads to wasted budgets and algorithmic index suppression.',
  },
  {
    question: 'How do you navigate strict search engine guidelines for YMYL niches?',
    answer:
      'We construct comprehensive E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness) entity frameworks. This includes verified author profiles, transparent operator licensing declarations, responsible gaming and financial risk disclosures, clear terms, and editorial integrity guidelines. Search algorithms reward transparent operators who exhibit genuine accountability.',
  },
  {
    question: 'Do you work with platforms that have experienced manual actions or algorithmic penalties?',
    answer:
      'Yes. Penalty remediation and index recovery represent a core capability. We conduct historical backlink audits to isolate toxic links, review site architecture for cloaking or thin affiliate content, clean deceptive redirects, and file structured reconsideration requests with search engine webmaster teams where appropriate.',
  },
  {
    question: 'What is the organic timeline for a newly launched operator domain?',
    answer:
      'In high-difficulty verticals, new domains face a "sandbox" or initial authority validation phase. Technical indexing and brand entity establishment occur within 30–60 days. Long-tail keyword impressions typically emerge between months 2 and 4. Primary commercial head-term competitiveness develops between months 6 and 12 through compounding topical authority and genuine editorial link acquisition.',
  },
  {
    question: 'Can you support multi-jurisdiction and multi-language expansion?',
    answer:
      'Yes. We engineer hreflang taxonomies, ccTLD and subfolder routing hierarchies, CDN edge routing rules, and localized content strategies tailored to regional search engines and regulatory jurisdictions across Tier-1, Tier-2, and emerging global digital gaming markets.',
  },
  {
    question: 'How do you ensure brand safety and regulatory compliance?',
    answer:
      'We enforce an absolute zero-tolerance policy against deceptive SEO tactics: no link networks, no hacked redirects, no automated scraper content, and no cloaking. All link acquisition is editorial and contextually aligned. We ensure all platform copy includes mandatory regional disclaimers and age-gating requirements.',
  },
];

export const IndustriesHub: React.FC = () => {
  const industries = getAllIndustries();
  const breadcrumbItems = [{ label: 'Industries' }];
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredIndustries =
    selectedCategory === 'all'
      ? industries
      : industries.filter((ind) => ind.category === selectedCategory);

  return (
    <>
      <SEOHead
        title="Specialist Industries We Serve — High-Competition Digital Growth Agency"
        description="Digital growth, technical SEO, and conversion engineering for online gaming, casino, financial trading, skill gaming, and adult industry operators. Built for ultra-competitive SERPs."
        canonicalPath="/industries"
        jsonLd={[buildBreadcrumbSchema(breadcrumbItems)]}
      />

      {/* ── 1. HERO SECTION ──────────────────────────────────────────────── */}
      <section className="relative bg-navy-950 bg-hero-atmosphere text-white overflow-hidden border-b border-navy-800/80">
        <div className="absolute inset-0 bg-dark-mesh opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] rounded-full bg-purple-600/15 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-[450px] h-[350px] rounded-full bg-blue-600/10 blur-[100px] pointer-events-none" />

        <Container className="relative z-10 py-20 lg:py-28">
          <Breadcrumb items={breadcrumbItems} className="mb-6 text-slate-400" />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-6">
              <Shield className="w-3.5 h-3.5 text-purple-400" />
              <span>Specialist Industry Architecture</span>
            </div>

            <h1 className="type-h1 text-white mb-6 leading-tight">
              High-Competition Verticals Where Technical Depth Is The Only Defensible Moat
            </h1>

            <p className="text-lg lg:text-xl text-slate-300 leading-relaxed mb-8 max-w-3xl">
              We do not serve generic retail or local service businesses. We specialize exclusively in digital verticals where search engine algorithms enforce the strictest scrutiny, ad networks restrict placement, and competitors possess multi-year domain equity.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button
                to="/free-seo-audit"
                variant="gold"
                size="lg"
                icon={<Zap className="w-4 h-4" />}
                onClick={() => trackEvent('cta_click', { cta_name: 'industry_audit', cta_location: 'industries_hero' })}
              >
                Get Vertical-Specific Audit
              </Button>
              <Button
                to="/book-call"
                variant="outline"
                size="lg"
                className="border-navy-700 text-white hover:bg-navy-800/60"
                onClick={() => trackEvent('cta_click', { cta_name: 'book_call', cta_location: 'industries_hero' })}
              >
                Schedule Strategic Consultation
              </Button>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-navy-800/60">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xl font-extrabold text-white">8</div>
                <div className="text-xs text-slate-400">Target Verticals</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xl font-extrabold text-emerald-400">YMYL</div>
                <div className="text-xs text-slate-400">E-E-A-T Framework</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xl font-extrabold text-purple-400">0%</div>
                <div className="text-xs text-slate-400">PBN or Spam Risk</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xl font-extrabold text-amber-400">Multi-Geo</div>
                <div className="text-xs text-slate-400">Hreflang & Global Routing</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. VERTICAL SELECTOR & DIRECTORY ─────────────────────────────── */}
      <Section variant="subtle" spacing="md">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <div className="type-eyebrow mb-2">Specialist Sectors</div>
              <h2 className="type-h2 text-slate-900">Industries We Engineer For</h2>
              <p className="text-slate-600 text-sm max-w-xl mt-2">
                Explore individual market sector challenges, indexation requirements, and tailored organic roadmaps.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2 p-1.5 bg-slate-200/70 rounded-2xl self-start">
              <button
                type="button"
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-white text-purple-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All (8)
              </button>
              <button
                type="button"
                onClick={() => setSelectedCategory('gaming')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === 'gaming'
                    ? 'bg-white text-purple-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Casino & Gaming
              </button>
              <button
                type="button"
                onClick={() => setSelectedCategory('gaming-skill')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === 'gaming-skill'
                    ? 'bg-white text-purple-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Skill Gaming
              </button>
              <button
                type="button"
                onClick={() => setSelectedCategory('finance')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === 'finance'
                    ? 'bg-white text-purple-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Financial & Trading
              </button>
              <button
                type="button"
                onClick={() => setSelectedCategory('adult')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === 'adult'
                    ? 'bg-white text-purple-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Adult & Regulated
              </button>
            </div>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredIndustries.map((industry, idx) => {
              const style = CATEGORY_STYLES[industry.category];
              return (
                <Reveal key={industry.slug} direction="up" delay={(idx % 2) * 100}>
                  <div
                    className="group flex flex-col h-full p-8 rounded-3xl border border-slate-200 bg-white hover:border-purple-300 hover:shadow-card-hover gradient-border-card transition-all duration-300 hover:-translate-y-1.5"
                  >
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <span className={`text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full ${style.badge}`}>
                          {INDUSTRY_CATEGORY_LABELS[industry.category]}
                        </span>
                        <h3 className="font-heading font-extrabold text-slate-900 text-xl mt-3 leading-snug group-hover:text-purple-700 transition-colors">
                          {industry.name}
                        </h3>
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 italic mb-5 leading-relaxed font-medium">
                      "{industry.tagline}"
                    </p>

                    <p className="text-xs text-slate-600 leading-relaxed mb-6">
                      {industry.overview.slice(0, 200)}...
                    </p>

                    {/* Primary challenge callout */}
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 mb-6">
                      <div className="flex items-center gap-2 mb-1.5">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
                          Key Technical Hurdle: {industry.seoChallenges[0]?.title}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {industry.seoChallenges[0]?.description}
                      </p>
                    </div>

                    {/* Recommended disciplines */}
                    <div className="mb-6">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Primary Leveraged Disciplines
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {industry.recommendedServices.map((slug) => (
                          <span
                            key={slug}
                            className="text-[10px] font-semibold px-2.5 py-0.5 rounded-lg bg-slate-100 text-slate-600 hover:bg-purple-100 hover:text-purple-700 transition-colors"
                          >
                            {slug.replace(/-/g, ' ')}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      to={`/industries/${industry.slug}`}
                      className="mt-auto inline-flex items-center justify-between w-full px-5 py-3 rounded-2xl bg-slate-900 hover:bg-purple-900 text-white text-xs font-bold transition-all shadow-sm group-hover:shadow-md"
                    >
                      <span>Read Deep-Dive Industry Strategy</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* ── 2.5 INTERACTIVE VERTICAL X SERVICE ARCHITECTURE MATRIX ─── */}
      <section className="bg-navy-950 text-white py-16 sm:py-24 border-y border-navy-800/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-atmosphere opacity-70 pointer-events-none" />
        <Container className="relative z-10">
          <Reveal direction="up" className="max-w-3xl mx-auto text-center mb-12">
            <div className="type-eyebrow text-amber-400 mb-2">Interactive Matrix Engine</div>
            <h2 className="type-h2 text-white mb-4">
              Explore Tailored Architecture by Vertical
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed max-w-2xl mx-auto">
              Select any high-competition vertical below to inspect real, approved service architectures, unique positioning frameworks, and core technical deliverables.
            </p>
          </Reveal>
          <Reveal direction="up" delay={150}>
            <MatrixVisualizer />
          </Reveal>
        </Container>
      </section>

      {/* ── 3. WHY SPECIALIST ARCHITECTURE IS NON-NEGOTIABLE ─────────────── */}
      <Section variant="white" spacing="lg">
        <Container>
          <Reveal direction="up" className="max-w-3xl mx-auto text-center mb-16">
            <div className="type-eyebrow mb-2">Operational Reality</div>
            <h2 className="type-h2 text-slate-900 mb-4">
              Why Generic SEO Playbooks Fail in These Sectors
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Standard digital marketing relies on assumptions that are completely invalid in high-competition, policy-controlled environments.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal direction="up" delay={0}>
              <div className="p-8 rounded-3xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-purple-200 hover:shadow-card transition-all h-full flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center mb-6">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-extrabold text-slate-900 text-lg mb-3">
                  Extreme Domain Authority Asymmetry
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed flex-1">
                  In casual eCommerce, a young site with 20 backlinks can rank for long-tail keywords. In casino, trading, or gaming, incumbents have thousands of referring domains cultivated over 10+ years. You cannot brute-force this; you must out-engineer them on topical clustering, semantic entity depth, and index crawl efficiency.
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={100}>
              <div className="p-8 rounded-3xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-purple-200 hover:shadow-card transition-all h-full flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-6">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-extrabold text-slate-900 text-lg mb-3">
                  Platform Ad Bans & Policy Friction
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed flex-1">
                  Mainstream brands rely on Google Ads and Meta campaigns to subsidize weak organic rankings. When paid acquisition is heavily restricted or banned by jurisdiction, organic search and direct technical referral channels become the sole viable customer acquisition engines.
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={200}>
              <div className="p-8 rounded-3xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-purple-200 hover:shadow-card transition-all h-full flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-extrabold text-slate-900 text-lg mb-3">
                  Intense YMYL Algorithmic Scrutiny
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed flex-1">
                  Google’s core quality systems apply maximum scrutiny to any platform handling financial deposits, bets, or sensitive entertainment. Thin programmatic content, anonymous authors, or misleading claims result in immediate, severe visibility drops across broad core algorithm updates.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ── 4. COMPLIANCE & SAFETY PROTOCOL ──────────────────────────────── */}
      <section className="bg-navy-950 text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-dark-mesh opacity-20 pointer-events-none" />
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal direction="left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-5">
                <Lock className="w-3.5 h-3.5 text-purple-400" />
                <span>Risk Governance</span>
              </div>
              <h2 className="type-h2 text-white mb-6">
                Sustainable Organic Growth With Zero Penalty Compromise
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Too many operators have been burned by shady "growth hackers" who build private blog networks (PBNs) or deploy cloaked doorway pages that provide a brief spike followed by devastating manual penalties.
              </p>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Our team operates with pure white-hat engineering integrity. We treat your domain equity as a tier-1 financial asset. Every page, link, and line of code is structured to withstand hostile algorithm updates and strict regulator oversight.
              </p>
              <div className="space-y-3">
                {[
                  '100% genuine editorial link acquisition without automated link networks',
                  'Rigorous schema markup aligning legal entity and license information',
                  'Proactive disavow monitoring and negative SEO protection protocols',
                  'Full GDPR, CCPA, and regional jurisdiction compliance alignment',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal direction="right">
              <div className="bg-navy-900/80 border border-slate-800 rounded-3xl p-8 backdrop-blur-sm">
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
                  Industry Risk Matrix
                </div>
                <div className="space-y-4">
                  {[
                    { vertical: 'Online Casino & Slots', risk: 'Extreme Competition + YMYL', strategy: 'Topical Authority + High DR Editorial Links' },
                    { vertical: 'Online Gaming & Sports', risk: 'High Volatility + Live Event Spike', strategy: 'Dynamic Schema + Edge Cache Tuning' },
                    { vertical: 'Financial & Trading', risk: 'Strict Regulatory Disclosures', strategy: 'Certified Author Entities + Fact Check Schema' },
                    { vertical: 'Adult Entertainment', risk: 'Advertising Blacklist', strategy: 'Pure Technical SEO + Organic Funnel Flow' },
                  ].map((row, rIdx) => (
                    <div key={rIdx} className="p-4 rounded-2xl bg-navy-950/60 border border-slate-800/80">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-white">{row.vertical}</span>
                        <span className="text-[10px] font-semibold text-amber-400">{row.risk}</span>
                      </div>
                      <div className="text-[11px] text-slate-400">
                        <span className="text-purple-400 font-medium">Core Strategy: </span>
                        {row.strategy}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── 5. INDUSTRY FAQS ─────────────────────────────────────────────── */}
      <Section variant="white" spacing="lg">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Reveal direction="up" className="text-center mb-12">
              <div className="type-eyebrow mb-2">Technical Guidance</div>
              <h2 className="type-h2 text-slate-900 mb-4">
                Frequently Asked Questions on Vertical SEO
              </h2>
              <p className="text-slate-600 text-sm">
                In-depth considerations for engineering and marketing leaders in high-competition verticals.
              </p>
            </Reveal>

            <Reveal direction="up" delay={100}>
              <FAQAccordion items={INDUSTRIES_FAQS} />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ── 6. FINAL ACTION CTA ─────────────────────────────────────────── */}
      <section className="relative bg-navy-950 bg-hero-atmosphere text-white py-20 overflow-hidden border-t border-navy-800/80">
        <div className="absolute inset-0 bg-dark-mesh opacity-20 pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider">
              <span>Tailored to Your Operating Market</span>
            </div>
            <h2 className="type-h2 text-white">
              Get an Industry-Calibrated Competitive Audit
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed max-w-xl mx-auto">
              Our senior SEO engineers will benchmark your platform directly against your top 3 market competitors — analyzing crawl gaps, backlink disparities, and Core Web Vitals.
            </p>
            <div className="flex flex-wrap items-center gap-4 justify-center pt-3">
              <Button
                to="/free-seo-audit"
                variant="gold"
                size="lg"
                icon={<Zap className="w-4 h-4" />}
                onClick={() => trackEvent('cta_click', { cta_name: 'industry_audit_bottom', cta_location: 'industries_bottom' })}
              >
                Claim Free Competitive Audit
              </Button>
              <Button
                to="/contact"
                variant="outline"
                size="lg"
                className="border-navy-700 text-white hover:bg-navy-800/60"
              >
                Discuss Market Challenges
              </Button>
              <a
                href="https://wa.me/919341436937"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-md shadow-emerald-950/20 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default IndustriesHub;
