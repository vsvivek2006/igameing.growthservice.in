import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from './components/shared/AppLayout';
import { ErrorBoundary } from './components/shared/ErrorBoundary';
import { LoadingFallback } from './components/ui/LoadingFallback';
import { APP_ROUTES, getRouteAliases } from './routing';
import { AnalyticsTracker } from './analytics';

// Lazy-loaded page components
const Home = lazy(() => import('./pages/Home'));
const ServicesHub = lazy(() => import('./pages/ServicesHub'));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage'));
const IndustriesHub = lazy(() => import('./pages/IndustriesHub'));
const IndustryDetailPage = lazy(() => import('./pages/IndustryDetailPage'));
const ServiceIndustryDetailPage = lazy(() => import('./pages/ServiceIndustryDetailPage'));
const ResourcesHub = lazy(() => import('./pages/ResourcesHub'));
const GuideDetailPage = lazy(() => import('./pages/GuideDetailPage'));
const FreeSeoAuditPage = lazy(() => import('./pages/FreeSeoAuditPage'));
const BookCallPage = lazy(() => import('./pages/BookCallPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const EditorialPolicyPage = lazy(() => import('./pages/EditorialPolicyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Authoritative static route to component binding
const ROUTE_COMPONENTS: Record<string, React.ComponentType> = {
  [APP_ROUTES.home.path]: Home,
  [APP_ROUTES.services.path]: ServicesHub,
  [APP_ROUTES.industries.path]: IndustriesHub,
  [APP_ROUTES.resources.path]: ResourcesHub,
  [APP_ROUTES.freeSeoAudit.path]: FreeSeoAuditPage,
  [APP_ROUTES.bookCall.path]: BookCallPage,
  [APP_ROUTES.contact.path]: ContactPage,
  [APP_ROUTES.about.path]: AboutPage,
  [APP_ROUTES.editorialPolicy.path]: EditorialPolicyPage,
  [APP_ROUTES.terms.path]: TermsPage,
  [APP_ROUTES.privacy.path]: PrivacyPage,
};

export const App: React.FC = () => {
  const routeAliases = getRouteAliases();

  return (
    <Router>
      <AnalyticsTracker />
      <AppLayout>
        <ErrorBoundary>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              {/* Authoritative Static Routes (8 Core + 3 Legal/Utility) */}
              {Object.entries(ROUTE_COMPONENTS).map(([path, Component]) => (
                <Route key={path} path={path} element={<Component />} />
              ))}

              {/* Dynamic Service Routes (12 Services) */}
              <Route path="/services/:serviceSlug" element={<ServiceDetailPage />} />

              {/* Dynamic Industry Routes (8 Industries) */}
              <Route path="/industries/:industrySlug" element={<IndustryDetailPage />} />

              {/* Dynamic Service x Industry Composite Routes (12 Matrix Combinations) */}
              <Route path="/industries/:industrySlug/:serviceSlug" element={<ServiceIndustryDetailPage />} />

              {/* Dynamic SEO Guides (7 Guides) */}
              <Route path="/resources/seo-guides/:guideSlug" element={<GuideDetailPage />} />

              {/* Dynamic Industry Insights (3 Insights) */}
              <Route path="/resources/industry-insights/:guideSlug" element={<GuideDetailPage />} />

              {/* Model 3 Performance-Proof SEO Showcase Route (Redirects to canonical /services/seo) */}
              <Route path="/model-3" element={<Navigate to="/services/seo" replace />} />
              <Route path="/model3" element={<Navigate to="/services/seo" replace />} />

              {/* Registered Alias 301-equivalent client redirects */}
              {routeAliases.map((alias) => (
                <Route
                  key={alias.from}
                  path={alias.from}
                  element={<Navigate to={alias.to} replace />}
                />
              ))}

              {/* 404 Fallback Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </AppLayout>
    </Router>
  );
};

export default App;
