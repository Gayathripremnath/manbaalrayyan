import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

import logo from "../assets/Logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navLinkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  const mobileNavLinkClass = ({ isActive }) =>
    isActive ? "mobile-nav-link active" : "mobile-nav-link";

  return (
    <header className="navbar">

      <div className="navbar-container">

        {/* Logo */}
        <Link
          to="/"
          className="navbar-logo"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt="Al Sanaya Technical Equipment"
          />
        </Link>


        {/* Desktop Navigation */}
        <nav className="navbar-menu">

          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>

          <NavLink to="/services" className={navLinkClass}>
            Services
          </NavLink>

          <NavLink to="/products" className={navLinkClass}>
            Products
          </NavLink>

          <NavLink to="/projects" className={navLinkClass}>
            Projects
          </NavLink>

          <NavLink to="/solutions" className={navLinkClass}>
            Solutions
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>

        </nav>


        {/* Right Actions */}
        <div className="navbar-actions">

          {/* Get a Quote */}
          <Link
            to="/contact#enquiry"
            className="quote-btn"
            onClick={closeMenu}
          >
            Get a Quote
          </Link>


          {/* Mobile Menu */}
          <button
            type="button"
            className="menu-toggle"
            aria-label={
              menuOpen ? "Close menu" : "Open menu"
            }
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X
                size={25}
                strokeWidth={2}
              />
            ) : (
              <Menu
                size={25}
                strokeWidth={2}
              />
            )}
          </button>

        </div>

      </div>


      {/* Mobile Menu */}
      <div
        className={`mobile-menu ${
          menuOpen ? "open" : ""
        }`}
      >

        <NavLink
          to="/"
          className={mobileNavLinkClass}
          onClick={closeMenu}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={mobileNavLinkClass}
          onClick={closeMenu}
        >
          About
        </NavLink>

        <NavLink
          to="/services"
          className={mobileNavLinkClass}
          onClick={closeMenu}
        >
          Services
        </NavLink>

        <NavLink
          to="/products"
          className={mobileNavLinkClass}
          onClick={closeMenu}
        >
          Products
        </NavLink>

        <NavLink
          to="/projects"
          className={mobileNavLinkClass}
          onClick={closeMenu}
        >
          Projects
        </NavLink>

        <NavLink
          to="/solutions"
          className={mobileNavLinkClass}
          onClick={closeMenu}
        >
          Solutions
        </NavLink>

        <NavLink
          to="/contact"
          className={mobileNavLinkClass}
          onClick={closeMenu}
        >
          Contact
        </NavLink>


        {/* Mobile Get a Quote */}
        <Link
          to="/contact#enquiry"
          className="mobile-quote-btn"
          onClick={closeMenu}
        >
          Get a Quote <span>↗</span>
        </Link>

      </div>

    </header>
  );
}