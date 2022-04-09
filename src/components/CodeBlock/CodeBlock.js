import { useRef } from 'react';

import Highlight, { defaultProps } from 'prism-react-renderer';
import vsDark from 'prism-react-renderer/themes/vsDark';

export default function CodeBlock({ children, className }) {
  const textInput = useRef(null);

  const language = className.replace(/language-/, '');

  return (
    <Highlight {...defaultProps} code={children} theme={vsDark} language={language}>
      {({ tokens, getLineProps, getTokenProps }) => (
        <div className="my-5 flex flex-col items-start rounded-xl bg-zinc-700 px-2 dark:border dark:border-zinc-700 dark:bg-black">
          <pre ref={textInput} className="w-full overflow-auto px-2 pt-6 pb-3">
            {tokens.map((line, i) => (
              <div className="table-row" key={i} {...getLineProps({ line, key: i })}>
                <span className="table-cell w-6 min-w-[24px] select-none text-right text-zinc-400 dark:text-zinc-600">
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
