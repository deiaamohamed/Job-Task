import StatisticCard from "./partials/StatisticCard";

function Statistics() {
  const statistics = [
    {
      number: 16,
      title: "Years of Experience",
    },
    {
      number: 50,
      title: "Partners empowered us",
    },
    {
      number: 100,
      title: "Clients Trusted us",
    },
    {
      number: 200,
      title: "Completed Projects",
    },
  ];

  return (
    <div className="p-6 order-2 basis-1/2">
      <div className="flex flex-wrap items-center h-[250px] gap-16">
        {statistics.slice(0, 2).map((stats) => (
          <StatisticCard number={stats.number} title={stats.title} />
        ))}
      </div>
      <div className="flex flex-wrap gap-16">
        {statistics.slice(2, 5).map((stats) => (
          <StatisticCard number={stats.number} title={stats.title} />
        ))}
      </div>
    </div>
  );
}

export default Statistics;
