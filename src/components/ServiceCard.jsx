/**
 * ServiceCard.jsx — Premium Executive Card Design
 */
import React, { memo } from "react";
import { useInView } from "../hooks/useInView";
import { getServicePath } from "../services";
import { ServiceIcon } from "../Icons";
import "./ServiceCard.css";

function ServiceCard({ service, index, onSelect }) {
  const [ref, inView] = useInView(0.1);
  const formattedIndex = String(index + 1).padStart(2, "0");
  const highlights = service.highlights || (service.items ? service.items.slice(0, 3) : []);

  function handleClick(event) {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();
    onSelect(service.id);
  }

  return (
    <a
      ref={ref}
      href={getServicePath(service)}
      className={`service-card${inView ? " is-visible" : ""}`}
      style={{ "--index": index }}
      onClick={handleClick}
      aria-label={`View ${service.title} service details`}
    >
      {/* Top Bar: Index Number & Category Badge */}
      <div className="service-card__top">
        <span className="service-card__number">{formattedIndex}</span>
        {service.tag && (
          <span className={`service-card__tag service-card__tag--${service.tag.toLowerCase()}`}>
            {service.tag}
          </span>
        )}
      </div>

      {/* Icon Wrapper with Glass Halo */}
      <div className="service-card__icon-wrapper">
        <ServiceIcon serviceId={service.id} size={36} color="var(--navy)" />
      </div>

      {/* Body: Title & Short Description */}
      <div className="service-card__body">
        <h3 className="service-card__title">{service.title}</h3>
        <p className="service-card__desc">{service.desc}</p>
      </div>

      {/* Feature Highlights Chips */}
      {highlights.length > 0 && (
        <div className="service-card__highlights">
          {highlights.map((item, idx) => (
            <span key={idx} className="service-card__chip">
              <span className="service-card__chip-dot" />
              {item}
            </span>
          ))}
        </div>
      )}

      {/* Footer CTA */}
      <div className="service-card__footer">
        <span className="service-card__cta-text">Explore Service</span>
        <svg
          className="service-card__arrow"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12,5 19,12 12,19" />
        </svg>
      </div>

      {/* Gold underline accent line */}
      <div className="service-card__gold-line" aria-hidden="true" />
    </a>
  );
}

export default memo(ServiceCard);

