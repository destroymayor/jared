import { Skeleton } from '@/components/ui/skeleton';

const UnsplashStatisticsSkeleton = () => {
    return (
        <div className="grid grid-cols-1 gap-2 py-2 sm:grid-cols-2">
            <Skeleton className="h-[64px] rounded-xl bg-zinc-300 text-transparent dark:bg-zinc-800" />
            <Skeleton className="h-[64px] rounded-xl bg-zinc-300 text-transparent dark:bg-zinc-800" />
            <Skeleton className="h-[64px] rounded-xl bg-zinc-300 text-transparent dark:bg-zinc-800" />
            <Skeleton className="h-[64px] rounded-xl bg-zinc-300 text-transparent dark:bg-zinc-800" />
        </div>
    );
};

export default UnsplashStatisticsSkeleton;
