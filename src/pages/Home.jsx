import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Home Page Component
 * Overview of route-based code splitting and bundle optimization.
 */
function Home() {
  return (
    <div className="home-container">
      <div className="page-header-wrap">
        <h1 className="page-title">Deep Chauhan's Engineering Portfolio</h1>
        <p className="page-desc">
          Roll No: 24CS012 • B.Tech Computer Science & Engineering (CHARUSAT)
        </p>
      </div>

      <div className="glass-box" style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.75rem' }}>
          Frontend Performance Optimization with Code Splitting
        </h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '1.02rem', marginBottom: '1.5rem' }}>
          In traditional React SPAs, all route components are bundled into a single monolithic JavaScript file downloaded upfront.
          This application implements <strong>dynamic imports</strong>, <strong>React.lazy()</strong>, and <strong>Suspense</strong> to break the application into independent on-demand chunks.
          Pages download only when visited, drastically reducing the initial bundle transfer size and improving First Contentful Paint (FCP).
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link
            to="/analytics"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.85rem 1.8rem',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
              color: '#fff',
              fontWeight: 700
            }}
          >
            Inspect Performance Metrics →
          </Link>
          <Link
            to="/projects"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '0.85rem 1.6rem',
              borderRadius: '10px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-main)',
              fontWeight: 600
            }}
          >
            View Projects
          </Link>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        <div className="glass-box">
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--accent-cyan)' }}>📦 Monolith vs Chunked</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
            Instead of downloading 100% of routes upfront, users download only the active route, cutting the initial payload by over 50%.
          </p>
        </div>
        <div className="glass-box">
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#34d399' }}>⏳ Suspense Fallback</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
            While an on-demand chunk downloads across the network, React displays a responsive shimmer skeleton fallback.
          </p>
        </div>
        <div className="glass-box">
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#f472b6' }}>📊 Heavy Component Lazy Loading</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
            Heavy analytical charting and visualization modules are isolated into standalone chunks, preventing main-thread blocking.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
