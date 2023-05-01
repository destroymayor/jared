'use client';

import { useEffect } from 'react';

import { useTheme } from 'next-themes';

type GiscusProp = {
  repo: string;
  repoId: string;
  category: string;
  categoryId: string;
  mapping: string;
  loading?: 'eager' | 'lazy';
};

export default function Giscus(props: GiscusProp) {
  const { repo, repoId, category, categoryId, mapping, loading = 'lazy' } = props;
  const { resolvedTheme } = useTheme();

  const theme = resolvedTheme === 'dark' ? 'transparent_dark' : 'light';

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';

    script.setAttribute('data-repo', repo);
    script.setAttribute('data-repo-id', repoId);
    script.setAttribute('data-category', category);
    script.setAttribute('data-category-id', categoryId);
    script.setAttribute('data-mapping', mapping);
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'top');
    script.setAttribute('data-theme', theme);
    script.setAttribute('data-loading', loading);
    script.setAttribute('data-lang', 'en');

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [category, categoryId, loading, mapping, repo, repoId, theme]);

  return <div className="giscus pb-10"></div>;
}
