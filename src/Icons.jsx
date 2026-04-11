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

// ── Service icons (replace flaticons) ──

export const IconLedger = ({ size = 32, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="8" y="6" width="28" height="36" rx="3"/>
    <path d="M14 14h16M14 20h16M14 26h10"/>
    <path d="M36 6v36" strokeDasharray="3 2"/>
    <circle cx="36" cy="38" r="5" fill={color} fillOpacity=".15" stroke={color}/>
    <path d="M34 38h4M36 36v4"/>
  </svg>
);

export const IconGST = ({ size = 32, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M24 6L8 14v10c0 9.5 6.8 18.4 16 20.6C33.2 42.4 40 33.5 40 24V14L24 6z"/>
    <path d="M18 24h8v6h-8z" fill={color} fillOpacity=".15"/>
    <path d="M18 18h12M18 24h12M18 30h8"/>
  </svg>
);

export const IconTax = ({ size = 32, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="10" width="36" height="28" rx="3"/>
    <path d="M6 18h36"/>
    <path d="M16 26l4 4 8-8"/>
    <circle cx="34" cy="30" r="4" fill={color} fillOpacity=".15" stroke={color}/>
    <path d="M32.5 30h3M34 28.5v3"/>
  </svg>
);

export const IconROC = ({ size = 32, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 42V16l14-10 14 10v26H10z"/>
    <rect x="18" y="28" width="12" height="14" rx="1"/>
    <rect x="14" y="20" width="6" height="6" rx="1" fill={color} fillOpacity=".15" stroke={color}/>
    <rect x="28" y="20" width="6" height="6" rx="1" fill={color} fillOpacity=".15" stroke={color}/>
  </svg>
);

export const IconAgreement = ({ size = 32, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M30 6H12a2 2 0 00-2 2v32a2 2 0 002 2h24a2 2 0 002-2V18L30 6z"/>
    <path d="M30 6v12h12"/>
    <path d="M16 22h16M16 28h16M16 34h10"/>
    <path d="M38 36l2 2-6 6-4-4" strokeWidth="2"/>
  </svg>
);

export const IconServices = ({ size = 32, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="24" cy="24" r="4"/>
    <path d="M24 8v4M24 36v4M8 24h4M36 24h4"/>
    <path d="M13.1 13.1l2.8 2.8M32.1 32.1l2.8 2.8M13.1 34.9l2.8-2.8M32.1 15.9l2.8-2.8"/>
    <circle cx="24" cy="24" r="10" strokeDasharray="4 3"/>
  </svg>
);
