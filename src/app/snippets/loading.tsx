import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
    const items = [...Array(4).keys()];

    return (
        <>
            {items.map((item) => (
                <div key={item} className="flex items-center gap-4 p-2">
                    <Skeleton className="h-[60px] w-10 rounded-xl bg-zinc-300 dark:bg-zinc-800" />
                    <div className="flex w-full flex-col gap-2">
                        <Skeleton className="h-[40px] w-2/4 rounded-xl bg-zinc-300 dark:bg-zinc-800" />
                        <Skeleton className="h-[35px] w-4/5 rounded-xl bg-zinc-300 dark:bg-zinc-800" />
                    </div>
                </div>
            ))}
        </>
    );
}
