import Highlight, { defaultProps } from 'prism-react-renderer';
import vsDark from 'prism-react-renderer/themes/vsDark';

const CodeBlock = ({ children, className }) => {
  const language = className.replace(/language-/, '');

  return (
    <Highlight {...defaultProps} theme={vsDark} code={children} language={language}>
      {({ tokens, getLineProps, getTokenProps }) => (
        <div className="flex flex-col items-start my-5">
          <div className="self-end px-3 py-1 mx-5 text-gray-200 bg-gray-700 rounded-t-lg ">
            {language.toUpperCase()}
          </div>
          <pre
            className="p-5 overflow-scroll bg-gray-700 rounded-md md:max-w-2xl md:w-full"
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
