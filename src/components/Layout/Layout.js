import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import clsx from 'clsx';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

export default function Layout(props) {
  const { children } = props;
  const router = useRouter();

  return (
    <div
      className={clsx(
        'flex h-screen flex-col items-center',
        'bg-zinc-50 text-zinc-700 dark:bg-black dark:text-zinc-300'
      )}
    >
      <Header />

      <motion.main
        className="w-11/12 flex-grow pb-12 text-zinc-700 dark:text-zinc-300 sm:max-w-[686px]"
        key={router.route}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.2 },
        }}
      >
        {children}
      </motion.main>

      <Footer />
    </div>
  );
}
