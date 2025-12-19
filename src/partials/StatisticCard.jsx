function StatisticCard({ number, title }) {
    return (
        <div
            className="
      relative
      before:content-['']
      before:absolute
      before:bg-[rgba(63,81,181,0.3)]
      before:w-[90px]
      before:h-[90px]
      before:rounded-full
      before:top-[-8px]
      before:left-[-25px]
      before:z-0
  "
        >
                <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold relative z-50">{number}<i>+</i></span>
            <span className="block text-sm md:text-base lg:text-lg font-medium mt-4 md:mt-6 lg:mt-8 text-gray-300">{title}</span>
        </div>
    )
}

export default StatisticCard;