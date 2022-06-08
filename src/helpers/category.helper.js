import { CSSIcon, JavaScriptIcon, ReactWhiteIcon, GitIcon } from '@/components/Icons';

export const SNIPPET_CATEGORIES = [
  { slug: 'css', label: 'CSS', icon: <CSSIcon /> },
  { slug: 'javascript', label: 'JavaScript', icon: <JavaScriptIcon /> },
  { slug: 'react-hook', label: 'React Hook', icon: <ReactWhiteIcon className="text-sky-500" /> },
  {
    slug: 'react-component',
    label: 'React Component',
    icon: <ReactWhiteIcon className="text-sky-500" />,
  },
  { slug: 'git', label: 'Git', icon: <GitIcon className="text-orange-600" /> },
];

export const getCategoryFormatted = (categorySlug) => {
  const category = SNIPPET_CATEGORIES.find((category) => category.slug === categorySlug);

  return category;
};
