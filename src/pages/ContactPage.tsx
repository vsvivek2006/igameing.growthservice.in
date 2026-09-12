import React, { useState, useRef, useEffect } from 'react';
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
  Sparkles,
  MapPin,
} from 'lucide-react';
import { SEOHead } from '../seo';
import { buildBreadcrumbSchema, buildFAQSchema } from '../seo/schema';
import { Container, Breadcrumb, FAQAccordion } from '../components/ui';
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
    a: 'No. As a matter of professional integrity and search engine compliance, we do not guarantee third-party algorithmic positions. We commit to rigorous engineering standards, verified deliverables, and transparent reporting.',
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
  const primaryPhone = businessConfig.phone?.primary || businessConfig.contact?.phone || '+91 76549 28455';
  const whatsappNumber = (businessConfig.phone?.whatsapp || businessConfig.contact?.whatsapp || '917654928455').replace(/[^0-9]/g, '');

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
  const formStartedRef = useRef(false);

  useEffect(() => {
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
    'Website & PWA Development',
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
    <div className="bg-model3-base text-white selection:bg-amber-400 selection:text-black font-sans antialiased overflow-x-hidden">
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
      <section className="relative min-h-[60vh] pt-28 pb-16 lg:pt-36 lg:pb-20 bg-model3-base overflow-hidden flex items-center border-b border-white/10">
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] rounded-full bg-purple-900/15 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[450px] h-[350px] rounded-full bg-amber-500/10 blur-[130px] pointer-events-none" />
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

          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/15 text-xs font-bold uppercase tracking-widest text-slate-300 mb-6">
              <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
              <span>Enterprise Growth Desk — Direct Engineer Access</span>
            </div>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white font-heading leading-[1.08] mb-6">
              Let&apos;s Discuss Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
                Growth Architecture
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8 font-medium">
              Ready to dominate search and scale acquisition in competitive verticals? Request a customized proposal or speak directly with our senior growth architects.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400" />
                <span className="text-slate-300">&lt;24h SLA Response</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-slate-300">Mutual NDA Guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-purple-400" />
                <span className="text-slate-300">Direct Senior Architect Access</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. Contact Form & Direct Channels ──────────────────────── */}
      <section className="py-20 lg:py-28 bg-model3-surface/70 border-b border-white/10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            
            {/* Form */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="bg-model3-base/95 rounded-3xl border border-white/10 shadow-2xl p-4 sm:p-8 lg:p-10 backdrop-blur-xl">
                <div className="pb-6 mb-6 border-b border-white/10">
                  <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
                    Request a Customized Platform Proposal
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Tell us about your platform, current tech stack, and growth goals.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center mx-auto shadow-inner border border-emerald-500/20">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-white">
                      Proposal Request Received
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
                      Thank you, {formData.name}. Our strategy desk has received your brief. A senior growth architect will review your domain parameters and reply to <strong className="text-amber-400">{formData.email}</strong> within 24 business hours.
                    </p>
                    <p className="text-xs text-slate-400 pt-2">
                      Urgent inquiry? WhatsApp our growth team directly at {primaryPhone}.
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
                        <label htmlFor="contact_name" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 font-mono">
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
                          className={`w-full px-4 py-3 rounded-xl border bg-model3-surface text-white placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/30 focus:border-amber-400 transition-colors ${
                            formErrors.name ? 'border-rose-500 bg-rose-950/20' : 'border-white/10'
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
                        <label htmlFor="contact_company" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 font-mono">
                          Company / Brand Name
                        </label>
                        <input
                          id="contact_company"
                          type="text"
                          placeholder="Acme Platform"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-white/10 bg-model3-surface text-white placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/30 focus:border-amber-400 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact_email" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 font-mono">
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
                          className={`w-full px-4 py-3 rounded-xl border bg-model3-surface text-white placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/30 focus:border-amber-400 transition-colors ${
                            formErrors.email ? 'border-rose-500 bg-rose-950/20' : 'border-white/10'
                          }`}
                        />
                        {formErrors.email && (
                          <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {formErrors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="contact_website" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 font-mono">
                          Website / Domain URL
                        </label>
                        <input
                          id="contact_website"
                          type="url"
                          placeholder="https://your-domain.com"
                          value={formData.website}
                          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-white/10 bg-model3-surface text-white placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/30 focus:border-amber-400 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact_vertical" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 font-mono">
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
                        className={`w-full px-4 py-3 rounded-xl border text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/30 focus:border-amber-400 transition-colors bg-model3-surface ${
                          formErrors.vertical ? 'border-rose-500 bg-rose-950/20' : 'border-white/10'
                        }`}
                      >
                        <option value="" className="bg-slate-900 text-slate-400">Select your market vertical</option>
                        <option value="gaming" className="bg-slate-900 text-white">Online Gaming (iGaming)</option>
                        <option value="casino" className="bg-slate-900 text-white">Casino Platform</option>
                        <option value="cricket-gaming" className="bg-slate-900 text-white">Cricket / Fantasy Sports</option>
                        <option value="yono" className="bg-slate-900 text-white">Yono / Skill Gaming App</option>
                        <option value="color-prediction" className="bg-slate-900 text-white">Color Prediction Game</option>
                        <option value="color-trading" className="bg-slate-900 text-white">Color Trading Platform</option>
                        <option value="stock-market" className="bg-slate-900 text-white">Stock Market / Financial Trading</option>
                        <option value="betting-exchange" className="bg-slate-900 text-white">Lotus365 / Betting Exchange / Cricket ID</option>
                        <option value="other" className="bg-slate-900 text-white">Other Contested High-Competition Vertical</option>
                      </select>
                      {formErrors.vertical && (
                        <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {formErrors.vertical}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 font-mono">
                        Disciplines &amp; Services Desired
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {availableServices.map((s) => (
                          <label
                            key={s}
                            className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs cursor-pointer transition-colors ${
                              formData.services.includes(s)
                                ? 'border-amber-400 bg-amber-400/15 font-semibold text-amber-300'
                                : 'border-white/10 bg-model3-surface text-slate-300 hover:border-amber-400/30'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={formData.services.includes(s)}
                              onChange={() => handleCheckboxToggle(s)}
                              className="rounded border-white/20 text-amber-400 focus:ring-amber-400 bg-slate-900"
                            />
                            <span>{s}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact_budget" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 font-mono">
                        Monthly Marketing / Engineering Budget
                      </label>
                      <select
                        id="contact_budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-white/10 text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/30 focus:border-amber-400 transition-colors bg-model3-surface"
                      >
                        <option value="" className="bg-slate-900 text-slate-400">Select package or budget</option>
                        <option value="web_20k" className="bg-slate-900 text-white">Starting ₹20,000 (Website &amp; PWA Development)</option>
                        <option value="seo_35k" className="bg-slate-900 text-white">Starting ₹35,000 / month (SEO Monthly Sprint)</option>
                        <option value="seo_1lakh" className="bg-slate-900 text-white">₹1,00,000 One-Time (SEO 3-Month Rank Sprint)</option>
                        <option value="meta_35k" className="bg-slate-900 text-white">₹35,000 / month (Meta Ads - FB &amp; IG)</option>
                        <option value="meta_google_50k" className="bg-slate-900 text-white">₹50,000 / month (Meta + Google Ads Dual Suite)</option>
                        <option value="enterprise" className="bg-slate-900 text-white">Custom / Enterprise Dedicated Squad</option>
                        <option value="audit" className="bg-slate-900 text-white">Free Code-Level Technical SEO Audit</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contact_message" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 font-mono">
                        Tell us about your project &amp; growth goals
                      </label>
                      <textarea
                        id="contact_message"
                        rows={4}
                        placeholder="Current challenges, competitor targets, traffic goals, timelines..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-model3-surface text-white text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400/30 focus:border-amber-400 transition-colors resize-none"
                      />
                    </div>

                    {submissionFeedback && (
                      <div
                        className={`p-4 rounded-xl text-xs leading-relaxed ${
                          submissionFeedback.status === 'configuration_pending'
                            ? 'bg-amber-950/40 border border-amber-500/40 text-amber-200'
                            : 'bg-rose-950/40 border border-rose-500/40 text-rose-200'
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
                            href={`mailto:${businessConfig.emails.primary}?subject=Growth%20Proposal%20Inquiry`}
                            className="underline font-bold text-amber-400 hover:text-amber-300"
                          >
                            {businessConfig.emails.primary}
                          </a>
                        </p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 hover:from-amber-300 hover:to-yellow-300 text-slate-950 font-black text-xs uppercase tracking-wider shadow-xl shadow-amber-400/20 active:scale-[0.98] transition-all duration-200 disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Preparing Your Proposal...</span>
                      ) : (
                        <>
                          <span>Request My Custom Proposal</span>
                          <ArrowRight className="w-4 h-4 text-slate-950" />
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-slate-400">
                      Mutual NDAs signed on request. All commercial parameters kept strictly confidential.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Direct Channels */}
            <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
              <div>
                <h3 className="font-heading font-extrabold text-2xl text-white mb-3">
                  Prefer direct engineering channels?
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Direct access for operators, technical founders, and marketing directors needing fast technical scoping or confidential audits.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href={`mailto:${businessConfig.emails.primary}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-model3-base/90 border border-white/10 shadow-lg hover:border-amber-400/40 transition-all group hover:-translate-y-0.5"
                >
                  <div className="w-11 h-11 rounded-xl bg-purple-500/15 text-purple-400 border border-purple-500/25 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider font-mono">Email Us Directly</div>
                    <div className="font-bold text-white text-sm">{businessConfig.emails.primary}</div>
                    <div className="text-xs text-purple-400">Response within 24 business hours</div>
                  </div>
                </a>

                <Link
                  to="/book-call"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-model3-base/90 border border-white/10 shadow-lg hover:border-amber-400/40 transition-all group hover:-translate-y-0.5"
                >
                  <div className="w-11 h-11 rounded-xl bg-cyan-500/15 text-cyan-400 border border-cyan-500/25 flex items-center justify-center shrink-0">
                    <Video className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider font-mono">Video Consultation</div>
                    <div className="font-bold text-white text-sm">Book 30-Min Strategy Call</div>
                    <div className="text-xs text-cyan-400">Direct architecture &amp; growth session</div>
                  </div>
                </Link>

                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-model3-base/90 border border-white/10 shadow-lg hover:border-emerald-400/40 transition-all group hover:-translate-y-0.5"
                >
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/15 text-[#25D366] border border-emerald-500/25 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider font-mono">Instant WhatsApp</div>
                    <div className="font-bold text-white text-sm">{primaryPhone}</div>
                    <div className="text-xs text-emerald-400">Direct response from growth team</div>
                  </div>
                </a>

                <Link
                  to="/free-seo-audit"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-model3-base/90 border border-white/10 shadow-lg hover:border-amber-400/40 transition-all group hover:-translate-y-0.5"
                >
                  <div className="w-11 h-11 rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/25 flex items-center justify-center shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider font-mono">Complimentary Audit</div>
                    <div className="font-bold text-white text-sm">Request Free Technical Audit</div>
                    <div className="text-xs text-amber-400">Manual codebase &amp; crawl bottleneck analysis</div>
                  </div>
                </Link>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-model3-base/90 border border-white/10 shadow-lg">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/25 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider font-mono">Agency Headquarters</div>
                    <div className="font-bold text-white text-sm">Kathmandu, Nepal</div>
                    <div className="text-xs text-slate-400">
                      Serving Global Regulated Operators
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ── 3. Enterprise SLA & Escalation Protocol ─────────────────── */}
      <section className="py-20 lg:py-28 bg-model3-base border-b border-white/10">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/15 text-xs font-bold uppercase tracking-widest text-slate-300 mb-3">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Reliability Standards</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl lg:text-4xl text-white mb-4">
              Enterprise Service Level Agreements (SLA)
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              We treat your search and platform infrastructure with the operational urgency of critical production systems. Every inquiry follows our deterministic response hierarchy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {SLA_TIERS.map((tier) => (
              <div key={tier.severity} className="bg-model3-surface/80 rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-amber-400/40 transition-all duration-300 hover:-translate-y-1 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-400 font-mono">
                  {tier.severity}
                </div>
                <div className="text-2xl font-extrabold text-white font-heading">
                  {tier.responseTime}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {tier.coverage}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 4. Client Onboarding Lifecycle ─────────────────────────── */}
      <section className="py-20 lg:py-28 bg-model3-panel border-b border-white/10">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/15 text-xs font-bold uppercase tracking-widest text-slate-300 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Deployment Roadmap</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl lg:text-4xl text-white mb-4">
              How We Transition from Proposal to Execution
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              A structured, transparent onboarding cadence ensuring no lost momentum and rapid delivery of first-phase technical wins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {ONBOARDING_STAGES.map((st) => (
              <div key={st.step} className="bg-model3-surface/80 rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-amber-400/40 transition-all duration-300 hover:-translate-y-1 space-y-3 relative">
                <div className="w-8 h-8 rounded-xl bg-amber-400/10 text-amber-300 border border-amber-400/30 font-extrabold text-xs flex items-center justify-center font-mono">
                  {st.step}
                </div>
                <h3 className="font-heading font-bold text-base text-white">
                  {st.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 5. Commercial & Engagement FAQs ───────────────────────── */}
      <section className="py-20 lg:py-28 bg-model3-base">
        <Container>
          <div className="max-w-2xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/15 text-xs font-bold uppercase tracking-widest text-slate-300 mb-3">
              <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
              <span>Engagement FAQs</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl lg:text-4xl text-white mb-3">
              Frequently Asked Commercial Questions
            </h2>
            <p className="text-slate-300 text-sm">
              Answers to common billing, retainer structure, and contract terms.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={CONTACT_FAQS.map(f => ({ question: f.q, answer: f.a }))} />
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ContactPage;
