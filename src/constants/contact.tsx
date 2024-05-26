import { MailIcon, GithubOutlineIcon, XIcon } from '@/components/Icons';

const CONTACT = {
    MAIL: {
        link: 'mailto:kuil5230@gmail.com',
        title: 'kuil5230@gmail.com',
        label: 'Gmail',
        icon: <MailIcon />,
    },
    GITHUB: {
        link: 'https://github.com/destroymayor',
        title: '/destroymayor',
        label: 'Github',
        icon: <GithubOutlineIcon />,
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
