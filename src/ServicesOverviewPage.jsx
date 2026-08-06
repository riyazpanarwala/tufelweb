/**
 * ServicesOverviewPage.jsx — Dedicated Services Overview / Hub Page (/services)
 *
 * Displays full portfolio of services with category filter pills,
 * detailed deliverable highlights, and seamless navigation to individual detail pages.
 */
import React, { useState, useEffect, useMemo } from "react";
import { SERVICES, TAG_STYLES } from "./services";
import { ServiceIcon, IconChevronRight, IconArrowRight } from "./Icons";
import "./ServicesOverviewPage.css";

const CATEGORIES = ["All", "Compliance", "Taxation", "Corporate", "Legal", "Advisory"];

export default function ServicesOverviewPage({ onHome, onServiceSelect }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const filteredServices = useMemo(() => {
    if (selectedCategory === "All") return SERVICES;
    return SERVICES.filter((s) => s.tag === selectedCategory);
  }, [selectedCategory]);

  const handleContactClick = () => {
    if (onHome) {
      onHome();
      setTimeout(() => {
        const el = document.getElementById("contact-form-section") || document.getElementById("footer-contact");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <div className="so-page">
      {/* ── Hero Banner ── */}
      <header className="so-hero" aria-label="Services Overview Header">
        <div className="so-hero__ring" aria-hidden="true" />
        <div className="so-hero__glow" aria-hidden="true" />
        <div className="so-hero__strip" aria-hidden="true" />

        <div className="so-hero__inner">
          {/* Breadcrumb */}
          <nav className="so-breadcrumb" aria-label="Breadcrumb">
            <button
              type="button"
              className="so-breadcrumb__link"
              onClick={onHome}
              aria-label="Go back to home"
            >
              Home
            </button>
            <IconChevronRight
              size={12}
              color="rgba(200,169,110,0.5)"
              aria-hidden="true"
            />
            <span className="so-breadcrumb__current" aria-current="page">
              Services
            </span>
          </nav>

          {/* Header titles */}
          <p className="so-hero__eyebrow">Our Service Portfolio</p>
          <h1 className="so-hero__heading">
            Comprehensive Tax, Financial &amp; Legal Solutions
          </h1>
          <p className="so-hero__subtitle">
            Explore our specialized practice areas. From daily bookkeeping and GST compliance to ROC company filings and legal agreement drafting, Panarwala &amp; Associates delivers trusted expertise tailored to your business needs in Ahmedabad.
          </p>

          <div className="so-hero__rule" aria-hidden="true" />
        </div>
      </header>

      {/* ── Main Content ── */}
      <main className="so-content" id="services-hub-content">
        {/* Category Filter Bar */}
        <div className="so-filter-bar" aria-label="Filter services by category">
          <span className="so-filter-label">Filter by Area:</span>
          <div className="so-filter-pills" role="tablist">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={selectedCategory === cat}
                className={`so-filter-pill${selectedCategory === cat ? " active" : ""}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="so-grid" role="region" aria-label="Services list">
          {filteredServices.map((service) => {
            const tagStyle = TAG_STYLES[service.tag] || {
              bg: "rgba(201, 168, 76, 0.12)",
              color: "#C8A96E",
            };

            return (
              <article key={service.id} className="so-card">
                <div className="so-card__top">
                  <div className="so-card__header">
                    <div className="so-card__icon-wrap">
                      <ServiceIcon serviceId={service.id} size={36} color="var(--gold-bright)" />
                    </div>
                    {service.tag && (
                      <span
                        className="so-card__tag"
                        style={{ backgroundColor: tagStyle.bg, color: tagStyle.color }}
                      >
                        {service.tag}
                      </span>
                    )}
                  </div>

                  <h2 className="so-card__title">{service.title}</h2>
                  <p className="so-card__desc">{service.desc}</p>

                  <ul className="so-card__items" aria-label={`${service.title} key highlights`}>
                    {service.highlights.map((item, idx) => (
                      <li key={idx} className="so-card__item">
                        <span className="so-card__item-dot" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="so-card__footer">
                  <button
                    type="button"
                    className="so-card__link"
                    onClick={() => onServiceSelect(service.id)}
                    aria-label={`View details for ${service.title}`}
                  >
                    <span>Explore Service Details</span>
                    <IconArrowRight size={15} color="currentColor" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Consultation CTA */}
        <div className="so-cta">
          <div className="so-cta__glow" aria-hidden="true" />
          <div>
            <h2 className="so-cta__heading">Need Custom Advisory or Have Questions?</h2>
            <p className="so-cta__subtext">
              Speak directly with our senior financial consultants in Ahmedabad to evaluate your compliance status and tax optimization strategy.
            </p>
          </div>
          <button type="button" className="so-cta__btn" onClick={handleContactClick}>
            <span>Request Free Consultation</span>
            <IconArrowRight size={16} color="var(--navy-dark)" />
          </button>
        </div>
      </main>
    </div>
  );
}
