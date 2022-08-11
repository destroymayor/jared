import clsx from 'clsx';

type Props = {
  loading: boolean;
  data: {
    human_readable_total: string;
    human_readable_daily_average: string;
    best_day: {
      text: string;
    };
  };
};

export default function Overview(props: Props) {
  const { loading, data } = props;

  const dailyTotal = data?.human_readable_total;
  const dailyAverage = data?.human_readable_daily_average;
  const bestDay = data?.best_day?.text;

  const overviews = [
    { title: 'Best Day', value: bestDay },
    { title: 'Daily Average', value: dailyAverage },
    { title: 'Last Week', value: dailyTotal },
  ];

  return (
    <ul className="grid grid-cols-1 gap-2 py-2 md:grid-cols-3">
      {overviews.map((item) => (
        <li
          key={item.title}
          className={clsx(
            'flex h-[64px] flex-col justify-center rounded-xl bg-zinc-100 py-2 px-4 dark:bg-zinc-900',
            loading ? 'animate-pulse bg-zinc-300 text-transparent dark:bg-zinc-800' : ''
          )}
        >
          <span className={clsx('text-sm', loading ? '' : 'dark:text-zinc-400')}>{item.title}</span>
          <span className="font-semibold">{item.value}</span>
        </li>
      ))}
    </ul>
  );
}
