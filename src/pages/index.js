import Image from 'next/image';
import contact from '@/data/contact';

import avatar from '@/public/images/avatar.webp';

import Link from '@/components/Common/Link';
import { LocationMarkerIcon } from '@heroicons/react/outline';

HomePage.description = `Hey, I'm Jared Chen. I'm a front-end developer.`;

export default function HomePage() {
  return (
    <section className="relative flex flex-col items-start gap-2 rounded-md pt-6 dark:bg-opacity-0 sm:pt-10">
      <div className="flex flex-col-reverse justify-between gap-4 py-4 sm:flex-row">
        <div className="flex-1 pt-4 sm:py-0">
          <h1 className="text-3xl">Jared Chen</h1>
          <p className="text-zinc-700 dark:text-zinc-400">Front-End Developer</p>
          <hr className="my-2 w-20 border border-zinc-300 dark:border-zinc-700" />

          <p className="text-zinc-700 dark:text-zinc-400">
            Build faster and UX-first web products at{' '}
            <Link href="https://github.com/Tagtoo">
              <span className="border-b border-zinc-300 pb-1 font-semibold transition duration-200 ease-in-out hover:border-zinc-400 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-400">
                @Tagtoo
              </span>
            </Link>
            .
          </p>
        </div>

        <div className="flex w-40 items-start justify-start sm:justify-end">
          <Image src={avatar} alt="Jared Chen" width={100} height={100} className="rounded-full" />
        </div>
      </div>

      <ul className="mt-4 flex flex-col justify-center gap-4">
        <li className="flex items-center gap-2">
          <LocationMarkerIcon className="h-6 w-6" />
          <span>Taiwan</span>
        </li>
        {contact.map((item) => (
          <Link key={item.link} href={item.link} aria-label={item.label}>
            <li className="flex items-center gap-2 transition duration-200 ease-in-out hover:text-zinc-500 dark:hover:text-zinc-50">
              {item.icon}
              <span>{item.title}</span>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
}
