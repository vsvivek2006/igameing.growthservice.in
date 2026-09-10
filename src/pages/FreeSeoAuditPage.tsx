import React from 'react';
import { ArrowRight, Zap, CheckCircle2, Search, BarChart3, AlertTriangle, Globe } from 'lucide-react';
import { SEOHead } from '../seo';
import { Container, Section, Badge, Button } from '../components/ui';
import { FadeIn } from '../components/animations';

export const FreeSeoAuditPage: React.FC = () => {
  const auditChecks = [
    { icon: Search, label: 'Technical SEO Health', desc: 'Core Web Vitals, crawlability, indexation, and site speed' },
    { icon: BarChart3, label: 'Keyword Gap Analysis', desc: 'High-intent gaming keywords you\'re missing vs competitors' },
    { icon: Globe, label: 'Backlink Profile Review', desc: 'Domain authority, toxic links, and link-building opportunities' },
    { icon: AlertTriangle, label: 'Compliance Risk Check', desc: 'Content and technical elements that risk penalties in regulated markets' },
  ];

  return (
    <>
      <SEOHead
        title="Free iGaming SEO Audit — Casino & Gaming Website Analysis"
        description="Get a free technical SEO audit for your casino, sportsbook, or gaming website. We review Core Web Vitals, keyword gaps, backlinks, and compliance risks."
        canonicalPath="/free-seo-audit"
      />

      <section className="bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/30 mb-6">
                <Zap className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-bold text-amber-300">100% Free — No Credit Card Required</span>
              </div>
              <h1 className="font-heading font-extrabold text-4xl lg:text-5xl text-white mb-5 leading-tight">
                Free iGaming SEO Audit
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed">
                Find out exactly why your casino or gaming brand isn't ranking — and what it would take to dominate your target keywords. Delivered by a senior iGaming SEO specialist.
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

                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      placeholder="John Smith"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Work Email *</label>
                    <input
                      type="email"
                      placeholder="you@yourbrand.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Website URL to Audit *</label>
                    <input
                      type="url"
                      placeholder="https://your-casino-site.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Primary Target Market</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400 transition-colors bg-white">
                      <option value="">Select market</option>
                      <option>India</option>
                      <option>UK</option>
                      <option>Canada</option>
                      <option>Australia</option>
                      <option>Malta / Europe</option>
                      <option>UAE / Middle East</option>
                      <option>Global</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Your top 3 target keywords (optional)</label>
                    <textarea
                      rows={3}
                      placeholder="e.g., online casino India, cricket betting, real money slots..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold text-base hover:from-amber-400 hover:to-orange-400 transition-all duration-200 shadow-lg shadow-amber-500/20 hover:-translate-y-0.5"
                  >
                    <Zap className="w-4 h-4" />
                    Get My Free SEO Audit
                  </button>
                  <p className="text-center text-xs text-slate-400">
                    Delivered within 2–3 business days · No spam · No hard sell
                  </p>
                </form>
              </div>
            </FadeIn>

            {/* What's in the audit */}
            <FadeIn delay={150}>
              <div className="space-y-8">
                <div>
                  <h2 className="font-heading font-bold text-2xl text-slate-900 mb-3">What You'll Receive</h2>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    A senior iGaming SEO specialist manually reviews your site and delivers a prioritised action plan — not an automated tool report with 847 irrelevant errors.
                  </p>
                </div>

                <div className="space-y-4">
                  {auditChecks.map((check) => {
                    const Icon = check.icon;
                    return (
                      <div key={check.label} className="flex items-start gap-4 p-4 rounded-2xl border border-slate-100 hover:border-purple-200 hover:bg-purple-50/30 transition-all">
                        <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm text-slate-900 mb-0.5">{check.label}</p>
                          <p className="text-xs text-slate-500 leading-relaxed">{check.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-100">
                  <p className="font-heading font-bold text-slate-900 text-sm mb-3">You'll walk away knowing:</p>
                  {[
                    'Why your site isn\'t ranking for your target keywords',
                    'Your 3 highest-priority technical SEO fixes',
                    'The keyword opportunities your competitors are winning',
                    'A prioritised 90-day SEO action plan',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-slate-700 mb-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
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
