export default function Overview(props) {
  const { data } = props;

  const dailyTotal = data?.human_readable_total ?? 0;
  const dailyAverage = data?.human_readable_daily_average ?? 0;
  const bestDay = data?.best_day?.text ?? 0;

  return (
    <div className="flex flex-col gap-2 py-2 sm:flex-row sm:gap-4">
      <div className="flex flex-col">
        <span className="text-sm dark:text-zinc-400">Daily total</span>
        <span className="text-lg font-semibold">{dailyTotal}</span>
      </div>

      <div className="border-b border-zinc-600 sm:border-l"></div>

      <div className="flex flex-col">
        <span className="text-sm dark:text-zinc-400">Best day</span>
        <span className="text-lg font-semibold">{bestDay}</span>
      </div>

      <div className="border-b border-zinc-600 sm:border-l"></div>

      <div className="flex flex-col">
        <span className="text-sm dark:text-zinc-400">Daily average</span>
        <span className="text-lg font-semibold">{dailyAverage}</span>
      </div>

      <div className="border-b border-zinc-600 sm:border-none"></div>
    </div>
  );
}
