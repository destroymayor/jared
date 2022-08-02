import Script from 'next/script';

export default function Giscus() {
  return (
    <div className="giscus">
      <Script
        src="https://giscus.app/client.js"
        data-repo="destroymayor/guestbook"
        data-repo-id="R_kgDOHwPSeA"
        data-category="General"
        data-category-id="DIC_kwDOHwPSeM4CQkUo"
        data-mapping="title"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="top"
        data-theme="transparent_dark"
        data-lang="en"
        crossOrigin="anonymous"
        async
      ></Script>
    </div>
  );
}
