import React from 'react';
import { ArrowRight, Mail, Phone, MessageCircle, Clock } from 'lucide-react';
import { SEOHead } from '../seo';
import { Container, Section, Badge, Button } from '../components/ui';
import { FadeIn } from '../components/animations';
import businessConfig from '../config/business';

export const ContactPage: React.FC = () => {
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
                Tell us about your brand, your market, and your growth goals. We'll review your situation and send a tailored proposal within 24 hours — no generic templates, no obligation.
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

                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Name *</label>
                      <input
                        type="text"
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Company</label>
                      <input
                        type="text"
                        placeholder="Your brand or company"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email *</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Website URL</label>
                    <input
                      type="url"
                      placeholder="https://your-casino.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">What best describes your business? *</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400 transition-colors bg-white">
                      <option value="">Select your vertical</option>
                      <option>Online Casino Operator</option>
                      <option>Sports Betting Platform</option>
                      <option>Fantasy Sports App</option>
                      <option>Crypto / Web3 Gaming Brand</option>
                      <option>Gaming Affiliate / Publisher</option>
                      <option>Game Studio / Software Provider</option>
                      <option>Other iGaming Business</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Services you're interested in</label>
                    <div className="grid grid-cols-2 gap-2">
                      {['iGaming SEO', 'Performance Marketing', 'Web Development', 'Content Strategy', 'Social Media', 'CRO'].map((s) => (
                        <label key={s} className="flex items-center gap-2 text-xs text-slate-600 cursor-pointer">
                          <input type="checkbox" className="rounded border-slate-300 text-purple-600 focus:ring-purple-500" />
                          {s}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Monthly budget range</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400 transition-colors bg-white">
                      <option value="">Select a range</option>
                      <option>Under $1,000/mo</option>
                      <option>$1,000 – $3,000/mo</option>
                      <option>$3,000 – $10,000/mo</option>
                      <option>$10,000 – $30,000/mo</option>
                      <option>$30,000+/mo</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Tell us about your goals</label>
                    <textarea
                      rows={4}
                      placeholder="What are you trying to achieve? Any specific markets, competition, or challenges we should know about..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold text-base hover:from-amber-400 hover:to-orange-400 transition-all duration-200 shadow-lg shadow-amber-500/20 hover:-translate-y-0.5"
                  >
                    Send Free Proposal Request
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-center text-xs text-slate-400">
                    We respond within 24 hours. No spam, no hard sell — just a tailored proposal.
                  </p>
                </form>
              </div>
            </FadeIn>

            {/* Contact Info */}
            <FadeIn delay={200}>
              <div className="space-y-8 lg:pt-4">
                <div>
                  <h2 className="font-heading font-bold text-2xl text-slate-900 mb-2">Other Ways to Reach Us</h2>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Prefer a direct conversation? Reach out on any channel and we'll get back to you within the same business day.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      icon: Mail,
                      label: 'Email',
                      value: businessConfig.emails.primary,
                      href: `mailto:${businessConfig.emails.primary}`,
                    },
                    {
                      icon: MessageCircle,
                      label: 'WhatsApp',
                      value: 'Chat on WhatsApp',
                      href: businessConfig.phone.whatsapp,
                    },
                    {
                      icon: Phone,
                      label: 'Business Enquiries',
                      value: businessConfig.emails.business,
                      href: `mailto:${businessConfig.emails.business}`,
                    },
                  ].map((c) => {
                    const Icon = c.icon;
                    return (
                      <a
                        key={c.label}
                        href={c.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-2xl border border-slate-200 hover:border-purple-300 hover:bg-purple-50/50 transition-all duration-200 group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-100 transition-colors">
                          <Icon className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{c.label}</div>
                          <div className="text-sm font-medium text-slate-800">{c.value}</div>
                        </div>
                      </a>
                    );
                  })}
                </div>

                {/* Response promise */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-100">
                  <div className="flex items-start gap-3 mb-3">
                    <Clock className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-heading font-bold text-slate-900 text-sm mb-1">Our Response Guarantee</p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Every proposal request is reviewed by a senior iGaming growth strategist — not a junior account manager. You'll receive a personalised, actionable response within 24 business hours.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social */}
                <div>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-3">Follow Us</p>
                  <div className="flex gap-3">
                    {[
                      { label: 'LinkedIn', href: businessConfig.social.linkedin },
                      { label: 'Twitter/X', href: businessConfig.social.twitter },
                      { label: 'Telegram', href: businessConfig.social.telegram },
                    ].map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg border border-slate-200 text-xs font-semibold text-slate-600 hover:border-purple-300 hover:text-purple-600 transition-colors"
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>
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
