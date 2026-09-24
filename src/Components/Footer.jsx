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
            164T, Block 349, Way No. 4902<br />
            Near Areej Oil, Rusayl Industrial Area<br />
            Rusayl, Sultanate of Oman
          </p>

          <a href="tel:+96822575015">22575015</a>
          <a href="mailto:marketing@martsaqua.com">marketing@martsaqua.com</a>
          <a href="mailto:martenquiries@gmail.com">martenquiries@gmail.com</a>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">

        <p>
          © 2026 Genova Technologies Pvt Ltd.
        </p>

        <div className="footer-legal">
          <a href="#terms">Terms</a>
          <a href="/privacy">Privacy</a>
        </div>

      </div>

    </footer>
  );
}
