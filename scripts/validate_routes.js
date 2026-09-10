import esbuild from 'esbuild';

esbuild.buildSync({
  entryPoints: ['src/routing/index.ts', 'src/data/index.ts'],
  outdir: 'scripts/dist',
  format: 'esm',
  bundle: true,
  platform: 'node'
});

const { APP_ROUTES, getRouteAliases, resolveRoute } = await import('./dist/routing/index.js');
const { gameCategories } = await import('./dist/data/index.js');

console.log('🔍 Validating routes & alias resolution...');

// 1. Verify static routes
let staticCount = 0;
for (const [key, route] of Object.entries(APP_ROUTES)) {
  const resolved = resolveRoute(route.path);
  if (resolved.status !== 200) {
    throw new Error(`Route validation failed for ${key} (${route.path}): got status ${resolved.status}`);
  }
  staticCount++;
}
console.log(`✅ ${staticCount} registered static routes verified (200 OK)`);

// 2. Verify aliases
const aliases = getRouteAliases();
for (const alias of aliases) {
  const resolved = resolveRoute(alias.from);
  if (resolved.status !== 301) {
    throw new Error(`Alias validation failed for ${alias.from}: expected 301, got ${resolved.status}`);
  }
}
console.log(`✅ ${aliases.length} registered route aliases verified (301 Permanent Redirect)`);

// 3. Verify dynamic routes
for (const game of gameCategories) {
  const resolved = resolveRoute(`/games/${game.slug}`);
  if (resolved.status !== 200 || resolved.kind !== 'dynamic-game') {
    throw new Error(`Dynamic route resolution failed for /games/${game.slug}`);
  }
}
console.log(`✅ ${gameCategories.length} dynamic game routes verified (200 OK)`);

// 4. Verify 404 behavior on arbitrary invalid path
const invalid = resolveRoute('/some-completely-invalid-nonexistent-path-12345');
if (invalid.status !== 404) {
  throw new Error(`404 resolution failed for invalid path: got status ${invalid.status}`);
}
console.log(`✅ 404 handler verified for unknown paths`);

console.log('🎉 All route validations passed successfully!');
