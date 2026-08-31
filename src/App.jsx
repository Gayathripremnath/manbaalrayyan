import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';

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
          {/* <Route path="/home" element={<Home />} />
          <Route path="/blog" element={<GenericPage title="Blog" />} />
          <Route path="/portfolio" element={<GenericPage title="Portfolio" />} />
          <Route path="/pricing" element={<GenericPage title="Pricing" />} />
          <Route path="/shop" element={<GenericPage title="Shop" />} />
          <Route path="/services" element={<GenericPage title="Services" />} />
          <Route path="/contact" element={<GenericPage title="Contact Us" />} /> */}
        </Routes>

        {/* Global Footer appears on all pages */}
        <Footer />
      </div>
    </Router>
  );
}