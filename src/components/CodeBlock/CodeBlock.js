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
      <code className="whitespace-nowrap rounded-md bg-zinc-300 p-1 dark:bg-zinc-800">
        {children}
      </code>
    );

  return (
    <Highlight {...defaultProps} code={children} theme={codeBlockTheme} language={language}>
      {({ tokens, getLineProps, getTokenProps }) => (
        <div className="relative my-10 mx-[-10px] flex flex-col items-start rounded-xl border border-zinc-300 bg-zinc-100 px-2 dark:border-zinc-700 dark:bg-black sm:mx-0">
          <span className="absolute -top-[34px] right-10 rounded-t-lg border border-zinc-300 bg-zinc-100 px-3 py-1 text-zinc-700 dark:border-zinc-700 dark:bg-black dark:text-zinc-400">
            {language?.toUpperCase() ?? 'unknown'}
          </span>
          <pre ref={textInput} className="w-full overflow-auto pt-6 pb-3">
            {tokens.map((line, i) => (
              <div className="table-row" key={i} {...getLineProps({ line, key: i })}>
                <span className="sticky left-0 table-cell w-6 min-w-[24px] select-none bg-zinc-100 pr-2 text-right text-zinc-400 dark:bg-black dark:text-zinc-600">
                  {i + 1}
                </span>
                <span className="table-cell pl-4">
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
