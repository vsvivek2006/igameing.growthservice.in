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
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { SEOHead } from '../seo';
import { buildBreadcrumbSchema } from '../seo/schema';
import { Container, Button, Breadcrumb, FAQAccordion, MatrixVisualizer } from '../components/ui';
import { getAllIndustries, INDUSTRY_CATEGORY_LABELS } from '../data/industriesData';
import type { IndustryVertical } from '../data/industriesData';
import { trackEvent } from '../analytics';
import businessConfig from '../config/business';

const CATEGORY_STYLES: Record<IndustryVertical['category'], { badge: string; glow: string }> = {
  gaming: { badge: 'bg-purple-500/15 text-purple-300 border border-purple-500/30', glow: 'group-hover:border-purple-400' },
  finance: { badge: 'bg-blue-500/15 text-blue-300 border border-blue-500/30', glow: 'group-hover:border-blue-400' },
  adult: { badge: 'bg-rose-500/15 text-rose-300 border border-rose-500/30', glow: 'group-hover:border-rose-400' },
  'gaming-skill': { badge: 'bg-amber-500/15 text-amber-300 border border-amber-500/30', glow: 'group-hover:border-amber-400' },
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
  const whatsappPhone = (businessConfig.phone?.whatsapp || businessConfig.contact?.whatsapp || '917654928455').replace(/[^0-9]/g, '');

  const filteredIndustries =
    selectedCategory === 'all'
      ? industries
      : industries.filter((ind) => ind.category === selectedCategory);

  return (
    <div className="bg-model3-base text-white selection:bg-amber-400 selection:text-black font-sans antialiased overflow-x-hidden">
      <SEOHead
        title="Specialist Industries We Serve — High-Competition Digital Growth Agency"
        description="Digital growth, technical SEO, and conversion engineering for online gaming, casino, financial trading, skill gaming, and adult industry operators. Built for ultra-competitive SERPs."
        canonicalPath="/industries"
        jsonLd={[buildBreadcrumbSchema(breadcrumbItems)]}
      />

      {/* ── 1. HERO SECTION ──────────────────────────────────────────────── */}
      <section className="relative min-h-[75vh] pt-28 pb-16 lg:pt-36 lg:pb-24 bg-model3-base overflow-hidden flex items-center border-b border-white/10">
        <div className="absolute top-0 right-1/4 w-[600px] h-[450px] rounded-full bg-purple-900/15 blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[450px] h-[400px] rounded-full bg-blue-900/10 blur-[130px] pointer-events-none" />
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
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              <span>Specialist Industry Architecture</span>
            </div>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white font-heading leading-[1.08] mb-6">
              High-Competition Verticals Where <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
                Technical Depth Is The Moat
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-slate-300 leading-relaxed mb-8 max-w-3xl">
              We do not serve generic retail or local service businesses. We specialize exclusively in digital verticals where search engine algorithms enforce the strictest scrutiny, ad networks restrict placement, and competitors possess multi-year domain equity.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10 w-full sm:w-auto">
              <Button
                to="/free-seo-audit"
                variant="gold"
                size="lg"
                className="w-full sm:w-auto justify-center"
                icon={<Zap className="w-4 h-4 text-slate-950" />}
                onClick={() => trackEvent('cta_click', { cta_name: 'industry_audit', cta_location: 'industries_hero' })}
              >
                Get Vertical-Specific Audit
              </Button>
              <Button
                to="/contact"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto justify-center border-white/15 text-white hover:bg-white/10"
                onClick={() => trackEvent('cta_click', { cta_name: 'book_call', cta_location: 'industries_hero' })}
              >
                Schedule Strategic Consultation
              </Button>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-6 border-t border-white/10 w-full max-w-3xl">
              <div className="p-3 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="text-xl sm:text-2xl font-black text-white font-heading">8</div>
                <div className="text-[11px] sm:text-xs text-slate-400">Target Verticals</div>
              </div>
              <div className="p-3 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="text-xl sm:text-2xl font-black text-emerald-400 font-heading">YMYL</div>
                <div className="text-[11px] sm:text-xs text-slate-400">E-E-A-T Compliance</div>
              </div>
              <div className="p-3 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="text-xl sm:text-2xl font-black text-purple-400 font-heading">0%</div>
                <div className="text-[11px] sm:text-xs text-slate-400">PBN or Spam Risk</div>
              </div>
              <div className="p-3 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="text-xl sm:text-2xl font-black text-amber-400 font-heading">100%</div>
                <div className="text-[11px] sm:text-xs text-slate-400">Custom Code PRs</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. VERTICAL SELECTOR & DIRECTORY ─────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-28 bg-model3-surface/70 border-b border-white/10">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/15 text-xs font-bold uppercase tracking-widest text-slate-300 mb-3">
                <Layers className="w-3.5 h-3.5 text-amber-400" />
                <span>Specialist Sectors</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading">
                Industries We Engineer For
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm max-w-xl mt-2">
                Explore individual market sector challenges, indexation requirements, and tailored organic roadmaps.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex items-center gap-2 p-1.5 bg-model3-base/90 border border-white/10 rounded-2xl overflow-x-auto no-scrollbar sm:flex-wrap self-start max-w-full">
              <button
                type="button"
                onClick={() => setSelectedCategory('all')}
                className={`shrink-0 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-950/40'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                All (8)
              </button>
              <button
                type="button"
                onClick={() => setSelectedCategory('gaming')}
                className={`shrink-0 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === 'gaming'
                    ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-950/40'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Casino &amp; Gaming
              </button>
              <button
                type="button"
                onClick={() => setSelectedCategory('gaming-skill')}
                className={`shrink-0 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === 'gaming-skill'
                    ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-950/40'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Skill Gaming
              </button>
              <button
                type="button"
                onClick={() => setSelectedCategory('finance')}
                className={`shrink-0 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === 'finance'
                    ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-950/40'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Financial &amp; Trading
              </button>
              <button
                type="button"
                onClick={() => setSelectedCategory('adult')}
                className={`shrink-0 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === 'adult'
                    ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-950/40'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Adult &amp; Regulated
              </button>
            </div>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredIndustries.map((industry) => {
              const style = CATEGORY_STYLES[industry.category];
              return (
                <div
                  key={industry.slug}
                  className="group flex flex-col h-full p-8 rounded-3xl border border-white/10 bg-model3-base/80 backdrop-blur-md hover:border-amber-400/40 hover:shadow-xl hover:shadow-amber-950/20 transition-all duration-300 hover:-translate-y-1.5"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <span className={`text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full ${style.badge}`}>
                        {INDUSTRY_CATEGORY_LABELS[industry.category]}
                      </span>
                      <h3 className="font-heading font-extrabold text-white text-xl mt-3 leading-snug group-hover:text-amber-300 transition-colors">
                        {industry.name}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-amber-400/90 italic mb-5 leading-relaxed font-medium">
                    &ldquo;{industry.tagline}&rdquo;
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {industry.overview.slice(0, 200)}...
                  </p>

                  {/* Primary challenge callout */}
                  <div className="p-4 rounded-2xl bg-model3-surface border border-white/10 mb-6">
                    <div className="flex items-center gap-2 mb-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-200">
                        Key Technical Hurdle: {industry.seoChallenges[0]?.title}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
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
                          className="text-[10px] font-semibold px-2.5 py-0.5 rounded-lg bg-white/5 text-slate-300 border border-white/10 hover:bg-amber-400/20 hover:text-amber-300 transition-colors"
                        >
                          {slug.replace(/-/g, ' ')}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={`/industries/${industry.slug}`}
                    className="mt-auto inline-flex items-center justify-between w-full px-5 py-3 rounded-2xl bg-white/[0.04] hover:bg-amber-400 hover:text-slate-950 border border-white/10 text-white text-xs font-bold transition-all group-hover:border-amber-400"
                  >
                    <span>Read Deep-Dive Industry Strategy</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── 2.5 INTERACTIVE VERTICAL X SERVICE ARCHITECTURE MATRIX ─── */}
      <section className="bg-model3-panel text-white py-16 sm:py-24 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-atmosphere opacity-70 pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/15 text-xs font-bold uppercase tracking-widest text-slate-300 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Interactive Matrix Engine</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading mb-4">
              Explore Tailored Architecture by Vertical
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed max-w-2xl mx-auto">
              Select any high-competition vertical below to inspect real, approved service architectures, unique positioning frameworks, and core technical deliverables.
            </p>
          </div>
          <MatrixVisualizer />
        </Container>
      </section>

      {/* ── 3. WHY SPECIALIST ARCHITECTURE IS NON-NEGOTIABLE ─────────────── */}
      <section className="py-20 lg:py-28 bg-model3-base border-b border-white/10">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/15 text-xs font-bold uppercase tracking-widest text-slate-300 mb-3">
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              <span>Operational Reality</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading mb-4">
              Why Generic SEO Playbooks Fail in These Sectors
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Standard digital marketing relies on assumptions that are completely invalid in high-competition, policy-controlled environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl border border-white/10 bg-model3-surface/80 hover:border-amber-400/40 hover:shadow-xl hover:shadow-amber-950/20 transition-all h-full flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 text-amber-400 flex items-center justify-center mb-6">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-extrabold text-white text-lg mb-3">
                Extreme Domain Authority Asymmetry
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed flex-1">
                In casual eCommerce, a young site with 20 backlinks can rank for long-tail keywords. In casino, trading, or gaming, incumbents have thousands of referring domains cultivated over 10+ years. You cannot brute-force this; you must out-engineer them on topical clustering, semantic entity depth, and index crawl efficiency.
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-white/10 bg-model3-surface/80 hover:border-amber-400/40 hover:shadow-xl hover:shadow-amber-950/20 transition-all h-full flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 text-amber-400 flex items-center justify-center mb-6">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-extrabold text-white text-lg mb-3">
                Platform Ad Bans &amp; Policy Friction
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed flex-1">
                Mainstream brands rely on Google Ads and Meta campaigns to subsidize weak organic rankings. When paid acquisition is heavily restricted or banned by jurisdiction, organic search and direct technical referral channels become the sole viable customer acquisition engines.
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-white/10 bg-model3-surface/80 hover:border-amber-400/40 hover:shadow-xl hover:shadow-amber-950/20 transition-all h-full flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 text-amber-400 flex items-center justify-center mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-extrabold text-white text-lg mb-3">
                Intense YMYL Algorithmic Scrutiny
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed flex-1">
                Google&apos;s core quality systems apply maximum scrutiny to any platform handling financial deposits, bets, or sensitive entertainment. Thin programmatic content, anonymous authors, or misleading claims result in immediate, severe visibility drops across broad core algorithm updates.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 4. COMPLIANCE & SAFETY PROTOCOL ──────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-model3-panel relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-dark-mesh opacity-20 pointer-events-none" />
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/15 text-xs font-bold uppercase tracking-widest text-slate-300 mb-5">
                <Lock className="w-3.5 h-3.5 text-amber-400" />
                <span>Risk Governance</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading mb-6">
                Sustainable Organic Growth With Zero Penalty Compromise
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Too many operators have been burned by shady &ldquo;growth hackers&rdquo; who build private blog networks (PBNs) or deploy cloaked doorway pages that provide a brief spike followed by devastating manual penalties.
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
            </div>

            <div>
              <div className="bg-model3-surface/90 border border-white/10 rounded-3xl p-8 backdrop-blur-sm shadow-2xl">
                <div className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-6 font-mono">
                  Industry Risk Matrix
                </div>
                <div className="space-y-4">
                  {[
                    { vertical: 'Online Casino & Slots', risk: 'Extreme Competition + YMYL', strategy: 'Topical Authority + High DR Editorial Links' },
                    { vertical: 'Online Gaming & Sports', risk: 'High Volatility + Live Event Spike', strategy: 'Dynamic Schema + Edge Cache Tuning' },
                    { vertical: 'Financial & Trading', risk: 'Strict Regulatory Disclosures', strategy: 'Certified Author Entities + Fact Check Schema' },
                    { vertical: 'Adult Entertainment', risk: 'Advertising Blacklist', strategy: 'Pure Technical SEO + Organic Funnel Flow' },
                  ].map((row, rIdx) => (
                    <div key={rIdx} className="p-4 rounded-2xl bg-model3-base/90 border border-white/10">
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
            </div>
          </div>
        </Container>
      </section>

      {/* ── 5. INDUSTRY FAQS ─────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-model3-base border-b border-white/10">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/15 text-xs font-bold uppercase tracking-widest text-slate-300 mb-3">
                <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
                <span>Technical Guidance</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading mb-4">
                Frequently Asked Questions on Vertical Growth
              </h2>
              <p className="text-slate-300 text-sm">
                In-depth considerations for engineering and marketing leaders in high-competition verticals.
              </p>
            </div>

            <FAQAccordion items={INDUSTRIES_FAQS} />
          </div>
        </Container>
      </section>

      {/* ── 6. FINAL ACTION CTA ─────────────────────────────────────────── */}
      <section className="relative bg-model3-base text-white py-20 overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-hero-atmosphere opacity-20 pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/15 text-xs font-bold uppercase tracking-widest text-slate-300">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Tailored to Your Operating Market</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
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
                icon={<Zap className="w-4 h-4 text-slate-950" />}
                onClick={() => trackEvent('cta_click', { cta_name: 'industry_audit_bottom', cta_location: 'industries_bottom' })}
              >
                Claim Free Competitive Audit
              </Button>
              <Button
                to="/contact"
                variant="outline"
                size="lg"
                className="border-white/15 text-white hover:bg-white/10"
              >
                Discuss Market Challenges
              </Button>
              <a
                href={`https://wa.me/${whatsappPhone}?text=Hello%20iGaming%20Growth%20Team%2C%20I%20want%20to%20discuss%20our%20vertical%20market%20challenges.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default IndustriesHub;
