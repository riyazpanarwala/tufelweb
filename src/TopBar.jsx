import React from 'react';
import { IconPhone, IconMail, IconFacebook, IconInstagram } from './Icons';

const s = {
  bar: {
    background: '#070C18',
    borderBottom: '1px solid rgba(200,169,110,0.15)',
    padding: '9px 0',
  },
  inner: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '10px',
  },
  left: { display: 'flex', alignItems: 'center', gap: '22px', flexWrap: 'wrap' },
  contact: {
    display: 'flex', alignItems: 'center', gap: '7px',
    color: 'rgba(255,255,255,0.58)',
    fontFamily: "'Outfit', sans-serif",
    fontSize: '12px', fontWeight: 400, letterSpacing: '0.01em',
    transition: 'color 0.25s ease',
    cursor: 'default',
  },
  right: { display: 'flex', alignItems: 'center', gap: '8px' },
};

const ContactItem = ({ icon, text }) => {
  const [hov, setHov] = React.useState(false);
  return (
    <span
      style={{ ...s.contact, color: hov ? '#C8A96E' : 'rgba(255,255,255,0.58)' }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <span style={{ color: '#C8A96E', display: 'flex', alignItems: 'center' }}>{icon}</span>
      {text}
    </span>
  );
};

const SocialBtn = ({ href, children, label }) => {
  const [hov, setHov] = React.useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={{
        width: 28, height: 28, borderRadius: '50%',
        background: hov ? '#C8A96E' : 'rgba(200,169,110,0.10)',
        border: `1px solid ${hov ? '#C8A96E' : 'rgba(200,169,110,0.28)'}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: hov ? '#070C18' : '#C8A96E',
        transition: 'all 0.25s ease',
        transform: hov ? 'translateY(-2px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {children}
    </a>
  );
};

export default function TopBar() {
  return (
    <div style={s.bar}>
      <div style={s.inner}>
        <div style={s.left}>
          <ContactItem icon={<IconPhone size={12} />} text="+919974936751" />
          <ContactItem icon={<IconMail size={12} />} text="tufel.kcg@email.com" />
        </div>
        <div style={s.right}>
          <SocialBtn href="https://www.facebook.com/profile.php?id=61555952280720" label="Facebook">
            <IconFacebook size={12} />
          </SocialBtn>
          <SocialBtn href="https://www.instagram.com/panarwala_associates/" label="Instagram">
            <IconInstagram size={12} />
          </SocialBtn>
        </div>
      </div>
    </div>
  );
}
