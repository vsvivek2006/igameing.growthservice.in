/**
 * Uniqueness Engine — iGaming Growth Content OS
 * 
 * Assembles composite pages from:
 * Global Service Data + Global Industry Data + Unique Relationship Data.
 * Enforces strict content quality and depth thresholds to prevent thin/doorway pages.
 */

import { ServiceOffering, IndustryVertical, ServiceIndustryMatrixEntry } from '../types/content';
import { getServiceBySlug } from '../data/servicesData';
import { getIndustryBySlug } from '../data/industriesData';
import { getMatrixEntry } from '../data/industryServiceMatrix';

export interface ResolvedServiceIndustryPage {
  readonly service: ServiceOffering;
  readonly industry: IndustryVertical;
  readonly matrix: ServiceIndustryMatrixEntry;
  readonly validationStatus: 'valid' | 'invalid';
  readonly validationErrors: readonly string[];
}

const MINIMUM_SPECIFIC_CHALLENGES = 1;
const MINIMUM_APPROACH_LENGTH = 100;
const MINIMUM_DELIVERABLES = 3;

/**
 * Validates whether a matrix entry satisfies uniqueness guardrails.
 */
export const validateMatrixEntryDepth = (entry: ServiceIndustryMatrixEntry): {
  readonly isValid: boolean;
  readonly errors: readonly string[];
} => {
  const errors: string[] = [];

  if (!entry.specificChallenges || entry.specificChallenges.length < MINIMUM_SPECIFIC_CHALLENGES) {
    errors.push(
      `Matrix entry [${entry.industrySlug} x ${entry.serviceSlug}] must define at least ${MINIMUM_SPECIFIC_CHALLENGES} specific challenge.`
    );
  }

  if (!entry.specificApproach || entry.specificApproach.trim().length < MINIMUM_APPROACH_LENGTH) {
    errors.push(
      `Matrix entry [${entry.industrySlug} x ${entry.serviceSlug}] specificApproach is too short (must be >= ${MINIMUM_APPROACH_LENGTH} characters).`
    );
  }

  if (!entry.specificDeliverables || entry.specificDeliverables.length < MINIMUM_DELIVERABLES) {
    errors.push(
      `Matrix entry [${entry.industrySlug} x ${entry.serviceSlug}] must define at least ${MINIMUM_DELIVERABLES} specific deliverables.`
    );
  }

  if (!entry.uniqueValue || entry.uniqueValue.trim().length < 30) {
    errors.push(
      `Matrix entry [${entry.industrySlug} x ${entry.serviceSlug}] must define a comprehensive uniqueValue proposition.`
    );
  }

  // Semantic check: no duplicate challenge titles within entry
  if (entry.specificChallenges) {
    const titles = entry.specificChallenges.map((c) => c.title.toLowerCase().trim());
    if (new Set(titles).size !== titles.length) {
      errors.push(
        `Matrix entry [${entry.industrySlug} x ${entry.serviceSlug}] contains duplicate challenge titles.`
      );
    }
  }

  // Semantic check: no duplicate deliverables within entry
  if (entry.specificDeliverables) {
    const deliverables = entry.specificDeliverables.map((d) => d.toLowerCase().trim());
    if (new Set(deliverables).size !== deliverables.length) {
      errors.push(
        `Matrix entry [${entry.industrySlug} x ${entry.serviceSlug}] contains duplicate deliverables.`
      );
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

/**
 * Validates cross-entry semantic uniqueness across the entire matrix.
 * Ensures no templated copy-pasting across different service × industry pairs.
 */
export const validateMatrixSemanticUniqueness = (
  entries: readonly ServiceIndustryMatrixEntry[]
): { readonly isValid: boolean; readonly errors: readonly string[] } => {
  const errors: string[] = [];
  const seenUniqueValues = new Set<string>();
  const seenApproaches = new Set<string>();
  const seenIntents = new Set<string>();

  for (const entry of entries) {
    if (seenUniqueValues.has(entry.uniqueValue)) {
      errors.push(
        `Duplicate uniqueValue detected: "${entry.uniqueValue}" in [${entry.industrySlug} x ${entry.serviceSlug}]`
      );
    }
    seenUniqueValues.add(entry.uniqueValue);

    if (seenApproaches.has(entry.specificApproach)) {
      errors.push(
        `Duplicate specificApproach detected in [${entry.industrySlug} x ${entry.serviceSlug}]`
      );
    }
    seenApproaches.add(entry.specificApproach);

    if (seenIntents.has(entry.searchIntent)) {
      errors.push(
        `Duplicate searchIntent detected: "${entry.searchIntent}" in [${entry.industrySlug} x ${entry.serviceSlug}]`
      );
    }
    seenIntents.add(entry.searchIntent);
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

/**
 * Resolves a composite page combining Service, Industry, and Matrix data.
 * Returns null if the combination does not exist or is disabled.
 */
export const resolveServiceIndustryPage = (
  industrySlug: string,
  serviceSlug: string
): ResolvedServiceIndustryPage | null => {
  const matrix = getMatrixEntry(industrySlug, serviceSlug);
  if (!matrix || !matrix.enabled) {
    return null;
  }

  const industry = getIndustryBySlug(industrySlug);
  const service = getServiceBySlug(serviceSlug);

  if (!industry || !service) {
    return null;
  }

  const depthValidation = validateMatrixEntryDepth(matrix);

  return {
    service,
    industry,
    matrix,
    validationStatus: depthValidation.isValid ? 'valid' : 'invalid',
    validationErrors: depthValidation.errors,
  };
};
