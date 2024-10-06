import { XIcon } from '@/components/Icons';
import { Mail, Github } from 'lucide-react';

const CONTACT = {
    MAIL: {
        link: 'mailto:kuil5230@gmail.com',
        title: 'kuil5230@gmail.com',
        label: 'Gmail',
        icon: <Mail className='w-6 h-6' />,
    },
    GITHUB: {
        link: 'https://github.com/destroymayor',
        title: '/destroymayor',
        label: 'Github',
        icon: <Github className='w-6 h-6' />,
    },
    X: {
        link: 'https://x.com/destroymayor',
        title: '@destroymayor',
        label: 'X',
        icon: <XIcon className='w-6 h-6' />,
    },
};

const data = Object.values(CONTACT);

export default data;
