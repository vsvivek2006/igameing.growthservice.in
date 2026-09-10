import React from 'react';
import { SEOHead } from '../seo';
import { Container, Button } from '../components/ui';
import { HelpCircle, ArrowLeft } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <>
      <SEOHead
        title="404 - Page Not Found | iGaming Growth"
        description="The requested page could not be found on iGaming Growth. Return to the game directory or home."
        robots="noindex, follow"
      />

      <div className="min-h-[60vh] flex items-center justify-center py-16">
        <Container size="sm" className="text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center mx-auto shadow-md">
            <HelpCircle className="w-8 h-8" />
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-slate-900">
            404 — Page Not Found
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto">
            The page you are seeking might have been moved, renamed, or is temporarily unavailable.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Button to="/" variant="primary" size="md" icon={<ArrowLeft className="w-4 h-4" />}>
              Back to Home
            </Button>
            <Button to="/games" variant="outline" size="md">
              Browse Game Directory
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
};

export default NotFound;
