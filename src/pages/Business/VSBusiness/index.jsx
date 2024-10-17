import React from "react";
import SplitScreen from "../../../components/SplitScreen";

import sameDaySettlementImg from "../../../assets/same-day-settlement-img.webp";
import localCurrencyPayment from "../../../assets/Phone11-pro-back.webp";
import { useNavigate } from "react-router-dom";

const VSBusiness = () => {
  const navigate = useNavigate();

  return (
    <section className="vitalswap-biz">
      <div className="vitalswap-biz__caption">
        <h2 data-aos="fade-up">VitalSwap for Business</h2>
        <p data-aos="fade-up">
          Easily accept payments from your African customers without worrying
          about chargeback fraud or high debit card fees. Integrate our checkout
          seamlessly.
        </p>
      </div>

      <div className="same-day-settlement">
        <div className="container">
          <div className="same-day-settlement__inner">
            <SplitScreen>
              <div className="same-day-settlement__left">
                <h3 data-aos="fade-right">Same-Day Settlement</h3>
                <p data-aos="fade-right">
                  Receive funds on the same day of transaction, ensuring quick
                  access to your money for seamless business operations.
                </p>

                <button
                  data-aos="fade-right"
                  className="btn btn--primary"
                  onClick={() => navigate("/signup")}
                >
                  Sign Up
                </button>
              </div>

              <div className="same-day-settlement__right" data-aos="fade-left">
                <img
                  src={sameDaySettlementImg}
                  alt="Lady smiling while looking at her phone"
                />

                <div className="amount">
                  <div className="amount__inner">
                    <span className="balance">Amount</span>
                    <h3>$200</h3>

                    <div className="amount__flex">
                      <div className="amount__left">
                        <span className="label">Date</span>
                        <span className="date">2022-07-29 12:15pm</span>
                      </div>

                      <div className="amount__right">
                        <span className="label">Status</span>
                        <div className="success">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="check">
                              <path
                                id="Vector"
                                d="M3.07812 7.69386L4.11107 8.72682C4.75523 9.37099 5.79963 9.37099 6.44378 8.72682L10.7757 4.3949"
                                stroke="#436E1D"
                                stroke-width="0.82474"
                                stroke-linecap="round"
                              />
                            </g>
                          </svg>

                          <span>Success</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SplitScreen>
          </div>
        </div>
      </div>

      <div className="protect-your-revenue">
        <div className="container">
          <div className="protect-your-revenue__inner">
            <SplitScreen>
              <div className="protect-your-revenue__left">
                <div className="rate__card">
                  <div className="rate__send">
                    <div className="rate__left">
                      <span className="label">Amount you’ll receive</span>
                      <span className="atm">{`${"N"}${"3,567,689.79"}`}</span>
                    </div>

                    <div className="rate__right">
                      <span className="rate">Exchange Rate</span>
                      <span className="atm">1 USD = {1589} NGN</span>
                    </div>
                  </div>

                  <div className="rate__receive">
                    <div className="rate__left">
                      <span className="label">Amount you’ll Pay</span>
                      <span className="atm">
                        {"$5,000"} <span className="rate__btn">Splittable</span>
                      </span>
                    </div>

                    <div className="rate__right">
                      <span className="rate__cta">
                        <span>Buy Dollar</span>
                        <img src={"/us-flag.svg"} alt="USD svg" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="protect-your-revenue__right">
                <h3 data-aos="fade-left">Revenue Protection</h3>
                <p data-aos="fade-left">
                  Protect your business from chargeback fraud and currency
                  fluctuations.
                </p>

                <button
                  className="btn btn--primary"
                  data-aos="fade-left"
                  onClick={() => navigate("/signup")}
                >
                  Sign Up
                </button>
              </div>
            </SplitScreen>
          </div>
        </div>
      </div>

      <div className="local-currency-payment">
        <div className="container">
          <div className="local-currency-payment__inner">
            <SplitScreen>
              <div className="local-currency-payment__left">
                <h3 data-aos="fade-right">Local Currency Payments</h3>

                <p data-aos="fade-right">
                  Accept payments in your local currency, regardless of your
                  customers' currency.
                </p>

                <button
                  data-aos="fade-right"
                  className="btn btn--primary"
                  onClick={() => navigate("/signup")}
                >
                  Sign Up
                </button>
              </div>

              <div
                className="local-currency-payment__right"
                data-aos="fade-left"
              >
                <img
                  src={localCurrencyPayment}
                  alt="Local current payment mockup"
                />
              </div>
            </SplitScreen>
          </div>
        </div>
      </div>

      <div className="intuitive-dashboard">
        <div className="container">
          <div className="intuitive-dashboard__inner">
            <SplitScreen>
              <div className="intuitive-dashboard__left">
                <h3 data-aos="fade-right">
                  Intuitive Dashboard and Daily Payouts
                </h3>
                <p data-aos="fade-right">
                  Monitor transactions with ease using our intuitive dashboard
                  and receive daily payouts to your bank account.
                </p>
                <button
                  data-aos="fade-right"
                  className="btn btn--primary"
                  onClick={() => navigate("/signup")}
                >
                  Sign Up
                </button>
              </div>

              <div className="intuitive-dashboard__right"></div>
            </SplitScreen>
          </div>
        </div>
      </div>

      <div className="free-api-integration">
        <div className="container">
          <div className="free-api-integration__inner">
            <SplitScreen>
              <div className="free-api-integration__left">
                <h3 data-aos="fade-right">Free API Integration</h3>
                <p data-aos="fade-right">
                  Embed our free API to your checkout process to enjoy secure
                  and seamless transactions.
                </p>
                <button
                  data-aos="fade-right"
                  className="btn btn--primary"
                  onClick={() => navigate("/signup")}
                >
                  Sign Up
                </button>
              </div>

              <div className="free-api-integration__right"></div>
            </SplitScreen>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VSBusiness;
