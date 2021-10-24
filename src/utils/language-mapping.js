import { CSSIcon, JavaScriptIcon, ReactIcon } from '@/components/Common/Icons';

const languageMapping = {
  css: {
    icon: <CSSIcon className="w-8 h-8 rounded-full" />,
    styles: {
      bg: '#1b73ba',
      color: '#fcfcfc',
    },
  },
  javascript: {
    icon: <JavaScriptIcon className="w-8 h-8 rounded-full" />,
    styles: {
      bg: '#f0db4f',
      color: '#222222',
    },
  },
  'react-hooks': {
    icon: <ReactIcon className="w-8 h-8 rounded-full" />,
    styles: {
      bg: '#61dafb',
      color: '#222222',
    },
  },
  'react-components': {
    icon: <ReactIcon className="w-8 h-8 rounded-full" />,
    styles: {
      bg: '#61dafb',
      color: '#222222',
    },
  },
};

export default languageMapping;
