import Script from 'next/script';

const GA4 = () => {
  const gaId = 'G-6DQ2S4G7SW';

  if (process.env.NODE_ENV === 'development') return null;

  return (
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      onLoad={() => {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }

        gtag('js', new Date());
        gtag('config', gaId);
      }}
    />
  );
};

export default GA4;
