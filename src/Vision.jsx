import Goal from "./partials/Goal";
import Heading from "./partials/Heading";

function Vision() {
  return (
    <div className="mx-auto my-16">
      <Heading title="WHAT DRIVES US - VISION, MISSION & VALUES" />

      <section className="flex flex-col md:flex-row gap-10 justify-center">
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
