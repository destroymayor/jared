import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

import CircleSpring from '@/components/Common/CircleSpring';

const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <div className="relative flex flex-col items-center h-screen overflow-x-hidden text-gray-700 dark:text-gray-300">
        <CircleSpring
          className="absolute bg-blue-300 rounded-full h-36 w-36 dark:bg-blue-700"
          style={{
            zIndex: -1,
            top: -60,
            right: -40,
          }}
          delay={350}
        />

        <CircleSpring
          className="absolute bg-blue-300 rounded-full h-52 w-52 dark:bg-blue-600"
          style={{
            zIndex: -1,
            top: 750,
            left: -100,
          }}
          delay={350}
        />

        <CircleSpring
          className="absolute bg-blue-300 rounded-full h-52 w-52 dark:bg-blue-400"
          style={{
            zIndex: -1,
            bottom: 0,
            right: -100,
          }}
          delay={350}
        />

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
