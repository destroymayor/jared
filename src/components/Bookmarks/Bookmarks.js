import data from '@/data/bookmarks';
import Link from '@/components/Common/Link';

const Bookmarks = () => (
  <>
    <h1 className="pb-5 text-2xl">Bookmarks</h1>

    <ul className="flex flex-col gap-y-3">
      {data.map((item) => (
        <li key={item.title}>
          <h3 className="py-2 text-gray-600 dark:text-gray-300">{item.title}</h3>

          <ul className="flex flex-col justify-start px-6 list-disc gap-y-1">
            {item.list.map((subItem, index) => (
              <li key={subItem + index.toString()}>
                <Link
                  className="transition duration-200 ease-in-out hover:text-gray-400 "
                  href={subItem.link}
                >
                  {subItem.title}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </>
);

export default Bookmarks;
