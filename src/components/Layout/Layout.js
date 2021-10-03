import RandomCircleBg from '@/components/Layout/RandomCircleBg';

import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <div className="relative flex flex-col items-center h-screen overflow-x-hidden text-gray-700 dark:text-gray-300">
        <RandomCircleBg />
        <Header />
        <main className="flex-grow w-11/12 pb-8 text-gray-700 md:max-w-2xl dark:text-gray-300">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
