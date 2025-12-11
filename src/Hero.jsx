import FluidEffect from "./FluidEffect";

export default function Hero() {
  return (
    <section className="absolute top-0 left-0 w-full h-full overflow-hidden">
      <img
        src="./src/assets/hero-banner.png"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <FluidEffect />

      <button className="absolute top-2/3 left-1/2 -translate-x-1/2 ...">
        Shaping the future of visual Communication
      </button>
    </section>
  );
}
