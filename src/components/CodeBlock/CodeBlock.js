import { useRef } from 'react';

import { useTheme } from 'next-themes';

import Highlight, { defaultProps } from 'prism-react-renderer';
import vsLight from 'prism-react-renderer/themes/vsLight';
import vsDark from 'prism-react-renderer/themes/vsDark';

export default function CodeBlock({ children, className }) {
  const textInput = useRef(null);
  const { theme } = useTheme();

  const language = className?.replace(/language-/, '');
  const codeBlockTheme = theme === 'light' ? vsLight : vsDark;

  if (!language)
    return (
      <code className="whitespace-nowrap rounded-md bg-zinc-300 px-2 py-1 dark:bg-zinc-800">
        {children}
      </code>
    );

  return (
    <Highlight {...defaultProps} code={children} theme={codeBlockTheme} language={language}>
      {({ tokens, getLineProps, getTokenProps }) => (
        <div className="relative -mx-4 my-14 flex flex-col items-start border border-zinc-100 bg-zinc-100 px-2 dark:border-zinc-800 dark:bg-zinc-800 sm:mx-[calc(100vw-103vw)] sm:rounded-xl md:mx-0">
          <span className="absolute -top-[33px] right-10 rounded-t-lg border-b border-b-zinc-100 bg-zinc-100 px-4 py-1 font-bold text-zinc-700 dark:border-zinc-800 dark:bg-zinc-800 dark:text-zinc-400">
            {language?.toUpperCase() ?? 'unknown'}
          </span>
          <pre ref={textInput} className="w-full overflow-auto pt-6 pb-3">
            {tokens.map((line, i) => (
              <div className="relative table-row" key={i} {...getLineProps({ line, key: i })}>
                <span className="absolute left-2 table-cell w-6 min-w-[24px] select-none bg-zinc-100 pr-2 text-right text-zinc-400 dark:bg-zinc-800 dark:text-zinc-400">
                  {i + 1}
                </span>
                <span className="table-cell pl-8">
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
