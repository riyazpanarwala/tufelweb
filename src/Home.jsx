import React, { useEffect, useRef, useState } from "react";
import { IconArrowRight } from "./Icons";
import "./Home.css";

// Intersection observer hook for scroll-triggered animations
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

const SERVICES = [
  {
    id: 1,
    title: "Book Keeping / Accounting",
    img: "img/accounting.png",
    tag: "Compliance",
    desc: "Tally & custom software bookkeeping, finalization, and review.",
  },
  {
    id: 2,
    title: "GST Compliances",
    img: "img/gst.png",
    tag: "Taxation",
    desc: "Registration, returns, refunds, appeals & departmental representation.",
  },
  {
    id: 3,
    title: "Income Tax Return",
    img: "img/incometax.png",
    tag: "Taxation",
    desc: "PAN, ITR filing, tax planning, demand replies & appeals.",
  },
  {
    id: 4,
    title: "ROC / MCA Compliances",
    img: "img/roc.png",
    tag: "Corporate",
    desc: "Pvt Ltd, LLP registrations, annual filings & director KYC.",
  },
  {
    id: 5,
    title: "Agreement Drafting",
    img: "img/agreement.png",
    tag: "Legal",
    desc: "Sale deeds, rent agreements, LLP deeds & legal documentation.",
  },
  {
    id: 6,
    title: "Other Services",
    img: "img/other.png",
    tag: "Advisory",
    desc: "TDS, Udyam, DSC, Trademark, Insurance & management consulting.",
  },
];

const TAG_COLORS = {
  Compliance: { bg: "rgba(99,179,237,0.12)", color: "#63B3ED" },
  Taxation: { bg: "rgba(154,230,180,0.12)", color: "#68D391" },
  Corporate: { bg: "rgba(214,188,250,0.12)", color: "#D6BCFA" },
  Legal: { bg: "rgba(252,196,121,0.12)", color: "#F6AD55" },
  Advisory: { bg: "rgba(200,169,110,0.15)", color: "#C8A96E" },
};

function ServiceCard({ service, index, onSelect }) {
  const [ref, inView] = useInView(0.1);
  const tag = TAG_COLORS[service.tag] || TAG_COLORS.Advisory;

  return (
    <div
      ref={ref}
      onClick={() => onSelect(service.id)}
      className={`service-card ${inView ? "is-visible" : ""}`}
      style={{ "--index": index }}
    >
      {/* Glow blob on hover */}
      <div className="service-card__glow" />

      {/* Top row: icon + tag */}
      <div className="service-card__header">
        <div className="service-card__icon-wrapper">
          <img
            src={service.img}
            alt={service.title}
            className="service-card__icon-img"
          />
        </div>

        {/* Tag badge */}
        <span
          className="service-card__tag"
          style={{
            background: tag.bg,
            color: tag.color,
            borderColor: `${tag.color}22`,
          }}
        >
          {service.tag}
        </span>
      </div>

      {/* Title */}
      <div className="service-card__content">
        <h3 className="service-card__title">{service.title}</h3>
        <p className="service-card__desc">{service.desc}</p>
      </div>

      {/* CTA arrow */}
      <div className="service-card__cta">
        View details
        <span className="service-card__cta-arrow">
          <IconArrowRight size={13} color="#C8A96E" />
        </span>
      </div>

      {/* Bottom gold line */}
      <div className="service-card__gold-line" />
    </div>
  );
}

export default function Home({ onServiceSelect }) {
  const [heroRef, heroInView] = useInView(0.1);

  return (
    <main className="home-container">
      {/* ── Hero Section ── */}
      <section className="hero-section">
        {/* Background decoration */}
        <div className="hero-bg-decoration hero-bg-decoration--gold" />
        <div className="hero-bg-decoration hero-bg-decoration--blue" />

        <div ref={heroRef} className="hero-content">
          {/* Eyebrow */}
          <div className={`hero-eyebrow ${heroInView ? "is-visible" : ""}`}>
            <div className="hero-eyebrow__line" />
            <span className="hero-eyebrow__text">
              Welcome to Panarwala & Associates
            </span>
            <div className="hero-eyebrow__line" />
          </div>

          {/* Headline */}
          <h1 className={`hero-headline ${heroInView ? "is-visible" : ""}`}>
            We Are the Best <em>Tax Consulting</em> and Preparation Services
          </h1>

          {/* Subtitle */}
          <p className={`hero-subtitle ${heroInView ? "is-visible" : ""}`}>
            Trusted advisory in Ahmedabad — from compliance to corporate
            structuring.
          </p>
        </div>

        {/* ── Services Grid ── */}
        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <ServiceCard
              key={s.id}
              service={s}
              index={i}
              onSelect={onServiceSelect}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
