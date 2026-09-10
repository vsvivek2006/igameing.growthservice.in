/**
 * iGaming Growth Route Resolver
 * Resolves application paths to 200 OK canonical routes, 301 alias redirects, or 404 errors.
 */

import { RouteResolution } from './route-types';
import { normalizePath } from './route-normalization';
import { APP_ROUTES, getRouteAliases } from './route-registry';
import {
  buildGameCategoryPath,
  buildGuidePath,
  buildReviewPath,
  buildPaymentMethodPath,
} from './route-builders';
import { gameCategories } from '../data/gameCategories';
import { guidesData } from '../data/guidesData';
import { reviewsData } from '../data/reviewsData';
import { paymentMethodsData } from '../data/paymentMethods';

// Map lookups for fast resolution
const gameMap = new Map(gameCategories.map((g) => [g.slug.toLowerCase(), g]));
const guideMap = new Map(guidesData.map((g) => [g.slug.toLowerCase(), g]));
const reviewMap = new Map(reviewsData.map((r) => [r.slug.toLowerCase(), r]));
const paymentMap = new Map(paymentMethodsData.map((p) => [p.slug.toLowerCase(), p]));

export function resolveRoute(rawPath: string): RouteResolution {
  const clean = normalizePath(rawPath);

  // 1. Registered Static Routes
  for (const route of Object.values(APP_ROUTES)) {
    if (route.canonical === clean || route.path === clean) {
      return {
        status: 200,
        kind: 'static',
        canonical: route.canonical,
        label: route.label,
      };
    }
  }

  // 2. Static Alias Redirects
  const aliases = getRouteAliases();
  for (const alias of aliases) {
    if (alias.from === clean) {
      return {
        status: 301,
        kind: 'alias',
        canonical: alias.to,
        from: alias.from,
        to: alias.to,
        permanent: alias.permanent,
      };
    }
  }

  // 3. Dynamic Game Category (/games/:gameSlug)
  const gameMatch = clean.match(/^\/games\/([^/]+)$/);
  if (gameMatch) {
    const slug = gameMatch[1];
    const game = gameMap.get(slug);
    if (game) {
      return {
        status: 200,
        kind: 'dynamic-game',
        canonical: buildGameCategoryPath(game.slug),
        entityId: game.slug,
        label: `${game.title} Guide & House Edge Analysis`,
        params: { gameSlug: game.slug },
      };
    }
    return {
      status: 404,
      kind: 'not-found',
      reason: `Game category "${slug}" not found`,
    };
  }

  // 4. Dynamic Casino Guides (/casino-guides/:guideSlug)
  const casinoGuideMatch = clean.match(/^\/casino-guides\/([^/]+)$/);
  if (casinoGuideMatch) {
    const slug = casinoGuideMatch[1];
    const guide = guideMap.get(slug);
    if (guide && guide.category === 'casino-guides') {
      return {
        status: 200,
        kind: 'dynamic-guide',
        canonical: buildGuidePath(guide.slug, false),
        entityId: guide.slug,
        label: guide.title,
        params: { guideSlug: guide.slug },
      };
    }
    return {
      status: 404,
      kind: 'not-found',
      reason: `Casino guide "${slug}" not found`,
    };
  }

  // 5. Dynamic Game Strategy Guides (/game-guides/:guideSlug)
  const gameGuideMatch = clean.match(/^\/game-guides\/([^/]+)$/);
  if (gameGuideMatch) {
    const slug = gameGuideMatch[1];
    const guide = guideMap.get(slug);
    if (guide && (guide.category === 'game-guides' || guide.category === 'bankroll')) {
      return {
        status: 200,
        kind: 'dynamic-guide',
        canonical: buildGuidePath(guide.slug, true),
        entityId: guide.slug,
        label: guide.title,
        params: { guideSlug: guide.slug },
      };
    }
    return {
      status: 404,
      kind: 'not-found',
      reason: `Game strategy guide "${slug}" not found`,
    };
  }

  // 6. Dynamic Platform / Software Reviews (/reviews/:reviewSlug)
  const reviewMatch = clean.match(/^\/reviews\/([^/]+)$/);
  if (reviewMatch) {
    const slug = reviewMatch[1];
    const review = reviewMap.get(slug);
    if (review) {
      return {
        status: 200,
        kind: 'dynamic-review',
        canonical: buildReviewPath(review.slug),
        entityId: review.slug,
        label: `${review.name} Review & Rating`,
        params: { reviewSlug: review.slug },
      };
    }
    return {
      status: 404,
      kind: 'not-found',
      reason: `Review "${slug}" not found`,
    };
  }

  // 7. Dynamic Payment Method Guides (/payment-methods/:methodSlug)
  const paymentMatch = clean.match(/^\/payment-methods\/([^/]+)$/);
  if (paymentMatch) {
    const slug = paymentMatch[1];
    const method = paymentMap.get(slug);
    if (method) {
      return {
        status: 200,
        kind: 'dynamic-payment',
        canonical: buildPaymentMethodPath(method.slug),
        entityId: method.slug,
        label: `${method.name} Deposit & Withdrawal Guide`,
        params: { methodSlug: method.slug },
      };
    }
    return {
      status: 404,
      kind: 'not-found',
      reason: `Payment method "${slug}" not found`,
    };
  }

  // 8. Unknown route
  return {
    status: 404,
    kind: 'not-found',
    reason: `Route "${clean}" not recognized`,
  };
}

export function isValidCanonicalRoute(path: string): boolean {
  return resolveRoute(path).status === 200;
}
