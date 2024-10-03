import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

const PhotosSkeleton = () => {
    return (
        <div
            className={cn(
                'columns-1 gap-4 sm:columns-2 lg:columns-3',
                'relative left-1/2 right-1/2',
                'w-[97vw] md:w-[98vw]',
                '-ml-[49vw] -mr-[50vw] pt-4 sm:px-2'
            )}
        >
            {Array.from({ length: 6 }).map((_, index) => (
                <Skeleton
                    key={index}
                    className="mb-4 min-w-full rounded-lg bg-zinc-300 dark:bg-zinc-800"
                    style={{ height: `calc(300px + ${index * 30}px)` }}
                />
            ))}
        </div>
    );
};

export default PhotosSkeleton;
