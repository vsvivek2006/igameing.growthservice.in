import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Container, Button } from '../ui';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { reportError } from '../../analytics/tracking';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    reportError(error, {
      component: 'ErrorBoundary',
      componentStack: errorInfo.componentStack?.slice(0, 300),
      url: typeof window !== 'undefined' ? window.location.href : '',
    });
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-[50vh] flex items-center justify-center py-16 bg-slate-50">
          <Container size="sm" className="text-center space-y-5">
            <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto shadow-sm">
              <AlertTriangle className="w-7 h-7" />
            </div>
            <h2 className="font-heading font-bold text-2xl text-slate-900">
              Something unexpected occurred
            </h2>
            <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
              We encountered a minor interface rendering error. Please reload the page or navigate back to the home view.
            </p>
            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={() => window.location.reload()}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-purple-600 text-white font-semibold text-xs hover:bg-purple-700 transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reload Page</span>
              </button>
              <Button to="/" variant="outline" size="sm">
                Back to Home
              </Button>
            </div>
          </Container>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
