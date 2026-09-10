/**
 * Informational Guides Dataset
 * Foundation for casino guides and game strategy guides.
 */

export interface GuideArticle {
  readonly slug: string;
  readonly category: 'casino-guides' | 'game-guides' | 'bankroll';
  readonly title: string;
  readonly excerpt: string;
  readonly readTime: string;
  readonly difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  readonly author: string;
  readonly lastUpdated: string;
  readonly tags: readonly string[];
}

export const guidesData: readonly GuideArticle[] = [
  {
    slug: 'understanding-rtp-and-house-edge',
    category: 'casino-guides',
    title: 'Understanding RTP & House Edge: The Real Mathematics of Casino Games',
    excerpt: 'Demystifying Return to Player percentages, theoretical payouts, and why short-term variance differs from long-term statistical expectancy.',
    readTime: '6 min read',
    difficulty: 'Beginner',
    author: 'iGaming Growth Analytics Desk',
    lastUpdated: '2026-03-01',
    tags: ['RTP', 'Mathematics', 'House Edge', 'Casino Fundamentals'],
  },
  {
    slug: 'online-casino-licensing-frameworks',
    category: 'casino-guides',
    title: 'Global Casino Licensing: MGA, UKGC, Curacao & Anjouan Compared',
    excerpt: 'How regulatory licensing protects players through fund segregation, independent RNG audits, dispute mediation, and anti-money laundering compliance.',
    readTime: '8 min read',
    difficulty: 'Intermediate',
    author: 'iGaming Regulatory Compliance Team',
    lastUpdated: '2026-03-05',
    tags: ['Licensing', 'Regulation', 'Player Safety', 'Compliance'],
  },
  {
    slug: 'blackjack-basic-strategy-complete-guide',
    category: 'game-guides',
    title: 'Blackjack Basic Strategy: Mathematical Play for Every Hand Combination',
    excerpt: 'The complete computer-simulated chart for when to hit, stand, double down, split pairs, or surrender against any dealer upcard.',
    readTime: '10 min read',
    difficulty: 'Intermediate',
    author: 'Card Theory Research Group',
    lastUpdated: '2026-02-28',
    tags: ['Blackjack', 'Basic Strategy', 'Card Games', 'Probabilities'],
  },
  {
    slug: 'roulette-single-vs-double-zero-odds',
    category: 'game-guides',
    title: 'European vs American Roulette: Why That Extra Zero Halves Your Odds',
    excerpt: 'Detailed statistical comparison of single-zero (2.70% edge) and double-zero (5.26% edge) wheel physics and payout ratios.',
    readTime: '5 min read',
    difficulty: 'Beginner',
    author: 'Probability Research Desk',
    lastUpdated: '2026-02-25',
    tags: ['Roulette', 'Odds', 'Probability', 'Table Games'],
  },
  {
    slug: 'provably-fair-technology-explained',
    category: 'casino-guides',
    title: 'How Provably Fair Gaming Works: Cryptographic Hashes & Client Seeds',
    excerpt: 'How SHA-256 hash algorithms and client/server seed pairs allow players to mathematically verify that a game outcome was not tampered with.',
    readTime: '7 min read',
    difficulty: 'Advanced',
    author: 'Crypto & Algorithmic Tech Desk',
    lastUpdated: '2026-03-02',
    tags: ['Provably Fair', 'Cryptography', 'Crash Games', 'Technology'],
  },
  {
    slug: 'bankroll-management-for-recreational-players',
    category: 'bankroll',
    title: 'Bankroll Management: Protecting Capital and Preventing Tilt',
    excerpt: 'Essential unit sizing rules, stop-loss thresholds, session time limits, and why no betting progression can overcome a negative expectation.',
    readTime: '9 min read',
    difficulty: 'Beginner',
    author: 'Responsible Gaming Education Unit',
    lastUpdated: '2026-03-04',
    tags: ['Bankroll', 'Responsible Gaming', 'Money Management', 'Player Safety'],
  },
];
