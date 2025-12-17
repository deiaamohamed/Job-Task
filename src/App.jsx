import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ContactUs from "./ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
