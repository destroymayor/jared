import Progress from '@/components/CodingActive/Progress';
import FadeInSection from '@/components/Common/FadeInSection';

import { ClockIcon } from '@heroicons/react/solid';
import clsx from 'clsx';

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
      styles: {
        bg: 'bg-gradient-to-r from-amber-400 to-rose-600',
      },
    },
    {
      title: 'Editor',
      total: getEditorTotalTimeDisplay,
      data: data?.editors,
      styles: {
        bg: 'bg-gradient-to-r from-blue-400 to-purple-600',
      },
    },
  ];

  return (
    <div className="mt-2 flex flex-col gap-6 sm:flex-row sm:gap-4">
      {actives.map((item) => (
        <FadeInSection
          key={item.title}
          className={clsx(item.styles.bg, 'relative flex flex-1 flex-col gap-2 rounded-xl p-[2px]')}
        >
          <div className="h-full w-full rounded-xl bg-gray-50 p-2 dark:bg-black">
            <p className="absolute -top-3 left-3 bg-gray-50 px-2 dark:bg-black">{item.title}</p>

            <div className="flex items-center gap-2 p-2">
              <ClockIcon className="h-6 w-6" />
              <span className="text-lg font-semibold">{item.total}</span>
            </div>

            <ul className="flex flex-col px-2">
              {item?.data?.map((subItem) => (
                <li key={subItem.name}>
                  <Progress data={subItem} className={item.styles.bg} />
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
