import { useState, useEffect } from "react";
import Header from "../Header";

function Solution_section() {
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
    <section className="relative w-full h-screen overflow-hidden">
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

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content Layer with Header */}
      <div className="relative z-20 h-full flex flex-col">
        {/* Header Navigation */}
        <Header />

        {/* Hero Content - Empty space for now, content will be in Solutions.jsx */}
      </div>
    </section>
  );
}

export default Solution_section;