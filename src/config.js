/**
 * config.js — Global app configuration
 * Single source of truth for brand identity, contact, and social data.
 */

export const BRAND = {
  name: "Panarwala & Associates",
  tagline: "Premium Tax Consulting & Preparation Services",
  logoLight: "/img/panarwala-logo.svg", // logo on dark backgrounds (current)
  logoDark: "/img/panarwala-logo.svg", // swap to a dark-variant if available
  logoAlt: "Panarwala & Associates — Tax Consulting Ahmedabad",
  favicon: "/favicon.ico",
};

export const SITE_URL = "https://tufel.panarwala.in";

export const CONTACT = {
  address:
    "B-302, Al Hamd 4, Nr. Kadri Party Plot, Sarkhej, Ahmedabad — 380055",
  phone: "919974936751",
  phoneDisplay: "+91 99749 36751",
  email: "tufel.kcg@gmail.com",
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
  ogImage: "/img/logo.png",
};
