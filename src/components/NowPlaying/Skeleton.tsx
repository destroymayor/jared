export default function Skeleton() {
    return (
        <div className="flex h-[60px] items-center gap-4">
            <span className="h-7 w-7 animate-pulse rounded-full bg-zinc-200 dark:bg-zinc-800"></span>
            <div className="flex flex-col gap-2">
                <span className="h-4 w-24 animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-800"></span>
                <span className="h-4 w-14 animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-800"></span>
            </div>
        </div>
    );
}
