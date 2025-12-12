import FluidCursorEffect from "./FluidCursorEffect";
import Header from "./Header";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image - Layer 1 (bottom) */}
      <img
        src="./src/assets/hero-banner.png"
        className="absolute inset-0 w-full h-full object-cover z-0"
        alt="Hero Banner"
      />

      {/* Dark Overlay - Layer 2 */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Fluid Canvas Effect - Layer 3 */}
      <div className="absolute inset-0 z-20">
        <FluidCursorEffect
          autoCircularMotion={true}
          motionRadius={0.3}
          motionSpeed={2}
        />
      </div>

      {/* Content Layer - Layer 4 (top) */}
      <div className="relative z-30 h-full flex flex-col">
        {/* Header Navigation */}
        <Header />

        {/* Hero Button */}
        <div className="flex-1 flex items-center justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105">
            Shaping the future of visual Communication
          </button>
        </div>
      </div>
    </section>
  );
}
