import Header from "./Header";
import Footer from "./Footer";
import Bfooter from "./Bfooter";
import Container from "./common/Container";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function ContactUs() {
  return (
    <div className="bg-black min-h-screen">
      {/* Header Section - Reusing existing Header */}
      <div className="relative z-50">
        <Header />
      </div>

      {/* Page Title Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-center justify-center bg-[url('./src/assets/city-lights-abstract-central-building-Large.jpeg')] bg-cover bg-center bg-no-repeat bg-fixed">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center text-white">
          <div className="text-sm md:text-base font-semibold text-gray-300 uppercase tracking-widest mb-2">
            <a href="/" className="hover:text-blue-500 transition-colors">
              Home
            </a>{" "}
            / Contact Us
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-wider">
            CONTACT US
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <main className="relative z-10 bg-[#111] text-gray-300">
        {/* Contact Info Blocks */}
        <Container className="py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-800 flex flex-col items-center text-center hover:border-blue-500 transition-colors duration-300 group">
              <div className="w-16 h-16 bg-[#222] rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors duration-300">
                <FaPhoneAlt className="text-2xl text-blue-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
              <p className="text-gray-400">+966 58 372 0000</p>
            </div>

            {/* Email */}
            <div className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-800 flex flex-col items-center text-center hover:border-blue-500 transition-colors duration-300 group">
              <div className="w-16 h-16 bg-[#222] rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors duration-300">
                <FaEnvelope className="text-2xl text-blue-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Support Email
              </h3>
              <p className="text-gray-400">info@pixontechs.com</p>
            </div>

            {/* Address */}
            <div className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-800 flex flex-col items-center text-center hover:border-blue-500 transition-colors duration-300 group">
              <div className="w-16 h-16 bg-[#222] rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors duration-300">
                <FaMapMarkerAlt className="text-2xl text-blue-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Office Address
              </h3>
              <p className="text-gray-400">Riyadh, Saudi Arabia</p>
            </div>
          </div>
        </Container>

        {/* Contact Form Section */}
        <section className="bg-[#0a0a0a] py-16 md:py-24">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content (Text/Image placeholder or just text) */}
              <div>
                <h4 className="text-blue-500 font-bold uppercase tracking-widest mb-2">
                  Get In Touch
                </h4>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  Send A Message
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  We are here to answer any questions you may have about our
                  experiences. Reach out to us and we’ll respond as soon as we
                  can.
                </p>
                <div className="h-1 w-20 bg-blue-500 rounded"></div>
              </div>

              {/* Right Content (Form) */}
              <div className="bg-[#1a1a1a] p-8 md:p-10 rounded-xl border border-gray-800">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full bg-[#111] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full bg-[#111] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full bg-[#111] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <textarea
                      rows="5"
                      placeholder="Your Message"
                      className="w-full bg-[#111] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    ></textarea>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 w-full md:w-auto">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </Container>
        </section>

        {/* Map Section */}
        <section className="w-full h-[400px]">
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

        <Bfooter />
        <Footer />
      </main>
    </div>
  );
}

export default ContactUs;
