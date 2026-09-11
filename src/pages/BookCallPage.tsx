import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Clock,
  Video,
  CheckCircle2,
  Shield,
  ArrowRight,
  Zap,
  AlertCircle,
  XCircle,
  FileCheck,
  Sparkles,
} from 'lucide-react';
import { SEOHead } from '../seo';
import { buildBreadcrumbSchema, buildFAQSchema } from '../seo/schema';
import { Container, Section, Button, Breadcrumb, Badge, FAQAccordion } from '../components/ui';
import { FadeIn } from '../components/animations';
import { trackEvent } from '../analytics/tracking';
import businessConfig from '../config/business';
import { submitLead } from '../services/leadSubmission';

interface BookingFormData {
  name: string;
  email: string;
  website: string;
  vertical: string;
  growthGoal: string;
  honeypot: string;
}

const CALL_FAQS = [
  {
    q: 'Who will I be speaking with on this strategy call?',
    a: 'You will speak directly with a senior growth architect and technical SEO engineer with direct operational experience in high-competition verticals. We do not use junior account representatives or commissioned sales closers.',
  },
  {
    q: 'Is there any commercial obligation or sales pressure?',
    a: 'None. This session is designed as a technical and strategic diagnostic. We review your domain architecture, identify competitor blind spots, and present an actionable organic roadmap. If there is mutual alignment for a formal engagement, we can discuss scopes; otherwise, the recommendations are yours to execute independently.',
  },
  {
    q: 'What video platform is used for the strategy session?',
    a: 'We host sessions via Google Meet or Zoom. A direct calendar invitation with the meeting link is delivered immediately following confirmed booking.',
  },
  {
    q: 'Can multiple team members from my company join the call?',
    a: 'Yes. We encourage technical leads, CTOs, and marketing directors to participate so we can discuss both engineering infrastructure and commercial growth objectives simultaneously.',
  },
  {
    q: 'How should our team prepare for this session?',
    a: 'Having your primary domain URL, top 3 competitor platforms, and approximate target markets in mind is sufficient. If you have specific analytics or Search Console data you wish to screen-share, you may do so securely during the call.',
  },
  {
    q: 'What happens if we need to reschedule our session?',
    a: 'Every calendar invitation includes a one-click rescheduling link allowing you to select an alternative slot with at least 12 hours advance notice.',
  },
];

const PREPARATION_STEPS = [
  {
    title: '1. Identify Your Top 3 Contested Competitors',
    desc: 'Name the competitor domains that consistently outrank you for primary category and commercial query clusters.',
  },
  {
    title: '2. Define Your Core Conversion Bottleneck',
    desc: 'Whether it is crawl indexation stalls, slow Core Web Vitals, or low conversion rates from organic search visitors.',
  },
  {
    title: '3. Prepare Architectural Questions',
    desc: 'Bring your technical queries regarding Next.js/React rendering, faceted navigation canonicals, or regulatory policy boundaries.',
  },
];

const QUALIFICATION_CRITERIA = [
  {
    type: 'ideal',
    title: 'Who This Advisory Session Is For',
    points: [
      'Founders, CTOs, and Growth Heads of gaming, casino, or financial platforms',
      'Businesses generating or targeting >$10k/month in digital revenue',
      'Teams committed to sustainable, 100% white-hat organic search equity',
      'Platforms experiencing crawl stalls or recent algorithmic update drops',
    ],
  },
  {
    type: 'not-ideal',
    title: 'Who This Session Is NOT For',
    points: [
      'Affiliates looking for private PBN link networks or black-hat cloaking',
      'Operators expecting guaranteed #1 rankings within 14 days',
      'Early-stage concept projects without an active domain or development roadmap',
      'Marketers unwilling to implement necessary code-level technical fixes',
    ],
  },
];

export const BookCallPage: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    website: '',
    vertical: '',
    growthGoal: '',
    honeypot: '',
  });

  const [formErrors, setFormErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionFeedback, setSubmissionFeedback] = useState<{
    status: 'submitted' | 'configuration_pending' | 'network_error' | 'validation_error';
    message: string;
  } | null>(null);
  const formStartedRef = React.useRef(false);

  // Track form view on initial mount
  React.useEffect(() => {
    trackEvent('form_view', { form_type: 'book_call' });
  }, []);

  const handleFieldInteraction = () => {
    if (!formStartedRef.current) {
      formStartedRef.current = true;
      trackEvent('form_start', { form_type: 'book_call' });
    }
  };

  const validate = (): boolean => {
    const errors: Partial<Record<keyof BookingFormData, string>> = {};

    if (!formData.name.trim()) {
      errors.name = 'Please enter your full name.';
    }

    if (!formData.email.trim()) {
      errors.email = 'Please enter your work email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Please enter a valid work email address.';
    }

    if (!formData.website.trim()) {
      errors.website = 'Please enter your website URL.';
    } else if (!/^https?:\/\/.+/i.test(formData.website.trim())) {
      errors.website = 'Please enter a valid URL starting with http:// or https://';
    }

    if (!formData.vertical) {
      errors.vertical = 'Please select your industry vertical.';
    }

    if (!formData.growthGoal.trim()) {
      errors.growthGoal = 'Please summarize your primary growth challenge or goal.';
    }

    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      trackEvent('form_error', {
        form_type: 'book_call',
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
      cta_name: 'book_call_submit',
      cta_location: 'book_call_form',
    });

    const result = await submitLead({
      formType: 'book_call',
      name: formData.name,
      email: formData.email,
      website: formData.website,
      vertical: formData.vertical,
      growthGoal: formData.growthGoal,
    });

    setIsSubmitting(false);

    if (result.success) {
      setIsSubmitted(true);
      trackEvent('generate_lead', {
        form_type: 'book_call',
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

  const breadcrumbItems = [{ label: 'Book a Strategy Call', path: '/book-call' }];

  const agendaItems = [
    {
      time: '10 mins',
      title: 'Current Platform & Crawl Audit',
      desc: 'Rapid diagnostic of your website architecture, indexing leaks, and Core Web Vitals standing.',
    },
    {
      time: '10 mins',
      title: 'Competitor Gap & Keyword Landscape',
      desc: 'Identifying high-intent search terms your competitors are capturing and where low-hanging fruit exists.',
    },
    {
      time: '10 mins',
      title: 'Custom 90-Day Organic Roadmap',
      desc: 'Concrete sequence of technical and content actions tailored to your vertical and growth goals.',
    },
  ];

  return (
    <div className="bg-model3-base text-white selection:bg-amber-400 selection:text-black font-sans antialiased overflow-x-hidden">
      <SEOHead
        title="Book a Strategy Call — iGaming Growth Advisory Session"
        description="Schedule a private 30-minute growth architecture review with a senior agency strategist. Review your domain, identify competitor blind spots, and plan acquisition."
        canonicalPath="/book-call"
        jsonLd={[
          buildBreadcrumbSchema(breadcrumbItems),
          buildFAQSchema(CALL_FAQS),
        ]}
      />

      {/* ── 1. Hero Section ───────────────────────────────────────── */}
      <section className="relative min-h-[60vh] pt-24 pb-16 lg:pt-32 lg:pb-20 bg-model3-base overflow-hidden flex items-center border-b border-white/10">
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] rounded-full bg-purple-900/15 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[450px] h-[350px] rounded-full bg-amber-500/10 blur-[130px] pointer-events-none" />

        <Container className="relative z-10">
          <div className="mb-6 overflow-x-auto py-1">
            <Breadcrumb items={breadcrumbItems} variant="light" />
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/15 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-6">
                <Video className="w-3.5 h-3.5 text-amber-400" />
                <span>30-Minute Growth Advisory Session</span>
              </div>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white font-heading leading-[1.08] mb-5">
                Private Strategy Session with a <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
                  Senior Growth Architect
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto">
                No junior sales pitches. You will speak directly with a senior technical SEO engineer and digital growth strategist who will review your domain and outline a realistic acquisition roadmap.
              </p>

              <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>30 Minutes via Google Meet / Zoom</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  <span>Strict Confidentiality Guaranteed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>No Sales Pressure or Obligation</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ── 2. Booking Form & Agenda Grid ─────────────────────────── */}
      <Section variant="white" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            {/* Left: Agenda & Call Value */}
            <div className="lg:col-span-5 space-y-6 order-1">
              <FadeIn>
                <div>
                  <h2 className="font-heading font-extrabold text-2xl text-white mb-3">
                    What We Cover in 30 Minutes
                  </h2>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Our strategy sessions are focused entirely on diagnosing growth bottlenecks and modeling high-leverage commercial actions.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  {agendaItems.map((item, idx) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-4 p-4 rounded-2xl bg-surface-card border border-white/10 hover:border-amber-400/40 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 font-bold text-xs flex items-center justify-center flex-shrink-0">
                        0{idx + 1}
                      </div>
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <h3 className="font-heading font-bold text-sm text-white">
                            {item.title}
                          </h3>
                          <span className="text-[10px] font-semibold text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                            {item.time}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Direct email and WhatsApp note */}
                <div className="p-5 rounded-2xl bg-[#080808] text-white border border-white/10 shadow-card-dark space-y-3">
                  <div>
                    <h4 className="font-heading font-bold text-sm text-white mb-1">
                      Need Immediate Scoping?
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      For urgent launch deadlines or sudden algorithmic drops, reach our desk directly:
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 pt-1">
                    <a
                      href="https://wa.me/917654928455"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>WhatsApp: +91 76549 28455</span>
                    </a>
                    <a
                      href={`mailto:${businessConfig.emails.business}`}
                      className="text-xs font-semibold text-amber-400 hover:text-amber-300 underline transition-colors"
                    >
                      {businessConfig.emails.business}
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right: Booking Intake Form */}
            <div className="lg:col-span-7 order-2">
              <FadeIn delay={150}>
                <div className="bg-surface-card rounded-2xl lg:rounded-3xl border border-white/10 shadow-2xl backdrop-blur-md p-4 sm:p-8 lg:p-10">
                  {isSubmitted ? (
                    <div className="text-center py-10 space-y-4">
                      <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-inner">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="font-heading font-bold text-2xl text-white">
                        Session Request Confirmed
                      </h3>
                      <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                        Thank you, {formData.name}. Our strategy desk has received your details for <strong>{formData.website}</strong>. A calendar invitation and session link will be delivered to <strong>{formData.email}</strong> within 24 business hours.
                      </p>
                      <div className="pt-4">
                        <Button
                          to="/"
                          variant="outline"
                          size="sm"
                          className="border-white/10 text-white hover:bg-white/5"
                        >
                          Return to Homepage
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="mb-6 pb-6 border-b border-white/10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/15 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-2">
                          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                          <span>Direct Senior Advisory</span>
                        </div>
                        <h2 className="font-heading font-bold text-xl sm:text-2xl text-white">
                          Schedule Your Discovery Call
                        </h2>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                          Please provide your technical parameters so we can prepare data before the call.
                        </p>
                      </div>

                      <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit} onFocusCapture={handleFieldInteraction} noValidate>
                        {/* Anti-spam honeypot */}
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
                          <label htmlFor="call_website_hp">Leave empty</label>
                          <input
                            type="text"
                            id="call_website_hp"
                            name="call_website_hp"
                            tabIndex={-1}
                            value={formData.honeypot}
                            onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                            autoComplete="off"
                          />
                        </div>

                        {/* Name + Email */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label
                              htmlFor="call_name"
                              className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1"
                            >
                              Your Name *
                            </label>
                            <input
                              id="call_name"
                              type="text"
                              required
                              placeholder="Alex Mercer"
                              value={formData.name}
                              onChange={(e) => {
                                setFormData({ ...formData, name: e.target.value });
                                if (formErrors.name) setFormErrors({ ...formErrors, name: undefined });
                              }}
                              className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-white bg-navy-950/70 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-colors ${
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
                            <label
                              htmlFor="call_email"
                              className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1"
                            >
                              Work Email *
                            </label>
                            <input
                              id="call_email"
                              type="email"
                              required
                              placeholder="alex@gamingbrand.com"
                              value={formData.email}
                              onChange={(e) => {
                                setFormData({ ...formData, email: e.target.value });
                                if (formErrors.email) setFormErrors({ ...formErrors, email: undefined });
                              }}
                              className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-white bg-navy-950/70 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-colors ${
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

                        {/* Website URL */}
                        <div>
                          <label
                            htmlFor="call_website"
                            className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1"
                          >
                            Website or Platform URL *
                          </label>
                          <input
                            id="call_website"
                            type="url"
                            required
                            placeholder="https://your-platform.com"
                            value={formData.website}
                            onChange={(e) => {
                              setFormData({ ...formData, website: e.target.value });
                              if (formErrors.website) setFormErrors({ ...formErrors, website: undefined });
                            }}
                            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-white bg-navy-950/70 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-colors ${
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

                        {/* Vertical Selection */}
                        <div>
                          <label
                            htmlFor="call_vertical"
                            className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1"
                          >
                            Industry Vertical *
                          </label>
                          <select
                            id="call_vertical"
                            required
                            value={formData.vertical}
                            onChange={(e) => {
                              setFormData({ ...formData, vertical: e.target.value });
                              if (formErrors.vertical) setFormErrors({ ...formErrors, vertical: undefined });
                            }}
                            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-200 bg-navy-950/90 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-colors ${
                              formErrors.vertical ? 'border-rose-400 bg-rose-500/10' : 'border-white/10'
                            }`}
                          >
                            <option value="">Select your market vertical</option>
                            <option value="gaming">Online Gaming Platform</option>
                            <option value="casino">Online Casino Operator</option>
                            <option value="yono">YONO / Skill Gaming App</option>
                            <option value="cricket-gaming">Cricket Gaming / Fantasy Sports</option>
                            <option value="color-prediction">Color Prediction Game</option>
                            <option value="color-trading">Color Trading Platform</option>
                            <option value="stock-market">Stock Market / Financial Portal</option>
                            <option value="betting-exchange">Lotus365 / Betting Exchange / Cricket ID</option>
                            <option value="other">Other High-Competition Digital Business</option>
                          </select>
                          {formErrors.vertical && (
                            <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />
                              {formErrors.vertical}
                            </p>
                          )}
                        </div>

                        {/* Growth Goal */}
                        <div>
                          <label
                            htmlFor="call_goal"
                            className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1"
                          >
                            Primary Growth Goal or SEO Challenge *
                          </label>
                          <textarea
                            id="call_goal"
                            rows={3}
                            required
                            placeholder="e.g. Lost 40% organic traffic after latest Google core update, or scaling customer acquisition for a new gaming product launch."
                            value={formData.growthGoal}
                            onChange={(e) => {
                              setFormData({ ...formData, growthGoal: e.target.value });
                              if (formErrors.growthGoal) setFormErrors({ ...formErrors, growthGoal: undefined });
                            }}
                            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-white bg-navy-950/70 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-colors resize-none ${
                              formErrors.growthGoal ? 'border-rose-400 bg-rose-500/10' : 'border-white/10'
                            }`}
                          />
                          {formErrors.growthGoal && (
                            <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />
                              {formErrors.growthGoal}
                            </p>
                          )}
                        </div>

                        {submissionFeedback && (
                          <div
                            role="alert"
                            className={`p-4 rounded-xl text-xs leading-relaxed border ${
                              submissionFeedback.status === 'configuration_pending'
                                ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                                : 'bg-rose-500/10 text-rose-300 border-rose-500/30'
                            }`}
                          >
                            <p className="font-semibold mb-1">
                              {submissionFeedback.status === 'configuration_pending'
                                ? 'Online Booking Endpoint Pending Deployment'
                                : 'Booking Notice'}
                            </p>
                            <p className="mb-2 text-slate-300">{submissionFeedback.message}</p>
                            <p>
                              Direct Work Email:{' '}
                              <a
                                href="mailto:hello@igameing.growthservice.in?subject=Advisory%20Session%20Booking"
                                className="underline font-bold text-purple-400 hover:text-purple-300"
                              >
                                hello@igameing.growthservice.in
                              </a>
                            </p>
                          </div>
                        )}

                        {/* Submit Button */}
                        <div className="pt-2">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 font-heading font-extrabold text-sm shadow-lg shadow-amber-400/20 transition-all hover:-translate-y-0.5 active:scale-[0.98] disabled:opacity-50 cursor-pointer"
                          >
                            {isSubmitting ? (
                              <span>Confirming Session Slot...</span>
                            ) : (
                              <>
                                <span>Book 30-Minute Advisory Session</span>
                                <ArrowRight className="w-4 h-4" />
                              </>
                            )}
                          </button>
                        </div>
                      </form>
                    </div>
                  )}
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 3. Preparation & Readiness Checklist ──────────────────── */}
      <Section variant="slate" spacing="lg">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge variant="purple" size="sm" className="mb-3">
              Session Maximization
            </Badge>
            <h2 className="font-heading font-extrabold text-2xl lg:text-3xl text-white mb-4">
              How to Prepare for Your 30-Minute Advisory Call
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              We respect your time. Preparing these 3 items beforehand ensures we dive straight into high-leverage architectural and strategic analysis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {PREPARATION_STEPS.map((step) => (
              <div key={step.title} className="bg-navy-900/80 rounded-2xl p-6 border border-white/10 shadow-lg space-y-3">
                <div className="w-8 h-8 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 font-bold text-xs flex items-center justify-center">
                  <FileCheck className="w-4 h-4" />
                </div>
                <h3 className="font-heading font-bold text-base text-white">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── 4. Qualification Matrix (Who This Call Is For) ───────── */}
      <Section variant="white" spacing="lg">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge variant="amber" size="sm" className="mb-3">
              Mutual Fit Criteria
            </Badge>
            <h2 className="font-heading font-extrabold text-2xl lg:text-3xl text-white mb-4">
              Is This Advisory Session Right for You?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              We maintain high advisory standards and focus our engineering resources exclusively where we can deliver compounding commercial impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {QUALIFICATION_CRITERIA.map((crit) => (
              <div
                key={crit.title}
                className={`rounded-3xl p-6 sm:p-8 border shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 ${
                  crit.type === 'ideal'
                    ? 'bg-emerald-500/10 border-emerald-500/30'
                    : 'bg-rose-500/10 border-rose-500/30'
                }`}
              >
                <div className="flex items-center gap-2 mb-4">
                  {crit.type === 'ideal' ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  ) : (
                    <XCircle className="w-5 h-5 text-rose-400 flex-shrink-0" />
                  )}
                  <h3 className="font-heading font-bold text-base text-white">
                    {crit.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {crit.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                      <span
                        className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 ${
                          crit.type === 'ideal' ? 'bg-emerald-400' : 'bg-rose-400'
                        }`}
                      />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── 5. Strategy Call FAQs ─────────────────────────────────── */}
      <Section variant="slate" spacing="lg">
        <Container>
          <div className="max-w-2xl mx-auto text-center mb-10">
            <Badge variant="purple" size="sm" className="mb-3">
              Booking Questions
            </Badge>
            <h2 className="font-heading font-extrabold text-2xl lg:text-3xl text-white mb-3">
              Frequently Asked Questions: Strategy Calls
            </h2>
            <p className="text-slate-400 text-sm">
              Answers to common scheduling, format, and confidentiality questions.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={CALL_FAQS.map(f => ({ question: f.q, answer: f.a }))} />

            {/* Contextual Internal Links */}
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <Link
                to="/services/website-development"
                className="p-4 rounded-xl bg-model3-surface/80 border border-white/10 hover:border-cyan-400/40 transition-colors group"
              >
                <div className="text-[10px] font-mono text-cyan-400 uppercase mb-1">Architecture</div>
                <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                  <span>Web Build (₹15K)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
              <Link
                to="/services/seo"
                className="p-4 rounded-xl bg-model3-surface/80 border border-white/10 hover:border-amber-400/40 transition-colors group"
              >
                <div className="text-[10px] font-mono text-amber-400 uppercase mb-1">Search Growth</div>
                <div className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors flex items-center justify-between">
                  <span>SEO Dominance (₹35K)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
              <Link
                to="/free-seo-audit"
                className="p-4 rounded-xl bg-model3-surface/80 border border-white/10 hover:border-emerald-400/40 transition-colors group"
              >
                <div className="text-[10px] font-mono text-emerald-400 uppercase mb-1">Diagnostic</div>
                <div className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors flex items-center justify-between">
                  <span>Claim Free Audit</span>
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

export default BookCallPage;
