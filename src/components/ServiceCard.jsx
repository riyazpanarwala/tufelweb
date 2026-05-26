/**
 * ServiceCard.jsx — Light theme card (centered icon + title + desc + gold bar)
 */
import React, { memo } from "react";
import { useInView } from "../hooks/useInView";
import "./ServiceCard.css";

function ServiceCard({ service, index, onSelect }) {
  const [ref, inView] = useInView(0.1);

  function handleClick() { onSelect(service.id); }
  function handleKeyDown(e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect(service.id);
    }
  }

  return (
    <article
      ref={ref}
      role="button"
      tabIndex={0}
      className={`service-card${inView ? " is-visible" : ""}`}
      style={{ "--index": index }}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={`${service.title} — click to view details`}
    >
      {/* Icon */}
      <div className="service-card__icon-wrapper" aria-hidden="true">
        <img
          src={service.img}
          alt=""
          className="service-card__icon-img"
          loading="lazy"
          width={34}
          height={34}
        />
      </div>

      {/* Body */}
      <div className="service-card__body">
        <h3 className="service-card__title">{service.title}</h3>
        <p className="service-card__desc">{service.desc}</p>
      </div>

      {/* Gold underline */}
      <div className="service-card__gold-line" aria-hidden="true" />
    </article>
  );
}

export default memo(ServiceCard);
