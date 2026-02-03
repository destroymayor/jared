import Link from 'next/link';

import { cn } from '@/lib/utils';
import { getCategoryFormatted } from '@/helpers/category.helper';

type SnippetsType = {
    category: string;
    date: string;
    description: string;
    slug: string;
    title: string;
    [key: string]: unknown;
};

type Props = {
    snippets: SnippetsType[];
};

export function SnippetsViewController({ snippets }: Props) {
    return (
        <>
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
                        className="group mt-2 flex cursor-pointer gap-6 rounded-md p-4 transition-all duration-150 ease-out"
                    >
                        <div className="min-h-8 min-w-8 pt-2">{languageIcon}</div>
                        <div>
                            <h2 className="pb-2 text-lg font-bold group-hover:text-sky-600">
                                {title}
                            </h2>
                            <p className="pb-2 text-sm text-zinc-600 dark:text-zinc-400">
                                {description}
                            </p>
                            <div
                                className={cn(
                                    'flex flex-col gap-2',
                                    'text-sm tracking-tighter text-zinc-600 italic dark:text-zinc-400'
                                )}
                            >
                                <span>Category: {category}</span>
                                <span>Last Updated: {formatDate}</span>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </>
    );
}
