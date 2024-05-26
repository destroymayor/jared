import { Suspense } from 'react';
import MDXRemote, { COMPONENTS } from '@/helpers/mdx-components.helper';
import { getMDXSourcePaths, getMDXSource } from '@/helpers/mdx.helpers';

import Loading from './loading';

type ParamsType = {
    params: {
        lang: string;
        slug: string;
    };
};

export async function generateMetadata({ params }: ParamsType) {
    const { lang, slug } = params;

    const { data } = await getMDXSource({
        dirPath: `content/snippet/${lang}`,
        slug,
    });

    const { title, description } = data;

    return { title, description };
}

export async function generateStaticParams() {
    const paths = await getMDXSourcePaths('content/snippet');

    return paths;
}

export default async function Page({ params }: ParamsType) {
    const { lang, slug } = params;

    const { mdxSource, data } = await getMDXSource({
        dirPath: `content/snippet/${lang}`,
        slug,
    });

    const { title, description, date } = data;

    const formatDate = date
        ? new Intl.DateTimeFormat('en', {
              weekday: 'long',
              year: 'numeric',
              month: 'short',
              day: 'numeric',
          }).format(new Date(date))
        : 'unknown';

    return (
        <Suspense fallback={<Loading />}>
            <header className="pt-2 md:pt-8">
                <h1 className="py-2 text-4xl font-extrabold">{title}</h1>
                <p className="pt-2 text-zinc-600 dark:text-zinc-400">{description}</p>
            </header>
            <div className="my-6 border-b border-dashed border-zinc-300 dark:border-zinc-700" />
            <MDXRemote {...mdxSource} components={COMPONENTS} />
            <span className="flex justify-center gap-2 pb-10 text-sm italic text-zinc-600 dark:text-zinc-400 sm:text-base">
                <span>Last Updated:</span>
                <time dateTime={date} className="font-semibold">
                    {formatDate}
                </time>
            </span>
        </Suspense>
    );
}
