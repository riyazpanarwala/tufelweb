/**
 * App.jsx — Root application shell (Light Theme)
 */
import React, { useState, Suspense, lazy, useCallback } from "react";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import LoadingSpinner from "./components/LoadingSpinner";
import WhatsAppButton from "./components/WhatsAppButton";

import "./global.css";

const ServicePage = lazy(() => import("./ServicePage"));

function App() {
  const [activeServiceId, setActiveServiceId] = useState(null);

  const handleServiceSelect = useCallback((id) => {
    setActiveServiceId(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleHome = useCallback(() => {
    setActiveServiceId(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

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
