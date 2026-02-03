import { Suspense } from 'react';
import { CustomMDXRemote } from '@/components/MdxRemote';
import { Skeleton } from '@/components/ui/skeleton';

type Props = {
    content: string;
};

export function SnippetDetailViewController({ content }: Props) {
    return (
        <Suspense
            fallback={
                <div className="flex flex-col gap-4">
                    <Skeleton className="h-[56px] w-2/4" />
                    <Skeleton className="h-[56px] w-3/4" />
                    <Skeleton className="h-10 w-4/5" />
                    <Skeleton className="h-10 w-full" />
                    <Skeleton className="h-10 w-full" />
                </div>
            }
        >
            <CustomMDXRemote source={content} />
        </Suspense>
    );
}
