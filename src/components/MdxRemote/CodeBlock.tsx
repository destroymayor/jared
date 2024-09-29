import { codeToHtml } from 'shiki';

import { cn } from '@/lib/utils';

export default async function CodeBlock(props: { className?: string; children: any }) {
    const { children, className } = props;
    console.log(props);

    const language = className?.replace(/language-/, '') ?? '';

    const out = await codeToHtml(children, {
        lang: language,
        themes: {
            light: 'vitesse-light',
            dark: 'min-dark',
        },
        defaultColor: 'dark',
    });

    return (
        <div className={cn('relative flex flex-col items-start', '-mx-4 my-4 md:mx-0')}>
            <span
                className={cn(
                    'absolute top-2 right-3',
                    'font-bold text-xs text-zinc-700 dark:text-zinc-400',
                )}
            >
                {language.toUpperCase()}
            </span>
            <div className="w-full overflow-hidden" dangerouslySetInnerHTML={{ __html: out }} />
        </div>
    );
}
