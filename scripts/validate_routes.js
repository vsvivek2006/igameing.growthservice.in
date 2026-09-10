import esbuild from 'esbuild';

esbuild.buildSync({
  entryPoints: [
    'src/routing/index.ts',
    'src/data/pageRegistry.ts',
    'src/data/servicesData.ts',
    'src/data/industriesData.ts',
    'src/data/industryServiceMatrix.ts',
    'src/data/guidesData.ts',
  ],
  outdir: 'scripts/dist',
  format: 'esm',
  bundle: true,
  platform: 'node',
});

const { APP_ROUTES, getRouteAliases, resolveRoute, getCompleteSiteInventory } = await import(
  './dist/routing/index.js'
);
const { EXACT_50_PAGES, EXPECTED_INDEXABLE_PAGE_COUNT, validateRegistryIntegrity } = await import(
  './dist/data/pageRegistry.js'
);
const { getAllServices } = await import('./dist/data/servicesData.js');
const { getAllIndustries } = await import('./dist/data/industriesData.js');
const { getAllMatrixEntries } = await import('./dist/data/industryServiceMatrix.js');
const { getAllGuides } = await import('./dist/data/guidesData.js');

console.log('🔍 Validating 50-Page Operating System & Route Resolution...');

// 1. Validate Registry Integrity
const integrity = validateRegistryIntegrity();
if (!integrity.isValid) {
  throw new Error(`CRITICAL REGISTRY INTEGRITY FAILURE:\n${integrity.errors.join('\n')}`);
}
console.log(`✅ Authoritative Registry contains exactly ${integrity.count} validated indexable pages`);

// 2. Verify Exact Page Count Breakdown
const corePages = EXACT_50_PAGES.filter((p) => p.category === 'core');
const servicePages = EXACT_50_PAGES.filter((p) => p.category === 'service');
const industryPages = EXACT_50_PAGES.filter((p) => p.category === 'industry');
const matrixPages = EXACT_50_PAGES.filter((p) => p.category === 'industry-service');
const seoGuides = EXACT_50_PAGES.filter((p) => p.category === 'seo-guide');
const industryInsights = EXACT_50_PAGES.filter((p) => p.category === 'industry-insight');

if (corePages.length !== 8) throw new Error(`Expected 8 Core pages, got ${corePages.length}`);
if (servicePages.length !== 12) throw new Error(`Expected 12 Service pages, got ${servicePages.length}`);
if (industryPages.length !== 8) throw new Error(`Expected 8 Industry pages, got ${industryPages.length}`);
if (matrixPages.length !== 12) throw new Error(`Expected 12 Industry x Service pages, got ${matrixPages.length}`);
if (seoGuides.length !== 7) throw new Error(`Expected 7 SEO Guides, got ${seoGuides.length}`);
if (industryInsights.length !== 3) throw new Error(`Expected 3 Industry Insights, got ${industryInsights.length}`);

console.log('📊 Page Breakdown Validated:');
console.log(`   - Group A (Core Business / Company): ${corePages.length}`);
console.log(`   - Group B (Core Service Pages): ${servicePages.length}`);
console.log(`   - Group C (Industry Pillar Pages): ${industryPages.length}`);
console.log(`   - Group D (High-Value Industry × Service): ${matrixPages.length}`);
console.log(`   - Group E (SEO / Technical Authority Guides): ${seoGuides.length}`);
console.log(`   - Group F (Industry / Strategic Authority): ${industryInsights.length}`);
console.log(`   - TOTAL INDEXABLE PAGES: ${EXACT_50_PAGES.length} (Target: ${EXPECTED_INDEXABLE_PAGE_COUNT})`);

// 3. Verify all 50 registered pages resolve to 200 OK
for (const page of EXACT_50_PAGES) {
  const resolved = resolveRoute(page.path);
  if (resolved.status !== 200) {
    throw new Error(`Route resolution failed for [${page.path}]: got status ${resolved.status}`);
  }
}
console.log(`✅ All 50 canonical pages resolve to 200 OK`);

// 4. Verify static route bindings
for (const [key, route] of Object.entries(APP_ROUTES)) {
  const resolved = resolveRoute(route.path);
  if (resolved.status !== 200) {
    throw new Error(`Static route validation failed for ${key} (${route.path}): got status ${resolved.status}`);
  }
}
console.log(`✅ Static routes verified (200 OK)`);

// 5. Verify Aliases (301 Permanent Redirect)
const aliases = getRouteAliases();
for (const alias of aliases) {
  const resolved = resolveRoute(alias.from);
  if (resolved.status !== 301) {
    throw new Error(`Alias validation failed for ${alias.from}: expected 301, got ${resolved.status}`);
  }
}
console.log(`✅ ${aliases.length} registered route aliases verified (301 Permanent Redirect)`);

// 6. Verify Complete Inventory matches 50 pages exactly
const inventory = getCompleteSiteInventory();
if (inventory.length !== EXPECTED_INDEXABLE_PAGE_COUNT) {
  throw new Error(`Inventory count mismatch: expected ${EXPECTED_INDEXABLE_PAGE_COUNT}, got ${inventory.length}`);
}
console.log(`✅ Complete Site Inventory confirmed: ${inventory.length} canonical indexable URLs`);

// 7. Verify 404 behavior across all required invalid scenarios
const invalidPaths = [
  '/random-page',
  '/random/service',
  '/services/nonexistent',
  '/industries/nonexistent',
  '/industries/gaming/nonexistent',
  '/resources/seo-guides/nonexistent',
  '/resources/industry-insights/nonexistent',
];

for (const path of invalidPaths) {
  const invalid = resolveRoute(path);
  if (invalid.status !== 404) {
    throw new Error(`404 resolution failed for invalid path [${path}]: expected 404, got ${invalid.status}`);
  }
}
console.log(`✅ 404 handler verified across all invalid route scenarios`);

console.log('🎉 All route validations passed successfully! Exactly 50 indexable pages confirmed.');
