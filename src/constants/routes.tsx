import { House, Camera, ChartNoAxesCombined, Package, MessageSquare, CodeIcon } from 'lucide-react';

const ROUTES = {
    HOME: {
        title: 'Home',
        pathname: '/',
        icon: <House size={20} />,
    },
    DASHBOARD: {
        title: 'Dashboard',
        pathname: '/dashboard',
        icon: <ChartNoAxesCombined size={20} />,
    },
    GUESTBOOK: {
        title: 'Guestbook',
        pathname: '/guestbook',
        icon: <MessageSquare size={20} />,
    },
    PHOTOS: {
        title: 'Photos',
        pathname: '/photos',
        icon: <Camera size={20} />,
    },
    PROJECTS: {
        title: 'Projects',
        pathname: '/projects',
        icon: <Package size={20} />,
    },
    SNIPPETS: {
        title: 'Snippets',
        pathname: '/snippets',
        icon: <CodeIcon size={20} />,
    },
    TWEETS: {
        title: 'Tweets',
        pathname: '/tweets',
        icon: <MessageSquare size={20} />,
    },
};

export default ROUTES;
