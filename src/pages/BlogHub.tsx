import React from 'react';
import { SEOHead } from '../seo';
import { Container, Section, SectionHeader, Badge, Button } from '../components/ui';
import { FadeIn, MotionCard } from '../components/animations';

const BLOG_POSTS = [
  {
    slug: 'igaming-seo-guide-2024',
    title: 'The Complete iGaming SEO Guide: Ranking Casino Sites in 2024',
    excerpt: 'A comprehensive breakdown of SEO strategies that work in competitive casino and gambling verticals — technical foundations, content at scale, and link acquisition.',
    category: 'SEO',
    readTime: '18 min read',
    date: 'Sept 2024',
  },
  {
    slug: 'casino-cpa-vs-revenue-share',
    title: 'CPA vs Revenue Share: Which Affiliate Model Wins in 2024?',
    excerpt: 'A data-driven analysis of affiliate deal structures for casino operators — when to offer CPA, when revenue share wins, and hybrid deal optimisation.',
    category: 'Performance Marketing',
    readTime: '12 min read',
    date: 'Aug 2024',
  },
  {
    slug: 'igaming-landing-page-cro',
    title: '7 CRO Tactics That Doubled Our Casino Client\'s FTD Rate',
    excerpt: 'Real-world conversion optimisation tests run on casino registration and deposit funnels — what moved the needle and what wasted budget.',
    category: 'CRO',
    readTime: '10 min read',
    date: 'Aug 2024',
  },
  {
    slug: 'india-fantasy-sports-marketing',
    title: 'Marketing Fantasy Sports Apps in India: The Full Playbook',
    excerpt: 'How to acquire Indian users for fantasy cricket and sports apps — regulatory constraints, channel mix, seasonal peaks, and retention tactics.',
    category: 'Strategy',
    readTime: '15 min read',
    date: 'Jul 2024',
  },
  {
    slug: 'crypto-casino-content-strategy',
    title: 'Content Strategy for Crypto Casinos: Building Authority in a Skeptical Market',
    excerpt: 'How to establish trust and organic visibility for provably fair and crypto gambling brands through EEAT-optimised editorial content.',
    category: 'Content',
    readTime: '13 min read',
    date: 'Jul 2024',
  },
  {
    slug: 'gaming-affiliate-seo-2024',
    title: 'Gaming Affiliate SEO After Google\'s HCU Updates: What Still Works',
    excerpt: 'The affiliate sites that survived the Helpful Content Updates did specific things right. Here\'s the full breakdown for iGaming publishers.',
    category: 'SEO',
    readTime: '20 min read',
    date: 'Jun 2024',
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  SEO: 'bg-purple-100 text-purple-700',
  'Performance Marketing': 'bg-amber-100 text-amber-700',
  CRO: 'bg-indigo-100 text-indigo-700',
  Strategy: 'bg-blue-100 text-blue-700',
  Content: 'bg-green-100 text-green-700',
};

export const BlogHub: React.FC = () => {
  return (
    <>
      <SEOHead
        title="iGaming Marketing Blog — Growth Strategies for Gaming Brands"
        description="Expert digital marketing insights for iGaming operators, affiliates, and gaming brands. SEO, performance marketing, CRO, and growth strategy from the trenches."
        canonicalPath="/blog"
      />

      <section className="bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <Badge variant="purple" size="sm" className="mb-6">iGaming Blog</Badge>
              <h1 className="font-heading font-extrabold text-4xl lg:text-5xl text-white mb-5 leading-tight">
                Marketing Intelligence for Gaming Brands
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed">
                No fluff. No generic advice recycled from generic marketing blogs. Real iGaming growth strategies from specialists who live in the verticals.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      <Section variant="white" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post, idx) => (
              <MotionCard key={post.slug} delay={idx * 60} variant="interactive">
                <div className="h-full flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${CATEGORY_COLORS[post.category] ?? 'bg-slate-100 text-slate-600'}`}>
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-400">{post.readTime}</span>
                  </div>

                  <h2 className="font-heading font-bold text-lg text-slate-900 mb-2 leading-snug hover:text-purple-600 transition-colors flex-1">
                    {post.title}
                  </h2>

                  <p className="text-xs text-slate-500 leading-relaxed mb-4">{post.excerpt}</p>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                    <span>{post.date}</span>
                    <span className="text-purple-600 font-semibold">Read →</span>
                  </div>
                </div>
              </MotionCard>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="gradient" spacing="md">
        <Container>
          <div className="max-w-2xl mx-auto text-center text-white space-y-5">
            <h2 className="font-heading font-extrabold text-3xl">Want Strategies Applied to Your Brand?</h2>
            <p className="text-slate-300">Reading is a start. Let's build you a custom growth roadmap.</p>
            <Button to="/contact" variant="gold" size="lg">Get a Free Proposal</Button>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default BlogHub;
