# Weekly SEO Operating System & Review Protocol

**Cadence**: Every Monday morning  
**Tools**: Google Search Console, Google Analytics 4, Server Logs, Internal Health Monitors  
**Scope**: Exact 50 Canonical Pages  

---

## 10-Step Weekly Review Workflow

### Step 1: Overall Traffic & Indexation Status
- Review 7-day organic sessions vs. previous 7-day period in GA4.
- Check GSC Indexing Coverage: Confirm exactly 50 pages indexed with 0 server errors (5xx) and 0 unhandled 404s.

### Step 2: Search Console Impression Pulse
- Check total impression trend. A rising trend indicates expanding query footprint; a sudden drop indicates crawl or rendering issues.

### Step 3: CTR Opportunity Identification
- Filter GSC for pages with > 250 impressions and CTR < 2.0%.
- Review SERP presentation for title truncations, irrelevant snippets, or competitor rich results.

### Step 4: New Query Discovery & Mapping
- Export top 50 new queries gaining impressions.
- Confirm each maps cleanly to an existing canonical page.
- **Rule**: Never create new pages for new queries. Deepen the matching existing page.

### Step 5: Cornerstone Landing Page Movement
- Inspect performance of top 5 commercial revenue drivers:
  - `/services/technical-seo`
  - `/services/seo`
  - `/industries/gaming`
  - `/industries/casino`
  - `/free-seo-audit`

### Step 6: Striking-Distance Tracking (Positions 4–20)
- Identify queries ranking between 4.0 and 20.0 with high commercial intent.
- Select 1–2 priority queries to support with targeted subheadings or internal linking updates.

### Step 7: Keyword Cannibalization Triage
- Filter GSC by primary target queries.
- Check if multiple URLs split clicks or oscillate rankings.
- If true, follow the Cannibalization Remediation Protocol in `SEO_OPERATIONS.md`.

### Step 8: Conversion & Lead Attribution Check
- Review GA4 `generate_lead` events and source/medium attribution.
- Correlate organic landing pages with completed audit requests and strategy calls.

### Step 9: Technical Health & Error Verification
- Inspect GSC Core Web Vitals (LCP, INP, CLS) status.
- Run local deployment health check:
  ```bash
  npm run seo:gate
  npm run smoke:test
  ```

### Step 10: Action Items & Prioritized Backlog
- Document findings and assign priority:
  - **P0**: Critical indexation or technical block (resolve immediately).
  - **P1**: High-value commercial page underperforming on CTR or conversion.
  - **P2**: Striking-distance content deepening or contextual link addition.
  - **P3**: Exploratory hypothesis or testing.
- Cap changes at maximum 2 controlled adjustments per week to maintain attribution clarity.
