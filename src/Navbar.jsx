/**
 * Navbar.jsx — Sticky top navigation
 * Uses Logo component. Scroll-aware styling via CSS class toggle.
 */
import React, { useState, useEffect } from "react";
import Logo from "./components/Logo";
import { IconHome } from "./Icons";
import "./Navbar.css";

export default function Navbar({ onHome }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`navbar${scrolled ? " navbar--scrolled" : ""}`}
      aria-label="Main navigation"
    >
      <div className="navbar-container">
        <Logo variant="light" size="md" onClick={onHome} />

        <button
          type="button"
          className="nav-home-btn"
          onClick={onHome}
          aria-label="Go to home page"
        >
          <IconHome size={16} aria-hidden="true" />
          <span>Home</span>
        </button>
      </div>
    </nav>
  );
}
