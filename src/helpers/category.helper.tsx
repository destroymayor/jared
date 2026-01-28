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

export function getCategoryFormatted(categorySlug: string) {
    return SNIPPET_CATEGORIES.find((category) => category.slug === categorySlug);
}
