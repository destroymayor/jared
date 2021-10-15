import { memo } from 'react';
import data from '@/data/bookmarks';

import Head from '@/components/Head/Head';
import Link from '@/components/Common/Link';

const Bookmarks = () => {
  const title = `Bookmarks`;
  const description = `Collection of useful tools website.`;

  return (
    <>
      <Head title={title} description={description} />
      <h1 className="text-2xl sm:text-4xl">{title}</h1>
      <p className="py-4 text-md sm:text-lg dark:text-gray-400">{description}</p>

      <ul className="flex flex-col gap-y-5">
        {data.map((item) => (
          <li key={item.title} className="flex flex-col items-start">
            <h3 className="pb-3 text-xl text-gray-600 dark:text-gray-300">{item.title}</h3>

            <ul className="flex flex-col justify-start px-5 list-disc gap-y-2">
              {item.list.map((subItem, index) => (
                <li key={subItem + index.toString()}>
                  <div className="flex flex-wrap sm:flex-nowrap text-md gap-y-2">
                    <Link
                      className="transition duration-200 ease-in-out hover:text-gray-500"
                      href={subItem.link}
                    >
                      {subItem.title}
                    </Link>

                    {subItem.description && (
                      <>
                        <span className="px-2 text-gray-600 dark:text-gray-400">-</span>
                        <p className="text-gray-600 dark:text-gray-400">{subItem.description}</p>
                      </>
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
