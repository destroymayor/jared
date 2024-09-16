import { Skeleton } from '@/components/ui/skeleton';

export const OverviewSkeleton = () => (
    <div className="grid grid-cols-2 gap-2 py-2 md:grid-cols-4">
        {[...Array(4).keys()].map((item) => (
            <Skeleton
                key={item}
                className="h-[64px] rounded-xl bg-zinc-300 text-transparent dark:bg-zinc-800"
            />
        ))}
    </div>
);

export const CalendarSkeleton = () => (
    <>
        <Skeleton className="h-[104px] rounded-md bg-zinc-300 dark:bg-zinc-800"></Skeleton>
        <Skeleton className="h-5 w-1/3 rounded-md bg-zinc-300 px-2 dark:bg-zinc-800" />
    </>
);
