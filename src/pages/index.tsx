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
    <div className="flex flex-col gap-4 pb-44 pt-6 sm:flex-row-reverse sm:items-center">
      <div className="relative hidden h-56 w-56 items-center justify-center sm:flex">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.8 } }}
          className="absolute left-1/2 top-1/2 -z-[1] h-52 w-52 rounded-[50%] blur-[56px] [transform:translate(-50%,-50%)] [background-image:linear-gradient(-45deg,rgb(78,70,229)50%,rgb(2,133,199)50%)]"
        />
        <Image
          priority
          src={avatar}
          alt="Jared"
          width={150}
          height={150}
          className="h-24 w-24 rounded-full sm:h-40 sm:w-40"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3">
        <h1 className="bg-gradient-to-r from-sky-600 via-sky-500 to-sky-500 bg-clip-text text-4xl font-extrabold text-transparent dark:from-sky-700 dark:via-sky-600 dark:to-sky-500 sm:text-4xl">
          Jared
        </h1>
        <h2 className="text-zinc-700 dark:text-zinc-400">Front-End Developer</h2>

        <hr className="w-28 border border-zinc-300 dark:border-zinc-700" />

        <p className="pt-3 text-sm leading-7 text-zinc-700 dark:text-zinc-400">
          I&#39;m <b>Jared Chen</b>, a Front-end Developer working with <b>React</b> and{' '}
          <b>Next.js</b> who enjoys building great quality and great user experience products.
        </p>

        <div className="flex flex-col gap-2 text-sm text-zinc-700 dark:text-zinc-400 ">
          <p className="leading-7">{`A few technologies I've been working with recently:`}</p>

          <ul className="flex flex-wrap gap-2">
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
