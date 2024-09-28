import React from "react";
import heroImg from "../../../assets/laptop-phone-mocku.webp";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="hero hero--business">
      <div className="container">
        <div className="hero__inner">
          <div className="hero__content">
            <h1
              className="heading heading--primary"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Receive payments from African customers
            </h1>
            <p data-aos="fade-up" data-aos-delay="600">
              VitalSwap for Business allows you receive payments from Africa
              directly in your local currency.
            </p>

            <div className="hero__ctas">
              <button
                data-aos="fade-up"
                data-aos-delay="900"
                className="btn btn--primary"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </button>
              <button
                data-aos="fade-up"
                data-aos-delay="900"
                className="btn"
                onClick={() => navigate("/signin")}
              >
                Login
              </button>
            </div>
          </div>

          <div
            className="hero__img hero__img--business"
            data-aos="fade-left"
            data-aos-delay="600"
          >
            <img src={heroImg} alt="pattern" />
            <svg
              className="hero__svg"
              viewBox="0 0 761 567"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M128.323 84.6419C169.624 60.7966 214.846 49.8256 259.39 50.4552L259.429 50.4328L260.626 50.4701C262.34 50.5081 264.049 50.5613 265.765 50.6243L294.695 51.4775L635.728 58.9381L637.786 2.62259L642.167 0.613687L749.109 98.0221C763.037 112.036 764.551 120.318 749.888 121.137L624.912 117.422L422.951 111.806L266.408 107.617C229.317 105.714 191.316 114.116 156.834 134.024C61.1362 189.275 28.6611 312.179 84.2973 408.544C139.934 504.909 262.609 538.236 358.307 482.985C405.875 455.522 437.814 411.345 451.087 362.015L509.177 363.29C494.67 432.112 452.281 494.585 386.823 532.377C264.034 603.27 106.634 560.508 35.2473 436.863C-36.1338 313.227 5.53363 155.535 128.323 84.6419V84.6419Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
