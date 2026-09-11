import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server.js';
import { Routes, Route } from 'react-router-dom';
import esbuild from 'esbuild';
import path from 'path';

console.log('🧪 Building components for SSR/Rendering test...');

// Bundle src files for node environment
esbuild.buildSync({
  entryPoints: [
    'src/data/pageRegistry.ts',
    'src/pages/Home.tsx',
    'src/pages/ServicesHub.tsx',
    'src/pages/ServiceDetailPage.tsx',
    'src/pages/IndustriesHub.tsx',
    'src/pages/IndustryDetailPage.tsx',
    'src/pages/ServiceIndustryDetailPage.tsx',
    'src/pages/ResourcesHub.tsx',
    'src/pages/GuideDetailPage.tsx',
    'src/pages/FreeSeoAuditPage.tsx',
    'src/pages/BookCallPage.tsx',
    'src/pages/ContactPage.tsx',
    'src/pages/AboutPage.tsx',
    'src/pages/EditorialPolicyPage.tsx',
    'src/pages/TermsPage.tsx',
    'src/pages/PrivacyPage.tsx',
    'src/pages/NotFound.tsx'
  ],
  outdir: 'scripts/dist/render_test',
  format: 'esm',
  bundle: true,
  platform: 'node',
  jsx: 'automatic',
  banner: {
    js: "import { createRequire as __createRequire } from 'module'; const require = __createRequire(import.meta.url);"
  },
  external: [
    'react',
    'react-dom',
    'react-dom/server',
    'react-router-dom',
    'react-router-dom/server.js',
    'react-helmet'
  ]
});

console.log('📦 Loading compiled components...');

const { EXACT_50_PAGES } = await import('./dist/render_test/data/pageRegistry.js');
const Home = (await import('./dist/render_test/pages/Home.js')).default;
const ServicesHub = (await import('./dist/render_test/pages/ServicesHub.js')).default;
const ServiceDetailPage = (await import('./dist/render_test/pages/ServiceDetailPage.js')).default;
const IndustriesHub = (await import('./dist/render_test/pages/IndustriesHub.js')).default;
const IndustryDetailPage = (await import('./dist/render_test/pages/IndustryDetailPage.js')).default;
const ServiceIndustryDetailPage = (await import('./dist/render_test/pages/ServiceIndustryDetailPage.js')).ServiceIndustryDetailPage;
const ResourcesHub = (await import('./dist/render_test/pages/ResourcesHub.js')).default;
const GuideDetailPage = (await import('./dist/render_test/pages/GuideDetailPage.js')).GuideDetailPage;
const FreeSeoAuditPage = (await import('./dist/render_test/pages/FreeSeoAuditPage.js')).default;
const BookCallPage = (await import('./dist/render_test/pages/BookCallPage.js')).default;
const ContactPage = (await import('./dist/render_test/pages/ContactPage.js')).default;
const AboutPage = (await import('./dist/render_test/pages/AboutPage.js')).default;
const EditorialPolicyPage = (await import('./dist/render_test/pages/EditorialPolicyPage.js')).default;
const TermsPage = (await import('./dist/render_test/pages/TermsPage.js')).default;
const PrivacyPage = (await import('./dist/render_test/pages/PrivacyPage.js')).default;
const NotFound = (await import('./dist/render_test/pages/NotFound.js')).default;

function TestApp({ location }) {
  return React.createElement(
    StaticRouter,
    { location },
    React.createElement(
      Routes,
      null,
      React.createElement(Route, { path: '/', element: React.createElement(Home) }),
      React.createElement(Route, { path: '/about', element: React.createElement(AboutPage) }),
      React.createElement(Route, { path: '/contact', element: React.createElement(ContactPage) }),
      React.createElement(Route, { path: '/services', element: React.createElement(ServicesHub) }),
      React.createElement(Route, { path: '/industries', element: React.createElement(IndustriesHub) }),
      React.createElement(Route, { path: '/resources', element: React.createElement(ResourcesHub) }),
      React.createElement(Route, { path: '/free-seo-audit', element: React.createElement(FreeSeoAuditPage) }),
      React.createElement(Route, { path: '/book-call', element: React.createElement(BookCallPage) }),
      React.createElement(Route, { path: '/editorial-policy', element: React.createElement(EditorialPolicyPage) }),
      React.createElement(Route, { path: '/terms', element: React.createElement(TermsPage) }),
      React.createElement(Route, { path: '/privacy', element: React.createElement(PrivacyPage) }),
      React.createElement(Route, { path: '/services/:serviceSlug', element: React.createElement(ServiceDetailPage) }),
      React.createElement(Route, { path: '/industries/:industrySlug', element: React.createElement(IndustryDetailPage) }),
      React.createElement(Route, { path: '/industries/:industrySlug/:serviceSlug', element: React.createElement(ServiceIndustryDetailPage) }),
      React.createElement(Route, { path: '/resources/seo-guides/:guideSlug', element: React.createElement(GuideDetailPage) }),
      React.createElement(Route, { path: '/resources/industry-insights/:guideSlug', element: React.createElement(GuideDetailPage) }),
      React.createElement(Route, { path: '*', element: React.createElement(NotFound) })
    )
  );
}

const ALL_TEST_PATHS = [
  ...EXACT_50_PAGES.map(p => ({ path: p.path, category: p.category, canonical: true })),
  { path: '/editorial-policy', category: 'legal', canonical: false },
  { path: '/terms', category: 'legal', canonical: false },
  { path: '/privacy', category: 'legal', canonical: false },
  { path: '/non-existent-sample-route', category: '404-fallback', canonical: false }
];

console.log(`\n🚀 Starting React render test across ${ALL_TEST_PATHS.length} distinct paths...\n`);

let passCount = 0;
let failCount = 0;
let totalRenderTime = 0;

for (const item of ALL_TEST_PATHS) {
  const start = performance.now();
  try {
    const html = renderToString(React.createElement(TestApp, { location: item.path }));
    const duration = (performance.now() - start).toFixed(2);
    totalRenderTime += parseFloat(duration);

    const is404Content = html.includes('HTTP 404 — Resource Not Found');
    if (item.canonical && is404Content) {
      console.error(`❌ [CANONICAL FELL TO 404] ${item.path} (${duration}ms)`);
      failCount++;
    } else if (html.length < 500) {
      console.error(`❌ [SUSPICIOUSLY EMPTY HTML] ${item.path} (${duration}ms, length: ${html.length})`);
      failCount++;
    } else {
      console.log(`✅ [RENDERED OK] ${item.path} — ${item.category} (${duration}ms, ${html.length} chars)`);
      passCount++;
    }
  } catch (err) {
    console.error(`❌ [RENDER ERROR CRASH] ${item.path}:`, err.message);
    console.error(err.stack);
    failCount++;
  }
}

const avgRenderTime = (totalRenderTime / ALL_TEST_PATHS.length).toFixed(2);
console.log(`\n======================================================`);
console.log(`📊 React Virtual DOM Render Verification Summary:`);
console.log(`   - Total Paths Evaluated: ${ALL_TEST_PATHS.length}`);
console.log(`   - Render Successes: ${passCount}`);
console.log(`   - Render Failures: ${failCount}`);
console.log(`   - Average Render Time: ${avgRenderTime}ms`);
console.log(`   - Status: ${failCount === 0 ? 'PERFECT - ZERO RENDERING ERRORS' : 'FAILURES DETECTED'}`);
console.log(`======================================================\n`);

if (failCount > 0) process.exit(1);
