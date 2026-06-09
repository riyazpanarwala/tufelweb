/**
 * Footer.jsx — Site footer
 *
 * Data sources:
 *   - SERVICES  from services.js  (no duplication)
 *   - CONTACT   from config.js
 *   - SOCIAL    from config.js
 *   - BRAND     from config.js
 *
 * Accessibility:
 *   - <footer> landmark
 *   - <nav> for service links
 *   - Social links have aria-label
 */
import React, { memo } from "react";
import Logo from "./components/Logo";
import { getServicePath, SERVICES } from "./services";
import { BRAND, CONTACT, SOCIAL } from "./config";
import {
  IconFacebook,
  IconInstagram,
  IconMapPin,
  IconPhone,
  IconMail,
} from "./Icons";
import "./Footer.css";

/* ── Icon map (keeps config free of JSX) ── */
const SOCIAL_ICONS = {
  facebook: (size) => <IconFacebook size={size} />,
  instagram: (size) => <IconInstagram size={size} />,
};

const CONTACT_ROWS = [
  { icon: <IconMapPin size={12} color="#C8A96E" />, text: CONTACT.address },
  { icon: <IconPhone size={12} color="#C8A96E" />, text: CONTACT.phoneDisplay },
  { icon: <IconMail size={12} color="#C8A96E" />, text: CONTACT.email },
];

/* ── Sub-components ── */

const FooterServiceLink = memo(function FooterServiceLink({ href, label, onClick }) {
  function handleClick(e) {
    e.preventDefault();
    onClick();
  }

  return (
    <a
      href={href}
      className="footer-link"
      onClick={handleClick}
      aria-label={`View ${label} service details`}
    >
      <span className="footer-link__line" aria-hidden="true" />
      {label}
    </a>
  );
});

const SocialButton = memo(function SocialButton({ href, children, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Follow us on ${label}`}
      className="social-btn"
    >
      {children}
    </a>
  );
});

/* ── Footer ── */

function Footer({ onServiceSelect }) {
  return (
    <footer className="footer" aria-label="Site footer">
      {/* Top gold accent strip */}
      <div className="footer__gold-strip" aria-hidden="true" />

      <div className="footer__container">
        <div className="footer__grid">
          {/* Col 1 — Brand + Contact */}
          <div className="footer__col">
            <Logo variant="light" size="md" className="footer__logo" />

            <p className="footer__tagline">
              Premium tax consulting and preparation services based in
              Ahmedabad, Gujarat.
            </p>

            <address className="footer__contact-list">
              {CONTACT_ROWS.map((row, i) => (
                <div key={i} className="footer__contact-item">
                  <span className="footer__contact-icon" aria-hidden="true">
                    {row.icon}
                  </span>
                  <span className="footer__contact-text">{row.text}</span>
                </div>
              ))}
            </address>

            {/* Social links */}
            <nav className="footer__socials" aria-label="Social media links">
              {SOCIAL.map((s) => (
                <SocialButton key={s.id} href={s.href} label={s.label}>
                  {SOCIAL_ICONS[s.id]?.(14)}
                </SocialButton>
              ))}
            </nav>
          </div>

          {/* Col 2 — Services nav */}
          <div className="footer__col">
            <h2 className="footer__heading">
              Services
              <span className="footer__heading-underline" aria-hidden="true" />
            </h2>

            <nav className="footer__links" aria-label="Services navigation">
              {SERVICES.map((s) => (
                <FooterServiceLink
                  key={s.id}
                  href={getServicePath(s)}
                  label={s.label}
                  onClick={() => onServiceSelect(s.id)}
                />
              ))}
            </nav>
          </div>

          {/* Col 3 — About */}
          <div className="footer__col">
            <h2 className="footer__heading">
              About Us
              <span className="footer__heading-underline" aria-hidden="true" />
            </h2>
            <p className="footer__about-text">
              {BRAND.name} is a full-service consultancy firm offering
              accounting, taxation, corporate compliance, and legal advisory. We
              combine deep expertise with personal attention to deliver reliable
              outcomes for every client.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer__copyright">
          <p>
            Copyright ©{new Date().getFullYear()} {BRAND.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
