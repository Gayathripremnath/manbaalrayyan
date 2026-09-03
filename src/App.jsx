import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import About from './Components/About';
import Services from './Components/Services';

// Import components


// Optional: Placeholder for other pages to demonstrate multi-page routing
const GenericPage = ({ title }) => (
  <div style={{ padding: '160px 40px 100px', minHeight: '60vh', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
    <h1 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '20px' }}>{title} Page</h1>
    <p style={{ color: '#665c58', fontSize: '16px' }}>This is the dedicated page view for {title.toLowerCase()}.</p>
  </div>
);

export default function App() {
  return (
    <Router>
      <div className="app">
        {/* Global Navbar appears on all pages */}
        <Navbar />

        {/* Route Definitions */}
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>

        {/* Global Footer appears on all pages */}
        <Footer />
      </div>
    </Router>
  );
}