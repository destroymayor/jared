import clsx from 'clsx';

export default function Overview(props) {
  const { data } = props;

  const dailyTotal = data?.human_readable_total;
  const dailyAverage = data?.human_readable_daily_average;
  const bestDay = data?.best_day?.text;
  const allTimeSinceToday = data?.all_time_since_today?.text;

  return (
    <div className="grid grid-cols-2 gap-2 py-2">
      <div className="col-span-2 flex flex-col justify-around rounded-xl bg-zinc-100 py-2 px-4 shadow-md dark:bg-zinc-900 sm:col-span-1">
        <span className="text-sm dark:text-zinc-400">Best Day</span>
        <span
          className={clsx(
            'text-lg font-semibold',
            bestDay ? '' : 'h-5 w-1/2 animate-pulse rounded-md bg-zinc-700'
          )}
        >
          {bestDay}
        </span>
      </div>

      <div className="col-span-2 flex flex-col justify-around rounded-xl bg-zinc-100 py-2 px-4 shadow-md dark:bg-zinc-900 sm:col-span-1">
        <span className="text-sm dark:text-zinc-400">Daily Average</span>
        <span
          className={clsx(
            'text-lg font-semibold',
            dailyAverage ? '' : 'h-5 w-1/2 animate-pulse rounded-md bg-zinc-700'
          )}
        >
          {dailyAverage}
        </span>
      </div>

      <div className="col-span-2 flex flex-col justify-around rounded-xl bg-zinc-100 py-2 px-4 shadow-md dark:bg-zinc-900 sm:col-span-1">
        <span className="text-sm dark:text-zinc-400">Last Week</span>
        <span
          className={clsx(
            'text-lg font-semibold',
            dailyTotal ? '' : 'h-5 w-1/2 animate-pulse rounded-md bg-zinc-700'
          )}
        >
          {dailyTotal}
        </span>
      </div>

      <div className="col-span-2 flex flex-col justify-around rounded-xl bg-zinc-100 py-2 px-4 shadow-md dark:bg-zinc-900 sm:col-span-1">
        <span className="text-sm dark:text-zinc-400">All Time Since Today</span>
        <span
          className={clsx(
            'text-lg font-semibold',
            allTimeSinceToday ? '' : 'h-5 w-1/2 animate-pulse rounded-md bg-zinc-700'
          )}
        >
          {allTimeSinceToday}
        </span>
      </div>
    </div>
  );
}
