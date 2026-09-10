import React, { useState, useMemo } from 'react';
import { ChevronDown, Search, ArrowRight, HelpCircle } from 'lucide-react';
import { SEOHead } from '../seo';
import { buildFAQSchema } from '../seo/schema';
import { Container, Section, Badge, Button } from '../components/ui';
import { FadeIn } from '../components/animations';
import {
  getAllAgencyFAQs,
  FAQ_CATEGORY_LABELS,
  FAQCategory,
  AgencyFAQItem,
} from '../data/faqData';
import { trackEvent } from '../analytics/tracking';

export const FAQPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openId, setOpenId] = useState<string | null>(null);

  const allFaqs = getAllAgencyFAQs();

  const filteredFaqs = useMemo(() => {
    return allFaqs.filter((faq) => {
      const matchesCategory =
        selectedCategory === 'all' || faq.category === selectedCategory;
      const matchesQuery =
        searchQuery.trim() === '' ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [allFaqs, selectedCategory, searchQuery]);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(allFaqs.map((f) => f.category))) as FAQCategory[];
    return unique;
  }, [allFaqs]);

  return (
    <>
      <SEOHead
        title="Agency FAQ — iGaming Growth Digital Strategy"
        description="Clear answers on technical SEO, compliance, engineering pipelines, cashier attribution, and client engagement for high-competition industries."
        canonicalPath="/faq"
        structuredData={[
          buildFAQSchema(
            allFaqs.map((f) => ({ question: f.question, answer: f.answer }))
          ),
        ]}
      />

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white py-16 lg:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <Badge variant="purple" size="sm" className="mb-4">
                Knowledge Base & FAQ
              </Badge>
              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-5 leading-tight">
                Frequently Asked Questions
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
                Direct, transparent answers regarding our technical methodologies, compliance standards, engineering stacks, and partnership models.
              </p>

              {/* Search Bar */}
              <div className="mt-8 max-w-xl mx-auto relative">
                <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search questions (e.g. crawl budget, compliance, attribution)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-900/80 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-sm shadow-inner"
                />
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ── Category Filters & Accordion ─────────────────────────── */}
      <Section variant="white" spacing="lg">
        <Container>
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Topics ({allFaqs.length})
            </button>
            {categories.map((cat) => {
              const count = allFaqs.filter((f) => f.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-purple-600 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {FAQ_CATEGORY_LABELS[cat]} ({count})
                </button>
              );
            })}
          </div>

          {/* Results List */}
          <div className="max-w-3xl mx-auto space-y-3.5">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200 p-8">
                <HelpCircle className="w-10 h-10 text-slate-400 mx-auto mb-3" />
                <h3 className="font-heading font-bold text-lg text-slate-800 mb-1">
                  No matching questions found
                </h3>
                <p className="text-sm text-slate-500 mb-4">
                  Try searching for a different keyword or view all categories.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="text-xs font-bold text-purple-600 hover:underline"
                >
                  Reset filters
                </button>
              </div>
            ) : (
              filteredFaqs.map((faq: AgencyFAQItem) => {
                const isOpen = openId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className={`rounded-2xl border transition-all duration-200 ${
                      isOpen
                        ? 'border-purple-300 shadow-md shadow-purple-50 bg-white'
                        : 'border-slate-200 hover:border-purple-200 bg-white'
                    }`}
                  >
                    <button
                      onClick={() => setOpenId(isOpen ? null : faq.id)}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <div className="space-y-1">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-purple-600 block">
                          {faq.categoryLabel}
                        </span>
                        <span
                          className={`font-heading font-bold text-base block transition-colors ${
                            isOpen ? 'text-purple-700' : 'text-slate-900'
                          }`}
                        >
                          {faq.question}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-purple-600' : 'text-slate-400'
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-purple-100 pt-4">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </Container>
      </Section>

      {/* ── Contextual Conversion Section ─────────────────────────── */}
      <Section variant="dark" spacing="lg">
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-5">
            <Badge variant="amber" size="sm">
              Custom Architecture
            </Badge>
            <h2 className="font-heading font-extrabold text-3xl text-white">
              Have a Vertical-Specific Technical Challenge?
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Every platform has unique server rendering, cashier attribution, and search engine crawl patterns. Connect directly with our technical architecture team.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-2">
              <Button
                to="/free-seo-audit"
                variant="amber"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
                onClick={() =>
                  trackEvent({
                    event: 'cta_click',
                    location: 'faq_footer',
                    cta: 'free_seo_audit',
                  })
                }
              >
                Claim Free Technical Audit
              </Button>
              <Button to="/contact" variant="secondary" size="lg">
                Schedule Discovery Call
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default FAQPage;
