export default function Loading() {
    return (
        <div className="flex flex-col gap-3 pt-2 md:pt-8">
            <div className="h-[50px] w-2/3 animate-pulse rounded-xl bg-zinc-300 dark:bg-zinc-800" />
            <div className="h-[30px] w-3/4 animate-pulse rounded-xl bg-zinc-300 dark:bg-zinc-800" />
            <div className="mt-2 h-[350px] animate-pulse rounded-xl bg-zinc-300 dark:bg-zinc-800" />
        </div>
    );
}
