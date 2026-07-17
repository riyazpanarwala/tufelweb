/**
 * App.jsx — Root application shell (Light Theme)
 */
import React, { useState, Suspense, lazy, useCallback, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import LoadingSpinner from "./components/LoadingSpinner";
import WhatsAppButton from "./components/WhatsAppButton";
import { getServiceById, getServiceBySlug, getServicePath } from "./services";
import { SEO, SITE_URL } from "./config";

import "./global.css";

const ServicePage = lazy(() => import("./ServicePage"));

function getServiceFromLocation() {
  const match = window.location.pathname.match(/^\/services\/([^/]+)\/?$/);
  return match ? getServiceBySlug(match[1]) : null;
}

function setMetaContent(selector, content) {
  document.querySelector(selector)?.setAttribute("content", content);
}

function App() {
  const [activeServiceId, setActiveServiceId] = useState(
    () => getServiceFromLocation()?.id ?? null,
  );

  const handleServiceSelect = useCallback((id) => {
    const service = getServiceById(id);
    if (!service) return;

    window.history.pushState({}, "", getServicePath(service));
    setActiveServiceId(service.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleHome = useCallback(() => {
    window.history.pushState({}, "", "/");
    setActiveServiceId(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setActiveServiceId(getServiceFromLocation()?.id ?? null);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    const service = getServiceById(activeServiceId);
    const title = service
      ? service.seoTitle
      : SEO.title;
    const description = service
      ? `${service.desc} Professional support from Panarwala & Associates in Ahmedabad.`
      : SEO.description;
    const canonical = `${SITE_URL}${service ? getServicePath(service) : "/"}`;

    document.title = title;
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", canonical);
    setMetaContent('meta[name="description"]', description);
    setMetaContent('meta[property="og:title"]', title);
    setMetaContent('meta[property="og:description"]', description);
    setMetaContent('meta[property="og:url"]', canonical);
    setMetaContent('meta[name="twitter:title"]', title);
    setMetaContent('meta[name="twitter:description"]', description);
  }, [activeServiceId]);

  return (
    <div className="app-container">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Navbar onHome={handleHome} onServiceSelect={handleServiceSelect} />

      <main id="main-content" className="main-content">
        {activeServiceId === null ? (
          <div className="page-transition" key="home">
            <Home onServiceSelect={handleServiceSelect} />
          </div>
        ) : (
          <Suspense fallback={<LoadingSpinner />}>
            <div className="page-transition" key={`service-${activeServiceId}`}>
              <ServicePage serviceId={activeServiceId} onBack={handleHome} />
            </div>
          </Suspense>
        )}
      </main>

      <Footer onServiceSelect={handleServiceSelect} />
      <Analytics />
      <WhatsAppButton />
    </div>
  );
}

export default App;
