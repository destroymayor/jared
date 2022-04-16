const renderItem = (label, text) => (
  <div className="col-span-2 flex flex-col justify-around rounded-xl bg-zinc-100 py-2 px-4 shadow-md dark:bg-zinc-900 sm:col-span-1">
    <span className="text-sm dark:text-zinc-400">{label}</span>
    <span className="text-lg font-semibold">{text}</span>
  </div>
);

export default function Overview(props) {
  const { data } = props;

  const dailyTotal = data?.human_readable_total ?? 'N/A';
  const dailyAverage = data?.human_readable_daily_average ?? 'N/A';
  const bestDay = data?.best_day?.text ?? 'N/A';
  const allTimeSinceToday = data?.all_time_since_today?.text ?? 'N/A';

  return (
    <div className="grid grid-cols-2 gap-2 py-2">
      {renderItem('Best Day', bestDay)}
      {renderItem('Daily Average', dailyAverage)}
      {renderItem('Last Week', dailyTotal)}
      {renderItem('All Time Since Today', allTimeSinceToday)}
    </div>
  );
}
