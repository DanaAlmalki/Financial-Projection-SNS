import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import logo from "./assets/STC_logo.png";
import FinancialSearch from "./components/FinancialSearch/FinancialSearch.js";
import Output from "./components/Output/Output.js";

function App() {
  const [ticker, setTicker] = useState("");
  //const [showOutput, setShowOutput] = useState(false);

  return (
    <div className="main-content">
      <img src={logo} />
      <Routes>
        <Route
          path="/"
          element={<FinancialSearch ticker={ticker} setTicker={setTicker} />}
        />
        <Route path="/output" element={<Output ticker={ticker} />} />
      </Routes>
    </div>
  );
}

export default App;
