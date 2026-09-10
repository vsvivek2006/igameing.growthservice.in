# Analytics Event Taxonomy & Telemetry Data Contract

**Domain**: `https://igameing.growthservice.in`  
**Architecture**: Provider-Agnostic Abstraction (`src/analytics/`)  
**Active Providers**: Google Analytics 4 (GA4), Meta Pixel, Google Ads, Console Debug  
**Privacy Posture**: Zero PII (Personally Identifiable Information)  

---

## 1. Overview & Architectural Principles

1. **Vendor Isolation**: React UI components never call `gtag()` or `fbq()` directly. All events dispatch via `trackEvent()`, `trackPageView()`, or `trackConversion()`.
2. **Strict Zero PII**: All payloads pass through a recursive sanitizer (`src/analytics/sanitizer.ts`) that strips names, emails, phone numbers, free-form message text, and private inputs.
3. **Deduplication Guard**: High-value `generate_lead` conversions are cached with a 10-second signature lock to prevent double-firing from double-clicks or React re-renders.
4. **Clean Canonical Tracking**: Campaign attribution parameters (`utm_*`, `gclid`) are extracted on initial landing, saved into `sessionStorage`, and appended to event telemetry without polluting canonical URLs or causing duplicate indexation.
5. **Preview Isolation**: Telemetry automatically disables vendor transmission in preview environments (`*.vercel.app`, `localhost`) unless explicitly enabled, ensuring zero production data pollution.

---

## 2. Event Catalog & Data Contracts

### 2.1 Core Business & Conversion Funnel Events

#### `page_view`
- **When Fired**: On initial application mount and on every client-side route transition (via `AnalyticsTracker.tsx`). Protected against React StrictMode duplicate execution.
- **Parameters**:
  - `page_path` (string): Current URL path (e.g. `/services/technical-seo`).
  - `page_title` (string): Document title populated by React Helmet.
  - `page_type` (string): Architecture group (`home`, `service`, `industry`, `industry_service`, `guide`, `resource`, `company`, `utility`).
  - `service_slug` (string, optional): Specific service identifier.
  - `industry_slug` (string, optional): Specific industry identifier.
  - `content_category` (string, optional): Topical category.
  - `utm_*` (string, optional): Captured landing campaign attributes.
- **GA4 Mapping**: Standard `page_view` event.
- **Meta Mapping**: Standard `fbq('track', 'PageView')`.

#### `cta_click`
- **When Fired**: When a user clicks a primary, secondary, or contextual conversion action.
- **Parameters**:
  - `cta_name` (string): Unique identifier (e.g. `free_seo_audit`, `book_strategy_call`, `explore_services`).
  - `cta_location` (string): Section placement (`hero`, `header`, `mid_page`, `bento`, `service_card`, `industry_card`, `guide_banner`, `footer`).
  - `destination_url` (string, optional): Target route path.
  - `page_type` (string): Originating page type.

#### `form_view`
- **When Fired**: When a conversion form mounts into the DOM (`/free-seo-audit`, `/contact`, `/book-call`).
- **Parameters**:
  - `form_type` (string): `'free_seo_audit'` | `'contact_proposal'` | `'book_call'`.
  - `page_path` (string): URL of the form page.

#### `form_start`
- **When Fired**: On the first user interaction (focus/input) with any form field. Fired once per form session.
- **Parameters**:
  - `form_type` (string): Form identifier.
  - `page_path` (string): URL of the form page.

#### `form_submit`
- **When Fired**: When a user clicks the submit button on any form before validation.
- **Parameters**:
  - `form_type` (string): Form identifier.
  - `cta_name` (string): Button action identifier.

#### `form_error`
- **When Fired**: When client-side validation fails upon submit attempt.
- **Parameters**:
  - `form_type` (string): Form identifier.
  - `error_type` (string): Aggregated validation error keys (e.g. `'name,email,website'`). **NO user input text is transmitted.**

#### `generate_lead`
- **When Fired**: **Strictly after confirmed successful form submission.** Never fired on button click or failed validation.
- **Parameters**:
  - `form_type` (string): Form identifier.
  - `vertical` (string, optional): Industry vertical selected by user.
  - `market` (string, optional): Target jurisdiction or market.
  - `value` (number): Default conversion value (1.0).
  - `currency` (string): Currency code (`USD`).
  - `utm_source`, `utm_medium`, `utm_campaign`: Attribution parameters.
- **GA4 Mapping**: Recommended conversion `generate_lead`.
- **Meta Mapping**: Standard conversion `fbq('track', 'Lead', { content_name, content_category })`.
- **Google Ads Mapping**: Conversion action `gtag('event', 'conversion', { send_to: 'AW-.../...' })`.

---

### 2.2 Navigation & Content Engagement Events

#### `select_content`
- **When Fired**: When a user interacts with knowledge resources, accordion tabs, or interactive matrices.
- **Parameters**:
  - `content_type` (string): `'guide'`, `'faq'`, `'service_blueprint'`, `'industry_matrix'`.
  - `item_id` (string): Slug or title of the interacted item.

#### `navigation_click`
- **When Fired**: When a user navigates via header dropdowns, top bar CTAs, or footer discovery links.
- **Parameters**:
  - `menu_item` (string): Link label.
  - `destination` (string): Target route.

#### `external_link_click`
- **When Fired**: When a user clicks an outbound reference or external tool link.
- **Parameters**:
  - `url` (string): External destination URL.
  - `link_text` (string): Anchor text.

---

### 2.3 Application Observability & Error Events

#### `error_captured`
- **When Fired**: When React ErrorBoundary catches an unhandled render exception or a caught operational fault occurs.
- **Parameters**:
  - `error_message` (string): Sanitized error message string.
  - `error_stack` (string, optional): First 500 characters of stack trace.
  - `component` (string, optional): Originating React component.
  - `page_path` (string): Current URL path.

#### `route_not_found`
- **When Fired**: When a visitor accesses an unregistered route triggering the `NotFound` (404) view.
- **Parameters**:
  - `attempted_path` (string): Path requested by client.
  - `referrer` (string): Referring URL.

---

## 3. PII Protection Guarantee

The following data fields are blocked and stripped automatically:
- First/last names
- Email addresses
- Phone / WhatsApp numbers
- Street addresses / ZIP codes
- Freeform project descriptions and messages
- API keys, credentials, or session tokens

Any event property matching PII patterns or keys is erased before network transmission.
