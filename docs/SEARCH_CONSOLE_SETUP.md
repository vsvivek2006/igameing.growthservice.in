# Google Search Console Setup & Launch Manual

**Target Domain**: `https://igameing.growthservice.in`  
**Sitemap**: `https://igameing.growthservice.in/sitemap.xml`  
**Approved Indexable Inventory**: Exactly 50 URLs  

---

## 1. Property Configuration

1. **Property Type Selection**:
   - Create a **URL-prefix property** for `https://igameing.growthservice.in/`.
   - Ensure protocol is strictly `https://` with zero `www.` prefix.
2. **Verification Protocol**:
   - **Primary (Recommended)**: DNS TXT Record. Add TXT record `google-site-verification=<token>` on nameservers for hostname `igameing.growthservice.in`.
   - **Secondary**: HTML Meta Tag. Place Google verification meta tag inside `<SEOHead>` root.

---

## 2. Sitemap Submission Workflow

1. Navigate to **Google Search Console > Indexing > Sitemaps**.
2. Submit sitemap URL: `sitemap.xml`.
3. Expected Status: **Success**.
4. Expected Discovered URLs: **Exactly 50**.
5. Discrepancy Protocol:
   - If discovered count != 50, run local validation:
     ```bash
     npm run sitemap:generate
     npm run seo:gate
     ```
   - Confirm `public/sitemap.xml` contains strictly 50 canonical `<loc>` entries.

---

## 3. High-Priority Live URL Inspection Queue

Immediately upon verification, inspect the cornerstone URLs below using Google's URL Inspection Tool and request indexing:

| Priority | URL | Page Category | Rationale |
|---|---|---|---|
| **P1** | `https://igameing.growthservice.in/` | Core (Home) | Root entity authority & site navigation index |
| **P2** | `https://igameing.growthservice.in/services/seo` | Service Pillar | Primary commercial service anchor |
| **P3** | `https://igameing.growthservice.in/services/technical-seo` | Service Pillar | Technical capability positioning |
| **P4** | `https://igameing.growthservice.in/industries/gaming` | Industry Pillar | Flagship competitive vertical |
| **P5** | `https://igameing.growthservice.in/industries/casino` | Industry Pillar | Regulated high-competition vertical |
| **P6** | `https://igameing.growthservice.in/industries/stock-market` | Industry Pillar | High-intent financial trading vertical |
| **P7** | `https://igameing.growthservice.in/industries/gaming/seo` | Group D Matrix | High-intent vertical × service pair |
| **P8** | `https://igameing.growthservice.in/resources/seo-guides/technical-seo-guide` | Group E Guide | Flagship technical inbound authority |
| **P9** | `https://igameing.growthservice.in/free-seo-audit` | Core Funnel | Primary diagnostic conversion landing page |
| **P10** | `https://igameing.growthservice.in/book-call` | Core Funnel | Direct executive conversion consultation |

---

## 4. Indexing Reality & SLA Expectations

> [!IMPORTANT]
> **Submitted Does NOT Equal Indexed.**  
> Googlebot queues discovered URLs algorithmically based on domain equity, content uniqueness, rendering performance, and server response codes.

- **Phase 1 (Days 1–5)**: Homepage and high-level service navigation crawled and indexed.
- **Phase 2 (Days 7–14)**: Industry pillar pages and cornerstone technical guides enter the index.
- **Phase 3 (Days 14–30)**: Group D service-industry matrix combinations and supporting guides indexed as internal link signals distribute equity.

---

## 5. Indexing Diagnostic Troubleshooting

If a URL remains "Discovered – currently not indexed" or "Crawled – currently not indexed":

1. **Verify Live Render**: Use URL Inspection > "Test Live URL". Ensure Googlebot renders complete HTML without JavaScript execution timeouts.
2. **Confirm Canonical**: Inspect Google-selected canonical vs. user-declared canonical. Must match `https://igameing.growthservice.in/...`.
3. **Internal Link Equity**: Verify the page has incoming internal links from relevant hub pages and navigation menus.
4. **Content Quality Check**: Verify the page provides substantial unique technical value (Content Quality score >= 70 via `npm run seo:validate`).
5. **No Automatic Page Generation**: Never attempt to fix indexing by creating duplicate or thin keyword variations. Improve the existing 50-page architecture.
