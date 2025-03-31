import React from "react";
import { createRoot } from "react-dom/client"; // React 18 way to render components
import App from "./App"; // Main App component
import "./index.css"; // Optional: Include global styles if needed

// Find the root element in the HTML file
const rootElement = document.getElementById("root");

// Create a React root and render the App component
createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
