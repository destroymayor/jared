import { useRef } from 'react';

import Highlight, { defaultProps } from 'prism-react-renderer';
import dracula from 'prism-react-renderer/themes/dracula';

export default function CodeBlock({ children, className }) {
  const textInput = useRef(null);

  const language = className.replace(/language-/, '');

  return (
    <Highlight {...defaultProps} code={children} theme={dracula} language={language}>
      {({ tokens, getLineProps, getTokenProps }) => (
        <div className="my-5 flex flex-col items-start rounded-xl bg-zinc-700 px-2 dark:bg-zinc-900">
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
