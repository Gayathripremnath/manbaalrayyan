import './Footer.css';
import logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';

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

        </div>

        {/* QUICK LINKS */}
        <div className="footer-links">
          <h3>QUICK LINKS</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/products">Products</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/solutions">Solutions</Link>
          <Link to="/contact">Contact</Link>
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
          © 2026 Genova Technologies Pvt Ltd.
        </p>

        <div className="footer-legal">
          <a href="#terms">Terms</a>
          <a href="#privacy">Privacy</a>
        </div>

      </div>

    </footer>
  );
}
