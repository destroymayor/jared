export const OverviewSkeleton = () => (
    <div className="grid grid-cols-2 gap-2 py-2 md:grid-cols-4">
        {[...Array(4).keys()].map((item) => (
            <div
                key={item}
                className="h-[64px] animate-pulse rounded-xl bg-zinc-300 text-transparent dark:bg-zinc-800"
            />
        ))}
    </div>
);

export const CalendarSkeleton = () => (
    <>
        <div className="h-[104px] animate-pulse rounded-md bg-zinc-300 dark:bg-zinc-800"></div>
        <div className="h-5 w-1/3 animate-pulse rounded-md bg-zinc-300 px-2 dark:bg-zinc-800" />
    </>
);
