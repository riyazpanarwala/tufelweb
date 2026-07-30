/**
 * ContactSection.jsx — Executive Consultation & Inquiry Form Section
 * Direct email submission to tufel.kcg@gmail.com via Web3Forms API
 */
import React, { useState } from "react";
import { CONTACT } from "../config";
import { SERVICES } from "../services";
import { IconPhone, IconMail, IconMapPin } from "../Icons";
import "./ContactSection.css";

// Utility: Sanitize string to neutralize script injection & HTML tags
const sanitizeString = (str) =>
  String(str)
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;")
    .trim();

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: SERVICES[0]?.title || "Book Keeping / Accounting",
    message: "",
    website_hp: "", // Honeypot field (invisible to humans, filled by bots)
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const validateField = (name, value) => {
    let error = "";
    const trimmed = value.trim();

    // 1. Script & HTML Tag Blocker Check
    const scriptOrHtmlRegex = /<\s*script[^>]*>|<\s*\/\s*script\s*>|<[^>]+>|javascript:|onerror=|onload=/i;
    if (scriptOrHtmlRegex.test(value)) {
      return "Script tags and HTML elements are strictly prohibited for security.";
    }

    if (name === "name") {
      if (!trimmed) {
        error = "Full Name is required.";
      } else if (trimmed.length < 2) {
        error = "Name must be at least 2 characters.";
      }
    }

    if (name === "phone") {
      const phoneDigits = value.replace(/\D/g, "");
      if (!trimmed) {
        error = "Phone Number is required.";
      } else if (phoneDigits.length < 10) {
        error = "Please enter a valid 10-digit mobile number.";
      }
    }

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!trimmed) {
        error = "Email address is required.";
      } else if (!emailRegex.test(trimmed)) {
        error = "Please enter a valid email address (e.g. rahul@example.com).";
      }
    }

    if (name === "message" && trimmed.length > 0 && trimmed.length < 5) {
      error = "Message should be at least 5 characters.";
    }

    return error;
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      if (field === "website_hp") return;
      const err = validateField(field, formData[field]);
      if (err) newErrors[field] = err;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Anti-Bot Protection: If honeypot field is filled out, reject bot submission
    if (formData.website_hp && formData.website_hp.length > 0) {
      // Return fake success to trap the bot without sending email
      setStatus("success");
      return;
    }

    // Mark all fields touched
    setTouched({ name: true, phone: true, email: true, message: true });

    if (!validateForm()) {
      return;
    }

    setStatus("submitting");

    // Sanitize data before payload dispatch
    const cleanName = sanitizeString(formData.name);
    const cleanPhone = sanitizeString(formData.phone);
    const cleanEmail = sanitizeString(formData.email);
    const cleanMessage = sanitizeString(formData.message);

    try {
      // Send to Web3Forms API (delivers directly to email in config.js)
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: CONTACT.web3formsKey,
          subject: `New Inquiry from ${cleanName} - Panarwala & Associates`,
          from_name: "Panarwala Website Inquiry",
          to_email: CONTACT.email,
          name: cleanName,
          phone: cleanPhone,
          email: cleanEmail,
          service_requested: formData.service,
          message: cleanMessage,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: SERVICES[0]?.title || "Book Keeping / Accounting",
          message: "",
          website_hp: "",
        });
        setTouched({});
        setErrors({});
      } else {
        triggerMailtoFallback();
      }
    } catch (err) {
      triggerMailtoFallback();
    }
  };

  const triggerMailtoFallback = () => {
    const cleanName = sanitizeString(formData.name);
    const cleanPhone = sanitizeString(formData.phone);
    const cleanEmail = sanitizeString(formData.email);
    const cleanMessage = sanitizeString(formData.message);

    const subject = encodeURIComponent(`Consultation Inquiry from ${cleanName} - Panarwala & Associates`);
    const body = encodeURIComponent(
      `Full Name: ${cleanName}\nPhone Number: ${cleanPhone}\nEmail: ${cleanEmail}\nService Requested: ${formData.service}\n\nMessage:\n${cleanMessage}`
    );

    // Direct Gmail Webmail composer in new tab
    const gmailWebmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT.email}&su=${subject}&body=${body}`;
    window.open(gmailWebmailUrl, "_blank");
    setStatus("success");
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Panarwala & Associates, I would like to inquire about ${formData.service}. My Name is ${formData.name || "Client"}.`
  );
  const whatsappUrl = `https://wa.me/${CONTACT.phone}?text=${whatsappMessage}`;

  return (
    <section id="contact-form-section" className="contact-section" aria-label="Contact Us">
      <div className="contact-inner">
        <header className="contact-header">
          <div className="section-eyebrow" aria-hidden="true">
            <span className="section-eyebrow-line" />
            <span className="section-eyebrow-text">Get In Touch</span>
            <span className="section-eyebrow-line" />
          </div>
          <h2 className="section-heading">Book a Consultation</h2>
          <div className="section-gold-rule" aria-hidden="true" />
          <p className="section-subtitle">
            Have a query about tax returns, GST compliance, or business incorporation? Send us a message and our expert consultants will respond promptly.
          </p>
        </header>

        <div className="contact-card">
          {/* Left Info Panel */}
          <div className="contact-info-panel">
            <h3 className="contact-info-title">Panarwala &amp; Associates</h3>
            <p className="contact-info-desc">
              Professional accounting, taxation, and business compliance advisory in Ahmedabad.
            </p>

            <ul className="contact-details-list">
              <li>
                <div className="contact-detail-icon">
                  <IconPhone size={16} color="var(--gold)" />
                </div>
                <div>
                  <span className="contact-detail-label">Phone</span>
                  <a href={`tel:+${CONTACT.phone}`} className="contact-detail-val">
                    {CONTACT.phoneDisplay}
                  </a>
                </div>
              </li>

              <li>
                <div className="contact-detail-icon">
                  <IconMail size={16} color="var(--gold)" />
                </div>
                <div>
                  <span className="contact-detail-label">Email</span>
                  <a href={`mailto:${CONTACT.email}`} className="contact-detail-val">
                    {CONTACT.email}
                  </a>
                </div>
              </li>

              <li>
                <div className="contact-detail-icon">
                  <IconMapPin size={16} color="var(--gold)" />
                </div>
                <div>
                  <span className="contact-detail-label">Office</span>
                  <span className="contact-detail-val">{CONTACT.address}</span>
                </div>
              </li>
            </ul>

            <div className="contact-whatsapp-box">
              <span>Need immediate assistance?</span>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-whatsapp-link"
              >
                Chat on WhatsApp →
              </a>
            </div>
          </div>

          {/* Right Form Panel */}
          <div className="contact-form-panel">
            {status === "success" ? (
              <div className="contact-success-banner">
                <div className="success-icon">✓</div>
                <h4 className="success-title">Inquiry Sent Successfully!</h4>
                <p className="success-desc">
                  Thank you for reaching out to Panarwala &amp; Associates. Your request has been sent to <strong>{CONTACT.email}</strong>. Our team will contact you shortly.
                </p>
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => setStatus("idle")}
                  style={{ marginTop: "16px" }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="form-row">
                  <div className={`form-group${touched.name && errors.name ? " has-error" : ""}`}>
                    <label htmlFor="form-name">Your Full Name *</label>
                    <input
                      id="form-name"
                      type="text"
                      name="name"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.name && errors.name && (
                      <span className="form-error">{errors.name}</span>
                    )}
                  </div>

                  <div className={`form-group${touched.phone && errors.phone ? " has-error" : ""}`}>
                    <label htmlFor="form-phone">Phone Number *</label>
                    <input
                      id="form-phone"
                      type="tel"
                      name="phone"
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.phone && errors.phone && (
                      <span className="form-error">{errors.phone}</span>
                    )}
                  </div>
                </div>

                <div className="form-row">
                  <div className={`form-group${touched.email && errors.email ? " has-error" : ""}`}>
                    <label htmlFor="form-email">Email Address *</label>
                    <input
                      id="form-email"
                      type="email"
                      name="email"
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.email && errors.email && (
                      <span className="form-error">{errors.email}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="form-service">Service Required *</label>
                    <select
                      id="form-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className={`form-group${touched.message && errors.message ? " has-error" : ""}`}>
                  <label htmlFor="form-message">Message / Details</label>
                  <textarea
                    id="form-message"
                    name="message"
                    rows="4"
                    placeholder="Briefly describe your tax, GST, or business compliance requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.message && errors.message && (
                    <span className="form-error">{errors.message}</span>
                  )}
                </div>

                {/* Honeypot Anti-Bot Field (Hidden from humans, traps automated spam bots) */}
                <div style={{ display: "none" }} aria-hidden="true">
                  <input
                    type="text"
                    name="website_hp"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website_hp}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="contact-submit-btn"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? (
                    "Sending Inquiry..."
                  ) : (
                    <>
                      Send Inquiry Request
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12,5 19,12 12,19" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
