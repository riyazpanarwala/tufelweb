/**
 * Footer.jsx — Executive 3-Column Luxury Footer
 */
import React, { memo } from "react";
import { BRAND, CONTACT, SOCIAL } from "./config";
import { SERVICES, getServicePath } from "./services";
import Logo from "./components/Logo";
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

function Footer({ onServiceSelect }) {
  return (
    <footer className="footer" aria-label="Site footer" id="footer-contact">
      {/* Top 3-Column Section */}
      <div className="footer__main">
        <div className="footer__inner">
          {/* Column 1: Brand & Mission */}
          <div className="footer__col footer__col--brand">
            <Logo variant="light" size="lg" />
            <p className="footer__tagline">
              Tax, GST &amp; Accounting Consultants in Ahmedabad. Providing trustworthy compliance, business advisory, and legal documentation services to empower your firm's growth.
            </p>
            <div className="footer__socials-row">
              <span className="footer__socials-label">Connect With Us:</span>
              <div className="footer__socials">
                {SOCIAL.map((s) => (
                  <SocialButton key={s.id} href={s.href} label={s.label}>
                    {SOCIAL_ICONS[s.id]?.(15)}
                  </SocialButton>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Our Services Quick Links */}
          <div className="footer__col">
            <h4 className="footer__col-title">Our Services</h4>
            <div className="footer__col-rule" />
            <ul className="footer__links">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href={getServicePath(s)}
                    className="footer__link"
                    onClick={(e) => {
                      if (onServiceSelect) {
                        e.preventDefault();
                        onServiceSelect(s.id);
                      }
                    }}
                  >
                    <span className="footer__link-arrow">›</span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Office Location */}
          <div className="footer__col">
            <h4 className="footer__col-title">Get In Touch</h4>
            <div className="footer__col-rule" />
            <ul className="footer__contact-list">
              <li>
                <a className="footer__contact-item" href={`tel:+${CONTACT.phone}`}>
                  <span className="footer__contact-icon" aria-hidden="true">
                    <IconPhone size={15} color="var(--gold)" />
                  </span>
                  <div>
                    <span className="footer__contact-label">Call Us</span>
                    <span className="footer__contact-val">{CONTACT.phoneDisplay}</span>
                  </div>
                </a>
              </li>

              <li>
                <a className="footer__contact-item" href={`mailto:${CONTACT.email}`}>
                  <span className="footer__contact-icon" aria-hidden="true">
                    <IconMail size={15} color="var(--gold)" />
                  </span>
                  <div>
                    <span className="footer__contact-label">Email Us</span>
                    <span className="footer__contact-val">{CONTACT.email}</span>
                  </div>
                </a>
              </li>

              <li>
                <div className="footer__contact-item">
                  <span className="footer__contact-icon" aria-hidden="true">
                    <IconMapPin size={15} color="var(--gold)" />
                  </span>
                  <div>
                    <span className="footer__contact-label">Office Address</span>
                    <span className="footer__contact-val">{CONTACT.address}</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright */}
      <div className="footer__bottom-bar" role="contentinfo">
        <div className="footer__bottom-inner">
          <p className="footer__copyright">
            Copyright &copy;{new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
