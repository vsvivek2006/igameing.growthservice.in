/**
 * Game Categories Canonical Dataset
 * Authoritative taxonomy for casino games, mathematical house edges, and strategic guides.
 */

export interface GameCategory {
  readonly slug: string;
  readonly title: string;
  readonly subtitle: string;
  readonly shortDesc: string;
  readonly fullDesc: string;
  readonly averageRTP: string;
  readonly houseEdgeRange: string;
  readonly skillLevel: 'Beginner' | 'Intermediate' | 'Advanced';
  readonly volatility: 'Low' | 'Medium' | 'High' | 'Variable';
  readonly popularVariants: readonly string[];
  readonly featured: boolean;
  readonly icon: string;
}

export const gameCategories: readonly GameCategory[] = [
  {
    slug: 'slots',
    title: 'Online Slots',
    subtitle: 'RNG Video Slots, Megaways & Classic Reels',
    shortDesc: 'Comprehensive mechanics, volatility analysis, RTP variance, and bonus feature guides for video slots.',
    fullDesc: 'Online slots represent the largest segment of modern casino gaming. From 3-reel classic fruit machines to complex Megaways and cluster-pay engines, explore mathematical odds, hit frequencies, and bonus feature mechanics.',
    averageRTP: '96.2%',
    houseEdgeRange: '2.0% - 8.0%',
    skillLevel: 'Beginner',
    volatility: 'Variable',
    popularVariants: ['Megaways', 'Hold & Win', 'Classic 3-Reel', 'Cluster Pays', 'Progressive Jackpots'],
    featured: true,
    icon: 'Sparkles',
  },
  {
    slug: 'blackjack',
    title: 'Blackjack',
    subtitle: '21 Card Game Mathematics & Basic Strategy',
    shortDesc: 'Mathematical basic strategy charts, deck penetration analysis, and card counting theory.',
    fullDesc: 'Blackjack offers one of the lowest house edges in casino gaming when played with perfect basic strategy. Master card totals, dealer upcard advantages, surrender rules, and multi-deck variance.',
    averageRTP: '99.5%',
    houseEdgeRange: '0.5% - 2.0%',
    skillLevel: 'Intermediate',
    volatility: 'Low',
    popularVariants: ['Classic European', 'Single Deck', 'Vegas Strip', 'Atlantic City', 'Double Exposure'],
    featured: true,
    icon: 'Layers',
  },
  {
    slug: 'roulette',
    title: 'Roulette',
    subtitle: 'Wheel Odds, French vs European & Betting Systems',
    shortDesc: 'Wheel architecture differences, single vs double zero probabilities, and outside betting systems.',
    fullDesc: 'Understand the critical mathematical distinction between European (2.70% house edge), French (1.35% with La Partage), and American (5.26%) roulette wheels. Learn variance and payout realities.',
    averageRTP: '97.3%',
    houseEdgeRange: '1.35% - 5.26%',
    skillLevel: 'Beginner',
    volatility: 'Medium',
    popularVariants: ['European Roulette', 'French Roulette', 'American Roulette', 'Lightning Roulette'],
    featured: true,
    icon: 'CircleDot',
  },
  {
    slug: 'baccarat',
    title: 'Baccarat',
    subtitle: 'Punto Banco, Banker Odds & Commission Breakdown',
    shortDesc: 'Banker vs Player bet odds, the 5% commission math, and why the Tie bet should always be avoided.',
    fullDesc: 'Baccarat is a refined card game of pure probability. Learn why Banker has a statistical 1.06% edge, Player has 1.24%, and the Tie bet carries an excessive 14.36% casino advantage.',
    averageRTP: '98.9%',
    houseEdgeRange: '1.06% - 14.36%',
    skillLevel: 'Beginner',
    volatility: 'Low',
    popularVariants: ['Punto Banco', 'Chemin de Fer', 'Speed Baccarat', 'No Commission Baccarat'],
    featured: true,
    icon: 'Shield',
  },
  {
    slug: 'live-dealer',
    title: 'Live Dealer Games',
    subtitle: 'Studio Streaming, Real Cards & Interactive Game Shows',
    shortDesc: 'Low-latency HD stream architecture, physical wheel mechanics, and live multiplier game shows.',
    fullDesc: 'Live dealer gaming bridges the divide between digital convenience and authentic casino atmospheres with professional croupiers, RFID card scanning, and dynamic multiplier games.',
    averageRTP: '97.0%',
    houseEdgeRange: '0.5% - 5.0%',
    skillLevel: 'Intermediate',
    volatility: 'Medium',
    popularVariants: ['Crazy Time', 'Live Blackjack', 'Monopoly Live', 'Lightning Dice'],
    featured: true,
    icon: 'Radio',
  },
  {
    slug: 'crash-games',
    title: 'Crash Games',
    subtitle: 'Provably Fair Multiplier Curves & Cashout Timing',
    shortDesc: 'Cryptographic provably fair seeds, increasing multiplier curves, and risk-managed cashout strategies.',
    fullDesc: 'Crash games have surged in popularity thanks to provably fair blockchain verification and interactive cashout control. Study the multiplier algorithms and expected value curves.',
    averageRTP: '97.0%',
    houseEdgeRange: '1.0% - 3.0%',
    skillLevel: 'Intermediate',
    volatility: 'High',
    popularVariants: ['Aviator', 'JetX', 'Spaceman', 'Space XY'],
    featured: true,
    icon: 'TrendingUp',
  },
  {
    slug: 'teen-patti',
    title: 'Teen Patti',
    subtitle: 'Traditional Indian 3-Card Poker Rules & Side Bets',
    shortDesc: 'Sequence probabilities, Chaal vs Blind strategy, and side bet payout evaluations.',
    fullDesc: 'Teen Patti is India\'s premier card game. Discover hand ranking hierarchies from Trail (Trio) to High Card, alongside live dealer adaptation odds and 3+3 side bet dynamics.',
    averageRTP: '96.6%',
    houseEdgeRange: '3.4% - 6.5%',
    skillLevel: 'Intermediate',
    volatility: 'Medium',
    popularVariants: ['Classic Live Teen Patti', 'One Day Teen Patti', 'Muflis', 'AK47'],
    featured: true,
    icon: 'Flame',
  },
  {
    slug: 'andar-bahar',
    title: 'Andar Bahar',
    subtitle: 'Pure 50/50 Traditional Indian Card Matching Odds',
    shortDesc: 'Statistical first card matching advantage (Andar 51.5% vs Bahar 48.5%) and mid-game bets.',
    fullDesc: 'Andar Bahar is an elegant game of matching the Joker card on either Andar (Inside) or Bahar (Outside). Learn the mathematical slight advantage that goes to the side where the first card is dealt.',
    averageRTP: '97.8%',
    houseEdgeRange: '2.15% - 4.5%',
    skillLevel: 'Beginner',
    volatility: 'Low',
    popularVariants: ['Super Andar Bahar', 'Live Andar Bahar', 'Speed Andar Bahar'],
    featured: true,
    icon: 'Zap',
  },
  {
    slug: 'poker',
    title: 'Casino Poker',
    subtitle: 'Texas Hold\'em, Omaha & Table Poker Variants',
    shortDesc: 'Pot odds calculation, implied odds, table position, and mental bankroll discipline.',
    fullDesc: 'Explore the mathematical discipline of poker. Whether playing against the house (Ultimate Texas Hold\'em, Caribbean Stud) or against other players in tournaments and cash games.',
    averageRTP: '97.5%',
    houseEdgeRange: '2.0% - 5.5%',
    skillLevel: 'Advanced',
    volatility: 'High',
    popularVariants: ['Texas Hold\'em', 'Pot Limit Omaha', 'Ultimate Texas Hold\'em', 'Three Card Poker'],
    featured: true,
    icon: 'Award',
  },
];
