import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import SEO from '@/components/SEO';
import Header from '@/components/Container/Header';
import Footer from '@/components/Container/Footer';

type Props = {
  children: ReactNode;
  title?: string;
  description?: string;
};

export default function Container(props: Props) {
  const { children, title, description } = props;
  const router = useRouter();

  return (
    <div className="flex h-screen flex-col items-center">
      <SEO title={title} description={description} />

      <Header />

      <motion.main
        key={router.route}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.2 } }}
        className="relative w-full max-w-2xl flex-grow px-4"
      >
        {children}
      </motion.main>

      <Footer />
    </div>
  );
}
