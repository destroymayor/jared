import { XIcon } from '@/components/Icons';
import { Mail, Github } from 'lucide-react';

const CONTACT = {
    MAIL: {
        link: 'mailto:kuil5230@gmail.com',
        title: 'kuil5230@gmail.com',
        label: 'Gmail',
        icon: <Mail size={20} />,
    },
    GITHUB: {
        link: 'https://github.com/destroymayor',
        title: '/destroymayor',
        label: 'Github',
        icon: <Github size={20} />,
    },
    X: {
        link: 'https://x.com/destroymayor',
        title: '@destroymayor',
        label: 'X',
        icon: <XIcon />,
    },
};

const data = Object.values(CONTACT);

export default data;
