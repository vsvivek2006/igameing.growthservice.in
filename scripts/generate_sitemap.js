import esbuild from 'esbuild';
import fs from 'fs';
import path from 'path';

// 1. Bundle TS data, config, and routing modules to temporary runner
esbuild.buildSync({
  entryPoints: [
    'src/routing/index.ts',
    'src/data/index.ts',
    'src/config/business.ts'
  ],
  outdir: 'scripts/dist',
  format: 'esm',
  bundle: true,
  platform: 'node'
});

const {
  getSitemapRoutes,
  buildCanonicalUrl,
  buildGameCategoryPath,
  buildGuidePath,
  buildReviewPath,
  buildPaymentMethodPath,
} = await import('./dist/routing/index.js');

const {
  gameCategories,
  guidesData,
  reviewsData,
  paymentMethodsData,
} = await import('./dist/data/index.js');

const { businessConfig } = await import('./dist/config/business.js');

const urls = [];
const seen = new Set();

function addUrl(loc, priority, changefreq) {
  const clean = loc.trim();
  if (!clean.startsWith('https://igameing.growthservice.in')) {
    throw new Error(`CRITICAL SEO VIOLATION: URL does not belong to canonical domain: ${clean}`);
  }
  if (seen.has(clean)) {
    throw new Error(`Duplicate sitemap URL generated: ${clean}`);
  }
  seen.add(clean);
  urls.push({
    loc: clean,
    priority: Number(priority).toFixed(1),
    changefreq,
  });
}

// 1. Static Canonical Indexable Pages from route registry
for (const route of getSitemapRoutes()) {
  addUrl(
    buildCanonicalUrl(route.canonical),
    route.priority || 0.7,
    route.changefreq || 'weekly'
  );
}

// 2. Dynamic Game Category Pages
for (const game of gameCategories) {
  addUrl(
    buildCanonicalUrl(buildGameCategoryPath(game.slug)),
    0.8,
    'weekly'
  );
}

// 3. Dynamic Educational Guides
for (const guide of guidesData) {
  addUrl(
    buildCanonicalUrl(buildGuidePath(guide.slug, guide.category === 'game-guides')),
    0.8,
    'monthly'
  );
}

// 4. Dynamic Platform Reviews
for (const review of reviewsData) {
  addUrl(
    buildCanonicalUrl(buildReviewPath(review.slug)),
    0.7,
    'monthly'
  );
}

// 5. Dynamic Payment Method Guides
for (const method of paymentMethodsData) {
  addUrl(
    buildCanonicalUrl(buildPaymentMethodPath(method.slug)),
    0.7,
    'monthly'
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

console.log(`✅ Authoritative sitemap.xml generated successfully: ${urls.length} URLs written to ${outputPath}`);
console.log(`🌐 Verified canonical origin: ${businessConfig.canonicalOrigin}`);
