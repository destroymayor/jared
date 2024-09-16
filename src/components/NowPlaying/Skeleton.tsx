import { Skeleton } from '@/components/ui/skeleton';

export default function NowPlayingSkeleton() {
    return (
        <div className="flex h-[60px] items-center gap-4">
            <Skeleton className="h-7 w-7 rounded-full bg-zinc-200 dark:bg-zinc-800"></Skeleton>
            <div className="flex flex-col gap-2">
                <Skeleton className="h-4 w-24 rounded-md bg-zinc-200 dark:bg-zinc-800"></Skeleton>
                <Skeleton className="h-4 w-14 rounded-md bg-zinc-200 dark:bg-zinc-800"></Skeleton>
            </div>
        </div>
    );
}
