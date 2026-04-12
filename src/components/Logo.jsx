/**
 * Logo.jsx — Reusable brand logo component
 *
 * Props:
 *   variant  "light" | "dark"   — controls which logo asset is used
 *   size     "sm" | "md" | "lg" — controls rendered height
 *   onClick  function           — makes it keyboard-accessible when provided
 *   className string            — optional extra class
 */
import React, { memo } from "react";
import { BRAND } from "../config";
import "./Logo.css";

const SIZE_MAP = {
  sm: "logo--sm",
  md: "logo--md",
  lg: "logo--lg",
};

function Logo({ variant = "light", size = "md", onClick, className = "" }) {
  const src = variant === "dark" ? BRAND.logoDark : BRAND.logoLight;
  const sizeClass = SIZE_MAP[size] ?? SIZE_MAP.md;
  const isInteractive = typeof onClick === "function";

  // When a click handler is provided, render as a button for full a11y
  if (isInteractive) {
    return (
      <button
        type="button"
        className={`logo logo--interactive ${sizeClass} ${className}`.trim()}
        onClick={onClick}
        aria-label={`${BRAND.name} — go to home`}
      >
        <img
          src={src}
          alt={BRAND.logoAlt}
          className="logo__img"
          draggable={false}
        />
      </button>
    );
  }

  return (
    <div className={`logo ${sizeClass} ${className}`.trim()}>
      <img
        src={src}
        alt={BRAND.logoAlt}
        className="logo__img"
        draggable={false}
      />
    </div>
  );
}

export default memo(Logo);
