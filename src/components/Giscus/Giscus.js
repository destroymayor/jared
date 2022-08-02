import { useEffect } from 'react';

import { useRouter } from 'next/router';

export default function Giscus() {
  const router = useRouter();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';

    script.setAttribute('data-repo', 'destroymayor/guestbook');
    script.setAttribute('data-repo-id', 'R_kgDOHwPSeA');
    script.setAttribute('data-category', 'General');
    script.setAttribute('data-category-id', 'DIC_kwDOHwPSeM4CQkUo');
    script.setAttribute('data-mapping', 'title');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'top');
    script.setAttribute('data-theme', 'transparent_dark');
    script.setAttribute('data-lang', 'en');

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [router]);

  return <div className="giscus"></div>;
}
