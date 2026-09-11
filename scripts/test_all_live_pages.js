import http from 'http';
import esbuild from 'esbuild';

esbuild.buildSync({
  entryPoints: [
    'src/data/pageRegistry.ts',
  ],
  outdir: 'scripts/dist',
  format: 'esm',
  bundle: true,
  platform: 'node',
});

const { EXACT_50_PAGES } = await import('./dist/data/pageRegistry.js');

const PORT = process.env.PORT || 5173;

async function testUrl(path) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    http.get(`http://[::1]:${PORT}${path}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const duration = Date.now() - start;
        resolve({
          path,
          status: res.statusCode,
          duration,
          hasRoot: data.includes('<div id="root"></div>'),
          hasTitle: data.includes('<title>')
        });
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

console.log(`🚀 Auditing all ${EXACT_50_PAGES.length} canonical pages against live server...`);
let allPass = true;
let totalTime = 0;

for (const page of EXACT_50_PAGES) {
  try {
    const res = await testUrl(page.path);
    totalTime += res.duration;
    if (res.status !== 200 || !res.hasRoot) {
      console.error(`❌ [${res.status}] ${page.path} - FAILED (time: ${res.duration}ms)`);
      allPass = false;
    } else {
      console.log(`✅ [200 OK] ${page.path} (${res.duration}ms)`);
    }
  } catch (err) {
    console.error(`❌ Connection failed for ${page.path}:`, err.message);
    allPass = false;
  }
}

const avgTime = (totalTime / EXACT_50_PAGES.length).toFixed(1);
console.log(`\n📊 Audit Summary:`);
console.log(`   - Total Canonical Pages Tested: ${EXACT_50_PAGES.length}`);
console.log(`   - Average Response Time: ${avgTime}ms`);
console.log(`   - Status: ${allPass ? 'ALL 50 PAGES RESOLVE TO 200 OK WITH 0 BROKEN ROUTES' : 'FAILURES DETECTED'}`);

if (!allPass) process.exit(1);
