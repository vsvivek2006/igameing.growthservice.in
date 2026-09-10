/**
 * Route Path Normalization
 * Ensures consistent canonical formatting, strips duplicate slashes, handles trailing slashes.
 */

export function normalizePath(path: string): string {
  if (!path) return '/';

  // Strip query strings and hash fragments
  const clean = path.split('?')[0].split('#')[0].trim();

  // Replace backslashes and redundant consecutive slashes
  let normalized = clean.replace(/\\/g, '/').replace(/\/+/g, '/');

  // Ensure leading slash
  if (!normalized.startsWith('/')) {
    normalized = '/' + normalized;
  }

  // Remove trailing slash for all non-root paths
  if (normalized.length > 1 && normalized.endsWith('/')) {
    normalized = normalized.slice(0, -1);
  }

  return normalized.toLowerCase();
}
