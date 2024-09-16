import { Skeleton } from '@/components/ui/skeleton';

const PhotosSkeleton = () => {
    return (
        <div className="relative left-1/2 right-1/2 -ml-[49vw] -mr-[50vw] grid min-h-screen w-[97vw] gap-2 pt-4 [grid-template-columns:repeat(auto-fill,minmax(100%,1fr))] sm:px-2 sm:[grid-template-columns:repeat(auto-fill,minmax(440px,1fr))] md:w-[98vw]">
            {Array.from({ length: 6 }).map((_, index) => (
                <Skeleton
                    key={index}
                    className="group relative h-[700px] min-w-full rounded-md bg-zinc-300 dark:bg-zinc-800 sm:min-w-[440px]"
                />
            ))}
        </div>
    );
};

export default PhotosSkeleton;
