import React from 'react';
import './Footer.css';
import logo from '../assets/Logo.png';

export default function Footer() {
  return (
    <footer className="nex-footer">
      <div className="footer-container">
        {/* Column 1: Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#blog">» Blog</a></li>
            <li><a href="#portfolio">» Portfolio</a></li>
            <li><a href="#pricing">» Pricing</a></li>
            <li><a href="#shop">» Shop</a></li>
          </ul>
        </div>

        {/* Column 2: Useful Links */}
        <div className="footer-col">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="#home">» Home</a></li>
            <li><a href="#about">» About Us</a></li>
            <li><a href="#team">» Team</a></li>
            <li><a href="#faq">» Faq</a></li>
            <li><a href="#contact">» Contact Us</a></li>
            <li><a href="#history">» Our History</a></li>
            <li><a href="#services">» Services</a></li>
            <li><a href="#coming">» Coming Soon</a></li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div className="footer-col contact-col">
          <h4>Contact</h4>
          <p><span>📍</span> 17504 Carlton Cuevas Rd Gulfport, MS, 39503</p>
          <p><span>✉️</span> info@example.com</p>
          <p><span>📞</span> 001123456789</p>
        </div>

        {/* Column 4: Brand & Socials */}
        <div className="footer-col brand-col">
          <div className="footer-logo">
            <img src={logo} alt="Manba Al Rayyan Trading & Services LLC" />
          </div>
          <p className="footer-desc">Delivering strategic business solutions with trusted expertise, innovation, and measurable results.</p>
          <div className="social-icons">
            <a href="#globe" aria-label="Website">🌐</a>
            <a href="#linkedin" aria-label="LinkedIn">💼</a>
            <a href="#facebook" aria-label="Facebook">📘</a>
          </div>
        </div>
      </div>

      {/* Bottom Sub-footer */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>Copyright © 2026 All Rights Reserved.</p>
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a> / 
            <a href="#tc">T&C</a> / 
            <a href="#help">Help</a>
          </div>
        </div>
      </div>
    </footer>
  );
}