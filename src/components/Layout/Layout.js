import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <div className="flex flex-col items-center h-screen text-gray-700 dark:text-gray-300">
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
