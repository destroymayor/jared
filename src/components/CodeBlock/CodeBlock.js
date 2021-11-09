import { useRef } from 'react';

import { useTheme } from 'next-themes';

import Highlight, { defaultProps } from 'prism-react-renderer';
import vsDark from 'prism-react-renderer/themes/vsDark';
import vsLight from 'prism-react-renderer/themes/github';

const CodeBlock = ({ children, className }) => {
  const textInput = useRef(null);

  const language = className.replace(/language-/, '');
  const { resolvedTheme } = useTheme();

  return (
    <Highlight
      {...defaultProps}
      theme={resolvedTheme === 'dark' ? vsDark : vsLight}
      code={children}
      language={language}
    >
      {({ tokens, getLineProps, getTokenProps }) => (
        <div className="flex flex-col items-start px-2 my-5 bg-gray-200 rounded-md shadow-xl dark:bg-gray-800">
          <pre ref={textInput} className="w-full px-2 pt-6 pb-3 overflow-auto">
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                <span className="inline-block w-10 text-gray-500">{i + 1}</span>
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
};

export default CodeBlock;
