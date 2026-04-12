/**
 * LoadingSpinner.jsx — Suspense fallback
 */
import React from "react";
import "./LoadingSpinner.css";

export default function LoadingSpinner() {
  return (
    <div
      className="loading-spinner-container"
      role="status"
      aria-label="Loading page content"
    >
      <div className="loading-spinner" aria-hidden="true" />
      <span className="sr-only">Loading…</span>
    </div>
  );
}
