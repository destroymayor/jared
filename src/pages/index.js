import Image from 'next/image';

import contact from '@/data/contact';
import avatar from '@/public/images/me.webp';

import Container from '@/components/Container';
import Link from '@/components/Link';
import { TagIcon } from '@/components/FeatherIcons';

export default function HomePage() {
  return (
    <div className="flex h-3/4 flex-col items-start gap-6 md:flex-row-reverse md:items-center">
      <div className="flex justify-center md:flex-1">
        <div className="group relative h-[200px] w-[200px]">
          <Image src={avatar} alt="Jared" width={200} height={200} className="z-10 rounded-md" />
          <div className="absolute -right-4 -bottom-4 flex h-[200px] w-[200px] items-center justify-center rounded-md bg-gradient-to-r from-violet-700 via-cyan-700 to-sky-700 transition-all duration-200 ease-in-out group-hover:-right-3 group-hover:-bottom-3">
            <div className="h-[193px] w-[193px] rounded bg-zinc-50 dark:bg-black"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-[2] flex-col">
        <div className="flex flex-col gap-4 pt-6">
          <h1 className="text-4xl">Jared</h1>
          <p className="text-zinc-700 dark:text-zinc-400">Front-End Developer</p>
          <hr className="my-2 w-20 border border-zinc-300 dark:border-zinc-700" />

          <p className="text-zinc-700 dark:text-zinc-400">
            I&#39;m <b>Jared</b>, a Front-end Developer working with <b>React</b> and <b>Next.js</b>{' '}
            who enjoys building great quality and great user experience products.
          </p>

          <div className="flex flex-col gap-2 text-zinc-700 dark:text-zinc-400">
            <p>{`A few technologies I've been working with recently:`}</p>
            <ul className="grid grid-cols-2 gap-2">
              {[
                'JavaScript (ES6+)',
                'styled-components',
                'React',
                'TailwindCSS',
                'Next.js',
                'Git',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-400"
                >
                  <TagIcon className="h-4 w-4" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="mt-4 flex items-center gap-4 pt-4">
          {contact.map((item) => (
            <Link key={item.link} href={item.link} aria-label={item.label}>
              <li className="flex items-center gap-2 transition duration-200 ease-in-out hover:text-zinc-500 dark:hover:text-zinc-400">
                {item.icon}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <Container>{page}</Container>;
};
