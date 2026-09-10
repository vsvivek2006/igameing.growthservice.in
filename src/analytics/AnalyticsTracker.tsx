/**
 * Analytics Tracker Component — iGaming Growth
 * 
 * Mounts inside React Router. Listens to route transitions, resolves
 * dynamic page context, extracts initial campaign parameters (UTMs),
 * and dispatches client-side `page_view` events with StrictMode and
 * transition deduplication.
 */

import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from './analytics';
import { captureCampaignAttribution } from './context';

export const AnalyticsTracker: React.FC = () => {
  const location = useLocation();
  const initialMount = useRef(true);
  const lastTrackedPath = useRef<string | null>(null);

  // Capture campaign attribution parameters into sessionStorage on initial landing
  useEffect(() => {
    captureCampaignAttribution();
  }, []);

  // Track page view on route transitions
  useEffect(() => {
    const currentPath = location.pathname;

    // Prevent duplicate firing for identical paths in React StrictMode
    if (lastTrackedPath.current === currentPath) {
      return;
    }
    lastTrackedPath.current = currentPath;

    // Small delay allows document.title to update from React Helmet
    const timer = setTimeout(() => {
      trackPageView({
        path: currentPath,
        title: typeof document !== 'undefined' ? document.title : '',
      });
    }, 50);

    // Scroll to top on route change
    if (!initialMount.current) {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
    initialMount.current = false;

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null;
};

export default AnalyticsTracker;
