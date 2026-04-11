import React, { useState, useEffect } from 'react';
import { IconHome, IconMenu, IconClose } from './Icons';

export default function Navbar({ onHome }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const navStyle = {
    position: 'sticky', top: 0, zIndex: 1000,
    background: scrolled ? 'rgba(7,12,24,0.97)' : '#0D1525',
    backdropFilter: scrolled ? 'blur(16px)' : 'none',
    borderBottom: '1px solid rgba(200,169,110,0.22)',
    boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.35)' : 'none',
    transition: 'all 0.35s cubic-bezier(0.16,1,0.3,1)',
    animation: 'slideDown 0.5s cubic-bezier(0.16,1,0.3,1) both',
  };

  return (
    <nav style={navStyle}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        padding: '0 32px', height: 68,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <div
          onClick={() => { onHome(); setMenuOpen(false); }}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
        >
          <img
            src="img/logo1.png"
            alt="Panarwala & Associates"
            style={{ height: 46, width: 'auto', objectFit: 'contain', filter: 'brightness(1.05)' }}
          />
        </div>

        {/* Desktop nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <NavLink onClick={() => { onHome(); setMenuOpen(false); }}>
            <IconHome size={15} />
            <span>Home</span>
          </NavLink>
        </div>

        {/* Mobile hamburger (shown via CSS media query logic through inline) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            display: 'none', // overridden by CSS below
            background: 'transparent', border: 'none',
            color: '#C8A96E', cursor: 'pointer', padding: 6,
          }}
          className="nav-hamburger"
        >
          {menuOpen ? <IconClose size={22} color="#C8A96E" /> : <IconMenu size={22} color="#C8A96E" />}
        </button>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .nav-hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  );
}

function NavLink({ onClick, children }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: 6,
        padding: '8px 16px', borderRadius: 6,
        background: hov ? 'rgba(200,169,110,0.10)' : 'transparent',
        color: hov ? '#C8A96E' : 'rgba(255,255,255,0.78)',
        fontFamily: "'Outfit', sans-serif", fontWeight: 500,
        fontSize: 12, letterSpacing: '0.10em', textTransform: 'uppercase',
        transition: 'all 0.22s ease', cursor: 'pointer',
        border: 'none', outline: 'none',
        position: 'relative',
      }}
    >
      {children}
      <span style={{
        position: 'absolute', bottom: 3, left: '50%',
        transform: `translateX(-50%) scaleX(${hov ? 1 : 0})`,
        transformOrigin: 'center', width: '60%', height: 1.5,
        background: '#C8A96E', borderRadius: 1,
        transition: 'transform 0.25s ease',
        display: 'block',
      }} />
    </button>
  );
}
