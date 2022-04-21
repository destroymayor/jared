import { CSSIcon, JavaScriptIcon, ReactIcon } from '@/components/Common/Icons';

export const SNIPPET_CATEGORIES = [
  { slug: 'css', icon: <CSSIcon /> },
  { slug: 'javascript', icon: <JavaScriptIcon /> },
  { slug: 'react-hooks', icon: <ReactIcon /> },
  { slug: 'react-components', icon: <ReactIcon /> },
];

export const getCategoryFormatted = (categorySlug) => {
  const category = SNIPPET_CATEGORIES.find((category) => category.slug === categorySlug);

  return category;
};
