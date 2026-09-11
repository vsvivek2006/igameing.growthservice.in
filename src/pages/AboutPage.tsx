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
} from 'lucide-react';
import { SEOHead } from '../seo';
import { buildBreadcrumbSchema } from '../seo/schema';
import { Container, Section, Button, Breadcrumb, FAQAccordion } from '../components/ui';
import { ENGAGEMENT_PROCESS, COMPLIANCE_COMMITMENTS, COMPARISON_ROWS, TOOL_STACK } from '../data/trustData';
import useInView from '../hooks/useInView';
import { trackEvent } from '../analytics';

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
      'iGaming Growth operates as a specialist B2B digital growth consultancy with engineering hubs in India and global client engagements across Southeast Asia, the UK, Europe, Latin America, and emerging regulated markets worldwide. We handle multi-jurisdiction setups with specialized hreflang and edge routing configurations.',
  },
  {
    question: 'How do you structure client engagements?',
    answer:
      'We work through dedicated monthly growth retainers or defined project-based engineering scopes (such as technical SEO architecture audits or custom headless platform builds). Every engagement is led directly by senior SEO engineers rather than junior account coordinators.',
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

  return (
    <>
      <SEOHead
        title="About iGaming Growth — Specialist B2B Digital Growth & Technical SEO Agency"
        description="Learn about iGaming Growth: our engineering-led philosophy, strict white-hat compliance standards, vertical specialization, and process-proven growth methodology for high-competition digital markets."
        canonicalPath="/about"
        jsonLd={[buildBreadcrumbSchema(breadcrumbItems)]}
      />

      {/* ── 1. HERO SECTION ──────────────────────────────────────────────── */}
      <section className="relative bg-navy-950 bg-hero-atmosphere text-white py-20 lg:py-28 overflow-hidden border-b border-navy-800/80">
        <div className="absolute inset-0 bg-dark-mesh opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] rounded-full bg-purple-600/15 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[350px] rounded-full bg-blue-600/10 blur-[100px] pointer-events-none" />

        <Container className="relative z-10">
          <Breadcrumb items={breadcrumbItems} className="mb-6 text-slate-400" />

          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>Agency Manifesto & Technical DNA</span>
            </div>

            <h1 className="type-h1 text-white mb-6 leading-tight">
              An Engineering-Led Growth Partner for Contested Digital Markets
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
              We built iGaming Growth to solve a systemic problem in digital marketing: high-competition, policy-controlled operators were consistently being failed by generalist agencies applying generic playbooks to markets they fundamentally did not understand.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                to="/free-seo-audit"
                variant="gold"
                size="lg"
                icon={<Zap className="w-4 h-4" />}
                onClick={() => trackEvent('cta_click', { cta_name: 'audit_hero', cta_location: 'about_hero' })}
              >
                Request Architectural Audit
              </Button>
              <Button
                to="/contact"
                variant="outline"
                size="lg"
                className="border-navy-700 text-white hover:bg-navy-800/60"
              >
                Schedule Diagnostic Call
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. THE AGENCY STORY & PURPOSE ───────────────────────────────── */}
      <Section variant="white" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal direction="left">
              <div>
                <div className="type-eyebrow mb-3">Our Genesis</div>
                <h2 className="type-h2 text-slate-900 mb-6">
                  Why Mainstream Agency Frameworks Consistently Fail In Complex Verticals
                </h2>
                <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
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
                    className="inline-flex items-center gap-2 text-xs font-bold text-purple-700 hover:text-purple-900 transition-colors"
                  >
                    Read Our Editorial Integrity Policy <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* Metrics grid */}
            <Reveal direction="right" delay={150}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '8', label: 'Specialist Verticals Only', sub: 'Zero generic retail dilution' },
                  { value: '12', label: 'Growth Disciplines', sub: 'Technical, organic & CRO' },
                  { value: '100%', label: 'White-Hat Execution', sub: 'Zero algorithmic shortcuts' },
                  { value: '0', label: 'Fabricated Testimonials', sub: 'Process proof & NDAs' },
                  { value: '200+', label: 'Audit Inspection Checkpoints', sub: 'Manual senior engineering' },
                  { value: '24h', label: 'Diagnostic Turnaround', sub: 'Rapid scoping cadence' },
                ].map((s, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-card-hover hover:border-purple-300/80 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="text-3xl font-heading font-black text-purple-700 mb-1">{s.value}</div>
                    <div className="text-xs font-bold text-slate-800 mb-0.5">{s.label}</div>
                    <div className="text-[10px] text-slate-500">{s.sub}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ── 3. OPERATING DNA / 6 CORE PRINCIPLES ─────────────────────────── */}
      <Section variant="subtle" spacing="lg">
        <Container>
          <Reveal direction="up" className="max-w-2xl mx-auto text-center mb-16">
            <div className="type-eyebrow mb-2">Our Operating DNA</div>
            <h2 className="type-h2 text-slate-900 mb-4">
              The 6 Principles That Guide Every Engagement
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              These are not aspirational slogans on an office wall. They are concrete operational boundaries enforced across every sprint, pull request, and editorial brief we produce.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ABOUT_VALUES.map((v, idx) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} direction="up" delay={idx * 80}>
                  <div className="h-full flex flex-col p-8 rounded-3xl border border-slate-200 bg-white hover:border-purple-300 hover:shadow-card-hover gradient-border-card transition-all duration-300 hover:-translate-y-1.5">
                    <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading font-bold text-slate-900 text-lg mb-3">
                      {v.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed flex-1">
                      {v.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* ── 4. GENERALIST VS SPECIALIST COMPARISON TABLE ─────────────────── */}
      <Section variant="white" spacing="lg">
        <Container>
          <Reveal direction="up" className="max-w-3xl mx-auto text-center mb-14">
            <div className="type-eyebrow mb-2">Clear Differentiation</div>
            <h2 className="type-h2 text-slate-900 mb-4">
              Generalist Agency vs iGaming Growth Specialist
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              See the direct operational differences between standard commercial agency practices and our engineering-first, vertical-calibrated delivery model.
            </p>
          </Reveal>

          <Reveal direction="up" delay={100}>
            <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-sm bg-white">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="p-5 font-bold text-slate-900 text-xs uppercase tracking-wider w-1/4">
                      Strategic Dimension
                    </th>
                    <th className="p-5 font-bold text-slate-500 text-xs uppercase tracking-wider w-3/8">
                      Standard Digital Agency
                    </th>
                    <th className="p-5 font-bold text-purple-700 text-xs uppercase tracking-wider w-3/8 bg-purple-50/50">
                      iGaming Growth Engineering
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {COMPARISON_ROWS.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-slate-50/60 transition-colors">
                      <td className="p-5 font-bold text-slate-800 text-xs">
                        {row.aspect}
                      </td>
                      <td className="p-5 text-slate-500 text-xs leading-relaxed">
                        {row.generalist}
                      </td>
                      <td className="p-5 text-purple-950 font-medium text-xs leading-relaxed bg-purple-50/30">
                        {row.specialist}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ── 5. 5-STEP CLIENT ENGAGEMENT METHODOLOGY ──────────────────────── */}
      <section className="bg-navy-950 text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-dark-mesh opacity-20 pointer-events-none" />
        <Container className="relative z-10">
          <Reveal direction="up" className="max-w-2xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <span>Delivery Architecture</span>
            </div>
            <h2 className="type-h2 text-white mb-4">
              The 5-Stage Engagement Framework
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Every partnership follows a rigorous, predictable delivery lifecycle designed to eliminate black-box execution and maintain absolute alignment.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {ENGAGEMENT_PROCESS.map((step, sIdx) => (
              <Reveal key={step.step} direction="up" delay={sIdx * 100}>
                <div className="p-6 rounded-3xl bg-navy-900/60 border border-slate-800 h-full flex flex-col">
                  <div className="text-3xl font-black text-purple-400/30 mb-2">0{step.step}</div>
                  <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider mb-1">
                    {step.duration}
                  </div>
                  <h4 className="font-heading font-bold text-white text-base mb-2">{step.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4 flex-1">{step.description}</p>
                  <div className="pt-3 border-t border-slate-800/80">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Key Output
                    </div>
                    <p className="text-xs text-purple-300 font-medium">{step.deliverable}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 6. TOOLING STACK & TECHNICAL CAPABILITIES ────────────────────── */}
      <Section variant="subtle" spacing="lg">
        <Container>
          <Reveal direction="up" className="max-w-3xl mx-auto text-center mb-14">
            <div className="type-eyebrow mb-2">Tooling Infrastructure</div>
            <h2 className="type-h2 text-slate-900 mb-4">
              Enterprise Instrumentation & Tool Stack
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              We do not rely on basic web crawler extensions. We deploy enterprise-grade diagnostics, custom server log streaming pipelines, and automated schema validation systems.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TOOL_STACK.map((group, gIdx) => (
              <Reveal key={group.category} direction="up" delay={gIdx * 70}>
                <div className="p-7 rounded-3xl border border-slate-200 bg-white shadow-sm h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <Terminal className="w-5 h-5 text-purple-600" />
                    <h3 className="font-heading font-bold text-slate-900 text-base">
                      {group.category}
                    </h3>
                  </div>
                  <ul className="space-y-2 flex-1">
                    {group.tools.map((t, tIdx) => (
                      <li key={tIdx} className="flex items-center gap-2 text-xs text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── 7. COMPLIANCE COMMITMENTS ────────────────────────────────────── */}
      <Section variant="white" spacing="lg">
        <Container>
          <Reveal direction="up" className="max-w-3xl mx-auto text-center mb-14">
            <div className="type-eyebrow mb-2">Ethical Standards</div>
            <h2 className="type-h2 text-slate-900 mb-4">
              Our Non-Negotiable Compliance Commitments
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Transparency and long-term asset preservation take precedence over quick vanity spikes. These four commitments govern all client work.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {COMPLIANCE_COMMITMENTS.map((comm, cIdx) => (
              <Reveal key={comm.title} direction="up" delay={cIdx * 90}>
                <div className="p-7 rounded-3xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-purple-200 hover:shadow-card transition-all h-full">
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-slate-900 text-base mb-2">
                        {comm.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {comm.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── 8. FAQS ──────────────────────────────────────────────────────── */}
      <Section variant="subtle" spacing="lg">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Reveal direction="up" className="text-center mb-12">
              <div className="type-eyebrow mb-2">Transparency</div>
              <h2 className="type-h2 text-slate-900 mb-4">
                Frequently Asked Questions About Partnering With Us
              </h2>
              <p className="text-slate-600 text-sm">
                Direct answers regarding contracts, non-disclosure protocols, and working cadence.
              </p>
            </Reveal>

            <Reveal direction="up" delay={100}>
              <FAQAccordion items={ABOUT_FAQS} />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ── 9. FINAL CALL TO ACTION ──────────────────────────────────────── */}
      <section className="relative bg-navy-950 bg-hero-atmosphere text-white py-20 lg:py-24 overflow-hidden border-t border-navy-800/80">
        <div className="absolute inset-0 bg-dark-mesh opacity-20 pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider">
              <span>Initiate Diagnostic Engagement</span>
            </div>
            <h2 className="type-h2 text-white">
              Ready to Work With a Dedicated Vertical Engineering Partner?
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed max-w-xl mx-auto">
              Schedule a 30-minute technical diagnostic with a senior SEO engineer. We will review your crawl architecture, Core Web Vitals, and competitor gaps without sales fluff.
            </p>
            <div className="flex flex-wrap items-center gap-4 justify-center pt-3">
              <Button
                to="/free-seo-audit"
                variant="gold"
                size="lg"
                icon={<Zap className="w-4 h-4" />}
                onClick={() => trackEvent('cta_click', { cta_name: 'about_bottom_audit', cta_location: 'about_bottom' })}
              >
                Claim Free Technical Audit
              </Button>
              <Button
                to="/book-call"
                variant="outline"
                size="lg"
                className="border-navy-700 text-white hover:bg-navy-800/60"
              >
                Book Strategy Call
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

export default AboutPage;
