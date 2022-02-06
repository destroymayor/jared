import data from '@/data/bookmarks';

import Link from '@/components/Common/Link';

const title = `Bookmarks`;
const description = `Collection of useful tools website.`;

Bookmarks.title = title;
Bookmarks.description = description;

export default function Bookmarks() {
  return (
    <>
      <h1 className="text-2xl sm:text-4xl">{title}</h1>
      <p className="text-md py-4 dark:text-gray-400 sm:text-lg">{description}</p>

      <ul className="flex flex-col gap-y-5">
        {data.map((item) => (
          <li key={item.title} className="flex flex-col items-start">
            <h3 className="pb-3 text-xl text-gray-600 dark:text-gray-300">{item.title}</h3>

            <ul className="flex list-disc flex-col justify-start gap-y-2 px-5">
              {item.list.map((subItem, index) => (
                <li key={subItem + index.toString()}>
                  <div className="text-md flex flex-wrap gap-y-2 sm:flex-nowrap">
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
}
