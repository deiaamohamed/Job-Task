import Goal from "./partials/Goal";

function Vision() {
  return (
    <div className="w-4/5 mx-auto">
      <h1
        className="text-center font-bold text-3xl my-8
                bg-gradient-to-r from-blue-500 via-green-500 to-pink-500
                bg-[200%_200%] bg-clip-text text-transparent
                animate-gradientMove"
      >
        WHAT DRIVES US - VISION, MISSION & VALUES
      </h1>

      <section className="flex gap-10 justify-center">
        <Goal
          title={"Our Vision"}
          description={
            "To be the region’s creative technology catalyst—setting the benchmark for immersive visual experiences that shape smarter cities and unforgettable venues."
          }
          image={
            "https://pixontechs.com/wp-content/uploads/2025/07/d837-Vision-2030.png"
          }
        />
        <Goal
          title={"Our Mission"}
          description={
            "To be the region’s creative technology catalyst—setting the benchmark for immersive visual experiences that shape smarter cities and unforgettable venues."
          }
          image={
            "https://pixontechs.com/wp-content/uploads/2025/07/Untitled-15.png"
          }
        />
        <Goal
          title={"Our Values"}
          description={
            "To be the region’s creative technology catalyst—setting the benchmark for immersive visual experiences that shape smarter cities and unforgettable venues."
          }
          image={
            "https://pixontechs.com/wp-content/uploads/2025/07/sd7-Vision-2030.png"
          }
        />
      </section>
    </div>
  );
}
export default Vision;
