import React from 'react';
import { Link } from 'react-router-dom';
import { Globe } from 'lucide-react';
import './Navbar.css';

import logo from '../assets/Logo.png';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Al Sanaya Technical Equipment" />
        </Link>

        {/* Navigation */}
        <nav className="navbar-menu">
          <Link to="/" className="nav-link active">
            Home
          </Link>

          <Link to="/about" className="nav-link">
            About
          </Link>

          <Link to="/services" className="nav-link">
            Services
          </Link>

          <Link to="/products" className="nav-link">
            Products
          </Link>

          <Link to="/projects" className="nav-link">
            Projects
          </Link>

          <Link to="/blog" className="nav-link">
            Blog
          </Link>

          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </nav>

        {/* Right side */}
        <div className="navbar-actions">

          <button className="language-btn" aria-label="Language">
            <Globe size={19} strokeWidth={1.8} />
          </button>

          <Link to="/contact" className="quote-btn">
            Get a Quote
          </Link>

        </div>

      </div>
    </header>
  );
}