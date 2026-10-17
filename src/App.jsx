import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import LoadingFallback from './components/LoadingFallback';
import './App.css';

// Route-based code splitting using React.lazy()
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const Analytics = lazy(() => import('./pages/Analytics'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

/**
 * App Component
 * Demonstrates route-based code splitting and Suspense fallback integration.
 */
function App() {
  return (
    <div className="app-shell">
      <NavBar />

      <main className="main-viewport">
        {/* Suspense wrapper with meaningful fallback UI during chunk loading */}
        <Suspense fallback={<LoadingFallback message="Loading on-demand chunk..." />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;
