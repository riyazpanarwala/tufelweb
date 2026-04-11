import React, { useState, Suspense, lazy } from "react";
import { Analytics } from "@vercel/analytics/react";
import "./global.css";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";

// Lazy load service pages
const ServicePage = lazy(() => import("./ServicePage"));

// ── All service content ──
const SERVICE_DATA = {
  1: {
    title: "Book Keeping / Accounting",
    img: "img/accounting.png",
    items: [
      "Book Keeping (Tally / Customized Software — India / UAE / Saudi Arabia)",
      "Finalization of Books",
      "Review of Books of Accounts",
    ],
  },
  2: {
    title: "GST Compliances",
    img: "img/gst.png",
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
  3: {
    title: "Income Tax Return",
    img: "img/incometax.png",
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
  4: {
    title: "ROC / MCA Compliances",
    img: "img/roc.png",
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
  5: {
    title: "Agreement Drafting",
    img: "img/agreement.png",
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
  6: {
    title: "Other Services",
    img: "img/other.png",
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
};

// Page transition wrapper
function PageTransition({ children, key }) {
  return (
    <div key={key} className="page-transition">
      {children}
    </div>
  );
}

function LoadingSpinner() {
  return (
    <div className="loading-spinner-container">
      <div className="loading-spinner" />
    </div>
  );
}

export default function App() {
  const [activeService, setActiveService] = useState(null);

  const handleServiceSelect = (id) => {
    setActiveService(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleHome = () => {
    setActiveService(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentService = activeService ? SERVICE_DATA[activeService] : null;

  return (
    <div className="app-container">
      <TopBar />
      <Navbar onHome={handleHome} />

      <main className="main-content">
        {activeService === null ? (
          <PageTransition key="home">
            <Home onServiceSelect={handleServiceSelect} />
          </PageTransition>
        ) : (
          <Suspense fallback={<LoadingSpinner />}>
            <PageTransition key="service">
              <ServicePage
                serviceId={activeService}
                title={currentService.title}
                img={currentService.img}
                items={currentService.items}
                onBack={handleHome}
              />
            </PageTransition>
          </Suspense>
        )}
      </main>

      <Footer onServiceSelect={handleServiceSelect} />
      <Analytics />
    </div>
  );
}
