import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

import Progress from '@/components/CodingActive/Progress';

const CodingActive = () => {
  const { data } = useSWR('/api/read-stats', fetcher);

  const actives = [
    { title: 'Languages', data: data.languages },
    { title: 'Editor', data: data.editors },
  ];

  return (
    <section className="flex flex-col gap-y-2 border-t border-gray-600 pt-4">
      <h3 className="text-2xl">Coding Active</h3>
      <p className="dark:text-gray-400">My weekly WakaTime stats</p>

      {data.length === 0 ? (
        <div>No Data</div>
      ) : (
        <>
          {actives.map((item) => (
            <div key={item.title} className="my-2 flex flex-col gap-y-4">
              <p className="text-lg">{item.title}</p>
              <ul className="flex flex-col gap-6 sm:ml-6 sm:list-disc sm:gap-4">
                {item?.data?.map((subItem) => (
                  <li key={subItem.name}>
                    <div className="grid grid-cols-4 gap-y-2 gap-x-4 sm:grid-cols-7 sm:gap-4 ">
                      <div className="col-span-2 text-sm sm:text-base">{subItem.name}</div>
                      <div className="col-span-2 text-right text-sm sm:text-left sm:text-base">
                        {subItem.text}
                      </div>
                      <Progress percent={subItem.percent} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </>
      )}
    </section>
  );
};

export default CodingActive;
