// src/App.jsx
import React, { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
 
  return (
    <div
      style={{
        minHeight: '100vh',
       width: '100%',
        margin: 0,
        padding: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        display: 'flex',
        flexDirection: 'column',
       maxWidth: '1200px',
        alignItems: 'center',
        color: '#fff',
        fontFamily: "'Inter', sans-serif",
        overflowX: 'hidden',
        position: 'relative',
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 0,
        }}
      ></div>

      {/* Main content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          maxWidth: '1200px',
          padding: '0',
        }}
      >
        <Navbar />
        <Suspense fallback={<div style={{ textAlign: 'center', color: '#fff' }}>Loading...</div>}>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Footer />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
