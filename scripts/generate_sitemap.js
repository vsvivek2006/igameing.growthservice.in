import esbuild from 'esbuild';
import fs from 'fs';
import path from 'path';

// 1. Bundle TS modules for node runner
esbuild.buildSync({
  entryPoints: [
    'src/routing/index.ts',
    'src/data/pageRegistry.ts',
    'src/config/business.ts',
  ],
  outdir: 'scripts/dist',
  format: 'esm',
  bundle: true,
  platform: 'node',
});

const { getCompleteSiteInventory, buildCanonicalUrl } = await import('./dist/routing/index.js');
const { EXPECTED_INDEXABLE_PAGE_COUNT } = await import('./dist/data/pageRegistry.js');
const { businessConfig } = await import('./dist/config/business.js');

const inventory = getCompleteSiteInventory();

const urls = [];
const seen = new Set();

function addUrl(loc, priority, changefreq) {
  const clean = loc.trim();
  if (!clean.startsWith('https://igameing.growthservice.in')) {
    throw new Error(`CRITICAL SEO VIOLATION: URL does not belong to canonical domain: ${clean}`);
  }
  if (seen.has(clean)) {
    throw new Error(`Duplicate sitemap URL detected: ${clean}`);
  }
  seen.add(clean);
  urls.push({
    loc: clean,
    priority: Number(priority).toFixed(1),
    changefreq,
  });
}

// Populate from authoritative inventory
for (const item of inventory) {
  if (item.includeInSitemap && item.indexable) {
    addUrl(buildCanonicalUrl(item.canonical), item.priority, item.changefreq);
  }
}

// Enforce Hard 50-Page Architectural Limit
if (urls.length !== EXPECTED_INDEXABLE_PAGE_COUNT) {
  throw new Error(
    `CRITICAL SITEMAP ERROR: Expected exactly ${EXPECTED_INDEXABLE_PAGE_COUNT} URLs, generated ${urls.length}`
  );
}

// Generate XML
let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

for (const u of urls) {
  xml += '  <url>\n';
  xml += `    <loc>${u.loc}</loc>\n`;
  xml += `    <changefreq>${u.changefreq}</changefreq>\n`;
  xml += `    <priority>${u.priority}</priority>\n`;
  xml += '  </url>\n';
}

xml += '</urlset>\n';

const outputPath = path.resolve('public/sitemap.xml');
fs.writeFileSync(outputPath, xml, 'utf-8');

console.log(`✅ Authoritative sitemap.xml generated: EXACTLY ${urls.length} indexable canonical URLs`);
console.log(`🌐 Verified canonical origin: ${businessConfig.canonicalOrigin}`);
