import { useTheme } from 'next-themes';

import Highlight, { defaultProps } from 'prism-react-renderer';
import vsDark from 'prism-react-renderer/themes/vsDark';
import vsLight from 'prism-react-renderer/themes/github';

const CodeBlock = ({ children, className }) => {
  const language = className.replace(/language-/, '');
  const { theme } = useTheme();

  return (
    <Highlight
      {...defaultProps}
      theme={theme === 'dark' ? vsDark : vsLight}
      code={children}
      language={language}
    >
      {({ tokens, getLineProps, getTokenProps }) => (
        <div className="flex flex-col items-start my-1">
          <div className="self-end px-3 py-1 mx-5 text-gray-700 bg-gray-300 rounded-t-lg dark:text-gray-200 dark:bg-gray-700 ">
            {language.toUpperCase()}
          </div>
          <pre
            className="p-5 overflow-scroll bg-gray-300 rounded-md dark:bg-gray-700 md:max-w-2xl md:w-full"
            style={{ width: '95vw' }}
          >
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
