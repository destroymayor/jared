import { useEffect } from 'react';

import { useTheme } from 'next-themes';

export default function Giscus() {
  const { resolvedTheme } = useTheme();

  const theme = resolvedTheme === 'dark' ? 'transparent_dark' : 'light';

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
    script.setAttribute('data-strict', 0);
    script.setAttribute('data-reactions-enabled', 1);
    script.setAttribute('data-emit-metadata', 0);
    script.setAttribute('data-input-position', 'top');
    script.setAttribute('data-theme', theme);
    script.setAttribute('data-lang', 'en');

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [theme]);

  return <div className="giscus min-h-[600px]"></div>;
}
