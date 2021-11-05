import Header from '@/components/Layout/Header';

const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <div className="flex flex-col items-center h-screen text-gray-700 dark:text-gray-300">
        <Header />
        <main className="flex-grow w-11/12 pb-20 text-gray-700 sm:max-w-2xl dark:text-gray-300">
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
