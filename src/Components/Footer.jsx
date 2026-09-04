import React from 'react';
import './Footer.css';
import logo from '../assets/Logo.png';

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-main">

        {/* LEFT */}
        <div className="footer-brand">
          <img src={logo} alt="Manba Al Rayyan" className="footer-logo" />

          <p>
            Trading and contracting partner for the supply, testing &amp;
            commissioning of electrical and mechanical equipment across the
            GCC and MENA region.
          </p>

          <div className="footer-tags">
            <span>LINKK</span>
            <span>MEGADUCT</span>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-links">
          <h3>QUICK LINKS</h3>

          <a href="/">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#products">Products</a>
          <a href="#projects">Projects</a>
          <a href="#blog">Solutions</a>
          <a href="#contact">Contact</a>
        </div>

        {/* CONTACT */}
        <div className="footer-contact">
          <h3>CONTACT</h3>

          <p>
            Garhoud Star Building<br />
            P.O. Box 46686<br />
            Dubai, United Arab Emirates
          </p>

          <a href="tel:+97148352303">+971 4 835 2303</a>
          <a href="mailto:info@sanayate.com">info@sanayate.com</a>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">

        <p>
          © 2026 Genova technologies Pvt Ltd.
        </p>

        <div className="footer-legal">
          <a href="#terms">Terms</a>
          <a href="#privacy">Privacy</a>
        </div>

      </div>

    </footer>
  );
}