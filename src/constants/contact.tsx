import { Icons } from '@/components/icons';
import { Mail } from 'lucide-react';

export const CONTACT = {
    MAIL: {
        link: 'mailto:kuil5230@gmail.com',
        title: 'kuil5230@gmail.com',
        label: 'Gmail',
        icon: <Mail className="h-full w-full text-zinc-600 dark:text-zinc-300" />,
    },
    GITHUB: {
        link: 'https://github.com/destroymayor',
        title: '/destroymayor',
        label: 'Github',
        icon: <Icons.gitHub className="h-full w-full text-zinc-600 dark:text-zinc-300" />,
    },
    X: {
        link: 'https://x.com/destroymayor',
        title: '@destroymayor',
        label: 'X',
        icon: <Icons.twitter className="h-full w-full fill-black dark:fill-zinc-50" />,
    },
};

const data = Object.values(CONTACT);

export default data;
