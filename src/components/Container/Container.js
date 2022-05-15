import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import NextHead from '@/components/NextHead';
import Header from '@/components/Container/Header';
import Footer from '@/components/Container/Footer';

export default function Container(props) {
  const { children, ...customMeta } = props;
  const router = useRouter();

  const meta = {
    description: `Hey, I'm Jared, a Front-end Developer.`,
    ...customMeta,
  };

  return (
    <div className="flex h-screen flex-col items-center bg-zinc-50 text-zinc-700 dark:bg-black dark:text-zinc-300">
      <NextHead title={meta?.title} description={meta?.description} />

      <Header />

      <motion.main
        key={router.route}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.2 } }}
        className="relative w-11/12 flex-grow text-zinc-700 dark:text-zinc-300 sm:max-w-[686px]"
      >
        {children}
      </motion.main>

      <Footer />
    </div>
  );
}
