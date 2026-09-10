import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Clock,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Video,
  Zap,
  ShieldCheck,
  Building2,
  MessageSquare,
} from 'lucide-react';
import { SEOHead } from '../seo';
import { buildBreadcrumbSchema, buildFAQSchema } from '../seo/schema';
import { Container, Section, Badge, FAQAccordion, Breadcrumb } from '../components/ui';
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

const CONTACT_FAQS = [
  {
    q: 'How quickly does your engineering desk respond to inquiries?',
    a: 'We review all qualified commercial inquiries within 24 business hours. For urgent P0 live indexing emergencies or sudden algorithmic drops, we respond within 4 hours via direct WhatsApp or phone.',
  },
  {
    q: 'Can we execute a mutual NDA before sharing domain details or analytics?',
    a: 'Yes. We routinely execute mutual Non-Disclosure Agreements (NDAs) with founders, operators, and agency partners prior to receiving server logs or Search Console access.',
  },
  {
    q: 'What engagement models do you offer?',
    a: 'We operate primarily on monthly rolling retainers (3-month initial commitment) and fixed-scope architectural audits. We do not lock clients into rigid multi-year agreements; retainers continue based on milestone execution.',
  },
  {
    q: 'Do you work with businesses in highly regulated jurisdictions?',
    a: 'Yes. We specialize in complex, contested verticals across India, UK, Canada, Australia, Malta/EU, and UAE. All search engineering and content strategies adhere strictly to applicable local regulations.',
  },
  {
    q: 'How does communication work during an active engagement?',
    a: 'Clients receive a dedicated Slack or WhatsApp channel with lead technical architects, weekly written sprint updates, bi-weekly video syncs, and real-time GitHub PR tracking.',
  },
  {
    q: 'Do you guarantee #1 rankings or specific traffic numbers?',
    a: 'No. As a matter of professional integrity and search engine compliance (igaming.md §22), we do not guarantee third-party algorithmic positions. We commit to rigorous engineering standards, verified deliverables, and transparent reporting.',
  },
];

const ONBOARDING_STAGES = [
  {
    step: '01',
    title: 'Discovery & NDA Execution',
    desc: 'Mutual NDA signing, access provisioning to Google Search Console and staging environments, and strategic kickoff with your lead architect.',
  },
  {
    step: '02',
    title: '47-Point Baseline Diagnostic',
    desc: 'Deep crawl log audit, Core Web Vitals profiling, schema entity mapping, and commercial keyword gap analysis against top 5 competitors.',
  },
  {
    step: '03',
    title: 'Sprint Execution & Code PRs',
    desc: 'Bi-weekly implementation sprints delivering direct code Pull Requests, schema deployments, topical content hubs, and continuous monitoring.',
  },
];

const SLA_TIERS = [
  {
    severity: 'P0 Critical Escalation',
    responseTime: '< 4 Hours',
    coverage: 'Sudden search de-indexation, Google manual action notices, server crawl traps, or total rendering failures.',
  },
  {
    severity: 'P1 Commercial & Scoping',
    responseTime: '< 24 Hours',
    coverage: 'New project scoping, contract revisions, sprint milestone deliverables, and architectural roadmap updates.',
  },
  {
    severity: 'P2 Standard Technical',
    responseTime: '< 48 Hours',
    coverage: 'Routine keyword ranking inquiries, schema expansion questions, and scheduled monthly reporting delivery.',
  },
];

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
      cta_name: 'contact_submit_proposal',
      cta_location: 'contact_page_form',
    });

    const result = await submitLead({
      formType: 'contact',
      name: formData.name,
      email: formData.email,
      website: formData.website,
      business: formData.company,
      industry: formData.vertical,
      services: formData.services,
      budget: formData.budget,
      message: formData.message,
    });

    setIsSubmitting(false);

    if (result.success) {
      setIsSubmitted(true);
      trackEvent('generate_lead', {
        form_type: 'contact_proposal',
        vertical: formData.vertical || 'unspecified',
        submission_id: result.submissionId,
      });
    } else {
      setSubmissionFeedback({
        status: result.status,
        message: result.message,
      });
    }
  };

  const breadcrumbItems = [{ label: 'Contact Us', path: '/contact' }];

  return (
    <>
      <SEOHead
        title="Contact iGaming Growth — Technical Growth & SEO Architects"
        description="Contact our senior technical SEO and growth engineering desk. Request custom proposals, schedule technical diagnostics, or discuss architecture retainers."
        canonicalPath="/contact"
        jsonLd={[
          buildBreadcrumbSchema(breadcrumbItems),
          buildFAQSchema(CONTACT_FAQS),
        ]}
      />

      {/* ── 1. Hero Section ───────────────────────────────────────── */}
      <section className="relative bg-navy-950 bg-hero-atmosphere text-white py-16 sm:py-20 lg:py-24 overflow-hidden border-b border-navy-800/80">
        <div className="absolute inset-0 bg-dark-mesh opacity-30 pointer-events-none" />
        <div className="absolute top-1/3 -right-20 w-80 sm:w-96 h-80 sm:h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 sm:w-96 h-80 sm:h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          <div className="mb-6 overflow-x-auto py-1">
            <Breadcrumb items={breadcrumbItems} variant="light" />
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-6">
                <MessageSquare className="w-3.5 h-3.5 text-purple-400" />
                <span>Enterprise Growth Desk — Direct Engineer Access</span>
              </div>
              <h1 className="type-h1 text-white mb-5 leading-tight">
                Let's Discuss Your Growth Architecture
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
                Ready to dominate search in competitive verticals? Request a customized proposal or speak directly with our senior growth architects. Response within 24 business hours.
              </p>

              <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-purple-400" />
                  <span>24h SLA Response</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Mutual NDA on Request</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-amber-400" />
                  <span>Direct Technical Leads</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ── 2. Contact Form & Direct Channels ──────────────────────── */}
      <Section variant="white" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            {/* Form */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <FadeIn>
                <div className="bg-white rounded-2xl lg:rounded-3xl border border-slate-200/80 shadow-xl p-6 sm:p-10">
                  <div className="pb-6 mb-6 border-b border-slate-100">
                    <h2 className="font-heading font-bold text-xl sm:text-2xl text-slate-950">
                      Request a Customized Proposal
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">
                      Tell us about your platform, market vertical, and growth goals.
                    </p>
                  </div>

                  {isSubmitted ? (
                    <div className="text-center py-10 space-y-4">
                      <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="font-heading font-bold text-2xl text-slate-900">
                        Proposal Request Received
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
                        Thank you, {formData.name}. Our strategy desk has received your brief. A senior growth architect will review your domain parameters and reply to <strong>{formData.email}</strong> within 24 business hours.
                      </p>
                      <p className="text-xs text-slate-400 pt-2">
                        Urgent inquiry? WhatsApp our growth team directly at +91 93414 36937.
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
                          <label htmlFor="contact_name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                            Your Name *
                          </label>
                          <input
                            id="contact_name"
                            type="text"
                            required
                            placeholder="Alex Mercer"
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
                          <label htmlFor="contact_company" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                            Company / Brand Name
                          </label>
                          <input
                            id="contact_company"
                            type="text"
                            placeholder="Acme Platform"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="contact_email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                            Work Email *
                          </label>
                          <input
                            id="contact_email"
                            type="email"
                            required
                            placeholder="alex@platform.com"
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
                          <label htmlFor="contact_website" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                            Website / Domain URL
                          </label>
                          <input
                            id="contact_website"
                            type="url"
                            placeholder="https://your-domain.com"
                            value={formData.website}
                            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="contact_vertical" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Industry Vertical *
                        </label>
                        <select
                          id="contact_vertical"
                          required
                          value={formData.vertical}
                          onChange={(e) => {
                            setFormData({ ...formData, vertical: e.target.value });
                            if (formErrors.vertical) setFormErrors({ ...formErrors, vertical: undefined });
                          }}
                          className={`w-full px-4 py-3 rounded-xl border text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 transition-colors bg-white ${
                            formErrors.vertical ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                          }`}
                        >
                          <option value="">Select your market vertical</option>
                          <option value="gaming">Online Gaming (iGaming)</option>
                          <option value="casino">Casino Platform</option>
                          <option value="cricket-gaming">Cricket / Fantasy Sports</option>
                          <option value="yono">Yono / Skill Gaming App</option>
                          <option value="color-prediction">Color Prediction Game</option>
                          <option value="color-trading">Color Trading Platform</option>
                          <option value="stock-market">Stock Market / Financial Trading</option>
                          <option value="adult-escort">Adult Industry Directory / Portal (B2B)</option>
                          <option value="other">Other Contested High-Competition Vertical</option>
                        </select>
                        {formErrors.vertical && (
                          <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {formErrors.vertical}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          Disciplines &amp; Services Desired
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {availableServices.map((s) => (
                            <label
                              key={s}
                              className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs cursor-pointer transition-colors ${
                                formData.services.includes(s)
                                  ? 'border-purple-600 bg-purple-50/60 font-semibold text-purple-900'
                                  : 'border-slate-200 bg-slate-50/50 text-slate-700 hover:border-slate-300'
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={formData.services.includes(s)}
                                onChange={() => handleCheckboxToggle(s)}
                                className="rounded border-slate-300 text-purple-600 focus:ring-purple-500"
                              />
                              <span>{s}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="contact_budget" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Monthly Marketing / SEO Budget
                        </label>
                        <select
                          id="contact_budget"
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 transition-colors bg-white"
                        >
                          <option value="">Select budget tier</option>
                          <option value="under_3k">Under $3,000 / month (₹25,000 - ₹2,50,000)</option>
                          <option value="3k_5k">$3,000 – $5,000 / month (₹2,50,000 - ₹4,00,000)</option>
                          <option value="5k_10k">$5,000 – $10,000 / month (₹4,00,000 - ₹8,00,000)</option>
                          <option value="10k_plus">$10,000+ / month (Enterprise Retainer)</option>
                          <option value="custom">One-time Technical Diagnostic Audit</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="contact_message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Tell us about your project &amp; growth goals
                        </label>
                        <textarea
                          id="contact_message"
                          rows={4}
                          placeholder="Current challenges, target keywords, markets, timelines..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
                        className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-purple-600 text-white font-bold text-base hover:bg-purple-700 transition-all duration-200 shadow-md hover:shadow-glow-purple-sm hover:-translate-y-0.5 disabled:opacity-50 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <span>Preparing Your Proposal...</span>
                        ) : (
                          <>
                            <span>Request My Custom Proposal</span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>

                      <p className="text-center text-xs text-slate-400">
                        Mutual NDAs signed on request. All commercial parameters kept strictly confidential.
                      </p>
                    </form>
                  )}
                </div>
              </FadeIn>
            </div>

            {/* Direct Channels */}
            <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
              <FadeIn delay={150}>
                <div>
                  <h3 className="font-heading font-extrabold text-2xl text-slate-950 mb-3">
                    Prefer direct engineering channels?
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Direct access for operators, technical founders, and marketing directors needing fast technical scoping or confidential audits.
                  </p>
                </div>

                <div className="space-y-3">
                  <a
                    href={`mailto:${businessConfig.emails.primary}`}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-purple-200 hover:bg-purple-50/40 transition-all group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-purple-100/80 text-purple-700 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-200 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">Email Us Directly</div>
                      <div className="font-bold text-slate-900 text-sm">{businessConfig.emails.primary}</div>
                      <div className="text-xs text-purple-600">Response within 24 business hours</div>
                    </div>
                  </a>

                  <Link
                    to="/book-call"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-200 hover:bg-emerald-50/40 transition-all group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-emerald-100/80 text-emerald-700 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-200 transition-colors">
                      <Video className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">Video Consultation</div>
                      <div className="font-bold text-slate-900 text-sm">Book 30-Min Strategy Call</div>
                      <div className="text-xs text-emerald-600">Direct architecture &amp; growth session</div>
                    </div>
                  </Link>

                  <a
                    href="https://wa.me/919341436937"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 hover:bg-emerald-50/40 transition-all group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-emerald-100/80 text-[#25D366] flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-200 transition-colors">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">Instant WhatsApp</div>
                      <div className="font-bold text-slate-900 text-sm">+91 93414 36937</div>
                      <div className="text-xs text-emerald-600">Direct response from growth team</div>
                    </div>
                  </a>

                  <Link
                    to="/free-seo-audit"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-amber-200 hover:bg-amber-50/40 transition-all group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-amber-100/80 text-amber-700 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-200 transition-colors">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">Free Technical Diagnostic</div>
                      <div className="font-bold text-slate-900 text-sm">Request Free SEO Audit</div>
                      <div className="text-xs text-amber-600">Manual crawl bottleneck analysis</div>
                    </div>
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 3. Enterprise SLA & Escalation Protocol ─────────────────── */}
      <Section variant="slate" spacing="lg">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge variant="purple" size="sm" className="mb-3">
              Reliability Standards
            </Badge>
            <h2 className="font-heading font-extrabold text-2xl lg:text-3xl text-slate-900 mb-4">
              Enterprise Service Level Agreements (SLA)
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We treat your search infrastructure with the operational urgency of critical production software. Every inquiry follows our deterministic response hierarchy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {SLA_TIERS.map((tier) => (
              <div key={tier.severity} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-purple-700">
                  {tier.severity}
                </div>
                <div className="text-2xl font-extrabold text-slate-900">
                  {tier.responseTime}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {tier.coverage}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── 4. Client Onboarding Lifecycle ─────────────────────────── */}
      <Section variant="white" spacing="lg">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge variant="amber" size="sm" className="mb-3">
              Deployment Roadmap
            </Badge>
            <h2 className="font-heading font-extrabold text-2xl lg:text-3xl text-slate-900 mb-4">
              How We Transition from Proposal to Execution
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              A structured, transparent onboarding cadence ensuring no lost momentum and rapid delivery of first-phase technical quick wins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {ONBOARDING_STAGES.map((st) => (
              <div key={st.step} className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-3 relative">
                <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-800 font-extrabold text-xs flex items-center justify-center">
                  {st.step}
                </div>
                <h3 className="font-heading font-bold text-base text-slate-900">
                  {st.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── 5. Commercial & Engagement FAQs ───────────────────────── */}
      <Section variant="slate" spacing="lg">
        <Container>
          <div className="max-w-2xl mx-auto text-center mb-10">
            <Badge variant="purple" size="sm" className="mb-3">
              Engagement FAQs
            </Badge>
            <h2 className="font-heading font-extrabold text-2xl lg:text-3xl text-slate-900 mb-3">
              Frequently Asked Commercial Questions
            </h2>
            <p className="text-slate-600 text-sm">
              Answers to common billing, retainer structure, and contract terms.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={CONTACT_FAQS.map(f => ({ question: f.q, answer: f.a }))} />
          </div>
        </Container>
      </Section>
    </>
  );
};

export default ContactPage;
