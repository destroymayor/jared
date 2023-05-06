export default function Skeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="relative left-1/2 right-1/2 -ml-[49vw] -mr-[50vw] grid min-h-screen w-[97vw] gap-2 pt-4 [grid-template-columns:repeat(auto-fill,minmax(100%,1fr))] sm:px-2 sm:[grid-template-columns:repeat(auto-fill,minmax(440px,1fr))] md:w-[98vw]">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="group relative h-[700px] min-w-full animate-pulse rounded-md bg-zinc-300 dark:bg-zinc-800 sm:min-w-[440px]"
        />
      ))}
    </div>
  );
}
