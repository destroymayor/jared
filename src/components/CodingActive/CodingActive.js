import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

import Progress from '@/components/CodingActive/Progress';

const CodingActive = (props) => {
  const { fallbackData } = props;

  const { data } = useSWR('/api/read-stats', fetcher, {
    fallbackData,
  });

  const actives = [
    { title: 'Languages', data: data.languages },
    { title: 'Editor', data: data.editors },
  ];

  return (
    <section className="flex flex-col gap-y-2">
      <h3 className="text-2xl">Coding Active</h3>
      <p className="dark:text-gray-400">My weekly WakaTime stats</p>

      {actives.map((item) => (
        <div key={item.title} className="flex flex-col my-2 gap-y-4">
          <p className="text-lg">{item.title}</p>
          <ul className="flex flex-col gap-6 sm:gap-4">
            {item.data.map((subItem) => (
              <li
                key={subItem.name}
                className="grid grid-cols-4 gap-y-2 gap-x-4 sm:gap-4 sm:grid-cols-7"
              >
                <div className="col-span-2 text-sm sm:text-base">{subItem.name}</div>
                <div className="col-span-2 text-sm text-right sm:text-left sm:text-base">
                  {subItem.text}
                </div>
                <Progress percent={subItem.percent} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default CodingActive;
