import React, { useState } from 'react';
import { Zap, Search, BarChart3, AlertTriangle, Globe, CheckCircle2, AlertCircle } from 'lucide-react';
import { SEOHead } from '../seo';
import { Container, Section } from '../components/ui';
import { FadeIn } from '../components/animations';
import { trackEvent } from '../analytics/tracking';

import { submitLead } from '../services/leadSubmission';

interface AuditFormData {
  name: string;
  email: string;
  website: string;
  market: string;
  keywords: string;
  honeypot: string;
}

export const FreeSeoAuditPage: React.FC = () => {
  const [formData, setFormData] = useState<AuditFormData>({
    name: '',
    email: '',
    website: '',
    market: '',
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
    });

    setIsSubmitting(false);

    if (result.success) {
      setIsSubmitted(true);
      // Fire generate_lead strictly after confirmed successful submission
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

  return (
    <>
      <SEOHead
        title="Free Technical SEO & Growth Audit — High-Competition Platforms"
        description="Request a confidential technical SEO audit for your gaming, financial, or high-competition digital platform. We review Core Web Vitals, indexation, keyword gaps, and compliance."
        canonicalPath="/free-seo-audit"
      />

      <section className="relative bg-navy-950 bg-hero-atmosphere text-white py-20 lg:py-24 overflow-hidden border-b border-navy-800/80">
        <div className="absolute inset-0 bg-dark-mesh opacity-30 pointer-events-none" />
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-6">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>100% Confidential — Manual Engineering Diagnostic</span>
              </div>
              <h1 className="type-h1 text-white mb-5">
                Technical SEO & Organic Growth Audit
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
                Discover the crawl bottlenecks, keyword gaps, and technical barriers holding your organic rankings back. Conducted manually by a senior technical SEO engineer — not an automated tool export.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      <Section variant="white" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Form */}
            <div className="lg:col-span-7">
              <FadeIn>
                <div className="bg-white rounded-2xl lg:rounded-3xl border border-slate-200/80 shadow-xl p-7 sm:p-10">
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100">
                    <div>
                      <h2 className="font-heading font-bold text-2xl text-slate-950">Request Your Free Audit</h2>
                      <p className="text-xs text-slate-500 mt-1">Manual diagnostic delivered within 48 business hours</p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600">
                      <Zap className="w-5 h-5" />
                    </div>
                  </div>

                  {isSubmitted ? (
                    <div className="text-center py-10 space-y-4">
                      <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="font-heading font-bold text-2xl text-slate-900">
                        Audit Request Received
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Thank you, {formData.name}. Our technical SEO audit desk has logged <strong>{formData.website}</strong>. A comprehensive diagnostic report will be prepared and delivered to <strong>{formData.email}</strong> within 48 business hours.
                      </p>
                      <p className="text-xs text-slate-400">
                        Urgent inquiry? Email our audit desk at business@igameing.growthservice.in
                      </p>
                    </div>
                  ) : (
                    <form className="space-y-5" onSubmit={handleSubmit} onFocusCapture={handleFieldInteraction} noValidate>
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
                        }}
                        aria-hidden="true"
                      >
                        <label htmlFor="audit_hp">Leave empty</label>
                        <input
                          type="text"
                          id="audit_hp"
                          name="audit_hp"
                          tabIndex={-1}
                          value={formData.honeypot}
                          onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                          autoComplete="off"
                        />
                      </div>

                      <div>
                        <label htmlFor="audit_name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Your Name *
                        </label>
                        <input
                          id="audit_name"
                          type="text"
                          required
                          placeholder="John Smith"
                          value={formData.name}
                          onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                            if (formErrors.name) setFormErrors({ ...formErrors, name: undefined });
                          }}
                          className={`w-full px-4 py-3 rounded-xl border text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 transition-colors ${
                            formErrors.name ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                          }`}
                        />
                        {formErrors.name && (
                          <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {formErrors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="audit_email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Work Email *
                        </label>
                        <input
                          id="audit_email"
                          type="email"
                          required
                          placeholder="you@yourbrand.com"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (formErrors.email) setFormErrors({ ...formErrors, email: undefined });
                          }}
                          className={`w-full px-4 py-3 rounded-xl border text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 transition-colors ${
                            formErrors.email ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                          }`}
                        />
                        {formErrors.email && (
                          <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {formErrors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="audit_website" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
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
                          className={`w-full px-4 py-3 rounded-xl border text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 transition-colors ${
                            formErrors.website ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                          }`}
                        />
                        {formErrors.website && (
                          <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {formErrors.website}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="audit_market" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Primary Target Market
                        </label>
                        <select
                          id="audit_market"
                          value={formData.market}
                          onChange={(e) => setFormData({ ...formData, market: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 transition-colors bg-white"
                        >
                          <option value="">Select market</option>
                          <option value="India">India</option>
                          <option value="UK">UK</option>
                          <option value="Canada">Canada</option>
                          <option value="Australia">Australia</option>
                          <option value="Europe">Malta / Europe</option>
                          <option value="UAE">UAE / Middle East</option>
                          <option value="Global">Global</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="audit_keywords" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Top Target Keywords (optional)
                        </label>
                        <textarea
                          id="audit_keywords"
                          rows={3}
                          placeholder="e.g., casino SEO, gaming portal rankings, financial trading traffic..."
                          value={formData.keywords}
                          onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 transition-colors resize-none"
                        />
                      </div>

                      {submissionFeedback && (
                        <div
                          className={`p-4 rounded-xl text-xs leading-relaxed ${
                            submissionFeedback.status === 'configuration_pending'
                              ? 'bg-amber-50 border border-amber-200 text-amber-900'
                              : 'bg-rose-50 border border-rose-200 text-rose-800'
                          }`}
                        >
                          <p className="font-semibold mb-1">
                            {submissionFeedback.status === 'configuration_pending'
                              ? 'Online Transmission Endpoint Pending Deployment'
                              : 'Transmission Notice'}
                          </p>
                          <p className="mb-2">{submissionFeedback.message}</p>
                          <p>
                            Direct Work Email:{' '}
                            <a
                              href="mailto:hello@igameing.growthservice.in?subject=Free%20SEO%20Audit%20Request"
                              className="underline font-bold text-purple-700 hover:text-purple-900"
                            >
                              hello@igameing.growthservice.in
                            </a>
                          </p>
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-navy-950 font-bold text-base hover:shadow-glow-gold-sm transition-all duration-200 shadow-md hover:-translate-y-0.5 disabled:opacity-50 cursor-pointer"
                      >
                        <Zap className="w-4 h-4 fill-navy-950" />
                        {isSubmitting ? 'Processing Audit Request...' : 'Get My Free SEO Audit'}
                      </button>

                      <p className="text-center text-xs text-slate-400">
                        Strict confidentiality guaranteed. We never sell contact data or share platform analysis.
                      </p>
                    </form>
                  )}
                </div>
              </FadeIn>
            </div>

            {/* Value Points & Diagnostic Preview */}
            <div className="lg:col-span-5 space-y-6">
              <FadeIn delay={150}>
                <div>
                  <h2 className="font-heading font-extrabold text-2xl lg:text-3xl text-slate-950 mb-3">
                    What's Included in Your Audit
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Most free audits are automated SaaS exports with zero commercial context. Ours is performed by an experienced technical SEO strategist who reviews your architecture through the lens of your specific vertical, competitors, and indexing constraints.
                  </p>
                </div>

                {/* Engineering Inspection Terminal Preview */}
                <div className="p-5 rounded-2xl bg-navy-950 text-white border border-navy-800 shadow-card-dark font-mono text-xs">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-navy-800">
                    <span className="text-slate-400">DIAGNOSTIC PROTOCOL</span>
                    <span className="text-emerald-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      READY
                    </span>
                  </div>
                  <div className="space-y-1.5 text-slate-300">
                    <div className="flex justify-between">
                      <span className="text-slate-400">1. Crawl & Indexation</span>
                      <span className="text-purple-300">DOM / Bot Status</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">2. Core Web Vitals</span>
                      <span className="text-purple-300">LCP / INP / CLS</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">3. Entity Knowledge Graph</span>
                      <span className="text-purple-300">JSON-LD Validation</span>
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
                      <div key={check.label} className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-purple-200 transition-colors">
                        <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center flex-shrink-0 text-purple-700">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900 text-sm mb-0.5">{check.label}</div>
                          <div className="text-xs text-slate-600 leading-relaxed">{check.desc}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 flex items-center justify-between gap-4">
                  <div>
                    <div className="font-bold text-emerald-950 text-sm">Need Rapid Architectural Review?</div>
                    <p className="text-xs text-emerald-800 leading-relaxed mt-0.5">
                      Chat directly with our lead growth engineer on WhatsApp.
                    </p>
                  </div>
                  <a
                    href="https://wa.me/919341436937"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs shadow-md shadow-emerald-950/20 transition-all duration-200 hover:-translate-y-0.5"
                  >
                    Open Chat
                  </a>
                </div>

                <div className="p-5 rounded-2xl bg-purple-50/70 border border-purple-100">
                  <div className="font-semibold text-purple-950 text-sm mb-1">
                    Why do we provide this without charge?
                  </div>
                  <p className="text-xs text-purple-800 leading-relaxed">
                    Because we want to demonstrate the depth of our engineering rigor before discussing commercial engagement. Operators who experience our diagnostic baseline consistently choose us for multi-quarter execution.
                  </p>
                </div>
              </FadeIn>
            </div>

          </div>
        </Container>
      </Section>
    </>
  );
};

export default FreeSeoAuditPage;
