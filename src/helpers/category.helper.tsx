import { CSSIcon, JavaScriptIcon, ReactWhiteIcon, GitIcon } from '@/components/Icons';

export const SNIPPET_CATEGORIES = [
  { label: 'CSS', slug: 'css', icon: <CSSIcon /> },
  { label: 'JavaScript', slug: 'javascript', icon: <JavaScriptIcon /> },
  { label: 'React Hook', slug: 'react-hook', icon: <ReactWhiteIcon className="text-sky-500" /> },
  {
    label: 'React Component',
    slug: 'react-component',
    icon: <ReactWhiteIcon className="text-sky-500" />,
  },
  { label: 'Git', slug: 'git', icon: <GitIcon className="text-orange-600" /> },
];

export const getCategoryFormatted = (categorySlug: string) => {
  const ALL_CATS = [...SNIPPET_CATEGORIES];
  const category = ALL_CATS.find((category) => category.slug === categorySlug);

  return category;
};
