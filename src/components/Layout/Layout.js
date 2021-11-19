import Header from '@/components/Layout/Header';

export default function Layout(props) {
  const { children } = props;

  return (
    <div className="flex flex-col items-center h-screen text-gray-700 bg-gray-50 dark:bg-black dark:text-gray-300">
      <Header />
      <main className="flex-grow w-11/12 pb-20 text-gray-700 sm:max-w-2xl dark:text-gray-300">
        {children}
      </main>
    </div>
  );
}
