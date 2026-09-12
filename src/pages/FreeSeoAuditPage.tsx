import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Zap,
  Search,
  BarChart3,
  AlertTriangle,
  Globe,
  CheckCircle2,
  AlertCircle,
  FileText,
  Video,
  Clock,
  ShieldCheck,
  Check,
  Layers,
  ArrowRight,
} from 'lucide-react';
import { SEOHead } from '../seo';
import { buildBreadcrumbSchema, buildFAQSchema } from '../seo/schema';
import { Container, Section, Badge, FAQAccordion, Breadcrumb, TechnicalAuditVisual } from '../components/ui';
import { FadeIn } from '../components/animations';
import { trackEvent } from '../analytics/tracking';
import { submitLead } from '../services/leadSubmission';

interface AuditFormData {
  name: string;
  business: string;
  email: string;
  website: string;
  industry: string;
  market: string;
  priority: string;
  keywords: string;
  honeypot: string;
}

const AUDIT_FAQS = [
  {
    q: 'What is included in this free technical SEO audit?',
    a: 'Your audit is conducted manually by a senior technical SEO engineer. It covers crawl budget efficiency, JavaScript rendering bottlenecks, Core Web Vitals standing, Schema.org entity mapping, top 50 competitor keyword gaps, and platform policy compliance risks.',
  },
  {
    q: 'How long does it take to receive the completed audit?',
    a: 'Diagnostic reports are delivered to your work email within 24–48 business hours. We prioritize thoroughness and accuracy over instant, automated SaaS exports.',
  },
  {
    q: 'Do I need to provide access to Google Search Console or Google Analytics?',
    a: 'No preliminary access is required. We perform the initial diagnostic using external crawl emulation, headless browser snapshots, server response headers, and proprietary SERP intelligence. If you choose to grant read-only GSC access later, we can incorporate internal log data.',
  },
  {
    q: 'Is our website data and business information kept confidential?',
    a: 'Yes, 100%. We sign mutual NDAs on request and treat all domain diagnostics, keyword targets, and architecture data with strict confidentiality. We never sell contact information or publicize client audits without explicit consent.',
  },
  {
    q: 'Why is this technical audit offered free of charge?',
    a: 'We offer this complimentary diagnostic to demonstrate our engineering rigor before discussing commercial engagements. Operators and technical founders who experience the clarity of our diagnostic baseline consistently choose us for multi-quarter execution.',
  },
  {
    q: 'What happens after I receive the audit report?',
    a: 'You receive an actionable executive PDF summary and an optional 10-minute video walkthrough. You can implement the recommendations with your internal engineering team or schedule a strategy call with our architects to discuss managed execution.',
  },
];

const AUDIT_PILLARS = [
  {
    icon: Search,
    title: '1. Crawl Architecture & Indexation Health',
    desc: 'Analysis of server access headers, HTTP status code distributions, robots.txt directives, and faceted navigation parameters that trap search engine bots.',
    points: ['Crawl budget allocation & waste detection', 'Facet parameter canonicalization checks', 'DOM hydration timeout identification'],
  },
  {
    icon: Zap,
    title: '2. Core Web Vitals & Hydration SLA',
    desc: 'Real-world mobile performance benchmarking against Google thresholds: Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Layout Shift (CLS).',
    points: ['Above-the-fold asset preloading analysis', 'Client bundle hydration mismatch checks', 'Main-thread JavaScript task breakdown'],
  },
  {
    icon: Layers,
    title: '3. Entity Schema & Knowledge Graph',
    desc: 'Validation of JSON-LD structured data connecting your domain to authoritative search engine entities, publisher schemas, and BreadcrumbList trees.',
    points: ['Schema.org syntax & nesting validation', 'Author E-E-A-T entity connection verification', 'Rich snippet qualification assessment'],
  },
  {
    icon: BarChart3,
    title: '4. Commercial Keyword Gap Map',
    desc: 'Identification of high-intent search queries captured by your top 5 competitors that your domain fails to rank for, prioritizing high-conversion opportunities.',
    points: ['Transactional vs informational intent clustering', 'Under-served long-tail query discovery', 'Topical authority deficit modeling'],
  },
];

export const FreeSeoAuditPage: React.FC = () => {
  const [formData, setFormData] = useState<AuditFormData>({
    name: '',
    business: '',
    email: '',
    website: '',
    industry: '',
    market: '',
    priority: '',
    keywords: '',
    honeypot: '',
  });

  const [formErrors, setFormErrors] = useState<Partial<Record<keyof AuditFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionFeedback, setSubmissionFeedback] = useState<{
    status: 'submitted' | 'configuration_pending' | 'network_error' | 'validation_error';
    message: string;
  } | null>(null);
  const formStartedRef = React.useRef(false);

  // Track form view on initial mount
  React.useEffect(() => {
    trackEvent('form_view', { form_type: 'free_seo_audit' });
  }, []);

  const handleFieldInteraction = () => {
    if (!formStartedRef.current) {
      formStartedRef.current = true;
      trackEvent('form_start', { form_type: 'free_seo_audit' });
    }
  };

  const auditChecks = [
    { icon: Search, label: 'Technical SEO Health', desc: 'Core Web Vitals, crawl budget, JS rendering, and indexation leaks' },
    { icon: BarChart3, label: 'Keyword Gap Analysis', desc: 'High-intent commercial queries your competitors capture that you miss' },
    { icon: Globe, label: 'Authority Profile Review', desc: 'Domain equity, toxic link footprint, and legitimate link opportunities' },
    { icon: AlertTriangle, label: 'Compliance & Platform Risk', desc: 'Content and technical factors that risk search engine suppression' },
  ];

  const validate = (): boolean => {
    const errors: Partial<Record<keyof AuditFormData, string>> = {};

    if (!formData.name.trim()) {
      errors.name = 'Please provide your full name.';
    }

    if (!formData.email.trim()) {
      errors.email = 'Please provide your work email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Please enter a valid work email address.';
    }

    if (!formData.website.trim()) {
      errors.website = 'Please provide your platform or domain URL.';
    } else if (!/^https?:\/\/.+/i.test(formData.website.trim())) {
      errors.website = 'Please enter a valid URL beginning with http:// or https://';
    }

    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      trackEvent('form_error', {
        form_type: 'free_seo_audit',
        error_type: Object.keys(errors).join(','),
      });
    }

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) {
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmissionFeedback(null);

    trackEvent('cta_click', {
      cta_name: 'submit_audit_request',
      cta_location: 'free_seo_audit_form',
    });

    const result = await submitLead({
      formType: 'free_seo_audit',
      name: formData.name,
      email: formData.email,
      website: formData.website,
      market: formData.market,
      growthGoal: formData.keywords,
      business: formData.business,
      industry: formData.industry,
      priority: formData.priority,
    });

    setIsSubmitting(false);

    if (result.success) {
      setIsSubmitted(true);
      trackEvent('generate_lead', {
        form_type: 'free_seo_audit',
        market: formData.market || 'all_markets',
        submission_id: result.submissionId,
      });
    } else {
      setSubmissionFeedback({
        status: result.status,
        message: result.message,
      });
    }
  };

  const breadcrumbItems = [{ label: 'Free SEO Audit', path: '/free-seo-audit' }];

  return (
    <div className="bg-model3-base text-white selection:bg-amber-400 selection:text-black font-sans antialiased overflow-x-hidden">
      <SEOHead
        title="Free Technical SEO & Growth Audit — High-Competition Platforms"
        description="Request a confidential technical SEO audit for your gaming, financial, or high-competition digital platform. We review Core Web Vitals, indexation, keyword gaps, and compliance."
        canonicalPath="/free-seo-audit"
        jsonLd={[
          buildBreadcrumbSchema(breadcrumbItems),
          buildFAQSchema(AUDIT_FAQS),
        ]}
      />

      {/* ── 1. Hero Section ───────────────────────────────────────── */}
      <section className="relative bg-model3-base bg-hero-atmosphere text-white py-16 sm:py-20 lg:py-24 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-dark-mesh opacity-30 pointer-events-none" />
        <div className="absolute top-1/3 -left-32 w-72 sm:w-96 h-72 sm:h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          <div className="mb-6 overflow-x-auto py-1">
            <Breadcrumb items={breadcrumbItems} variant="light" />
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-6">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>100% Confidential — Manual Engineering Diagnostic</span>
              </div>
              <h1 className="type-h1 text-white mb-5 leading-tight">
                Technical SEO &amp; Organic Growth Audit
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
                Discover the crawl bottlenecks, keyword gaps, and rendering barriers holding your organic search traffic back. Conducted manually by a senior technical SEO engineer — not an automated tool export.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>24–48h Turnaround</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Confidentiality Guaranteed</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-purple-400" />
                  <span>Executive PDF &amp; Video Brief</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ── 2. Intake Form & Diagnostic Terminal ──────────────────── */}
      <Section variant="white" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            {/* Form */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <FadeIn>
                <div className="bg-[#0D0D18]/90 rounded-2xl lg:rounded-3xl border border-white/10 shadow-2xl backdrop-blur-md p-4 sm:p-8 lg:p-10">
                  <div className="flex items-center justify-between pb-5 sm:pb-6 mb-5 sm:mb-6 border-b border-white/10">
                    <div>
                      <h2 className="font-heading font-bold text-xl sm:text-2xl text-white">
                        Request Your Free Audit
                      </h2>
                      <p className="text-xs text-slate-400 mt-1">
                        Manual diagnostic delivered within 48 business hours
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                      <Zap className="w-5 h-5" />
                    </div>
                  </div>

                  {isSubmitted ? (
                    <div className="text-center py-10 space-y-4">
                      <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-inner">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="font-heading font-bold text-2xl text-white">
                        Audit Request Received
                      </h3>
                      <p className="text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
                        Thank you, {formData.name}. Our technical SEO audit desk has logged <strong>{formData.website}</strong>. A comprehensive diagnostic report will be prepared and delivered to <strong>{formData.email}</strong> within 24–48 business hours.
                      </p>
                      <p className="text-xs text-slate-400 pt-2">
                        Direct inquiry? Email our audit desk at hello@igameing.growthservice.in
                      </p>
                    </div>
                  ) : (
                    <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit} onFocusCapture={handleFieldInteraction} noValidate>
                      {/* Honeypot Field */}
                      <div
                        style={{
                          opacity: 0,
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          height: 0,
                          width: 0,
                          zIndex: -1,
                          overflow: 'hidden',
                        }}
                        aria-hidden="true"
                      >
                        <label htmlFor="audit_user_check">Leave this field blank</label>
                        <input
                          id="audit_user_check"
                          type="text"
                          name="audit_user_check"
                          tabIndex={-1}
                          autoComplete="off"
                          value={formData.honeypot}
                          onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="audit_name" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                            Full Name *
                          </label>
                          <input
                            id="audit_name"
                            type="text"
                            required
                            placeholder="Alex Mercer"
                            value={formData.name}
                            onChange={(e) => {
                              setFormData({ ...formData, name: e.target.value });
                              if (formErrors.name) setFormErrors({ ...formErrors, name: undefined });
                            }}
                            className={`w-full px-4 py-3 rounded-xl border text-white text-sm bg-[#050505]/70 focus:outline-none focus:ring-2 focus:ring-amber-400/40 focus:border-amber-400 transition-colors ${
                              formErrors.name ? 'border-rose-400 bg-rose-500/10' : 'border-white/10'
                            }`}
                          />
                          {formErrors.name && (
                            <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />
                              {formErrors.name}
                            </p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="audit_email" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                            Work Email *
                          </label>
                          <input
                            id="audit_email"
                            type="email"
                            required
                            placeholder="alex@brand.com"
                            value={formData.email}
                            onChange={(e) => {
                              setFormData({ ...formData, email: e.target.value });
                              if (formErrors.email) setFormErrors({ ...formErrors, email: undefined });
                            }}
                            className={`w-full px-4 py-3 rounded-xl border text-white text-sm bg-[#050505]/70 focus:outline-none focus:ring-2 focus:ring-amber-400/40 focus:border-amber-400 transition-colors ${
                              formErrors.email ? 'border-rose-400 bg-rose-500/10' : 'border-white/10'
                            }`}
                          />
                          {formErrors.email && (
                            <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />
                              {formErrors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="audit_website" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                            Website URL to Audit *
                          </label>
                          <input
                            id="audit_website"
                            type="url"
                            required
                            placeholder="https://your-platform.com"
                            value={formData.website}
                            onChange={(e) => {
                              setFormData({ ...formData, website: e.target.value });
                              if (formErrors.website) setFormErrors({ ...formErrors, website: undefined });
                            }}
                            className={`w-full px-4 py-3 rounded-xl border text-white text-sm bg-[#050505]/70 focus:outline-none focus:ring-2 focus:ring-amber-400/40 focus:border-amber-400 transition-colors ${
                              formErrors.website ? 'border-rose-400 bg-rose-500/10' : 'border-white/10'
                            }`}
                          />
                          {formErrors.website && (
                            <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />
                              {formErrors.website}
                            </p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="audit_business" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                            Brand / Company Name
                          </label>
                          <input
                            id="audit_business"
                            type="text"
                            placeholder="Your brand or platform"
                            value={formData.business}
                            onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-white/10 text-white text-sm bg-[#050505]/70 focus:outline-none focus:ring-2 focus:ring-amber-400/40 focus:border-amber-400 transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="audit_industry" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                            Industry Vertical
                          </label>
                          <select
                            id="audit_industry"
                            value={formData.industry}
                            onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-white/10 text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/40 focus:border-amber-400 transition-colors bg-[#050505]/90"
                          >
                            <option value="">Select your vertical</option>
                            <option value="iGaming">Online Gaming (iGaming)</option>
                            <option value="Casino">Casino Platform</option>
                            <option value="Cricket Gaming">Cricket / Fantasy Sports</option>
                            <option value="Yono Gaming">Yono / Skill Gaming Apps</option>
                            <option value="Color Prediction">Color Prediction Platform</option>
                            <option value="Color Trading">Color Trading Platform</option>
                            <option value="Stock Market / Financial">Stock Market &amp; Financial Portal</option>
                            <option value="Adult / Escort Services">Adult Directory / Portal (B2B)</option>
                            <option value="Other">Other High-Competition Vertical</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="audit_market" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                            Primary Target Market
                          </label>
                          <select
                            id="audit_market"
                            value={formData.market}
                            onChange={(e) => setFormData({ ...formData, market: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-white/10 text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/40 focus:border-amber-400 transition-colors bg-[#050505]/90"
                          >
                            <option value="">Select market</option>
                            <option value="India">India</option>
                            <option value="UK">United Kingdom</option>
                            <option value="Canada">Canada</option>
                            <option value="Australia">Australia</option>
                            <option value="Europe">Europe / Malta</option>
                            <option value="UAE">UAE / Middle East</option>
                            <option value="Global">Global / Multi-Regional</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="audit_priority" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                          Primary Diagnostic Priority
                        </label>
                        <select
                          id="audit_priority"
                          value={formData.priority}
                          onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-white/10 text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/40 focus:border-amber-400 transition-colors bg-[#050505]/90"
                        >
                          <option value="">What matters most right now?</option>
                          <option value="Technical SEO / Crawl Fixes">Technical SEO / Crawl &amp; Indexation Fixes</option>
                          <option value="Organic Traffic Growth">Organic Traffic Scaling</option>
                          <option value="Keyword Rankings">Keyword Rankings on Primary Terms</option>
                          <option value="Core Web Vitals">Core Web Vitals &amp; Page Speed Optimization</option>
                          <option value="Full Growth Strategy">Full Technical &amp; Topical Growth Strategy</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="audit_keywords" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                          Top Target Keywords or Competitors (optional)
                        </label>
                        <textarea
                          id="audit_keywords"
                          rows={3}
                          placeholder="e.g. gaming platform rankings, competitor domain, specific query targets..."
                          value={formData.keywords}
                          onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-white/10 text-white text-sm placeholder:text-slate-500 bg-[#050505]/70 focus:outline-none focus:ring-2 focus:ring-amber-400/40 focus:border-amber-400 transition-colors resize-none"
                        />
                      </div>

                      {submissionFeedback && (
                        <div
                          className={`p-4 rounded-xl text-xs leading-relaxed border ${
                            submissionFeedback.status === 'configuration_pending'
                              ? 'bg-amber-500/10 border-amber-500/30 text-amber-300'
                              : 'bg-rose-500/10 border-rose-500/30 text-rose-300'
                          }`}
                        >
                          <p className="font-semibold mb-1">
                            {submissionFeedback.status === 'configuration_pending'
                              ? 'Online Transmission Endpoint Pending Deployment'
                              : 'Transmission Notice'}
                          </p>
                          <p className="mb-2 text-slate-300">{submissionFeedback.message}</p>
                          <p>
                            Direct Work Email:{' '}
                            <a
                              href="mailto:hello@igameing.growthservice.in?subject=Free%20SEO%20Audit%20Request"
                              className="underline font-bold text-amber-400 hover:text-amber-300"
                            >
                              hello@igameing.growthservice.in
                            </a>
                          </p>
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-slate-950 font-bold text-base hover:shadow-glow-gold-sm transition-all duration-200 shadow-md hover:-translate-y-0.5 disabled:opacity-50 cursor-pointer"
                      >
                        <Zap className="w-4 h-4 fill-slate-950" />
                        {isSubmitting ? 'Processing Audit Request...' : 'Get My Free Technical SEO Audit'}
                      </button>

                      <p className="text-center text-xs text-slate-400">
                        Strict confidentiality guaranteed. We never sell contact data or share platform analysis.
                      </p>
                    </form>
                  )}
                </div>
              </FadeIn>
            </div>

            {/* Right: Value Points & Terminal Preview */}
            <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
              <FadeIn delay={150}>
                <div>
                  <h2 className="font-heading font-extrabold text-2xl lg:text-3xl text-white mb-3">
                    What's Included in Your Audit
                  </h2>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Most free audits are automated SaaS exports with zero commercial context. Ours is performed manually by an experienced technical SEO strategist who reviews your architecture through the lens of your specific vertical, competitors, and indexing constraints.
                  </p>
                </div>

                {/* Engineering Inspection Terminal Preview */}
                <div className="p-5 rounded-2xl bg-[#0B0B12] text-white border border-white/10 shadow-card-dark font-mono text-xs">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                    <span className="text-slate-400">DIAGNOSTIC PROTOCOL</span>
                    <span className="text-emerald-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      READY
                    </span>
                  </div>
                  <div className="space-y-1.5 text-slate-300">
                    <div className="flex justify-between">
                      <span className="text-slate-400">1. Crawl &amp; Indexation</span>
                      <span className="text-amber-300">DOM / Bot Status</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">2. Core Web Vitals</span>
                      <span className="text-amber-300">LCP / INP / CLS</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">3. Entity Knowledge Graph</span>
                      <span className="text-amber-300">JSON-LD Validation</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">4. High-Intent Gap Map</span>
                      <span className="text-amber-400">Top 50 Competitors</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {auditChecks.map((check) => {
                    const Icon = check.icon;
                    return (
                      <div key={check.label} className="flex gap-4 p-4 rounded-2xl bg-[#0D0D18]/80 border border-white/10 hover:border-amber-400/30 transition-colors">
                        <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center flex-shrink-0 text-amber-400">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-semibold text-white text-sm mb-0.5">{check.label}</div>
                          <div className="text-xs text-slate-400 leading-relaxed">{check.desc}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between gap-4">
                  <div>
                    <div className="font-bold text-emerald-300 text-sm">Need Rapid Architectural Review?</div>
                    <p className="text-xs text-emerald-400 leading-relaxed mt-0.5">
                      Chat directly with our lead growth engineer on WhatsApp.
                    </p>
                  </div>
                  <a
                    href="https://wa.me/917654928455"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs shadow-md shadow-emerald-950/20 transition-all duration-200 hover:-translate-y-0.5"
                  >
                    Open Chat
                  </a>
                </div>

                <div className="p-5 rounded-2xl bg-amber-400/5 border border-amber-400/20">
                  <div className="font-semibold text-amber-300 text-sm mb-1">
                    Why do we provide this without charge?
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Because we want to demonstrate the depth of our engineering rigor before discussing commercial engagement. Operators who experience our diagnostic baseline consistently choose us for multi-quarter execution.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 3. Four Pillars of the Engineering Audit ──────────────── */}
      <Section variant="slate" spacing="lg">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge variant="amber" size="sm" className="mb-3">
              Comprehensive Scope
            </Badge>
            <h2 className="font-heading font-extrabold text-2xl lg:text-3xl text-white mb-4">
              The 4 Pillars of Our Technical Diagnostic
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              We inspect the full lifecycle of your web application from server headers to client-side DOM rendering and competitive SERP positioning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {AUDIT_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="bg-[#0D0D18]/80 rounded-2xl p-6 sm:p-8 border border-white/10 shadow-lg space-y-4 hover:border-amber-400/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                  <ul className="space-y-2 pt-2 border-t border-white/10">
                    {pillar.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Interactive Code Diagnostic Terminal */}
          <div className="mt-14">
            <div className="text-center mb-6">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-300 bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/20">
                Interactive Engineering Console
              </span>
            </div>
            <TechnicalAuditVisual />
          </div>
        </Container>
      </Section>

      {/* ── 4. Deliverables & Turnaround SLA ───────────────────────── */}
      <Section variant="white" spacing="lg">
        <Container>
          <div className="bg-[#0D0D18]/90 bg-hero-atmosphere rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-white border border-white/10 shadow-card-dark">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <Badge variant="amber" size="sm">
                Service Level Agreement
              </Badge>
              <h2 className="type-h2 text-white">
                What You Receive in Your Diagnostic Package
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                No generic 80-page automated PDF dumps filled with useless warnings. We deliver concise, code-ready instructions your team can act on immediately.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 text-left">
                <div className="p-5 rounded-2xl bg-[#050505]/60 border border-white/10 space-y-2">
                  <div className="text-emerald-400 font-bold text-sm flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    <span>Executive Summary</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    A prioritized 10–15 page PDF detailing critical blockers, immediate quick-wins, and 90-day trajectory.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#050505]/60 border border-white/10 space-y-2">
                  <div className="text-amber-400 font-bold text-sm flex items-center gap-2">
                    <Video className="w-4 h-4" />
                    <span>Loom Walkthrough</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    A recorded video by our lead architect walking through your codebase and live DOM render snapshots.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#050505]/60 border border-white/10 space-y-2">
                  <div className="text-purple-300 font-bold text-sm flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>24–48h SLA</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Guaranteed turnaround time with direct follow-up email support to clarify any architectural questions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 5. Technical Audit FAQs ───────────────────────────────── */}
      <Section variant="slate" spacing="lg">
        <Container>
          <div className="max-w-2xl mx-auto text-center mb-10">
            <Badge variant="amber" size="sm" className="mb-3">
              Questions &amp; Answers
            </Badge>
            <h2 className="font-heading font-extrabold text-2xl lg:text-3xl text-white mb-3">
              Frequently Asked Questions: Free Technical Audit
            </h2>
            <p className="text-slate-400 text-sm">
              Everything you need to know about our diagnostic process and data confidentiality.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={AUDIT_FAQS.map(f => ({ question: f.q, answer: f.a }))} />

            {/* Contextual Internal Links */}
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <Link
                to="/services/website-development"
                className="p-4 rounded-xl bg-model3-surface/80 border border-white/10 hover:border-cyan-400/40 transition-colors group"
              >
                <div className="text-[10px] font-mono text-cyan-400 uppercase mb-1">Stack Rebuild</div>
                <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                  <span>Web Development (₹20K)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
              <Link
                to="/services/seo"
                className="p-4 rounded-xl bg-model3-surface/80 border border-white/10 hover:border-amber-400/40 transition-colors group"
              >
                <div className="text-[10px] font-mono text-amber-400 uppercase mb-1">Monthly Growth</div>
                <div className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors flex items-center justify-between">
                  <span>SEO Dominance (₹35K)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
              <Link
                to="/book-call"
                className="p-4 rounded-xl bg-model3-surface/80 border border-white/10 hover:border-purple-400/40 transition-colors group"
              >
                <div className="text-[10px] font-mono text-purple-400 uppercase mb-1">Consultation</div>
                <div className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors flex items-center justify-between">
                  <span>Book Strategy Call</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default FreeSeoAuditPage;
