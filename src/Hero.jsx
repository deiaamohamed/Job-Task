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
          motionCenterY={0.4}
          splatRadius={0.02}
          densityDissipation={0.2}
          velocityDissipation={2.0}
          curl={30}
          splatForce={3000}
          pressure={0.05}
        />
      </div>

      {/* Content Layer - Layer 4 (top) */}
      <div className="relative z-30 h-full flex flex-col">
        {/* Header Navigation */}
        <Header />

        {/* Hero Button */}
        <div className="flex-1 flex items-center justify-center px-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 md:px-8 py-3 md:py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 text-sm md:text-base lg:text-lg">
            Shaping the future of visual Communication
          </button>
        </div>
      </div>
    </section>
  );
}
