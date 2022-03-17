import { useRef } from 'react';

import { useTheme } from 'next-themes';

import Highlight, { defaultProps } from 'prism-react-renderer';
import vsDark from 'prism-react-renderer/themes/vsDark';
import github from 'prism-react-renderer/themes/github';

export default function CodeBlock({ children, className }) {
  const textInput = useRef(null);

  const language = className.replace(/language-/, '');
  const { resolvedTheme } = useTheme();

  return (
    <Highlight
      {...defaultProps}
      theme={resolvedTheme === 'dark' ? vsDark : github}
      code={children}
      language={language}
    >
      {({ tokens, getLineProps, getTokenProps }) => (
        <div className="my-5 flex flex-col items-start rounded-md bg-zinc-100 px-2 dark:bg-zinc-900">
          <pre ref={textInput} className="w-full overflow-auto px-2 pt-6 pb-3">
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  );
}
