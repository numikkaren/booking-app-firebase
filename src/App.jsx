import React from "react";
import AppRoutes from "./Routes.jsx"; 
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <div className="app-container">
    <Header />
    <main>
      <div className="container">
    <AppRoutes />
      </div>
    </main>
    <Footer />
    </div>
  );
}

export default App;
