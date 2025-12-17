import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black/90 text-white pt-16 pb-8 border-t border-white/10 relative z-20">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Left Column: Logo & Social */}
          <div className="space-y-8">
            <img
              loading="lazy"
              src="http://pixontechs.com/wp-content/uploads/2025/07/PIXON-TECH-LOGO.png"
              alt="Pixon Tech Logo"
              className="w-[180px] md:w-[230px] h-auto"
            />
            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-500 transition-colors duration-300"
                aria-label="X (Twitter)"
              >
                <FaXTwitter className="text-xl" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-600 transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>

          {/* Right Column: Quick Links */}
          <div className="md:pl-16">
            <h4 className="text-base md:text-lg font-semibold mb-6 border-b border-white/20 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-4 text-gray-400 text-sm md:text-base">
              <li>
                <Link
                  to="/about-us"
                  className="hover:text-blue-400 transition-colors"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions"
                  className="hover:text-blue-400 transition-colors"
                >
                  Our Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/company-profile"
                  className="hover:text-blue-400 transition-colors"
                >
                  Company Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact us
                </Link>
              </li>
              <li>
                <a
                  href="https://www.unilumin.com/UniDesigner/"
                  className="hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LED Configurator
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-500">
          <div className="mb-4 md:mb-0">
            <span className="text-gray-400 text-center md:text-left">
              © Copyright 2025. All Rights Reserved - PIXON ART.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span className="w-px h-4 bg-white/20"></span>
            <a href="#" className="hover:text-white transition-colors">
              About Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
