# Third-Party Script & Resource Inventory

**Domain**: `https://igameing.growthservice.in`  
**Standard**: Minimum third-party footprint for maximum Core Web Vitals performance and strict data privacy.

---

## Third-Party Inventory Register

| Provider | Category | Resource / Script URL | Loading Method | Data Collected | Production Required | Performance Impact |
|---|---|---|---|---|---|---|
| **Google Analytics 4** | Web Analytics | `https://www.googletagmanager.com/gtag/js` | Asynchronous (`script.async = true`) injected via `GoogleAnalyticsProvider` | Anonymized page views, device type, country, referral source, event parameters (Zero PII) | Optional (Env Config: `VITE_GA_MEASUREMENT_ID`) | Minimal (~35KB gzipped, non-blocking) |
| **Meta Pixel** | Performance Ads | `https://connect.facebook.net/en_US/fbevents.js` | Asynchronous injected via `MetaPixelProvider` | Standard `PageView`, standard `Lead` conversion action | Optional (Env Config: `VITE_META_PIXEL_ID`) | Minimal (~40KB gzipped, non-blocking) |
| **Google Ads** | Ad Conversion | Reuses `gtag.js` from Google Tag Manager | Shared with GA4 script tag | Conversion trigger on `generate_lead` with conversion label | Optional (Env Config: `VITE_GOOGLE_ADS_ID`) | Zero additional script overhead |
| **Lucide React** | UI Icons | Bundled NPM package (`lucide-react`) | Bundled at compile-time by Vite | None (Pure SVG components) | Yes (Application build) | Zero runtime network requests (tree-shaken) |
| **Tailwind CSS** | Styling System | Bundled stylesheet (`dist/assets/index-*.css`) | Single static link in `index.html` | None | Yes (Application build) | Zero runtime overhead (~9KB gzipped) |

---

## Blocked & Excluded Third-Party Technologies

To protect enterprise privacy, client data, and Core Web Vitals, the following technologies are **STRICTLY PROHIBITED**:
- **Full-Session Replay Software** (Hotjar, FullStory, Smartlook): Banned to prevent accidental capture of client website URLs and diagnostic notes.
- **Third-Party Chat Widgets** (Intercom, Drift, Zendesk Chat): Banned from the initial payload to eliminate 200KB+ render-blocking JS bundles. Contact is routed cleanly via `/contact` and `/book-call`.
- **Third-Party Tag Managers** (Client-side GTM containers with arbitrary injector tags): Banned in favor of direct, statically compiled, type-checked provider adapters.
- **Unverified Ad-Tech Pixels**: Banned from all client pages.
