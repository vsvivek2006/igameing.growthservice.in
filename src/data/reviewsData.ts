/**
 * Informational Reviews Dataset
 * Editorial review methodology metrics for casino software and operators.
 */

export interface ReviewItem {
  readonly slug: string;
  readonly name: string;
  readonly type: 'Online Casino' | 'Software Provider' | 'Live Studio';
  readonly overallRating: number;
  readonly licensing: string;
  readonly payoutSpeed: string;
  readonly rtpAuditAuthority: string;
  readonly summary: string;
  readonly pros: readonly string[];
  readonly cons: readonly string[];
  readonly keyFeatures: readonly string[];
}

export const reviewsData: readonly ReviewItem[] = [
  {
    slug: 'evolution-gaming-studio-review',
    name: 'Evolution Gaming',
    type: 'Software Provider',
    overallRating: 4.9,
    licensing: 'MGA, UKGC, Alderney, Pennsylvania, New Jersey',
    payoutSpeed: 'N/A (B2B Provider)',
    rtpAuditAuthority: 'eCOGRA, GLI (Gaming Laboratories International)',
    summary: 'The undisputed global market leader in live dealer casino streams, bespoke card tables, and game show innovations like Lightning Roulette and Crazy Time.',
    pros: [
      'Industry benchmark for HD low-latency streaming quality',
      'Native speaking tables in over 15 languages',
      'eCOGRA certified random number generation on multiplier mechanics',
    ],
    cons: [
      'High bandwidth requirements on mobile connections',
      'Table limits can be restrictive on standard non-VIP tables',
    ],
    keyFeatures: ['Dual Play Tables', 'Crazy Time Multipliers', 'Multi-Camera Angle Feeds', 'Native Hindi Roulette'],
  },
  {
    slug: 'pragmatic-play-slots-live-review',
    name: 'Pragmatic Play',
    type: 'Software Provider',
    overallRating: 4.8,
    licensing: 'MGA, UKGC, Gibraltar, Romania (ONJN)',
    payoutSpeed: 'N/A (B2B Provider)',
    rtpAuditAuthority: 'GLI, QUINEL, BMM Testlabs',
    summary: 'Prolific developer behind world-renowned slot titles (Gates of Olympus, Sweet Bonanza) and high-production live dealer studios in Bucharest and beyond.',
    pros: [
      'Drop & Wins seasonal cash giveaway integrations',
      'Consistent 96.5% standard RTP baseline on flagship slots',
      'Exceptional mobile-first touch UI and portrait mode optimizations',
    ],
    cons: [
      'Configurable RTP ranges allow some operators to choose lower RTP variants',
      'High volatility titles require strict bankroll management',
    ],
    keyFeatures: ['Tumble Mechanic', 'Multiplier Wilds', 'Drops & Wins Tournaments', 'Dedicated Live Roulette'],
  },
  {
    slug: 'netent-gaming-software-review',
    name: 'NetEnt (Net Entertainment)',
    type: 'Software Provider',
    overallRating: 4.7,
    licensing: 'MGA, UKGC, New Jersey, Spain, Italy',
    payoutSpeed: 'N/A (B2B Provider)',
    rtpAuditAuthority: 'eCOGRA, iTech Labs',
    summary: 'Pioneer Swedish developer responsible for legendary games like Starburst and Gonzo’s Quest, celebrated for smooth animations and mathematically balanced game models.',
    pros: [
      'Iconic slot history and stable mathematical models',
      'High visual clarity and low device resource usage',
      'Audited by both eCOGRA and iTech Labs',
    ],
    cons: [
      'Slower release cadence compared to newer competitors',
      'Fewer high-multiplier jackpot titles in recent portfolios',
    ],
    keyFeatures: ['Avalanche Reels', 'Cluster Pays', 'Expanding Wilds', 'Legendary Starburst Mechanics'],
  },
];
