import React, { useState } from 'react';
import { Clock, Video, CheckCircle2, Shield, ArrowRight, Zap, AlertCircle } from 'lucide-react';
import { SEOHead } from '../seo';
import { Container, Section, Button, Breadcrumb } from '../components/ui';
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

    // Bot trap check
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
      // Fire generate_lead strictly after confirmed successful submission
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

  const breadcrumbItems = [
    { label: 'Book a Call' },
  ];

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
    <>
      <SEOHead
        title="Book a Strategy Call — iGaming Growth Advisory Session"
        description="Schedule a private 30-minute growth architecture review with a senior agency strategist. Review your domain, identify competitor blind spots, and plan acquisition."
        canonicalPath="/book-call"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white py-20 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[500px] h-[400px] rounded-full bg-purple-600/10 blur-[100px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] rounded-full bg-violet-600/10 blur-[80px]" />
        </div>

        <Container className="relative">
          <Breadcrumb items={breadcrumbItems} className="mb-6 text-slate-400" />

          <div className="max-w-3xl">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider mb-6">
                <Video className="w-3.5 h-3.5 text-purple-400" />
                <span>30-Minute Growth Advisory Session</span>
              </div>

              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-white mb-5 leading-tight">
                Schedule a Private Strategy Session with a Senior Growth Architect
              </h1>

              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                No junior sales pitches. You will speak directly with a senior SEO engineer and digital growth strategist who will review your domain and outline a realistic acquisition roadmap.
              </p>

              <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-purple-400" />
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

      {/* Main Booking Section */}
      <Section variant="white" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Agenda & Call Value */}
            <div className="lg:col-span-5 space-y-8">
              <FadeIn>
                <div>
                  <h2 className="font-heading font-bold text-2xl text-slate-900 mb-3">
                    What We Cover in 30 Minutes
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Our strategy sessions are focused entirely on diagnosing growth bottlenecks and modeling high-leverage commercial actions.
                  </p>
                </div>

                <div className="space-y-4 pt-4">
                  {agendaItems.map((item, idx) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200"
                    >
                      <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-700 font-bold text-xs flex items-center justify-center flex-shrink-0">
                        0{idx + 1}
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-heading font-bold text-sm text-slate-900">
                            {item.title}
                          </h3>
                          <span className="text-[11px] font-semibold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-200">
                            {item.time}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Direct email note */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-purple-950 text-white border border-slate-800">
                  <h4 className="font-heading font-bold text-sm text-white mb-1">
                    Need Immediate Advice?
                  </h4>
                  <p className="text-xs text-slate-300 mb-3 leading-relaxed">
                    For active regulatory situations or urgent launch deadlines, contact our engineering desk directly:
                  </p>
                  <a
                    href={`mailto:${businessConfig.emails.business}`}
                    className="text-xs font-semibold text-purple-300 hover:text-purple-200 underline transition-colors"
                  >
                    {businessConfig.emails.business}
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Right: Booking Intake Form */}
            <div className="lg:col-span-7">
              <FadeIn delay={150}>
                <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 sm:p-10">
                  {isSubmitted ? (
                    <div className="text-center py-10 space-y-4">
                      <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="font-heading font-bold text-2xl text-slate-900">
                        Session Request Confirmed
                      </h3>
                      <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                        Thank you, {formData.name}. Our strategy desk has received your details for <strong>{formData.website}</strong>. A calendar invite and session link will be delivered to <strong>{formData.email}</strong> within 24 business hours.
                      </p>
                      <div className="pt-4">
                        <Button to="/resources" variant="outline" size="md">
                          Explore Engineering Guides While You Wait
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="mb-6">
                        <h2 className="font-heading font-bold text-2xl text-slate-900 mb-2">
                          Book Your Advisory Session
                        </h2>
                        <p className="text-xs text-slate-500">
                          Complete the brief questionnaire below so our strategist can review your site metrics before the call.
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} onFocusCapture={handleFieldInteraction} className="space-y-4" noValidate>
                        {/* Hidden Honeypot Bot Trap */}
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
                          <label htmlFor="booking_hp">Do not fill this field</label>
                          <input
                            type="text"
                            id="booking_hp"
                            name="booking_hp"
                            tabIndex={-1}
                            value={formData.honeypot}
                            onChange={(e) =>
                              setFormData({ ...formData, honeypot: e.target.value })
                            }
                            autoComplete="off"
                          />
                        </div>

                        {/* Name & Email */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label
                              htmlFor="call_name"
                              className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1"
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
                              className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500/30 transition-colors ${
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
                            <label
                              htmlFor="call_email"
                              className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1"
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
                              className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500/30 transition-colors ${
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
                        </div>

                        {/* Website URL */}
                        <div>
                          <label
                            htmlFor="call_website"
                            className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1"
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
                            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500/30 transition-colors ${
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

                        {/* Vertical Selection */}
                        <div>
                          <label
                            htmlFor="call_vertical"
                            className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1"
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
                            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/30 transition-colors ${
                              formErrors.vertical ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
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
                            <option value="adult-escort">Adult Industry Directory / Portal</option>
                            <option value="other">Other High-Competition Digital Business</option>
                          </select>
                          {formErrors.vertical && (
                            <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />
                              {formErrors.vertical}
                            </p>
                          )}
                        </div>

                        {/* Growth Goal */}
                        <div>
                          <label
                            htmlFor="call_goal"
                            className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1"
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
                            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500/30 transition-colors ${
                              formErrors.growthGoal ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                            }`}
                          />
                          {formErrors.growthGoal && (
                            <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
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
                                ? 'bg-amber-50 text-amber-900 border-amber-200'
                                : 'bg-rose-50 text-rose-900 border-rose-200'
                            }`}
                          >
                            <p className="font-semibold mb-1">
                              {submissionFeedback.status === 'configuration_pending'
                                ? 'Online Booking Endpoint Pending Deployment'
                                : 'Booking Notice'}
                            </p>
                            <p className="mb-2">{submissionFeedback.message}</p>
                            <p>
                              Direct Work Email:{' '}
                              <a
                                href="mailto:hello@igameing.growthservice.in?subject=Advisory%20Session%20Booking"
                                className="underline font-bold text-purple-700 hover:text-purple-900"
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
                            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-heading font-bold text-sm shadow-md hover:shadow-lg transition-all disabled:opacity-50 cursor-pointer"
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
                    </>
                  )}
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default BookCallPage;
