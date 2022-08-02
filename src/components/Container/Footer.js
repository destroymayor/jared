import NowPlaying from '@/components/NowPlaying';

export default function Footer() {
  return (
    <footer className="mt-12 flex w-full max-w-2xl flex-col items-start gap-3 border-t border-dashed border-zinc-300 py-6 dark:border-zinc-700 sm:flex-row sm:items-end sm:justify-between">
      <NowPlaying />

      <div className="flex items-end gap-2 text-sm dark:text-zinc-400">
        <span className="text-xl">©</span>
        <span>{new Date().getFullYear()}</span>
        <span className="text-zinc-400 dark:text-zinc-600">-</span>
        <span>
          <span>he</span>
          <span className="text-zinc-400 dark:text-zinc-600">/</span>
          <span>him</span>
        </span>
      </div>
    </footer>
  );
}
