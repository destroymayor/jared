import { useRef, useState } from 'react';

import { useTheme } from 'next-themes';

import Highlight, { defaultProps } from 'prism-react-renderer';
import vsDark from 'prism-react-renderer/themes/vsDark';
import vsLight from 'prism-react-renderer/themes/github';

import { DuplicateIcon, CheckIcon } from '@heroicons/react/outline';

const CodeBlock = ({ children, className }) => {
  const textInput = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const language = className.replace(/language-/, '');
  const { theme } = useTheme();

  const onEnter = () => setHovered(true);

  const onExit = () => {
    setHovered(false);
    setCopied(false);
  };

  const onCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(textInput.current.textContent);
  };

  return (
    <Highlight
      {...defaultProps}
      theme={theme === 'dark' ? vsDark : vsLight}
      code={children}
      language={language}
    >
      {({ tokens, getLineProps, getTokenProps }) => (
        <div
          className="relative flex flex-col items-start my-5 border border-gray-400 rounded-md pr-14 dark:border-gray-700"
          onMouseEnter={onEnter}
          onMouseLeave={onExit}
        >
          <button
            aria-label="Copy code"
            type="button"
            onClick={onCopy}
            className={`absolute p-1 transition duration-150 ease-in-out rounded-md right-2 top-3 text-gray-500 hover:bg-gray-300 dark:text-gray-300 dark:hover:bg-gray-600 ${
              copied && 'text-green-600 dark:text-green-600'
            } ${hovered ? 'visible' : 'invisible'}`}
          >
            {copied ? <CheckIcon className="w-8 h-8" /> : <DuplicateIcon className="w-8 h-8" />}
          </button>

          <pre ref={textInput} className="p-5 overflow-auto w-[95vw] sm:max-w-xl">
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
};

export default CodeBlock;
