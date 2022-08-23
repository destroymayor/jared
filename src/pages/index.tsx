import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';

import Image from 'next/future/image';
import { motion } from 'framer-motion';

import avatar from '@/public/images/me.webp';
import skills from '@/data/skills';

import Container from '@/components/Container';
import Tag from '@/components/Tag';

const Page: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col items-center pb-44 pt-6 md:flex-row-reverse md:gap-6">
      <div className="relative mx-auto h-52 w-52 md:h-64 md:w-64 md:flex-1">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.8 } }}
          className="absolute left-1/2 top-1/2 h-40 w-40 rounded-[50%] blur-[32px] [transform:translate(-50%,-50%)] [background-image:linear-gradient(-45deg,rgb(78,70,229)50%,rgb(2,133,199)50%)] md:h-52 md:w-52 md:blur-[56px]"
        />
        <Image
          priority
          src={avatar}
          alt="Jared"
          width={150}
          height={150}
          className="absolute left-1/2 top-1/2 h-32 w-32 rounded-full [transform:translate(-50%,-50%)] md:h-40 md:w-40"
        />
      </div>

      <div className="flex flex-[2] flex-col items-center gap-3 md:items-start">
        <h1 className="bg-gradient-to-r from-sky-600 via-sky-500 to-sky-500 bg-clip-text text-4xl font-extrabold text-transparent dark:from-sky-700 dark:via-sky-600 dark:to-sky-500 md:text-4xl">
          Jared
        </h1>
        <p className="text-zinc-700 dark:text-zinc-400">Front-End Developer</p>

        <hr className="w-28 border border-zinc-300 dark:border-zinc-700" />

        <p className="text-center text-sm leading-7 text-zinc-700 dark:text-zinc-400 md:text-left">
          I&#39;m <b>Jared</b>, a Front-end Developer working with <b>React</b> and <b>Next.js</b>{' '}
          who enjoys building great quality and great user experience products.
        </p>

        <div className="flex flex-col items-center gap-2 text-sm text-zinc-700 dark:text-zinc-400 md:items-start">
          <p className="text-center leading-7 md:text-left">{`A few technologies I've been working with recently:`}</p>

          <ul className="flex flex-wrap justify-center gap-2 md:justify-start">
            {skills.map((item) => (
              <li key={item.label}>
                <Tag
                  type="default"
                  label={
                    <>
                      <span className="h-6 w-6">{item.icon}</span>
                      <span>{item.label}</span>
                    </>
                  }
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Container>{page}</Container>;
};

export default Page;
