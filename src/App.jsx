import React from "react";
import AppRoutes from "./Routes.jsx"; 
//import Header from "./Header.jsx";
import Header from "./Components/Header.jsx";
//import Footer from "./Footer.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <div>
    <Header />
    <AppRoutes />
    <Footer />
    </div>
  );
}

export default App;
