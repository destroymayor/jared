import Progress from '@/components/WakaTimeStats/Progress';

import { ClockIcon } from '@/components/Icons';
import clsx from 'clsx';

type Props = {
  loading: boolean;
  data: {
    languages: [];
    editors: [];
  };
};

export default function ActiveList(props: Props) {
  const { loading, data } = props;

  const actives = [
    {
      title: 'Languages',
      data: data?.languages,
      styles: {
        bg: 'bg-gradient-to-r from-green-600 to-cyan-700',
      },
    },
    {
      title: 'Editor',
      data: data?.editors,
      styles: {
        bg: 'bg-gradient-to-r from-sky-600 to-purple-500',
      },
    },
  ];

  if (loading) {
    return (
      <div className="mt-2 flex flex-col gap-6 sm:flex-row sm:gap-4">
        {actives.map((item) => (
          <div
            key={item.title}
            className="h-[112px] flex-1 animate-pulse rounded-xl bg-zinc-300 dark:bg-zinc-900"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="mt-2 flex flex-col gap-6 sm:flex-row sm:gap-4">
      {actives.map((item) => (
        <div
          key={item.title}
          className={clsx(item.styles.bg, 'relative flex flex-1 flex-col gap-2 rounded-xl p-[2px]')}
        >
          <div className="h-full w-full rounded-[10px] bg-zinc-50 px-2 py-4 dark:bg-black">
            <p className="absolute -top-3 left-3 bg-zinc-50 px-2 dark:bg-black">{item.title}</p>

            <ul className="flex flex-col px-2">
              {item?.data?.map((subItem: any) => (
                <li key={subItem.name}>
                  <Progress data={subItem} className={item.styles.bg} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
