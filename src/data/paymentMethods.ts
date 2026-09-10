/**
 * Payment Methods Dataset
 * Authoritative information on deposit/withdrawal rails, transaction speeds, limits, and security.
 */

export interface PaymentMethod {
  readonly slug: string;
  readonly name: string;
  readonly category: 'Instant Banking' | 'E-Wallet' | 'Cryptocurrency' | 'Card' | 'Prepaid';
  readonly depositSpeed: string;
  readonly withdrawalSpeed: string;
  readonly typicalFee: string;
  readonly securityRating: string;
  readonly description: string;
  readonly popularRegions: readonly string[];
  readonly minDeposit: string;
  readonly maxDeposit: string;
}

export const paymentMethodsData: readonly PaymentMethod[] = [
  {
    slug: 'upi',
    name: 'UPI (Unified Payments Interface)',
    category: 'Instant Banking',
    depositSpeed: 'Instant (1-3 mins)',
    withdrawalSpeed: '15 mins - 4 hours',
    typicalFee: '0%',
    securityRating: '9.8/10',
    description: 'Direct bank-to-bank instant transfers via virtual payment address (VPA) or QR code. The gold standard for Indian digital transactions with dual-factor authentication.',
    popularRegions: ['India'],
    minDeposit: '₹500',
    maxDeposit: '₹100,000 / tx',
  },
  {
    slug: 'net-banking',
    name: 'Net Banking (IMPS / NEFT / RTGS)',
    category: 'Instant Banking',
    depositSpeed: '5 mins - 30 mins',
    withdrawalSpeed: '2 hours - 24 hours',
    typicalFee: '0% - 1%',
    securityRating: '9.5/10',
    description: 'Direct internet banking supported across major national and private retail banks with high deposit limit flexibility and bank-grade encryption.',
    popularRegions: ['India', 'Global'],
    minDeposit: '₹1,000',
    maxDeposit: '₹500,000+',
  },
  {
    slug: 'usdt-crypto',
    name: 'USDT (Tether TRC20 / ERC20)',
    category: 'Cryptocurrency',
    depositSpeed: 'Instant (Network confirms)',
    withdrawalSpeed: '5 mins - 1 hour',
    typicalFee: 'Network Gas (approx $1 on Tron)',
    securityRating: '9.9/10',
    description: 'USD-pegged stablecoin offering borderless liquidity, rapid automated blockchain withdrawals, and zero chargeback vulnerability.',
    popularRegions: ['Global', 'Asia', 'Europe'],
    minDeposit: '$10 / ₹850',
    maxDeposit: 'Unlimited',
  },
  {
    slug: 'skrill',
    name: 'Skrill',
    category: 'E-Wallet',
    depositSpeed: 'Instant',
    withdrawalSpeed: 'Instant - 12 hours',
    typicalFee: '1.5% - 2.5%',
    securityRating: '9.2/10',
    description: 'Pioneer international iGaming e-wallet supporting multi-currency accounts, dedicated VIP transaction tiers, and seamless mobile app balance management.',
    popularRegions: ['Europe', 'Asia', 'Latin America'],
    minDeposit: '$15 / ₹1,200',
    maxDeposit: '$10,000',
  },
  {
    slug: 'neteller',
    name: 'Neteller',
    category: 'E-Wallet',
    depositSpeed: 'Instant',
    withdrawalSpeed: 'Instant - 12 hours',
    typicalFee: '1.5% - 2.5%',
    securityRating: '9.2/10',
    description: 'Trusted Paysafe group e-wallet designed specifically for digital gaming enthusiasts with fast cashout processing and two-factor account security.',
    popularRegions: ['Europe', 'Asia', 'Global'],
    minDeposit: '$15 / ₹1,200',
    maxDeposit: '$10,000',
  },
  {
    slug: 'astropay',
    name: 'AstroPay',
    category: 'Prepaid',
    depositSpeed: 'Instant',
    withdrawalSpeed: '2 hours - 24 hours',
    typicalFee: '0%',
    securityRating: '9.4/10',
    description: 'Virtual prepaid cards and digital wallet allowing instantaneous payments in local currencies without sharing bank account numbers with operators.',
    popularRegions: ['Latin America', 'Asia', 'Africa'],
    minDeposit: '₹500',
    maxDeposit: '₹50,000',
  },
];
