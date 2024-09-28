import { Suspense } from 'react';
import Link from 'next/link';

import { getCategoryFormatted } from '@/helpers/category.helper';
import { getAllMDXFolder } from '@/helpers/mdx.helpers';
import Loading from './loading';

export const metadata = {
    title: 'Snippets',
    description: 'Collection of useful code snippets.',
};

type SnippetsType = {
    category: string;
    date: string;
    description: string;
    slug: string;
    title: string;
    [key: string]: unknown;
};

export default async function Page() {
    const { title, description } = metadata;
    const snippets = await getAllMDXFolder('content/snippets');

    return (
        <Suspense fallback={<Loading />}>
            <div className="pt-2 md:pt-8">
                <h1 className="py-2 text-4xl font-extrabold">{title}</h1>
                <p className="max-w-[60ch] pt-2 dark:text-zinc-400">{description}</p>
                <div className="my-6 border-b border-dashed border-zinc-300 dark:border-zinc-700" />
            </div>
            {snippets.map((snippet: SnippetsType) => {
                const { title, description, category, slug, date } = snippet;

                if (!date) return null;

                const languageIcon = getCategoryFormatted(category)?.icon;
                const formatDate = new Intl.DateTimeFormat('en', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                }).format(new Date(date));

                return (
                    <Link
                        href={slug}
                        key={title + category}
                        className="group mt-4 flex cursor-pointer gap-6 rounded-md p-4 transition-all duration-150 ease-out"
                    >
                        <div className="h-8 w-8 pt-2">{languageIcon}</div>
                        <div>
                            <h2 className="text-lg font-bold group-hover:text-sky-600">
                                {title}
                            </h2>
                            <p className="pb-2 text-sm text-zinc-600 dark:text-zinc-400">
                                {description}
                            </p>
                            <span className="text-sm italic tracking-tighter text-zinc-600 dark:text-zinc-400">
                                {formatDate}
                            </span>
                        </div>
                    </Link>
                );
            })}
        </Suspense>
    );
}
