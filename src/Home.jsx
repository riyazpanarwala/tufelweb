/**
 * Home.jsx — Hero + Services grid
 *
 * Data: from services.js (no duplication)
 * Animation: shared useInView hook
 * Accessibility: semantic <section>, <h1>, aria attributes
 */
import React from "react";
import { SERVICES } from "./services";
import ServiceCard from "./components/ServiceCard";
import SectionTitle from "./components/SectionTitle";
import { useInView } from "./hooks/useInView";
import "./Home.css";

export default function Home({ onServiceSelect }) {
  const [heroRef, heroInView] = useInView(0.1);

  return (
    <div className="home-container">
      {/* ── Hero Section ── */}
      <section
        className="hero-section"
        aria-label="Welcome to Panarwala & Associates"
      >
        {/* Decorative background blobs (aria-hidden) */}
        <div className="hero-bg-blob hero-bg-blob--gold" aria-hidden="true" />
        <div className="hero-bg-blob hero-bg-blob--blue" aria-hidden="true" />

        <div ref={heroRef} className="hero-content">
          <SectionTitle
            eyebrow="Welcome to Panarwala & Associates"
            subtitle="Trusted advisory in Ahmedabad — from compliance to corporate structuring."
            as="h1"
            inView={heroInView}
          >
            We Are the Best <em>Tax Consulting</em> and Preparation Services
          </SectionTitle>
        </div>

        {/* ── Services Grid ── */}
        <div aria-label="Our services" role="region">
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
