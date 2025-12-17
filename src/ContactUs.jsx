import Header from "./Header";
import Footer from "./Footer";
import Bfooter from "./Bfooter";
import Container from "./common/Container";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function ContactUs() {
  return (
    <div className="bg-black min-h-screen font-sans">
      {/* Header Section */}
      <div className="absolute top-0 w-full z-50">
        <Header />
      </div>

      {/* Hero / Page Title Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center bg-[url('./src/assets/hero-banner.png')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white mt-20">
          <h1 className="text-5xl md:text-7xl font-bold tracking-wide uppercase mt-8">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Main Content Area with Dark Background */}
      <main className="relative z-10 bg-black text-gray-300">
        {/* Background Image for Main Section */}
        <div className="absolute inset-0 z-0 bg-[url('./src/assets/city-lights-abstract-central-building-Large.jpeg')] bg-fixed bg-cover bg-center opacity-20 pointer-events-none"></div>

        {/* Contact Info Bar (Floating Overlap) */}
        <div className="relative z-20 -mt-16 mb-20">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 bg-black/40 backdrop-blur-md border border-white/10 divide-y md:divide-y-0 md:divide-x divide-white/10 rounded-2xl overflow-hidden">
              {/* Phone */}
              <div className="p-10 flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                  <FaPhoneAlt className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-500 mb-1">Phone</h3>
                <p className="text-gray-400 text-sm font-light tracking-wider">
                  +966 58 372 0000
                </p>
              </div>

              {/* Email */}
              <div className="p-10 flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                  <FaEnvelope className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-500 mb-1">
                  Support Email
                </h3>
                <p className="text-gray-400 text-sm font-light tracking-wider">
                  info@pixontechs.com
                </p>
              </div>

              {/* Address */}
              <div className="p-10 flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                  <FaMapMarkerAlt className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-500 mb-1">
                  Office Address
                </h3>
                <p className="text-gray-400 text-sm font-light tracking-wider">
                  Riyadh, Saudi Arabia
                </p>
              </div>
            </div>
          </Container>
        </div>

        {/* Contact Form & Text Section */}
        <section className="relative z-20 pb-24">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Left Content */}
              <div className="space-y-8 pt-4">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-blue-500 mb-4">
                    Feel free to Contact Us
                  </h2>
                  <p className="text-xl text-gray-400 font-light">
                    Keep in touch with us anytime
                  </p>
                </div>

                <p className="text-gray-400 leading-relaxed text-sm md:text-base text-justify">
                  Whether you’re planning a new project or need expert support,
                  our team is here to help. We work closely with clients across
                  industries to deliver seamless, integrated solutions. Get in
                  touch — we’ll respond promptly and professionally.
                </p>

                <div className="space-y-4 pt-4">
                  {/* Item 1 */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-gray-700 flex items-center justify-center text-blue-500">
                      <FaWhatsapp className="text-lg" />
                    </div>
                    <span className="text-gray-300 text-sm">
                      +966 58 372 7000
                    </span>
                  </div>
                  {/* Item 2 */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-gray-700 flex items-center justify-center text-blue-500">
                      <FaXTwitter className="text-lg" />
                    </div>
                    <span className="text-gray-300 text-sm">Twitter</span>
                  </div>
                  {/* Item 3 */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-gray-700 flex items-center justify-center text-blue-500">
                      <FaLinkedinIn className="text-lg" />
                    </div>
                    <span className="text-gray-300 text-sm">LinkedIn</span>
                  </div>
                </div>
              </div>

              {/* Right Content (Form) */}
              <div className="">
                <form className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name (*)"
                        className="w-full bg-transparent border border-gray-700 rounded-full px-6 py-4 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Your Email (*)"
                        className="w-full bg-transparent border border-gray-700 rounded-full px-6 py-4 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full bg-transparent border border-gray-700 rounded-full px-6 py-4 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div className="relative">
                    <select className="w-full bg-transparent border border-gray-700 rounded-full px-6 py-4 text-sm text-gray-500 focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer">
                      <option>Enquire a Quote</option>
                      <option>General Inquiry</option>
                      <option>Support</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <textarea
                      rows="6"
                      placeholder="Your Message"
                      className="w-full bg-transparent border border-gray-700 rounded-3xl px-6 py-4 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    ></textarea>
                  </div>
                  <div className="flex justify-end pt-2">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-900/50">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </Container>
        </section>

        {/* Map Section */}
        <section className="w-full h-[400px] grayscale contrast-125 brightness-75">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.6970724855!2d46.675295!3d24.713552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1689785421548!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>

        <Footer />
      </main>
    </div>
  );
}

export default ContactUs;
