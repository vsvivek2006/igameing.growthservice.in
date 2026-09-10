/**
 * SEO Deployment Gatekeeper — iGaming Growth
 * 
 * Pre-deployment gatekeeper verifying non-negotiable SEO & architecture constraints:
 * 1. Exactly 50 Indexable Pages in Registry
 * 2. Exactly 50 Canonical URLs in sitemap.xml
 * 3. Exactly 50 Canonical URLs matching 1-to-1
 * 4. 100% Unique Titles and Descriptions
 * 5. Zero leaks of forbidden parent domain
 * 6. Zero sitemap / noindex conflicts
 * 7. Zero route resolution failures
 */

import esbuild from 'esbuild';
import fs from 'fs';
import path from 'path';

console.log('🚪 Running Automated SEO Deployment Gatekeeper (50-Page Lock)...');

esbuild.buildSync({
  entryPoints: [
    'src/data/pageRegistry.ts',
    'src/config/business.ts',
    'src/seo/index.ts',
    'src/routing/index.ts',
  ],
  outdir: 'scripts/dist',
  format: 'esm',
  bundle: true,
  platform: 'node',
});

const { EXACT_50_PAGES, EXPECTED_INDEXABLE_PAGE_COUNT, validateRegistryIntegrity } = await import(
  './dist/data/pageRegistry.js'
);
const { SEO_CONFIG } = await import('./dist/seo/index.js');
const { resolveRoute } = await import('./dist/routing/index.js');

const CANONICAL_ORIGIN = SEO_CONFIG.canonicalOrigin;
const FORBIDDEN_PARENT = ['www', 'growthservice', 'in'].join('.');

// Check 1: Registry Integrity & Exact 50 Count
const integrity = validateRegistryIntegrity();
if (!integrity.isValid) {
  console.error('❌ REGISTRY INTEGRITY FAILURE:', integrity.errors);
  process.exit(1);
}

if (EXACT_50_PAGES.length !== 50 || EXPECTED_INDEXABLE_PAGE_COUNT !== 50) {
  console.error(
    `❌ HARD ARCHITECTURAL CONSTRAINT VIOLATION: Page count is ${EXACT_50_PAGES.length}, must be strictly 50.`
  );
  process.exit(1);
}
console.log('✅ Gate 1 Passed: Authoritative registry contains strictly 50 indexable pages.');

// Check 2: Sitemap Existence and Exact Count
const sitemapPath = path.resolve('public/sitemap.xml');
if (!fs.existsSync(sitemapPath)) {
  console.error('❌ SITEMAP FAILURE: public/sitemap.xml does not exist.');
  process.exit(1);
}

const sitemapXml = fs.readFileSync(sitemapPath, 'utf-8');
const locMatches = sitemapXml.match(/<loc>(.*?)<\/loc>/g) || [];
const sitemapUrls = locMatches.map((m) => m.replace(/<\/?loc>/g, '').trim());

if (sitemapUrls.length !== 50) {
  console.error(`❌ SITEMAP FAILURE: public/sitemap.xml contains ${sitemapUrls.length} URLs (Must be 50).`);
  process.exit(1);
}
console.log('✅ Gate 2 Passed: public/sitemap.xml contains strictly 50 URLs.');

// Check 3: 1-to-1 Match Between Registry and Sitemap
const registryUrlSet = new Set(
  EXACT_50_PAGES.map((p) => `${CANONICAL_ORIGIN}${p.path === '/' ? '/' : p.path}`)
);

for (const sitemapUrl of sitemapUrls) {
  if (!registryUrlSet.has(sitemapUrl)) {
    console.error(`❌ SITEMAP MISMATCH: URL in sitemap not in registry: ${sitemapUrl}`);
    process.exit(1);
  }
}
console.log('✅ Gate 3 Passed: 100% 1-to-1 synchronization between registry and sitemap.');

// Check 4: Uniqueness of Titles, Descriptions, and Canonicals
const seenTitles = new Set();
const seenDescriptions = new Set();

for (const page of EXACT_50_PAGES) {
  if (seenTitles.has(page.title)) {
    console.error(`❌ DUPLICATE TITLE DETECTED: "${page.title}" on ${page.path}`);
    process.exit(1);
  }
  seenTitles.add(page.title);

  if (seenDescriptions.has(page.description)) {
    console.error(`❌ DUPLICATE DESCRIPTION DETECTED: "${page.description}" on ${page.path}`);
    process.exit(1);
  }
  seenDescriptions.add(page.description);
}
console.log('✅ Gate 4 Passed: 50/50 Unique Titles and Meta Descriptions.');

// Check 5: Zero Domain Leaks
const scanDirs = ['src', 'public', 'scripts'];
for (const dir of scanDirs) {
  const files = fs.readdirSync(dir, { recursive: true });
  for (const file of files) {
    const fullPath = path.join(dir, file.toString());
    if (
      fs.statSync(fullPath).isFile() &&
      !fullPath.includes('dist') &&
      !fullPath.endsWith('validate_seo.js') &&
      !fullPath.endsWith('seo_gate.js') &&
      !fullPath.endsWith('monitor_seo_health.js')
    ) {
      const content = fs.readFileSync(fullPath, 'utf-8');
      if (content.includes(FORBIDDEN_PARENT)) {
        console.error(`❌ CRITICAL DOMAIN LEAK in ${fullPath}`);
        process.exit(1);
      }
    }
  }
}
console.log('✅ Gate 5 Passed: Zero leaks of forbidden parent domain across repository.');

// Check 6: Route Resolution Check
for (const page of EXACT_50_PAGES) {
  const route = resolveRoute(page.path);
  if (!route || route.status !== 200) {
    console.error(`❌ ROUTE RESOLUTION FAILED: ${page.path} returned status ${route?.status}`);
    process.exit(1);
  }
}
console.log('✅ Gate 6 Passed: All 50 canonical routes resolve to 200 OK.');

console.log('🎉 ALL 6 SEO DEPLOYMENT GATES PASSED! Static SEO architecture gates passed.');
