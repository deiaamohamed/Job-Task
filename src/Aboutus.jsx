function Aboutus({ Component }) {
  return (
    <div className="flex flex-col md:flex-row mt-28 gap-4">
      <Component />
      <div className="order-1 basis-1/2">
        <video
          className="w-full h-full"
          autoPlay
          loop
          muted
          src="http://pixontechs.com/wp-content/uploads/2025/06/about-us.mp4"
        ></video>
      </div>
    </div>
  );
}
export default Aboutus;
