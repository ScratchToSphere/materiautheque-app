import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MetMat from "./pages/MetMat";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/met-materiaux" element={<MetMat />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
