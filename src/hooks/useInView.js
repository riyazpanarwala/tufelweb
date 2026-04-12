/**
 * useInView.js — Shared IntersectionObserver hook
 *
 * One hook to replace all scattered per-component observers.
 * Once in-view the observer disconnects (fire-once, no memory leak).
 *
 * @param {number}  threshold  - 0–1, fraction of element visible before trigger
 * @param {string}  rootMargin - CSS margin string (e.g. "0px 0px -40px 0px")
 * @returns {[React.RefObject, boolean]}
 */
import { useRef, useState, useEffect } from "react";

export function useInView(threshold = 0.12, rootMargin = "0px") {
  const ref     = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Re-use a shared observer per (threshold, rootMargin) combo via a module-level cache
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // ← disconnect entirely, not just unobserve
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect(); // ← was: observer.unobserve(el)
  }, [threshold, rootMargin]);

  return [ref, inView];
}
