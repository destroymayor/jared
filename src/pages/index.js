import Image from 'next/future/image';

import avatar from '@/public/images/me.webp';
import skills from '@/data/skills';

import Container from '@/components/Container';
import Tag from '@/components/Tag';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center gap-12 pb-44 pt-16 md:flex-row-reverse md:gap-6 md:pt-20">
      <div className="group relative flex h-40 w-40 items-center justify-center md:h-52 md:w-52 md:flex-1">
        <div className="absolute inset-0 -z-[1] rounded-[50%] bg-gradient-to-b from-sky-600 via-sky-700 to-sky-800 md:blur-[72px]" />
        <Image
          priority
          src={avatar}
          alt="Jared"
          width={200}
          height={200}
          className="rounded-full"
        />
      </div>

      <div className="flex flex-[2] flex-col items-center gap-4 md:items-start">
        <h1 className="bg-gradient-to-r from-sky-600 via-sky-500 to-sky-500 bg-clip-text text-4xl font-extrabold text-transparent dark:from-sky-700 dark:via-sky-600 dark:to-sky-500 md:text-5xl">
          Jared
        </h1>
        <p className="text-zinc-700 dark:text-zinc-400">Front-End Developer</p>
        <hr className="w-24 border border-zinc-300 dark:border-zinc-700" />

        <p className="text-center leading-7 text-zinc-700 dark:text-zinc-400 md:text-left">
          I&#39;m <b>Jared</b>, a Front-end Developer working with <b>React</b> and <b>Next.js</b>{' '}
          who enjoys building great quality and great user experience products.
        </p>

        <div className="flex flex-col items-center gap-4 text-zinc-700 dark:text-zinc-400 md:items-start">
          <p className="text-center leading-7 md:text-left">{`A few technologies I've been working with recently:`}</p>
          <div className="flex flex-wrap justify-center gap-2 md:justify-start">
            {skills.map((item) => (
              <Tag
                key={item.label}
                type="default"
                label={
                  <>
                    <span className="h-6 w-6">{item.icon}</span>
                    <span>{item.label}</span>
                  </>
                }
              ></Tag>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <Container>{page}</Container>;
};
