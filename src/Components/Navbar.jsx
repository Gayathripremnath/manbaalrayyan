import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Menu, X } from 'lucide-react';
import './Navbar.css';

import logo from '../assets/Logo.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src={logo} alt="Al Sanaya Technical Equipment" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="navbar-menu">
          <Link to="/" className="nav-link active">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/blog" className="nav-link">Blog</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>

        {/* Right side */}
        <div className="navbar-actions">

          <button className="language-btn" aria-label="Language">
            <Globe size={19} strokeWidth={1.8} />
          </button>

          <Link to="/contact" className="quote-btn">
            Get a Quote
          </Link>

          {/* Hamburger */}
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X size={25} strokeWidth={2} />
            ) : (
              <Menu size={25} strokeWidth={2} />
            )}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/services" onClick={closeMenu}>Services</Link>
        <Link to="/products" onClick={closeMenu}>Products</Link>
        <Link to="/projects" onClick={closeMenu}>Projects</Link>
        <Link to="/blog" onClick={closeMenu}>Blog</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>

        <Link
          to="/contact"
          className="mobile-quote-btn"
          onClick={closeMenu}
        >
          Get a Quote <span>↗</span>
        </Link>
      </div>

    </header>
  );
}