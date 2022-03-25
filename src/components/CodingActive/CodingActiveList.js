import Progress from '@/components/CodingActive/Progress';
import FadeInSection from '@/components/Common/FadeInSection';

import { ClockIcon } from '@heroicons/react/solid';

const sumTotalFromArray = (data = [], key) => {
  return data.reduce((previousValue, currentValue) => previousValue + currentValue[key], 0) ?? 0;
};

const CodingActiveList = (props) => {
  const { data } = props;

  const getLanguagesTotalHours = sumTotalFromArray(data?.languages, 'hours');
  const getLanguagesTotalMinutes = sumTotalFromArray(data?.languages, 'minutes');
  const getLanguagesTotalTimeDisplay = `${
    Math.floor((getLanguagesTotalMinutes % 3600) / 60) + getLanguagesTotalHours
  } hrs ${getLanguagesTotalMinutes} mins`;

  const getEditorTotalHours = sumTotalFromArray(data?.editors, 'hours');
  const getEditorTotalMinutes = sumTotalFromArray(data?.editors, 'minutes');
  const getEditorTotalTimeDisplay = `${
    Math.floor((getEditorTotalMinutes % 3600) / 60) + getEditorTotalHours
  } hrs ${getEditorTotalMinutes} mins`;

  const actives = [
    {
      title: 'Languages',
      total: getLanguagesTotalTimeDisplay,
      data: data?.languages,
    },
    {
      title: 'Editor',
      total: getEditorTotalTimeDisplay,
      data: data?.editors,
    },
  ];

  return (
    <div className="mt-2 flex flex-col gap-4 sm:flex-row">
      {actives.map((item) => (
        <FadeInSection
          key={item.title}
          className="relative flex flex-1 flex-col gap-2 rounded-xl bg-gradient-to-r from-blue-400 to-purple-600 p-[2px]"
        >
          <div className="h-full w-full rounded-xl bg-gray-50 p-2 dark:bg-black">
            <p className="absolute -top-3 left-3 bg-gray-50 px-2 dark:bg-black dark:text-zinc-400">
              {item.title}
            </p>
            <div className="flex items-center gap-2 p-2">
              <ClockIcon className="h-6 w-6" />
              <span className="text-lg font-semibold">{item.total}</span>
            </div>
            <ul className="flex flex-col gap-1 px-2">
              {item?.data?.map((subItem) => (
                <li key={subItem.name} className="flex">
                  <div className="flex-[0.5] text-sm">{subItem.name}</div>
                  <div className="flex-1">
                    <Progress percent={subItem.percent} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </FadeInSection>
      ))}
    </div>
  );
};

export default CodingActiveList;
