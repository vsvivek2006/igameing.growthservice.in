/**
 * Responsible Gaming & Player Protection Dataset
 * Comprehensive safety standards, self-exclusion resources, and support directory.
 */

export interface ResponsibleGamingPillar {
  readonly title: string;
  readonly summary: string;
  readonly recommendations: readonly string[];
}

export interface SupportResource {
  readonly name: string;
  readonly coverage: string;
  readonly phone: string;
  readonly website: string;
  readonly description: string;
}

export const responsibleGamingPillars: readonly ResponsibleGamingPillar[] = [
  {
    title: 'Financial Self-Control & Deposit Limits',
    summary: 'Set hard boundaries on your budget prior to playing any real-money game. Never gamble with funds required for essentials.',
    recommendations: [
      'Define a weekly or monthly recreational entertainment budget that does not exceed discretionary disposable income.',
      'Utilize platform deposit caps, loss limits, and wager limits immediately upon account creation.',
      'Never borrow money, take loans, or liquidate assets to fund casino play.',
    ],
  },
  {
    title: 'Time Management & Reality Checks',
    summary: 'Track actual time spent playing. Extended gambling sessions impair judgment and rational probability evaluation.',
    recommendations: [
      'Activate mandatory in-session reality check popups (e.g., 30 or 60 minute alerts).',
      'Never treat gambling as an escape from stress, anxiety, emotional distress, or boredom.',
      'Balance gaming with other offline social, physical, and career activities.',
    ],
  },
  {
    title: 'Chasing Losses Fallacy (Gambler\'s Fallacy)',
    summary: 'Every RNG spin and dealt hand is an independent mathematical trial. Previous losses do not increase the probability of a future win.',
    recommendations: [
      'Accept losses as the cost of entertainment; never attempt to win back lost money by increasing stakes.',
      'Avoid progressive doubling systems (Martingale) which face catastrophic table limit and exponential risk failure.',
      'End the session immediately when a predetermined stop-loss limit is reached.',
    ],
  },
  {
    title: 'Self-Exclusion & Cooling-Off Tools',
    summary: 'Proactive restriction tools that prevent platform access for 24 hours, 7 days, 6 months, or indefinitely.',
    recommendations: [
      'Trigger cooling-off periods if you notice elevated emotional reactions to game outcomes.',
      'Register with regional central exclusion registers (e.g., GamStop in UK) where applicable.',
      'Install third-party software blockers like Gamban or BetFilter across all personal computing devices.',
    ],
  },
];

export const supportDirectory: readonly SupportResource[] = [
  {
    name: 'National Council on Problem Gambling (India)',
    coverage: 'India & South Asia',
    phone: '1800-266-0058',
    website: 'https://hopewayindia.org',
    description: 'Free confidential counseling and treatment referrals for individuals and families impacted by compulsive gambling.',
  },
  {
    name: 'GamCare / National Gambling Helpline',
    coverage: 'International & UK',
    phone: '+44 808 8020 133',
    website: 'https://www.gamcare.org.uk',
    description: '24/7 confidential phone and web chat support, advisory services, and educational programs on safe gambling practices.',
  },
  {
    name: 'Gambling Therapy (Gordon Moody)',
    coverage: 'Global Multi-Language',
    phone: 'Live Chat Online',
    website: 'https://www.gamblingtherapy.org',
    description: 'Global free digital service offering advice in 30+ languages, peer support forums, and structured recovery groups.',
  },
  {
    name: 'BeGambleAware',
    coverage: 'International',
    phone: '+44 808 8020 133',
    website: 'https://www.begambleaware.org',
    description: 'Provides information, risk quizzes, and confidential help to help people make informed decisions about their gambling.',
  },
];
