/**
 * Privacy Sanitizer — iGaming Growth Analytics
 * 
 * Automatically strips sensitive personal data (names, emails, phone numbers,
 * free-form messages, payment tokens) before dispatching to telemetry providers.
 */

const SENSITIVE_KEY_PATTERNS = [
  /email/i,
  /phone/i,
  /mobile/i,
  /name/i,
  /password/i,
  /credit/i,
  /card/i,
  /message/i,
  /notes/i,
  /secret/i,
  /token/i,
];

/**
 * Recursively filters an object to eliminate any keys or values matching PII patterns.
 */
export const sanitizePayload = (input: Record<string, unknown>): Record<string, unknown> => {
  const sanitized: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(input)) {
    // Check if the key itself matches a sensitive pattern
    const isKeySensitive = SENSITIVE_KEY_PATTERNS.some((pattern) => pattern.test(key));
    if (isKeySensitive) {
      // Allow specific safe enum-like values (e.g. error_type = 'missing_name')
      if (key === 'error_type' || key === 'cta_name') {
        sanitized[key] = String(value);
      }
      continue;
    }

    if (value === null || value === undefined) {
      continue;
    }

    if (typeof value === 'string') {
      // Detect and redact raw email strings
      if (/@.+\..+/.test(value)) {
        continue;
      }
      // Detect and redact raw phone-number-like strings (7+ consecutive digits)
      if (/^\+?[\d\s-]{8,}$/.test(value.trim())) {
        continue;
      }
      sanitized[key] = value;
    } else if (typeof value === 'number' || typeof value === 'boolean') {
      sanitized[key] = value;
    } else if (Array.isArray(value)) {
      sanitized[key] = value
        .filter((item) => typeof item === 'string' && !/@.+\..+/.test(item))
        .map((item) => (typeof item === 'object' && item !== null ? sanitizePayload(item as Record<string, unknown>) : item));
    } else if (typeof value === 'object') {
      sanitized[key] = sanitizePayload(value as Record<string, unknown>);
    }
  }

  return sanitized;
};
