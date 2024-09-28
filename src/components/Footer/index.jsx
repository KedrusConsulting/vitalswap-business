import React from "react";
import { Link, useLocation } from "react-router-dom";

import footer_logo from "../../assets/vitalswap-logo2.svg";

import linkedin_icon from "../../assets/linkedin.svg";
import twitter_icon from "../../assets/twitter.svg";
import instagram_icon from "../../assets/instagram.svg";
import facebook_icon from "../../assets/facebook.svg";
import youtube_icon from "../../assets/youtube.svg";

function Footer() {
  const { pathname } = useLocation();
  return (
    <footer
      className={`footer ${pathname === "/" ? "footer__home" : ""}`}
      id="contact"
    >
      <div className="container">
        <div className="footer__grid">
          <div className="footer__logo">
            <img src={footer_logo} alt="Vitalswap footer logo" />
          </div>
          <div className="footer__about-us">
            <h5 className="footer__heading">About Us</h5>

            <p>
              VitalSwap is a global financial technology platform that offers a
              convenient and secure way to transfer, and make payments locally
              and internationally. Vitalswap LLC is a registered MSB. Financial
              services are provided by processor partners to our users.
            </p>

            <div className="footer__useful-links">
              <Link to="/terms" className="footer__link">
                Terms of Service
              </Link>

              <Link to="/privacy" className="footer__link">
                Privacy Policy
              </Link>
            </div>
          </div>

          <div className="footer__contact">
            <h5 className="footer__heading">Get Connected</h5>

            <div className="footer__social-links">
              <a
                target="_blank"
                href="https://www.youtube.com/@vitalswap"
                className="footer__link"
              >
                <img src={youtube_icon} alt="Youtube Icon" />
              </a>

              <a
                target="_blank"
                href="https://www.linkedin.com/company/vitalswap"
                className="footer__link"
              >
                <img src={linkedin_icon} alt="Linkedin Icon" />
              </a>

              <a
                target="_blank"
                href="https://twitter.com/vitalswap"
                className="footer__link"
              >
                <img src={twitter_icon} alt="Twitter Icon" />
              </a>

              <a
                target="_blank"
                href="https://www.instagram.com/vitalswap"
                className="footer__link"
              >
                <img src={instagram_icon} alt="Instagram Icon" />
              </a>

              <a
                target="_blank"
                href="https://web.facebook.com/Vitalswap"
                className="footer__link"
              >
                <img src={facebook_icon} alt="Facebook Icon" />
              </a>
            </div>

            <p>
              <a href={"mailto:contact@vitalswap.com"}>contact@vitalswap.com</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
