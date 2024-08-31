import React from "react";
import SplitScreen from "../../../components/SplitScreen";
import virtualCardImg from "../../../assets/virtual-card.png";

const VirtualCard = () => {
  return (
    <section className="virtual-card">
      <div className="container">
        <div className="virtual-card__inner">
          <SplitScreen>
            <div className="virtual-card__left">
              <span>Featues</span>
              <h3>Get a virtual dollar card that actually works</h3>
              <p>
                Experience effortless global payments with our Virtual Dollar
                Card. Enjoy low exchange rates, no hidden fees, and a 99.99%
                success rate. Works for all platforms.
              </p>

              <button type="button" className="btn btn--primary">
                Download App
              </button>
            </div>

            <div className="virtual-card__right">
              <img src={virtualCardImg} alt="Vitalswap virtual card mockup" />
            </div>
          </SplitScreen>
        </div>
      </div>
    </section>
  );
};

export default VirtualCard;