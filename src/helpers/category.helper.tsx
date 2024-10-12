import { Icons } from '@/components/icons';

export const SNIPPET_CATEGORIES = [
    { label: 'CSS', slug: 'css', icon: <Icons.css /> },
    { label: 'JavaScript', slug: 'javascript', icon: <Icons.javascript /> },
    {
        label: 'React Hook',
        slug: 'react-hook',
        icon: <Icons.react className="text-sky-500" />,
    },
    {
        label: 'React Component',
        slug: 'react-component',
        icon: <Icons.react className="text-sky-500" />,
    },
    { label: 'Git', slug: 'git', icon: <Icons.git className="text-orange-600" /> },
];

export const getCategoryFormatted = (categorySlug: string) => {
    const ALL_CATS = [...SNIPPET_CATEGORIES];
    const category = ALL_CATS.find((category) => category.slug === categorySlug);

    return category;
};
