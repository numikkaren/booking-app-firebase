import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OwnerLogin from "./pages/OwnerLogin";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/owner-login" element={<OwnerLogin />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
