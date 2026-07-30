/**
 * config.js — Global app configuration
 * Single source of truth for brand identity, contact, and social data.
 */

export const BRAND = {
  name: "Panarwala & Associates",
  tagline: "Premium Tax Consulting & Preparation Services",
  logoLight: "/img/panarwala-logo-light.svg", // logo on dark backgrounds
  logoDark: "/img/panarwala-logo-dark.svg",   // logo on light backgrounds (header)
  logoAlt: "Panarwala & Associates — Tax Consulting Ahmedabad",
  favicon: "/favicon.ico",
};

export const SITE_URL = "https://tufel.panarwala.in";

const web3Key =
  (typeof process !== "undefined" && process.env && process.env.VITE_WEB3FORMS_KEY) ||
  (typeof import.meta !== "undefined" && import.meta.env && import.meta.env.VITE_WEB3FORMS_KEY) ||
  "dac1a622-72d1-49f0-bf51-2c9e74d19041";

export const CONTACT = {
  address:
    "B-302, Al Hamd 4, Nr. Kadri Party Plot, Sarkhej, Ahmedabad — 380055",
  phone: "919974936751",
  phoneDisplay: "+91 99749 36751",
  email: "tufel.kcg@gmail.com",
  web3formsKey: web3Key,
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
  title: "Panarwala & Associates | Tax, GST & Accounting Consultants Ahmedabad",
  description:
    "Panarwala & Associates — Top tax, GST, accounting & corporate compliance consultants in Ahmedabad. Expert ITR filing, ROC compliance, bookkeeping & agreement drafting.",
  keywords:
    "Panarwala & Associates, Panarwala tax consultant, tax consultant ahmedabad, gst registration ahmedabad, income tax return filing, roc compliance, bookkeeping ahmedabad",
  ogImage: "/img/og-image.png",
};
