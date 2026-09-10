# Google Search Console Launch & Production Operations Runbook

**Production Domain**: `https://igameing.growthservice.in`  
**Sitemap URL**: `https://igameing.growthservice.in/sitemap.xml`  
**Master Inventory**: `https://igameing.growthservice.in/seo_launch_manifest.json`  
**Indexable Page Target**: Exactly 50 Canonical URLs  

---

## 1. Property Setup & Ownership Verification

1. **Property Type**: URL-Prefix Property: `https://igameing.growthservice.in/`
2. **Canonical Protocol**: HTTPS strictly enforced. No `www.` subdomain.
3. **Recommended Verification Methods**:
   - **DNS TXT Record** (Primary): Add DNS TXT record `google-site-verification=...` on `growthservice.in` nameservers for hostname `igameing`.
   - **HTML Meta Tag** (Secondary): Add verification token to `<SEOHead>` if DNS is pending.

---

## 2. Sitemap Submission Sequence

1. Navigate to **Search Console > Sitemaps**.
2. Submit path: `sitemap.xml`.
3. Confirm Status: **Success** (50 URLs discovered).
4. Automated verification check:
   ```bash
   npm run sitemap:generate
   npm run seo:monitor
   ```

---

## 3. High-Priority Live URL Inspection Queue

Upon verified ownership, immediately inspect the following 10 cornerstone URLs using Google's URL Inspection Tool and request manual indexation:

| Priority | URL | Page Type | Strategic Intent |
| :--- | :--- | :--- | :--- |
| **1** | `https://igameing.growthservice.in/` | Home | Brand anchor & root entity authority |
| **2** | `https://igameing.growthservice.in/services/seo` | Service Hub | Core commercial pillar |
| **3** | `https://igameing.growthservice.in/services/technical-seo` | Service Hub | Primary technical service |
| **4** | `https://igameing.growthservice.in/services/website-development` | Service Hub | Engineering capability hub |
| **5** | `https://igameing.growthservice.in/industries/gaming` | Industry Pillar | Flagship vertical pillar |
| **6** | `https://igameing.growthservice.in/industries/casino` | Industry Pillar | High-value commercial vertical |
| **7** | `https://igameing.growthservice.in/industries/stock-market` | Industry Pillar | High-intent financial trading vertical |
| **8** | `https://igameing.growthservice.in/industries/gaming/seo` | Group D Matrix | High-intent commercial pair |
| **9** | `https://igameing.growthservice.in/resources/seo-guides/technical-seo-guide` | Group E Guide | Flagship B2B inbound technical authority |
| **10** | `https://igameing.growthservice.in/free-seo-audit` | Company / Funnel | Primary conversion landing route |

---

## 4. Indexation Expectations & Timeline

- **Day 1–3**: Root homepage and top 4 navigation hubs crawled and cached.
- **Day 7–14**: Full sitemap discovered; initial 25–35 high-priority URLs indexed.
- **Day 14–30**: Long-tail industry × service matrix pages and technical guides indexed as internal link signals distribute equity.
- **Realistic Expectation**: Search Console indexing is an algorithmic queuing process. Full indexation of competitive verticals requires sustained crawl crawl budget and clean status codes (200 OK), not instant indexing guarantees.

---

## 5. Automated Regression Detection

Run regular health checks before any deployment:
```bash
npm run routes:validate
npm run seo:validate
npm run seo:monitor
```
Detects:
- Canonical mismatches
- Duplicate title/meta tags
- Leaks of forbidden parent domain (`growthservice.in` without `igameing.`)
- Accidental `noindex` tags in sitemap URLs
- Unresolved 404 links

---

## 6. Emergency Rollback Plan

If a production deployment causes crawl errors, routing breaks, or schema invalidation:
1. **Identify Git Commit**: Locate last verified stable commit tag (e.g. `main` HEAD~1).
2. **Revert**: `git revert <bad_commit_hash> -m 1`
3. **Re-run Gateways**: `npm run build && npm run routes:validate && npm run seo:monitor`
4. **Deploy**: Push clean commit to trigger automated Vercel/host rebuild.
5. **Flush Cache**: If CDN caching is active, purge cache for affected paths or request URL re-crawl in Search Console.
