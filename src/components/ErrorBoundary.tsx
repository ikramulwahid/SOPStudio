import { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  handleReset = (): void => {
    this.setState({ hasError: false, error: null })
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="error-fallback">
          <div className="error-fallback-content">
            <h1>Something went wrong</h1>
            <p className="error-fallback-message">
              An unexpected error occurred while loading this page.
            </p>
            {this.state.error && (
              <details className="error-fallback-details">
                <summary>Error Details</summary>
                <pre className="error-fallback-stack">
                  {this.state.error.message}
                </pre>
              </details>
            )}
            <button className="error-fallback-reset" onClick={this.handleReset}>
              Try Again
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary

