import { Skeleton } from '@/components/ui/skeleton';

const TopTracksSkeleton = () => {
    return (
        <div className="flex flex-col">
            {[...Array(4).keys()].map((item) => (
                <div key={item} className="flex h-[76px] w-full items-center gap-4">
                    <Skeleton className="min-h-[60px] min-w-[60px] rounded-md bg-zinc-300 dark:bg-zinc-800" />
                    <div className="flex w-3/5 grow flex-col gap-2 md:w-full">
                        <Skeleton className="h-5 w-3/4 rounded-md bg-zinc-300 dark:bg-zinc-800" />
                        <Skeleton className="h-5 w-2/4 rounded-md bg-zinc-300 dark:bg-zinc-800" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TopTracksSkeleton;
