import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center justify-between gap-4 md:gap-10 p-4 md:p-10 relative">
      {/* Logo */}
      <div className="flex-1 md:flex-none">
        <Link to="/">
          <img
            className="w-[120px] h-[56px] md:w-[170px] md:h-[80px]"
            src="http://pixontechs.com/wp-content/uploads/2025/07/PIXON-TECH-LOGO.png"
            alt="Pixon Tech"
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2">
        <ul className="flex justify-center items-center gap-2 md:gap-4">
          <li className="relative">
            <Link
              className="transition-all text-gray-300 hover:text-blue-500 inline-block 
                after:content-[''] after:absolute after:left-1/2 after:bottom-0 
                after:h-[2px] after:w-full after:bg-blue-500 
                after:-translate-x-1/2 after:scale-x-0 
                after:origin-center 
                after:transition after:duration-300
                hover:after:scale-x-100 p-2 md:p-4 text-sm md:text-base"
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="relative">
            <Link
              className="transition-all text-gray-300 hover:text-blue-500 inline-block 
                after:content-[''] after:absolute after:left-1/2 after:bottom-0 
                after:h-[2px] after:w-full after:bg-blue-500 
                after:-translate-x-1/2 after:scale-x-0 
                after:origin-center 
                after:transition after:duration-300
                hover:after:scale-x-100 p-2 md:p-4 text-sm md:text-base"
              to="/about-us"
            >
              About us
            </Link>
          </li>
          <li className="relative">
            <Link
              className="transition-all text-gray-300 hover:text-blue-500 inline-block 
                after:content-[''] after:absolute after:left-1/2 after:bottom-0 
                after:h-[2px] after:w-full after:bg-blue-500 
                after:-translate-x-1/2 after:scale-x-0 
                after:origin-center 
                after:transition after:duration-300
                hover:after:scale-x-100 p-2 md:p-4 text-sm md:text-base"
              to="/solutions"
            >
              Our Solution
            </Link>
          </li>
          <li className="relative">
            <Link
              className="transition-all text-gray-300 hover:text-blue-500 inline-block 
                after:content-[''] after:absolute after:left-1/2 after:bottom-0 
                after:h-[2px] after:w-full after:bg-blue-500 
                after:-translate-x-1/2 after:scale-x-0 
                after:origin-center 
                after:transition after:duration-300
                hover:after:scale-x-100 p-2 md:p-4 text-sm md:text-base"
              to="/contact-us"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <button className="text-white font-semibold px-3 md:px-6 py-2 md:py-3 rounded-full border-none bg-[#033d7c85] text-xs md:text-sm lg:text-base">
              Led Configurator
            </button>
          </li>
        </ul>
      </nav>

      {/* Desktop CTA Button */}
      <div className="hidden lg:flex flex-1 justify-end">
        <button className="text-white font-semibold px-4 md:px-6 py-2 md:py-3 rounded-full border-none bg-[#033d7c85] text-xs md:text-sm lg:text-base whitespace-nowrap">
          Get a free Consultation
        </button>
      </div>

      {/* Hamburger Menu Button */}
      <button
        onClick={toggleMenu}
        className="lg:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 z-50 relative"
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            isMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            isMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Mobile Navigation Menu */}
      <nav
        className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-lg z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 pt-20">
          <Link
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-300 hover:text-blue-500 text-2xl font-semibold transition-colors duration-300"
            to="/"
          >
            Home
          </Link>
          <Link
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-300 hover:text-blue-500 text-2xl font-semibold transition-colors duration-300"
            to="/about-us"
          >
            About us
          </Link>
          <Link
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-300 hover:text-blue-500 text-2xl font-semibold transition-colors duration-300"
            to="/solutions"
          >
            Our Solution
          </Link>
          <Link
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-300 hover:text-blue-500 text-2xl font-semibold transition-colors duration-300"
            to="/contact-us"
          >
            Contact Us
          </Link>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white font-semibold px-8 py-4 rounded-full border-none bg-[#033d7c85] text-lg mt-4"
          >
            Led Configurator
          </button>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white font-semibold px-8 py-4 rounded-full border-none bg-[#033d7c85] text-lg"
          >
            Get a free Consultation
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
