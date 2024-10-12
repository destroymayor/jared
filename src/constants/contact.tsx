import { Icons } from '@/components/icons';
import { Mail } from 'lucide-react';

const CONTACT = {
    MAIL: {
        link: 'mailto:kuil5230@gmail.com',
        title: 'kuil5230@gmail.com',
        label: 'Gmail',
        icon: <Mail className="w-6 h-6" />,
    },
    GITHUB: {
        link: 'https://github.com/destroymayor',
        title: '/destroymayor',
        label: 'Github',
        icon: <Icons.gitHub className="w-6 h-6 fill-black dark:fill-zinc-50" />,
    },
    X: {
        link: 'https://x.com/destroymayor',
        title: '@destroymayor',
        label: 'X',
        icon: <Icons.twitter className="w-5 h-5 fill-black dark:fill-zinc-50" />,
    },
};

const data = Object.values(CONTACT);

export default data;
