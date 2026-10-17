import React from 'react';
import { Link } from 'react-router-dom';

/**
 * NotFound Component
 * Fallback route view for non-existent paths.
 */
function NotFound() {
  return (
    <div className="glass-box" style={{ textAlign: 'center', padding: '4rem 2rem', maxWidth: '600px', margin: '2rem auto' }}>
      <div style={{ fontSize: '5rem', fontWeight: 900, color: '#ef4444', lineHeight: 1 }}>404</div>
      <h2 style={{ fontSize: '1.75rem', margin: '1rem 0 0.5rem' }}>Page Not Found</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '1.75rem' }}>
        The requested path does not exist in this single page application.
      </p>
      <Link
        to="/"
        style={{
          display: 'inline-block',
          padding: '0.75rem 1.6rem',
          borderRadius: '8px',
          background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
          color: '#fff',
          fontWeight: 600
        }}
      >
        ← Return Home
      </Link>
    </div>
  );
}

export default NotFound;
