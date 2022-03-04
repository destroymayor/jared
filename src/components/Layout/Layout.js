import CommandPalette from '@/components/CommandPalette';

export default function Layout(props) {
  const { children } = props;

  return (
    <div className="flex h-screen flex-col items-center bg-gray-50 text-gray-700 dark:bg-black dark:text-gray-300">
      <header className="flex w-11/12 items-center justify-between pt-8 pb-6 sm:max-w-2xl">
        <CommandPalette />
      </header>

      <main className="w-11/12 flex-grow pb-20 text-gray-700 dark:text-gray-300 sm:max-w-2xl">
        {children}
      </main>
    </div>
  );
}
