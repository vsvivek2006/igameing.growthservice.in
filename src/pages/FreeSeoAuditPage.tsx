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

      <section className="bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/30 mb-6">
                <Zap className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-bold text-amber-300">100% Confidential — No Obligation</span>
              </div>
              <h1 className="font-heading font-extrabold text-4xl lg:text-5xl text-white mb-5 leading-tight">
                Technical SEO & Organic Growth Audit
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed">
                Discover the crawl bottlenecks, keyword gaps, and technical barriers holding your organic rankings back. Conducted manually by a senior technical SEO engineer — not an automated tool export.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      <Section variant="white" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Form */}
            <FadeIn>
              <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8">
                <div className="flex items-center gap-2 mb-6">
                  <Zap className="w-5 h-5 text-amber-500" />
                  <h2 className="font-heading font-bold text-xl text-slate-900">Request Your Free Audit</h2>
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
                      <label htmlFor="audit_name" className="block text-sm font-semibold text-slate-700 mb-1.5">
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
                        className={`w-full px-4 py-3 rounded-xl border text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/30 transition-colors ${
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
                      <label htmlFor="audit_email" className="block text-sm font-semibold text-slate-700 mb-1.5">
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
                        className={`w-full px-4 py-3 rounded-xl border text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/30 transition-colors ${
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
                      <label htmlFor="audit_website" className="block text-sm font-semibold text-slate-700 mb-1.5">
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
                        className={`w-full px-4 py-3 rounded-xl border text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/30 transition-colors ${
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
                      <label htmlFor="audit_market" className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Primary Target Market
                      </label>
                      <select
                        id="audit_market"
                        value={formData.market}
                        onChange={(e) => setFormData({ ...formData, market: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400 transition-colors bg-white"
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
                      <label htmlFor="audit_keywords" className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Your top target keywords (optional)
                      </label>
                      <textarea
                        id="audit_keywords"
                        rows={3}
                        placeholder="e.g., casino SEO, gaming portal rankings, financial trading traffic..."
                        value={formData.keywords}
                        onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400 transition-colors resize-none"
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
                      className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold text-base hover:from-amber-400 hover:to-orange-400 transition-all duration-200 shadow-lg shadow-amber-500/20 hover:-translate-y-0.5 disabled:opacity-50 cursor-pointer"
                    >
                      <Zap className="w-4 h-4" />
                      {isSubmitting ? 'Processing Audit Request...' : 'Get My Free SEO Audit'}
                    </button>

                    <p className="text-center text-xs text-slate-400">
                      No obligation. We do not sell your contact data or spam your inbox.
                    </p>
                  </form>
                )}
              </div>
            </FadeIn>

            {/* Value Points */}
            <FadeIn delay={150}>
              <div className="space-y-8">
                <div>
                  <h2 className="font-heading font-extrabold text-2xl lg:text-3xl text-slate-900 mb-4">
                    What's Included in Your Audit
                  </h2>
                  <p className="text-slate-600 leading-relaxed">
                    Most "free audits" are automated PDF exports from cheap SaaS tools. Ours is performed by an experienced iGaming SEO strategist who looks at your site through the lens of your specific vertical, competitors, and market regulations.
                  </p>
                </div>

                <div className="space-y-4">
                  {auditChecks.map((check) => {
                    const Icon = check.icon;
                    return (
                      <div key={check.label} className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                        <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-purple-700" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900 text-sm mb-0.5">{check.label}</div>
                          <div className="text-xs text-slate-500 leading-relaxed">{check.desc}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="p-6 rounded-2xl bg-purple-50 border border-purple-100">
                  <div className="font-semibold text-purple-900 text-sm mb-1">
                    Why is this free?
                  </div>
                  <p className="text-xs text-purple-700 leading-relaxed">
                    Because we want to show you the quality of our work before we talk about working together. Most operators who receive our audit end up hiring us for execution.
                  </p>
                </div>
              </div>
            </FadeIn>

          </div>
        </Container>
      </Section>
    </>
  );
};

export default FreeSeoAuditPage;
