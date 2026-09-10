import { businessConfig, BusinessConfigSchema } from '../config/business';

export function getBusinessName(): string {
  return businessConfig.name;
}

export function getBusinessLegalName(): string {
  return businessConfig.legalName;
}

export function getBusinessTagline(): string {
  return businessConfig.tagline;
}

export function getBusinessShortTagline(): string {
  return businessConfig.shortTagline;
}

export function getBusinessDescription(): string {
  return businessConfig.description;
}

export function getCanonicalOrigin(): string {
  return businessConfig.canonicalOrigin;
}

export function getBusinessDomain(): string {
  return businessConfig.domain;
}

export function getPrimaryEmail(): string {
  return businessConfig.emails.primary;
}

export function getBusinessEmail(): string {
  return businessConfig.emails.business;
}

export function getSocialProfiles(): BusinessConfigSchema['social'] {
  return businessConfig.social;
}

export function getTrustSignals(): BusinessConfigSchema['ratings'] {
  return businessConfig.ratings;
}

export function getThemeColor(): string {
  return businessConfig.themeColor;
}

export function getHeroStats(): BusinessConfigSchema['heroStats'] {
  return businessConfig.heroStats;
}
