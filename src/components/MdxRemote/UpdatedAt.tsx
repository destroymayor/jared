const UpdatedAt = ({ dateTime }: { dateTime: string }) => {
    const formatDate = new Intl.DateTimeFormat('en', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    }).format(new Date(dateTime));

    return (
        <span className="flex justify-center gap-2 py-10 text-sm italic text-zinc-600 dark:text-zinc-400 sm:text-base">
            <span>Last Updated:</span>
            <time dateTime={dateTime} className="font-semibold">
                {formatDate}
            </time>
        </span>
    );
};

export default UpdatedAt;
