import { useRef } from 'react';

import { useTheme } from 'next-themes';
import useHasMounted from '@/hooks/use-has-mounted.hook';

import Highlight, { defaultProps } from 'prism-react-renderer';
import githubTheme from 'prism-react-renderer/themes/github';
import oceanicNextTheme from 'prism-react-renderer/themes/vsDark';

type Props = {
  className: string;
  children: any;
};

export default function CodeBlock(props: Props) {
  const { children, className } = props;
  const textInput = useRef(null);
  const { resolvedTheme } = useTheme();
  const hasMounted = useHasMounted();

  const language: any = className?.replace(/language-/, '');
  const codeBlockTheme: any = resolvedTheme === 'light' ? githubTheme : oceanicNextTheme;

  if (!hasMounted) return null;

  if (!language)
    return (
      <code className="whitespace-nowrap rounded-md bg-zinc-300 px-2 py-1 dark:bg-zinc-800">
        {children}
      </code>
    );

  return (
    <Highlight {...defaultProps} code={children} theme={codeBlockTheme} language={language}>
      {({ tokens, getLineProps, getTokenProps }) => (
        <div className="relative -mx-4 mt-6 mb-20 flex flex-col items-start border border-zinc-100 bg-zinc-100 px-2 dark:border-zinc-900 dark:bg-zinc-900 sm:mx-[calc(100vw-103vw)] sm:rounded-xl md:mx-0">
          <span className="absolute -top-[33px] right-10 rounded-t-lg border-b border-b-zinc-100 bg-zinc-100 px-4 py-1 font-bold text-zinc-700 dark:border-zinc-900 dark:bg-zinc-900 dark:text-zinc-400">
            {language?.toUpperCase() ?? 'unknown'}
          </span>
          <pre ref={textInput} className="w-full overflow-auto px-4 pt-6 pb-3">
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })} className="relative table-row" key={i}>
                <span className="table-cell">
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </span>
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  );
}
