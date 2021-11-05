import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

import { CodeIcon } from '@heroicons/react/solid';

const CodingActive = () => {
  const { data: wakaTimeData } = useSWR('/api/wakatime', fetcher);

  const isLoading = !wakaTimeData;

  return (
    <section className="flex flex-col my-10 gap-y-3">
      <div className="flex items-center">
        <span className="w-8">
          <CodeIcon className="w-6 h-6" />
        </span>
        <h3 className="flex items-center justify-start text-lg font-bold sm:text-xl gap-x-2">
          Coding Active
        </h3>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-4 sm:grid-cols-7 animate-pulse gap-y-2 gap-x-4">
          <div className="h-6 col-span-2 bg-gray-600 rounded-md"></div>
          <div className="h-6 col-span-2 bg-gray-600 rounded-md"></div>
          <div className="h-6 col-span-2 bg-gray-600 rounded-md "></div>
          <div className="w-20 h-6 bg-gray-600 rounded-md"></div>
        </div>
      ) : (
        <ul className="flex flex-col gap-6 sm:gap-4">
          {wakaTimeData.map((language) => (
            <li
              key={language.name}
              className="grid grid-cols-4 gap-y-2 gap-x-4 sm:gap-4 sm:grid-cols-7"
            >
              <div className="col-span-2 text-sm sm:text-base">{language.name}</div>
              <div className="col-span-2 text-sm sm:text-base">{language.text}</div>
              <div className="w-full col-span-2 bg-gray-200 rounded-md">
                <div
                  className="px-1 bg-blue-400 dark:bg-blue-600 rounded-l-md"
                  style={{ width: `${language.percent}%` }}
                >
                  &ensp;
                </div>
              </div>
              <div className="text-sm sm:text-base">{language.percent}%</div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default CodingActive;
