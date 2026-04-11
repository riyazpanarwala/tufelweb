import React, { useEffect, useRef, useState } from 'react';
import { IconChevronRight, IconArrowRight } from './Icons';

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function ListItem({ text, index }) {
  const [ref, inView] = useInView(0.05);
  const [hov, setHov] = useState(false);
  return (
    <li
      ref={ref}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'flex', alignItems: 'flex-start', gap: 12,
        padding: '14px 18px',
        background: hov
          ? 'rgba(200,169,110,0.06)'
          : 'rgba(255,255,255,0.025)',
        border: `1px solid ${hov ? 'rgba(200,169,110,0.30)' : 'rgba(255,255,255,0.05)'}`,
        borderLeft: `3px solid ${hov ? '#E4C47A' : '#C8A96E'}`,
        borderRadius: 10,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translateX(-20px)',
        transition: `opacity 0.4s ease ${index * 0.05}s,
                     transform 0.4s cubic-bezier(0.16,1,0.3,1) ${index * 0.05}s,
                     background 0.25s ease, border-color 0.25s ease`,
        cursor: 'default',
      }}
    >
      <span style={{
        width: 6, height: 6, borderRadius: '50%',
        background: '#C8A96E', flexShrink: 0, marginTop: 7,
        boxShadow: hov ? '0 0 8px rgba(200,169,110,0.6)' : 'none',
        transition: 'box-shadow 0.25s ease',
      }} />
      <span style={{
        fontFamily: "'Outfit', sans-serif", fontSize: 14, fontWeight: 300,
        lineHeight: 1.55, color: hov ? 'rgba(255,255,255,0.88)' : 'rgba(255,255,255,0.62)',
        transition: 'color 0.25s ease',
      }}>
        {text}
      </span>
    </li>
  );
}

export default function ServicePage({ serviceId, title, items, img, onBack }) {
  const [heroRef, heroInView] = useInView(0.1);

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [serviceId]);

  return (
    <div style={{
      background: 'linear-gradient(180deg, #070C18 0%, #0A1020 60%, #0D1428 100%)',
      minHeight: '100vh',
    }}>
      {/* ── Hero Banner ── */}
      <div style={{
        position: 'relative',
        background: 'linear-gradient(135deg, #0A0F1E 0%, #111928 60%, #0D1525 100%)',
        borderBottom: '1px solid rgba(200,169,110,0.15)',
        padding: '52px 32px 36px',
        overflow: 'hidden',
      }}>
        {/* Decorative large circle */}
        <div style={{
          position: 'absolute', right: -120, top: -120,
          width: 400, height: 400, borderRadius: '50%',
          border: '60px solid rgba(200,169,110,0.04)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', right: 60, top: 20,
          width: 200, height: 200, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200,169,110,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* Breadcrumb */}
          <nav style={{
            display: 'flex', alignItems: 'center', gap: 8,
            marginBottom: 24,
            animation: 'fadeIn 0.5s ease both',
          }}>
            <button
              onClick={onBack}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: "'Outfit', sans-serif", fontSize: 13,
                color: 'rgba(255,255,255,0.45)', padding: 0,
                transition: 'color 0.2s ease',
                display: 'flex', alignItems: 'center', gap: 4,
              }}
              onMouseEnter={e => e.target.style.color = '#C8A96E'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.45)'}
            >
              Home
            </button>
            <IconChevronRight size={12} color="rgba(200,169,110,0.5)" />
            <span style={{
              fontFamily: "'Outfit', sans-serif", fontSize: 13,
              color: '#C8A96E', fontWeight: 500,
            }}>
              {title}
            </span>
          </nav>

          {/* Hero content */}
          <div ref={heroRef} style={{ display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
            {/* Icon */}
            <div style={{
              width: 80, height: 80, borderRadius: 20, flexShrink: 0,
              background: 'linear-gradient(135deg, rgba(200,169,110,0.15), rgba(200,169,110,0.05))',
              border: '1px solid rgba(200,169,110,0.30)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              animation: 'scaleIn 0.5s cubic-bezier(0.16,1,0.3,1) 0.1s both',
              boxShadow: '0 0 40px rgba(200,169,110,0.10)',
            }}>
              <img
                src={img}
                alt={title}
                style={{ width: 44, height: 44, objectFit: 'contain', filter: 'brightness(1.1) saturate(0.9)' }}
              />
            </div>

            <div>
              <div style={{
                fontFamily: "'Outfit', sans-serif", fontSize: 10.5, fontWeight: 600,
                letterSpacing: '0.18em', textTransform: 'uppercase',
                color: '#C8A96E', marginBottom: 8,
                opacity: heroInView ? 1 : 0, transform: heroInView ? 'none' : 'translateY(12px)',
                transition: 'all 0.5s ease 0.1s',
              }}>
                Our Services
              </div>
              <h1 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 600,
                color: '#F0EBE0', lineHeight: 1.15, margin: 0,
                opacity: heroInView ? 1 : 0, transform: heroInView ? 'none' : 'translateY(16px)',
                transition: 'all 0.55s cubic-bezier(0.16,1,0.3,1) 0.15s',
              }}>
                {title}
              </h1>
            </div>
          </div>

          {/* Gold line */}
          <div style={{
            height: 1, marginTop: 32,
            background: 'linear-gradient(90deg, #C8A96E, rgba(200,169,110,0.1) 80%, transparent)',
            transformOrigin: 'left',
            animation: 'lineGrow 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s both',
          }} />
        </div>

        {/* Bottom gold strip */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 2,
          background: 'linear-gradient(90deg, transparent, #C8A96E 30%, #E4C47A 50%, #C8A96E 70%, transparent)',
        }} />
      </div>

      {/* ── Content ── */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '56px 32px 80px' }}>
        <div style={{
          background: 'linear-gradient(145deg, #0F1727 0%, #121D30 100%)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: 24, padding: '48px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
          position: 'relative', overflow: 'hidden',
        }}>
          {/* Inner glow */}
          <div style={{
            position: 'absolute', top: -60, right: -60,
            width: 300, height: 300, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(200,169,110,0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div style={{
            fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 600,
            letterSpacing: '0.16em', textTransform: 'uppercase',
            color: 'rgba(200,169,110,0.6)', marginBottom: 24,
          }}>
            What we offer
          </div>

          <ul style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 10,
            padding: 0, listStyle: 'none',
          }}
            className="service-list"
          >
            {items.map((item, i) => (
              <ListItem key={i} text={item} index={i} />
            ))}
          </ul>

          {/* Back CTA */}
          <div style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <button
              onClick={onBack}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '12px 24px', borderRadius: 10,
                background: 'rgba(200,169,110,0.10)',
                border: '1px solid rgba(200,169,110,0.30)',
                color: '#C8A96E',
                fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 500,
                letterSpacing: '0.06em', textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#C8A96E';
                e.currentTarget.style.color = '#070C18';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(200,169,110,0.10)';
                e.currentTarget.style.color = '#C8A96E';
              }}
            >
              ← Back to Services
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .service-list { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
