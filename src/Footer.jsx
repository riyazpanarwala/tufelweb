/**
 * Footer.jsx - Light theme footer with navy bottom bar
 */
import React, { memo } from "react";
import { BRAND, CONTACT, SOCIAL } from "./config";
import { IconFacebook, IconInstagram, IconMapPin, IconPhone, IconMail } from "./Icons";
import "./Footer.css";

const SOCIAL_ICONS = {
  facebook: (size) => <IconFacebook size={size} />,
  instagram: (size) => <IconInstagram size={size} />,
};

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

function Footer() {
  return (
    <footer className="footer" aria-label="Site footer" id="footer-contact">
      <div className="footer__bottom-bar" role="contentinfo">
        <div className="footer__bottom-inner">
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
              {CONTACT.address}
            </div>
            <nav className="footer__bottom-socials" aria-label="Social media links">
              {SOCIAL.map((s) => (
                <SocialButton key={s.id} href={s.href} label={s.label}>
                  {SOCIAL_ICONS[s.id]?.(14)}
                </SocialButton>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <div className="footer__copyright">
        <p>
          Copyright &copy;{new Date().getFullYear()} {BRAND.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default memo(Footer);
