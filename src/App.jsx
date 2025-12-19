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
    display: 'flex',
    flexDirection: 'column',
    color: '#fff',
    fontFamily: "'Inter', sans-serif",
    overflowX: 'hidden',
    position: 'relative',
         
      }}
    >
  

      {/* Main content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          maxWidth: '1220px',
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
