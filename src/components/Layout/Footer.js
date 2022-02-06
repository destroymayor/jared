import routes from '@/data/routes';

import Link from '@/components/Common/Link';

export default function Footer() {
  return (
    <footer className="flex w-11/12 flex-shrink-0 flex-col border-t-[1px] border-gray-700 pt-6 pb-8 sm:max-w-2xl">
      <ul className="grid w-full grid-cols-1 gap-y-4 sm:grid-cols-2">
        {routes.map((item) => (
          <li key={item?.pathname}>
            <Link
              className="cursor-pointer text-gray-700 transition duration-100 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-400"
              href={item?.pathname}
              aria-label={item.title}
            >
              {item?.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="pt-6 text-xs text-gray-600 dark:text-gray-300">
        © {new Date().getFullYear()} Jared Chen. All Rights Reserved.
      </div>
    </footer>
  );
}
