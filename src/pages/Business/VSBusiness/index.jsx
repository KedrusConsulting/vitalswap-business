import React from "react";
import SplitScreen from "../../../components/SplitScreen";

import sameDaySettlementImg from "../../../assets/same-day-settlement-img.webp";
import localCurrencyPayment from "../../../assets/local-currency-mockup.webp";
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
                  Receive funds on the same day of transaction completion,
                  ensuring quick access to your money for seamless business
                  operations.
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

                <div className="summary">
                  <div className="summary__edit">
                    <h4>Summary</h4>
                    <a href="#">Edit</a>
                  </div>

                  <div className="summary__estimated-rate">
                    <span className="desc">Estmiated Rate</span>
                    <span className="amt">1USD = 1,589NGN</span>
                  </div>

                  <div className="summary__service">
                    <span className="desc">Service Charge (10%)</span>
                    <span className="amt">$3.00</span>
                  </div>

                  <div className="summary__pay">
                    <span className="desc">Amount you'll pay</span>
                    <span className="amt">$3003.00</span>
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
                  fluctuations, and keep your revenue secure with VitalSwap.
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

                <div className="wallet-card">
                  <div className="wallet-card__dollar">
                    <span>USD Wallet</span>
                    <span>$10,000</span>
                  </div>

                  <button className="wallet-card__btn">Manage</button>
                </div>
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
