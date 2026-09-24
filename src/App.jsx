import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useLayoutEffect, useRef } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import About from './Components/About';
import Services from './Components/Services';
import Product from './Components/Product';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Solutions from './Components/Solutions';
import './App.css';

function PageScrollManager() {
  const { pathname } = useLocation();
  const buttonRef = useRef(null);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  useEffect(() => {
    let animationFrameId = null;
    const updateProgress = () => {
      if (animationFrameId !== null) return;
      animationFrameId = window.requestAnimationFrame(() => {
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
        buttonRef.current?.style.setProperty('--scroll-progress', `${Math.min(100, Math.max(0, progress))}%`);
        animationFrameId = null;
      });
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
      if (animationFrameId !== null) window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <button
      className="scroll-top-button"
      ref={buttonRef}
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <span aria-hidden="true">↑</span>
    </button>
  );
}

export default function App() {
  return (
    <Router>
      <div className="app">
        <PageScrollManager />
        {/* Global Navbar appears on all pages */}
        <Navbar />

        {/* Route Definitions */}
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Product />} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/solutions" element={<Solutions/>} />
        </Routes>

        {/* Global Footer appears on all pages */}
        <Footer />
      </div>
    </Router>
  );
}
