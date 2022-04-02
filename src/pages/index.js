import contact from '@/data/contact';

import Link from '@/components/Common/Link';
import { LocationMarkerIcon } from '@heroicons/react/outline';

HomePage.description = `Hey, I'm Jared Chen. I'm a front-end developer.`;

export default function HomePage() {
  return (
    <section className="relative flex flex-col items-start gap-2 rounded-md pt-10 dark:bg-opacity-0 sm:pt-20">
      <h1 className="text-2xl sm:text-3xl">Jared Chen</h1>
      <p className="text-zinc-700 dark:text-zinc-400">Front-End Developer</p>
      <hr className="mt-4 mb-2 w-20 border border-zinc-300 dark:border-zinc-700" />

      <p className="text-zinc-700 dark:text-zinc-400">
        Build faster and UX-first web products at{' '}
        <Link href="https://github.com/Tagtoo">
          <span className="border-b border-zinc-300 pb-1 font-semibold transition duration-200 ease-in-out hover:border-zinc-400 dark:border-zinc-700 dark:text-zinc-300">
            @Tagtoo
          </span>
        </Link>
        .
      </p>

      <div className="mt-4 flex flex-col justify-center gap-3">
        <li className="flex items-center gap-2">
          <span>
            <LocationMarkerIcon className="h-6 w-6" />
          </span>
          <span>Taiwan</span>
        </li>
        {contact.map((item) => (
          <Link key={item.link} href={item.link} aria-label={item.label}>
            <li className="flex items-center gap-2 transition duration-200 ease-in-out hover:text-zinc-500 dark:hover:text-zinc-100">
              <span>{item.icon}</span>
              <span>{item.title}</span>
            </li>
          </Link>
        ))}
      </div>
    </section>
  );
}
