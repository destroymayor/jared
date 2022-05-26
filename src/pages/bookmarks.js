import bookmarks from '@/data/bookmarks';

import Container from '@/components/Container';
import Hero from '@/components/Hero';
import Link from '@/components/Link';

const title = `Bookmarks`;
const description = `Collection of useful tools website.`;

export default function Bookmarks() {
  return (
    <ul className="flex flex-col gap-4 md:gap-10">
      {bookmarks.map((bookmarkItem) => {
        const { collection, list } = bookmarkItem;

        return (
          <li className="relative flex flex-col gap-2" key={collection}>
            <aside className="absolute -left-[60px] top-4 hidden whitespace-nowrap text-zinc-400 [writing-mode:vertical-lr] dark:text-zinc-500 md:block">
              {collection}
            </aside>
            <div className="text-lg text-zinc-400 dark:text-zinc-600 md:hidden">{collection}</div>

            <div className="flex flex-col gap-2 md:gap-4">
              {list.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="flex flex-col rounded-md p-2 transition duration-200 ease-in-out hover:bg-zinc-200 dark:hover:bg-zinc-800 md:px-4 md:py-2"
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
        );
      })}
    </ul>
  );
}

Bookmarks.getLayout = function getLayout(page) {
  return (
    <Container title={title} description={description}>
      <Hero title={title} description={description} />
      <div className="absolute -left-6 top-12 hidden h-full w-[1px] border-l border-dashed border-zinc-300 dark:border-zinc-700 md:block" />

      {page}
    </Container>
  );
};
