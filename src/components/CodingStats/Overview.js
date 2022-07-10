const Item = (props) => {
  const { loading, label, children } = props;

  if (loading) {
    return (
      <li className="col-span-2 h-[64px] flex flex-col gap-2 justify-around rounded-xl animate-pulse bg-zinc-100 p-2 shadow-md dark:bg-zinc-900 sm:col-span-1">
        <span className="h-4 w-2/5 rounded-md dark:bg-zinc-600"></span>
        <span className="rounded-md w-3/4 h-6 dark:bg-zinc-600"></span>
      </li>
    );
  }

  return (
    <li className="col-span-2 flex flex-col justify-around rounded-xl bg-zinc-100 py-2 px-4 shadow-md dark:bg-zinc-900 sm:col-span-1">
      <span className="text-sm dark:text-zinc-400">{label}</span>
      <span className="text-lg font-semibold">{children}</span>
    </li>
  );
};

export default function Overview(props) {
  const { data } = props;

  const dailyTotal = data?.human_readable_total;
  const dailyAverage = data?.human_readable_daily_average;
  const bestDay = data?.best_day?.text;
  const allTimeSinceToday = data?.all_time_since_today?.text;

  const list = [
    { label: 'Best Day', value: bestDay, loading: !bestDay },
    { label: 'Daily Average', value: dailyAverage, loading: !dailyAverage },
    { label: 'Last Week', value: dailyTotal, loading: !dailyTotal },
    { label: 'All Time Since Today', value: allTimeSinceToday, loading: !allTimeSinceToday },
  ];

  return (
    <ul className="grid grid-cols-2 gap-2 py-2">
      {list.map((item) => (
        <Item key={item.label} label={item.label} loading={item.loading}>
          {item.value}
        </Item>
      ))}
    </ul>
  );
}
