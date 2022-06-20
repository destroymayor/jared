const Item = ({ label, children }) => (
  <div className="col-span-2 flex flex-col justify-around rounded-xl bg-zinc-100 py-2 px-4 shadow-md dark:bg-zinc-900 sm:col-span-1">
    <span className="text-sm dark:text-zinc-400">{label}</span>
    <span className="text-lg font-semibold">{children}</span>
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
      <Item label="Best Day">{bestDay}</Item>
      <Item label="Daily Average">{dailyAverage}</Item>
      <Item label="Last Week">{dailyTotal}</Item>
      <Item label="All Time Since Today">{allTimeSinceToday}</Item>
    </div>
  );
}
