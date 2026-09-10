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

import { businessConfig } from '../config/business';

export type QualityAuditMode = 'real-content' | 'static-governance';

export interface PageQualityAuditTarget {
  readonly path: string;
  readonly title: string;
  readonly description: string;
  readonly canonical: string;
  readonly auditMode?: QualityAuditMode;
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
  readonly auditMode: QualityAuditMode;
  readonly breakdown: {
    readonly metadataScore: number;
    readonly depthCompletenessScore: number;
    readonly internalLinkingScore: number;
    readonly schemaStructureScore: number;
    readonly conversionReadinessScore: number;
  };
  readonly deductions: readonly string[];
}

export const MINIMUM_PUBLISHABLE_SCORE = 70;

export function evaluatePageQuality(target: PageQualityAuditTarget): QualityScoreResult {
  const deductions: string[] = [];
  const mode = target.auditMode ?? (target.wordCount !== undefined ? 'real-content' : 'static-governance');

  let metadataScore = 0;
  let depthScore = 0;
  let linkScore = 0;
  let schemaScore = 0;
  let conversionScore = 0;

  if (mode === 'static-governance') {
    // ─── STATIC GOVERNANCE AUDIT (Metadata, Schema, CTA, Route Integrity) ───
    metadataScore = 35;
    schemaScore = 25;
    conversionScore = 25;
    linkScore = 15;
    depthScore = 0;

    // 1. Metadata Governance (35 pts)
    if (!target.title || target.title.trim().length < 25) {
      metadataScore -= 15;
      deductions.push('Title too short (< 25 characters)');
    } else if (target.title.length > 70) {
      metadataScore -= 5;
      deductions.push('Title exceeds standard preview length (> 70 characters)');
    }

    if (!target.description || target.description.trim().length < 80) {
      metadataScore -= 15;
      deductions.push('Meta description too brief (< 80 characters)');
    }

    if (!target.canonical || !target.canonical.startsWith(businessConfig.canonicalOrigin)) {
      metadataScore -= 15;
      deductions.push('Invalid or missing canonical URL');
    }

    // 2. Schema Structure Governance (25 pts)
    if (!target.hasSchema) {
      schemaScore -= 15;
      deductions.push('Missing structured data declaration (JSON-LD required)');
    }
    if (!target.hasBreadcrumbs) {
      schemaScore -= 10;
      deductions.push('Missing BreadcrumbList navigation schema');
    }

    // 3. Conversion Readiness Governance (25 pts)
    if (!target.hasCTA) {
      conversionScore -= 25;
      deductions.push('Missing actionable call-to-action');
    }

    // 4. URL & Path Hygiene (15 pts)
    if (target.path.includes('//') || target.path.endsWith('/index.html')) {
      linkScore -= 15;
      deductions.push('Non-canonical URL formatting detected');
    }
  } else {
    // ─── REAL CONTENT AUDIT (Strict data inspection; NO synthetic defaults) ───
    metadataScore = 20;
    depthScore = 30;
    linkScore = 20;
    schemaScore = 15;
    conversionScore = 15;

    // 1. Metadata (20 pts)
    if (!target.title || target.title.trim().length < 25) {
      metadataScore -= 10;
      deductions.push('Title too short (< 25 characters)');
    } else if (target.title.length > 70) {
      metadataScore -= 5;
      deductions.push('Title exceeds standard preview length (> 70 characters)');
    }

    if (!target.description || target.description.trim().length < 80) {
      metadataScore -= 10;
      deductions.push('Meta description too brief (< 80 characters)');
    }

    if (!target.canonical || !target.canonical.startsWith(businessConfig.canonicalOrigin)) {
      metadataScore -= 10;
      deductions.push('Invalid or missing canonical URL');
    }

    // 2. Real Content Depth & Completeness (30 pts)
    if (target.wordCount === undefined) {
      depthScore = 0;
      deductions.push('Content volume unmeasured: real word count is required for content audit (synthetic defaults rejected)');
    } else if (target.wordCount < 250) {
      depthScore -= 20;
      deductions.push(`Insufficient content volume (${target.wordCount} words; minimum 250 required)`);
    } else if (target.wordCount < 400) {
      depthScore -= 10;
      deductions.push(`Thin content volume (${target.wordCount} words; recommended >= 400)`);
    }

    if (target.headingsCount === undefined) {
      depthScore -= 10;
      deductions.push('Headings unmeasured: real heading count required (synthetic defaults rejected)');
    } else if (target.headingsCount < 2) {
      depthScore -= 10;
      deductions.push(`Page lacks heading hierarchy (${target.headingsCount} headings; minimum 2 sub-headings required)`);
    }

    if (target.isUniqueCopy === false) {
      depthScore -= 20;
      deductions.push('Failed duplicate copy check (duplicate content fingerprint detected)');
    }

    // 3. Real Internal Linking (20 pts)
    if (target.internalLinksCount === undefined) {
      linkScore = 0;
      deductions.push('Internal links unmeasured: real link count required (synthetic defaults rejected)');
    } else if (target.internalLinksCount < 2) {
      linkScore -= 15;
      deductions.push(`Orphan risk: page has only ${target.internalLinksCount} internal links (minimum 2 required)`);
    } else if (target.internalLinksCount < 4) {
      linkScore -= 5;
      deductions.push(`Low internal connectivity (${target.internalLinksCount} links; recommended >= 4)`);
    }

    // 4. Schema (15 pts)
    if (!target.hasSchema) {
      schemaScore -= 10;
      deductions.push('Missing structured data (JSON-LD schema required)');
    }
    if (!target.hasBreadcrumbs) {
      schemaScore -= 5;
      deductions.push('Missing BreadcrumbList navigation schema');
    }

    // 5. Conversion Readiness (15 pts)
    if (!target.hasCTA) {
      conversionScore -= 15;
      deductions.push('Missing actionable call-to-action (CTA required)');
    }
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
    auditMode: mode,
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
