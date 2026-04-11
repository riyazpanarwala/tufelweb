import React, { useState, useEffect } from "react";
import { IconHome } from "./Icons";
import "./Navbar.css";

export default function Navbar({ onHome }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={onHome}>
          <img src="img/logo1.png" alt="Panarwala & Associates" />
        </div>

        <button className="nav-home-btn" onClick={onHome}>
          <IconHome size={16} />
          <span>Home</span>
        </button>
      </div>
    </nav>
  );
}
