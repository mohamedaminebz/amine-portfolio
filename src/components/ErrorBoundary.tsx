import React from "react";
import i18n from "../i18n";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

/**
 * Last-resort boundary. Visitors get a short, localized message and a way
 * back; stack traces stay in the console where developers can find them.
 */
export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: unknown, info: React.ErrorInfo) {
    console.error("[portfolio] render error", error, info.componentStack);
  }

  private reload = () => {
    window.location.assign(
      `${window.location.pathname}${window.location.search}`,
    );
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="grid min-h-screen place-items-center bg-canvas p-6 text-ink">
          <div className="card-soft max-w-md p-6 text-center">
            <h1 className="display text-2xl">{i18n.t("a11y.errorTitle")}</h1>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {i18n.t("a11y.errorBody")}
            </p>
            <button
              type="button"
              onClick={this.reload}
              className="btn btn-primary mt-5"
            >
              {i18n.t("a11y.errorReload")}
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
