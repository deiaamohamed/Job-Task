import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Solutions from "./Solutions";
import ContactUs from "./ContactUs";
import AboutUsPage from "./pages/AboutUsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
