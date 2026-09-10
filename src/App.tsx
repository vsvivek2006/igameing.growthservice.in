import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from './components/shared/AppLayout';
import { LoadingFallback } from './components/ui/LoadingFallback';
import { APP_ROUTES, getRouteAliases } from './routing';

// Lazy-loaded page components
const Home = lazy(() => import('./pages/Home'));
const ServicesHub = lazy(() => import('./pages/ServicesHub'));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage'));
const IndustriesHub = lazy(() => import('./pages/IndustriesHub'));
const IndustryDetailPage = lazy(() => import('./pages/IndustryDetailPage'));
const CaseStudiesHub = lazy(() => import('./pages/CaseStudiesHub'));
const BlogHub = lazy(() => import('./pages/BlogHub'));
const ResourcesHub = lazy(() => import('./pages/ResourcesHub'));
const FreeSeoAuditPage = lazy(() => import('./pages/FreeSeoAuditPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const EditorialPolicyPage = lazy(() => import('./pages/EditorialPolicyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Authoritative static route to component binding
const ROUTE_COMPONENTS: Record<string, React.ComponentType> = {
  [APP_ROUTES.home.path]: Home,
  [APP_ROUTES.services.path]: ServicesHub,
  [APP_ROUTES.industries.path]: IndustriesHub,
  [APP_ROUTES.caseStudies.path]: CaseStudiesHub,
  [APP_ROUTES.blog.path]: BlogHub,
  [APP_ROUTES.resources.path]: ResourcesHub,
  [APP_ROUTES.freeSeoAudit.path]: FreeSeoAuditPage,
  [APP_ROUTES.faq.path]: FAQPage,
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
      <AppLayout>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            {/* Authoritative Static Routes */}
            {Object.entries(ROUTE_COMPONENTS).map(([path, Component]) => (
              <Route key={path} path={path} element={<Component />} />
            ))}

            {/* Dynamic Service Routes */}
            <Route path="/services/:serviceSlug" element={<ServiceDetailPage />} />

            {/* Dynamic Industry Routes */}
            <Route path="/industries/:industrySlug" element={<IndustryDetailPage />} />

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
      </AppLayout>
    </Router>
  );
};

export default App;
