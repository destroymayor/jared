import Head from '@/components/Head/Head';

import { EmojiSadIcon } from '@heroicons/react/outline';

const NotFound = () => {
  return (
    <>
      <Head title="Page not found" />

      <div className="flex flex-col items-center justify-center h-full gap-y-10">
        <EmojiSadIcon className="w-20 h-20" />

        <p className="text-lg">This page cannot be found.</p>
      </div>
    </>
  );
};

export default NotFound;
