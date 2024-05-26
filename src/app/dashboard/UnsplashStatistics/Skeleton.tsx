const Skeleton = () => {
    return (
        <div className="grid grid-cols-1 gap-2 py-2 sm:grid-cols-2">
            <div className="h-[64px] animate-pulse rounded-xl bg-zinc-300 text-transparent dark:bg-zinc-800" />
            <div className="h-[64px] animate-pulse rounded-xl bg-zinc-300 text-transparent dark:bg-zinc-800" />
            <div className="h-[64px] animate-pulse rounded-xl bg-zinc-300 text-transparent dark:bg-zinc-800" />
            <div className="h-[64px] animate-pulse rounded-xl bg-zinc-300 text-transparent dark:bg-zinc-800" />
        </div>
    );
};

export default Skeleton;
