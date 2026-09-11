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
        <div className="min-h-[50vh] flex items-center justify-center py-16 bg-surface-page text-white">
          <Container size="sm" className="text-center space-y-5">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/15 text-amber-400 border border-amber-500/30 flex items-center justify-center mx-auto shadow-sm">
              <AlertTriangle className="w-7 h-7" />
            </div>
            <h2 className="font-heading font-bold text-2xl text-white">
              Something unexpected occurred
            </h2>
            <p className="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">
              We encountered a minor interface rendering error. Please reload the page or navigate back to the home view.
            </p>
            {import.meta?.env?.DEV && this.state.error && (
              <div className="p-3.5 bg-red-950/50 border border-red-500/30 rounded-xl text-left text-xs font-mono text-red-300 max-w-md mx-auto overflow-x-auto">
                <p className="font-bold text-red-400 mb-1">{this.state.error.name}: {this.state.error.message}</p>
                {this.state.error.stack && (
                  <pre className="text-[10px] text-slate-400 whitespace-pre-wrap leading-tight max-h-32 overflow-y-auto">
                    {this.state.error.stack.split('\n').slice(0, 4).join('\n')}
                  </pre>
                )}
              </div>
            )}
            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={() => window.location.reload()}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 font-bold text-xs hover:from-amber-300 hover:to-yellow-300 transition-all shadow-md shadow-amber-400/20"
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
