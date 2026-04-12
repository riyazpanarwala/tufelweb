/**
 * config.js — Global app configuration
 * Single source of truth for brand identity, contact, and social data.
 */

export const BRAND = {
  name: "Panarwala & Associates",
  tagline: "Premium Tax Consulting & Preparation Services",
  logoLight: "img/logo1.png", // logo on dark backgrounds (current)
  logoDark: "img/logo1.png", // swap to a dark-variant if available
  logoAlt: "Panarwala & Associates — Tax Consulting Ahmedabad",
  favicon: "/favicon.ico",
};

export const CONTACT = {
  address:
    "1012, Shilp Epitome, Sindhu Bhavan Road, Bodakdev, Ahmedabad — 380054",
  phone: "+919974936751",
  phoneDisplay: "+91 99749 36751",
  email: "tufel.kcg@email.com",
};

export const SOCIAL = [
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61555952280720",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/panarwala_associates/",
  },
];

export const SEO = {
  title: "Panarwala & Associates | Tax Consulting Ahmedabad",
  description:
    "Premium tax consulting and preparation services in Ahmedabad — GST, ITR, ROC, Accounting, Agreement Drafting and more.",
  keywords:
    "tax consultant ahmedabad, gst registration, income tax return, roc compliance, accounting",
  ogImage: "/og-image.png",
};
