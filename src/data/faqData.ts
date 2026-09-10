/**
 * Centralized FAQ Dataset
 * Structured Q&A resources powering the FAQ Portal and Schema.org FAQPage generation.
 */

export interface FAQItem {
  readonly question: string;
  readonly answer: string;
  readonly category: 'basics' | 'payments' | 'fairness' | 'safety';
}

export const faqData: readonly FAQItem[] = [
  {
    category: 'fairness',
    question: 'How do I know if an online casino game is fair and not rigged?',
    answer: 'Reputable online casino games are powered by Random Number Generators (RNGs) that are rigorously inspected and certified by accredited independent testing laboratories such as eCOGRA, Gaming Laboratories International (GLI), BMM Testlabs, and iTech Labs. Additionally, provably fair games allow players to cryptographically verify outcomes using client and server hash seeds.',
  },
  {
    category: 'basics',
    question: 'What is Return to Player (RTP) and why does it matter?',
    answer: 'Return to Player (RTP) is the statistical theoretical percentage of all wagered money that a casino game will pay back to players over millions of spins or rounds. For instance, a 96% RTP game theoretically returns ₹96 for every ₹100 wagered over the long haul, while the remaining 4% represents the house edge. Higher RTP games generally provide superior statistical odds.',
  },
  {
    category: 'safety',
    question: 'Is online gaming legal, and what licensing bodies should I trust?',
    answer: 'Legality depends strictly on your local national or state jurisdiction. When evaluating online platforms, look for regulatory licenses issued by respected statutory bodies such as the Malta Gaming Authority (MGA), the UK Gambling Commission (UKGC), the Isle of Man Gambling Supervision Commission, or the Gibraltar Regulatory Authority. These bodies mandate strict player fund segregation and audit standards.',
  },
  {
    category: 'payments',
    question: 'What are the fastest and safest payment methods for online casino transactions?',
    answer: 'Instant bank transfers like UPI (in India) and cryptocurrencies such as USDT (Tether TRC20) provide the fastest deposit and withdrawal speeds with minimal fees. E-wallets like Skrill and Neteller also process payouts within a few hours once identity verification (KYC) is complete.',
  },
  {
    category: 'safety',
    question: 'What should I do if I feel my gaming habits are becoming unhealthy?',
    answer: 'Immediately utilize the operator’s responsible gaming controls to trigger a cooling-off period or self-exclusion. Contact free, confidential support services such as the National Council on Problem Gambling (1800-266-0058 in India) or GamCare / Gambling Therapy internationally.',
  },
  {
    category: 'basics',
    question: 'What is the difference between European and American Roulette?',
    answer: 'European Roulette features a single zero (0) pocket, giving the casino a house edge of 2.70%. American Roulette features both a single zero (0) and a double zero (00) pocket, which increases the house edge to 5.26% across all standard bets. European and French variants offer significantly superior odds for players.',
  },
];
