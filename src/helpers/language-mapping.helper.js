import { CSSIcon, JavaScriptIcon, ReactIcon } from '@/components/Common/Icons';

const languageMapping = {
  css: {
    icon: <CSSIcon />,
    styles: {
      bg: '#1b73ba',
      color: '#fcfcfc',
    },
  },
  javascript: {
    icon: <JavaScriptIcon />,
    styles: {
      bg: '#f0db4f',
      color: '#222222',
    },
  },
  'react-hooks': {
    icon: <ReactIcon />,
    styles: {
      bg: 'rgba(8,126,164,1)',
      color: '#fcfcfc',
    },
  },
  'react-components': {
    icon: <ReactIcon />,
    styles: {
      bg: 'rgba(8,126,164,1)',
      color: '#fcfcfc',
    },
  },
};

export default languageMapping;
