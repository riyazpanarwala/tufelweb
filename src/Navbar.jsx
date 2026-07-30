/**
 * Navbar.jsx — Light theme sticky navigation
 * Matches reference design: logo left, nav center, CTA button right
 */
import React, { useState, useEffect } from "react";
import Logo from "./components/Logo";
import { IconMenu, IconClose } from "./Icons";
import "./Navbar.css";

export default function Navbar({ onHome, onServiceSelect }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);

      // Section tracking
      const servicesEl = document.getElementById("services-section");
      const contactEl = document.getElementById("footer-contact");

      if (contactEl && window.scrollY + window.innerHeight >= document.body.offsetHeight - 120) {
        setActiveSection("contact");
      } else if (servicesEl && window.scrollY >= servicesEl.offsetTop - 140) {
        setActiveSection("services");
      } else {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleHomeClick = () => {
    setActiveSection("home");
    onHome();
  };

  const scrollToServices = () => {
    setMenuOpen(false);
    setActiveSection("services");
    onHome();
    setTimeout(() => {
      const el = document.getElementById("services-section");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const scrollToContact = () => {
    setMenuOpen(false);
    setActiveSection("contact");
    setTimeout(() => {
      const el = document.getElementById("footer-contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <nav
      className={`navbar${scrolled ? " navbar--scrolled" : ""}`}
      aria-label="Main navigation"
    >
      <div className="navbar-container">
        {/* Logo */}
        <Logo variant="dark" size="md" onClick={handleHomeClick} />

        {/* Desktop nav links */}
        <div className="nav-links" role="menubar">
          <button
            type="button"
            className={`nav-link-btn${activeSection === "home" ? " active" : ""}`}
            onClick={handleHomeClick}
            role="menuitem"
          >
            Home
          </button>
          <button
            type="button"
            className={`nav-link-btn${activeSection === "services" ? " active" : ""}`}
            onClick={scrollToServices}
            role="menuitem"
          >
            Services
          </button>
          <button
            type="button"
            className={`nav-link-btn${activeSection === "contact" ? " active" : ""}`}
            onClick={scrollToContact}
            role="menuitem"
          >
            Contact Us
          </button>
        </div>

        {/* CTA */}
        <button
          type="button"
          className="nav-cta-btn"
          onClick={scrollToContact}
          aria-label="Get in touch with us"
        >
          Get In Touch
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12,5 19,12 12,19"/>
          </svg>
        </button>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="nav-hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <IconClose size={22} color="var(--navy)" /> : <IconMenu size={22} color="var(--navy)" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`nav-mobile-menu${menuOpen ? " open" : ""}`} aria-hidden={!menuOpen}>
        <button type="button" className="nav-mobile-link" onClick={() => { handleHomeClick(); setMenuOpen(false); }}>
          Home
        </button>
        <button type="button" className="nav-mobile-link" onClick={scrollToServices}>
          Services
        </button>
        <button type="button" className="nav-mobile-link" onClick={scrollToContact}>
          Contact Us
        </button>
      </div>
    </nav>
  );
}
