import React, { useEffect, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import AOS from "aos";
import Loadable from "./components/Loadable";

const Business = Loadable(lazy(() => import("./pages/Business")));
const SignUp = Loadable(lazy(() => import("./pages/SignUp")));
const SignIn = Loadable(lazy(() => import("./pages/SignIn")));
const Terms = Loadable(lazy(() => import("./pages/Terms")));
const Privacy = Loadable(lazy(() => import("./pages/Privacy")));

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-in-out",
    });

    AOS.refresh();
  }, []);

  return (
    <div className="vitalswap">
      <Routes>
        <Route exact path="/" element={<Business />} />
        <Route exact path="/terms" element={<Terms />} />
        <Route exact path="/privacy" element={<Privacy />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/signin" element={<SignIn />} />
      </Routes>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "6px" }}
        toastOptions={{
          className: "alert",
          success: {
            className: "alert--success",
            duration: 4000,
          },
          error: {
            className: "alert--error",
            duration: 8000,
          },
          style: {
            fontSize: "1.5rem",
            maxWidth: "60rem",
            padding: "1.6rem 2.4rem",
          },
        }}
      />
    </div>
  );
}

export default App;
