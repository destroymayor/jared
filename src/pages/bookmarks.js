import bookmarks from '@/data/bookmarks';
import Link from '@/components/Common/Link';
import { LinkIcon } from '@heroicons/react/outline';

const title = `Bookmarks`;
const description = `Collection of useful tools website.`;

Bookmarks.title = title;
Bookmarks.description = description;

export default function Bookmarks() {
  return (
    <>
      <h1 className="text-3xl">{title}</h1>
      <p className="pt-2 dark:text-zinc-400">{description}</p>
      <div className="my-6 border-b border-dashed border-zinc-300 dark:border-zinc-700" />

      <div className="absolute -left-6 top-0 hidden h-[calc(100%-40px)] min-h-[calc(100vh-40px)] w-[1px] border-l border-dashed border-zinc-300 dark:border-zinc-700 md:block"></div>

      <ul className="flex flex-col gap-10">
        {bookmarks.map((bookmarkItem) => (
          <li className="relative flex flex-col gap-2" key={bookmarkItem.collection}>
            <aside className="absolute -left-[60px] top-4 hidden whitespace-nowrap text-zinc-400 [writing-mode:vertical-lr] dark:text-zinc-600 md:block">
              {bookmarkItem.collection}
            </aside>

            <div className="flex flex-col gap-4">
              {bookmarkItem.list.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="flex flex-col rounded-md px-4 py-2 transition duration-200 ease-in-out hover:bg-zinc-200 dark:hover:bg-zinc-800"
                >
                  <div className="flex flex-col gap-1">
                    <span className="dark:text-zinc-200">{item.title}</span>
                    <span className="text-sm text-zinc-500 dark:text-zinc-400">
                      {item.description ?? 'No description'}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
