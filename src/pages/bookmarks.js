import { memo } from 'react';
import data from '@/data/bookmarks';

import Head from '@/components/Head/Head';
import Link from '@/components/Common/Link';
import Title from '@/components/Title/Title';

const Bookmarks = () => {
  return (
    <>
      <Head title="Bookmarks" description="Collection of useful tools website." />
      <Title title="Bookmarks" />

      <ul className="flex flex-col gap-y-5">
        {data.map((item) => (
          <li key={item.title} className="flex flex-col items-start">
            <h3 className="pb-3 text-xl text-gray-600 dark:text-gray-300">{item.title}</h3>

            <ul className="flex flex-col justify-start px-5 list-disc gap-y-2">
              {item.list.map((subItem, index) => (
                <li key={subItem + index.toString()}>
                  <div className="flex flex-wrap md:flex-nowrap text-md gap-y-2">
                    <Link
                      className="transition duration-200 ease-in-out hover:text-gray-500"
                      href={subItem.link}
                    >
                      {subItem.title}
                    </Link>
                    {subItem.description && (
                      <p className="px-2 text-gray-600 dark:text-gray-400">
                        {' '}
                        - {subItem.description}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};

export default memo(Bookmarks);
