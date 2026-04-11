import React, { useEffect, useRef, useState } from "react";
import {
  IconLedger,
  IconGST,
  IconTax,
  IconROC,
  IconAgreement,
  IconServices,
  IconArrowRight,
} from "./Icons";

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
    Icon: IconLedger,
    tag: "Compliance",
    desc: "Tally & custom software bookkeeping, finalization, and review.",
  },
  {
    id: 2,
    title: "GST Compliances",
    img: "img/gst.png",
    Icon: IconGST,
    tag: "Taxation",
    desc: "Registration, returns, refunds, appeals & departmental representation.",
  },
  {
    id: 3,
    title: "Income Tax Return",
    img: "img/incometax.png",
    Icon: IconTax,
    tag: "Taxation",
    desc: "PAN, ITR filing, tax planning, demand replies & appeals.",
  },
  {
    id: 4,
    title: "ROC / MCA Compliances",
    img: "img/roc.png",
    Icon: IconROC,
    tag: "Corporate",
    desc: "Pvt Ltd, LLP registrations, annual filings & director KYC.",
  },
  {
    id: 5,
    title: "Agreement Drafting",
    img: "img/agreement.png",
    Icon: IconAgreement,
    tag: "Legal",
    desc: "Sale deeds, rent agreements, LLP deeds & legal documentation.",
  },
  {
    id: 6,
    title: "Other Services",
    img: "img/other.png",
    Icon: IconServices,
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
  const [hov, setHov] = useState(false);
  const [ref, inView] = useInView(0.1);
  const tag = TAG_COLORS[service.tag] || TAG_COLORS.Advisory;

  return (
    <div
      ref={ref}
      onClick={() => onSelect(service.id)}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: "relative",
        overflow: "hidden",
        background: hov
          ? "linear-gradient(145deg, #141B2D 0%, #1A2438 100%)"
          : "linear-gradient(145deg, #101728 0%, #141E30 100%)",
        border: `1px solid ${hov ? "rgba(200,169,110,0.45)" : "rgba(255,255,255,0.06)"}`,
        borderRadius: 20,
        padding: "32px 28px",
        cursor: "pointer",
        transform: hov
          ? "translateY(-8px) scale(1.01)"
          : inView
            ? "translateY(0) scale(1)"
            : "translateY(32px) scale(0.97)",
        opacity: inView ? 1 : 0,
        transition: `transform 0.55s cubic-bezier(0.16,1,0.3,1) ${index * 0.08}s,
                     opacity 0.55s ease ${index * 0.08}s,
                     background 0.3s ease,
                     border-color 0.3s ease,
                     box-shadow 0.3s ease`,
        boxShadow: hov
          ? "0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(200,169,110,0.2), inset 0 1px 0 rgba(200,169,110,0.15)"
          : "0 4px 20px rgba(0,0,0,0.2)",
        display: "flex",
        flexDirection: "column",
        gap: 18,
        minHeight: 220,
      }}
    >
      {/* Glow blob on hover */}
      <div
        style={{
          position: "absolute",
          top: -40,
          right: -40,
          width: 140,
          height: 140,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(200,169,110,0.12) 0%, transparent 70%)",
          opacity: hov ? 1 : 0,
          transition: "opacity 0.35s ease",
          pointerEvents: "none",
        }}
      />

      {/* Top row: icon + tag */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        {/* Icon container */}
        <div
          style={{
            width: 60,
            height: 60,
            borderRadius: 14,
            background: hov
              ? "linear-gradient(135deg, #C8A96E, #E4C47A)"
              : "rgba(200,169,110,0.10)",
            border: `1px solid ${hov ? "transparent" : "rgba(200,169,110,0.20)"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: hov
              ? "rotate(-5deg) scale(1.08)"
              : "rotate(0deg) scale(1)",
            transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
            flexShrink: 0,
          }}
        >
          <img
            src={service.img}
            alt={service.title}
            style={{
              width: 30,
              height: 30,
              objectFit: "contain",
              filter: hov
                ? "brightness(0) invert(1)"
                : "brightness(0.9) saturate(0.8)",
              transition: "filter 0.3s ease",
            }}
          />
        </div>

        {/* Tag badge */}
        <span
          style={{
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "4px 10px",
            borderRadius: 20,
            background: tag.bg,
            color: tag.color,
            fontFamily: "'Outfit', sans-serif",
            border: `1px solid ${tag.color}22`,
          }}
        >
          {service.tag}
        </span>
      </div>

      {/* Title */}
      <div>
        <h3
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 20,
            fontWeight: 600,
            lineHeight: 1.25,
            color: hov ? "#E4C47A" : "#F0EBE0",
            margin: "0 0 8px",
            transition: "color 0.25s ease",
          }}
        >
          {service.title}
        </h3>
        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 12.5,
            fontWeight: 300,
            color: "rgba(255,255,255,0.45)",
            lineHeight: 1.6,
            margin: 0,
            opacity: hov ? 1 : 0.8,
            transition: "opacity 0.25s ease",
          }}
        >
          {service.desc}
        </p>
      </div>

      {/* CTA arrow */}
      <div
        style={{
          marginTop: "auto",
          display: "flex",
          alignItems: "center",
          gap: 6,
          color: "#C8A96E",
          fontFamily: "'Outfit', sans-serif",
          fontSize: 12,
          fontWeight: 500,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          opacity: hov ? 1 : 0,
          transform: hov ? "translateX(0)" : "translateX(-8px)",
          transition: "all 0.3s ease",
        }}
      >
        View details
        <span
          style={{
            transform: hov ? "translateX(4px)" : "translateX(0)",
            transition: "transform 0.3s ease",
            display: "flex",
          }}
        >
          <IconArrowRight size={13} color="#C8A96E" />
        </span>
      </div>

      {/* Bottom gold line */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 2,
          background: "linear-gradient(90deg, #C8A96E, #E4C47A)",
          transform: `scaleX(${hov ? 1 : 0})`,
          transformOrigin: "left",
          transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
        }}
      />
    </div>
  );
}

export default function Home({ onServiceSelect }) {
  const [heroRef, heroInView] = useInView(0.1);

  return (
    <main
      style={{
        background:
          "linear-gradient(180deg, #070C18 0%, #0A1020 40%, #0D1428 100%)",
        minHeight: "100vh",
      }}
    >
      {/* ── Hero Section ── */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 32px 40px",
          position: "relative",
        }}
      >
        {/* Background decoration */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: -100,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(200,169,110,0.05) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 80,
            left: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(99,139,200,0.04) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />

        <div ref={heroRef} style={{ position: "relative", zIndex: 1 }}>
          {/* Eyebrow */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 24,
              opacity: heroInView ? 1 : 0,
              transform: heroInView ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.6s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <div style={{ width: 28, height: 1, background: "#C8A96E" }} />
            <span
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.20em",
                textTransform: "uppercase",
                color: "#C8A96E",
              }}
            >
              Welcome to Panarwala & Associates
            </span>
            <div style={{ width: 28, height: 1, background: "#C8A96E" }} />
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(36px, 5vw, 62px)",
              fontWeight: 600,
              lineHeight: 1.12,
              color: "#F0EBE0",
              margin: "0 0 16px",
              maxWidth: 680,
              opacity: heroInView ? 1 : 0,
              transform: heroInView ? "translateY(0)" : "translateY(24px)",
              transition: "all 0.7s cubic-bezier(0.16,1,0.3,1) 0.08s",
            }}
          >
            We Are the Best{" "}
            <em style={{ color: "#C8A96E", fontStyle: "italic" }}>
              Tax Consulting
            </em>{" "}
            and Preparation Services
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 15,
              fontWeight: 300,
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.48)",
              margin: "0 0 60px",
              maxWidth: 540,
              opacity: heroInView ? 1 : 0,
              transform: heroInView ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.7s cubic-bezier(0.16,1,0.3,1) 0.15s",
            }}
          >
            Trusted advisory in Ahmedabad — from compliance to corporate
            structuring.
          </p>
        </div>

        {/* ── Services Grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 18,
          }}
          className="services-grid"
        >
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

      {/* Responsive override */}
      <style>{`
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 540px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
