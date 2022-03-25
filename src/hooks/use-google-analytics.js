import { useEffect } from 'react';

const ga4Id = 'G-QMK89TWYXF';

const useGoogleAnalytics = () => {
  const isProduction = process.env.NODE_ENV === 'production';

  const appendCDN = () => {
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${ga4Id}`;
    script.async = true;
    document.head.appendChild(script);
  };

  const appendGTag = () => {
    const script = document.createElement('script');

    const string = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${ga4Id}');
    `;

    script.innerHTML = string;
    document.head.appendChild(script);
  };

  const initializeGA = () => {
    appendCDN();
    appendGTag();
  };

  useEffect(() => {
    if (isProduction && !window.GA4_INITIALIZED) {
      initializeGA();

      window.GA4_INITIALIZED = true;
    }
  }, []);
};

export default useGoogleAnalytics;
