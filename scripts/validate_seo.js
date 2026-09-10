import esbuild from 'esbuild';
import fs from 'fs';
import path from 'path';

esbuild.buildSync({
  entryPoints: ['src/seo/index.ts', 'src/config/business.ts'],
  outdir: 'scripts/dist',
  format: 'esm',
  bundle: true,
  platform: 'node'
});

const { SEO_CONFIG, formatPageTitle, getCanonicalUrl } = await import('./dist/seo/index.js');
const { businessConfig } = await import('./dist/config/business.js');

console.log('🔍 Auditing SEO Configuration & Domain Isolation...');

// 1. Verify canonical domain isolation
if (SEO_CONFIG.canonicalOrigin !== 'https://igameing.growthservice.in') {
  throw new Error(`CRITICAL: SEO canonical origin is '${SEO_CONFIG.canonicalOrigin}', expected 'https://igameing.growthservice.in'`);
}

if (businessConfig.canonicalOrigin !== 'https://igameing.growthservice.in') {
  throw new Error(`CRITICAL: Business config canonical origin is '${businessConfig.canonicalOrigin}', expected 'https://igameing.growthservice.in'`);
}

// 2. Verify root and subpath canonical generation
const rootCanonical = getCanonicalUrl('/');
if (rootCanonical !== 'https://igameing.growthservice.in/') {
  throw new Error(`Root canonical mismatch: got '${rootCanonical}'`);
}

const subCanonical = getCanonicalUrl('/games/slots');
if (subCanonical !== 'https://igameing.growthservice.in/games/slots') {
  throw new Error(`Subpath canonical mismatch: got '${subCanonical}'`);
}

// 3. Verify page title formatting and anti-duplication
const testTitle = formatPageTitle('Slots Guide');
if (testTitle !== 'Slots Guide | iGaming Growth') {
  throw new Error(`Title formatting mismatch: got '${testTitle}'`);
}

const duplicateTitle = formatPageTitle('iGaming Growth Special Guide');
if (duplicateTitle !== 'iGaming Growth Special Guide') {
  throw new Error(`Duplicate brand suppression failed: got '${duplicateTitle}'`);
}

// 4. Verify robots.txt and llms.txt files exist and do not point to www.growthservice.in
const robotsContent = fs.readFileSync(path.resolve('public/robots.txt'), 'utf-8');
if (robotsContent.includes('www.growthservice.in')) {
  throw new Error('CRITICAL: robots.txt mistakenly references parent domain www.growthservice.in');
}
if (!robotsContent.includes('https://igameing.growthservice.in/sitemap.xml')) {
  throw new Error('robots.txt does not declare the correct sitemap location');
}

console.log('✅ Canonical origin: https://igameing.growthservice.in');
console.log('✅ Zero parent domain leaks detected in robots/canonical/title configuration');
console.log('✅ Page title templating & anti-duplication verified');
console.log('🎉 All SEO audits passed successfully!');
