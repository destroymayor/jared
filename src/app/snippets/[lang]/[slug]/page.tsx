import { Suspense } from 'react';
import { CustomMDXRemote } from '@/components/MDX';
import { getMDXSourcePaths, getMDXSource } from '@/helpers/mdx.helpers';

export async function generateStaticParams() {
    const paths = await getMDXSourcePaths('content/snippets');

    return paths;
}

export default async function Page({
    params,
}: {
    params: {
        lang: string;
        slug: string;
    };
}) {
    const { lang, slug } = params;

    const { content } = await getMDXSource({
        dirPath: `content/snippets/${lang}`,
        slug,
    });

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <CustomMDXRemote source={content} />
        </Suspense>
    );
}
