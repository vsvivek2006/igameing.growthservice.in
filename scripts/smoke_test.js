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

// 2. Alias Resolution Validation (Simulated 301 Permanent Redirect)
const ALIAS_TESTS = [
  { from: '/get-proposal', expectedTo: '/contact' },
  { from: '/guides', expectedTo: '/resources' },
  { from: '/schedule', expectedTo: '/book-call' },
  { from: '/services/social-media-marketing', expectedTo: '/services/meta-ads' },
];

let aliasPassCount = 0;
for (const alias of ALIAS_TESTS) {
  const route = resolveRoute(alias.from);
  const dest = route.to || route.canonical;
  if (!route || route.status !== 301 || dest !== alias.expectedTo) {
    console.error(
      `❌ Smoke Test Alias Failure on ${alias.from}: status ${route?.status}, to ${dest} (expected ${alias.expectedTo})`
    );
    process.exit(1);
  }
  aliasPassCount++;
}

// 3. Unknown Route Resolution Validation (Simulated 404 Not Found)
const NOT_FOUND_TESTS = [
  '/non-existent-page-xyz',
  '/games/slots',
  '/casino-review-xyz',
];

let notFoundPassCount = 0;
for (const invalidPath of NOT_FOUND_TESTS) {
  const route = resolveRoute(invalidPath);
  if (!route || route.status !== 404) {
    console.error(`❌ Smoke Test 404 Failure on ${invalidPath}: status ${route?.status} (expected 404)`);
    process.exit(1);
  }
  notFoundPassCount++;
}

// 4. Static Asset Verification (Filesystem presence and non-empty content)
import fs from 'fs';
import path from 'path';

const STATIC_ASSETS = ['public/robots.txt', 'public/sitemap.xml', 'public/llms.txt'];
for (const asset of STATIC_ASSETS) {
  const fullPath = path.resolve(asset);
  if (!fs.existsSync(fullPath) || fs.statSync(fullPath).size === 0) {
    console.error(`❌ Smoke Test Static Asset Missing or Empty: ${asset}`);
    process.exit(1);
  }
}

console.log(`✅ Smoke Test Suite Passed (Local Resolver & Static Asset Check):`);
console.log(`   • ${smokePassCount} Canonical routes resolved to 200 OK`);
console.log(`   • ${aliasPassCount} Route aliases resolved to 301 Permanent Redirect`);
console.log(`   • ${notFoundPassCount} Unknown routes resolved to 404 Not Found`);
console.log(`   • ${STATIC_ASSETS.length} Critical static assets confirmed (/robots.txt, /sitemap.xml, /llms.txt)`);
console.log(`ℹ️ Note: This verifies internal route resolution and static assets. Production HTTP status is governed by Vercel edge configuration.`);
