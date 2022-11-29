import React from "react";
import { Routes, Route } from "react-router-dom";

import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Homepage from "./pages/Homepage";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="vitalswap">
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/terms" element={<Terms />} />
        <Route exact path="/privacy" element={<Privacy />} />
        <Route exact path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
