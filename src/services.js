/**
 * services.js — Single source of truth for all service data
 * Used by: Home, Footer, ServicePage, and any future page
 */

export const SERVICES = [
  {
    id: 1,
    title: "Book Keeping / Accounting",
    label: "Book Keeping / Accounting",
    img: "img/accounting.png",
    tag: "Compliance",
    desc: "Tally & custom software bookkeeping, finalization, and review.",
    items: [
      "Book Keeping (Tally / Customized Software — India / UAE / Saudi Arabia)",
      "Finalization of Books",
      "Review of Books of Accounts",
    ],
  },
  {
    id: 2,
    title: "GST Compliances",
    label: "GST Compliances",
    img: "img/gst.png",
    tag: "Taxation",
    desc: "Registration, returns, refunds, appeals & departmental representation.",
    items: [
      "GST Registration (Regular / Composition / Casual Tax Payer)",
      "GST Return",
      "GST Refund",
      "GST Appeal",
      "Departmental Representation",
      "Demand / Notice Reply",
      "GSTN Surrender And Final Return",
      "LUT",
    ],
  },
  {
    id: 3,
    title: "Income Tax Return",
    label: "Income Tax Return",
    img: "img/incometax.png",
    tag: "Taxation",
    desc: "PAN, ITR filing, tax planning, demand replies & appeals.",
    items: [
      "PAN (Registration / Updation / Modification / Surrender)",
      "IT Return (Original / Revised / Belated / Updated / Rectification of Returns)",
      "Tax Computation & Finalization",
      "Tax Planning & Management",
      "Advance Tax",
      "Income Tax Demand / Notice Reply",
      "Income Tax Appeal",
      "Departmental Representation",
    ],
  },
  {
    id: 4,
    title: "ROC / MCA Compliances",
    label: "ROC / MCA Compliances",
    img: "img/roc.png",
    tag: "Corporate",
    desc: "Pvt Ltd, LLP registrations, annual filings, director KYC and compliance.",
    items: [
      "Private Limited Registrations",
      "LLP Registrations",
      "Name Change of Company",
      "Increase of Paid Capital",
      "Increase of Authorised Capital",
      "Creation / Modification of Charge",
      "Registration Address Change",
      "Annual ROC Compliances",
      "DIN Related Information (KYC / Allotment / Surrender)",
      "Appointment / Resignation of Directors",
      "LLP Annual ROC Compliances",
      "Changing Director Personal Information",
      "Incorporation of Business (INC20A)",
    ],
  },
  {
    id: 5,
    title: "Agreement Drafting",
    label: "Agreement Drafting",
    img: "img/agreement.png",
    tag: "Legal",
    desc: "Sale deeds, rent agreements, LLP deeds & legal documentation.",
    items: [
      "Agreement Drafting",
      "HUF Registration",
      "Partnership Firm Registration",
      "Pedhi Nama",
      "Purchase Deed / Sale Deed",
      "Affidavit",
      "Rent Agreement",
      "Leave & Licence Agreement",
      "Firm / LLP / HUF Deed",
      "Supplementary / Modification / Addendum Deed",
    ],
  },
  {
    id: 6,
    title: "Other Services",
    label: "Other Services",
    img: "img/other.png",
    tag: "Advisory",
    desc: "TDS, Udyam, DSC, Trademark, Insurance & management consulting.",
    items: [
      "TAN Registration / Updation",
      "TDS Refund",
      "Udyam Registration / Updation",
      "Digital Signature Certificate / DSC",
      "Loan and Financing",
      "Trademark",
      "Import Export Registration / Updation",
      "Insurance Services",
      "Gumasta / Professional Tax",
      "PF / ESIC",
      "Management Consultancy",
      "Turnover / Networth / Visa Certificate",
      "15CA / CB",
    ],
  },
];

/** Map tag names → visual tokens (consumed by ServiceCard) */
export const TAG_STYLES = {
  Compliance: { bg: "rgba(99,179,237,0.12)", color: "#63B3ED" },
  Taxation: { bg: "rgba(154,230,180,0.12)", color: "#68D391" },
  Corporate: { bg: "rgba(214,188,250,0.12)", color: "#D6BCFA" },
  Legal: { bg: "rgba(252,196,121,0.12)", color: "#F6AD55" },
  Advisory: { bg: "rgba(200,169,110,0.15)", color: "#C8A96E" },
};

/** Find a service by id — safe utility */
export function getServiceById(id) {
  return SERVICES.find((s) => s.id === id) ?? null;
}
