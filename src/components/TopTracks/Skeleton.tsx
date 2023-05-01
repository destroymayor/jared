export default function Skeleton() {
  const skeletonItems = [...Array(4).keys()];

  return (
    <div className="flex flex-col">
      {skeletonItems.map((item) => (
        <div key={item} className="flex h-[76px] w-full items-center gap-4">
          <div className="min-h-[60px] min-w-[60px] animate-pulse rounded-md bg-zinc-300 dark:bg-zinc-800" />
          <div className="flex w-3/5 flex-grow flex-col gap-2 md:w-full">
            <div className="h-5 w-3/4 animate-pulse rounded-md bg-zinc-300 dark:bg-zinc-800" />
            <div className="h-5 w-2/4 animate-pulse rounded-md bg-zinc-300 dark:bg-zinc-800" />
          </div>
        </div>
      ))}
    </div>
  );
}
