import Highlight, { defaultProps } from 'prism-react-renderer';

const CodeBlock = ({ children, className }) => {
  const language = className.replace(/language-/, '');

  return (
    <Highlight {...defaultProps} code={children} language={language}>
      {({ tokens, getLineProps, getTokenProps }) => {
        return (
          <div className="flex flex-col items-start">
            <div className="self-end px-3 py-1 mx-5 text-gray-200 bg-gray-700 rounded-t-lg ">
              {language.toUpperCase()}
            </div>
            <pre className="w-screen p-5 overflow-scroll bg-gray-700 rounded-md md:w-full">
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          </div>
        );
      }}
    </Highlight>
  );
};

export default CodeBlock;
