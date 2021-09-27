import Head from '@/components/Head/Head';

const NotFound = () => {
  return (
    <>
      <Head title="404" />

      <div className="flex flex-col items-center justify-center h-full gap-y-10">
        <h1 className="text-5xl">404</h1>
        <p className="text-lg">This page cannot be found.</p>
      </div>
    </>
  );
};

export default NotFound;
