/**
 * TopBar.jsx — Slim contact + social bar at the very top
 * Data from config.js — no hardcoded strings.
 */
import React from "react";
import { CONTACT, SOCIAL } from "./config";
import { IconPhone, IconMail, IconFacebook, IconInstagram } from "./Icons";
import "./TopBar.css";

const SOCIAL_ICONS = {
  facebook: (size) => <IconFacebook size={size} />,
  instagram: (size) => <IconInstagram size={size} />,
};

function ContactItem({ icon, text }) {
  return (
    <span className="topbar-contact">
      <span className="topbar-contact__icon" aria-hidden="true">
        {icon}
      </span>
      {text}
    </span>
  );
}

export default function TopBar() {
  return (
    <div
      className="topbar"
      role="complementary"
      aria-label="Contact information"
    >
      <div className="topbar__inner">
        <div className="topbar__left">
          <ContactItem
            icon={<IconPhone size={12} />}
            text={CONTACT.phoneDisplay}
          />
          <ContactItem icon={<IconMail size={12} />} text={CONTACT.email} />
        </div>

        <nav className="topbar__right" aria-label="Social media links">
          {SOCIAL.map((s) => (
            <a
              key={s.id}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow us on ${s.label}`}
              className="topbar-social"
            >
              {SOCIAL_ICONS[s.id]?.(12)}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
