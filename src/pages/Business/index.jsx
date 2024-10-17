import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import FAQ from "../../components/FAQ";
import GetInTouch from "../../components/GetInTouch";
import PoweredBy from "../../components/PoweredBy";
import VSBusiness from "./VSBusiness";
import Hero from "./Hero";

import { faqDataBusiness } from "../../components/FAQ/faqData";
import ScrollBackUp from "../../components/ScrollBackUp";

const Business = () => {
  return (
    <>
      <header className="header header--business">
        <Navigation />

        <Hero />
      </header>

      <main className="main">
        <section className="powered-by__section">
          <PoweredBy />
        </section>

        <VSBusiness />

        <FAQ data={faqDataBusiness} />
        <GetInTouch />
        <Footer />
      </main>

      <ScrollBackUp />
    </>
  );
};

export default Business;
