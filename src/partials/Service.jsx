function Service({ image, description }) {
  return (
    <div
      className="
      relative
        group
        basis-full md:basis-[calc(33.333%-1.67rem)] lg:basis-[calc(25%-1.88rem)]
        rounded-3xl pb-10 overflow-hidden cursor-pointer
        bg-cover bg-left
        transition-all duration-[6000ms] ease-linear
    "
      style={{ backgroundImage: `url(${image})` }}
    >
      <div
        className="
        w-full h-[300px]
        rounded-3xl bg-cover bg-no-repeat
        bg-[0%] group-hover:bg-[100%]
        transition-all duration-[8000ms] ease-linear
    "
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <div className="px-4">
        <p className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-md border-t border-white/10 p-3 md:p-4 uppercase text-white text-xs md:text-sm lg:text-base my-4 font-bold rounded-b-3xl">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Service;
