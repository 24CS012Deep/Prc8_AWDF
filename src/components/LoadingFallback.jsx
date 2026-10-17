import React from 'react';

/**
 * LoadingFallback Component
 * Meaningful fallback UI rendered by React Suspense while lazy-loaded chunks download.
 */
function LoadingFallback({ message = 'Loading route module...' }) {
  return (
    <div className="fallback-container">
      <div className="fallback-badge">
        <span>⚡</span>
        <span>{message}</span>
      </div>

      <div className="shimmer-card">
        <div className="shimmer-line title"></div>
        <div className="shimmer-line short"></div>
        <div className="shimmer-line"></div>
        <div className="shimmer-line"></div>
      </div>
    </div>
  );
}

export default LoadingFallback;
