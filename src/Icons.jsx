// Icons.jsx — Pure SVG icons, zero external dependency
// Replaces: flaticon, font-awesome

export const IconPhone = ({ size = 16, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
);

export const IconMail = ({ size = 16, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

export const IconFacebook = ({ size = 16, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
  </svg>
);

export const IconInstagram = ({ size = 16, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

export const IconHome = ({ size = 18, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
    <polyline points="9,22 9,12 15,12 15,22"/>
  </svg>
);

export const IconChevronRight = ({ size = 14, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9,18 15,12 9,6"/>
  </svg>
);

export const IconArrowRight = ({ size = 16, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12,5 19,12 12,19"/>
  </svg>
);

export const IconMenu = ({ size = 22, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);

export const IconClose = ({ size = 22, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

export const IconMapPin = ({ size = 14, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

// ── Service icons (Executive Theme) ──

export const IconLedger = ({ size = 32, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="8" y="6" width="28" height="36" rx="3" fill="rgba(201, 168, 76, 0.08)" />
    <path d="M14 14h16M14 20h16M14 26h10" strokeWidth="2" />
    <path d="M36 6v36" strokeDasharray="3 2" stroke="var(--gold)" />
    <circle cx="34" cy="34" r="6" fill="var(--gold)" fillOpacity="0.2" stroke="var(--gold)" strokeWidth="1.5" />
    <path d="M32 34l1.5 1.5L36.5 32" stroke="var(--gold)" strokeWidth="2" />
  </svg>
);

export const IconGST = ({ size = 32, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M24 5L8 12v11c0 10 7 19.2 16 21.5C33 42.2 40 33 40 23V12L24 5z" fill="rgba(201, 168, 76, 0.08)" />
    <path d="M17 19h14M17 24h14M17 29h8" strokeWidth="2" />
    <path d="M28 29l2.5 2.5 4.5-4.5" stroke="var(--gold)" strokeWidth="2" />
  </svg>
);

export const IconTax = ({ size = 32, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="8" width="36" height="32" rx="4" fill="rgba(201, 168, 76, 0.08)" />
    <path d="M6 16h36" strokeWidth="2" />
    <path d="M14 24h6M14 30h10" strokeWidth="2" />
    <circle cx="33" cy="27" r="5" fill="var(--gold)" fillOpacity="0.2" stroke="var(--gold)" strokeWidth="1.5" />
    <path d="M31 27h4M33 25v4" stroke="var(--gold)" strokeWidth="1.8" />
  </svg>
);

export const IconROC = ({ size = 32, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 42V18L24 6l16 12v24H8z" fill="rgba(201, 168, 76, 0.08)" />
    <path d="M18 42V28h12v14" strokeWidth="2" />
    <rect x="15" y="20" width="5" height="5" rx="1" fill="var(--gold)" fillOpacity="0.3" stroke="var(--gold)" />
    <rect x="28" y="20" width="5" height="5" rx="1" fill="var(--gold)" fillOpacity="0.3" stroke="var(--gold)" />
  </svg>
);

export const IconAgreement = ({ size = 32, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M30 5H11a2 2 0 00-2 2v34a2 2 0 002 2h26a2 2 0 002-2V17L30 5z" fill="rgba(201, 168, 76, 0.08)" />
    <path d="M30 5v12h12" strokeWidth="1.8" />
    <path d="M15 21h18M15 27h14M15 33h10" strokeWidth="2" />
    <path d="M30 35l6 6M36 35l-6 6" stroke="var(--gold)" strokeWidth="2" />
  </svg>
);

export const IconServices = ({ size = 32, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="24" cy="24" r="7" fill="rgba(201, 168, 76, 0.15)" stroke="var(--gold)" strokeWidth="1.8" />
    <path d="M24 6v5M24 37v5M6 24h5M37 24h5" strokeWidth="2" />
    <path d="M11.3 11.3l3.5 3.5M33.2 33.2l3.5 3.5M11.3 36.7l3.5-3.5M33.2 14.8l3.5-3.5" stroke="var(--gold)" strokeWidth="1.5" />
  </svg>
);

export const ServiceIcon = ({ serviceId, size = 34, color = 'var(--navy)' }) => {
  switch (serviceId) {
    case 1:
      return <IconLedger size={size} color={color} />;
    case 2:
      return <IconGST size={size} color={color} />;
    case 3:
      return <IconTax size={size} color={color} />;
    case 4:
      return <IconROC size={size} color={color} />;
    case 5:
      return <IconAgreement size={size} color={color} />;
    case 6:
      return <IconServices size={size} color={color} />;
    default:
      return <IconServices size={size} color={color} />;
  }
};
