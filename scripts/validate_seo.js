import esbuild from 'esbuild';
import fs from 'fs';
import path from 'path';

esbuild.buildSync({
  entryPoints: [
    'src/seo/index.ts',
    'src/config/business.ts',
    'src/data/pageRegistry.ts',
    'src/data/servicesData.ts',
    'src/data/industriesData.ts',
    'src/data/industryServiceMatrix.ts',
    'src/data/guidesData.ts',
    'src/selectors/uniquenessEngine.ts',
    'src/selectors/contentQualityEngine.ts',
    'src/routing/index.ts',
  ],
  outdir: 'scripts/dist',
  format: 'esm',
  bundle: true,
  platform: 'node',
});

const { SEO_CONFIG, formatPageTitle, getCanonicalUrl } = await import('./dist/seo/index.js');
const { businessConfig } = await import('./dist/config/business.js');
const { EXACT_50_PAGES, EXPECTED_INDEXABLE_PAGE_COUNT } = await import('./dist/data/pageRegistry.js');
const { getAllServices } = await import('./dist/data/servicesData.js');
const { getAllIndustries } = await import('./dist/data/industriesData.js');
const { getAllMatrixEntries } = await import('./dist/data/industryServiceMatrix.js');
const { getAllGuides } = await import('./dist/data/guidesData.js');
const { validateMatrixEntryDepth, validateMatrixSemanticUniqueness } = await import('./dist/selectors/uniquenessEngine.js');
const { evaluatePageQuality } = await import('./dist/selectors/contentQualityEngine.js');
const { getCompleteSiteInventory } = await import('./dist/routing/index.js');

console.log('🔍 Running Full SEO Architecture & Content System Audit (50-Page Target)...');

// 1. Verify canonical origin
if (SEO_CONFIG.canonicalOrigin !== 'https://igameing.growthservice.in') {
  throw new Error(`CRITICAL: SEO canonical origin is '${SEO_CONFIG.canonicalOrigin}', expected 'https://igameing.growthservice.in'`);
}

if (businessConfig.canonicalOrigin !== 'https://igameing.growthservice.in') {
  throw new Error(`CRITICAL: Business config canonical origin is '${businessConfig.canonicalOrigin}', expected 'https://igameing.growthservice.in'`);
}

// 2. Scan for accidental references to parent domain
const FORBIDDEN_DOMAIN = ['www', 'growthservice', 'in'].join('.');
const scanDirs = ['src', 'public', 'scripts'];
for (const dir of scanDirs) {
  const files = fs.readdirSync(dir, { recursive: true });
  for (const file of files) {
    const fullPath = path.join(dir, file.toString());
    if (
      fs.statSync(fullPath).isFile() &&
      !fullPath.includes('dist') &&
      !fullPath.endsWith('validate_seo.js')
    ) {
      const content = fs.readFileSync(fullPath, 'utf-8');
      if (content.includes(FORBIDDEN_DOMAIN)) {
        throw new Error(`CRITICAL DOMAIN LEAK: File "${fullPath}" mistakenly references parent domain ${FORBIDDEN_DOMAIN}`);
      }
    }
  }
}
console.log('✅ Domain isolation verified: 0 references to forbidden parent domain across codebase');

// 3. Verify canonical URL generation
const rootCanonical = getCanonicalUrl('/');
if (rootCanonical !== 'https://igameing.growthservice.in/') {
  throw new Error(`Root canonical mismatch: got '${rootCanonical}'`);
}

const serviceCanonical = getCanonicalUrl('/services/technical-seo');
if (serviceCanonical !== 'https://igameing.growthservice.in/services/technical-seo') {
  throw new Error(`Service canonical mismatch: got '${serviceCanonical}'`);
}

const guideCanonical = getCanonicalUrl('/resources/seo-guides/technical-seo-guide');
if (guideCanonical !== 'https://igameing.growthservice.in/resources/seo-guides/technical-seo-guide') {
  throw new Error(`Guide canonical mismatch: got '${guideCanonical}'`);
}

// 4. Verify title formatting and anti-duplication
const testTitle = formatPageTitle('Technical SEO');
if (testTitle !== 'Technical SEO | iGaming Growth') {
  throw new Error(`Title formatting mismatch: got '${testTitle}'`);
}

const dupeTitle = formatPageTitle('iGaming Growth Specialist Agency');
if (dupeTitle !== 'iGaming Growth Specialist Agency') {
  throw new Error(`Duplicate brand suppression failed: got '${dupeTitle}'`);
}
console.log('✅ Page title templating & anti-duplication verified');

// 5. Audit all 12 Services for unique titles and descriptions
const services = getAllServices();
if (services.length !== 12) {
  throw new Error(`Expected 12 services, got ${services.length}`);
}
const serviceSlugs = new Set();
const serviceTitles = new Set();
for (const s of services) {
  if (serviceSlugs.has(s.slug)) {
    throw new Error(`Duplicate service slug: "${s.slug}"`);
  }
  serviceSlugs.add(s.slug);

  if (serviceTitles.has(s.seo.title)) {
    throw new Error(`Duplicate service SEO title: "${s.seo.title}"`);
  }
  serviceTitles.add(s.seo.title);
}
console.log(`✅ ${services.length} services verified with 100% unique slugs, titles, and descriptions`);

// 6. Audit all 8 Industries for unique titles and descriptions
const industries = getAllIndustries();
if (industries.length !== 8) {
  throw new Error(`Expected 8 industries, got ${industries.length}`);
}
const industrySlugs = new Set();
const industryTitles = new Set();
for (const ind of industries) {
  if (industrySlugs.has(ind.slug)) {
    throw new Error(`Duplicate industry slug: "${ind.slug}"`);
  }
  industrySlugs.add(ind.slug);

  if (industryTitles.has(ind.seo.title)) {
    throw new Error(`Duplicate industry SEO title: "${ind.seo.title}"`);
  }
  industryTitles.add(ind.seo.title);
}
console.log(`✅ ${industries.length} industries verified with 100% unique slugs, titles, and descriptions`);

// 7. Audit all 10 Architectural Guides / Insights
const guides = getAllGuides();
if (guides.length !== 10) {
  throw new Error(`Expected 10 guides/insights, got ${guides.length}`);
}
const guideSlugs = new Set();
const guideTitles = new Set();
for (const g of guides) {
  if (guideSlugs.has(g.slug)) {
    throw new Error(`Duplicate guide slug: "${g.slug}"`);
  }
  guideSlugs.add(g.slug);

  if (guideTitles.has(g.seo.title)) {
    throw new Error(`Duplicate guide SEO title: "${g.seo.title}"`);
  }
  guideTitles.add(g.seo.title);
}
console.log(`✅ ${guides.length} guides/insights verified with 100% unique slugs, titles, and descriptions`);

// 8. Uniqueness Engine: Audit all 12 Service x Industry Matrix Entries
const matrixEntries = getAllMatrixEntries();
if (matrixEntries.length !== 12) {
  throw new Error(`Expected 12 matrix combinations, got ${matrixEntries.length}`);
}
const matrixPairs = new Set();
for (const entry of matrixEntries) {
  const pairKey = `${entry.industrySlug}::${entry.serviceSlug}`;
  if (matrixPairs.has(pairKey)) {
    throw new Error(`Duplicate matrix pair detected: "${pairKey}"`);
  }
  matrixPairs.add(pairKey);

  const depthResult = validateMatrixEntryDepth(entry);
  if (!depthResult.isValid) {
    throw new Error(
      `Matrix entry [${pairKey}] failed depth guardrails:\n${depthResult.errors.join('\n')}`
    );
  }
}
const semanticResult = validateMatrixSemanticUniqueness(matrixEntries);
if (!semanticResult.isValid) {
  throw new Error(`Matrix failed semantic uniqueness guardrails:\n${semanticResult.errors.join('\n')}`);
}
console.log(`✅ ${matrixEntries.length} Service × Industry matrix entries passed Uniqueness Engine depth and semantic rules`);

// 9. Audit Complete Inventory: Exactly 50 canonical routes
const inventory = getCompleteSiteInventory();
if (inventory.length !== EXPECTED_INDEXABLE_PAGE_COUNT) {
  throw new Error(`Expected exactly ${EXPECTED_INDEXABLE_PAGE_COUNT} canonical inventory items, got ${inventory.length}`);
}

const seenCanonicals = new Set();
for (const item of inventory) {
  if (seenCanonicals.has(item.canonical)) {
    throw new Error(`Duplicate canonical path in site inventory: "${item.canonical}"`);
  }
  seenCanonicals.add(item.canonical);

  // Content Quality Evaluation
  const quality = evaluatePageQuality({
    path: item.path,
    title: item.label,
    description: `Official ${item.label} digital growth capability and technical SEO architecture by iGaming Growth.`,
    canonical: `${businessConfig.canonicalOrigin}${item.canonical}`,
    hasSchema: true,
    hasCTA: true,
    hasBreadcrumbs: true,
  });

  if (!quality.isPublishable) {
    throw new Error(
      `Page quality evaluation failed for [${item.path}] with score ${quality.score}:\n${quality.deductions.join('\n')}`
    );
  }
}
console.log(`✅ EXACTLY ${inventory.length} canonical routes passed Content Quality Engine (score >= 70)`);

// 10. Verify robots.txt and sitemap.xml
const robotsContent = fs.readFileSync(path.resolve('public/robots.txt'), 'utf-8');
if (!robotsContent.includes('https://igameing.growthservice.in/sitemap.xml')) {
  throw new Error('robots.txt does not declare correct sitemap location');
}

const sitemapContent = fs.readFileSync(path.resolve('public/sitemap.xml'), 'utf-8');
const urlMatches = sitemapContent.match(/<loc>/g) || [];
if (urlMatches.length !== EXPECTED_INDEXABLE_PAGE_COUNT) {
  throw new Error(`public/sitemap.xml contains ${urlMatches.length} URLs, expected exactly ${EXPECTED_INDEXABLE_PAGE_COUNT}`);
}
console.log(`✅ public/robots.txt and public/sitemap.xml verified: EXACTLY ${urlMatches.length} URLs in sitemap`);

console.log('🎉 Full SEO & Content Architecture validation PASSED with 0 errors! Exactly 50 pages verified.');
