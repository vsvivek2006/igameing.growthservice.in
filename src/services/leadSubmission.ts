/**
 * Lead Submission Service & Network Abstraction — iGaming Growth
 * 
 * Provides an explicit interface for transmitting commercial inquiries and audit
 * requests to production endpoints (webhook, CRM, or serverless API).
 * 
 * Truthful Architecture:
 * - If VITE_LEAD_SUBMISSION_ENDPOINT is configured, dispatches a POST request.
 * - If unconfigured, explicitly returns status: 'configuration_pending' rather
 *   than simulating fake network success.
 */

export interface LeadSubmissionPayload {
  readonly formType: 'free_seo_audit' | 'contact_proposal' | 'book_call';
  readonly name: string;
  readonly email: string;
  readonly website?: string;
  readonly company?: string;
  readonly business?: string;
  readonly industry?: string;
  readonly vertical?: string;
  readonly market?: string;
  readonly priority?: string;
  readonly growthGoal?: string;
  readonly services?: readonly string[];
  readonly budget?: string;
  readonly message?: string;
}

export interface LeadSubmissionResult {
  readonly success: boolean;
  readonly status: 'submitted' | 'configuration_pending' | 'network_error' | 'validation_error';
  readonly message: string;
  readonly submissionId?: string;
}

// In-memory duplicate submission protection within 30-second window
const recentSubmissions = new Map<string, number>();
const DEDUP_WINDOW_MS = 30000;

export async function submitLead(payload: LeadSubmissionPayload): Promise<LeadSubmissionResult> {
  const submissionId = `sub_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;

  // 1. Client-Side Payload Hygiene & Size Limit (Max 50KB)
  const trimmedEmail = payload.email ? payload.email.trim() : '';
  if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
    return {
      success: false,
      status: 'validation_error',
      message: 'Please provide a valid business or work email address.',
      submissionId,
    };
  }

  const payloadString = JSON.stringify(payload);
  if (payloadString.length > 50000) {
    return {
      success: false,
      status: 'validation_error',
      message: 'Request payload exceeds acceptable size limit (max 50KB).',
      submissionId,
    };
  }

  // 2. Duplicate submission throttling
  const dedupKey = `${payload.formType}:${trimmedEmail.toLowerCase()}`;
  const lastSubmissionTime = recentSubmissions.get(dedupKey);
  const now = Date.now();
  if (lastSubmissionTime && now - lastSubmissionTime < DEDUP_WINDOW_MS) {
    return {
      success: false,
      status: 'validation_error',
      message: 'A duplicate request was recently submitted. Please wait 30 seconds before trying again.',
      submissionId,
    };
  }
  recentSubmissions.set(dedupKey, now);

  const endpoint =
    typeof import.meta !== 'undefined' && import.meta.env
      ? (import.meta.env.VITE_LEAD_SUBMISSION_ENDPOINT as string)
      : undefined;

  if (!endpoint) {
    // Truthful fallback: Backend transmission endpoint is currently pending deployment
    return {
      success: false,
      status: 'configuration_pending',
      message:
        'Direct automated transmission is pending endpoint configuration. Please email your request directly to hello@igameing.growthservice.in.',
      submissionId,
    };
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      signal: controller.signal,
      body: JSON.stringify({
        ...payload,
        submissionId,
        submittedAt: new Date().toISOString(),
        origin: typeof window !== 'undefined' ? window.location.origin : '',
      }),
    });

    clearTimeout(timeoutId);

    if (response.ok) {
      return {
        success: true,
        status: 'submitted',
        message: 'Your inquiry has been transmitted successfully. We will review your request within one business day.',
        submissionId,
      };
    }

    return {
      success: false,
      status: 'network_error',
      message: `Transmission failed with status ${response.status}. Please email hello@igameing.growthservice.in directly.`,
      submissionId,
    };
  } catch (err: unknown) {
    clearTimeout(timeoutId);
    const isTimeout = err instanceof Error && err.name === 'AbortError';
    return {
      success: false,
      status: 'network_error',
      message: isTimeout
        ? 'Transmission timed out. Please email hello@igameing.growthservice.in directly.'
        : 'Network transmission error. Please email hello@igameing.growthservice.in directly.',
      submissionId,
    };
  }
}
