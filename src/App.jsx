import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

import "./App.css";

function App() {
  return (
    <>
      <Navbar className="headername" color="light" light>
        <NavbarBrand href="/">Tufel Panarwala</NavbarBrand>
      </Navbar>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-column">
            <h3>Panarwala & Associates</h3>
            <p>
              A422, Sun westbank, Nr. Shiv cinema, Ashram road, Ahmedabad,
              380009
            </p>
            <p>&copy; 2024 Company Name. All rights reserved.</p>
          </div>
          <div className="footer-column">
            <h3>Contact Us</h3>
            <ul>
              <li>Email: tufel.kcg@gmail.com</li>
              <li>Mobile: 9974936751</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/profile.php?id=61555952280720"
                className="fa fa-facebook"
              ></a>
              <a
                href="https://www.instagram.com/panarwala_associates/"
                className="fa fa-instagram"
              ></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
