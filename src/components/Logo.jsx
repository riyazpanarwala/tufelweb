/**
 * Logo.jsx — Reusable brand logo component with inline SVG for 100% crisp typography
 *
 * Props:
 *   variant  "light" | "dark"   — controls which logo color variant is used (dark for light header, light for dark bg)
 *   size     "sm" | "md" | "lg" — controls rendered width
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

function BrandSvg({ variant = "dark" }) {
  const isDarkBg = variant === "light";
  const titleColor = isDarkBg ? "#FFFFFF" : "#0D2545";
  const subColor = isDarkBg ? "#E4C060" : "#0D2545";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 360 78"
      className="logo__svg"
      role="img"
      aria-label={BRAND.logoAlt}
    >
      <g transform="translate(6, 6)">
        {/* Stylized Modern Emblem Icon */}
        <g transform="translate(0, 4)">
          <rect fill="#E87B22" x="0" y="10" width="18" height="4" rx="2"/>
          <rect fill="#E87B22" x="0" y="18" width="22" height="4" rx="2"/>
          <rect fill="#E87B22" x="0" y="26" width="16" height="4" rx="2"/>
          <rect fill="#E87B22" x="0" y="34" width="22" height="4" rx="2"/>
          <rect fill="#E87B22" x="0" y="42" width="18" height="4" rx="2"/>
          <path fill="#E87B22" d="M26 6 C42 6, 54 14, 54 27 C54 40, 42 48, 26 48 L26 56 C26 57.5, 24.5 59, 23 59 L19 59 L19 6 Z M26 38 C36 38, 44 33, 44 27 C44 21, 36 16, 26 16 Z" />
          <rect fill="#C9A84C" x="26" y="52" width="24" height="4" rx="2"/>
        </g>

        {/* Wordmark Typography — Prominent & Bold */}
        <text
          x="72"
          y="35"
          fill={titleColor}
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 700,
            fontSize: "30px",
            letterSpacing: "3.2px",
          }}
        >
          PANARWALA
        </text>
        <text
          x="73"
          y="56"
          fill={subColor}
          style={{
            fontFamily: "'Outfit', system-ui, sans-serif",
            fontWeight: 700,
            fontSize: "15px",
            letterSpacing: "3.5px",
            textTransform: "uppercase",
            opacity: isDarkBg ? 1 : 0.95,
          }}
        >
          ASSOCIATES
        </text>
      </g>
    </svg>
  );
}

function Logo({ variant = "dark", size = "md", onClick, className = "" }) {
  const sizeClass = SIZE_MAP[size] ?? SIZE_MAP.md;
  const isInteractive = typeof onClick === "function";

  if (isInteractive) {
    return (
      <button
        type="button"
        className={`logo logo--interactive ${sizeClass} ${className}`.trim()}
        onClick={onClick}
        aria-label={`${BRAND.name} — go to home`}
      >
        <BrandSvg variant={variant} />
      </button>
    );
  }

  return (
    <div className={`logo ${sizeClass} ${className}`.trim()}>
      <BrandSvg variant={variant} />
    </div>
  );
}

export default memo(Logo);
