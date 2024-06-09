import React, {useState} from "react";
import Accounting from "./accounting.jsx"
import Gst from "./gst.jsx"
import Incometax from "./incometax.jsx"
import Roc from "./roc.jsx"
import Agreement from "./agreement.jsx"
import OtherServices from "./otherServices.jsx"

import "./App.css";
import "./css/style.css"

function App() {
  const [index, setIndex] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const loadServices = (num) => {
    setIndex(num)
    scrollToTop()
  }

  return (
    <>
      <div className="wrap">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="bg-wrap">
                  <div className="row">
                    <div className="col-md-6 d-flex align-items-center">
                      <p className="mb-0 phone pl-md-2">
                        <span className="mr-2"><span className="fa fa-phone mr-1" /> +919974936751</span>
                        <span><span className="fa fa-paper-plane mr-1" />tufel.kcg@email.com</span>
                      </p>
                    </div>
                    <div className="col-md-6 d-flex justify-content-md-end">
                      <div className="social-media">
                        <p className="mb-0 d-flex">
                          <a href="https://www.facebook.com/profile.php?id=61555952280720" className="d-flex align-items-center justify-content-center"><span className="fa fa-facebook"><i className="sr-only">Facebook</i></span></a>
                          <a href="https://www.instagram.com/panarwala_associates/" className="d-flex align-items-center justify-content-center"><span className="fa fa-instagram"><i className="sr-only">Instagram</i></span></a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
          <div className="container">
            <div className="navbar-brand cursor" onClick={() => { loadServices(0)}}><img alt="logo" style={{ maxWidth : '350px'}} src="img/logo.jpg" /></div>


            <div className="collapse navbar-collapse" id="ftco-nav">
              <ul className="navbar-nav m-auto">
                <li className="nav-item active"><a href="javascript:void(0);" className="nav-link" onClick={() => { loadServices(0)}}>Home</a></li>
              </ul>
            </div>
          </div>
        </nav>
        {index === 0 ? <section className="ftco-section ftco-no-pt bg-light">
          <div className="container">
            <div className="row d-flex no-gutters">
              {/*div class="col-md-6 d-flex">
    				<div class="img img-video d-flex align-self-stretch align-items-center justify-content-center justify-content-md-center mb-4 mb-sm-0" style="background-image:url(images/about.jpg);">
    				</div>
    			</div*/}
              <div className="col-md-12 pl-md-5 py-5">
                <div className="heading-section pl-md-4 pt-md-5">
                  <span className="subheading">Welcome to Panarwala & Associates</span>
                  <h2 className="mb-4">We Are the Best Tax consulting and Preparation services</h2>
                </div>
                <div className="d-md-flex">
                  <div className="col-md-6">
                    <div className="services-2 w-100 d-flex cursor" onClick={() => { loadServices(1)}}>
                      <div className="icon d-flex align-items-center justify-content-center"><div className="serviceImage" style={{ backgroundImage: `url('img/accounting.png')` }} /></div>
                      <div className="text pl-4">
                        <h4>Book keeping / Accounting</h4>
                      </div>
                    </div>
                    <div className="services-2 w-100 d-flex cursor" onClick={() => { loadServices(2)}}>
                      <div className="icon d-flex align-items-center justify-content-center"><div className="serviceImage" style={{ backgroundImage: `url('img/gst.png')` }} /></div>
                      <div className="text pl-4">
                        <h4>GST Compliances</h4>
                      </div>
                    </div>
                    <div className="services-2 w-100 d-flex cursor" onClick={() => { loadServices(3)}}>
                      <div className="icon d-flex align-items-center justify-content-center"><div className="serviceImage" style={{ backgroundImage: `url('img/incometax.png')` }} /></div>
                      <div className="text pl-4">
                        <h4>Income Tax Return</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="services-2 w-100 d-flex cursor" onClick={() => { loadServices(4)}}>
                      <div className="icon d-flex align-items-center justify-content-center"><div className="serviceImage" style={{ backgroundImage: `url('img/roc.png')` }} /></div>
                      <div className="text pl-4">
                        <h4>ROC / MCA Compliances</h4>
                      </div>
                    </div>
                    <div className="services-2 w-100 d-flex cursor" onClick={() => { loadServices(5)}}>
                      <div className="icon d-flex align-items-center justify-content-center"><div className="serviceImage" style={{ backgroundImage: `url('img/agreement.png')` }} /></div>
                      <div className="text pl-4">
                        <h4>Agreement Drafting</h4>
                      </div>
                    </div>
                    <div className="services-2 w-100 d-flex cursor" onClick={() => { loadServices(6)}}>
                      <div className="icon d-flex align-items-center justify-content-center"><div className="serviceImage" style={{ backgroundImage: `url('img/other.png')` }} /></div>
                      <div className="text pl-4">
                        <h4>Other services</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> : ''}

        {index !== 0 ? <><section className="hero-wrap hero-wrap-2" style={{ backgroundImage: `url('img/bg_2.jpg')` }} data-stellar-background-ratio="0.5">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text align-items-end">
          <div class="col-md-9 pb-5">
          	<p class="breadcrumbs mb-2"><span class="mr-2"><a href="javascript:void(0);" onClick={() => { loadServices(0)}}>Home <i class="ion-ios-arrow-forward"></i></a></span></p>

          </div>
        </div>
      </div>
    </section>

    <section class="ftco-section">
    	<div class="container">
    		<div class="row">
          <div class="col-md-12 col-lg-12 d-flex services align-self-stretch px-4">
            <div class="d-block">
              <div class="icon d-flex mr-2">
            		<span class="flaticon-accounting-1"></span>
              </div>
              {index === 1 ? <Accounting /> : ''}
              {index === 2 ? <Gst /> : ''}
              {index === 3 ? <Incometax /> : ''}
              {index === 4 ? <Roc /> : ''}
              {index === 5 ? <Agreement /> : ''}
              {index === 6 ? <OtherServices /> : ''}
            </div>
          </div>

        </div>
    	</div>
    </section></> : ''}

        <footer className="footer">
            <div className="container-fluid px-lg-5">
              <div className="row">
                <div className="col-md-12 py-4">
                  <div className="row">
                    <div className="col-md-4 mb-md-0 mb-4">
                      <h2 className="footer-heading">About us</h2>
                      <p>Panarwala & Associates</p>
                      <p>A422, Sun westbank, Nr. Shiv cinema, Ashram road, Ahmedabad, 380009</p>
                      <ul className="ftco-footer-social p-0">
                        <li><a href="https://www.facebook.com/profile.php?id=61555952280720" data-toggle="tooltip" data-placement="top" title="Facebook"><span className="fa fa-facebook" /></a></li>
                        <li><a href="https://www.instagram.com/panarwala_associates/" data-toggle="tooltip" data-placement="top" title="Instagram"><span className="fa fa-instagram" /></a></li>
                      </ul>
                    </div>
                    <div className="col-md-4" />
                    <div className="col-md-4">
                      <div className="row justify-content-center">
                        <div className="col-md-12 col-lg-10">
                          <div className="row">
                            <div className="col-md-12 mb-md-0 mb-4">
                              <h2 className="footer-heading">Services</h2>
                              <ul className="list-unstyled">
                                <li><a href="javascript:void(0);" className="py-1 d-block" onClick={() => { loadServices(1)}}>Accounting</a></li>
                                <li><a href="javascript:void(0);" className="py-1 d-block" onClick={() => { loadServices(2)}}>GST Compliances</a></li>
                                <li><a href="javascript:void(0);" className="py-1 d-block" onClick={() => { loadServices(3)}}>Income Tax Return</a></li>
                                <li><a href="javascript:void(0);" className="py-1 d-block" onClick={() => { loadServices(4)}}>ROC / MCA Compliances</a></li>
                                <li><a href="javascript:void(0);" className="py-1 d-block" onClick={() => { loadServices(5)}}>Agreement Drafting</a></li>
                                <li><a href="javascript:void(0);" className="py-1 d-block" onClick={() => { loadServices(6)}}>Other services</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <p className="copyright">{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                        Copyright ©2024 All rights reserved
                        </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
    </>
  );
}

export default App;
