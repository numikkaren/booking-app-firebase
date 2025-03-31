// Routes is the navigator that tells React : which URL page should show 
// which page. Controls which page ( component) to show depending on the current URL. 

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";

function AppRoutes({ user }) {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/dashboard" 
        element={ user ? <Dashboard user = {user}/> : <Navigate to="/login" />}
        />
      </Routes>
    
  );
}

export default AppRoutes;
