/**
 * ServiceCard.jsx — Light theme card (centered icon + title + desc + gold bar)
 */
import React, { memo } from "react";
import { useInView } from "../hooks/useInView";
import { getServicePath } from "../services";
import "./ServiceCard.css";

function ServiceCard({ service, index, onSelect }) {
  const [ref, inView] = useInView(0.1);

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
      {/* Icon */}
      <div className="service-card__icon-wrapper">
        <img
          src={service.img}
          alt={`${service.title} service icon`}
          className="service-card__icon-img"
          loading="lazy"
          width={48}
          height={48}
        />
      </div>

      {/* Body */}
      <div className="service-card__body">
        <h3 className="service-card__title">{service.title}</h3>
        <p className="service-card__desc">{service.desc}</p>
      </div>

      {/* Gold underline */}
      <div className="service-card__gold-line" aria-hidden="true" />
    </a>
  );
}

export default memo(ServiceCard);
