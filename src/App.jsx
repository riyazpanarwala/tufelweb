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
const ServicesOverviewPage = lazy(() => import("./ServicesOverviewPage"));

function getRouteFromLocation() {
  const path = window.location.pathname.replace(/\/$/, "");
  if (path === "/services") {
    return "overview";
  }
  const match = path.match(/^\/services\/([^/]+)$/);
  if (match) {
    const service = getServiceBySlug(match[1]);
    if (service) return service.id;
  }
  return "home";
}

function setMetaContent(selector, content) {
  document.querySelector(selector)?.setAttribute("content", content);
}

function App() {
  const [activeView, setActiveView] = useState(() => getRouteFromLocation());

  const handleServiceSelect = useCallback((id) => {
    const service = getServiceById(id);
    if (!service) return;

    window.history.pushState({}, "", getServicePath(service));
    setActiveView(service.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleServicesOverview = useCallback(() => {
    window.history.pushState({}, "", "/services");
    setActiveView("overview");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleHome = useCallback(() => {
    window.history.pushState({}, "", "/");
    setActiveView("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setActiveView(getRouteFromLocation());
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    let title = SEO.title;
    let description = SEO.description;
    let canonical = `${SITE_URL}/`;

    if (activeView === "overview") {
      title = "Our Services | Panarwala & Associates — Tax, GST & Accounting Ahmedabad";
      description =
        "Explore the full service portfolio of Panarwala & Associates: Bookkeeping, GST compliance, Income Tax Returns, ROC filing, Agreement drafting, and Business consulting in Ahmedabad.";
      canonical = `${SITE_URL}/services`;
    } else if (typeof activeView === "number") {
      const service = getServiceById(activeView);
      if (service) {
        title = service.seoTitle;
        description = `${service.desc} Professional support from Panarwala & Associates in Ahmedabad.`;
        canonical = `${SITE_URL}${getServicePath(service)}`;
      }
    }

    const ogImage = `${SITE_URL}${SEO.ogImage}`;

    document.title = title;
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", canonical);
    setMetaContent('meta[name="description"]', description);
    setMetaContent('meta[name="keywords"]', SEO.keywords);
    setMetaContent('meta[property="og:title"]', title);
    setMetaContent('meta[property="og:description"]', description);
    setMetaContent('meta[property="og:url"]', canonical);
    setMetaContent('meta[property="og:image"]', ogImage);
    setMetaContent('meta[name="twitter:title"]', title);
    setMetaContent('meta[name="twitter:description"]', description);
    setMetaContent('meta[name="twitter:image"]', ogImage);
  }, [activeView]);

  return (
    <div className="app-container">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Navbar
        onHome={handleHome}
        onServicesOverview={handleServicesOverview}
        onServiceSelect={handleServiceSelect}
      />

      <main id="main-content" className="main-content">
        {activeView === "home" && (
          <div className="page-transition" key="home">
            <Home onServiceSelect={handleServiceSelect} />
          </div>
        )}

        {activeView === "overview" && (
          <Suspense fallback={<LoadingSpinner />}>
            <div className="page-transition" key="services-overview">
              <ServicesOverviewPage
                onHome={handleHome}
                onServiceSelect={handleServiceSelect}
              />
            </div>
          </Suspense>
        )}

        {typeof activeView === "number" && (
          <Suspense fallback={<LoadingSpinner />}>
            <div className="page-transition" key={`service-${activeView}`}>
              <ServicePage
                serviceId={activeView}
                onBack={handleServicesOverview}
              />
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

