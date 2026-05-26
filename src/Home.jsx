/**
 * Home.jsx — Light theme: Hero + Value Pillars + Services Grid
 * All data from services.js (no duplication)
 */
import React from "react";
import { SERVICES } from "./services";
import ServiceCard from "./components/ServiceCard";
import { useInView } from "./hooks/useInView";
import { BRAND as CONFIG_BRAND } from "./config";
import "./Home.css";

/* Pillar icons as inline SVGs */
const PillarShieldIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <polyline points="9,12 11,14 15,10"/>
  </svg>
);
const PillarHandshakeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 11l3 3L22 4"/>
    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
  </svg>
);
const PillarChartIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/>
    <line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="14"/>
    <path d="M4 20h16"/>
    <polyline points="16,8 18,10 20,8"/>
  </svg>
);
const PillarUserIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

const PILLARS = [
  {
    icon: <PillarShieldIcon />,
    title: "Expertise",
    desc: "In-depth knowledge and industry experience",
  },
  {
    icon: <PillarHandshakeIcon />,
    title: "Trust",
    desc: "Ethical practices and client confidentiality",
  },
  {
    icon: <PillarChartIcon />,
    title: "Value",
    desc: "Strategic solutions for sustainable growth",
  },
  {
    icon: <PillarUserIcon />,
    title: "Commitment",
    desc: "Dedicated to your success and long-term goals",
  },
];

export default function Home({ onServiceSelect }) {
  const [heroRef, heroInView] = useInView(0.1);

  const scrollToContact = () => {
    const el = document.getElementById("footer-contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    const el = document.getElementById("services-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home-container">
      {/* ── HERO ── */}
      <section className="hero-section" aria-label="Welcome to Panarwala & Associates">
        <div className="hero-inner">
          {/* Left */}
          <div
            ref={heroRef}
            className="hero-left"
            style={{
              opacity: heroInView ? 1 : 0,
              transform: heroInView ? "none" : "translateY(24px)",
              transition: "opacity 0.65s ease, transform 0.65s ease",
            }}
          >
            <div className="hero-eyebrow" aria-hidden="true">
              <span className="hero-eyebrow-dot" />
              <span className="hero-eyebrow-text">Trusted | Professional | Reliable</span>
            </div>

            <h1 className="hero-heading">Expert Financial Advice.</h1>
            <p className="hero-heading-line2">Trusted CA Solutions.</p>

            <div className="hero-gold-rule" aria-hidden="true" />

            <p className="hero-subtitle">
              Comprehensive financial, tax and business advisory services to help you grow, comply and succeed.
            </p>

            <div className="hero-btns">
              <button
                type="button"
                className="btn-primary"
                onClick={scrollToServices}
                aria-label="View our services"
              >
                Our Services
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12,5 19,12 12,19"/>
                </svg>
              </button>
              <button
                type="button"
                className="btn-secondary"
                onClick={scrollToContact}
                aria-label="Book a consultation"
              >
                Book Consultation
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Right — decorative logo panel */}
          <div className="hero-right" aria-hidden="true">
            <div className="hero-logo-box">
              <img
                src={CONFIG_BRAND.logoLight}
                alt=""
                className="hero-logo-img"
                loading="eager"
              />
              <p className="hero-logo-tagline">Integrity. Expertise. Excellence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUE PILLARS ── */}
      <div className="pillars-strip" role="region" aria-label="Our values">
        <div className="pillars-inner">
          {PILLARS.map((p) => (
            <div key={p.title} className="pillar-item">
              <div className="pillar-icon" aria-hidden="true">{p.icon}</div>
              <div className="pillar-content">
                <p className="pillar-title">{p.title}</p>
                <p className="pillar-desc">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── SERVICES SECTION ── */}
      <section
        id="services-section"
        className="services-section"
        aria-label="Our services"
      >
        <div className="services-inner">
          <header className="section-header">
            <div className="section-eyebrow" aria-hidden="true">
              <span className="section-eyebrow-line" />
              <span className="section-eyebrow-text">What We Offer</span>
              <span className="section-eyebrow-line" />
            </div>
            <h2 className="section-heading">Our Services</h2>
            <div className="section-gold-rule" aria-hidden="true" />
          </header>

          <ul className="services-grid">
            {SERVICES.map((service, i) => (
              <li key={service.id}>
                <ServiceCard
                  service={service}
                  index={i}
                  onSelect={onServiceSelect}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
