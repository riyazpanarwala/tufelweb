/**
 * ServiceCard.jsx — Accessible, animated service card
 *
 * Props:
 *   service  { id, title, img, tag, desc }
 *   index    number   — stagger index for entrance animation
 *   onSelect function — called with service.id on click / Enter / Space
 */
import React, { memo } from "react";
import { IconArrowRight } from "../Icons";
import { TAG_STYLES } from "../services";
import { useInView } from "../hooks/useInView";
import "./ServiceCard.css";

function ServiceCard({ service, index, onSelect }) {
  const [ref, inView] = useInView(0.1);
  const tag = TAG_STYLES[service.tag] ?? TAG_STYLES.Advisory;

  function handleClick() {
    onSelect(service.id);
  }

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
	  aria-role="button"
    >
      {/* Ambient glow (CSS-only, no JS) */}
      <div className="service-card__glow" aria-hidden="true" />

      {/* Header row: icon + tag */}
      <div className="service-card__header">
        <div className="service-card__icon-wrapper" aria-hidden="true">
          <img
            src={service.img}
            alt=""
            className="service-card__icon-img"
            loading="lazy"
            width={30}
            height={30}
          />
        </div>

        <span
          className="service-card__tag"
          style={{
            "--tag-bg": tag.bg,
            "--tag-color": tag.color,
            "--tag-border": `${tag.color}22`,
          }}
          aria-label={`Category: ${service.tag}`}
        >
          {service.tag}
        </span>
      </div>

      {/* Body */}
      <div className="service-card__body">
        <h3 className="service-card__title">{service.title}</h3>
        <p className="service-card__desc">{service.desc}</p>
      </div>

      {/* CTA */}
      <div className="service-card__cta" aria-hidden="true">
        View details
        <span className="service-card__cta-arrow">
          <IconArrowRight size={13} color="#C8A96E" />
        </span>
      </div>

      {/* Decorative bottom line */}
      <div className="service-card__gold-line" aria-hidden="true" />
    </article>
  );
}

export default memo(ServiceCard);
