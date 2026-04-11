import React, { useState } from "react";
import {
  IconFacebook,
  IconInstagram,
  IconMapPin,
  IconPhone,
  IconMail,
} from "./Icons";

const SERVICES = [
  { id: 1, label: "Book Keeping / Accounting" },
  { id: 2, label: "GST Compliances" },
  { id: 3, label: "Income Tax Return" },
  { id: 4, label: "ROC / MCA Compliances" },
  { id: 5, label: "Agreement Drafting" },
  { id: 6, label: "Other Services" },
];

function FooterLink({ label, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "4px 0",
        textAlign: "left",
        color: hov ? "#C8A96E" : "rgba(255,255,255,0.45)",
        fontFamily: "'Outfit', sans-serif",
        fontSize: 13,
        fontWeight: 300,
        letterSpacing: "0.01em",
        transform: hov ? "translateX(5px)" : "translateX(0)",
        transition: "all 0.22s ease",
      }}
    >
      <span
        style={{
          width: 14,
          height: 1,
          background: hov ? "#C8A96E" : "rgba(200,169,110,0.35)",
          transition: "background 0.22s ease",
          flexShrink: 0,
        }}
      />
      {label}
    </button>
  );
}

function SocialBtn({ href, children, label }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={{
        width: 36,
        height: 36,
        borderRadius: "50%",
        background: hov ? "#C8A96E" : "rgba(200,169,110,0.08)",
        border: `1px solid ${hov ? "#C8A96E" : "rgba(200,169,110,0.22)"}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: hov ? "#070C18" : "#C8A96E",
        transform: hov ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hov ? "0 8px 20px rgba(200,169,110,0.28)" : "none",
        transition: "all 0.25s cubic-bezier(0.16,1,0.3,1)",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {children}
    </a>
  );
}

export default function Footer({ onServiceSelect }) {
  return (
    <footer
      style={{
        background: "#060B16",
        borderTop: "1px solid rgba(200,169,110,0.12)",
        paddingTop: 3, // gold line space
        position: "relative",
      }}
    >
      {/* Top gold strip */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background:
            "linear-gradient(90deg, transparent, #C8A96E 25%, #E4C47A 50%, #C8A96E 75%, transparent)",
        }}
      />

      <div
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "56px 32px 0" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr",
            gap: 48,
          }}
          className="footer-grid"
        >
          {/* Col 1: About */}
          <div>
            <img
              src="img/logo1.png"
              alt="Panarwala & Associates"
              style={{
                height: 42,
                width: "auto",
                objectFit: "contain",
                marginBottom: 20,
                filter: "brightness(1.05)",
              }}
            />
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 13,
                fontWeight: 300,
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.42)",
                marginBottom: 16,
              }}
            >
              Premium tax consulting and preparation services based in
              Ahmedabad, Gujarat.
            </p>

            {/* Contact details */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 9,
                marginBottom: 22,
              }}
            >
              {[
                {
                  icon: <IconMapPin size={12} color="#C8A96E" />,
                  text: "1012, Shilp Epitome, Sindhu Bhavan Road, Bodakdev, Ahmedabad — 380054",
                },
                {
                  icon: <IconPhone size={12} color="#C8A96E" />,
                  text: "+919974936751",
                },
                {
                  icon: <IconMail size={12} color="#C8A96E" />,
                  text: "tufel.kcg@email.com",
                },
              ].map((c, i) => (
                <div
                  key={i}
                  style={{ display: "flex", alignItems: "flex-start", gap: 9 }}
                >
                  <span style={{ marginTop: 2, flexShrink: 0 }}>{c.icon}</span>
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: 12.5,
                      fontWeight: 300,
                      color: "rgba(255,255,255,0.40)",
                      lineHeight: 1.55,
                    }}
                  >
                    {c.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Social */}
            <div style={{ display: "flex", gap: 10 }}>
              <SocialBtn
                href="https://www.facebook.com/profile.php?id=61555952280720"
                label="Facebook"
              >
                <IconFacebook size={14} />
              </SocialBtn>
              <SocialBtn
                href="https://www.instagram.com/panarwala_associates/"
                label="Instagram"
              >
                <IconInstagram size={14} />
              </SocialBtn>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 20,
                fontWeight: 600,
                color: "#F0EBE0",
                marginBottom: 6,
                paddingBottom: 12,
                borderBottom: "1px solid rgba(200,169,110,0.15)",
                position: "relative",
              }}
            >
              Services
              <span
                style={{
                  position: "absolute",
                  bottom: -1,
                  left: 0,
                  width: 30,
                  height: 1,
                  background: "#C8A96E",
                  display: "block",
                }}
              />
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                marginTop: 16,
              }}
            >
              {SERVICES.map((s) => (
                <FooterLink
                  key={s.id}
                  label={s.label}
                  onClick={() => onServiceSelect(s.id)}
                />
              ))}
            </div>
          </div>

          {/* Col 3: About */}
          <div>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 20,
                fontWeight: 600,
                color: "#F0EBE0",
                marginBottom: 6,
                paddingBottom: 12,
                borderBottom: "1px solid rgba(200,169,110,0.15)",
                position: "relative",
              }}
            >
              About Us
              <span
                style={{
                  position: "absolute",
                  bottom: -1,
                  left: 0,
                  width: 30,
                  height: 1,
                  background: "#C8A96E",
                  display: "block",
                }}
              />
            </h3>
            <div style={{ marginTop: 16 }}>
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 13,
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: "rgba(255,255,255,0.40)",
                  marginBottom: 0,
                }}
              >
                Panarwala & Associates is a full-service consultancy firm
                offering accounting, taxation, corporate compliance, and legal
                advisory. We combine deep expertise with personal attention to
                deliver reliable outcomes for every client.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright bar */}
        <div
          style={{
            marginTop: 48,
            borderTop: "1px solid rgba(255,255,255,0.05)",
            padding: "18px 0 22px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 12,
              color: "rgba(255,255,255,0.22)",
              margin: 0,
              letterSpacing: "0.03em",
            }}
          >
            Copyright ©2026 Panarwala & Associates. All rights reserved.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 580px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
        }
      `}</style>
    </footer>
  );
}
