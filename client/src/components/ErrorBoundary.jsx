import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Bluegrid Utilities UI Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-slate-800/80 backdrop-blur border border-slate-700 rounded-2xl p-8 text-center shadow-2xl">
            <div className="w-16 h-16 bg-blue-600/20 text-blue-400 rounded-full flex items-center justify-center mx-auto mb-5 text-2xl font-bold">
              !
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Something went wrong</h2>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              We encountered an unexpected issue while loading the application.
            </p>
            <button
              onClick={() => {
                this.setState({ hasError: false });
                window.location.href = '/';
              }}
              className="w-full bg-[#0160d8] hover:bg-[#004bb5] text-white font-semibold py-3 px-6 rounded-xl transition duration-200 shadow-lg shadow-blue-500/20"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
