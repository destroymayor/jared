import { Suspense } from 'react';
import { CustomMDXRemote } from '@/components/MdxRemote';
import { getMDXSourcePaths, getMDXSource } from '@/helpers/mdx.helpers';
import { Skeleton } from '@/components/ui/skeleton';

export async function generateStaticParams() {
    const paths = await getMDXSourcePaths('content/snippets');

    return paths;
}

type Params = Promise<{
    lang: string;
    slug: string;
}>;

export default async function Page({ params }: { params: Params }) {
    const { lang, slug } = await params;

    const { content } = await getMDXSource({
        dirPath: `content/snippets/${lang}`,
        slug,
    });

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
