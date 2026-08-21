import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/Logo.png';
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nex-navbar ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="nav-logo" aria-label="Manba Al Rayyan home">
          <img src={logo} alt="Manba Al Rayyan Trading & Services LLC" className="logo-img" />
        </a>

        <ul className={`nav-menu ${menuOpen ? 'is-open' : ''}`}>
          <li className="nav-item"><a href="#home" className="nav-link active" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li className="nav-item"><a href="#services" className="nav-link" onClick={() => setMenuOpen(false)}>Services</a></li>
          <li className="nav-item"><a href="#about" className="nav-link" onClick={() => setMenuOpen(false)}>About us</a></li>
          <li className="nav-item"><a href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>

        <div className="nav-actions">
          <a href="#contact" className="quote-btn">Request a quote <span>↗</span></a>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}