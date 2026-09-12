import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Target,
  Globe,
  TrendingUp,
  Users,
  Award,
  Zap,
  CheckCircle2,
  Sparkles,
  Terminal,
  Shield,
  MessageSquare
} from 'lucide-react';
import { SEOHead } from '../seo';
import { buildBreadcrumbSchema } from '../seo/schema';
import { Container, Button, Breadcrumb, FAQAccordion } from '../components/ui';
import { ENGAGEMENT_PROCESS, COMPLIANCE_COMMITMENTS, COMPARISON_ROWS, TOOL_STACK } from '../data/trustData';
import { trackEvent } from '../analytics';
import businessConfig from '../config/business';

const ABOUT_VALUES = [
  {
    icon: Target,
    title: 'Commercial ROI Over Vanity Metrics',
    desc: 'We evaluate every campaign and technical sprint against qualified user registrations, first-time deposits, funded accounts, and commercial search intent — never against impressions, vanity clicks, or irrelevant keyword volume.',
  },
  {
    icon: Globe,
    title: 'Regulated Market Sensitivity',
    desc: 'Compliance is engineered directly into our technical taxonomy and editorial workflows. We understand jurisdictional boundaries, licensing disclosures, and regional advertising policy constraints across India, Tier-1, and global gaming jurisdictions.',
  },
  {
    icon: TrendingUp,
    title: 'Compounding Organic Equity',
    desc: 'Paid media stops delivering the moment budgets expire. We build permanent, compounding digital assets: high-performance codebases, deep topical authority graphs, and verified editorial links that retain value over multi-year horizons.',
  },
  {
    icon: Users,
    title: 'Embedded Engineering Partner',
    desc: 'We operate as an extension of your internal product and marketing organization. We join planning standups, review PRs, coordinate with your DevOps team, and take proactive ownership of technical crawl efficiency and search telemetry.',
  },
  {
    icon: Award,
    title: 'Strict High-Competition Focus',
    desc: 'We work exclusively in digital verticals that require specialized engineering: online casino, sports gaming, financial trading portals, skill gaming platforms, and high-velocity regulated markets. We do not dilute our focus with generic commercial categories.',
  },
  {
    icon: Zap,
    title: 'Velocity & Production Discipline',
    desc: 'High-stakes digital markets move at extreme velocity. We eliminate agency bureaucracy by shipping direct code remediation roadmaps, validated schema implementations, and rigorous editorial briefs within fixed sprint cadences.',
  },
];

const ABOUT_FAQS = [
  {
    question: 'Where is iGaming Growth based, and what markets do you serve?',
    answer:
      'iGaming Growth operates as an independent specialist B2B digital growth engineering studio headquartered in Kathmandu, Nepal. We serve operators and digital platforms across South Asia, Southeast Asia, the UK, Europe, Latin America, and emerging regulated markets worldwide.',
  },
  {
    question: 'How do you structure client engagements?',
    answer:
      'We work through dedicated monthly growth retainers or defined project-based engineering scopes (such as technical SEO architecture audits or custom headless platform builds). Every engagement is led directly by senior systems architects rather than junior account coordinators.',
  },
  {
    question: 'Why do you emphasize process proof instead of traditional agency testimonials?',
    answer:
      'In high-stakes, competitive, and policy-sensitive digital verticals, reputable operators strictly require Non-Disclosure Agreements (NDAs) to protect their proprietary tech stacks, domain assets, and organic search strategies. Fabricating fake testimonials or invented client logos is unethical and violates our compliance charter. We demonstrate competence through methodology transparency, deliverable depth, and code-level precision.',
  },
  {
    question: 'Can you coordinate directly with our internal developers and DevOps team?',
    answer:
      'Yes. In fact, that is our preferred mode of engagement. Rather than handing over vague 80-page PDF audit documents, we deliver detailed Jira/Linear issue specifications, GitHub pull requests, structured data JSON-LD snippets, and Cloudflare Worker routing rules that your engineers can validate and deploy immediately.',
  },
  {
    question: 'Do you offer white-label services for digital agencies?',
    answer:
      'Yes. Select agency partners utilize our specialist technical SEO, log analysis, and architectural audit capabilities under non-disclosure agreements when their internal teams lack deep vertical competence in gaming, casino, or high-scrutiny YMYL sectors.',
  },
];

export const AboutPage: React.FC = () => {
  const breadcrumbItems = [{ label: 'About Us' }];
  const whatsappPhone = (businessConfig.phone?.whatsapp || businessConfig.contact?.whatsapp || '917654928455').replace(/[^0-9]/g, '');

  return (
    <div className="bg-model3-base text-white selection:bg-amber-400 selection:text-black font-sans antialiased overflow-x-hidden">
      <SEOHead
        title="About iGaming Growth — Specialist B2B Digital Growth & Technical SEO Agency"
        description="Learn about iGaming Growth: our engineering-led philosophy, strict white-hat compliance standards, vertical specialization, and process-proven growth methodology for high-competition digital markets."
        canonicalPath="/about"
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
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Agency Manifesto &amp; Technical DNA</span>
            </div>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white font-heading leading-[1.08] mb-6">
              An Engineering-Led Partner for <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
                Contested Digital Markets
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-slate-300 leading-relaxed max-w-3xl mb-8">
              We built iGaming Growth to solve a systemic problem in digital marketing: high-competition, policy-controlled operators were consistently being failed by generalist agencies applying generic playbooks to markets they fundamentally did not understand.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10 w-full sm:w-auto">
              <Button
                to="/free-seo-audit"
                variant="gold"
                size="lg"
                className="w-full sm:w-auto justify-center"
                icon={<Zap className="w-4 h-4 text-slate-950" />}
                onClick={() => trackEvent('cta_click', { cta_name: 'audit_hero', cta_location: 'about_hero' })}
              >
                Request Architectural Audit
              </Button>
              <Button
                to="/contact"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto justify-center border-white/15 text-white hover:bg-white/10"
              >
                Schedule Diagnostic Call
              </Button>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-6 border-t border-white/10">
              <div className="p-3 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="text-xl sm:text-2xl font-black text-white font-heading">8</div>
                <div className="text-[11px] sm:text-xs text-slate-400">Specialist Verticals</div>
              </div>
              <div className="p-3 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="text-xl sm:text-2xl font-black text-emerald-400 font-heading">100%</div>
                <div className="text-[11px] sm:text-xs text-slate-400">Code PR Delivery</div>
              </div>
              <div className="p-3 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="text-xl sm:text-2xl font-black text-purple-400 font-heading">0 Bans</div>
                <div className="text-[11px] sm:text-xs text-slate-400">Strict Whitelisting</div>
              </div>
              <div className="p-3 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="text-xl sm:text-2xl font-black text-amber-400 font-heading">Mutual NDA</div>
                <div className="text-[11px] sm:text-xs text-slate-400">Confidentiality Assured</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. THE AGENCY STORY & PURPOSE ───────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-model3-surface/70 border-b border-white/10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/15 text-xs font-bold uppercase tracking-widest text-slate-300 mb-3">
                <Shield className="w-3.5 h-3.5 text-amber-400" />
                <span>Our Genesis</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading mb-6">
                Why Mainstream Agency Playbooks Fail In Complex Verticals
              </h2>
              <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
                <p>
                  When a generalist agency takes on a client in online casino, financial trading, or adult entertainment, they immediately hit walls they have never encountered before. Advertising networks reject their ad accounts. Search engine quality raters flag their content under strict YMYL algorithmic parameters. Competitors dominate the SERPs with sophisticated programmatic architectures, server-side caching layers, and decade-old domain equity.
                </p>
                <p>
                  The generalist response is typically to recommend more volume: churn out hundreds of low-quality AI articles, purchase dubious private blog network (PBN) links, or attempt unauthorized cloaking hacks. The inevitable outcome is algorithmic penalties, burned advertising profiles, wasted budgets, and lost quarters of growth.
                </p>
                <p>
                  iGaming Growth was founded to represent the disciplined antithesis to that failure mode. We approach competitive growth from an engineering perspective: log file analysis, crawl budget management, structured data modeling, high-standards editorial E-E-A-T authorship, and genuine authority acquisition through contextually aligned editorial relationships.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <Link
                  to="/editorial-policy"
                  className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <span>Read Our Editorial Integrity Policy</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Metrics grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {[
                { value: '8', label: 'Specialist Verticals Only', sub: 'Zero generic retail dilution' },
                { value: '12', label: 'Growth Disciplines', sub: 'Technical, organic & CRO' },
                { value: '100%', label: 'White-Hat Execution', sub: 'Zero algorithmic shortcuts' },
                { value: '0', label: 'Fabricated Testimonials', sub: 'Process proof & NDAs' },
                { value: '200+', label: 'Inspection Checkpoints', sub: 'Manual senior engineering' },
                { value: '24h', label: 'Diagnostic Turnaround', sub: 'Rapid scoping cadence' },
              ].map((s, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-model3-base/90 border border-white/10 shadow-xl hover:border-amber-400/40 transition-all"
                >
                  <div className="text-3xl font-heading font-black text-amber-400 mb-1">{s.value}</div>
                  <div className="text-xs font-bold text-white mb-0.5">{s.label}</div>
                  <div className="text-[10px] text-slate-400">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── 3. OPERATING DNA / 6 CORE PRINCIPLES ─────────────────────────── */}
      <section className="py-20 lg:py-28 bg-model3-base border-b border-white/10">
        <Container>
          <div className="max-w-2xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/15 text-xs font-bold uppercase tracking-widest text-slate-300 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Our Operating DNA</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading mb-4">
              The 6 Principles That Guide Every Engagement
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              These are not aspirational slogans on an office wall. They are concrete operational boundaries enforced across every sprint, pull request, and editorial brief we produce.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ABOUT_VALUES.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="h-full flex flex-col p-8 rounded-3xl border border-white/10 bg-model3-surface/80 backdrop-blur-md hover:border-amber-400/40 hover:shadow-xl hover:shadow-amber-950/20 transition-all duration-300 hover:-translate-y-1.5"
                >
                  <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 text-amber-400 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-lg mb-3">
                    {v.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed flex-1">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── 4. GENERALIST VS SPECIALIST COMPARISON TABLE ─────────────────── */}
      <section className="py-20 lg:py-28 bg-model3-panel border-b border-white/10">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/15 text-xs font-bold uppercase tracking-widest text-slate-300 mb-3">
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              <span>Clear Differentiation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading mb-4">
              Generalist Agency vs iGaming Growth Specialist
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              See the direct operational differences between standard commercial agency practices and our engineering-first delivery model.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-white/15 shadow-2xl bg-model3-deep/90 backdrop-blur-md">
            <table className="w-full text-left text-sm border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-white/10 bg-model3-base">
                  <th className="p-5 font-bold text-slate-300 text-xs uppercase tracking-wider w-1/4 font-mono">
                    Strategic Dimension
                  </th>
                  <th className="p-5 font-bold text-slate-400 text-xs uppercase tracking-wider w-3/8 font-mono">
                    Standard Digital Agency
                  </th>
                  <th className="p-5 font-bold text-amber-400 text-xs uppercase tracking-wider w-3/8 bg-amber-400/5 font-mono">
                    iGaming Growth Squad
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {COMPARISON_ROWS.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-5 font-bold text-white text-xs">
                      {row.aspect}
                    </td>
                    <td className="p-5 text-slate-400 text-xs leading-relaxed">
                      {row.generalist}
                    </td>
                    <td className="p-5 text-amber-300 font-medium text-xs leading-relaxed bg-amber-400/5">
                      {row.specialist}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* ── 5. 5-STEP CLIENT ENGAGEMENT METHODOLOGY ──────────────────────── */}
      <section className="py-20 lg:py-28 bg-model3-base text-white relative overflow-hidden border-b border-white/10">
        <Container className="relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/15 text-xs font-bold uppercase tracking-widest text-slate-300 mb-4">
              <Terminal className="w-3.5 h-3.5 text-amber-400" />
              <span>Delivery Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading mb-4">
              The 5-Stage Engagement Framework
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Every partnership follows a predictable delivery lifecycle designed to eliminate black-box execution and maintain absolute transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {ENGAGEMENT_PROCESS.map((step) => (
              <div key={step.step} className="p-6 rounded-3xl bg-model3-surface/80 border border-white/10 h-full flex flex-col">
                <div className="text-3xl font-black text-white/20 mb-2 font-mono">0{step.step}</div>
                <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider mb-1">
                  {step.duration}
                </div>
                <h4 className="font-heading font-bold text-white text-base mb-2">{step.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed mb-4 flex-1">{step.description}</p>
                <div className="pt-3 border-t border-white/10">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Key Output
                  </div>
                  <p className="text-xs text-purple-300 font-medium">{step.deliverable}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 6. TOOLING STACK & TECHNICAL CAPABILITIES ────────────────────── */}
      <section className="py-20 lg:py-28 bg-model3-surface/70 border-b border-white/10">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/15 text-xs font-bold uppercase tracking-widest text-slate-300 mb-3">
              <Terminal className="w-3.5 h-3.5 text-amber-400" />
              <span>Tooling Infrastructure</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading mb-4">
              Enterprise Instrumentation &amp; Tool Stack
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              We do not rely on basic web crawler extensions. We deploy enterprise-grade diagnostics, custom server log streaming pipelines, and automated schema validation systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TOOL_STACK.map((group) => (
              <div key={group.category} className="p-7 rounded-3xl border border-white/10 bg-model3-base/80 shadow-xl h-full flex flex-col hover:border-amber-400/40 transition-colors">
                <div className="flex items-center gap-2 mb-4">
                  <Terminal className="w-5 h-5 text-amber-400" />
                  <h3 className="font-heading font-bold text-white text-base">
                    {group.category}
                  </h3>
                </div>
                <ul className="space-y-2 flex-1">
                  {group.tools.map((t, tIdx) => (
                    <li key={tIdx} className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 7. COMPLIANCE COMMITMENTS ────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-model3-base border-b border-white/10">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/15 text-xs font-bold uppercase tracking-widest text-slate-300 mb-3">
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              <span>Ethical Standards</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading mb-4">
              Our Non-Negotiable Compliance Commitments
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Transparency and long-term asset preservation take precedence over quick vanity spikes. These four commitments govern all client work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {COMPLIANCE_COMMITMENTS.map((comm) => (
              <div key={comm.title} className="p-7 rounded-3xl border border-white/10 bg-model3-surface/80 hover:border-amber-400/40 transition-all h-full">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white text-base mb-2">
                      {comm.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {comm.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contextual Internal Links Mesh */}
          <div className="mt-12 pt-10 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <Link
              to="/services/website-development"
              className="p-4 rounded-2xl bg-model3-surface/90 border border-white/10 hover:border-cyan-400/50 transition-all hover:-translate-y-1 group"
            >
              <div className="text-[10px] font-mono uppercase text-cyan-400 mb-1">Architecture</div>
              <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">Web Development (₹20K)</div>
              <p className="text-xs text-slate-400 mt-1">Headless React &amp; PWA platforms</p>
            </Link>

            <Link
              to="/services/seo"
              className="p-4 rounded-2xl bg-model3-surface/90 border border-white/10 hover:border-amber-400/50 transition-all hover:-translate-y-1 group"
            >
              <div className="text-[10px] font-mono uppercase text-amber-400 mb-1">Search Growth</div>
              <div className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">Rank-1 SEO (₹35K)</div>
              <p className="text-xs text-slate-400 mt-1">Technical crawling &amp; keyword clusters</p>
            </Link>

            <Link
              to="/industries"
              className="p-4 rounded-2xl bg-model3-surface/90 border border-white/10 hover:border-purple-400/50 transition-all hover:-translate-y-1 group"
            >
              <div className="text-[10px] font-mono uppercase text-purple-400 mb-1">Vertical Focus</div>
              <div className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">8 Regulated Sectors</div>
              <p className="text-xs text-slate-400 mt-1">Casino, Cricket ID, Skill Games</p>
            </Link>

            <Link
              to="/free-seo-audit"
              className="p-4 rounded-2xl bg-model3-surface/90 border border-white/10 hover:border-emerald-400/50 transition-all hover:-translate-y-1 group"
            >
              <div className="text-[10px] font-mono uppercase text-emerald-400 mb-1">Diagnostic</div>
              <div className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">Free Code Audit</div>
              <p className="text-xs text-slate-400 mt-1">24h turnaround, zero sales fluff</p>
            </Link>
          </div>
        </Container>
      </section>

      {/* ── 8. FAQS ──────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-model3-panel border-b border-white/10">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/15 text-xs font-bold uppercase tracking-widest text-slate-300 mb-3">
                <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
                <span>Transparency</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading mb-4">
                Frequently Asked Questions About Partnering With Us
              </h2>
              <p className="text-slate-300 text-sm">
                Direct answers regarding contracts, non-disclosure protocols, and working cadence.
              </p>
            </div>

            <FAQAccordion items={ABOUT_FAQS} />
          </div>
        </Container>
      </section>

      {/* ── 9. FINAL CALL TO ACTION ──────────────────────────────────────── */}
      <section className="relative bg-model3-base text-white py-20 lg:py-24 overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-hero-atmosphere opacity-20 pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/15 text-xs font-bold uppercase tracking-widest text-slate-300">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Initiate Diagnostic Engagement</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
              Ready to Work With a Dedicated Engineering Partner?
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed max-w-xl mx-auto">
              Schedule a 30-minute technical diagnostic with a senior SEO engineer. We will review your crawl architecture, Core Web Vitals, and competitor gaps without sales fluff.
            </p>
            <div className="flex flex-wrap items-center gap-4 justify-center pt-3">
              <Button
                to="/free-seo-audit"
                variant="gold"
                size="lg"
                icon={<Zap className="w-4 h-4 text-slate-950" />}
                onClick={() => trackEvent('cta_click', { cta_name: 'about_bottom_audit', cta_location: 'about_bottom' })}
              >
                Claim Free Technical Audit
              </Button>
              <Button
                to="/contact"
                variant="outline"
                size="lg"
                className="border-white/15 text-white hover:bg-white/10"
              >
                Book Strategy Call
              </Button>
              <a
                href={`https://wa.me/${whatsappPhone}?text=Hello%20iGaming%20Growth%20Team%2C%20I%20want%20to%20consult%20about%20our%20platform.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all duration-200 hover:-translate-y-0.5"
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

export default AboutPage;
