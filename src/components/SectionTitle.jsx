/**
 * SectionTitle.jsx — Consistent section heading with eyebrow + title
 *
 * Props:
 *   eyebrow  string   — small caps label above headline
 *   title    string   — main heading text (supports <em> via dangerouslySetInnerHTML? No — pass as children)
 *   subtitle string   — optional body copy below
 *   as       string   — heading element: "h1" | "h2" | "h3" (default "h2")
 *   center   boolean  — centre-align text
 *   inView   boolean  — drives CSS entrance animation
 *   delay    number   — ms delay for staggered entry (default 0)
 */
import React, { memo } from "react";
import "./SectionTitle.css";

function SectionTitle({
  eyebrow,
  children,
  subtitle,
  as: Tag = "h2",
  center = false,
  inView = false,
  delay = 0,
}) {
  return (
    <div
      className={`section-title${center ? " section-title--center" : ""}${inView ? " is-visible" : ""}`}
      style={delay ? { "--delay": `${delay}ms` } : undefined}
    >
      {eyebrow && (
        <div className="section-title__eyebrow" aria-hidden="true">
          <span className="section-title__eyebrow-line" />
          <span className="section-title__eyebrow-text">{eyebrow}</span>
          {center && <span className="section-title__eyebrow-line" />}
        </div>
      )}

      <Tag className="section-title__heading">{children}</Tag>

      {subtitle && <p className="section-title__subtitle">{subtitle}</p>}
    </div>
  );
}

export default memo(SectionTitle);
