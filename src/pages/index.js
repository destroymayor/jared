import Image from 'next/image';
import { motion } from 'framer-motion';

import contact from '@/data/contact';
import avatar from '@/public/images/avatar.webp';

import Container from '@/components/Container';
import Link from '@/components/Link';

export default function HomePage() {
  return (
    <div className="flex h-full flex-col items-center pt-20 sm:pt-32">
      <motion.div
        initial={{ scale: 0 }}
        animate={{
          scale: [0.2, 0.6, 1, 0.9, 1],
        }}
        className="flex items-center justify-center rounded-full bg-gradient-to-r from-green-700 via-cyan-600 to-sky-700 p-1"
      >
        <Image src={avatar} alt="Jared" width={120} height={120} className="rounded-full" />
      </motion.div>

      <div className="flex flex-col items-center gap-2 pt-10">
        <h1 className="text-4xl">Jared</h1>
        <p className="text-zinc-700 dark:text-zinc-400">Front-End Developer</p>
        <hr className="my-2 w-20 border border-zinc-300 dark:border-zinc-700" />

        <p className="text-center text-zinc-700 dark:text-zinc-400">
          I&#39;m <b>Jared</b>, a Front-end Developer working with <b>React</b> and <b>Next.js</b>{' '}
          who enjoys building great quality and great user experience products.
        </p>
      </div>

      <ul className="mt-4 flex items-center justify-center gap-4 pt-4">
        {contact.map((item) => (
          <Link key={item.link} href={item.link} aria-label={item.label}>
            <li className="flex items-center gap-2 transition duration-200 ease-in-out hover:text-zinc-500 dark:hover:text-zinc-400">
              {item.icon}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <Container>{page}</Container>;
};
