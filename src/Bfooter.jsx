import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Bfooter() {
  const images = [
    "https://imgs.search.brave.com/s1tMn8WxxTRrj_DHIf7-edcnyMu-aWGZ6skm-NU--bI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXRlLnZpc3Rh/LmNvbS9hcGkvbWVk/aWEvc21hbGwvMjEx/MDY3NDU2L3N0b2Nr/LXBob3RvLWxvdy1h/bmdsZS12aWV3LW9s/ZC1oaXN0cmljYWwt/dG93ZXItY2xvY2st/bW9kZXJuLWJ1aWxk/aW5ncy1kcmVzZGVu/bg",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
      {/* Background Images Carousel */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out z-0 ${
            currentImageIndex === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url("${img}")` }}
        />
      ))}

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-black/90 z-10" />

      {/* Content Section */}
      <section className="relative z-20 text-center text-white px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-24 h-full flex flex-col justify-center items-center">
        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-sans font-semibold mb-4 md:mb-6">
          Design the Future of Visual Communication.
        </h2>

        <p className="text-sm md:text-base lg:text-lg font-sans py-3 md:py-4 px-4 md:px-6 max-w-2xl">
          Let's bring your ideas to life—reach out today and discover what's
          possible.
        </p>

        <p className="text-sm md:text-base lg:text-lg font-sans py-3 md:py-4 px-4 md:px-6 max-w-2xl">
          Contact us now and start your journey with Screen Art.
        </p>

        <div className="mt-4 md:mt-6 lg:mt-8">
          <Link
            to="/contact-us"
            className="inline-block border-2 border-white rounded-full px-6 md:px-8 lg:px-10 py-2 md:py-3 lg:py-4 cursor-pointer transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 font-sans text-sm md:text-base lg:text-lg uppercase tracking-wider"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Bfooter;
