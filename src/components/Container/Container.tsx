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
    <div className="mx-auto flex min-h-screen max-w-[720px] flex-col">
      <SEO title={title} description={description} />

      <Header />

      <motion.main
        key={router.route}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.15 } }}
        className="relative flex-grow px-4"
      >
        {children}
      </motion.main>

      <Footer />
    </div>
  );
}
