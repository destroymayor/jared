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
        <Suspense fallback={<div><Skeleton /></div>}>
            <CustomMDXRemote source={content} />
        </Suspense>
    );
}
