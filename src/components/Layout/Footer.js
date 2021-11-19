import routes from '@/data/routes';

import Link from '@/components/Common/Link';

export default function Footer() {
  return (
    <footer className="flex flex-col flex-shrink-0 w-11/12 pt-6 pb-8 sm:max-w-2xl border-t-[1px] border-gray-700">
      <ul className="grid w-full grid-cols-1 gap-y-4 sm:grid-cols-2">
        {routes.map((item) => (
          <li key={item?.pathname}>
            <Link
              className="text-gray-700 transition duration-100 cursor-pointer dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-400"
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
