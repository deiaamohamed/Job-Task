import Header from "../Header";
import Footer from "../Footer";
import Bfooter from "../Bfooter";
import Container from "../common/Container";
import Heading from "../partials/Heading";
import Goal from "../partials/Goal";
import StatisticCard from "../partials/StatisticCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Hero Section for About Us Page
function AboutHero() {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        src="http://pixontechs.com/wp-content/uploads/2025/07/eeedd.mov"
        poster="http://pixontechs.com/wp-content/uploads/revslider/video-media/eeedd_71.jpeg"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content Layer */}
      <div className="relative z-30 h-full flex flex-col">
        {/* Header Navigation */}
        <Header />

        {/* Hero Title */}
        <div className="flex-1 flex items-center justify-center px-4">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white uppercase tracking-wider"
            style={{
              textShadow: "7px 7px 10px rgba(0,0,0,0.75)",
            }}
          >
            ABOUT US
          </h1>
        </div>
      </div>
    </section>
  );
}

// About Content Section
function AboutContent() {
  return (
    <section className="py-12 md:py-20">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Video Column */}
        <div className="lg:w-1/2">
          <video
            className="w-full h-full min-h-[300px] md:min-h-[400px] object-cover rounded-lg shadow-2xl"
            autoPlay
            loop
            muted
            playsInline
            src="http://pixontechs.com/wp-content/uploads/2025/06/about-us.mp4"
          />
        </div>

        {/* Text Column */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <hr className="border-gray-600 mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-300 font-bold uppercase mb-6">
            ABOUT US
          </h2>

          <p className="text-lg md:text-xl leading-relaxed tracking-wide text-gray-400 mb-8">
            <span className="text-blue-500 font-semibold">Pixon Tech</span> is a
            Saudi-based audiovisual integrator specializing in next-generation
            display, lighting, and interactive technologies. From iconic LED
            façades to collaboration-ready boardrooms, we transform spaces into
            dynamic experiences that inform, inspire, and engage. Our
            multidisciplinary team blends engineering rigor with creative flair
            to deliver turnkey solutions for clients of every scale.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Link
              to="/solutions"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Learn more →
            </Link>
            <Link
              to="/solutions"
              className="text-gray-400 hover:text-blue-400 italic transition-colors duration-300"
            >
              - Our Solutions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Vision Mission Values Section
function VisionMissionValues() {
  const cards = [
    {
      title: "Our Vision",
      description:
        "To be the region's creative technology catalyst—setting the benchmark for immersive visual experiences that shape smarter cities and unforgettable venues.",
      image:
        "https://pixontechs.com/wp-content/uploads/2025/07/d837-Vision-2030.png",
    },
    {
      title: "Our Mission",
      description:
        "We empower organizations to communicate, collaborate, and captivate through bespoke audiovisual ecosystems—delivered with excellence, supported for life.",
      image:
        "https://pixontechs.com/wp-content/uploads/2025/07/Untitled-15.png",
    },
    {
      title: "Our Values",
      description:
        "We champion innovation, integrity, and excellence, creating sustainable solutions through collaboration, advanced technology, and trusted client relationships.",
      image:
        "https://pixontechs.com/wp-content/uploads/2025/07/sd7-Vision-2030.png",
    },
  ];

  return (
    <section className="py-12 md:py-20">
      <Heading title="WHAT DRIVES US - VISION, MISSION & VALUES" />

      <div className="flex flex-col md:flex-row gap-10 justify-center mt-10">
        {cards.map((card, index) => (
          <Goal
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>
    </section>
  );
}

// Image Gallery with Auto-slide
function ImageGallery() {
  const images = [
    "https://pixontechs.com/wp-content/uploads/2025/06/pantallas-led-para-eventos-scaled-1.jpeg",
    "https://pixontechs.com/wp-content/uploads/2025/06/pantallas-led-spara-eventos-scaled-1.jpeg",
    "https://pixontechs.com/wp-content/uploads/2025/06/يntos-scaled-1.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Gallery ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            currentIndex === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "bg-blue-500 scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// Statistics Section with Gallery
function StatisticsWithGallery() {
  const statistics = [
    { number: 16, title: "Years of Experience" },
    { number: 100, title: "Clients Trusted us" },
    { number: 50, title: "Partners empowered us" },
    { number: 200, title: "Completed Projects" },
  ];

  return (
    <section className="py-12 md:py-20 bg-linear-to-r from-gray-900/50 to-black/50 rounded-2xl my-10">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center px-6 md:px-10">
        {/* Gallery Column */}
        <div className="lg:w-1/2 w-full">
          <ImageGallery />
        </div>

        {/* Statistics Column */}
        <div className="lg:w-1/2 w-full">
          <div className="grid grid-cols-2 gap-16 md:gap-24">
            {statistics.map((stat, index) => (
              <StatisticCard
                key={index}
                number={stat.number}
                title={stat.title}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Subscribe Section (Optional)
function SubscribeSection() {
  return (
    <section className="py-12 md:py-16 text-center bg-linear-to-r from-blue-900/20 to-purple-900/20 rounded-2xl my-10">
      <h3 className="text-2xl md:text-3xl font-light text-gray-300 italic mb-8">
        Join Our Mailing Group & Get Updates
      </h3>

      <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto px-4">
        <input
          type="email"
          placeholder="Type your e-mail address ..."
          className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all"
          required
        />
        <button
          type="submit"
          className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
        >
          Subscribe Now
        </button>
      </form>
    </section>
  );
}

// Main About Us Page Component
function AboutUsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <AboutHero />

      {/* Main Content */}
      <main className="text-white relative bg-center bg-no-repeat bg-fixed bg-cover bg-[url('http://pixontechs.com/wp-content/uploads/2025/05/city-lights-abstract-central-building-Large.jpeg')]">
        <div className="absolute inset-0 bg-black/85 pointer-events-none z-0" />

        <div className="relative z-10">
          <Container className="px-4 md:px-6 lg:px-8">
            {/* About Content Section */}
            <AboutContent />

            {/* Vision, Mission, Values Section */}
            <VisionMissionValues />

            {/* Statistics with Gallery Section */}
            <StatisticsWithGallery />

            {/* Subscribe Section */}
            <SubscribeSection />
          </Container>

          {/* Call to Action Footer */}
          <Bfooter />

          {/* Spacer */}
          <div className="h-20 bg-black/50" />

          {/* Footer */}
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default AboutUsPage;
