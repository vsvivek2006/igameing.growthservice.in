/**
 * Content Quality Scoring Engine — iGaming Growth Content OS
 * 
 * Internal editorial and technical quality scoring (0–100).
 * Evaluates completeness, uniqueness, intent clarity, link graph health,
 * metadata, and schema presence before publication.
 * 
 * NOTE: This is strictly an internal publishing governance tool,
 * never presented externally as a fake SEO ranking metric.
 */

export interface PageQualityAuditTarget {
  readonly path: string;
  readonly title: string;
  readonly description: string;
  readonly canonical: string;
  readonly wordCount?: number;
  readonly headingsCount?: number;
  readonly internalLinksCount?: number;
  readonly hasSchema?: boolean;
  readonly hasCTA?: boolean;
  readonly hasBreadcrumbs?: boolean;
  readonly isUniqueCopy?: boolean;
}

export interface QualityScoreResult {
  readonly score: number;
  readonly isPublishable: boolean;
  readonly breakdown: {
    readonly metadataScore: number;      // 0–20
    readonly depthCompletenessScore: number; // 0–30
    readonly internalLinkingScore: number;   // 0–20
    readonly schemaStructureScore: number;   // 0–15
    readonly conversionReadinessScore: number; // 0–15
  };
  readonly deductions: readonly string[];
}

export const MINIMUM_PUBLISHABLE_SCORE = 70;

export function evaluatePageQuality(target: PageQualityAuditTarget): QualityScoreResult {
  const deductions: string[] = [];
  let metadataScore = 20;
  let depthScore = 30;
  let linkScore = 20;
  let schemaScore = 15;
  let conversionScore = 15;

  // 1. Metadata Audit (20 pts)
  if (!target.title || target.title.trim().length < 25) {
    metadataScore -= 10;
    deductions.push('Title too short (< 25 characters)');
  } else if (target.title.length > 70) {
    metadataScore -= 5;
    deductions.push('Title too long (> 70 characters)');
  }

  if (!target.description || target.description.trim().length < 80) {
    metadataScore -= 10;
    deductions.push('Meta description too brief (< 80 characters)');
  }

  if (!target.canonical || !target.canonical.startsWith('https://igameing.growthservice.in')) {
    metadataScore -= 10;
    deductions.push('Invalid or missing canonical URL');
  }

  // 2. Depth & Completeness Audit (30 pts)
  const words = target.wordCount ?? 500;
  if (words < 250) {
    depthScore -= 20;
    deductions.push(`Insufficient content volume (${words} words; minimum 250 required)`);
  } else if (words < 400) {
    depthScore -= 10;
    deductions.push(`Thin content volume (${words} words; recommended >= 400)`);
  }

  const headings = target.headingsCount ?? 3;
  if (headings < 2) {
    depthScore -= 10;
    deductions.push('Page lacks heading hierarchy (minimum 2 sub-headings required)');
  }

  if (target.isUniqueCopy === false) {
    depthScore -= 20;
    deductions.push('Failed duplicate copy check (duplicate fingerprint detected)');
  }

  // 3. Internal Linking Audit (20 pts)
  const links = target.internalLinksCount ?? 4;
  if (links < 2) {
    linkScore -= 15;
    deductions.push(`Orphan risk: page has only ${links} internal links (minimum 2 required)`);
  } else if (links < 4) {
    linkScore -= 5;
    deductions.push('Low internal connectivity (recommended >= 4 internal links)');
  }

  // 4. Schema Structure Audit (15 pts)
  if (!target.hasSchema) {
    schemaScore -= 10;
    deductions.push('Missing structured data (JSON-LD schema required)');
  }
  if (!target.hasBreadcrumbs) {
    schemaScore -= 5;
    deductions.push('Missing BreadcrumbList navigation schema');
  }

  // 5. Conversion Readiness Audit (15 pts)
  if (!target.hasCTA) {
    conversionScore -= 15;
    deductions.push('Missing actionable call-to-action (CTA required)');
  }

  // Clamp bounds
  metadataScore = Math.max(0, metadataScore);
  depthScore = Math.max(0, depthScore);
  linkScore = Math.max(0, linkScore);
  schemaScore = Math.max(0, schemaScore);
  conversionScore = Math.max(0, conversionScore);

  const totalScore = metadataScore + depthScore + linkScore + schemaScore + conversionScore;

  return {
    score: totalScore,
    isPublishable: totalScore >= MINIMUM_PUBLISHABLE_SCORE && !target.title.includes('undefined'),
    breakdown: {
      metadataScore,
      depthCompletenessScore: depthScore,
      internalLinkingScore: linkScore,
      schemaStructureScore: schemaScore,
      conversionReadinessScore: conversionScore,
    },
    deductions,
  };
}
