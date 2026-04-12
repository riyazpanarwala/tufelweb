import React from "react";
import { IconPhone, IconMail, IconFacebook, IconInstagram } from "./Icons";
import "./Topbar.css";

const ContactItem = ({ icon, text }) => (
  <span className="topbar-contact">
    <span className="topbar-contact__icon">{icon}</span>
    {text}
  </span>
);

const SocialBtn = ({ href, children, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="topbar-social"
  >
    {children}
  </a>
);

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar__inner">
        <div className="topbar__left">
          <ContactItem icon={<IconPhone size={12} />} text="+919974936751" />
          <ContactItem
            icon={<IconMail size={12} />}
            text="tufel.kcg@email.com"
          />
        </div>
        <div className="topbar__right">
          <SocialBtn
            href="https://www.facebook.com/profile.php?id=61555952280720"
            label="Facebook"
          >
            <IconFacebook size={12} />
          </SocialBtn>
          <SocialBtn
            href="https://www.instagram.com/panarwala_associates/"
            label="Instagram"
          >
            <IconInstagram size={12} />
          </SocialBtn>
        </div>
      </div>
    </div>
  );
}
