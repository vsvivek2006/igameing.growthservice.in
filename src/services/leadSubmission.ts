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
  readonly vertical?: string;
  readonly market?: string;
  readonly growthGoal?: string;
  readonly services?: readonly string[];
  readonly budget?: string;
  readonly message?: string;
}

export interface LeadSubmissionResult {
  readonly success: boolean;
  readonly status: 'submitted' | 'configuration_pending' | 'network_error' | 'validation_error';
  readonly message: string;
}

export async function submitLead(payload: LeadSubmissionPayload): Promise<LeadSubmissionResult> {
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
    };
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        ...payload,
        submittedAt: new Date().toISOString(),
        origin: window.location.origin,
      }),
    });

    if (response.ok) {
      return {
        success: true,
        status: 'submitted',
        message: 'Your inquiry has been transmitted successfully. We will review your request within 24 business hours.',
      };
    }

    return {
      success: false,
      status: 'network_error',
      message: `Transmission failed with status ${response.status}. Please email hello@igameing.growthservice.in directly.`,
    };
  } catch {
    return {
      success: false,
      status: 'network_error',
      message: 'Network transmission error. Please email hello@igameing.growthservice.in directly.',
    };
  }
}
