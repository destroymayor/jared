export default function Loading() {
  return (
    <div className="flex flex-col gap-4">
      <div className="h-[35px] w-2/4 animate-pulse rounded-xl bg-zinc-300 text-transparent dark:bg-zinc-900" />
      <div className="h-[35px] w-2/3 animate-pulse rounded-xl bg-zinc-300 text-transparent dark:bg-zinc-900" />
      <div className="h-[35px] w-3/4 animate-pulse rounded-xl bg-zinc-300 text-transparent dark:bg-zinc-900" />
      <div className="h-[35px] w-3/4 animate-pulse rounded-xl bg-zinc-300 text-transparent dark:bg-zinc-900" />
    </div>
  );
}
