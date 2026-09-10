# SEO Operations & Search Intelligence Playbook

**Domain**: `https://igameing.growthservice.in`  
**Operating Principle**: Hypothesis-driven optimization across a fixed, high-value 50-page architecture.

---

## 1. Query-to-Page Mapping Framework

Every organic query must map to a single authoritative canonical page within the 50-page architecture:

```
[Search Query] 
     ↓
[Intent Classification] (Informational | Commercial | Transactional | Navigational)
     ↓
[Target Page Group]
     ├─ Broad Commercial Head Term      → Core Service Hub (/services/...)
     ├─ Vertical Commercial Solution    → Industry Pillar (/industries/...)
     ├─ Hyper-Specific Vertical Service → Group D Matrix (/industries/{ind}/{srv})
     ├─ Technical Problem & Solution    → Group E/F Guide (/resources/...)
     └─ Direct Diagnostic Action        → Audit Funnel (/free-seo-audit)
```

> [!CAUTION]
> **Hard Constraint**: Discovery of a new query opportunity **NEVER** justifies creating a new page. The default action is always: **Improve and deepen the corresponding existing page**.

---

## 2. Striking-Distance Query Optimization (Positions 4–20)

Queries ranking in positions 4 through 20 represent the fastest path to high-intent organic traffic growth.

### Optimization Workflow:
1. **Identify Query Clusters**: Extract queries with impressions > 100/month and average position between 4.0 and 20.0 from Google Search Console.
2. **Evaluate Target Page Relevance**: Check if the ranking URL matches the query intent.
3. **Intent Gap Analysis**: Check SERP top 3 results for missing subtopics, structural tables, or technical schemas.
4. **On-Page Deepening**: Add targeted H2/H3 subheadings, concrete data tables, or architecture diagrams to the existing canonical URL.
5. **Contextual Internal Linking**: Add contextual links from related guides or pillar pages using natural, non-manipulative anchor text.
6. **Log in SEO Changelog**: Document hypothesis and baseline CTR/clicks.

---

## 3. SERP Performance Analysis & Optimization

### A. High Impressions + Low CTR (Underperforming Snippets)
- **Signal**: Page earns substantial search impressions but achieves a click-through rate below SERP benchmark.
- **Root Causes**: Vague title tag, mismatched search intent, weak value proposition, or lack of differentiation against incumbents.
- **Remediation**:
  - Test a more descriptive, outcome-oriented title tag emphasizing technical specificity.
  - Refine meta description with concrete technical deliverables.
  - Check for SERP feature displacement (Featured Snippets, People Also Ask).

### B. Low Impressions + High CTR (High Intent / Low Visibility)
- **Signal**: Page converts searchers effectively when seen, but total impressions remain low.
- **Root Causes**: Insufficient topical depth, low internal link equity, or low overall keyword volume in cluster.
- **Remediation**:
  - Deepen coverage of adjacent subtopics within the same article or service section.
  - Review internal link graph to ensure the page receives link equity from top-level navigation hubs.

---

## 4. Keyword Cannibalization Monitoring

When multiple URLs from `igameing.growthservice.in` compete on the same search query:

| Coexisting URLs | Legitimate Overlap Criteria | Cannibalization Action |
|---|---|---|
| `/services/seo` vs `/industries/gaming/seo` | Service page targets cross-industry B2B capabilities; Matrix page targets gaming-specific regulatory and platform indexing challenges. | If both rank for "gaming seo", consolidate gaming signals onto `/industries/gaming/seo` and re-orient `/services/seo` to horizontal agency positioning. |
| `/industries/gaming/seo` vs `/resources/industry-insights/gaming-seo` | Matrix page is commercial (deliverables, process, audit CTA); Insight is educational (in-depth architectural playbook). | Ensure guide cross-links to matrix page as the commercial next step; guide targets "how to" intent, matrix targets "agency/service" intent. |

---

## 5. Query Drift Detection

- **Symptom**: A technical or B2B page begins ranking for irrelevant consumer queries (e.g. consumer gaming cheats, casino free spins, generic software).
- **Remedy**:
  - Audit H2/H3 headings for ambiguous keyword phrasing.
  - Clarify B2B agency context in opening paragraph and breadcrumb structure.
  - Adjust internal link anchor text to emphasize enterprise growth and technical architecture.

---

## 6. Content Refresh Lifecycle

Pages progress through six disciplined lifecycle states:

```
[NEW] → [OBSERVE (30–60d)] → [STABLE]
   ↓            ↑
[OPTIMIZE] ← [REVIEW]
   ↓
[REFRESH]
```

- **NEW**: Newly launched page collecting initial baseline data.
- **OBSERVE**: Collecting Search Console telemetry; no manual edits for 30–60 days to avoid algorithmic reset.
- **OPTIMIZE**: Refinement of title, headings, or internal links based on striking-distance queries.
- **REFRESH**: Significant update to outdated technical information, platform policy updates (e.g. Google Ads certification changes), or structural enhancements.
- **STABLE**: Consistent top-3 rankings and predictable lead generation.
- **REVIEW**: Scheduled bi-annual sanity check against competitive SERPs.

---

## 7. Operational Guardrail: Zero Automated Rewrites

> [!IMPORTANT]
> Analytics, telemetry, and automated scripts must **NEVER** automatically rewrite titles, descriptions, canonicals, or page copy. All changes require senior human review, documented hypothesis, and change tracking via `SEO_CHANGELOG.md`.
