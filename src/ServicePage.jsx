/**
 * ServicePage.jsx — Detail view for a single service
 *
 * No inline styles — all CSS lives in ServicePage.css.
 * Data is resolved from services.js via getServiceById().
 */
import React, { useEffect } from "react";
import { getServiceById } from "./services";
import { useInView } from "./hooks/useInView";
import { IconChevronRight } from "./Icons";
import "./ServicePage.css";

/* ── List item with staggered entrance ── */
function ServiceListItem({ text, index }) {
  const [ref, inView] = useInView(0.05);

  return (
    <li
      ref={ref}
      className={`sp-list-item${inView ? " is-visible" : ""}`}
      style={{ "--i": index }}
    >
      <span className="sp-list-item__dot" aria-hidden="true" />
      <span className="sp-list-item__text">{text}</span>
    </li>
  );
}

/* ── Page ── */
export default function ServicePage({ serviceId, onBack }) {
  const service = getServiceById(serviceId);
  const [heroRef, heroInView] = useInView(0.1);

  // Scroll to top whenever the displayed service changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [serviceId]);

  // Graceful fallback (should not happen in normal flow)
  if (!service) {
    return (
      <div className="sp-not-found">
        <p>Service not found.</p>
        <button type="button" className="sp-back-btn" onClick={onBack}>
          ← Back to Services
        </button>
      </div>
    );
  }

  return (
    <div className="sp-page">
      {/* ── Hero Banner ── */}
      <header className="sp-hero" aria-label={`${service.title} service`}>
        {/* Decorative shapes */}
        <div className="sp-hero__ring" aria-hidden="true" />
        <div className="sp-hero__glow" aria-hidden="true" />
        <div className="sp-hero__strip" aria-hidden="true" />

        <div className="sp-hero__inner">
          {/* Breadcrumb */}
          <nav className="sp-breadcrumb" aria-label="Breadcrumb">
            <button
              type="button"
              className="sp-breadcrumb__home"
              onClick={onBack}
              aria-label="Go back to home"
            >
              Home
            </button>
            <IconChevronRight
              size={12}
              color="rgba(200,169,110,0.5)"
              aria-hidden="true"
            />
            <span className="sp-breadcrumb__current" aria-current="page">
              {service.title}
            </span>
          </nav>

          {/* Title row */}
          <div
            ref={heroRef}
            className={`sp-hero__title-row${heroInView ? " is-visible" : ""}`}
          >
            <div className="sp-hero__icon-wrap" aria-hidden="true">
              <img
                src={service.img}
                alt=""
                className="sp-hero__icon-img"
                loading="lazy"
                width={44}
                height={44}
              />
            </div>

            <div>
              <p className="sp-hero__eyebrow">Our Services</p>
              <h1 className="sp-hero__heading">{service.title}</h1>
            </div>
          </div>

          {/* Gold rule */}
          <div className="sp-hero__rule" aria-hidden="true" />
        </div>
      </header>

      {/* ── Content ── */}
      <section className="sp-content" aria-label="Service details">
        <div className="sp-card">
          <div className="sp-card__glow" aria-hidden="true" />

          <p className="sp-card__label">What we offer</p>

          <ul className="sp-list" aria-label={`${service.title} offerings`}>
            {service.items.map((item, i) => (
              <ServiceListItem key={i} text={item} index={i} />
            ))}
          </ul>

          {/* Back CTA */}
          <div className="sp-card__footer">
            <button
              type="button"
              className="sp-back-btn"
              onClick={onBack}
              aria-label="Return to services list"
            >
              ← Back to Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
