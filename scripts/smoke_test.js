/**
 * Production Smoke Test — iGaming Growth
 * 
 * Lightweight smoke test verifying core representative routes across all
 * architecture groups (Home, Service, Industry, Matrix, Guide, Audit, Contact, Book-Call).
 */

import esbuild from 'esbuild';

console.log('🧪 Running Production Architecture Smoke Test...');

esbuild.buildSync({
  entryPoints: [
    'src/data/pageRegistry.ts',
    'src/routing/index.ts',
    'src/seo/index.ts',
  ],
  outdir: 'scripts/dist',
  format: 'esm',
  bundle: true,
  platform: 'node',
});

const { EXACT_50_PAGES } = await import('./dist/data/pageRegistry.js');
const { resolveRoute } = await import('./dist/routing/index.js');
const { SEO_CONFIG } = await import('./dist/seo/index.js');

const CANONICAL_ORIGIN = SEO_CONFIG.canonicalOrigin;

const SMOKE_TEST_PATHS = [
  // Group A: Core & Funnels
  { path: '/', expectedType: 'core' },
  { path: '/about', expectedType: 'core' },
  { path: '/free-seo-audit', expectedType: 'core' },
  { path: '/contact', expectedType: 'core' },
  { path: '/book-call', expectedType: 'core' },

  // Group B: Core Services
  { path: '/services/seo', expectedType: 'service' },
  { path: '/services/technical-seo', expectedType: 'service' },
  { path: '/services/website-development', expectedType: 'service' },

  // Group C: Industry Pillars
  { path: '/industries/gaming', expectedType: 'industry' },
  { path: '/industries/casino', expectedType: 'industry' },
  { path: '/industries/stock-market', expectedType: 'industry' },

  // Group D: High-Value Matrix
  { path: '/industries/gaming/seo', expectedType: 'industry-service' },
  { path: '/industries/casino/technical-seo', expectedType: 'industry-service' },

  // Group E: Technical Authority Guides
  { path: '/resources/seo-guides/technical-seo-guide', expectedType: 'seo-guide' },

  // Group F: Strategic Industry Insights
  { path: '/resources/industry-insights/gaming-seo', expectedType: 'industry-insight' },
];

let smokePassCount = 0;

for (const sample of SMOKE_TEST_PATHS) {
  const route = resolveRoute(sample.path);
  if (!route || route.status !== 200) {
    console.error(`❌ Smoke Test Failed on ${sample.path}: status ${route?.status}`);
    process.exit(1);
  }

  const page = EXACT_50_PAGES.find((p) => p.path === sample.path);
  if (!page) {
    console.error(`❌ Smoke Test Failed on ${sample.path}: Not found in 50-page registry`);
    process.exit(1);
  }

  if (page.category !== sample.expectedType) {
    console.error(
      `❌ Smoke Test Category Mismatch on ${sample.path}: expected ${sample.expectedType}, got ${page.category}`
    );
    process.exit(1);
  }

  // Canonical Validation
  const expectedCanonical = `${CANONICAL_ORIGIN}${page.path === '/' ? '/' : page.path}`;
  if (!expectedCanonical.startsWith('https://igameing.growthservice.in')) {
    console.error(`❌ Smoke Test Canonical Error on ${sample.path}: ${expectedCanonical}`);
    process.exit(1);
  }

  // Title Validation
  if (!page.title || page.title.length < 15) {
    console.error(`❌ Smoke Test Title Too Short on ${sample.path}: "${page.title}"`);
    process.exit(1);
  }

  // Description Validation
  if (!page.description || page.description.length < 50) {
    console.error(`❌ Smoke Test Description Too Short on ${sample.path}: "${page.description}"`);
    process.exit(1);
  }

  smokePassCount++;
}

console.log(`✅ All ${smokePassCount} cornerstone smoke test routes passed verification!`);
