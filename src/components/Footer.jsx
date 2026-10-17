import React from 'react';

/**
 * Footer Component
 * Application footer with developer metadata and copyright information.
 */
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="p8-footer">
      <p>
        © {currentYear} Deep Chauhan (Roll No: 24CS012) • CHARUSAT CSPIT / DEPSTAR
      </p>
      <p style={{ marginTop: '0.4rem', fontSize: '0.8rem', opacity: 0.7 }}>
        Practical 8: Performance Optimization, React.lazy() & Route-Based Code Splitting
      </p>
    </footer>
  );
}

export default Footer;
