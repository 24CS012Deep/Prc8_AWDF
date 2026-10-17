import React, { useState } from 'react';

/**
 * Projects Page Component
 * Lazy-loaded route chunk containing portfolio project cards and filtering logic.
 */
function Projects() {
  const [filter, setFilter] = useState('All');

  const projectList = [
    {
      id: 1,
      title: 'JWT Authentication & Middleware Pipeline',
      category: 'Backend',
      description: 'Node.js Express backend with bcryptjs salted hashing, stateless JWT authorization, and server-side request validation.',
      techStack: ['Node.js', 'Express', 'JWT', 'bcryptjs', 'MongoDB'],
      githubUrl: 'https://github.com/24CS012Deep/Prc7_AWDF'
    },
    {
      id: 2,
      title: 'In-Memory Caching & Performance Engine',
      category: 'Backend',
      description: 'Sub-millisecond REST query caching using node-cache, cache hit/miss analytics, and automated write invalidation.',
      techStack: ['Node.js', 'node-cache', 'Mongoose', 'REST API'],
      githubUrl: 'https://github.com/24CS012Deep/Prc9_AWDF'
    },
    {
      id: 3,
      title: 'Route-Based Code Splitting & Performance Optimizer',
      category: 'Frontend',
      description: 'React application optimized with React.lazy(), Suspense fallbacks, and multi-chunk bundle architecture.',
      techStack: ['React 19', 'Vite', 'React Router v7', 'Performance Profiling'],
      githubUrl: 'https://github.com/24CS012Deep/Prc8_AWDF'
    },
    {
      id: 4,
      title: 'Full Stack MERN Task Manager',
      category: 'Fullstack',
      description: 'End-to-end task manager connecting React frontend to Express/MongoDB backend with Optimistic UI updates.',
      techStack: ['React', 'Express', 'MongoDB', 'Vite'],
      githubUrl: 'https://github.com/24CS012Deep/Prc6_AWDF'
    }
  ];

  const filtered = filter === 'All'
    ? projectList
    : projectList.filter((p) => p.category === filter);

  return (
    <div className="projects-container">
      <div className="page-header-wrap">
        <h1 className="page-title">Featured Projects</h1>
        <p className="page-desc">
          Lazy-loaded route chunk: <code>Projects.chunk.js</code> (Downloaded on-demand on route visit).
        </p>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        {['All', 'Backend', 'Frontend', 'Fullstack'].map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            style={{
              padding: '0.45rem 1.1rem',
              borderRadius: '9999px',
              border: '1px solid var(--border-color)',
              background: filter === cat ? 'linear-gradient(135deg, #3b82f6, #6366f1)' : 'var(--bg-card)',
              color: filter === cat ? '#fff' : 'var(--text-muted)',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.88rem'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {filtered.map((item) => (
          <div key={item.id} className="glass-box" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>{item.title}</h3>
                <span
                  style={{
                    fontSize: '0.75rem',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '6px',
                    background: 'rgba(59, 130, 246, 0.15)',
                    color: 'var(--accent-cyan)',
                    border: '1px solid rgba(59, 130, 246, 0.3)'
                  }}
                >
                  {item.category}
                </span>
              </div>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '1.25rem', lineHeight: '1.6' }}>
                {item.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                {item.techStack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '5px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: 'var(--text-main)',
                      border: '1px solid var(--border-color)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={item.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--accent-cyan)',
                fontWeight: 600,
                fontSize: '0.9rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem'
              }}
            >
              View Repository ↗
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
