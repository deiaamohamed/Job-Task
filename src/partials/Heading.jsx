function Heading({ size = "text-2xl md:text-3xl lg:text-4xl", title }) {
  return (
    <h2
      className={`text-center font-bold ${size} my-6 md:my-10 px-4 md:px-0
             bg-gradient-to-r from-[#7fa4ff] via-[#e936a7] to-[#7fa4ff]
             bg-clip-text text-transparent
             animate-gradientMove`} /* Only use the custom animation class */
    >
      {title}
    </h2>
  );
}

export default Heading;
