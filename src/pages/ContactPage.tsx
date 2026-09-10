import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Clock, ArrowRight, CheckCircle2, AlertCircle, Video } from 'lucide-react';
import { SEOHead } from '../seo';
import { Container, Section, Badge } from '../components/ui';
import { FadeIn } from '../components/animations';
import { trackEvent } from '../analytics/tracking';
import businessConfig from '../config/business';
import { submitLead } from '../services/leadSubmission';

interface ContactFormData {
  name: string;
  company: string;
  email: string;
  website: string;
  vertical: string;
  services: string[];
  budget: string;
  message: string;
  honeypot: string;
}

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    email: '',
    website: '',
    vertical: '',
    services: [],
    budget: '',
    message: '',
    honeypot: '',
  });

  const [formErrors, setFormErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionFeedback, setSubmissionFeedback] = useState<{
    status: 'submitted' | 'configuration_pending' | 'network_error' | 'validation_error';
    message: string;
  } | null>(null);
  const formStartedRef = React.useRef(false);

  // Track form view on initial mount
  React.useEffect(() => {
    trackEvent('form_view', { form_type: 'contact_proposal' });
  }, []);

  const handleFieldInteraction = () => {
    if (!formStartedRef.current) {
      formStartedRef.current = true;
      trackEvent('form_start', { form_type: 'contact_proposal' });
    }
  };

  const availableServices = [
    'Technical SEO Audit',
    'Organic SEO Strategy',
    'Website Development',
    'Content Strategy',
    'Programmatic SEO',
    'Conversion Optimization (CRO)',
    'Analytics & Attribution',
    'Policy-Compliant Paid Ads',
  ];

  const handleCheckboxToggle = (serviceName: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceName)
        ? prev.services.filter((s) => s !== serviceName)
        : [...prev.services, serviceName],
    }));
  };

  const validate = (): boolean => {
    const errors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.name.trim()) {
      errors.name = 'Please provide your full name.';
    }

    if (!formData.email.trim()) {
      errors.email = 'Please provide your work email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Please enter a valid work email address.';
    }

    if (!formData.vertical) {
      errors.vertical = 'Please select your industry vertical.';
    }

    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      trackEvent('form_error', {
        form_type: 'contact_proposal',
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
      cta_name: 'submit_proposal_request',
      cta_location: 'contact_proposal_form',
    });

    const result = await submitLead({
      formType: 'contact_proposal',
      name: formData.name,
      company: formData.company,
      email: formData.email,
      website: formData.website,
      vertical: formData.vertical,
      services: formData.services,
      budget: formData.budget,
      message: formData.message,
    });

    setIsSubmitting(false);

    if (result.success) {
      setIsSubmitted(true);
      // Fire generate_lead strictly after confirmed successful submission
      trackEvent('generate_lead', {
        form_type: 'contact_proposal',
        vertical: formData.vertical || 'unspecified',
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
        title="Get a Free iGaming Growth Proposal — Contact Us"
        description="Tell us about your gaming brand and we'll send a custom growth proposal within 24 hours. Free strategy call for casino operators, sportsbooks, and gaming brands."
        canonicalPath="/contact"
      />

      <section className="bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white py-20">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <FadeIn>
              <Badge variant="purple" size="sm" className="mb-6">Get in Touch</Badge>
              <h1 className="font-heading font-extrabold text-4xl lg:text-5xl text-white mb-5 leading-tight">
                Let's Grow Your Gaming Brand
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed">
                Tell us about your brand, your market, and your growth goals. We'll review your situation and send a tailored proposal within 24 business hours — no generic templates, no obligation.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      <Section variant="white" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Contact Form */}
            <FadeIn>
              <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 lg:p-10">
                <h2 className="font-heading font-bold text-2xl text-slate-900 mb-6">Request a Free Proposal</h2>

                {isSubmitted ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-slate-900">
                      Proposal Request Received
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Thank you, {formData.name}. Our commercial growth team has received your briefing. A custom growth outline will be prepared and delivered to <strong>{formData.email}</strong> within 24 business hours.
                    </p>
                    <p className="text-xs text-slate-400">
                      Need immediate assistance? Email {businessConfig.emails.business} directly.
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
                      <label htmlFor="contact_hp">Leave empty</label>
                      <input
                        type="text"
                        id="contact_hp"
                        name="contact_hp"
                        tabIndex={-1}
                        value={formData.honeypot}
                        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                        autoComplete="off"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact_name" className="block text-sm font-semibold text-slate-700 mb-1.5">
                          Name *
                        </label>
                        <input
                          id="contact_name"
                          type="text"
                          required
                          placeholder="Your full name"
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
                        <label htmlFor="contact_company" className="block text-sm font-semibold text-slate-700 mb-1.5">
                          Company
                        </label>
                        <input
                          id="contact_company"
                          type="text"
                          placeholder="Your brand or company"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/30 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact_email" className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Email *
                      </label>
                      <input
                        id="contact_email"
                        type="email"
                        required
                        placeholder="your@email.com"
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
                      <label htmlFor="contact_website" className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Website URL
                      </label>
                      <input
                        id="contact_website"
                        type="url"
                        placeholder="https://your-casino.com"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/30 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact_vertical" className="block text-sm font-semibold text-slate-700 mb-1.5">
                        What best describes your business? *
                      </label>
                      <select
                        id="contact_vertical"
                        required
                        value={formData.vertical}
                        onChange={(e) => {
                          setFormData({ ...formData, vertical: e.target.value });
                          if (formErrors.vertical) setFormErrors({ ...formErrors, vertical: undefined });
                        }}
                        className={`w-full px-4 py-3 rounded-xl border text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/30 transition-colors bg-white ${
                          formErrors.vertical ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                        }`}
                      >
                        <option value="">Select your vertical</option>
                        <option value="Online Casino Operator">Online Casino Operator</option>
                        <option value="Online Gaming Platform">Online Gaming Platform</option>
                        <option value="YONO / Skill Game App">YONO / Skill Game App</option>
                        <option value="Cricket / Fantasy Sports">Cricket / Fantasy Sports</option>
                        <option value="Color Prediction / Trading">Color Prediction / Trading Platform</option>
                        <option value="Stock Market / Finance Portal">Stock Market / Financial Portal</option>
                        <option value="Adult Entertainment Directory">Adult Entertainment Directory</option>
                        <option value="Other iGaming Business">Other iGaming Business</option>
                      </select>
                      {formErrors.vertical && (
                        <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {formErrors.vertical}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Services you're interested in
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {availableServices.map((s) => (
                          <label key={s} className="flex items-center gap-2 text-xs text-slate-600 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.services.includes(s)}
                              onChange={() => handleCheckboxToggle(s)}
                              className="rounded border-slate-300 text-purple-600 focus:ring-purple-500"
                            />
                            {s}
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact_budget" className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Monthly Marketing Budget
                      </label>
                      <select
                        id="contact_budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400 transition-colors bg-white"
                      >
                        <option value="">Select budget range</option>
                        <option value="under_3k">Under $3,000 / month</option>
                        <option value="3k_5k">$3,000 – $5,000 / month</option>
                        <option value="5k_10k">$5,000 – $10,000 / month</option>
                        <option value="10k_plus">$10,000+ / month</option>
                        <option value="custom">Custom project / One-time audit</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contact_message" className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Tell us about your project & goals
                      </label>
                      <textarea
                        id="contact_message"
                        rows={4}
                        placeholder="Current challenges, target keywords, markets, timelines..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
                            href="mailto:hello@igameing.growthservice.in?subject=Growth%20Proposal%20Inquiry"
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
                      className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-purple-600 text-white font-bold text-base hover:bg-purple-700 transition-colors shadow-lg shadow-purple-600/20 disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Preparing Your Proposal...</span>
                      ) : (
                        <>
                          <span>Request My Free Proposal</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-slate-400">
                      We sign NDAs on request. Your project details are kept strictly confidential.
                    </p>
                  </form>
                )}
              </div>
            </FadeIn>

            {/* Direct Contact Options */}
            <FadeIn delay={150}>
              <div className="space-y-8">
                <div>
                  <h3 className="font-heading font-extrabold text-2xl text-slate-900 mb-3">
                    Prefer to reach out directly?
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    We're available across direct channels for brands and operators who want a direct response or have immediate technical requirements.
                  </p>
                </div>

                <div className="space-y-4">
                  <a
                    href={`mailto:${businessConfig.emails.primary}`}
                    className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-purple-200 hover:bg-purple-50/50 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-200 transition-colors">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-medium">Email Us Directly</div>
                      <div className="font-bold text-slate-900 text-sm">{businessConfig.emails.primary}</div>
                      <div className="text-xs text-purple-600">Response within 24 business hours</div>
                    </div>
                  </a>

                  <Link
                    to="/book-call"
                    className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-purple-200 hover:bg-purple-50/50 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-200 transition-colors">
                      <Video className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-medium">Schedule Video Consultation</div>
                      <div className="font-bold text-slate-900 text-sm">Book 30-Min Strategy Call</div>
                      <div className="text-xs text-emerald-600">Direct architecture & growth session</div>
                    </div>
                  </Link>

                  <Link
                    to="/free-seo-audit"
                    className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-200 hover:bg-amber-50/50 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-200 transition-colors">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-medium">Free Technical Diagnostic</div>
                      <div className="font-bold text-slate-900 text-sm">Request Free SEO Audit</div>
                      <div className="text-xs text-amber-600">Comprehensive foundation analysis</div>
                    </div>
                  </Link>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-purple-600" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700">What Happens Next?</span>
                  </div>
                  <ol className="space-y-2 text-xs text-slate-600">
                    <li className="flex gap-2">
                      <span className="font-bold text-purple-600">1.</span>
                      <span>We review your website and current search visibility</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold text-purple-600">2.</span>
                      <span>A senior strategist prepares an initial analysis</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold text-purple-600">3.</span>
                      <span>We send a tailored proposal with scope, timeline, and deliverables</span>
                    </li>
                  </ol>
                </div>
              </div>
            </FadeIn>

          </div>
        </Container>
      </Section>
    </>
  );
};

export default ContactPage;
