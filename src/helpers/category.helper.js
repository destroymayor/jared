import { CSSIcon, JavaScriptIcon, ReactIcon } from '@/components/Icons';

export const SNIPPET_CATEGORIES = [
  { slug: 'css', label: 'CSS', icon: <CSSIcon /> },
  { slug: 'javascript', label: 'JavaScript', icon: <JavaScriptIcon /> },
  { slug: 'react-hooks', label: 'Hooks', icon: <ReactIcon /> },
  { slug: 'react-components', label: 'Components', icon: <ReactIcon /> },
];

export const getCategoryFormatted = (categorySlug) => {
  const category = SNIPPET_CATEGORIES.find((category) => category.slug === categorySlug);

  return category;
};
