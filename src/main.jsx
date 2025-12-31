import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// 1. HelmetProvider import karein
import { HelmetProvider } from "react-helmet-async"; 
import App from "./App";
import "./index.css";
import { ThemeProvider } from "./auth/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* 2. App ko HelmetProvider se wrap karein */}
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);