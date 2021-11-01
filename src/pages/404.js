import { EmojiSadIcon } from '@heroicons/react/outline';

Custom404.title = 'Page not found';

export default function Custom404() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-full gap-y-10">
        <EmojiSadIcon className="w-20 h-20" />

        <p className="text-lg">This page cannot be found.</p>
      </div>
    </>
  );
}
