import bookmarks from '@/data/bookmarks';

import Container from '@/components/Container';
import Hero from '@/components/Hero';
import Link from '@/components/Link';

const title = `Bookmarks`;
const description = `Collection of useful tools website.`;

export default function Bookmarks() {
  return (
    <ul className="flex flex-col gap-4 md:gap-8">
      {bookmarks.map((bookmarkItem) => {
        const { collection, list } = bookmarkItem;

        return (
          <li className="relative flex flex-col gap-2" key={collection}>
            <h2 className="bg-gradient-to-r from-sky-600 to-green-600 bg-clip-text p-2 text-xl font-extrabold text-transparent">
              {collection}
            </h2>

            <ul className="flex list-disc flex-col pl-7">
              {list.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.url}
                    className="flex flex-col rounded-md p-2 transition duration-200 ease-in-out hover:bg-zinc-200 dark:hover:bg-zinc-800 "
                  >
                    <div className="flex flex-col gap-1">
                      <span className="dark:text-zinc-100">{item.title}</span>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400 sm:text-sm">
                        {item.description ?? 'No description'}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
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
      {page}
    </Container>
  );
};
