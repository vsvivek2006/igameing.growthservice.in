# Production Launch & Go-Live Verification Checklist

**Target Domain**: `https://igameing.growthservice.in`  
**Standard**: 100% of checks must pass before greenlighting public production traffic.

---

## 1. Pre-Deployment Technical Gates

- [ ] **Exact 50-Page Lock**:
  ```bash
  npm run seo:gate
  ```
  *Must exit with code 0 (50 canonical pages, 50 sitemap URLs, 0 duplicates, 0 leaks).*
- [ ] **Architecture Smoke Test**:
  ```bash
  npm run smoke:test
  ```
  *Must exit with code 0 across all 15 cornerstone sample routes.*
- [ ] **TypeScript Typecheck**:
  ```bash
  npm run typecheck
  ```
  *Must exit with code 0 (`tsc --noEmit`).*
- [ ] **Code Quality & Linter**:
  ```bash
  npm run lint
  ```
  *Must exit with 0 errors and 0 warnings.*
- [ ] **Production Build**:
  ```bash
  npm run build
  ```
  *Must compile complete production bundle cleanly.*

---

## 2. Infrastructure, Security & Protocol Verification

- [ ] **HTTPS Enforced**: HTTP strictly redirects to HTTPS (301 Permanent Redirect).
- [ ] **No Subdomain Fragmentation**: Zero `www.` subdomain confusion. Canonical domain is strictly `https://igameing.growthservice.in`.
- [ ] **Domain Isolation**: Zero occurrences of forbidden parent domain (`growthservice.in` without `igameing.`) in client-facing assets or canonical metadata.
- [ ] **Honeypot Protection**: Anti-bot honeypot inputs present on `/free-seo-audit`, `/contact`, and `/book-call`.
- [ ] **Zero PII in Analytics**: Confirm network payload inspection shows zero names, emails, or phone numbers transmitted to telemetry providers.

---

## 3. SEO & Crawlability Verification

- [ ] **`robots.txt`**: Accessible at `https://igameing.growthservice.in/robots.txt`, allows general crawl, declares sitemap location.
- [ ] **`sitemap.xml`**: Accessible at `https://igameing.growthservice.in/sitemap.xml`, contains strictly 50 canonical `<url>` nodes.
- [ ] **Canonical Tags**: Verified on live render: all pages declare self-referential canonical pointing to `https://igameing.growthservice.in/...`.
- [ ] **Structured Data**: JSON-LD entities (`Organization`, `WebSite`, `Service`, `Article`, `BreadcrumbList`, `FAQPage`) pass Google Rich Results test with zero errors.
- [ ] **404 Handling**: Non-existent route (e.g. `/random-broken-path`) returns custom `NotFound` view with 200/404 client handling and zero broken redirects.

---

## 4. Analytics & Conversion Telemetry Verification

- [ ] **Environment Detection**: Verified in production that `analyticsConfig.isProduction === true` and `analyticsConfig.enabled === true`.
- [ ] **Page View Dispatch**: Client-side route changes trigger single `page_view` events with complete `page_type`, `service_slug`, and `industry_slug`.
- [ ] **CTA Telemetry**: Clicks on primary buttons (`Free SEO Audit`, `Book Strategy Call`) emit `cta_click` with exact location tags.
- [ ] **Form Funnel**:
  - Form open emits `form_view`.
  - Field focus emits `form_start`.
  - Validation error emits `form_error` (zero PII).
  - Valid submission emits `generate_lead`.
- [ ] **Deduplication Guard**: Double-clicking submit button emits exactly ONE `generate_lead` event.

---

## 5. Mobile & UX Verification

- [ ] **Responsive Breakpoints**: Tested on 320px, 375px, 414px, 768px, 1024px, 1440px.
- [ ] **Zero Horizontal Overflow**: No horizontal scrollbars or clipping.
- [ ] **Touch Targets**: All buttons, links, and form fields possess minimum 44×44px interactive areas.
- [ ] **Mobile Drawer Navigation**: Opens cleanly, closes on overlay click, contains direct links to `/free-seo-audit` and `/book-call`.

---

## 6. Emergency Rollback Protocol

If critical rendering or indexation errors occur post-launch:
1. **Identify Stable Commit**: Tag prior stable release hash.
2. **Revert**: `git revert <bad_commit> -m 1`
3. **Verify Locally**: `npm run seo:gate && npm run build`
4. **Deploy**: Push revert commit to trigger immediate hosting platform deployment.
5. **Clear Cache**: Trigger CDN edge purge for affected routes.
