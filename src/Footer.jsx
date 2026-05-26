/**
 * Footer.jsx — Light theme footer with navy bottom bar
 */
import React, { memo } from "react";
import Logo from "./components/Logo";
import { SERVICES } from "./services";
import { BRAND, CONTACT, SOCIAL } from "./config";
import { IconFacebook, IconInstagram, IconMapPin, IconPhone, IconMail } from "./Icons";
import "./Footer.css";

const SOCIAL_ICONS = {
  facebook:  (size) => <IconFacebook  size={size} />,
  instagram: (size) => <IconInstagram size={size} />,
};

const FooterServiceLink = memo(function FooterServiceLink({ label, onClick }) {
  return (
    <button
      type="button"
      className="footer-link"
      onClick={onClick}
      aria-label={`View ${label} service details`}
    >
      <span className="footer-link__line" aria-hidden="true" />
      {label}
    </button>
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

function Footer({ onServiceSelect }) {
  return (
    <footer className="footer" aria-label="Site footer" id="footer-contact">
      <div className="footer__container">
        <div className="footer__grid">
          {/* Col 1 — Brand + Contact */}
          <div className="footer__col">
            <Logo variant="dark" size="md" className="footer__logo" />
            <p className="footer__tagline">
              Premium tax consulting and preparation services based in Ahmedabad, Gujarat.
            </p>

            <address className="footer__contact-list">
              <div className="footer__contact-item">
                <span className="footer__contact-icon" aria-hidden="true">
                  <IconMapPin size={13} color="var(--navy)" />
                </span>
                <span className="footer__contact-text">{CONTACT.address}</span>
              </div>
              <div className="footer__contact-item">
                <span className="footer__contact-icon" aria-hidden="true">
                  <IconPhone size={13} color="var(--navy)" />
                </span>
                <span className="footer__contact-text">{CONTACT.phoneDisplay}</span>
              </div>
              <div className="footer__contact-item">
                <span className="footer__contact-icon" aria-hidden="true">
                  <IconMail size={13} color="var(--navy)" />
                </span>
                <span className="footer__contact-text">{CONTACT.email}</span>
              </div>
            </address>

            <nav className="footer__socials" aria-label="Social media links">
              {SOCIAL.map((s) => (
                <SocialButton key={s.id} href={s.href} label={s.label}>
                  {SOCIAL_ICONS[s.id]?.(14)}
                </SocialButton>
              ))}
            </nav>
          </div>

          {/* Col 2 — Services */}
          <div className="footer__col">
            <h2 className="footer__heading">
              Services
              <span className="footer__heading-underline" aria-hidden="true" />
            </h2>
            <nav className="footer__links" aria-label="Services navigation">
              {SERVICES.map((s) => (
                <FooterServiceLink
                  key={s.id}
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
              {BRAND.name} is a full-service consultancy firm offering accounting, taxation,
              corporate compliance, and legal advisory. We combine deep expertise with personal
              attention to deliver reliable outcomes for every client.
            </p>
          </div>
        </div>
      </div>

      {/* Navy bottom bar */}
      <div className="footer__bottom-bar" role="contentinfo">
        <div className="footer__bottom-inner">
          <div className="footer__bottom-quote">
            <span className="footer__bottom-quote-icon" aria-hidden="true">"</span>
            <p className="footer__bottom-quote-text">
              Partnering in your financial journey<br />with knowledge, integrity and trust.
            </p>
          </div>

          <div className="footer__bottom-contacts">
            <div className="footer__bottom-contact-item">
              <span className="footer__bottom-contact-icon" aria-hidden="true">
                <IconPhone size={14} color="var(--gold)" />
              </span>
              {CONTACT.phoneDisplay}
            </div>
            <div className="footer__bottom-contact-item">
              <span className="footer__bottom-contact-icon" aria-hidden="true">
                <IconMail size={14} color="var(--gold)" />
              </span>
              {CONTACT.email}
            </div>
            <div className="footer__bottom-contact-item">
              <span className="footer__bottom-contact-icon" aria-hidden="true">
                <IconMapPin size={14} color="var(--gold)" />
              </span>
              Ahmedabad — 380054
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer__copyright">
        <p>
          Copyright ©{new Date().getFullYear()} {BRAND.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default memo(Footer);
