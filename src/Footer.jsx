import React from "react";
import {
  IconFacebook,
  IconInstagram,
  IconMapPin,
  IconPhone,
  IconMail,
} from "./Icons";
import "./Footer.css";

const SERVICES = [
  { id: 1, label: "Book Keeping / Accounting" },
  { id: 2, label: "GST Compliances" },
  { id: 3, label: "Income Tax Return" },
  { id: 4, label: "ROC / MCA Compliances" },
  { id: 5, label: "Agreement Drafting" },
  { id: 6, label: "Other Services" },
];

function FooterLink({ label, onClick }) {
  return (
    <button className="footer-link" onClick={onClick}>
      <span className="footer-link__line" />
      {label}
    </button>
  );
}

function SocialBtn({ href, children, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="social-btn"
    >
      {children}
    </a>
  );
}

export default function Footer({ onServiceSelect }) {
  const contactDetails = [
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
  ];

  return (
    <footer className="footer">
      {/* Top gold strip */}
      <div className="footer__gold-strip" />

      <div className="footer__container">
        <div className="footer__grid">
          {/* Col 1: About */}
          <div className="footer__col">
            <img
              src="img/logo1.png"
              alt="Panarwala & Associates"
              className="footer__logo"
            />
            <p className="footer__about-text">
              Premium tax consulting and preparation services based in
              Ahmedabad, Gujarat.
            </p>

            {/* Contact details */}
            <div className="footer__contact-list">
              {contactDetails.map((c, i) => (
                <div key={i} className="footer__contact-item">
                  <span className="footer__contact-icon">{c.icon}</span>
                  <span className="footer__contact-text">{c.text}</span>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="footer__socials">
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
          <div className="footer__col">
            <h3 className="footer__heading">
              Services
              <span className="footer__heading-underline" />
            </h3>
            <div className="footer__links">
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
          <div className="footer__col">
            <h3 className="footer__heading">
              About Us
              <span className="footer__heading-underline" />
            </h3>
            <div className="footer__about-content">
              <p className="footer__about-text">
                Panarwala & Associates is a full-service consultancy firm
                offering accounting, taxation, corporate compliance, and legal
                advisory. We combine deep expertise with personal attention to
                deliver reliable outcomes for every client.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="footer__copyright">
          <p>Copyright ©2026 Panarwala & Associates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
