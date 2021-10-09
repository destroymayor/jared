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
        <div className="flex flex-col items-start my-5">
          <pre
            className="p-5 overflow-auto border border-gray-400 rounded-md dark:border-gray-700 md:max-w-2xl md:w-full"
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
