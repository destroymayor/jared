'use client';

import { useTheme } from 'next-themes';
import useHasMounted from '@/hooks/use-has-mounted.hook';
import { Highlight, themes } from 'prism-react-renderer';

export default function CodeBlock(props: { className?: string; children: any }) {
    const { children, className } = props;
    const { resolvedTheme } = useTheme();
    const hasMounted = useHasMounted();

    const language = className?.replace(/language-/, '');
    const codeBlockTheme =
        resolvedTheme === 'light' ? themes.nightOwlLight : themes.vsDark;

    if (!hasMounted) return null;

    if (!language)
        return (
            <code className="whitespace-nowrap rounded-md bg-zinc-300 px-2 py-1 dark:bg-zinc-800">
                {children}
            </code>
        );

    return (
        <Highlight code={children} theme={codeBlockTheme} language={language}>
            {({ tokens, getLineProps, getTokenProps }) => (
                <div className="relative -mx-4 mb-20 mt-6 flex flex-col items-start border border-zinc-100 bg-zinc-100 px-2 dark:border-zinc-900 dark:bg-zinc-900 sm:mx-[calc(100vw-103vw)] sm:rounded-xl md:mx-0">
                    <span className="absolute -top-[33px] right-10 rounded-t-lg border-b border-b-zinc-100 bg-zinc-100 px-4 py-1 font-bold text-zinc-700 dark:border-zinc-900 dark:bg-zinc-900 dark:text-zinc-400">
                        {language?.toUpperCase() ?? 'unknown'}
                    </span>
                    <pre className="w-full overflow-auto px-4 pb-3 pt-6">
                        {tokens.map((line, i) => {
                            const { key, ...rest } = getLineProps({
                                line,
                                key: i,
                                className: 'relative table-row',
                            });

                            return (
                                <div key={`${key}-${line}`} {...rest}>
                                    <span className="table-cell">
                                        {line.map((token, key) => {
                                            const { key: tokenKey, ...rest } =
                                                getTokenProps({ token, key });
                                            return <span key={`${tokenKey}`} {...rest} />;
                                        })}
                                    </span>
                                </div>
                            );
                        })}
                    </pre>
                </div>
            )}
        </Highlight>
    );
}
