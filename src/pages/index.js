import Image from 'next/image';

import avatar from '@/public/images/me.webp';

import Container from '@/components/Container';
import skills from '@/data/skills';

export default function HomePage() {
  return (
    <div className="flex flex-col items-start gap-12 pt-6 md:flex-row-reverse md:gap-6 md:pt-20">
      <div className="flex justify-center md:flex-1">
        <div className="group relative h-[200px] w-[200px]">
          <Image src={avatar} alt="Jared" width={200} height={200} className="z-10 rounded-md" />
          <div className="absolute -right-4 -bottom-4 flex h-[200px] w-[200px] items-center justify-center rounded-md bg-gradient-to-r from-violet-700 via-cyan-700 to-sky-700 transition-all duration-200 ease-in-out group-hover:-right-3 group-hover:-bottom-3">
            <div className="h-[193px] w-[193px] rounded bg-zinc-50 dark:bg-black"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-[2] flex-col gap-4">
        <h1 className="text-4xl">Jared</h1>
        <p className="text-zinc-700 dark:text-zinc-400">Front-End Developer</p>
        <hr className="w-20 border border-zinc-300 dark:border-zinc-700" />

        <p className="text-zinc-700 dark:text-zinc-400">
          I&#39;m <b>Jared</b>, a Front-end Developer working with <b>React</b> and <b>Next.js</b>{' '}
          who enjoys building great quality and great user experience products.
        </p>

        <div className="flex flex-col gap-3 text-zinc-700 dark:text-zinc-400">
          <p>{`A few technologies I've been working with recently:`}</p>
          <ul className="grid grid-cols-2 gap-3">
            {skills.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-400"
              >
                <span className="h-6 w-6">{item.icon}</span>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <Container>{page}</Container>;
};
