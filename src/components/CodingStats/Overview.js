import clsx from 'clsx';

export default function Overview(props) {
  const { data } = props;

  const dailyTotal = data?.human_readable_total;
  const dailyAverage = data?.human_readable_daily_average;
  const bestDay = data?.best_day?.text;
  const allTimeSinceToday = data?.all_time_since_today?.text;

  const overviews = [
    { title: 'Best Day', value: bestDay, loading: !bestDay },
    { title: 'Daily Average', value: dailyAverage, loading: !dailyAverage },
    { title: 'Last Week', value: dailyTotal, loading: !dailyTotal },
    { title: 'All Time Since Today', value: allTimeSinceToday, loading: !allTimeSinceToday },
  ];

  return (
    <ul className="grid grid-cols-2 gap-2 py-2">
      {overviews.map((item) => (
        <li
          key={item.title}
          className={clsx(
            'col-span-2 flex h-[64px] flex-col rounded-xl bg-zinc-100 py-2 px-4 shadow-md dark:bg-zinc-900 sm:col-span-1',
            item.loading ? 'animate-pulse bg-zinc-300 text-transparent dark:bg-zinc-800' : ''
          )}
        >
          <span className={clsx('text-sm', item.loading ? '' : 'dark:text-zinc-400')}>
            {item.title}
          </span>
          <span className="text-lg font-semibold">{item.value}</span>
        </li>
      ))}
    </ul>
  );
}
