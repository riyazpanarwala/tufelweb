import React, { useState, Suspense, lazy } from "react";
import { Analytics } from "@vercel/analytics/react";
import "./App.css";
import "./css/style.css";   // keep if you need base template
import "./css/custom.css";  // overrides + new responsive grid

// Lazy load service components
const Accounting = lazy(() => import("./accounting.jsx"));
const Gst = lazy(() => import("./gst.jsx"));
const Incometax = lazy(() => import("./incometax.jsx"));
const Roc = lazy(() => import("./roc.jsx"));
const Agreement = lazy(() => import("./agreement.jsx"));
const OtherServices = lazy(() => import("./otherServices.jsx"));

function App() {
  const [index, setIndex] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const loadServices = (num) => {
    setIndex(num);
    scrollToTop();
  };

  const services = [
    { id: 1, title: "Book keeping / Accounting", img: "img/accounting.png", component: <Accounting /> },
    { id: 2, title: "GST Compliances", img: "img/gst.png", component: <Gst /> },
    { id: 3, title: "Income Tax Return", img: "img/incometax.png", component: <Incometax /> },
    { id: 4, title: "ROC / MCA Compliances", img: "img/roc.png", component: <Roc /> },
    { id: 5, title: "Agreement Drafting", img: "img/agreement.png", component: <Agreement /> },
    { id: 6, title: "Other services", img: "img/other.png", component: <OtherServices /> }
  ];

  return (
    <>
      {/* Header Top Strip */}
      <div className="wrap">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="bg-wrap">
                <div className="row">
                  <div className="col-md-6 d-flex align-items-center">
                    <p className="mb-0 phone pl-md-2">
                      <span className="mr-2"><span className="fa fa-phone mr-1" /> +919974936751</span>
                      <span><span className="fa fa-paper-plane mr-1" /> tufel.kcg@email.com</span>
                    </p>
                  </div>
                  <div className="col-md-6 d-flex justify-content-md-end">
                    <div className="social-media">
                      <p className="mb-0 d-flex">
                        <a aria-label="Facebook" href="https://www.facebook.com/profile.php?id=61555952280720">
                          <span className="fa fa-facebook"></span>
                        </a>
                        <a aria-label="Instagram" href="https://www.instagram.com/panarwala_associates/">
                          <span className="fa fa-instagram"></span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
        <div className="container">
          <div className="navbar-brand cursor" onClick={() => loadServices(0)}>
            <img alt="logo" style={{ maxWidth: "350px" }} src="img/logo1.png" />
          </div>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav m-auto">
              <li className="nav-item active">
                <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); loadServices(0); }}>Home</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      {index === 0 && (
        <section className="ftco-section ftco-no-pt bg-light">
          <div className="container">
            <div className="row d-flex no-gutters">
              <div className="col-md-12 py-3">
                <div className="heading-section pl-md-4 pt-md-5">
                  <span className="subheading">Welcome to Panarwala & Associates</span>
                  <h2 className="mb-4">We Are the Best Tax consulting and Preparation services</h2>
                </div>

                {/* ✅ Services Grid */}
                <div className="services-grid">
                  {services.map((s) => (
                    <div
                      key={s.id}
                      className="services-2 cursor"
                      onClick={() => loadServices(s.id)}
                    >
                      <div className="icon">
                        <div
                          className="serviceImage"
                          style={{ backgroundImage: `url(${s.img})` }}
                        />
                      </div>
                      <div className="text">
                        <h4>{s.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
                {/* ✅ End Services Grid */}

              </div>
            </div>
          </div>
        </section>
      )}

      {/* Service Pages */}
      {index !== 0 && (
        <>
          <section className="hero-wrap hero-wrap-2" style={{ backgroundImage: `url('img/bg_2.jpg')` }} data-stellar-background-ratio="0.5">
            <div className="overlay"></div>
            <div className="container">
              <div className="row no-gutters slider-text align-items-end">
                <div className="col-md-9 pb-5">
                  <p className="breadcrumbs mb-2">
                    <span className="mr-2">
                      <a href="#" onClick={(e) => { e.preventDefault(); loadServices(0); }}>
                        Home <i className="ion-ios-arrow-forward"></i>
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="ftco-section">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-lg-12 d-flex services align-self-stretch px-4">
                  <div className="d-block">
                    <div className="icon d-flex mr-2"><span className="flaticon-accounting-1"></span></div>
                    <Suspense fallback={<p>Loading service...</p>}>
                      {services.find((s) => s.id === index)?.component}
                    </Suspense>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="container-fluid px-lg-5">
          <div className="row">
            <div className="col-md-12 py-4">
              <div className="row">
                <div className="col-md-4 mb-md-0 mb-4">
                  <h2 className="footer-heading">About us</h2>
                  <p>Panarwala & Associates</p>
                  <p>1012, Shilp Epitome, Sindhu Bhavan Road, Bodakdev, Ahmedabad, 380054</p>
                  <ul className="ftco-footer-social p-0">
                    <li><a href="https://www.facebook.com/profile.php?id=61555952280720" title="Facebook"><span className="fa fa-facebook" /></a></li>
                    <li><a href="https://www.instagram.com/panarwala_associates/" title="Instagram"><span className="fa fa-instagram" /></a></li>
                  </ul>
                </div>

                <div className="col-md-4" />

                <div className="col-md-4">
                  <div className="row justify-content-center">
                    <div className="col-md-12 col-lg-10">
                      <div className="row">
                        <div className="col-md-12 mb-md-0 mb-4">
                          <h2 className="footer-heading">Services</h2>
                          {/* ✅ Footer Services Grid */}
                          <div className="footer-services">
                            {services.map((s) => (
                              <a
                                key={s.id}
                                href="#"
                                onClick={(e) => { e.preventDefault(); loadServices(s.id); }}
                              >
                                {s.title}
                              </a>
                            ))}
                          </div>
                          {/* ✅ End Footer Services Grid */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <p className="copyright">
                    Copyright ©2025 All rights reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <Analytics />
    </>
  );
}

export default App;
