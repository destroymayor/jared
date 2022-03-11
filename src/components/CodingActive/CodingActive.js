import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

import Progress from '@/components/CodingActive/Progress';

const CodingActive = () => {
  const { data } = useSWR('/api/read-stats', fetcher);

  const dailyTotal = data?.human_readable_total;
  const dailyAverage = data?.human_readable_daily_average;
  const bestDay = data?.best_day?.text;
  const actives = [
    { title: 'Languages', data: data.languages },
    { title: 'Editor', data: data.editors },
  ];

  return (
    <section className="flex flex-col gap-y-2 border-t border-gray-500 pt-4">
      <h2 className="text-2xl">Coding Active</h2>
      <p className="dark:text-gray-400">My weekly WakaTime stats</p>

      <div className="flex flex-col gap-2 py-2 sm:flex-row sm:gap-4">
        <div className="flex flex-col">
          <span className="text-sm dark:text-zinc-400">Daily total</span>
          <span className="text-lg">{dailyTotal}</span>
        </div>

        <div className="border-b border-zinc-600 sm:border-l"></div>

        <div className="flex flex-col">
          <span className="text-sm dark:text-zinc-400">Best day</span>
          <span className="text-lg">{bestDay}</span>
        </div>

        <div className="border-b border-zinc-600 sm:border-l"></div>

        <div className="flex flex-col">
          <span className="text-sm dark:text-zinc-400">Daily average</span>
          <span className="text-lg">{dailyAverage}</span>
        </div>

        <div className="border-b border-zinc-600 sm:border-none"></div>
      </div>

      {actives.map((item) => (
        <div key={item.title} className="my-2 flex flex-col gap-2">
          <p className="dark:text-zinc-400">{item.title}</p>
          <ul className="flex flex-col gap-1 sm:ml-6 sm:list-disc">
            {item?.data?.map((subItem) => (
              <li key={subItem.name}>
                <div className="grid grid-cols-4 gap-x-4 gap-y-1 sm:grid-cols-7 sm:gap-2">
                  <div className="col-span-2 text-sm">{subItem.name}</div>
                  <div className="col-span-2 text-right text-sm sm:text-left">{subItem.text}</div>
                  <div className="col-span-4 sm:col-span-3">
                    <Progress percent={subItem.percent} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default CodingActive;
