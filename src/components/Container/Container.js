import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import SEO from '@/components/SEO';
import Header from '@/components/Container/Header';
import Footer from '@/components/Container/Footer';

export default function Container(props) {
  const { children, ...customMeta } = props;
  const router = useRouter();

  return (
    <div className="flex h-screen flex-col items-center px-4 sm:px-8">
      <SEO title={customMeta?.title} description={customMeta?.description} />

      <Header />

      <motion.main
        key={router.route}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.2 } }}
        className="relative w-full max-w-2xl flex-grow"
      >
        {children}
      </motion.main>

      <Footer />
    </div>
  );
}
